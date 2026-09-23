import type { InstrumentDef } from '../types';

export const strings: InstrumentDef = { id: 'strings', name: 'Fast string ensemble', family: 'bowed', program: 48, voicing: 'chord',
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
