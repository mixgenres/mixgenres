import type { InstrumentDef } from '../types';

export const charango: InstrumentDef = {
  "id": "charango",
  "name": "Charango",
  "family": "plucked",
  "program": 24,
  "octave": 12,
  "voicing": "chord",
  "courses": 2,
  "bodyConstruction": "wood-box",
  "excitationType": "nail",
  "note": "Ten-string Andean small lute with doubled courses and vibrant, bright, high-pitched rapid strums",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tremolo",
      "rasgueado",
      "tenuto"
    ],
    "techniqueMethods": [
      "repique rapid index-finger roll",
      "trémolo de charango",
      "syncopated fingerstyle arpeggio",
      "palm mute apagado"
    ],
    "playingStyles": [
      "andean-folk",
      "huayno",
      "carnavalito",
      "cueca"
    ],
    "genreTechniques": {
      "andean-folk": [
        "accent",
        "rasgueado",
        "tremolo",
        "staccato"
      ],
      "huayno": [
        "accent",
        "rasgueado",
        "staccato"
      ],
      "carnavalito": [
        "accent",
        "staccato",
        "tremolo"
      ]
    }
  }
};
