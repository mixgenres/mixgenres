import type { InstrumentDef } from '../types';

export const clarinet: InstrumentDef = {
  "id": "clarinet",
  "name": "Clarinet",
  "family": "winds",
  "program": 71,
  "voicing": "single",
  "note": "Single-reed cylindrical woodwind with rich chalumeau low register and soaring expressive clarion highs",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "vibrato",
      "bend",
      "trill",
      "portato"
    ],
    "techniqueMethods": [
      "single reed embouchure flexibility",
      "klezmer glissando throat bends",
      "subtle sub-tone warmth",
      "rapid staccato tonguing"
    ],
    "playingStyles": [
      "classical",
      "jazz",
      "klezmer",
      "choro",
      "dixieland"
    ],
    "genreTechniques": {
      "jazz": [
        "legato",
        "bend",
        "vibrato",
        "accent"
      ],
      "klezmer": [
        "bend",
        "vibrato",
        "trill",
        "accent"
      ],
      "classical": [
        "legato",
        "staccato",
        "tenuto",
        "portato"
      ],
      "choro": [
        "staccato",
        "accent",
        "legato"
      ]
    }
  }
};
