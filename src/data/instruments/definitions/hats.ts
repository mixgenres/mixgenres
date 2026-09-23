import type { InstrumentDef } from '../types';

export const hats: InstrumentDef = {
  "id": "hats",
  "name": "Hi-hats",
  "family": "kit",
  "voicing": "unpitched",
  "drum": {
    "low": 42,
    "mid": 44,
    "high": 46
  },
  "note": "Pair of matched cymbals mounted on foot pedal stand; controls rhythmic timekeeping from closed clicks to open sizzles",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "open",
      "roll"
    ],
    "techniqueMethods": [
      "tip on top cymbal closed click",
      "shoulder of stick on edge splash",
      "foot pedal chick tap",
      "foot pedal splash",
      "half-open sizzle wash"
    ],
    "playingStyles": [
      "funk",
      "jazz",
      "rock",
      "hip-hop",
      "disco",
      "house"
    ],
    "genreTechniques": {
      "funk": [
        "accent",
        "staccato",
        "ghost",
        "open"
      ],
      "jazz": [
        "staccato",
        "accent",
        "ghost"
      ],
      "disco": [
        "open",
        "accent",
        "staccato"
      ],
      "hip-hop": [
        "accent",
        "ghost",
        "roll"
      ]
    }
  }
};
