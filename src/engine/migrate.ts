import type { Region, SectionEnergy, Song } from '../types';
import { clampEnergy, energyForFormIntensity, formIntensityForEnergy } from './energy';
import { DEFAULT_SONG_DIALS, normaliseDials } from './dials';

/**
 * MIGRATION
 * =========
 *
 * Songs are persisted as plain JSON. Anything the engine stops believing in has
 * to be translated on load rather than crashing or, worse, silently producing a
 * different song than the one the user saved.
 *
 * Each migration is a pure function from one shape to the next, keyed by the
 * version it upgrades *from*. `migrateSong` walks the chain, so a v1 song loaded
 * into a v4 engine passes through every step in order. Steps are never edited
 * once shipped: a new belief gets a new step.
 *
 * Every step returns the changes it made, so a load can report "this song was
 * written in an older version and 3 things were converted" rather than doing it
 * invisibly.
 */

export const CURRENT_SONG_VERSION = 4;

export interface MigrationNote {
  from: number;
  to: number;
  change: string;
  /** How many objects the change touched. */
  count: number;
}

export interface MigrationResult<T = Song> {
  song: T;
  notes: MigrationNote[];
  /** True when nothing had to change. */
  clean: boolean;
  /** Problems that could not be repaired; the song still loads. */
  warnings: string[];
}

type AnySong = Record<string, any>;

interface MigrationStep {
  from: number;
  to: number;
  describe: string;
  apply: (song: AnySong, notes: MigrationNote[], warnings: string[]) => AnySong;
}

const STEPS: MigrationStep[] = [
  /* ------------------------------------------------------------------ */
  {
    from: 1,
    to: 2,
    describe: 'PartDensity strings become numeric SectionEnergy',
    apply(song, notes) {
      const DENSITY_TO_ENERGY: Record<string, SectionEnergy> = {
        sparse: 1, light: 2, normal: 3, medium: 3, busy: 4, dense: 5, full: 5,
      };
      let converted = 0;

      // Section-level `density`, which never existed in the type but was
      // written by an older UI.
      for (const region of (song.regions ?? []) as AnySong[]) {
        if (typeof region.density === 'string') {
          region.energy = DENSITY_TO_ENERGY[region.density] ?? 3;
          delete region.density;
          converted++;
        }
      }

      // `song.densities[regionId][trackId]`, the per-part map.
      if (song.densities && typeof song.densities === 'object') {
        song.energies = song.energies ?? {};
        for (const [regionId, byTrack] of Object.entries(song.densities as Record<string, any>)) {
          song.energies[regionId] = song.energies[regionId] ?? {};
          for (const [trackId, value] of Object.entries(byTrack as Record<string, any>)) {
            song.energies[regionId][trackId] =
              typeof value === 'string' ? (DENSITY_TO_ENERGY[value] ?? 3) : clampEnergy(value);
            converted++;
          }
        }
        delete song.densities;
      }

      // Stray numeric-but-out-of-range energies from the half-finished rename.
      for (const byTrack of Object.values((song.energies ?? {}) as Record<string, any>)) {
        for (const [trackId, value] of Object.entries(byTrack as Record<string, any>)) {
          const n = Number(value);
          // The aborted rename wrote 0..1 activity floats into this slot.
          if (Number.isFinite(n) && n > 0 && n < 1) {
            (byTrack as AnySong)[trackId] = clampEnergy(Math.round(n * 4) + 1);
            converted++;
          } else if (!Number.isFinite(n) || n < 1 || n > 5) {
            (byTrack as AnySong)[trackId] = 3;
            converted++;
          }
        }
      }

      if (converted) notes.push({ from: 1, to: 2, change: 'density → energy', count: converted });
      return song;
    },
  },

  /* ------------------------------------------------------------------ */
  {
    from: 2,
    to: 3,
    describe: 'Region.energy becomes authoritative; intensity is derived',
    apply(song, notes) {
      let converted = 0;
      for (const region of (song.regions ?? []) as AnySong[]) {
        if (region.energy === undefined) {
          region.energy = energyForFormIntensity(region.intensity);
          converted++;
        } else {
          region.energy = clampEnergy(region.energy);
        }
        // Rewrite intensity from energy so the two can never disagree again.
        const derived = formIntensityForEnergy(region.energy as SectionEnergy);
        if (region.intensity !== derived) {
          region.intensity = derived;
          converted++;
        }
      }
      if (converted) notes.push({ from: 2, to: 3, change: 'section weight normalised', count: converted });
      return song;
    },
  },

  /* ------------------------------------------------------------------ */
  {
    from: 3,
    to: 4,
    describe: 'Song dials materialised; per-part lens map added',
    apply(song, notes) {
      const before = {
        pocket: song.pocket, lift: song.lift,
        adventure: song.adventure, development: song.development, expression: song.expression,
      };
      const dials = normaliseDials(before);
      let added = 0;
      for (const [k, v] of Object.entries(dials)) {
        if (v === undefined) continue;
        if ((song as AnySong)[k] !== v) {
          (song as AnySong)[k] = v;
          if (before[k as keyof typeof before] === undefined) added++;
        }
      }
      if (!song.partLens) {
        song.partLens = {};
        added++;
      }
      if (added) notes.push({ from: 3, to: 4, change: 'dials defaulted', count: added });
      return song;
    },
  },
];

/**
 * Structural repairs that are not versioned because they fix corruption rather
 * than an old belief. Run after the version chain, every time.
 */
