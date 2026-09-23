import type { InstrumentDef } from '../types';

export const tubular_bells: InstrumentDef = { id: 'tubular-bells', name: 'Tubular bells', family: 'metal-and-wood', program: 14, voicing: 'single',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
