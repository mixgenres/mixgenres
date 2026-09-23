import type { InstrumentDef } from '../types';

export const voice: InstrumentDef = { id: 'voice', name: 'Synth voice', family: 'voice', program: 54, octave: 12, voicing: 'single', note: 'Synth voice tone',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "vibrato", "scoop", "fall"],
    techniqueMethods: ["breath onset", "legato phrase", "vowel shaping", "chest/head register"],
    playingStyles: ["soul", "pop"],
    genreTechniques: {"soul": ["legato", "vibrato"], "pop": ["staccato", "accent"]}
  }
};
