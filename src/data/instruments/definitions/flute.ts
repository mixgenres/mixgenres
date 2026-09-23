import type { InstrumentDef } from '../types';

export const flute: InstrumentDef = { id: 'flute', name: 'Flute', family: 'winds', program: 73, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato"],
    techniqueMethods: ["tongue", "breathy onset", "flutter-like pulse"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["legato", "accent"]}
  }
};
