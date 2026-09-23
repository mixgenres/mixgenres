import type { InstrumentDef } from '../types';

export const pan_flute: InstrumentDef = { id: 'pan-flute', name: 'Pan flute', family: 'winds', program: 75, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
