import type { InstrumentDef } from '../types';

export const tabla: InstrumentDef = {
  "id": "tabla",
  "name": "Tabla",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 60,
    "mid": 62,
    "high": 64
  },
  "bodyConstruction": "skin-faced",
  "note": "Indian paired drums: carved rosewood Dayan (treble) and brass/clay Bayan (bass), with multilayered goat skins and iron-soot Syahi paste providing sliding vocal bass and bell-like tones",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.78,
      "membraneDamping": 0.28,
      "transientSharpness": 0.85,
      "bodyResonance": 0.9
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Syahi black spot dampens non-harmonic modes, creating pure harmonic bell-like overtones on Dayan.",
      "Base of left palm slides across Bayan head while striking to create continuous pitch-bending bass vocal wahs.",
      "Bol mnemonic system (Dha, Dhin, Ge, Na, Tin, Ta) precisely governs finger contact methods."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "open",
      "staccato",
      "slap",
      "ghost",
      "roll"
    ],
    "techniqueMethods": [
      "Na/Ta: high ringing harmonic stroke on the outer rim of Dayan",
      "Tin: open resonant center stroke on Dayan outside syahi",
      "Ge/Ghe: open sliding bass stroke on Bayan with wrist pitch modulation",
      "Ke/Ka: flat hand slapping damping on Bayan",
      "Tirakita: lightning fast split-finger roll across Dayan syahi"
    ],
    "playingStyles": [
      "hindustani",
      "qawwali",
      "ghazal",
      "fusion",
      "world-percussion"
    ],
    "genreTechniques": {
      "hindustani": [
        "accent",
        "open",
        "staccato",
        "roll"
      ],
      "qawwali": [
        "accent",
        "open",
        "slap"
      ],
      "fusion": [
        "open",
        "accent",
        "roll"
      ]
    }
  }
};
