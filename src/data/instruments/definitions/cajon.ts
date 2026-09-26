import type { InstrumentDef } from '../types';

export const cajon: InstrumentDef = {
  id: "cajon",
  name: "Cajón",
  family: "hand-drums",
  drum: {
    low: 36,
    mid: 38,
    high: 42
  },
  voicing: "unpitched",
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 4,
  makeupGain: 0.942,
  polyphony: 12,
  note: "Wooden box drum with internal guitar string snares or wire tension, played with hands for deep bass thump and high snare slap",
  acousticProfile: {
    sustain: "percussive",
    role: "percussion",
    centre: 38,
    low: 36,
    high: 42,
    pan: 0.1,
    trim: 0,
    space: 0.14,
    ring: 0.5
  },
  luthierPhysics: {
    category: "membrane_tension_2d",
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 20,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.6,
    faustProfile: "flamenco-cajon",
    articulationCapabilities: ["bass", "slap", "tip", "side-tap", "brush", "roll"],
    genreAdaptable: true,
    bodyConstruction: "wood-box",
    excitationType: "fingerpad"
  },
  kitComponents: [
    {
      id: "cajon-bass",
      name: "Cajón Center Bass Thump",
      midi: 36,
      physicalType: "wood",
      tuningHz: 65,
      decayTimeSec: 0.4,
      damping: 0.45,
      shellResonance: 0.9,
      strikeZones: ["bass", "center"],
      defaultPan: 0.1,
      gainTrimDb: 1.5,
      synthesisNotes: "Full palm strike in center of wooden front plate driving internal air cavity resonance"
    },
    {
      id: "cajon-slap",
      name: "Cajón High Snare Slap",
      midi: 38,
      physicalType: "wood",
      tuningHz: 220,
      decayTimeSec: 0.08,
      damping: 0.85,
      shellResonance: 0.5,
      strikeZones: ["slap", "edge"],
      defaultPan: 0.1,
      gainTrimDb: 0.5,
      synthesisNotes: "Relaxed finger slap on upper corner exciting internal guitar snare wire buzz"
    },
    {
      id: "cajon-tip",
      name: "Cajón Fingertip Tap",
      midi: 42,
      physicalType: "wood",
      tuningHz: 350,
      decayTimeSec: 0.08,
      damping: 0.85,
      strikeZones: ["tip"],
      defaultPan: 0.1,
      gainTrimDb: -4,
      synthesisNotes: "Delicate ghost note fingertip touch on top wood plate"
    },
    {
      id: "cajon-side",
      name: "Cajón Side Wood Tap",
      midi: 37,
      physicalType: "wood",
      tuningHz: 480,
      decayTimeSec: 0.1,
      damping: 0.9,
      strikeZones: ["rim"],
      defaultPan: 0.1,
      gainTrimDb: -2
    }
  ],
  performanceArticulations: {
    slap: {
      transientSharpness: 0.9,
      dampingFactor: 0.6
    },
    golpe: {
      bodyTapPitchHz: 190,
      transientDecayMs: 35,
      gainDb: 2
    }
  },
  techniques: {
    articulations: ["accent", "low-tone", "slap", "ghost", "golpe", "brushed", "roll", "tip", "staccato"],
    techniqueMethods: [
      "center palm bass thump",
      "corner finger snare slap",
      "fingertip ghost taps",
      "side wood knock",
      "flamenco bulería accenting"
    ],
    playingStyles: ["flamenco", "afro-peruvian", "rumba", "acoustic-pop", "folk"],
    genreTechniques: {
      flamenco: ["slap", "accent", "golpe", "staccato"],
      "afro-peruvian": ["slap", "accent", "ghost"],
      rumba: ["slap", "accent", "staccato"]
    }
  }
};
