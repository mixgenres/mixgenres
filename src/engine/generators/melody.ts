import { KeyInfo, ParsedChord, pcOf, nearestPc, scalePcsForMode } from '../theory/theory';
import { VoiceProfile, foldToRange } from '../theory/instrumentProfile';
import type { RhythmicContext } from '../sequencing/grid';
import { rand01 } from './groove';
import { resolveStyle } from '../../data/styles';
import { pitchApproachFor } from '../performance/musicSemantics';

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

export { SCALE_MODE_INTERVALS } from '../theory/theory';

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
      return 'solo';

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
  /** Arrangement spotlight state. Improvisation grammar is only activated for a true spotlight. */
  spotlit?: boolean;
  /** Heterophonic doubling mode */
  heterophonic?: boolean;
  /**
   * The part's weight in this section, 1..5. Biases how often the phrase
   * speaks: a weight-1 melody leaves room, a weight-5 melody fills it.
   */
  energy?: 1 | 2 | 3 | 4 | 5;
  /** Track previous leap distance for cantabile recovery */
  wasLeap?: boolean;
  /** Upcoming chord for target anticipation */
  nextChord?: ParsedChord;
  /** Phrase-development state inherited from the performance interpreter. */
  phraseStage?: 'establish' | 'repeat' | 'vary' | 'answer' | 'transition' | 'ending' | 'rest' | 'cadence';
  /** Solo progress ratio (0..1) for register climaxing */
  progress?: number;
}

type ImprovisationStage = 'state' | 'rest' | 'repeat-transpose' | 'rapid-run';

function soloGrammar(c: MelodyContext) {
  if (!c.spotlit || c.treatment !== 'solo' || String(c.sectionKind ?? '').toLowerCase() !== 'solo' || !c.styleId) return undefined;
  try {
    return resolveStyle({ styleId: c.styleId }).contract.improvisationGrammar;
  } catch {
    return undefined;
  }
}

function soloStage(c: MelodyContext, phraseBars: number, stages: ImprovisationStage[]): ImprovisationStage {
  const ordered: ImprovisationStage[] = stages.length ? stages : ['state', 'rest', 'repeat-transpose', 'rapid-run'];
  const phrasePos = (c.barInPhrase + c.beatInBar / c.beatsPerBar) / Math.max(1, phraseBars);
  const index = Math.min(ordered.length - 1, Math.floor(Math.max(0, Math.min(0.9999, phrasePos)) * ordered.length));
  return ordered[index];
}

function isBeatOne(c: MelodyContext): boolean {
  return Math.abs(c.beatInBar) < 0.16;
}

