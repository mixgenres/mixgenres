import type { SectionEnergy } from '../types';

/**
 * THE DIALS
 * =========
 *
 * This is the whole user-facing control surface, declared in one place so it
 * can be reasoned about as a set rather than discovered by reading the UI.
 *
 * The design brief: the person using this is *sketching*. They are not filling
 * in notation. They state an intention and the genre/style engine supplies the
 * craft. So every dial has to satisfy three tests:
 *
 *   1. **A musician would say it out loud.** "Make the bridge bigger", "sit
 *      back a bit", "let the guitar play it like a reggae part". Nobody says
 *      "set density to 0.6".
 *   2. **The genre decides what it means.** The dial states an intention; the
 *      world contract translates it. Energy 5 in flamenco is not energy 5 in
 *      house, and the dial must not pretend otherwise.
 *   3. **It is safe to turn.** A sketchbook control that can produce a broken
 *      song is a bad control. Every dial is clamped, every combination is
 *      valid, and nothing requires undo to recover from.
 *
 * ## What was removed
 *
 * `density` failed all three tests. It existed at three levels (section,
 * part, contract) with three incompatible encodings, two of which were not
 * even present at runtime. It also described a *result* ("how many notes")
 * rather than an *intention*, which meant it fought the pattern catalog: the
 * catalog author had already decided how many notes the cell has. Removing it
 * and folding its only real job — "how much of the band is working" — into
 * Energy loses nothing and removes a whole class of contradiction.
 *
 * ## What was added
 *
 * Three dials the sketchbook was missing:
 *
 *   - **Adventure.** How far selection may stray from the canon. This is the
 *     experiment dial. At 0 the engine only offers material the style's own
 *     grammar names; at 1 the whole genre plus neighbouring worlds are in
 *     play. Previously this was hard-coded at roughly 0.2 and unreachable.
 *   - **Development.** How much a part changes across repeats. The engine
 *     already varied parts every four bars; the amount was a constant. A
 *     sketcher wants to say "keep it hypnotic" or "let it grow".
 *   - **Expression.** How strongly articulations are realized. This is the
 *     master gain on the articulation engine: at 0 the parts play as written
 *     with no ornament, bend or swell, which is exactly what you want when
 *     you are auditioning a rhythm and not a performance.
 *
 * and one per-part control:
 *
 *   - **Playing style (guest lens).** Which world this part plays *like*. This
 *     is the genre-blending control. It is also set implicitly whenever the
 *     user picks a pattern authored by another world.
 */

export type DialScope = 'song' | 'section' | 'part';

export interface DialDef<T = unknown> {
  id: string;
  label: string;
  scope: DialScope;
  /** One line a musician would recognise. */
  intent: string;
  kind: 'continuous' | 'step' | 'choice';
  /** For continuous dials. */
  range?: [number, number];
  /** For step dials. */
  steps?: number[];
  default: T;
  /** Where the value is read in the engine. */
  consumers: string[];
  /**
   * How the world contract gets to reinterpret it. 'literal' means the value is
   * used as-is; 'contract' means the contract translates it and the same number
   * means different things in different worlds.
   */
  interpretation: 'literal' | 'contract';
}

