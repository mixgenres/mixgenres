import type { InstrumentDef, InstrumentDefinition } from '../types';

export const agogo: InstrumentDef & InstrumentDefinition = {
  id: "agogo",
  name: "Agogô",
  category: "percussion",
  family: "metal-and-wood",
  drum: {
    low: 68,
    mid: 67,
    high: 67
  },
  voicing: "unpitched",
  elementaryModel: 18,
  makeupGain: 4.642,
  polyphony: 8,
  note: "Two pitched steel conical bells joined by a flexible handle struck with wooden stick in samba and capoeira",
  timbreProfile: {
    brightness: 0.95,
    warmth: 0.1,
    transientSharpness: 0.9,
    sustainAmount: 0.4,
  },
  supportedArticulations: ['low_bell_open', 'low_bell_muted', 'high_bell_open', 'high_bell_muted', 'accent', 'staccato', 'ghost'],
  defaultArticulation: 'high_bell_open',
  range: { minNote: 67, maxNote: 72 },
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
    materialDensity: 0.95,
    tension: 0.98,
    bodyResonanceVolume: 0.8,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.92
  },
  techniques: {
    articulations: ["low_bell_open", "low_bell_muted", "high_bell_open", "high_bell_muted", "accent", "staccato", "ghost", "open", "low-tone"],
    techniqueMethods: [
      "wooden stick striking low and high bell",
      "squeezing bells together for handle click",
      "interlocking syncopated ostinato",
      "rim shot accents"
    ],
    playingStyles: ["samba", "batucada", "capoeira", "afrobeats", "candomble"],
    genreTechniques: {
      samba: ["high_bell_open", "low_bell_open", "accent", "staccato", "open", "low-tone"],
      batucada: ["accent", "staccato", "open"],
      capoeira: ["accent", "low-tone", "open"]
    }
  }
};

export const Agogo = agogo;
