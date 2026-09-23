import type { InstrumentDef } from '../types';

export const soprano_sax: InstrumentDef = { id: 'soprano-sax', name: 'Soprano sax', family: 'winds', program: 64, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "fall", "doit"],
    techniqueMethods: ["tongue", "subtone", "growl", "bend"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["fall", "vibrato", "accent"]}
  }
};
