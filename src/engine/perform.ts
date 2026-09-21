import { Sheet, Voice } from './arrange';
import { Measure, Region } from '../types';
import { INSTRUMENTS_BY_ID } from '../data/instruments';
import { PATTERNS_BY_ID } from '../data/genreData';
import { voiceProfile, noteLengthBeats, foldToRange, VoiceProfile } from './instrumentProfile';
import { grooveForStyle, applyFeel, seedOf, rand01, GrooveProfile, GrooveRole } from './groove';
import { parseChord, inferKey, KeyInfo } from './theory';
import { getResolvedSectionStyle } from './arrange';
import { voiceChord, styleFor } from './voicing';
import { bassNote, bassStyleForStyle, BassStyle, bassPitchBend } from './bass';
import { makeMotif, melodyGate, melodyNote, treatmentFor, Motif, MelodyTreatment, melodyPitchBend } from './melody';
import { GM, kitVoicing, handPercVoicing, flavourForStyle, usesRideStyle, KitVoicing } from './drums';
import { roomForStyle } from './mixer';
import { decide, shapeOf, ArrangementDecision, SectionShape } from './arrangement';
import type { TransitionType, TransitionEvent } from './grid';
import { beatsPerBarOf, culturalCyclePosition, type NativeSlice, type RhythmicContext } from './grid';
import { getEffectiveBpm } from './arrange';
import { culturalRules, culturalPitchSet, culturalDronePitch, isCulturalWorld, shoCluster, celticOpenHarmony } from './cultural';
import { resolveStyle } from '../data/styles/resolve';
import { getCanonicalStyle } from '../data/styles/registry';
import { blendPartStyle, type BlendReport } from './blend';
import { activityFor, clampEnergy, energyOf, shapeScalarOf } from './energy';
import { normaliseDials } from './dials';
import { resolveArticulationStack, realizeArticulation, type ArticulationSpec } from './articulation';
import { resolvePreset } from '../data/soundfonts';
import type { GuestLens } from '../types';

/* --- event model ---------------------------------------------------------- */

export interface PitchBendPoint {
  /** seconds after note-on at which this bend value is sent */
  offset: number;
  /** MIDI pitch-bend value, 0..16383; 8192 is center */
  value: number;
}

export interface PerfNote {
  /** seconds from the start of the song */
  time: number;
  /** seconds */
  dur: number;
  midi: number;
  /** Optional MIDI 0xE0 pitch-bend trajectory, scheduled relative to note-on. */
  pitchBend?: PitchBendPoint[];
  /** 1..127 */
  vel: number;
  channel: number;
  trackId: string;
  bar: number;
  drum?: boolean;
}

export interface PerfCC {
  time: number;
  channel: number;
  cc: number;
  /** 0..127 */
  value: number;
}

export interface PerfProgram {
  time: number;
  channel: number;
  program: number;
  drum: boolean;
}

export interface BarTime {
  index: number;
  start: number;
  end: number;
  bpm: number;
  beatsPerBar: number;
  regionId: string;
}

export interface Performance {
  notes: PerfNote[];
  ccs: PerfCC[];
  programs: PerfProgram[];
  bars: BarTime[];
  duration: number;
  channelOf: Record<string, number>;
  drumChannels: number[];
  /** seconds of tail to let ring after the last note */
  tail: number;
  /** `trackId|regionId` -> what the guest lens did, for the inspector. */
  blends: Record<string, BlendReport>;
}

export interface CompileOptions {
  /** 0..1, how exaggerated the genre's feel is. 0.5 is "as intended". */
  pocket?: number;
  /** 0..1, how much the arrangement leans on section dynamics */
  lift?: number;
  /** master humanization scale, 0..1 */
  humanize?: number;
  /** 0..1, how strongly ornaments, bends and swells are realized */
  expression?: number;
}

/* --- meter and grid ------------------------------------------------------- */

export { sliceBarNative, beatsPerBarOf } from './grid';
export type { NativeSlice } from './grid';

/* --- tempo map ------------------------------------------------------------ */

export function buildBarTimes(sheet: Sheet): BarTime[] {
  const beatsPerBar = beatsPerBarOf(sheet.timeSignature);
  const bars: BarTime[] = [];
  let t = 0;
  sheet.measures.forEach((m, i) => {
    const { bpm } = getEffectiveBpm(sheet, m.regionId);
    const safeBpm = Math.max(20, Math.min(400, bpm || 110));
    const dur = (beatsPerBar * 60) / safeBpm;
    bars.push({ index: i, start: t, end: t + dur, bpm: safeBpm, beatsPerBar, regionId: m.regionId });
    t += dur;
  });
  return bars;
}

/* --- channel allocation --------------------------------------------------- */

function isPercussive(instrumentId: string): boolean {
  const d = INSTRUMENTS_BY_ID[instrumentId];
  return !!d && (d.kit === true || d.drum !== undefined);
}

