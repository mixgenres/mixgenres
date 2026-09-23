import WebRenderer from '@elemaudio/web-renderer';
import type { LuthierPhysicalParameters } from './LuthierAPI';
import type { MasterChain } from './mixer';
import { createMasterChain } from './mixer';
import { CulturalAcousticEvent } from '../theory/CulturalAcousticEvent';
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

import { resolveDialect, performanceModeForContext } from '../theory/dialects';

/**
 * Elementary Audio live engine.
 * Natural acoustic/electronic physical model summation with conservative mastering.
 */
export class BandWorkletNode {
  public static readonly MAX_POLYPHONY = 8;

  private ctx!: AudioContext;
  private core!: InstanceType<typeof WebRenderer>;
  private audioNode!: AudioNode;
  private masterChain?: MasterChain;
  private scheduledTimeouts: number[] = [];

  public activeWorldId = 'flamenco';
  public activeStyleId = '';

  private masterVolume = 1.0;
  private trackParamsMap = new Map<string, TrackParams>();
  private trackVoicesMap = new Map<string, VoiceState[]>();

  setWorldAndStyle(worldId: string, styleId?: string) {
    this.activeWorldId = worldId;
    this.activeStyleId = styleId || '';
  }

  async initialize(context: AudioContext, volume = 1): Promise<AudioNode> {
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

    if (this.masterChain) {
      this.masterChain.dispose();
    }
    this.masterChain = createMasterChain(context);
    this.masterChain.setVolume(volume);
    this.audioNode.connect(this.masterChain.input);

    this.masterVolume = volume;
    this.syncGraph();
    return this.masterChain.output;
  }

  async setVolume(value: number) {
    this.masterVolume = Math.max(0, Math.min(2, value));
    this.masterChain?.setVolume(value);
    this.syncGraph();
  }

  /**
   * Pre-allocates all tracks in the track params and voices maps.
   */
  async prepareTracks(instrumentsMap: Map<string, string>) {
    for (const [trackId, instrumentId] of instrumentsMap.entries()) {
      if (!this.trackParamsMap.has(trackId)) {
        const dummyLuthier: LuthierPhysicalParameters = {
          category: 'electro_acoustic_algorithmic',
          materialDensity: 0.5,
          tension: 0.5,
          bodyResonanceVolume: 10,
          decayTimeFactor: 2,
          harmonicRichness: 0.7,
        };
        const model = modelForInstrument(instrumentId, dummyLuthier);
        const params = defaultTrackParams(instrumentId, dummyLuthier, model);
        params.performanceMode = performanceModeForContext(this.activeWorldId, this.activeStyleId);
        const dialect = resolveDialect(instrumentId, this.activeWorldId, this.activeStyleId);
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
        this.trackParamsMap.set(trackId, params);
        this.trackVoicesMap.set(trackId, []);
      }
    }
    this.syncGraph();
  }

