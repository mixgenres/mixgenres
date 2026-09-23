import type { InstrumentDef } from '../types';

export const bandoneon: InstrumentDef = {
  "id": "bandoneon",
  "name": "Bandoneón",
  "family": "bellows-and-keys",
  "program": 23,
  "voicing": "chord",
  "note": "Bisonoric bellows instrument featuring thick zinc reed plates and long cardboard bellows, producing the melancholic soul and aggressive marcato of Argentine tango",
  "physicalModel": {
    "model": "blown-reed",
    "parameters": {
      "reedStiffness": 0.68,
      "airResonance": 0.75,
      "bodyResonance": 0.72,
      "breathNoise": 0.14,
      "transientSharpness": 0.68
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Bisonoric mechanism produces different pitches when opening versus closing bellows.",
      "Violent knee-drops deliver sudden sharp explosive marcato transients.",
      "Slow opening air draw evokes sustained, weeping lyrical vibrato."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "marcato",
      "tremolo",
      "portato"
    ],
    "techniqueMethods": [
      "knee drop marcato impact",
      "bellows opening sigh swell",
      "fast button articulation with air release",
      "arrastre drag into accented downbeat",
      "percussive bellows slap"
    ],
    "playingStyles": [
      "tango",
      "nuevo-tango",
      "milonga",
      "chamame",
      "folk"
    ],
    "genreTechniques": {
      "tango": [
        "marcato",
        "accent",
        "staccato",
        "tenuto"
      ],
      "milonga": [
        "staccato",
        "accent"
      ],
      "nuevo-tango": [
        "legato",
        "tenuto",
        "marcato"
      ]
    }
  }
};
