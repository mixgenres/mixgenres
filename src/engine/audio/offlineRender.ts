import * as lamejsModule from '@breezystack/lamejs';
import { Mp3Encoder } from '@breezystack/lamejs';
import OfflineRenderer from '@elemaudio/offline-renderer';
import type { Performance, PerfNote, PerfCC } from '../sequencing/perform';
import { getLuthierModelForInstrument } from './LuthierAPI';
import { resolveDialect, performanceModeForContext } from '../theory/dialects';
import { ROOMS, roomFor, createMasterChain } from './mixer';
import {
  defaultTrackParams,
  modelForInstrument,
  makeupGainFor,
  renderTrack,
  renderMaster,
  midiToFreq,
  type TrackParams,
  type VoiceState,
  type RoomParams,
} from '../elementary/elementaryEngine';

const Mp3EncoderClass: any =
  Mp3Encoder ||
  (lamejsModule as any).Mp3Encoder ||
  (lamejsModule as any).default?.Mp3Encoder ||
  (lamejsModule as any).default;

type RenderEvent =
  | { sample: number; kind: 'on'; note: PerfNote }
  | { sample: number; kind: 'off'; trackId: string; midi: number }
  | { sample: number; kind: 'cc'; cc: PerfCC }
  | { sample: number; kind: 'bend'; trackId: string; value: number };

