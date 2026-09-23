import type { InstrumentDef } from '../types';

export const celtic_harp: InstrumentDef = { id: 'celtic-harp', name: 'Celtic harp', family: 'plucked', program: 46, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad', note: 'Celtic harp',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
