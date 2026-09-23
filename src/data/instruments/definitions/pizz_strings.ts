import type { InstrumentDef } from '../types';

export const pizz_strings: InstrumentDef = { id: 'pizz-strings', name: 'Pizzicato strings', family: 'bowed', program: 45, voicing: 'chord',
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