export async function renderPerformanceToMp3(
  perf: Performance,
  options: {
    selectedTrackIds?: string[];
    trackInstruments: Map<string, string>;
    roomId: string;
    worldId?: string;
    styleId?: string;
  },
  onProgress?: (frac: number) => void,
): Promise<Blob> {
  const sampleRate = 44100;
  const duration = Math.max(1, perf.duration + (perf.tail || 3));
  const totalSamples = Math.ceil(duration * sampleRate);
  const selected = options.selectedTrackIds?.length ? new Set(options.selectedTrackIds) : null;
  const trackIds = [...new Set(perf.notes.map(n => n.trackId))]
    .filter(id => !selected || selected.has(id));

  if (onProgress) onProgress(0.03);

  const trackParamsMap = new Map<string, TrackParams>();
  const trackVoicesMap = new Map<string, VoiceState[]>();

  for (const trackId of trackIds) {
    const instrumentId = options.trackInstruments.get(trackId) || trackId;
    const luthier = getLuthierModelForInstrument(instrumentId);
    const model = modelForInstrument(instrumentId, luthier);
    const params = defaultTrackParams(instrumentId, luthier, model);
    params.performanceMode = performanceModeForContext(options.worldId ?? '', options.styleId ?? '');
    const dialect = resolveDialect(instrumentId, options.worldId ?? '', options.styleId ?? '');
    if (dialect) {
      params.dialect = dialect.id;
      params.performanceMode = dialect.performanceMode;
      if (dialect.pluckPositionOverride !== undefined) params.pluckPosition = dialect.pluckPositionOverride;
      if (dialect.bowPressureOverride !== undefined) params.bowPressure = dialect.bowPressureOverride;
      if (dialect.contactPointOverride !== undefined) params.contact = dialect.contactPointOverride;
      if (dialect.brightnessMultiplier !== undefined) params.brightness *= dialect.brightnessMultiplier;
      if (dialect.decayMultiplier !== undefined) params.decay *= dialect.decayMultiplier;
      if (dialect.bendGlideMs !== undefined) params.bendGlideMs = dialect.bendGlideMs;
    }
    trackParamsMap.set(trackId, params);
    trackVoicesMap.set(trackId, []);
  }

  const room = (options.roomId ? ROOMS.find(r => r.id === options.roomId) : null)
    || (options.worldId ? roomFor(options.worldId) : null)
    || ROOMS[1];
  const roomParams: RoomParams = {
    warmth: room.warmth,
    presence: room.presence,
    air: room.air,
    highPass: room.highPass,
    space: room.space,
    volume: 1.0,
    roomId: room.id,
  };

  const events: RenderEvent[] = [];
  for (const note of perf.notes) {
    if (selected && !selected.has(note.trackId)) continue;
    const start = Math.max(0, Math.round(note.time * sampleRate));
    const end = Math.min(totalSamples, Math.round((note.time + note.dur) * sampleRate));
    events.push({ sample: start, kind: 'on', note });
    events.push({ sample: end, kind: 'off', trackId: note.trackId, midi: note.midi });
    for (const bend of note.pitchBend ?? []) {
      events.push({ sample: Math.max(0, start + Math.round(bend.offset * sampleRate)), kind: 'bend', trackId: note.trackId, value: bend.value });
    }
    if (note.pitchBend?.length) {
      events.push({ sample: end, kind: 'bend', trackId: note.trackId, value: 8192 });
    }
  }
  for (const cc of perf.ccs) {
    if (!selected || selected.has(cc.trackId)) {
      events.push({ sample: Math.max(0, Math.round(cc.time * sampleRate)), kind: 'cc', cc });
    }
  }
  events.sort((a, b) => a.sample - b.sample);

  const core = new OfflineRenderer();
  await core.initialize({ numInputChannels: 0, numOutputChannels: 2 });

  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);
  let eventIndex = 0;

  const syncGraph = async () => {
    const trackSignals: { left: any; right: any }[] = [];
    for (const [tid, params] of trackParamsMap.entries()) {
      const voices = trackVoicesMap.get(tid) ?? [];
      trackSignals.push(renderTrack(tid, voices, params));
    }
    const masterSig = renderMaster(trackSignals, roomParams);
    await core.render(masterSig.left, masterSig.right);
  };

  await syncGraph();

  const BLOCK_SIZE = 512;
  const outBlock = [new Float32Array(BLOCK_SIZE), new Float32Array(BLOCK_SIZE)];
  let cursor = 0;

  while (cursor < totalSamples) {
    let graphDirty = false;

    while (eventIndex < events.length && events[eventIndex].sample <= cursor) {
      const event = events[eventIndex++];
      const trackId = event.kind === 'on' ? event.note.trackId : event.kind === 'cc' ? event.cc.trackId : event.trackId;
      const params = trackParamsMap.get(trackId);
      const voices = trackVoicesMap.get(trackId);

      if (params && voices) {
        if (event.kind === 'on') {
          const midi = event.note.midi;
          const velocity = Math.max(0.05, Math.min(1, event.note.vel / 127));
          const art = event.note.articulation?.toLowerCase() ?? '';
          let actionType: any = 'pluck';
          if (art.includes('arco') || art.includes('bowed')) actionType = 'bow_drag';
          else if (art.includes('rasgue') || art.includes('abanico')) actionType = 'abanico';
          else if (art.includes('golpe') || art.includes('tap')) actionType = 'golpe';
          else if (art.includes('slap')) actionType = 'slap';
          else if (art.includes('mute')) actionType = 'mute';

          const baseFreq = event.note.frequencyHz ?? midiToFreq(midi);
          let voice = voices.find(v => v.note === midi && v.gate === 1);
          if (voice) {
            voice.velocity = velocity;
            voice.gate = 1;
            voice.actionType = actionType;
            voice.technique = event.note.articulation;
            voice.frequencyHz = baseFreq;
            (voice as any).baseFrequencyHz = baseFreq;
          } else {
            let freeVoice = voices.find(v => v.gate === 0);
            if (!freeVoice) {
              if (voices.length >= 8) {
                freeVoice = voices[0];
              } else {
                freeVoice = { note: midi, velocity, gate: 1, id: `${trackId}_${midi}` };
                voices.push(freeVoice);
              }
            }
            freeVoice.note = midi;
            freeVoice.velocity = velocity;
            freeVoice.gate = 1;
            freeVoice.actionType = actionType;
            freeVoice.technique = event.note.articulation;
            freeVoice.frequencyHz = baseFreq;
            (freeVoice as any).baseFrequencyHz = baseFreq;
          }
          graphDirty = true;
        } else if (event.kind === 'off') {
          const voice = voices.find(v => v.note === event.midi && v.gate === 1);
          if (voice) {
            voice.gate = 0;
            if ((voice as any).baseFrequencyHz) {
              voice.frequencyHz = (voice as any).baseFrequencyHz;
            }
            graphDirty = true;
          }
        } else if (event.kind === 'bend') {
          const semitones = ((event.value - 8192) / 8192) * 2;
          const bendRatio = Math.pow(2, semitones / 12);
          for (const v of voices) {
            if (v.gate === 1) {
              const base = (v as any).baseFrequencyHz ?? v.frequencyHz ?? midiToFreq(v.note);
              (v as any).baseFrequencyHz = base;
              v.frequencyHz = base * bendRatio;
              graphDirty = true;
            }
          }
        } else if (event.kind === 'cc') {
          const norm = event.cc.value / 127;
          if (event.cc.cc === 7 || event.cc.cc === 11) {
            const isElectronic = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test((params.instrumentId || '').toLowerCase());
            const effectiveModelForGain = isElectronic ? 9 : params.model;
            const baseGain = makeupGainFor(effectiveModelForGain, params.instrumentId);
            params.volume = Math.max(0.01, Math.min(35, norm * baseGain));
          }
          else if (event.cc.cc === 10) params.pan = norm;
          else if (event.cc.cc === 74) params.brightness = norm;
          else if (event.cc.cc === 16) params.articulation = norm;
          else if (event.cc.cc === 17) params.contact = norm;
          else if (event.cc.cc === 18) params.mute = norm;
          else if (event.cc.cc === 19) params.bowPressure = norm;
          else if (event.cc.cc === 20) params.bowVelocity = norm;
          else if (event.cc.cc === 21) params.bodyTap = norm;
          else if (event.cc.cc === 22) params.pluckPosition = norm;
          else if (event.cc.cc === 24) params.pressure = norm;
          else if (event.cc.cc === 25) params.resonance = norm;
          graphDirty = true;
        }
      }
    }

    if (graphDirty) {
      await syncGraph();
    }

    const frames = Math.min(BLOCK_SIZE, totalSamples - cursor);
    core.process([], outBlock);

    for (let i = 0; i < frames; i++) {
      left[cursor + i] = outBlock[0][i] || 0;
      right[cursor + i] = outBlock[1][i] || 0;
    }

    cursor += frames;

    if (onProgress && cursor % (BLOCK_SIZE * 32) === 0) {
      onProgress(0.05 + (cursor / totalSamples) * 0.62);
    }
  }

  if (onProgress) onProgress(0.70);

  const length = Math.max(1, totalSamples);

  let CtxClass: typeof OfflineAudioContext;
  if (typeof OfflineAudioContext !== 'undefined') {
    CtxClass = OfflineAudioContext;
  } else if (typeof (globalThis as any).webkitOfflineAudioContext !== 'undefined') {
    CtxClass = (globalThis as any).webkitOfflineAudioContext;
  } else {
    const pkg = 'node-web-audio-api';
    const nodeWebAudio = await import(/* @vite-ignore */ pkg);
    CtxClass = nodeWebAudio.OfflineAudioContext as unknown as typeof OfflineAudioContext;
  }

  const offlineCtx: OfflineAudioContext = new CtxClass({
    numberOfChannels: 2,
    length,
    sampleRate,
  });

  const sourceBuffer = offlineCtx.createBuffer(2, length, sampleRate);
  sourceBuffer.getChannelData(0).set(left);
  sourceBuffer.getChannelData(1).set(right);

  const source = offlineCtx.createBufferSource();
  source.buffer = sourceBuffer;

  const offlineChain = createMasterChain(offlineCtx, room);
  source.connect(offlineChain.input);
  source.start(0);

  if (onProgress) onProgress(0.76);

  const rendered = await offlineCtx.startRendering();
  offlineChain.dispose();

  if (onProgress) onProgress(0.85);

  const renderedLeft = rendered.getChannelData(0);
  const renderedRight = rendered.numberOfChannels > 1 ? rendered.getChannelData(1) : renderedLeft;

  // Measure peak level across rendered audio to avoid digital overs/clipping
  let maxPeak = 0;
  for (let i = 0; i < length; i++) {
    const absL = Math.abs(renderedLeft[i]);
    const absR = Math.abs(renderedRight[i]);
    if (absL > maxPeak) maxPeak = absL;
    if (absR > maxPeak) maxPeak = absR;
  }
  // Target -0.3 dBFS true peak ceiling (0.965)
  const normScalar = maxPeak > 0.965 ? 0.965 / maxPeak : 1.0;

  // Keep a short fade-in/out (5–10 ms) purely to avoid a sample-0 click
  const fadeInSamples = Math.min(length, Math.round(sampleRate * 0.008));
  const fadeOutSamples = Math.min(length, Math.round(sampleRate * 0.008));

  const leftInt16 = new Int16Array(length);
  const rightInt16 = new Int16Array(length);

  for (let i = 0; i < length; i++) {
    let fade = 1;
    if (i < fadeInSamples) fade *= i / Math.max(1, fadeInSamples);
    if (i >= length - fadeOutSamples) fade *= (length - i) / Math.max(1, fadeOutSamples);

    const lSample = renderedLeft[i] * normScalar * fade;
    const rSample = renderedRight[i] * normScalar * fade;

    leftInt16[i] = Math.max(-32768, Math.min(32767, Math.round(lSample * 32767)));
    rightInt16[i] = Math.max(-32768, Math.min(32767, Math.round(rSample * 32767)));
  }

  const encoder = new Mp3EncoderClass(2, sampleRate, 192);
  const mp3Data: Uint8Array[] = [];
  const chunkSize = 1152;

  for (let i = 0; i < length; i += chunkSize) {
    const mp3buf = encoder.encodeBuffer(
      leftInt16.subarray(i, Math.min(i + chunkSize, length)),
      rightInt16.subarray(i, Math.min(i + chunkSize, length)),
    );
    if (mp3buf?.length) mp3Data.push(mp3buf);
    if (onProgress) onProgress(0.85 + (i / length) * 0.14);
  }

  const flush = encoder.flush();
  if (flush?.length) mp3Data.push(flush);
  if (!mp3Data.length) throw new Error('MP3 encoder returned no audio frames');
  onProgress?.(1);
  return new Blob(mp3Data, { type: 'audio/mpeg' });
}
