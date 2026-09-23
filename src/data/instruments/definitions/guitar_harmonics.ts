import type { InstrumentDef } from '../types';

export const guitar_harmonics: InstrumentDef = { id: 'guitar-harmonics', name: 'Guitar harmonics', family: 'plucked', program: 31, voicing: 'single', courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
