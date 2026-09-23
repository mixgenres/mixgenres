import type { InstrumentDef } from '../types';

export const bari_sax: InstrumentDef = {
  "id": "bari-sax",
  "name": "Baritone Saxophone",
  "family": "winds",
  "program": 67,
  "voicing": "bass",
  "note": "Massive E-flat low brass saxophone with coiled neck tube, delivering guttural earth-shaking low A/B-flat fundamentals, snappy funk horn punches, and motoring bass lines",
  "physicalModel": {
    "model": "blown-reed",
    "parameters": {
      "reedStiffness": 0.75,
      "airResonance": 0.92,
      "breathNoise": 0.25,
      "transientSharpness": 0.78
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Huge single cane reed requires firm breath support to initiate massive low column vibrations.",
      "Fast key action provides percussive mechanical pad slaps that enhance the attack transient.",
      "Rich in low-mid rasp, locking together with bass guitar and kick drum."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "marcato",
      "tenuto",
      "ghost",
      "legato"
    ],
    "techniqueMethods": [
      "percussive slap tonguing on low notes",
      "punchy 16th-note funk ostinato riffs",
      "growling subterranean low A pedal points",
      "walking bass line acoustic emulation",
      "horn section anchor bass stabs"
    ],
    "playingStyles": [
      "funk",
      "soul",
      "big-band",
      "ska",
      "rock",
      "afrobeat"
    ],
    "genreTechniques": {
      "funk": [
        "marcato",
        "accent",
        "staccato",
        "ghost"
      ],
      "big-band": [
        "accent",
        "tenuto",
        "staccato"
      ],
      "afrobeat": [
        "staccato",
        "accent",
        "marcato"
      ]
    }
  }
};
