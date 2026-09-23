import type { InstrumentDef } from '../types';

export const bombo_leguero: InstrumentDef = {
  "id": "bombo-leguero",
  "name": "Bombo legüero",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 35,
    "mid": 36,
    "high": 38
  },
  "note": "Hollowed-tree trunk Argentine drum with goatskin heads said to be heard from leagues (leguas) away",
  "techniques": {
    "articulations": [
      "accent",
      "low-tone",
      "staccato",
      "ghost",
      "roll",
      "open"
    ],
    "techniqueMethods": [
      "paired stick rhythm: head and rim alternating",
      "leather ring tension tuning",
      "chacarera 6/8 - 3/4 hemiola pattern",
      "rim wood clack"
    ],
    "playingStyles": [
      "chacarera",
      "zamba",
      "folklore-argentino",
      "malambo"
    ],
    "genreTechniques": {
      "chacarera": [
        "accent",
        "low-tone",
        "staccato",
        "ghost"
      ],
      "zamba": [
        "low-tone",
        "accent",
        "open"
      ],
      "malambo": [
        "accent",
        "staccato",
        "roll"
      ]
    }
  }
};
