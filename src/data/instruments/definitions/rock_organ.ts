import type { InstrumentDef } from '../types';

export const rock_organ: InstrumentDef = { id: 'rock-organ', name: 'Rock organ', family: 'bellows-and-keys', program: 18, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
