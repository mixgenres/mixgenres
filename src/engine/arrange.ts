import { Song, Region, Track, Measure, SectionType, PatternVariant, MusicalPattern } from '../types';
import { GENRE_WORLDS_BY_ID, ALL_PATTERNS, PATTERNS_BY_ID, PATTERNS_BY_WORLD } from '../data/genres';
import { INSTRUMENTS_BY_ID, INSTRUMENT_CATALOG, WORLD_INSTRUMENT_HINTS, instrument, instrumentPatternKinds } from '../data/instruments';
import { sliceBarNative } from './grid';
import { progressionForSection } from './arrangement';
import { inferKey, parseChord, SHARP_NAMES } from './theory';

export interface Voice extends Track {
  instrumentId: string;
}

/** regionId -> trackId -> patternId */
export type Arrangement = Record<string, Record<string, string>>;

export type PartDensity = 'sparse' | 'normal' | 'busy';

export interface CustomProgression {
  id: string;
  name: string;
  chords: string[];
}

export interface Sheet extends Song {
  arrangement: Arrangement;
  densities?: Record<string, Record<string, PartDensity>>;
  worldId: string;
  patternMemory?: Record<string, Record<string, string>>;
  tempoShift?: string;
  customProgressions?: (CustomProgression | string[])[];
  /** 0..1 — how far the genre's feel is pushed. 0.5 is "as the genre intends". */
  pocket?: number;
  /** 0..1 — how much louder and fuller the big sections get than the small ones. */
  lift?: number;
  /** the room the whole mix sits in; defaults to the world's usual one */
  roomId?: string;
}

export interface TempoFeel {
  id: string;
  name: string;
  mult: number;
  description: string;
}

export const FEELS: TempoFeel[] = [
  { id: 'half-time', name: 'Half time', mult: 0.5, description: 'Half speed' },
  { id: 'held-back', name: 'Held back', mult: 0.82, description: 'Laid back' },
  { id: 'walking', name: 'Walking', mult: 0.93, description: 'Relaxed stride' },
  { id: 'as-written', name: 'As written', mult: 1.0, description: 'Default tempo' },
  { id: 'pushed', name: 'Pushed', mult: 1.08, description: 'Leaning forward' },
  { id: 'lit', name: 'Lit', mult: 1.15, description: 'High energy' },
  { id: 'double-time', name: 'Double time', mult: 2.0, description: 'Double speed' },
];

export function getEffectiveBpm(
  sheet: Sheet,
  regionId?: string
): { bpm: number; feel: TempoFeel; isSectionOverride: boolean } {
  const defaultFeel = FEELS.find(f => f.id === 'as-written') ?? FEELS[3];
  const songFeel = FEELS.find(f => f.id === sheet.tempoShift) ?? defaultFeel;

  if (regionId) {
    const region = sheet.regions.find(r => r.id === regionId);
    if (region) {
      if (region.bpm || region.tempoShift) {
        const baseBpm = region.bpm ?? sheet.bpm;
        const sectionFeel = region.tempoShift
          ? (FEELS.find(f => f.id === region.tempoShift) ?? defaultFeel)
          : songFeel;
        return {
          bpm: Math.round(baseBpm * (region.tempoShift ? sectionFeel.mult : 1)),
          feel: sectionFeel,
          isSectionOverride: true,
        };
      }
    }
  }

  return {
    bpm: Math.round(sheet.bpm * songFeel.mult),
    feel: songFeel,
    isSectionOverride: false,
  };
}

import {
  FormIntensity,
  FormStep,
  GenreForm,
  GENRE_FORMS,
  DEFAULT_PATTERN_PREFERENCES,
  PROGRESSIONS,
  TEMPOS,
  TITLES,
} from "../data/genreForms";

export type { FormIntensity, FormStep, GenreForm };
export {
  GENRE_FORMS,
  DEFAULT_PATTERN_PREFERENCES,
  PROGRESSIONS,
  TEMPOS,
  TITLES,
};


/**
 * A musician-facing form should have a little connective tissue between the
 * headline sections. Keep the genre grammar intact, but give compact forms a
 * short turnaround/transition so phrases have somewhere to breathe and lead
 * into the next major section.
 */
function expandedFormSteps(worldId: string): FormStep[] {
  return getGenreForm(worldId).steps;
}

export function getGenreForm(worldId: string): GenreForm {
  return GENRE_FORMS[worldId] ?? GENRE_FORMS.rock;
}

export function getFormStep(stepKey: string, worldId: string): FormStep | undefined {
  const form = { ...getGenreForm(worldId), steps: expandedFormSteps(worldId) };
  return form.steps.find(s => s.key === stepKey || s.kind === stepKey);
}

export const SECTION_KINDS: SectionType[] = Array.from(new Set(Object.values(GENRE_FORMS).flatMap(f => f.steps.map(s => s.kind)))) as SectionType[];

const BAR_CHOICES = [2, 4, 8, 12, 16, 24, 32];
export { BAR_CHOICES };

/* --- deterministic wobble so a repeat is never a photocopy ---------------- */
function hash(s: string, n: number) {
  let h = 2166136261 ^ n;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 100000) / 100000;
}


/* --- pattern normalisation --- */
export function toBar(
  onsets: number[], accents: number[] | undefined, durations: number[] | undefined,
  subdivisions: number, barInCycle: number,
): { onsets: number[]; accents?: number[]; durations?: number[] } {
  const declared = Math.max(1, subdivisions || 16);
  const authoredMax = onsets.length ? Math.max(...onsets) : -1;
  // Legacy entries occasionally contain 16-step attacks while labelled as an
  // odd/compound grid. Preserve the authored attacks instead of dropping them.
  const sourceGrid = authoredMax >= declared ? Math.max(16, authoredMax + 1) : declared;

  if (sourceGrid === 16) {
    return {
      onsets: onsets.filter(o => o >= 0 && o < 16),
      accents: accents?.slice(0, onsets.length),
      durations: durations?.slice(0, onsets.length),
    };
  }

  if (sourceGrid > 16 && sourceGrid % 16 === 0) {
    const bars = sourceGrid / 16;
    const from = (barInCycle % bars) * 16;
    const keep: number[] = [], a: number[] = [], d: number[] = [];
    onsets.forEach((o, i) => {
      if (o >= from && o < from + 16) {
        keep.push(o - from);
        if (accents) a.push(accents[i] ?? 0.75);
        if (durations) d.push(durations[i] ?? 1);
      }
    });
    return { onsets: keep, accents: accents ? a : undefined, durations: durations ? d : undefined };
  }

  const seen = new Set<number>();
  const keep: number[] = [], a: number[] = [], d: number[] = [];
  onsets.forEach((o, i) => {
    if (o < 0 || o >= sourceGrid) return;
    const mapped = Math.min(15, Math.max(0, Math.round((o * 16) / sourceGrid)));
    if (seen.has(mapped)) return;
    seen.add(mapped); keep.push(mapped);
    if (accents) a.push(accents[i] ?? 0.75);
    if (durations) d.push(durations[i] ?? 1);
  });
  return { onsets: keep, accents: accents ? a : undefined, durations: durations ? d : undefined };
}

/* --- roles fall out of the instrument, not the other way round ------------ */
export function roleForInstrument(instrumentId: string): string {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) return 'harmony';
  if (def.voicing === 'bass') return 'bass';
  if (def.voicing === 'unpitched') return 'percussion';
  if (def.voicing === 'single') return 'melody';
  return 'harmony';
}

/** How well a pattern sits on a voice. Never a veto — only an ordering. */
export function affinity(patternId: string, voice: Voice, worldId: string): number {
  const p = PATTERNS_BY_ID[patternId];
  if (!p) return Number.NEGATIVE_INFINITY;

  const kinds = new Set(instrumentPatternKinds(voice.instrumentId));
  const explicitTargets = new Set([...(p.instruments ?? []).map(String), ...(p.compatibleInstruments ?? []).map(String)]);
  const instrumentMatch = [...explicitTargets].some(k => kinds.has(k));
  const explicitMismatch = explicitTargets.size > 0 && !instrumentMatch;
  const roleMatch = p.roles.some(r => r === voice.role || p.compatibleRoles?.includes(voice.role as any) || kinds.has(r));
  // A vocal lane is not a generic harmony/melody keyboard lane. Keep voice
  // tracks on explicitly vocal material unless the catalog author opts into
  // cross-role use. This prevents accompaniment cells from becoming fake
  // vocal lines.
  const vocalMismatch = kinds.has('voice') && !p.roles.includes('voice' as any) && !p.canCrossRole;
  if (vocalMismatch) return Number.NEGATIVE_INFINITY;

  let score = p.worldId === worldId ? 50 : -20;
  // An authored pattern that names concrete instruments is not a generic suggestion.
  // Do not apply it to an unrelated track just because the role happens to match.
  if (explicitMismatch && !p.canCrossRole) return Number.NEGATIVE_INFINITY;
  if (instrumentMatch) score += 30;
  else if (explicitMismatch) score -= 45;
  if (roleMatch) score += 14;
  else if (p.roles.length) score -= 10;
  if (voice.instrumentId.includes('bass') && p.roles.includes('bass' as any)) score += 12;
  if (voice.instrumentId === 'piano' && p.roles.some(r => r === 'piano' || r === 'keyboard' || r === 'keys')) score += 10;
  // Pattern weights are the catalog's confidence/centrality signal. Use them
  // as a small tie-breaker so high-confidence identity cells beat generic
  // extension patterns without making the chooser deterministic.
  if (typeof p.weight === 'number') score += (p.weight - 0.5) * 10;
  if (kinds.has('coro') && p.roles.includes('voice')) score += 8;
  if (kinds.has('drums') && p.roles.includes('drums')) score += 8;
  return score;
}


