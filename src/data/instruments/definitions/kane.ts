import type { InstrumentDef } from '../types';

export const kane: InstrumentDef = {
  "id": "kane",
  "name": "Kane (Atarigane)",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 76,
    "mid": 77,
    "high": 77
  },
  "note": "Small handheld bronze gong of Japanese festival music struck inside the rim with deer-antler mallet (shumoku)",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "open",
      "ghost"
    ],
    "techniqueMethods": [
      "antler mallet inside-rim strike (chi)",
      "rim rimshot snap (ki)",
      "dead stroke hand muting",
      "matsuri festival groove syncopation"
    ],
    "playingStyles": [
      "japanese-festival",
      "matsuri",
      "gagaku",
      "kabuki"
    ],
    "genreTechniques": {
      "matsuri": [
        "accent",
        "staccato",
        "open"
      ],
      "japanese-festival": [
        "accent",
        "staccato",
        "ghost"
      ]
    }
  }
};
