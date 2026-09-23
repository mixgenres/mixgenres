import type { InstrumentDef } from '../types';

export const acoustic_guitar: InstrumentDef = {
  "id": "acoustic-guitar",
  "name": "Acoustic Guitar",
  "family": "plucked",
  "program": 25,
  "voicing": "chord",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "hard-pick",
  "note": "Steel-string acoustic guitar with solid Sitka spruce top, scalloped X-bracing, and phosphor bronze strings delivering crisp harmonic projection",
  "physicalModel": {
    "model": "plucked-string",
    "parameters": {
      "stiffness": 0.58,
      "damping": 0.32,
      "inharmonicity": 0.22,
      "bodyResonance": 0.75,
      "pluckPosition": 0.22,
      "pluckHardness": 0.68,
      "transientSharpness": 0.65
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Flatpicking near bridge delivers biting brightness; picking near soundhole yields deep woody warmth.",
      "Palm muting near bridge dampens fundamental decay while preserving crisp transients."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "palm-mute",
      "tenuto",
      "ghost",
      "harmonic",
      "slide"
    ],
    "techniqueMethods": [
      "down-up flatpick strumming patterns",
      "Travis fingerpicking thumb-bass separation",
      "bridge palm muting",
      "hammer-on and pull-off legato runs",
      "natural octave harmonics at 12th fret"
    ],
    "playingStyles": [
      "folk",
      "country",
      "pop",
      "bluegrass",
      "rock",
      "indie",
      "americana"
    ],
    "genreTechniques": {
      "folk": [
        "legato",
        "tenuto",
        "accent"
      ],
      "bluegrass": [
        "accent",
        "staccato",
        "slide"
      ],
      "country": [
        "palm-mute",
        "accent",
        "staccato"
      ],
      "pop": [
        "accent",
        "tenuto",
        "palm-mute"
      ]
    }
  }
};
