import type { InstrumentDef } from '../types';

export const polysynth: InstrumentDef = { id: 'polysynth', name: 'Polysynth', family: 'electronic', program: 90, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
