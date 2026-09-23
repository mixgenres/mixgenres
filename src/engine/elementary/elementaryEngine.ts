import { el } from '@elemaudio/core';
import { getLuthierModelForInstrument, type LuthierPhysicalParameters } from '../audio/LuthierAPI';
import { seedOf, randNorm } from '../generators/groove';

type Node = any;

export function midiToFreq(note: number): number {
  return 440 * Math.pow(2, (note - 69) / 12);
}

export function styleFlavorForGenre(worldId = '', styleId = ''): number {
  const token = `${worldId}:${styleId}`.toLowerCase();
  if (token.includes('flamenco')) return 0.82;
  if (token.includes('afrobeat')) return 0.74;
  if (token.includes('reggae') || token.includes('dub')) return 0.68;
  if (token.includes('cumbia')) return 0.60;
  if (token.includes('jazz')) return 0.55;
  if (token.includes('samba') || token.includes('bossa')) return 0.50;
  return 0.35;
}

export type PerformanceMode = 'acoustic-ensemble' | 'programmed-electronic' | 'hybrid';

export interface VoiceState {
  note: number;
  velocity: number;
  gate: number;
  id: string;
  actionType?: 'strike' | 'pluck' | 'bow_drag' | 'abanico' | 'rasgueado' | 'tap' | 'golpe' | 'arrastre' | 'slap' | 'mute' | 'legato' | 'slur' | 'staccato' | 'tongue' | 'accent';
  technique?: string;
  contactPoint?: number;
  mass?: number;
  /** Optional culturally-tuned frequency supplied by the composition layer. */
  frequencyHz?: number;
}

export interface TrackParams {
  brightness: number;
  decay: number;
  drive: number;
  body: number;
  tension: number;
  styleFlavor: number;
  articulation: number;
  contact: number;
  mute: number;
  bowPressure: number;
  bowVelocity: number;
  bodyTap: number;
  pluckPosition: number;
  pressure: number;
  resonance: number;
  model: number;
  volume: number;
  pan: number;
  dialect?: string;
  performanceMode?: PerformanceMode;
  bendGlideMs?: number;
  instrumentId?: string;
  courses?: number;
  bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric';
  excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer';
  sympatheticStrings?: boolean;
}

export interface PluckedPreset {
  courses: number;
  bodyConstruction: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric';
  excitationType: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer';
  sympatheticStrings?: boolean;
}

/**
 * Exact physical construction lookup for acoustic and ethnic plucked string traditions.
 * Differentiates courses, resonator body architecture, excitation transients, and sympathetic banks.
 */
export const EXACT_PLUCKED_PRESETS: Record<string, PluckedPreset> = {
  guitar: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  'spanish-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
  'acoustic-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  'steel-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'hard-pick' },
  '12-string-guitar': { courses: 2, bodyConstruction: 'wood-box', excitationType: 'hard-pick' },
  '12-string': { courses: 2, bodyConstruction: 'wood-box', excitationType: 'hard-pick' },
  'electric-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
  'jazz-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  'distortion-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
  'overdrive-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
  'muted-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
  'guitar-harmonics': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
  requinto: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
  tres: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
  cuatro: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
  cavaquinho: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
  charango: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'nail' },
  oud: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
  bouzouki: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
  harp: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  'celtic-harp': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  'orchestral-harp': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  guitarron: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  mandolin: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
  banjo: { courses: 1, bodyConstruction: 'skin-faced', excitationType: 'hard-pick' },
  sitar: { courses: 1, bodyConstruction: 'gourd', excitationType: 'plectrum', sympatheticStrings: true },
  sarangi: { courses: 1, bodyConstruction: 'skin-faced', excitationType: 'nail', sympatheticStrings: true },
  shamisen: { courses: 1, bodyConstruction: 'skin-faced', excitationType: 'plectrum' },
  kora: { courses: 1, bodyConstruction: 'gourd', excitationType: 'fingerpad' },
  berimbau: { courses: 1, bodyConstruction: 'gourd', excitationType: 'hard-pick' },
  guqin: { courses: 1, bodyConstruction: 'board', excitationType: 'fingerpad' },
  pipa: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
  guzheng: { courses: 1, bodyConstruction: 'board', excitationType: 'nail' },
  jarana: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'nail' },
  koto: { courses: 1, bodyConstruction: 'board', excitationType: 'fingerpad' },
  kalimba: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
  dulcimer: { courses: 2, bodyConstruction: 'board', excitationType: 'hammer' },
};

export interface FormantBand {
  freq: number;
  q: number;
  gain: number;
}

export interface AcousticFormantProfile {
  f1: FormantBand;
  f2: FormantBand;
  f3?: FormantBand;
  tongueType: 'chiff' | 'reed-tongue' | 'lip-slap' | 'soft-puff';
  tongueFreq: number;
}

/**
 * Acoustic formant frequency and resonance tables for wind, reed, and brass instruments.
 * Differentiates acoustic bore resonance, nasal double-reed formants, and bell radiation characteristics.
 * Derived from published acoustic measurements and physically plausible estimates.
 */
export const WIND_BRASS_REED_FORMANTS: Record<string, AcousticFormantProfile> = {
  // --- Flutes & Edge-Blown Aerophones ---
  flute: {
    f1: { freq: 800, q: 2.8, gain: 0.8 },
    f2: { freq: 2200, q: 2.5, gain: 0.35 },
    f3: { freq: 4500, q: 2.0, gain: 0.15 },
    tongueType: 'chiff',
    tongueFreq: 2400,
  },
  piccolo: {
    f1: { freq: 1750, q: 3.2, gain: 0.85 },
    f2: { freq: 3800, q: 2.8, gain: 0.4 },
    f3: { freq: 7200, q: 2.2, gain: 0.2 },
    tongueType: 'chiff',
    tongueFreq: 4200,
  },
  'pan-flute': {
    f1: { freq: 650, q: 3.5, gain: 0.9 },
    f2: { freq: 1400, q: 3.0, gain: 0.3 },
    f3: { freq: 3000, q: 2.2, gain: 0.15 },
    tongueType: 'soft-puff',
    tongueFreq: 1800,
  },
  quena: {
    f1: { freq: 920, q: 3.4, gain: 0.85 },
    f2: { freq: 2450, q: 3.0, gain: 0.4 },
    f3: { freq: 4800, q: 2.2, gain: 0.18 },
    tongueType: 'chiff',
    tongueFreq: 2600,
  },
  shakuhachi: {
    f1: { freq: 720, q: 4.0, gain: 0.9 },
    f2: { freq: 1650, q: 3.2, gain: 0.35 },
    f3: { freq: 3400, q: 2.5, gain: 0.2 },
    tongueType: 'chiff',
    tongueFreq: 2100,
  },
  xiao: {
    f1: { freq: 580, q: 3.0, gain: 0.8 },
    f2: { freq: 1480, q: 2.6, gain: 0.3 },
    f3: { freq: 3100, q: 2.0, gain: 0.12 },
    tongueType: 'soft-puff',
    tongueFreq: 1600,
  },
  dizi: {
    f1: { freq: 1150, q: 3.8, gain: 0.85 },
    f2: { freq: 2750, q: 3.5, gain: 0.45 },
    f3: { freq: 5400, q: 2.8, gain: 0.25 },
    tongueType: 'chiff',
    tongueFreq: 3200,
  },
  'tin-whistle': {
    f1: { freq: 1350, q: 3.2, gain: 0.85 },
    f2: { freq: 3100, q: 2.8, gain: 0.4 },
    f3: { freq: 5900, q: 2.2, gain: 0.2 },
    tongueType: 'chiff',
    tongueFreq: 3600,
  },
  'low-whistle': {
    f1: { freq: 520, q: 2.8, gain: 0.8 },
    f2: { freq: 1280, q: 2.5, gain: 0.32 },
    f3: { freq: 2750, q: 2.0, gain: 0.15 },
    tongueType: 'chiff',
    tongueFreq: 1900,
  },
  recorder: {
    f1: { freq: 980, q: 3.0, gain: 0.8 },
    f2: { freq: 2150, q: 2.5, gain: 0.35 },
    f3: { freq: 4300, q: 2.0, gain: 0.15 },
    tongueType: 'chiff',
    tongueFreq: 2300,
  },
  ocarina: {
    f1: { freq: 840, q: 4.5, gain: 0.95 },
    f2: { freq: 1680, q: 4.0, gain: 0.25 },
    tongueType: 'soft-puff',
    tongueFreq: 1500,
  },

  // --- Single & Double Reeds ---
  'soprano-sax': {
    f1: { freq: 1050, q: 2.2, gain: 0.75 },
    f2: { freq: 2700, q: 2.0, gain: 0.55 },
    f3: { freq: 4800, q: 1.8, gain: 0.25 },
    tongueType: 'reed-tongue',
    tongueFreq: 2800,
  },
  'alto-sax': {
    f1: { freq: 820, q: 2.0, gain: 0.75 },
    f2: { freq: 2100, q: 2.2, gain: 0.55 },
    f3: { freq: 3800, q: 1.8, gain: 0.22 },
    tongueType: 'reed-tongue',
    tongueFreq: 2200,
  },
  'tenor-sax': {
    f1: { freq: 580, q: 2.0, gain: 0.75 },
    f2: { freq: 1550, q: 2.2, gain: 0.55 },
    f3: { freq: 3100, q: 1.6, gain: 0.2 },
    tongueType: 'reed-tongue',
    tongueFreq: 1800,
  },
  'bari-sax': {
    f1: { freq: 380, q: 1.8, gain: 0.8 },
    f2: { freq: 1050, q: 2.0, gain: 0.5 },
    f3: { freq: 2300, q: 1.5, gain: 0.2 },
    tongueType: 'reed-tongue',
    tongueFreq: 1400,
  },
  clarinet: {
    f1: { freq: 1450, q: 3.2, gain: 0.7 },
    f2: { freq: 2950, q: 2.6, gain: 0.45 },
    f3: { freq: 4900, q: 2.0, gain: 0.2 },
    tongueType: 'reed-tongue',
    tongueFreq: 2400,
  },
  oboe: {
    f1: { freq: 1100, q: 4.8, gain: 0.85 },
    f2: { freq: 2850, q: 4.2, gain: 0.65 },
    f3: { freq: 4300, q: 3.0, gain: 0.3 },
    tongueType: 'reed-tongue',
    tongueFreq: 3000,
  },
  'english-horn': {
    f1: { freq: 780, q: 4.2, gain: 0.8 },
    f2: { freq: 2150, q: 3.6, gain: 0.55 },
    f3: { freq: 3500, q: 2.6, gain: 0.25 },
    tongueType: 'reed-tongue',
    tongueFreq: 2200,
  },
  bassoon: {
    f1: { freq: 440, q: 3.8, gain: 0.85 },
    f2: { freq: 1120, q: 3.2, gain: 0.5 },
    f3: { freq: 2250, q: 2.4, gain: 0.22 },
    tongueType: 'reed-tongue',
    tongueFreq: 1500,
  },
  bagpipes: {
    f1: { freq: 1250, q: 5.2, gain: 0.85 },
    f2: { freq: 2650, q: 4.5, gain: 0.6 },
    f3: { freq: 4600, q: 3.5, gain: 0.35 },
    tongueType: 'reed-tongue',
    tongueFreq: 3100,
  },
  'uilleann-pipes': {
    f1: { freq: 1180, q: 4.8, gain: 0.85 },
    f2: { freq: 2500, q: 4.2, gain: 0.55 },
    f3: { freq: 4400, q: 3.2, gain: 0.3 },
    tongueType: 'reed-tongue',
    tongueFreq: 2900,
  },
  hichiriki: {
    f1: { freq: 1350, q: 5.4, gain: 0.9 },
    f2: { freq: 2820, q: 4.8, gain: 0.65 },
    f3: { freq: 4950, q: 3.8, gain: 0.35 },
    tongueType: 'reed-tongue',
    tongueFreq: 3200,
  },
  harmonica: {
    f1: { freq: 1550, q: 2.8, gain: 0.75 },
    f2: { freq: 3350, q: 2.2, gain: 0.45 },
    tongueType: 'reed-tongue',
    tongueFreq: 2500,
  },

  // --- Brass ---
  trumpet: {
    f1: { freq: 1200, q: 2.0, gain: 0.75 },
    f2: { freq: 2600, q: 2.4, gain: 0.5 },
    f3: { freq: 4600, q: 2.0, gain: 0.25 },
    tongueType: 'lip-slap',
    tongueFreq: 2400,
  },
  'muted-trumpet': {
    f1: { freq: 1850, q: 4.5, gain: 0.85 },
    f2: { freq: 3750, q: 3.8, gain: 0.6 },
    f3: { freq: 6200, q: 3.0, gain: 0.35 },
    tongueType: 'lip-slap',
    tongueFreq: 3500,
  },
  trombone: {
    f1: { freq: 620, q: 1.8, gain: 0.8 },
    f2: { freq: 1480, q: 2.2, gain: 0.5 },
    f3: { freq: 2750, q: 1.8, gain: 0.25 },
    tongueType: 'lip-slap',
    tongueFreq: 1700,
  },
  'french-horn': {
    f1: { freq: 470, q: 2.4, gain: 0.85 },
    f2: { freq: 1080, q: 2.6, gain: 0.45 },
    f3: { freq: 2050, q: 2.0, gain: 0.2 },
    tongueType: 'lip-slap',
    tongueFreq: 1200,
  },
  tuba: {
    f1: { freq: 250, q: 2.2, gain: 0.9 },
    f2: { freq: 630, q: 2.4, gain: 0.45 },
    f3: { freq: 1250, q: 1.8, gain: 0.2 },
    tongueType: 'lip-slap',
    tongueFreq: 800,
  },
  'horn-section': {
    f1: { freq: 850, q: 1.6, gain: 0.8 },
    f2: { freq: 1950, q: 1.9, gain: 0.5 },
    f3: { freq: 3600, q: 1.7, gain: 0.25 },
    tongueType: 'lip-slap',
    tongueFreq: 2000,
  },
  brass: {
    f1: { freq: 850, q: 1.6, gain: 0.8 },
    f2: { freq: 1950, q: 1.9, gain: 0.5 },
    f3: { freq: 3600, q: 1.7, gain: 0.25 },
    tongueType: 'lip-slap',
    tongueFreq: 2000,
  },
};