const SECTION_DENSITY: Record<string, string> = {
  intro: 'sparse', breakdown: 'sparse', interlude: 'sparse', coda: 'sparse', ending: 'sparse',
  verse: 'medium', bridge: 'medium', 'pre-chorus': 'medium',
  chorus: 'dense', montuno: 'dense', mambo: 'dense', solo: 'dense',
};

/**
 * Roughly two thirds of the catalog's patterns have no authored
 * cadence/fill/phraseEnd or transition/phraseStart variant at all (some
 * genre files — bossa nova among them — have none whatsoever). Without one,
 * every 4-bar phrase boundary plays the exact same bar it always does, which
 * is what reads to the ear as an "abrupt" cut rather than a turnaround.
 *
 * This synthesizes a light, deterministic boundary gesture straight from the
 * pattern's own onsetGrid/accentProfile whenever no authored variant exists,
 * so every genre gets *some* lead-in/lead-out at phrase boundaries. It is a
 * safety net, not a replacement for hand-authored variants — an authored
 * cadence/transition variant, when present, always wins (see call site).
 */
function synthesizeBoundaryVariant(
  p: MusicalPattern,
  phraseRole: 'transition' | 'cadence',
  seed: string,
): PatternVariant | undefined {
  const baseOnsets = p.onsetGrid;
  if (!baseOnsets?.length) return undefined;

  // Apply probabilistically, same as authored variants do via their own
  // `probability` weighting — a boundary that always mutates would feel
  // fidgety in genres built around exact 4-bar loop repetition.
  if (hash(`synthBoundaryApply:${seed}`, 3) > 0.65) return undefined;

  const onsets = [...baseOnsets];
  const accents = p.accentProfile ? [...p.accentProfile] : onsets.map(() => 0.75);
  const durations = p.durationGrid ? [...p.durationGrid] : undefined;
  const sub = p.subdivisions || 16;
  const roll = hash(`synthBoundaryShape:${seed}`, 5);

  if (phraseRole === 'cadence') {
    // Open a little space before the close, then land a soft pickup a step
    // or two before the bar ends — a miniature turnaround instead of a
    // mid-groove truncation.
    if (onsets.length > 2 && roll > 0.4) {
      onsets.pop(); accents.pop(); durations?.pop();
    }
    const pickupStep = Math.max(0, sub - (sub >= 12 ? 2 : 1));
    if (!onsets.includes(pickupStep)) {
      onsets.push(pickupStep);
      accents.push(Math.min(1, (accents[accents.length - 1] ?? 0.75) * 0.85));
      durations?.push(1);
    }
    if (accents.length) accents[accents.length - 1] = Math.max(0.3, accents[accents.length - 1] * 0.8);
    return {
      id: `${p.id}-auto-cadence`, parentPatternId: p.id,
      name: `${p.name} — auto cadence`, variationType: 'cadence', probability: 1,
      description: 'Algorithmically softened phrase ending; add an authored cadence variant to replace this.',
      onsetGrid: onsets, accentProfile: accents, durationGrid: durations,
    };
  }

  // transition: thin/nudge the very first attack so the new phrase doesn't
  // land as an exact carbon copy of the downbeat that just played.
  if (onsets.length > 1 && onsets[0] === 0 && roll > 0.35) {
    onsets[0] = sub >= 12 ? 1 : 1;
  }
  if (accents.length) accents[0] = Math.max(0.55, accents[0] * 0.9);
  return {
    id: `${p.id}-auto-transition`, parentPatternId: p.id,
    name: `${p.name} — auto transition`, variationType: 'transition', probability: 1,
    description: 'Algorithmically softened phrase entry; add an authored transition variant to replace this.',
    onsetGrid: onsets, accentProfile: accents, durationGrid: durations,
  };
}

/** Choose a base pattern or one of its authored variants. Respects partDensity
 * so Sparse favors sparse/breakdown variants, Busy favors dense/syncopated/ornamented
 * variants, and Normal favors core canonical variants. */
function choosePatternVariant(
  variants: PatternVariant[] | undefined,
  phraseRole: 'normal' | 'transition' | 'cadence',
  seed: string,
  partDensity: PartDensity = 'normal',
): PatternVariant | undefined {
  if (!variants?.length) return undefined;
  const eligible = variants.filter(v => {
    if (phraseRole === 'cadence') return ['cadence', 'fill', 'phraseEnd'].includes(v.variationType);
    if (phraseRole === 'transition') return ['transition', 'phraseStart'].includes(v.variationType);
    return !['cadence', 'fill', 'phraseEnd', 'transition', 'phraseStart'].includes(v.variationType);
  });
  if (!eligible.length) return undefined;

  const variantWeight = (v: PatternVariant) => {
    let base = Math.max(0, Number(v.probability) || 0.25);
    if (partDensity === 'sparse') {
      if (v.variationType === 'sparse' || v.variationType === 'breakdown') base *= 4.0;
      else if (v.variationType === 'dense' || v.variationType === 'ornamented') base *= 0.1;
    } else if (partDensity === 'busy') {
      if (['dense', 'syncopated', 'anticipated', 'ornamented', 'development'].includes(v.variationType)) base *= 3.5;
      else if (v.variationType === 'sparse' || v.variationType === 'breakdown') base *= 0.1;
    } else {
      if (v.variationType === 'sparse' || v.variationType === 'breakdown' || v.variationType === 'dense') base *= 0.6;
    }
    return base;
  };

  const total = eligible.reduce((sum, v) => sum + variantWeight(v), 1);
  const roll = hash(`variant:${seed}`, 0) * total;
  const canonicalThreshold = partDensity === 'normal' ? 1.0 : (partDensity === 'busy' ? 0.5 : 0.7);
  if (roll < canonicalThreshold) return undefined;
  let cursor = canonicalThreshold;
  for (const v of eligible) {
    cursor += variantWeight(v);
    if (roll < cursor) return v;
  }
  return eligible[eligible.length - 1];
}

/**
 * Choose a pattern for one voice in one section. `taken` holds what the rest
 * of the band is already playing here, so two voices don't end up doubling the
 * same figure — which was what made every section sound the same.
 */
export function suggestPattern(
  voice: Voice, worldId: string, salt: number,
  sectionKind?: string, taken?: Set<string>,
  partDensity?: PartDensity,
): string | undefined {
  const want = partDensity ?? (sectionKind ? SECTION_DENSITY[sectionKind] : undefined);
  const scored = (PATTERNS_BY_WORLD[worldId] || [])
    .filter(p => p.enabled !== false)
    .map(p => {
      let n = affinity(p.id, voice, worldId);
      if (p.id === DEFAULT_PATTERN_PREFERENCES[worldId]?.[voice.instrumentId]) n += 40;
      if (sectionKind && p.sectionUsage?.includes(sectionKind as any)) n += 8;
      if (partDensity) {
        if (p.density === partDensity) n += 18;
        else if (partDensity === 'busy' && p.density === 'dense') n += 18;
        else if (partDensity === 'sparse' && (p.density === 'dense' || p.category === 'fill')) n -= 15;
        else if (partDensity === 'busy' && p.density === 'sparse') n -= 15;
        else if (p.density) n -= 6;
      } else if (want && p.density === want) n += 2;
      // Do not let a fill/cadence pattern outrank the main groove in a normal verse.
      if (sectionKind && ['verse', 'pre-chorus', 'bridge'].includes(sectionKind) && ['fill', 'cadence', 'sectionPattern'].includes(p.category)) n -= 12;
      if (taken?.has(p.id)) n -= 6;
      return { id: p.id, n: n + hash(p.id, salt) * 1.5 };
    })
    .sort((a, b) => b.n - a.n);
  return scored.find(x => x.n > 0)?.id ?? scored[0]?.id;
}

