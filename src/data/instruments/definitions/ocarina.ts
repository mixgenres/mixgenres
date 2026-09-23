import type { InstrumentDef } from '../types';

export const ocarina: InstrumentDef = { id: 'ocarina', name: 'Ocarina', family: 'winds', program: 79, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