export const DIALS: DialDef[] = [
  {
    id: 'genre',
    label: 'Genre',
    scope: 'song',
    intent: 'Which musical universe this lives in.',
    kind: 'choice',
    default: 'tango',
    consumers: ['resolveStyle', 'contractForGenre', 'PATTERNS_BY_WORLD', 'mixer.roomForStyle'],
    interpretation: 'literal',
  },
  {
    id: 'style',
    label: 'Song style',
    scope: 'song',
    intent: 'Which grammar is spoken inside that universe.',
    kind: 'choice',
    default: 'canonical',
    consumers: ['resolveStyle', 'patterns.allowed', 'form.templates', 'harmony.progressionTemplates'],
    interpretation: 'literal',
  },
  {
    id: 'bpm',
    label: 'Tempo',
    scope: 'song',
    intent: 'How fast.',
    kind: 'continuous',
    range: [30, 300],
    default: 110,
    consumers: ['buildBarTimes', 'groove.microtiming referenceTempo'],
    interpretation: 'literal',
  },
  {
    id: 'tempoFeel',
    label: 'Feel',
    scope: 'song',
    intent: 'Held back, walking, as written, pushed, lit.',
    kind: 'choice',
    default: 'as-written',
    consumers: ['getEffectiveBpm'],
    interpretation: 'literal',
  },
  {
    id: 'pocket',
    label: 'Pocket',
    scope: 'song',
    intent: 'How hard the groove leans. 0.5 is as the genre intends.',
    kind: 'continuous',
    range: [0, 1],
    default: 0.5,
    consumers: ['groove.applyFeel', 'perform.compile'],
    interpretation: 'contract',
  },
  {
    id: 'lift',
    label: 'Lift',
    scope: 'song',
    intent: 'How much bigger the big sections get than the small ones.',
    kind: 'continuous',
    range: [0, 1],
    default: 0.5,
    consumers: ['arrangement.decide', 'perform.compile'],
    interpretation: 'contract',
  },
  {
    id: 'adventure',
    label: 'Adventure',
    scope: 'song',
    intent: 'How far the engine may stray from the style\'s canon when choosing material.',
    kind: 'continuous',
    range: [0, 1],
    default: 0.25,
    consumers: ['arrange.affinity', 'arrange.patternStyleFit', 'blend.inferLensFromPattern'],
    interpretation: 'literal',
  },
  {
    id: 'development',
    label: 'Development',
    scope: 'song',
    intent: 'How much a part changes across repeats. 0 is hypnotic, 1 keeps growing.',
    kind: 'continuous',
    range: [0, 1],
    default: 0.45,
    consumers: ['arrange.rebuild phrase variation', 'arrange.choosePatternVariant'],
    interpretation: 'contract',
  },
  {
    id: 'expression',
    label: 'Expression',
    scope: 'song',
    intent: 'How strongly ornaments, bends and swells are played. 0 plays it straight.',
    kind: 'continuous',
    range: [0, 1],
    default: 0.55,
    consumers: ['articulation.realizeArticulation'],
    interpretation: 'contract',
  },
  {
    id: 'room',
    label: 'Room',
    scope: 'song',
    intent: 'The space the whole mix sits in.',
    kind: 'choice',
    default: 'auto',
    consumers: ['mixer.createMasterChain', 'perform CC91/CC93'],
    interpretation: 'literal',
  },
  {
    id: 'energy',
    label: 'Weight',
    scope: 'section',
    intent: 'How much this part of the song is working. The genre decides what that means.',
    kind: 'step',
    steps: [1, 2, 3, 4, 5],
    default: 3 as SectionEnergy,
    consumers: ['energy.energyOf', 'arrangement.decide', 'arrange.suggestPattern', 'perform velocity/brightness'],
    interpretation: 'contract',
  },
  {
    id: 'bars',
    label: 'Length',
    scope: 'section',
    intent: 'How long this part runs.',
    kind: 'choice',
    default: 8,
    consumers: ['arrange.rebuild'],
    interpretation: 'literal',
  },
  {
    id: 'formKey',
    label: 'Part type',
    scope: 'section',
    intent: 'What job this part does in the form. The vocabulary is the genre\'s own.',
    kind: 'choice',
    default: 'verse',
    consumers: ['form.templates', 'contract.defaultSpotlights', 'harmony.sectionProgressions'],
    interpretation: 'contract',
  },
  {
    id: 'chords',
    label: 'Chords',
    scope: 'section',
    intent: 'The harmonic cell this part cycles.',
    kind: 'choice',
    default: [],
    consumers: ['theory.parseChord', 'voicing.voiceChord', 'bass.bassNote', 'melody.melodyNote'],
    interpretation: 'literal',
  },
  {
    id: 'sectionGenre',
    label: 'Part genre',
    scope: 'section',
    intent: 'Let one section come from a different world entirely.',
    kind: 'choice',
    default: 'follow song',
    consumers: ['arrange.getResolvedSectionStyle'],
    interpretation: 'literal',
  },
  {
    id: 'sectionTempo',
    label: 'Part tempo',
    scope: 'section',
    intent: 'A tempo change just for this part.',
    kind: 'choice',
    default: 'follow song',
    consumers: ['getEffectiveBpm'],
    interpretation: 'literal',
  },
  {
    id: 'instrument',
    label: 'Instrument',
    scope: 'part',
    intent: 'Which voice plays this line. Independent of the pattern.',
    kind: 'choice',
    default: 'piano',
    consumers: ['instrumentProfile.voiceProfile', 'soundfonts.resolvePreset', 'arrange.roleForInstrument'],
    interpretation: 'literal',
  },
  {
    id: 'pattern',
    label: 'Figure',
    scope: 'part',
    intent: 'The rhythmic/melodic cell this part plays.',
    kind: 'choice',
    default: 'auto',
    consumers: ['arrange.rebuild', 'grid.sliceBarNative', 'blend.inferLensFromPattern'],
    interpretation: 'literal',
  },
  {
    id: 'partEnergy',
    label: 'Part weight',
    scope: 'part',
    intent: 'How much this one voice is working, against the rest of the band.',
    kind: 'step',
    steps: [1, 2, 3, 4, 5],
    default: 3 as SectionEnergy,
    consumers: ['arrange.choosePatternVariant', 'arrangement.buildArrangementContext', 'perform activity gate'],
    interpretation: 'contract',
  },
  {
    id: 'playingStyle',
    label: 'Plays like',
    scope: 'part',
    intent: 'Have this voice phrase as if it came from another world.',
    kind: 'choice',
    default: 'follow section',
    consumers: ['blend.blendPartStyle', 'perform groove/bass/percussion dialect'],
    interpretation: 'literal',
  },
  {
    id: 'spotlight',
    label: 'Attention',
    scope: 'part',
    intent: 'Auto, always in front, or always behind.',
    kind: 'choice',
    default: 'auto',
    consumers: ['arrangement.isSpotlit', 'melody.melodyGate', 'perform rubato'],
    interpretation: 'contract',
  },
];

