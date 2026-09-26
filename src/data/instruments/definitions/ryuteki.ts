import type { InstrumentDef } from '../types';

export const ryuteki: InstrumentDef = {
  id: "ryuteki",
  name: "Ryuteki",
  family: "winds",
  program: 73,
  octave: 12,
  voicing: "single",
  elementaryModel: 7,
  makeupGain: 0.422,
  polyphony: 4,
  note: "Gagaku flute",
  acousticProfile: {
    sustain: "blown",
    role: "lead",
    centre: 72,
    low: 58,
    high: 94,
    pan: 0.22,
    trim: -3,
    space: 0.45,
    ring: 3
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.4,
    tension: 0.5,
    bodyResonanceVolume: 0.6,
    decayTimeFactor: 0.4,
    harmonicRichness: 0.55
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
