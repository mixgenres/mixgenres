import type { InstrumentDef } from '../types';

export const pandeiro: InstrumentDef = { id: 'pandeiro', name: 'Pandeiro', family: 'hand-drums', drum: { low: 69, mid: 54, high: 54 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "roll", "open"],
    techniqueMethods: ["thumb bass", "finger slap", "heel/finger", "shake roll"],
    playingStyles: ["samba"],
    genreTechniques: {"samba": ["roll", "accent"]}
  }
};
