import type { InstrumentDef } from '../types';

export const charango: InstrumentDef = { id: 'charango', name: 'Charango', family: 'plucked', program: 24, octave: 12, voicing: 'chord', courses: 2, bodyConstruction: 'wood-box', excitationType: 'nail',
  techniques: {
    articulations: ["accent", "staccato", "legato", "rasgueado", "tremolo"],
    techniqueMethods: ["rasgueo", "paired-course tremolo"],
    playingStyles: ["andean"],
    genreTechniques: {"andean": ["rasgueado", "tremolo"]}
  }
};
