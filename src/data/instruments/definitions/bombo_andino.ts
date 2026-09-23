import type { InstrumentDef } from '../types';

export const bombo_andino: InstrumentDef = {
  "id": "bombo-andino",
  "name": "Bombo andino",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 35,
    "mid": 36,
    "high": 38
  },
  "note": "Andean ceremonial fur-headed bass drum with deep, thundering mountain pulse and wooden rim clack",
  "techniques": {
    "articulations": [
      "accent",
      "low-tone",
      "ghost",
      "roll",
      "open"
    ],
    "techniqueMethods": [
      "soft mallet head strike",
      "cane aro rim stroke",
      "sustained fur damping resonance",
      "marching syncopated pulse"
    ],
    "playingStyles": [
      "andean-folk",
      "sikuri",
      "carnavalito",
      "huayno"
    ],
    "genreTechniques": {
      "andean-folk": [
        "low-tone",
        "accent",
        "open",
        "roll"
      ],
      "huayno": [
        "accent",
        "low-tone",
        "ghost"
      ]
    }
  }
};
