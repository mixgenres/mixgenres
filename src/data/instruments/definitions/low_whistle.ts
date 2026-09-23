import type { InstrumentDef } from '../types';

export const low_whistle: InstrumentDef = {
  "id": "low-whistle",
  "name": "Low whistle",
  "family": "winds",
  "program": 73,
  "voicing": "single",
  "note": "Large cylindrical fipple flute pitched in D with deep, breathy, haunting Celtic tone",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "vibrato",
      "grace",
      "trill"
    ],
    "techniqueMethods": [
      "piper grip finger pads",
      "breath-controlled dynamic swelling",
      "crann and cut ornamentation",
      "delicate pitch sliding"
    ],
    "playingStyles": [
      "celtic",
      "irish-folk",
      "cinematic",
      "soundtrack",
      "ambient"
    ],
    "genreTechniques": {
      "celtic": [
        "legato",
        "grace",
        "accent",
        "trill"
      ],
      "irish-folk": [
        "grace",
        "trill",
        "legato",
        "staccato"
      ],
      "cinematic": [
        "legato",
        "tenuto",
        "vibrato"
      ]
    }
  }
};
