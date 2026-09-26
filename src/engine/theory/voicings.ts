export class Note {
  midiValue: number;
  constructor(midiValue: number) {
    this.midiValue = midiValue;
  }
  transpose(semitones: number): Note {
    return new Note(this.midiValue + semitones);
  }
}

export type ChordQuality = 'major' | 'minor' | 'dominant7' | 'major7' | 'minor7' | 'diminished' | 'augmented' | string;

export interface TheoryContext {
  genre?: {
    harmonicLanguage?: {
      voicingRule?: string;
    };
    culturalHarmony?: {
      voicingRule?: string;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

export class VoicingsEngine {
  public getStandardIntervals(quality: ChordQuality): number[] {
    switch (quality) {
      case 'major':
        return [0, 4, 7];
      case 'minor':
        return [0, 3, 7];
      case 'major7':
        return [0, 4, 7, 11];
      case 'minor7':
        return [0, 3, 7, 10];
      case 'dominant7':
        return [0, 4, 7, 10];
      case 'diminished':
        return [0, 3, 6];
      case 'augmented':
        return [0, 4, 8];
      default:
        return [0, 4, 7];
    }
  }

  public compactInversion(notes: Note[]): Note[] {
    if (notes.length <= 1) return notes;
    const base = notes[0].midiValue;
    return notes
      .map(n => {
        let m = n.midiValue;
        while (m - base > 12) m -= 12;
        while (m - base < 0) m += 12;
        return new Note(m);
      })
      .sort((a, b) => a.midiValue - b.midiValue);
  }

  public buildChord(root: Note, quality: ChordQuality, ctx: TheoryContext): Note[] {
    const intervals = this.getStandardIntervals(quality);
    let rawNotes = intervals.map(interval => root.transpose(interval));

    // Pull harmonic language rules from the genre's deep metadata
    const voicingStyle = ctx.genre?.harmonicLanguage?.voicingRule || ctx.genre?.culturalHarmony?.voicingRule || 'standard';

    switch (voicingStyle) {
      case 'drop_2':
        // Drop the second highest note down an octave (Classic Jazz/Bossa)
        if (rawNotes.length >= 4) {
          rawNotes[rawNotes.length - 2] = rawNotes[rawNotes.length - 2].transpose(-12);
        }
        break;
      case 'open_spread':
        // Wide cinematic/orchestral spread: Root, 5th, 10th, 14th
        if (rawNotes.length >= 3) {
          rawNotes[1] = rawNotes[1].transpose(12); // move 3rd up an octave
          if (rawNotes[3]) rawNotes[3] = rawNotes[3].transpose(12); // move 7th up
        }
        break;
      case 'jazz_extended':
        // Automatically recolor basic 7th chords into lush 9ths or 11ths
        // Essential for Lo-Fi, Neo-Soul, and Jazz authenticity
        if (quality === 'minor7') {
          rawNotes.push(root.transpose(14)); // Add the 9th
        } else if (quality === 'major7') {
          rawNotes.push(root.transpose(14)); // Add the 9th
          rawNotes[1] = rawNotes[1].transpose(-12); // Drop the 3rd to bass clef
        } else if (quality === 'dominant7') {
          rawNotes.push(root.transpose(13)); // Add flat 9 for tension
        }
        break;
      case 'cluster':
        // Group notes within the tightest possible octave range
        rawNotes = this.compactInversion(rawNotes);
        break;
    }

    // Sort notes by pitch to ensure clean voice leading downstream
    return rawNotes.sort((a, b) => a.midiValue - b.midiValue);
  }
}
