import type { InstrumentDef } from '../types';

export const slide_guitar: InstrumentDef = {
  id: "slide-guitar",
  name: "Slide guitar",
  family: "plucked",
  voicing: "single",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "hard-pick",
  elementaryModel: 0,
  makeupGain: 4.282,
  polyphony: 4,
  note: "fretted string guitar played with slide; continuous portamento and vocal bends",
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 57,
    low: 40,
    high: 84,
    pan: 0.18,
    trim: 0,
    space: 0.24,
    ring: 2.5
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.6,
    tension: 0.75,
    bodyResonanceVolume: 14,
    decayTimeFactor: 2.8,
    harmonicRichness: 0.85,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "hard-pick"
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll"],
    techniqueMethods: ["style-specific attack", "velocity shaping", "muting/damping"],
    playingStyles: ["genre-native performance"],
    genreTechniques: {}
  }
};
