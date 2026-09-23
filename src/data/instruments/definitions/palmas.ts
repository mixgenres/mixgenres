import type { InstrumentDef } from '../types';

export const palmas: InstrumentDef = { id: 'palmas', name: 'Palmas', family: 'metal-and-wood', drum: { low: 39, mid: 39, high: 39 }, voicing: 'unpitched', note: 'Hand claps, sordas or fuertes',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
