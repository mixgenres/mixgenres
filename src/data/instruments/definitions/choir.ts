import type { InstrumentDef } from '../types';

export const choir: InstrumentDef = { id: 'choir', name: 'Choir', family: 'voice', program: 52, voicing: 'chord',
  techniques: {
    articulations: ["accent", "tenuto", "legato", "crescendo", "diminuendo"],
    techniqueMethods: ["section blend", "breath-synchronized onset"],
    playingStyles: ["cinematic"],
    genreTechniques: {"cinematic": ["legato", "crescendo"]}
  }
};
