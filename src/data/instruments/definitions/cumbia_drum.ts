import type { InstrumentDef } from '../types';

export const cumbia_drum: InstrumentDef = { id: 'cumbia-drum', name: 'Cumbia drum', family: 'hand-drums', drum: { low: 36, mid: 38, high: 40 }, voicing: 'unpitched', note: 'Hand-drum for cumbia tambor',
  techniques: {
    articulations: ["accent", "ghost", "flam", "drag", "roll"],
    techniqueMethods: ["open tone", "bass tone", "slap", "finger/hand stroke", "roll"],
    playingStyles: ["world", "dance", "folk"]
  }
};
