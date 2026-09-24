import type { InstrumentDef } from '../types';

export const cello: InstrumentDef = {
  id: "cello",
  name: "Cello",
  family: "bowed",
  program: 42,
  octave: -12,
  voicing: "single",
  elementaryModel: 6,
  makeupGain: 5.137,
  polyphony: 4,
  note: "Acoustic violoncello with resonant spruce body and warm, expressive, lyrical tenor/bass voice",
  acousticProfile: {
    sustain: "sustained",
    role: "lead",
    centre: 50,
    low: 36,
    high: 72,
    pan: -0.24,
    trim: -1,
    space: 0.42,
    ring: 4,
    letRingAcrossSections: true
  },
  luthierPhysics: {
    category: "continuous_bowed_friction",
    materialDensity: 0.5,
    tension: 0.65,
    bodyResonanceVolume: 25,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.65
  },
  bowedResonance: {
    bodyFreq: 180,
    bodyQ: 2.5,
    bodyGain: 0.55,
    bridgeHillFreq: 1350,
    bridgeHillQ: 2.2,
    bridgeHillGain: 0.3
  },
  techniques: {
    articulations: [
      "arco",
      "pizzicato",
      "legato",
      "staccato",
      "tenuto",
      "tremolo",
      "arrastre",
      "portato",
      "vibrato",
      "accent"
    ],
    techniqueMethods: [
      "smooth bow legato phrasing",
      "finger pizzicato pluck",
      "tango arrastre bow drag",
      "sul tasto flautando",
      "sul ponticello metallic rasp"
    ],
    playingStyles: ["classical", "tango", "folk", "cinematic", "pop"],
    genreTechniques: {
      classical: ["arco", "legato", "tenuto", "pizzicato", "portato"],
      tango: ["arrastre", "staccato", "accent", "arco"],
      cinematic: ["legato", "tenuto", "tremolo", "vibrato"],
      folk: ["arco", "pizzicato", "accent"]
    }
  }
};
