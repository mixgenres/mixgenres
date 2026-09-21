import { KeyInfo, ParsedChord, pcOf, nearestPc } from './theory';
import { VoiceProfile, foldToRange } from './instrumentProfile';
import { rand01 } from './groove';
import { resolveStyle } from '../data/styles';

export interface MotifNote {
  /** Position in beats from the start of the phrase */
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
  archetype?: string;
  phraseBars?: number;
}

export interface StyleMotifShape {
  name: string;
  archetypes: string[];
  degrees: number[];
  rhythm: number[];
  genres?: string[];
  styles?: string[];
  weights?: number[];
}

export const SCALE_MODE_INTERVALS: Record<string, number[]> = {
  'major': [0, 2, 4, 5, 7, 9, 11],
  'ionian': [0, 2, 4, 5, 7, 9, 11],
  'natural-minor': [0, 2, 3, 5, 7, 8, 10],
  'aeolian': [0, 2, 3, 5, 7, 8, 10],
  'harmonic-minor': [0, 2, 3, 5, 7, 8, 11],
  'melodic-minor': [0, 2, 3, 5, 7, 9, 11],
  'dorian': [0, 2, 3, 5, 7, 9, 10],
  'phrygian': [0, 1, 3, 5, 7, 8, 10],
  'phrygian-dominant': [0, 1, 4, 5, 7, 8, 10],
  'flamenco': [0, 1, 4, 5, 7, 8, 10],
  'lydian': [0, 2, 4, 6, 7, 9, 11],
  'mixolydian': [0, 2, 4, 5, 7, 9, 10],
  'locrian': [0, 1, 3, 5, 6, 8, 10],
  'blues': [0, 3, 5, 6, 7, 10],
  'minor-blues': [0, 3, 5, 6, 7, 10],
  'major-blues': [0, 2, 3, 4, 7, 9],
  'minor-pentatonic': [0, 3, 5, 7, 10],
  'minor-pentatonic-jazz': [0, 3, 5, 7, 10],
  'major-pentatonic': [0, 2, 4, 7, 9],
  'pentatonic-major': [0, 2, 4, 7, 9],
  'bebop-dominant': [0, 2, 4, 5, 7, 9, 10, 11],
  'altered': [0, 1, 3, 4, 6, 8, 10],
  'whole-tone': [0, 2, 4, 6, 8, 10],
};

