import type { InstrumentDef } from '../types';

export const cavaquinho: InstrumentDef = {
  "id": "cavaquinho",
  "name": "Cavaquinho",
  "family": "plucked",
  "program": 24,
  "octave": 12,
  "voicing": "chord",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "plectrum",
  "note": "Four-string Brazilian steel-strung soprano guitar driving samba and choro with sparkling syncopated strums",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "palm-mute",
      "tenuto",
      "tremolo"
    ],
    "techniqueMethods": [
      "rapid wrist palhetada strum",
      "syncopated samba batida",
      "percussive palm mute",
      "high-register solo picking"
    ],
    "playingStyles": [
      "samba",
      "choro",
      "pagode",
      "samba-enredo"
    ],
    "genreTechniques": {
      "samba": [
        "accent",
        "staccato",
        "palm-mute"
      ],
      "choro": [
        "legato",
        "staccato",
        "accent",
        "tremolo"
      ],
      "pagode": [
        "accent",
        "staccato",
        "palm-mute"
      ]
    }
  }
};
