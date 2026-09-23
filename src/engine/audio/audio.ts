/**
 * DECOLONIZED PHYSICAL MODELING AUDIO ENGINE
 * =========================================
 * Uses Elementary Audio declarative signal graphs for live synthesis and master processing.
 */

import { BandWorkletNode } from './BandWorklet';
import { previewCulturalRules, culturalPitchSet, shoCluster, celticOpenHarmony } from '../generators/cultural';
import { parseChord, noteName as theoryNoteName, midiOf } from '../theory/theory';
import { voiceProfile, foldToRange } from '../theory/instrumentProfile';
import { INSTRUMENTS_BY_ID, genreTechniquesForInstrument } from '../../data/instruments';
import { getLuthierModelForInstrument } from './LuthierAPI';
import type { TransportSink } from '../sequencing/transport';
import type { Performance } from '../sequencing/perform';

let ctx: AudioContext | null = null;
let bandWorklet: BandWorkletNode | null = null;

/** trackId -> instrumentId, so the sink can resolve a physical model per note
 *  even though the transport only ever hands it a bare trackId. Populated by
 *  the UI layer (App.tsx) from the current song's tracks whenever they change. */
const trackInstruments = new Map<string, string>();
let activeWorldId = 'flamenco';
let activeStyleId = '';

export function setActiveWorld(worldId: string, styleId?: string) {
  activeWorldId = worldId;
  if (styleId !== undefined) activeStyleId = styleId;
  if (bandWorklet) {
    bandWorklet.setWorldAndStyle(worldId, styleId);
  }
}

export function setTrackInstruments(map: Record<string, string | undefined>) {
  trackInstruments.clear();
  for (const key of Object.keys(map)) {
    const v = map[key];
    if (v) trackInstruments.set(key, v);
  }
  if (bandWorklet) void bandWorklet.prepareTracks(trackInstruments);
}
let initPromise: Promise<BandWorkletNode> | null = null;

export let isRenderingMp3 = false;

export function getAudioContext(): AudioContext | null {
  return ctx;
}


export async function ensureSynth(): Promise<BandWorkletNode> {
  if (bandWorklet) return bandWorklet;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      if (!ctx) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        ctx = new AudioCtx();
      }
      if (ctx.state === 'suspended') {
        try {
          await ctx.resume();
        } catch {
          // Resume on user action
        }
      }

      const node = new BandWorkletNode();
      await node.initialize(ctx, 1);
      bandWorklet = node;
      await node.prepareTracks(trackInstruments);
      return node;
    } catch (err) {
      console.error('Physical Modeling Worklet initialization error:', err);
      initPromise = null;
      throw err;
    }
  })();

  return initPromise;
}

export async function startAudio(): Promise<AudioContext | null> {
  try {
    if (!ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      ctx = new AudioCtx();
    }
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
    await ensureSynth();
    return ctx;
  } catch (err) {
    console.error('Failed to start audio engine:', err);
    initPromise = null;
    throw err;
  }
}

export function stopAudio() {
  if (bandWorklet) {
    bandWorklet.clear();
  }
}

/** Stable id shared by noteOn/noteOff for the same physical voice, so a
 *  RELEASE message can actually find and stop the sustained voice it started
 *  (bowed strings, reed instruments, winds, held synth/pad notes). */
function voiceId(trackId: string | number, midi: number): string {
  return `${trackId}_${midi}`;
}

import { resolveDialect } from '../theory/dialects';
import { resolveTuningSystem } from '../theory/tuning';

