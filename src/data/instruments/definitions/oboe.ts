import type { InstrumentDef } from '../types';

export const oboe: InstrumentDef = { id: 'oboe', name: 'Oboe', family: 'winds', program: 68, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
