import type { InstrumentDef } from '../types';

export const tenor_sax: InstrumentDef = { id: 'tenor-sax', name: 'Tenor sax', family: 'winds', program: 66, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "fall", "doit"],
    techniqueMethods: ["tongue", "subtone", "growl", "bend"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["fall", "vibrato", "accent"]}
  }
};
