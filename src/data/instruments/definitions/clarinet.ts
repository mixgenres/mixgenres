import type { InstrumentDef } from '../types';

export const clarinet: InstrumentDef = { id: 'clarinet', name: 'Clarinet', family: 'winds', program: 71, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
