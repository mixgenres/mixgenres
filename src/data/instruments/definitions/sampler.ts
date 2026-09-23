import type { InstrumentDef } from '../types';

export const sampler: InstrumentDef = {
  id: 'sampler', name: 'Sampler', family: 'electronic', voicing: 'single',
  note: 'sample playback; transient-preserving one-shots and looped phrases',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
