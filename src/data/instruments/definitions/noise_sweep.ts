import type { InstrumentDef } from '../types';

export const noise_sweep: InstrumentDef = { id: 'noise-sweep', name: 'Noise sweep', family: 'electronic', program: 95, voicing: 'single', note: 'Build and riser sweep',
  techniques: {
    articulations: ["accent", "staccato", "legato", "slide"],
    techniqueMethods: ["velocity programming", "filter motion", "pitch slide"],
    playingStyles: ["electronic", "pop", "dance"]
  }
};
