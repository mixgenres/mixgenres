import type { InstrumentDef } from '../types';

export const fretless_bass: InstrumentDef = { id: 'fretless-bass', name: 'Fretless bass', family: 'plucked', program: 35, voicing: 'bass',
  techniques: {
    articulations: ["accent", "legato", "portamento", "vibrato", "ghost"],
    techniqueMethods: ["fingerstyle", "slide", "microtonal vibrato"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["legato", "portamento"]}
  }
};
