import type { InstrumentDef } from '../types';

export const xiao: InstrumentDef = { id: 'xiao', name: 'Xiao', family: 'winds', program: 75, octave: 12, voicing: 'single', note: 'Soft Chinese end-blown flute',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
