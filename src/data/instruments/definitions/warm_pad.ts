import type { InstrumentDef } from '../types';

export const warm_pad: InstrumentDef = { id: 'warm-pad', name: 'Warm pad', family: 'electronic', program: 89, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
