import type { InstrumentDef } from '../types';

export const melodica: InstrumentDef = { id: 'melodica', name: 'Melodica', family: 'winds', program: 21, octave: 12, voicing: 'single', note: 'Breathy melodica line',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
