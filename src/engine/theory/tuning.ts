export interface TuningSystem {
  id: string;
  name: string;
  description: string;
  /** Returns frequency in Hz for a base MIDI note number */
  getFrequencyHz(midiNote: number, tonicPc?: number): number;
  /** Returns microtonal offset in cents relative to 12-TET */
  getCentsOffset(midiNote: number, tonicPc?: number): number;
}

export const TUNING_SYSTEMS: Record<string, TuningSystem> = {
  '12-tet': {
    id: '12-tet',
    name: '12-TET Equal Temperament',
    description: 'Standard 12-tone equal temperament (A4 = 440 Hz)',
    getFrequencyHz(midiNote) {
      return 440 * Math.pow(2, (midiNote - 69) / 12);
    },
    getCentsOffset() {
      return 0;
    },
  },

  'just-intonation': {
    id: 'just-intonation',
    name: 'Just Intonation (5-limit)',
    description: 'Harmonic pure intervals based on integer frequency ratios',
    getFrequencyHz(midiNote, tonicPc = 0) {
      const relative = midiNote - (60 + tonicPc);
      const pc = ((relative % 12) + 12) % 12;
      const octave = Math.floor(relative / 12);
      // 5-limit just ratios represented against the 12 chromatic pitch classes.
      const ratios = [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 9/5, 15/8];
      const tonicFreq = 440 * Math.pow(2, ((60 + tonicPc) - 69) / 12);
      return tonicFreq * ratios[pc] * Math.pow(2, octave);
    },
    getCentsOffset(midiNote, tonicPc = 0) {
      const relative = midiNote - (60 + tonicPc);
      const pc = ((relative % 12) + 12) % 12;
      const ratios = [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 9/5, 15/8];
      return 1200 * Math.log2(ratios[pc]) - pc * 100;
    },
  },

  'maqam-bayati': {
    id: 'maqam-bayati',
    name: 'Arabic Maqam Bayati',
    description: 'Bayati ajnas featuring quarter-tone neutral second (-50 cents on 2nd degree)',
    getFrequencyHz(midiNote, tonicPc = 2) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      let cents = 0;
      if (pc === 1 || pc === 2) {
        cents = -50; // Half-flat neutral second (E-half-flat when tonic is D)
      }
      const baseHz = 440 * Math.pow(2, (midiNote - 69) / 12);
      return baseHz * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = 2) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      return pc === 1 || pc === 2 ? -50 : 0;
    },
  },

  'blues-continuum': {
    id: 'blues-continuum',
    name: 'Blues Neutral Third & Slur',
    description: 'Dynamic blues-scale neutral third (+35 cents offset on minor third)',
    getFrequencyHz(midiNote, tonicPc = 0) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      let cents = 0;
      if (pc === 3) cents = +35; // Neutral third between Eb and E
      if (pc === 6) cents = -20; // Blue fifth
      const baseHz = 440 * Math.pow(2, (midiNote - 69) / 12);
      return baseHz * Math.pow(2, cents / 1200);
    },
    getCentsOffset(midiNote, tonicPc = 0) {
      const pc = (midiNote % 12 - tonicPc + 12) % 12;
      if (pc === 3) return +35;
      if (pc === 6) return -20;
      return 0;
    },
  },

  'gamelan-slendro': {
    id: 'gamelan-slendro',
    name: 'Gamelan Slendro (5-tone equidistance)',
    description: 'Inharmonic 5-tone pentatonic scale (~240 cents step size)',
    getFrequencyHz(midiNote, tonicPc = 0) {
      const tonicMidi = 60 + tonicPc;
      const relative = midiNote - tonicMidi;
      const octave = Math.floor(relative / 12);
      const semitone = ((relative % 12) + 12) % 12;
      // Map the chromatic request to the nearest of five Slendro degrees.
      const degree = Math.max(0, Math.min(4, Math.round(semitone * 5 / 12)));
      const cents = degree * 240;
      const tonicFreq = 440 * Math.pow(2, (tonicMidi - 69) / 12);
      return tonicFreq * Math.pow(2, (octave * 1200 + cents) / 1200);
    },
    getCentsOffset(midiNote, tonicPc = 0) {
      const relative = midiNote - (60 + tonicPc);
      const semitone = ((relative % 12) + 12) % 12;
      const degree = Math.max(0, Math.min(4, Math.round(semitone * 5 / 12)));
      return degree * 240 - semitone * 100;
    },
  },
};

export function resolveTuningSystem(systemId = '12-tet'): TuningSystem {
  return TUNING_SYSTEMS[systemId] ?? TUNING_SYSTEMS['12-tet'];
}
