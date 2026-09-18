import { InstrumentKind, LensDef, Song, Track } from '../types';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID, ALL_PATTERNS, ALL_TRADITIONS, PATTERNS_BY_ID } from './genres';

export const LENSES: LensDef[] = GENRE_WORLDS;
export const LENS_BY_ID: Record<string, LensDef> = GENRE_WORLDS_BY_ID;
export { ALL_PATTERNS, ALL_TRADITIONS, PATTERNS_BY_ID };

export const INSTRUMENTS: { id: InstrumentKind; name: string; role: string }[] = [
  { id: 'voice', name: 'Voice', role: 'voice' },
  { id: 'guitar', name: 'Acoustic Guitar', role: 'harmony' },
  { id: 'electric-guitar', name: 'Electric Guitar', role: 'harmony' },
  { id: 'bass', name: 'Bass', role: 'bass' },
  { id: 'piano', name: 'Piano', role: 'harmony' },
  { id: 'keys', name: 'Keys', role: 'harmony' },
  { id: 'sax', name: 'Saxophone', role: 'lead' },
  { id: 'trumpet', name: 'Trumpet', role: 'lead' },
  { id: 'strings', name: 'Strings', role: 'texture' },
  { id: 'percussion', name: 'Percussion', role: 'percussion' },
  { id: 'drums', name: 'Drums', role: 'percussion' },
  { id: 'synth', name: 'Synth', role: 'texture' },
  { id: 'koto', name: 'Koto', role: 'melody' },
  { id: 'shamisen', name: 'Shamisen', role: 'melody' },
  { id: 'shakuhachi', name: 'Shakuhachi', role: 'melody' },
  { id: 'guqin', name: 'Guqin', role: 'melody' },
  { id: 'guzheng', name: 'Guzheng', role: 'melody' },
  { id: 'pipa', name: 'Pipa', role: 'melody' },
  { id: 'erhu', name: 'Erhu', role: 'melody' },
  { id: 'dizi', name: 'Dizi', role: 'melody' },
  { id: 'xiao', name: 'Xiao', role: 'melody' },
  { id: 'pandeiro', name: 'Pandeiro', role: 'percussion' },
  { id: 'tamborim', name: 'Tamborim', role: 'percussion' }
];

const tracks: Track[] = [
  { id: 'guitar', name: 'Guitar', role: 'harmony', instrument: 'Acoustic Guitar', kind: 'guitar', muted: false, volume: 0.9, lensIds: [] },
  { id: 'bass', name: 'Bass', role: 'bass', instrument: 'Bass', kind: 'bass', muted: false, volume: 0.85, lensIds: [] },
  { id: 'piano', name: 'Piano', role: 'harmony', instrument: 'Piano', kind: 'piano', muted: false, volume: 0.7, lensIds: [] },
  { id: 'drums', name: 'Drums', role: 'percussion', instrument: 'Drums', kind: 'drums', muted: false, volume: 0.72, lensIds: [] }
];

const regions = [
  { id: 'r1', name: 'Opening', start: 0, end: 8, kind: 'opening' },
  { id: 'r2', name: 'Statement', start: 8, end: 32, kind: 'statement', repetitionGroup: 'A' },
  { id: 'r3', name: 'Development', start: 32, end: 56, kind: 'development' },
  { id: 'r4', name: 'Instrumental / Solo', start: 56, end: 80, kind: 'instrumental' },
  { id: 'r5', name: 'Return / Variation', start: 80, end: 104, kind: 'return', repetitionGroup: 'A' },
  { id: 'r6', name: 'Ending', start: 104, end: 112, kind: 'ending' }
];

export function createInitialSong(): Song {
  const chords = ['Am', 'Dm', 'G7', 'Cmaj7', 'Fmaj7', 'Bm7b5', 'E7', 'Am'];
  const measures = Array.from({ length: 112 }, (_, i) => ({
    id: `m${i + 1}`,
    index: i + 1,
    regionId: regions.find(r => i >= r.start && i < r.end)!.id,
    chord: chords[i % chords.length],
    root: chords[i % chords.length].replace(/[^A-G]/g, ''),
    patternByTrack: {
      guitar: 'comp',
      bass: 'root',
      piano: 'chords',
      drums: 'pulse'
    },
    lensIds: []
  }));

  return {
    id: 'song-1',
    title: 'Untitled Song',
    bpm: 96,
    timeSignature: '4/4',
    durationMeasures: 112,
    tracks: tracks.map(t => ({ ...t })),
    measures,
    regions,
    relationships: [
      { id: 'rel1', from: 'bass', to: 'drums', kind: 'supports', lensIds: [] },
      { id: 'rel2', from: 'guitar', to: 'piano', kind: 'answers', lensIds: [] }
    ],
    activeLensIds: [],
    applied: []
  };
}
