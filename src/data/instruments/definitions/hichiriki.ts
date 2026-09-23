import type { InstrumentDef } from '../types';

export const hichiriki: InstrumentDef = { id: 'hichiriki', name: 'Hichiriki', family: 'winds', program: 68, octave: 12, voicing: 'single', note: 'Gagaku double-reed',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
