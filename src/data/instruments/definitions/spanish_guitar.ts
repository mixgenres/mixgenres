import type { InstrumentDef } from '../types';

export const spanish_guitar: InstrumentDef = {
  id: "spanish-guitar",
  name: "Spanish Nylon Guitar",
  family: "plucked",
  program: 24,
  voicing: "chord",
  courses: 1,
  bodyConstruction: "wood-box",
  excitationType: "nail",
  elementaryModel: 0,
  makeupGain: 30.000,
  polyphony: 8,
  note: "Handcrafted concert nylon-string acoustic guitar for flamenco, bossa nova, classical, and tango",
  bank: 1,
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 55,
    low: 40,
    high: 76,
    pan: 0.22,
    trim: 0,
    space: 0.26,
    ring: 2.6
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.65,
    tension: 0.72,
    bodyResonanceVolume: 12,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.75,
    faustProfile: "spanish-guitar",
    soundboardResonanceHz: 190,
    airResonanceHz: 98,
    excitationType: "nail",
    bodyConstruction: "wood-box"
  },
  tuningAndMechanics: {
    tuningName: "E Standard Nylon",
    courses: 1,
    frets: 19,
    openStrings: [
      {
        name: "E2",
        note: "E2",
        midi: 40,
        frequencyHz: 82.41
      },
      {
        name: "A2",
        note: "A2",
        midi: 45,
        frequencyHz: 110
      },
      {
        name: "D3",
        note: "D3",
        midi: 50,
        frequencyHz: 146.83
      },
      {
        name: "G3",
        note: "G3",
        midi: 55,
        frequencyHz: 196
      },
      {
        name: "B3",
        note: "B3",
        midi: 59,
        frequencyHz: 246.94
      },
      {
        name: "E4",
        note: "E4",
        midi: 64,
        frequencyHz: 329.63
      }
    ]
  },
  performanceArticulations: {
    rasgueado: {
      burstNotes: 5,
      spreadMs: 35,
      directionPattern: ["down", "down", "down", "down", "up"],
      nailTransientSharpness: 0.92
    },
    golpe: {
      bodyTapPitchHz: 185,
      transientDecayMs: 40,
      gainDb: 3
    },
    bend: {
      maxSemitones: 2,
      speedMs: 110,
      curve: "s-curve"
    },
    mute: {
      dampingFactor: 0.8,
      cutoffFreqHz: 1200,
      decayTimeSec: 0.18
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "rasgueado",
      "alzapua",
      "tremolo",
      "arrastre",
      "palm-mute",
      "golpe"
    ],
    techniqueMethods: [
      "picado",
      "ligado",
      "pulgar-apoyando",
      "rasgueado",
      "alzapúa",
      "golpe",
      "tirando"
    ],
    playingStyles: ["flamenco", "tango", "bossa-nova", "latin-jazz", "classical"],
    genreTechniques: {
      flamenco: ["rasgueado", "alzapua", "tremolo", "accent", "golpe"],
      tango: ["rasgueado", "staccato", "arrastre"],
      "bossa-nova": ["legato", "accent", "staccato"]
    }
  }
};
