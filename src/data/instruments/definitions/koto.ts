import type { InstrumentDef } from '../types';

export const koto: InstrumentDef = { id: 'koto', name: 'Koto', family: 'plucked', program: 107, voicing: 'single', courses: 1, bodyConstruction: 'board', excitationType: 'fingerpad', note: 'Standard Koto timbre (GM Program 107)',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "bend"],
    techniqueMethods: ["plectrum/nail attack", "oshi-de bend", "sawari resonance"],
    playingStyles: ["japanese-traditional"],
    genreTechniques: {"japanese-traditional": ["accent", "bend"]}
  }
};
