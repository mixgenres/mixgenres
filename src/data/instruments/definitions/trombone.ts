import type { InstrumentDef } from '../types';

export const trombone: InstrumentDef = { id: 'trombone', name: 'Trombone', family: 'brass', program: 57, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit", "portamento"],
    techniqueMethods: ["tongue", "lip slur", "slide position gliss"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["fall", "doit", "portamento"]}
  }
};
