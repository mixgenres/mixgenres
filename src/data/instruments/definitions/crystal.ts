import type { InstrumentDef } from '../types';

export const crystal: InstrumentDef = { id: 'crystal', name: 'Crystal', family: 'electronic', program: 98, voicing: 'single', note: 'Bright bell-like color',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
