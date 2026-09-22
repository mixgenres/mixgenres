import WebRenderer from '@elemaudio/web-renderer';
import type { LuthierPhysicalParameters } from './LuthierAPI';
import type { RoomPreset } from './mixer';
import { ROOMS } from './mixer';
import { CulturalAcousticEvent } from './CulturalAcousticEvent';
import {
  defaultTrackParams,
  defaultRoomParams,
  modelForInstrument,
  renderTrack,
  renderMaster,
  styleFlavorForGenre,
  type TrackParams,
  type VoiceState,
  type RoomParams,
} from './elementary/elementaryEngine';

import { resolveDialect, performanceModeForContext } from './dialects';

/**
 * Elementary Audio live engine.
 *
 * Replaces Faust with Elementary Audio graph rendering.
 * WebRenderer reconciles declaratively generated audio signal graphs.
 */
export class BandWorkletNode {
  public static readonly MAX_POLYPHONY = 8;

  private ctx!: AudioContext;
  private core!: InstanceType<typeof WebRenderer>;
  private audioNode!: AudioNode;
  private scheduledTimeouts: number[] = [];

  public activeWorldId = 'flamenco';
  public activeStyleId = '';

  private roomParams: RoomParams = defaultRoomParams();
  private trackParamsMap = new Map<string, TrackParams>();
  private trackVoicesMap = new Map<string, VoiceState[]>();

  setWorldAndStyle(worldId: string, styleId?: string) {
    this.activeWorldId = worldId;
    this.activeStyleId = styleId || '';
  }

  async initialize(context: AudioContext, room: RoomPreset = ROOMS[1], volume = 1): Promise<AudioNode> {
    this.ctx = context;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    this.core = new WebRenderer();
    
    this.audioNode = await this.core.initialize(context, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });
    this.audioNode.connect(context.destination);

