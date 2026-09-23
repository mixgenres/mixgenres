import type { InstrumentDef } from '../types';

export const glockenspiel: InstrumentDef = { id: 'glockenspiel', name: 'Glockenspiel', family: 'metal-and-wood', program: 9, voicing: 'single',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
