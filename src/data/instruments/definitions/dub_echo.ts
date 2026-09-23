import type { InstrumentDef } from '../types';

export const dub_echo: InstrumentDef = {
  "id": "dub-echo",
  "name": "Dub echo throw",
  "family": "electronic",
  "program": 120,
  "voicing": "single",
  "note": "Single transient audio throw fed into high-feedback tape delay with resonant filter sweeps",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "tenuto",
      "crescendo",
      "diminuendo"
    ],
    "techniqueMethods": [
      "auxiliary dub throw burst",
      "high-resonance delay feedback",
      "variable tape speed pitch drop",
      "spring reverb splash coupling"
    ],
    "playingStyles": [
      "dub",
      "reggae",
      "dubstep",
      "ambient",
      "sound-system"
    ],
    "genreTechniques": {
      "dub": [
        "accent",
        "tenuto",
        "crescendo",
        "diminuendo"
      ],
      "reggae": [
        "accent",
        "staccato",
        "tenuto"
      ]
    }
  }
};
