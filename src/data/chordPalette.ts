/** Compact reusable four-chord pattern catalog. */
export type ChordMood =
  | 'warm-resolved' | 'bittersweet' | 'smooth-jazzy' | 'floating-modal'
  | 'tense-dramatic' | 'earthy-bluesy' | 'festive-celebratory' | 'aggressive-driving';

export interface ChordOption {
  id: string;
  name: string;
  chords: [string, string, string, string];
  mood: ChordMood;
  blurb: string;
  genres: string[];
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
  'smooth-jazzy': { label:'Jazzy', description:'Seventh chords with movement' },
  'floating-modal': { label:'Modal', description:'Open harmony with limited pull' },
  'tense-dramatic': { label:'Dramatic', description:'Strong tension toward cadence' },
  'earthy-bluesy': { label:'Bluesy', description:'Dominant blues movement' },
  'festive-celebratory': { label:'Festive', description:'Bright dance harmony' },
  'aggressive-driving': { label:'Driving', description:'Forward harmonic momentum' },
};
export const CHORD_MOOD_ORDER: ChordMood[] = [...CHORD_MOOD_ORDER_RAW];

export const CHORD_PALETTE: ChordOption[] = [
  { id:'warm-pop', name:'Pop I–V–vi–IV', chords:['C','G','Am','F'], mood:'warm-resolved', blurb:'Familiar pop resolution', genres:['country','folk','ska','latin-pop','rock'] },
  { id:'warm-folk', name:'Folk I–IV–V–I', chords:['G','C','D','G'], mood:'warm-resolved', blurb:'Direct folk cadence', genres:['folk','country','brazilian'] },
  { id:'warm-dance', name:'Dance I–V–IV–V', chords:['C','G','F','G'], mood:'festive-celebratory', blurb:'Upbeat dance turnaround', genres:['disco','house','ska','soul'] },
  { id:'bitter-minor', name:'Minor i–VI–III–VII', chords:['Am','F','C','G'], mood:'bittersweet', blurb:'Modern minor cycle', genres:['bachata','reggaeton','latin-pop','zouk','r-and-b'] },
  { id:'bitter-rock', name:'Minor i–VI–VII–V', chords:['Em','C','D','B7'], mood:'aggressive-driving', blurb:'Dark guitar cycle', genres:['metal','rock','drum-and-bass'] },
  { id:'bitter-reggae', name:'Minor i–VII–VI–VII', chords:['Am','G','F','G'], mood:'floating-modal', blurb:'Open minor modal motion', genres:['reggae','cumbia','uk-bass'] },
  { id:'jazz-major', name:'ii–V–I–vi', chords:['Dm7','G7','Cmaj7','Am7'], mood:'smooth-jazzy', blurb:'Classic jazz turnaround', genres:['jazz','swing','r-and-b','soul','brazilian'] },
  { id:'jazz-cycle', name:'iii–VI–ii–V', chords:['Em7','A7','Dm7','G7'], mood:'smooth-jazzy', blurb:'Circle progression', genres:['jazz','swing','salsa','brazilian'] },
  { id:'jazz-minor', name:'Minor ii–V–i–i', chords:['Bm7b5','E7','Am7','Am7'], mood:'smooth-jazzy', blurb:'Minor jazz cadence', genres:['jazz','soul','r-and-b','tango'] },
  { id:'modal-dorian', name:'Dorian i–VII–VI–VII', chords:['Dm','C','Bb','C'], mood:'floating-modal', blurb:'Open Dorian loop', genres:['funk','afrobeats','hip-hop','uk-bass'] },
  { id:'modal-drone', name:'Modal i–VII–VI–i', chords:['Em','D','C','Em'], mood:'floating-modal', blurb:'Drone-centered modal cadence', genres:['electronic','folk','drum-and-bass'] },
  { id:'dramatic-andalusian', name:'Andalusian Cadence', chords:['Am','G','F','E7'], mood:'tense-dramatic', blurb:'Descending dominant resolution', genres:['flamenco','cumbia','tango','reggaeton'] },
  { id:'dramatic-minor', name:'Minor i–VI–VII–V', chords:['Em','C','D','B7'], mood:'tense-dramatic', blurb:'Dark descending cadence', genres:['metal','industrial','rock'] },
  { id:'blues-basic', name:'Blues I–IV–V–I', chords:['C7','F7','G7','C7'], mood:'earthy-bluesy', blurb:'Direct blues turnaround', genres:['blues','funk','soul','swing'] },
  { id:'blues-dominant', name:'Blues I7–IV7–I7–V7', chords:['A7','D7','A7','E7'], mood:'earthy-bluesy', blurb:'Dominant blues movement', genres:['blues','funk','rock','country'] },
  { id:'gospel-turn', name:'Gospel I–IV–V–vi', chords:['C','F','G','Am'], mood:'festive-celebratory', blurb:'Bright gospel movement', genres:['gospel','soul'] },
  { id:'gospel-jazz', name:'Gospel IV–I–ii–V', chords:['F','C','Dm7','G7'], mood:'smooth-jazzy', blurb:'Church cadence cycle', genres:['gospel','soul','r-and-b'] },
  { id:'afro-pop', name:'Afro vi–IV–I–V', chords:['Am7','Fmaj7','Cmaj7','G6'], mood:'smooth-jazzy', blurb:'Warm syncopated pop harmony', genres:['afrobeats','latin-pop'] },
  { id:'salsa-turn', name:'Salsa ii–V–I–VI', chords:['Dm7','G7','Cmaj7','A7'], mood:'smooth-jazzy', blurb:'Clave-friendly jazz turn', genres:['salsa','timba','latin-pop'] },
  { id:'timba-minor', name:'Timba i7–iv7–V7–i7', chords:['Am7','Dm7','E7','Am7'], mood:'tense-dramatic', blurb:'Cuban minor cycle', genres:['timba','salsa'] },
  { id:'zouk-romantic', name:'Zouk i–VI–III–VII', chords:['Am7','Fmaj7','Cmaj7','G7'], mood:'bittersweet', blurb:'Romantic zouk cycle', genres:['zouk','kizomba','r-and-b'] },
  { id:'tango-minor', name:'Tango i–V–i–iv', chords:['Am','E7','Am','Dm'], mood:'tense-dramatic', blurb:'Minor tango cadence', genres:['tango'] },
  { id:'metal-power', name:'Power i–VI–VII–V', chords:['E5','C5','D5','B5'], mood:'aggressive-driving', blurb:'Heavy power-chord motion', genres:['metal','punk-hardcore','industrial'] },
  { id:'club-minor', name:'Club i–VI–III–VII', chords:['Am7','Fmaj7','Cmaj7','G7'], mood:'floating-modal', blurb:'Loop-ready club harmony', genres:['house','electronic','drum-and-bass','uk-bass'] },
];

