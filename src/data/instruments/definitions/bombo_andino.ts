import type { InstrumentDef } from '../types';

export const bombo_andino: InstrumentDef = { id: 'bombo-andino', name: 'Bombo andino', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, voicing: 'unpitched', note: 'Andean folk drum',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
