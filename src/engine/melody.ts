import { KeyInfo, ParsedChord, pcOf, nearestPc } from './theory';
import { VoiceProfile, foldToRange } from './instrumentProfile';
import { rand01 } from './groove';

export interface MotifNote {
  /** Position in beats from the start of the 4-bar phrase */
  pos: number;
  /** Scale degree index relative to the key tonic */
  degree: number;
  /** Relative weight (0..1) for phrase density thinning */
  weight: number;
}

export interface Motif {
  notes: MotifNote[];
  /** Beats in the phrase this motif spans */
  span: number;
  name: string;
}

interface Shape {
  name: string;
  degrees: number[];
  rhythm: number[];
}

const SHAPES: Shape[] = [
  { name: 'rise and settle', degrees: [0, 1, 2, 4, 2],       rhythm: [0, 1, 2, 3, 5] },
  { name: 'falling answer',  degrees: [4, 3, 2, 0],          rhythm: [0, 1.5, 2.5, 4] },
  { name: 'arch',            degrees: [0, 2, 4, 2, 0],       rhythm: [0, 1, 2, 3.5, 5] },
  { name: 'leap and step',   degrees: [0, 4, 3, 2, 1],       rhythm: [0, 0.5, 2, 3, 4] },
  { name: 'hook',            degrees: [2, 2, 1, 0, -1, 0],   rhythm: [0, 0.75, 1.5, 2.5, 3.5, 5] },
  { name: 'call',            degrees: [0, 2, 1, 4],          rhythm: [0, 1, 2, 4] },
  { name: 'turn',            degrees: [4, 5, 4, 2, 4],       rhythm: [0, 0.5, 1, 2, 3.5] },
  { name: 'lift',            degrees: [-1, 0, 2, 4, 6, 4],   rhythm: [0, 0.75, 1.5, 2.25, 3, 5] },
  { name: 'pendulum',        degrees: [2, 0, 3, 0, 4],       rhythm: [0, 1, 2, 3, 4.5] },
  { name: 'descent',         degrees: [6, 5, 4, 2, 0],       rhythm: [0, 1, 2, 3, 5] },
];

export function makeMotif(seed: number, beatsPerBar: number): Motif {
  const base = SHAPES[Math.floor(rand01(seed) * SHAPES.length) % SHAPES.length];
  const span = beatsPerBar * 4;
  const stretch = span / 8;

  const shift = rand01(seed ^ 0x51ed) > 0.7 ? 1 : 0;
  const notes: MotifNote[] = base.degrees.map((d, i) => ({
    pos: Math.min(span - 0.25, base.rhythm[i] * stretch),
    degree: d + shift,
    weight: i === 0 ? 1 : i === base.degrees.length - 1 ? 0.9 : 0.55 + rand01(seed + i) * 0.35,
  }));

  return { notes, span, name: base.name };
}

export type MelodyTreatment =
  | 'state'
  | 'lift'
  | 'answer'
  | 'fragment'
  | 'free'
  | 'tag';

export function treatmentFor(sectionKind: string, intensity: number): MelodyTreatment {
  switch (sectionKind) {
    case 'chorus': case 'montuno': case 'mambo': return 'lift';
    case 'bridge': case 'pre-chorus': return 'answer';
    case 'solo': return 'free';
    case 'intro': case 'breakdown': case 'interlude': return 'fragment';
    case 'coda': case 'ending': return 'tag';
    default: return intensity > 0.7 ? 'lift' : 'state';
  }
}

export interface MelodyContext {
  motif: Motif;
  key: KeyInfo;
  chord: ParsedChord;
  profile: VoiceProfile;
  treatment: MelodyTreatment;
  barInPhrase: number;
  beatInBar: number;
  beatsPerBar: number;
  layer: number;
  intensity: number;
  previous: number;
  seed: number;
  /** Optional cultural pitch set (absolute pitch classes) that replaces the Western key scale. */
  pitchSet?: number[];
  /** Optional tonal center used by cultural pitch systems instead of inferred Western key tonic. */
  tonicPc?: number;
  /** Traditional contexts can deliberately avoid chord-tone snapping. */
  snapToChord?: boolean;
}

