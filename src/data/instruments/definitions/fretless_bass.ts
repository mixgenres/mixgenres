import type { InstrumentDef } from '../types';

export const fretless_bass: InstrumentDef = {
  "id": "fretless-bass",
  "name": "Fretless bass",
  "family": "plucked",
  "program": 35,
  "voicing": "bass",
  "courses": 1,
  "bodyConstruction": "solid-electric",
  "excitationType": "fingerpad",
  "note": "Fretless electric bass producing continuous vocal mwah resonance and singing vibrato",
  "techniques": {
    "articulations": [
      "accent",
      "legato",
      "vibrato",
      "slide",
      "portamento",
      "tenuto",
      "ghost"
    ],
    "techniqueMethods": [
      "finger pad acoustic pull",
      "vocal vibrato across fingerboard",
      "slow portamento glissando",
      "side-of-finger attack"
    ],
    "playingStyles": [
      "jazz",
      "fusion",
      "world",
      "contemporary",
      "pop"
    ],
    "genreTechniques": {
      "jazz": [
        "legato",
        "vibrato",
        "portamento",
        "accent"
      ],
      "fusion": [
        "slide",
        "vibrato",
        "legato",
        "ghost"
      ],
      "world": [
        "legato",
        "tenuto",
        "vibrato"
      ]
    }
  }
};
