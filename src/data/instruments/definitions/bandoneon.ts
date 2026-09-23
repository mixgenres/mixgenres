import type { InstrumentDef } from '../types';

export const bandoneon: InstrumentDef = { id: 'bandoneon', name: 'Bandoneon', family: 'bellows-and-keys', program: 23, voicing: 'chord', note: 'Bandoneón for tango and nuevo tango',
  techniques: {
    articulations: ["accent", "staccato", "legato", "marcato", "arrastre", "portato"],
    techniqueMethods: ["bandoneon marcato", "arrastre", "staccato chord"],
    playingStyles: ["tango"],
    genreTechniques: {"tango": ["marcato", "arrastre", "staccato"]}
  }
};
