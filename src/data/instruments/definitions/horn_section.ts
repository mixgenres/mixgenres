import type { InstrumentDef } from '../types';

export const horn_section: InstrumentDef = {
  "id": "horn-section",
  "name": "Horn section",
  "family": "brass",
  "program": 61,
  "voicing": "chord",
  "note": "Tight funk and soul brass section (trumpet, tenor sax, trombone) with laser-accurate syncopated hits",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "marcato",
      "ghost",
      "fall",
      "doit",
      "tenuto"
    ],
    "techniqueMethods": [
      "crisp synchronized tonguing",
      "offbeat sixteenth-note punches",
      "explosive fall-offs",
      "percussive ghost stabs"
    ],
    "playingStyles": [
      "funk",
      "r&b",
      "soul",
      "ska",
      "afrobeats"
    ],
    "genreTechniques": {
      "funk": [
        "staccato",
        "accent",
        "marcato",
        "fall",
        "ghost"
      ],
      "ska": [
        "staccato",
        "accent",
        "marcato"
      ],
      "afrobeats": [
        "staccato",
        "accent",
        "fall"
      ]
    }
  }
};
