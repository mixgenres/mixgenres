import type { InstrumentDef } from '../types';

export const muted_guitar: InstrumentDef = { id: 'muted-guitar', name: 'Muted guitar', family: 'plucked', program: 28, voicing: 'chord', courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick',
  techniques: {
    articulations: ["staccato", "ghost", "palm-mute", "accent"],
    techniqueMethods: ["dead-note strum", "muted upstroke", "chop"],
    playingStyles: ["ska", "funk"],
    genreTechniques: {"ska": ["staccato", "ghost"], "funk": ["staccato", "ghost"]}
  }
};
