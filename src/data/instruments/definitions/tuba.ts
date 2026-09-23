import type { InstrumentDef } from '../types';

export const tuba: InstrumentDef = { id: 'tuba', name: 'Tuba', family: 'brass', program: 58, octave: -12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit"],
    techniqueMethods: ["tongued attack", "legato slur", "lip bend", "mute/stopping"],
    playingStyles: ["jazz", "soul", "pop"]
  }
};
