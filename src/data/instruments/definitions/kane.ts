import type { InstrumentDef } from '../types';

export const kane: InstrumentDef = { id: 'kane', name: 'Kane bell', family: 'metal-and-wood', drum: { low: 80, mid: 81, high: 81 }, voicing: 'unpitched', note: 'Japanese temple/performance bell color',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
