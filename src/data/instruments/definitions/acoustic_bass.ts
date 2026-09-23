import type { InstrumentDef } from '../types';

export const acoustic_bass: InstrumentDef = {
  "id": "acoustic-bass",
  "name": "Acoustic bass guitar",
  "family": "plucked",
  "program": 32,
  "voicing": "bass",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "fingerpad",
  "note": "Hollow-body acoustic bass guitar with resonant woody body decay and round warmth",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "ghost",
      "palm-mute",
      "tenuto",
      "harmonic"
    ],
    "techniqueMethods": [
      "acoustic thumb pluck",
      "two-finger pad attack",
      "body damping",
      "soundboard acoustic resonance"
    ],
    "playingStyles": [
      "folk",
      "acoustic",
      "latin",
      "jazz",
      "cumbia"
    ],
    "genreTechniques": {
      "folk": [
        "accent",
        "legato",
        "tenuto"
      ],
      "acoustic": [
        "legato",
        "ghost",
        "palm-mute"
      ],
      "latin": [
        "staccato",
        "accent",
        "ghost"
      ]
    }
  }
};
