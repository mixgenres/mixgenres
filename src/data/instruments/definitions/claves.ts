import type { InstrumentDef } from '../types';

export const claves: InstrumentDef = {
  "id": "claves",
  "name": "Claves",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 75,
    "mid": 75,
    "high": 75
  },
  "note": "Pair of resonant rosewood or grenadilla wooden pegs providing the structural timeline of Afro-Cuban music",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "open",
      "tenuto"
    ],
    "techniqueMethods": [
      "cupped palm sound chamber resonance",
      "striking peg center sweet-spot",
      "un-damped ringing projection",
      "son and rumba clave cycles"
    ],
    "playingStyles": [
      "salsa",
      "son-cubano",
      "afro-cuban",
      "mambo",
      "latin-jazz"
    ],
    "genreTechniques": {
      "salsa": [
        "accent",
        "open",
        "staccato"
      ],
      "son-cubano": [
        "accent",
        "open"
      ],
      "afro-cuban": [
        "accent",
        "open",
        "tenuto"
      ]
    }
  }
};
