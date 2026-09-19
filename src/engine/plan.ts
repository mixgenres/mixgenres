import { ResolvedStyle, FormStepTemplate, RuleRef, GestureRule } from '../data/styles/schema';
import { resolveStyle } from '../data/styles/resolve';
import { getCanonicalStyle } from '../data/styles/registry';
import { KeyInfo, inferKey, transposeChordSymbol, chordTemplateInKey } from './theory';
import { GrooveProfile, rand01 } from './groove';
import { instrument } from '../data/instruments';
import { roleForInstrument } from './arrange';
import { Role, InstrumentKind } from '../types';
import { roomFor } from './mixer';
import { suggestedPaletteForGenre } from '../data/chordPalette';

export interface PlanSection {
  id: string;
  name: string;
  kind: string;
  formKey?: string;
  formLabel?: string;
  bars: number;
  intensity: 'low' | 'medium' | 'high' | 'peak';
  energy: number; // 0..1 continuous
  chords: string[];
  harmonicRhythm?: string;
  cadenceType?: string;
  suggestedDensity?: 'sparse' | 'normal' | 'busy';
}

export interface PlanVoice {
  id: string;
  instrumentId: string;
  name: string;
  role: Role;
  kind: InstrumentKind;
  volume: number;
}

export interface SongPlan {
  seed: number;
  genreId: string;
  styleId: string;
  style: ResolvedStyle;
  tempo: number;
  meter: string;
  key: KeyInfo;
  sections: PlanSection[];
  roster: PlanVoice[];
  groove: GrooveProfile;
  roomId: string;
  pocket: number;
  lift: number;
  energyCurve: number[];
  variationBudget: number; // 0..1 how much phrase/fill variation is allowed
  gestures: Record<string, GestureRule>;
  rules: { require: RuleRef[]; forbid: RuleRef[] };
}

/** Standard idiomatic keys when not specified by style */
const DEFAULT_KEYS: Record<string, string[]> = {
  tango: ['Am', 'Dm', 'Em', 'Gm', 'D', 'A'],
  salsa: ['Gm', 'Dm', 'Am', 'Cm', 'F', 'Bb'],
  timba: ['Fm', 'Cm', 'Gm', 'Dm', 'Eb', 'Ab'],
  flamenco: ['Am', 'Dm', 'E', 'A'],
  jazz: ['F', 'Bb', 'Eb', 'Ab', 'C', 'G', 'Dm', 'Fm'],
  blues: ['E', 'A', 'B', 'G', 'C', 'D'],
  rock: ['E', 'A', 'D', 'G', 'Em', 'Am'],
  'rock-en-espanol': ['Em', 'Am', 'Bm', 'D', 'G'],
  zouk: ['Gm', 'Dm', 'Am', 'Cm', 'Eb', 'Bb'],
  kizomba: ['Dm', 'Am', 'Gm', 'Fm', 'Cm'],
  funk: ['Em', 'Am', 'Dm', 'Gm', 'E7', 'A7'],
  metal: ['Em', 'Dm', 'Am', 'Bm', 'C#m', 'D#m'],
  bachata: ['Am', 'Dm', 'Em', 'Bm', 'C', 'G'],
  folk: ['G', 'C', 'D', 'Am', 'Em'],
  'hip-hop': ['Cm', 'Fm', 'Gm', 'Dm', 'Am', 'Ebm'],
  electronic: ['Fm', 'Cm', 'Am', 'Dm', 'Gm', 'Abm'],
  country: ['G', 'C', 'D', 'A', 'E'],
  swing: ['Bb', 'F', 'Eb', 'Ab', 'C', 'G'],
  'math-rock': ['D', 'E', 'A', 'F#m', 'B'],
  afrobeats: ['F#m', 'C#m', 'Abm', 'Ebm', 'Bbm', 'Am'],
  jpop: ['C', 'F', 'G', 'Am', 'Dm', 'Em', 'Eb'],
  'chinese-rock': ['Am', 'Em', 'Dm', 'C', 'G', 'F'],
  'fusion-ambient': ['Dm', 'Am', 'Em', 'Fm', 'Cm'],
  'chinese-traditional': ['D', 'G', 'C', 'A'],
  'japanese-traditional': ['D', 'A', 'E', 'G'],
  'reggaeton-dembow': ['Am', 'Dm', 'Em', 'Cm', 'Fm', 'Gm'],
  cumbia: ['Am', 'Dm', 'Em', 'Gm', 'C', 'G'],
  trova: ['Am', 'Dm', 'Em', 'E', 'A', 'D'],
  folclorico: ['Am', 'Em', 'Dm', 'G', 'C'],
  'house-techno': ['Am', 'Dm', 'Fm', 'Cm', 'Gm'],
  'reggae-dub': ['Am', 'Gm', 'Dm', 'Em', 'C', 'G'],
  ska: ['C', 'G', 'F', 'Bb', 'Am', 'Dm'],
  'samba-bossa': ['Dm', 'Am', 'Em', 'Gm', 'F', 'C', 'D'],
  'celtic-trad': ['D', 'G', 'A', 'Edor', 'Ador'],
};

