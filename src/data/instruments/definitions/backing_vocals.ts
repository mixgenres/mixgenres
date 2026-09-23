import type { InstrumentDef } from '../types';

export const backing_vocals: InstrumentDef = { id: 'backing-vocals', name: 'Backing vocals', family: 'voice', program: 53, voicing: 'chord', note: 'Choir vocal texture',
  techniques: {
    articulations: ["legato", "portato", "accent", "vibrato"],
    techniqueMethods: ["breath onset", "legato phrase", "vibrato", "consonant attack"],
    playingStyles: ["pop", "folk", "soul"]
  }
};