export const STYLE_SHAPES: StyleMotifShape[] = [
  // Piazzolla 3+3+2 additive syncopations
  {
    name: '3+3+2 additive syncopation',
    archetypes: ['332-additive', 'syncopated-hook', 'wave', 'arch'],
    styles: ['nuevo-tango', 'tango-nuevo'],
    genres: ['tango', 'latin'],
    degrees: [0, 2, 4, 3, 2, 1, 0],
    rhythm: [0, 0.75, 1.5, 2, 2.75, 3.5, 5],
  },
  // Tango lyrical arrastre sigh
  {
    name: 'tango lyrical sigh',
    archetypes: ['descending-sigh', 'lyrical-arc', 'arch'],
    styles: ['guardia-vieja', 'guardia-nueva', 'tango-trad'],
    genres: ['tango'],
    degrees: [-1, 0, 2, 4, 3, 2, 0],
    rhythm: [0, 0.75, 1.5, 2.5, 3.75, 4.5, 6],
  },
  // Dembow / Reggaeton pickup hook
  {
    name: 'dembow syncopated hook',
    archetypes: ['syncopated-hook', 'dembow-pickup', 'staccato-chant'],
    styles: ['reggaeton-classic', 'reggaeton-modern', 'neoperreo'],
    genres: ['reggaeton', 'latin-urban'],
    degrees: [2, 2, 4, 2, 0, 2],
    rhythm: [0.5, 1.25, 2, 2.75, 3.5, 4.25],
  },
  // Afro-Cuban Montuno Call
  {
    name: 'montuno arpeggiated call',
    archetypes: ['montuno-call', 'call-response', 'riff-repeat'],
    styles: ['son-cubano', 'salsa-dura', 'timba', 'mambo'],
    genres: ['salsa', 'latin', 'cuba'],
    degrees: [0, 4, 2, 4, 0, 4, 3, 2],
    rhythm: [0, 0.5, 1.5, 2, 2.5, 3.5, 4, 4.5],
  },
  // Long lyrical singing arc (Bolero, Zouk, Ballad, Soul)
  {
    name: 'long lyrical cantabile arc',
    archetypes: ['lyrical-arc', 'arch', 'wave'],
    styles: ['bolero', 'zouk-love', 'bachata-sensual', 'rnb-contemporary', 'slow-jam'],
    genres: ['rnb', 'latin', 'caribbean', 'soul'],
    degrees: [0, 2, 4, 6, 5, 4, 2, 0],
    rhythm: [0, 1, 2, 3.5, 4.5, 5.5, 6.5, 7.5],
  },
  // Pentatonic Blues Riff (Blues, Classic Rock, Hard Rock)
  {
    name: 'pentatonic blues riff',
    archetypes: ['riff-repeat', 'call-response', 'blues-riff'],
    styles: ['chicago-blues', 'delta-blues', 'blues-rock', 'hard-rock'],
    genres: ['blues', 'rock'],
    degrees: [0, 2, 3, 4, 3, 0],
    rhythm: [0, 0.75, 1.5, 2, 3, 4.5],
  },
  // Bebop Enclosure & Chromatic Turn (Bebop, Hard Bop, Jazz)
  {
    name: 'bebop chromatic enclosure',
    archetypes: ['enclosure', 'bop-enclosure', 'wave'],
    styles: ['bebop', 'hard-bop', 'post-bop', 'swing'],
    genres: ['jazz'],
    degrees: [1, -1, 0, 2, 4, 3, 2],
    rhythm: [0, 0.5, 1, 1.5, 2.5, 3.5, 4.5],
  },
  // Flamenco Remate & Rapid Descending Cry (Flamenco)
  {
    name: 'flamenco solea cry',
    archetypes: ['solea-cry', 'descending-sigh', 'remate'],
    styles: ['flamenco-puro', 'flamenco-nuevo'],
    genres: ['flamenco'],
    degrees: [0, 1, 0, 3, 2, 1, 0],
    rhythm: [0, 1, 1.75, 2.5, 3.5, 4.5, 5.5],
  },
  // Celtic Reel scalar run
  {
    name: 'celtic reel run',
    archetypes: ['scalar-run', 'wave', 'arch'],
    styles: ['irish-trad', 'scottish-trad', 'celtic-folk'],
    genres: ['celtic-trad', 'folk'],
    degrees: [0, 1, 2, 3, 4, 2, 0],
    rhythm: [0, 0.5, 1, 1.5, 2, 3, 4.5],
  },
  // Afrobeats Syncopated Log Call
  {
    name: 'afrobeats syncopated horn hook',
    archetypes: ['syncopated-hook', 'call-response'],
    styles: ['afrobeats-mainstream', 'amapiano', 'highlife'],
    genres: ['afrobeats', 'african'],
    degrees: [0, 2, 0, 4, 2, 0, 2],
    rhythm: [0, 0.75, 1.5, 2.5, 3.25, 4, 5],
  },
  // Math Rock / Midwest Emo Tapping Cascade
  {
    name: 'math-rock tapping cascade',
    archetypes: ['angular-cascade', 'leap-and-step', 'wave'],
    styles: ['math-rock', 'midwest-emo', 'prog-metal'],
    genres: ['rock', 'metal', 'indie'],
    degrees: [0, 4, 2, 5, 4, 7, 5, 4],
    rhythm: [0, 0.375, 0.75, 1.125, 1.5, 1.875, 2.25, 3.5],
  },
  // Universal Archetypes
  {
    name: 'rise and settle',
    archetypes: ['rise-and-settle', 'ascending', 'wave'],
    degrees: [0, 1, 2, 4, 2],
    rhythm: [0, 1, 2, 3, 5],
  },
  {
    name: 'falling answer',
    archetypes: ['falling-answer', 'descending-sigh', 'descent'],
    degrees: [4, 3, 2, 0],
    rhythm: [0, 1.5, 2.5, 4],
  },
  {
    name: 'arch',
    archetypes: ['arch', 'wave'],
    degrees: [0, 2, 4, 2, 0],
    rhythm: [0, 1, 2, 3.5, 5],
  },
  {
    name: 'leap and step',
    archetypes: ['leap-and-step', 'angular'],
    degrees: [0, 4, 3, 2, 1],
    rhythm: [0, 0.5, 2, 3, 4],
  },
  {
    name: 'syncopated hook',
    archetypes: ['hook', 'syncopated-hook'],
    degrees: [2, 2, 1, 0, -1, 0],
    rhythm: [0, 0.75, 1.5, 2.5, 3.5, 5],
  },
  {
    name: 'call and response',
    archetypes: ['call-response', 'call'],
    degrees: [0, 2, 1, 4],
    rhythm: [0, 1, 2, 4],
  },
  {
    name: 'turn',
    archetypes: ['turn', 'wave'],
    degrees: [4, 5, 4, 2, 4],
    rhythm: [0, 0.5, 1, 2, 3.5],
  },
  {
    name: 'lift and soar',
    archetypes: ['lift', 'ascending', 'arch'],
    degrees: [-1, 0, 2, 4, 6, 4],
    rhythm: [0, 0.75, 1.5, 2.25, 3, 5],
  },
  {
    name: 'pendulum wave',
    archetypes: ['pendulum', 'wave', 'undulating'],
    degrees: [2, 0, 3, 0, 4],
    rhythm: [0, 1, 2, 3, 4.5],
  },
  {
    name: 'cascading descent',
    archetypes: ['descent', 'descending-sigh'],
    degrees: [6, 5, 4, 2, 0],
    rhythm: [0, 1, 2, 3, 5],
  },
];

