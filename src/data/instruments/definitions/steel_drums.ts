import type { InstrumentDef } from '../types';

export const steel_drums: InstrumentDef = { id: 'steel-drums', name: 'Steel drums', family: 'metal-and-wood', program: 114, voicing: 'single',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
