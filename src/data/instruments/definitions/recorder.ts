import type { InstrumentDef } from '../types';

export const recorder: InstrumentDef = { id: 'recorder', name: 'Recorder', family: 'winds', program: 74, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
