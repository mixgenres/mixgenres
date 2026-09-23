import type { InstrumentDef } from '../types';

export const pick_bass: InstrumentDef = { id: 'pick-bass', name: 'Pick bass', family: 'plucked', program: 34, voicing: 'bass',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
