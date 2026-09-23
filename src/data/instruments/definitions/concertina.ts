import type { InstrumentDef } from '../types';

export const concertina: InstrumentDef = { id: 'concertina', name: 'Concertina', family: 'bellows-and-keys', program: 21, voicing: 'chord', note: 'Free-reed box; primary accordion timbre',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto"],
    techniqueMethods: ["velocity-shaped attack", "fingered chord voicing", "register coupling"],
    playingStyles: ["folk", "pop", "world"]
  }
};
