import type { InstrumentDef } from '../types';

export const hand_percussion: InstrumentDef = {
  "id": "hand-percussion",
  "name": "Hand percussion",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 39,
    "mid": 54,
    "high": 69
  },
  "note": "Auxiliary hand percussion ensemble including claps, snaps, shaker accents, and small acoustic idiophones",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "flam",
      "roll",
      "open"
    ],
    "techniqueMethods": [
      "hand claps",
      "finger snaps",
      "egg shaker subdivision",
      "percussive body tap"
    ],
    "playingStyles": [
      "pop",
      "rock",
      "folk",
      "afrobeats",
      "latin",
      "r&b"
    ],
    "genreTechniques": {
      "afrobeats": [
        "accent",
        "ghost",
        "roll"
      ],
      "folk": [
        "accent",
        "ghost",
        "staccato"
      ],
      "pop": [
        "accent",
        "staccato"
      ]
    }
  }
};
