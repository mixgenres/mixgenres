import type { InstrumentDef } from '../types';

export const dizi: InstrumentDef = { id: 'dizi', name: 'Dizi', family: 'winds', program: 73, octave: 12, voicing: 'single', note: 'Bright Chinese transverse flute',
  techniques: {
    articulations: ["accent", "staccato", "legato", "vibrato", "portamento"],
    techniqueMethods: ["tongue", "flutter-tongue", "breath noise"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {"chinese-traditional": ["vibrato", "staccato"]}
  }
};
