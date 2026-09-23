import type { InstrumentDef } from '../types';

export const cumbia_drum: InstrumentDef = {
  "id": "cumbia-drum",
  "name": "Tambor llamador",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 45,
    "mid": 47,
    "high": 48
  },
  "note": "Colombian single-headed llamador drum maintaining the relentless, hypnotic offbeat pulse of authentic cumbia",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "ghost",
      "open",
      "low-tone"
    ],
    "techniqueMethods": [
      "sharp hand slap on offbeats",
      "palm resting muting",
      "dry resonant skin pop",
      "strict metronomic cadence"
    ],
    "playingStyles": [
      "cumbia",
      "porro",
      "bullerengue",
      "colombian-folk"
    ],
    "genreTechniques": {
      "cumbia": [
        "accent",
        "staccato",
        "ghost",
        "open"
      ],
      "bullerengue": [
        "accent",
        "open",
        "low-tone"
      ]
    }
  }
};
