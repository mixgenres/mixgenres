import type { InstrumentDef } from '../types';

export const melodica: InstrumentDef = {
  id: "melodica",
  name: "Melodica",
  family: "winds",
  program: 21,
  octave: 12,
  voicing: "single",
  elementaryModel: 10,
  makeupGain: 0.697,
  polyphony: 4,
  note: "Breathy melodica line",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 69,
    low: 55,
    high: 92,
    pan: 0.26,
    trim: -2,
    space: 0.34,
    ring: 3
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 1,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.7
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
