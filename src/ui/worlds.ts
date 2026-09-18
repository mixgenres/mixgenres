import { GENRE_WORLDS } from '../data/genres';

/**
 * Every world is a printing plate: a coloured stock, a second tone for panels,
 * one ink, one signal colour. The composition never changes between worlds — only the inks do.
 *
 * The catalog is authoritative: every GenreWorld gets a plate, so adding a genre
 * cannot silently make it disappear from the genre picker or fall back to Tango.
 */
export interface Plate {
  /** the paper the song is printed on */
  ground: string;
  /** a second, deeper tone of the same stock, for blocks and sheets */
  tone: string;
  /** the one ink everything is drawn in */
  ink: string;
  /** the one colour that means "now" or "chosen" */
  signal: string;
  /** display name used in the interface; comes from the genre catalog, not from here */
  short: string;
}

const CURATED_PLATES: Record<string, Omit<Plate, 'short'>> = {
  tango: { ground: '#DAD6E1', tone: '#BFB9CE', ink: '#1E1B27', signal: '#DC3B1E' },
  salsa: { ground: '#E7DCBE', tone: '#D3C49B', ink: '#231F0E', signal: '#1B6E58' },
  timba: { ground: '#D8DFDA', tone: '#B5C6BE', ink: '#0F241D', signal: '#E05219' },
  flamenco: { ground: '#E5D2C1', tone: '#CFB49B', ink: '#2A1511', signal: '#9A1826' },
  bachata: { ground: '#E8D8DB', tone: '#D2B5BC', ink: '#2A1519', signal: '#C0396B' },
  zouk: { ground: '#D9E4D7', tone: '#B6C9B3', ink: '#122015', signal: '#0F8F76' },
  kizomba: { ground: '#D4DEC9', tone: '#B8C6AC', ink: '#162414', signal: '#3C8431' },
  jazz: { ground: '#D8DDE1', tone: '#B6C1C9', ink: '#141E28', signal: '#C08A1E' },
  blues: { ground: '#CBD6DD', tone: '#A6B7C3', ink: '#11202A', signal: '#33529E' },
  funk: { ground: '#E9DCC6', tone: '#D5C09C', ink: '#231C10', signal: '#AD2B84' },
  rock: { ground: '#DEDAD2', tone: '#C1BCB1', ink: '#1F1D19', signal: '#CE2C22' },
  'rock-en-espanol': { ground: '#E2D9DD', tone: '#C7B8C0', ink: '#241A1F', signal: '#6E34A0' },
  metal: { ground: '#CFCFD3', tone: '#ADADB4', ink: '#131315', signal: '#7E1A1A' },
  folk: { ground: '#DFE2C7', tone: '#C4C8A6', ink: '#212417', signal: '#718049' },
  'hip-hop': { ground: '#D9D9D9', tone: '#BCBCBC', ink: '#1C1C1C', signal: '#5A5A5A' },
  electronic: { ground: '#C3E7EB', tone: '#9BD6DE', ink: '#0B262A', signal: '#008B9B' },
  country: { ground: '#E8D3B8', tone: '#D1B490', ink: '#291E13', signal: '#99622A' },
  swing: { ground: '#EFD1D7', tone: '#D9A9B2', ink: '#2C161B', signal: '#B23A52' },
  'math-rock': { ground: '#DEE3E8', tone: '#BFCCD6', ink: '#16232D', signal: '#2977B6' },
  afrobeats: { ground: '#E9E2CE', tone: '#D7CAAB', ink: '#231D10', signal: '#B8791A' },
  'j-pop': { ground: '#E8D6DE', tone: '#D4B3C2', ink: '#291520', signal: '#B83272' },
  'chinese-rock': { ground: '#E6D9D2', tone: '#D0BDB3', ink: '#261812', signal: '#B24522' },
  'fusion-ambient': { ground: '#D4E2E6', tone: '#ADC7CE', ink: '#102227', signal: '#1F7E94' },
  'chinese-traditional': { ground: '#E5D6C5', tone: '#D0B99E', ink: '#26190E', signal: '#A6481E' },
  'japanese-traditional': { ground: '#E5DDD4', tone: '#CCC0B2', ink: '#261F17', signal: '#8F3529' },
  'reggaeton-dembow': { ground: '#E7D8C8', tone: '#D3BDA4', ink: '#271B0F', signal: '#C9551E' },
  cumbia: { ground: '#E3E0C8', tone: '#CBC6A3', ink: '#211E10', signal: '#6F871E' },
  trova: { ground: '#E6DBCB', tone: '#D2BEA6', ink: '#261D12', signal: '#9E6422' },
  folclorico: { ground: '#E5D7CA', tone: '#D1B8A4', ink: '#27180F', signal: '#A84E26' },
  'house-techno': { ground: '#CDE5EB', tone: '#A7CFD9', ink: '#0C2329', signal: '#0E8DA6' },
  'reggae-dub': { ground: '#DEE4CA', tone: '#C4CE9E', ink: '#1E250E', signal: '#5A8B22' },
  ska: { ground: '#DCDFE1', tone: '#BDC4C8', ink: '#181E21', signal: '#384852' },
  'samba-bossa': { ground: '#E6E1C8', tone: '#D0C99E', ink: '#24200E', signal: '#3D8C3A' },
};

function hexToRgb(hex: string) {
  const clean = hex.replace('#', '');
  const value = parseInt(clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

function mix(hex: string, amount: number, towardWhite = true) {
  const { r, g, b } = hexToRgb(hex);
  const t = towardWhite ? 255 : 0;
  const m = Math.max(0, Math.min(1, amount));
  return `#${[r, g, b].map(c => Math.round(c + (t - c) * m).toString(16).padStart(2, '0')).join('')}`;
}

function generatedPlate(color?: string): Omit<Plate, 'short'> {
  const signal = color || '#5A6B7A';
  return {
    ground: mix(signal, 0.86),
    tone: mix(signal, 0.68),
    ink: mix(signal, 0.72, false),
    signal,
  };
}

// Genres are listed alphabetically by their display name everywhere they're
// picked from, so the order here is the order the whole app shows them in.
export const PLATES: Record<string, Plate> = Object.fromEntries(
  GENRE_WORLDS
    .map(world => [world.id, { ...(CURATED_PLATES[world.id] ?? generatedPlate(world.color)), short: world.name }] as const)
    .sort(([, a], [, b]) => a.short.localeCompare(b.short))
);

export const FALLBACK_PLATE: Plate = PLATES.tango;

export function plateFor(worldId: string): Plate {
  return PLATES[worldId] ?? FALLBACK_PLATE;
}

/** Paint the plate onto the document so CSS variables carry it everywhere. */
export function applyPlate(p: Plate) {
  const r = document.documentElement.style;
  r.setProperty('--ground', p.ground);
  r.setProperty('--tone', p.tone);
  r.setProperty('--ink', p.ink);
  r.setProperty('--signal', p.signal);
}
