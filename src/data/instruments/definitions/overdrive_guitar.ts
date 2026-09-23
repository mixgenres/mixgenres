import type { InstrumentDef } from '../types';

export const overdrive_guitar: InstrumentDef = { id: 'overdrive-guitar', name: 'Overdriven guitar', family: 'plucked', program: 29, voicing: 'chord', courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