/* --- measures are derived, never hand-maintained -------------------------- */
export function rebuild(sheet: Sheet): Sheet {
  const regions: Region[] = [];
  let cursor = 0;
  for (const r of sheet.regions) {
    const bars = Math.max(1, (r as any).bars ?? (r.end - r.start));
    regions.push({ ...r, start: cursor, end: cursor + bars, bars } as Region);
    cursor += bars;
  }

  // Migrate old songs that lack densities
  const densities = { ...sheet.densities };
  let migrated = false;
  for (const r of regions) {
    if (!densities[r.id]) {
      densities[r.id] = {};
      migrated = true;
    }
    const byTrack = sheet.arrangement[r.id] ?? {};
    for (const track of sheet.tracks) {
      if (!densities[r.id][track.id]) {
        migrated = true;
        const pId = byTrack[track.id];
        const p = pId && pId !== 'silent' ? PATTERNS_BY_ID[pId] : undefined;
        // infer from pattern density or section intensity
        let defaultD: PartDensity = 'normal';
        if (p?.density === 'sparse' || p?.density === 'dense') {
          defaultD = p.density === 'dense' ? 'busy' : 'sparse';
        } else if (r.intensity === 'low') {
          defaultD = 'sparse';
        } else if (r.intensity === 'peak') {
          defaultD = 'busy';
        }
        densities[r.id][track.id] = defaultD;
      }
    }
  }

  const phrasePatternCache = new Map<string, string>();
  const measures: Measure[] = [];
  for (const r of regions) {
    const chords = (r as any).chords?.length ? (r as any).chords : ['Am'];
    const bars = r.end - r.start;
    for (let i = 0; i < bars; i++) {
      const index = r.start + i;
      const chord = chords[i % chords.length];
      const details: Measure['patternDetailsByTrack'] = {};
      const byTrack = sheet.arrangement[r.id] ?? {};
      const usedPatterns = new Set<string>();
      for (const track of sheet.tracks) {
        const basePatternId = byTrack[track.id];
        if (!basePatternId || basePatternId === 'silent') continue;

        // The arrangement chooses the section's identity, but not every bar's
        // exact realization. Musicians normally develop a part over a 4-bar
        // phrase: establish it, vary it, then close/lead into the next phrase.
        // Every 4 bars we may select a closely related pattern from the same
        // genre/instrument vocabulary instead of photocopying one cell across
        // the whole region.
        const phrase = Math.floor(i / 4);
        let patternId = basePatternId;
        if (phrase > 0) {
          const cacheKey = `${basePatternId}:${r.genre ?? sheet.worldId}:${track.id}:${r.id}:${phrase}`;
          const cached = phrasePatternCache.get(cacheKey);
          if (cached !== undefined) {
            patternId = cached;
          } else {
            const base = PATTERNS_BY_ID[basePatternId];
            const candidates = (PATTERNS_BY_WORLD[r.genre ?? sheet.worldId] || [])
              .filter(p => p.enabled !== false)
              .filter(p => !base || p.family === base.family || p.category === base.category)
              .filter(p => {
                const world = r.genre ?? sheet.worldId;
                const segmented = world === 'chinese-traditional' || world === 'japanese-traditional';
                return !segmented || !base?.traditionId || !p.traditionId || p.traditionId === base.traditionId;
              })
              .map(p => {
                let score = affinity(p.id, track as Voice, r.genre ?? sheet.worldId);
                if (p.id === basePatternId) score += 18;
                if (base && p.family === base.family) score += 12;
                if (base && p.category === base.category) score += 4;
                if (p.sectionUsage?.includes(r.kind as any)) score += 5;
                if (p.phrasePosition?.includes(i % 8 === 0 ? 'start' : 'middle')) score += 2;
                if (usedPatterns.has(p.id)) score -= 8;
                return { p, score: score + hash(`${basePatternId}:${p.id}:${r.id}`, phrase) * 2 };
              })
              .filter(x => x.score > 20)
              .sort((a,b) => b.score-a.score);
            if (candidates.length) {
              // Stay within the strongest few compatible parts; this gives
              // development without making a 16/32-bar section sound random.
              const top = candidates.slice(0, Math.min(4, candidates.length));
              patternId = top[Math.floor(hash(`${track.id}:${r.id}`, phrase) * top.length)].p.id;
            }
            phrasePatternCache.set(cacheKey, patternId);
          }
        }
        usedPatterns.add(patternId);
        const p = PATTERNS_BY_ID[patternId];
        if (!p) continue;

        const atPhraseStart = i % 4 === 0;
        const atPhraseEnd = (i + 1) % 4 === 0;
        const hasCadenceVariant = (p.variants ?? []).some(v => ['cadence', 'fill', 'phraseEnd'].includes(v.variationType));
        const hasTransitionVariant = (p.variants ?? []).some(v => ['transition', 'phraseStart'].includes(v.variationType));
        // Every phrase boundary WANTS a cadence/transition gesture; whether
        // one is available (authored or synthesized) is decided below. This
        // is what lets a genre with zero authored boundary variants still
        // get a turnaround instead of silently falling through to 'normal'.
        const phraseRole = atPhraseEnd ? 'cadence' as const
          : atPhraseStart ? 'transition' as const
          : 'normal' as const;
        const partDensity = densities[r.id]?.[track.id] ?? 'normal';
        let v = choosePatternVariant(
          p.variants, phraseRole, `${patternId}:${r.id}:${index}`, partDensity,
        );
        // No authored gesture exists for this boundary at all (not merely
        // "the dice said keep it canonical this time") — synthesize a light
        // one so the phrase gets some lead-in/lead-out rather than a flat
        // repeat. Authored variants always take priority when present.
        if (!v && phraseRole === 'cadence' && !hasCadenceVariant) {
          v = synthesizeBoundaryVariant(p, 'cadence', `${patternId}:${r.id}:${index}`);
        } else if (!v && phraseRole === 'transition' && !hasTransitionVariant) {
          v = synthesizeBoundaryVariant(p, 'transition', `${patternId}:${r.id}:${index}`);
        }

        const rawOnsets = v?.onsetGrid ?? p.onsetGrid;
        // Preserve the authored cycle length; do not infer it from a sparse
        // variant. This keeps 2-bar/4-bar patterns genuinely multi-bar.
        const sub = p.subdivisions || 16;
        const cycleBars = Math.max(1, p.cycleLength || Math.ceil(sub / 16));
        const rawAccents = v?.accentProfile ?? p.accentProfile;
        const rawDurations = v?.durationGrid ?? p.durationGrid;
        const rawMicro = v?.microtimingOffset;
        const candidateHitTypes = (v as any)?.hitGrid ?? p.hitGrid;
        const rawHitTypes = candidateHitTypes && candidateHitTypes.length === rawOnsets.length
          ? candidateHitTypes
          : undefined;

        // The 16-step view is for the glyphs only. Playback reads `perf`,
        // which keeps the pattern on its own grid so a 12-step shuffle stays
        // a shuffle instead of being rounded into straight sixteenths.
        const bar = toBar(rawOnsets, rawAccents, rawDurations, sub, i % cycleBars);
        const perf = sliceBarNative(
          rawOnsets, rawAccents, rawDurations, rawMicro, rawHitTypes, sub, cycleBars, i % cycleBars,
        );

        details[track.id] = {
          patternId: p.id,
          traditionId: p.traditionId,
          variantId: v?.id,
          onsetGrid: bar.onsets,
          accentProfile: bar.accents,
          durationGrid: bar.durations,
          articulation: v?.articulation ?? p.articulations?.[0],
          variationType: v?.variationType,
          perf,
        } as any;
      }
      measures.push({
        id: `m${index}`,
        index,
        regionId: r.id,
        chord,
        root: parseChord(chord).rootName,
        patternByTrack: {},
        patternDetailsByTrack: details,
      });
    }
  }

  return { ...sheet, regions, measures, durationMeasures: measures.length, densities: migrated ? densities : sheet.densities };
}

/* --- section operations --------------------------------------------------- */
export function setBars(sheet: Sheet, regionId: string, bars: number): Sheet {
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? ({ ...r, bars } as Region) : r)),
  });
}

export function setKind(sheet: Sheet, regionId: string, formKey: string): Sheet {
  const step = getFormStep(formKey, sheet.worldId);
  if (!step) return sheet;
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? { ...r, kind: step.kind, formKey: step.key, formLabel: step.label, intensity: step.intensity, name: step.label } : r)),
  });
}

export function setSectionTitle(sheet: Sheet, regionId: string, title: string): Sheet {
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? { ...r, formLabel: title, name: title } : r)),
  });
}

export function setSectionTempoShift(sheet: Sheet, regionId: string, tempoShift?: string): Sheet {
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? { ...r, tempoShift: tempoShift || undefined } : r)),
  });
}

export function setSongTempoShift(sheet: Sheet, tempoShift?: string): Sheet {
  return {
    ...sheet,
    tempoShift: tempoShift || undefined,
  };
}

