import type { WorldContract } from '../data/styles/contracts';

import { Region } from '../types';
import { Voice } from './arrange';
import { VoiceProfile } from './instrumentProfile';
import type { RhythmicContext } from './grid';
import type { SectionEnergy, SpotlightMode } from '../types';
import { clampEnergy, energyOf, shapeScalarOf } from './energy';

export type Priority = 'core' | 'body' | 'colour' | 'sweetener';

export function priorityOf(prof: VoiceProfile, instrumentId: string): Priority {
  if (prof.role === 'bass') return 'core';
  if (/^drums$|^brush-kit$|^kick$|^snare$/.test(instrumentId)) return 'core';
  if (prof.role === 'perc') return /hats|ride|shaker|maracas|cabasa|tambourine/.test(instrumentId) ? 'colour' : 'body';
  if (prof.role === 'pad') return 'sweetener';
  if (prof.role === 'lead') return 'body';
  if (/backing-vocals|choir|strings|synth-strings|glockenspiel|celeste|crystal|music-box|harp/.test(instrumentId)) {
    return 'sweetener';
  }
  if (/piano|rhodes|guitar|organ|clav|bandoneon|accordion|tres|banjo/.test(instrumentId)) return 'body';
  return 'colour';
}

/** The order parts drop out as a section gets smaller. */
const DROP_ORDER: Priority[] = ['sweetener', 'colour', 'body', 'core'];

export interface SectionShape {
  intensity: number;
  kind: string;
  index: number;
  total: number;
  isPeak: boolean;
  isBuild: boolean;
  isOpening: boolean;
  isClosing: boolean;
}

export function shapeOf(regions: Region[], index: number, intensityOf: (r: Region) => number): SectionShape {
  const r = regions[index];
  const intensity = intensityOf(r);
  const peak = Math.max(...regions.map(intensityOf));
  const next = regions[index + 1];
  return {
    intensity,
    kind: String(r.kind ?? 'verse'),
    index,
    total: regions.length,
    isPeak: intensity >= peak - 0.01 && intensity > 0.75,
    isBuild: !!next && intensityOf(next) - intensity > 0.2,
    isOpening: index === 0,
    isClosing: index === regions.length - 1,
  };
}

export type { SpotlightMode, SectionEnergy };

export interface ArrangementContext {
  interactionModel: NonNullable<WorldContract['interactionModel']>;
  /** Explicitly/on-by-default tracks participating in the interaction model. */
  spotlightedTrackIds: string[];
  /** Effective Section Energy assigned by the interaction model for this section. */
  energyByTrack: Record<string, SectionEnergy>;
  energyMappings: WorldContract['energyMappings'];
}

export interface ArrangementDecision {
  /** does this voice play in this section at all? */
  plays: boolean;
  /** multiplier on velocity, 0..1.4 */
  drive: number;
  /** semitone register shift, usually 0 or ±12 */
  register: number;
  /** 0..127 brightness for this section */
  brightness: number;
  /** multiplier on the instrument's reverb send */
  wet: number;
  /** interaction-aware Section Energy for this part */
  sectionEnergy: SectionEnergy;
  /** why — shown in the UI so the user can see the arrangement thinking */
  reason: string;
}

/**
 * Resolve a track's spotlight state against a style's form grammar.
 * `auto` is intentionally evaluated per section so changing the section's
 * style immediately changes which roles receive attention.
 */
export function isSpotlit(
  voice: Voice,
  mode: SpotlightMode | undefined,
  style: { form?: { defaultSpotlights?: Record<string, string[]> } },
  sectionKind: string,
): boolean {
  if (mode === 'on') return true;
  if (mode === 'off') return false;
  const defaults = style.form?.defaultSpotlights ?? {};
  const roles = defaults[sectionKind] ?? defaults.verse ?? [];
  return roles.includes(voice.role);
}

