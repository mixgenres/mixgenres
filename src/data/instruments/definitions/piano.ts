import type { InstrumentDef } from '../types';

export const piano: InstrumentDef = { id: 'piano', name: 'Piano', family: 'bellows-and-keys', program: 0, voicing: 'chord',
  techniques: {
    articulations: ["accent", "staccato", "tenuto", "legato", "marcato", "ghost"],
    techniqueMethods: ["fingered voicing", "pedal sustain", "repeated-note attack"],
    playingStyles: ["jazz", "blues"],
    genreTechniques: {"jazz": ["ghost", "accent"], "blues": ["staccato", "accent"]}
  }
};
