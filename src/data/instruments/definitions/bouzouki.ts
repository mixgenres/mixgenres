import type { InstrumentDef } from '../types';

export const bouzouki: InstrumentDef = { id: 'bouzouki', name: 'Bouzouki', family: 'plucked', program: 25, octave: 12, voicing: 'chord', courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum', note: 'Greek long-necked lute with paired courses',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo"],
    techniqueMethods: ["plectrum tremolo", "paired-course attack"],
    playingStyles: ["greek"],
    genreTechniques: {"greek": ["tremolo", "accent"]}
  }
};
