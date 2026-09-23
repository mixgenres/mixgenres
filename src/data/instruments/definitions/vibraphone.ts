import type { InstrumentDef } from '../types';

export const vibraphone: InstrumentDef = { id: 'vibraphone', name: 'Vibraphone', family: 'metal-and-wood', program: 11, voicing: 'chord', note: 'Useful for jazz, city pop and soft color',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
