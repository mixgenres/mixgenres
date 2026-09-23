import type { InstrumentDef } from '../types';

export const english_horn: InstrumentDef = { id: 'english-horn', name: 'English horn', family: 'winds', program: 69, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
