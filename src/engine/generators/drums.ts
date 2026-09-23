import type { ResolvedStyle } from '../../data/styles/schema';

import { rand01 } from './groove';
import type { DrumVoice } from '../../data/instruments';
import type { TransitionEvent } from '../sequencing/grid';

export const GM = {
  kick: 36, kickTight: 35,
  snare: 38, snareRim: 37, snareElectric: 40,
  clap: 39,
  hatClosed: 42, hatPedal: 44, hatOpen: 46,
  crash: 49, crash2: 57, ride: 51, rideBell: 53, splash: 55, china: 52,
  tomLow: 41, tomLowMid: 45, tomMid: 47, tomHighMid: 48, tomHigh: 50,
  cowbell: 56, tambourine: 54,
  sticks: 31,
} as const;

export type KitLimb = 'kick' | 'snare' | 'ghost' | 'hat' | 'openHat' | 'ride' | 'crash' | 'tom' | 'rim';

export interface KitVoicing {
  key: number;
  limb: KitLimb;
  gain: number;
  flamMs?: number;
}

export interface KitContext {
  /** position of this hit in beats from the start of the bar */
  beatInBar: number;
  beatsPerBar: number;
  /** the pattern's authored accent for this hit, 0..1 */
  accent: number;
  /** all the onsets in this bar, in beats — so a limb can see the whole groove */
  barOnsets: number[];
  /** which of them this is */
  index: number;
  /** 0..1 */
  intensity: number;
  /** bar's position within its 4-bar phrase */
  barInPhrase: number;
  /** first bar of a section */
  sectionStart: boolean;
  /** last bar of a section */
  sectionEnd: boolean;
  /** last bar of a 4-bar phrase */
  phraseEnd: boolean;
  /** brushes, electronic kit, etc */
  flavour: KitFlavour;
  /** World-contract gates; never inferred from a genre label. */
  allowTomFills: boolean;
  allowSectionCrash: boolean;
  forbidBackbeat: boolean;
  /** prefers the ride over the hats — jazz, swing, ballads, solos */
  rideFeel: boolean;
  seed: number;
  transition?: TransitionEvent;
  /** Contract-resolved behavioral approach. */
  approach?: string;
}

export type KitFlavour = 'acoustic' | 'brush' | 'electronic' | 'roomy';

function isBackbeat(beat: number, beatsPerBar: number): boolean {
  const eps = 0.12;
  if (beatsPerBar >= 4) {
    return Math.abs(beat - 1) < eps || Math.abs(beat - 3) < eps;
  }
  if (beatsPerBar === 3) return Math.abs(beat - 1) < eps;
  if (beatsPerBar === 6) return Math.abs(beat - 2) < eps || Math.abs(beat - 4) < eps;
  return Math.abs(beat - Math.floor(beatsPerBar / 2)) < eps;
}

function isDownbeat(beat: number): boolean {
  return beat < 0.12;
}

function onBeat(beat: number): boolean {
  return Math.abs(beat - Math.round(beat)) < 0.12;
}

/**
 * Decide what one hit of a drum pattern actually is.
 */