export function buildArrangementContext(
  voices: Voice[],
  contract: WorldContract,
  style: { form?: { defaultSpotlights?: Record<string, string[]> } },
  sectionKind: string,
  sectionIntensity = 0.55,
): ArrangementContext {
  const spotlightedTrackIds = voices
    .filter(v => isSpotlit(v, v.spotlight, style, sectionKind))
    .map(v => v.id);

  const energyByTrack: Record<string, SectionEnergy> = {};
  const energyEntries = ([1, 2, 3, 4, 5] as SectionEnergy[]).map(
    level => [level, contract.energyMappings[level].activity] as const);
  const targetActivity = Math.max(0, Math.min(1, sectionIntensity));
  const baseEnergy = clampEnergy(
    energyEntries.sort((a, b) => Math.abs(a[1] - targetActivity) - Math.abs(b[1] - targetActivity))[0]?.[0] ?? 3);
  const model = contract.interactionModel;

  if (model === 'homophonic' && spotlightedTrackIds.length) {
    for (const v of voices) {
      energyByTrack[v.id] = spotlightedTrackIds.includes(v.id) ? 5 : 1;
    }
  } else if (model === 'interlock' && spotlightedTrackIds.length > 1) {
    // Give simultaneous spotlights different rhythmic weight: first carries
    // the denser cell, second leaves space, and any further voices sit between.
    spotlightedTrackIds.forEach((id, index) => {
      energyByTrack[id] =
        index === 0 ? 5 :
        index === 1 ? 2 : 3;
    });
    for (const v of voices) {
      if (energyByTrack[v.id] === undefined) energyByTrack[v.id] = 1;
    }
  } else if (model === 'unison' && spotlightedTrackIds.length) {
    for (const v of voices) energyByTrack[v.id] = spotlightedTrackIds.includes(v.id) ? 5 : 1;
  } else if (model === 'counterpoint' && spotlightedTrackIds.length) {
    for (const v of voices) energyByTrack[v.id] = spotlightedTrackIds.includes(v.id) ? 3 : 1;
  } else {
    for (const v of voices) energyByTrack[v.id] = baseEnergy;
  }

  return { interactionModel: model, spotlightedTrackIds, energyByTrack, energyMappings: contract.energyMappings };
}

/**
 * Decide what one voice does in one section.
 *
 * Interaction is evaluated from the resolved world contract rather than from
 * a fixed priority/density formula. Section shape still controls macro
 * dynamics, while the interaction context controls who occupies rhythmic space.
 */
export function decide(
  voice: Voice,
  prof: VoiceProfile,
  shape: SectionShape,
  lift: number,
  bandSize: number,
  context?: ArrangementContext,
): ArrangementDecision {
  const priority = priorityOf(prof, voice.instrumentId);
  const rank = DROP_ORDER.indexOf(priority);
  const spotlighted = context?.spotlightedTrackIds.includes(voice.id) ?? false;
  const sectionEnergy = context?.energyByTrack[voice.id] ?? 3;

  let thin = (1 - shape.intensity) * (0.4 + lift * 1.2);
  if (shape.kind === 'breakdown') thin += 0.25;
  if (shape.kind === 'intro') thin += 0.2;
  if (shape.isOpening) thin += 0.1;
  if (shape.isPeak) thin = 0;
  thin = Math.max(0, Math.min(1, thin));

  const dropBudget = Math.floor(thin * Math.max(0, bandSize - 3));
  const dropsThisPriority =
    rank === 0 ? dropBudget >= 1 :
    rank === 1 ? dropBudget >= 3 :
    rank === 2 ? dropBudget >= 5 : false;

  let plays = !dropsThisPriority;
  let reason = '';

  if (!plays) {
    reason = `sits out — ${shape.kind} is being kept small`;
  }

  // Interaction model takes precedence over the old static density intuition.
  // A homophonic spotlight explicitly makes accompaniment step back.
  if (context?.interactionModel === 'homophonic' && context.spotlightedTrackIds.length) {
    if (spotlighted) {
      plays = true;
      reason = 'spotlight — homophonic lead';
    } else {
      thin = Math.min(1, thin + 0.25);
      if (shape.intensity < 0.65 && priority !== 'core') plays = false;
      reason = 'ducked — homophonic accompaniment';
    }
  } else if (context?.interactionModel === 'interlock' && context.spotlightedTrackIds.length > 1) {
    reason = spotlighted
      ? `interlock — Section Energy ${sectionEnergy}`
      : 'interlock — leaves space for spotlighted parts';
  } else if (spotlighted) {
    reason = `spotlight — ${context?.interactionModel ?? 'arrangement'}`;
  }

  const centred = shape.intensity - 0.55;
  let drive = 1 + centred * (0.35 + lift * 0.75);

  if (shape.isBuild) drive *= 1.04;
  if (shape.isClosing) drive *= 0.92;
  if (priority === 'core') drive *= 1 + centred * 0.15;

  if (spotlighted) drive *= 1.08;
  if (context?.interactionModel === 'homophonic' && context.spotlightedTrackIds.length && !spotlighted) {
    drive *= 0.72;
  } else if (context?.interactionModel === 'interlock' && context.spotlightedTrackIds.length > 1) {
    drive *= sectionEnergy >= 4 ? 1.05 : sectionEnergy <= 2 ? 0.8 : 0.92;
  }

  let register = 0;
  if (shape.isPeak && (prof.role === 'lead' || prof.role === 'comp')) register = 12;
  if (shape.kind === 'breakdown' && prof.role === 'comp') register = -12;
  if (shape.kind === 'intro' && prof.role === 'pad') register = 12;

  // Energy is interpreted by the world contract, rather than as a universal
  // loudness curve. Each culture can define its own density/brightness/FX meaning.
  const mapped = context?.energyMappings?.[sectionEnergy];
  let brightness = (mapped?.brightness ?? (sectionEnergy / 5)) * 127;
  if (shape.kind === 'breakdown') brightness *= 0.82;
  if (shape.kind === 'intro') brightness *= 0.9;
  if (shape.isBuild) brightness += 8;
  brightness = Math.max(18, Math.min(127, brightness + (lift - 0.5) * 12));

  let wet = mapped?.fxWetness ?? (1.35 - sectionEnergy * 0.1);
  if (shape.kind === 'breakdown' || shape.kind === 'intro') wet *= 1.12;
  if (shape.isPeak) wet *= 0.92;
  wet = Math.max(0.3, Math.min(2.2, wet));

  if (plays && !reason) {
    reason = shape.isPeak ? 'full — this is the peak'
      : shape.intensity < 0.4 ? 'held back'
      : shape.isBuild ? 'building'
      : 'playing';
  }

  return {
    plays,
    drive: Math.max(0.45, Math.min(1.45, drive)),
    register,
    brightness,
    wet,
    sectionEnergy,
    reason,
  };
}

