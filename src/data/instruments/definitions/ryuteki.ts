import type { InstrumentDef } from '../types';

export const ryuteki: InstrumentDef = { id: 'ryuteki', name: 'Ryuteki', family: 'winds', program: 73, octave: 12, voicing: 'single', note: 'Gagaku flute',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