export function kitVoicing(c: KitContext): KitVoicing {
  const b = c.beatInBar;
  const strong = c.accent;

  /* A drop-out is an authored transition instruction, not a velocity cue.
     Suppress kick generation while leaving the rest of the kit intact. */
  if (c.transition?.type === 'drop-out' && c.transition.cyclePosition === c.transition.cycleLength - 1 && isDownbeat(b)) {
    return { key: GM.kick, limb: 'kick', gain: 0 };
  }

  /* ---- fills take over the bar entirely -------------------------------- */
  const fillZone = c.allowTomFills ? fillStartBeat(c) : null;
  if (fillZone !== null && b >= fillZone) {
    return fillHit(c, b, fillZone);
  }

  /* ---- a crash announces a new section --------------------------------- */
  if (c.allowSectionCrash && c.sectionStart && isDownbeat(b)) {
    return { key: c.flavour === 'electronic' ? GM.crash2 : GM.crash, limb: 'crash', gain: 1.15 };
  }

  /* ---- the kick: downbeats and the loud structural hits ---------------- */
  if (isDownbeat(b) || (strong >= 0.86 && !isBackbeat(b, c.beatsPerBar))) {
    return { key: c.flavour === 'electronic' ? GM.kickTight : GM.kick, limb: 'kick', gain: 1.0 };
  }

  /* ---- the snare: backbeats, with everything near them ghosted --------- */
  if (!c.forbidBackbeat && isBackbeat(b, c.beatsPerBar)) {
    if (c.flavour === 'brush') return { key: GM.snareRim, limb: 'snare', gain: 0.92 };
    const flam = c.intensity > 0.8 && rand01(c.seed ^ 0x3a) > 0.88 ? 22 : undefined;
    return {
      key: c.flavour === 'electronic' ? GM.snareElectric : GM.snare,
      limb: 'snare',
      gain: 1.0,
      flamMs: flam,
    };
  }

  /* ---- ghost notes ------------------------------------------------------
     The quiet snare hits just before and after a backbeat. They are the
     reason a funk or hip-hop groove breathes instead of ticking. */
  const nearBackbeat = distanceToBackbeat(b, c.beatsPerBar);
  if (nearBackbeat > 0 && nearBackbeat <= 0.5 && strong < 0.55 && c.intensity > 0.35) {
    if (rand01(c.seed) > 0.42) {
      return { key: GM.snare, limb: 'ghost', gain: 0.26 + rand01(c.seed ^ 0x11) * 0.12 };
    }
  }

  if (c.rideFeel) {
    if (onBeat(b) && strong > 0.8) return { key: GM.rideBell, limb: 'ride', gain: 0.85 };
    return { key: GM.ride, limb: 'ride', gain: onBeat(b) ? 0.76 : 0.58 };
  }

  const toNextBeat = Math.ceil(b + 1e-6) - b;
  const opensHere = toNextBeat <= 0.3 && !onBeat(b) && strong > 0.6 && c.intensity > 0.45;
  if (opensHere && rand01(c.seed ^ 0x7c) > 0.55) {
    return { key: GM.hatOpen, limb: 'openHat', gain: 0.78 };
  }
  if (c.flavour === 'brush') {
    return { key: GM.hatPedal, limb: 'hat', gain: onBeat(b) ? 0.66 : 0.48 };
  }
  return {
    key: GM.hatClosed,
    limb: 'hat',
    gain: onBeat(b) ? 0.74 : 0.54 + rand01(c.seed ^ 0x55) * 0.12,
  };
}

function distanceToBackbeat(beat: number, beatsPerBar: number): number {
  const points = beatsPerBar >= 4 ? [1, 3] : beatsPerBar === 3 ? [1] : [Math.floor(beatsPerBar / 2)];
  let best = Infinity;
  for (const p of points) best = Math.min(best, Math.abs(beat - p));
  return best;
}

function fillStartBeat(c: KitContext): number | null {
  if (c.sectionEnd) return Math.max(0, c.beatsPerBar - (c.intensity > 0.7 ? 4 : 2));
  if (c.phraseEnd && c.barInPhrase === 3) {
    if (rand01(c.seed ^ 0x9d1) > 0.55 - c.intensity * 0.25) {
      return c.beatsPerBar - 1;
    }
  }
  return null;
}

function fillHit(c: KitContext, beat: number, from: number): KitVoicing {
  const span = Math.max(0.5, c.beatsPerBar - from);
  const through = Math.min(1, (beat - from) / span);

  // Identify our index in the fill
  const fillOnsets = c.barOnsets.filter(b => b >= from);
  const fillIndex = fillOnsets.indexOf(beat) >= 0 ? fillOnsets.indexOf(beat) : 0;

  const isElectronic = c.flavour === 'electronic';

  if (isElectronic) {
    // Electronic rudiments: 32nd note hi-hat rolls or snare risers
    const isSnareRoll = (c.seed & 1) === 0;
    if (isSnareRoll) {
      // Snare riser: Snare getting progressively louder
      const snareKey = GM.snareElectric;
      return {
        key: snareKey,
        limb: 'snare',
        gain: 0.5 + through * 0.5,
      };
    } else {
      // Hi-hat roll / 32nd notes
      return {
        key: GM.hatClosed,
        limb: 'hat',
        gain: 0.6 + (fillIndex % 2 === 0 ? 0.3 : 0),
      };
    }
  } else {
    // Acoustic & Brush rudiments:
    // Return combinations of [snare, kick, kick], [snare, tom, tom], or [flam, ghost, ghost]
    const rudimentSeed = (c.seed ^ 0x3b1c) % 3;
    if (rudimentSeed === 0) {
      // Combination: [snare, kick, kick]
      const stepInCell = fillIndex % 3;
      if (stepInCell === 0) {
        return { key: GM.snare, limb: 'snare', gain: 0.95 };
      } else {
        return { key: GM.kick, limb: 'kick', gain: 0.85 };
      }
    } else if (rudimentSeed === 1) {
      // Combination: [snare, tom, tom]
      const stepInCell = fillIndex % 3;
      if (stepInCell === 0) {
        return { key: GM.snare, limb: 'snare', gain: 0.9 };
      } else if (stepInCell === 1) {
        return { key: GM.tomHigh, limb: 'tom', gain: 0.85 };
      } else {
        return { key: GM.tomMid, limb: 'tom', gain: 0.82 };
      }
    } else {
      // Combination: [flam, ghost, ghost]
      const stepInCell = fillIndex % 3;
      if (stepInCell === 0) {
        return { key: GM.snare, limb: 'snare', gain: 1.0, flamMs: 15 };
      } else if (stepInCell === 1) {
        return { key: GM.snare, limb: 'ghost', gain: 0.35 };
      } else {
        return { key: GM.snare, limb: 'ghost', gain: 0.32 };
      }
    }
  }
}

