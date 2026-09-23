import type { InstrumentDef } from '../types';

export const shakuhachi: InstrumentDef = { id: 'shakuhachi', name: 'Shakuhachi', family: 'winds', program: 77, octave: 12, voicing: 'single', note: 'Japanese end-blown flute',
  techniques: {
    articulations: ["accent", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["meri/kari pitch bend", "muraiki breath", "yuri vibrato"],
    playingStyles: ["japanese-traditional"],
    genreTechniques: {"japanese-traditional": ["portamento", "vibrato"]}
  }
};
