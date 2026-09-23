import type { InstrumentDef } from '../types';

export const halo_pad: InstrumentDef = {
  "id": "halo-pad",
  "name": "Halo pad",
  "family": "electronic",
  "program": 94,
  "voicing": "chord",
  "note": "Ethereal synthesizer pad with high-frequency crystalline overtone halo and celestial shimmer",
  "techniques": {
    "articulations": [
      "legato",
      "tenuto",
      "crescendo",
      "diminuendo"
    ],
    "techniqueMethods": [
      "pitch-shifted shimmer reverb send",
      "additive upper partials",
      "slow envelope dynamic breathing",
      "diffuse stereo spread"
    ],
    "playingStyles": [
      "ambient",
      "cinematic",
      "new-age",
      "soundtrack"
    ],
    "genreTechniques": {
      "ambient": [
        "legato",
        "tenuto",
        "crescendo",
        "diminuendo"
      ],
      "cinematic": [
        "legato",
        "tenuto"
      ]
    }
  }
};
