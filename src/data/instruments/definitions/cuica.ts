import type { InstrumentDef } from '../types';

export const cuica: InstrumentDef = {
  id: 'cuica', name: 'Cuíca', family: 'hand-drums', voicing: 'unpitched',
  note: 'friction drum; high-pitched squeal and short resonant pops',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
