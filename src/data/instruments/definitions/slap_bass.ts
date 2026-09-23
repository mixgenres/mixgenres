import type { InstrumentDef } from '../types';

export const slap_bass: InstrumentDef = { id: 'slap-bass', name: 'Slap bass', family: 'plucked', program: 36, voicing: 'bass',
  techniques: {
    articulations: ["accent", "staccato", "ghost", "palm-mute"],
    techniqueMethods: ["thumb slap", "pop", "ghost note", "hammer-on", "pull-off"],
    playingStyles: ["funk"],
    genreTechniques: {"funk": ["accent", "ghost", "staccato"]}
  }
};
