import type { InstrumentDef } from '../types';

export const bombo: InstrumentDef = { id: 'bombo', name: 'Bombo', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, voicing: 'unpitched', note: 'Generic Argentine folk bombo',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