export function getFormantProfileForInstrument(instrumentId: string, model: number): AcousticFormantProfile {
  const idLower = instrumentId.toLowerCase();
  const exact = WIND_BRASS_REED_FORMANTS[idLower];
  if (exact) return exact;

  // Fallback defaults by family
  if (model === 7) {
    return WIND_BRASS_REED_FORMANTS['flute'];
  }
  if (model === 15) {
    return WIND_BRASS_REED_FORMANTS['brass'];
  }
  if (model === 16) {
    return WIND_BRASS_REED_FORMANTS['alto-sax'];
  }

  return WIND_BRASS_REED_FORMANTS['flute'];
}

export interface BowedResonanceProfile {
  bodyFreq: number;
  bodyQ: number;
  bodyGain: number;
  bridgeHillFreq: number;
  bridgeHillQ: number;
  bridgeHillGain: number;
}

export const BOWED_RESONANCES: Record<string, BowedResonanceProfile> = {
  violin: { bodyFreq: 460, bodyQ: 2.2, bodyGain: 0.45, bridgeHillFreq: 2800, bridgeHillQ: 2.8, bridgeHillGain: 0.40 },
  fiddle: { bodyFreq: 480, bodyQ: 2.0, bodyGain: 0.45, bridgeHillFreq: 3000, bridgeHillQ: 2.6, bridgeHillGain: 0.45 },
  viola: { bodyFreq: 340, bodyQ: 2.2, bodyGain: 0.50, bridgeHillFreq: 2000, bridgeHillQ: 2.5, bridgeHillGain: 0.35 },
  cello: { bodyFreq: 180, bodyQ: 2.5, bodyGain: 0.55, bridgeHillFreq: 1350, bridgeHillQ: 2.2, bridgeHillGain: 0.30 },
  contrabajo: { bodyFreq: 95, bodyQ: 2.8, bodyGain: 0.60, bridgeHillFreq: 850, bridgeHillQ: 2.0, bridgeHillGain: 0.25 },
  'double-bass': { bodyFreq: 95, bodyQ: 2.8, bodyGain: 0.60, bridgeHillFreq: 850, bridgeHillQ: 2.0, bridgeHillGain: 0.25 },
  erhu: { bodyFreq: 520, bodyQ: 3.2, bodyGain: 0.40, bridgeHillFreq: 2700, bridgeHillQ: 3.0, bridgeHillGain: 0.50 },
  jinghu: { bodyFreq: 680, bodyQ: 3.5, bodyGain: 0.35, bridgeHillFreq: 3300, bridgeHillQ: 3.2, bridgeHillGain: 0.55 },
  strings: { bodyFreq: 380, bodyQ: 1.8, bodyGain: 0.45, bridgeHillFreq: 2400, bridgeHillQ: 2.0, bridgeHillGain: 0.35 },
  'slow-strings': { bodyFreq: 350, bodyQ: 1.6, bodyGain: 0.45, bridgeHillFreq: 2200, bridgeHillQ: 1.8, bridgeHillGain: 0.30 },
  'tremolo-strings': { bodyFreq: 400, bodyQ: 1.8, bodyGain: 0.45, bridgeHillFreq: 2500, bridgeHillQ: 2.0, bridgeHillGain: 0.35 },
};

export function getBowedResonanceProfile(instrumentId: string, bodyParam: number): BowedResonanceProfile {
  const idLower = instrumentId.toLowerCase();
  const exact = BOWED_RESONANCES[idLower];
  if (exact) return exact;

  // Derive from bodyParam (0..1)
  const bodyFreq = 100 + (1 - bodyParam) * 450;
  const bridgeHillFreq = 900 + (1 - bodyParam) * 2200;
  return {
    bodyFreq,
    bodyQ: 2.2,
    bodyGain: 0.45,
    bridgeHillFreq,
    bridgeHillQ: 2.5,
    bridgeHillGain: 0.35,
  };
};

export interface MasterParams {
  highPass?: number;
  volume?: number;
  performanceMode?: PerformanceMode;
}

export function defaultMasterParams(): MasterParams {
  return {
    highPass: 20,
    volume: 1.0,
    performanceMode: 'acoustic-ensemble',
  };
}

/** Backwards-compatible alias during transition */
export type RoomParams = MasterParams;
export const defaultRoomParams = defaultMasterParams;

