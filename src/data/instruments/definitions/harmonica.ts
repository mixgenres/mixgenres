import type { InstrumentDef } from '../types';

export const harmonica: InstrumentDef = {
  id: "harmonica",
  name: "10-Hole Diatonic Harmonica (Blues Harp)",
  family: "winds",
  program: 22,
  voicing: "single",
  bodyConstruction: "wood-box",
  excitationType: "breath",
  note: "10-hole diatonic blues harp with brass reeds, draw reed bending, tongue-blocking, and hand wah",
  acousticProfile: {
    sustain: "blown",
    role: "melody",
    centre: 72,
    low: 60,
    high: 96,
    pan: 0.18,
    trim: -2,
    space: 0.32,
    ring: 2.2
  },
  luthierPhysics: {
    category: "bellows_free_reed",
    materialDensity: 0.75,
    tension: 0.8,
    bodyResonanceVolume: 0.5,
    decayTimeFactor: 1.0,
    harmonicRichness: 0.88,
    airResonanceHz: 440,
    excitationType: "breath"
  },
  tuningAndMechanics: {
    tuningName: "Richter Diatonic 10-Hole Harmonica",
    keyRange: { lowNote: "C4", highNote: "C7", lowMidi: 60, highMidi: 96 }
  },
  performanceArticulations: {
    bend: {
      maxSemitones: 3,
      speedMs: 120,
      curve: "s-curve"
    },
    vibrato: {
      rateHz: 6.0,
      depthCents: 35,
      onsetDelayMs: 180
    }
  },
  techniques: {
    articulations: ["accent", "staccato", "legato", "bend", "vibrato", "ghost", "tenuto", "trill"],
    techniqueMethods: ["draw reed bending", "tongue-blocking percussive slaps", "cupped hand acoustic wah", "throat vibrato", "flutter tonguing"],
    playingStyles: ["blues", "folk", "country", "rock", "chicago-blues"],
    genreTechniques: {
      blues: ["bend", "vibrato", "accent", "ghost"],
      country: ["bend", "staccato", "vibrato"],
      folk: ["legato", "tenuto", "vibrato"]
    }
  }
};
