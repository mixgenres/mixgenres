import type { InstrumentDef } from '../types';

export const fiddle: InstrumentDef = { id: 'fiddle', name: 'Fiddle', family: 'bowed', program: 110, octave: 12, voicing: 'single', note: 'Fiddle for folk and country',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["shuffle bow", "double-stop", "drone string", "cut bow"],
    playingStyles: ["country", "folk"],
    genreTechniques: {"country": ["staccato", "accent"], "folk": ["staccato", "accent", "legato"]}
  }
};
