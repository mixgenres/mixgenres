import type { InstrumentDef } from '../types';

export const drone: InstrumentDef = {
  id: 'drone', name: 'Drone texture', family: 'electronic', voicing: 'unpitched',
  note: 'sustained harmonic bed; slow filter movement',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