export function modelForInstrument(instrumentId: string, luthier?: LuthierPhysicalParameters): number {
  const id = instrumentId.toLowerCase();
  if (luthier?.faustProfile) {
    switch (luthier.faustProfile) {
      case 'spanish-guitar': return 0;
      case 'electric-bass': return 3;
      case 'double-bass': return 3;
      case 'tres': return 0;
      case 'flamenco-cajon': return 4;
    }
  }

  // Explicit instrument routing must run before family regexes. The catalog
  // contains several instruments whose names include "guitar", "piano", or
  // "keys", so broad family matching would otherwise collapse distinct
  // instruments into the wrong physical model.
  const EXACT_MODELS: Record<string, number> = {
    clavinet: 19,
    harpsichord: 20,
    'electric-guitar': 21,
    'jazz-guitar': 22,
    'muted-guitar': 23,
    'distortion-guitar': 24,
    'overdrive-guitar': 25,
    'guitar-harmonics': 26,
  };
  const exactModel = EXACT_MODELS[id];
  if (exactModel !== undefined) return exactModel;

  if (/guitar|tres|cuatro|requinto|charango|vihuela|sitar|oud|kora|berimbau|cavaquinho|harp|mandolin|banjo|shamisen|guqin|pipa|guzheng|jarana|koto|dulcimer|bouzouki|sarangi/.test(id)) {
    return 0;
  }
  if (/bass|bajo|contrabajo|tuba/.test(id)) return 3;
  // Tuned struck/mallet resonators (long, pitched decay) are checked before
  // the percussion families below -- "steel-drums" would otherwise collide
  // with the generic "drum" match and get treated as a membrane.
  if (/steel-drums|steelpan|steel-pan|marimba|vibes|vibraphone|xylophone|tubular-bells|balafon|glockenspiel|celeste|music-box|crystal/.test(id)) return 8;
  // Membranophones: an actual skin/head stretched over a shell, whose pitch
  // and ring both come from the membrane itself.
  if (/cajon|djembe|conga|bongo|timbal|tambor(?!ine)|drum|kick|snare|perc|tabla|bombo|pandeiro|bata|surdo|zabumba|bodhran|darbuka|taiko|paigu|brush-kit/.test(id)) return 4;
  // Shaken & scraped idiophones: friction/impact noise with no tonal
  // membrane or bar at all -- a maraca or guiro has nothing in common
  // acoustically with a drum head, so it gets its own noise-driven patch
  // rather than reusing the membrane resonance model.
  if (/shaker|maraca|guiro|cabasa|guacharaca|quijada/.test(id)) return 17;
  // Struck metal & wood idiophones: a short inharmonic clang (bell/block/
  // click), distinct from both the membrane family above and the
  // longer-ringing tuned-mallet family (model 8).
  if (/cowbell|agogo|claves|woodblock|triangle|tambourine|castanets|palmas|\bride\b|kane|zapateado|gongs|bones|\bhats\b/.test(id)) return 18;
  // jinghu (Beijing-opera spike fiddle) is bowed, not plucked -- it was
  // previously caught by the guitar/pluck regex above and rendered with
  // Karplus-Strong pluck synthesis instead of the bowed-friction model.
  if (/violin|cello|viola|fiddle|erhu|jinghu|string/.test(id)) return 6;
  // Winds split by excitation mechanism, not lumped into one shared patch:
  // lip-buzz brass, single/double-reed, and breathy edge-blown flutes are
  // physically distinct instruments and need distinct synthesis, or an
  // arrangement with a horn section just sounds like one flute at three pitches.
  if (/trumpet|trombone|\bbrass\b|\bhorn\b|horn-section|cornet|flugelhorn|tuba/.test(id)) return 15;
  if (/sax|clarinet|oboe|bagpipe|uilleann|shawm|dulzaina|bombarde/.test(id)) return 16;
  if (/flute|quena|zampoña|tin-whistle|low-whistle|piccolo|shakuhachi|xiao|dizi|ryuteki|hichiriki|recorder|ocarina/.test(id)) return 7;
  if (/accordion|bandoneon|harmonica|shō|sho|concertina|melodica/.test(id)) return 10;
  if (/grand-piano|upright-piano|piano|player-piano/.test(id)) return 11;
  if (/organ|hammond|church-organ|pipe-organ/.test(id)) return 13;
  if (/voice|vocal|choir|soprano|alto|tenor|baritone|chorus/.test(id)) return 12;
  if (/rhodes|wurlitzer|electric-piano|fm-ep|epiano/.test(id)) return 14;
  // marimba/vibes/xylophone/etc. are already handled above; this catches
  // the remaining piano-adjacent and mallet-adjacent ids (kalimba, keys).
  // Clavinet is handled by the exact routing table above.
  if (/piano|keys|kalimba/.test(id)) return 8;
  if (/synth|lead|pad|acid|808|909|noise-sweep|dub-echo|turntable/.test(id)) return 9;
  return 0;
}

export function normalizedParams(instrumentId: string, luthier: LuthierPhysicalParameters, modelNum: number) {
  const electric = /electric|distortion|synth|acid|clavinet|sub-bass|rhodes|fm-ep/.test(instrumentId.toLowerCase());
  const b = Math.max(0, Math.min(1, 0.42 + luthier.harmonicRichness * 0.48 + (electric ? 0.1 : 0)));
  const d = Math.max(0.1, Math.min(8, luthier.decayTimeSec ?? luthier.decayTimeFactor));
  const dr = Math.max(0, Math.min(1, electric ? 0.15 + luthier.harmonicRichness * 0.55 : luthier.harmonicRichness * 0.08));
  // Shaken/scraped idiophones (model 17) all have small bodyResonanceVolume
  // values (gourds/shells, not full drum shells), so the default /30 divisor
  // would crush shaker vs. guiro vs. guacharaca down to near-zero and
  // indistinguishable; a smaller divisor keeps their relative differences
  // in a usable 0-1 range.
  const bodyDivisor = modelNum === 1 ? 60 : modelNum === 3 ? 120 : modelNum === 17 ? 2 : 30;
  const bo = Math.max(0, Math.min(1, luthier.bodyResonanceVolume / bodyDivisor));
  return {
    brightness: b,
    decay: d,
    drive: dr,
    body: bo,
    model: modelNum,
  };
}

/**
 * Per-model makeup gain, calibrated so a fixed reference note (velocity 100,
 * held for ~1.2s) produces roughly the same measured RMS across every
 * synthesis model. Before this table there was no calibration anywhere in
 * the engine: every track used the same flat `volume: 0.8` regardless of how
 * loud that model's algorithm naturally puts out, which produced a ~50 dB
 * spread between models playing at the "same" volume (e.g. congas vs. organ).
 * The only other level-shaping step in the pipeline is a single global
 * peak-normalize at the very end of the render (offlineRender.ts), which sets
 * the whole song's ceiling off whichever one instrument hits hardest and does
 * nothing to balance instruments against each other -- so without this table,
 * fixing one instrument's patch just reveals the next one is out of balance
 * with it.
 *
 * Regenerate with `npx tsx scripts/gain-calibration.ts` after changing a
 * model's synthesis or instrument parameters. This two-level calibration uses
 * ITU-R BS.1770 K-weighting integrated loudness across a pitch and velocity matrix.
 */
export const GAIN_BY_MODEL: Record<number, number> = {
  0: 3.267,  // guitar
  2: 0.448,  // electric-guitar
  3: 1.000,  // bass
  4: 2.014,  // congas
  5: 2.014,  // congas / membrane model 5
  6: 4.068,  // violin
  7: 18.809, // flute
  8: 1.055,  // marimba
  9: 0.395,  // synth
  10: 0.552, // accordion
  11: 2.241, // piano
  12: 0.380, // voice
  13: 0.329, // organ
  14: 0.334, // rhodes
  15: 0.558, // trumpet
  16: 0.678, // tenor-sax
  17: 20.584, // shaker
  18: 6.489,  // cowbell
  19: 8.179,  // clavinet
  20: 1.991,  // harpsichord
  21: 0.448,  // electric-guitar
  22: 1.137,  // jazz-guitar
  23: 4.302,  // muted-guitar
  24: 0.208,  // distortion-guitar
  25: 0.311,  // overdrive-guitar
  26: 0.454,  // guitar-harmonics
};

export const GAIN_BY_INSTRUMENT: Partial<Record<string, number>> = {
  // Percussion & Membranes
  'congas': 2.014,
  'bongos': 4.493,
  'zabumba': 0.841,
  'bombo': 0.641,
  'bata': 1.494,
  'cajon': 1.994,
  'timbales': 2.154,
  'surdo': 0.617,
  'pandeiro': 3.294,
  'tamborim': 6.198,
  'darbuka': 2.502,
  'tabla': 1.490,
  'log-drum': 1.292,
  'cumbia-drum': 0.993,
  'bombo-andino': 0.655,
  'tambora': 0.926,
  'tambor-alegre': 1.405,
  'bombo-leguero': 0.622,
  'paigu': 1.841,
  'taiko': 0.493,
  'drums': 0.994,
  'brush-kit': 1.662,
  'kick': 1.728,
  'snare': 5.979,

  // Shaken & Scraped Idiophones
  'shaker': 20.584,
  'maracas': 22.203,
  'cabasa': 23.948,
  'guiro': 18.969,
  'guacharaca': 17.989,

  // Struck Idiophones & Clicks
  'tambourine': 7.080,
  'castanets': 27.285,
  'bones': 24.936,
  'woodblock': 22.062,
  'triangle': 1.295,
  'palmas': 24.223,
  'zapateado': 22.473,
  'ride': 2.864,
  'hats': 23.757,
  'cowbell': 6.489,
  'agogo': 4.705,
  'claves': 19.958,
  'kane': 0.957,
  'gongs': 0.655,

  // Plucked Strings
  'guitar': 3.267,
  'spanish-guitar': 2.136,
  'acoustic-guitar': 3.129,
  'steel-guitar': 2.268,
  '12-string-guitar': 2.924,
  'requinto': 2.909,
  'jarana': 2.978,
  'guqin': 2.806,
  'pipa': 2.303,
  'guzheng': 1.917,
  'tres': 3.766,
  'cuatro': 2.236,
  'cavaquinho': 3.165,
  'charango': 3.081,
  'oud': 3.523,
  'bouzouki': 3.620,
  'guitarron': 2.959,
  'mandolin': 3.925,
  'banjo': 2.404,
  'vihuela': 3.555,
  'sitar': 2.156,
  'shamisen': 2.853,
  'kora': 2.304,
  'berimbau': 2.449,
  'koto': 2.471,
  'harp': 2.794,
  'celtic-harp': 2.877,
  'orchestral-harp': 2.782,
  'dulcimer': 4.260,

  // Electric Guitars & Basses
  'electric-guitar': 0.448,
  'jazz-guitar': 1.137,
  'distortion-guitar': 0.208,
  'overdrive-guitar': 0.311,
  'muted-guitar': 4.302,
  'guitar-harmonics': 0.454,
  'upright-bass': 5.354,
  'double-bass': 0.730,
  'acoustic-bass': 5.360,
  'sub-bass': 0.442,

  // Keyboards & Mallets
  'piano': 2.241,
  'clavinet': 8.179,
  'harpsichord': 1.991,
  'rhodes': 0.334,
  'fm-ep': 0.330,
  'organ': 0.329,
  'vibraphone': 0.673,
  'music-box': 1.375,
  'xylophone': 2.892,
  'tubular-bells': 0.659,

  // Bowed Strings
  'violin': 4.068,
  'viola': 3.888,
  'cello': 3.312,
  'strings': 3.257,
  'slow-strings': 3.204,
  'tremolo-strings': 3.349,
  'pizz-strings': 3.610,
  'fiddle': 4.191,
  'erhu': 4.297,
  'jinghu': 4.827,

  // Free Reeds
  'bandoneon': 0.573,
  'accordion': 0.552,
  'harmonica': 0.716,
  'shō': 0.646,
  'melodica': 0.706,
  'concertina': 0.639,

  // Flutes & Edge-blown Air Jets
  'flute': 18.809,
  'tin-whistle': 14.767,
  'low-whistle': 20.678,
  'piccolo': 14.615,
  'recorder': 14.171,
  'ocarina': 21.526,
  'quena': 19.701,
  'pan-flute': 20.044,
  'shakuhachi': 18.786,
  'xiao': 20.276,
  'dizi': 19.475,
  'ryuteki': 20.468,

  // Reeds & Pipes
  'bagpipes': 0.647,
  'uilleann-pipes': 0.716,
  'clarinet': 0.760,
  'soprano-sax': 0.767,
  'alto-sax': 0.733,
  'tenor-sax': 0.678,
  'bari-sax': 0.635,
  'oboe': 0.788,
  'english-horn': 0.544,
  'hichiriki': 16.589,

  // Brass
  'trumpet': 0.558,
  'muted-trumpet': 0.579,
  'trombone': 0.508,
  'french-horn': 0.422,
  'horn-section': 0.474,
  'brass': 0.484,

  // Synths & Voices
  'synth': 0.395,
  'acid-303': 0.452,
  'voice': 0.380,
  'choir': 0.336,
  'backing-vocals': 0.359,
};

