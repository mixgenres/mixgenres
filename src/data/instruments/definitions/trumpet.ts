import type { InstrumentDef } from '../types';

export const trumpet: InstrumentDef = { id: 'trumpet', name: 'Trumpet', family: 'brass', program: 56, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "sforzando", "fall", "doit", "vibrato"],
    techniqueMethods: ["tongue", "double-tongue", "lip bend", "mute"],
    playingStyles: ["jazz", "ska"],
    genreTechniques: {"jazz": ["fall", "doit", "vibrato"], "ska": ["staccato", "accent"]}
  }
};
