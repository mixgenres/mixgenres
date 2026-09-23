import type { InstrumentDef } from '../types';

export const bandoneon: InstrumentDef = {
  id: "bandoneon",
  name: "Bandoneón",
  family: "bellows-and-keys",
  program: 23,
  voicing: "chord",
  note: "Bisonoric bellows instrument featuring thick zinc reed plates and long cardboard bellows, producing melancholic soul and aggressive marcato",
  acousticProfile: {
    sustain: "sustained",
    role: "harmony",
    centre: 58,
    low: 41,
    high: 81,
    pan: -0.1,
    trim: -1,
    space: 0.3,
    ring: 2.0
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.82,
    tension: 0.85,
    bodyResonanceVolume: 18.0,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.94,
    transientSharpness: 0.72,
    airResonanceHz: 220,
    bodyConstruction: "wood-box",
    excitationType: "breath"
  },
  performanceArticulations: {
    marcato: {
      decayTimeSec: 0.15,
      transientSharpness: 0.85
    },
    arrastre: {
      preBeatOffsetMs: -85,
      pitchDragSemitones: -3,
      pressureRamp: true,
      velocityGrowth: 2.0
    },
    bend: {
      maxSemitones: 2,
      speedMs: 140,
      curve: "s-curve"
    },
    vibrato: {
      rateHz: 5.2,
      depthCents: 28,
      onsetDelayMs: 250
    }
  },
  physicalModel: {
    model: "blown-reed",
    parameters: {
      reedStiffness: 0.68,
      airResonance: 0.75,
      bodyResonance: 0.72,
      breathNoise: 0.14,
      transientSharpness: 0.85
    },
    signalChain: ["preamp", "eq", "compressor", "reverb"],
    synthesisNotes: [
      "Bisonoric mechanism produces different pitches when opening versus closing bellows.",
      "Violent knee-drops deliver sudden sharp explosive marcato transients.",
      "Slow opening air draw evokes sustained, weeping lyrical vibrato."
    ]
  },
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "marcato",
      "tremolo",
      "portato",
      "arrastre"
    ],
    techniqueMethods: [
      "knee drop marcato impact",
      "bellows opening sigh swell",
      "fast button articulation with air release",
      "arrastre drag into accented downbeat",
      "percussive bellows slap"
    ],
    playingStyles: ["tango", "nuevo-tango", "milonga", "chamame", "folk"],
    genreTechniques: {
      tango: ["marcato", "accent", "staccato", "tenuto", "arrastre"],
      milonga: ["staccato", "accent"],
      "nuevo-tango": ["legato", "tenuto", "marcato"]
    }
  }
};
