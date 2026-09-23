import type { InstrumentDef } from '../types';

export const guitarron: InstrumentDef = { id: 'guitarron', name: 'Guitarron', family: 'plucked', program: 32, octave: -12, voicing: 'bass', courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad', note: 'Large folk guitar-family bass',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
