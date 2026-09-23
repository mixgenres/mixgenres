import type { InstrumentDef } from '../types';

export const timbales: InstrumentDef = { id: 'timbales', name: 'Timbales', family: 'hand-drums', drum: { low: 66, mid: 65, high: 65 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "roll"],
    techniqueMethods: ["cascara", "rimshot", "mambo bell", "press roll"],
    playingStyles: ["salsa"],
    genreTechniques: {"salsa": ["accent", "ghost"]}
  }
};
