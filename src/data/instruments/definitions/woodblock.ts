import type { InstrumentDef } from '../types';

export const woodblock: InstrumentDef = { id: 'woodblock', name: 'Wood block', family: 'metal-and-wood', drum: { low: 77, mid: 76, high: 76 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