export function makeupGainFor(modelNum: number, instrumentId?: string): number {
  if (instrumentId) {
    const override = GAIN_BY_INSTRUMENT[instrumentId.toLowerCase()];
    if (typeof override === 'number') {
      return override;
    }
  }
  return GAIN_BY_MODEL[Math.round(modelNum)] ?? 1;
}

export function defaultTrackParams(instrumentId = '', luthier?: LuthierPhysicalParameters, modelNum = 0): TrackParams {
  const l = luthier ?? getLuthierModelForInstrument(instrumentId);
  const norm = normalizedParams(instrumentId, l, modelNum);
  const isElectronic = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test(instrumentId.toLowerCase());
  // Base volume stays a musical default (0.8); the per-instrument / per-model makeup gain
  // brings that default to a comparable perceived loudness (ITU-R BS.1770 matched).
  // Clamped so a bad/missing table entry can't silence or blow out a track.
  const effectiveModelForGain = isElectronic ? 9 : modelNum;
  const volume = Math.max(0.05, Math.min(30, 0.8 * makeupGainFor(effectiveModelForGain, instrumentId)));

  const idLower = instrumentId.toLowerCase();
  const preset = EXACT_PLUCKED_PRESETS[idLower];
  const courses = l?.courses ?? preset?.courses ?? 1;
  const bodyConstruction = l?.bodyConstruction ?? preset?.bodyConstruction ?? 'wood-box';
  const excitationType = l?.excitationType ?? preset?.excitationType ?? 'fingerpad';
  const sympatheticStrings = l?.sympatheticStrings ?? preset?.sympatheticStrings ?? false;

  return {
    brightness: norm.brightness,
    decay: norm.decay,
    drive: norm.drive,
    body: norm.body,
    tension: Math.max(0, Math.min(1, l.tension)),
    styleFlavor: 0.5,
    articulation: 0,
    contact: 0.5,
    mute: 0,
    bowPressure: 0.45,
    bowVelocity: 0.35,
    bodyTap: 0,
    pluckPosition: 0.28,
    pressure: 0.55,
    resonance: 0.5,
    model: modelNum,
    volume,
    pan: 0.5,
    performanceMode: isElectronic ? 'programmed-electronic' : 'acoustic-ensemble',
    bendGlideMs: 15,
    instrumentId,
    courses,
    bodyConstruction,
    excitationType,
    sympatheticStrings,
  };
}

/**
 * Elementary Audio Physical Voice Generator
 * Real Digital Waveguide Synthesis, Bounded Tube Jet-Drive, & Modal Resonators
 */
