import type { InstrumentDef } from '../types';

export const bones: InstrumentDef = { id: 'bones', name: 'Bones', family: 'metal-and-wood', drum: { low: 76, mid: 77, high: 78 }, voicing: 'unpitched', note: 'Traditional rhythmic articulation',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
