import type { InstrumentDef } from '../types';

export const cowbell: InstrumentDef = {
  "id": "cowbell",
  "name": "Cowbell (Cencerro)",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 56,
    "mid": 56,
    "high": 56
  },
  "note": "Clapperless steel bell struck with thick wooden stick; drives salsa bongo bell and rock downbeats",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "open",
      "ghost",
      "low-tone"
    ],
    "techniqueMethods": [
      "open mouth heavy stick stroke",
      "closed edge dry high tap",
      "hand muting finger pressure",
      "bongo bell martillo pattern"
    ],
    "playingStyles": [
      "salsa",
      "funk",
      "rock",
      "cumbia",
      "cha-cha"
    ],
    "genreTechniques": {
      "salsa": [
        "accent",
        "open",
        "staccato",
        "low-tone"
      ],
      "funk": [
        "accent",
        "staccato",
        "ghost"
      ],
      "rock": [
        "accent",
        "staccato"
      ]
    }
  }
};