export function duplicateSection(sheet: Sheet, regionId: string): { sheet: Sheet; newRegionId: string } {
  const i = sheet.regions.findIndex(r => r.id === regionId);
  if (i < 0) return { sheet, newRegionId: regionId };
  const src = sheet.regions[i];
  const id = `r${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
  const bars = Math.max(1, (src as any).bars ?? (src.end - src.start));
  const fresh: Region = {
    ...src,
    id,
    name: src.name,
    kind: src.kind,
    formKey: src.formKey,
    formLabel: src.formLabel,
    intensity: src.intensity,
    bars,
    density: src.density,
    tempoShift: src.tempoShift,
    chords: Array.isArray((src as any).chords) ? [...(src as any).chords] : ['Am'],
    genre: (src as any)?.genre ?? sheet.worldId,
  } as Region;
  const regions = [...sheet.regions];
  regions.splice(i + 1, 0, fresh);
  
  const arrangement = { ...sheet.arrangement, [id]: { ...(sheet.arrangement[regionId] ?? {}) } };
  const densities = { ...sheet.densities, [id]: { ...(sheet.densities?.[regionId] ?? {}) } };
  
  return {
    sheet: rebuild({
      ...sheet,
      regions,
      arrangement,
      densities,
    }),
    newRegionId: id,
  };
}

export function addSensibleSectionAfter(sheet: Sheet, regionId: string): { sheet: Sheet; newRegionId: string } {
  const i = sheet.regions.findIndex(r => r.id === regionId);
  const src = i >= 0 ? sheet.regions[i] : sheet.regions[sheet.regions.length - 1];
  const worldId = (src as any)?.genre ?? sheet.worldId ?? 'rock';
  const world = GENRE_WORLDS_BY_ID[worldId];
  const form = getGenreForm(worldId);
  const steps = form.steps;

  // Determine what step comes next sensibly for this section of the song
  let nextStep: FormStep | undefined;
  if (src && steps.length > 0) {
    const currIdx = steps.findIndex(s => s.key === src.formKey || s.key === src.kind || s.kind === src.kind);
    if (currIdx >= 0 && currIdx + 1 < steps.length) {
      nextStep = steps[currIdx + 1];
    } else {
      // Find the first step in the form not yet present in the song, or next musical step
      const existingKeys = new Set(sheet.regions.map(r => r.formKey ?? r.kind));
      nextStep = steps.find(s => !existingKeys.has(s.key))
        ?? steps.find(s => s.kind === 'chorus' || s.kind === 'verse')
        ?? steps[(Math.max(0, currIdx) + 1) % steps.length]
        ?? steps[0];
    }
  } else if (steps.length > 0) {
    nextStep = steps[0];
  }

  const kind = (nextStep?.kind ?? 'verse') as SectionType;
  const key = nextStep?.key ?? `${kind}-${Date.now().toString(36).slice(-4)}`;

  // Disambiguate label if a part with this label already exists
  let label = nextStep?.label ?? (kind.charAt(0).toUpperCase() + kind.slice(1));
  const sameKindCount = sheet.regions.filter(r => r.kind === kind).length;
  if (sheet.regions.some(r => r.formLabel === label || r.name === label)) {
    label = `${kind.charAt(0).toUpperCase() + kind.slice(1)} ${sameKindCount + 1}`;
  }

  const intensity = nextStep?.intensity ?? 'medium';
  const bars = nextStep?.bars ?? Math.max(2, (src as any)?.bars ?? (src ? src.end - src.start : 8));
  const density: PartDensity = intensity === 'low' ? 'sparse' : (intensity === 'peak' ? 'busy' : 'normal');

  // Sensible chords for this section
  const sectionChords = world?.traditions?.find(t => t.sectionProgressions)?.sectionProgressions as
    | Record<string, string[]>
    | undefined;
  const chordsFallback = PROGRESSIONS[worldId] ?? PROGRESSIONS.tango;
  const traditionalWorld = worldId === 'chinese-traditional' || worldId === 'japanese-traditional';
  const pickedChords = traditionalWorld
    ? ['D5']
    : progressionForSection(sectionChords, key, kind, chordsFallback);

  const id = `r${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
  const fresh: Region = {
    id,
    name: label,
    kind,
    formKey: key,
    formLabel: label,
    intensity,
    bars,
    density,
    chords: pickedChords,
    genre: worldId,
    start: 0,
    end: bars,
  } as Region;

  const insertIndex = i >= 0 ? i + 1 : sheet.regions.length;
  const regions = [...sheet.regions];
  regions.splice(insertIndex, 0, fresh);

  // Sensible arrangement & densities for tracks
  const formDensities = form.densities ?? {};
  const sectionDensities = formDensities[key] ?? formDensities[kind] ?? {};
  const arrangement = { ...sheet.arrangement, [id]: {} as Record<string, string> };
  const densities = { ...sheet.densities, [id]: {} as Record<string, PartDensity> };

  const taken = new Set<string>();
  for (const [ti, v] of (sheet.tracks as Voice[]).entries()) {
    const d: PartDensity = sectionDensities[v.instrumentId]
      ?? sectionDensities[v.role]
      ?? density;
    densities[id][v.id] = d;

    const p = suggestPattern(v, worldId, insertIndex * 31 + ti * 13 + 7, String(kind), taken, d);
    if (p) {
      arrangement[id][v.id] = p;
      if (!traditionalWorld) taken.add(p);
    }
  }

  return {
    sheet: rebuild({
      ...sheet,
      regions,
      arrangement,
      densities,
    }),
    newRegionId: id,
  };
}

export function addSectionAfter(sheet: Sheet, regionId: string): Sheet {
  return addSensibleSectionAfter(sheet, regionId).sheet;
}

export function removeSection(sheet: Sheet, regionId: string): Sheet {
  if (sheet.regions.length <= 1) return sheet;
  const arrangement = { ...sheet.arrangement };
  delete arrangement[regionId];
  
  const densities = { ...sheet.densities };
  delete densities[regionId];
  
  return rebuild({ ...sheet, regions: sheet.regions.filter(r => r.id !== regionId), arrangement, densities });
}

export function moveSection(sheet: Sheet, regionId: string, delta: number): Sheet {
  const i = sheet.regions.findIndex(r => r.id === regionId);
  const j = i + delta;
  if (i < 0 || j < 0 || j >= sheet.regions.length) return sheet;
  const regions = [...sheet.regions];
  const [x] = regions.splice(i, 1);
  regions.splice(j, 0, x);
  return rebuild({ ...sheet, regions });
}

/* --- voice operations ----------------------------------------------------- */
export function setInstrument(sheet: Sheet, trackId: string, instrumentId: string): Sheet {
  const def = instrument(instrumentId);
  const newVoice = {
    ...(sheet.tracks.find(t => t.id === trackId) as Voice),
    instrumentId, instrument: def.name, name: def.name, kind: instrumentId as any, role: roleForInstrument(instrumentId)
  };
  
  const tracks = sheet.tracks.map(t => t.id === trackId ? newVoice : t) as Voice[];
  const arrangement = { ...sheet.arrangement };
  
  for (const [ri, region] of sheet.regions.entries()) {
    const current = arrangement[region.id]?.[trackId];
    if (current && current !== 'silent') {
      const used = new Set(Object.values(arrangement[region.id] ?? {}));
      used.delete(current);
      const density = sheet.densities?.[region.id]?.[trackId];
      const p = suggestPattern(newVoice, sheet.worldId, ri * 31 + 17, String(region.kind), used, density);
      if (p) {
        arrangement[region.id] = { ...(arrangement[region.id] ?? {}), [trackId]: p };
      }
    }
  }

  return rebuild({ ...sheet, tracks, arrangement });
}

/** Set one voice's pattern. Scope 'section' touches only here; 'song' everywhere. */

function uniqueInstrumentIds(ids: string[], count: number): string[] {
  const out: string[] = [];
  for (const id of ids) {
    if (INSTRUMENTS_BY_ID[id] && !out.includes(id)) out.push(id);
    if (out.length >= count) break;
  }
  return out;
}

const rankCache = new Map<string, string[]>();
let rankCacheWorldId = '';

/**
 * Find strong genre-native instrument choices for a slot. Genre hints get a
 * strong boost, but the broader catalog is searched too, so randomisation can
 * actually produce a new ensemble instead of shuffling the same five names.
 */
function rankInstrumentsForWorld(worldId: string, targetRole?: string): string[] {
  if (rankCacheWorldId !== worldId) {
    rankCache.clear();
    rankCacheWorldId = worldId;
  }
  const cacheKey = targetRole ?? '';
  if (rankCache.has(cacheKey)) {
    return rankCache.get(cacheKey)!;
  }

  const hintIds = WORLD_INSTRUMENT_HINTS[worldId] ?? [];
  const scored = INSTRUMENT_CATALOG
    .filter(def => def.id !== 'silence' && !!INSTRUMENTS_BY_ID[def.id])
    .map(def => {
      const fakeVoice = {
        id: 'candidate', instrumentId: def.id, name: def.name, instrument: def.name,
        role: roleForInstrument(def.id), kind: def.id as any,
        muted: false, volume: 0.85, lensIds: [],
      } as Voice;
      const best = (PATTERNS_BY_WORLD[worldId] || [])
        .filter(p => p.enabled !== false)
        .map(p => affinity(p.id, fakeVoice, worldId))
        .filter(Number.isFinite)
        .sort((a, b) => b - a)[0] ?? -100;
      let n = best * 0.55;
      const hi = hintIds.indexOf(def.id);
      if (hi >= 0) n += 48 - hi * 3;
      if (targetRole && roleForInstrument(def.id) === targetRole) n += 18;
      if (def.voicing === 'bass') n += targetRole === 'bass' ? 8 : 0;
      if (def.voicing === 'unpitched') n += targetRole === 'percussion' ? 8 : 0;
      return { id: def.id, score: n };
    })
    .sort((a, b) => b.score - a.score)
    .map(x => x.id);
  const result = uniqueInstrumentIds(scored, scored.length);
  rankCache.set(cacheKey, result);
  return result;
}

function patternCandidatesForVoice(
  voice: Voice,
  worldId: string,
  sectionKind: string,
  taken: Set<string>,
  previousPatternId?: string,
  partDensity?: PartDensity,
) {
  const want = partDensity ?? SECTION_DENSITY[sectionKind];
  const previous = previousPatternId ? PATTERNS_BY_ID[previousPatternId] : undefined;
  return (PATTERNS_BY_WORLD[worldId] || [])
    .filter(p => p.enabled !== false)
    .map(p => {
      let n = affinity(p.id, voice, worldId);
      if (p.sectionUsage?.includes(sectionKind as any)) n += 11;
      if (partDensity) {
        if (p.density === partDensity) n += 15;
        else if (p.density) n -= 10;
      } else if (want && p.density === want) n += 4;
      if (p.id === DEFAULT_PATTERN_PREFERENCES[worldId]?.[voice.instrumentId]) n += 20;
      if (taken.has(p.id)) n -= 10;
      if (previous) {
        if (p.id === previous.id) n += 10;
        if (p.family === previous.family) n += 8;
        if (p.traditionId && previous.traditionId && p.traditionId === previous.traditionId) n += 6;
        if (p.category === previous.category) n += 3;
      }
      if (['verse', 'pre-chorus', 'bridge'].includes(sectionKind) && ['fill', 'cadence', 'sectionPattern'].includes(p.category)) n -= 15;
      return { p, score: n };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);
}

/** Randomise instruments while staying inside the current genre's strongest vocabulary. */
export function randomizeInstruments(sheet: Sheet, repickPatterns = true): Sheet {
  const worldId = sheet.worldId;
  const ranked = rankInstrumentsForWorld(worldId);
  const current = sheet.tracks.map(t => t.instrumentId);
  const selected: string[] = [];
  for (let i = 0; i < sheet.tracks.length; i++) {
    const role = (sheet.tracks[i] as Voice).role;
    const roleRanked = rankInstrumentsForWorld(worldId, role);
    const pool = roleRanked.filter(id => !selected.includes(id));
    const fallback = ranked.filter(id => !selected.includes(id));
    const candidates = (pool.length ? pool : fallback).slice(0, Math.min(10, (pool.length ? pool : fallback).length));
    const nonCurrent = candidates.filter(id => id !== current[i]);
    const choices = nonCurrent.length ? nonCurrent : candidates;
    const roll = choices.length ? Math.floor(Math.random() * choices.length) : 0;
    selected.push(choices[roll] ?? current[i]);
  }

  const tracks = sheet.tracks.map((t, i) => {
    const id = selected[i] ?? t.instrumentId;
    const def = instrument(id);
    return { ...t, instrumentId: id, instrument: def.name, name: def.name, kind: id as any, role: roleForInstrument(id) };
  }) as Voice[];

  // Re-pick patterns after an instrument swap: a new instrument deserves its
  // own idiomatic cells in every part, rather than inheriting the old role's patterns.
  // Callers that are about to re-pick every pattern anyway (see
  // randomizeEverythingForSong) can skip this pass and its per-section rebuilds.
  if (!repickPatterns) return rebuild({ ...sheet, tracks });
  let out = rebuild({ ...sheet, tracks });
  for (const r of out.regions) {
    out = randomizePatternsForSection(out, r.id);
  }
  return out;
}

/** Remove every instrument while preserving song form, genre, tempo and chords. */
export function removeAllInstruments(sheet: Sheet): Sheet {
  const arrangement: Arrangement = {};
  for (const r of sheet.regions) arrangement[r.id] = {};
  return rebuild({ ...sheet, tracks: [], arrangement, patternMemory: {} });
}

/** Randomise every part in one section, favouring strong genre/instrument matches. */
export function randomizePatternsForSection(sheet: Sheet, regionId: string): Sheet {
  const region = sheet.regions.find(r => r.id === regionId);
  if (!region) return sheet;
  const worldId = region.genre ?? sheet.worldId;
  const arrangement = { ...sheet.arrangement };
  const next = { ...(arrangement[regionId] ?? {}) };
  const used = new Set<string>();
  const culturalShared = worldId === 'chinese-traditional' || worldId === 'japanese-traditional';

  for (const track of sheet.tracks) {
    const current = next[track.id];
    if (current === 'silent') continue;
    const partDensity = sheet.densities?.[regionId]?.[track.id];
    const candidates = patternCandidatesForVoice(track as Voice, worldId, String(region.kind), used, current, partDensity);
    if (!candidates.length) continue;
    const top = candidates.slice(0, Math.min(8, candidates.length));
    // Prefer a different realization from the current one so every click takes effect immediately
    const nonCurrent = top.filter(x => x.p.id !== current);
    const pool = nonCurrent.length ? nonCurrent : top;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const picked = pick?.p.id ?? current;
    next[track.id] = picked;
    if (!culturalShared) used.add(picked);
  }

  arrangement[regionId] = next;
  return rebuild({ ...sheet, arrangement });
}

/**
 * Randomise the full song as an arrangement, not as independent dice rolls.
 * Each section stays inside its genre vocabulary, instruments retain coherent
 * families across neighbouring sections, and duplicate cells are discouraged.
 */
export function randomizePatternsForSong(sheet: Sheet): Sheet {
  let out = sheet;
  const chosenByTrack: Record<string, string | undefined> = {};

  for (const region of out.regions) {
    const arrangement = { ...out.arrangement };
    const next = { ...(arrangement[region.id] ?? {}) };
    const worldId = region.genre ?? out.worldId;
    const used = new Set<string>();
    const culturalShared = worldId === 'chinese-traditional' || worldId === 'japanese-traditional';

    for (const track of out.tracks) {
      const current = next[track.id];
      if (current === 'silent') continue;
      const previous = chosenByTrack[track.id] ?? current;
      const partDensity = out.densities?.[region.id]?.[track.id];
      const candidates = patternCandidatesForVoice(track as Voice, worldId, String(region.kind), used, previous, partDensity);
      if (!candidates.length) continue;

      const top = candidates.slice(0, Math.min(7, candidates.length));
      const nonCurrent = top.filter(x => x.p.id !== current);
      const pool = nonCurrent.length ? nonCurrent : top;
      const picked = pool[Math.floor(Math.random() * pool.length)]?.p.id;
      if (!picked) continue;
      next[track.id] = picked;
      chosenByTrack[track.id] = picked;
      if (!culturalShared) used.add(picked);
    }

    arrangement[region.id] = next;
    // nothing in this loop reads `measures`, so defer the (expensive) rebuild
    // to a single pass at the end instead of one per section
    out = { ...out, arrangement };
  }
  return rebuild(out);
}


/**
 * Collect authored harmonic templates for a genre. Templates come from the
 * genre's own traditions/section grammars first, with the world fallback as a
 * last resort. This keeps chord randomisation inside the vocabulary of the
 * selected musical world instead of inventing arbitrary Western progressions.
 */
function chordTemplatesForRegion(worldId: string, region: Region): string[][] {
  const world = GENRE_WORLDS_BY_ID[worldId] as any;
  const traditions = Array.isArray(world?.traditions) ? world.traditions : [];
  const wantedKeys = [String(region.formKey ?? ''), String(region.kind ?? ''), String(region.kind ?? '').replace(/-/g, ''), 'verse'];
  const templates: string[][] = [];

  for (const tradition of traditions) {
    const sectionProgressions = tradition?.sectionProgressions;
    if (!sectionProgressions || typeof sectionProgressions !== 'object') continue;
    for (const key of wantedKeys) {
      const found = sectionProgressions[key];
      if (Array.isArray(found) && found.length) templates.push(found.slice());
    }
  }

  const fallback = PROGRESSIONS[worldId];
  if (Array.isArray(fallback) && fallback.length) templates.push(fallback.slice());

  const unique = new Map<string, string[]>();
  for (const t of templates) unique.set(t.join('|'), t);
  return [...unique.values()];
}

function transposeChordSymbol(symbol: string, delta: number): string {
  const match = String(symbol ?? '').trim().match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/);
  if (!match) return symbol;
  const transposeName = (name: string) => {
    const pc = ({ C:0, 'C#':1, Db:1, D:2, 'D#':3, Eb:3, E:4, Fb:4, 'E#':5,
      F:5, 'F#':6, Gb:6, G:7, 'G#':8, Ab:8, A:9, 'A#':10, Bb:10, B:11, Cb:11, 'B#':0 } as Record<string, number>)[name];
    if (pc == null) return name;
    return SHARP_NAMES[(pc + delta + 120) % 12];
  };
  return `${transposeName(match[1])}${match[2] ?? ''}${match[3] ? `/${transposeName(match[3])}` : ''}`;
}

function fitChordCount(chords: string[], targetLength: number): string[] {
  if (!chords.length || !targetLength || chords.length === targetLength) return chords.slice();
  if (chords.length > targetLength) return chords.slice(0, targetLength);
  const out: string[] = [];
  for (let i = 0; i < targetLength; i++) out.push(chords[i % chords.length]);
  return out;
}

function chordTemplateInKey(template: string[], targetKeyName: string): string[] {
  if (!template.length) return template;
  const source = inferKey(template);
  const target = inferKey([targetKeyName]);
  return template.map(c => transposeChordSymbol(c, target.tonicPc - source.tonicPc));
}

function chordRootDistance(a: string, b: string): number {
  const pa = parseChord(a).rootPc;
  const pb = parseChord(b).rootPc;
  let d = Math.abs(pb - pa) % 12;
  return Math.min(d, 12 - d);
}

function rankChordCandidate(
  candidate: string[],
  current: string[],
  previousLast: string | undefined,
  targetLength: number,
): number {
  let score = 0;
  score -= Math.abs(candidate.length - targetLength) * 1.5;
  if (current.length && candidate.join('|') === current.join('|')) score -= 1.2;
  if (previousLast && candidate.length) {
    score += (3 - Math.min(3, chordRootDistance(previousLast, candidate[0]))) * 0.55;
  }
  if (candidate.length) {
    const last = parseChord(candidate[candidate.length - 1]);
    const first = parseChord(candidate[0]);
    if (last.rootPc === first.rootPc) score += 1.4;
    if (last.quality === 'dominant') score += 0.45;
  }
  return score;
}

/** Randomise the harmonic language of one section, but keep its genre and key. */
export function randomizeChordsForSection(sheet: Sheet, regionId: string): Sheet {
  const region = sheet.regions.find(r => r.id === regionId);
  if (!region) return sheet;
  const worldId = region.genre ?? sheet.worldId;
  const allCurrent = sheet.regions.flatMap(r => r.chords ?? []);
  const key = inferKey(allCurrent.length ? allCurrent : (PROGRESSIONS[worldId] ?? PROGRESSIONS.tango));
  const targetKey = key.name;
  const current = region.chords ?? PROGRESSIONS[worldId] ?? PROGRESSIONS.tango;
  const currentStr = current.join(',');
  const templates = chordTemplatesForRegion(worldId, region)
    .map(t => chordTemplateInKey(t, targetKey))
    .map(t => fitChordCount(t, current.length))
    .filter(t => t.length);
  if (!templates.length) return sheet;

  const scored = templates
    .map(t => ({ t, score: rankChordCandidate(t, current, undefined, current.length) }))
    .sort((a, b) => b.score - a.score);
  const pool = scored.slice(0, Math.min(8, scored.length));
  const nonCurrent = pool.filter(x => x.t.join(',') !== currentStr);
  const choices = nonCurrent.length ? nonCurrent : pool;
  const index = Math.floor(Math.random() * choices.length);
  const picked = choices[index]?.t ?? current;
  return setSectionChords(sheet, regionId, picked);
}

/**
 * Randomise the whole song's harmony while keeping one coherent tonal centre,
 * repeated form sections related, and neighbouring sections harmonically close.
 */
export function randomizeChordsForSong(sheet: Sheet): Sheet {
  const allCurrent = sheet.regions.flatMap(r => r.chords ?? []);
  const inferred = inferKey(allCurrent.length ? allCurrent : (PROGRESSIONS[sheet.worldId] ?? PROGRESSIONS.tango));
  const targetKey = inferred.name;
  const repeated: Record<string, string[]> = {};
  const chosen: Region[] = [];
  let previousLast: string | undefined;

  for (const [i, region] of sheet.regions.entries()) {
    const group = region.repetitionGroup;
    if (group && repeated[group]) {
      chosen.push({ ...region, chords: repeated[group].slice() });
      previousLast = repeated[group][repeated[group].length - 1];
      continue;
    }

    const current = region.chords ?? PROGRESSIONS[region.genre ?? sheet.worldId] ?? PROGRESSIONS.tango;
    const currentStr = current.join(',');
    const worldId = region.genre ?? sheet.worldId;
    const candidates = chordTemplatesForRegion(worldId, region)
      .map(t => chordTemplateInKey(t, targetKey))
      .map(t => fitChordCount(t, current.length))
      .filter(t => t.length);
    if (!candidates.length) {
      chosen.push(region);
      previousLast = current[current.length - 1];
      continue;
    }

    const scored = candidates.map(t => ({
      t,
      score: rankChordCandidate(t, current, previousLast, current.length) - Math.abs(i) * 0.001,
    })).sort((a, b) => b.score - a.score);
    const pool = scored.slice(0, Math.min(8, scored.length));
    const nonCurrent = pool.filter(x => x.t.join(',') !== currentStr);
    const choices = nonCurrent.length ? nonCurrent : pool;
    const pick = choices[Math.floor(Math.random() * choices.length)]?.t ?? current;
    chosen.push({ ...region, chords: pick });
    if (group) repeated[group] = pick.slice();
    previousLast = pick[pick.length - 1];
  }

  // Give the closing section a clear return to the song's tonic without
  // forcing a Western cadence onto traditions whose authored material is a
  // drone/pedal language (their candidate templates already remain intact).
  if (chosen.length) {
    const last = chosen[chosen.length - 1];
    const tonic = inferKey(chosen.flatMap(r => r.chords ?? [])).name;
    if (!/^D5$/.test((last.chords ?? [])[0] ?? '') && last.chords?.length) {
      const closing = last.chords.slice();
      if (parseChord(closing[closing.length - 1]).rootPc !== parseChord(tonic).rootPc) {
        closing[closing.length - 1] = tonic;
      }
      chosen[chosen.length - 1] = { ...last, chords: closing };
    }
  }

  return rebuild({ ...sheet, regions: chosen });
}

/**
 * Randomise everything in one section: rhythms and chords.
 */
export function randomizeEverythingForSection(sheet: Sheet, regionId: string): Sheet {
  let out = sheet;
  const densities = { ...out.densities };
  const options: PartDensity[] = ['sparse', 'normal', 'busy'];
  const sectionDensities: Record<string, PartDensity> = {};
  for (const t of out.tracks) {
    const roll = Math.floor(Math.random() * options.length);
    sectionDensities[t.id] = options[roll];
  }
  densities[regionId] = sectionDensities;
  out = rebuild({ ...out, densities });

  out = randomizeChordsForSection(out, regionId);
  out = randomizePatternsForSection(out, regionId);
  return out;
}

/**
 * Randomise everything across the entire song: instruments, rhythms, and chords.
 */
export function randomizeEverythingForSong(sheet: Sheet): Sheet {
  let out = randomizeInstruments(sheet, false); // patterns are re-picked below

  const densities: Record<string, Record<string, PartDensity>> = {};
  const options: PartDensity[] = ['sparse', 'normal', 'busy'];
  for (const r of out.regions) {
    densities[r.id] = {};
    for (const t of out.tracks) {
      const roll = Math.floor(Math.random() * options.length);
      densities[r.id][t.id] = options[roll];
    }
  }
  out = rebuild({ ...out, densities });

  out = randomizeChordsForSong(out);
  out = randomizePatternsForSong(out);
  return out;
}

export function setPattern(sheet: Sheet, trackId: string, regionId: string, patternId: string, scope: 'section' | 'song' = 'section'): Sheet {
  const arrangement = { ...sheet.arrangement };
  const ids = scope === 'song' ? sheet.regions.map(r => r.id) : [regionId];
  for (const id of ids) arrangement[id] = { ...(arrangement[id] ?? {}), [trackId]: patternId };
  return rebuild({ ...sheet, arrangement });
}

export function clearPattern(sheet: Sheet, trackId: string, regionId: string): Sheet {
  const arrangement = { ...sheet.arrangement };
  const inner = { ...(arrangement[regionId] ?? {}) };
  delete inner[trackId];
  arrangement[regionId] = inner;
  return rebuild({ ...sheet, arrangement });
}

export function isVoiceSilentInSection(sheet: Sheet, trackId: string, regionId: string): boolean {
  const t = sheet.tracks.find(x => x.id === trackId);
  if (t?.muted) return true;
  const pId = sheet.arrangement[regionId]?.[trackId];
  return !pId || pId === 'silent';
}

export function isVoiceSilentInAll(sheet: Sheet, trackId: string): boolean {
  const t = sheet.tracks.find(x => x.id === trackId);
  if (t?.muted) return true;
  if (!sheet.regions.length) return true;
  return sheet.regions.every(r => {
    const pId = sheet.arrangement[r.id]?.[trackId];
    return !pId || pId === 'silent';
  });
}

export function silenceVoiceInSection(sheet: Sheet, trackId: string, regionId: string): Sheet {
  const cur = sheet.arrangement[regionId]?.[trackId];
  const memory = { ...(sheet.patternMemory ?? {}) };
  if (cur && cur !== 'silent') {
    memory[regionId] = { ...(memory[regionId] ?? {}), [trackId]: cur };
  }
  const arrangement = { ...sheet.arrangement };
  arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [trackId]: 'silent' };
  return rebuild({ ...sheet, arrangement, patternMemory: memory });
}

