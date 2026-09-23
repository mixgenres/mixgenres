import type { InstrumentDef } from '../types';

export const bata: InstrumentDef = {
  "id": "bata",
  "name": "Batá drums",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 60,
    "mid": 62,
    "high": 64
  },
  "note": "Hourglass-shaped sacred Afro-Cuban double-headed drums (Iyá, Itótele, Okónkolo) playing complex polyrhythms",
  "techniques": {
    "articulations": [
      "accent",
      "ghost",
      "open",
      "low-tone",
      "staccato",
      "flam",
      "roll"
    ],
    "techniqueMethods": [
      "cha-cha high head slap",
      "enú bass head open palm tone",
      "interlocking three-drum conversation",
      "muffled stroke damping"
    ],
    "playingStyles": [
      "afro-cuban",
      "santeria",
      "latin-jazz",
      "rumba"
    ],
    "genreTechniques": {
      "afro-cuban": [
        "accent",
        "open",
        "low-tone",
        "ghost",
        "flam"
      ],
      "latin-jazz": [
        "accent",
        "open",
        "staccato"
      ]
    }
  }
};
