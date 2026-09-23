import type { InstrumentDef } from '../types';

export const violin: InstrumentDef = { id: 'violin', name: 'Violin', family: 'bowed', program: 40, octave: 12, voicing: 'single',
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "tremolo", "pizzicato", "vibrato"],
    techniqueMethods: ["detaché", "spiccato", "sul ponticello", "sul tasto"],
    playingStyles: ["orchestral", "folk"],
    genreTechniques: {"orchestral": ["legato", "tremolo"], "folk": ["staccato", "pizzicato"]}
  }
};
