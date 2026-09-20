/** General music-theory chord/progression catalog. Genre aliases are secondary metadata. */
export type ChordMood =
  | 'warm-resolved' | 'bittersweet' | 'smooth-jazzy' | 'floating-modal'
  | 'tense-dramatic' | 'earthy-bluesy' | 'festive-celebratory' | 'aggressive-driving';

export interface ChordOption {
  id: string;
  /** General music-theory / lead-sheet name. This is what the UI should lead with. */
  name: string;
  chords: string[];
  mood: ChordMood;
  blurb: string;
  genres: string[];
  /** Genre-specific musician vocabulary, never the primary name. */
  aliases?: string[];
  heardIn?: string[];
  origin?: string;
}

export const CHORD_MOOD_ORDER_RAW: ChordMood[] = [
  'warm-resolved','bittersweet','smooth-jazzy','floating-modal',
  'tense-dramatic','earthy-bluesy','festive-celebratory','aggressive-driving',
];
export const CHORD_MOODS: Record<ChordMood, { label: string; description: string }> = {
  'warm-resolved': { label:'Warm', description:'Stable familiar resolution' },
  bittersweet: { label:'Bittersweet', description:'Minor color with release' },
  'smooth-jazzy': { label:'Extended / Jazz', description:'Seventh chords, extensions and functional motion' },
  'floating-modal': { label:'Modal', description:'Open harmony with limited dominant pull' },
  'tense-dramatic': { label:'Dramatic', description:'Strong tension toward cadence' },
  'earthy-bluesy': { label:'Blues', description:'Dominant harmony and blues movement' },
  'festive-celebratory': { label:'Festive', description:'Bright dance-oriented harmony' },
  'aggressive-driving': { label:'Driving', description:'Power, riff and dominant momentum' },
};
export const CHORD_MOOD_ORDER: ChordMood[] = [...CHORD_MOOD_ORDER_RAW];

