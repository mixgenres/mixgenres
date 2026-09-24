import type { InstrumentDef } from '../types';

export const cuica: InstrumentDef = {
  id: "cuica",
  name: "Cuíca",
  category: "percussion",
  family: "hand-drums",
  timbreProfile: {
    brightness: 0.7,
    warmth: 0.4,
    transientSharpness: 0.8,
    sustainAmount: 0.3,
  },
  supportedArticulations: ["friction_high", "friction_low", "damped", "friction_mod", "cuica-friction"],
  defaultArticulation: "friction_high",
  range: { minNote: 60, maxNote: 72 },
  drum: {
    low: 53,
    mid: 54,
    high: 55
  },
  voicing: "unpitched",
  elementaryModel: 4,
  makeupGain: 4.282,
  polyphony: 8,
  note: "Brazilian friction drum; internal bamboo cane rubbed with moist cloth producing singing, expressive pitch glissandi",
  acousticProfile: {
    sustain: "percussive",
    role: "perc",
    centre: 60,
    low: 0,
    high: 127,
    pan: 0.3,
    trim: -1,
    space: 0.18,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.8,
    tension: 0.8,
    bodyResonanceVolume: 5,
    decayTimeFactor: 0.7,
    harmonicRichness: 0.8
  },
  techniques: {
    articulations: ["accent", "staccato", "ghost", "roll", "open", "low-tone"],
    techniqueMethods: [
      "bamboo stick friction rubbing",
      "thumb membrane pitch-bending pressure",
      "high-pitched laughing squeak",
      "damped low percussive pop"
    ],
    playingStyles: ["samba", "batucada", "bossa", "pagode", "mpb"],
    genreTechniques: {
      samba: ["accent", "ghost", "open", "low-tone"],
      batucada: ["accent", "roll", "open"],
      bossa: ["ghost", "staccato"]
    }
  }
};
