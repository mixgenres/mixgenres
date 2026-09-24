import type { InstrumentDef } from '../types';

export const piano: InstrumentDef = {
  id: "piano",
  name: "Acoustic Grand Piano",
  family: "bellows-and-keys",
  program: 0,
  voicing: "chord",
  bodyConstruction: "wood-box",
  excitationType: "hammer",
  sympatheticStrings: true,
  elementaryModel: 11,
  makeupGain: 3.54,
  polyphony: 8,
  note: "Concert grand piano with felt hammers striking steel strings over a spruce soundboard, providing dynamic montunos, comping, and solos",
  acousticProfile: {
    sustain: "decaying",
    role: "harmony",
    centre: 60,
    low: 21,
    high: 108,
    pan: -0.08,
    trim: 0,
    space: 0.22,
    ring: 3
  },
  luthierPhysics: {
    category: "resonator_struck_metal_wood",
    materialDensity: 0.88,
    tension: 0.9,
    bodyResonanceVolume: 350,
    decayTimeFactor: 3.5,
    harmonicRichness: 0.78,
    soundboardResonanceHz: 120,
    sympatheticStrings: true,
    bodyConstruction: "wood-box",
    excitationType: "hammer"
  },
  tuningAndMechanics: {
    tuningName: "88-Key Concert Grand Piano A440 Equal Temperament",
    frets: 88,
    keyRange: {
      lowNote: "A0",
      highNote: "C8",
      lowMidi: 21,
      highMidi: 108
    }
  },
  performanceArticulations: {
    pizzicato: {
      damping: 0.8,
      pluckHardness: 0.9
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "sostenuto",
      "montuno",
      "octave-stabs"
    ],
    techniqueMethods: [
      "sustain pedal resonance",
      "octave octave bass coupling",
      "syncopated salsa montuno two-hand interlocking"
    ],
    playingStyles: ["classical", "jazz", "salsa", "pop", "rock", "gospel", "bossa-nova"],
    genreTechniques: {
      salsa: ["montuno", "accent", "staccato", "octave-stabs"],
      jazz: ["legato", "accent", "staccato", "tenuto"],
      classical: ["legato", "sostenuto", "tenuto"]
    }
  }
};
