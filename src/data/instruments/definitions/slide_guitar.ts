import type { InstrumentDef } from '../types';

export const slide_guitar: InstrumentDef = {
  id: 'slide-guitar', name: 'Slide guitar', family: 'plucked', voicing: 'single',
  courses: 1, bodyConstruction: 'wood-box', excitationType: 'hard-pick',
  note: 'fretted string guitar played with slide; continuous portamento and vocal bends',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
