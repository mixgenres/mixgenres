import { VoiceProfile, foldToRange } from './instrumentProfile';

export type CulturalHarmonyModel = 'functional' | 'modal-drone' | 'heterophonic' | 'fixed-cluster';

export interface CulturalRules {
  genreId: string;
  styleId: string;
  harmonyModel: CulturalHarmonyModel;
  /** Pitch intervals above the style's tonal center, in 12-TET approximation. */
  pitchIntervals: number[];
  /** Do not snap melody notes to Western chord tones. */
  snapToChord: boolean;
  /** Preserve pattern-authored timing instead of imposing a generic groove template. */
  authoredTimingOnly: boolean;
  /** Whether melodic layers should shadow a shared phrase with ornament/density changes. */
  heterophonic: boolean;
  /** Keep the default output sparse enough for the style to speak. */
  avoidBassFoundation: boolean;
}

const CHINESE_GUQIN: CulturalRules = {
  genreId: 'chinese-traditional',
  styleId: 'chinese-traditional-guqin',
  harmonyModel: 'modal-drone',
  // Common zheng-diao reference set: 1 2 4 5 6. Rendered here as a relative pitch set.
  pitchIntervals: [0, 2, 5, 7, 9],
  snapToChord: false,
  authoredTimingOnly: true,
  heterophonic: false,
  avoidBassFoundation: true,
};

const CHINESE_SIZHU: CulturalRules = {
  genreId: 'chinese-traditional',
  styleId: 'chinese-traditional-silk-bamboo',
  harmonyModel: 'heterophonic',
  // Anhemitonic pentatonic starting from the shared ensemble center.
  pitchIntervals: [0, 2, 4, 7, 9],
  snapToChord: false,
  authoredTimingOnly: false,
  heterophonic: true,
  avoidBassFoundation: true,
};

const CHINESE_XIQU: CulturalRules = {
  genreId: 'chinese-traditional',
  styleId: 'chinese-traditional-opera',
  harmonyModel: 'heterophonic',
  pitchIntervals: [0, 2, 4, 7, 9],
  snapToChord: false,
  authoredTimingOnly: false,
  heterophonic: true,
  avoidBassFoundation: true,
};

const JAPANESE_GAGAKU: CulturalRules = {
  genreId: 'japanese-traditional',
  styleId: 'japanese-traditional-gagaku',
  harmonyModel: 'fixed-cluster',
  // Ryo-class approximation: D Mixolydian-like interval set used for the engine's modal scaffold.
  pitchIntervals: [0, 2, 4, 5, 7, 9, 10],
  snapToChord: false,
  authoredTimingOnly: true,
  heterophonic: true,
  avoidBassFoundation: true,
};

const JAPANESE_SHAMISEN: CulturalRules = {
  genreId: 'japanese-traditional',
  styleId: 'japanese-traditional-shamisen',
  harmonyModel: 'heterophonic',
  // Yo/min'yō-family pentatonic scaffold; ornamentation supplies much of the expressive identity.
  pitchIntervals: [0, 2, 5, 7, 9],
  snapToChord: false,
  authoredTimingOnly: false,
  heterophonic: true,
  avoidBassFoundation: true,
};

const JAPANESE_SHAKUHACHI: CulturalRules = {
  genreId: 'japanese-traditional',
  styleId: 'japanese-traditional-shakuhachi',
  harmonyModel: 'modal-drone',
  // Traditional honkyoku is lineage-specific and often unmetered; this is a 12-TET pentatonic scaffold, not a claim of exact school tuning.
  pitchIntervals: [0, 2, 4, 7, 9],
  snapToChord: false,
  authoredTimingOnly: true,
  heterophonic: false,
  avoidBassFoundation: true,
};

const JAPANESE_KOTO: CulturalRules = {
  genreId: 'japanese-traditional',
  styleId: 'japanese-traditional-koto',
  harmonyModel: 'heterophonic',
  // Hira-jōshi-like scaffold for the default koto engine; real repertoire uses multiple chōshi.
  pitchIntervals: [0, 2, 3, 7, 8],
  snapToChord: false,
  authoredTimingOnly: false,
  heterophonic: true,
  avoidBassFoundation: true,
};


