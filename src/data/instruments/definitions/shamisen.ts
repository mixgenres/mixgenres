import type { InstrumentDef } from '../types';

export const shamisen: InstrumentDef = { id: 'shamisen', name: 'Shamisen', family: 'plucked', program: 106, voicing: 'single', courses: 1, bodyConstruction: 'skin-faced', excitationType: 'plectrum', note: 'Japanese three-string color',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo"],
    techniqueMethods: ["bachi attack", "sukui upstroke", "sawari buzz"],
    playingStyles: ["japanese-traditional"],
    genreTechniques: {"japanese-traditional": ["accent", "staccato"]}
  }
};
