import type { InstrumentDef } from '../types';

export const low_whistle: InstrumentDef = { id: 'low-whistle', name: 'Low whistle', family: 'winds', program: 78, voicing: 'single', note: 'Low-register whistle voice',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
