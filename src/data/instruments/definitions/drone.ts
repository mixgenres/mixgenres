import type { InstrumentDef } from '../types';

export const drone: InstrumentDef = {
  "id": "drone",
  "name": "Drone texture",
  "family": "electronic",
  "program": 89,
  "voicing": "chord",
  "note": "Sustained harmonic root and fifth acoustic/electronic bed with slow organic filter movement",
  "techniques": {
    "articulations": [
      "legato",
      "tenuto",
      "crescendo",
      "diminuendo",
      "accent"
    ],
    "techniqueMethods": [
      "sustained open fifth register",
      "slow lowpass filter envelope swell",
      "subtle tape wow/flutter",
      "sub-octave coupling"
    ],
    "playingStyles": [
      "folk",
      "celtic",
      "ambient",
      "raga",
      "electronic"
    ],
    "genreTechniques": {
      "folk": [
        "legato",
        "tenuto"
      ],
      "celtic": [
        "legato",
        "tenuto"
      ],
      "ambient": [
        "legato",
        "crescendo",
        "diminuendo"
      ]
    }
  }
};