export function createSink(): TransportSink {
  return {
    now: () => (ctx ? ctx.currentTime : 0),
    noteOn(trackId, midi, vel, time, articulation, frequencyHz) {
      if (!bandWorklet) return;
      const instrumentId = trackInstruments.get(String(trackId)) ?? String(trackId);
      let luthier = getLuthierModelForInstrument(instrumentId);
      const vel01 = Math.max(0, Math.min(1, vel / 127));

      const dialect = resolveDialect(instrumentId, activeWorldId, activeStyleId);
      const tuningSystem = resolveTuningSystem(dialect?.tuningSystemId || (activeWorldId.includes('maqam') || activeWorldId.includes('middle_east') ? 'maqam-bayati' : activeWorldId.includes('blues') ? 'blues-continuum' : '12-tet'));
      const freqHz = frequencyHz ?? tuningSystem.getFrequencyHz(midi);

      let actionType = dialect?.defaultTechnique || 'strike';
      const authoredArticulation = articulation?.trim();
      const styleTechnique = !authoredArticulation
        ? genreTechniquesForInstrument(instrumentId, activeStyleId)[0]
        : undefined;
      const effectiveArticulation = authoredArticulation || styleTechnique;
      if (effectiveArticulation) {
        const artLow = effectiveArticulation.toLowerCase();
        if (artLow.includes('arco') || artLow.includes('bowed')) {
          luthier = { ...luthier, category: 'continuous_bowed_friction' };
          actionType = 'bow_drag';
        } else if (artLow.includes('pizzicato') || artLow.includes('plucked') || artLow.includes('slap-bass') || artLow.includes('pizz')) {
          luthier = { ...luthier, category: 'strum_friction_pluck' };
          actionType = 'pluck';
        } else if (artLow.includes('rasgue') || artLow.includes('abanico') || artLow.includes('strum-roll')) {
          actionType = 'abanico';
        } else if (artLow.includes('golpe') || artLow.includes('chicharra') || artLow.includes('tap')) {
          actionType = artLow.includes('tap') ? 'tap' : 'golpe';
        } else if (artLow.includes('arrastre') || artLow.includes('drag')) {
          actionType = 'arrastre';
        } else if (artLow.includes('slap') || artLow.includes('pop')) {
          actionType = 'slap';
        } else if (artLow.includes('fingerstyle') || artLow.includes('flatpick') || artLow.includes('pick') || artLow.includes('plectrum') || artLow.includes('pluck')) {
          actionType = 'pluck';
        } else if (artLow.includes('tongue') || artLow.includes('tongued') || artLow.includes('cut') || artLow.includes('martellato')) {
          actionType = 'tongue';
        } else if (artLow.includes('brush')) {
          actionType = 'strike';
        } else if (artLow.includes('mute') || artLow.includes('muff')) {
          actionType = 'mute';
        }
      }

      const contactPoint = Math.max(0.05, Math.min(0.95, dialect?.contactPointOverride ?? (0.5 - (vel01 - 0.5) * 0.3 + (Math.random() - 0.5) * 0.12)));
      const mass = Math.max(0.1, Math.min(0.95, 0.35 + vel01 * 0.5 + (Math.random() - 0.5) * 0.1));

      bandWorklet.postEvent({
        id: voiceId(trackId, midi),
        cyclePhase: 0,
        luthierObjectId: instrumentId,
        trackId: String(trackId),
        action: { type: actionType as any, force: vel01, contactPoint, mass, technique: effectiveArticulation },
        tuning: { baseFrequencyHz: freqHz, culturalMicrotoneCents: tuningSystem.getCentsOffset(midi) },
        spatialPosition: { x: 0, y: 0, z: 0 },
        luthier,
        worldId: activeWorldId,
      }, time);
    },
    noteOff(trackId, midi, time) {
      // Releases sustain-capable voices (bowed/reed/wind/held synth); a
      // no-op for decaying/percussive voices, which just ring out.
      if (bandWorklet) bandWorklet.postRelease(voiceId(trackId, midi), time);
    },
    pitchBend(trackId, value, time) {
      if (bandWorklet) bandWorklet.postBend(String(trackId), value, time);
    },
    controlChange(trackId, cc, value, time) {
      if (bandWorklet) bandWorklet.postCC(String(trackId), cc, value, time);
    },
    programChange(_trackId, _program, _time, _bank) {
      // Instrument identity is resolved from the track map, not GM program
      // numbers — several distinct instruments share a GM program.
    },
    setDrumChannel(_trackId, _isDrum) {
      // Percussive vs. pitched behaviour is carried by the luthier category.
    },
    allNotesOff() {
      if (bandWorklet) {
        bandWorklet.clear();
      }
    },
  };
}

