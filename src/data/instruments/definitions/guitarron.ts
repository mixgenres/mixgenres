import type { InstrumentDef } from '../types';

export const guitarron: InstrumentDef = {
  id: 'guitarron',
  name: 'Guitarrón',
  family: 'plucked',
  program: 32,
  voicing: 'bass',
  courses: 1,
  bodyConstruction: 'wood-box',
  excitationType: 'fingerpad',
  note: 'Large acoustic bass guitar from Mexico used in mariachi and folk music',
  techniques: {
    articulations: [
      "accent",
      "staccato",
      "legato",
      "ghost",
      "palm-mute",
      "tenuto"
    ],
    techniqueMethods: [
      "double-octave pluck",
      "thumb pad attack",
      "acoustic body resonance"
    ],
    playingStyles: [
      "mariachi",
      "folk",
      "latin"
    ],
    genreTechniques: {
      "mariachi": [
        "accent",
        "staccato",
        "tenuto"
      ],
      "latin": [
        "staccato",
        "accent"
      ]
    }
  }
};
