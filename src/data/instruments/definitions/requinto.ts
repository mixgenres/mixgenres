import type { InstrumentDef } from '../types';

export const requinto: InstrumentDef = { id: 'requinto', name: 'Requinto', family: 'plucked', program: 25, octave: 12, voicing: 'single', courses: 1, bodyConstruction: 'wood-box', excitationType: 'plectrum', note: 'High-register lead guitar color',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
