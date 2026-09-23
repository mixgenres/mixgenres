import type { InstrumentDef } from '../types';

export const harmonica: InstrumentDef = {
  "id": "harmonica",
  "name": "Harmonica",
  "family": "winds",
  "program": 22,
  "voicing": "single",
  "note": "10-hole diatonic blues harp with expressive reed bending, tongue-blocking, and cupped-hand acoustic wah",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "bend",
      "vibrato",
      "ghost",
      "tenuto",
      "trill"
    ],
    "techniqueMethods": [
      "draw reed bending",
      "tongue-blocking percussive slaps",
      "cupped hand acoustic wah",
      "throat vibrato",
      "flutter tonguing"
    ],
    "playingStyles": [
      "blues",
      "folk",
      "country",
      "rock",
      "chicago-blues"
    ],
    "genreTechniques": {
      "blues": [
        "bend",
        "vibrato",
        "accent",
        "ghost"
      ],
      "country": [
        "bend",
        "staccato",
        "vibrato"
      ],
      "folk": [
        "legato",
        "tenuto",
        "vibrato"
      ]
    }
  }
};
