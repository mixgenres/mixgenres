import type { SequenceEvent } from '../performance/strumming';

export interface GeneratorRhythmContext {
  genre?: {
    rhythmicPatterns?: Record<string, string>;
    [key: string]: any;
  };
  [key: string]: any;
}

export class RhythmInterpreter {
  public applyCulturalComping(chords: SequenceEvent[], instrument: string, ctx: GeneratorRhythmContext): SequenceEvent[] {
    const patternName = ctx.genre?.rhythmicPatterns?.[instrument];
    if (!patternName) return chords; // Play as standard block chords if no rule exists

    let compedEvents: SequenceEvent[] = [];

    chords.forEach(chordEvent => {
      // Generate authentic rhythms rather than playing chords on beat 1 of every bar
      switch (patternName) {
        case 'marcato_tango':
          // Tango 4/4 heavy 1 and 3, light 2 and 4
          [0, 1, 2, 3].forEach(beat => {
            compedEvents.push({
              ...chordEvent,
              time: chordEvent.time + beat,
              duration: 0.5,
              velocity: (beat === 0 || beat === 2) ? 110 : 70
            });
          });
          break;
        case 'sincopa':
          // 3-3-2 syncopation (Tango/Latin)
          const offsets = [0, 1.5, 3.0]; 
          offsets.forEach(offset => {
            compedEvents.push({ ...chordEvent, time: chordEvent.time + offset, duration: 1.0 });
          });
          break;
        case 'rolling_16ths':
          // Synthwave bass driving 16th notes
          for (let i = 0; i < 16; i++) {
            compedEvents.push({
              ...chordEvent,
              time: chordEvent.time + (i * 0.25),
              duration: 0.2,
              velocity: 90 + (i % 4 === 0 ? 20 : 0) // Accent downbeats
            });
          }
          break;
        case 'tresillo':
          // Bossa / Reggaeton rhythm
          [0, 1.5, 2.5].forEach(beat => {
            compedEvents.push({ ...chordEvent, time: chordEvent.time + beat, duration: 0.75 });
          });
          break;
        default:
          compedEvents.push(chordEvent);
          break;
      }
    });

    return compedEvents;
  }
}
