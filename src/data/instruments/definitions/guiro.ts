import type { InstrumentDef } from '../types';

export const guiro: InstrumentDef = { id: 'guiro', name: 'Guiro', family: 'metal-and-wood', drum: { low: 73, mid: 73, high: 74 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
