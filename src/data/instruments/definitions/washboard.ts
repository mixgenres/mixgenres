import type { InstrumentDef } from '../types';

export const washboard: InstrumentDef = {
  id: 'washboard', name: 'Washboard', family: 'metal-and-wood', voicing: 'unpitched',
  note: 'corrugated metal scraper; dry brushed rhythmic subdivision',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
