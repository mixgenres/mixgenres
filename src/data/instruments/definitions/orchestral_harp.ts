import type { InstrumentDef } from '../types';

export const orchestral_harp: InstrumentDef = { id: 'orchestral-harp', name: 'Orchestral harp', family: 'plucked', program: 46, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
