import type { InstrumentDef } from '../types';

export const bouzouki: InstrumentDef = {
  "id": "bouzouki",
  "name": "Irish / Greek Bouzouki",
  "family": "plucked",
  "program": 25,
  "voicing": "chord",
  "courses": 2,
  "bodyConstruction": "wood-box",
  "excitationType": "hard-pick",
  "note": "Long-necked teardrop lute with four double courses tuned in unisons and octaves, producing expansive metallic chime, driving countermelodies, and modal drones",
  "physicalModel": {
    "model": "plucked-string",
    "parameters": {
      "stiffness": 0.6,
      "damping": 0.3,
      "inharmonicity": 0.25,
      "bodyResonance": 0.74,
      "transientSharpness": 0.78
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Octave-tuned lower courses deliver a rich chiming chorus effect.",
      "Long scale length provides high string tension with extended singing sustain.",
      "Modal open tunings (GDAD / CFAD) facilitate ringing open-string drones."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tremolo",
      "tenuto",
      "slide"
    ],
    "techniqueMethods": [
      "continuous plectrum tremolo melodic lines",
      "modal drone backing with moving countermelodies",
      "hammer-on and pull-off triplets",
      "fast octave glissandi shifts",
      "syncopated rhythmic strumming with muted strikes"
    ],
    "playingStyles": [
      "celtic",
      "greek-rebetiko",
      "folk",
      "balkan",
      "world"
    ],
    "genreTechniques": {
      "celtic": [
        "legato",
        "accent",
        "tremolo",
        "tenuto"
      ],
      "greek-rebetiko": [
        "tremolo",
        "accent",
        "staccato"
      ],
      "balkan": [
        "accent",
        "staccato",
        "legato"
      ]
    }
  }
};
