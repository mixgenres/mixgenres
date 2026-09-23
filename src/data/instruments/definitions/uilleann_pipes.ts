import type { InstrumentDef } from '../types';

export const uilleann_pipes: InstrumentDef = { id: 'uilleann-pipes', name: 'Uilleann pipes', family: 'winds', program: 109, voicing: 'single', note: 'Irish phrase rules over the pipes patch',
  techniques: {
    articulations: ["accent", "legato", "grace", "staccato"],
    techniqueMethods: ["cut", "tap", "roll", "bellows phrasing"],
    playingStyles: ["celtic"],
    genreTechniques: {"celtic": ["grace", "legato"]}
  }
};
