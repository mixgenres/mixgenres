import type { InstrumentDef } from '../types';

export const fiddle: InstrumentDef = {
  id: "fiddle",
  name: "Fiddle",
  family: "bowed",
  program: 110,
  octave: 12,
  voicing: "single",
  elementaryModel: 6,
  makeupGain: 6.667,
  polyphony: 4,
  note: "Fiddle for folk and country",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 71,
    low: 55,
    high: 90,
    pan: -0.3,
    trim: -2,
    space: 0.35,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.55,
    tension: 0.85,
    bodyResonanceVolume: 2.5,
    decayTimeFactor: 1.3,
    harmonicRichness: 0.8
  },
  bowedResonance: {
    bodyFreq: 480,
    bodyQ: 2,
    bodyGain: 0.45,
    bridgeHillFreq: 3000,
    bridgeHillQ: 2.6,
    bridgeHillGain: 0.45
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "portato", "tremolo", "pizzicato"],
    techniqueMethods: ["shuffle bow", "double-stop", "drone string", "cut bow"],
    playingStyles: ["country", "folk"],
    genreTechniques: {
      country: ["staccato", "accent"],
      folk: ["staccato", "accent", "legato"]
    }
  }
};