export function renderVoice(
  trackId: string,
  voiceIndex: number,
  voice: VoiceState,
  params: TrackParams
): Node {
  const k = `${trackId}:v${voiceIndex}`;
  const freq = (voice as VoiceState & { frequencyHz?: number }).frequencyHz ?? midiToFreq(voice.note);
  const gateSignal = el.const({ key: `${k}:gate`, value: voice.gate });
  const velSignal = el.const({ key: `${k}:vel`, value: voice.velocity * (1 - 0.58 * params.mute) });
  const glideSec = Math.max(0.005, Math.min(0.2, (params.bendGlideMs ?? 15) / 1000));
  const freqSignal = el.smooth(el.tau2pole(glideSec), el.const({ key: `${k}:freq`, value: freq }));

  // Real instruments don't just get louder as they're played harder — they
  // get *brighter*: a plucked string, a bowed note, a blown reed all add
  // upper harmonic content under a harder attack. Without this, every note
  // in a track uses the same filter cutoff regardless of dynamics, which is
  // a big part of why a full mix reads as flat/monotonous even when the
  // note-level velocities vary. velBoost scales the track's static
  // brightness by this note's actual played velocity.
  const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, voice.velocity));
  const b = Math.max(0, Math.min(1, params.brightness * velBoost));
  const decayTime = Math.max(0.05, params.decay);
  // Programmed styles deliberately use the electronic voice family even when
  // the musical role is named bass/keys/etc. Acoustic styles retain the
  // instrument's physical family. Hybrid remains instrument-led.
  const model = params.performanceMode === 'programmed-electronic'
    ? 9
    : Math.round(params.model);
  const action = voice.actionType ?? (params.bodyTap > 0.5 ? 'golpe' : 'pluck');

  const isMuted = action === 'mute' || params.mute > 0.4;
  const attack = 0.0008 + (1 - b) * 0.01;
  const release = isMuted ? 0.012 : 0.03 + decayTime * 0.25;
  const sustain = isMuted ? 0.05 : 0.35 + 0.3 * params.body;

  const env = el.adsr(attack, decayTime * (isMuted ? 0.1 : 0.3), sustain, release, gateSignal);

  let rawAudio: Node;

  if (action === 'golpe' || action === 'tap') {
    // Percussive Body Golpe (instrument shell/wood hit without string loop)
    const bodyPunch = el.mul(el.cycle(110), el.adsr(0.0005, 0.02, 0, 0.01, gateSignal));
    const woodClick = el.mul(el.highpass(1400, 1.2, el.noise()), el.adsr(0.0002, 0.008, 0, 0.004, gateSignal));
    rawAudio = el.add(el.mul(0.75, bodyPunch), el.mul(0.25, woodClick));
  } else switch (model) {
    case 2: {
      // Overdriven Electric Guitar Waveguide with Inharmonicity & Pick Position
      const sr = 44100;
      const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
      const pickPos = Math.max(0.05, Math.min(0.5, params.pluckPosition));

      const impulse = el.mul(el.noise(), el.adsr(0.0005, 0.008, 0, 0.003, gateSignal));
      const stringLoop = el.delay({ size: 44100 }, el.const({ value: delayLength }), el.const({ value: 0.985 - (1 - b) * 0.02 }), impulse);

      const combOffset = Math.max(1, delayLength * pickPos);
      const combSig = el.sub(stringLoop, el.delay({ size: 44100 }, el.const({ value: combOffset }), el.const({ value: 0 }), stringLoop));

      const driven = el.tanh(el.mul(el.const({ value: 1 + params.drive * 5 }), combSig));
      rawAudio = el.lowpass(1200 + b * 5500, 1.2, driven);
      break;
    }
    case 19: {
      // Clavinet: short, bright plucked-string excitation through a
      // guitar-like pickup/filter response. This is intentionally separate
      // from both the piano and electric-guitar models.
      const sr = 44100;
      const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
      const impulse = el.mul(
        el.noise(),
        el.adsr(0.00025, 0.004, 0, 0.002, gateSignal)
      );
      const stringLoop = el.delay(
        { size: 44100 },
        el.const({ value: delayLength }),
        el.const({ value: 0.975 }),
        impulse
      );
      const pickup = el.svf(
        { mode: 'bandpass' },
        700 + b * 1800,
        1.1,
        stringLoop
      );
      const click = el.mul(
        0.18,
        el.mul(
          el.highpass(2200, 1.0, el.noise()),
          el.adsr(0.0001, 0.003, 0, 0.0015, gateSignal)
        )
      );
      rawAudio = el.lowpass(1200 + b * 4200, 1.0, el.add(pickup, click));
      break;
    }
    case 20: {
      // Harpsichord: very fast plectrum-like excitation with a dry,
      // bright double-string character. Unlike piano, the excitation is
      // plucked rather than hammer-driven.
      const sr = 44100;
      const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
      const detunedLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq * 1.003)));
      const pluck = el.mul(
        el.noise(),
        el.adsr(0.0001, 0.0025, 0, 0.0015, gateSignal)
      );
      const string1 = el.delay(
        { size: 44100 },
        el.const({ value: delayLength }),
        el.const({ value: 0.989 }),
        pluck
      );
      const string2 = el.delay(
        { size: 44100 },
        el.const({ value: detunedLength }),
        el.const({ value: 0.986 }),
        pluck
      );
      const upper = el.mul(
        0.18,
        el.cycle(el.mul(freqSignal, 2.0))
      );
      const tone = el.add(string1, el.add(el.mul(0.75, string2), upper));
      rawAudio = el.lowpass(1400 + b * 7600, 1.0, tone);
      break;
    }
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26: {
      // Electric-guitar family. The variants share the same string/pickup
      // architecture but differ in damping, pickup filtering, drive, and
      // harmonic emphasis so named electric-guitar styles no longer render
      // through the acoustic guitar model.
      const sr = 44100;
      const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
      const isJazz = model === 22;
      const isMutedGuitar = model === 23;
      const isDistortion = model === 24;
      const isOverdrive = model === 25;
      const isHarmonics = model === 26;

      const damping =
        isMutedGuitar ? 0.93 :
        isJazz ? 0.975 :
        isDistortion ? 0.992 :
        isOverdrive ? 0.989 :
        0.986;

      const attackTime = isMutedGuitar ? 0.00035 : 0.0007;
      const impulse = el.mul(
        el.noise(),
        el.adsr(attackTime, isMutedGuitar ? 0.004 : 0.008, 0, 0.003, gateSignal)
      );
      const stringLoop = el.delay(
        { size: 44100 },
        el.const({ value: delayLength }),
        el.const({ value: damping }),
        impulse
      );

      const pickPos = Math.max(
        0.04,
        Math.min(0.5, isJazz ? 0.34 : params.pluckPosition)
      );
      const combOffset = Math.max(1, delayLength * pickPos);
      const combSig = el.sub(
        stringLoop,
        el.delay(
          { size: 44100 },
          el.const({ value: combOffset }),
          el.const({ value: 0 }),
          stringLoop
        )
      );

      const pickupCut =
        isJazz ? 2200 :
        isMutedGuitar ? 1700 :
        isDistortion ? 4200 :
        isOverdrive ? 5000 :
        6000;

      const driveAmount =
        isDistortion ? 7.5 :
        isOverdrive ? 4.0 :
        isHarmonics ? 1.6 :
        1.2 + params.drive * 2.0;

      const driven = el.tanh(
        el.mul(el.const({ value: driveAmount }), combSig)
      );
      const pickup = el.lowpass(
        pickupCut + b * (isJazz ? 900 : 2200),
        1.1,
        driven
      );

      const harmonic = isHarmonics
        ? el.mul(
            0.65,
            el.cycle(el.mul(freqSignal, 2.0))
          )
        : 0;

      const mutedBody = isMutedGuitar
        ? el.mul(0.45, el.highpass(900, 1.0, pickup))
        : pickup;

      rawAudio = el.add(
        mutedBody,
        el.add(
          harmonic,
          el.mul(
            isDistortion ? 0.85 :
            isOverdrive ? 0.9 :
            isJazz ? 0.82 :
            1.0,
            pickup
          )
        )
      );
      break;
    }
    case 3: {
      // Bass (Salsa Tumbao / Tango Bowed / Slap)
      const isArco = action === 'bow_drag' || params.bowPressure > 0.6;
      if (isArco) {
        // Tango Bowed Double Bass Stick-Slip Friction Waveguide
        const osc = el.blepsaw(freqSignal);
        const frictionNoise = el.mul(params.bowPressure * 0.25, el.pinknoise());
        const bowSig = el.add(osc, frictionNoise);
        rawAudio = el.svf({ mode: 'lowpass' }, 220 + b * 2000, 1.4, bowSig);
      } else {
        // Plucked / Slap / Upright / Fretless Bass Waveguide
        const idLower = (params.instrumentId ?? '').toLowerCase();
        const isUpright = /upright|acoustic-bass|contrabajo|guitarron/.test(idLower);
        const isSlap = action === 'slap' || /slap/.test(idLower);
        const isPick = /pick/.test(idLower);
        const isFretless = /fretless/.test(idLower);

        const sr = 44100;
        const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));

        let impulse: Node;
        if (isUpright) {
          // Acoustic upright bass: warm fingerpad flesh attack
          impulse = el.mul(el.lowpass(1200, 0.8, el.noise()), el.adsr(0.0015, 0.020, 0, 0.008, gateSignal));
        } else if (isPick) {
          // Pick bass: sharp 2.4kHz pick transient
          impulse = el.mul(el.svf({ mode: 'bandpass' }, 2400, 1.4, el.noise()), el.adsr(0.0004, 0.008, 0, 0.003, gateSignal));
        } else if (isSlap) {
          // Slap bass: metallic thumb slap
          impulse = el.mul(el.highpass(1800, 1.2, el.noise()), el.adsr(0.0003, 0.006, 0, 0.002, gateSignal));
        } else {
          // Standard electric bass
          impulse = el.mul(el.noise(), el.adsr(0.001, 0.015, 0, 0.005, gateSignal));
        }

        const slapClick = isSlap ? el.mul(0.5, el.adsr(0.0002, 0.004, 0, 0.002, gateSignal)) : 0;
        const damping = isUpright ? 0.982 : 0.99;
        const stringLoop = el.delay({ size: 44100 }, el.const({ value: delayLength }), el.const({ value: damping }), el.add(impulse, slapClick));

        if (isUpright) {
          // Upright bass acoustic cavity resonance (air 60Hz, wood plate 110Hz)
          const air = el.svf({ mode: 'bandpass' }, 60, 3.5, stringLoop);
          const wood = el.svf({ mode: 'bandpass' }, 110, 2.5, stringLoop);
          const acousticBody = el.add(stringLoop, el.add(el.mul(0.4, air), el.mul(0.3, wood)));
          rawAudio = el.svf({ mode: 'lowpass' }, 140 + b * 1800, 1.1, acousticBody);
        } else if (isFretless) {
          // Fretless bass: mwah formant around 750 Hz
          const subSine = el.mul(0.35, el.cycle(freqSignal));
          const mixed = el.add(stringLoop, subSine);
          const mwah = el.svf({ mode: 'bandpass' }, 750, 2.2, mixed);
          const lp = el.svf({ mode: 'lowpass' }, 180 + b * 2000, 1.2, mixed);
          rawAudio = el.add(lp, el.mul(0.35, mwah));
        } else if (isSlap) {
          // Slap bass: scooped mids, hyped 3.2kHz snap
          const subSine = el.mul(0.45, el.cycle(freqSignal));
          const mixed = el.add(stringLoop, subSine);
          const snap = el.svf({ mode: 'bandpass' }, 3200, 1.8, mixed);
          const bottom = el.svf({ mode: 'lowpass' }, 160 + b * 2200, 1.3, mixed);
          rawAudio = el.add(bottom, el.mul(0.4, snap));
        } else {
          // Electric / Pick bass
          const subSine = el.mul(0.4, el.cycle(freqSignal));
          const mixed = el.add(stringLoop, subSine);
          rawAudio = el.svf({ mode: 'lowpass' }, 120 + b * 2200, 1 + params.drive * 1.5, mixed);
        }
      }
      break;
    }
    case 4:
    case 5: {
      // Modal 2D Circular Membrane Percussion (Cajon, Djembe, Tabla, Congas,
      // Bombo, Taiko). Exact circular membrane Bessel zero ratios: 1.000,
      // 1.593, 2.135, 2.295, 2.653, 2.917.
      //
      // shellDecay is driven by this instrument's own decayTime and body
      // size (both per-instrument, from LuthierAPI's decayTimeFactor /
      // bodyResonanceVolume).
      const hitSeed = seedOf(voice.id || 'drum', voice.note, Math.round((voice.contactPoint ?? 0.5) * 1000));
      // Subtle hit-to-hit pitch micro-shift (±3.5 cents)
      const detuneSemitones = (randNorm(hitSeed ^ 0x1234) * 3.5) / 100;
      const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

      // Seeded mode amplitude micro-variations
      const v01 = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(hitSeed ^ 0x1111) * 0.08));
      const v11 = Math.max(0.78, Math.min(1.22, 1.0 + randNorm(hitSeed ^ 0x2222) * 0.10));
      const v21 = Math.max(0.72, Math.min(1.28, 1.0 + randNorm(hitSeed ^ 0x3333) * 0.12));
      const v02 = Math.max(0.70, Math.min(1.30, 1.0 + randNorm(hitSeed ^ 0x4444) * 0.12));

      const shellDecay = decayTime * (0.35 + 0.5 * params.body);
      const m01 = el.mul(v01, el.mul(el.cycle(f0), el.adsr(0.0005, shellDecay, 0, 0.04 + shellDecay * 0.1, gateSignal)));
      const m11 = el.mul(0.45 * v11, el.mul(el.cycle(el.mul(f0, 1.593)), el.adsr(0.0005, shellDecay * 0.5, 0, 0.02, gateSignal)));
      const m21 = el.mul(0.25 * v21, el.mul(el.cycle(el.mul(f0, 2.135)), el.adsr(0.0005, shellDecay * 0.32, 0, 0.015, gateSignal)));
      const m02 = el.mul(0.18 * v02, el.mul(el.cycle(el.mul(f0, 2.295)), el.adsr(0.0005, shellDecay * 0.24, 0, 0.01, gateSignal)));

      // Extended higher Bessel-zero modes for metallic/higher-mode-rich membrane instruments
      // (timbales, darbuka, tabla, snare, tamborim, pandeiro, cuica)
      const instId = (params.instrumentId ?? '').toLowerCase();
      const isHighModeRich = b > 0.52 || /timbal|darbuka|tabla|snare|tamborim|pandeiro|bata|cuica/.test(instId);
      let highModes: Node = el.const({ value: 0 });
      if (isHighModeRich) {
        const v12 = Math.max(0.65, Math.min(1.35, 1.0 + randNorm(hitSeed ^ 0x5555) * 0.15));
        const v22 = Math.max(0.60, Math.min(1.40, 1.0 + randNorm(hitSeed ^ 0x6666) * 0.15));
        const m12 = el.mul(0.12 * v12, el.mul(el.cycle(el.mul(f0, 2.653)), el.adsr(0.0004, shellDecay * 0.18, 0, 0.008, gateSignal)));
        const m22 = el.mul(0.08 * v22, el.mul(el.cycle(el.mul(f0, 2.917)), el.adsr(0.0004, shellDecay * 0.14, 0, 0.006, gateSignal)));
        highModes = el.add(m12, m22);
      }

      // Rim strike and impact noise transient with spectral tilt variation
      const isRim = voice.contactPoint ? voice.contactPoint < 0.25 : false;
      const noiseTilt = 1800 + randNorm(hitSeed ^ 0x7777) * 250;
      const snapNoise = el.mul(
        isRim ? 0.65 : 0.2,
        el.mul(el.highpass(noiseTilt, 1.2, el.noise()), el.adsr(0.0002, 0.012, 0, 0.005, gateSignal))
      );

      const membraneSum = el.add(el.add(m01, el.add(m11, el.add(m21, m02))), el.add(highModes, snapNoise));

      // Secondary acoustic shell/body cavity resonator:
      // Lower resonant frequency below head fundamental with distinct cavity decay time
      const shellFreq = el.mul(f0, 0.58 + params.body * 0.15);
      const shellCavityDecay = shellDecay * (0.8 + params.body * 0.5);
      const shellBurst = el.mul(0.22, el.mul(el.svf({ mode: 'bandpass' }, shellFreq, 2.2, membraneSum), el.adsr(0.001, shellCavityDecay, 0, 0.05, gateSignal)));

      rawAudio = el.add(membraneSum, shellBurst);
      break;
    }
    case 17: {
      // Shaken & scraped idiophones (Shaker, Maracas, Cabasa, Guiro,
      // Guacharaca): friction/impact noise with no tonal membrane or bar to
      // excite. Added seeded hit-to-hit variation on burst duration and spectrum.
      const hitSeed = seedOf(voice.id || 'shaker', voice.note, Math.round((voice.contactPoint ?? 0.5) * 1000));
      const durDev = Math.max(0.8, Math.min(1.25, 1.0 + randNorm(hitSeed ^ 0x8888) * 0.12));
      const freqDev = randNorm(hitSeed ^ 0x9999) * 200;

      const burst = el.mul(el.noise(), el.adsr(0.001, (0.02 + decayTime * 0.06) * durDev, 0, 0.03 + decayTime * 0.08, gateSignal));
      const bodyPeak = 1100 + params.body * 2800 + freqDev;
      const shell = el.svf({ mode: 'bandpass' }, bodyPeak, 2.0, burst);
      const brightNoise = el.mul(0.5 + b * 0.5, el.highpass(2400 + b * 4200 + freqDev, 0.9, burst));
      rawAudio = el.add(el.mul(0.55, shell), el.mul(0.65, brightNoise));
      break;
    }
    case 18: {
      // Struck metal & wood idiophones (Cowbell, Agogo, Claves, Woodblock,
      // Triangle, Tambourine, hi-hats/ride, Gongs): a short inharmonic
      // clang with per-hit partial detuning and transient variation.
      const hitSeed = seedOf(voice.id || 'clang', voice.note, Math.round((voice.contactPoint ?? 0.5) * 1000));
      const detuneSemitones = (randNorm(hitSeed ^ 0xaaaa) * 4.0) / 100;
      const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

      const v1 = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(hitSeed ^ 0xbbbb) * 0.08));
      const v2 = Math.max(0.78, Math.min(1.22, 1.0 + randNorm(hitSeed ^ 0xcccc) * 0.10));
      const v3 = Math.max(0.75, Math.min(1.25, 1.0 + randNorm(hitSeed ^ 0xdddd) * 0.12));

      const clangDecay = Math.max(0.04, decayTime * 0.28);
      const p1 = el.mul(v1, el.mul(el.cycle(f0), el.adsr(0.0004, clangDecay, 0, 0.02, gateSignal)));
      const p2 = el.mul(0.55 * v2, el.mul(el.cycle(el.mul(f0, 2.76)), el.adsr(0.0004, clangDecay * 0.6, 0, 0.015, gateSignal)));
      const p3 = el.mul(0.32 * v3, el.mul(el.cycle(el.mul(f0, 4.18)), el.adsr(0.0004, clangDecay * 0.4, 0, 0.01, gateSignal)));
      const clickCutoff = 3500 + randNorm(hitSeed ^ 0xeeee) * 300;
      const click = el.mul(0.4, el.mul(el.highpass(clickCutoff, 1.0, el.noise()), el.adsr(0.0002, 0.006, 0, 0.004, gateSignal)));
      rawAudio = el.add(p1, el.add(p2, el.add(p3, click)));
      break;
    }
    case 6: {
      // Bowed Strings (Violin, Cello, Viola, Erhu, Fiddle, Jinghu, Bass)
      const isPizz = action === 'pluck' || params.articulation > 0.7;
      if (isPizz) {
        // Pizzicato Waveguide
        const sr = 44100;
        const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
        const impulse = el.mul(el.noise(), el.adsr(0.0005, 0.006, 0, 0.003, gateSignal));
        const stringLoop = el.delay({ size: 44100 }, el.const({ value: delayLength }), el.const({ value: 0.98 }), impulse);
        rawAudio = el.lowpass(800 + b * 4000, 1.1, stringLoop);
      } else {
        // Stick-slip Bowed Friction Waveguide with Dual Body Resonances (Wood Cavity + Bridge Hill)
        // Per-note seeded random micro-variation in bow friction and pressure so sustained lines don't sound mechanically uniform
        const noteSeed = seedOf(voice.id || 'voice', voice.note, Math.round((voice.contactPoint ?? 0.5) * 1000));
        const bowDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed ^ 0x5a5a) * 0.10));

        const osc = el.blepsaw(freqSignal);
        const bowPressure = Math.max(0.1, params.bowPressure * bowDev);
        const friction = el.tanh(el.mul(1 + bowPressure * 2.5, osc));
        const breath = el.mul(0.08 * bowPressure, el.pinknoise());
        const raw = el.add(friction, breath);

        // Per-instrument dual body resonances: Main Wood Cavity + High "Bridge Hill" resonance (e.g. ~2.8kHz on violin vs ~1.35kHz on cello)
        const bowedProf = getBowedResonanceProfile(params.instrumentId ?? '', params.body);
        const bodyRes = el.svf({ mode: 'bandpass' }, bowedProf.bodyFreq, bowedProf.bodyQ, raw);
        const bridgeHill = el.svf({ mode: 'bandpass' }, bowedProf.bridgeHillFreq, bowedProf.bridgeHillQ, raw);
        const shaped = el.add(raw, el.add(el.mul(bowedProf.bodyGain, bodyRes), el.mul(bowedProf.bridgeHillGain, bridgeHill)));

        rawAudio = el.lowpass(450 + b * 4200, 1.2, shaped);
      }
      break;
    }
    case 7: {
      // Edge-blown Air-Jet Aerophones (Flute, Quena, Piccolo, Shakuhachi, Xiao, Dizi, Whistles, Ocarina).
      // Per-instrument acoustic formant profile + articulation-dependent tonguing/chiff attack transient layer.
      const noteSeed = seedOf(voice.id || 'voice', voice.note, Math.round((voice.contactPoint ?? 0.5) * 1000));
      const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

      const breath = el.mul(0.16 * (1 - params.pressure) * breathDev, el.noise());
      const exciter = el.mul(0.6, el.adsr(0.018, 0.06, 0.65, 0.05, gateSignal));
      const jetInput = el.add(exciter, breath);

      // Articulation-aware attack tonguing / chiff layer: prominent on staccato/tongued attacks, suppressed on slurred/legato lines
      const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
      const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
      const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.60 : 0.28);

      const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 7);
      const chiffBurst = profile.tongueType === 'soft-puff'
        ? el.lowpass(profile.tongueFreq, 1.0, el.noise())
        : el.svf({ mode: 'bandpass' }, profile.tongueFreq, 2.2, el.noise());
      const chiff = el.mul(tongueLevel, el.mul(chiffBurst, el.adsr(0.0004, 0.009, 0, 0.003, gateSignal)));

      // Bore fundamental & 2nd harmonic + per-instrument acoustic formant shaping
      const fundamental = el.svf({ mode: 'bandpass' }, freq, 2.4, jetInput);
      const overtone = el.svf({ mode: 'bandpass' }, el.mul(freqSignal, 2), 2.2, jetInput);
      const formant1 = el.svf({ mode: 'bandpass' }, profile.f1.freq, profile.f1.q, jetInput);
      const formant2 = el.svf({ mode: 'bandpass' }, profile.f2.freq, profile.f2.q, jetInput);
      const airNoise = el.mul(0.18, breath);

      const mixed = el.add(
        el.add(el.mul(0.80, fundamental), el.mul(0.28, overtone)),
        el.add(el.mul(0.22 * profile.f1.gain, formant1), el.mul(0.16 * profile.f2.gain, formant2))
      );
      rawAudio = el.mul(0.9, el.add(mixed, el.add(airNoise, chiff)));
      break;
    }
    case 15: {
      // Brass (Trumpet, Muted Trumpet, Trombone, French Horn, Tuba, Horn Section): buzzing-lip excitation
      // Per-instrument acoustic formant profile + articulation-aware lip-slap attack transient layer.
      const noteSeed = seedOf(voice.id || 'voice', voice.note, Math.round((voice.contactPoint ?? 0.5) * 1000));
      const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

      const lipBuzz = el.blepsquare(freqSignal);
      const breathNoise = el.mul(0.05 * (1 - params.pressure) * breathDev, el.noise());
      const buzzEnv = el.adsr(0.012, 0.05, 0.85, 0.07, gateSignal);
      const excited = el.mul(buzzEnv, el.add(lipBuzz, breathNoise));

      // Articulation-aware tonguing / lip-impact transient
      const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
      const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
      const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.65 : 0.32);

      const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 15);
      const lipAttackBurst = el.svf({ mode: 'bandpass' }, profile.tongueFreq, 1.8, el.noise());
      const lipTransient = el.mul(tongueLevel, el.mul(lipAttackBurst, el.adsr(0.0003, 0.008, 0, 0.003, gateSignal)));

      const bore = el.svf({ mode: 'bandpass' }, freq, 3.2, excited);
      const f1 = el.svf({ mode: 'bandpass' }, profile.f1.freq, profile.f1.q, excited);
      const f2 = el.svf({ mode: 'bandpass' }, profile.f2.freq + b * 1200, profile.f2.q, excited);

      const mixed = el.add(
        el.mul(0.70, bore),
        el.add(el.mul(0.40 * profile.f1.gain, f1), el.mul((0.35 + b * 0.45) * profile.f2.gain, f2))
      );
      rawAudio = el.mul(0.65, el.tanh(el.mul(1.2 + params.drive * 1.4, el.add(mixed, lipTransient))));
      break;
    }
    case 16: {
      // Single/double reed (Saxophones, Clarinet, Oboe, Bassoon, English Horn, Bagpipes, Hichiriki, Harmonica)
      // Per-instrument acoustic formant profile + articulation-aware reed-tongue slap transient layer.
      const noteSeed = seedOf(voice.id || 'voice', voice.note, Math.round((voice.contactPoint ?? 0.5) * 1000));
      const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

      const reedPulse = el.blepsaw(freqSignal);
      const breathNoise = el.mul(0.10 * (1 - params.pressure) * breathDev, el.noise());
      const reedEnv = el.adsr(0.007, 0.05, 0.78, 0.05, gateSignal);
      const excited = el.mul(reedEnv, el.add(reedPulse, breathNoise));

      // Articulation-aware tonguing slap
      const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
      const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
      const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.65 : 0.30);

      const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 16);
      const reedTongueBurst = el.highpass(profile.tongueFreq, 1.2, el.noise());
      const tongueTransient = el.mul(tongueLevel, el.mul(reedTongueBurst, el.adsr(0.0002, 0.006, 0, 0.002, gateSignal)));

      const bore = el.svf({ mode: 'bandpass' }, freq, 3.0, excited);
      const f1 = el.svf({ mode: 'bandpass' }, profile.f1.freq, profile.f1.q, excited);
      const f2 = el.svf({ mode: 'bandpass' }, profile.f2.freq + b * 1000, profile.f2.q, excited);

      const acousticTone = el.add(
        el.mul(0.65, bore),
        el.add(el.mul(0.45 * profile.f1.gain, f1), el.mul(0.40 * profile.f2.gain, f2))
      );
      rawAudio = el.mul(0.75, el.tanh(el.add(acousticTone, tongueTransient)));
      break;
    }
    case 11: {
      // Struck-string piano: short hammer excitation feeding multiple inharmonic
      // string modes. This is deliberately not a bar/plate or plucked-string model.
      const f0 = freqSignal;
      const hammer = el.mul(el.noise(), el.adsr(0.00015, 0.004 + (1 - b) * 0.004, 0, 0.002, gateSignal));
      const s1 = el.delay({ size: 44100 }, el.const({ value: Math.max(2, Math.min(4000, 44100 / Math.max(20, freq))) }), el.const({ value: 0.994 }), hammer);
      const s2 = el.delay({ size: 44100 }, el.const({ value: Math.max(2, Math.min(4000, 44100 / Math.max(20, freq * 2.001))) }), el.const({ value: 0.989 }), hammer);
      const s3 = el.delay({ size: 44100 }, el.const({ value: Math.max(2, Math.min(4000, 44100 / Math.max(20, freq * 3.006))) }), el.const({ value: 0.982 }), hammer);
      const tone = el.add(s1, el.add(el.mul(0.45, s2), el.mul(0.2, s3)));
      rawAudio = el.lowpass(900 + b * 7000, 1.0, tone);
      break;
    }
    case 12: {
      // Formant-style voice/choir approximation: voiced source plus breath/noise
      // shaped by two vocal resonances rather than treating the voice as a synth pad.
      const source = el.blepsaw(freqSignal);
      const breath = el.mul(0.08 + 0.16 * (1 - params.pressure), el.noise());
      const vowel = el.add(
        el.mul(0.7, el.svf({ mode: 'bandpass' }, 700 + b * 450, 5.0, source)),
        el.mul(0.45, el.svf({ mode: 'bandpass' }, 1200 + b * 900, 7.0, source)),
      );
      rawAudio = el.lowpass(7000, 1.1, el.add(vowel, breath));
      break;
    }
    case 13: {
      // Sustained organ: harmonics are held by the gate instead of a struck/plucked envelope.
      const h1 = el.cycle(freqSignal);
      const h2 = el.cycle(el.mul(freqSignal, 2));
      const h3 = el.cycle(el.mul(freqSignal, 3));
      const h4 = el.cycle(el.mul(freqSignal, 4));
      rawAudio = el.mul(el.adsr(0.008, 0.02, 0.95, 0.08, gateSignal), el.add(h1, el.add(el.mul(0.45, h2), el.add(el.mul(0.2, h3), el.mul(0.1, h4)))));
      break;
    }
    case 14: {
      // Electric piano / tine: struck tone with a bright inharmonic upper partial and tremor.
      const tine = el.cycle(freqSignal);
      const upper = el.mul(0.32, el.cycle(el.mul(freqSignal, 2.01)));
      const attackNoise = el.mul(0.12, el.mul(el.noise(), el.adsr(0.0003, 0.012, 0, 0.003, gateSignal)));
      rawAudio = el.lowpass(1100 + b * 6500, 1.2, el.add(tine, el.add(upper, attackNoise)));
      break;
    }
    case 10: {
      // Dual Free Reeds & Bellows (Bandoneon, Accordion, Shō)
      const f1 = freqSignal;
      const f2 = el.mul(freqSignal, 1.0038); // Characteristic beating
      const reed1 = el.blepsaw(f1);
      const reed2 = el.blepsaw(f2);
      const bellowsBreath = el.mul(0.05, el.noise());
      const reedSum = el.add(el.mul(0.5, reed1), el.add(el.mul(0.5, reed2), bellowsBreath));
      rawAudio = el.lowpass(800 + b * 4200, 1.1, reedSum);
      break;
    }
    case 8: {
      // Modal Bar / Kalimba / Marimba / Vibraphone
      // Transverse bar inharmonic mode ratios: 1.00, 2.756, 5.404, 8.933
      const f0 = freqSignal;
      const bar0 = el.mul(el.cycle(f0), el.adsr(0.0003, decayTime * 0.4, 0, 0.01, gateSignal));
      const bar1 = el.mul(0.35, el.mul(el.cycle(el.mul(f0, 2.756)), el.adsr(0.0003, decayTime * 0.2, 0, 0.005, gateSignal)));
      const bar2 = el.mul(0.15, el.mul(el.cycle(el.mul(f0, 5.404)), el.adsr(0.0003, decayTime * 0.1, 0, 0.002, gateSignal)));

      const strike = el.mul(0.3, el.adsr(0.0002, 0.005, 0, 0.002, gateSignal));
      rawAudio = el.add(strike, el.add(bar0, el.add(bar1, bar2)));
      break;
    }
    case 9: {
      // Programmed Electronic / Acid 303 / 808
      const osc1 = el.blepsaw(freqSignal);
      const osc2 = el.blepsquare(el.mul(freqSignal, 1.004));
      const sig = el.add(el.mul(0.5, osc1), el.mul(0.5, osc2));
      const cut = 300 + b * 7500;
      const q = 1 + params.resonance * 4;
      rawAudio = el.svf({ mode: 'lowpass' }, cut, q, sig);
      break;
    }
    case 0:
    case 1:
    default: {
      // Digital Waveguide Karplus-Strong Physical Plucked Strings
      // Decomposed sub-families:
      // 1. Course / string-count modeling (multi-loop detuned Karplus-Strong for 12-string, mandolin, tres, etc.)
      // 2. Sympathetic resonance halo for drone/sitar instruments (high-Q modal bandpass bank)
      // 3. Body-resonance presets by construction type ('gourd', 'wood-box', 'skin-faced', 'board', 'solid-electric')
      // 4. Excitation differentiation (hard-pick, plectrum, nail, hammer, fingerpad, plus rasgueado)
      const sr = 44100;
      const B = 0.00015; // String stiffness inharmonicity
      const pickPos = Math.max(0.05, Math.min(0.5, params.pluckPosition));
      const isRasgueado = action === 'abanico' || action === 'rasgueado' || params.articulation > 0.6;
      const excitation = params.excitationType ?? 'fingerpad';
      const construction = params.bodyConstruction ?? 'wood-box';
      const numCourses = params.courses ?? 1;
      const hasSympathetic = Boolean(params.sympatheticStrings);

      // --- 1. Excitation Modeling ---
      let impulse: Node;
      if (isRasgueado) {
        // Multi-finger strum roll sequence
        const b1 = el.adsr(0.0003, 0.006, 0, 0.003, gateSignal);
        const b2 = el.adsr(0.003, 0.006, 0, 0.003, gateSignal);
        const b3 = el.adsr(0.006, 0.006, 0, 0.003, gateSignal);
        impulse = el.mul(el.noise(), el.add(b1, el.add(b2, b3)));
      } else if (excitation === 'hard-pick') {
        // Crisp, punchy plectrum / hard pick with highpass tilt (banjo, 12-string, steel guitar)
        const burstEnv = el.adsr(0.0002, 0.0035, 0, 0.002, gateSignal);
        const burstNoise = el.highpass(1800, 1.2, el.noise());
        impulse = el.mul(burstNoise, burstEnv);
      } else if (excitation === 'plectrum') {
        // Medium plectrum (mandolin, oud, tres, bouzouki, sitar mizrab)
        const burstEnv = el.adsr(0.0003, 0.0045, 0, 0.0025, gateSignal);
        const burstNoise = el.svf({ mode: 'bandpass' }, 2200, 1.3, el.noise());
        impulse = el.mul(burstNoise, burstEnv);
      } else if (excitation === 'nail') {
        // Sharp nail transient with bright bite (Spanish guitar, flamenco, pipa, charango)
        const burstEnv = el.adsr(0.0004, 0.0055, 0, 0.003, gateSignal);
        const burstNoise = el.highpass(1500, 0.9, el.noise());
        impulse = el.mul(burstNoise, burstEnv);
      } else if (excitation === 'hammer') {
        // Wooden mallet impact (dulcimer, santur)
        const burstEnv = el.adsr(0.0006, 0.007, 0, 0.004, gateSignal);
        const burstNoise = el.svf({ mode: 'bandpass' }, 850, 1.5, el.noise());
        impulse = el.mul(burstNoise, burstEnv);
      } else {
        // Warm fingerpad (acoustic nylon, lute, koto, guqin, kalimba)
        const burstEnv = el.adsr(0.0008, 0.009, 0, 0.005, gateSignal);
        const burstNoise = el.lowpass(1400, 0.8, el.noise());
        impulse = el.mul(burstNoise, burstEnv);
      }

      // --- 2. Course / String-Count Modeling ---
      let stringSignal: Node;
      const baseDelay = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));

      if (numCourses > 1) {
        // Multi-course doubled/tripled strings with small independent detuning (±4-6 cents) and independent damping
        // Course 1 (center)
        const d1 = 0.988 - (1 - b) * 0.02;
        const loop1 = el.delay({ size: 44100 }, el.const({ value: baseDelay }), el.const({ value: d1 }), impulse);

        // Course 2 (+4.8 cents detune)
        const freqCourse2 = freq * 1.00277; // ~ +4.8 cents
        const delayCourse2 = Math.max(2, Math.min(4000, sr / Math.max(20, freqCourse2)));
        const d2 = 0.985 - (1 - b) * 0.022;
        const loop2 = el.delay({ size: 44100 }, el.const({ value: delayCourse2 }), el.const({ value: d2 }), impulse);

        if (numCourses >= 3) {
          // Course 3 (-4.2 cents detune)
          const freqCourse3 = freq * 0.99757; // ~ -4.2 cents
          const delayCourse3 = Math.max(2, Math.min(4000, sr / Math.max(20, freqCourse3)));
          const d3 = 0.983 - (1 - b) * 0.024;
          const loop3 = el.delay({ size: 44100 }, el.const({ value: delayCourse3 }), el.const({ value: d3 }), impulse);
          stringSignal = el.mul(0.48, el.add(loop1, el.add(loop2, loop3)));
        } else {
          stringSignal = el.mul(0.62, el.add(loop1, loop2));
        }
      } else {
        // Single course: Dual inharmonic delay loop
        const inharmonicDelay = Math.max(2, Math.min(4000, sr / Math.max(20, freq * Math.sqrt(1 + B * 4))));
        const loop1 = el.delay({ size: 44100 }, el.const({ value: baseDelay }), el.const({ value: 0.988 - (1 - b) * 0.02 }), impulse);
        const loop2 = el.delay({ size: 44100 }, el.const({ value: inharmonicDelay }), el.const({ value: 0.982 - (1 - b) * 0.02 }), impulse);
        stringSignal = el.add(loop1, el.mul(0.25, loop2));
      }

      // --- 3. Body-Resonance Presets by Construction Type ---
      let bodyOut: Node;
      if (construction === 'gourd') {
        // Gourd resonator (kora, berimbau, sitar): narrow/nasal modes, highpass cut below 140Hz
        const highPassed = el.highpass(140, 0.9, stringSignal);
        const m1 = el.svf({ mode: 'bandpass' }, 280, 3.8, highPassed);
        const m2 = el.svf({ mode: 'bandpass' }, 640, 3.2, highPassed);
        const m3 = el.svf({ mode: 'bandpass' }, 1250, 2.8, highPassed);
        bodyOut = el.add(highPassed, el.add(el.mul(0.30, m1), el.add(el.mul(0.28, m2), el.mul(0.18, m3))));
      } else if (construction === 'skin-faced') {
        // Stretched skin membrane on rim (banjo, shamisen, sarangi): bright, snappy attack, shorter sustain
        const m1 = el.svf({ mode: 'bandpass' }, 420, 4.8, stringSignal);
        const m2 = el.svf({ mode: 'bandpass' }, 890, 3.8, stringSignal);
        const m3 = el.svf({ mode: 'bandpass' }, 1650, 3.0, stringSignal);
        bodyOut = el.add(stringSignal, el.add(el.mul(0.35, m1), el.add(el.mul(0.25, m2), el.mul(0.20, m3))));
      } else if (construction === 'board') {
        // Long solid board resonator (koto, guqin, guzheng, dulcimer): deep wood fundamental, long even sustain, no click
        const m1 = el.svf({ mode: 'bandpass' }, 135, 2.2, stringSignal);
        const m2 = el.svf({ mode: 'bandpass' }, 270, 2.4, stringSignal);
        const m3 = el.svf({ mode: 'bandpass' }, 520, 1.8, stringSignal);
        const smoothedString = el.lowpass(5500, 0.8, stringSignal);
        bodyOut = el.add(smoothedString, el.add(el.mul(0.40, m1), el.add(el.mul(0.28, m2), el.mul(0.16, m3))));
      } else if (construction === 'solid-electric') {
        // Solid electric guitar body
        const m1 = el.svf({ mode: 'bandpass' }, 450, 1.8, stringSignal);
        const m2 = el.svf({ mode: 'bandpass' }, 2400, 1.5, stringSignal);
        bodyOut = el.add(stringSignal, el.add(el.mul(0.15, m1), el.mul(0.20, m2)));
      } else {
        // 'wood-box' (default acoustic guitar, oud, charango, tres, vihuela)
        const airRes = el.svf({ mode: 'bandpass' }, 100, 3.0, stringSignal);
        const woodRes = el.svf({ mode: 'bandpass' }, 220, 2.5, stringSignal);
        const topRes = el.svf({ mode: 'bandpass' }, 380, 2.0, stringSignal);
        bodyOut = el.add(stringSignal, el.add(el.mul(0.35, airRes), el.add(el.mul(0.25, woodRes), el.mul(0.15, topRes))));
      }

      // --- 4. Sympathetic Resonance Halo (Sitar / Sarangi drone strings) ---
      let finalAcoustic = bodyOut;
      if (hasSympathetic) {
        // Bank of lightly-damped high-Q bandpass resonators tuned to raga/scale swaras
        // Fed by continuous tap of main string, producing a sustained sympathetic halo
        const droneBase = 146.83; // D3 / typical Sa drone
        const tarabRatios = [1.0, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2.0, 2.25, 2.5];
        const sympatheticTap = el.mul(0.14, stringSignal);
        const tarabNodes = tarabRatios.map(r => el.svf({ mode: 'bandpass' }, droneBase * r, 24.0, sympatheticTap));
        const sumTarab = tarabNodes.reduce((acc, curr) => el.add(acc, curr));
        finalAcoustic = el.add(bodyOut, el.mul(0.85, sumTarab));
      }

      // Pluck position comb filter
      const combOffset = Math.max(1, baseDelay * pickPos);
      const combSig = el.sub(finalAcoustic, el.delay({ size: 44100 }, el.const({ value: combOffset }), el.const({ value: 0 }), finalAcoustic));

      const filterCutoff = construction === 'board'
        ? 700 + b * 4500
        : (construction === 'skin-faced' ? 1200 + b * 7500 : 900 + b * 6800);
      rawAudio = el.lowpass(filterCutoff, 1.0, combSig);
      break;
    }
  }

  const gain = el.mul(velSignal, env);
  return el.mul(gain, rawAudio);
}