export function silenceVoiceInAll(sheet: Sheet, trackId: string): Sheet {
  const memory = { ...(sheet.patternMemory ?? {}) };
  const arrangement = { ...sheet.arrangement };
  for (const r of sheet.regions) {
    const cur = arrangement[r.id]?.[trackId];
    if (cur && cur !== 'silent') {
      memory[r.id] = { ...(memory[r.id] ?? {}), [trackId]: cur };
    }
    arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [trackId]: 'silent' };
  }
  return rebuild({ ...sheet, arrangement, patternMemory: memory });
}

export function unsilenceVoiceInSection(sheet: Sheet, trackId: string, regionId: string): Sheet {
  const voice = sheet.tracks.find(t => t.id === trackId) as Voice | undefined;
  if (!voice) return sheet;
  const remembered = sheet.patternMemory?.[regionId]?.[trackId];
  let pId = remembered && remembered !== 'silent' ? remembered : undefined;
  if (!pId) {
    const region = sheet.regions.find(r => r.id === regionId);
    const taken = new Set(Object.values(sheet.arrangement[regionId] ?? {}));
    pId = suggestPattern(voice, sheet.worldId, sheet.tracks.length * 17 + 5, String(region?.kind ?? 'verse'), taken, sheet.densities?.[regionId]?.[voice.id])
      ?? ALL_PATTERNS.find(p => p.roles.includes(voice.role as any))?.id
      ?? ALL_PATTERNS[0]?.id;
  }
  const arrangement = { ...sheet.arrangement };
  arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [trackId]: pId };
  const tracks = sheet.tracks.map(t => (t.id === trackId ? { ...t, muted: false } : t));
  return rebuild({ ...sheet, tracks, arrangement });
}