const GENRE_RECOMMENDATIONS: Record<string, string[]> = {
  afrobeats:['afro-pop','modal-dorian','warm-pop','jazz-major'], bachata:['bitter-minor','zouk-romantic','jazz-major','dramatic-andalusian'],
  blues:['blues-basic','blues-dominant','warm-folk'], brazilian:['jazz-major','jazz-cycle','warm-folk','gospel-jazz'], country:['warm-folk','blues-dominant','warm-pop'],
  cumbia:['dramatic-andalusian','bitter-reggae','warm-pop'], disco:['warm-dance','warm-pop','jazz-major'], electronic:['club-minor','modal-drone','bitter-rock'],
  folk:['warm-folk','warm-pop','modal-drone'], funk:['modal-dorian','blues-basic','jazz-major'], gospel:['gospel-turn','gospel-jazz','warm-pop'],
  'hip-hop':['modal-dorian','bitter-minor','club-minor','jazz-major'], house:['club-minor','warm-dance','jazz-major'], jazz:['jazz-major','jazz-cycle','jazz-minor'],
  kizomba:['zouk-romantic','bitter-minor','jazz-major'], 'latin-pop':['afro-pop','warm-pop','bitter-minor','salsa-turn'], tango:['tango-minor','dramatic-andalusian','jazz-minor'],
  flamenco:['dramatic-andalusian','tango-minor','bitter-minor'], metal:['metal-power','dramatic-minor','bitter-rock'], 'r-and-b':['jazz-major','zouk-romantic','gospel-jazz','bitter-minor'],
  reggae:['bitter-reggae','modal-dorian','blues-basic'], reggaeton:['bitter-minor','dramatic-andalusian','club-minor'], rock:['bitter-rock','blues-dominant','warm-pop'],
  salsa:['salsa-turn','jazz-cycle','timba-minor'], ska:['warm-pop','warm-dance','blues-basic'], soul:['gospel-turn','jazz-major','blues-basic','gospel-jazz'],
  swing:['jazz-cycle','jazz-major','blues-basic'], timba:['timba-minor','salsa-turn','jazz-cycle'], zouk:['zouk-romantic','bitter-minor','club-minor'],
  'drum-and-bass':['club-minor','modal-drone','bitter-rock'], industrial:['metal-power','dramatic-minor','club-minor'], 'punk-hardcore':['metal-power','bitter-rock','warm-pop'],
  'uk-bass':['club-minor','bitter-reggae','modal-dorian'],
};

export function chordsForMood(mood: ChordMood): ChordOption[] { return CHORD_PALETTE.filter(c => c.mood === mood); }
export function suggestedPaletteForGenre(genreId: string): ChordOption[] {
  const ids = GENRE_RECOMMENDATIONS[genreId] ?? ['warm-pop'];
  return ids.map(id => CHORD_PALETTE.find(c => c.id === id)).filter((x): x is ChordOption => Boolean(x));
}
export function suggestedPaletteForStyle(_styleId?: string, genreId?: string): ChordOption[] {
  return suggestedPaletteForGenre(genreId ?? 'rock');
}
export function chordPaletteCategoryCounts(): Record<ChordMood, number> {
  return CHORD_MOOD_ORDER_RAW.reduce((out, mood) => { out[mood] = CHORD_PALETTE.filter(c => c.mood === mood).length; return out; }, {} as Record<ChordMood, number>);
}
