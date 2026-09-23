import type { InstrumentDef } from '../types';

export const gongs: InstrumentDef = {
  "id": "gongs",
  "name": "Gongs / Tam-tam",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 49,
    "mid": 55,
    "high": 57
  },
  "note": "Suspended hammered bronze circular disks producing deep fundamental roars and shimmering overtone blooms",
  "techniques": {
    "articulations": [
      "accent",
      "tenuto",
      "crescendo",
      "diminuendo",
      "roll",
      "low-tone"
    ],
    "techniqueMethods": [
      "priming warm-up tap",
      "heavy padded mallet center strike",
      "rim scraping with triangle beater",
      "hand and body dampening"
    ],
    "playingStyles": [
      "orchestral",
      "cinematic",
      "gamelan",
      "ceremonial",
      "ambient"
    ],
    "genreTechniques": {
      "orchestral": [
        "accent",
        "tenuto",
        "crescendo",
        "diminuendo"
      ],
      "cinematic": [
        "crescendo",
        "low-tone",
        "tenuto"
      ],
      "gamelan": [
        "accent",
        "low-tone",
        "tenuto"
      ]
    }
  }
};
