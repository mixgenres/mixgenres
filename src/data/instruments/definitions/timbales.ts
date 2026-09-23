import type { InstrumentDef } from '../types';

export const timbales: InstrumentDef = {
  "id": "timbales",
  "name": "Timbales",
  "family": "hand-drums",
  "voicing": "unpitched",
  "drum": {
    "low": 65,
    "mid": 66,
    "high": 66
  },
  "note": "Afro-Cuban shallow metal-shelled drums (macho and hembra) mounted on a stand with cowbells and woodblock, played with straight wooden sticks for explosive salsa drive",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.82,
      "membraneDamping": 0.28,
      "transientSharpness": 0.95,
      "bodyResonance": 0.65
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Cascara rhythm taps the bare stick against the brass/steel drum shell for dry metallic clicks.",
      "Rimshot strikes head and metal rim with stick for explosive gunshot volume.",
      "Mambo bell mounted between drums drives the peak chorus energy."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "rimshot",
      "open",
      "staccato",
      "roll"
    ],
    "techniqueMethods": [
      "cascara stick pattern played on the side of the metal shell",
      "explosive rimshots on the high macho drum head",
      "mambo bell and cha-cha bell syncopated accents",
      "damped finger-press on head for pitch-altered muting",
      "rapid stick rolls and abanico drum transitions"
    ],
    "playingStyles": [
      "salsa",
      "mambo",
      "cha-cha-cha",
      "latin-jazz",
      "cumbia"
    ],
    "genreTechniques": {
      "salsa": [
        "accent",
        "rimshot",
        "open",
        "staccato"
      ],
      "mambo": [
        "rimshot",
        "accent",
        "open"
      ],
      "cha-cha-cha": [
        "open",
        "accent",
        "staccato"
      ]
    }
  }
};
