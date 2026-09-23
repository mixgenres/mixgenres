import type { InstrumentDef } from '../types';

export const dulcimer: InstrumentDef = {
  "id": "dulcimer",
  "name": "Hammered dulcimer",
  "family": "plucked",
  "program": 15,
  "voicing": "single",
  "courses": 2,
  "bodyConstruction": "board",
  "excitationType": "hammer",
  "note": "Trapezoidal multi-string zither struck with lightweight wooden hammers producing bright crystalline cascading tones",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "tenuto",
      "tremolo",
      "roll",
      "legato"
    ],
    "techniqueMethods": [
      "double-hammer alternating bounce",
      "rapid two-hand roll",
      "damper damping with palms",
      "bridge-side strike harmonics"
    ],
    "playingStyles": [
      "folk",
      "celtic",
      "appalachian",
      "bluegrass",
      "middle-eastern"
    ],
    "genreTechniques": {
      "folk": [
        "accent",
        "staccato",
        "roll",
        "tenuto"
      ],
      "celtic": [
        "roll",
        "accent",
        "staccato",
        "legato"
      ],
      "appalachian": [
        "accent",
        "staccato",
        "tremolo"
      ]
    }
  }
};
