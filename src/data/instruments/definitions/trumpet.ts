import type { InstrumentDef } from '../types';

export const trumpet: InstrumentDef = {
  id: "trumpet",
  name: "Bb Trumpet",
  family: "brass",
  program: 56,
  voicing: "single",
  bodyConstruction: "metal-shell",
  excitationType: "breath",
  elementaryModel: 15,
  makeupGain: 0.55,
  polyphony: 4,
  note: "Bb brass trumpet providing piercing mambo brass stabs, screaming lead lines, and warm cup-muted ballad tones",
  acousticProfile: {
    sustain: "blown",
    role: "melody",
    centre: 70,
    low: 55,
    high: 88,
    pan: 0.36,
    trim: -1,
    space: 0.3,
    ring: 2.5
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.92,
    tension: 0.88,
    bodyResonanceVolume: 4.5,
    decayTimeFactor: 0.9,
    harmonicRichness: 0.9,
    airResonanceHz: 466,
    excitationType: "breath"
  },
  formantProfile: {
    f1: {
      freq: 1200,
      q: 2,
      gain: 0.75
    },
    f2: {
      freq: 2600,
      q: 2.4,
      gain: 0.5
    },
    f3: {
      freq: 4600,
      q: 2,
      gain: 0.25
    },
    tongueType: "lip-slap",
    tongueFreq: 2400
  },
  tuningAndMechanics: {
    tuningName: "Bb Trumpet Range",
    keyRange: {
      lowNote: "F#3",
      highNote: "D6",
      lowMidi: 54,
      highMidi: 86
    }
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 2,
      speedMs: 90,
      curve: "exponential"
    },
    vibrato: {
      rateHz: 5.6,
      depthCents: 30,
      onsetDelayMs: 220
    },
    mute: {
      dampingFactor: 0.75,
      cutoffFreqHz: 1600,
      decayTimeSec: 0.2
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "growl",
      "doit",
      "fall",
      "shake",
      "cup-mute"
    ],
    techniqueMethods: [
      "lip buzzing lip-trills",
      "half-valve pitch bends",
      "plunger mute wah-wah",
      "double tonguing"
    ],
    playingStyles: ["salsa", "jazz", "mambo", "mariachi", "funk", "ska"],
    genreTechniques: {
      salsa: ["accent", "staccato", "fall", "shake"],
      jazz: ["legato", "staccato", "bend", "vibrato"],
      mariachi: ["accent", "vibrato", "legato"]
    }
  }
};
