import type { InstrumentDef } from '../types';

export const castanets: InstrumentDef = { id: 'castanets', name: 'Castanets', family: 'metal-and-wood', drum: { low: 76, mid: 77, high: 77 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
