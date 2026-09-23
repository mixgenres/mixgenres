import type { InstrumentDef } from '../types';

export const organ: InstrumentDef = { id: 'organ', name: 'Tonewheel organ', family: 'bellows-and-keys', program: 16, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
