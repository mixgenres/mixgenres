import type { InstrumentDef } from '../types';

export const shaker: InstrumentDef = { id: 'shaker', name: 'Shaker', family: 'metal-and-wood', drum: { low: 82, mid: 82, high: 82 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
