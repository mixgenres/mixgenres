import { InstrumentDef, INSTRUMENTS_BY_ID } from '../data/instruments';
import type { GrooveRole } from './groove';

export type SustainClass =
  /** struck and left to ring: piano, mallets, plucked strings */
  | 'decaying'
  /** held as long as the player holds it: strings, pads, organ, voice */
  | 'sustained'
  /** held, but needs breath: winds and brass */
  | 'blown'
  /** short by nature: staccato plucks, muted guitar, clav */
  | 'short'
  /** unpitched */
  | 'percussive';

export interface VoiceProfile {
  sustain: SustainClass;
  role: GrooveRole;
  /** the midi note this instrument likes to centre its part around */
  centre: number;
  /** playable range, used to fold parts into a sensible octave */
  low: number;
  high: number;
  /** default stereo position, -1..1 */
  pan: number;
  /** trim in dB relative to nominal, to get gain staging roughly right */
  trim: number;
  /** how wet this instrument wants to be, 0..1 */
  space: number;
  /** maximum ring-out in beats for decaying instruments */
  ring: number;
}

const FAMILY_DEFAULTS: Record<string, Partial<VoiceProfile>> = {
  'bellows-and-keys': { sustain: 'sustained', centre: 60, low: 41, high: 84, pan: -0.12, trim: -1, space: 0.28, ring: 2 },
  plucked:            { sustain: 'decaying',  centre: 57, low: 40, high: 84, pan: 0.18,  trim: 0,  space: 0.24, ring: 2.5 },
  bowed:              { sustain: 'sustained', centre: 64, low: 48, high: 88, pan: -0.24, trim: -2, space: 0.42, ring: 4 },
  winds:              { sustain: 'blown',     centre: 69, low: 55, high: 92, pan: 0.26,  trim: -2, space: 0.34, ring: 3 },
  brass:              { sustain: 'blown',     centre: 67, low: 52, high: 88, pan: 0.3,   trim: -1, space: 0.3,  ring: 2.5 },
  voice:              { sustain: 'sustained', centre: 64, low: 50, high: 81, pan: 0,     trim: -3, space: 0.4,  ring: 4 },
  'hand-drums':       { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: 0.3,  trim: -1, space: 0.18, ring: 0.5 },
  'metal-and-wood':   { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: -0.34, trim: -3, space: 0.22, ring: 0.5 },
  kit:                { sustain: 'percussive', centre: 60, low: 0, high: 127, pan: 0,    trim: 0,  space: 0.14, ring: 0.5 },
  electronic:         { sustain: 'sustained', centre: 60, low: 36, high: 90, pan: 0,     trim: -2, space: 0.3,  ring: 4 },
};

