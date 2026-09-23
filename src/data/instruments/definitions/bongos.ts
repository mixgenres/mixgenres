import type { InstrumentDef } from '../types';

export const bongos: InstrumentDef = { id: 'bongos', name: 'Bongos', family: 'hand-drums', drum: { low: 61, mid: 61, high: 60 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "roll"],
    techniqueMethods: ["martillo", "open tone", "mute", "heel/finger"],
    playingStyles: ["salsa"],
    genreTechniques: {"salsa": ["accent", "ghost"]}
  }
};
