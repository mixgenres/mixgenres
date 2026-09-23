import type { InstrumentDef } from '../types';

export const agogo: InstrumentDef = { id: 'agogo', name: 'Agogo bells', family: 'metal-and-wood', drum: { low: 67, mid: 67, high: 68 }, voicing: 'unpitched', note: 'Paired Brazilian agogo bell',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