function chordTargetForStrategy(c: MelodyContext, strategy: string, target: number): number {
  const chordPcs = c.chord.intervals.map(iv => pcOf(c.chord.rootPc + iv));
  if (!chordPcs.length) return target;
  const lower = strategy.toLowerCase();
  const candidates = lower.includes('root-or-fifth')
    ? [pcOf(c.chord.rootPc), pcOf(c.chord.rootPc + 7)]
    : chordPcs;
  let best = target;
  let bestDist = Infinity;
  for (const cp of candidates) {
    const cand = nearestPc(cp, target);
    const d = Math.abs(cand - target);
    if (d < bestDist) { bestDist = d; best = cand; }
  }
  return best;
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

  // Part weight shifts every gate threshold in the same direction: a light
  // part has to clear a higher bar before it plays, a heavy one a lower.
  const energy = c.energy ?? 3;
  const energyThreshold = energy <= 2 ? 0.25 : (energy >= 4 ? -0.15 : 0);

  // Progressive Density Unfolding (Prompt 14)
  let progressBonus = 0;
  if (c.sectionKind?.toLowerCase() === 'verse' && c.progress !== undefined) {
    progressBonus = c.progress * 0.25;
  }
  const effectiveIntensity = Math.min(1.0, c.intensity + progressBonus);

  // Phrase memory should affect melodic density too, not only the backing pattern.
  // A repeated phrase stays recognizable, while a vary/answer/transition phrase gets
  // more room to connect or deliberately leave space.
  if (c.phraseStage === 'repeat' && !nearMotif(c, 0.72)) {
    return rand01(c.seed ^ 0x51a7) > 0.72;
  }
  if (c.phraseStage === 'answer' && !nearMotif(c, 0.72)) {
    return rand01(c.seed ^ 0x51a8) > 0.48;
  }
  if (c.phraseStage === 'rest') {
    return c.beatInBar >= c.beatsPerBar - 0.5 && rand01(c.seed ^ 0x51a9) > 0.9;
  }

  const grammar = soloGrammar(c);
  if (grammar) {
    const phraseBars = grammar.phraseBars ?? c.motif.phraseBars ?? 4;
    const stage = soloStage(c, phraseBars, grammar.phraseStages);
    if (stage === 'rest') {
      // A real rest: only allow a very occasional pickup so the phrase breathes.
      return rand01(c.seed ^ 0x7a11) > 0.90 && c.beatInBar >= c.beatsPerBar - 0.5;
    }
    if (stage === 'rapid-run') return true;
    if (stage === 'repeat-transpose') return nearMotif(c, 0.95) || rand01(c.seed ^ 0x71a3) > 0.55;
    return nearMotif(c, 0.95) || rand01(c.seed ^ 0x1f2b) > 0.58;
  }

  switch (c.treatment) {
    case 'fragment':
      return nearMotif(c, 0.9) || rand01(c.seed ^ 0x2a) > (0.82 + energyThreshold);
    case 'tag':
      return phrasePos > c.motif.span / c.beatsPerBar - 1.5 || rand01(c.seed) > 0.9;
    case 'free':
    case 'solo':
      return rand01(c.seed ^ 0x9f) > Math.max(0.05, 0.22 - effectiveIntensity * 0.12 + energyThreshold);
    case 'lift':
      return nearMotif(c, 0.8) || rand01(c.seed ^ 0x13) > Math.max(0.1, 0.5 - effectiveIntensity * 0.2 + energyThreshold);
    case 'answer':
      return nearMotif(c, 0.8) || rand01(c.seed ^ 0x71) > Math.max(0.1, 0.6 + energyThreshold);
    case 'call-response':
      return nearMotif(c, 0.75) || rand01(c.seed ^ 0x33) > Math.max(0.1, 0.5 + energyThreshold);
    case 'state':
    default:
      return nearMotif(c, 0.85) || rand01(c.seed ^ 0x45) > Math.max(0.1, 0.66 + energyThreshold);
  }
}

function nearMotif(c: MelodyContext, tolerance: number): boolean {
  const pos = c.barInPhrase * c.beatsPerBar + c.beatInBar;
  return c.motif.notes.some(n => Math.abs(n.pos - pos) <= tolerance);
}

function nextMotifNote(c: MelodyContext, pos: number): MotifNote | undefined {
  for (const n of c.motif.notes) {
    if (n.pos > pos + 0.16) return n;
  }
  return undefined;
}

function degreeForLine(c: MelodyContext, degree: number): number {
  let d = degree;
  if (c.treatment === 'lift') d += 2;
  else if (c.treatment === 'answer') d = 4 - d;
  if (c.layer === 1) d = c.heterophonic ? d : d - 2;
  else if (c.layer >= 2) d += 4;
  return d;
}

function scaleStepToward(reference: number, target: number, scale: number[]): number {
  const direction = Math.sign(target - reference);
  if (!direction || !scale.length) return reference;
  const candidates: number[] = [];
  for (let octave = -2; octave <= 2; octave++) {
    for (const pc of scale) candidates.push(pc + 12 * octave);
  }
  const ordered = candidates
    .filter(n => direction > 0 ? n > reference + 0.01 : n < reference - 0.01)
    .sort((a, b) => Math.abs(a - reference) - Math.abs(b - reference));
  const step = ordered[0];
  if (step === undefined) return reference;
  // Passing motion should feel connected, not force an octave leap of its own.
  if (Math.abs(step - reference) > 5) return reference;
  return step;
}

