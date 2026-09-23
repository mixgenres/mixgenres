import type { InstrumentDef } from '../types';

export const harmonium: InstrumentDef = {
  "id": "harmonium",
  "name": "Harmonium",
  "family": "bellows-and-keys",
  "program": 20,
  "voicing": "chord",
  "note": "Hand-pumped free-reed keyboard with sustained drone registers and warm bellows dynamics",
  "techniques": {
    "articulations": [
      "accent",
      "legato",
      "tenuto",
      "staccato",
      "crescendo",
      "diminuendo",
      "portato"
    ],
    "techniqueMethods": [
      "bellows pumping for dynamic control",
      "drone stop engagement",
      "sustained cluster chord voicing",
      "finger substitution legato"
    ],
    "playingStyles": [
      "qawwali",
      "hindustani",
      "folk",
      "celtic",
      "kirtan",
      "ambient"
    ],
    "genreTechniques": {
      "folk": [
        "legato",
        "tenuto",
        "accent"
      ],
      "celtic": [
        "legato",
        "tenuto"
      ],
      "hindustani": [
        "legato",
        "crescendo",
        "diminuendo",
        "portato"
      ]
    }
  }
};
