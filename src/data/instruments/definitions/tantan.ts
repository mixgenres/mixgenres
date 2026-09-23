import type { InstrumentDef } from '../types';

export const tantan: InstrumentDef = {
  id: 'tantan', name: 'Tantan', family: 'hand-drums', voicing: 'unpitched',
  drum: { low: 41, mid: 43, high: 45 },
  note: 'Brazilian pagode bass drum; low open tone and damped syncopated strokes',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
