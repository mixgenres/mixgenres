import { GenreWorld, MusicalPattern } from '../../types';

import { TANGO_WORLD } from './tango';
import { FLAMENCO_WORLD } from './flamenco';
import { SALSA_WORLD } from './salsa';
import { TIMBA_WORLD } from './timba';
import { BACHATA_WORLD } from './bachata';
import { CUMBIA_WORLD } from './cumbia';
import { REGGAETON_DEMBOW_WORLD } from './reggaetonDembow';
import { ZOUK_WORLD } from './zouk';
import { KIZOMBA_WORLD } from './kizomba';
import { BLUES_WORLD } from './blues';
import { JAZZ_WORLD } from './jazz';
import { SWING_WORLD } from './swing';
import { FUNK_WORLD } from './funk';
import { ROCK_WORLD } from './rock';
import { METAL_WORLD } from './metal';
import { HIP_HOP_WORLD } from './hipHop';
import { ELECTRONIC_WORLD } from './electronic';
import { HOUSE_TECHNO_WORLD } from './houseTechno';
import { AFROBEATS_WORLD } from './afrobeats';
import { COUNTRY_WORLD } from './country';
import { FOLK_WORLD } from './folk';
import { REGGAE_DUB_WORLD } from './reggaeDub';
import { SKA_WORLD } from './ska';
import { SAMBA_BOSSA_WORLD } from './sambaBossa';

/**
 * Canonical public genre hierarchy.  Missing leaves deliberately borrow an
 * existing source world; musical definitions stay shared instead of cloned.
 */
export const GENRE_SOURCE_MAP: Record<string, string> = {
  afrobeats: 'afrobeats', bachata: 'bachata', blues: 'blues', brazilian: 'samba-bossa',
  country: 'country', cumbia: 'cumbia', disco: 'funk', electronic: 'electronic',
  folk: 'folk', funk: 'funk', gospel: 'folk', 'hip-hop': 'hip-hop', house: 'house-techno',
  jazz: 'jazz', kizomba: 'kizomba', tango: 'tango',
  flamenco: 'flamenco', metal: 'metal', 'r-and-b': 'funk', reggae: 'reggae-dub',
  reggaeton: 'reggaeton-dembow', rock: 'rock', salsa: 'salsa', ska: 'ska', soul: 'funk',
  swing: 'swing', timba: 'timba', zouk: 'zouk', 'drum-and-bass': 'electronic',
  industrial: 'metal', 'punk-hardcore': 'rock', 'uk-bass': 'electronic',
};

export const GENRE_NAMES: Record<string, string> = {
  afrobeats: 'Afrobeats', bachata: 'Bachata', blues: 'Blues', brazilian: 'Brazilian',
  country: 'Country', cumbia: 'Cumbia', disco: 'Disco', electronic: 'Electronic',
  folk: 'Folk', funk: 'Funk', gospel: 'Gospel', 'hip-hop': 'Hip Hop', house: 'House',
  jazz: 'Jazz', kizomba: 'Kizomba', tango: 'Tango', flamenco: 'Flamenco',
  metal: 'Metal', 'r-and-b': 'R&B', reggae: 'Reggae', reggaeton: 'Reggaeton', rock: 'Rock',
  salsa: 'Salsa', ska: 'Ska', soul: 'Soul', swing: 'Swing', timba: 'Timba', zouk: 'Zouk',
  'drum-and-bass': 'Drum & Bass', industrial: 'Industrial', 'punk-hardcore': 'Punk / Hardcore',
  'uk-bass': 'UK Bass',
};

const GENRE_KINDS: Record<string, 'world'|'family'|'fusion'> = {
  brazilian:'family', electronic:'family', folk:'family', gospel:'family', reggae:'family', 'uk-bass':'family',
};
const GENRE_STRICTNESS: Record<string, 'strict'|'flexible'|'open'> = {
  tango:'strict', flamenco:'strict', salsa:'strict', timba:'strict', cumbia:'strict', bachata:'strict',
  brazilian:'flexible', electronic:'open', folk:'flexible', gospel:'flexible', reggae:'strict', reggaeton:'strict',
  jazz:'flexible', blues:'flexible', funk:'strict', house:'strict', disco:'strict',
  metal:'strict', 'punk-hardcore':'strict', rock:'flexible', 'drum-and-bass':'strict', industrial:'strict', 'uk-bass':'strict',
};
const PROMOTED_FROM: Record<string,string> = {
  disco:'funk', gospel:'folk', timba:'salsa', ska:'reggae', 'drum-and-bass':'electronic',
};

const SOURCE_WORLDS: Record<string, GenreWorld> = Object.fromEntries([
  TANGO_WORLD, FLAMENCO_WORLD, SALSA_WORLD, TIMBA_WORLD, BACHATA_WORLD, CUMBIA_WORLD,
  REGGAETON_DEMBOW_WORLD, ZOUK_WORLD, KIZOMBA_WORLD, BLUES_WORLD, JAZZ_WORLD, SWING_WORLD,
  FUNK_WORLD, ROCK_WORLD, METAL_WORLD, HIP_HOP_WORLD, ELECTRONIC_WORLD, HOUSE_TECHNO_WORLD, AFROBEATS_WORLD,
  COUNTRY_WORLD, FOLK_WORLD, REGGAE_DUB_WORLD, SKA_WORLD, SAMBA_BOSSA_WORLD,
].map(world => [world.id, world]));

