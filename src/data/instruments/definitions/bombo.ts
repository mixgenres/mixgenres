import type { InstrumentDef } from '../types';

export const bombo: InstrumentDef = {
  "id": "bombo",
  "name": "Bombo",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 35,
    "mid": 36,
    "high": 38
  },
  "note": "Large South American wooden bass drum with sheepskin head delivering deep, resonant ceremonial pulses",
  "techniques": {
    "articulations": [
      "accent",
      "low-tone",
      "ghost",
      "roll",
      "open",
      "staccato"
    ],
    "techniqueMethods": [
      "padded mallet skin stroke",
      "wooden rim (aro) stick click",
      "interlocking rim-and-head rhythm",
      "decay damping"
    ],
    "playingStyles": [
      "andean-folk",
      "chacarera",
      "zamba",
      "cumbia"
    ],
    "genreTechniques": {
      "andean-folk": [
        "accent",
        "low-tone",
        "staccato",
        "roll"
      ],
      "cumbia": [
        "low-tone",
        "accent",
        "ghost"
      ]
    }
  }
};
