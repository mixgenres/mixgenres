import type { InstrumentDef } from '../types';

export const xylophone: InstrumentDef = { id: 'xylophone', name: 'Xylophone', family: 'metal-and-wood', program: 13, voicing: 'single',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
