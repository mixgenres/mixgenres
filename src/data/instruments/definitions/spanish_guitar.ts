import type { InstrumentDef } from '../types';

export const spanish_guitar: InstrumentDef = { id: 'spanish-guitar', name: 'Spanish Guitar', family: 'plucked', program: 24, bank: 1, voicing: 'chord', courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail', note: 'Sampled nylon-string guitar for flamenco and tango',
  techniques: {
    articulations: ["accent", "staccato", "legato", "rasgueado", "alzapua", "tremolo", "arrastre", "palm-mute"],
    techniqueMethods: ["picado", "ligado", "pulgar-apoyando", "rasgueado", "alzapúa", "golpe"],
    playingStyles: ["flamenco", "tango"],
    genreTechniques: {"flamenco": ["rasgueado", "alzapua", "tremolo", "accent"], "tango": ["rasgueado", "staccato"]}
  }
};