  private syncGraph() {
    if (!this.core) return;

    const trackSignals: {
      left: any;
      right: any;
    }[] = [];

    for (const [trackId, params] of this.trackParamsMap.entries()) {
      const voices = this.trackVoicesMap.get(trackId) ?? [];
      const trackSig = renderTrack(trackId, voices, params);
      trackSignals.push(trackSig);
    }

    const masterSig = renderMaster(trackSignals, { highPass: 20, volume: this.masterVolume });
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
        if (dialect.bendGlideMs !== undefined) p.bendGlideMs = dialect.bendGlideMs;
      }
      this.trackParamsMap.set(trackId, p);
    }

    const params = this.trackParamsMap.get(trackId)!;
    const noteMidi = event.midi ?? 60;
    const isElectronic = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test((params.instrumentId || '').toLowerCase());
    const effectiveModelForGain = isElectronic ? 9 : params.model;
    const baseGain = makeupGainFor(effectiveModelForGain, params.instrumentId);

    const hitType = event.techniqueModifier;
    let hitGainMultiplier = 1.0;
    if (hitType === 'accent') hitGainMultiplier = 1.25;
    else if (hitType === 'ghost') hitGainMultiplier = 0.45;
    else if (hitType === 'snare' || hitType === 'rim' || hitType === 'slap') hitGainMultiplier = 1.1;

    const velScaled = Math.max(0.01, Math.min(1.0, (event.velocity ?? 90) / 127)) * hitGainMultiplier;
    params.volume = Math.max(0.01, Math.min(35, velScaled * baseGain));

    const articulationNorm = event.techniqueModifier === 'staccato' ? 0.9 : event.techniqueModifier === 'legato' ? 0.1 : 0.4;
    params.articulation = articulationNorm;
    params.decay = Math.max(0.1, Math.min(8.0, event.duration || 0.5));

    let voices = this.trackVoicesMap.get(trackId);
    if (!voices) {
      voices = [];
      this.trackVoicesMap.set(trackId, voices);
    }

    let voice = voices.find(v => v.note === noteMidi);
    if (!voice) {
      if (voices.length >= BandWorkletNode.MAX_POLYPHONY) {
        voice = voices.find(v => v.gate === 0) || voices[0];
      } else {
        voice = {
          id: `live-${trackId}-${voices.length}`,
          gate: 0,
          frequencyHz: event.frequencyHz ?? event.tuning?.baseFrequencyHz ?? midiToFreq(noteMidi),
          note: noteMidi,
          velocity: velScaled,
        };
        voices.push(voice);
      }
    }

    voice.note = noteMidi;
    const targetFreq = event.frequencyHz ?? midiToFreq(noteMidi);
    voice.frequencyHz = targetFreq;
    (voice as any).baseFrequencyHz = targetFreq;
    voice.velocity = velScaled;
    voice.gate = 1;

    this.syncGraph();
  }

  postRelease(trackId: string, midi: number, atTime?: number) {
    const now = this.ctx?.currentTime ?? 0;
    const delayMs = atTime && atTime > now + 0.002 ? (atTime - now) * 1000 : 0;

    if (delayMs > 2) {
      const tid = window.setTimeout(() => this.executeNoteOff(trackId, midi), delayMs);
      this.scheduledTimeouts.push(tid);
    } else {
      this.executeNoteOff(trackId, midi);
    }
  }

  private executeNoteOff(trackId: string, midi: number) {
    const voices = this.trackVoicesMap.get(trackId);
    if (!voices) return;

    const voice = voices.find(v => v.note === midi && v.gate === 1);
    if (voice) {
      voice.gate = 0;
      if ((voice as any).baseFrequencyHz) {
        voice.frequencyHz = (voice as any).baseFrequencyHz;
      }
      this.syncGraph();
    }
  }

  postCC(trackId: string, cc: number, value: number, atTime?: number) {
    const params = this.trackParamsMap.get(trackId);
    if (!params) return;

    const norm = value / 127;
    if (cc === 7 || cc === 11) {
      const isElectronic = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test((params.instrumentId || '').toLowerCase());
      const effectiveModelForGain = isElectronic ? 9 : params.model;
      const baseGain = makeupGainFor(effectiveModelForGain, params.instrumentId);
      params.volume = Math.max(0.01, Math.min(35, norm * baseGain));
    }
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
    const now = this.ctx?.currentTime ?? 0;
    const delayMs = atTime && atTime > now + 0.002 ? (atTime - now) * 1000 : 0;

    if (delayMs > 2) {
      const tid = window.setTimeout(() => this.executeBend(trackId, value), delayMs);
      this.scheduledTimeouts.push(tid);
    } else {
      this.executeBend(trackId, value);
    }
  }

  private executeBend(trackId: string, value: number) {
    const voices = this.trackVoicesMap.get(trackId);
    if (!voices || voices.length === 0) return;

    const semitones = ((value - 8192) / 8192) * 2;
    const bendRatio = Math.pow(2, semitones / 12);

    let changed = false;
    for (const voice of voices) {
      if (voice.gate === 1) {
        const base = (voice as any).baseFrequencyHz ?? voice.frequencyHz ?? midiToFreq(voice.note);
        (voice as any).baseFrequencyHz = base;
        voice.frequencyHz = base * bendRatio;
        changed = true;
      }
    }

    if (changed) {
      this.syncGraph();
    }
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
    this.masterChain?.dispose();
    this.masterChain = undefined;
  }
}
