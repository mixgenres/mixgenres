import type { InstrumentDef } from '../types';

export const harp: InstrumentDef = { id: 'harp', name: 'Harp', family: 'plucked', program: 46, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
