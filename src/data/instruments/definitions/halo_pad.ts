import type { InstrumentDef } from '../types';

export const halo_pad: InstrumentDef = { id: 'halo-pad', name: 'Halo pad', family: 'electronic', program: 94, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