/**
 * Keep authored/default harmony compact at the section level. The arranger
 * repeats this loop across the section's bars, so storing 8/16/32 copies of
 * the same progression only makes the song data noisy and makes chord changes
 * look much more complicated than the music actually is.
 *
 * If the authored sequence is already a <=4-chord loop, preserve it exactly.
 * If it is a longer exact repetition of a <=4-chord loop, collapse it to that
 * loop. Otherwise use the first four authored chords as the default harmonic
 * cell. User-entered/custom progressions are never passed through this helper.
 *
 * Tango and Flamenco remain intentionally untouched here.
 */
export function compactDefaultChordLoop(chords: string[], contract?: WorldContract): string[] {
  const preserveLong = !!contract && (contract.meter !== '4/4' || contract.pulseModel === 'long-cycle' || contract.form.some(x => /^[ABC]$/.test(x) || /letra|falseta|variación|remate|cierre/i.test(x)));
  if (!chords.length || chords.length <= 4 || preserveLong) {
    return [...chords];
  }

  const limit = Math.min(4, chords.length);
  for (let period = 1; period <= limit; period++) {
    let repeats = true;
    for (let i = 0; i < chords.length; i++) {
      if (chords[i] !== chords[i % period]) {
        repeats = false;
        break;
      }
    }
    if (repeats) return chords.slice(0, period);
  }

  return chords.slice(0, 4);
}

export function progressionForSection(
  sectionProgressions: Record<string, string[]> | undefined,
  formKey: string,
  kind: string,
  fallback: string[],
  contract?: WorldContract,
): string[] {
  if (!sectionProgressions) return compactDefaultChordLoop(fallback, contract);
  const tryKeys = [formKey, kind, kind.replace(/-/g, ''), 'verse'];
  for (const k of tryKeys) {
    const found = sectionProgressions[k];
    if (found && found.length) return compactDefaultChordLoop(found, contract);
  }
  return compactDefaultChordLoop(fallback, contract);
}

export function cadenceFor(kind: string, chords: string[], isLast: boolean): string[] {
  if (!chords.length) return chords;
  const tonic = chords[0];
  const last = chords[chords.length - 1];
  if (isLast) return [tonic, tonic];
  switch (kind) {
    case 'pre-chorus':
      return [last, last];
    case 'bridge':
      return [last, last];
    case 'intro':
      return chords;
    default:
      return chords;
  }
}
