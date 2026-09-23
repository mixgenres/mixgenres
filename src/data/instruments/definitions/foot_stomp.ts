import type { InstrumentDef } from '../types';

export const foot_stomp: InstrumentDef = {
  id: 'foot-stomp', name: 'Foot stomp', family: 'metal-and-wood', voicing: 'unpitched',
  note: 'low percussive body hit; irregular acoustic pulse',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
