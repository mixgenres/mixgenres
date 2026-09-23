import type { InstrumentDef } from '../types';

export const kora: InstrumentDef = { id: 'kora', name: 'Kora', family: 'plucked', program: 105, voicing: 'chord', courses: 1, bodyConstruction: 'gourd', excitationType: 'fingerpad', note: 'West African 21-string gourd harp-lute',
  techniques: {
    articulations: ["accent", "staccato", "legato", "tremolo"],
    techniqueMethods: ["thumb-index ostinato", "interlocking ostinato"],
    playingStyles: ["west-african"],
    genreTechniques: {"west-african": ["legato", "accent"]}
  }
};