    this.updateRoomParams(room, volume);
    this.syncGraph();
    return this.audioNode;
  }

  private updateRoomParams(room: RoomPreset, volume = 1) {
    this.roomParams = {
      warmth: room.warmth,
      presence: room.presence,
      air: room.air,
      highPass: room.highPass,
      space: room.space,
      volume,
    };
  }

  async setRoom(room: RoomPreset, volume = 1) {
    this.updateRoomParams(room, volume);
    this.syncGraph();
  }

  async setVolume(value: number) {
    this.roomParams.volume = Math.max(0, Math.min(2, value));
    this.syncGraph();
  }

  async prepareTracks(instruments: Map<string, string>) {
    for (const [trackId, instrumentId] of instruments) {
      const luthier = (await import('./LuthierAPI')).getLuthierModelForInstrument(instrumentId);
      const model = modelForInstrument(instrumentId, luthier);
      if (!this.trackParamsMap.has(trackId)) {
        const p = defaultTrackParams(instrumentId, luthier, model);
        const dialect = resolveDialect(instrumentId, this.activeWorldId, this.activeStyleId);
        p.performanceMode = performanceModeForContext(this.activeWorldId, this.activeStyleId);
        if (dialect) {
          p.dialect = dialect.id;
          p.performanceMode = dialect.performanceMode;
          if (dialect.pluckPositionOverride !== undefined) p.pluckPosition = dialect.pluckPositionOverride;
          if (dialect.bowPressureOverride !== undefined) p.bowPressure = dialect.bowPressureOverride;
          if (dialect.contactPointOverride !== undefined) p.contact = dialect.contactPointOverride;
          if (dialect.brightnessMultiplier !== undefined) p.brightness *= dialect.brightnessMultiplier;
          if (dialect.decayMultiplier !== undefined) p.decay *= dialect.decayMultiplier;
        }
        this.trackParamsMap.set(trackId, p);
      }
      if (!this.trackVoicesMap.has(trackId)) {
        this.trackVoicesMap.set(trackId, []);
      }
    }
    this.syncGraph();
  }

  private syncGraph() {
    if (!this.core) return;

    const trackSignals: { left: any; right: any }[] = [];

    for (const [trackId, params] of this.trackParamsMap.entries()) {
      const voices = this.trackVoicesMap.get(trackId) ?? [];
      const trackSig = renderTrack(trackId, voices, params);
      trackSignals.push(trackSig);
    }

    const masterSig = renderMaster(trackSignals, this.roomParams);
    this.core.render(masterSig.left, masterSig.right).catch(err => {
      console.warn('[Elementary] Render error:', err);
    });
  }

  postEvent(event: CulturalAcousticEvent, atTime?: number) {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    const now = this.ctx?.currentTime ?? 0;
    const delayMs = atTime && atTime > now + 0.002 ? (atTime - now) * 1000 : 0;

    if (delayMs > 2) {
      const tid = window.setTimeout(() => this.executeNoteOn(event), delayMs);
      this.scheduledTimeouts.push(tid);
    } else {
      this.executeNoteOn(event);
    }
  }

  private executeNoteOn(event: CulturalAcousticEvent) {
    const trackId = event.trackId;
    const instrumentId = event.luthierObjectId || trackId;
    const luthier = (event.luthier ?? {
      category: 'electro_acoustic_algorithmic',
      materialDensity: 0.5,
      tension: 0.5,
      bodyResonanceVolume: 10,
      decayTimeFactor: 2,
      harmonicRichness: 0.7,
    }) as LuthierPhysicalParameters;
    const model = modelForInstrument(instrumentId, luthier);

    if (!this.trackParamsMap.has(trackId)) {
      const p = defaultTrackParams(instrumentId, luthier, model);
      p.performanceMode = performanceModeForContext(this.activeWorldId, this.activeStyleId);
      const dialect = resolveDialect(instrumentId, this.activeWorldId, this.activeStyleId);
      if (dialect) {
        p.dialect = dialect.id;
        p.performanceMode = dialect.performanceMode;
        if (dialect.pluckPositionOverride !== undefined) p.pluckPosition = dialect.pluckPositionOverride;
        if (dialect.bowPressureOverride !== undefined) p.bowPressure = dialect.bowPressureOverride;
        if (dialect.contactPointOverride !== undefined) p.contact = dialect.contactPointOverride;
        if (dialect.brightnessMultiplier !== undefined) p.brightness *= dialect.brightnessMultiplier;
        if (dialect.decayMultiplier !== undefined) p.decay *= dialect.decayMultiplier;
      }
      this.trackParamsMap.set(trackId, p);
    }
    if (!this.trackVoicesMap.has(trackId)) {
      this.trackVoicesMap.set(trackId, []);
    }

    const exactMidi = 69 + 12 * Math.log2(Math.max(16, event.tuning.baseFrequencyHz) / 440);
    const midi = Math.round(exactMidi);
    const velocity = Math.max(0.05, Math.min(1, event.action?.force ?? 0.75));

    const voices = this.trackVoicesMap.get(trackId)!;
    let voice = voices.find(v => v.note === midi && v.gate === 1);

    if (voice) {
      voice.velocity = velocity;
      voice.gate = 1;
      voice.actionType = event.action?.type as any;
      voice.technique = event.action?.technique;
      voice.contactPoint = event.action?.contactPoint;
      voice.mass = event.action?.mass;
      voice.frequencyHz = event.tuning.baseFrequencyHz;
    } else {
      let freeVoice = voices.find(v => v.gate === 0);
      if (!freeVoice) {
        if (voices.length >= BandWorkletNode.MAX_POLYPHONY) {
          freeVoice = voices[0];
        } else {
          freeVoice = { note: midi, velocity, gate: 1, id: `${trackId}_${midi}` };
          voices.push(freeVoice);
        }
      }
      freeVoice.note = midi;
      freeVoice.velocity = velocity;
      freeVoice.gate = 1;
      freeVoice.actionType = event.action?.type as any;
      freeVoice.technique = event.action?.technique;
      freeVoice.contactPoint = event.action?.contactPoint;
      freeVoice.mass = event.action?.mass;
      freeVoice.frequencyHz = event.tuning.baseFrequencyHz;
    }

    this.syncGraph();
  }

  postRelease(id: string, atTime?: number) {
    const now = this.ctx?.currentTime ?? 0;
    const delayMs = atTime && atTime > now + 0.002 ? (atTime - now) * 1000 : 0;

    if (delayMs > 2) {
      const tid = window.setTimeout(() => this.executeNoteOff(id), delayMs);
      this.scheduledTimeouts.push(tid);
    } else {
      this.executeNoteOff(id);
    }
  }

  private executeNoteOff(id: string) {
    const split = id.lastIndexOf('_');
    if (split < 0) return;
    const trackId = id.slice(0, split);
    const midi = Number(id.slice(split + 1));
    if (!Number.isFinite(midi)) return;

    const voices = this.trackVoicesMap.get(trackId);
    if (!voices) return;

    const voice = voices.find(v => v.note === midi && v.gate === 1);
    if (voice) {
      voice.gate = 0;
      this.syncGraph();
    }
  }

  postCC(trackId: string, cc: number, value: number, atTime?: number) {
    const params = this.trackParamsMap.get(trackId);
    if (!params) return;

    const norm = value / 127;
    // The performance compiler emits normal mixer controls as MIDI CCs. These
    // must reach the actual track parameters; otherwise every track stays at
    // the same default gain and center pan, flattening the ensemble into a
    // single undifferentiated wall of sound.
    if (cc === 7) params.volume = norm;
    else if (cc === 10) params.pan = norm;
    else if (cc === 74) params.brightness = norm;
    else if (cc === 16) params.articulation = norm;
    else if (cc === 17) params.contact = norm;
    else if (cc === 18) params.mute = norm;
    else if (cc === 19) params.bowPressure = norm;
    else if (cc === 20) params.bowVelocity = norm;
    else if (cc === 21) params.bodyTap = norm;
    else if (cc === 22) params.pluckPosition = norm;
    else if (cc === 24) params.pressure = norm;
    else if (cc === 25) params.resonance = norm;

    this.syncGraph();
  }

  postBend(trackId: string, value: number, atTime?: number) {
    // Pitch bend support
  }

  clear() {
    for (const tid of this.scheduledTimeouts) {
      window.clearTimeout(tid);
    }
    this.scheduledTimeouts = [];

    for (const voices of this.trackVoicesMap.values()) {
      for (const v of voices) v.gate = 0;
    }
    this.syncGraph();
    this.trackVoicesMap.clear();
    this.trackParamsMap.clear();
  }

  dispose() {
    this.clear();
    try { this.audioNode?.disconnect(); } catch {}
  }
}
