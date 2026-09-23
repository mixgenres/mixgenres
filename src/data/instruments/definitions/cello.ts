import type { InstrumentDef } from '../types';

export const cello: InstrumentDef = { id: 'cello', name: 'Cello', family: 'bowed', program: 42, octave: -12, voicing: 'single',
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["folk", "orchestral", "world"]
  }
};
