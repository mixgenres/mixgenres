import type { InstrumentDef } from '../types';

export const guacharaca: InstrumentDef = {
  "id": "guacharaca",
  "name": "Guacharaca",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 73,
    "mid": 74,
    "high": 75
  },
  "note": "Cane or tin scraper rubbed with wire fork; provides the driving metallic scraping rhythm in vallenato and cumbia",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "roll",
      "open"
    ],
    "techniqueMethods": [
      "wire fork scraping strokes",
      "rapid up-down syncopated rasp",
      "triplet flourish roll",
      "muffled hand contact"
    ],
    "playingStyles": [
      "vallenato",
      "cumbia",
      "colombian-folk"
    ],
    "genreTechniques": {
      "vallenato": [
        "accent",
        "roll",
        "staccato",
        "ghost"
      ],
      "cumbia": [
        "accent",
        "ghost",
        "open"
      ]
    }
  }
};