export const CHORD_PALETTE: ChordOption[] = [
  { id:'diatonic-I-V-vi-IV', name:'I–V–vi–IV (major pop progression)', chords:['C','G','Am','F'], mood:'warm-resolved', blurb:'Common major-key four-chord cycle', genres:['country','folk','rock','latin-pop'], aliases:['pop four-chord cycle'] },
  { id:'diatonic-I-IV-V-I', name:'I–IV–V–I (authentic/folk cadence)', chords:['G','C','D','G'], mood:'warm-resolved', blurb:'Tonic–subdominant–dominant–tonic', genres:['folk','country','brazilian'], aliases:['folk cadence'] },
  { id:'minor-i-VI-III-VII', name:'i–VI–III–VII (natural-minor cycle)', chords:['Am','F','C','G'], mood:'bittersweet', blurb:'Natural-minor diatonic cycle', genres:['bachata','reggaeton','zouk','latin-pop'], aliases:['minor pop cycle'] },
  { id:'minor-i-VII-VI-VII', name:'i–VII–VI–VII (minor modal vamp)', chords:['Am','G','F','G'], mood:'floating-modal', blurb:'Repeating minor/modal bass motion', genres:['reggae','cumbia','uk-bass'], aliases:['reggae minor vamp'] },
  { id:'jazz-ii-V-I', name:'ii–V–I (major)', chords:['Dm7','G7','Cmaj7'], mood:'smooth-jazzy', blurb:'Core functional jazz cadence', genres:['jazz','swing','r-and-b','soul','brazilian'], aliases:['jazz cadence'] },
  { id:'jazz-ii-V-I-vi', name:'ii–V–I–vi (major turnaround)', chords:['Dm7','G7','Cmaj7','Am7'], mood:'smooth-jazzy', blurb:'Major-key ii–V–I with vi continuation', genres:['jazz','swing','r-and-b','soul'], aliases:['jazz turnaround'] },
  { id:'jazz-iii-VI-ii-V', name:'iii–VI–ii–V (cycle progression)', chords:['Em7','A7','Dm7','G7'], mood:'smooth-jazzy', blurb:'Descending-fifths turnaround', genres:['jazz','swing','brazilian'], aliases:['cycle turnaround'] },
  { id:'jazz-minor-ii-V-i', name:'iiø7–V7–i (minor)', chords:['Bm7b5','E7','Am7'], mood:'smooth-jazzy', blurb:'Minor-key functional cadence', genres:['jazz','tango','soul','r-and-b'], aliases:['minor ii–V–i'] },
  { id:'jazz-extended-major', name:'ii–V–I with 9ths', chords:['Dm9','G13','Cmaj9'], mood:'smooth-jazzy', blurb:'Extended jazz voicings using 9th/13th colour', genres:['jazz','r-and-b','gospel'], aliases:['extended jazz ii–V–I'] },
  { id:'jazz-extended-lydian', name:'Imaj9–II13–V13 (Lydian colour)', chords:['Cmaj9','D13','G13'], mood:'smooth-jazzy', blurb:'Major tonic with bright extended dominants', genres:['jazz','fusion','gospel'], aliases:['jazz major-color vamp'] },
  { id:'jazz-altered-dominant', name:'ii9–V7♭9–Imaj9', chords:['Dm9','G7b9','Cmaj9'], mood:'smooth-jazzy', blurb:'Altered dominant resolving to extended tonic', genres:['jazz','gospel','r-and-b'], aliases:['altered ii–V–I'] },
  { id:'jazz-tritone', name:'ii–♭II7–I (tritone-substitution cadence)', chords:['Dm9','Db7','Cmaj9'], mood:'smooth-jazzy', blurb:'Dominant tritone substitution', genres:['jazz','fusion'], aliases:['tritone-sub ii–V–I'] },
  { id:'jazz-251-13', name:'ii13–V13–Imaj13', chords:['Dm13','G13','Cmaj13'], mood:'smooth-jazzy', blurb:'Full 13th-color functional cadence', genres:['jazz','fusion','r-and-b'], aliases:['13th voicing cadence'] },
  { id:'jazz-251-11', name:'ii11–V7♯11–Imaj9', chords:['Dm11','G7#11','Cmaj9'], mood:'smooth-jazzy', blurb:'11th and sharp-11 colour', genres:['jazz','fusion'], aliases:['modern jazz colour'] },
  { id:'modal-dorian', name:'i–♭VII–♭VI–♭VII (Dorian/modal cycle)', chords:['Dm','C','Bb','C'], mood:'floating-modal', blurb:'Open modal loop', genres:['funk','afrobeats','hip-hop','uk-bass'], aliases:['Dorian vamp'] },
  { id:'modal-drone', name:'i–♭VII–♭VI–i (modal drone cycle)', chords:['Em','D','C','Em'], mood:'floating-modal', blurb:'Tonic-centered modal motion', genres:['electronic','folk','drum-and-bass'], aliases:['modal drone'] },
  { id:'andalusian-cadence', name:'i–♭VII–♭VI–V7 (Andalusian cadence)', chords:['Am','G','F','E7'], mood:'tense-dramatic', blurb:'Descending minor-to-dominant cadence', genres:['flamenco','cumbia','tango'], aliases:['Andalusian cadence','Phrygian/Andalusian turn'] },
  { id:'minor-i-VI-VII-V', name:'i–VI–VII–V (minor dominant cycle)', chords:['Em','C','D','B7'], mood:'tense-dramatic', blurb:'Minor tonic with raised dominant', genres:['metal','rock','industrial'], aliases:['minor rock cycle'] },
  { id:'blues-12-bar', name:'12-bar blues (I7–IV7–I7–V7 form)', chords:['C7','C7','C7','C7','F7','F7','C7','C7','G7','F7','C7','G7'], mood:'earthy-bluesy', blurb:'Canonical 12-bar harmonic form', genres:['blues','rock','country','soul'], aliases:['12-bar blues'] },
  { id:'blues-quick-four', name:'12-bar blues with quick IV', chords:['A7','D7','A7','A7','D7','D7','A7','A7','E7','D7','A7','E7'], mood:'earthy-bluesy', blurb:'Quick-IV 12-bar variant', genres:['blues','funk','rock'], aliases:['quick-four blues'] },
  { id:'gospel-IV-I-ii-V', name:'IV–I–ii–V (plagal / gospel turnaround)', chords:['F','C','Dm7','G7'], mood:'festive-celebratory', blurb:'Plagal-to-dominant gospel vocabulary', genres:['gospel','soul','r-and-b'], aliases:['gospel turnaround'] },
  { id:'tango-minor-cadence', name:'i–V7♭9–i–iv (minor cadence)', chords:['Am','E7b9','Am','Dm'], mood:'tense-dramatic', blurb:'Minor tonic/dominant cadence with altered dominant', genres:['tango'], aliases:['tango minor cadence'] },
  { id:'timba-minor-vamp', name:'i7–iv7–V7–i7 (minor dominant vamp)', chords:['Am7','Dm7','E7','Am7'], mood:'tense-dramatic', blurb:'Minor vamp with dominant return', genres:['timba'], aliases:['timba minor vamp'] },
  { id:'metal-power-riff', name:'i5–♭VI5–♭VII5–V5 (power-chord riff)', chords:['E5','C5','D5','B5'], mood:'aggressive-driving', blurb:'Root/fifth power-chord riff vocabulary', genres:['metal','punk-hardcore','industrial'], aliases:['metal power-chord cycle'] },
  { id:'dominant-sequence', name:'I7–IV7–I7–V7 (dominant blues movement)', chords:['A7','D7','A7','E7'], mood:'earthy-bluesy', blurb:'Dominant-seventh blues movement', genres:['blues','funk','country'], aliases:['dominant blues cycle'] },
];

export const JAZZ_CHORD_LIBRARY = [
  'Cmaj7','Cmaj9','Cmaj13','Cmaj13#11',
  'Cm7','Cm9','Cm11','Cm13',
  'C7','C9','C13','C7#11',
  'C7b9','C7#9','C7b13','C7alt',
  'Cm7b5','Cdim7','C7sus4','C13sus4',
  'C6','C6/9','C9sus4','Cadd9',
] as const;

export function chordsForMood(mood: ChordMood): ChordOption[] { return CHORD_PALETTE.filter(c => c.mood === mood); }
export function suggestedPaletteForGenre(genreId: string): ChordOption[] {
  const exact = CHORD_PALETTE.filter(c => c.genres.includes(genreId));
  return exact.length ? exact.slice(0, 8) : CHORD_PALETTE.slice(0, 4);
}
export function suggestedPaletteForStyle(styleId?: string, genreId?: string): ChordOption[] {
  const g = genreId ?? 'rock';
  const base = suggestedPaletteForGenre(g);
  if (!styleId) return base;
  const n = styleId.toLowerCase();
  if (/jazz|fusion|bebop|cool|hard-bop|spiritual/.test(n)) {
    return [...CHORD_PALETTE.filter(c => c.id.startsWith('jazz-')), ...base].slice(0, 8);
  }
  return base;
}
export function chordPaletteCategoryCounts(): Record<ChordMood, number> {
  return CHORD_MOOD_ORDER_RAW.reduce((out, mood) => { out[mood] = CHORD_PALETTE.filter(c => c.mood === mood).length; return out; }, {} as Record<ChordMood, number>);
}
