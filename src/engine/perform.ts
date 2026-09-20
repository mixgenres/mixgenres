import { Sheet, Voice } from './arrange';
import { Measure, Region } from '../types';
import { INSTRUMENTS_BY_ID, effectiveSoundfontPreset } from '../data/instruments';
import { PATTERNS_BY_ID } from '../data/genreData';
import { voiceProfile, noteLengthBeats, foldToRange, VoiceProfile } from './instrumentProfile';
import { grooveForStyle, applyFeel, seedOf, rand01, GrooveProfile, GrooveRole } from './groove';
import { parseChord, inferKey, KeyInfo } from './theory';
import { getResolvedSectionStyle } from './arrange';
import { voiceChord, styleFor } from './voicing';
import { bassNote, bassStyleForStyle, BassStyle } from './bass';
import { makeMotif, melodyGate, melodyNote, treatmentFor, Motif, MelodyTreatment, generateStyleOrnaments } from './melody';
import { GM, kitVoicing, handPercVoicing, flavourForStyle, usesRideStyle, KitVoicing } from './drums';
import { roomForStyle } from './mixer';
import { decide, shapeOf, ArrangementDecision, SectionShape } from './arrangement';
import { beatsPerBarOf, type NativeSlice } from './grid';
import { getEffectiveBpm } from './arrange';
import { culturalRules, culturalPitchSet, culturalDronePitch, isCulturalWorld, shoCluster, celticOpenHarmony } from './cultural';
import { resolveStyle } from '../data/styles/resolve';
import { getCanonicalStyle } from '../data/styles/registry';

/* --- event model ---------------------------------------------------------- */

export interface PerfNote {
  /** seconds from the start of the song */
  time: number;
  /** seconds */
  dur: number;
  midi: number;
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
  bankMSB?: number;
  bankLSB?: number;
  soundfontId?: string;
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
}

