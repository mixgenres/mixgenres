import { GenreWorld } from '../../types';

export const synthwaveWorld: GenreWorld = {
  id: "synthwave",
  name: "Synthwave",
  family: "Electronic",
  color: "#d0429a",
  level: "world",
  description: "Retro 80s neon nostalgia with gated reverbs and driving arpeggiated bass.",
  styleDefinitions: [],
  substyles: [],
  artists: [],
  concepts: [],
  roles: {},
  patterns: [],
  tempoRange: { min: 105, max: 125, default: 115 },
  
  culturalHarmony: {
    tensionBoost: 0.4,
    dynamicSwell: 0, // Very flat velocity dynamics, rely on filter sweeps instead
    voicingRule: "open_spread" // Wide polysynth chords
  },
  
  idiomaticProgressions: [
    ["vi", "IV", "I", "V"],             // The epic 80s movie progression
    ["i", "VII", "VI", "VII"]           // Driving darksynth loop
  ],
  
  rhythmicPatterns: {
    bass: "rolling_16ths"               // Constant driving motor-bass
  },
  
  timbrePalette: {
    lead: "synth_saw_glide",            // High resonance saw wave with portamento
    bass: "synth_square_moog",          // Fat analog bass for sidechaining
    drums: "linndrum_gated"             // Huge gated snares and punchy kicks
  },
  
  microTiming: {
    instrumentRoles: {
      drums: "strict",       // 100% quantized Linndrum machine feel
      bass: "strict",        // 16th note rolling bass perfectly on grid
      arpeggio: "pushed",    // Slight rush to create driving momentum
      lead: "rubato"         // Expressive, 80s guitar/synth solo feel
    },
    strumSpeed: 0.0 // No acoustic strumming
  },
  
  expressiveModulation: {
    lead: { depth: 0.8, rate: 5.5, delay: 0.4, slideSpeed: 0.2 }, // Delayed, dramatic 80s vibrato
    bass: { depth: 0.0, rate: 0.0, delay: 0.0, wowAndFlutter: 0.1 } // Slight analog drift
  },
  
  acousticSpace: {
    roomSize: 0.7,             // Huge gated-reverb style space
    hfDamping: 10000,          // Bright and shimmering
    preDelay: 0.04,
    mixAmount: 0.35,
    analogWarmth: 0.4,         // Console overdrive
    sidechainDucking: 1.0,     // EXTREME sidechain: bass completely dips on kick hit
    eqCurve: { low: 3.0, midFreq: 1200, mid: -2.0, high: 4.0 } // Smiling EQ curve (Hyped)
  }
};

export const SYNTHWAVE_WORLD = synthwaveWorld;
