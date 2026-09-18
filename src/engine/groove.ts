export type SwingUnit = 8 | 16;

/** Coarse instrument job, used to decide who leans which way. */
export type GrooveRole =
  | 'kick' | 'snare' | 'hat' | 'ride' | 'perc'
  | 'bass' | 'comp' | 'pad' | 'lead' | 'stab';

export interface GrooveProfile {
  id: string;
  name: string;
  /** where the offbeat subdivision actually lands. 0.5 = straight, 0.667 = full triplet swing */
  swing: number;
  /** which subdivision carries the swing */
  swingUnit: SwingUnit;
  /** whole-band lean, in ms. negative = ahead of the beat, positive = behind */
  lean: number;
  /** per-role lean on top of the band lean, in ms */
  roleLean: Partial<Record<GrooveRole, number>>;
  /** random spread per note, in ms (1 sigma). small numbers matter a lot */
  humanizeMs: number;
  /** random velocity spread, 0..1 */
  humanizeVel: number;
  /** how strongly the metric hierarchy is expressed. 0 = flat, 1 = very shaped */
  accentDepth: number;
  /** 16-slot template of extra ms offsets, indexed by position in the bar.
   *  This is where a genre's signature limp lives (the dembow lurch, the
   *  hip-hop drag on 2 and 4, the tango drag into beat 4). */
  pocket?: number[];
  /** ms offset applied to notes flagged as anticipations */
  anticipationMs: number;
  /** how much a soft hit gets softened relative to a loud one. > 1 widens the
   *  dynamic range, which is most of what "played, not programmed" means. */
  dynamicRange: number;
  description: string;
}

const NONE: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

/** Build a 16-slot pocket template from a sparse map of position -> ms. */
function pocket(map: Record<number, number>): number[] {
  const out = NONE.slice();
  for (const [k, v] of Object.entries(map)) out[Number(k) % 16] = v;
  return out;
}

const DEFAULT: GrooveProfile = {
  id: 'straight',
  name: 'Straight',
  swing: 0.5,
  swingUnit: 16,
  lean: 0,
  roleLean: { kick: -2, bass: -1, snare: 1, hat: 0, comp: 2, pad: 4, lead: 3 },
  humanizeMs: 6,
  humanizeVel: 0.09,
  accentDepth: 0.6,
  anticipationMs: -18,
  dynamicRange: 1.0,
  description: 'Even subdivisions, light human spread.',
};

