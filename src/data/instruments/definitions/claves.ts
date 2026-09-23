import type { InstrumentDef } from '../types';

export const claves: InstrumentDef = { id: 'claves', name: 'Claves', family: 'metal-and-wood', drum: { low: 75, mid: 75, high: 75 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
