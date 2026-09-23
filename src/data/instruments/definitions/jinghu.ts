import type { InstrumentDef } from '../types';

export const jinghu: InstrumentDef = {
  "id": "jinghu",
  "name": "Jinghu",
  "family": "bowed",
  "program": 110,
  "octave": 12,
  "voicing": "single",
  "note": "Small high-pitched two-string Chinese bamboo fiddle leading Beijing Opera with piercing expressive tone",
  "techniques": {
    "articulations": [
      "arco",
      "staccato",
      "legato",
      "vibrato",
      "bend",
      "accent",
      "portamento"
    ],
    "techniqueMethods": [
      "horsehair bow trapped between strings",
      "snakeskin soundboard resonance",
      "rapid finger slides and vocal ornaments",
      "high-tension bamboo tube projection"
    ],
    "playingStyles": [
      "beijing-opera",
      "chinese-classical",
      "traditional",
      "folk"
    ],
    "genreTechniques": {
      "beijing-opera": [
        "arco",
        "bend",
        "vibrato",
        "portamento",
        "accent"
      ],
      "chinese-classical": [
        "legato",
        "vibrato",
        "arco"
      ]
    }
  }
};
