import type { InstrumentDef } from '../types';

export const guqin: InstrumentDef = { id: 'guqin', name: 'Guqin', family: 'plucked', program: 24, voicing: 'single', courses: 1, bodyConstruction: 'board', excitationType: 'fingerpad', note: 'Plucked Chinese zither',
  techniques: {
    articulations: ["accent", "legato", "harmonic", "vibrato"],
    techniqueMethods: ["plucked harmonics", "slide/press vibrato", "open-string resonance"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {"chinese-traditional": ["legato", "harmonic"]}
  }
};