export function allocateChannels(tracks: Voice[]): { channelOf: Record<string, number>; drumChannels: number[] } {
  const channelOf: Record<string, number> = {};
  const drumChannels: number[] = [];
  const melodicPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
  const percPool = [9, 15, 14, 13, 12, 11, 10, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const used = new Set<number>();

  // percussion first — channel 9 is the one the soundfont already treats as a kit
  for (const t of tracks) {
    if (!isPercussive(t.instrumentId)) continue;
    const ch = percPool.find(c => !used.has(c));
    if (ch === undefined) continue;
    used.add(ch);
    channelOf[t.id] = ch;
    drumChannels.push(ch);
  }
  for (const t of tracks) {
    if (isPercussive(t.instrumentId)) continue;
    const ch = melodicPool.find(c => !used.has(c));
    if (ch === undefined) continue;
    used.add(ch);
    channelOf[t.id] = ch;
  }
  return { channelOf, drumChannels };
}

/* --- section intensity ---------------------------------------------------- */

const INTENSITY_LEVEL: Record<string, number> = {
  low: 0.3, medium: 0.55, high: 0.78, peak: 1.0,
};

export function intensityOf(region: Region | undefined): number {
  return INTENSITY_LEVEL[String(region?.intensity ?? 'medium')] ?? 0.55;
}

interface VoiceMemory {
  last: number[];
  lastNote: number;
}

function thinForSustain(
  prof: VoiceProfile,
  attacks: { beatInBar: number; accent: number }[],
  beatsPerBar: number,
  intensity: number,
): boolean[] {
  const keep = attacks.map(() => true);
  if (prof.sustain !== 'sustained' && prof.sustain !== 'blown') return keep;

  const padLike = prof.role === 'pad' || prof.ring >= 4;
  const minGap = padLike
    ? (intensity > 0.8 ? beatsPerBar / 2 : beatsPerBar)
    : prof.sustain === 'blown' ? 0.5 : 1.0;

  let lastKept = -Infinity;
  attacks.forEach((a, i) => {
    if (a.beatInBar - lastKept + 1e-6 >= minGap || i === 0) {
      lastKept = a.beatInBar;
    } else {
      keep[i] = false;
    }
  });
  return keep;
}

/* --- the compiler --------------------------------------------------------- */

interface Attack {
  trackId: string;
  bar: number;
  /** grid position in beats from the start of the bar, before feel */
  beatInBar: number;
  accent: number;
  durationSteps: number;
  stepsPerBar: number;
  authoredMs: number;
  articulation?: string;
  articulations?: string[];
  lens?: GuestLens;
  partEnergy?: 1 | 2 | 3 | 4 | 5;
  onsetIndex: number;
  chordSymbol: string;
  anticipated: boolean;
  hitType?: string;
  patternId?: string;
  styleId?: string;
}

function authoredKitVoicing(hitType: string, accent: number): KitVoicing {
  const gain = Math.max(0.2, Math.min(1.2, 0.72 + accent * 0.34));
  switch (hitType) {
    case 'kick': return { key: GM.kick, limb: 'kick', gain };
    case 'snare': return { key: GM.snare, limb: 'snare', gain };
    case 'rim': return { key: GM.snareRim, limb: 'rim', gain: gain * 0.92 };
    case 'clap': return { key: GM.clap, limb: 'snare', gain: gain * 0.95 };
    case 'hat': return { key: GM.hatClosed, limb: 'hat', gain: gain * 0.72 };
    case 'openHat': return { key: GM.hatOpen, limb: 'openHat', gain: gain * 0.8 };
    case 'ride': return { key: GM.ride, limb: 'ride', gain: gain * 0.72 };
    case 'crash': return { key: GM.crash, limb: 'crash', gain: gain * 0.92 };
    case 'cowbell': return { key: GM.cowbell, limb: 'snare', gain: gain * 0.86 };
    case 'tom': return { key: GM.tomMid, limb: 'tom', gain: gain * 0.85 };
    case 'ghost': return { key: GM.snare, limb: 'ghost', gain: gain * 0.32 };
    case 'shaker': {
      const d = INSTRUMENTS_BY_ID['shaker']?.drum;
      return { key: d?.mid ?? 82, limb: 'hat', gain: gain * 0.55 };
    }
    default:
      return { key: GM.hatClosed, limb: 'hat', gain: gain * 0.6 };
  }
}



function energyForRegion(region: Region): 1 | 2 | 3 | 4 | 5 {
  return energyOf(region);
}

function authoredTransitionPattern(style: any, worldId: string, type: TransitionType, role: string): any | undefined {
  if (!style?.contract?.transitionGrammar?.authoredPriority) return undefined;
  const candidates = Object.values(PATTERNS_BY_ID) as any[];
  return candidates
    .filter(p => p.worldId === worldId)
    .filter(p => p.category === 'fill' || p.category === 'transition' || p.tags?.some((t: string) => /fill|transition/i.test(t)))
    .filter(p => !p.roles?.length || p.roles.includes(role) || (role === 'percussion' && p.roles.includes('drums')))
    .filter(p => !style.patterns?.allowed?.length || style.patterns.allowed.includes(p.id))
    .sort((a, b) => {
      const af = a.category === 'fill' || a.tags?.some((t: string) => /fill/i.test(t)) ? 1 : 0;
      const bf = b.category === 'fill' || b.tags?.some((t: string) => /fill/i.test(t)) ? 1 : 0;
      return bf - af;
    })[0];
}

export function buildTransitionEvents(sheet: Sheet): Map<number, TransitionEvent> {
  const out = new Map<number, TransitionEvent>();
  for (let i = 0; i < sheet.regions.length - 1; i++) {
    const current = sheet.regions[i];
    const next = sheet.regions[i + 1];
    const style = getResolvedSectionStyle(sheet, current);
    const fromEnergy = energyForRegion(current);
    const toEnergy = energyForRegion(next);
    if (fromEnergy === toEnergy) continue;
    const grammar = style.contract.transitionGrammar;
    const type = (toEnergy > fromEnergy ? grammar.onEnergyRise : grammar.onEnergyFall) ??
      (toEnergy > fromEnergy ? 'fill' : 'drop-out');
    if (!grammar.types.includes(type)) continue;
    const cycleLength = Math.max(1, Math.round(style.contract.cycleLength || 1));
    const finalStart = Math.max(current.start, current.end - cycleLength);
    const authored = type === 'fill'
      ? authoredTransitionPattern(style, current.genre ?? sheet.worldId, type, 'drums')
      : undefined;
    const bar = current.end - 1;
    if (bar < finalStart) continue;
    {
      out.set(bar, {
        type,
        fromEnergy,
        toEnergy,
        cyclePosition: culturalCyclePosition(bar - current.start, cycleLength),
        cycleLength,
        authored: !!authored,
        patternId: authored?.id,
      });
    }
  }
  return out;
}

/** True when the next section is heavier than this one. */
function isBuildSection(regions: Region[], region: Region): boolean {
  const i = regions.findIndex(r => r.id === region.id);
  const next = regions[i + 1];
  return !!next && energyOf(next) > energyOf(region);
}

function spotlightLeadRubatoOffset(spotlit: boolean, role: string, cyclePosition: number, cycleLength: number, secPerBeat: number, seed: number): number {
  if (!spotlit || role !== 'lead') return 0;
  // Small, deterministic timing breath independent of groove.ts pocket.
  const phase = ((cyclePosition % Math.max(1, cycleLength)) + Math.max(1, cycleLength)) % Math.max(1, cycleLength);
  const sign = ((seed ^ Math.round(phase * 17)) & 1) ? 1 : -1;
  const amount = (0.035 + (Math.abs(seed % 7) / 6) * 0.045) * secPerBeat;
  return sign * amount;
}

export function compile(sheet: Sheet, opts: CompileOptions = {}): Performance {
  const dials = normaliseDials(sheet);
  const pocketAmount = opts.pocket ?? dials.pocket;
  const liftAmount = opts.lift ?? dials.lift;
  const humanScale = opts.humanize ?? 1;
  const expressionAmount = opts.expression ?? dials.expression;

  const bars = buildBarTimes(sheet);
  const tracks = sheet.tracks as Voice[];
  const { channelOf, drumChannels } = allocateChannels(tracks);
  const regionById = new Map(sheet.regions.map(r => [r.id, r]));

  const notes: PerfNote[] = [];
  const ccs: PerfCC[] = [];
  const programs: PerfProgram[] = [];
  const blendReports: Record<string, BlendReport> = {};
  /** Articulation preset requests, per channel: `channel` -> preset tag. */
  const presetTagByChannel = new Map<number, string>();

  if (!bars.length || !tracks.length) {
    return { notes, ccs, programs, bars, duration: 0, channelOf, drumChannels, tail: 0, blends: {} };
  }

  const transitionEvents = buildTransitionEvents(sheet);

  /* ---- 1. gather every attack, per track, in order --------------------- */
  const attacksByTrack = new Map<string, Attack[]>();
  for (const t of tracks) attacksByTrack.set(t.id, []);

  sheet.measures.forEach((m: Measure, barIndex: number) => {
    const bt = bars[barIndex];
    if (!bt) return;
    const region = regionById.get(m.regionId);
    const nextMeasure = sheet.measures[barIndex + 1];

    for (const t of tracks) {
      if (t.muted) continue;
      const d = m.patternDetailsByTrack?.[t.id];
      if (!d) continue;
      const def = INSTRUMENTS_BY_ID[t.instrumentId];
      if (!def) continue;
      const perf = (d as any).perf as NativeSlice | undefined;
      let onsets = perf?.onsets ?? d.onsetGrid ?? [];
      if (!onsets.length) continue;
      let stepsPerBar = perf?.stepsPerBar ?? 16;
      let accents = perf?.accents ?? d.accentProfile ?? [];
      let durations = perf?.durations ?? d.durationGrid ?? [];
      let micro = perf?.microtiming ?? [];
      let hitTypes = perf?.hitTypes ?? [];

      // Lookahead transitions can replace a drum bar with catalog-authored
      // fill material. This happens before attacks are staged, so the authored
      // pattern genuinely replaces the ordinary groove rather than merely
      // adding a procedural fill on top.
      const transition = transitionEvents.get(barIndex);
      const isDrum = !!def.kit || !!def.drum;
      if (transition?.type === 'fill' && transition.patternId && isDrum) {
        const fill = PATTERNS_BY_ID[transition.patternId];
        if (fill) {
          onsets = fill.onsetGrid ?? onsets;
          stepsPerBar = fill.subdivisions || 16;
          accents = fill.accentProfile ?? onsets.map(() => 0.82);
          durations = fill.durationGrid ?? onsets.map(() => 1);
          hitTypes = fill.hitGrid ?? onsets.map(() => 'tom');
          micro = [];
        }
      }

      const prof = voiceProfile(t.instrumentId);
      const canAnticipate =
        prof.role === 'bass' || prof.role === 'comp' || prof.role === 'stab';

      const list = attacksByTrack.get(t.id)!;
      const staged = onsets.map((step, i) => ({
        beatInBar: (step / stepsPerBar) * bt.beatsPerBar,
        accent: accents[i] ?? 0.78,
      }));
      // a melody instrument is thinned by the melody gate, which knows about
      // phrasing; running it through the pad thinner first turned a fiddle
      // into a string pad
      const melodicVoice = def.voicing === 'single' && prof.role !== 'bass' && prof.role !== 'pad';
      const percussiveVoice = !!def.kit || !!def.drum;
      // Pattern-authored drums/percussion are already sparsity-controlled by the
      // pattern itself. Applying melodic/pad sustain thinning here deletes the
      // offbeat hits that define styles such as dembow, ska, and cumbia.
      const keep = melodicVoice || percussiveVoice
        ? staged.map(() => true)
        : thinForSustain(prof, staged, bt.beatsPerBar, intensityOf(region));

      onsets.forEach((step, i) => {
        if (!keep[i]) return;
        const beatInBar = (step / stepsPerBar) * bt.beatsPerBar;
        const lastHalfBeat = beatInBar >= bt.beatsPerBar - 0.51;
        const chordChanges = !!nextMeasure && nextMeasure.chord !== m.chord;
        const anticipated = canAnticipate && lastHalfBeat && chordChanges;
        list.push({
          trackId: t.id,
          bar: barIndex,
          beatInBar,
          accent: accents[i] ?? 0.78,
          durationSteps: durations[i] ?? 1,
          stepsPerBar,
          authoredMs: micro[i] ?? 0,
          articulation: d.articulation,
          articulations: (d as any).articulations,
          lens: (d as any).lens,
          partEnergy: (d as any).partEnergy,
          onsetIndex: i,
          // an anticipation belongs harmonically to the bar it is announcing
          chordSymbol: anticipated ? nextMeasure!.chord : m.chord,
          anticipated,
          hitType: hitTypes[i] || undefined,
          styleId: (d as any).styleId,
          patternId: (d as any).patternId,
        });
      });
    }
  });

  /* ---- 2. song harmonic context and motifs ---- */
  const allChords = sheet.measures.map(m => m.chord);
  const key: KeyInfo = inferKey(allChords.length ? allChords : ['Am']);
  const songStyle = resolveStyle({ genreId: sheet.worldId, styleId: sheet.styleId ?? getCanonicalStyle(sheet.worldId).id });
  // Non-functional contracts use one modal/ensemble center; functional styles retain
  // ordinary harmonic key inference.
  const culturalTonicPc = isCulturalWorld(songStyle)
    ? parseChord(sheet.measures[0]?.chord ?? 'D5').rootPc
    : key.tonicPc;
  const motif: Motif = makeMotif(
    seedOf(sheet.id, sheet.worldId, sheet.title, allChords.join(',')),
    bars[0]?.beatsPerBar ?? 4,
    sheet.styleId,
    sheet.worldId,
  );
  const phraseBars = motif.phraseBars ?? 4;

  const nextChangedChord: (string | undefined)[] = sheet.measures.map((m, i) => {
    for (let j = i + 1; j < Math.min(sheet.measures.length, i + 5); j++) {
      if (sheet.measures[j].chord !== m.chord) return sheet.measures[j].chord;
    }
    return sheet.measures[(i + 1) % sheet.measures.length]?.chord;
  });

  const melodicTracks = tracks.filter(t => {
    const d = INSTRUMENTS_BY_ID[t.instrumentId];
    const pr = voiceProfile(t.instrumentId);
    return d && !d.kit && !d.drum && d.voicing === 'single' && pr.role !== 'bass';
  });
  const melodyLayer = new Map<string, number>();
  melodicTracks.forEach((t, i) => melodyLayer.set(t.id, i));

  const hasBass = tracks.some(t => !t.muted && voiceProfile(t.instrumentId).role === 'bass');
  const occupied = new Map<number, number[]>();

  /* ---- arrangement shape and decisions ---- */
  const shapes = new Map<string, SectionShape>();
  sheet.regions.forEach((r, i) => {
    shapes.set(r.id, shapeOf(sheet.regions, i, intensityOf));
  });
  const decisions = new Map<string, ArrangementDecision>();
  const bandSize = tracks.filter(t => !t.muted).length;
  for (const t of tracks) {
    const prof = voiceProfile(t.instrumentId);
    for (const r of sheet.regions) {
      const shape = shapes.get(r.id)!;
      decisions.set(`${t.id}|${r.id}`, decide(t, prof, shape, liftAmount, bandSize, sheet.arrangementContext?.[r.id]));
    }
  }

  /* ---- 3. turn attacks into sounding notes ---- */
  for (const t of tracks) {
    const channel = channelOf[t.id];
    if (channel === undefined || t.muted) continue;

    const def = INSTRUMENTS_BY_ID[t.instrumentId];
    if (!def) continue;
    const prof = voiceProfile(t.instrumentId);
    const list = (attacksByTrack.get(t.id) ?? []).sort(
      (a, b) => a.bar - b.bar || a.beatInBar - b.beatInBar,
    );
    if (!list.length) continue;

    const attacksByBar = new Map<number, typeof list>();
    for (const atk of list) {
      let arr = attacksByBar.get(atk.bar);
      if (!arr) {
        arr = [];
        attacksByBar.set(atk.bar, arr);
      }
      arr.push(atk);
    }

    const mem: VoiceMemory = { last: [], lastNote: 0 };
    const isBass = prof.role === 'bass';
    const isMelodic = melodyLayer.has(t.id);
    const layer = melodyLayer.get(t.id) ?? 0;

    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      const bt = bars[a.bar];
      if (!bt) continue;
      const region = regionById.get(bt.regionId);
      const regionGenreId = region?.genre ?? sheet.worldId;
      const sectionStyle = region
        ? getResolvedSectionStyle(sheet, region)
        : resolveStyle({ genreId: regionGenreId, styleId: getCanonicalStyle(regionGenreId).id });

      // The section decides the world. A guest lens on this part decides how
      // this one voice speaks inside it. Everything downstream — groove, bass
      // job, percussion dialect, articulation vocabulary — reads the blended
      // style, so a reggae skank inside a cumbia arrives with reggae phrasing
      // rather than being transcribed into cumbia phrasing.
      const blended = blendPartStyle(sectionStyle, a.lens, String(t.role));
      const resolvedStyle = blended.style;
      if (a.lens && blended.report.weight > 0) {
        blendReports[`${t.id}|${bt.regionId}`] = blended.report;
      }
      const regionStyleId = sectionStyle.id;
      const g: GrooveProfile = grooveForStyle(resolvedStyle);
      const bassStyle: BassStyle = bassStyleForStyle(resolvedStyle, t.instrumentId, t.role);
      const intensityRaw = intensityOf(region);
      // lift 0 flattens every section to the same weight, 1 exaggerates
      const intensity = 0.55 + (intensityRaw - 0.55) * (0.3 + liftAmount * 1.4);

      const decision = decisions.get(`${t.id}|${bt.regionId}`);
      if (decision && !decision.plays) continue;
      const rhythmicContext: RhythmicContext = {
        cyclePosition: culturalCyclePosition(a.bar - (region?.start ?? 0), resolvedStyle.contract.cycleLength),
        cycleLength: Math.max(1, Math.round(resolvedStyle.contract.cycleLength || 1)),
        sectionEnergy: decision?.sectionEnergy ?? 3,
        transition: transitionEvents.get(a.bar),
      };
      const spotlit = !!sheet.arrangementContext?.[bt.regionId]?.spotlightedTrackIds.includes(t.id);
      const spotlitLead = prof.role === 'lead' && spotlit;

      // How much of the authored material this part actually voices is the
      // world's decision, not a constant. `activity` comes straight from the
      // contract's energy mapping, so a world that says "the compás never
      // thins" (activity 0.95 at energy 1) keeps every stroke, while a world
      // that says energy 1 means a skeleton drops most of them.
      //
      // Two onsets are never dropped: the downbeat, and anything the pattern
      // accented hard enough to be structural. Thinning those is what turned
      // sparse sections into unrecognisable ones.
      const partEnergy = clampEnergy(a.partEnergy ?? decision?.sectionEnergy ?? 3);
      const activity = activityFor(resolvedStyle.contract, partEnergy);
      const structural = a.beatInBar < 0.12 || a.accent >= 0.88;
      if (!structural && activity < 0.99 &&
          rand01(seedOf(t.id, a.bar, a.onsetIndex, 'activity')) > activity) {
        continue;
      }

      const secPerBeat = 60 / bt.bpm;
      const chord = parseChord(a.chordSymbol);
      const nextSym = nextChangedChord[a.bar];
      const nextChord = nextSym ? parseChord(nextSym) : undefined;
      const pattern = a.patternId ? PATTERNS_BY_ID[a.patternId] : undefined;
      const culture = culturalRules(resolvedStyle, t.instrumentId);
      const culturalHarmonyPattern = !!culture && pattern?.roles.includes('harmony') && !culture.heterophonic;
      const celticWorld = culture?.sourceModel === 'modal-drone' && /open fifth|drone/i.test(resolvedStyle.contract.harmonyVocabulary.join(' '));

      let treatment: MelodyTreatment = 'state';
      if (isMelodic && !culturalHarmonyPattern && !culture) {
        treatment = treatmentFor(String(region?.kind ?? 'verse'), intensity, regionStyleId, resolvedStyle.primaryGenre);
        const phraseBar = (a.bar - (region ? region.start : 0) + 64) % phraseBars;
        const gateOk = melodyGate({
          motif, key, chord, profile: prof, treatment,
          barInPhrase: phraseBar,
          beatInBar: a.beatInBar,
          beatsPerBar: bt.beatsPerBar,
          layer, intensity,
          previous: mem.lastNote,
          seed: seedOf(t.id, a.bar, a.onsetIndex, 'gate'),
          styleId: regionStyleId,
          genreId: resolvedStyle.primaryGenre,
          sectionKind: String(region?.kind ?? 'verse'),
          spotlit,
        });
        if (!gateOk) continue;
      }

      const feel = applyFeel(g, {
        beatInBar: a.beatInBar,
        beatsPerBar: bt.beatsPerBar,
        role: prof.role as GrooveRole,
        accent: a.accent,
        seed: seedOf(t.id, a.bar, a.onsetIndex, Math.round(a.beatInBar * 96)),
        authoredMs: a.authoredMs,
        anticipated: a.anticipated,
        intensity,
        pocketAmount: culture?.authoredTimingOnly ? 0 : pocketAmount,
        authoredTimingOnly: !!culture?.authoredTimingOnly,
      });

      const jitterSec = (feel.offsetMs * humanScale) / 1000;
      const rubato = resolvedStyle.contract.performanceIdioms?.spotlightLeadRubato ? spotlightLeadRubatoOffset(spotlitLead, prof.role, rhythmicContext.cyclePosition, rhythmicContext.cycleLength, secPerBeat, seedOf(t.id, a.bar, a.onsetIndex, 'rubato')) : 0;
      const time = bt.start + (a.beatInBar + feel.offsetBeats) * secPerBeat + jitterSec + rubato;

      const next = list[i + 1];
      let gapBeats = 4;
      if (next) {
        gapBeats = (next.bar - a.bar) * bt.beatsPerBar + next.beatInBar - a.beatInBar;
        if (gapBeats <= 0) gapBeats = 0.25;
      }
      const authoredBeats = (a.durationSteps / a.stepsPerBar) * bt.beatsPerBar;
      // The instrument's own sustain class sets a baseline length; the
      // articulation engine then scales it. Passing the articulation name here
      // too would apply the same shaping twice.
      const lenBeats = noteLengthBeats(prof, Math.max(0.05, authoredBeats), gapBeats);
      const dur = Math.max(0.03, lenBeats * secPerBeat);

      const energyMap = resolvedStyle.contract.energyMappings[rhythmicContext.sectionEnergy];
      const base = 58 + energyMap.brightness * 62;
      const vel = Math.max(6, Math.min(127, Math.round(
        base * feel.velocityMult * (decision?.drive ?? 1),
      )));

      if (def.kit || def.drum) {
        const regionStart = region?.start ?? 0;
        const regionEnd = region?.end ?? regionStart + 1;
        const barInPhrase = culturalCyclePosition(a.bar - regionStart, resolvedStyle.contract.cycleLength);
        const sameBar = attacksByBar.get(a.bar) ?? [];

        let kv: KitVoicing;
        if (def.kit && resolvedStyle.contract.percussion.kitMode === 'none') continue;
        if (a.hitType && def.kit) {
          if (resolvedStyle.contract.percussion.allowedHitTypes.length && !resolvedStyle.contract.percussion.allowedHitTypes.includes(a.hitType)) continue;
          if (resolvedStyle.contract.percussion.forbidSectionCrash && a.hitType === 'crash' && a.bar === regionStart) continue;
          kv = authoredKitVoicing(a.hitType, a.accent);
        } else if (def.kit) {
          kv = kitVoicing({
            beatInBar: a.beatInBar,
            beatsPerBar: bt.beatsPerBar,
            accent: a.accent,
            barOnsets: sameBar.map(x => x.beatInBar),
            index: sameBar.indexOf(a),
            intensity,
            allowTomFills: resolvedStyle.contract.percussion.allowTomFills,
            allowSectionCrash: !resolvedStyle.contract.percussion.forbidSectionCrash,
            forbidBackbeat: resolvedStyle.contract.percussion.forbidWesternBackbeat,
            barInPhrase,
            sectionStart: a.bar === regionStart,
            sectionEnd: a.bar === regionEnd - 1,
            phraseEnd: barInPhrase === rhythmicContext.cycleLength - 1,
            flavour: flavourForStyle(resolvedStyle, t.instrumentId),
            rideFeel: usesRideStyle(resolvedStyle, String(region?.kind ?? 'verse'), intensity),
            seed: seedOf(t.id, a.bar, a.onsetIndex, 'kit'),
            transition: rhythmicContext.transition,
          });
        } else {
          kv = handPercVoicing(def.drum!, a.accent, intensity, seedOf(t.id, a.bar, a.onsetIndex, 'perc'), a.hitType);
        }

        if (kv.gain <= 0) continue;

        const drumBase = 64 + energyMap.brightness * 58;
        const kvVel = Math.max(4, Math.min(127, Math.round(
          drumBase * (0.58 + 0.42 * feel.velocityMult) * kv.gain,
        )));
        const kitDur = kv.limb === 'crash' || kv.limb === 'openHat' || kv.limb === 'ride'
          ? Math.min(dur * 3, 1.2) : Math.min(dur, 0.25);

        if (kv.flamMs) {
          notes.push({
            time: time - kv.flamMs / 1000, dur: 0.06, midi: kv.key,
            vel: Math.max(4, Math.round(kvVel * 0.45)),
            channel, trackId: t.id, bar: a.bar, drum: true,
          });
        }
        notes.push({ time, dur: kitDur, midi: kv.key, vel: kvVel, channel, trackId: t.id, bar: a.bar, drum: true });
        continue;
      }

      /* ---- the three jobs ----------------------------------------------- */
      let pitches: number[];
      let rapidRun = false;
      let rapidRunScalePcs: number[] | undefined;

      if (isBass && culture?.avoidBassFoundation) {
        // In styles organized around drones and melody, a bass part is a
        // color/continuity layer rather than a mandatory Western root engine.
        const n = culturalDronePitch(culture, culturalTonicPc, prof, seedOf(t.id, a.bar, a.onsetIndex, 'bass-drone'));
        mem.lastNote = n;
        pitches = [n];
      } else if (isBass) {
        const n = bassNote({
          chord, next: nextChord, key, profile: prof, style: bassStyle,
          beatInBar: a.beatInBar, beatsPerBar: bt.beatsPerBar,
          onsetIndex: a.onsetIndex,
          onsetCount: (attacksByBar.get(a.bar) ?? []).length,
          approaching: !!nextChord && a.beatInBar > bt.beatsPerBar - 1.51,
          anticipated: a.anticipated,
          intensity,
          seed: seedOf(t.id, a.bar, a.onsetIndex, 'bass'),
          previous: mem.lastNote,
          rhythmicContext,
          approach: resolvedStyle.contract.approaches?.[t.role]?.id,
        });
        mem.lastNote = n;
        pitches = [n];
      } else if (culturalHarmonyPattern) {
        pitches = celticWorld
          ? celticOpenHarmony(chord.rootPc, prof, intensity, seedOf(t.id, a.bar, a.onsetIndex, 'celtic-open'))
          : [culturalDronePitch(culture!, culturalTonicPc, prof, seedOf(t.id, a.bar, a.onsetIndex, 'drone'))];
        mem.last = pitches;
        mem.lastNote = pitches[pitches.length - 1] ?? mem.lastNote;
      } else if (isMelodic) {
        const phraseBar = (a.bar - (region ? region.start : 0) + 64) % phraseBars;
        const resolved = resolvedStyle;
        const { note: n, isLeap, rapidRun: shouldRapidRun, rapidRunScalePcs: rapidRunScalePcsResult } = melodyNote({
          motif, key, chord, profile: prof, treatment,
          barInPhrase: phraseBar,
          beatInBar: a.beatInBar,
          beatsPerBar: bt.beatsPerBar,
          layer, intensity,
          previous: mem.lastNote,
          seed: seedOf(t.id, a.bar, a.onsetIndex, 'mel'),
          styleId: regionStyleId,
          genreId: resolvedStyle.primaryGenre,
          sectionKind: String(region?.kind ?? 'verse'),
          spotlit,
          pitchSet: culture ? culturalPitchSet(culture, culturalTonicPc) : undefined,
          tonicPc: culture ? culturalTonicPc : undefined,
          snapToChord: culture ? culture.snapToChord : resolved.melody?.snapToChord,
          rangePerSection: resolved.melody?.rangePerSection,
          chordToneTargeting: resolved.melody?.chordToneTargeting,
          callAndResponse: resolved.melody?.callAndResponse,
          heterophonic: resolved.melody?.heterophonic,
          wasLeap: (mem as any).wasLeap,
        });
        rapidRun = !!shouldRapidRun;
        rapidRunScalePcs = rapidRunScalePcsResult;
        (mem as any).wasLeap = isLeap;
        mem.lastNote = n;
        pitches = [n];
      } else {
        if (culture?.harmonyModel === 'fixed-cluster' && t.instrumentId === 'shō') {
          pitches = shoCluster(culturalTonicPc, prof, intensity);
          mem.last = pitches;
          mem.lastNote = pitches[pitches.length - 1] ?? mem.lastNote;
        } else {
          const { style, size } = styleFor(prof, t.instrumentId, chord, intensity, resolvedStyle);
          const avoid = occupied.get(a.bar);
          pitches = voiceChord({
            chord, profile: prof, style, size,
            previous: mem.last,
            intensity,
            bassCovered: hasBass,
            avoid,
            seed: seedOf(t.id, a.bar, a.onsetIndex, 'voice'),
            rhythmicContext,
            approach: resolvedStyle.contract.approaches?.[t.role]?.id,
          });
          mem.last = pitches;
          mem.lastNote = pitches[pitches.length - 1] ?? mem.lastNote;
          const acc = occupied.get(a.bar) ?? [];
          occupied.set(a.bar, acc.concat(pitches));
        }
      }


      const shift = decision?.register ?? 0;
      if (shift) {
        pitches = pitches.map(n => {
          const moved = n + shift;
          return moved >= prof.low && moved <= prof.high ? moved : n;
        });
      }

      /* ---- realization ---------------------------------------------------
         Up to this point the engine has decided *what* to play. Everything
         from here decides *how* it is played, and it all goes through one
         path: the articulation stack for this bar is resolved once, and the
         articulation engine turns each written attack into the notes, bends
         and CC messages the sampler actually receives.

         The stack is layered, lowest priority first:
           1. the world contract's articulation grammar for this role
           2. the pattern's own authored articulations
           3. the chosen variant's articulation
         so a style-level "marcato" is overridden by a cell that says
         "arrastre", which is overridden by a cadence variant that says "fall".
      ------------------------------------------------------------------- */
      const grammarArticulations =
        resolvedStyle.contract.articulationGrammar[prof.role]
        ?? resolvedStyle.contract.articulationGrammar[String(t.role)]
        ?? resolvedStyle.contract.articulationGrammar.ensemble
        ?? [];
      const specs: ArticulationSpec[] = resolveArticulationStack([
        grammarArticulations[0],
        ...(a.articulations ?? []),
        a.articulation,
        // Culturally authored ornaments and the improvisation grammar's rapid
        // run are ordinary articulations now, not a parallel code path.
        ...(culture ? (resolvedStyle.melody?.ornamentVocabulary ?? []).slice(0, 1) : []),
        rapidRun ? 'rapid-run' : undefined,
      ]);

      const activePitchSet = culture
        ? culturalPitchSet(culture, culturalTonicPc)
        : (rapidRunScalePcs ?? key.pcs);

      pitches.forEach((midi, vi) => {
        // A chord is rolled, not struck simultaneously: struck and plucked
        // instruments spread more than bowed or blown ones.
        const rollMs = prof.sustain === 'decaying' || prof.sustain === 'short'
          ? vi * (1.6 + rand01(seedOf(t.id, a.bar, a.onsetIndex, vi)) * 2.4)
          : vi * 0.6;
        const voiceTime = time + (rollMs * humanScale) / 1000;

        // Ornaments belong to the voice that carries the line, not to every
        // note of a voicing — otherwise a four-note piano chord grows four
        // grace notes.
        const voiceSpecs = vi === 0 ? specs : specs.filter(x => x.family === 'duration' || x.family === 'attack');

        const realized = realizeArticulation({
          specs: voiceSpecs,
          profile: prof,
          midi,
          velocity: Math.max(6, Math.min(127, Math.round(vel * (vi > 0 && vi < pitches.length - 1 ? 0.88 : 1)))),
          lengthBeats: lenBeats,
          gapBeats,
          beatsPerBar: bt.beatsPerBar,
          secPerBeat,
          time: voiceTime,
          pitchSet: activePitchSet,
          expression: expressionAmount,
          context: rhythmicContext,
          seed: seedOf(t.id, a.bar, a.onsetIndex, vi, 'art'),
        });

        if (realized.presetTag && vi === 0) presetTagByChannel.set(channel, realized.presetTag);

        // Genre-native pitch idioms that depend on harmonic context rather than
        // on a written articulation. These are additive: if the articulation
        // stack already produced a bend, the idiom does not fight it.
        const idiomBend = vi === 0
          ? (isBass
            ? bassPitchBend({ midi, context: rhythmicContext, profile: prof, genreId: resolvedStyle.primaryGenre, role: t.role, seed: seedOf(t.id, a.bar, a.onsetIndex, 'bend') })
            : (isMelodic
              ? melodyPitchBend({ midi, context: rhythmicContext, profile: prof, genreId: resolvedStyle.primaryGenre, role: t.role, chord, key, seed: seedOf(t.id, a.bar, a.onsetIndex, 'bend') })
              : undefined))
          : undefined;

        realized.notes.forEach((n, ni) => {
          notes.push({
            time: n.time,
            dur: n.durSeconds,
            midi: n.midi,
            pitchBend: n.pitchBend ?? (ni === 0 ? idiomBend : undefined),
            vel: n.velocity,
            channel, trackId: t.id, bar: a.bar,
          });
        });
        for (const cc of realized.ccs) {
          ccs.push({ time: cc.time, channel, cc: cc.cc, value: cc.value });
        }
      });
    }
  }

  /* ---- 4. channel setup: program, level, position, space ---- */
  const finalStyle = resolveStyle({ genreId: sheet.worldId, styleId: sheet.styleId ?? getCanonicalStyle(sheet.worldId).id });
  const room = roomForStyle(finalStyle);
  for (const t of tracks) {
    const channel = channelOf[t.id];
    if (channel === undefined) continue;
    const def = INSTRUMENTS_BY_ID[t.instrumentId];
    if (!def) continue;
    const prof = voiceProfile(t.instrumentId);
    const drum = !!(def.kit || def.drum);

    // The articulation engine may have asked for a different sampled preset
    // (pizzicato, muted, brush). resolvePreset answers with a General MIDI
    // program and says whether it had to fall back to the instrument's own.
    const preset = resolvePreset({
      instrumentId: t.instrumentId,
      articulationTag: presetTagByChannel.get(channel),
    });
    programs.push({
      time: 0,
      channel,
      program: drum ? 0 : preset.program,
      drum,
    });

    const trim = Math.pow(10, prof.trim / 20);
    const level = Math.max(0, Math.min(1, (t.muted ? 0 : t.volume) * trim));
    ccs.push({ time: 0, channel, cc: 7, value: Math.round(Math.pow(level, 0.6) * 127) });
    ccs.push({ time: 0, channel, cc: 10, value: Math.round((prof.pan * 0.5 + 0.5) * 127) });
    const wet = Math.max(0, Math.min(1, prof.space * room.space));
    ccs.push({ time: 0, channel, cc: 91, value: Math.round(wet * 127) });
    ccs.push({ time: 0, channel, cc: 93, value: Math.round(wet * 40) });
    ccs.push({ time: 0, channel, cc: 74, value: 64 });
    // CC11 rests at full and is modulated per note by the articulation engine.
    // Pinning it to 127 and never touching it again is what made every long
    // note a flat block of sound.
    ccs.push({ time: 0, channel, cc: 11, value: 127 });
    // Ask the synth for a two-semitone bend range explicitly (RPN 0). Without
    // it, the range is whatever the bank happens to declare, and a scoop that
    // should be a semitone can arrive as a fifth.
    ccs.push({ time: 0, channel, cc: 101, value: 0 });
    ccs.push({ time: 0, channel, cc: 100, value: 0 });
    ccs.push({ time: 0, channel, cc: 6, value: 2 });
    ccs.push({ time: 0, channel, cc: 38, value: 0 });
  }

  /* ---- 5. automation: the mix follows the arrangement ---- */
  for (const t of tracks) {
    const channel = channelOf[t.id];
    if (channel === undefined || t.muted) continue;
    const prof = voiceProfile(t.instrumentId);
    for (const r of sheet.regions) {
      const d = decisions.get(`${t.id}|${r.id}`);
      if (!d) continue;
      const firstBar = bars[r.start];
      if (!firstBar) continue;
      const at = Math.max(0, firstBar.start - 0.03);
      ccs.push({ time: at, channel, cc: 74, value: Math.round(d.brightness) });
      ccs.push({
        time: at, channel, cc: 91,
        value: Math.round(Math.max(0, Math.min(127, prof.space * room.space * d.wet * 127))),
      });

      // A section that is building should get louder across its own length,
      // not step up at the boundary and sit flat. Three CC7 points give the
      // shape without needing per-note automation.
      const lastBar = bars[Math.max(r.start, r.end - 1)];
      if (lastBar && r.end - r.start >= 4) {
        const trimLin = Math.pow(10, prof.trim / 20);
        const base = Math.max(0, Math.min(1, (t.muted ? 0 : t.volume) * trimLin));
        const shape = shapeScalarOf(r);
        const swell = (isBuildSection(sheet.regions, r) ? 0.12 : -0.03) * liftAmount;
        const span = lastBar.end - firstBar.start;
        const points: [number, number][] = [
          [firstBar.start, base * (1 - swell * 0.5)],
          [firstBar.start + span * 0.6, base * (1 + swell * 0.35 + shape * 0.04)],
          [lastBar.end - 0.05, base * (1 + swell)],
        ];
        for (const [when, value] of points) {
          ccs.push({
            time: Math.max(0, when),
            channel,
            cc: 7,
            value: Math.round(Math.pow(Math.max(0, Math.min(1, value)), 0.6) * 127),
          });
        }
      }
    }
  }

  const sortedNotes = notes.sort((a, b) => a.time - b.time);
  // Clean overlap resolution: never let an active voice get prematurely killed
  // by a previous note's noteOff arriving after a new note starts on the same pitch/channel.
  //
  // Clamping the trimmed length to a 20 ms floor is not enough: when two
  // attacks on the same pitch land closer together than that floor — which
  // rolls, flams and dense ornaments routinely do — the trimmed note still
  // runs past the next note-on, and the sampler's note-off kills the wrong
  // voice. Anything that close is dropped instead, keeping the louder of the
  // two so a ghost never silences an accent.
  const MIN_GAP = 0.008;
  const dropped = new Set<number>();
  const lastNoteIndexByPitch = new Map<string, number>();
  for (let idx = 0; idx < sortedNotes.length; idx++) {
    const n = sortedNotes[idx];
    const key = `${n.channel}:${n.midi}`;
    const prevIdx = lastNoteIndexByPitch.get(key);
    if (prevIdx !== undefined) {
      const prev = sortedNotes[prevIdx];
      const available = n.time - prev.time - MIN_GAP;
      if (available < 0.02) {
        // Too close to sound as two notes at all.
        if (n.vel > prev.vel) {
          dropped.add(prevIdx);
        } else {
          dropped.add(idx);
          continue;
        }
      } else if (prev.time + prev.dur > n.time - MIN_GAP) {
        prev.dur = available;
      }
    }
    lastNoteIndexByPitch.set(key, idx);
  }
  const playable = dropped.size ? sortedNotes.filter((_, i) => !dropped.has(i)) : sortedNotes;

  const lastNote = playable.reduce((m, n) => Math.max(m, n.time + n.dur), 0);
  const songEnd = bars[bars.length - 1]?.end ?? 0;
  return {
    notes: playable,
    ccs: ccs.sort((a, b) => a.time - b.time), programs, bars,
    duration: songEnd,
    channelOf, drumChannels,
    tail: Math.max(0.6, lastNote - songEnd + 0.4),
    blends: blendReports,
  };
}
