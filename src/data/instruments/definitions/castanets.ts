import type { InstrumentDef } from '../types';

export const castanets: InstrumentDef = {
  "id": "castanets",
  "name": "Castanets",
  "family": "metal-and-wood",
  "voicing": "unpitched",
  "drum": {
    "low": 76,
    "mid": 77,
    "high": 77
  },
  "note": "Pair of concave hardwood shells clapped together by flamenco dancers and orchestral percussionists",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "roll",
      "flam",
      "ghost"
    ],
    "techniqueMethods": [
      "carretilla four-finger cascading roll (right hand)",
      "golpe single accent snap (left hand)",
      "postizo muffled click",
      "rhythmic dance accompaniment"
    ],
    "playingStyles": [
      "flamenco",
      "classical-spanish",
      "folklorico",
      "orchestral"
    ],
    "genreTechniques": {
      "flamenco": [
        "accent",
        "roll",
        "staccato",
        "flam"
      ],
      "classical-spanish": [
        "roll",
        "accent",
        "staccato"
      ]
    }
  }
};