export function unsilenceVoiceInAll(sheet: Sheet, trackId: string): Sheet {
  const voice = sheet.tracks.find(t => t.id === trackId) as Voice | undefined;
  if (!voice) return sheet;
  const memory = { ...(sheet.patternMemory ?? {}) };
  const arrangement = { ...sheet.arrangement };

  for (const [ri, r] of sheet.regions.entries()) {
    const remembered = memory[r.id]?.[trackId];
    let pId = remembered && remembered !== 'silent' ? remembered : undefined;
    if (!pId) {
      const taken = new Set(Object.values(arrangement[r.id] ?? {}));
      pId = suggestPattern(voice, sheet.worldId, ri * 31 + sheet.tracks.length * 13 + 7, String(r.kind), taken, sheet.densities?.[r.id]?.[voice.id])
        ?? ALL_PATTERNS.find(p => p.roles.includes(voice.role as any))?.id
        ?? ALL_PATTERNS[0]?.id;
    }
    arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [trackId]: pId };
  }
  const tracks = sheet.tracks.map(t => (t.id === trackId ? { ...t, muted: false } : t));
  return rebuild({ ...sheet, tracks, arrangement });
}

export function toggleVoiceInSection(sheet: Sheet, trackId: string, regionId: string): Sheet {
  if (isVoiceSilentInSection(sheet, trackId, regionId)) {
    return unsilenceVoiceInSection(sheet, trackId, regionId);
  } else {
    return silenceVoiceInSection(sheet, trackId, regionId);
  }
}

