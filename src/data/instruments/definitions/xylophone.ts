import type { InstrumentDef } from '../types';

export const xylophone: InstrumentDef = {
  id: "xylophone",
  name: "Xylophone",
  family: "metal-and-wood",
  program: 13,
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 2.175,
  polyphony: 4,
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 79,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -5,
    space: 0.3,
    ring: 1
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.5,
    tension: 0.8,
    bodyResonanceVolume: 3,
    decayTimeFactor: 0.6,
    harmonicRichness: 0.4
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
