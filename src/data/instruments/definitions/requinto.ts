import type { InstrumentDef } from '../types';

export const requinto: InstrumentDef = {
  id: "requinto",
  name: "Requinto",
  family: "plucked",
  program: 25,
  octave: 12,
  voicing: "single",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "plectrum",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 4,
  note: "High-register lead guitar color",
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
    materialDensity: 0.65,
    tension: 0.8,
    bodyResonanceVolume: 7,
    decayTimeFactor: 2,
    harmonicRichness: 0.75,
    courses: 1,
    bodyConstruction: "wood-box",
    excitationType: "plectrum"
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
