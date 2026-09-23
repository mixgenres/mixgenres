import type { InstrumentDef } from '../types';

export const cajon: InstrumentDef = { id: 'cajon', name: 'Cajon', family: 'hand-drums', drum: { low: 36, mid: 38, high: 40 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "flam", "roll", "golpe"],
    techniqueMethods: ["bass", "slap", "tip", "side tap", "brush"],
    playingStyles: ["flamenco"],
    genreTechniques: {"flamenco": ["golpe", "accent", "ghost"]}
  }
};
