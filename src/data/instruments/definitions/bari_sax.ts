import type { InstrumentDef } from '../types';

export const bari_sax: InstrumentDef = { id: 'bari-sax', name: 'Baritone sax', family: 'winds', program: 67, octave: -12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "fall", "doit"],
    techniqueMethods: ["tongue", "subtone", "growl"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["fall", "accent"]}
  }
};
