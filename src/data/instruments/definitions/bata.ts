import type { InstrumentDef } from '../types';

export const bata: InstrumentDef = { id: 'bata', name: 'Batá', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, voicing: 'unpitched', note: 'Afro-Cuban double-headed drum color',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
