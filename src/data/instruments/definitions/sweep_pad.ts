import type { InstrumentDef } from '../types';

export const sweep_pad: InstrumentDef = { id: 'sweep-pad', name: 'Sweep pad', family: 'electronic', program: 95, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
