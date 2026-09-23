import type { InstrumentDef } from '../types';

export const kalimba: InstrumentDef = { id: 'kalimba', name: 'Kalimba', family: 'plucked', program: 108, voicing: 'single', courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad', note: 'African thumb-piano color',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