/** Per-instrument overrides where the family default is plainly wrong. */
const OVERRIDES: Record<string, Partial<VoiceProfile>> = {
  piano:            { centre: 60, low: 33, high: 88, pan: -0.08, trim: 0, ring: 3, space: 0.22 },
  rhodes:           { centre: 58, low: 36, high: 84, pan: -0.16, ring: 3.5, space: 0.3 },
  'fm-ep':          { centre: 58, low: 36, high: 84, pan: -0.16, ring: 3, space: 0.28 },
  clavinet:         { sustain: 'short', centre: 55, low: 40, high: 79, pan: 0.3, ring: 0.6, space: 0.14 },
  harpsichord:      { sustain: 'decaying', centre: 60, ring: 1.2 },
  organ:            { sustain: 'sustained', centre: 58, low: 36, high: 84, pan: 0.22, space: 0.2, trim: -3 },
  'rock-organ':     { sustain: 'sustained', centre: 58, pan: 0.28, space: 0.22, trim: -3 },
  bandoneon:        { sustain: 'sustained', centre: 58, low: 41, high: 81, pan: -0.1, space: 0.3, trim: -1 },
  accordion:        { sustain: 'sustained', centre: 60, pan: 0.2, space: 0.26, trim: -2 },
  concertina:       { sustain: 'sustained', centre: 64, low: 48, high: 88, pan: 0.12, space: 0.3, trim: -2 },
  'celtic-harp':     { sustain: 'decaying', centre: 68, low: 40, high: 96, pan: -0.28, space: 0.48, trim: -2, ring: 4 },
  'tin-whistle':     { sustain: 'blown', centre: 79, low: 60, high: 98, pan: 0.22, space: 0.38, trim: -2 },
  'low-whistle':     { sustain: 'blown', centre: 67, low: 48, high: 86, pan: 0.24, space: 0.38, trim: -2 },
  'bagpipes':        { sustain: 'blown', centre: 74, low: 55, high: 95, pan: 0.18, space: 0.42, trim: -3, ring: 6 },
  'uilleann-pipes':  { sustain: 'blown', centre: 68, low: 48, high: 91, pan: 0.16, space: 0.42, trim: -2, ring: 5 },
  bodhran:           { sustain: 'percussive', centre: 42, low: 30, high: 70, pan: 0.08, trim: -1, space: 0.2, ring: 0.7 },
  bones:             { sustain: 'percussive', centre: 76, low: 60, high: 90, pan: 0.34, trim: -4, space: 0.14, ring: 0.35 },

  guitar:           { centre: 55, low: 40, high: 76, pan: 0.22, ring: 2.2 },
  'spanish-guitar': { centre: 55, low: 40, high: 76, pan: 0.22, ring: 2.6, space: 0.26 },
  'steel-guitar':   { centre: 55, low: 40, high: 78, pan: 0.28, ring: 2.4 },
  'electric-guitar':{ centre: 55, low: 40, high: 78, pan: 0.34, ring: 2.0, space: 0.2 },
  'jazz-guitar':    { centre: 55, low: 40, high: 76, pan: 0.3, ring: 2.0, space: 0.22 },
  'muted-guitar':   { sustain: 'short', centre: 52, low: 40, high: 72, pan: 0.36, ring: 0.5, space: 0.1 },
  'distortion-guitar': { sustain: 'sustained', centre: 50, low: 38, high: 74, pan: 0.42, ring: 2.5, trim: -3, space: 0.16 },
  'overdrive-guitar':  { sustain: 'sustained', centre: 52, low: 38, high: 76, pan: -0.42, ring: 2.5, trim: -3, space: 0.18 },
  tres:             { centre: 64, low: 52, high: 84, pan: 0.36, ring: 1.6 },
  cavaquinho:       { centre: 66, low: 55, high: 86, pan: 0.38, ring: 1.4 },
  charango:         { centre: 66, low: 55, high: 86, pan: 0.36, ring: 1.6 },
  banjo:            { centre: 62, low: 50, high: 84, pan: 0.4, ring: 1.2 },
  mandolin:         { centre: 69, low: 55, high: 88, pan: 0.38, ring: 1.2 },
  harp:             { centre: 62, low: 36, high: 88, pan: -0.3, ring: 4, space: 0.45 },
  'orchestral-harp':{ centre: 62, low: 36, high: 88, pan: -0.32, ring: 4, space: 0.45 },
  sitar:            { centre: 60, ring: 3, space: 0.4 },
  guqin:            { centre: 64, low: 45, high: 88, pan: -0.18, ring: 3.5, space: 0.42, trim: -3 },
  pipa:             { centre: 72, low: 52, high: 96, pan: 0.26, ring: 1.4, space: 0.28, trim: -2 },
  guzheng:          { centre: 69, low: 48, high: 96, pan: -0.18, ring: 2.8, space: 0.42, trim: -3 },
  koto:             { centre: 64, ring: 2.5, space: 0.35 },
  xiao:             { centre: 67, low: 55, high: 91, pan: -0.22, space: 0.42, trim: -3 },
  dizi:             { centre: 74, low: 60, high: 96, pan: 0.24, space: 0.4, trim: -2 },
  ryuteki:          { centre: 72, low: 58, high: 94, pan: 0.22, space: 0.45, trim: -3 },
  hichiriki:        { centre: 68, low: 52, high: 88, pan: 0.18, space: 0.42, trim: -3 },
  shō:              { sustain: 'sustained', role: 'pad', centre: 60, low: 40, high: 82, pan: 0, space: 0.55, trim: -7, ring: 8 },
  kalimba:          { centre: 72, ring: 1.6, space: 0.35 },

  bass:             { sustain: 'decaying', role: 'bass', centre: 40, low: 28, high: 55, pan: 0, trim: 1, space: 0.05, ring: 1.6 },
  'upright-bass':   { sustain: 'decaying', role: 'bass', centre: 40, low: 28, high: 57, pan: 0, trim: 1, space: 0.1, ring: 1.4 },
  'slap-bass':      { sustain: 'short', role: 'bass', centre: 40, low: 28, high: 60, pan: 0, trim: 1, space: 0.05, ring: 0.8 },
  'acoustic-bass':  { sustain: 'decaying', role: 'bass', centre: 40, low: 28, high: 57, pan: 0, trim: 1, space: 0.1, ring: 1.4 },
  'pick-bass':      { sustain: 'decaying', role: 'bass', centre: 40, low: 28, high: 55, pan: 0, trim: 1, space: 0.05, ring: 1.4 },
  'fretless-bass':  { sustain: 'sustained', role: 'bass', centre: 40, low: 28, high: 60, pan: 0, trim: 1, space: 0.12, ring: 2.4 },
  'sub-bass':       { sustain: 'sustained', role: 'bass', centre: 33, low: 24, high: 48, pan: 0, trim: 2, space: 0.02, ring: 3 },
  tuba:             { role: 'bass', centre: 41, low: 28, high: 60, pan: -0.2, trim: 0 },

  violin:           { centre: 72, low: 55, high: 93, pan: -0.34, space: 0.45 },
  fiddle:           { centre: 71, low: 55, high: 90, pan: -0.3, space: 0.35 },
  viola:            { centre: 62, low: 48, high: 81, pan: -0.28, space: 0.42 },
  cello:            { centre: 50, low: 36, high: 72, pan: -0.24, space: 0.42, trim: -1 },
  strings:          { centre: 64, low: 45, high: 86, pan: -0.2, space: 0.5, trim: -4 },
  'slow-strings':   { centre: 64, low: 45, high: 86, pan: -0.22, space: 0.55, trim: -5, ring: 6 },
  'tremolo-strings':{ centre: 66, pan: -0.26, space: 0.5, trim: -5 },
  'pizz-strings':   { sustain: 'short', centre: 62, pan: -0.26, ring: 0.6, space: 0.3, trim: -3 },

  flute:            { centre: 76, low: 60, high: 96, pan: 0.24, space: 0.42 },
  clarinet:         { centre: 65, low: 50, high: 86, pan: 0.2, space: 0.36 },
  harmonica:        { centre: 67, low: 55, high: 88, pan: 0.32, space: 0.3 },
  'alto-sax':       { centre: 67, low: 53, high: 86, pan: 0.3, space: 0.3, trim: -1 },
  'tenor-sax':      { centre: 62, low: 46, high: 81, pan: 0.32, space: 0.3, trim: -1 },
  'soprano-sax':    { centre: 72, low: 58, high: 91, pan: 0.3, space: 0.32, trim: -2 },
  'bari-sax':       { centre: 52, low: 39, high: 72, pan: 0.28, space: 0.26, trim: -1 },

  trumpet:          { centre: 70, low: 55, high: 88, pan: 0.36, space: 0.3, trim: -1 },
  'muted-trumpet':  { centre: 70, low: 55, high: 88, pan: 0.38, space: 0.32, trim: -2 },
  trombone:         { centre: 57, low: 40, high: 77, pan: -0.32, space: 0.3, trim: -1 },
  'horn-section':   { centre: 64, low: 48, high: 84, pan: 0.2, space: 0.28, trim: -2 },
  'french-horn':    { centre: 60, low: 41, high: 79, pan: -0.3, space: 0.4, trim: -2 },
  'synth-brass':    { centre: 62, low: 45, high: 84, pan: 0.18, space: 0.26, trim: -3 },

  voice:            { centre: 64, low: 52, high: 81, pan: 0, space: 0.42, trim: -2 },
  choir:            { centre: 62, low: 48, high: 79, pan: 0, space: 0.55, trim: -5, ring: 6 },
  'backing-vocals': { centre: 64, low: 52, high: 81, pan: 0, space: 0.5, trim: -5, ring: 5 },

  'warm-pad':       { sustain: 'sustained', role: 'pad', centre: 60, low: 40, high: 84, pan: 0, space: 0.55, trim: -6, ring: 8 },
  'halo-pad':       { sustain: 'sustained', role: 'pad', centre: 64, low: 45, high: 88, pan: 0, space: 0.62, trim: -7, ring: 8 },
  'sweep-pad':      { sustain: 'sustained', role: 'pad', centre: 60, low: 42, high: 84, pan: 0, space: 0.6, trim: -7, ring: 8 },
  'synth-strings':  { sustain: 'sustained', role: 'pad', centre: 64, low: 45, high: 86, pan: -0.16, space: 0.5, trim: -5, ring: 6 },
  polysynth:        { sustain: 'sustained', centre: 62, low: 45, high: 86, pan: 0.14, space: 0.38, trim: -4, ring: 3 },
  'saw-lead':       { sustain: 'sustained', role: 'lead', centre: 72, low: 55, high: 96, pan: 0.1, space: 0.32, trim: -4, ring: 3 },
  'square-lead':    { sustain: 'sustained', role: 'lead', centre: 72, low: 55, high: 96, pan: -0.1, space: 0.32, trim: -4, ring: 3 },
  'bass-lead':      { sustain: 'sustained', role: 'bass', centre: 40, low: 28, high: 60, pan: 0, space: 0.08, trim: 0, ring: 2 },

  vibraphone:       { sustain: 'decaying', centre: 67, low: 53, high: 89, pan: -0.24, ring: 4, space: 0.42, trim: -2 },
  marimba:          { sustain: 'decaying', centre: 64, low: 45, high: 84, pan: -0.2, ring: 2, space: 0.3, trim: -2 },
  glockenspiel:     { sustain: 'decaying', centre: 84, low: 72, high: 103, pan: 0.3, ring: 3, space: 0.45, trim: -6 },
  celeste:          { sustain: 'decaying', centre: 79, low: 65, high: 96, pan: 0.26, ring: 3, space: 0.45, trim: -5 },
  'music-box':      { sustain: 'decaying', centre: 84, pan: 0.3, ring: 3, space: 0.45, trim: -6 },
  xylophone:        { sustain: 'decaying', centre: 79, pan: 0.3, ring: 1, space: 0.3, trim: -5 },
  'tubular-bells':  { sustain: 'decaying', centre: 72, pan: -0.3, ring: 8, space: 0.55, trim: -5 },
  crystal:          { sustain: 'decaying', centre: 79, pan: 0.2, ring: 4, space: 0.5, trim: -5 },
  'steel-drums':    { sustain: 'decaying', centre: 67, pan: 0.3, ring: 2, space: 0.35, trim: -3 },
  dulcimer:         { sustain: 'decaying', centre: 67, ring: 2.5, space: 0.35, trim: -3 },

  drums:    { pan: 0, trim: 1, space: 0.12 },
  'brush-kit': { pan: 0, trim: -1, space: 0.2 },
  kick:     { pan: 0, trim: 2, space: 0.04 },
  snare:    { pan: -0.05, trim: 1, space: 0.18 },
  hats:     { pan: 0.3, trim: -3, space: 0.1 },
  ride:     { pan: 0.34, trim: -3, space: 0.22 },
  congas:   { pan: 0.34, trim: -1, space: 0.18 },
  bongos:   { pan: 0.44, trim: -3, space: 0.16 },
  timbales: { pan: -0.34, trim: -1, space: 0.2 },
  cajon:    { pan: 0.1, trim: 0, space: 0.14 },
  claves:   { pan: -0.42, trim: -4, space: 0.16 },
  cowbell:  { pan: -0.3, trim: -4, space: 0.12 },
  maracas:  { pan: 0.46, trim: -6, space: 0.12 },
  shaker:   { pan: 0.42, trim: -6, space: 0.12 },
  guiro:    { pan: -0.44, trim: -5, space: 0.14 },
  cabasa:   { pan: 0.46, trim: -6, space: 0.12 },
  tambourine: { pan: -0.4, trim: -5, space: 0.16 },
  palmas:   { pan: 0.2, trim: -2, space: 0.2 },
  castanets:{ pan: -0.46, trim: -5, space: 0.14 },
  woodblock:{ pan: -0.4, trim: -5, space: 0.12 },
  surdo:    { pan: 0, trim: 0, space: 0.12 },
  tamborim: { pan: 0.34, trim: -4, space: 0.12 },
  gongs: { pan: -0.3, trim: -4, space: 0.24 },
  pandeiro: { pan: 0.38, trim: -4, space: 0.16 },
  darbuka:  { pan: 0.32, trim: -2, space: 0.18 },
  taiko:    { pan: 0, trim: 0, space: 0.24 },
};