export function melodyNote(c: MelodyContext): { note: number | number[]; isLeap: boolean; rapidRun?: boolean; rapidRunScalePcs?: number[] } {
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
      degree += Math.round((rand01(c.seed) - 0.5) * 5);
      break;
    case 'solo': {
      const grammar = soloGrammar(c);
      if (grammar) {
        const phraseBars = grammar.phraseBars ?? c.motif.phraseBars ?? 4;
        const stage = soloStage(c, phraseBars, grammar.phraseStages);
        if (stage === 'repeat-transpose') {
          degree += grammar.transposeDegrees ?? 2;
        } else if (stage === 'rapid-run') {
          const phrasePos = (c.barInPhrase + c.beatInBar / c.beatsPerBar) / Math.max(1, phraseBars);
          const runPos = Math.max(0, Math.min(0.999, (phrasePos - 0.75) / 0.25));
          degree = Math.round((runPos * 7) + (c.motif.notes[0]?.degree ?? 0));
        }
      } else {
        // Non-spotlit/non-solo callers retain the old free treatment behavior.
        degree += Math.round((rand01(c.seed) - 0.5) * 5);
      }
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
  const grammar = soloGrammar(c);
  let scale = c.pitchSet?.length ? c.pitchSet : c.key.pcs;
  
  const isRaga = /raga|indian|hindustani|carnatic/i.test(c.styleId || c.genreId || '');
  const isBagpipe = /bagpipe/i.test(c.profile.id || '');

  if (isBagpipe) {
    // Force continuous Mixolydian scale relative to Key Tonic Pc (Prompt 16)
    scale = [0, 2, 4, 5, 7, 9, 10].map(iv => (c.key.tonicPc + iv) % 12);
  } else if (isRaga) {
    // Do not invent a universal "raga scale". The authored cultural pitch set,
    // style pitch intervals, or tuning system must supply the actual raga material.
    // With none available, stay with the piece's explicit key rather than claiming
    // a generic Indian scale is culturally representative.
    scale = c.pitchSet?.length ? c.pitchSet : c.key.pcs;
  } else if (!c.pitchSet?.length && c.styleId) {
    try {
      const resolved = resolveStyle({ styleId: c.styleId! });
      const mode = grammar?.scaleMode ?? resolved.melody?.scaleMode;
      if (grammar?.scaleMode) {
        scale = scalePcsForMode(grammar.scaleMode, c.key.tonicPc);
      } else if (resolved.melody?.pitchIntervals?.length) {
        scale = resolved.melody.pitchIntervals.map(iv => (c.key.tonicPc + iv) % 12);
      } else if (resolved.contract.pitchIntervals?.length) {
        scale = resolved.contract.pitchIntervals.map(iv => (c.key.tonicPc + iv) % 12);
      } else if (mode) {
        scale = scalePcsForMode(mode, c.key.tonicPc);
      }
    } catch {
      // fallback
    }
  }

  const idx = ((degree % scale.length) + scale.length) % scale.length;
  const octaveShift = Math.floor(degree / scale.length) * 12;
  const pc = scale[idx];

  let target = nearestPc(pc, c.previous || c.profile.centre) + octaveShift;

  // Maqam Melodic Constraints (Prompt 16)
  const isArabic = /arabic|maqam|rast|bayati|middle-east/i.test(c.styleId || c.genreId || '');
  if (isArabic && c.previous) {
    const leap = Math.abs(target - c.previous);
    if (leap > 4) {
      const stepDirection = Math.sign(target - c.previous);
      target = c.previous + stepDirection * (1 + Math.round(rand01(c.seed ^ 0x3ac1)));
    }
  }

  // Target Note Anticipation (Prompt 11)
  let targetChord = c.chord;
  const isAndOfFour = c.beatInBar >= 3.4 && c.beatInBar < 3.9;
  if (isAndOfFour && c.nextChord) {
    targetChord = c.nextChord;
  }

  // Chord-Tone vs. Passing-Tone Rules (Prompt 11)
  const approach = pitchApproachFor({
    instrumentId: c.profile.id ?? '',
    role: c.profile.role,
    styleId: c.styleId,
    genreId: c.genreId,
  });
  let isDownbeat = Math.abs(c.beatInBar - Math.round(c.beatInBar)) < 0.08;
  const isStrongBeat = Math.abs(c.beatInBar - Math.round(c.beatInBar)) < 0.12 && (Math.round(c.beatInBar) % 2 === 0);
  const onChordChange = c.beatInBar < 0.3;
  let shouldTargetChord = c.snapToChord !== false && (c.chordToneTargeting !== false) && (isStrongBeat || onChordChange);

  // Keep the pitch strategy explicit instead of letting every style collapse into
  // generic chord-tone snapping. Tonal lines privilege roots/bass motion; modal
  // and raga lines preserve their authored pitch vocabulary; diatonic lines use
  // chord tones structurally but scale motion between them; mixed/chromatic lines
  // are allowed controlled approach tones on weak beats.
  if (approach === 'tonal') shouldTargetChord = false;
  if (approach === 'modal' || isBagpipe || approach === 'raga') {
    isDownbeat = false;
    shouldTargetChord = false;
  }

  if (isDownbeat) {
    if (approach === 'tonal') {
      const rootTargetPc = targetChord.rootPc ?? target;
      target = nearestPc(pcOf(rootTargetPc), target);
    }
    const chordPcs = approach === 'tonal'
      ? [pcOf(targetChord.rootPc ?? target)]
      : targetChord.intervals.map(iv => pcOf(targetChord.rootPc + iv));
    if (chordPcs.length > 0) {
      let bestNote = target;
      let minDistance = Infinity;
      for (const cp of chordPcs) {
        const cand = nearestPc(cp, target);
        const dist = Math.abs(cand - target);
        if (dist < minDistance) {
          minDistance = dist;
          bestNote = cand;
        }
      }
      target = bestNote;
    }
  } else if (shouldTargetChord || (grammar && isBeatOne(c))) {
    const strategy = grammar?.targetToneStrategy ?? 'chord-tone-on-beat-1';
    const desired = chordTargetForStrategy({ ...c, chord: targetChord }, strategy, target);
    const desiredDist = Math.abs(desired - target);
    if (desiredDist <= 4 || onChordChange || isBeatOne(c)) target = desired;

    // Jazz-style chromatic enclosure: on the attack immediately before a strong
    // target, approach it from a semitone below rather than wandering randomly.
    if (grammar && /enclosure/i.test(strategy + ' ' + grammar.scaleMode) && c.beatInBar > 0 && c.beatInBar < 1.0 && rand01(c.seed ^ 0xace1) > 0.35) {
      target = desired - 1;
    }
  }

  if (approach === 'chordal' && !isDownbeat && c.chord.intervals.length && rand01(c.seed ^ 0x4c27) > 0.58) {
    const chordPcs = targetChord.intervals.map(iv => pcOf(targetChord.rootPc + iv));
    if (chordPcs.length) {
      target = nearestPc(chordPcs[Math.floor(rand01(c.seed ^ 0x7a12) * chordPcs.length) % chordPcs.length], target);
    }
  }

  // Turn sparse note attacks into a line: on the way between authored motif anchors,
  // choose the next scale step toward the upcoming anchor rather than re-selecting the
  // nearest chord/root independently on every onset. Strong beats still carry the
  // harmonic responsibility, while weak beats become connective motion.
  const nextMotif = nextMotifNote(c, pos);
  const betweenAnchors = c.previous !== undefined && nextMotif && best > 0.22;
  if (betweenAnchors && !isDownbeat) {
    const nextDegree = degreeForLine(c, nextMotif!.degree);
    const nextIdx = ((nextDegree % scale.length) + scale.length) % scale.length;
    const nextPc = scale[nextIdx];
    const nextTarget = nearestPc(nextPc, target);
    const connective = scaleStepToward(c.previous!, nextTarget, scale);
    const preferConnection = c.phraseStage === 'transition' || c.phraseStage === 'vary' || rand01(c.seed ^ 0x5a21) > 0.22;
    if (preferConnection && connective !== c.previous) {
      target = connective;
    }

    // The richer line vocabulary is deliberately role/style dependent:
    // chromatic approach is a choice, not the universal default. Jazz/blues,
    // tango and some groove idioms can use a single semitone approach into an
    // established target; modal/raga material stays within its authored pitch set.
    if ((approach === 'chromatic' || approach === 'mixed') && target !== nextTarget) {
      const chromaticAllowed = approach === 'chromatic'
        || rand01(c.seed ^ 0x71d2) > 0.64;
      const targetForApproach = nextTarget;
      if (chromaticAllowed && Math.abs(targetForApproach - c.previous!) >= 2) {
        const direction = Math.sign(targetForApproach - c.previous!);
        const chromatic = targetForApproach - direction;
        // Only use the chromatic neighbor on weak beats; the harmonic target
        // remains responsible for the structural beat that follows.
        if (!isStrongBeat && !isDownbeat) target = chromatic;
      }
    }
  }

  // Register Climaxing (Prompt 11): 75% peak for Solos
  if (c.sectionKind?.toLowerCase() === 'solo' && c.progress !== undefined) {
    const climaxFactor = 1.0 - Math.min(1.0, Math.abs(c.progress - 0.75) / 0.15); // sharp peak around 0.75
    if (climaxFactor > 0) {
      const climaxPitch = c.profile.high - 3;
      target = Math.round(target * (1 - climaxFactor) + climaxPitch * climaxFactor);
    }
  }

  let isLeap = false;
  if (c.previous) {
    if (Math.abs(target - c.previous) > 4) {
      isLeap = true;
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

    // Headroom-aware: only push up by as much of an octave as the instrument's
    // own range comfortably allows above its median, never a flat 12.
    const headroomAboveCentre = c.profile.high - c.profile.centre;
    const maxSafePush = Math.max(0, Math.min(12, headroomAboveCentre - 4)); // leave 4 semitones of ceiling
    const registerPush = isPeakSection && c.intensity > 0.7
      ? Math.round(maxSafePush * 0.6) // lift toward the climax, don't slam the ceiling
      : (isIntroOutro ? -7 : 0);

    const registerPushScale = c.profile.sustain === 'blown' ? 0.35 : c.profile.sustain === 'sustained' ? 0.7 : 1.0;
    target += Math.round(registerPush * registerPushScale);
  }

  const drift = target - c.profile.centre;
  if (Math.abs(drift) > 12) target -= Math.sign(drift) * 12;

  const folded = foldToRange(target, c.profile);
  const rapidRun = !!grammar && soloStage(c, grammar.phraseBars ?? c.motif.phraseBars ?? 4, grammar.phraseStages) === 'rapid-run';
  return { note: folded, isLeap, rapidRun, rapidRunScalePcs: grammar ? scale : undefined };
}

export interface PitchBendPoint { offset: number; value: number; }

/** Genre-native expressive pitch idioms. Values use MIDI's 14-bit bend range. */
export function melodyPitchBend(c: {
  midi: number; context: RhythmicContext; profile: VoiceProfile; genreId?: string; role: string;
  chord: ParsedChord; key: KeyInfo; seed: number; previousMidi?: number; durationSec?: number;
}): PitchBendPoint[] | undefined {
  const genre = (c.genreId ?? '').toLowerCase();
  const isBluesRock = /blues|rock/.test(genre);
  const inst = (c.profile.id ?? '').toLowerCase();
  const isBlownLine = c.profile.sustain === 'blown' && /trumpet|trombone|sax|horn|clarinet|oboe|flute|whistle|pipe|voice/.test(inst);
  const expressiveGenres = /jazz|swing|salsa|timba|ska|funk|gospel|blues|mariachi|soul|afrobeats/.test(genre);

  // Blown players often shape the arrival instead of dropping a perfectly centered
  // pitch onto the grid. Keep the gesture small: this is lip/air expression, not
  // a physics simulator, and it only activates in styles/instruments where the
  // source material already describes that vocabulary.
  if (isBlownLine && expressiveGenres && c.previousMidi !== undefined) {
    const interval = c.midi - c.previousMidi;
    const absInterval = Math.abs(interval);
    const roll = rand01(c.seed ^ 0x4b72);
    if (absInterval >= 2 && absInterval <= 7 && roll > 0.48) {
      const direction = Math.sign(interval);
      const semitoneDip = Math.min(0.62, 0.18 + absInterval * 0.055);
      const bend = Math.round(8192 - direction * semitoneDip * 4096);
      const glide = Math.min(0.12, Math.max(0.045, (c.durationSec ?? 0.25) * 0.22));
      return [
        { offset: 0, value: bend },
        { offset: glide, value: 8192 },
      ];
    }
  }
  const transition = c.context.transition;
  if (transition?.type === 'drop-out' || transition?.type === 'corte') {
    const bend = 8192 - 1500;
    return [
      { offset: 0, value: 8192 },
      { offset: 0.45, value: bend },
      { offset: 0.85, value: 8192 },
    ];
  }
  if ((c.role === 'lead' || c.role === 'melody') && isBluesRock && rand01(c.seed ^ 0xb31e) > 0.72) {
    const minorThirdPc = (c.key.tonicPc + 3) % 12;
    if (((c.midi % 12) + 12) % 12 === minorThirdPc) {
      // About +0.35 semitone with the common ±2-semitone pitch-bend range.
      const up = 8192 + 720;
      return [
        { offset: 0, value: 8192 },
        { offset: 0.28, value: up },
        { offset: 0.7, value: 8192 },
      ];
    }
  }
  return undefined;
}

export interface StyleOrnamentNote {
  midi: number;
  timeOffsetBeats: number;
  durBeats: number;
  velocityMult: number;
  articulation?: string;
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
  rapidRun = false,
  previousMidi?: number,
  genreId?: string,
): StyleOrnamentNote[] {
  if (!ornamentVocab || ornamentVocab.length === 0) return [];
  const out: StyleOrnamentNote[] = [];
  const art = (articulation ?? '').toLowerCase();
  const vocab = new Set(ornamentVocab.map(v => v.toLowerCase()));
  const inst = (profile.id ?? '').toLowerCase();
  const genre = (genreId ?? '').toLowerCase();

  const roll = rand01(seed ^ 0xfe41);
  const isStrongBeat = Math.abs(targetBeat - Math.round(targetBeat)) < 0.12 && (Math.round(targetBeat) % 2 === 0);

  // The final macro-phrase stage can request a compact scalar run into the
  // resolved target. This is deliberately generated here so it uses the same
  // style ornament vocabulary/performance path as other expressive gestures.
  if (rapidRun && (vocab.has('rapid-run') || vocab.has('run') || vocab.has('scalar-run'))) {
    const sorted = Array.from(new Set(_scalePcs.map(pc => ((pc % 12) + 12) % 12)));
    let cursor = targetMidi;
    const run: number[] = [];
    for (let i = 0; i < 3; i++) {
      let best = cursor - 1;
      let bestDist = Infinity;
      for (const pc of sorted) {
        const cand = nearestPc(pc, cursor - 1);
        if (cand < cursor && cursor - cand < bestDist) { best = cand; bestDist = cursor - cand; }
      }
      run.unshift(best);
      cursor = best;
    }
    run.forEach((midi, i) => out.push({
      midi: foldToRange(midi, profile),
      timeOffsetBeats: -0.30 + i * 0.10,
      durBeats: 0.07,
      velocityMult: 0.42 + i * 0.06,
      articulation: /sax|trumpet|trombone|horn|flute|clarinet|oboe|whistle|pipe/i.test(inst) ? 'legato' : 'staccato',
    }));
    return out;
  }

  // Wind/brass passing gestures: a small chromatic or scale-neighbor lead-in
  // gives the player somewhere to travel between phrase anchors instead of
  // making every note an isolated attack. The genre gate keeps this out of
  // traditions whose line ornament vocabulary does not call for it.
  const isBlownLine = profile.sustain === 'blown' && /trumpet|trombone|sax|horn|clarinet|oboe|flute|whistle|pipe/.test(inst);
  const gestureAllowed = /jazz|swing|salsa|timba|ska|funk|gospel|blues|mariachi|soul|afrobeats/.test(genre) ||
    /bend|scoop|portamento|slide|fall|doit|legato/.test(Array.from(vocab).join(' '));
  if (isBlownLine && gestureAllowed && previousMidi !== undefined && targetBeat > 0.3) {
    const distance = targetMidi - previousMidi;
    const absDistance = Math.abs(distance);
    if (absDistance >= 3 && absDistance <= 8 && roll > 0.32) {
      const direction = Math.sign(distance);
      const midpoint = previousMidi + direction * Math.max(1, Math.min(absDistance - 1, Math.round(absDistance / 2)));
      out.push({
        midi: foldToRange(midpoint, profile),
        timeOffsetBeats: -0.12,
        durBeats: 0.055,
        velocityMult: 0.36,
        articulation: 'legato',
      });
      if (absDistance >= 6 && roll > 0.66) {
        const nearTarget = targetMidi - direction * 1;
        out.push({
          midi: foldToRange(nearTarget, profile),
          timeOffsetBeats: -0.055,
          durBeats: 0.045,
          velocityMult: 0.42,
          articulation: 'legato',
        });
      }
      return out;
    }
  }

  // Bebop Enclosure (Prompt 11)
  if ((vocab.has('enclosure') || vocab.has('bebop') || /enclosure/.test(art)) && isStrongBeat) {
    if (roll > 0.35) {
      out.push({
        midi: foldToRange(targetMidi + 1, profile),
        timeOffsetBeats: -0.16,
        durBeats: 0.06,
        velocityMult: 0.40,
        articulation: 'staccato',
      });
      out.push({
        midi: foldToRange(targetMidi - 1, profile),
        timeOffsetBeats: -0.08,
        durBeats: 0.05,
        velocityMult: 0.45,
        articulation: 'staccato',
      });
    }
    return out;
  }

  // Celtic Cuts and Rolls (Prompt 12)
  const isCelticInstrument = /whistle|fiddle|bagpipe|uilleann|flute/i.test(profile.id || '');
  if (isCelticInstrument && isStrongBeat) {
    if (roll > 0.5) {
      // 5-note roll: target, target+2, target, target-1, target
      out.push({ midi: foldToRange(targetMidi + 2, profile), timeOffsetBeats: -0.16, durBeats: 0.04, velocityMult: 0.35, articulation: 'roll' });
      out.push({ midi: targetMidi, timeOffsetBeats: -0.12, durBeats: 0.04, velocityMult: 0.40, articulation: 'roll' });
      out.push({ midi: foldToRange(targetMidi - 1, profile), timeOffsetBeats: -0.08, durBeats: 0.04, velocityMult: 0.30, articulation: 'roll' });
      out.push({ midi: targetMidi, timeOffsetBeats: -0.04, durBeats: 0.04, velocityMult: 0.45, articulation: 'roll' });
    } else {
      // Cut: a rapid flick to a higher pitch (target + 3)
      out.push({
        midi: foldToRange(targetMidi + 3, profile),
        timeOffsetBeats: -0.08,
        durBeats: 0.04,
        velocityMult: 0.40,
        articulation: 'grace',
      });
    }
    return out;
  }

  // Tango Látigo (Whip Glissando) (Prompt 12)
  const isStrings = /strings|violin|cello|viola/i.test(profile.id || '');
  const isTango = vocab.has('latigo') || vocab.has('arrastre') || /latigo|tango/i.test(art || '');
  if (isStrings && isTango && roll > 0.6) {
    for (let i = 0; i < 4; i++) {
      out.push({
        midi: foldToRange(targetMidi - 12 + i * 4, profile),
        timeOffsetBeats: -0.20 + i * 0.05,
        durBeats: 0.04,
        velocityMult: 0.35 + i * 0.15,
        articulation: 'latigo',
      });
    }
    return out;
  }

  // Arrastre (Tango drag into downbeat)
  if ((vocab.has('arrastre') || /arrastre/.test(art)) && (isStrongBeat || /arrastre/.test(art))) {
    if (roll > 0.35) {
      const lowerHalfStep = targetMidi - 1;
      out.push({
        midi: foldToRange(lowerHalfStep, profile),
        timeOffsetBeats: -0.12,
        durBeats: 0.06,
        velocityMult: 0.45,
        articulation: 'arrastre',
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
        articulation: 'grace',
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
      articulation: 'mordent',
    });
    out.push({
      midi: targetMidi,
      timeOffsetBeats: -0.05,
      durBeats: 0.04,
      velocityMult: 0.45,
      articulation: 'mordent',
    });
    return out;
  }

  // Turn (upper-main-lower-main)
  if ((vocab.has('turn') || /turn/.test(art)) && roll > 0.6) {
    const upper = targetMidi + 2;
    const lower = targetMidi - 2;
    out.push({ midi: foldToRange(upper, profile), timeOffsetBeats: -0.14, durBeats: 0.04, velocityMult: 0.32, articulation: 'grace' });
    out.push({ midi: targetMidi, timeOffsetBeats: -0.09, durBeats: 0.04, velocityMult: 0.38, articulation: 'grace' });
    out.push({ midi: foldToRange(lower, profile), timeOffsetBeats: -0.045, durBeats: 0.04, velocityMult: 0.30, articulation: 'grace' });
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
