import type { InstrumentDef } from '../types';

export const jinghu: InstrumentDef = { id: 'jinghu', name: 'Jinghu', family: 'bowed', program: 40, octave: 12, voicing: 'single', note: 'High Chinese opera bowed-string',
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["folk", "orchestral", "world"]
  }
};
