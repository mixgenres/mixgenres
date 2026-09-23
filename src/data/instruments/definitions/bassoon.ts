import type { InstrumentDef } from '../types';

export const bassoon: InstrumentDef = { id: 'bassoon', name: 'Bassoon', family: 'winds', program: 70, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
