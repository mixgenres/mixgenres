import type { InstrumentDef } from '../types';

export const shaker: InstrumentDef = {
  id: "shaker",
  name: "Shaker",
  family: "metal-and-wood",
  drum: {
    low: 82,
    mid: 82,
    high: 82
  },
  voicing: "unpitched",
  elementaryModel: 17,
  makeupGain: 23.740,
  polyphony: 8,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.42,
    trim: -6,
    space: 0.12,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.4,
    tension: 0.8,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 0.3,
    harmonicRichness: 0.9
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
