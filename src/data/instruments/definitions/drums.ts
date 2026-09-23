import type { InstrumentDef } from '../types';

export const drums: InstrumentDef = {
  "id": "drums",
  "name": "Standard Drum Kit",
  "family": "kit",
  "kit": true,
  "voicing": "unpitched",
  "drum": {
    "low": 36,
    "mid": 38,
    "high": 42
  },
  "note": "Studio acoustic drum kit with 22-inch punchy maple kick, 14-inch crisp maple snare with 20-strand snare wires, tuned rack/floor toms, and hammered B20 bronze cymbals",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.65,
      "membraneDamping": 0.35,
      "transientSharpness": 0.92,
      "bodyResonance": 0.75
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Kick combines low fundamental sub thump (55-65 Hz) with crisp beater click (3-4 kHz).",
      "Snare couples top head acoustic crack with bottom snare wire sizzling buzz.",
      "Hi-hats and cymbals deliver shimmering metallic stick definition and wash."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "ghost",
      "open",
      "staccato",
      "rimshot",
      "staccatissimo",
      "roll"
    ],
    "techniqueMethods": [
      "snare center strike for fat solid fundamental backbeat",
      "high-velocity rimshot hitting head and metal rim simultaneously",
      "delicate ghost notes providing syncopated inner groove subdivision",
      "hi-hat foot pressure modulation from tight closed tick to sizzle open wash",
      "bass drum heel-up punch with beater buried in head"
    ],
    "playingStyles": [
      "rock",
      "funk",
      "pop",
      "hip-hop",
      "blues",
      "rnb",
      "metal"
    ],
    "genreTechniques": {
      "rock": [
        "accent",
        "rimshot",
        "open",
        "staccato"
      ],
      "funk": [
        "ghost",
        "accent",
        "rimshot",
        "staccato"
      ],
      "pop": [
        "accent",
        "staccato",
        "open"
      ],
      "hip-hop": [
        "accent",
        "ghost",
        "rimshot"
      ]
    }
  }
};
