import type { InstrumentDef } from '../types';

export const bodhran: InstrumentDef = { id: 'bodhran', name: 'Bodhrán', family: 'hand-drums', drum: { low: 36, mid: 38, high: 45 }, voicing: 'unpitched', note: 'Frame-drum role using the percussion engine',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
