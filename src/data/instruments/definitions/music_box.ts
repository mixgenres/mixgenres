import type { InstrumentDef } from '../types';

export const music_box: InstrumentDef = {
  id: "music-box",
  name: "Music box",
  family: "metal-and-wood",
  program: 10,
  voicing: "single",
  elementaryModel: 8,
  makeupGain: 0.985,
  polyphony: 4,
  acousticProfile: {
    sustain: "decaying",
    role: "lead",
    centre: 84,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -6,
    space: 0.45,
    ring: 3
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.95,
    tension: 0.9,
    bodyResonanceVolume: 0.1,
    decayTimeFactor: 1.5,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
