import type { SequenceEvent } from '../performance/strumming';

export interface SequencerContext {
  bpmToSeconds: number;
  rng: { float(): number };
  genre?: {
    microTiming?: {
      instrumentRoles?: Record<string, string>;
      strumSpeed?: number;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

export class TimingCalculator {
  public calculateEventTiming(event: SequenceEvent, ctx: SequencerContext): number {
    const beat = event.beat !== undefined ? event.beat : (event.time !== undefined ? event.time : 0);
    const exactBeatTime = beat * ctx.bpmToSeconds;
    let timingOffset = 0;

    // Utilize the genre's microTiming metadata to create authentic human grooves
    const genreTiming = ctx.genre?.microTiming;
    if (genreTiming) {
      const instrumentFeel = (event.instrument ? genreTiming.instrumentRoles?.[event.instrument] : undefined) || 'strict';
      
      switch (instrumentFeel) {
        case 'laid_back':
          // Consistently drags slightly behind the grid (e.g. Bossa Nova bass)
          timingOffset = 0.045 + (ctx.rng.float() * 0.015);
          break;
        case 'pushed':
          // Anticipates the beat, creating forward momentum (e.g. Jazz comping)
          timingOffset = -0.035 - (ctx.rng.float() * 0.01);
          break;
        case 'rubato':
          // Heavy push and pull based on phrase position (e.g. Tango melody)
          const phraseProgress = Math.sin((beat % 4) / 4 * Math.PI);
          timingOffset = (phraseProgress * 0.08) - 0.04; 
          break;
      }
    }
    
    // Add a deterministic microscopic humanization on top of the cultural groove
    const naturalJitter = (ctx.rng.float() * 0.01) - 0.005;
    return Math.max(0, exactBeatTime + timingOffset + naturalJitter);
  }
}
