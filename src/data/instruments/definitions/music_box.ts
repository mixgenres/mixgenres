import type { InstrumentDef } from '../types';

export const music_box: InstrumentDef = { id: 'music-box', name: 'Music box', family: 'metal-and-wood', program: 10, voicing: 'single',
  techniques: {
    articulations: ["accent", "ghost", "roll", "staccato"],
    techniqueMethods: ["open hit", "damped hit", "roll", "scrape/shake"],
    playingStyles: ["folk", "world", "dance"]
  }
};
