import type { InstrumentDef } from '../types';

export const guitarron: InstrumentDef = {
  "id": "guitarron",
  "name": "Guitarrón",
  "family": "plucked",
  "program": 32,
  "octave": -12,
  "voicing": "bass",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "fingerpad",
  "note": "Deep-bodied Mexican fretless bass guitar played in octaves with powerful acoustic punch",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "ghost"
    ],
    "techniqueMethods": [
      "two-finger simultaneous octave pluck (jalao)",
      "thumb and index finger pinch",
      "wooden body resonance thump",
      "fretless microtonal intonation"
    ],
    "playingStyles": [
      "mariachi",
      "ranchera",
      "son-mexicano",
      "huapango"
    ],
    "genreTechniques": {
      "mariachi": [
        "accent",
        "staccato",
        "tenuto"
      ],
      "ranchera": [
        "accent",
        "tenuto",
        "ghost"
      ],
      "son-mexicano": [
        "accent",
        "staccato"
      ]
    }
  }
};
