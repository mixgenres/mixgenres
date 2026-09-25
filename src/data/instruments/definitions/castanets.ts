import type { InstrumentDef } from '../types';

export const castanets: InstrumentDef = {
  id: "castanets",
  name: "Castanets",
  family: "metal-and-wood",
  drum: {
    low: 76,
    mid: 77,
    high: 77
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.209,
  polyphony: 8,
  note: "Pair of concave hardwood shells clapped together by flamenco dancers and orchestral percussionists",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.46,
    trim: -5,
    space: 0.14,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.6,
    tension: 0.8,
    bodyResonanceVolume: 0.15,
    decayTimeFactor: 0.12,
    harmonicRichness: 0.55
  },
  techniques: {
    articulations: ["accent", "staccato", "roll", "flam", "ghost"],
    techniqueMethods: [
      "carretilla four-finger cascading roll (right hand)",
      "golpe single accent snap (left hand)",
      "postizo muffled click",
      "rhythmic dance accompaniment"
    ],
    playingStyles: ["flamenco", "classical-spanish", "folklorico", "orchestral"],
    genreTechniques: {
      flamenco: ["accent", "roll", "staccato", "flam"],
      "classical-spanish": ["roll", "accent", "staccato"]
    }
  }
};
