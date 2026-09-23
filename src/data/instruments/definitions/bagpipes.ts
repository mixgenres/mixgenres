import type { InstrumentDef } from '../types';

export const bagpipes: InstrumentDef = {
  "id": "bagpipes",
  "name": "Great Highland Bagpipes",
  "family": "winds",
  "program": 109,
  "voicing": "single",
  "note": "Iconic Scottish Highland bagpipes with mouth-blown airtight bag, three continuous bass and tenor drones, and a piercing conical double-reed chanter built for thunderous outdoor projection",
  "physicalModel": {
    "model": "blown-reed",
    "parameters": {
      "reedStiffness": 0.78,
      "airResonance": 0.9,
      "bodyResonance": 0.8,
      "breathNoise": 0.12,
      "transientSharpness": 0.72
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Continuous unbroken airflow from the squeezed bag eliminates rests and silences.",
      "All note articulations must be accomplished via gracenotes, strikes, and multi-note cuts.",
      "Fixed non-tempered Mixolydian scale with high pitch center (~476-482 Hz)."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "legato",
      "tenuto",
      "trill",
      "marcato"
    ],
    "techniqueMethods": [
      "doublings and grips rapid gracenote articulation",
      "taorluath and crunluath complex high-level piobaireachd movements",
      "birl pinky strike across low A",
      "continuous bag pressure management during breaths",
      "drones lock harmonic phase alignment"
    ],
    "playingStyles": [
      "highland-marching",
      "celtic",
      "piobaireachd",
      "military",
      "folk-rock"
    ],
    "genreTechniques": {
      "highland-marching": [
        "accent",
        "marcato",
        "legato"
      ],
      "celtic": [
        "legato",
        "trill",
        "accent"
      ],
      "piobaireachd": [
        "tenuto",
        "legato",
        "trill"
      ]
    }
  }
};
