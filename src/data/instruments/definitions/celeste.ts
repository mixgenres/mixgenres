import type { InstrumentDef } from '../types';

export const celeste: InstrumentDef = { id: 'celeste', name: 'Celeste', family: 'metal-and-wood', program: 8, voicing: 'chord',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
