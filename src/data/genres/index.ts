import { GenreWorld, MusicalPattern, Tradition } from '../../types';
import { TANGO_WORLD } from './tango';
import { SALSA_WORLD } from './salsa';
import { TIMBA_WORLD } from './timba';
import { FLAMENCO_WORLD } from './flamenco';
import { JAZZ_WORLD } from './jazz';
import { BLUES_WORLD } from './blues';
import { ROCK_WORLD } from './rock';
import { ROCK_EN_ESPANOL_WORLD } from './rockEnEspanol';
import { ZOUK_WORLD } from './zouk';
import { KIZOMBA_WORLD } from './kizomba';
import { FUNK_WORLD } from './funk';
import { METAL_WORLD } from './metal';
import { BACHATA_WORLD } from './bachata';
import { FOLK_WORLD } from './folk';
import { HIP_HOP_WORLD } from './hipHop';
import { ELECTRONIC_WORLD } from './electronic';
import { COUNTRY_WORLD } from './country';
import { SWING_WORLD } from './swing';
import { MATH_ROCK_WORLD } from './mathRock';
import { AFROBEATS_WORLD } from './afrobeats';
import { JPOP_WORLD } from './jpop';
import { CHINESE_ROCK_WORLD } from './chineseRock';
import { FUSION_AMBIENT_WORLD } from './fusionAmbient';
import { CHINESE_TRADITIONAL_WORLD } from './chineseTraditional';
import { JAPANESE_TRADITIONAL_WORLD } from './japaneseTraditional';
import { REGGAETON_DEMBOW_WORLD } from './reggaetonDembow';
import { CUMBIA_WORLD } from './cumbia';
import { TROVA_WORLD } from './trova';
import { FOLCLORICO_WORLD } from './folclorico';
import { HOUSE_TECHNO_WORLD } from './houseTechno';
import { REGGAE_DUB_WORLD } from './reggaeDub';
import { SKA_WORLD } from './ska';
import { SAMBA_BOSSA_WORLD } from './sambaBossa';
import { CELTIC_TRAD_WORLD } from './celticTrad';


