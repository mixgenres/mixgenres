import type { InstrumentDef } from '../types';

export const darbuka: InstrumentDef = {
  "id": "darbuka",
  "name": "Darbuka (Doumbek)",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 60,
    "mid": 62,
    "high": 64
  },
  "bodyConstruction": "skin-faced",
  "note": "Middle Eastern goblet drum made of cast aluminum or ceramic with synthetic head, delivering booming resonant center Doums and lightning finger-snap Teks and Kaks",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.82,
      "membraneDamping": 0.35,
      "transientSharpness": 0.92,
      "bodyResonance": 0.86
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Doum: striking head center allows goblet horn to amplify deep bass Helmholtz resonance.",
      "Tek: high-tension snap of index/ring finger on the metal rim for razor-sharp transient.",
      "Held horizontally under non-dominant arm, allowing lightning split-finger rolls."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "open",
      "staccato",
      "slap",
      "roll",
      "ghost"
    ],
    "techniqueMethods": [
      "Doum: deep low resonant center palm strike",
      "Tek: right-hand ringing rim snap with ring finger",
      "Ka: left-hand crisp ring finger rim strike",
      "split-finger Turkish roll technique (index-ring alternation)",
      "finger-muffled slap in drum center (Slap/Sak)"
    ],
    "playingStyles": [
      "middle-eastern",
      "belly-dance",
      "turkish",
      "arabic-maqam",
      "balkan",
      "flamenco-fusion"
    ],
    "genreTechniques": {
      "middle-eastern": [
        "accent",
        "open",
        "staccato",
        "roll"
      ],
      "belly-dance": [
        "accent",
        "roll",
        "open",
        "slap"
      ],
      "turkish": [
        "accent",
        "roll",
        "staccato"
      ]
    }
  }
};