export function makeMotif(
  seed: number,
  beatsPerBar: number,
  styleId?: string,
  genreId?: string,
): Motif {
  let matchedShapes = STYLE_SHAPES;
  let phraseBars = 4;

  if (styleId || genreId) {
    try {
      const resolved = resolveStyle({ styleId: styleId! });
      const targetArchetypes = new Set(resolved.melody?.contourArchetypes || []);
      const styleBars = resolved.melody?.phraseLengthsBars;
      if (styleBars && styleBars.length > 0) {
        phraseBars = styleBars[Math.floor(rand01(seed ^ 0x31) * styleBars.length) % styleBars.length];
      }

      const styleSpecific = STYLE_SHAPES.filter(s => {
        if (s.styles && styleId && s.styles.includes(styleId)) return true;
        if (s.genres && genreId && s.genres.includes(genreId)) return true;
        if (s.archetypes.some(a => targetArchetypes.has(a))) return true;
        return false;
      });

      if (styleSpecific.length > 0) {
        matchedShapes = styleSpecific;
      }
    } catch {
      matchedShapes = STYLE_SHAPES;
    }
  }

  const base = matchedShapes[Math.floor(rand01(seed) * matchedShapes.length) % matchedShapes.length];
  const span = beatsPerBar * phraseBars;
  const stretch = span / 8;

  const shift = rand01(seed ^ 0x51ed) > 0.7 ? 1 : 0;
  const notes: MotifNote[] = base.degrees.map((d, i) => ({
    pos: Math.min(span - 0.25, base.rhythm[i] * stretch),
    degree: d + shift,
    weight: i === 0 ? 1 : i === base.degrees.length - 1 ? 0.9 : (base.weights?.[i] ?? (0.55 + rand01(seed + i) * 0.35)),
  }));

  return {
    notes,
    span,
    name: base.name,
    archetype: base.archetypes[0],
    phraseBars,
  };
}

export type MelodyTreatment =
  | 'state'
  | 'lift'
  | 'answer'
  | 'fragment'
  | 'free'
  | 'tag'
  | 'call-response'
  | 'solo';