export const GROOVE_PROFILES: Record<string, Partial<GrooveProfile>> = {
  tango: {
    name: 'Yumba',
    swing: 0.5, swingUnit: 16,
    lean: 6,
    roleLean: { bass: -6, comp: 8, lead: 14, pad: 10, perc: 0, kick: -4 },
    humanizeMs: 11, humanizeVel: 0.14,
    accentDepth: 0.95, dynamicRange: 1.35,
    // the marcato drags into 4 and snaps back onto 1
    pocket: pocket({ 0: -4, 4: 2, 8: -2, 12: 9, 14: 5 }),
    anticipationMs: -24,
    description: 'Heavy marcato, violin and bandoneón hanging behind the bass.',
  },
  salsa: {
    name: 'Clave pocket',
    swing: 0.52, swingUnit: 16,
    lean: -2,
    roleLean: { bass: -14, comp: -8, perc: -3, hat: 0, snare: 0, lead: 4, stab: -6 },
    humanizeMs: 6, humanizeVel: 0.1,
    accentDepth: 0.8, dynamicRange: 1.2,
    // tumbao anticipation: the "and of 2" and "4" push forward
    pocket: pocket({ 6: -9, 12: -6, 14: -4 }),
    anticipationMs: -30,
    description: 'Bass and piano anticipate; percussion sits right on top of the clave.',
  },
  timba: {
    name: 'Gear pocket',
    swing: 0.52, swingUnit: 16,
    lean: -3,
    roleLean: { bass: -16, comp: -10, perc: -2, stab: -8, lead: 3 },
    humanizeMs: 6, humanizeVel: 0.12,
    accentDepth: 0.85, dynamicRange: 1.25,
    pocket: pocket({ 6: -10, 12: -7, 14: -5 }),
    anticipationMs: -32,
    description: 'Harder and further forward than salsa — everything leans into the next bar.',
  },
  flamenco: {
    name: 'Compás',
    swing: 0.5, swingUnit: 16,
    lean: 2,
    roleLean: { perc: -4, comp: 0, lead: 8, bass: -2 },
    humanizeMs: 13, humanizeVel: 0.17,
    accentDepth: 1.0, dynamicRange: 1.4,
    pocket: pocket({ 0: 0, 3: -3, 6: -3, 8: 4, 10: -3 }),
    anticipationMs: -20,
    description: 'Rubato-leaning, palmas tight, huge dynamic swing between soft and remate.',
  },
  jazz: {
    name: 'Swing',
    swing: 0.64, swingUnit: 8,
    lean: 3,
    roleLean: { ride: 6, bass: -5, comp: 9, snare: 4, lead: 11, hat: 5 },
    humanizeMs: 10, humanizeVel: 0.15,
    accentDepth: 0.75, dynamicRange: 1.3,
    anticipationMs: -26,
    description: 'Triplet ride, bass walking slightly ahead, comping behind the beat.',
  },
  swing: {
    name: 'Big band',
    swing: 0.66, swingUnit: 8,
    lean: 1,
    roleLean: { ride: 4, bass: -6, comp: 6, snare: 2, stab: -3, lead: 7 },
    humanizeMs: 8, humanizeVel: 0.13,
    accentDepth: 0.8, dynamicRange: 1.3,
    anticipationMs: -28,
    description: 'Section players lock tight; the rhythm section swings hard underneath.',
  },
  blues: {
    name: 'Shuffle',
    swing: 0.63, swingUnit: 8,
    lean: 5,
    roleLean: { bass: -3, comp: 8, lead: 14, snare: 5, hat: 3 },
    humanizeMs: 12, humanizeVel: 0.16,
    accentDepth: 0.85, dynamicRange: 1.35,
    anticipationMs: -20,
    description: 'Dragging shuffle, guitar and harp answering well behind the beat.',
  },
  funk: {
    name: 'On the one',
    swing: 0.55, swingUnit: 16,
    lean: -1,
    roleLean: { kick: -4, bass: -5, hat: 1, snare: 3, comp: -2, stab: -4 },
    humanizeMs: 5, humanizeVel: 0.16,
    accentDepth: 0.95, dynamicRange: 1.5,
    pocket: pocket({ 0: -5, 4: 3, 8: 0, 12: 3 }),
    anticipationMs: -16,
    description: 'Hard on the downbeat, snare a hair late, enormous ghost-to-accent range.',
  },
  'hip-hop': {
    name: 'Drag',
    swing: 0.57, swingUnit: 16,
    lean: 4,
    roleLean: { kick: -2, snare: 12, hat: 2, bass: 0, comp: 8, lead: 10, pad: 8 },
    humanizeMs: 7, humanizeVel: 0.14,
    accentDepth: 0.8, dynamicRange: 1.4,
    pocket: pocket({ 4: 11, 12: 13 }),
    anticipationMs: -14,
    description: 'Snare pulled well behind the grid; everything else leans back with it.',
  },
  rock: {
    name: 'Drive',
    swing: 0.5, swingUnit: 16,
    lean: -2,
    roleLean: { kick: -3, snare: 1, hat: -1, bass: -2, comp: 0, lead: 4 },
    humanizeMs: 6, humanizeVel: 0.11,
    accentDepth: 0.85, dynamicRange: 1.25,
    anticipationMs: -20,
    description: 'Tight and slightly ahead — the band pushing the tempo.',
  },
  'rock-en-espanol': {
    name: 'Drive',
    swing: 0.5, swingUnit: 16, lean: -1,
    roleLean: { kick: -3, snare: 2, bass: -2, comp: 2, lead: 5 },
    humanizeMs: 7, humanizeVel: 0.12, accentDepth: 0.85, dynamicRange: 1.25,
    anticipationMs: -20,
    description: 'Rock drive with a touch more give in the comping.',
  },
  metal: {
    name: 'Machine',
    swing: 0.5, swingUnit: 16,
    lean: -3,
    roleLean: { kick: -2, snare: 0, hat: -1, bass: -2, comp: -2, lead: 1 },
    humanizeMs: 3, humanizeVel: 0.07,
    accentDepth: 0.7, dynamicRange: 1.15,
    anticipationMs: -12,
    description: 'Deliberately tight. Precision is the aesthetic.',
  },
  'math-rock': {
    name: 'Clockwork',
    swing: 0.5, swingUnit: 16, lean: -1,
    roleLean: { kick: -2, snare: 0, bass: -2, comp: 1, lead: 2 },
    humanizeMs: 4, humanizeVel: 0.1, accentDepth: 0.9, dynamicRange: 1.25,
    anticipationMs: -14,
    description: 'Tight but breathing — accents carry the odd groupings.',
  },
  bachata: {
    name: 'Derecho',
    swing: 0.52, swingUnit: 16,
    lean: 1,
    roleLean: { bass: -7, comp: 2, perc: -2, lead: 7, snare: 2 },
    humanizeMs: 8, humanizeVel: 0.13,
    accentDepth: 0.85, dynamicRange: 1.3,
    pocket: pocket({ 6: -6, 12: 4, 14: -5 }),
    anticipationMs: -22,
    description: 'Bass anticipating into the bar, requinto hanging back behind it.',
  },
  zouk: {
    name: 'Kompa lean',
    swing: 0.54, swingUnit: 16,
    lean: 3,
    roleLean: { bass: -6, comp: 5, perc: 0, pad: 6, lead: 8 },
    humanizeMs: 8, humanizeVel: 0.12,
    accentDepth: 0.75, dynamicRange: 1.25,
    pocket: pocket({ 2: 4, 6: -5, 10: 4, 14: -5 }),
    anticipationMs: -20,
    description: 'Rolling lean — the offbeats breathe out, the bass pulls back in.',
  },
  kizomba: {
    name: 'Semba lean',
    swing: 0.55, swingUnit: 16,
    lean: 6,
    roleLean: { bass: -8, comp: 6, perc: -1, pad: 9, lead: 10 },
    humanizeMs: 9, humanizeVel: 0.12,
    accentDepth: 0.75, dynamicRange: 1.3,
    pocket: pocket({ 3: -6, 6: 5, 11: -6, 14: 5 }),
    anticipationMs: -24,
    description: 'Slow and deep, sub-bass ahead of a band that sits well back.',
  },
  afrobeats: {
    name: 'Log drum lean',
    swing: 0.56, swingUnit: 16,
    lean: 2,
    roleLean: { kick: -3, bass: -6, perc: -1, comp: 4, lead: 7, pad: 6 },
    humanizeMs: 7, humanizeVel: 0.13,
    accentDepth: 0.8, dynamicRange: 1.3,
    pocket: pocket({ 3: -4, 6: 5, 10: -4, 14: 5 }),
    anticipationMs: -18,
    description: 'Shuffled 16ths with the percussion weaving around a forward bass.',
  },
  country: {
    name: 'Train',
    swing: 0.56, swingUnit: 8,
    lean: 0,
    roleLean: { bass: -3, snare: 2, hat: 1, comp: 2, lead: 6 },
    humanizeMs: 8, humanizeVel: 0.12,
    accentDepth: 0.8, dynamicRange: 1.25,
    anticipationMs: -18,
    description: 'Light shuffle, boom-chick bass dead center, fiddle leaning late.',
  },
  folk: {
    name: 'Porch',
    swing: 0.54, swingUnit: 8,
    lean: 2,
    roleLean: { bass: -2, comp: 3, lead: 8 },
    humanizeMs: 12, humanizeVel: 0.15,
    accentDepth: 0.75, dynamicRange: 1.3,
    anticipationMs: -16,
    description: 'Loose and unquantised, the way people actually play in a room.',
  },
  electronic: {
    name: 'Grid',
    swing: 0.52, swingUnit: 16,
    lean: 0,
    roleLean: { kick: 0, bass: 0, hat: 0, pad: 2, lead: 1 },
    humanizeMs: 2, humanizeVel: 0.05,
    accentDepth: 0.6, dynamicRange: 1.1,
    anticipationMs: -10,
    description: 'Near-perfect grid with a whisper of 16th swing.',
  },
  jpop: {
    name: 'Bright pop',
    swing: 0.5, swingUnit: 16, lean: -1,
    roleLean: { kick: -2, snare: 1, bass: -2, comp: 2, lead: 4, pad: 4 },
    humanizeMs: 5, humanizeVel: 0.1, accentDepth: 0.8, dynamicRange: 1.25,
    anticipationMs: -18,
    description: 'Clean and forward, with a polished pop dynamic shape.',
  },
  'j-pop': {
    name: 'Bright pop',
    swing: 0.5, swingUnit: 16, lean: -1,
    roleLean: { kick: -2, snare: 1, bass: -2, comp: 2, lead: 4, pad: 4 },
    humanizeMs: 5, humanizeVel: 0.1, accentDepth: 0.8, dynamicRange: 1.25,
    anticipationMs: -18,
    description: 'Clean and forward, with a polished pop dynamic shape.',
  },
  'chinese-rock': {
    name: 'Anthem',
    swing: 0.5, swingUnit: 16, lean: 0,
    roleLean: { kick: -3, snare: 2, bass: -2, comp: 2, lead: 6, pad: 5 },
    humanizeMs: 7, humanizeVel: 0.12, accentDepth: 0.85, dynamicRange: 1.3,
    anticipationMs: -20,
    description: 'Wide and anthemic, strings floating behind a tight rhythm section.',
  },
  'fusion-ambient': {
    name: 'Drift',
    swing: 0.53, swingUnit: 16,
    lean: 8,
    roleLean: { bass: -4, comp: 10, pad: 16, lead: 14, perc: 2 },
    humanizeMs: 16, humanizeVel: 0.18,
    accentDepth: 0.55, dynamicRange: 1.45,
    anticipationMs: -30,
    description: 'Everything late and soft-edged; nothing snaps to anything.',
  },
  'chinese-traditional': {
    name: 'Silk & Space', swing: 0.5, swingUnit: 16, lean: 2,
    roleLean: { bass: 0, comp: 4, lead: 10, pad: 8, perc: -2 },
    humanizeMs: 14, humanizeVel: 0.16, accentDepth: 0.78, dynamicRange: 1.35,
    anticipationMs: -16, description: 'Flexible, ornament-led timing with deliberate space between gestures.',
  },
  'japanese-traditional': {
    name: 'Ma', swing: 0.5, swingUnit: 16, lean: 4,
    roleLean: { bass: 0, comp: 6, lead: 12, pad: 10, perc: -1 },
    humanizeMs: 15, humanizeVel: 0.17, accentDepth: 0.72, dynamicRange: 1.38,
    anticipationMs: -14, description: 'Breathing phrase timing with strong use of ma and delayed ornamental attacks.',
  },
  'reggaeton-dembow': {
    name: 'Dembow Push', swing: 0.5, swingUnit: 16, lean: -1,
    roleLean: { bass: -8, comp: -2, lead: 1, perc: -1, kick: -2, snare: 0 },
    humanizeMs: 3, humanizeVel: 0.06, accentDepth: 0.84, dynamicRange: 1.12,
    pocket: pocket({0:0,3:0,6:-1,8:0,11:0,14:-1}), anticipationMs: -18,
    description: 'Straight dembow grid; the groove comes from the authored kick/snare displacement, not shuffle.',
  },
  cumbia: {
    name: 'Cumbia Sway', swing: 0.5, swingUnit: 16, lean: 1,
    roleLean: { bass: -3, comp: 2, lead: 4, perc: -1 },
    humanizeMs: 8, humanizeVel: 0.12, accentDepth: 0.78, dynamicRange: 1.22,
    pocket: pocket({3:2,6:-2,11:2,14:-1}), anticipationMs: -18,
    description: 'Steady binary dance pocket with small push-pull between scraper, drums and bass.',
  },
  trova: {
    name: 'Trova Breath', swing: 0.5, swingUnit: 16, lean: 3,
    roleLean: { bass: -2, comp: 5, lead: 10, pad: 7 },
    humanizeMs: 12, humanizeVel: 0.15, accentDepth: 0.68, dynamicRange: 1.32,
    anticipationMs: -18, description: 'Lyric-first timing; guitar settles behind the vocal and releases at phrase ends.',
  },
  folclorico: {
    name: 'Folk Lift', swing: 0.5, swingUnit: 8, lean: 1,
    roleLean: { bass: -2, comp: 3, lead: 5, perc: -1 },
    humanizeMs: 10, humanizeVel: 0.13, accentDepth: 0.82, dynamicRange: 1.28,
    anticipationMs: -16, description: 'Clear dance accents with enough looseness for regional ensemble interplay.',
  },
  'house-techno': {
    name: 'Club Grid', swing: 0.5, swingUnit: 16, lean: -1,
    roleLean: { kick: -3, bass: -2, comp: 0, hat: 1, lead: 1, pad: 2 },
    humanizeMs: 2, humanizeVel: 0.05, accentDepth: 0.66, dynamicRange: 1.08,
    anticipationMs: -12, description: 'Tight club grid; house gets a tiny human push while techno stays machine-clean.',
  },
  'reggae-dub': {
    name: 'One Drop', swing: 0.5, swingUnit: 16, lean: 4,
    roleLean: { bass: -7, comp: 8, lead: 9, perc: 1, kick: 2, snare: 4 },
    humanizeMs: 9, humanizeVel: 0.14, accentDepth: 0.82, dynamicRange: 1.38,
    anticipationMs: -16, description: 'Bass-forward and laid back, with offbeat skank sitting behind the drum pocket.',
  },
  ska: {
    name: 'Upbeat', swing: 0.5, swingUnit: 16, lean: -2,
    roleLean: { bass: -5, comp: -3, lead: 2, perc: -1, kick: -2, snare: 0 },
    humanizeMs: 7, humanizeVel: 0.12, accentDepth: 0.84, dynamicRange: 1.22,
    anticipationMs: -20, description: 'Crisp, forward offbeats with a springy bass-and-horn pocket.',
  },
  'samba-bossa': {
    name: 'Brazilian Pocket', swing: 0.5, swingUnit: 8, lean: 2,
    roleLean: { bass: -5, comp: 5, lead: 4, perc: -1 },
    humanizeMs: 8, humanizeVel: 0.13, accentDepth: 0.82, dynamicRange: 1.25,
    anticipationMs: -18, description: 'Syncopated Brazilian pocket; bossa stays quiet while samba layers interlock.',
  },
};

