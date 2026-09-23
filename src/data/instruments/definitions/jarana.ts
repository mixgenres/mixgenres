import type { InstrumentDef } from '../types';

export const jarana: InstrumentDef = { id: 'jarana', name: 'Jarana', family: 'plucked', program: 24, octave: 12, voicing: 'chord', courses: 2, bodyConstruction: 'wood-box', excitationType: 'nail', note: 'Mexican folk guitar-family strum',
  techniques: {
    articulations: ["accent", "staccato", "legato", "palm-mute"],
    techniqueMethods: ["fingerstyle", "pick", "muting", "alternating attack"],
    playingStyles: ["folk", "pop", "world"]
  }
};
