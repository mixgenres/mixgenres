import type { InstrumentDef } from '../types';

export const guitar: InstrumentDef = { id: 'guitar', name: 'Acoustic guitar', family: 'plucked', program: 24, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute", "rasgueado", "tremolo", "harmonic", "fingerstyle", "flatpick"],
    techniqueMethods: ["fingerstyle", "flatpick", "strum", "muted strum"],
    playingStyles: ["folk", "country"],
    genreTechniques: {"folk": ["fingerstyle", "accent"], "country": ["flatpick", "staccato"]}
  }
};
