import type { ResolvedStyle } from '../data/styles/schema';

import { ParsedChord, nearestPc, pcOf } from './theory';
import { VoiceProfile, foldToRange } from './instrumentProfile';
import { rand01 } from './groove';
import type { RhythmicContext } from './grid';

export type VoicingStyle =
  /** close position, the way a guitarist grabs a shape */
  | 'close'
  /** the second voice from the top dropped an octave — the standard piano/guitar comp */
  | 'drop2'
  /** wide, for pads and string beds */
  | 'spread'
  /** just the notes that define the chord: third and seventh */
  | 'shell'
  /** root and fifth only */
  | 'power'
  /** a single line */
  | 'unison';

export interface VoicingRequest {
  chord: ParsedChord;
  profile: VoiceProfile;
  style: VoicingStyle;
  /** the previous voicing this instrument played, for voice leading */
  previous: number[];
  /** how many notes to aim for */
  size: number;
  /** 0..1 — how big the moment is. Opens the voicing up and adds colour. */
  intensity: number;
  /** true when a bass instrument is covering the root */
  bassCovered: boolean;
  /** midi registers already occupied by other chordal parts this bar */
  avoid?: number[];
  seed: number;
  rhythmicContext?: RhythmicContext;
  /** Contract-resolved behavioral approach. */
  approach?: string;
}

/** The chord tones that matter most, in the order you would give them up. */
function priorityIntervals(chord: ParsedChord, bassCovered: boolean, intensity: number): number[] {
  const iv = chord.intervals;
  const third = iv.find(x => x === 3 || x === 4 || x === 2 || x === 5);
  const seventh = iv.find(x => x === 10 || x === 11 || x === 9);
  const fifth = iv.find(x => x === 6 || x === 7 || x === 8);
  const colours = chord.tensions.slice();

  const out: number[] = [];
  if (third !== undefined) out.push(third);
  if (seventh !== undefined) out.push(seventh);

  if (!bassCovered) out.unshift(0);
  else if (chord.isPower || out.length === 0) out.unshift(0);

  if (fifth !== undefined && (fifth !== 7 || out.length < 3 || chord.isPower)) out.push(fifth);

  const colourBudget = intensity > 0.75 ? colours.length : intensity > 0.45 ? Math.min(1, colours.length) : 0;
  for (let i = 0; i < colourBudget; i++) out.push(colours[i]);

  if (bassCovered && !out.includes(0) && out.length < 3) out.push(0);
  return [...new Set(out)];
}

/**
 * Build a voicing for one chord on one instrument, moving as little as
 * possible from the last one.
 */
export function voiceChord(req: VoicingRequest): number[] {
  const { chord, profile, previous, intensity, seed } = req;
  const phase = req.rhythmicContext?.cyclePosition ?? 0;
  const energy = req.rhythmicContext?.sectionEnergy ?? 3;
  const cycleLength = req.rhythmicContext?.cycleLength ?? 1;
  const approach = req.approach;

  if (approach === 'unison' || approach === 'melodic') {
    const root = nearestPc(chord.rootPc, previous[0] ?? profile.centre);
    return [root];
  }

  if (req.style === 'power' || chord.isPower) {
    const root = nearestPc(chord.rootPc, previous[0] ?? profile.centre - 7);
    return dedupe([root, root + 7, root + 12].map(n => clampRange(n, profile)));
  }

  const wanted = priorityIntervals(chord, req.bassCovered, intensity);
  const energySize = energy >= 5 ? 1 : energy <= 1 ? -1 : 0;
  const phaseSize = cycleLength > 1 && phase === cycleLength - 1 ? 0 : 0;
  const requestedSize = Math.max(2, Math.min(12, req.size + energySize + phaseSize));
  const chosen = wanted.slice(0, requestedSize);
  // Extended jazz chords may legitimately be rendered as large stacked voicings.
  // Once every distinct chord tone is present, repeat colour/guide tones in
  // higher octaves rather than silently truncating the request at 5 notes.
  while (chosen.length < requestedSize && wanted.length) {
    chosen.push(wanted[chosen.length % wanted.length] + 12 * Math.floor(chosen.length / wanted.length));
  }

  const anchors = previous.length ? previous : defaultAnchors(profile, chosen.length, req.style);
  const pcs = chosen.map(iv => pcOf(chord.rootPc + iv));

  const used = new Set<number>();
  const placed: number[] = [];
  for (const pc of pcs) {
    let best = -1, bestCost = Infinity;
    for (let i = 0; i < anchors.length; i++) {
      if (used.has(i)) continue;
      const cand = nearestPc(pc, anchors[i]);
      const cost = Math.abs(cand - anchors[i]);
      if (cost < bestCost) { bestCost = cost; best = i; }
    }
    if (best < 0) {
      const ref = placed.length ? placed[placed.length - 1] + 3 : profile.centre;
      placed.push(nearestPc(pc, ref));
    } else {
      used.add(best);
      placed.push(nearestPc(pc, anchors[best]));
    }
  }

  let notes = placed.sort((a, b) => a - b);
  notes = spreadOut(notes);

  if (req.style === 'drop2' && notes.length >= 3) {
    const i = notes.length - 2;
    notes = [...notes.slice(0, i), ...notes.slice(i + 1), notes[i] - 12].sort((a, b) => a - b);
  } else if (req.style === 'spread' && notes.length >= 3) {
    notes = [notes[0] - 12, ...notes.slice(1)];
    if (intensity > 0.7 && notes.length >= 2) notes.push(notes[notes.length - 1] + 12);
  } else if (req.style === 'shell') {
    notes = notes.slice(0, Math.min(3, notes.length));
  }

  notes = notes.map(n => clampRange(n, profile));
  notes = dedupe(notes);

  if (req.avoid?.length) {
    const collision = notes.filter(n => req.avoid!.some(a => Math.abs(a - n) < 2)).length;
    if (collision >= 2) {
      const dir = profile.centre > (req.avoid![0] ?? 60) ? 12 : -12;
      const moved = notes.map(n => clampRange(n + dir, profile));
      if (new Set(moved).size === new Set(notes).size) notes = moved;
    }
  }

  if (notes.length >= 3 && intensity > 0.6 && energy >= 4 && rand01(seed ^ phase) > 0.78) {
    notes[notes.length - 1] = clampRange(notes[notes.length - 1] + 12, profile);
    notes.sort((a, b) => a - b);
  }

  return dedupe(notes);
}

