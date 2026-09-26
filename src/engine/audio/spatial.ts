import type { GenreWorld, GenreAcousticSpace } from '../../types';

export const defaultSpace: GenreAcousticSpace = {
  roomSize: 0.6,
  hfDamping: 4000,
  preDelay: 0.02,
  mixAmount: 0.25,
  analogWarmth: 0.0,
  vinylNoise: 0.0,
  sidechainDucking: 0.0,
  eqCurve: { low: 0, midFreq: 1000, mid: 0, high: 0 },
};

export class SpatialAcoustics {
  public reverb: {
    roomSize: number;
    damping: number;
    preDelay: number;
    wet: number;
  };
  public masterEQ: {
    low: number;
    midFreq: number;
    mid: number;
    high: number;
    setFlat(): void;
    lowShelf(gain: number): void;
    midBand(freq: number, gain: number): void;
    highShelf(gain: number): void;
  };

  constructor() {
    this.reverb = {
      roomSize: defaultSpace.roomSize,
      damping: defaultSpace.hfDamping,
      preDelay: defaultSpace.preDelay || 0,
      wet: defaultSpace.mixAmount,
    };
    this.masterEQ = {
      low: 0,
      midFreq: 1000,
      mid: 0,
      high: 0,
      setFlat() {
        this.low = 0;
        this.mid = 0;
        this.high = 0;
      },
      lowShelf(gain: number) {
        this.low = gain;
      },
      midBand(freq: number, gain: number) {
        this.midFreq = freq;
        this.mid = gain;
      },
      highShelf(gain: number) {
        this.high = gain;
      },
    };
  }

  public configureAcousticSpace(genre: GenreWorld) {
    // Each genre is its own acoustic world. We now read the spatial metadata 
    // to place the instruments in their correct authentic environment.
    const space = genre.acousticSpace || defaultSpace;
    
    this.reverb.roomSize = space.roomSize;       // e.g. 0.2 for club, 0.9 for cathedral
    this.reverb.damping = space.hfDamping;       // Darken the room for vintage styles
    this.reverb.preDelay = space.preDelay || 0;  // Keeps transients punchy before reflections hit
    this.reverb.wet = space.mixAmount;
    
    // Apply the genre's distinct EQ curve (e.g. vintage warmth vs modern hype)
    if (space.eqCurve) {
      this.masterEQ.lowShelf(space.eqCurve.low);
      this.masterEQ.midBand(space.eqCurve.midFreq, space.eqCurve.mid);
      this.masterEQ.highShelf(space.eqCurve.high);
    }
  }
}
