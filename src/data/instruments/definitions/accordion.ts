import type { InstrumentDef } from '../types';

export const accordion: InstrumentDef = { id: 'accordion', name: 'Accordion', family: 'bellows-and-keys', program: 21, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "legato", "marcato"],
    techniqueMethods: ["bellows accent", "bellow swell", "detached chord"],
    playingStyles: ["cumbia", "folk"],
    genreTechniques: {"cumbia": ["staccato", "accent"], "folk": ["legato", "accent"]}
  }
};
