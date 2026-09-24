/**
 * Clamps note pitches within absolute bounds of the instrument range
 */
export function clampPitchToInstrumentRange(
  notes: number[],
  range: { minNote: number; maxNote: number }
): number[] {
  return notes.map((note) => {
    let clampedNote = note;
    while (clampedNote < range.minNote) {
      clampedNote += 12;
    }
    while (clampedNote > range.maxNote) {
      clampedNote -= 12;
    }
    return clampedNote;
  });
}

export * from './theory/voicing';
