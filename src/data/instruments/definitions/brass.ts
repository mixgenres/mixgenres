import type { InstrumentDef } from '../types';

export const brass: InstrumentDef = { id: 'brass', name: 'Brass section', family: 'brass', program: 61, voicing: 'chord', note: 'Generic brass-section fallback',
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit"],
    techniqueMethods: ["tongued attack", "legato slur", "lip bend", "mute/stopping"],
    playingStyles: ["jazz", "soul", "pop"]
  }
};
