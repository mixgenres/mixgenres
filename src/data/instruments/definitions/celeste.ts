import type { InstrumentDef } from '../types';

export const celeste: InstrumentDef = {
  id: 'celeste',
  name: 'Celesta',
  family: 'metal-and-wood',
  program: 8,
  voicing: 'chord',
  note: 'Keyboard struck metal-plate idiophone with wooden box resonators sounding delicate bell-like tones',
  techniques: {
    articulations: ['accent', 'staccato', 'legato', 'tenuto', 'portato'],
    techniqueMethods: ['felt hammer strike on steel plates', 'wooden resonator resonance', 'damper pedal release', 'delicate arpeggiation'],
    playingStyles: ['orchestral', 'cinematic', 'chamber', 'fairytale', 'ambient'],
    genreTechniques: {
      'orchestral': ['legato', 'tenuto', 'staccato', 'accent'],
      'cinematic': ['legato', 'tenuto']
    }
  }
};

