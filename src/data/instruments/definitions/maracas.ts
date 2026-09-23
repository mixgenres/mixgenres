import type { InstrumentDef } from '../types';

export const maracas: InstrumentDef = { id: 'maracas', name: 'Maracas', family: 'metal-and-wood', drum: { low: 70, mid: 70, high: 70 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
