import type { InstrumentDef } from '../types';

export const viola: InstrumentDef = { id: 'viola', name: 'Viola', family: 'bowed', program: 41, voicing: 'single',
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["folk", "orchestral", "world"]
  }
};
