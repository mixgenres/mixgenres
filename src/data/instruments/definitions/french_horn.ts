import type { InstrumentDef } from '../types';

export const french_horn: InstrumentDef = {
  "id": "french-horn",
  "name": "French horn",
  "family": "brass",
  "program": 60,
  "voicing": "single",
  "note": "Coiled brass instrument with wide bell producing noble, heroic fanfare and warm, velvety choir blend",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "marcato",
      "sforzando",
      "portato"
    ],
    "techniqueMethods": [
      "right-hand bell position muting",
      "cuivré brassy edge overblowing",
      "smooth lip slur legato",
      "heroic stopped horn attack"
    ],
    "playingStyles": [
      "orchestral",
      "cinematic",
      "chamber",
      "soundtrack"
    ],
    "genreTechniques": {
      "orchestral": [
        "legato",
        "tenuto",
        "accent",
        "sforzando"
      ],
      "cinematic": [
        "legato",
        "marcato",
        "sforzando",
        "tenuto"
      ]
    }
  }
};
