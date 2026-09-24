import type { InstrumentDef, InstrumentDefinition } from '../types';

export const shekere: InstrumentDef & InstrumentDefinition = {
  id: 'shekere',
  name: 'Shekere',
  category: 'percussion',
  family: 'hand-drums',
  drum: {
    low: 62,
    mid: 64,
    high: 67,
  },
  voicing: 'unpitched',
  elementaryModel: 17,
  makeupGain: 3.8,
  polyphony: 8,
  note: 'West African gourd rattle covered with woven bead netting, producing crisp shaken and bottom-tap pulses',
  timbreProfile: {
    brightness: 0.85,
    warmth: 0.2,
    transientSharpness: 0.7,
    sustainAmount: 0.15,
  },
  supportedArticulations: ['shake_down', 'shake_up', 'bottom_tap', 'accent', 'ghost', 'staccato'],
  defaultArticulation: 'shake_down',
  range: { minNote: 62, maxNote: 67 },
  acousticProfile: {
    sustain: 'percussive',
    role: 'perc',
    centre: 64,
    low: 0,
    high: 127,
    pan: 0.25,
    trim: -2,
    space: 0.18,
    ring: 0.4,
  },
  luthierPhysics: {
    category: 'resonator_struck_metal_wood',
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 1.2,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.8,
  },
  techniques: {
    articulations: ['shake_down', 'shake_up', 'bottom_tap', 'accent', 'ghost'],
    techniqueMethods: [
      'downward thrust shaking beads against dried gourd body',
      'upward snap returning beads to neck',
      'palm strike on bottom of gourd for low bass resonance',
    ],
    playingStyles: ['afrobeats', 'highlife', 'candomble', 'salsa', 'latin_jazz'],
    genreTechniques: {
      afrobeats: ['shake_down', 'shake_up', 'bottom_tap'],
      highlife: ['shake_down', 'shake_up'],
      salsa: ['shake_down', 'bottom_tap'],
    },
  },
};

export const Shekere = shekere;
