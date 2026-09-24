import type { VoiceProfile } from './instrumentProfile';
import { foldToRange } from './instrumentProfile';
import { rand01 } from '../generators/groove';
import type { RhythmicContext } from '../sequencing/grid';

/**
 * ARTICULATION
 * ============
 *
 * Articulation is a first-class performance layer.  The renderer is Faust
 * physical-model synthesis, so these gestures are not merely names attached
 * to MIDI notes: the realization layer controls note length, velocity, onset,
 * pitch trajectories, CC-driven exciter parameters and (where appropriate)
 * repeated attacks.  The Faust instrument layer then maps those controls to
 * actual pluck, bow, membrane, body-impact, reed and resonator behavior.
 *
 * The model deliberately keeps a distinction between: 
 *   - faithful: the gesture has a corresponding physical/DSP mechanism;
 *   - approximate: the mechanism is represented by a physically related
 *     gesture, but is not a measured performer-specific model;
 *   - symbolic: there is no adequate instrument model yet and the system uses
 *     an explicitly marked stand-in.
 *
 * This prevents a UI label from claiming that an articulation was rendered
 * when the DSP did not actually receive a corresponding control.
 */

export type RealizationPrimitive =
  | 'note-length'
  | 'velocity'
  | 'onset-offset'
  | 'extra-notes'
  | 'pitch-bend'
  | 'cc-automation'
  | 'preset-swap';

export type Fidelity =
  /** The Faust physical model reproduces the gesture as written. */
  | 'faithful'
  /** Recognisable, but the physical mechanism differs. */
  | 'approximate'
  /** Stands in for the gesture; a listener hears a placeholder. */
  | 'symbolic';

export type ArticulationFamily =
  | 'duration'
  | 'attack'
  | 'pitch-gesture'
  | 'reiteration'
  | 'timbre'
  | 'dynamic';

export interface CcEnvelopePoint {
  /** 0..1 through the note's own duration. */
  at: number;
  /** 0..127 */
  value: number;
}

export interface CcEnvelope {
  cc: number;
  points: CcEnvelopePoint[];
}

export interface BendPoint {
  /** 0..1 through the note's own duration. */
  at: number;
  /** semitones relative to the written pitch; the renderer scales to the bend range. */
  semitones: number;
}

export interface ReiterationSpec {
  /** Number of repeats across the note; 0 disables. */
  count: number;
  /** 'even' fills the note; 'front' crams the repeats into the attack. */
  distribution: 'even' | 'front' | 'accelerate';
  /** Velocity multiplier applied to each repeat after the first. */
  decay: number;
  /** Semitone offsets cycled across the repeats (empty = same pitch). */
  pitchCycle?: number[];
}

export interface GraceSpec {
  /** Semitone offsets from the target, played before it. */
  offsets: number[];
  /** Beats before the target the first grace note lands. */
  leadBeats: number;
  /** Velocity multiplier. */
  velocity: number;
  /** When true, offsets are resolved against the active pitch set, not chromatically. */
  diatonic?: boolean;
}

export interface ArticulationSpec {
  id: string;
  family: ArticulationFamily;
  /** Names in catalogs and style grammars that resolve to this spec. */
  aliases: string[];
  /** Which primitives are used. Drives the validator and the UI explanation. */
  uses: RealizationPrimitive[];
  fidelity: Fidelity;
  /** Plain-language note on what is lost, when anything is. */
  caveat?: string;

  /** Multiplier on the note's sounding length. */
  durationScale?: number;
  /** Hard ceiling on sounding length, in beats. */
  maxBeats?: number;
  /** Fraction of the gap to the next note this articulation is allowed to fill. */
  gapFill?: number;
  /** Multiplier on velocity. */
  velocityScale?: number;
  /** Fixed timing shift in milliseconds; negative is early. */
  onsetMs?: number;
  bend?: BendPoint[];
  cc?: CcEnvelope[];
  reiteration?: ReiterationSpec;
  grace?: GraceSpec;
  /** Requests a different sampled preset; resolved by the soundfont layer. */
  presetTag?: string;
  /** Families of instrument this articulation is meaningful on. */
  instrumentFamilies?: string[];
}

