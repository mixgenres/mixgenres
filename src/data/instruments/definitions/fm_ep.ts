import type { InstrumentDef } from '../types';

export const fm_ep: InstrumentDef = {
  "id": "fm-ep",
  "name": "FM Electric Piano",
  "family": "bellows-and-keys",
  "program": 5,
  "voicing": "chord",
  "note": "Classic 80s FM digital electric piano with glassy metallic chime and crystalline clarity",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "portato",
      "crescendo"
    ],
    "techniqueMethods": [
      "FM operator index velocity scaling",
      "glassy chime attack",
      "sustained digital decay",
      "stereo chorus spreading"
    ],
    "playingStyles": [
      "pop",
      "ballad",
      "city-pop",
      "r&b",
      "synthwave"
    ],
    "genreTechniques": {
      "pop": [
        "legato",
        "tenuto",
        "accent"
      ],
      "ballad": [
        "legato",
        "tenuto",
        "crescendo"
      ],
      "city-pop": [
        "staccato",
        "accent",
        "legato"
      ]
    }
  }
};
