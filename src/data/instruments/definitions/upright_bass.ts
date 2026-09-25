import type { InstrumentDef } from '../types';

export const upright_bass: InstrumentDef = {
  id: "upright-bass",
  name: "Upright Bass",
  family: "plucked",
  program: 32,
  voicing: "bass",
  bodyConstruction: "wood-box",
  excitationType: "fingerpad",
  elementaryModel: 3,
  makeupGain: 30.722,
  polyphony: 4,
  note: "Acoustic 3/4 spruce/maple double bass delivering deep woody resonance, pizzicato growl, tango arrastre slides, and walking basslines",
  acousticProfile: {
    sustain: "decaying",
    role: "bass",
    centre: 40,
    low: 28,
    high: 57,
    pan: 0,
    trim: 1,
    space: 0.1,
    ring: 1.4
  },
  luthierPhysics: {
    category: "strum_friction_pluck",
    materialDensity: 0.82,
    tension: 0.72,
    bodyResonanceVolume: 220,
    decayTimeFactor: 2.6,
    harmonicRichness: 0.75,
    faustProfile: "double-bass",
    soundboardResonanceHz: 65,
    airResonanceHz: 42,
    excitationType: "fingerpad",
    bodyConstruction: "wood-box"
  },
  tuningAndMechanics: {
    tuningName: "EADG Standard Bass",
    frets: 0,
    openStrings: [
      {
        name: "E1",
        note: "E1",
        midi: 28,
        frequencyHz: 41.2
      },
      {
        name: "A1",
        note: "A1",
        midi: 33,
        frequencyHz: 55
      },
      {
        name: "D2",
        note: "D2",
        midi: 38,
        frequencyHz: 73.42
      },
      {
        name: "G2",
        note: "G2",
        midi: 43,
        frequencyHz: 98
      }
    ]
  },
  performanceArticulations: {
    arrastre: {
      preBeatOffsetMs: -45,
      pitchDragSemitones: -3,
      pressureRamp: true,
      velocityGrowth: 1.35
    },
    slap: {
      transientSharpness: 0.85,
      dampingFactor: 0.5,
      openToneGainDb: 3,
      popOctaveSnap: true
    },
    pizzicato: {
      damping: 0.3,
      pluckHardness: 0.65
    },
    bend: {
      maxSemitones: 2,
      speedMs: 130,
      curve: "exponential"
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "ghost",
      "pizzicato",
      "harmonic",
      "arco",
      "arrastre",
      "slap",
      "strappata",
      "golpe"
    ],
    techniqueMethods: [
      "pizzicato",
      "arco",
      "walking",
      "one-finger pull",
      "arrastre drag",
      "slap-pop",
      "strappata slap",
      "golpe body thud"
    ],
    playingStyles: ["jazz", "tango", "folk", "bluegrass", "rockabilly", "bossa-nova"],
    genreTechniques: {
      jazz: ["pizzicato", "legato", "ghost", "accent"],
      tango: ["arrastre", "strappata", "staccato", "accent", "pizzicato", "golpe"],
      bluegrass: ["slap", "pizzicato", "accent"]
    }
  }
};