function cloneStyleSeeds(source: GenreWorld, genreId: string): GenreWorld['styleDefinitions'] {
  return (source.styleDefinitions ?? []).map((seed, index) => ({
    ...seed,
    id: `${genreId}-${seed.name.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || index}`,
    worldId: genreId,
  }));
}

function makeGenreWorld(genreId: string): GenreWorld {
  const source = SOURCE_WORLDS[GENRE_SOURCE_MAP[genreId]];
  if (!source) throw new Error(`Missing source world for ${genreId}`);
  return {
    ...source,
    id: genreId,
    name: GENRE_NAMES[genreId],
    kind: GENRE_KINDS[genreId] ?? 'world',
    promotedFrom: PROMOTED_FROM[genreId],
    strictness: GENRE_STRICTNESS[genreId] ?? 'flexible',
    homeStyleId: undefined,
    family: source.family,
    level: 'world',
    parentId: undefined,
    styleDefinitions: cloneStyleSeeds(source, genreId),
    // Patterns are intentionally shared source objects. No genre clones.
    patterns: source.patterns,
  };
}

export const GENRE_WORLDS: GenreWorld[] = Object.keys(GENRE_NAMES).map(makeGenreWorld);
export const GENRE_WORLDS_BY_ID: Record<string, GenreWorld> = Object.fromEntries(
  GENRE_WORLDS.map(world => [world.id, world])
);

function shortDescription(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');
}

export function cleanPatternName(name: string, shortName?: string): string {
  return shortName || String(name ?? '').replace(/\s*\([^)]*\)/g, '').replace(/\s*\/\s*/g, '/').trim();
}

export function cleanGenreName(id: string, name?: string): string {
  return GENRE_NAMES[id] ?? name ?? id;
}

function normalizePattern(p: MusicalPattern): MusicalPattern {
  return {
    ...p,
    name: cleanPatternName(p.name, p.shortName),
    description: shortDescription(p.description),
    variants: (p.variants ?? []).map(v => ({ ...v, description: v.description ? shortDescription(v.description) : v.description })),
  };
}

// Preserve one definition per authored pattern. Shared source patterns are
// reused by multiple canonical genres through the style contract.
const uniquePatterns = new Map<string, MusicalPattern>();
for (const source of Object.values(SOURCE_WORLDS)) {
  for (const raw of source.patterns) {
    const p = normalizePattern(raw);
    // Rhythmic onset similarity is not sufficient to call two authored patterns
    // duplicates. A ska break, a final shout, and a samba break can share a grid
    // while serving completely different musical functions. Deduplicate only when
    // the musical identity is effectively identical.
    const signature = [
      p.meter, p.cycleLength, p.subdivisions, p.category, p.family,
      cleanPatternName(p.name).toLowerCase(),
      (p.onsetGrid ?? []).join(','),
      (p.roles ?? []).slice().sort().join(','),
      (p.instruments ?? []).slice().sort().join(','),
      (p.tags ?? []).slice().sort().join(',')
    ].join('|');
    if (!uniquePatterns.has(signature)) uniquePatterns.set(signature, p);
  }
}

export const ALL_PATTERNS: MusicalPattern[] = [...uniquePatterns.values()];
export const PATTERNS_BY_ID: Record<string, MusicalPattern> = Object.fromEntries(ALL_PATTERNS.map(p => [p.id, p]));

/** Genre views contain shared pattern objects, never genre-specific clones. */
export const PATTERNS_BY_WORLD: Record<string, MusicalPattern[]> = Object.fromEntries(
  GENRE_WORLDS.map(world => [
    world.id,
    // A pattern's `canCrossRole` flag permits use on another instrument role
    // within a musical world. It must never make the pattern globally visible
    // to unrelated genres. Cross-genre material is admitted explicitly by the
    // adventure/blend layer, where the originating world is retained.
    ALL_PATTERNS.filter(p => p.worldId === GENRE_SOURCE_MAP[world.id]),
  ])
);
export const PATTERNS_BY_GENRE = PATTERNS_BY_WORLD;

export function getPatternById(id: string): MusicalPattern | undefined {
  return PATTERNS_BY_ID[id];
}

export type PatternFeel = 'laid-back' | 'bouncy' | 'rolling' | 'hypnotic' | 'cinematic';
export const FEEL_LABELS: Record<PatternFeel, string> = {
  'laid-back': 'Laid-back', bouncy: 'Bouncy', rolling: 'Rolling', hypnotic: 'Hypnotic', cinematic: 'Cinematic',
};
export const FEEL_ORDER: PatternFeel[] = ['laid-back', 'bouncy', 'rolling', 'hypnotic', 'cinematic'];
const PATTERN_FEELS: Record<string, PatternFeel[]> = {
  'sb-bossa-bass': ['laid-back'], 'rd-one-drop': ['laid-back'], 'kizomba-batida-groove': ['laid-back'],
  'jazz-walking-bass': ['hypnotic'], 'elec-offbeat-hats': ['hypnotic'], 'hiphop-trap-hats': ['rolling'],
};
export function feelsForPattern(id: string): PatternFeel[] { return PATTERN_FEELS[id] ?? []; }

export * from './salsaTimba';
export * from './flamencoBulerias';
