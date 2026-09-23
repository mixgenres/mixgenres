import type { InstrumentDef } from '../types';

export const brush_kit: InstrumentDef = { id: 'brush-kit', name: 'Brush kit', family: 'kit', kit: true, voicing: 'unpitched',
  techniques: {
    articulations: ["accent", "ghost", "brushed", "roll"],
    techniqueMethods: ["brush sweep", "brush tap", "press roll"],
    playingStyles: ["jazz"],
    genreTechniques: {"jazz": ["brushed", "ghost", "roll"]}
  }
};
