import type { InstrumentDef } from '../types';

export const rhodes: InstrumentDef = { id: 'rhodes', name: 'Rhodes', family: 'bellows-and-keys', program: 4, voicing: 'chord', note: 'Soft attack, long tail',
  techniques: {
    articulations: ["accent", "staccato", "tenuto", "legato", "ghost"],
    techniqueMethods: ["fingered chord", "soft touch", "tremolo/pulse"],
    playingStyles: ["jazz", "funk"],
    genreTechniques: {"jazz": ["legato", "ghost"], "funk": ["staccato", "accent"]}
  }
};
