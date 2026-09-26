import { GenreWorld } from '../../types';

export const cinematicWorld: GenreWorld = {
  id: "cinematic",
  name: "Cinematic Orchestral",
  family: "Orchestral",
  color: "#6b7280",
  level: "world",
  description: "Sweeping orchestral arrangements, massive hall acoustics, and epic emotional arcs.",
  styleDefinitions: [],
  substyles: [],
  artists: [],
  concepts: [],
  roles: {},
  patterns: [],
  tempoRange: { min: 55, max: 90, default: 70 },
  
  culturalHarmony: {
    tensionBoost: 1.0,         // Maximum tension scaling for dramatic cadences
    dynamicSwell: 50,          // Massive CC11 expression arcs (ppp to fff)
    voicingRule: "open_spread" // Huge Hans Zimmer-style chord spacing
  },
  
  microTiming: {
    instrumentRoles: {
      strings_low: "laid_back", // Heavy bows take time to grab the string
      strings_high: "rubato",
      brass: "laid_back",       // Slow attack
      percussion: "strict"      // Taikos on the absolute grid
    },
    strumSpeed: 0.05 // Gentle harp/piano rolls
  },
  
  expressiveModulation: {
    strings_high: { depth: 0.4, rate: 6.0, delay: 0.5, slideSpeed: 0.4 }, // Slow onset, intense vibrato
    brass: { depth: 0.2, rate: 4.0, delay: 0.8, slideSpeed: 0.1 }
  },
  
  acousticSpace: {
    roomSize: 0.95,            // Massive scoring stage / Cathedral
    hfDamping: 3500,           // Very dark reflections, distance roll-off
    preDelay: 0.08,            // Clear initial attack before the hall eats the sound
    mixAmount: 0.6,
    sidechainDucking: 0.0,
    eqCurve: { low: 5.0, midFreq: 250, mid: -1.0, high: 2.0 } // Massive sub-bass emphasis
  }
};

export const CINEMATIC_WORLD = cinematicWorld;
