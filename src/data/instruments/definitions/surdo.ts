import type { InstrumentDef } from '../types';

export const surdo: InstrumentDef = { id: 'surdo', name: 'Surdo', family: 'hand-drums', drum: { low: 41, mid: 41, high: 43 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
