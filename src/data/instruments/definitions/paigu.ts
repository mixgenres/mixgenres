import type { InstrumentDef } from '../types';

export const paigu: InstrumentDef = { id: 'paigu', name: 'Paigu drums', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, voicing: 'unpitched', note: 'Chinese tuned barrel drums',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
