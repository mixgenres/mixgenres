import type { InstrumentDef } from '../types';

export const drums: InstrumentDef = { id: 'drums', name: 'Drum kit', family: 'kit', kit: true, voicing: 'unpitched', note: 'Spreads a pattern over kick, snare, hats',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll", "brushed"],
    techniqueMethods: ["kick/snare orchestration", "rimshot", "open/closed hi-hat", "crash/ride"],
    playingStyles: ["rock", "jazz"],
    genreTechniques: {"rock": ["accent", "ghost"], "jazz": ["brushed", "ghost"]}
  }
};
