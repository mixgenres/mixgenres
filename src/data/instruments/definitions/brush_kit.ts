import type { InstrumentDef } from '../types';

export const brush_kit: InstrumentDef = {
  "id": "brush-kit",
  "name": "Jazz Brush Kit",
  "family": "kit",
  "kit": true,
  "voicing": "unpitched",
  "drum": {
    "low": 36,
    "mid": 38,
    "high": 42
  },
  "note": "Vintage acoustic drum set with coated white drum heads played with retractable wire brushes, producing swirling circular snare friction, feathered bass drum, and delicate cymbal whispers",
  "physicalModel": {
    "model": "membrane",
    "parameters": {
      "membraneTension": 0.58,
      "membraneDamping": 0.45,
      "transientSharpness": 0.45,
      "noiseAmount": 0.48
    },
    "signalChain": [
      "preamp",
      "eq",
      "compressor",
      "reverb"
    ],
    "synthesisNotes": [
      "Wire brush bristles scraping across textured coated head create continuous whispering friction.",
      "Left hand sweeps continuous circles for sustained rhythm bed while right hand taps syncopated accents.",
      "Feathered bass drum provides felt mallet pulse felt more than heard."
    ]
  },
  "techniques": {
    "articulations": [
      "ghost",
      "accent",
      "staccato",
      "tenuto",
      "roll"
    ],
    "techniqueMethods": [
      "clockwise continuous circular wire sweeping on coated snare",
      "right-hand brush slap and pop accents on 2 and 4",
      "feathered bass drum quarter-note pulse",
      "delicate wire brush tap on sizzle ride cymbal",
      "brush rim tap and rim scrape"
    ],
    "playingStyles": [
      "jazz",
      "ballad",
      "swing",
      "bossa-nova",
      "acoustic-folk",
      "blues"
    ],
    "genreTechniques": {
      "jazz": [
        "ghost",
        "accent",
        "tenuto"
      ],
      "ballad": [
        "tenuto",
        "ghost"
      ],
      "bossa-nova": [
        "ghost",
        "accent",
        "staccato"
      ]
    }
  }
};
