import type { InstrumentDef } from '../types';

export const cuica: InstrumentDef = {
  "id": "cuica",
  "name": "Cuíca",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 53,
    "mid": 54,
    "high": 55
  },
  "note": "Brazilian friction drum; internal bamboo cane rubbed with moist cloth producing singing, expressive pitch glissandi",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "roll",
      "open",
      "low-tone"
    ],
    "techniqueMethods": [
      "bamboo stick friction rubbing",
      "thumb membrane pitch-bending pressure",
      "high-pitched laughing squeak",
      "damped low percussive pop"
    ],
    "playingStyles": [
      "samba",
      "batucada",
      "bossa",
      "pagode",
      "mpb"
    ],
    "genreTechniques": {
      "samba": [
        "accent",
        "ghost",
        "open",
        "low-tone"
      ],
      "batucada": [
        "accent",
        "roll",
        "open"
      ],
      "bossa": [
        "ghost",
        "staccato"
      ]
    }
  }
};
