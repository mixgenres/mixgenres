import type { InstrumentDef } from '../types';

export const repinique: InstrumentDef = {
  id: 'repinique', name: 'Repinique', family: 'hand-drums', voicing: 'unpitched',
  note: 'high-pitched Brazilian samba drum; open calls and sharp rim attacks',
  techniques: {
    articulations: ['accent', 'staccato', 'ghost', 'roll'],
    techniqueMethods: ['style-specific attack', 'velocity shaping', 'muting/damping'],
    playingStyles: ['genre-native performance'],
    genreTechniques: {}
  }
};
