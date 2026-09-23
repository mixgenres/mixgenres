import type { InstrumentDef } from '../types';

export const oud: InstrumentDef = { id: 'oud', name: 'Oud', family: 'plucked', program: 105, voicing: 'single', courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum', note: 'Middle Eastern fretless lute with doubled courses',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "tremolo"],
    techniqueMethods: ["riša pick", "tremolo", "ornamental slide"],
    playingStyles: ["middle-eastern"],
    genreTechniques: {"middle-eastern": ["tremolo", "portamento", "vibrato"]}
  }
};
