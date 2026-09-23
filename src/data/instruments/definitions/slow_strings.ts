import type { InstrumentDef } from '../types';

export const slow_strings: InstrumentDef = { id: 'slow-strings', name: 'Slow string ensemble', family: 'bowed', program: 49, voicing: 'chord',
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
