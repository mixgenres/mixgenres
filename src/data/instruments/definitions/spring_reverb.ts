import type { InstrumentDef } from '../types';

export const spring_reverb: InstrumentDef = {
  id: 'spring-reverb', name: 'Spring reverb', family: 'electronic', voicing: 'unpitched',
  note: 'spring tank reverb; boingy metallic decay',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
