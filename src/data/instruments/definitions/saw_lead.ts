import type { InstrumentDef } from '../types';

export const saw_lead: InstrumentDef = { id: 'saw-lead', name: 'Saw lead', family: 'electronic', program: 81, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
