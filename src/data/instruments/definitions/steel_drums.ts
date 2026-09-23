import type { InstrumentDef } from '../types';

export const steel_drums: InstrumentDef = {
  id: 'steel_drums', name: 'Steel pan', family: 'metal-and-wood', voicing: 'single',
  note: 'tuned steel pan; struck convex notes with bright partials',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