export function chordRootMidi(chord: string): number {
  const NOTE: Record<string, number> = {
    C: 48, 'C#': 49, Db: 49, D: 50, 'D#': 51, Eb: 51, E: 52, F: 53,
    'F#': 54, Gb: 54, G: 55, 'G#': 56, Ab: 56, A: 57, 'A#': 58, Bb: 58, B: 59,
  };
  const m = chord.match(/^([A-G](?:#|b)?)/);
  return m ? (NOTE[m[1]] ?? 57) : 57;
}

export function midiToNoteName(midi: number): string {
  return theoryNoteName(midi);
}

export function getVoiceFeedSummary(instrumentId: string, chord: string) {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) return null;
  if (def.kit || def.drum) {
    return {
      instrumentName: def.name,
      source: def.kit ? 'Percussion Membrane Mesh' : `Percussion (${def.drum?.high ?? 0}/${def.drum?.mid ?? 0}/${def.drum?.low ?? 0})`,
      voicing: 'rhythm / unpitched physical excitation',
      notes: def.kit ? ['Kick', 'Snare', 'Hat'] : ['Perc'],
    };
  }
  const parsed = parseChord(chord);
  const prof = voiceProfile(instrumentId);
  const culture = previewCulturalRules(instrumentId);
  if (culture) {
    const pcs = culturalPitchSet(culture, parsed.rootPc);
    const midis = culture.sourceModel === 'modal-drone' && def.voicing === 'chord'
      ? celticOpenHarmony(parsed.rootPc, prof, 0.84, 17)
      : instrumentId === 'shō'
        ? shoCluster(parsed.rootPc, prof, 0.84)
        : [foldToRange(midiOf(pcs[0], 4), prof)];
    return {
      instrumentName: def.name,
      source: `Cultural Physical Model (${culture.harmonyModel})`,
      voicing: culture.sourceModel === 'modal-drone' && def.voicing === 'chord' ? 'modal open-fifth harmony' : culture.harmonyModel,
      notes: midis.map(m => theoryNoteName(m)),
    };
  }
  let midis: number[];
  if (prof.role === 'bass') {
    midis = [foldToRange(midiOf(parsed.bassPc, 2), prof)];
  } else if (def.voicing === 'single') {
    midis = [foldToRange(midiOf(parsed.rootPc, 4), prof)];
  } else {
    midis = parsed.intervals
      .map(iv => foldToRange(midiOf((parsed.rootPc + iv) % 12, 3) + Math.floor(iv / 12) * 12, prof))
      .sort((a, b) => a - b);
  }
  return {
    instrumentName: def.name,
    source: `Physical Model (${instrumentId})`,
    voicing: def.voicing,
    notes: midis.map(m => theoryNoteName(m)),
  };
}

export function setMasterVolume(value: number) {
  void bandWorklet?.setVolume(value);
}

import { renderPerformanceToMp3 } from './offlineRender';

export async function renderSongToMp3(
  perf: Performance,
  optionsOrProgress?: any,
  onProgress?: (frac: number) => void,
): Promise<Blob> {
  let options: any = {};
  let progressCb = onProgress;
  if (typeof optionsOrProgress === 'function') {
    progressCb = optionsOrProgress;
  } else if (optionsOrProgress) {
    options = optionsOrProgress;
  }

  return renderPerformanceToMp3(
    perf,
    {
      selectedTrackIds: options.selectedTrackIds,
      trackInstruments,
      worldId: options.worldId || activeWorldId,
      styleId: options.styleId || activeStyleId,
    },
    progressCb
  );
}