export function grooveFor(worldId: string): GrooveProfile {
  const patch = GROOVE_PROFILES[worldId];
  if (!patch) return { ...DEFAULT, id: worldId || 'straight' };
  return {
    ...DEFAULT,
    ...patch,
    id: worldId,
    roleLean: { ...DEFAULT.roleLean, ...(patch.roleLean ?? {}) },
  };
}

/* --- PRNG helpers --- */
export function seedOf(...parts: (string | number)[]): number {
  let h = 2166136261 >>> 0;
  const s = parts.join('|');
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

/** uniform 0..1 from a seed */
export function rand01(seed: number): number {
  let t = (seed + 0x6d2b79f5) >>> 0;
  t = Math.imul(t ^ (t >>> 15), t | 1) >>> 0;
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/** roughly normal, mean 0, sigma 1 — two uniforms is plenty and it is cheap */
export function randNorm(seed: number): number {
  return (rand01(seed) + rand01(seed ^ 0x9e3779b9) - 1) * 1.7;
}

/* --- Metric accent --- */
export function metricWeight(beatInBar: number, beatsPerBar: number): number {
  const eps = 1e-6;
  const frac = beatInBar - Math.floor(beatInBar + eps);
  const whole = Math.floor(beatInBar + eps);

  if (Math.abs(frac) < 0.02) {
    if (whole === 0) return 1.0;                                  // the one
    if (beatsPerBar >= 4 && whole === Math.floor(beatsPerBar / 2)) return 0.9; // the three
    return 0.82;                                                  // other beats
  }
  if (Math.abs(frac - 0.5) < 0.03) return 0.68;                   // eighths
  if (Math.abs(frac - 1 / 3) < 0.04 || Math.abs(frac - 2 / 3) < 0.04) return 0.66; // triplets
  return 0.58;                                                     // sixteenths
}

/* --- Swing calculation --- */
export function swingOffsetBeats(beatInBar: number, g: GrooveProfile): number {
  if (Math.abs(g.swing - 0.5) < 0.005) return 0;
  const frac = beatInBar - Math.floor(beatInBar + 1e-6);

  if (g.swingUnit === 8) {
    if (Math.abs(frac - 0.5) < 0.02) return g.swing - 0.5;
    // 16ths inside a swung 8th ride along with it, proportionally
    if (Math.abs(frac - 0.75) < 0.02) return (g.swing - 0.5) * 0.5;
    return 0;
  }

  // swingUnit 16: the second 16th of every 8th-note pair moves
  const inHalf = frac % 0.5;
  if (Math.abs(inHalf - 0.25) < 0.02) return 0.5 * g.swing - 0.25;
  return 0;
}

export interface FeelInput {
  /** position inside the bar, in quarter-note beats */
  beatInBar: number;
  beatsPerBar: number;
  role: GrooveRole;
  /** 0..1 authored accent for this hit */
  accent: number;
  /** stable identity for the wobble: track + bar + onset */
  seed: number;
  /** pattern-authored microtiming, in ms */
  authoredMs?: number;
  /** this note is an anticipation of the next chord/bar */
  anticipated?: boolean;
  /** 0..1 — how hard the section is being played */
  intensity?: number;
  /** global user "pocket" control, 0..1, 0.5 = as the genre intends */
  pocketAmount?: number;
  /** Traditional contexts may preserve authored phrase timing instead of imposing a generic Western metric template. */
  authoredTimingOnly?: boolean;
}

export interface FeelOutput {
  /** total timing offset in seconds, to be added to the grid position */
  offsetBeats: number;
  offsetMs: number;
  /** multiplier on the note's velocity, already humanized */
  velocityMult: number;
}

/**
 * The whole feel of one note, in one call. Everything that makes a hit sit
 * where a player would put it, and land as hard as a player would hit it.
 */
export function applyFeel(g: GrooveProfile, input: FeelInput): FeelOutput {
  const amount = input.pocketAmount ?? 0.5;
  // 0.5 is "as the genre intends"; 0 flattens toward the grid, 1 exaggerates.
  const scale = input.authoredTimingOnly
    ? 0
    : amount <= 0.5 ? amount * 2 : 1 + (amount - 0.5) * 1.6;

  // 1. swing, in beats so it tracks tempo. Traditional/free contexts do not inherit
  // a Western swing template merely because their pattern happens to use a grid.
  const swingBeats = input.authoredTimingOnly ? 0 : swingOffsetBeats(input.beatInBar, g) * scale;

  // 2. leans and pocket template, in ms. Authored phrase timing remains authoritative
  // in traditional contexts.
  const slot = Math.round((input.beatInBar / input.beatsPerBar) * 16) % 16;
  let ms = input.authoredTimingOnly
    ? 0
    : (g.lean + (g.roleLean[input.role] ?? 0) + (g.pocket?.[slot] ?? 0)) * scale;
  ms += input.authoredMs ?? 0;
  if (input.anticipated && !input.authoredTimingOnly) ms += g.anticipationMs * scale;

  // 3. The wobble. Traditional timing gets much less random drift so breath/space
  // remains intentional rather than becoming computer-random "humanization".
  const tightness =
    input.role === 'kick' || input.role === 'snare' ? 0.55 :
    input.role === 'hat' || input.role === 'perc' || input.role === 'ride' ? 0.7 :
    input.role === 'bass' ? 0.75 : 1.0;
  const intensityTighten = 1 - 0.25 * (input.intensity ?? 0.5);
  const humanizeScale = input.authoredTimingOnly ? 0.18 : 1;
  ms += randNorm(input.seed) * g.humanizeMs * tightness * intensityTighten * humanizeScale;

  // 4. dynamics: metric hierarchy is disabled for authored traditional phrasing;
  // the pattern's own accent profile should carry the musical hierarchy.
  const metric = input.authoredTimingOnly ? 1 : metricWeight(input.beatInBar, input.beatsPerBar);
  const shaped = 1 - g.accentDepth * (1 - metric);
  const authored = Math.pow(Math.max(0.05, input.accent), g.dynamicRange);
  const velWobble = 1 + randNorm(input.seed ^ 0x5bf03635) * g.humanizeVel;

  return {
    offsetBeats: swingBeats,
    offsetMs: ms,
    velocityMult: Math.max(0.05, authored * shaped * velWobble),
  };
}

/** Human-readable list for a feel picker. */
export function grooveSummary(worldId: string): { name: string; description: string } {
  const g = grooveFor(worldId);
  return { name: g.name, description: g.description };
}
