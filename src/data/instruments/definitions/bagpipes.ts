import type { InstrumentDef } from '../types';

export const bagpipes: InstrumentDef = { id: 'bagpipes', name: 'Highland bagpipes', family: 'winds', program: 109, voicing: 'single', note: 'Highland pipes',
  techniques: {
    articulations: ["accent", "legato", "grace", "staccato"],
    techniqueMethods: ["doubling", "grace-note ornament", "continuous drone"],
    playingStyles: ["celtic"],
    genreTechniques: {"celtic": ["grace", "legato"]}
  }
};
