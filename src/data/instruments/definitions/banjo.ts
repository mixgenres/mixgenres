import type { InstrumentDef } from '../types';

export const banjo: InstrumentDef = { id: 'banjo', name: 'Banjo', family: 'plucked', program: 105, octave: 12, voicing: 'chord', courses: 1, bodyConstruction: 'skin-faced', excitationType: 'hard-pick', note: 'Bluegrass / country drive',
  techniques: {
    articulations: ["accent", "staccato", "roll", "ghost"],
    techniqueMethods: ["three-finger roll", "clawhammer", "frailing"],
    playingStyles: ["bluegrass"],
    genreTechniques: {"bluegrass": ["roll", "accent"]}
  }
};
