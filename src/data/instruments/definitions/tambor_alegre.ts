import type { InstrumentDef } from '../types';

export const tambor_alegre: InstrumentDef = { id: 'tambor-alegre', name: 'Tambor alegre', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, voicing: 'unpitched', note: 'Colombian cumbia hand-drum',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
