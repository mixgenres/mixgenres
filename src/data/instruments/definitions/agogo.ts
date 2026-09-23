import type { InstrumentDef } from '../types';

export const agogo: InstrumentDef = {
  "id": "agogo",
  "name": "Agogô bells",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 68,
    "mid": 67,
    "high": 67
  },
  "note": "Two pitched steel conical bells joined by a flexible handle struck with wooden stick in samba and capoeira",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "open",
      "low-tone"
    ],
    "techniqueMethods": [
      "wooden stick striking low and high bell",
      "squeezing bells together for handle click",
      "interlocking syncopated ostinato",
      "rim shot accents"
    ],
    "playingStyles": [
      "samba",
      "batucada",
      "capoeira",
      "afrobeats",
      "candomble"
    ],
    "genreTechniques": {
      "samba": [
        "accent",
        "staccato",
        "open",
        "low-tone"
      ],
      "batucada": [
        "accent",
        "staccato",
        "open"
      ],
      "capoeira": [
        "accent",
        "low-tone",
        "open"
      ]
    }
  }
};
