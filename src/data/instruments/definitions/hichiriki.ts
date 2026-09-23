import type { InstrumentDef } from '../types';

export const hichiriki: InstrumentDef = {
  "id": "hichiriki",
  "name": "Hichiriki",
  "family": "winds",
  "program": 111,
  "octave": 12,
  "voicing": "single",
  "note": "Short double-reed bamboo flute of Japanese Gagaku with piercing volume and heavy microtonal enbai pitch bends",
  "techniques": {
    "articulations": [
      "accent",
      "legato",
      "bend",
      "vibrato",
      "portamento",
      "tenuto"
    ],
    "techniqueMethods": [
      "enbai lip-pressure microtonal bending",
      "large double-reed embouchure attack",
      "ornamental portamento glides",
      "ceremonial breath support"
    ],
    "playingStyles": [
      "gagaku",
      "japanese-classical",
      "ceremonial"
    ],
    "genreTechniques": {
      "gagaku": [
        "bend",
        "portamento",
        "vibrato",
        "tenuto",
        "accent"
      ],
      "japanese-classical": [
        "legato",
        "bend",
        "vibrato"
      ]
    }
  }
};
