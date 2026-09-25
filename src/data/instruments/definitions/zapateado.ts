import type { InstrumentDef } from '../types';

export const zapateado: InstrumentDef = {
  id: "zapateado",
  name: "Zapateado footwork",
  family: "body-percussion",
  drum: {
    low: 39,
    mid: 76,
    high: 77
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.209,
  polyphony: 8,
  note: "Footwork percussion",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: -0.34,
    trim: -3,
    space: 0.22,
    ring: 0.5
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.6,
    tension: 0.6,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 0.15,
    harmonicRichness: 0.4
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
