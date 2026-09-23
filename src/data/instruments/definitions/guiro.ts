import type { InstrumentDef } from '../types';

export const guiro: InstrumentDef = {
  "id": "guiro",
  "name": "Güiro",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 73,
    "mid": 74,
    "high": 75
  },
  "note": "Notched hollow gourd scraper played with wooden stick; defines the classic cha-cha and salsa groove",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "roll",
      "open"
    ],
    "techniqueMethods": [
      "long down-scrape stroke",
      "short up-scrape return",
      "damped ghost taps",
      "thumbhole acoustic grip"
    ],
    "playingStyles": [
      "salsa",
      "son-cubano",
      "cha-cha",
      "merengue",
      "cumbia"
    ],
    "genreTechniques": {
      "salsa": [
        "accent",
        "staccato",
        "open",
        "ghost"
      ],
      "cha-cha": [
        "accent",
        "open",
        "staccato"
      ],
      "cumbia": [
        "accent",
        "ghost",
        "open"
      ]
    }
  }
};