/* ------------------------------------------------------------------------- */
/* The vocabulary                                                            */
/* ------------------------------------------------------------------------- */

const SPECS: ArticulationSpec[] = [
  /* --- duration -------------------------------------------------------- */
  {
    id: 'staccato',
    family: 'duration',
    aliases: [
      'staccato', 'seco', 'picado', 'short', 'muted', 'staccato-chop', 'percussive-strike', 'short', 'detached', 'punteado', 'stacc',
      'pick', 'picked', 'flatpick', 'bright-pluck', 'pop-pluck', 'percussive-finger', 'percussive-scratch', 'plectrum', 'plucked', 'fingerstyle', 'slap', 'martillo', 'cáscara', 'cascara', 'golpe seco',
      'gated', 'down-pick', 'down-picking', 'alternate-picking', 'tamborim', 'bachi', 'alternate-pluck', 'upstroke', 'offbeat chop', 'skank', 'taconeo', 'heel-toe', 'slap-tap', 'staccato-octaves', 'distorted',
    ],
    uses: ['note-length', 'velocity'],
    fidelity: 'faithful',
    durationScale: 0.42,
    gapFill: 0.35,
    velocityScale: 1.02,
  },
  {
    id: 'staccatissimo',
    family: 'duration',
    aliases: ['staccatissimo', 'very short', 'clipped', 'stopped'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 0.24,
    gapFill: 0.2,
  },
  {
    id: 'tenuto',
    family: 'duration',
    aliases: ['tenuto', 'sostenuto', 'held', 'full value'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 1.0,
    gapFill: 0.96,
  },
  {
    id: 'legato',
    family: 'duration',
    aliases: ['legato', 'ligado', 'slur', 'breath', 'phrase-end', 'smooth', 'cantabile', 'espressivo', 'sustain', 'sustained', 'drone', 'bellows phrasing'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 1.35,
    gapFill: 1.06,
  },
  {
    id: 'portato',
    family: 'duration',
    aliases: ['portato', 'louré', 'loure', 'half-detached'],
    uses: ['note-length', 'velocity'],
    fidelity: 'faithful',
    durationScale: 0.78,
    gapFill: 0.7,
  },

  /* --- attack ----------------------------------------------------------- */
  {
    id: 'accent',
    family: 'attack',
    aliases: ['accent', 'accented', 'accented-arrival', 'marcato-light', 'martellato', 'palmas-fuertes', 'staccato-accent', 'horn-stab', 'stab', '>', 'stab', 'campana', 'ride', 'bell', 'rim', 'rimshot', 'paila', 'palmas-claras', 'cascara-side-stick', 'clave-strike', 'stabs'],
    uses: ['velocity'],
    fidelity: 'faithful',
    velocityScale: 1.22,
    durationScale: 0.88,
  },
  {
    id: 'marcato',
    family: 'attack',
    aliases: ['marcato', 'marcado', 'marked', 'en 4', 'marcato en 4', 'octave marcato', 'variación', 'variacion'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.16,
    durationScale: 0.7,
    gapFill: 0.6,
  },
  {
    id: 'sforzando',
    family: 'attack',
    aliases: ['sforzando', 'sfz', 'sf', 'fp', 'forte-piano'],
    uses: ['velocity'],
    fidelity: 'faithful',
    velocityScale: 1.32,
  },
  {
    id: 'ghost',
    family: 'attack',
    aliases: ['ghost', 'ghosted', 'ghost-aware', 'dead note', 'dead-note', 'ghost-note', 'palmas-sordas', 'dead-note', 'muffled', 'muff', 'soft'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.34,
    durationScale: 0.35,
  },
  {
    id: 'flam',
    family: 'attack',
    aliases: ['flam', 'grace-stroke'],
    uses: ['extra-notes', 'onset-offset'],
    fidelity: 'faithful',
    grace: { offsets: [0], leadBeats: 0.035, velocity: 0.45 },
  },
  {
    id: 'drag',
    family: 'attack',
    aliases: ['drag', 'ruff'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [0, 0], leadBeats: 0.07, velocity: 0.38 },
  },

  /* --- pitch gestures --------------------------------------------------- */
  {
    id: 'arrastre',
    family: 'pitch-gesture',
    aliases: ['arrastre', 'drag-into', 'yumba-drag'],
    uses: ['extra-notes', 'pitch-bend', 'velocity'],
    fidelity: 'approximate',
    caveat: 'The performance layer realizes the approach with lead-in notes and a pitch trajectory; the Faust instrument also receives the arrastre articulation code so its exciter can change with the gesture.',
    grace: { offsets: [-2, -1], leadBeats: 0.16, velocity: 0.42 },
    bend: [
      { at: 0, semitones: -0.45 },
      { at: 0.16, semitones: 0 },
    ],
    velocityScale: 1.1,
    instrumentFamilies: ['bellows-and-keys', 'bowed', 'plucked'],
  },
  {
    id: 'scoop',
    family: 'pitch-gesture',
    aliases: ['scoop', 'doit-up', 'lift-in', 'fall-off', 'subito-piano'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0, semitones: -1.1 },
      { at: 0.22, semitones: 0 },
    ],
  },
  {
    id: 'fall',
    family: 'pitch-gesture',
    aliases: ['fall', 'drop', 'doit-down', 'caida', 'fall-off', 'fall_off', 'subito-piano'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0.5, semitones: 0 },
      { at: 0.75, semitones: -1.8 },
      { at: 1, semitones: -3.5 },
    ],
  },
  {
    id: 'doit',
    family: 'pitch-gesture',
    aliases: ['doit', 'rip-up', 'rip'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0.55, semitones: 0 },
      { at: 0.8, semitones: 2.2 },
      { at: 1, semitones: 4.0 },
    ],
  },
  {
    id: 'cuica-friction',
    family: 'pitch-gesture',
    aliases: ['cuica-friction', 'friction_mod', 'cuica', 'friction-mod', 'cuíca'],
    uses: ['pitch-bend', 'cc-automation'],
    fidelity: 'faithful',
    bend: [
      { at: 0, semitones: 0 },
      { at: 0.3, semitones: 2.5 },
      { at: 0.7, semitones: 5.0 },
      { at: 1, semitones: 7.0 },
    ],
    cc: [{ cc: 74, points: [{ at: 0, value: 50 }, { at: 0.5, value: 95 }, { at: 1, value: 70 }] }],
  },
  {
    id: 'growl',
    family: 'timbre',
    aliases: ['growl', 'flutter_tongue', 'flutter-tongue', 'frullato', 'dirty-tone'],
    uses: ['cc-automation', 'velocity'],
    fidelity: 'faithful',
    velocityScale: 1.15,
    cc: [
      { cc: 1, points: [{ at: 0, value: 20 }, { at: 0.2, value: 90 }, { at: 0.8, value: 85 }, { at: 1, value: 40 }] },
      { cc: 74, points: [{ at: 0, value: 75 }, { at: 0.5, value: 110 }, { at: 1, value: 90 }] },
    ],
  },
  {
    id: 'bend',
    family: 'pitch-gesture',
    aliases: ['bend', 'blue-note-bend', 'string-bend', 'oshide'],
    uses: ['pitch-bend'],
    fidelity: 'faithful',
    bend: [
      { at: 0, semitones: 0 },
      { at: 0.3, semitones: 0.55 },
      { at: 0.8, semitones: 0.55 },
      { at: 1, semitones: 0.1 },
    ],
  },
  {
    id: 'portamento',
    family: 'pitch-gesture',
    aliases: ['portamento', 'slide', 'glissando', 'gliss', 'hua yin', 'warm-sub-slide', 'glide'],
    uses: ['note-length'],
    fidelity: 'faithful',
    durationScale: 1.15,
  },
  {
    id: 'vibrato',
    family: 'pitch-gesture',
    aliases: ['vibrato', 'vib', 'wide vibrato'],
    uses: ['cc-automation'],
    fidelity: 'approximate',
    caveat: 'The current renderer controls vibrato depth at the performance layer; instrument-specific vibrato rate remains model-dependent.',
    cc: [{ cc: 1, points: [{ at: 0, value: 0 }, { at: 0.35, value: 18 }, { at: 0.7, value: 62 }, { at: 1, value: 54 }] }],
  },

  /* --- reiteration ------------------------------------------------------ */
  {
    id: 'tremolo',
    family: 'reiteration',
    aliases: ['tremolo', 'trem', 'tremolando'],
    uses: ['extra-notes'],
    fidelity: 'approximate',
    caveat: 'Re-articulated as discrete repeats; a bowed tremolo’s continuous noise floor is not reproduced.',
    reiteration: { count: 6, distribution: 'even', decay: 0.9 },
  },
  {
    id: 'roll',
    family: 'reiteration',
    aliases: ['roll', 'buzz', 'buzz-roll', 'redoble'],
    uses: ['extra-notes'],
    fidelity: 'approximate',
    caveat: 'A press/buzz roll is rendered as fast discrete strokes; the sustained rattle is not sampled.',
    reiteration: { count: 8, distribution: 'accelerate', decay: 0.86 },
  },
  {
    id: 'rasgueado',
    family: 'reiteration',
    aliases: ['rasgueado', 'rasgueo', 'strum-roll', 'abanico'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'approximate',
    caveat: 'The performance layer realizes the finger sequence as separate attacks; the Faust guitar model changes its excitation/timbre for the rasgueado/abanico gesture.',
    reiteration: { count: 5, distribution: 'accelerate', decay: 0.92 },
    velocityScale: 1.08,
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'alzapua',
    family: 'reiteration',
    aliases: ['alzapúa', 'alzapua', 'thumb-sweep', 'thumb-apoyando', 'pulgar-apoyando'],
    uses: ['extra-notes', 'velocity'],
    fidelity: 'approximate',
    caveat: 'The performance layer realizes the thumb sweep as alternating attacks while the Faust plucked-string model changes excitation emphasis.',
    reiteration: { count: 3, distribution: 'front', decay: 0.95, pitchCycle: [-12, 0, 0] },
    instrumentFamilies: ['plucked'],
  },
  {
    id: 'trill',
    family: 'reiteration',
    aliases: ['trill', 'tr', 'shake'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    reiteration: { count: 8, distribution: 'even', decay: 0.95, pitchCycle: [0, 2] },
  },
  {
    id: 'mordent',
    family: 'reiteration',
    aliases: ['mordent', 'prall', 'pralltriller'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [2, 0], leadBeats: 0.1, velocity: 0.4, diatonic: true },
  },
  {
    id: 'turn',
    family: 'reiteration',
    aliases: ['turn', 'gruppetto'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [2, 0, -2], leadBeats: 0.15, velocity: 0.35, diatonic: true },
  },
  {
    id: 'grace',
    family: 'reiteration',
    aliases: ['grace', 'grace-note', 'cut', 'acciaccatura', 'appoggiatura'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [2], leadBeats: 0.08, velocity: 0.38, diatonic: true },
  },
  {
    id: 'rapid-run',
    family: 'reiteration',
    aliases: ['rapid-run', 'run', 'scalar-run', 'falseta-run'],
    uses: ['extra-notes'],
    fidelity: 'faithful',
    grace: { offsets: [-5, -3, -1], leadBeats: 0.3, velocity: 0.46, diatonic: true },
  },

  /* --- timbre ----------------------------------------------------------- */
  {
    id: 'palm-mute',
    family: 'timbre',
    aliases: ['palm-mute', 'palm mute', 'pm', 'muted', 'mute', 'damp', 'apagado'],
    uses: ['preset-swap', 'note-length', 'velocity', 'cc-automation'],
    fidelity: 'approximate',
    caveat: 'The Faust instrument receives the mute control and short gate; the physical model reduces resonance and attack rather than relying on a missing sample preset.',
    presetTag: 'muted',
    durationScale: 0.34,
    velocityScale: 0.92,
    cc: [{ cc: 74, points: [{ at: 0, value: 34 }] }],
  },
  {
    id: 'pizzicato',
    family: 'timbre',
    aliases: ['pizzicato', 'pizz', 'plucked', 'tenuto-pizz', 'sustained-pizz', 'sustained-pizz'],
    uses: ['preset-swap', 'note-length'],
    fidelity: 'faithful',
    presetTag: 'pizzicato',
    durationScale: 0.4,
  },
  {
    id: 'arco',
    family: 'timbre',
    aliases: ['arco', 'bowed', 'detaché', 'detache', 'spiccato', 'sul-ponticello', 'sul-tasto'],
    uses: ['preset-swap', 'note-length'],
    fidelity: 'faithful',
    presetTag: 'arco',
    durationScale: 1.2,
    gapFill: 0.98,
  },
  {
    id: 'harmonic',
    family: 'timbre',
    aliases: ['harmonic', 'harmonics', 'fan yin', 'flageolet', 'natural-harmonic'],
    uses: ['preset-swap', 'extra-notes', 'velocity'],
    fidelity: 'approximate',
    caveat: 'Sounded an octave (or twelfth) up at low velocity; without a harmonics preset the timbre is the open string.',
    presetTag: 'harmonic',
    grace: { offsets: [12], leadBeats: 0.02, velocity: 0.22 },
    velocityScale: 0.6,
  },
  {
    id: 'brushed',
    family: 'timbre',
    aliases: ['brush', 'brushed', 'sweep', 'escobilla', 'brushes', 'brush-up', 'scrape', 'brush-sweep', 'brush-tap', 'guacharaca'],
    uses: ['preset-swap', 'velocity'],
    fidelity: 'approximate',
    caveat: 'Brush textures rely on the kit having brush samples; otherwise a soft rim/hat stands in.',
    presetTag: 'brush',
    velocityScale: 0.62,
  },
  {
    id: 'chicharra',
    family: 'timbre',
    aliases: ['chicharra', 'latigo', 'látigo', 'tambor', 'golpe', 'zapateado', 'golpe-tap', 'golpe/corte'],
    uses: ['preset-swap', 'velocity', 'extra-notes'],
    fidelity: 'symbolic',
    caveat: 'The current physical model renders the gesture as a body/percussive excitation. It is intentionally marked symbolic until a measured instrument-specific model is added.',
    presetTag: 'percussive-effect',
    velocityScale: 0.8,
  },
  {
    id: 'low-tone',
    family: 'timbre',
    aliases: ['bass', 'bass tone', 'bajo', 'low tone', 'heel', 'surdo-open', 'abierto-open', 'sub', 'sub-bass'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    // The low open stroke on a hand drum: the drum's own `low` key, struck
    // fully rather than damped. Not the bass *role*, which is a track job.
    velocityScale: 0.88,
    durationScale: 1.15,
    instrumentFamilies: ['hand-drums', 'metal-and-wood'],
  },
  {
    id: 'open',
    family: 'timbre',
    aliases: [
      'open', 'ordinario', 'ord', 'natural',
      // The contract's generic placeholder, emitted by `base()` when a world
      // states no articulation grammar of its own. It means "play it plainly",
      // which is exactly this spec.
      'style-native attack and release', 'style-dependent', 'style-native',
    ],
    uses: [],
    fidelity: 'faithful',
  },

  /* --- dynamic ---------------------------------------------------------- */
  {
    id: 'crescendo',
    family: 'dynamic',
    aliases: ['crescendo', 'cresc', 'swell', 'bellows-swell'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 1.2,
    durationScale: 1.1,
  },
  {
    id: 'diminuendo',
    family: 'dynamic',
    aliases: ['diminuendo', 'dim', 'decresc', 'decrescendo', 'fade'],
    uses: ['velocity', 'note-length'],
    fidelity: 'faithful',
    velocityScale: 0.8,
    durationScale: 0.95,
  },
  {
    id: 'pesante',
    family: 'dynamic',
    aliases: ['pesante', 'pesado', 'heavy', 'heavy', 'weighted'],
    uses: ['velocity', 'note-length', 'onset-offset'],
    fidelity: 'faithful',
    velocityScale: 1.14,
    durationScale: 1.25,
    onsetMs: 9,
  },
];

/* ------------------------------------------------------------------------- */
/* Lookup                                                                     */
/* ------------------------------------------------------------------------- */

export const ARTICULATIONS: Record<string, ArticulationSpec> = Object.fromEntries(
  SPECS.map(s => [s.id, s]),
);

const ALIAS_INDEX: Map<string, ArticulationSpec> = (() => {
  const m = new Map<string, ArticulationSpec>();
  for (const spec of SPECS) {
    m.set(spec.id.toLowerCase(), spec);
    for (const alias of spec.aliases) m.set(alias.toLowerCase(), spec);
  }
  return m;
})();

/**
 * Resolve a free-text articulation name from a catalog or style grammar.
 * Catalogs are authored by humans in many languages, so this falls back to a
 * substring scan before giving up.
 */
export function resolveArticulation(name: string | undefined): ArticulationSpec | undefined {
  if (!name) return undefined;
  const key = name.trim().toLowerCase();
  if (!key) return undefined;
  const direct = ALIAS_INDEX.get(key);
  if (direct) return direct;
  for (const [alias, spec] of ALIAS_INDEX) {
    if (alias.length >= 4 && key.includes(alias)) return spec;
  }
  return undefined;
}

/** Resolve a whole articulation list; later entries layer over earlier ones. */
export function resolveArticulationStack(names: (string | undefined)[]): ArticulationSpec[] {
  const out: ArticulationSpec[] = [];
  const seen = new Set<string>();
  for (const n of names) {
    const spec = resolveArticulation(n);
    if (spec && !seen.has(spec.id)) {
      seen.add(spec.id);
      out.push(spec);
    }
  }
  return out;
}

/* ------------------------------------------------------------------------- */
/* Realization                                                                */
/* ------------------------------------------------------------------------- */

export interface ArticulationRequest {
  specs: ArticulationSpec[];
  profile: VoiceProfile;
  /** Written pitch. */
  midi: number;
  /** Written velocity, 1..127. */
  velocity: number;
  /** Written sounding length, in beats. */
  lengthBeats: number;
  /** Beats until the next attack on this voice. */
  gapBeats: number;
  beatsPerBar: number;
  secPerBeat: number;
  /** Absolute time of the written attack, in seconds. */
  time: number;
  /** Pitch classes the ornaments may use when `diatonic` is set. */
  pitchSet?: number[];
  /** 0..1 — how strongly articulations are realized. The user's expression dial. */
  expression: number;
  context?: RhythmicContext;
  seed: number;
  /** Semitone range of the synth's pitch-bend wheel. */
  bendRangeSemitones?: number;
}

export interface RealizedNote {
  time: number;
  durSeconds: number;
  midi: number;
  velocity: number;
  /** MIDI 14-bit bend trajectory, offsets in seconds from this note's onset. */
  pitchBend?: { offset: number; value: number }[];
  /** Marks generated ornament/repeat notes so the mixer can trim them first. */
  ornament?: boolean;
}

export interface RealizedCc {
  /** Absolute seconds. */
  time: number;
  cc: number;
  value: number;
}

export interface Realization {
  notes: RealizedNote[];
  ccs: RealizedCc[];
  /** Preset tag the soundfont layer should try to honour, if any. */
  presetTag?: string;
  /** Aggregated fidelity of the gestures applied, worst-case. */
  fidelity: Fidelity;
  /** Caveats worth surfacing in the inspector. */
  caveats: string[];
}

const FIDELITY_RANK: Record<Fidelity, number> = { faithful: 0, approximate: 1, symbolic: 2 };

function bendValue(semitones: number, range: number): number {
  const clamped = Math.max(-range, Math.min(range, semitones));
  return Math.round(8192 + (clamped / range) * 8191);
}

function nearestFromSet(target: number, pitchSet: number[] | undefined, fallback: number): number {
  if (!pitchSet?.length) return fallback;
  let best = fallback;
  let bestDist = Infinity;
  for (const pc of pitchSet) {
    for (let octave = -2; octave <= 2; octave++) {
      const cand = pc + 12 * (Math.round((target - pc) / 12) + octave);
      const d = Math.abs(cand - target);
      if (d < bestDist) {
        bestDist = d;
        best = cand;
      }
    }
  }
  return best;
}

/**
 * Turn one written attack plus its articulation stack into the notes and CC
 * messages the Faust physical model actually receives.
 *
 * The `expression` dial scales everything continuous: at 0 the note is played
 * as written with no ornament, no bend and no CC shaping; at 1 every gesture is
 * realized at full depth. 0.5 is "as the genre intends".
 */
export function realizeArticulation(req: ArticulationRequest): Realization {
  const {
    specs, profile, midi, velocity, lengthBeats, gapBeats,
    secPerBeat, time, expression, seed, pitchSet,
  } = req;
  const range = req.bendRangeSemitones ?? 2;
  const depth = Math.max(0, Math.min(1, expression));

  let durationScale = 1;
  let velocityScale = 1;
  let onsetMs = 0;
  let gapFill: number | undefined;
  let maxBeats: number | undefined;
  let presetTag: string | undefined;
  let fidelity: Fidelity = 'faithful';
  const caveats: string[] = [];

  const bends: BendPoint[] = [];
  const envelopes: CcEnvelope[] = [];
  let reiteration: ReiterationSpec | undefined;
  let grace: GraceSpec | undefined;

  for (const spec of specs) {
    if (spec.durationScale !== undefined) durationScale *= lerpTo1(spec.durationScale, depth);
    if (spec.velocityScale !== undefined) velocityScale *= lerpTo1(spec.velocityScale, depth);
    if (spec.onsetMs !== undefined) onsetMs += spec.onsetMs * depth;
    if (spec.gapFill !== undefined) gapFill = gapFill === undefined ? spec.gapFill : Math.max(gapFill, spec.gapFill);
    if (spec.maxBeats !== undefined) maxBeats = maxBeats === undefined ? spec.maxBeats : Math.min(maxBeats, spec.maxBeats);
    if (spec.presetTag) presetTag = spec.presetTag;
    if (spec.bend) bends.push(...spec.bend);
    if (spec.cc) envelopes.push(...spec.cc);
    if (spec.reiteration) reiteration = spec.reiteration;
    if (spec.grace) grace = spec.grace;
    if (FIDELITY_RANK[spec.fidelity] > FIDELITY_RANK[fidelity]) fidelity = spec.fidelity;
    if (spec.caveat) caveats.push(spec.caveat);
  }

  /* ---- sounding length -------------------------------------------------- */
  let beats = lengthBeats * durationScale;
  if (gapFill !== undefined) beats = Math.min(Math.max(beats, gapBeats * gapFill * 0.55), gapBeats * gapFill);
  if (maxBeats !== undefined) beats = Math.min(beats, maxBeats);
  if (profile.sustain === 'decaying') beats = Math.min(beats, profile.ring);
  if (profile.sustain === 'percussive') beats = Math.min(beats, 0.4);
  beats = Math.max(0.03, beats);

  const durSeconds = beats * secPerBeat;
  const onset = time + (onsetMs * depth) / 1000;
  const vel = Math.max(1, Math.min(127, Math.round(velocity * velocityScale)));

  const notes: RealizedNote[] = [];
  const ccs: RealizedCc[] = [];

  /* ---- grace notes ------------------------------------------------------ */
  if (grace && depth > 0.15) {
    const lead = grace.leadBeats * (0.5 + depth * 0.7);
    grace.offsets.forEach((offset, i) => {
      const raw = midi + offset;
      const resolved = grace.diatonic ? nearestFromSet(raw, pitchSet, raw) : raw;
      const step = grace.offsets.length > 1 ? (i / (grace.offsets.length - 1)) : 0;
      notes.push({
        time: onset - (lead - step * lead * 0.8) * secPerBeat,
        durSeconds: Math.max(0.02, lead * 0.5 * secPerBeat),
        midi: foldToRange(resolved, profile),
        velocity: Math.max(1, Math.round(vel * grace.velocity * (0.7 + depth * 0.5))),
        ornament: true,
      });
    });
  }

  /* ---- pitch bend ------------------------------------------------------- */
  let pitchBend: RealizedNote['pitchBend'];
  if (bends.length && depth > 0.1) {
    const merged = bends
      .slice()
      .sort((a, b) => a.at - b.at)
      .map(p => ({
        offset: Math.max(0, Math.min(0.99, p.at)) * durSeconds,
        value: bendValue(p.semitones * depth, range),
      }));
    // Always return the wheel to centre so the next note on this channel is in tune.
    if (merged[merged.length - 1].value !== 8192) {
      merged.push({ offset: durSeconds * 0.995, value: 8192 });
    }
    if (merged[0].offset > 0.001) merged.unshift({ offset: 0, value: 8192 });
    pitchBend = merged;
  }

  /* ---- the written note, or its reiteration ---------------------------- */
  if (reiteration && reiteration.count > 1 && depth > 0.2) {
    const count = Math.max(2, Math.round(reiteration.count * (0.45 + depth * 0.75)));
    const cycle = reiteration.pitchCycle ?? [0];
    for (let i = 0; i < count; i++) {
      const t =
        reiteration.distribution === 'front'
          ? Math.pow(i / count, 1.6) * 0.45
          : reiteration.distribution === 'accelerate'
            ? 1 - Math.pow(1 - i / count, 1.7)
            : i / count;
      const offsetPc = cycle[i % cycle.length];
      const raw = midi + offsetPc;
      notes.push({
        time: onset + t * durSeconds,
        durSeconds: Math.max(0.025, (durSeconds / count) * 0.92),
        midi: foldToRange(offsetPc === 0 ? midi : nearestFromSet(raw, pitchSet, raw), profile),
        velocity: Math.max(1, Math.round(vel * Math.pow(reiteration.decay, i) * (i === 0 ? 1 : 0.94))),
        pitchBend: i === 0 ? pitchBend : undefined,
        ornament: i > 0,
      });
    }
  } else {
    notes.push({ time: onset, durSeconds, midi, velocity: vel, pitchBend });
  }

  /* ---- CC envelopes ----------------------------------------------------- */
  for (const env of envelopes) {
    const sorted = env.points.slice().sort((a, b) => a.at - b.at);
    for (const point of sorted) {
      // At expression 0 the envelope collapses to the neutral resting value so
      // the dial genuinely turns the behaviour off rather than halving it.
      const neutral = env.cc === 11 ? 127 : env.cc === 74 ? 64 : 0;
      ccs.push({
        time: onset + Math.max(0, Math.min(1, point.at)) * durSeconds,
        cc: env.cc,
        value: Math.max(0, Math.min(127, Math.round(neutral + (point.value - neutral) * depth))),
      });
    }
    // Restore the neutral value just after the note so the envelope does not
    // leak onto whatever the channel plays next.
    ccs.push({
      time: onset + durSeconds + 0.004,
      cc: env.cc,
      value: env.cc === 11 ? 127 : env.cc === 74 ? 64 : 0,
    });
  }

  // A hair of stochastic variation on repeated strokes; without it rolls and
  // rasgueados read as a machine gun rather than a hand.
  if (notes.length > 2) {
    notes.forEach((n, i) => {
      if (!n.ornament) return;
      const jitter = (rand01(seed ^ (i * 2654435761)) - 0.5) * 0.008;
      n.time += jitter;
      n.velocity = Math.max(1, Math.min(127, Math.round(n.velocity * (0.94 + rand01(seed + i) * 0.14))));
    });
  }

  return { notes, ccs, presetTag, fidelity, caveats: Array.from(new Set(caveats)) };
}

/** Scale a multiplier toward 1 as the expression dial closes. */
function lerpTo1(value: number, depth: number): number {
  return 1 + (value - 1) * depth;
}

/**
 * A machine-readable statement of what the pipeline can and cannot render.
 * Consumed by the validator and by the style inspector.
 */
export function articulationCapabilityReport(): {
  primitive: RealizationPrimitive;
  available: boolean;
  note: string;
}[] {
  return [
    { primitive: 'note-length', available: true, note: 'Gate length is fully under engine control.' },
    { primitive: 'velocity', available: true, note: 'Selects the sample layer; range depends on how many layers the bank provides.' },
    { primitive: 'onset-offset', available: true, note: 'Sub-millisecond scheduling against the audio clock.' },
    { primitive: 'extra-notes', available: true, note: 'Unlimited, but each costs a voice; dense rolls can exhaust polyphony on mobile banks.' },
    { primitive: 'pitch-bend', available: true, note: 'Channel-wide and limited to the bend range (±2 semitones unless RPN 0 is set). Two parts cannot bend independently on one channel.' },
    { primitive: 'cc-automation', available: true, note: 'CC1/CC7/CC11/CC64/CC74 are honoured. Vibrato rate and filter resonance are fixed by the bank.' },
    { primitive: 'preset-swap', available: true, note: 'Bank/program change only, and only where the directory actually contains the alternate articulation.' },
  ];
}
