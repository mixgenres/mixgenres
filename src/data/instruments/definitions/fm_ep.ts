import type { InstrumentDef } from '../types';

export const fm_ep: InstrumentDef = { id: 'fm-ep', name: 'FM electric piano', family: 'bellows-and-keys', program: 5, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