export function handPercVoicing(
  drum: DrumVoice,
  accent: number,
  intensity: number,
  seed: number,
  hitType?: string,
): KitVoicing {
  // Authored stroke names are preserved for hand percussion. SoundFonts expose
  // different keys per instrument, so the dialect chooses the closest available
  // low/mid/high articulation rather than pretending every instrument is a kit.
  if (hitType) {
    const h = hitType.toLowerCase();
    if (/open|slap|rim|campana|paila|shell/.test(h)) return { key: drum.high, limb: 'snare', gain: Math.min(1.05, 0.84 + accent * 0.2) };
    if (/muff|mute|bass|low|ghost|soft/.test(h)) return { key: drum.low, limb: 'ghost', gain: Math.max(0.28, 0.48 + accent * 0.25) };
    if (/mid|tone|stroke|martillo|casca/.test(h)) return { key: drum.mid, limb: 'hat', gain: 0.68 + accent * 0.2 };
  }
  if (accent >= 0.88) return { key: drum.high, limb: 'snare', gain: 1.0 };
  if (accent <= 0.48) {
    return { key: drum.low, limb: 'ghost', gain: 0.34 + rand01(seed) * 0.14 };
  }
  const lean = rand01(seed ^ 0x2f1);
  if (lean > 0.82 && intensity > 0.6) return { key: drum.high, limb: 'snare', gain: 0.86 };
  if (lean < 0.16) return { key: drum.low, limb: 'ghost', gain: 0.52 };
  return { key: drum.mid, limb: 'hat', gain: 0.74 };
}

/* --- kit flavour ---------------------------------------------------------- */

export function flavourForStyle(style: ResolvedStyle, instrumentId: string): KitFlavour {
  if (instrumentId === 'brush-kit') return 'brush';
  const mode = style.contract.percussion.kitMode;
  const approach = style.contract.approaches?.[style.contract.percussion.kitMode === 'none' ? 'percussion' : 'drums'];
  if (approach?.id === 'drums') return instrumentId === 'brush-kit' ? 'brush' : (mode === 'none' ? 'acoustic' : style.contract.timbreSpace.production.toLowerCase().includes('machine') ? 'electronic' : 'acoustic');
  if (mode === 'none') return 'acoustic';
  if (style.contract.timbreSpace.production.toLowerCase().includes('machine')) return 'electronic';
  if (style.contract.form.some(x => /solo|head/i.test(x)) && style.contract.percussion.ride) return 'brush';
  return 'acoustic';
}

export function usesRideStyle(style: ResolvedStyle, sectionKind: string, intensity: number): boolean {
  if (!style.contract.percussion.ride) return false;
  return /solo|head|instrumental/i.test(sectionKind) || intensity > 0.78;
}

export function flavourFor(instrumentId: string, worldId: string): KitFlavour {
  if (['electronic', 'hip-hop', 'house-techno', 'house', 'drum-and-bass', 'reggaeton', 'reggaeton-dembow', 'industrial'].includes(worldId)) return 'electronic';
  if (['jazz', 'swing', 'fusion-ambient'].includes(worldId)) return 'brush';
  if (['folk', 'blues', 'country', 'gospel'].includes(worldId)) return 'roomy';
  return 'acoustic';
}

export function usesRide(worldId: string, sectionKind: string, intensity: number): boolean {
  if (['jazz', 'swing'].includes(worldId)) return true;
  if (['blues', 'fusion-ambient'].includes(worldId) && intensity < 0.8) return true;
  if (sectionKind === 'solo' && intensity > 0.6) return true;
  return false;
}


