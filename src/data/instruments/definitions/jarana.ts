import type { InstrumentDef } from '../types';

export const jarana: InstrumentDef = {
  "id": "jarana",
  "name": "Jarana jarocha",
  "family": "plucked",
  "program": 24,
  "octave": 12,
  "voicing": "chord",
  "courses": 2,
  "bodyConstruction": "wood-box",
  "excitationType": "nail",
  "note": "Carved Mexican cedar guitar-like instrument providing the rhythmic motor of Son Jarocho",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "rasgueado",
      "palm-mute",
      "tenuto"
    ],
    "techniqueMethods": [
      "mánico jarocho rasgueado strum",
      "percussive finger slap",
      "syncopated zapateado lock",
      "thumb bass counterline"
    ],
    "playingStyles": [
      "son-jarocho",
      "mexican-folk",
      "afro-mexican",
      "cumbia"
    ],
    "genreTechniques": {
      "son-jarocho": [
        "rasgueado",
        "accent",
        "staccato",
        "palm-mute"
      ],
      "mexican-folk": [
        "accent",
        "rasgueado",
        "tenuto"
      ]
    }
  }
};
