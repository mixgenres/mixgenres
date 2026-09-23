import type { InstrumentDef } from '../types';

export const tambourine: InstrumentDef = { id: 'tambourine', name: 'Tambourine', family: 'metal-and-wood', drum: { low: 54, mid: 54, high: 54 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
