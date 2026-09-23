import type { InstrumentDef } from '../types';

export const cajon: InstrumentDef = {
  "id": "cajon",
  "name": "Peruvian / Flamenco Cajón",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 36,
    "mid": 38,
    "high": 40
  },
  "bodyConstruction": "wood-box",
  "note": "Box drum played by sitting on top and striking the thin front tapa woodplate; internal guitar strings or snare wires provide sharp corner slaps above deep resonant bass center hits",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.6,
      "membraneDamping": 0.42,
      "transientSharpness": 0.88,
      "bodyResonance": 0.82
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Striking center of tapa plate excites large wooden cavity for round deep bass kick (70-90 Hz).",
      "Striking upper corners rattles internal guitar strings for snare-like rim crack.",
      "Heel of foot on tapa can bend pitch upward while playing."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "ghost",
      "staccato",
      "slap",
      "open"
    ],
    "techniqueMethods": [
      "low bass strike with relaxed flat palm in center of tapa",
      "high snare slap with fingers across top corner screw gap",
      "mid-tone touch with relaxed fingertips on upper half",
      "finger-tip roll and double stroke flutter",
      "heel glide pitch modulation against tapa surface"
    ],
    "playingStyles": [
      "flamenco",
      "afro-peruvian",
      "acoustic-pop",
      "rumba",
      "latin-jazz"
    ],
    "genreTechniques": {
      "flamenco": [
        "slap",
        "accent",
        "ghost",
        "open"
      ],
      "afro-peruvian": [
        "accent",
        "open",
        "ghost"
      ],
      "acoustic-pop": [
        "accent",
        "slap",
        "ghost"
      ]
    }
  }
};
