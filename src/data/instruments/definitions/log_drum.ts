import type { InstrumentDef } from '../types';

export const log_drum: InstrumentDef = { id: 'log-drum', name: 'Log drum', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, voicing: 'unpitched', note: 'Deep rhythmic log-drum color',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
