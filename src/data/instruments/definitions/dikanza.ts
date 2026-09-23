import type { InstrumentDef } from '../types';

export const dikanza: InstrumentDef = {
  "id": "dikanza",
  "name": "Dikanza",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 73,
    "mid": 74,
    "high": 75
  },
  "note": "Long Angolan notched bamboo scraper providing the continuous syncopated rasp in semba and kizomba",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "roll",
      "open"
    ],
    "techniqueMethods": [
      "up-and-down stick scraping",
      "accented downward rasp",
      "syncopated sixteenth ghost scrape",
      "damped scrape dead stroke"
    ],
    "playingStyles": [
      "kizomba",
      "semba",
      "kuduro",
      "angolan-folk"
    ],
    "genreTechniques": {
      "kizomba": [
        "accent",
        "ghost",
        "staccato"
      ],
      "semba": [
        "accent",
        "roll",
        "open"
      ]
    }
  }
};
