import type { InstrumentDef } from '../types';

export const harmonium: InstrumentDef = {
  id: 'harmonium', name: 'Harmonium', family: 'bellows-and-keys', voicing: 'unpitched',
  note: 'reed organ; breathy sustained chordal tone',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
