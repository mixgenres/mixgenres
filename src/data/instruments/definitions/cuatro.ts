import type { InstrumentDef } from '../types';

export const cuatro: InstrumentDef = { id: 'cuatro', name: 'Cuatro', family: 'plucked', program: 24, octave: 12, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail', note: 'Venezuelan/Puerto Rican folk strum',
  techniques: {
    articulations: ["accent", "staccato", "legato", "rasgueado"],
    techniqueMethods: ["rasgueo", "alternating strum"],
    playingStyles: ["folk"],
    genreTechniques: {"folk": ["rasgueado", "accent"]}
  }
};
