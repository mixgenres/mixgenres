import type { InstrumentDef } from '../types';

export const guitar_harmonics: InstrumentDef = {
  "id": "guitar-harmonics",
  "name": "Guitar harmonics",
  "family": "plucked",
  "program": 31,
  "voicing": "single",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "nail",
  "note": "Pure acoustic guitar natural and artificial bell harmonics ringing at nodal division points",
  "techniques": {
    "articulations": [
      "accent",
      "tenuto",
      "legato",
      "staccato",
      "harmonic",
      "vibrato"
    ],
    "techniqueMethods": [
      "light fingertip touching harmonic nodes (12th, 7th, 5th frets)",
      "artificial pinch harmonic pluck",
      "open string sympathetic ringing",
      "behind-the-nut chimes"
    ],
    "playingStyles": [
      "folk",
      "ambient",
      "fusion",
      "classical",
      "acoustic"
    ],
    "genreTechniques": {
      "ambient": [
        "tenuto",
        "harmonic",
        "legato"
      ],
      "folk": [
        "harmonic",
        "accent",
        "tenuto"
      ],
      "fusion": [
        "harmonic",
        "vibrato",
        "accent"
      ]
    }
  }
};
