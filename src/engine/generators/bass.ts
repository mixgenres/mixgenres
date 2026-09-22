import { ParsedChord, nearestPc, pcOf, midiOf, KeyInfo } from '../theory';
import { VoiceProfile, foldToRange } from '../instrumentProfile';
import { rand01 } from './groove';
import type { ResolvedStyle } from '../../data/styles/schema';
import type { RhythmicContext } from '../grid';

export type BassStyle =
  | 'root'
  | 'rootFifth'
  | 'walking'
  | 'tumbao'
  | 'octave'
  | 'riff'
  | 'sub'
  | 'dembow'
  | 'cumbia'
  | 'reggae'
  | 'samba'
  | 'house';

export interface BassContext {
  chord: ParsedChord;
  next?: ParsedChord;
  key: KeyInfo;
  profile: VoiceProfile;
  style: BassStyle;
  beatInBar: number;
  beatsPerBar: number;
  onsetIndex: number;
  onsetCount: number;
  approaching: boolean;
  anticipated: boolean;
  intensity: number;
  seed: number;
  previous: number;
  rhythmicContext?: RhythmicContext;
  /** Contract-resolved behavioral approach; independent of instrument identity. */
  approach?: string;
}

export interface PitchBendPoint { offset: number; value: number; }

/** Bass expression is driven by the resolved world/transition context. */
export function bassPitchBend(c: {
  midi: number; context: RhythmicContext; profile: VoiceProfile; genreId?: string; role: string; seed: number;
}): PitchBendPoint[] | undefined {
  const transition = c.context.transition;
  if (transition?.type === 'drop-out' || transition?.type === 'corte') {
    // Downward portamento into the drop, then settle at the written pitch.
    return [
      { offset: 0, value: 8192 },
      { offset: 0.5, value: 8192 - 1700 },
      { offset: 0.95, value: 8192 },
    ];
  }
  return undefined;
}

