import type { InstrumentDef } from '../types';

export const kalimba: InstrumentDef = {
  "id": "kalimba",
  "name": "Kalimba / Mbira",
  "family": "plucked",
  "program": 108,
  "voicing": "single",
  "courses": 1,
  "bodyConstruction": "wood-box",
  "excitationType": "fingerpad",
  "note": "African thumb piano with staggered metal tines over wooden soundbox producing gentle bell resonance",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "tenuto",
      "ghost",
      "legato"
    ],
    "techniqueMethods": [
      "two-thumb downward plucking",
      "index finger upward flick",
      "resonant soundhole vibrato modulation",
      "buzzing bottle-cap timbre"
    ],
    "playingStyles": [
      "african-folk",
      "mbira-dza-vadzimu",
      "ambient",
      "afrobeats",
      "acoustic"
    ],
    "genreTechniques": {
      "african-folk": [
        "accent",
        "staccato",
        "ghost",
        "legato"
      ],
      "ambient": [
        "tenuto",
        "legato",
        "ghost"
      ],
      "afrobeats": [
        "accent",
        "staccato",
        "ghost"
      ]
    }
  }
};
