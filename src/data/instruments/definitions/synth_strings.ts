import type { InstrumentDef } from '../types';

export const synth_strings: InstrumentDef = { id: 'synth-strings', name: 'Synth strings', family: 'electronic', program: 50, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