export function melodyGate(c: MelodyContext): boolean {
  const phrasePos = c.barInPhrase + c.beatInBar / c.beatsPerBar;
  const swap = c.layer === 1;
  const lead = !swap;

  if (lead && c.barInPhrase === 3 && c.beatInBar < c.beatsPerBar - 1.5) {
    if (rand01(c.seed) > 0.42 + c.intensity * 0.22) return false;
  }
  if (swap && c.barInPhrase !== 3 && c.beatInBar < c.beatsPerBar - 1.5) {
    if (rand01(c.seed) > 0.34 + c.intensity * 0.26) return false;
  }

  switch (c.treatment) {
    case 'fragment':
      return nearMotif(c, 0.9) || rand01(c.seed ^ 0x2a) > 0.82;
    case 'tag':
      return phrasePos > c.motif.span / c.beatsPerBar - 1.5 || rand01(c.seed) > 0.9;
    case 'free':
      return rand01(c.seed ^ 0x9f) > 0.22 - c.intensity * 0.12;
    case 'lift':
      return nearMotif(c, 0.8) || rand01(c.seed ^ 0x13) > 0.5 - c.intensity * 0.2;
    case 'answer':
      return nearMotif(c, 0.8) || rand01(c.seed ^ 0x71) > 0.6;
    case 'state':
    default:
      return nearMotif(c, 0.85) || rand01(c.seed ^ 0x45) > 0.66;
  }
}

function nearMotif(c: MelodyContext, tolerance: number): boolean {
  const pos = c.barInPhrase * c.beatsPerBar + c.beatInBar;
  return c.motif.notes.some(n => Math.abs(n.pos - pos) <= tolerance);
}

export function melodyNote(c: MelodyContext): number {
  const pos = c.barInPhrase * c.beatsPerBar + c.beatInBar;

  let governing = c.motif.notes[0];
  let best = Infinity;
  for (const n of c.motif.notes) {
    const d = Math.abs(n.pos - pos);
    if (d < best) { best = d; governing = n; }
  }

  let degree = governing.degree;

  switch (c.treatment) {
    case 'lift':
      degree += 2;
      break;
    case 'answer':
      degree = 4 - degree;
      break;
    case 'free': {
      const drift = Math.round((rand01(c.seed) - 0.5) * 5);
      degree += drift;
      break;
    }
    case 'fragment':
      if (governing.weight < 0.7) degree = c.key.minor ? 0 : 0;
      break;
    default:
      break;
  }

  if (c.layer === 1) degree -= 2;
  if (c.layer >= 2) degree += 4;

  const scale = c.pitchSet?.length ? c.pitchSet : c.key.pcs;
  const idx = ((degree % scale.length) + scale.length) % scale.length;
  const octaveShift = Math.floor(degree / scale.length) * 12;
  const pc = scale[idx];
  const tonicPc = c.tonicPc ?? c.key.tonicPc;

  let target = nearestPc(pc, c.previous || c.profile.centre) + octaveShift;

  const strong = Math.abs(c.beatInBar - Math.round(c.beatInBar)) < 0.12;
  const onChordChange = c.beatInBar < 0.3;
  if (c.snapToChord !== false && (strong || onChordChange)) {
    const chordPcs = c.chord.intervals.map(iv => pcOf(c.chord.rootPc + iv));
    if (!chordPcs.includes(pcOf(target))) {
      let bestNote = target, bestDist = Infinity;
      for (const cp of chordPcs) {
        const cand = nearestPc(cp, target);
        const d = Math.abs(cand - target);
        if (d < bestDist) { bestDist = d; bestNote = cand; }
      }
      if (bestDist <= 2 || onChordChange) target = bestNote;
    }
  }

  // `tonicPc` is intentionally consumed above to make the cultural context explicit at the callsite.
  // The scale itself remains the source of truth for pitch selection.
  void tonicPc;

  if (c.previous) {
    let guard = 0;
    while (Math.abs(target - c.previous) > 9 && guard++ < 4) {
      target += target > c.previous ? -12 : 12;
    }
  }
  const drift = target - c.profile.centre;
  if (Math.abs(drift) > 10) target -= Math.sign(drift) * 12;

  const registerPush = c.treatment === 'lift' && c.intensity > 0.75 ? 12 : 0;
  return foldToRange(target + registerPush, c.profile);
}

export function treatmentLabel(t: MelodyTreatment): string {
  switch (t) {
    case 'state': return 'states the theme';
    case 'lift': return 'lifts the theme';
    case 'answer': return 'answers the theme';
    case 'fragment': return 'hints at the theme';
    case 'free': return 'plays around it';
    case 'tag': return 'tags the ending';
  }
}
