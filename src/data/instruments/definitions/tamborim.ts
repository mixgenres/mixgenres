import type { InstrumentDef } from '../types';

export const tamborim: InstrumentDef = { id: 'tamborim', name: 'Tamborim', family: 'hand-drums', drum: { low: 69, mid: 69, high: 54 }, voicing: 'unpitched', note: 'High Brazilian drum punctuation',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
