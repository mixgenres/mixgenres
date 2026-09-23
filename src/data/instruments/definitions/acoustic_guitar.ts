import type { InstrumentDef } from '../types';

export const acoustic_guitar: InstrumentDef = { id: 'acoustic-guitar', name: 'Steel-string guitar', family: 'plucked', program: 25, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute", "harmonic"],
    techniqueMethods: ["fingerstyle", "flatpick", "strum", "bass-run"],
    playingStyles: ["country", "folk"],
    genreTechniques: {"country": ["staccato", "accent"], "folk": ["fingerstyle", "legato"]}
  }
};