function repair(song: AnySong, warnings: string[]): AnySong {
  const trackIds = new Set<string>((song.tracks ?? []).map((t: AnySong) => t.id));
  const regionIds = new Set<string>((song.regions ?? []).map((r: AnySong) => r.id));

  // Arrangement/energy/lens entries pointing at deleted tracks or regions.
  for (const mapName of ['arrangement', 'energies', 'patternMemory', 'partLens']) {
    const map = song[mapName];
    if (!map || typeof map !== 'object') continue;
    for (const regionId of Object.keys(map)) {
      if (!regionIds.has(regionId)) {
        delete map[regionId];
        continue;
      }
      const inner = map[regionId];
      if (!inner || typeof inner !== 'object') continue;
      for (const trackId of Object.keys(inner)) {
        if (!trackIds.has(trackId)) delete inner[trackId];
      }
    }
  }

  // Regions must have contiguous bar spans; start/end are derived from `bars`.
  let cursor = 0;
  for (const region of (song.regions ?? []) as Region[]) {
    const bars = Math.max(1, (region as AnySong).bars ?? (region.end - region.start) ?? 8);
    (region as AnySong).bars = bars;
    region.start = cursor;
    region.end = cursor + bars;
    cursor += bars;
  }

  // A track without an instrumentId cannot be voiced.
  for (const track of (song.tracks ?? []) as AnySong[]) {
    if (!track.instrumentId) {
      track.instrumentId = track.kind ?? 'piano';
      warnings.push(`Track ${track.id} had no instrument; defaulted to ${track.instrumentId}`);
    }
    if (track.spotlight === undefined) track.spotlight = 'auto';
  }

  // Guest lenses must name a real weight.
  for (const byTrack of Object.values((song.partLens ?? {}) as Record<string, any>)) {
    for (const [trackId, lens] of Object.entries(byTrack as Record<string, any>)) {
      const w = Number((lens as AnySong)?.weight);
      if (!Number.isFinite(w)) (byTrack as AnySong)[trackId] = { ...(lens as AnySong), weight: 0.5 };
      else (byTrack as AnySong)[trackId] = { ...(lens as AnySong), weight: Math.max(0, Math.min(1, w)) };
    }
  }

  return song;
}

/**
 * Detect the version of a song that predates versioning, by looking for the
 * shapes each version is known by. Guessing low is safe — every step is
 * idempotent on already-migrated data.
 */
export function detectVersion(song: AnySong): number {
  if (typeof song.schemaVersion === 'number') return song.schemaVersion;
  if (song.densities || (song.regions ?? []).some((r: AnySong) => typeof r.density === 'string')) return 1;
  if ((song.regions ?? []).some((r: AnySong) => r.energy === undefined)) return 2;
  if (song.adventure === undefined || song.partLens === undefined) return 3;
  return CURRENT_SONG_VERSION;
}

export function migrateSong<T extends AnySong>(input: T): MigrationResult<T> {
  const notes: MigrationNote[] = [];
  const warnings: string[] = [];
  let song: AnySong = JSON.parse(JSON.stringify(input));
  let version = detectVersion(song);

  let guard = 0;
  while (version < CURRENT_SONG_VERSION && guard++ < STEPS.length + 2) {
    const step = STEPS.find(s => s.from === version);
    if (!step) {
      warnings.push(`No migration from version ${version}; stopping.`);
      break;
    }
    song = step.apply(song, notes, warnings);
    version = step.to;
  }

  song = repair(song, warnings);
  song.schemaVersion = CURRENT_SONG_VERSION;

  return {
    song: song as T,
    notes,
    clean: notes.length === 0 && warnings.length === 0,
    warnings,
  };
}

/**
 * Assertions a migrated song must satisfy. Used by the validation script and
 * safe to call in development after every load.
 */
export function assertMigrated(song: AnySong): string[] {
  const problems: string[] = [];

  if (song.schemaVersion !== CURRENT_SONG_VERSION) {
    problems.push(`schemaVersion is ${song.schemaVersion}, expected ${CURRENT_SONG_VERSION}`);
  }
  if ('densities' in song) problems.push('song.densities still present');

  for (const region of (song.regions ?? []) as AnySong[]) {
    if ('density' in region) problems.push(`region ${region.id} still has density`);
    if (region.energy === undefined) problems.push(`region ${region.id} has no energy`);
    if (region.energy !== undefined && (region.energy < 1 || region.energy > 5)) {
      problems.push(`region ${region.id} energy ${region.energy} out of range`);
    }
    if (region.intensity !== formIntensityForEnergy(region.energy)) {
      problems.push(`region ${region.id} intensity disagrees with energy`);
    }
  }

  for (const [regionId, byTrack] of Object.entries((song.energies ?? {}) as Record<string, any>)) {
    for (const [trackId, value] of Object.entries(byTrack as Record<string, any>)) {
      if (typeof value !== 'number' || value < 1 || value > 5) {
        problems.push(`energies[${regionId}][${trackId}] = ${value} is not a SectionEnergy`);
      }
    }
  }

  for (const key of Object.keys(DEFAULT_SONG_DIALS)) {
    if (key === 'roomId') continue;
    const v = song[key];
    if (typeof v !== 'number' || v < 0 || v > 1) problems.push(`dial ${key} = ${v} is not 0..1`);
  }

  let cursor = 0;
  for (const region of (song.regions ?? []) as Region[]) {
    if (region.start !== cursor) problems.push(`region ${region.id} starts at ${region.start}, expected ${cursor}`);
    cursor = region.end;
  }

  return problems;
}
