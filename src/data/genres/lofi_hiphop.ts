import { GenreWorld } from '../../types';

export const lofiWorld: GenreWorld = {
  id: "lofi-hiphop",
  name: "Lo-Fi Hip Hop",
  family: "Hip Hop",
  color: "#8a7d93",
  level: "world",
  description: "Dusty boom bap drums, warped Rhodes, lazy swing, and cassette warmth.",
  styleDefinitions: [],
  substyles: [],
  artists: [],
  concepts: [],
  roles: {},
  patterns: [],
  tempoRange: { min: 70, max: 88, default: 78 },
  
  culturalHarmony: {
    tensionBoost: 0.1,
    dynamicSwell: 2,
    voicingRule: "jazz_extended" // Crucial: gives the piano those lush 9ths/11ths
  },
  
  idiomaticProgressions: [
    ["ii7", "V7", "Imaj7", "VI7"],      // Classic jazz turnaround loop
    ["IVmaj7", "III7", "vi7", "v7"]     // Neo-soul descending
  ],
  
  rhythmicPatterns: {
    piano: "tresillo"                   // Lazy laid-back comping
  },
  
  timbrePalette: {
    piano: "electric_piano_dark",       // Rhodes/Wurli heavily low-passed
    bass: "sub_sine_warm",              // Deep, rounded sub frequency
    drums: "vintage_breakbeat_dusty"    // Saturated, compressed drum room
  },
  
  microTiming: {
    instrumentRoles: {
      drums: "laid_back", // Heavy J Dilla-style swing; snare is late
      hihat: "rubato",    // Drunken, unquantized feel
      bass: "strict",     // Anchors the groove
      piano: "laid_back"
    },
    strumSpeed: 0.02 // Gentle roll for keys/guitar chords
  },
  
  expressiveModulation: {
    piano: { depth: 0, rate: 0, delay: 0, wowAndFlutter: 0.8 }, // Massive tape warble
    guitar: { depth: 0, rate: 0, delay: 0, wowAndFlutter: 0.6 }
  },
  
  acousticSpace: {
    roomSize: 0.1,             // Bedroom acoustics
    hfDamping: 8000,           // Cuts out sharp highs completely
    preDelay: 0.0,
    mixAmount: 0.1,
    analogWarmth: 0.8,         // Saturation
    vinylNoise: 0.6,           // Crackles and pops injected into mixer
    sidechainDucking: 0.5,     // Kick gently ducks the melodic sample
    eqCurve: { low: 4.0, midFreq: 400, mid: 2.0, high: -6.0 } // Dusty, bass-heavy curve
  }
};

export const LOFI_WORLD = lofiWorld;
