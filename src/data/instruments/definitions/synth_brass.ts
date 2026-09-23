import type { InstrumentDef } from '../types';

export const synth_brass: InstrumentDef = { id: 'synth-brass', name: 'Synth brass', family: 'electronic', program: 62, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