export function toggleVoiceInAll(sheet: Sheet, trackId: string): Sheet {
  if (isVoiceSilentInAll(sheet, trackId)) {
    return unsilenceVoiceInAll(sheet, trackId);
  } else {
    return silenceVoiceInAll(sheet, trackId);
  }
}

export function setSectionDensity(sheet: Sheet, regionId: string, density: PartDensity): Sheet {
  const regions = sheet.regions.map(r => r.id === regionId ? { ...r, density } : r);
  const densities = { ...sheet.densities };
  
  const regionTrackDensities: Record<string, PartDensity> = {};
  for (const track of sheet.tracks) {
    regionTrackDensities[track.id] = density;
  }
  densities[regionId] = regionTrackDensities;

  const arrangement = { ...sheet.arrangement };
  const region = regions.find(r => r.id === regionId);
  if (region) {
    const taken = new Set<string>();
    for (const [i, track] of sheet.tracks.entries()) {
      const current = arrangement[regionId]?.[track.id];
      if (current && current !== 'silent') {
        const p = suggestPattern(
          track as Voice,
          sheet.worldId,
          i * 31 + 17,
          String(region.kind),
          taken,
          density
        );
        if (p) {
          arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [track.id]: p };
          const culturalShared = (sheet.worldId === 'chinese-traditional' || sheet.worldId === 'japanese-traditional');
          if (!culturalShared) taken.add(p);
        }
      }
    }
  }

  return rebuild({ ...sheet, regions, densities, arrangement });
}

export function setPartDensity(sheet: Sheet, regionId: string, trackId: string, density: PartDensity): Sheet {
  const densities = {
    ...sheet.densities,
    [regionId]: {
      ...(sheet.densities?.[regionId] ?? {}),
      [trackId]: density,
    },
  };

  const arrangement = { ...sheet.arrangement };
  const region = sheet.regions.find(r => r.id === regionId);
  const track = sheet.tracks.find(t => t.id === trackId);
  if (region && track) {
    const current = arrangement[regionId]?.[trackId];
    if (current && current !== 'silent') {
      const used = new Set(Object.values(arrangement[regionId] ?? {}));
      used.delete(current);
      const p = suggestPattern(
        track as Voice,
        region.genre ?? sheet.worldId,
        Date.now() % 1000,
        String(region.kind),
        used,
        density,
      );
      if (p) {
        arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [trackId]: p };
      }
    }
  }

  return rebuild({ ...sheet, densities, arrangement });
}

export function silenceAllVoicesInSection(sheet: Sheet, regionId: string): Sheet {
  let s = sheet;
  for (const t of sheet.tracks) {
    s = silenceVoiceInSection(s, t.id, regionId);
  }
  return s;
}

export function unsilenceAllVoicesInSection(sheet: Sheet, regionId: string): Sheet {
  let s = sheet;
  for (const t of sheet.tracks) {
    s = unsilenceVoiceInSection(s, t.id, regionId);
  }
  return s;
}

export function addVoice(
  sheet: Sheet,
  instrumentId: string,
  regionId?: string,
  scope: 'section' | 'song' = 'section'
): Sheet {
  const def = instrument(instrumentId);
  const id = `v${Date.now().toString(36)}`;
  const voice: Voice = {
    id, instrumentId, name: def.name, instrument: def.name,
    role: roleForInstrument(instrumentId), kind: instrumentId as any,
    muted: false, volume: 0.85, lensIds: [],
  };
  const arrangement = { ...sheet.arrangement };
  const densities = { ...sheet.densities };
  for (const r of sheet.regions) {
    densities[r.id] = { ...(densities[r.id] ?? {}), [id]: 'normal' };
  }

  if (scope === 'section' && regionId) {
    const targetRegion = sheet.regions.find(r => r.id === regionId) ?? sheet.regions[0];
    const taken = new Set(Object.values(arrangement[targetRegion.id] ?? {}));
    const p = suggestPattern(voice, sheet.worldId, sheet.tracks.length * 19 + 7, String(targetRegion.kind), taken, 'normal');

    for (const r of sheet.regions) {
      if (r.id === targetRegion.id) {
        arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [id]: p ?? 'silent' };
      } else {
        arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [id]: 'silent' };
      }
    }
  } else {
    for (const [ri, r] of sheet.regions.entries()) {
      const taken = new Set(Object.values(arrangement[r.id] ?? {}));
      const p = suggestPattern(voice, sheet.worldId, ri * 31 + sheet.tracks.length * 13 + 7, String(r.kind), taken, 'normal');
      if (p) arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [id]: p };
    }
  }

  return rebuild({ ...sheet, tracks: [...sheet.tracks, voice], arrangement, densities });
}

/** Add one fresh instrument, chosen at random from strong genre-native picks. */
export function addRandomInstrument(
  sheet: Sheet,
  regionId?: string,
  scope: 'section' | 'song' = 'section'
): Sheet {
  const worldId = sheet.worldId;
  const ranked = rankInstrumentsForWorld(worldId);
  const current = new Set(sheet.tracks.map(t => t.instrumentId));
  const fresh = ranked.filter(id => !current.has(id));
  const pool = fresh.length ? fresh : ranked;
  if (!pool.length) return sheet;
  const candidates = pool.slice(0, Math.min(10, pool.length));
  const roll = Math.floor(Math.random() * candidates.length);
  const chosen = candidates[roll] ?? candidates[0];
  return addVoice(sheet, chosen, regionId, scope);
}

export function removeVoice(sheet: Sheet, trackId: string): Sheet {
  const arrangement: Arrangement = {};
  for (const [rid, inner] of Object.entries(sheet.arrangement)) {
    const copy = { ...inner };
    delete copy[trackId];
    arrangement[rid] = copy;
  }
  const densities = { ...sheet.densities };
  for (const rid of Object.keys(densities)) {
    if (densities[rid]) {
      const copy = { ...densities[rid] };
      delete copy[trackId];
      densities[rid] = copy;
    }
  }
  return rebuild({ ...sheet, tracks: sheet.tracks.filter(t => t.id !== trackId), arrangement, densities });
}

export function toggleVoice(sheet: Sheet, trackId: string): Sheet {
  return { ...sheet, tracks: sheet.tracks.map(t => (t.id === trackId ? { ...t, muted: !t.muted } : t)) };
}



