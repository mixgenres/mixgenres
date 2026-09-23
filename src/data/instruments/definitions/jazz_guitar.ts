import type { InstrumentDef } from '../types';

export const jazz_guitar: InstrumentDef = { id: 'jazz-guitar', name: 'Jazz guitar', family: 'plucked', program: 26, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad',
  techniques: {
    articulations: ["accent", "staccato", "legato", "ghost", "harmonic"],
    techniqueMethods: ["fingerstyle comping", "pick comping", "drop voicing"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["legato", "ghost", "accent"]}
  }
};
