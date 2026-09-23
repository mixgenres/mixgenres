import type { InstrumentDef } from '../types';

export const cowbell: InstrumentDef = { id: 'cowbell', name: 'Cowbell', family: 'metal-and-wood', drum: { low: 56, mid: 56, high: 56 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
