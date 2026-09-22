import * as lamejsModule from '@breezystack/lamejs';
import { Mp3Encoder } from '@breezystack/lamejs';
import OfflineRenderer from '@elemaudio/offline-renderer';
import type { Performance, PerfNote, PerfCC } from './perform';
import { getLuthierModelForInstrument } from './LuthierAPI';
import { resolveDialect, performanceModeForContext } from './dialects';
import { ROOMS } from './mixer';
import {
  defaultTrackParams,
  modelForInstrument,
  renderTrack,
  renderMaster,
  type TrackParams,
  type VoiceState,
  type RoomParams,
} from './elementary/elementaryEngine';

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
    }
    trackParamsMap.set(trackId, params);
    trackVoicesMap.set(trackId, []);
  }

  const room = ROOMS.find(r => r.id === options.roomId) || ROOMS[1];
  const roomParams: RoomParams = {
    warmth: room.warmth,
    presence: room.presence,
    air: room.air,
    highPass: room.highPass,
    space: room.space,
    volume: 1.0,
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

          let voice = voices.find(v => v.note === midi && v.gate === 1);
          if (voice) {
            voice.velocity = velocity;
            voice.gate = 1;
            voice.actionType = actionType;
            voice.technique = event.note.articulation;
            voice.frequencyHz = event.note.frequencyHz;
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
            freeVoice.frequencyHz = event.note.frequencyHz;
          }
          graphDirty = true;
        } else if (event.kind === 'off') {
          const voice = voices.find(v => v.note === event.midi && v.gate === 1);
          if (voice) {
            voice.gate = 0;
            graphDirty = true;
          }
        } else if (event.kind === 'cc') {
          const norm = event.cc.value / 127;
          // Keep offline bounce faithful to live playback for the core track
          // mixer controls emitted by the performance compiler.
          if (event.cc.cc === 7) params.volume = norm;
          else if (event.cc.cc === 10) params.pan = norm;
          else if (event.cc.cc === 74) params.brightness = norm;
          else if (event.cc.cc === 18) params.mute = norm;
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

  let maxPeak = 0;
  for (let i = 0; i < totalSamples; i++) {
    if (!Number.isFinite(left[i]) || !Number.isFinite(right[i])) {
      throw new Error('Offline render produced a non-finite sample');
    }
    maxPeak = Math.max(maxPeak, Math.abs(left[i]), Math.abs(right[i]));
  }

  if (maxPeak <= 0.00001) {
    // If quiet, apply gentle fallback gain scaling
    maxPeak = 0.001;
  }

  const scale = Math.min(1, 0.95 / maxPeak);
  const fadeInSamples = Math.min(totalSamples, Math.round(sampleRate * 0.008));
  const fadeOutSamples = Math.min(totalSamples, Math.round(sampleRate * 0.025));

  for (let i = 0; i < totalSamples; i++) {
    let fade = 1;
    if (i < fadeInSamples) fade *= i / Math.max(1, fadeInSamples);
    if (i >= totalSamples - fadeOutSamples) fade *= (totalSamples - i) / Math.max(1, fadeOutSamples);
    left[i] *= scale * fade;
    right[i] *= scale * fade;
  }

  const leftInt16 = new Int16Array(totalSamples);
  const rightInt16 = new Int16Array(totalSamples);
  for (let i = 0; i < totalSamples; i++) {
    leftInt16[i] = Math.max(-32768, Math.min(32767, Math.round(left[i] * 32767)));
    rightInt16[i] = Math.max(-32768, Math.min(32767, Math.round(right[i] * 32767)));
  }

  const encoder = new Mp3EncoderClass(2, sampleRate, 192);
  const mp3Data: Uint8Array[] = [];
  const chunkSize = 1152;

  for (let i = 0; i < totalSamples; i += chunkSize) {
    const mp3buf = encoder.encodeBuffer(
      leftInt16.subarray(i, Math.min(i + chunkSize, totalSamples)),
      rightInt16.subarray(i, Math.min(i + chunkSize, totalSamples)),
    );
    if (mp3buf?.length) mp3Data.push(mp3buf);
    if (onProgress) onProgress(0.67 + (i / totalSamples) * 0.32);
  }

  const flush = encoder.flush();
  if (flush?.length) mp3Data.push(flush);
  if (!mp3Data.length) throw new Error('MP3 encoder returned no audio frames');
  onProgress?.(1);
  return new Blob(mp3Data, { type: 'audio/mpeg' });
}
