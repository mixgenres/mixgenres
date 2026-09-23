import type { InstrumentDef } from '../types';

export const congas: InstrumentDef = { id: 'congas', name: 'Congas', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, voicing: 'unpitched', note: 'Accents open the tone',
  techniques: {
    articulations: ["accent", "ghost", "flam", "roll", "open", "low-tone"],
    techniqueMethods: ["open tone", "slap", "heel-toe", "fingertip"],
    playingStyles: ["salsa", "afro-cuban"],
    genreTechniques: {"salsa": ["accent", "ghost", "open"], "afro-cuban": ["flam", "roll"]}
  }
};