export function cleanPatternName(name: string): string {
  // Pattern labels are UI names, not identifiers: keep them short, musical,
  // and recognizable across every genre. Source data can remain descriptive.
  const labelMap: Record<string, string> = {
    '"The One" 16th-Note Syncopated Bass': '"The One" Syncopated Bass',
    'Clyde Stubblefield "Funky Drummer" Breakbeat': 'Funky Drummer Breakbeat',
    'Bossa nova guitar syncopation': 'Bossa Guitar Sync',
    'Bossa bass anchor / anticipation': 'Bossa Bass Anticipation',
    'Bossa piano chord punctuation': 'Bossa Piano Punct.',
    'Abanico Fan Strum (Rumba & Sevillanas)': 'Abanico Strum',
    'Tangos de Triana (Binary Compás)': 'Tangos de Triana',
    'Soleá 12-Beat Compás Framework': 'Soleá Compás',
    'Alzapúa Thumb Technique (Bass Driver)': 'Alzapúa Bass',
    'Bombo legüero low/high alternation': 'Bombo Low/High',
    'Requinto Derecho (Verse Picking)': 'Requinto Derecho',
    'Classic dembow two-bar answer': 'Dembow Answer',
    'Reggaetón piano offbeat stab': 'Dembow Piano Stab',
    'Modern Dembow Phrase-End Turn': 'Dembow End Turn',
    'Koto pitch-inflection gesture': 'Koto Pitch Gesture',
    'Spang-a-Lang Verse Variation': 'Spang-a-Lang Variant',
    'Arena Ballad Root-Fifth Bass': 'Arena Root-Fifth Bass',
    'Mandopop Acoustic Verse Strum': 'Mandopop Strum',
    'Beyond-Style Pentatonic Lead Hook': 'Pentatonic Lead Hook',
    'Dynamic Arena Rock Drum Build': 'Arena Drum Build',
    'Chinese Rock & Pop strings part': 'Rock/Pop Strings',
    'Marcato en 4 (Orquesta Típica)': 'Marcato en 4',
    'Marcato en 2 (Troilo / Di Sarli)': 'Marcato en 2',
    'Síncopa a Tierra (Standard Syncopation)': 'Síncopa a Tierra',
    'Arrastre (Chromatic Drag Lead-in)': 'Arrastre',
    'Bordoneo Criollo (Guitar Bass Movement)': 'Bordoneo Criollo',
    '3+3+2 Nuevo Tango Pulse (Piazzolla)': '3+3+2 Tango',
    'Fraseo y Rubato (Bandoneón Lead)': 'Fraseo y Rubato',
    'Old-Time Fiddle Drone & Shuffle Bow': 'Old-Time Fiddle',
    'Kizomba Batida & Sub-Kick Beat': 'Kizomba Batida',
    'Kizomba Vocal Phrase Response': 'Kizomba Vocal Reply',
    'Slow Breathing Sub-Bass Drone': 'Breathing Sub Drone',
    'Downtempo Pocket & Ghost Kit': 'Downtempo Ghost Kit',
    'Felt Piano Intimate Arpeggiation': 'Felt Piano Arpeggio',
    'Organic Shaker & Clay Drum Interlock': 'Shaker/Clay Interlock',
    'Granular Ambient Atmosphere Wash': 'Granular Atmosphere',
    'Tambora / alegre conversation': 'Tambora/Alegre Reply',
    'Guacharaca reverse accent cycle': 'Guacharaca Reverse Cycle',
    'Son Clave 2–3 Structural Timeline': 'Son Clave 2–3',
    'Bass Tumbao (Anticipated Harmony)': 'Bass Tumbao',
    'Piano Montuno / Guajeo (Interlocking Arpeggios)': 'Piano Montuno/Guajeo',
    'Timbal Cáscara Pattern (Side-Shell Stick)': 'Timbal Cáscara',
    'Conga Marcha (Slap & Open Tones)': 'Conga Marcha',
    'Mambo Section Horn Stabs & Punctuation': 'Mambo Horn Stabs',
    'Midwest Clean Tapped Arpeggio (7/8)': 'Midwest Tap Arpeggio',
    'Odd-Meter Precision Kit Groove': 'Odd-Meter Kit',
    'Conversational Tapped Bassline': 'Tapped Bassline',
    'Polymetric 5-Against-4 Guitar Ostinato': '5:4 Guitar Ostinato',
    'Four-on-the-Floor Foundation': 'Four-on-Floor',
    'Four-floor kick with bar accent': 'Four-Floor Kick Accent',
    'Gear Change: Marcha (Standard Drive)': 'Marcha Gear Change',
    'Songo Drum Kit & Cowbell Groove (Changuito / Los Van Van)': 'Songo + Cowbell',
    'Displaced Funk / Timba Bassline': 'Displaced Timba Bass',
    'Pitched Log Drum Bass Groove': 'Log Drum Bass',
    'Modern Afropop Kick & Rim Pocket': 'Afropop Kick/Rim',
    'Highlife Fingerstyle Clean Guitar': 'Highlife Fingerstyle',
    'Shekere & Gourd Shaker Engine': 'Shekere/Shaker',
    'Fela Afrobeat Horn Section Stabs': 'Afrobeat Horn Stabs',
    'Airy Rhodes & Synth Pad Comping': 'Rhodes/Synth Comp',
    'City Pop Slap & Thumb Groove': 'City Pop Thumb Groove',
    'Jazzy 7th/9th Electric Piano Comping': '7th/9th EPiano Comp',
    'Tokyo Studio Funk Pocket Kit': 'Tokyo Funk Pocket',
    'J-Rock Melodic Driving 8th Bass': 'J-Rock 8th Bass',
    'Chorus-Drenched Analog Synth Wash': 'Analog Synth Wash',
    'Walking Bass (Continuous Harmonic Navigation)': 'Walking Bass',
    'Jazz Ride Cymbal (Spang-a-Lang)': 'Jazz Ride',
    'Syncopated Piano Comping (Charleston & Red Garland Pluck)': 'Sync Piano Comp',
    'The Gallop Rhythm (Iron Maiden / Steve Harris)': 'Metal Gallop',
    'Trova descending harmonic turn': 'Trova Descending Turn',
    'Zouk Syncopated Bass Movement': 'Zouk Bass Sync',
    'Offbeat Guitar + Percussion Lock': 'Guitar/Percussion Lock',
    'Xiqu gong / woodblock punctuation': 'Xiqu Gong/Woodblock',
    'Chinese open-string drone color': 'Open-String Drone',
    'Jinghu vocal-response gesture': 'Jinghu Vocal Reply',
    'Chicken-Scratch 9th Chords (Muted 16th Strum)': 'Chicken-Scratch 9ths',
  };

  const base = labelMap[name] ?? name
    .replace(/\s*\([^)]*GM[^)]*\)/gi, '')
    .replace(/\s*\([^)]*approx[^)]*\)/gi, '')
    .replace(/\s*\([^)]*\)/g, '')
    .trim()
    .replace(/\s*\/\s*/g, '/')
    .replace(/\bComping\b/g, 'Comp')
    .replace(/\bVariation\b/g, 'Variant')
    .replace(/\bPunctuation\b/g, 'Punct.');

  // Collapse common variant suffixes so the base pattern remains easy to scan.
  const suffixes: Array<[RegExp, string]> = [
    [/\s*[—-]\s*sparse(?: variation)?$/i, ' · Sparse'],
    [/\s*[—-]\s*accent shift$/i, ' · Accent'],
    [/\s*[—-]\s*transition variation$/i, ' · Transition'],
    [/\s*[—-]\s*played variation$/i, ' · Played'],
    [/\s*[—-]\s*dense variation$/i, ' · Dense'],
    [/\s*[—-]\s*instrument-specific variation$/i, ' · Instrument'],
  ];
  for (const [pattern, suffix] of suffixes) {
    if (pattern.test(base)) return base.replace(pattern, suffix);
  }
  return base;
}

