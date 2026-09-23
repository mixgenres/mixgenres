import type { InstrumentDef } from '../types';

export const distortion_guitar: InstrumentDef = { id: 'distortion-guitar', name: 'Distortion guitar', family: 'plucked', program: 30, voicing: 'chord', courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick',
  techniques: {
    articulations: ["accent", "staccato", "palm-mute", "harmonic", "bend"],
    techniqueMethods: ["down-picking", "tight mute", "alternate picking"],
    playingStyles: ["metal", "rock"],
    genreTechniques: {"metal": ["palm-mute", "staccato", "accent"], "rock": ["accent", "palm-mute"]}
  }
};
