import type { InstrumentDef } from '../types';

export const bass_lead: InstrumentDef = {
  "id": "bass-lead",
  "name": "Bass lead synth",
  "family": "electronic",
  "program": 87,
  "voicing": "single",
  "note": "Aggressive synthesized bass lead with resonant lowpass filter envelope and distortion drive",
  "techniques": {
    "articulations": [
      "accent",
      "staccato",
      "legato",
      "slide",
      "tenuto",
      "bend"
    ],
    "techniqueMethods": [
      "resonant filter envelope snap",
      "glide portamento",
      "monophonic voice priority",
      "drive saturation clipping"
    ],
    "playingStyles": [
      "electronic",
      "techno",
      "synthwave",
      "electro",
      "industrial"
    ],
    "genreTechniques": {
      "electronic": [
        "accent",
        "staccato",
        "slide"
      ],
      "techno": [
        "staccato",
        "accent",
        "tenuto"
      ],
      "synthwave": [
        "legato",
        "bend",
        "accent"
      ]
    }
  }
};
