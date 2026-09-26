export class StrummingInterpreter {
  public applyStrumOffset(chordNotes: any[], ctx: any): any[] {
    const strumSpeed = ctx?.genre?.microTiming?.strumSpeed || 0;
    if (strumSpeed === 0 || !chordNotes || chordNotes.length === 0) return chordNotes;

    const isUpstroke = ctx?.rng?.float ? ctx.rng.float() > 0.8 : Math.random() > 0.8;
    const sorted = [...chordNotes].sort((a, b) => {
      const pitchA = a.pitch ?? a.midi ?? a.midiValue ?? 0;
      const pitchB = b.pitch ?? b.midi ?? b.midiValue ?? 0;
      return isUpstroke ? pitchB - pitchA : pitchA - pitchB;
    });

    return sorted.map((note, index) => {
      const baseTime = note.time ?? note.beat ?? 0;
      const baseVel = note.velocity ?? 80;
      return {
        ...note,
        time: baseTime + index * strumSpeed,
        velocity: Math.max(10, baseVel - index * 4),
      };
    });
  }
}
