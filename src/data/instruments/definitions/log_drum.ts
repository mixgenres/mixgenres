import type { InstrumentDef } from '../types';

export const log_drum: InstrumentDef = {
  "id": "log-drum",
  "name": "Slit log drum",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 47,
    "mid": 48,
    "high": 50
  },
  "note": "Hollowed resonant hardwood log with tuned acoustic tongue slits delivering organic, woody percussive melodies",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "roll",
      "open"
    ],
    "techniqueMethods": [
      "rubber mallet slit strike",
      "bare finger tap",
      "wooden box resonance decay",
      "alternating pitch tongue patterns"
    ],
    "playingStyles": [
      "african-traditional",
      "tribal",
      "cinematic",
      "ambient",
      "world"
    ],
    "genreTechniques": {
      "african-traditional": [
        "accent",
        "staccato",
        "open",
        "roll"
      ],
      "ambient": [
        "open",
        "ghost",
        "staccato"
      ]
    }
  }
};
