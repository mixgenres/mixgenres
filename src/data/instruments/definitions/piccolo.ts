import type { InstrumentDef } from '../types';

export const piccolo: InstrumentDef = { id: 'piccolo', name: 'Piccolo', family: 'winds', program: 72, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
