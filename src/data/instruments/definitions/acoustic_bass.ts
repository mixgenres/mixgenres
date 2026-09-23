import type { InstrumentDef } from '../types';

export const acoustic_bass: InstrumentDef = { id: 'acoustic-bass', name: 'Acoustic bass', family: 'plucked', program: 32, voicing: 'bass',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
