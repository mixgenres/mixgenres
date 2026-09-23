import type { InstrumentDef } from '../types';

export const taiko: InstrumentDef = { id: 'taiko', name: 'Taiko drum', family: 'metal-and-wood', drum: { low: 41, mid: 43, high: 45 }, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "sforzando", "roll"],
    techniqueMethods: ["bachi strike", "don", "tsukui", "ji-uchi"],
    playingStyles: ["japanese"],
    genreTechniques: {"japanese": ["accent", "roll"]}
  }
};
