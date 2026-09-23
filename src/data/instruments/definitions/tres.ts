import type { InstrumentDef } from '../types';

export const tres: InstrumentDef = { id: 'tres', name: 'Tres', family: 'plucked', program: 25, octave: 12, voicing: 'chord', courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum', note: 'Doubled courses, bright',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute", "tremolo"],
    techniqueMethods: ["tres guajeo", "alternating strum", "paired-course attack"],
    playingStyles: ["son", "salsa"],
    genreTechniques: {"son": ["staccato", "accent"], "salsa": ["staccato", "accent"]}
  }
};
