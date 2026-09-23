import type { InstrumentDef } from '../types';

export const bassoon: InstrumentDef = {
  "id": "bassoon",
  "name": "Bassoon",
  "family": "winds",
  "program": 70,
  "voicing": "single",
  "note": "Double-reed bass woodwind with rich woody buzz, reedy warmth, and agile staccato articulation",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "portato",
      "vibrato",
      "marcato"
    ],
    "techniqueMethods": [
      "double reed embouchure control",
      "flick key agility",
      "dry staccato tonguing",
      "singing tenor register vibrato"
    ],
    "playingStyles": [
      "orchestral",
      "chamber",
      "cinematic",
      "baroque"
    ],
    "genreTechniques": {
      "orchestral": [
        "staccato",
        "legato",
        "tenuto",
        "accent"
      ],
      "chamber": [
        "legato",
        "portato",
        "vibrato"
      ],
      "cinematic": [
        "legato",
        "tenuto",
        "staccato"
      ]
    }
  }
};
