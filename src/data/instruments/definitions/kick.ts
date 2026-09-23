import type { InstrumentDef } from '../types';

export const kick: InstrumentDef = {
  "id": "kick",
  "name": "Bass drum (Kick)",
  "family": "kit",
  "voicing": "unpitched",
  "drum": {
    "low": 36,
    "mid": 36,
    "high": 36
  },
  "note": "Acoustic bass drum struck with foot pedal beater; provides the low-end punch and groove anchor",
  "techniques": {
    "articulations": [
      "accent",
      "ghost",
      "low-tone",
      "staccato",
      "open"
    ],
    "techniqueMethods": [
      "heel-up power pedal stroke",
      "heel-down feathering touch",
      "beater buried damping",
      "beater rebound open resonance"
    ],
    "playingStyles": [
      "rock",
      "pop",
      "funk",
      "jazz",
      "hip-hop",
      "electronic"
    ],
    "genreTechniques": {
      "rock": [
        "accent",
        "staccato",
        "low-tone"
      ],
      "funk": [
        "accent",
        "ghost",
        "staccato"
      ],
      "jazz": [
        "ghost",
        "open",
        "accent"
      ]
    }
  }
};
