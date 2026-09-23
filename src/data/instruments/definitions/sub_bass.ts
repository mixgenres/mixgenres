import type { InstrumentDef } from '../types';

export const sub_bass: InstrumentDef = { id: 'sub-bass', name: 'Sub bass', family: 'electronic', program: 38, voicing: 'bass', note: 'Felt more than heard',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
