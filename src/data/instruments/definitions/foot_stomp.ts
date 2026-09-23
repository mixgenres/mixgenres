import type { InstrumentDef } from '../types';

export const foot_stomp: InstrumentDef = {
  "id": "foot-stomp",
  "name": "Foot stomp",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 35,
    "mid": 36,
    "high": 38
  },
  "note": "Acoustic wooden porch, stage, or clogging board foot stomp delivering heavy woody bass pulse",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "flam",
      "low-tone"
    ],
    "techniqueMethods": [
      "heavy heel slam",
      "ball-of-foot tap",
      "stage floor resonant thump",
      "clogging heel-toe syncopation"
    ],
    "playingStyles": [
      "folk",
      "blues",
      "celtic",
      "flamenco",
      "bluegrass"
    ],
    "genreTechniques": {
      "folk": [
        "accent",
        "low-tone",
        "ghost"
      ],
      "blues": [
        "accent",
        "low-tone"
      ],
      "flamenco": [
        "accent",
        "flam",
        "staccato"
      ]
    }
  }
};
