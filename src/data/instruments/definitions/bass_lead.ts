import type { InstrumentDef } from '../types';

export const bass_lead: InstrumentDef = { id: 'bass-lead', name: 'Bass & lead', family: 'electronic', program: 87, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
