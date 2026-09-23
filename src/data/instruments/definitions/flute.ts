import type { InstrumentDef } from '../types';

export const flute: InstrumentDef = {
  id: "flute",
  name: "Concert Flute",
  family: "winds",
  program: 73,
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "breath",
  note: "Concert C silver transverse flute delivering silky breathy tones, rapid ornamentation, and soaring melodies",
  acousticProfile: {
    sustain: "blown",
    role: "melody",
    centre: 72,
    low: 60,
    high: 96,
    pan: 0.24,
    trim: -2,
    space: 0.38,
    ring: 3.0
  },
  luthierPhysics: {
    category: "aerophone_lip_tension",
    materialDensity: 0.88,
    tension: 0.82,
    bodyResonanceVolume: 1.2,
    decayTimeFactor: 0.8,
    harmonicRichness: 0.5,
    airResonanceHz: 523,
    excitationType: "breath"
  },
  tuningAndMechanics: {
    tuningName: "Concert C Flute Range",
    keyRange: { lowNote: "C4", highNote: "C7", lowMidi: 60, highMidi: 96 }
  },
  performanceArticulations: {
    vibrato: {
      rateHz: 5.5,
      depthCents: 22,
      onsetDelayMs: 200
    },
    bend: {
      maxSemitones: 2,
      speedMs: 100,
      curve: "s-curve"
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "tenuto", "vibrato", "flutter-tongue", "glissando"],
    techniqueMethods: ["embouchure air stream modulation", "double-tonguing", "flutter-tonguing", "overblowing octaves"],
    playingStyles: ["classical", "jazz", "bossa-nova", "latin-jazz", "celtic", "charanga"],
    genreTechniques: {
      charanga: ["staccato", "accent", "legato", "vibrato"],
      "bossa-nova": ["legato", "vibrato", "tenuto"],
      jazz: ["legato", "staccato", "accent", "vibrato"]
    }
  }
};
