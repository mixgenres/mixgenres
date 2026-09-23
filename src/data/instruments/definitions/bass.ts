import type { InstrumentDef } from '../types';

export const bass: InstrumentDef = {
  "id": "bass",
  "name": "Electric bass",
  "family": "plucked",
  "program": 33,
  "voicing": "bass",
  "courses": 1,
  "bodyConstruction": "solid-electric",
  "excitationType": "fingerpad",
  "note": "Solid-body electric bass with warm magnetic pickup tone and supportive fundamental low-end",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "ghost",
      "palm-mute",
      "slide",
      "vibrato",
      "tenuto"
    ],
    "techniqueMethods": [
      "two-finger alternate pluck",
      "palm muting",
      "fretboard slide",
      "thumb rest",
      "ghost note percussive damping"
    ],
    "playingStyles": [
      "rock",
      "pop",
      "funk",
      "reggae",
      "cumbia",
      "afrobeats",
      "r&b"
    ],
    "genreTechniques": {
      "rock": [
        "accent",
        "staccato",
        "palm-mute",
        "legato"
      ],
      "funk": [
        "staccato",
        "ghost",
        "accent",
        "slide"
      ],
      "reggae": [
        "tenuto",
        "legato",
        "palm-mute",
        "accent"
      ],
      "cumbia": [
        "staccato",
        "accent",
        "ghost"
      ],
      "afrobeats": [
        "staccato",
        "accent",
        "legato"
      ]
    }
  }
};