/** Convert intensity label to numerical energy */
function intensityToEnergy(intensity: 'low' | 'medium' | 'high' | 'peak'): number {
  switch (intensity) {
    case 'low': return 0.25;
    case 'medium': return 0.55;
    case 'high': return 0.8;
    case 'peak': return 1.0;
  }
}

/**
 * Plan a complete song from the ground up using the resolved SongStyle.
 * Everything downstream (regions, chords, tempo, roster, groove, CCs)
 * derives deterministically from this plan.
 */
export function planSong(
  genreId: string,
  styleId?: string,
  seed: number = 42
): SongPlan {
  const targetStyleId = styleId || getCanonicalStyle(genreId).id;
  const resolved = resolveStyle({ genreId, styleId: targetStyleId });
  const rng = (offset: number) => rand01(seed + offset * 1013);

  // 1. TEMPO: Sample from style range deterministically
  let tempo = resolved.rhythm.defaultBpm;
  if (resolved.rhythm.tempoRange) {
    const [minBpm, maxBpm] = resolved.rhythm.tempoRange;
    const t = rng(1);
    tempo = Math.round(minBpm + t * (maxBpm - minBpm));
  }

  // 2. METER: From style rhythm grammar
  const meter = resolved.rhythm.meter || '4/4';

  // 3. KEY SELECTION
  let chosenKeyName = 'Am';
  const keyPolicy = resolved.harmony.modePolicy;
  const idiomaticKeys = DEFAULT_KEYS[genreId] || ['Am', 'Dm', 'Em', 'C', 'G'];
  
  if (keyPolicy === 'minor-only') {
    const minors = idiomaticKeys.filter(k => k.endsWith('m'));
    const pool = minors.length > 0 ? minors : ['Am', 'Dm', 'Em'];
    chosenKeyName = pool[Math.floor(rng(2) * pool.length) % pool.length];
  } else if (keyPolicy === 'major-only') {
    const majors = idiomaticKeys.filter(k => !k.endsWith('m'));
    const pool = majors.length > 0 ? majors : ['C', 'G', 'D', 'F'];
    chosenKeyName = pool[Math.floor(rng(2) * pool.length) % pool.length];
  } else {
    chosenKeyName = idiomaticKeys[Math.floor(rng(2) * idiomaticKeys.length) % idiomaticKeys.length];
  }

  const baseKeyInfo = inferKey([chosenKeyName]);

  // 4. FORM SELECTION: Choose form template from style
  const templates = resolved.form.templates;
  let chosenTemplate: FormStepTemplate[] = [];

  if (templates && templates.length > 0) {
    const totalWeight = templates.reduce((acc, t) => acc + (t.w ?? 1), 0);
    let randVal = rng(3) * totalWeight;
    for (const t of templates) {
      randVal -= (t.w ?? 1);
      if (randVal <= 0) {
        chosenTemplate = t.value;
        break;
      }
    }
    if (chosenTemplate.length === 0) {
      chosenTemplate = templates[0].value;
    }
  }

  if (chosenTemplate.length === 0) {
    // Fallback standard 4-section form
    chosenTemplate = [
      { key: 'intro', label: 'Intro', kind: 'intro', bars: 4, intensity: 'low' },
      { key: 'verse-1', label: 'Verse 1', kind: 'verse', bars: 8, intensity: 'medium' },
      { key: 'chorus-1', label: 'Chorus 1', kind: 'chorus', bars: 8, intensity: 'high' },
      { key: 'verse-2', label: 'Verse 2', kind: 'verse', bars: 8, intensity: 'medium' },
      { key: 'chorus-2', label: 'Chorus 2', kind: 'chorus', bars: 8, intensity: 'peak' },
      { key: 'outro', label: 'Outro', kind: 'outro', bars: 4, intensity: 'low' },
    ];
  }

  // 5. HARMONY: choose reusable four-chord cells from the catalog.
  const chordCells = suggestedPaletteForGenre(genreId).map(cell => cell.chords as string[]);


  const sections: PlanSection[] = chosenTemplate.map((step, idx) => {
    const cell = chordCells[idx % Math.max(1, chordCells.length)] ?? ['C','G','Am','F'];
    const rawChords = chordTemplateInKey(cell, baseKeyInfo);

    const energy = intensityToEnergy(step.intensity);
    const density: 'sparse' | 'normal' | 'busy' = 
      step.intensity === 'low' ? 'sparse' : (step.intensity === 'peak' ? 'busy' : 'normal');

    return {
      id: `r${idx}`,
      name: step.label,
      kind: step.kind,
      formKey: step.key,
      formLabel: step.label,
      bars: step.bars,
      intensity: step.intensity,
      energy,
      chords: rawChords,
      suggestedDensity: density,
    };
  });

  // 6. ROSTER: 5 identity-carrying voices from style ensemble/palette
  const palette = resolved.sound.instrumentPalette?.map(p => p.value) ?? [];
  const ensemble = resolved.arrangement.ensemble ?? [];
  const defaultRosterMap: Record<string, string[]> = {
    tango: ['bandoneon', 'violin', 'piano', 'upright-bass', 'acoustic-guitar'],
    salsa: ['timbales', 'congas', 'piano', 'upright-bass', 'trumpet'],
    zouk: ['drums', 'synth-bass', 'rhodes', 'electric-guitar', 'synth-lead'],
    kizomba: ['drums', 'synth-bass', 'piano', 'synth-lead', 'warm-pad'],
    'reggaeton-dembow': ['drums', 'synth-bass', 'piano', 'synth-lead', 'marimba'],
    jazz: ['drums', 'upright-bass', 'piano', 'sax', 'electric-guitar'],
  };

  let chosenInstruments: string[] = [];
  if (ensemble.length >= 3) {
    chosenInstruments = ensemble.slice(0, 5).map(e => e.instrumentIds[0]);
  } else if (palette.length >= 3) {
    chosenInstruments = palette.slice(0, 5);
  } else {
    chosenInstruments = defaultRosterMap[genreId] || ['drums', 'electric-bass', 'piano', 'electric-guitar', 'synth-lead'];
  }

  // A style owns its ensemble. Never pad it with generic instruments: doing
  // so was a major source of culturally incorrect six-piece/genre-blended
  // arrangements. Styles are capped at five voices, but may intentionally use
  // fewer when the tradition calls for a sparse ensemble.
  const uniqueInstruments: string[] = [];
  for (const inst of chosenInstruments) {
    if (!uniqueInstruments.includes(inst) && uniqueInstruments.length < 5) {
      uniqueInstruments.push(inst);
    }
  }

  const roster: PlanVoice[] = uniqueInstruments.map((instrumentId, i) => {
    const def = instrument(instrumentId);
    return {
      id: `v${i}`,
      instrumentId,
      name: def.name,
      role: roleForInstrument(instrumentId),
      kind: instrumentId as any,
      volume: 0.85,
    };
  });

  // 7. GROOVE PROFILE
  const groove: GrooveProfile = {
    id: resolved.id,
    name: resolved.name,
    swing: 0.5 + (resolved.rhythm.swingPercentage ?? 0) * 0.167,
    swingUnit: 16,
    lean: 0,
    roleLean: {},
    humanizeMs: resolved.rhythm.humanizeJitterMs ?? 8,
    humanizeVel: 0.08,
    accentDepth: 0.5,
    anticipationMs: 0,
    dynamicRange: 1.1,
    description: resolved.summary ?? resolved.name,
  };

  // 8. SOUND & MIX PROFILE
  const roomId = resolved.sound.masterProfile?.roomId || roomFor(genreId).id;
  const pocket = resolved.sound.masterProfile?.pocket ?? 0.5;
  const lift = resolved.sound.masterProfile?.lift ?? 0.5;

  const energyCurve = sections.map(s => s.energy);
  const variationBudget = resolved.kind === 'canonical' ? 0.25 : 0.4;

  return {
    seed,
    genreId,
    styleId: resolved.id,
    style: resolved,
    tempo,
    meter,
    key: baseKeyInfo,
    sections,
    roster,
    groove,
    roomId,
    pocket,
    lift,
    energyCurve,
    variationBudget,
    gestures: resolved.gestures ?? {},
    rules: resolved.rules ?? { require: [], forbid: [] },
  };
}