export const DIALS_BY_ID: Record<string, DialDef> = Object.fromEntries(DIALS.map(d => [d.id, d]));

/**
 * Song-level dial values carried on the sheet. Every field is optional so an
 * older song simply inherits the defaults.
 */
export interface SongDials {
  pocket: number;
  lift: number;
  adventure: number;
  development: number;
  expression: number;
  roomId?: string;
}

export const DEFAULT_SONG_DIALS: SongDials = {
  pocket: 0.5,
  lift: 0.5,
  adventure: 0.25,
  development: 0.45,
  expression: 0.55,
};

export function normaliseDials(input: Partial<SongDials> | undefined): SongDials {
  const clamp01 = (v: number | undefined, fallback: number) =>
    Number.isFinite(v) ? Math.max(0, Math.min(1, v as number)) : fallback;
  return {
    pocket: clamp01(input?.pocket, DEFAULT_SONG_DIALS.pocket),
    lift: clamp01(input?.lift, DEFAULT_SONG_DIALS.lift),
    adventure: clamp01(input?.adventure, DEFAULT_SONG_DIALS.adventure),
    development: clamp01(input?.development, DEFAULT_SONG_DIALS.development),
    expression: clamp01(input?.expression, DEFAULT_SONG_DIALS.expression),
    roomId: input?.roomId,
  };
}

/**
 * Deliberately *not* dials, with the reason. Kept here so the list of rejected
 * controls is as visible as the list of accepted ones.
 */
export const REJECTED_DIALS: { id: string; reason: string }[] = [
  {
    id: 'density',
    reason:
      'Described a result, not an intention, and duplicated Energy. The pattern catalog already decides how many notes a cell has; a density dial can only fight it.',
  },
  {
    id: 'swing',
    reason:
      'Belongs to the style. Exposing it invites 60% swing on a clave, which is not a stylistic choice but a mistake. Reachable through Pocket, which the contract scales.',
  },
  {
    id: 'key',
    reason:
      'Handled by the chord dial. A separate key control would let key and chords disagree, and the engine infers key from the progression anyway.',
  },
  {
    id: 'humanize',
    reason:
      'A style property, not a taste property. Every world declares its own jitter; a global humanize dial would flatten exactly the differences the engine exists to express.',
  },
  {
    id: 'per-track volume/pan',
    reason:
      'Mixing, not composing. The instrument profile sets a sensible balance and the arrangement automates it. A sketchbook that requires mixing has failed.',
  },
];
