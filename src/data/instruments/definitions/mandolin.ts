import type { InstrumentDef } from '../types';

export const mandolin: InstrumentDef = { id: 'mandolin', name: 'Mandolin', family: 'plucked', program: 25, octave: 12, voicing: 'single', courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum', note: 'Bright tremolo/plucked folk color',
  techniques: {
    articulations: ["accent", "staccato", "tremolo", "legato"],
    techniqueMethods: ["flatpick tremolo", "alternate picking", "double-stop chop"],
    playingStyles: ["bluegrass"],
    genreTechniques: {"bluegrass": ["tremolo", "staccato"]}
  }
};
