import type { InstrumentDef } from '../types';

export const palmas: InstrumentDef = {
  id: "palmas",
  name: "Palmas",
  family: "body-percussion",
  drum: {
    low: 39,
    mid: 39,
    high: 39
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 0.281,
  polyphony: 8,
  note: "Hand claps, sordas or fuertes",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.2,
    trim: -2,
    space: 0.2,
    ring: 0.5,
    ensembleSmearMs: 18
  },
  luthierPhysics: {
    category: "body_impact",
    materialDensity: 0.5,
    tension: 0.6,
    bodyResonanceVolume: 0.3,
    decayTimeFactor: 0.1,
    harmonicRichness: 0.5
  },
  techniques: {
    articulations: ["accent", "ghost", "staccato", "open"],
    techniqueMethods: ["palmas sordas", "palmas fuertes", "base and second-voice patterns", "flamenco compas accents"],
    playingStyles: ["flamenco", "bulerias", "solea", "tangos", "rumba", "cantiñas", "sevillanas"]
  }
};
