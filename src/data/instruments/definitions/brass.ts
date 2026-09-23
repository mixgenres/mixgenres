import type { InstrumentDef } from '../types';

export const brass: InstrumentDef = {
  "id": "brass",
  "name": "Brass section",
  "family": "brass",
  "program": 61,
  "voicing": "chord",
  "note": "Power brass ensemble (trumpets, trombones, French horns) with punchy stabs and soaring fanfare",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "marcato",
      "legato",
      "fall",
      "doit",
      "tenuto",
      "sforzando"
    ],
    "techniqueMethods": [
      "synchronized section lip attacks",
      "aggressive marcato punch",
      "jazz fall-offs and doits",
      "swelling crescendo fanfares"
    ],
    "playingStyles": [
      "funk",
      "soul",
      "jazz",
      "salsa",
      "pop",
      "orchestral"
    ],
    "genreTechniques": {
      "funk": [
        "staccato",
        "accent",
        "marcato",
        "fall"
      ],
      "salsa": [
        "marcato",
        "accent",
        "staccato",
        "fall"
      ],
      "jazz": [
        "accent",
        "legato",
        "fall",
        "doit"
      ],
      "pop": [
        "staccato",
        "accent",
        "fall"
      ]
    }
  }
};
