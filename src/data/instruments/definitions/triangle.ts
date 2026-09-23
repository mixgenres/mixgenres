import type { InstrumentDef } from '../types';

export const triangle: InstrumentDef = { id: 'triangle', name: 'Triangle', family: 'metal-and-wood', drum: { low: 80, mid: 81, high: 81 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
