export class VoiceLeadingResolver {
  public applySmoothVoiceLeading(currentChord: any[], previousChord: any[] | null): any[] {
    if (!previousChord || previousChord.length === 0 || !currentChord || currentChord.length === 0) {
      return currentChord;
    }

    let bestInversion = currentChord;
    let minimumDistance = Infinity;
    const inversions = [
      currentChord,
      this.invertUp(currentChord, 1),
      this.invertUp(currentChord, 2),
      this.invertDown(currentChord, 1),
    ];

    for (const inversion of inversions) {
      const distance = this.calculateVoiceDistance(inversion, previousChord);
      if (distance < minimumDistance) {
        minimumDistance = distance;
        bestInversion = inversion;
      }
    }
    return [currentChord[0], ...bestInversion.slice(1)].sort((a, b) => {
      const pA = a.pitch ?? a.midiValue ?? (typeof a === 'number' ? a : 0);
      const pB = b.pitch ?? b.midiValue ?? (typeof b === 'number' ? b : 0);
      return pA - pB;
    });
  }

  private calculateVoiceDistance(chordA: any[], chordB: any[]): number {
    const length = Math.min(chordA.length, chordB.length);
    return chordA.slice(0, length).reduce((sum, _, i) => {
      const pA = chordA[i]?.pitch ?? chordA[i]?.midiValue ?? (typeof chordA[i] === 'number' ? chordA[i] : 0);
      const pB = chordB[i]?.pitch ?? chordB[i]?.midiValue ?? (typeof chordB[i] === 'number' ? chordB[i] : 0);
      return sum + Math.abs(pA - pB);
    }, 0);
  }

  private invertUp(chord: any[], amt: number): any[] {
    if (!chord || chord.length === 0) return chord;
    const copy = [...chord];
    for (let i = 0; i < Math.min(amt, copy.length); i++) {
      const el = copy.shift();
      if (el) {
        if (typeof el === 'object') {
          const pitch = (el.pitch ?? el.midiValue ?? 60) + 12;
          copy.push({ ...el, pitch, midiValue: pitch });
        } else if (typeof el === 'number') {
          copy.push(el + 12);
        } else {
          copy.push(el);
        }
      }
    }
    return copy;
  }

  private invertDown(chord: any[], amt: number): any[] {
    if (!chord || chord.length === 0) return chord;
    const copy = [...chord];
    for (let i = 0; i < Math.min(amt, copy.length); i++) {
      const el = copy.pop();
      if (el) {
        if (typeof el === 'object') {
          const pitch = (el.pitch ?? el.midiValue ?? 60) - 12;
          copy.unshift({ ...el, pitch, midiValue: pitch });
        } else if (typeof el === 'number') {
          copy.unshift(el - 12);
        } else {
          copy.unshift(el);
        }
      }
    }
    return copy;
  }
}