export interface CompileOptions {
  /** 0..1, how exaggerated the genre's feel is. 0.5 is "as intended". */
  pocket?: number;
  /** 0..1, how much the arrangement leans on section dynamics */
  lift?: number;
  /** master humanization scale, 0..1 */
  humanize?: number;
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



function nearestCulturalNeighbor(target: number, pcs: number[], direction: -1 | 1): number {
  const options: number[] = [];
  for (const pc of pcs) for (let o = -12; o <= 12; o++) options.push(pc + o * 12);
  const filtered = options.filter(n => direction > 0 ? n < target : n > target);
  if (!filtered.length) return target + direction;
  return filtered.reduce((best, n) => {
    const bd = Math.abs(best - target), nd = Math.abs(n - target);
    return nd < bd ? n : best;
  }, filtered[0]);
}

interface CulturalOrnamentNote {
  midi: number;
  timeOffsetBeats: number;
  durBeats: number;
  velocityMult: number;
}

function culturalOrnaments(
  _patternId: string | undefined,
  articulation: string | undefined,
  target: number,
  culture: ReturnType<typeof culturalRules>,
  tonicPc: number,
  profile: VoiceProfile,
  seed: number,
): CulturalOrnamentNote[] {
  if (!culture) return [];
  const art = (articulation ?? '').toLowerCase();
  const pcs = culturalPitchSet(culture, tonicPc);
  const out: CulturalOrnamentNote[] = [];
  const upper = nearestCulturalNeighbor(target, pcs, 1);
  const lower = nearestCulturalNeighbor(target, pcs, -1);

  if (/roll/.test(art)) {
    out.push({ midi: upper, timeOffsetBeats: -0.16, durBeats: 0.045, velocityMult: 0.32 });
    out.push({ midi: target, timeOffsetBeats: -0.10, durBeats: 0.05, velocityMult: 0.42 });
    out.push({ midi: lower, timeOffsetBeats: -0.045, durBeats: 0.04, velocityMult: 0.28 });
  } else if (/cut|grace/.test(art)) {
    out.push({ midi: upper, timeOffsetBeats: -0.09, durBeats: 0.045, velocityMult: 0.34 });
  } else if (/turn/.test(art)) {
    out.push({ midi: lower, timeOffsetBeats: -0.16, durBeats: 0.05, velocityMult: 0.28 });
    out.push({ midi: upper, timeOffsetBeats: -0.08, durBeats: 0.045, velocityMult: 0.34 });
  } else if (/glissando|portamento/.test(art)) {
    out.push({ midi: seed & 1 ? lower : upper, timeOffsetBeats: -0.20, durBeats: 0.07, velocityMult: 0.30 });
  } else if (/oshide|pitch bend|bend/.test(art)) {
    out.push({ midi: lower, timeOffsetBeats: -0.12, durBeats: 0.05, velocityMult: 0.28 });
  } else if (/hua yin|slide|gliss/.test(art)) {
    out.push({ midi: seed & 1 ? upper : lower, timeOffsetBeats: -0.11, durBeats: 0.055, velocityMult: 0.30 });
  } else if (/fan yin|harmonic point|harmonic/.test(art)) {
    out.push({ midi: foldToRange(target + 12, profile), timeOffsetBeats: -0.02, durBeats: 0.04, velocityMult: 0.20 });
  }
  return out;
}

export function compile(sheet: Sheet, opts: CompileOptions = {}): Performance {
  const pocketAmount = opts.pocket ?? 0.5;
  const liftAmount = opts.lift ?? 0.5;
  const humanScale = opts.humanize ?? 1;

  const bars = buildBarTimes(sheet);
  const tracks = sheet.tracks as Voice[];
  const { channelOf, drumChannels } = allocateChannels(tracks);
  const regionById = new Map(sheet.regions.map(r => [r.id, r]));

  const notes: PerfNote[] = [];
  const ccs: PerfCC[] = [];
  const programs: PerfProgram[] = [];

  if (!bars.length || !tracks.length) {
    return { notes, ccs, programs, bars, duration: 0, channelOf, drumChannels, tail: 0 };
  }

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
      const perf = (d as any).perf as NativeSlice | undefined;
      const onsets = perf?.onsets ?? d.onsetGrid ?? [];
      if (!onsets.length) continue;
      const stepsPerBar = perf?.stepsPerBar ?? 16;
      const accents = perf?.accents ?? d.accentProfile ?? [];
      const durations = perf?.durations ?? d.durationGrid ?? [];
      const micro = perf?.microtiming ?? [];
      const hitTypes = perf?.hitTypes ?? [];

      const def = INSTRUMENTS_BY_ID[t.instrumentId];
      if (!def) continue;
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
      decisions.set(`${t.id}|${r.id}`, decide(t, prof, shape, liftAmount, bandSize));
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
    const baseResolvedStyle = resolveStyle({ genreId: sheet.worldId, styleId: sheet.styleId ?? getCanonicalStyle(sheet.worldId).id });

    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      const bt = bars[a.bar];
      if (!bt) continue;
      const region = regionById.get(bt.regionId);
      const regionGenreId = region?.genre ?? sheet.worldId;
      const resolvedStyle = region
        ? getResolvedSectionStyle(sheet, region)
        : resolveStyle({ genreId: regionGenreId, styleId: getCanonicalStyle(regionGenreId).id });
      const regionStyleId = resolvedStyle.id;
      const g: GrooveProfile = grooveForStyle(resolvedStyle);
      const bassStyle: BassStyle = bassStyleForStyle(resolvedStyle, t.instrumentId);
      const effectiveArticulation = a.articulation ?? resolvedStyle.contract.articulationGrammar[prof.role]?.[0] ?? resolvedStyle.contract.articulationGrammar.ensemble?.[0];
      const intensityRaw = intensityOf(region);
      // lift 0 flattens every section to the same weight, 1 exaggerates
      const intensity = 0.55 + (intensityRaw - 0.55) * (0.3 + liftAmount * 1.4);

      const decision = decisions.get(`${t.id}|${bt.regionId}`);
      if (decision && !decision.plays) continue;

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
      const time = bt.start + (a.beatInBar + feel.offsetBeats) * secPerBeat + jitterSec;

      const next = list[i + 1];
      let gapBeats = 4;
      if (next) {
        gapBeats = (next.bar - a.bar) * bt.beatsPerBar + next.beatInBar - a.beatInBar;
        if (gapBeats <= 0) gapBeats = 0.25;
      }
      const authoredBeats = (a.durationSteps / a.stepsPerBar) * bt.beatsPerBar;
      const lenBeats = noteLengthBeats(prof, Math.max(0.05, authoredBeats), gapBeats, effectiveArticulation);
      const dur = Math.max(0.03, lenBeats * secPerBeat);

      const base = 84 + (intensity - 0.55) * 46;
      const vel = Math.max(6, Math.min(127, Math.round(
        base * feel.velocityMult * (decision?.drive ?? 1),
      )));

      if (def.kit || def.drum) {
        const regionStart = region?.start ?? 0;
        const regionEnd = region?.end ?? regionStart + 1;
        const barInPhrase = (a.bar - regionStart + 64) % 4;
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
            phraseEnd: barInPhrase === 3,
            flavour: flavourForStyle(resolvedStyle, t.instrumentId),
            rideFeel: usesRideStyle(resolvedStyle, String(region?.kind ?? 'verse'), intensity),
            seed: seedOf(t.id, a.bar, a.onsetIndex, 'kit'),
          });
        } else {
          kv = handPercVoicing(def.drum!, a.accent, intensity, seedOf(t.id, a.bar, a.onsetIndex, 'perc'), a.hitType);
        }

        const drumBase = 100 + (intensity - 0.55) * 40;
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
        const { note: n, isLeap } = melodyNote({
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
          pitchSet: culture ? culturalPitchSet(culture, culturalTonicPc) : undefined,
          tonicPc: culture ? culturalTonicPc : undefined,
          snapToChord: culture ? culture.snapToChord : resolved.melody?.snapToChord,
          rangePerSection: resolved.melody?.rangePerSection,
          chordToneTargeting: resolved.melody?.chordToneTargeting,
          callAndResponse: resolved.melody?.callAndResponse,
          heterophonic: resolved.melody?.heterophonic,
          wasLeap: (mem as any).wasLeap,
        });
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

      pitches.forEach((midi, vi) => {
        if (vi === 0) {
          if (culture) {
            const ornaments = culturalOrnaments(
              a.patternId, effectiveArticulation, midi, culture, culturalTonicPc, prof,
              seedOf(t.id, a.bar, a.onsetIndex, 'ornament'),
            );
            ornaments.forEach(o => notes.push({
              time: time + o.timeOffsetBeats * secPerBeat,
              dur: Math.max(0.02, o.durBeats * secPerBeat),
              midi: o.midi,
              vel: Math.max(4, Math.min(127, Math.round(vel * o.velocityMult))),
              channel, trackId: t.id, bar: a.bar,
            }));
          } else {
            const resolved = resolvedStyle;
            const ornaments = generateStyleOrnaments(
              midi,
              a.beatInBar,
              a.patternId,
              effectiveArticulation,
              resolved.melody?.ornamentVocabulary,
              key.pcs,
              prof,
              seedOf(t.id, a.bar, a.onsetIndex, 'style-ornament'),
            );
            ornaments.forEach(o => notes.push({
              time: time + o.timeOffsetBeats * secPerBeat,
              dur: Math.max(0.02, o.durBeats * secPerBeat),
              midi: o.midi,
              vel: Math.max(4, Math.min(127, Math.round(vel * o.velocityMult))),
              channel, trackId: t.id, bar: a.bar,
            }));
          }
        }
        const rollMs = prof.sustain === 'decaying' || prof.sustain === 'short'
          ? vi * (1.6 + rand01(seedOf(t.id, a.bar, a.onsetIndex, vi)) * 2.4)
          : vi * 0.6;
        notes.push({
          time: time + (rollMs * humanScale) / 1000,
          dur,
          midi,
          vel: Math.max(6, Math.min(127, Math.round(vel * (vi > 0 && vi < pitches.length - 1 ? 0.88 : 1)))),
          channel, trackId: t.id, bar: a.bar,
        });
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

    const preset = !drum ? effectiveSoundfontPreset(t.instrumentId) : null;
    programs.push({ time: 0, channel, program: preset?.program ?? (drum ? 0 : def.program ?? 0), bankMSB: preset?.bankMSB, bankLSB: preset?.bankLSB, soundfontId: preset?.soundfontId, drum });

    const trim = Math.pow(10, prof.trim / 20);
    const level = Math.max(0, Math.min(1, (t.muted ? 0 : t.volume) * trim));
    ccs.push({ time: 0, channel, cc: 7, value: Math.round(Math.pow(level, 0.6) * 127) });
    ccs.push({ time: 0, channel, cc: 10, value: Math.round((prof.pan * 0.5 + 0.5) * 127) });
    const wet = Math.max(0, Math.min(1, prof.space * room.space));
    ccs.push({ time: 0, channel, cc: 91, value: Math.round(wet * 127) });
    ccs.push({ time: 0, channel, cc: 93, value: Math.round(wet * 40) });
    ccs.push({ time: 0, channel, cc: 74, value: 64 });
    ccs.push({ time: 0, channel, cc: 11, value: 127 });
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
    }
  }

  const sortedNotes = notes.sort((a, b) => a.time - b.time);
  // Clean overlap resolution: never let an active voice get prematurely killed
  // by a previous note's noteOff arriving after a new note starts on the same pitch/channel.
  const lastNoteIndexByPitch = new Map<string, number>();
  for (let idx = 0; idx < sortedNotes.length; idx++) {
    const n = sortedNotes[idx];
    const key = `${n.channel}:${n.midi}`;
    const prevIdx = lastNoteIndexByPitch.get(key);
    if (prevIdx !== undefined) {
      const prev = sortedNotes[prevIdx];
      if (prev.time + prev.dur > n.time - 0.006) {
        prev.dur = Math.max(0.02, n.time - prev.time - 0.006);
      }
    }
    lastNoteIndexByPitch.set(key, idx);
  }

  const lastNote = sortedNotes.reduce((m, n) => Math.max(m, n.time + n.dur), 0);
  const songEnd = bars[bars.length - 1]?.end ?? 0;
  return {
    notes: sortedNotes,
    ccs: ccs.sort((a, b) => a.time - b.time), programs, bars,
    duration: songEnd,
    channelOf, drumChannels,
    tail: Math.max(0.6, lastNote - songEnd + 0.4),
  };
}
