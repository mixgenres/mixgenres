import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import * as lamejsModule from '@breezystack/lamejs';
import { Mp3Encoder } from '@breezystack/lamejs';
import OfflineRenderer from '@elemaudio/offline-renderer';
import type { Performance, PerfNote, PerfCC } from '../sequencing/perform';
import { getLuthierModelForInstrument } from './LuthierAPI';
import { resolveDialect, performanceModeForContext } from '../theory/dialects';
import { createMasterChain } from './mixer';
import { contractForGenre } from '../../data/styles/contracts';
import {
  defaultTrackParams,
  modelForInstrument,
  makeupGainFor,
  renderTrack,
  renderMaster,
  midiToFreq,
  type TrackParams,
  type VoiceState,
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
  | { sample: number; kind: 'bend'; trackId: string; value: number; targetMidi?: number };

export async function renderPerformanceToMp3(
  perf: Performance,
  options: {
    selectedTrackIds?: string[];
    trackInstruments: Map<string, string>;
    worldId?: string;
    styleId?: string;
    mixState?: {
      volume?: Record<string, number>;
      pan?: Record<string, number>;
      muted?: Record<string, boolean>;
      solo?: Record<string, boolean>;
      spotlight?: Record<string, string>;
    };
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
    const instDef = INSTRUMENTS_BY_ID[instrumentId];
    const luthier = instDef?.luthierPhysics ?? getLuthierModelForInstrument(instrumentId);
    const model = instDef?.elementaryModel ?? modelForInstrument(instrumentId, luthier);
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
    if (options.mixState) {
      if (options.mixState.volume?.[trackId] !== undefined) {
        params.volume = options.mixState.volume[trackId];
      }
      if (options.mixState.pan?.[trackId] !== undefined) {
        params.pan = options.mixState.pan[trackId];
      }
    }
    trackParamsMap.set(trackId, params);
    const voiceCount = Math.max(2, Math.min(16, instDef?.polyphony ?? (params.model === 4 ? 12 : params.model === 3 ? 4 : 8)));
    const preallocatedVoices: VoiceState[] = [];
    for (let vIdx = 0; vIdx < voiceCount; vIdx++) {
      preallocatedVoices.push({
        id: `offline-${trackId}-v${vIdx}`,
        gate: 0,
        frequencyHz: 440,
        note: 60,
        velocity: 0,
      });
    }    trackVoicesMap.set(trackId, preallocatedVoices);
  }

  const hasSolo = options.mixState?.solo && Object.values(options.mixState.solo).some(Boolean);

  const events: RenderEvent[] = [];
  for (const note of perf.notes) {
    if (selected && !selected.has(note.trackId)) continue;
    if (options.mixState) {
      if (hasSolo && !options.mixState.solo?.[note.trackId]) continue;
      if (!hasSolo && options.mixState.muted?.[note.trackId]) continue;
    }
    const start = Math.max(0, Math.round(note.time * sampleRate));
    const end = Math.min(totalSamples, Math.round((note.time + note.dur) * sampleRate));
    events.push({ sample: start, kind: 'on', note });
    events.push({ sample: end, kind: 'off', trackId: note.trackId, midi: note.midi });
    for (const bend of note.pitchBend ?? []) {
      events.push({ sample: Math.max(0, start + Math.round(bend.offset * sampleRate)), kind: 'bend', trackId: note.trackId, value: bend.value, targetMidi: note.midi });
    }
    if (note.pitchBend?.length) {
      const lastBend = note.pitchBend[note.pitchBend.length - 1];
      const unbendSample = Math.max(0, start + Math.round((lastBend.offset + 0.05) * sampleRate));
      if (unbendSample < end) {
        events.push({ sample: unbendSample, kind: 'bend', trackId: note.trackId, value: 8192, targetMidi: note.midi });
      }
    }
  }

  for (const cc of perf.ccs) {
    if (selected && !selected.has(cc.trackId)) continue;
    const sample = Math.max(0, Math.min(totalSamples, Math.round(cc.time * sampleRate)));
    events.push({ sample, kind: 'cc', cc });
  }

  events.sort((a, b) => a.sample - b.sample);

  const BLOCK_SIZE = 64;

  const core = new OfflineRenderer();
  await core.initialize({
    sampleRate,
    numInputChannels: 0,
    numOutputChannels: 2,
    blockSize: BLOCK_SIZE,
  });

  let mixCharacter: import('../../data/styles/contracts').MixCharacter | undefined;
  if (options.worldId) {
    try {
      mixCharacter = contractForGenre(options.worldId)?.timbreSpace?.mixCharacter;
    } catch {
      /* ignore */
    }
  }

  async function syncGraph() {
    const trackSignals: {
      left: any;
      right: any;
      trackId?: string;
      instrumentId?: string;
    }[] = [];

    for (const [trackId, params] of trackParamsMap.entries()) {
      const voices = trackVoicesMap.get(trackId) ?? [];
      const sig = renderTrack(trackId, voices, params);
      trackSignals.push({
        left: sig.left,
        right: sig.right,
        trackId,
        instrumentId: params.instrumentId,
      });
    }

    const masterSig = renderMaster(trackSignals, {
      highPass: 20,
      volume: 1.0,
      mixCharacter,
      genreId: options.worldId,
      bpm: perf.bars[0]?.bpm ?? 120,
    });
    await core.render(masterSig.left, masterSig.right);
  }

  await syncGraph();

  core.gc();

  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);
  const stepBlock = [new Float32Array(BLOCK_SIZE), new Float32Array(BLOCK_SIZE)];

  let eventIdx = 0;
  let cursor = 0;
  let eventSeq = 0;

  while (cursor < totalSamples) {
    const nextBlockLimit = cursor + BLOCK_SIZE;
    let graphDirty = false;

    while (eventIdx < events.length && events[eventIdx].sample < nextBlockLimit) {
      const event = events[eventIdx++];
      const eventTrackId = event.kind === 'on' ? event.note.trackId : event.kind === 'cc' ? event.cc.trackId : event.trackId;
      const params = trackParamsMap.get(eventTrackId);
      const voices = trackVoicesMap.get(eventTrackId);

      if (params && voices) {
        if (event.kind === 'on') {
          const noteMidi = event.note.midi;
          const instDef = INSTRUMENTS_BY_ID[params.instrumentId || ''];
          const isElectronic = instDef?.family === 'electronic' || instDef?.elementaryModel === 9 || /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test((params.instrumentId || '').toLowerCase());
          const effectiveModelForGain = isElectronic ? 9 : params.model;
          const baseGain = instDef?.makeupGain ?? makeupGainFor(effectiveModelForGain, params.instrumentId);

          const hitType = event.note.articulation;
          let hitGainMultiplier = 1.0;
          if (hitType === 'accent') hitGainMultiplier = 1.25;
          else if (hitType === 'ghost') hitGainMultiplier = 0.45;
          else if (hitType === 'snare' || hitType === 'rim' || hitType === 'slap') hitGainMultiplier = 1.1;

          const velScaled = Math.max(0.01, Math.min(1.0, event.note.vel / 127)) * hitGainMultiplier;
          params.volume = Math.max(0.01, Math.min(35, velScaled * baseGain));

          const articulationNorm = event.note.articulation === 'staccato' ? 0.9 : event.note.articulation === 'legato' ? 0.1 : 0.4;
          params.articulation = articulationNorm;
          params.decay = Math.max(0.1, Math.min(8.0, event.note.dur));

          // Round-robin allocation fixes the dropped/stuttering retriggered notes
          let voice = voices.reduce((oldest, current) => {
            const oSeq = (oldest as any).triggerSeq ?? 0;
            const cSeq = (current as any).triggerSeq ?? 0;
            return cSeq < oSeq ? current : oldest;
          }, voices[0]);

          if (voice.gate === 1) {
            voice.retriggerId = (voice.retriggerId || 0) + 1;
          }

          voice.note = noteMidi;
          const targetFreq = Math.max(20, event.note.frequencyHz ?? midiToFreq(noteMidi));
          voice.frequencyHz = targetFreq;
          (voice as any).baseFrequencyHz = targetFreq;
          (voice as any).triggerSeq = ++eventSeq;
          voice.velocity = velScaled;
          voice.gate = 1;

          // Copy envelope overrides
          voice.attack = (event.note as any).attack;
          voice.decay = (event.note as any).decay;
          voice.sustain = (event.note as any).sustain;
          voice.release = (event.note as any).release;

          graphDirty = true;
        } else if (event.kind === 'off') {
          const roundedMidi = Math.round(event.midi);
          const activeVoices = voices.filter(v => (v.note === event.midi || Math.round(v.note) === roundedMidi) && v.gate === 1);
          for (const voice of activeVoices) {
            voice.gate = 0;
            if ((voice as any).baseFrequencyHz) {
              voice.frequencyHz = (voice as any).baseFrequencyHz;
            }
            graphDirty = true;
          }
        } else if (event.kind === 'bend') {
          const activeVoices = voices.filter(v => v.gate === 1);
          if (activeVoices.length > 0) {
            const semitones = ((event.value - 8192) / 8192) * 2;
            const bendRatio = Math.pow(2, semitones / 12);
            const targetVoice = (event.targetMidi !== undefined
              ? activeVoices.find(v => Math.round(v.note) === Math.round(event.targetMidi!))
              : undefined)
              ?? activeVoices.reduce((latest, current) => {
                const tSeq = (current as any).triggerSeq ?? 0;
                const lSeq = (latest as any).triggerSeq ?? 0;
                return tSeq >= lSeq ? current : latest;
              }, activeVoices[0]);

            const base = (targetVoice as any).baseFrequencyHz ?? targetVoice.frequencyHz ?? midiToFreq(targetVoice.note);
            (targetVoice as any).baseFrequencyHz = base;
            targetVoice.frequencyHz = base * bendRatio;
            graphDirty = true;
          }
        } else if (event.kind === 'cc') {
          const norm = event.cc.value / 127;
          if (event.cc.cc === 7 || event.cc.cc === 11) {
            const instDef = INSTRUMENTS_BY_ID[params.instrumentId || ''];
            const isElectronic = instDef?.family === 'electronic' || instDef?.elementaryModel === 9 || /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test((params.instrumentId || '').toLowerCase());
            const effectiveModelForGain = isElectronic ? 9 : params.model;
            const baseGain = instDef?.makeupGain ?? makeupGainFor(effectiveModelForGain, params.instrumentId);
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
      core.gc();
    }

    core.process([], stepBlock);

    const frames = Math.min(BLOCK_SIZE, totalSamples - cursor);
    for (let i = 0; i < frames; i++) {
      left[cursor + i] = stepBlock[0][i] || 0;
      right[cursor + i] = stepBlock[1][i] || 0;
    }

    cursor += frames;

    if (onProgress && cursor % (BLOCK_SIZE * 256) === 0) {
      onProgress(0.05 + (cursor / totalSamples) * 0.62);
    }
  }

  core.gc();

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
  const offlineCtx: OfflineAudioContext = new CtxClass(2, length, sampleRate);

  const sourceBuffer = offlineCtx.createBuffer(2, length, sampleRate);
  sourceBuffer.getChannelData(0).set(left);
  sourceBuffer.getChannelData(1).set(right);

  const source = offlineCtx.createBufferSource();
  source.buffer = sourceBuffer;

  const offlineChain = createMasterChain(offlineCtx, mixCharacter, options.worldId);
  source.connect(offlineChain.input);
  source.start(0);

  if (onProgress) onProgress(0.76);

  const rendered = await offlineCtx.startRendering();
  offlineChain.dispose();

  if (onProgress) onProgress(0.85);

  const renderedLeft = rendered.getChannelData(0);
  const renderedRight = rendered.numberOfChannels > 1 ? rendered.getChannelData(1) : renderedLeft;

  let maxPeak = 0;
  for (let i = 0; i < length; i++) {
    const absL = Math.abs(renderedLeft[i]);
    const absR = Math.abs(renderedRight[i]);
    if (absL > maxPeak) maxPeak = absL;
    if (absR > maxPeak) maxPeak = absR;
  }
  const normScalar = maxPeak > 0.965 ? 0.965 / maxPeak : 1.0;

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