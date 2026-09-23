import type { InstrumentDef } from '../types';

export const celtic_harp: InstrumentDef = {
  "id": "celtic-harp",
  "name": "Celtic harp",
  "family": "plucked",
  "program": 46,
  "voicing": "chord",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "fingerpad",
  "note": "Lever harp with nylon or wire strings and warm acoustic resonance for traditional airs and reels",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "harmonic",
      "trill",
      "grace"
    ],
    "techniqueMethods": [
      "finger pad plucking",
      "wire string fingernail ringing",
      "lever pitch shifts",
      "interlocking two-hand ornaments"
    ],
    "playingStyles": [
      "celtic",
      "irish-folk",
      "scottish-folk",
      "renaissance",
      "ambient"
    ],
    "genreTechniques": {
      "celtic": [
        "legato",
        "grace",
        "accent",
        "tenuto"
      ],
      "irish-folk": [
        "legato",
        "grace",
        "trill",
        "staccato"
      ],
      "ambient": [
        "legato",
        "tenuto",
        "harmonic"
      ]
    }
  }
};
