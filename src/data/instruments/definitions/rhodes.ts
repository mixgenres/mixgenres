import type { InstrumentDef } from '../types';

export const rhodes: InstrumentDef = {
  "id": "rhodes",
  "name": "Rhodes Electric Piano",
  "family": "bellows-and-keys",
  "program": 4,
  "voicing": "chord",
  "bodyConstruction": "solid-electric",
  "excitationType": "hammer",
  "note": "Electro-mechanical tine piano with neoprene hammers striking asymmetric tuning forks, producing warm chime-like purr and overdriven bark",
  "physicalModel": {
    "model": "struck-string",
    "parameters": {
      "stiffness": 0.42,
      "damping": 0.35,
      "inharmonicity": 0.15,
      "bodyResonance": 0.5,
      "pickupPosition": 0.45,
      "pickupDistance": 0.3,
      "saturation": 0.35,
      "transientSharpness": 0.6
    },
    "signalChain": [
      "preamp",
      "eq",
      "chorus",
      "reverb"
    ],
    "synthesisNotes": [
      "Soft velocities yield pure bell-like sine-dominant fundamentals.",
      "Hard velocities induce mechanical tine bite and magnetic pickup clipping bark.",
      "Stereo tremolo pans across harmonic fields for classic neo-soul movement."
    ]
  },
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "ghost",
      "tremolo",
      "portato"
    ],
    "techniqueMethods": [
      "neoprene hammer tine excitation",
      "magnetic pickup proximity overload",
      "mechanical damper pedal release",
      "stereo pan tremolo modulation",
      "extended chord cluster comping"
    ],
    "playingStyles": [
      "neo-soul",
      "jazz-fusion",
      "funk",
      "rnb",
      "lofi",
      "house"
    ],
    "genreTechniques": {
      "neo-soul": [
        "legato",
        "tenuto",
        "ghost",
        "accent"
      ],
      "funk": [
        "staccato",
        "accent",
        "ghost"
      ],
      "jazz-fusion": [
        "legato",
        "accent",
        "tenuto"
      ],
      "lofi": [
        "tenuto",
        "ghost",
        "legato"
      ]
    }
  }
};
