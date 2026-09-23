import type { InstrumentDef } from '../types';

export const kick: InstrumentDef = { id: 'kick', name: 'Kick drum', family: 'kit', drum: { low: 35, mid: 36, high: 36 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll", "brushed"],
    techniqueMethods: ["kick/snare/hihat orchestration", "ghost note", "rim/edge", "brush sweep", "roll"],
    playingStyles: ["rock", "pop", "jazz"]
  }
};
