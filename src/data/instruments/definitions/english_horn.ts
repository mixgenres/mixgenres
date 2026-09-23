import type { InstrumentDef } from '../types';

export const english_horn: InstrumentDef = {
  "id": "english-horn",
  "name": "English horn (Cor anglais)",
  "family": "winds",
  "program": 69,
  "octave": 12,
  "voicing": "single",
  "note": "Tenor oboe with bulbous bell producing haunting, melancholic, autumnal double-reed tone",
  "techniques": {
    "articulations": [
      "accent",
      "legato",
      "tenuto",
      "staccato",
      "vibrato",
      "portato"
    ],
    "techniqueMethods": [
      "broad double reed voicing",
      "breath support dynamic shaping",
      "cantabile legato phrasing",
      "expressive throat vibrato"
    ],
    "playingStyles": [
      "orchestral",
      "cinematic",
      "chamber",
      "impressionist"
    ],
    "genreTechniques": {
      "orchestral": [
        "legato",
        "tenuto",
        "vibrato",
        "portato"
      ],
      "cinematic": [
        "legato",
        "tenuto",
        "vibrato"
      ]
    }
  }
};