export function cleanGenreName(id: string, name?: string): string {
  const DISPLAY_NAMES: Record<string, string> = {
    'tango': 'Tango',
    'salsa': 'Salsa',
    'timba': 'Timba',
    'flamenco': 'Flamenco',
    'bachata': 'Bachata',
    'zouk': 'Zouk',
    'kizomba': 'Kizomba',
    'jazz': 'Jazz',
    'blues': 'Blues',
    'funk': 'Funk',
    'rock': 'Rock',
    'rock-en-espanol': 'Rock en Español',
    'metal': 'Metal',
    'folk': 'Folk',
    'hip-hop': 'Hip Hop',
    'electronic': 'Electronic',
    'country': 'Country',
    'swing': 'Swing',
    'math-rock': 'Math Rock',
    'afrobeats': 'Afrobeats',
    'j-pop': 'J-Pop',
    'jpop': 'J-Pop',
    'chinese-rock': 'Chinese Rock',
    'fusion-ambient': 'Fusion Ambient',
    'chinese-traditional': 'Chinese Trad',
    'japanese-traditional': 'Japanese Trad',
    'reggaeton-dembow': 'Reggaeton',
    'reggaeton': 'Reggaeton',
    'cumbia': 'Cumbia',
    'trova': 'Trova',
    'folclorico': 'Folclórico',
    'house-techno': 'House / Techno',
    'reggae-dub': 'Reggae / Dub',
    'ska': 'Ska',
    'samba-bossa': 'Samba / Bossa',
    'celtic-trad': 'Celtic Trad',
  };
  if (DISPLAY_NAMES[id]) return DISPLAY_NAMES[id];
  const base = name || id;
  return base
    .replace(/\s*\/\s*Dembow/gi, '')
    .replace(/\s*Traditional/gi, ' Trad')
    .trim();
}

const RAW_GENRE_WORLDS: GenreWorld[] = [
  TANGO_WORLD,
  SALSA_WORLD,
  TIMBA_WORLD,
  FLAMENCO_WORLD,
  JAZZ_WORLD,
  BLUES_WORLD,
  ROCK_WORLD,
  ROCK_EN_ESPANOL_WORLD,
  ZOUK_WORLD,
  KIZOMBA_WORLD,
  FUNK_WORLD,
  METAL_WORLD,
  BACHATA_WORLD,
  FOLK_WORLD,
  HIP_HOP_WORLD,
  ELECTRONIC_WORLD,
  COUNTRY_WORLD,
  SWING_WORLD,
  MATH_ROCK_WORLD,
  AFROBEATS_WORLD,
  JPOP_WORLD,
  CHINESE_ROCK_WORLD,
  FUSION_AMBIENT_WORLD,
  CHINESE_TRADITIONAL_WORLD,
  JAPANESE_TRADITIONAL_WORLD,
  REGGAETON_DEMBOW_WORLD,
  CUMBIA_WORLD,
  TROVA_WORLD,
  FOLCLORICO_WORLD,
  HOUSE_TECHNO_WORLD,
  REGGAE_DUB_WORLD,
  SKA_WORLD,
  SAMBA_BOSSA_WORLD,
  CELTIC_TRAD_WORLD
];

export const GENRE_WORLDS: GenreWorld[] = RAW_GENRE_WORLDS.map(w => ({
  ...w,
  name: cleanGenreName(w.id, w.name),
  traditions: w.traditions.map(t => ({
    ...t,
    name: cleanPatternName(t.name),
  })),
  patterns: w.patterns.map(p => ({
    ...p,
    name: cleanPatternName(p.name),
    variants: p.variants?.map(v => ({
      ...v,
      name: cleanPatternName(v.name),
    })),
  })),
}));

export const GENRE_WORLDS_BY_ID: Record<string, GenreWorld> = Object.fromEntries(
  GENRE_WORLDS.map(w => [w.id, w])
);

export const ALL_PATTERNS = GENRE_WORLDS.flatMap(w => w.patterns);

export const PATTERNS_BY_WORLD: Record<string, MusicalPattern[]> = (() => {
  const map: Record<string, MusicalPattern[]> = {};
  for (const p of ALL_PATTERNS) {
    if (!map[p.worldId]) map[p.worldId] = [];
    map[p.worldId].push(p);
  }
  return map;
})();

