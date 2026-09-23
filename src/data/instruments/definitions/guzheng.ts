import type { InstrumentDef } from '../types';

export const guzheng: InstrumentDef = { id: 'guzheng', name: 'Guzheng', family: 'plucked', program: 107, voicing: 'single', courses: 1, bodyConstruction: 'board', excitationType: 'nail', note: 'Chinese long zither',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "bend"],
    techniqueMethods: ["right-hand pluck", "left-hand bend", "yaozhi tremolo"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {"chinese-traditional": ["tremolo", "bend"]}
  }
};