export function bassNote(c: BassContext): number | number[] {
  const p = c.profile;
  const root = pcOf(c.chord.bassPc);
  const rootMidi = foldToRange(midiOf(root, 2), p);
  const isDownbeat = c.beatInBar < 0.26;
  const last = c.previous || rootMidi;
  const phase = c.rhythmicContext?.cyclePosition ?? 0;
  const energy = c.rhythmicContext?.sectionEnergy ?? 3;
  const transition = c.rhythmicContext?.transition;

  // Arrastre is a transition gesture: approach the next harmonic center
  // chromatically rather than treating it as generic 'busy' bass.
  if (transition?.type === 'arrastre' && c.next && transition.cyclePosition === transition.cycleLength - 1) {
    const target = nearestPc(pcOf(c.next.bassPc), last);
    const distance = target - last;
    const step = distance === 0 ? 0 : (distance > 0 ? 1 : -1);
    if (step) return foldToRange(last + step, p);
  }

  if (c.anticipated) return near(root, last, p);

  const approachStyle: BassStyle | undefined = c.approach === 'walking' ? 'walking'
    : c.approach === 'tumbao' ? 'tumbao'
    : c.approach === 'dembow-bass' || c.approach === 'dembow' ? 'dembow'
    : c.approach === 'sub-bass' || c.approach === 'sub' ? 'sub'
    : c.approach === 'cumbia' ? 'cumbia'
    : c.approach === 'reggae' ? 'reggae'
    : c.approach === 'samba' ? 'samba'
    : c.approach === 'riff' ? 'riff'
    : undefined;
  switch (approachStyle ?? c.style) {
    case 'sub': {
      if (!isDownbeat && energy >= 4 && c.intensity > 0.7 && rand01(c.seed ^ phase) > 0.8) {
        return near(pcOf(root + fifthOf(c.chord)), last, p);
      }
      return near(root, last, p);
    }

    case 'root': {
      if (c.approaching && !isDownbeat && c.next) return approach(c, last);
      if (isDownbeat) return near(root, last, p);
      return near(root, last, p);
    }

    case 'rootFifth': {
      const half = c.beatsPerBar / 2;
      if (c.approaching && c.beatInBar > c.beatsPerBar - 1.01 && c.next) return approach(c, last);
      if (c.beatInBar >= half - 0.26 && c.beatInBar < half + 0.26) {
        return near(pcOf(root + fifthOf(c.chord)), last, p);
      }
      if (isDownbeat) return near(root, last, p);
      return near(pcOf(root + (rand01(c.seed) > 0.5 ? fifthOf(c.chord) : 0)), last, p);
    }

    case 'octave': {
      const base = near(root, last, p);
      const high = (c.onsetIndex + phase) % 2 === 1;
      if (c.approaching && c.onsetIndex === c.onsetCount - 1 && c.next) return approach(c, last);
      return foldToRange(high ? base + 12 : base, p);
    }

    case 'tumbao': {
      const b = c.beatInBar;
      if (c.anticipated || b >= c.beatsPerBar - 0.51) {
        return near(c.next ? pcOf(c.next.bassPc) : root, last, p);
      }
      if (b >= c.beatsPerBar / 2 - 0.26 && b < c.beatsPerBar / 2 + 0.76) {
        return near(root, last, p);
      }
      if (b < 0.26) return near(root, last, p);
      const choice = rand01(c.seed);
      if (choice > 0.62) return near(pcOf(root + fifthOf(c.chord)), last, p);
      if (choice > 0.4) return foldToRange(near(root, last, p) - 12, p);
      return near(root, last, p);
    }

    case 'dembow': {
      if (c.approaching && c.beatInBar > c.beatsPerBar - 1.05 && c.next) return approach(c, last);
      // Short answers to the drum cell; avoid a continuous bass blanket.
      if (c.beatInBar < 0.3) return near(root, last, p);
      if (c.onsetIndex % 2 === 0) return near(root, last, p);
      return near(pcOf(root + (rand01(c.seed) > 0.55 ? fifthOf(c.chord) : 0)), last, p);
    }

    case 'cumbia': {
      if (c.approaching && c.beatInBar > c.beatsPerBar - 1.0 && c.next) return approach(c, last);
      if (isDownbeat) return near(root, last, p);
      const half = c.beatsPerBar / 2;
      if (Math.abs(c.beatInBar - half) < 0.3) return near(pcOf(root + fifthOf(c.chord)), last, p);
      return rand01(c.seed) > 0.55 ? near(root, last, p) : near(pcOf(root + fifthOf(c.chord)), last, p);
    }

    case 'reggae': {
      if (c.approaching && c.beatInBar > c.beatsPerBar - 1.0 && c.next) return approach(c, last);
      if (isDownbeat || c.onsetIndex % 3 === 0) return near(root, last, p);
      const chordTone = c.chord.intervals[Math.min(c.chord.intervals.length - 1, 1)] ?? 7;
      return near(pcOf(c.chord.rootPc + chordTone), last, p);
    }

    case 'samba': {
      if (c.approaching && c.beatInBar > c.beatsPerBar - 0.8 && c.next) return approach(c, last);
      if (isDownbeat) return near(root, last, p);
      if (c.onsetIndex % 2 === 0) return near(pcOf(root + fifthOf(c.chord)), last, p);
      return near(root, last, p);
    }

    case 'house': {
      if (c.beatInBar < 0.25) return near(root, last, p);
      if (c.approaching && c.onsetIndex === c.onsetCount - 1 && c.next) return approach(c, last);
      // Syncopate between kicks, but keep the root as the tonal anchor.
      return c.onsetIndex % 2 ? near(root, last, p) : near(pcOf(root + fifthOf(c.chord)), last, p);
    }

    case 'walking': {
      const beatsLeft = c.beatsPerBar - c.beatInBar;
      if (c.next && beatsLeft <= 1.01) return approach(c, last);
      if (isDownbeat) return near(root, last, p);

      const scale = c.chord.scale.map(s => pcOf(c.chord.rootPc + s));
      const chordTones = c.chord.intervals.map(iv => pcOf(c.chord.rootPc + iv));
      const strong = Math.abs(c.beatInBar - Math.round(c.beatInBar)) < 0.1
        && Math.round(c.beatInBar) % 2 === 0;
      const pool = strong ? chordTones : scale;
      const dir = last >= p.centre + 5 ? -1 : last <= p.centre - 7 ? 1 : (rand01(c.seed) > 0.5 ? 1 : -1);
      for (let step = 1; step <= 4; step++) {
        const cand = last + dir * step;
        if (pool.includes(pcOf(cand))) return foldToRange(cand, p);
      }
      return near(chordTones[c.onsetIndex % chordTones.length], last, p);
    }

    case 'riff':
    default: {
      if (c.approaching && c.onsetIndex === c.onsetCount - 1 && c.next && rand01(c.seed) > 0.45) {
        return approach(c, last);
      }
      if (isDownbeat) return near(root, last, p);
      const tones = c.chord.intervals.filter(iv => iv <= 12);
      const pickSeed = rand01(c.seed);
      if (pickSeed > 0.76) return near(pcOf(root + fifthOf(c.chord)), last, p);
      if (pickSeed > 0.66 && c.intensity > 0.6) return foldToRange(near(root, last, p) + 12, p);
      if (pickSeed > 0.58) {
        const t = tones[Math.floor(rand01(c.seed ^ 0x77) * tones.length)] ?? 0;
        return near(pcOf(root + t), last, p);
      }
      return near(root, last, p);
    }
  }
}

function fifthOf(chord: ParsedChord): number {
  if (chord.intervals.includes(6)) return 6;
  if (chord.intervals.includes(8)) return 8;
  return 7;
}

function near(pc: number, reference: number, p: VoiceProfile): number {
  return foldToRange(nearestPc(pc, reference), p);
}

function approach(c: BassContext, last: number): number {
  const target = pcOf(c.next!.bassPc);
  const targetMidi = nearestPc(target, last);
  const r = rand01(c.seed);
  let cand: number;
  if (r > 0.6) cand = targetMidi - 1;
  else if (r > 0.38) cand = targetMidi + 1;
  else if (r > 0.18) cand = nearestPc(pcOf(target + 7), last);
  else cand = nearestPc(pcOf(target + 2), last);
  return foldToRange(cand, c.profile);
}

export function bassStyleForStyle(style: ResolvedStyle, instrumentId: string, role?: string): BassStyle {
  const approach = role ? style.contract.approaches?.[role] : undefined;
  if (approach?.id === 'walking') return 'walking';
  if (approach?.id === 'tumbao') return 'tumbao';
  if (approach?.id === 'dembow-bass') return 'dembow';
  if (approach?.id === 'sub-bass') return 'sub';
  if (/sub-bass/.test(instrumentId)) return 'sub';
  return style.contract.bass.style;
}