/**
 * The meter the world's patterns are actually written in.
 *
 * Traditions declare the meter a musicologist would name — tango as 2/4,
 * flamenco as 12/8, math rock as 7/8 — but the patterns themselves are almost
 * always authored as one 4/4 bar, with the compás expressed as a 12- or
 * 14-step subdivision inside it. Taking the tradition's meter literally made
 * every tango bar half the length its patterns expected, so the grooves ran at
 * double speed. Trust what the patterns say.
 */
export function dominantMeter(worldId: string): string {
  const world = GENRE_WORLDS_BY_ID[worldId];
  const counts: Record<string, number> = {};
  for (const p of world?.patterns ?? []) counts[p.meter] = (counts[p.meter] ?? 0) + 1;
  const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return best?.[0] ?? '4/4';
}

/** Build a complete, already-playing song in a world. Never an empty canvas. */
export function makeSheet(worldId: string): Sheet {
  const world = GENRE_WORLDS_BY_ID[worldId];
  const form = expandedFormSteps(worldId);
  const chords = PROGRESSIONS[worldId] ?? PROGRESSIONS.tango;

  const sectionChords = world?.traditions?.find(t => t.sectionProgressions)?.sectionProgressions as
    | Record<string, string[]>
    | undefined;

  const traditionalWorld = worldId === 'chinese-traditional' || worldId === 'japanese-traditional';
  const regions: Region[] = form.map((f, i) => {
    const picked = traditionalWorld
      ? ['D5']
      : progressionForSection(sectionChords, f.key, f.kind, chords);
    return {
      id: `r${i}`, name: f.label, kind: f.kind, formKey: f.key, formLabel: f.label,
      intensity: f.intensity, start: 0, end: f.bars,
      bars: f.bars,
      genre: worldId,
      chords: picked,
    } as Region;
  });

  if (regions.length > 1 && !traditionalWorld) {
    const all = regions.flatMap(r => r.chords ?? []);
    const key = inferKey(all);
    const powerHeavy = all.filter(c => /5$/.test(c)).length > all.length / 2;
    const tonic = powerHeavy ? `${key.name.replace(/m$/, '')}5` : key.name;
    const last = regions[regions.length - 1];
    const approach = (last.chords ?? [tonic])[0];
    last.chords = last.bars && last.bars > 4 ? [approach, tonic, tonic, tonic] : [tonic, tonic];
  }

  // Default demos use five identity-carrying voices. The fifth is part of the musical identity,
  // not a generic filler; users can still add more voices manually.
  const hints = (WORLD_INSTRUMENT_HINTS[worldId] ?? ['piano', 'upright-bass', 'drums', 'guitar', 'voice'])
    .filter((id, i, arr) => INSTRUMENTS_BY_ID[id] && arr.indexOf(id) === i)
    .slice(0, 5);

  const tracks: Voice[] = hints.map((instrumentId, i) => {
    const def = instrument(instrumentId);
    return {
      id: `v${i}`, instrumentId, name: def.name, instrument: def.name,
      role: roleForInstrument(instrumentId), kind: instrumentId as any,
      muted: false, volume: 0.85, lensIds: [],
    };
  });

  const arrangement: Arrangement = {};
  const densities: Record<string, Record<string, PartDensity>> = {};
  
  for (const [ri, r] of regions.entries()) {
    arrangement[r.id] = {};
    densities[r.id] = {};
    
    // Authored density from genre template
    const formDensities = GENRE_FORMS[worldId]?.densities ?? {};
    const sectionDensities = formDensities[r.formKey ?? ''] ?? formDensities[r.kind] ?? {};
    
    const taken = new Set<string>();
    for (const [i, v] of tracks.entries()) {
      let d: PartDensity = sectionDensities[v.instrumentId] 
                        ?? sectionDensities[v.role] 
                        ?? (r.intensity === 'low' ? 'sparse' : (r.intensity === 'peak' ? 'busy' : 'normal'));
      densities[r.id][v.id] = d;

      let p: string | undefined;
      const preferred = DEFAULT_PATTERN_PREFERENCES[worldId]?.[v.instrumentId];
      if (ri === 0 && preferred && (world?.patterns ?? []).some(pat => pat.id === preferred)) {
        p = preferred;
      } else {
        p = suggestPattern(v, worldId, ri * 31 + i * 13 + 7, String(r.kind), taken, d);
      }
      if (p) {
        arrangement[r.id][v.id] = p;
        const culturalShared = (worldId === 'chinese-traditional' || worldId === 'japanese-traditional');
        if (!culturalShared) taken.add(p);
      }
    }
  }

  return rebuild({
    id: 'sheet', title: TITLES[worldId] ?? 'Untitled',
    bpm: TEMPOS[worldId] ?? 110,
    timeSignature: dominantMeter(worldId),
    durationMeasures: 0,
    tracks, measures: [], regions,
    relationships: [], activeLensIds: [worldId], applied: [],
    arrangement, densities, worldId,
  });
}

/**
 * Switch world. A whole-song replacement reprints the complete musician-facing
 * form, its connective phrases, the default instrument palette, and every
 * section's pattern vocabulary. Switching back and forth is a full genre reset.
 */
export function switchWorld(sheet: Sheet, worldId: string): Sheet {
  // A whole-song genre change is a form change, not a recolor. Replace the
  // section grammar, bars, labels, intensity, chords, instruments, and
  // pattern assignments in one deterministic rebuild. Preserve the user's
  // identity/title so a genre change does not unexpectedly rename the song.
  const fresh = makeSheet(worldId);
  return rebuild({
    ...fresh,
    id: sheet.id,
    title: sheet.title,
    customProgressions: sheet.customProgressions,
  });
}

/**
 * Switch lens only. Transforms the component / plate / theme, but modifies
 * nothing in the song arrangement, instruments, tempo, or notes.
 */
export function switchLensOnly(sheet: Sheet, worldId: string): Sheet {
  return rebuild({
    ...sheet,
    worldId,
    activeLensIds: [worldId],
  });
}

/**
 * Switch a single section to a world/lens. Transforms this section's
 * patterns and chords using the specified world's musical tradition, leaving
 * all other sections, instruments, tempo, and song structure untouched.
 */
export function switchSectionWorld(sheet: Sheet, regionId: string, worldId: string = sheet.worldId): Sheet {
  const regionIndex = sheet.regions.findIndex(r => r.id === regionId);
  if (regionIndex === -1) return sheet;
  const r = sheet.regions[regionIndex];

  const newChords = PROGRESSIONS[worldId] ?? PROGRESSIONS.tango;
  const regions = sheet.regions.map(reg => {
    if (reg.id !== regionId) return reg;
    const formStep = getFormStep(String(reg.formKey ?? reg.kind), worldId);
    return {
      ...reg,
      genre: worldId,
      formKey: formStep?.key ?? reg.formKey ?? reg.kind,
      formLabel: formStep?.label ?? reg.formLabel ?? reg.name,
      intensity: formStep?.intensity ?? reg.intensity,
      chords: newChords,
    };
  });

  const arrangement: Arrangement = { ...sheet.arrangement };
  arrangement[regionId] = { ...(sheet.arrangement[regionId] ?? {}) };

  const taken = new Set<string>();
  for (const [i, v] of (sheet.tracks as Voice[]).entries()) {
    const p = suggestPattern(v, worldId, regionIndex * 31 + i * 13 + 7, String(r.kind), taken, sheet.densities?.[regionId]?.[v.id]);
    if (p) {
      arrangement[regionId][v.id] = p;
      taken.add(p);
    }
  }

  return rebuild({
    ...sheet,
    regions,
    arrangement,
  });
}

/**
 * Returns the genre assigned to the section, defaulting to the song's worldId.
 */
export function getSectionGenre(sheet: Sheet, regionId?: string): string {
  if (regionId) {
    const r = sheet.regions.find(reg => reg.id === regionId);
    if (r?.genre) return r.genre;
  }
  return sheet.worldId;
}

/**
 * Switch the entire song to a world/lens. Transforms everything: instruments,
 * all section patterns, chords, tempo, and title.
 */
export function switchSongWorld(sheet: Sheet, worldId: string = sheet.worldId): Sheet {
  return switchWorld(sheet, worldId);
}

/**
 * Manually set the chord progression for a specific section.
 */
export function setSectionChords(sheet: Sheet, regionId: string, chords: string[]): Sheet {
  const regions = sheet.regions.map(r => {
    if (r.id !== regionId) return r;
    return {
      ...r,
      chords: chords.length ? chords : ['Am'],
    };
  });
  return rebuild({ ...sheet, regions });
}

/**
 * Set the song base BPM.
 */
export function setSongBpm(sheet: Sheet, bpm: number): Sheet {
  const clamped = Math.max(30, Math.min(300, Math.round(bpm)));
  return rebuild({ ...sheet, bpm: clamped });
}

/**
 * Set a specific section BPM (or remove the section override if bpm is undefined).
 */
export function setSectionBpm(sheet: Sheet, regionId: string, bpm?: number): Sheet {
  const regions = sheet.regions.map(r => {
    if (r.id !== regionId) return r;
    return {
      ...r,
      bpm: bpm ? Math.max(30, Math.min(300, Math.round(bpm))) : undefined,
    };
  });
  return rebuild({ ...sheet, regions });
}

