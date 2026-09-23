import type { InstrumentDef } from '../types';

export const turntable: InstrumentDef = { id: 'turntable', name: 'Turntable', family: 'electronic', program: 95, voicing: 'single', note: 'DJ scratch / sampled texture',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
