import type { InstrumentDef } from '../types';

export const upright_bass: InstrumentDef = { id: 'upright-bass', name: 'Upright bass', family: 'plucked', program: 32, voicing: 'bass', note: 'Pizzicato, woody decay',
  techniques: {
    articulations: ["accent", "staccato", "legato", "ghost", "pizzicato", "harmonic"],
    techniqueMethods: ["pizzicato", "arco", "walking", "one-finger pull"],
    playingStyles: ["jazz", "folk"],
    genreTechniques: {"jazz": ["pizzicato", "legato"], "folk": ["pizzicato", "arco"]}
  }
};
