import type { InstrumentDef } from '../types';

export const berimbau: InstrumentDef = {
  "id": "berimbau",
  "name": "Berimbau",
  "family": "plucked",
  "program": 105,
  "voicing": "single",
  "courses": 1,
  "bodyConstruction": "gourd",
  "excitationType": "hard-pick",
  "note": "Afro-Brazilian musical bow of flexible biriba wood, single steel wire (arame), tuned gourd resonator (cabaça), baqueta stick strike, dobra coin, and caxixi rattle",
  "physicalModel": {
    "model": "plucked-string",
    "parameters": {
      "stiffness": 0.7,
      "damping": 0.5,
      "inharmonicity": 0.38,
      "bodyResonance": 0.88,
      "transientSharpness": 0.86
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Coin or smooth stone pressed against wire shifts pitch by a half or whole step with metallic buzz.",
      "Moving gourd against performer abdomen modulates open/closed acoustic cavity filtering (wah effect).",
      "Baqueta wooden stick strikes wire while simultaneously shaking the woven caxixi rattle."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "open",
      "ghost",
      "tremolo"
    ],
    "techniqueMethods": [
      "open string low fundamental strike",
      "dobra pressed high pitch strike with coin buzz",
      "cabaça stomach wah-wah cavity modulation",
      "caxixi basket rattle accentuation",
      "syncopated capoeira toque patterns (Angola, São Bento)"
    ],
    "playingStyles": [
      "capoeira",
      "samba-de-roda",
      "afro-brazilian",
      "mpb",
      "world-percussion"
    ],
    "genreTechniques": {
      "capoeira": [
        "accent",
        "open",
        "staccato"
      ],
      "afro-brazilian": [
        "accent",
        "open",
        "ghost"
      ],
      "world-percussion": [
        "open",
        "staccato",
        "accent"
      ]
    }
  }
};
