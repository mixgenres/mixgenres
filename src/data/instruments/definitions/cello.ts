import type { InstrumentDef } from '../types';

export const cello: InstrumentDef = {
  "id": "cello",
  "name": "Cello",
  "family": "bowed",
  "program": 42,
  "octave": -12,
  "voicing": "single",
  "note": "Acoustic violoncello with resonant spruce body and warm, expressive, lyrical tenor/bass voice",
  "techniques": {
    "articulations": [
      "arco",
      "pizzicato",
      "legato",
      "staccato",
      "tenuto",
      "tremolo",
      "arrastre",
      "portato",
      "vibrato",
      "accent"
    ],
    "techniqueMethods": [
      "smooth bow legato phrasing",
      "finger pizzicato pluck",
      "tango arrastre bow drag",
      "sul tasto flautando",
      "sul ponticello metallic rasp"
    ],
    "playingStyles": [
      "classical",
      "tango",
      "folk",
      "cinematic",
      "pop"
    ],
    "genreTechniques": {
      "classical": [
        "arco",
        "legato",
        "tenuto",
        "pizzicato",
        "portato"
      ],
      "tango": [
        "arrastre",
        "staccato",
        "accent",
        "arco"
      ],
      "cinematic": [
        "legato",
        "tenuto",
        "tremolo",
        "vibrato"
      ],
      "folk": [
        "arco",
        "pizzicato",
        "accent"
      ]
    }
  }
};