/**
 * Render complete Track signal (sum of all track voices + volume/pan)
 */
export function renderTrack(
  trackId: string,
  voices: VoiceState[],
  params: TrackParams
): { left: Node; right: Node } {
  if (voices.length === 0) {
    const zero = el.const({ value: 0 });
    return { left: zero, right: zero };
  }

  const voiceNodes = voices.map((v, idx) => renderVoice(trackId, idx, v, params));
  const sum = voiceNodes.length === 1 ? voiceNodes[0] : el.add(...voiceNodes);
  const trackVol = el.mul(el.const({ key: `${trackId}:vol`, value: params.volume }), sum);

  const pan = Math.max(0, Math.min(1, params.pan));
  const leftGain = Math.cos(pan * Math.PI * 0.5);
  const rightGain = Math.sin(pan * Math.PI * 0.5);

  const left = el.mul(el.const({ value: leftGain }), trackVol);
  const right = el.mul(el.const({ value: rightGain }), trackVol);

  return {
    left,
    right,
  };
}

/**
 * Render Master Mix Bus Chain
 * Direct stereo summation with gentle high-pass DC/sub-rumble filtering and master level.
 * No room simulation or artificial reverb.
 */
export function renderMaster(
  trackSignals: {
    left: Node;
    right: Node;
  }[],
  params: MasterParams = defaultMasterParams()
): { left: Node; right: Node } {
  let leftSum: Node;
  let rightSum: Node;

  if (trackSignals.length === 0) {
    leftSum = el.const({ value: 0 });
    rightSum = el.const({ value: 0 });
  } else if (trackSignals.length === 1) {
    leftSum = trackSignals[0].left;
    rightSum = trackSignals[0].right;
  } else {
    leftSum = el.add(...trackSignals.map(t => t.left));
    rightSum = el.add(...trackSignals.map(t => t.right));
  }

  const hpFreq = Math.max(15, params.highPass ?? 20);
  const hpLeft = el.highpass(hpFreq, 0.707, leftSum);
  const hpRight = el.highpass(hpFreq, 0.707, rightSum);

  const vol = Math.max(0, Math.min(2.0, params.volume ?? 1.0));
  const finalLeft = el.mul(el.const({ value: vol }), hpLeft);
  const finalRight = el.mul(el.const({ value: vol }), hpRight);

  return { left: finalLeft, right: finalRight };
}
