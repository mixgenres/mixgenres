import type { InstrumentDef } from '../types';

export const bongos: InstrumentDef = {
  "id": "bongos",
  "name": "Bongos",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 61,
    "mid": 60,
    "high": 60
  },
  "bodyConstruction": "skin-faced",
  "note": "Pair of small Afro-Cuban wooden drums: high-pitched macho with razor-sharp head tension and deeper hembra, providing the driving martillo groove and solo accents of salsa",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.85,
      "membraneDamping": 0.32,
      "transientSharpness": 0.94,
      "bodyResonance": 0.72
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Extremely high head tension on macho yields sharp, dry, cracking rim slaps.",
      "Martillo pattern combines thumb muffle strokes with alternating index finger rim taps.",
      "Player holds drums between knees, leaning forward to modulate hembra tone."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "slap",
      "open",
      "staccato",
      "ghost"
    ],
    "techniqueMethods": [
      "martillo (hammer) steady syncopated foundation pattern",
      "high-pitched macho rim slap with index fingertip",
      "thumb press and slide pitch-bending muffle on macho",
      "hembra open resonant bass stroke",
      "repiqueteo high-speed improvisational fills"
    ],
    "playingStyles": [
      "salsa",
      "son-cubano",
      "bolero",
      "bachata",
      "latin-jazz"
    ],
    "genreTechniques": {
      "salsa": [
        "slap",
        "open",
        "accent",
        "ghost"
      ],
      "bachata": [
        "accent",
        "open",
        "slap",
        "ghost"
      ],
      "bolero": [
        "ghost",
        "open",
        "accent"
      ]
    }
  }
};
