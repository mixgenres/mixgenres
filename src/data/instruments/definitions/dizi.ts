import type { InstrumentDef } from '../types';

export const dizi: InstrumentDef = {
  "id": "dizi",
  "name": "Dizi",
  "family": "winds",
  "program": 72,
  "voicing": "single",
  "note": "Chinese transverse bamboo flute equipped with a mo-kong membrane hole covered by a thin reed tissue (dimo), radiating bright, buzzing, resonant, and soaring lyrical timbre",
  "physicalModel": {
    "model": "blown-air",
    "parameters": {
      "airResonance": 0.86,
      "breathNoise": 0.24,
      "transientSharpness": 0.62
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Vibrating dimo membrane imparts a brilliant signature buzzing harmonic overtone series.",
      "Higher breath pressure energizes the membrane into dramatic resonant brightness.",
      "Rapid finger popping against tone holes generates crisp acoustic percussion."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "trill",
      "slide",
      "tremolo",
      "tenuto",
      "vibrato"
    ],
    "techniqueMethods": [
      "duo-yin rapid sliding glissando into target note",
      "chan-yin delicate throat and finger vibrato",
      "hua-she rapid flutter tonguing",
      "du-yin crisp staccato single and double tonguing",
      "die-yin finger tapping ornamentation"
    ],
    "playingStyles": [
      "chinese-classical",
      "bangdi-northern",
      "qudi-southern",
      "folk",
      "soundtrack"
    ],
    "genreTechniques": {
      "chinese-classical": [
        "legato",
        "trill",
        "slide",
        "tremolo",
        "accent"
      ],
      "bangdi-northern": [
        "accent",
        "staccato",
        "trill",
        "tremolo"
      ],
      "qudi-southern": [
        "legato",
        "tenuto",
        "slide",
        "vibrato"
      ]
    }
  }
};
