import type { InstrumentDef } from '../types';

export const bones: InstrumentDef = {
  "id": "bones",
  "name": "Rhythm bones",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 75,
    "mid": 76,
    "high": 77
  },
  "note": "Pair of curved animal bones or hardwoods held between fingers and clacked together with rapid wrist snaps",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "roll",
      "ghost",
      "flam"
    ],
    "techniqueMethods": [
      "wrist whip momentum clacking",
      "single click accents",
      "rapid continuous roll (triplets)",
      "double-hand polyrhythmic clatter"
    ],
    "playingStyles": [
      "irish-folk",
      "celtic",
      "minstrel",
      "bluegrass",
      "zydeco"
    ],
    "genreTechniques": {
      "celtic": [
        "roll",
        "accent",
        "staccato",
        "flam"
      ],
      "irish-folk": [
        "accent",
        "roll",
        "staccato"
      ],
      "bluegrass": [
        "accent",
        "staccato",
        "ghost"
      ]
    }
  }
};
