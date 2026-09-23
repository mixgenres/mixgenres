import type { InstrumentDef } from '../types';

export const hand_percussion: InstrumentDef = {
  id: 'hand-percussion', name: 'Hand percussion', family: 'hand-drums', voicing: 'unpitched',
  note: 'generic hand-played auxiliary percussion; dry interlocking accents',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
