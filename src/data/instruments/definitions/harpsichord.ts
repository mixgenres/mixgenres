import type { InstrumentDef } from '../types';

export const harpsichord: InstrumentDef = {
  "id": "harpsichord",
  "name": "Harpsichord",
  "family": "bellows-and-keys",
  "program": 6,
  "voicing": "chord",
  "note": "Quill-plucked string keyboard with bright, overtone-rich attack and crisp contrapuntal articulation",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "mordent",
      "trill",
      "turn"
    ],
    "techniqueMethods": [
      "quill plectrum plucking action",
      "finger articulation timing",
      "manual registration switching",
      "ornamental embellishments"
    ],
    "playingStyles": [
      "baroque",
      "classical",
      "early-music",
      "chamber"
    ],
    "genreTechniques": {
      "baroque": [
        "trill",
        "mordent",
        "staccato",
        "legato",
        "tenuto"
      ],
      "classical": [
        "staccato",
        "legato",
        "turn"
      ]
    }
  }
};
