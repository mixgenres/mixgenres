import type { InstrumentDef } from '../types';

export const tabla: InstrumentDef = { id: 'tabla', name: 'Tabla', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, voicing: 'unpitched', note: 'Paired tuned hand drums',
  techniques: {
    articulations: ["accent", "ghost", "roll", "open", "low-tone"],
    techniqueMethods: ["na", "tin", "dha", "ge", "finger roll"],
    playingStyles: ["indian-classical"],
    genreTechniques: {"indian-classical": ["roll", "accent"]}
  }
};
