import { GenreWorld } from '../../types';

export const bossaNovaWorld: GenreWorld = {
  id: "bossa-nova",
  name: "Bossa Nova",
  family: "Brazilian / Samba",
  color: "#689f38",
  level: "world",
  description: "Gentle syncopation, intimate whispered acoustic guitars, and sophisticated jazz harmony.",
  styleDefinitions: [],
  substyles: [],
  artists: [],
  concepts: [],
  roles: {},
  patterns: [],
  culturalHarmony: {
    tensionBoost: 0.2,
    dynamicSwell: 5,
    voicingRule: "drop_2" // Essential for that smooth, wide Brazilian guitar/piano sound
  },
  
  microTiming: {
    instrumentRoles: {
      bass: "laid_back",     // The iconic lazy surdo/bass feel dragging behind
      guitar: "pushed",      // Syncopated chords anticipating the downbeat
      drums: "laid_back"
    }
  },
  
  expressiveModulation: {
    guitar: { depth: 0.1, rate: 3.0, delay: 0.0, slideSpeed: 0.05 }, // Minimal vibrato, quick slides
  },
  
  acousticSpace: {
    roomSize: 0.2,             // Very dry studio sound
    hfDamping: 6000,           // Clear high end
    preDelay: 0.0,
    mixAmount: 0.1,
    eqCurve: { low: 1.0, midFreq: 2500, mid: 1.5, high: 2.0 } // Crisp transients, warm bass
  }
};

export const BOSSA_NOVA_WORLD = bossaNovaWorld;
