import type { InstrumentDef } from '../types';

export const glockenspiel: InstrumentDef = {
  "id": "glockenspiel",
  "name": "Glockenspiel",
  "family": "metal-and-wood",
  "program": 9,
  "voicing": "single",
  "note": "Tuned steel bar bells struck with hard mallets producing pure, bright, piercing high tones",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "tenuto",
      "roll",
      "tremolo"
    ],
    "techniqueMethods": [
      "brass mallet strike",
      "hard plastic mallet attack",
      "finger muting",
      "two-mallet rapid alternating roll"
    ],
    "playingStyles": [
      "orchestral",
      "marching",
      "pop",
      "folk",
      "indie-rock"
    ],
    "genreTechniques": {
      "orchestral": [
        "accent",
        "staccato",
        "tenuto",
        "roll"
      ],
      "indie-rock": [
        "accent",
        "staccato",
        "tenuto"
      ]
    }
  }
};
