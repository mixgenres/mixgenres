import type { InstrumentDef } from '../types';

export const gongs: InstrumentDef = { id: 'gongs', name: 'Gong / small gong', family: 'metal-and-wood', drum: { low: 59, mid: 59, high: 59 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
