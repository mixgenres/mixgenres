import type { InstrumentDef } from '../types';

export const crystal: InstrumentDef = {
  id: 'crystal',
  name: 'Crystal Bell',
  family: 'electronic',
  program: 98,
  voicing: 'single',
  note: 'Synthesized crystal mallet idiophone with shimmering high-frequency partials and glass resonance',
  techniques: {
    articulations: ['accent', 'staccato', 'legato', 'tenuto', 'tremolo'],
    techniqueMethods: ['glass friction resonance', 'high-frequency additive harmonics', 'long crystal decay', 'subtle stereo panning'],
    playingStyles: ['ambient', 'new-age', 'soundtrack', 'electronic', 'dream-pop'],
    genreTechniques: {
      'ambient': ['legato', 'tenuto', 'tremolo'],
      'electronic': ['accent', 'staccato', 'legato']
    }
  }
};

