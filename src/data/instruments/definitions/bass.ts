import type { InstrumentDef } from '../types';

export const bass: InstrumentDef = { id: 'bass', name: 'Electric bass', family: 'plucked', program: 33, voicing: 'bass',
  techniques: {
    articulations: ["accent", "staccato", "legato", "ghost", "palm-mute", "harmonic"],
    techniqueMethods: ["fingerstyle", "slap", "pop", "picked", "ghost note", "hammer-on", "pull-off"],
    playingStyles: ["funk", "rock", "jazz"],
    genreTechniques: {"funk": ["slap", "ghost"], "rock": ["picked", "palm-mute"], "jazz": ["fingerstyle", "legato"]}
  }
};
