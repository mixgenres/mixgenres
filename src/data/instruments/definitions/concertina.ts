import type { InstrumentDef } from '../types';

export const concertina: InstrumentDef = {
  "id": "concertina",
  "name": "Concertina",
  "family": "bellows-and-keys",
  "program": 21,
  "voicing": "chord",
  "note": "Hexagonal Anglo-Celtic concertina with bright reedy punch and lively dance ornamentation",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "portato",
      "trill",
      "grace",
      "tenuto"
    ],
    "techniqueMethods": [
      "push-pull bellows reversals",
      "finger button dance cuts",
      "air button breathing",
      "octave chord stabs"
    ],
    "playingStyles": [
      "celtic",
      "irish-folk",
      "english-folk",
      "shanty",
      "polka"
    ],
    "genreTechniques": {
      "celtic": [
        "staccato",
        "grace",
        "accent",
        "legato"
      ],
      "irish-folk": [
        "staccato",
        "grace",
        "accent"
      ],
      "polka": [
        "staccato",
        "accent"
      ]
    }
  }
};