export function treatmentFor(
  sectionKind: string,
  intensity: number,
  styleId?: string,
  genreId?: string,
): MelodyTreatment {
  const kind = sectionKind.toLowerCase();

  if (styleId || genreId) {
    try {
      const resolved = resolveStyle({ styleId: styleId! });
      if (resolved.melody?.callAndResponse && (kind === 'verse' || kind === 'montuno' || kind === 'a')) {
        return 'call-response';
      }
    } catch {
      // ignore
    }
  }

  switch (kind) {
    case 'chorus':
    case 'montuno':
    case 'mambo':
    case 'hook':
    case 'peak':
    case 'drop':
      return 'lift';

    case 'bridge':
    case 'pre-chorus':
    case 'b':
    case 'variation':
      return 'answer';

    case 'solo':
    case 'lead-break':
    case 'improvisation':
      return 'free';

    case 'intro':
    case 'breakdown':
    case 'interlude':
    case 'head-in':
      return 'fragment';

    case 'coda':
    case 'ending':
    case 'outro':
    case 'head-out':
      return 'tag';

    default:
      return intensity > 0.7 ? 'lift' : 'state';
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
  /** Optional style identifier */
  styleId?: string;
  /** Optional genre identifier */
  genreId?: string;
  /** Section identifier */
  sectionKind?: string;
  /** Optional cultural or custom pitch set (absolute pitch classes 0..11) */
  pitchSet?: number[];
  /** Optional tonal center used by cultural pitch systems */
  tonicPc?: number;
  /** Whether to snap melody notes to chord tones */
  snapToChord?: boolean;
  /** Specific section register ranges [lowMidi, highMidi] */
  rangePerSection?: Record<string, [number, number]>;
  /** Whether chord tone targeting is strictly active */
  chordToneTargeting?: boolean;
  /** Whether call-and-response alternating gates apply */
  callAndResponse?: boolean;
  /** Heterophonic doubling mode */
  heterophonic?: boolean;
  /** Density setting */
  density?: 'sparse' | 'normal' | 'busy';
  /** Track previous leap distance for cantabile recovery */
  wasLeap?: boolean;
}

export function melodyGate(c: MelodyContext): boolean {
  const phrasePos = c.barInPhrase + c.beatInBar / c.beatsPerBar;
  const swap = c.layer === 1;
  const lead = !swap;

  // Call-and-response phrasing: alternate lead bars and answer bars
  if (c.callAndResponse || c.treatment === 'call-response') {
    const isCallBar = c.barInPhrase % 2 === 0;
    if (lead && !isCallBar && c.beatInBar < c.beatsPerBar - 1) return false;
    if (swap && isCallBar && c.beatInBar < c.beatsPerBar - 1) return false;
  }

  // Phrasing cadence breath (open space in bar 3 before next phrase)
  if (lead && c.barInPhrase === (c.motif.phraseBars ? c.motif.phraseBars - 1 : 3) && c.beatInBar < c.beatsPerBar - 1.5) {
    if (rand01(c.seed) > 0.42 + c.intensity * 0.22) return false;
  }
  if (swap && c.barInPhrase !== (c.motif.phraseBars ? c.motif.phraseBars - 1 : 3) && c.beatInBar < c.beatsPerBar - 1.5) {
    if (rand01(c.seed) > 0.34 + c.intensity * 0.26) return false;
  }

  // Density multipliers
  const densityThreshold = c.density === 'sparse' ? 0.25 : (c.density === 'busy' ? -0.15 : 0);

  switch (c.treatment) {
    case 'fragment':
      return nearMotif(c, 0.9) || rand01(c.seed ^ 0x2a) > (0.82 + densityThreshold);
    case 'tag':
      return phrasePos > c.motif.span / c.beatsPerBar - 1.5 || rand01(c.seed) > 0.9;
    case 'free':
    case 'solo':
      return rand01(c.seed ^ 0x9f) > Math.max(0.05, 0.22 - c.intensity * 0.12 + densityThreshold);
    case 'lift':
      return nearMotif(c, 0.8) || rand01(c.seed ^ 0x13) > Math.max(0.1, 0.5 - c.intensity * 0.2 + densityThreshold);
    case 'answer':
      return nearMotif(c, 0.8) || rand01(c.seed ^ 0x71) > Math.max(0.1, 0.6 + densityThreshold);
    case 'call-response':
      return nearMotif(c, 0.75) || rand01(c.seed ^ 0x33) > Math.max(0.1, 0.5 + densityThreshold);
    case 'state':
    default:
      return nearMotif(c, 0.85) || rand01(c.seed ^ 0x45) > Math.max(0.1, 0.66 + densityThreshold);
  }
}

function nearMotif(c: MelodyContext, tolerance: number): boolean {
  const pos = c.barInPhrase * c.beatsPerBar + c.beatInBar;
  return c.motif.notes.some(n => Math.abs(n.pos - pos) <= tolerance);
}

export function melodyNote(c: MelodyContext): { note: number; isLeap: boolean } {
  const pos = c.barInPhrase * c.beatsPerBar + c.beatInBar;

  let governing = c.motif.notes[0] ?? { pos: 0, degree: 0, weight: 1 };
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
    case 'free':
    case 'solo': {
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

  // Layer allocation
  if (c.layer === 1) {
    degree = c.heterophonic ? degree : degree - 2;
  } else if (c.layer >= 2) {
    degree += 4;
  }

  // Scale resolution
  let scale = c.pitchSet?.length ? c.pitchSet : c.key.pcs;
  if (!c.pitchSet?.length && c.styleId) {
    try {
      const resolved = resolveStyle({ styleId: c.styleId! });
      if (resolved.melody?.pitchIntervals?.length) {
        scale = resolved.melody.pitchIntervals.map(iv => (c.key.tonicPc + iv) % 12);
      } else if (resolved.melody?.scaleMode && SCALE_MODE_INTERVALS[resolved.melody.scaleMode]) {
        scale = SCALE_MODE_INTERVALS[resolved.melody.scaleMode].map(iv => (c.key.tonicPc + iv) % 12);
      }
    } catch {
      // fallback
    }
  }

  const idx = ((degree % scale.length) + scale.length) % scale.length;
  const octaveShift = Math.floor(degree / scale.length) * 12;
  const pc = scale[idx];

  let target = nearestPc(pc, c.previous || c.profile.centre) + octaveShift;

  // Chord-Tone Targeting on strong beats
  const isStrongBeat = Math.abs(c.beatInBar - Math.round(c.beatInBar)) < 0.12 && (Math.round(c.beatInBar) % 2 === 0);
  const onChordChange = c.beatInBar < 0.3;
  const shouldTargetChord = c.snapToChord !== false && (c.chordToneTargeting !== false) && (isStrongBeat || onChordChange);

  if (shouldTargetChord) {
    const chordPcs = c.chord.intervals.map(iv => pcOf(c.chord.rootPc + iv));
    if (!chordPcs.includes(pcOf(target))) {
      let bestNote = target, bestDist = Infinity;
      for (const cp of chordPcs) {
        const cand = nearestPc(cp, target);
        const d = Math.abs(cand - target);
        if (d < bestDist) { bestDist = d; bestNote = cand; }
      }
      if (bestDist <= 2 || onChordChange) {
        target = bestNote;
      }
    }
  }

  // Leap-then-step recovery: if previous note was a leap (> 4 semitones), recover by step in the opposite direction
  let isLeap = false;
  if (c.previous) {
    const prevDiff = target - c.previous;
    if (c.wasLeap) {
      // Force step (1 or 2 semitones) in opposite direction of the leap
      const stepDir = -Math.sign(prevDiff);
      const stepTarget = c.previous + (stepDir * (scale.length > 5 ? 2 : 3));
      target = nearestPc(pcOf(stepTarget), stepTarget);
    } else if (Math.abs(prevDiff) > 4) {
      isLeap = true;
    }

    // Octave guard so melodies don't jump erratically
    let guard = 0;
    while (Math.abs(target - c.previous) > 10 && guard++ < 4) {
      target += target > c.previous ? -12 : 12;
    }
  }

  // Register per section: check rangePerSection from style or section rules
  const sectionKind = (c.sectionKind ?? 'verse').toLowerCase();
  if (c.rangePerSection && c.rangePerSection[sectionKind]) {
    const [rLow, rHigh] = c.rangePerSection[sectionKind];
    const rMid = (rLow + rHigh) / 2;
    if (target < rLow) target += 12 * Math.ceil((rLow - target) / 12);
    if (target > rHigh) target -= 12 * Math.ceil((target - rHigh) / 12);
    if (Math.abs(target - rMid) > 8) {
      target = nearestPc(pcOf(target), rMid);
    }
  } else {
    // Default section register pushes
    const isPeakSection = sectionKind === 'chorus' || sectionKind === 'montuno' || sectionKind === 'mambo' || sectionKind === 'peak';
    const isIntroOutro = sectionKind === 'intro' || sectionKind === 'outro' || sectionKind === 'coda';
    const registerPush = isPeakSection && c.intensity > 0.7 ? 12 : (isIntroOutro ? -7 : 0);
    target += registerPush;
  }

  const drift = target - c.profile.centre;
  if (Math.abs(drift) > 12) target -= Math.sign(drift) * 12;

  const folded = foldToRange(target, c.profile);
  return { note: folded, isLeap };
}

export interface StyleOrnamentNote {
  midi: number;
  timeOffsetBeats: number;
  durBeats: number;
  velocityMult: number;
}

/** Generate style-idiomatic ornament notes (grace notes, arrastres, turns, mordents, rolls, blues slurs) */
export function generateStyleOrnaments(
  targetMidi: number,
  targetBeat: number,
  _patternId: string | undefined,
  articulation: string | undefined,
  ornamentVocab: string[] | undefined,
  _scalePcs: number[],
  profile: VoiceProfile,
  seed: number,
): StyleOrnamentNote[] {
  if (!ornamentVocab || ornamentVocab.length === 0) return [];
  const out: StyleOrnamentNote[] = [];
  const art = (articulation ?? '').toLowerCase();
  const vocab = new Set(ornamentVocab.map(v => v.toLowerCase()));

  const roll = rand01(seed ^ 0xfe41);
  const isStrongBeat = Math.abs(targetBeat - Math.round(targetBeat)) < 0.12 && (Math.round(targetBeat) % 2 === 0);

  // Arrastre (Tango drag into downbeat)
  if ((vocab.has('arrastre') || /arrastre/.test(art)) && (isStrongBeat || /arrastre/.test(art))) {
    if (roll > 0.35) {
      const lowerHalfStep = targetMidi - 1;
      out.push({
        midi: foldToRange(lowerHalfStep, profile),
        timeOffsetBeats: -0.12,
        durBeats: 0.06,
        velocityMult: 0.45,
      });
    }
    return out;
  }

  // Blues grace note / chromatic approach
  if ((vocab.has('grace-note') || vocab.has('blues-slur') || /grace|blues/.test(art)) && isStrongBeat) {
    if (roll > 0.45) {
      const gracePitch = targetMidi - 1;
      out.push({
        midi: foldToRange(gracePitch, profile),
        timeOffsetBeats: -0.08,
        durBeats: 0.04,
        velocityMult: 0.40,
      });
    }
    return out;
  }

  // Mordent / Prall (rapid upper-neighbor flutter)
  if ((vocab.has('mordent') || /mordent|prall/.test(art)) && roll > 0.5) {
    const upperNeighbor = targetMidi + 2;
    out.push({
      midi: foldToRange(upperNeighbor, profile),
      timeOffsetBeats: -0.10,
      durBeats: 0.045,
      velocityMult: 0.35,
    });
    out.push({
      midi: targetMidi,
      timeOffsetBeats: -0.05,
      durBeats: 0.04,
      velocityMult: 0.45,
    });
    return out;
  }

  // Turn (upper-main-lower-main)
  if ((vocab.has('turn') || /turn/.test(art)) && roll > 0.6) {
    const upper = targetMidi + 2;
    const lower = targetMidi - 2;
    out.push({ midi: foldToRange(upper, profile), timeOffsetBeats: -0.14, durBeats: 0.04, velocityMult: 0.32 });
    out.push({ midi: targetMidi, timeOffsetBeats: -0.09, durBeats: 0.04, velocityMult: 0.38 });
    out.push({ midi: foldToRange(lower, profile), timeOffsetBeats: -0.045, durBeats: 0.04, velocityMult: 0.30 });
    return out;
  }

  // Slide / Glissando approach
  if ((vocab.has('slide') || vocab.has('gliss') || /slide|gliss/.test(art)) && roll > 0.55) {
    const slideStart = targetMidi - 2;
    out.push({
      midi: foldToRange(slideStart, profile),
      timeOffsetBeats: -0.14,
      durBeats: 0.065,
      velocityMult: 0.35,
    });
    return out;
  }

  return out;
}

export function treatmentLabel(t: MelodyTreatment): string {
  switch (t) {
    case 'state': return 'states the theme';
    case 'lift': return 'lifts the theme';
    case 'answer': return 'answers the theme';
    case 'fragment': return 'hints at the theme';
    case 'free':
    case 'solo': return 'plays around it';
    case 'call-response': return 'call & response';
    case 'tag': return 'tags the ending';
  }
}
