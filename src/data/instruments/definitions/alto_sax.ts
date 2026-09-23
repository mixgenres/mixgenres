import type { InstrumentDef } from '../types';

export const alto_sax: InstrumentDef = { id: 'alto-sax', name: 'Alto sax', family: 'winds', program: 65, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "fall", "doit"],
    techniqueMethods: ["tongue", "subtone", "growl", "bend"],
    playingStyles: ["jazz", "ska"],
    genreTechniques: {"jazz": ["fall", "vibrato", "accent"], "ska": ["staccato", "accent"]}
  }
};