function defaultAnchors(p: VoiceProfile, n: number, style: VocalStyleShim): number[] {
  const base = style === 'spread' ? p.centre - 10 : p.centre - 5;
  const gap = style === 'spread' ? 7 : 4;
  return Array.from({ length: Math.max(n, 3) }, (_, i) => base + i * gap);
}
type VocalStyleShim = VoicingStyle;

function spreadOut(notes: number[]): number[] {
  const out = notes.slice().sort((a, b) => a - b);
  for (let i = 1; i < out.length; i++) {
    if (out[i] - out[i - 1] < 2) out[i] += 12;
  }
  return out.sort((a, b) => a - b);
}

function dedupe(notes: number[]): number[] {
  const seen = new Set<number>();
  const out: number[] = [];
  for (const n of notes.slice().sort((a, b) => a - b)) {
    if (seen.has(n)) continue;
    seen.add(n);
    out.push(n);
  }
  return out;
}

function clampRange(n: number, p: VoiceProfile): number {
  return foldToRange(n, p);
}

export function styleFor(
  profile: VoiceProfile,
  instrumentId: string,
  chord: ParsedChord,
  intensity: number,
  resolved: ResolvedStyle,
): { style: VoicingStyle; size: number } {
  if (chord.isPower) return { style: 'power', size: 3 };

  const id = instrumentId;
  if (profile.role === 'pad' || /pad|strings|choir|halo|sweep/.test(id)) {
    return { style: 'spread', size: intensity > 0.6 ? 5 : 4 };
  }
  if (/organ|accordion|bandoneon/.test(id)) {
    return { style: 'close', size: intensity > 0.6 ? 4 : 3 };
  }
  if (/distortion|overdrive/.test(id)) {
    return { style: 'power', size: 3 };
  }
  if (/guitar|tres|cavaquinho|charango|banjo|mandolin|harp|koto/.test(id)) {
    return { style: intensity > 0.55 ? 'close' : 'shell', size: intensity > 0.55 ? 4 : 3 };
  }
  if (/piano|rhodes|fm-ep|clav|vibraphone|harpsichord|celeste/.test(id)) {
    const jazzy = resolved.contract.harmonyModel === 'functional' && /jazz|blues|swing|funk|fusion/i.test(resolved.name + ' ' + resolved.contract.harmonyVocabulary.join(' '));
    if (jazzy && intensity < 0.55) return { style: 'shell', size: 3 };
    if (jazzy && intensity > 0.82) return { style: 'spread', size: 8 };
    return { style: 'drop2', size: jazzy ? 5 : (intensity > 0.7 ? 4 : 3) };
  }
  if (/horn|brass|choir|backing/.test(id)) {
    return { style: 'close', size: intensity > 0.6 ? 4 : 3 };
  }
  return { style: 'close', size: 3 };
}
