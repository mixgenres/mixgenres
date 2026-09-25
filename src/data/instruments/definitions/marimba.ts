import type { InstrumentDef } from '../types';

export const marimba: InstrumentDef = {
  id: "marimba",
  name: "Marimba",
  family: "metal-and-wood",
  program: 12,
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 0.985,
  polyphony: 4,
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 64,
    low: 45,
    high: 84,
    pan: -0.2,
    trim: -2,
    space: 0.3,
    ring: 2
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 25,
    decayTimeFactor: 1.8,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
