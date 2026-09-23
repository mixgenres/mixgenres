import type { InstrumentDef } from '../types';

export const sitar: InstrumentDef = { id: 'sitar', name: 'Sitar', family: 'plucked', program: 104, voicing: 'single', courses: 1, bodyConstruction: 'gourd', excitationType: 'plectrum', sympatheticStrings: true, note: 'Standard Sitar timbre (GM Program 104)',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "bend"],
    techniqueMethods: ["mizrab stroke", "meend bend", "sympathetic resonance"],
    playingStyles: ["indian-classical"],
    genreTechniques: {"indian-classical": ["bend", "tremolo"]}
  }
};
