import { Region } from '../types';
import { Voice } from './arrange';
import { VoiceProfile } from './instrumentProfile';

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
  /** why — shown in the UI so the user can see the arrangement thinking */
  reason: string;
}

export interface SectionShape {
  /** 0..1 */
  intensity: number;
  kind: string;
  /** index of this section in the song */
  index: number;
  total: number;
  /** is this the biggest section in the song? */
  isPeak: boolean;
  /** the section right before a peak — builds get special treatment */
  isBuild: boolean;
  /** first or last section */
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

/**
 * Decide what one voice does in one section.
 *
 * `lift` is the user's macro control: at 0 every section is played the same
 * way, at 1 the contrast between the quiet and loud parts of the song is
 * exaggerated well past what a band would do.
 */
export function decide(
  voice: Voice,
  prof: VoiceProfile,
  shape: SectionShape,
  lift: number,
  bandSize: number,
): ArrangementDecision {
  const priority = priorityOf(prof, voice.instrumentId);
  const rank = DROP_ORDER.indexOf(priority);

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

  const centred = shape.intensity - 0.55;
  let drive = 1 + centred * (0.35 + lift * 0.75);

  if (shape.isBuild) drive *= 1.04;
  if (shape.isClosing) drive *= 0.92;
  if (priority === 'core') drive *= 1 + centred * 0.15;

  let register = 0;
  if (shape.isPeak && (prof.role === 'lead' || prof.role === 'comp')) register = 12;
  if (shape.kind === 'breakdown' && prof.role === 'comp') register = -12;
  if (shape.kind === 'intro' && prof.role === 'pad') register = 12;

  const base = 52 + shape.intensity * 62;
  let brightness = base;
  if (shape.kind === 'breakdown') brightness -= 22;
  if (shape.kind === 'intro') brightness -= 12;
  if (shape.isBuild) brightness += 10;
  if (shape.isPeak) brightness = Math.max(brightness, 108);
  brightness = Math.max(18, Math.min(127, brightness + (lift - 0.5) * 24));

  let wet = 1 + (0.55 - shape.intensity) * 0.9;
  if (shape.kind === 'breakdown' || shape.kind === 'intro') wet *= 1.25;
  if (shape.isPeak) wet *= 0.8;
  wet = Math.max(0.3, Math.min(2.2, wet));

  if (plays && !reason) {
    reason = shape.isPeak ? 'full — this is the peak'
      : shape.intensity < 0.4 ? 'held back'
      : shape.isBuild ? 'building'
      : 'playing';
  }

  return { plays, drive: Math.max(0.45, Math.min(1.45, drive)), register, brightness, wet, reason };
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
export function compactDefaultChordLoop(chords: string[], genreId?: string): string[] {
  if (!chords.length || chords.length <= 4 || genreId === 'tango' || genreId === 'flamenco') {
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
  genreId?: string,
): string[] {
  if (!sectionProgressions) return compactDefaultChordLoop(fallback, genreId);
  const tryKeys = [formKey, kind, kind.replace(/-/g, ''), 'verse'];
  for (const k of tryKeys) {
    const found = sectionProgressions[k];
    if (found && found.length) return compactDefaultChordLoop(found, genreId);
  }
  return compactDefaultChordLoop(fallback, genreId);
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
