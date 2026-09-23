import type { InstrumentDef } from '../types';

export const tambora: InstrumentDef = { id: 'tambora', name: 'Tambora', family: 'hand-drums', drum: { low: 36, mid: 38, high: 40 }, voicing: 'unpitched', note: 'Colombian cumbia drum',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
