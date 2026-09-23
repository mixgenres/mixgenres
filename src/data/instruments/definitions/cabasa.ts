import type { InstrumentDef } from '../types';

export const cabasa: InstrumentDef = { id: 'cabasa', name: 'Cabasa', family: 'metal-and-wood', drum: { low: 69, mid: 69, high: 69 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
