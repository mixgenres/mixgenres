import type { InstrumentDef } from '../types';

export const orchestral_harp: InstrumentDef = {
  "id": "orchestral-harp",
  "name": "Orchestral harp",
  "family": "plucked",
  "program": 46,
  "voicing": "chord",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "fingerpad",
  "note": "Concert grand pedal harp with expansive resonant spruce soundboard and sweeping glissandi",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "tenuto",
      "harmonic",
      "tremolo",
      "crescendo",
      "diminuendo"
    ],
    "techniqueMethods": [
      "finger pad pluck (no pinky)",
      "pedal tuning chromatic action",
      "fluid sweeping glissando",
      "bisbigliando whispering tremolo",
      "étouffé palm damping"
    ],
    "playingStyles": [
      "orchestral",
      "cinematic",
      "classical",
      "impressionist",
      "folk"
    ],
    "genreTechniques": {
      "orchestral": [
        "legato",
        "tenuto",
        "harmonic",
        "accent",
        "crescendo"
      ],
      "cinematic": [
        "legato",
        "tenuto",
        "harmonic",
        "diminuendo"
      ],
      "classical": [
        "legato",
        "staccato",
        "tenuto"
      ]
    }
  }
};
