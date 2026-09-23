import type { InstrumentDef } from '../types';

export const harp: InstrumentDef = {
  "id": "harp",
  "name": "Harp",
  "family": "plucked",
  "program": 46,
  "voicing": "chord",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "fingerpad",
  "note": "Acoustic concert harp sounding rich polyphonic arpeggiations and sustained lyrical chords",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "harmonic",
      "tremolo",
      "crescendo"
    ],
    "techniqueMethods": [
      "finger pad plucking",
      "rapid arpeggiation",
      "pedal accidentals adjustment",
      "palm damping"
    ],
    "playingStyles": [
      "classical",
      "cinematic",
      "celtic",
      "pop",
      "folk"
    ],
    "genreTechniques": {
      "classical": [
        "legato",
        "tenuto",
        "harmonic",
        "accent"
      ],
      "cinematic": [
        "legato",
        "tenuto",
        "harmonic",
        "crescendo"
      ],
      "celtic": [
        "legato",
        "staccato",
        "accent"
      ]
    }
  }
};
