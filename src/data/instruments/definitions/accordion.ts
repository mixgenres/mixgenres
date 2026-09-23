import type { InstrumentDef } from '../types';

export const accordion: InstrumentDef = {
  "id": "accordion",
  "name": "Accordion",
  "family": "bellows-and-keys",
  "program": 21,
  "voicing": "chord",
  "note": "Free-reed aerophone with hand-pumped bellows driving dual/triple reed banks in resonant wooden tone chambers with musette tremolo tuning",
  "physicalModel": {
    "model": "blown-reed",
    "parameters": {
      "reedStiffness": 0.6,
      "airResonance": 0.8,
      "bodyResonance": 0.7,
      "breathNoise": 0.12,
      "transientSharpness": 0.55
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Bellows pressure governs volume, pitch centroid, and reed formant saturation.",
      "Reversing bellows direction produces a crisp articulation transient.",
      "Cassotto tone chambers attenuate harsh upper partials for a warm round core."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "marcato",
      "tremolo"
    ],
    "techniqueMethods": [
      "bellows shake and tremolo pumping",
      "push-pull bellows direction reversal",
      "musette register stop switching",
      "stradella bass button counter-rhythm",
      "ricochet bellows bouncing"
    ],
    "playingStyles": [
      "cumbia",
      "vallenato",
      "forro",
      "chanson",
      "celtic",
      "zydeco",
      "tango"
    ],
    "genreTechniques": {
      "cumbia": [
        "accent",
        "staccato",
        "legato"
      ],
      "vallenato": [
        "accent",
        "marcato",
        "tremolo"
      ],
      "forro": [
        "staccato",
        "accent",
        "legato"
      ],
      "zydeco": [
        "accent",
        "marcato",
        "staccato"
      ]
    }
  }
};
