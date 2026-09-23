import type { InstrumentDef } from '../types';

export const pandeiro: InstrumentDef = {
  "id": "pandeiro",
  "name": "Pandeiro",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 62,
    "mid": 63,
    "high": 64
  },
  "bodyConstruction": "skin-faced",
  "note": "Brazilian national frame drum with thin natural goatskin head and cupped metal platinelas (jingles) with internal dampening washers, capable of emulating an entire samba percussion section",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.68,
      "membraneDamping": 0.45,
      "transientSharpness": 0.88,
      "bodyResonance": 0.75
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Interlocking metal platinelas have central damping plates to prevent uncontrolled sustained wash.",
      "Thumb strikes center for deep surdo-like bass tone (sub-bass pop).",
      "Rocking wrist rotation between thumb, heel of palm, and fingertips produces continuous 16th-note samba."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "slap",
      "open",
      "staccato",
      "ghost",
      "roll"
    ],
    "techniqueMethods": [
      "thumb open bass pop (emulating the surdo drum)",
      "fingertip rim tap (emulating tamborim)",
      "heel of the palm rocking stroke",
      "cupped center slap for sharp snare-like crack",
      "finger-shake jingle roll"
    ],
    "playingStyles": [
      "samba",
      "choro",
      "capoeira",
      "forro",
      "mpb",
      "baião"
    ],
    "genreTechniques": {
      "samba": [
        "accent",
        "slap",
        "ghost",
        "open"
      ],
      "choro": [
        "accent",
        "ghost",
        "open",
        "slap"
      ],
      "capoeira": [
        "accent",
        "open",
        "slap"
      ]
    }
  }
};
