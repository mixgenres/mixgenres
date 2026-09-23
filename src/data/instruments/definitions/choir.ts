import type { InstrumentDef } from '../types';

export const choir: InstrumentDef = {
  "id": "choir",
  "name": "Full Vocal Choir",
  "family": "voice",
  "program": 52,
  "voicing": "chord",
  "note": "Polyphonic acoustic choral ensemble combining soprano, alto, tenor, and bass vocalists singing sustained vowel sonorities with expansive cathedral acoustic bloom",
  "physicalModel": {
    "model": "voice-source",
    "parameters": {
      "airResonance": 0.92,
      "breathNoise": 0.2,
      "bodyResonance": 0.9,
      "stereoWidth": 0.95
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Ensemble detuning creates rich natural chorus phase interaction without artificial modulation.",
      "Dynamic velocity layers smoothly crossfade from intimate pianissimo humming to triumphant fortissimo chorales.",
      "Long cathedral acoustic reverb tail envelops the voices in transcendent space."
    ]
  },
  "techniques": {
    "articulations": [
      "tenuto",
      "legato",
      "crescendo",
      "diminuendo",
      "accent",
      "portato"
    ],
    "techniqueMethods": [
      "polyphonic SATB voice leading and suspensions",
      "seamless staggered breathing for infinite sustains",
      "dynamic choral swells (messa di voce)",
      "gentle vocal onset without harsh consonants",
      "cathedral acoustic release decay"
    ],
    "playingStyles": [
      "choral",
      "cinematic",
      "classical",
      "gospel",
      "ambient"
    ],
    "genreTechniques": {
      "cinematic": [
        "tenuto",
        "legato",
        "crescendo",
        "diminuendo"
      ],
      "choral": [
        "legato",
        "tenuto",
        "portato"
      ],
      "ambient": [
        "tenuto",
        "legato"
      ]
    }
  }
};
