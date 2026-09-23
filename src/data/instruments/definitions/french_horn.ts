import type { InstrumentDef } from '../types';

export const french_horn: InstrumentDef = { id: 'french-horn', name: 'French horns', family: 'brass', program: 60, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit"],
    techniqueMethods: ["tongued attack", "legato slur", "lip bend", "mute/stopping"],
    playingStyles: ["jazz", "soul", "pop"]
  }
};
