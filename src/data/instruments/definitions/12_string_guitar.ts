import type { InstrumentDef } from '../types';

export const i_12_string_guitar: InstrumentDef = {
  "id": "12-string-guitar",
  "name": "12-string guitar",
  "family": "plucked",
  "program": 25,
  "voicing": "chord",
  "courses": 2,
  "bodyConstruction": "wood-box",
  "excitationType": "hard-pick",
  "note": "Double-course steel acoustic guitar with octave-doubled lower strings and unison trebles",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "palm-mute",
      "tenuto",
      "ghost",
      "tremolo"
    ],
    "techniqueMethods": [
      "flatpick downward strum across courses",
      "fingerstyle double-string rolling",
      "palm muting near saddle",
      "octave shimmer jangle"
    ],
    "playingStyles": [
      "folk",
      "rock",
      "jangle-pop",
      "country",
      "psychedelic"
    ],
    "genreTechniques": {
      "folk": [
        "accent",
        "legato",
        "palm-mute",
        "tenuto"
      ],
      "rock": [
        "accent",
        "staccato",
        "palm-mute"
      ],
      "jangle-pop": [
        "accent",
        "tenuto",
        "legato"
      ]
    }
  }
};
