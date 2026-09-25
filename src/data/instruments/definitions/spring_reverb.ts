import type { InstrumentDef } from '../types';

export const spring_reverb: InstrumentDef = {
  id: "spring-reverb",
  name: "Spring reverb",
  family: "electronic",
  drum: {
    low: 36,
    mid: 38,
    high: 42
  },
  voicing: "unpitched",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "spring tank reverb; boingy metallic decay",
  acousticProfile: {
    sustain: "sustained",
    role: "perc",
    centre: 60,
    low: 36,
    high: 90,
    pan: 0,
    trim: -2,
    space: 0.3,
    ring: 4
  },
  luthierPhysics: {
    category: "electro_acoustic_algorithmic",
    materialDensity: 0.65,
    tension: 0.6,
    bodyResonanceVolume: 8,
    decayTimeFactor: 3,
    harmonicRichness: 0.65
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll"],
    techniqueMethods: ["style-specific attack", "velocity shaping", "muting/damping"],
    playingStyles: ["genre-native performance"],
    genreTechniques: {}
  }
};
