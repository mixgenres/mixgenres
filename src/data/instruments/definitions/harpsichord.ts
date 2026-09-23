import type { InstrumentDef } from '../types';

export const harpsichord: InstrumentDef = { id: 'harpsichord', name: 'Harpsichord', family: 'bellows-and-keys', program: 6, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
