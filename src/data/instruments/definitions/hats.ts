import type { InstrumentDef } from '../types';

export const hats: InstrumentDef = { id: 'hats', name: 'Hi-hats', family: 'kit', drum: { low: 42, mid: 42, high: 46 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll", "brushed"],
    techniqueMethods: ["kick/snare/hihat orchestration", "ghost note", "rim/edge", "brush sweep", "roll"],
    playingStyles: ["rock", "pop", "jazz"]
  }
};
