import type { InstrumentDef } from '../types';

export const steel_guitar: InstrumentDef = {
  "id": "steel-guitar",
  "name": "Resonator Steel Guitar",
  "family": "plucked",
  "program": 25,
  "voicing": "chord",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "hard-pick",
  "note": "Spun metal cone resonator acoustic guitar played with a steel slide bar, producing piercing metallic bite, singing sustain, and crying glissandi",
  "physicalModel": {
    "model": "plucked-string",
    "parameters": {
      "stiffness": 0.62,
      "damping": 0.28,
      "inharmonicity": 0.28,
      "bodyResonance": 0.88,
      "transientSharpness": 0.78
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Spun aluminum cone mechanically amplifies higher metallic partials.",
      "Solid steel bar gliding over strings generates seamless continuous microtonal pitch bends.",
      "Thumbpick downstrokes deliver thumping, driving percussive bass lines."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "slide",
      "vibrato",
      "palm-mute",
      "ghost",
      "tenuto"
    ],
    "techniqueMethods": [
      "steel slide glissando across open tunings",
      "finger behind slide damping to eliminate ghost tones",
      "palm-damped alternating thumb bass",
      "wide wrist slide vibrato",
      "rapid double-stop slide shifts"
    ],
    "playingStyles": [
      "delta-blues",
      "country",
      "bluegrass",
      "hawaiian",
      "americana",
      "folk"
    ],
    "genreTechniques": {
      "delta-blues": [
        "slide",
        "accent",
        "vibrato",
        "palm-mute"
      ],
      "country": [
        "slide",
        "accent",
        "legato"
      ],
      "hawaiian": [
        "slide",
        "vibrato",
        "tenuto"
      ]
    }
  }
};
