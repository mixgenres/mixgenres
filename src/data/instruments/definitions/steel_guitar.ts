import type { InstrumentDef } from '../types';

export const steel_guitar: InstrumentDef = { id: 'steel-guitar', name: 'Steel-string guitar', family: 'plucked', program: 25, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'hard-pick',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "harmonic"],
    techniqueMethods: ["flatpick", "pedal/slide phrasing", "sustain"],
    playingStyles: ["country"],
    genreTechniques: {"country": ["legato", "portamento", "vibrato"]}
  }
};
