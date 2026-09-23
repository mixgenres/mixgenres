import type { InstrumentDef } from '../types';

export const ride: InstrumentDef = { id: 'ride', name: 'Ride cymbal', family: 'metal-and-wood', drum: { low: 51, mid: 51, high: 53 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
