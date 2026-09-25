import type { InstrumentDef } from '../types';

export const violin: InstrumentDef = {
  id: "violin",
  name: "Acoustic Violin",
  family: "bowed",
  program: 40,
  octave: 12,
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "bow",
  elementaryModel: 6,
  makeupGain: 22.818,
  polyphony: 4,
  note: "Acoustic orchestral and folk violin bowed with horsehair over spruce soundboard, delivering expressive cantabile phrasing and spiccato accents",
  acousticProfile: {
    sustain: "sustained",
    role: "melody",
    centre: 67,
    low: 55,
    high: 103,
    pan: -0.24,
    trim: -2,
    space: 0.42,
    ring: 4
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.72,
    tension: 0.88,
    bodyResonanceVolume: 2.2,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.85,
    soundboardResonanceHz: 280,
    airResonanceHz: 190,
    excitationType: "bow",
    bodyConstruction: "wood-box"
  },
  bowedResonance: {
    bodyFreq: 460,
    bodyQ: 2.2,
    bodyGain: 0.45,
    bridgeHillFreq: 2800,
    bridgeHillQ: 2.8,
    bridgeHillGain: 0.4
  },
  tuningAndMechanics: {
    tuningName: "GDAE Violin Standard Tuning",
    frets: 0,
    openStrings: [
      {
        name: "G3",
        note: "G3",
        midi: 55,
        frequencyHz: 196
      },
      {
        name: "D4",
        note: "D4",
        midi: 62,
        frequencyHz: 293.66
      },
      {
        name: "A4",
        note: "A4",
        midi: 69,
        frequencyHz: 440
      },
      {
        name: "E5",
        note: "E5",
        midi: 76,
        frequencyHz: 659.25
      }
    ]
  },
  performanceArticulations: {
    vibrato: {
      rateHz: 5.8,
      depthCents: 28,
      onsetDelayMs: 200
    },
    pizzicato: {
      damping: 0.35,
      pluckHardness: 0.7
    },
    bend: {
      maxSemitones: 2,
      speedMs: 110,
      curve: "s-curve"
    }
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "portato",
      "tremolo",
      "pizzicato",
      "vibrato",
      "spiccato",
      "chicharra",
      "tambor",
      "latigo"
    ],
    techniqueMethods: ["détaché", "spiccato", "sul ponticello", "sul tasto", "martelé", "ricochet", "chicharra scrape", "tambor snap", "látigo whip"],
    playingStyles: ["orchestral", "folk", "tango", "gypsy", "bluegrass", "celtic"],
    genreTechniques: {
      orchestral: ["legato", "tremolo", "vibrato"],
      tango: ["staccato", "accent", "pizzicato", "chicharra", "tambor", "latigo"],
      folk: ["staccato", "pizzicato", "accent"]
    }
  }
};
