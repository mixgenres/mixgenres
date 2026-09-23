import type { InstrumentDef } from '../types';

export const zapateado: InstrumentDef = { id: 'zapateado', name: 'Zapateado footwork', family: 'metal-and-wood', drum: { low: 39, mid: 76, high: 77 }, voicing: 'unpitched', note: 'Footwork percussion',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
