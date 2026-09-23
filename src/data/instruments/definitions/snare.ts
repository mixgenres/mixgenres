import type { InstrumentDef } from '../types';

export const snare: InstrumentDef = { id: 'snare', name: 'Snare', family: 'kit', drum: { low: 37, mid: 38, high: 40 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll", "brushed"],
    techniqueMethods: ["kick/snare/hihat orchestration", "ghost note", "rim/edge", "brush sweep", "roll"],
    playingStyles: ["rock", "pop", "jazz"]
  }
};
