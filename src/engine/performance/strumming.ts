export interface SequenceEvent {
  time: number;
  pitch: number;
  velocity: number;
  duration?: number;
  dur?: number;
  instrument?: string;
  beat?: number;
  metadata?: any;
  [key: string]: any;
}

export interface PerformanceContext {
  genre?: {
    microTiming?: {
      strumSpeed?: number;
      instrumentRoles?: Record<string, string>;
    };
    expressiveModulation?: Record<string, {
      depth?: number;
      rate?: number;
      delay?: number;
      slideSpeed?: number;
      wowAndFlutter?: number;
    }>;
    [key: string]: any;
  };
  rng: {
    float(): number;
  };
  [key: string]: any;
}

export class StrummingInterpreter {
  // Solves the "Piano Block Chord" syndrome on stringed instruments
  public applyStrumOffset(chordNotes: SequenceEvent[], ctx: PerformanceContext): SequenceEvent[] {
    const strumSpeed = ctx.genre?.microTiming?.strumSpeed || 0; // 0 means simultaneous
    if (strumSpeed === 0) return chordNotes;

    // Sort notes by pitch so the strum goes low-to-high (downstroke) or high-to-low (upstroke)
    const isUpstroke = ctx.rng.float() > 0.8; 
    const sorted = [...chordNotes].sort((a, b) => 
      isUpstroke ? b.pitch - a.pitch : a.pitch - b.pitch
    );

    return sorted.map((note, index) => {
      // Add progressive millisecond delay per string hit
      const stringDelay = index * strumSpeed;
      return {
        ...note,
        time: note.time + stringDelay,
        // Slight velocity falloff as the pick drags across strings
        velocity: Math.max(10, note.velocity - (index * 4))
      };
    });
  }
}
