import type { InstrumentDef } from '../types';

export const piccolo: InstrumentDef = {
  "id": "piccolo",
  "name": "Piccolo",
  "family": "winds",
  "program": 72,
  "octave": 12,
  "voicing": "single",
  "note": "Half-size transverse flute pitched an octave above concert flute with piercing, brilliant, soaring highs",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "trill",
      "tremolo"
    ],
    "techniqueMethods": [
      "tight embouchure airstream",
      "crisp double-tonguing",
      "flutter-tonguing",
      "soaring top-register penetration"
    ],
    "playingStyles": [
      "orchestral",
      "marching",
      "celtic",
      "cinematic"
    ],
    "genreTechniques": {
      "orchestral": [
        "accent",
        "staccato",
        "legato",
        "trill"
      ],
      "celtic": [
        "staccato",
        "trill",
        "accent"
      ]
    }
  }
};
