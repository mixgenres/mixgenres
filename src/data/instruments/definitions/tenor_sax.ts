import type { InstrumentDef } from '../types';

export const tenor_sax: InstrumentDef = {
  id: "tenor-sax",
  name: "Bb Tenor Saxophone",
  family: "winds",
  program: 66,
  voicing: "single",
  bodyConstruction: "brass-tube",
  excitationType: "breath",
  note: "Bb brass single-reed tenor saxophone with husky low register, smoky subtones, and screaming high altissimo bends",
  acousticProfile: {
    sustain: "blown",
    role: "melody",
    centre: 62,
    low: 44,
    high: 80,
    pan: -0.26,
    trim: -1,
    space: 0.32,
    ring: 2.8
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.85,
    tension: 0.82,
    bodyResonanceVolume: 8.5,
    decayTimeFactor: 1.1,
    harmonicRichness: 0.85,
    airResonanceHz: 233,
    excitationType: "breath"
  },
  tuningAndMechanics: {
    tuningName: "Bb Tenor Saxophone Range",
    keyRange: { lowNote: "Ab2", highNote: "E5", lowMidi: 44, highMidi: 80 }
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 3,
      speedMs: 110,
      curve: "s-curve"
    },
    vibrato: {
      rateHz: 5.2,
      depthCents: 32,
      onsetDelayMs: 250
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "subtone", "growl", "bend", "altissimo"],
    techniqueMethods: ["subtone embouchure loosening", "throat growl raspy distortion", "key slapping", "false fingerings"],
    playingStyles: ["jazz", "funk", "blues", "reggae", "afrobeats", "soul"],
    genreTechniques: {
      jazz: ["subtone", "bend", "vibrato", "legato"],
      funk: ["accent", "staccato", "growl"],
      afrobeats: ["accent", "legato", "bend"]
    }
  }
};
