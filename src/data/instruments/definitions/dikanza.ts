import type { InstrumentDef } from '../types';

export const dikanza: InstrumentDef = {
  id: 'dikanza', name: 'Dikanza', family: 'metal-and-wood', voicing: 'unpitched',
  note: 'notched scraper; dry interlocking rasp',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
