import type { InstrumentDef } from '../types';

export const bodhran: InstrumentDef = {
  "id": "bodhran",
  "name": "Bodhrán",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 41,
    "mid": 43,
    "high": 45
  },
  "note": "Irish frame drum with goatskin head played with a double-ended tipper and inner-hand pitch modulation",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "roll",
      "ghost",
      "open",
      "low-tone"
    ],
    "techniqueMethods": [
      "double-ended tipper brush stroke",
      "inner hand skin pressure pitch modulation",
      "driving reel/jig rhythm",
      "tipper rim click"
    ],
    "playingStyles": [
      "celtic",
      "irish-folk",
      "scottish-folk"
    ],
    "genreTechniques": {
      "celtic": [
        "accent",
        "roll",
        "ghost",
        "low-tone"
      ],
      "irish-folk": [
        "roll",
        "accent",
        "staccato",
        "open"
      ]
    }
  }
};
