import type { InstrumentDef } from '../types';

export const clavinet: InstrumentDef = { id: 'clavinet', name: 'Clavinet', family: 'bellows-and-keys', program: 7, voicing: 'chord',
  techniques: {
    articulations: ["staccato", "accent", "ghost", "palm-mute"],
    techniqueMethods: ["finger mute", "pick-like attack", "percussive chord"],
    playingStyles: ["funk"],
    genreTechniques: {"funk": ["staccato", "ghost", "accent"]}
  }
};
