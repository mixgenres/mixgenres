import type { InstrumentDef } from '../types';

export const backing_vocals: InstrumentDef = {
  "id": "backing-vocals",
  "name": "Backing vocals",
  "family": "voice",
  "program": 54,
  "voicing": "chord",
  "note": "Harmonized vocal ensemble providing lush background pad chords and call-and-response hooks",
  "techniques": {
    "articulations": [
      "accent",
      "legato",
      "tenuto",
      "staccato",
      "crescendo",
      "diminuendo"
    ],
    "techniqueMethods": [
      "blended vocal harmony vowel shaping",
      "tight onset consonant synchronization",
      "subtle vibrato warm tails",
      "call-and-response dynamic balance"
    ],
    "playingStyles": [
      "pop",
      "soul",
      "gospel",
      "r&b",
      "afrobeats",
      "reggae"
    ],
    "genreTechniques": {
      "gospel": [
        "legato",
        "tenuto",
        "crescendo",
        "accent"
      ],
      "soul": [
        "legato",
        "accent",
        "tenuto"
      ],
      "afrobeats": [
        "staccato",
        "accent",
        "legato"
      ],
      "pop": [
        "legato",
        "tenuto",
        "staccato"
      ]
    }
  }
};
