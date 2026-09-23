import type { InstrumentDef } from '../types';

export const erhu: InstrumentDef = { id: 'erhu', name: 'Erhu', family: 'bowed', program: 110, octave: 12, voicing: 'single', note: 'Chinese two-string fiddle',
  techniques: {
    articulations: ["accent", "legato", "portamento", "vibrato", "tremolo"],
    techniqueMethods: ["continuous bow", "slide", "finger vibrato"],
    playingStyles: ["chinese-traditional"],
    genreTechniques: {"chinese-traditional": ["portamento", "vibrato"]}
  }
};