const BASE: VoiceProfile = {
  sustain: 'decaying', role: 'comp', centre: 60, low: 36, high: 88,
  pan: 0, trim: -2, space: 0.28, ring: 2,
};

const cache = new Map<string, VoiceProfile>();

export function voiceProfile(instrumentId: string): VoiceProfile {
  const hit = cache.get(instrumentId);
  if (hit) return hit;

  const def: InstrumentDef | undefined = INSTRUMENTS_BY_ID[instrumentId];
  const fam = def ? FAMILY_DEFAULTS[def.family] ?? {} : {};
  const over = OVERRIDES[instrumentId] ?? {};
  const merged: VoiceProfile = { ...BASE, ...fam, ...over };

  if (def) {
    if (def.voicing === 'bass') merged.role = 'bass';
    else if (def.voicing === 'unpitched') merged.role = merged.role === 'comp' ? 'perc' : merged.role;
    else if (def.voicing === 'single' && merged.role === 'comp') merged.role = 'lead';
  }
  cache.set(instrumentId, merged);
  return merged;
}

export function noteLengthBeats(
  p: VoiceProfile,
  authoredBeats: number,
  gapBeats: number,
  articulation?: string,
): number {
  const art = articulation ?? '';
  let mult = 1;
  if (/staccato|seco|picado|damp|mute|bachi|alternate-pluck/i.test(art)) mult = 0.42;
  else if (/marcato|accent/i.test(art)) mult = 0.7;
  else if (/legato|ligado|tenuto|sostenuto/i.test(art)) mult = 1.6;
  else if (/pesado|heavy/i.test(art)) mult = 1.25;

  const gap = Math.max(0.05, gapBeats);

  switch (p.sustain) {
    case 'percussive':
      return Math.min(0.35, authoredBeats * mult);
    case 'short':
      return Math.max(0.06, Math.min(gap * 0.75, authoredBeats * mult * 0.6));
    case 'decaying':
      return Math.min(p.ring, Math.max(authoredBeats * mult, gap * 1.15));
    case 'blown':
      return Math.max(0.12, Math.min(gap * 0.88, Math.max(authoredBeats * mult, gap * 0.7)));
    case 'sustained':
    default:
      return Math.max(authoredBeats * mult, gap * 0.98);
  }
}

/** Fold a midi note into the instrument's comfortable range. */
export function foldToRange(midi: number, p: VoiceProfile): number {
  let n = midi;
  let guard = 0;
  while (n < p.low && guard++ < 12) n += 12;
  guard = 0;
  while (n > p.high && guard++ < 12) n -= 12;
  return Math.max(0, Math.min(127, n));
}