export const PATTERNS_BY_ID: Record<string, MusicalPattern> = Object.fromEntries(
  ALL_PATTERNS.map(p => [p.id, p])
);

export const TRADITIONS_BY_ID: Record<string, Tradition> = Object.fromEntries(
  GENRE_WORLDS.flatMap(w => w.traditions).map(t => [t.id, t])
);

export function getPatternById(id: string): MusicalPattern | undefined {
  return PATTERNS_BY_ID[id];
}
export const ALL_TRADITIONS = GENRE_WORLDS.flatMap(w => w.traditions);

/* ========================================================================== */
/*  Feels — a few playful, cross-genre categories layered on top of the       */
/*  catalog. A pattern keeps living in its home genre; it just also shows up  */
/*  here when it's a good fit for the mood.                                   */
/* ========================================================================== */
export type PatternFeel =
  | 'chaotic' | 'funny' | 'quirky'
  | 'hypnotic' | 'frantic' | 'laid-back' | 'bouncy'
  | 'cinematic' | 'mischievous' | 'rolling' | 'spacious';

export const FEEL_LABELS: Record<PatternFeel, string> = {
  chaotic: 'Chaotic',
  funny: 'Funny',
  quirky: 'Quirky',
  hypnotic: 'Hypnotic',
  frantic: 'Frantic',
  'laid-back': 'Laid-back',
  bouncy: 'Bouncy',
  cinematic: 'Cinematic',
  mischievous: 'Mischievous',
  rolling: 'Rolling',
  spacious: 'Spacious',
};

// Alphabetical by label, so the filter chips read the same way every other
// picklist in the app does.
export const FEEL_ORDER: PatternFeel[] = (Object.keys(FEEL_LABELS) as PatternFeel[]).sort((a, b) =>
  FEEL_LABELS[a].localeCompare(FEEL_LABELS[b])
);

const PATTERN_FEELS: Record<string, PatternFeel[]> = {
  // chaotic — irregular, tumbling, hard to predict
  'metal-prog-odd-meter': ['chaotic'],
  'math-odd-meter-drums': ['chaotic'],
  'math-polymeter-interlock': ['chaotic'],
  'rock-odd-meter': ['chaotic'],

  // quirky — playful, oddball, but still tightly controlled
  'math-tapping-7-8': ['quirky'],
  'country-chicken': ['quirky'],
  'zouk-ti-bwa': ['quirky'],
  'cu-guacharaca': ['quirky'],
  'kizomba-dikanza-scraper': ['quirky'],
  'ht-acid-303': ['quirky'],

  // hypnotic — repeating, trance-like, circular motion
  'jazz-walking-bass': ['hypnotic'],
  'elec-offbeat-hats': ['hypnotic'],
  'ct-uilleann-drone': ['hypnotic'],
  // frantic — urgent, high-density, barely-contained momentum
  'hiphop-trap-hats': ['frantic'],
  // laid-back — behind-the-beat, spacious pocket
  'sb-bossa-bass': ['laid-back'],
  'rd-one-drop': ['laid-back'],
  'kizomba-batida-groove': ['laid-back'],
  // bouncy — elastic, buoyant, danceable
  'flam-abanico-strum-variant-rumba-strum': ['bouncy'],
  'sk-11-two-tone-guitar-pulse': ['bouncy'],
  // cinematic — broad, dramatic, scene-setting
  'fusion-deep-granular-pad': ['cinematic'],
  'fusion-ambient-guitar-swells': ['cinematic'],
  'flam-falseta-tremolo-swell': ['cinematic'],
  // mischievous — cheeky accents, unexpected little turns
  // rolling — continuous, flowing forward motion
  'afro-highlife-guitar': ['rolling'],
  'sb-pandeiro': ['rolling'],
  'ct-reel-drive': ['rolling'],
  // spacious — sparse, open, breathing
  'fusion-sub-drone-bass': ['spacious'],
  'folk-68-arpeggio': ['spacious'],
  'ct-air-breath': ['spacious'],

  // funny — novelty, cartoonish, a little goofy
  'funk-chicken-scratch-guitar': ['funny', 'mischievous'],
  'country-boom-chuck': ['funny', 'bouncy'],
  'cu-14-cumbia-stop-break': ['funny', 'mischievous'],
  'ct-opera-cue': ['funny'],
  'elec-acid-303': ['funny'],
  'hiphop-bounce': ['funny'],
};

export function feelsForPattern(id: string): PatternFeel[] {
  return PATTERN_FEELS[id] ?? [];
}

export function patternsForFeel(feel: PatternFeel): MusicalPattern[] {
  return ALL_PATTERNS.filter(p => (PATTERN_FEELS[p.id] ?? []).includes(feel));
}
