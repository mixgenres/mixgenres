import type { InstrumentDef } from '../types';

export const alto_sax: InstrumentDef = {
  "id": "alto-sax",
  "name": "Alto Saxophone",
  "family": "winds",
  "program": 65,
  "voicing": "single",
  "note": "E-flat curved conical brass saxophone with single reed mouthpiece, delivering the expressive bite, vocal flexibility, and iconic bebop agility of Charlie Parker",
  "physicalModel": {
    "model": "blown-reed",
    "parameters": {
      "reedStiffness": 0.58,
      "airResonance": 0.84,
      "breathNoise": 0.18,
      "transientSharpness": 0.68
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Single cane reed vibrating against the curved mouthpiece facing generates rich odd and even harmonics.",
      "Dynamic biting embouchure allows explosive accents, screaming altissimo register, and sweet subtones."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "marcato",
      "ghost",
      "bend",
      "vibrato"
    ],
    "techniqueMethods": [
      "jaw-dropped expressive blues note bends",
      "bebop swing tongue articulation (slur two, tongue two)",
      "growl created by singing while blowing into reed",
      "subtone warmth on low notes with loose lower lip",
      "altissimo overtone fingerings extending range upward"
    ],
    "playingStyles": [
      "jazz",
      "bebop",
      "funk",
      "soul",
      "pop",
      "ska",
      "rnb"
    ],
    "genreTechniques": {
      "bebop": [
        "accent",
        "ghost",
        "legato",
        "staccato"
      ],
      "funk": [
        "marcato",
        "accent",
        "staccato"
      ],
      "blues": [
        "bend",
        "vibrato",
        "legato",
        "accent"
      ],
      "pop": [
        "accent",
        "legato",
        "tenuto"
      ]
    }
  }
};
