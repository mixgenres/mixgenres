import type { InstrumentDef } from '../types';

export const horn_section: InstrumentDef = { id: 'horn-section', name: 'Horn section', family: 'brass', program: 61, voicing: 'chord', note: 'Stabs and block hits',
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit"],
    techniqueMethods: ["tongued attack", "legato slur", "lip bend", "mute/stopping"],
    playingStyles: ["jazz", "soul", "pop"]
  }
};
