import type { InstrumentDef } from '../types';

export const tremolo_strings: InstrumentDef = { id: 'tremolo-strings', name: 'Tremolo strings', family: 'bowed', program: 44, voicing: 'chord',
  techniques: {
    articulations: ["accent", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["arco", "detaché", "legato bow", "pizzicato"],
    playingStyles: ["orchestral", "cinematic", "pop"]
  }
};
