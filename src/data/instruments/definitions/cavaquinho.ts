import type { InstrumentDef } from '../types';

export const cavaquinho: InstrumentDef = { id: 'cavaquinho', name: 'Cavaquinho', family: 'plucked', program: 24, octave: 12, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'plectrum',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
