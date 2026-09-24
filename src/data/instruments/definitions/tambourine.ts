import type { InstrumentDef } from '../types';

export const tambourine: InstrumentDef = {
  id: "tambourine",
  name: "Tambourine",
  family: "metal-and-wood",
  drum: {
    low: 54,
    mid: 54,
    high: 54
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 6.986,
  polyphony: 8,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.4,
    trim: -5,
    space: 0.16,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.8,
    tension: 0.75,
    bodyResonanceVolume: 1.5,
    decayTimeFactor: 0.35,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