const CELTIC_STYLE_RULES: CulturalRules = {
  genreId: 'celtic-trad',
  styleId: 'celtic-trad-standard',
  harmonyModel: 'modal-drone',
  // Common Irish/Scottish modal practice is better represented as a modal pitch
  // collection plus drones/open fifths than as a functional major/minor grammar.
  pitchIntervals: [0, 2, 4, 5, 7, 9, 10],
  snapToChord: false,
  authoredTimingOnly: true,
  heterophonic: true,
  avoidBassFoundation: true,
};

const FALLBACK_CHINESE = CHINESE_SIZHU;
const FALLBACK_JAPANESE = JAPANESE_SHAMISEN;

export function culturalRules(genreId: string, styleId: string | undefined, instrumentId?: string): CulturalRules | undefined {
  if (genreId === 'chinese-traditional') {
    if (styleId === CHINESE_GUQIN.styleId || instrumentId === 'guqin') return CHINESE_GUQIN;
    if (styleId === CHINESE_XIQU.styleId || instrumentId === 'jinghu') return CHINESE_XIQU;
    return { ...FALLBACK_CHINESE, styleId: styleId ?? FALLBACK_CHINESE.styleId };
  }
  if (genreId === 'celtic-trad') return { ...CELTIC_STYLE_RULES, styleId: styleId ?? CELTIC_STYLE_RULES.styleId };
  if (genreId === 'japanese-traditional') {
    if (styleId === JAPANESE_GAGAKU.styleId || ['shō', 'ryuteki', 'hichiriki'].includes(instrumentId ?? '')) return JAPANESE_GAGAKU;
    if (styleId === JAPANESE_SHAKUHACHI.styleId || instrumentId === 'shakuhachi') return JAPANESE_SHAKUHACHI;
    if (styleId === JAPANESE_KOTO.styleId || instrumentId === 'koto') return JAPANESE_KOTO;
    return { ...FALLBACK_JAPANESE, styleId: styleId ?? FALLBACK_JAPANESE.styleId };
  }
  return undefined;
}

export function culturalDronePitch(rules: CulturalRules, tonicPc: number, profile: VoiceProfile, seed: number): number {
  const pc = rules.styleId === 'chinese-traditional-guqin'
    ? tonicPc
    : (seed & 1 ? (tonicPc + 7) % 12 : tonicPc);
  const centre = Math.round(profile.centre);
  const midi = pc + 12 * Math.round((centre - pc) / 12);
  return foldToRange(midi, profile);
}


/**
 * Celtic accompaniment is not reduced to a stack of Western thirds.  The
 * written chord can still describe the harmonic moment, but realization favors
 * root/fifth drones, octaves and occasional modal color from the style's
 * pitch collection. This keeps chord support available without making functional
 * harmony the organizing principle.
 */
export function celticOpenHarmony(
  rootPc: number,
  profile: VoiceProfile,
  intensity: number,
  seed: number,
): number[] {
  const centre = Math.round(profile.centre);
  const fifthPc = (rootPc + 7) % 12;
  const octave = (rootPc + 12) % 12;
  const candidates = [rootPc, fifthPc, octave];
  if (intensity > 0.68) candidates.push((rootPc + (seed & 1 ? 9 : 2)) % 12);
  const out = candidates.map((pc, i) => foldToRange(pc + 12 * Math.round((centre + (i === 0 ? -7 : i === 1 ? 0 : 7) - pc) / 12), profile));
  return [...new Set(out)].sort((a,b) => a-b);
}

export function isCulturalWorld(worldId: string): boolean {
  return worldId === 'chinese-traditional' || worldId === 'japanese-traditional' || worldId === 'celtic-trad';
}

export function culturalPitchSet(rules: CulturalRules, tonicPc: number): number[] {
  return rules.pitchIntervals.map(iv => (tonicPc + iv) % 12);
}

/**
 * Approximate the fixed shō sonority without asking the Western chord voicer for a triad/seventh chord.
 * This is intentionally a close cluster, not a claim that 12-TET reproduces an actual aitake tuning.
 */
export function shoCluster(tonicPc: number, profile: VoiceProfile, intensity: number): number[] {
  const centre = Math.round(profile.centre);
  const chosenIntervals = intensity > 0.72 ? [0, 2, 4, 7, 9] : [0, 2, 5, 7];
  const out = chosenIntervals.map(iv => {
    const pc = (tonicPc + iv) % 12;
    return pc + 12 * Math.round((centre + (iv >= 7 ? 5 : 0) - pc) / 12);
  });
  return out.map(n => foldToRange(n, profile)).sort((a, b) => a - b).filter((n, i, arr) => i === 0 || n !== arr[i - 1]);
}
