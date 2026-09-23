import type { InstrumentDef } from '../types';

export const muted_trumpet: InstrumentDef = { id: 'muted-trumpet', name: 'Muted trumpet', family: 'brass', program: 59, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "fall", "doit"],
    techniqueMethods: ["cup/harmon mute color", "tongue", "lip bend"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["fall", "doit"]}
  }
};
