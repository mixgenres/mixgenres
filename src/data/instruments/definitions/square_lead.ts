import type { InstrumentDef } from '../types';

export const square_lead: InstrumentDef = { id: 'square-lead', name: 'Square lead', family: 'electronic', program: 80, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
