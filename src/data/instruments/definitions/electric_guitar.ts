import type { InstrumentDef } from '../types';

export const electric_guitar: InstrumentDef = { id: 'electric-guitar', name: 'Clean electric guitar', family: 'plucked', program: 27, voicing: 'chord', courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute", "harmonic", "bend", "vibrato"],
    techniqueMethods: ["pick", "alternate picking", "palm mute", "string bend"],
    playingStyles: ["rock", "funk"],
    genreTechniques: {"rock": ["palm-mute", "accent"], "funk": ["staccato", "ghost"]}
  }
};
