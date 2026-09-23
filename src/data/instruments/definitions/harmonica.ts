import type { InstrumentDef } from '../types';

export const harmonica: InstrumentDef = { id: 'harmonica', name: 'Harmonica', family: 'winds', program: 22, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portamento", "vibrato", "breath"],
    techniqueMethods: ["tongued attack", "legato air", "breath phrasing", "vibrato"],
    playingStyles: ["folk", "jazz", "world"]
  }
};
