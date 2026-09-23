import type { InstrumentDef } from '../types';

export const pipa: InstrumentDef = { id: 'pipa', name: 'Pipa', family: 'plucked', program: 105, octave: 12, voicing: 'single', courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail', note: 'Plucked Chinese lute',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo", "roll"],
    techniqueMethods: ["lunzhi wheel", "tan/tiao alternation", "left-hand bend"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {"chinese-traditional": ["tremolo", "roll", "bend"]}
  }
};
