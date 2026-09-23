import type { InstrumentDef } from '../types';

export const cabasa: InstrumentDef = {
  "id": "cabasa",
  "name": "Cabasa / Afoxé",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 69,
    "mid": 69,
    "high": 69
  },
  "note": "Loops of steel bead chains wrapped around corrugated steel cylinder; creates metallic scrapings and crisp shakes",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "roll"
    ],
    "techniqueMethods": [
      "hand twisting beads against cylinder",
      "forward and backward hand shaking",
      "crisp rhythmic subdivisions",
      "accented palm slap catches"
    ],
    "playingStyles": [
      "bossa",
      "samba",
      "latin-jazz",
      "pop",
      "fusion"
    ],
    "genreTechniques": {
      "bossa": [
        "accent",
        "ghost",
        "staccato"
      ],
      "samba": [
        "accent",
        "roll",
        "staccato"
      ],
      "latin-jazz": [
        "accent",
        "staccato",
        "ghost"
      ]
    }
  }
};
