import type { InstrumentDef } from '../types';

export const marimba: InstrumentDef = { id: 'marimba', name: 'Marimba', family: 'metal-and-wood', program: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
