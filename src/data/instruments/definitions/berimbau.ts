import type { InstrumentDef } from '../types';

export const berimbau: InstrumentDef = { id: 'berimbau', name: 'Berimbau', family: 'plucked', program: 105, octave: -12, voicing: 'single', courses: 1, bodyConstruction: 'gourd', excitationType: 'hard-pick', note: 'Afro-Brazilian single-string musical bow with gourd resonator',
  techniques: {
    articulations: ["accent", "staccato", "ghost"],
    techniqueMethods: ["baqueta strike", "open/closed gourd", "caxixi shake"],
    playingStyles: ["capoeira"],
    genreTechniques: {"capoeira": ["accent", "ghost"]}
  }
};
