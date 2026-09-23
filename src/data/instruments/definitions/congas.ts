import type { InstrumentDef } from '../types';

export const congas: InstrumentDef = {
  "id": "congas",
  "name": "Congas (Tumbadoras)",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 64,
    "mid": 62,
    "high": 60
  },
  "bodyConstruction": "skin-faced",
  "note": "Afro-Cuban paired staved wooden barrel hand drums (tumba, conga, quinto) with thick mule or steer skin heads, driving the complex marcha tumbao of Latin music",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.72,
      "membraneDamping": 0.38,
      "transientSharpness": 0.88,
      "bodyResonance": 0.8
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Tono abierto (open tone) strikes edge with fingers for resonant pitch projection.",
      "Slap (seco / tapao) cups fingers against center for explosive crack transient.",
      "Manoteo (heel-toe rocking palm motion) creates continuous 8th-note momentum."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "open",
      "staccato",
      "slap",
      "ghost"
    ],
    "techniqueMethods": [
      "open tone (tono abierto) with full fingers bouncing off rim",
      "muffled slap (slap tapao) fingers cup into head holding contact",
      "open slap (slap abierto) explosive high harmonic pop",
      "heel-toe palm rocking motion (manoteo)",
      "bass tone with full palm centered on head"
    ],
    "playingStyles": [
      "salsa",
      "son-cubano",
      "rumba-guaguanco",
      "latin-jazz",
      "cumbia",
      "cha-cha-cha"
    ],
    "genreTechniques": {
      "salsa": [
        "open",
        "slap",
        "accent",
        "ghost"
      ],
      "cumbia": [
        "open",
        "accent",
        "ghost"
      ],
      "latin-jazz": [
        "slap",
        "open",
        "ghost",
        "accent"
      ]
    }
  }
};
