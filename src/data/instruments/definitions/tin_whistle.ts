import type { InstrumentDef } from '../types';

export const tin_whistle: InstrumentDef = { id: 'tin-whistle', name: 'Tin whistle', family: 'winds', program: 78, octave: 12, voicing: 'single', note: 'Whistle register with Celtic ornament rules',
  techniques: {
    articulations: ["accent", "staccato", "legato", "roll", "grace"],
    techniqueMethods: ["tongue", "cut", "roll", "cran"],
    playingStyles: ["celtic"],
    genreTechniques: {"celtic": ["roll", "grace", "staccato"]}
  }
};
