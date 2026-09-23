import type { InstrumentDef } from '../types';

export const dulcimer: InstrumentDef = { id: 'dulcimer', name: 'Dulcimer', family: 'metal-and-wood', program: 15, voicing: 'single',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
