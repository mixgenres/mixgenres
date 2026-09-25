import type { InstrumentDef } from '../types';

export const ride: InstrumentDef = {
  id: "ride",
  name: "Ride cymbal",
  family: "metal-and-wood",
  drum: {
    low: 51,
    mid: 51,
    high: 53
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.209,
  polyphony: 8,
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.34,
    trim: -3,
    space: 0.22,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.85,
    bodyResonanceVolume: 2,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.85
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
