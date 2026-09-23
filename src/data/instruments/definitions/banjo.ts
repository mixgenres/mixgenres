import type { InstrumentDef } from '../types';

export const banjo: InstrumentDef = {
  "id": "banjo",
  "name": "5-String Banjo",
  "family": "plucked",
  "program": 105,
  "voicing": "chord",
  "courses": 1,
  "bodyConstruction": "skin-faced",
  "excitationType": "hard-pick",
  "note": "American 5-string banjo with brass tone ring and mylar head stretched over a maple rim, generating blistering high-speed rolls and crisp percussive projection",
  "physicalModel": {
    "model": "plucked-string",
    "parameters": {
      "stiffness": 0.65,
      "damping": 0.55,
      "inharmonicity": 0.35,
      "membraneTension": 0.75,
      "transientSharpness": 0.88
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "High-tension drumhead radiates explosive pluck transients with rapid decay.",
      "High 5th drone string (thumb-picked) anchors syncope-heavy bluegrass rolls.",
      "Metal fingerpicks striking steel strings create a signature metallic zing."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "slide",
      "tenuto",
      "ghost",
      "harmonic"
    ],
    "techniqueMethods": [
      "Scruggs three-finger roll patterns (T-I-M)",
      "clawhammer downward index nail frailing",
      "thumb drone string syncopation",
      "choke string pitch bending",
      "quick two-fret upward slide ornamentation"
    ],
    "playingStyles": [
      "bluegrass",
      "old-time",
      "folk",
      "country",
      "americana"
    ],
    "genreTechniques": {
      "bluegrass": [
        "accent",
        "staccato",
        "slide",
        "legato"
      ],
      "old-time": [
        "accent",
        "tenuto",
        "staccato"
      ],
      "country": [
        "accent",
        "slide",
        "staccato"
      ]
    }
  }
};
