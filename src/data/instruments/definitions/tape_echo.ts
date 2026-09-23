import type { InstrumentDef } from '../types';

export const tape_echo: InstrumentDef = {
  id: 'tape-echo', name: 'Tape echo', family: 'electronic', voicing: 'unpitched',
  drum: { low: 36, mid: 38, high: 42 },
  note: 'magnetic tape delay; softened repeats with wow/flutter and feedback',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
