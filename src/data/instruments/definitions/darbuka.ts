import type { InstrumentDef } from '../types';

export const darbuka: InstrumentDef = { id: 'darbuka', name: 'Darbuka', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "roll", "open", "low-tone"],
    techniqueMethods: ["doum", "tek", "ka", "finger roll"],
    playingStyles: ["middle-eastern"],
    genreTechniques: {"middle-eastern": ["roll", "accent"]}
  }
};
