import type { InstrumentDef } from '../types';

export const vihuela: InstrumentDef = { id: 'vihuela', name: 'Vihuela', family: 'plucked', program: 24, octave: 12, voicing: 'chord', note: 'Mexican son guitar-family',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
