import type { InstrumentDef } from '../types';

export const dub_echo: InstrumentDef = { id: 'dub-echo', name: 'Dub echo', family: 'electronic', program: 95, voicing: 'single', note: 'Echo and reverb tail',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
