import type { InstrumentDef } from '../types';

export const acid_303: InstrumentDef = { id: 'acid-303', name: 'Acid 303', family: 'electronic', program: 87, octave: 12, voicing: 'single', note: 'Resonant bass/lead synth',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "bend"],
    techniqueMethods: ["accented slide", "resonance automation", "accented decay"],
    playingStyles: ["house", "techno"],
    genreTechniques: {"house": ["staccato", "portamento"], "techno": ["staccato", "accent"]}
  }
};
