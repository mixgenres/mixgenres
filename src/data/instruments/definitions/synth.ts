import type { InstrumentDef } from '../types';

export const synth: InstrumentDef = { id: 'synth', name: 'Synth', family: 'electronic', program: 81, voicing: 'single', note: 'Lead synth voice',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "bend"],
    techniqueMethods: ["mono lead", "filter sweep", "pitch glide", "velocity envelope"],
    playingStyles: ["electronic"],
    genreTechniques: {"electronic": ["staccato", "portamento"]}
  }
};
