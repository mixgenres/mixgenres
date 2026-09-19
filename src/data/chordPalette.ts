/**
 * Chord palette — curated musical chord progressions organized by character and feel.
 * All chord symbols are strictly validated for theory engine compatibility.
 */

export type ChordMood =
  | 'warm-resolved'
  | 'bittersweet'
  | 'smooth-jazzy'
  | 'longing-cinematic'
  | 'tense-dramatic'
  | 'floating-modal'
  | 'earthy-bluesy'
  | 'exotic-borrowed'
  | 'playful-bouncy'
  | 'triumphant-anthemic'
  | 'mysterious-eerie'
  | 'aggressive-driving'
  | 'romantic-sensual'
  | 'festive-celebratory'
  | 'quirky-angular'
  | 'chaotic';

export interface ChordOption {
  id: string;
  name: string;
  chords: string[];
  mood: ChordMood;
  blurb: string;
  heardIn?: string[];
  origin?: string;
}

export const CHORD_MOOD_ORDER_RAW: ChordMood[] = [
  'warm-resolved',
  'bittersweet',
  'smooth-jazzy',
  'longing-cinematic',
  'tense-dramatic',
  'floating-modal',
  'earthy-bluesy',
  'exotic-borrowed',
  'playful-bouncy',
  'triumphant-anthemic',
  'mysterious-eerie',
  'aggressive-driving',
  'romantic-sensual',
  'festive-celebratory',
  'quirky-angular',
  'chaotic',
];

export const CHORD_MOODS: Record<ChordMood, { label: string; description: string }> = {
  'warm-resolved': { label: 'Warm', description: 'Comfortable, natural resolution' },
  bittersweet: { label: 'Bittersweet', description: 'Wistful minor dip with warm resolution' },
  'smooth-jazzy': { label: 'Jazzy', description: 'Extended 7ths and fluid voice leading' },
  'longing-cinematic': { label: 'Cinematic', description: 'Spacious, emotional widescreen harmony' },
  'tense-dramatic': { label: 'Dramatic', description: 'High tension, dramatic minor pull' },
  'floating-modal': { label: 'Modal', description: 'Open, unhurried, atmospheric' },
  'earthy-bluesy': { label: 'Bluesy', description: 'Raw dominant 7ths and blues grit' },
  'exotic-borrowed': { label: 'Exotic', description: 'Borrowed accidentals and modal colors' },
  'playful-bouncy': { label: 'Bouncy', description: 'Upbeat, rhythmic, light on its feet' },
  'triumphant-anthemic': { label: 'Anthemic', description: 'Bold, uplifting stadium chorus energy' },
  'mysterious-eerie': { label: 'Eerie', description: 'Dark, ambiguous, haunting mood' },
  'aggressive-driving': { label: 'Driving', description: 'Heavy, fast, forward momentum' },
  'romantic-sensual': { label: 'Sensual', description: 'Warm, intimate, slow-dance motion' },
  'festive-celebratory': { label: 'Festive', description: 'Bright, high-energy celebration' },
  'quirky-angular': { label: 'Quirky', description: 'Unexpected chord colors, odd turns and playful angularity' },
  chaotic: { label: 'Chaotic', description: 'Unstable harmonic motion, abrupt turns and surprising chord changes' },
};

// Shown alphabetically by label everywhere it's picked from, same as every
// other browsable list in the app.
export const CHORD_MOOD_ORDER: ChordMood[] = [...CHORD_MOOD_ORDER_RAW].sort((a, b) =>
  CHORD_MOODS[a].label.localeCompare(CHORD_MOODS[b].label)
);

export const CHORD_PALETTE: ChordOption[] = [
  // ---- Warm & Settled -------------------------------------------------
  {
    id: 'home-base',
    name: 'Home Base',
    chords: ['C', 'G', 'Am', 'F'],
    mood: 'warm-resolved',
    blurb: 'Classic I-V-vi-IV pop resolution',
    heardIn: ['rock', 'folk'],
  },
  {
    id: 'front-porch',
    name: 'Front Porch',
    chords: ['G', 'C', 'G', 'D7'],
    mood: 'warm-resolved',
    blurb: 'Earthy I-IV-I-V roots cadence',
    heardIn: ['country', 'folk'],
  },
  {
    id: 'pagode-turn',
    name: 'Pagode Turn',
    chords: ['C6', 'Am7', 'Dm7', 'G7'],
    mood: 'warm-resolved',
    origin: 'Pagode / Samba',
    blurb: 'Relaxed Brazilian major turnaround',
    heardIn: ['samba-bossa'],
  },
  {
    id: 'carnavalito-cycle',
    name: 'Carnavalito Cycle',
    chords: ['C', 'G7', 'C', 'F'],
    mood: 'warm-resolved',
    origin: 'Andean Folk',
    blurb: 'Bright Andean festival walk',
    heardIn: ['folclorico'],
  },

  // ---- Bittersweet ------------------------------------------------------
  {
    id: 'doo-wop',
    name: 'Doo-Wop Dip',
    chords: ['C', 'Am', 'F', 'G'],
    mood: 'bittersweet',
    blurb: 'Classic I-vi-IV-V ballad loop',
    heardIn: ['rock', 'folk', 'ska', 'trova'],
  },
  {
    id: 'slow-drift',
    name: 'Slow Drift',
    chords: ['Am7', 'Fmaj7', 'Cmaj7', 'G6'],
    mood: 'bittersweet',
    blurb: 'Smooth minor-seventh descent',
    heardIn: ['afrobeats', 'fusion-ambient'],
  },
  {
    id: 'requinto-loop',
    name: 'Requinto Loop',
    chords: ['Em', 'A7', 'D', 'Bm'],
    mood: 'bittersweet',
    origin: 'Bachata',
    blurb: 'Heartbreak ii-V-I-vi ballad cycle',
    heardIn: ['bachata'],
  },
  {
    id: 'pop-rock-axis',
    name: 'Pop-Rock Axis',
    chords: ['Am', 'F', 'C', 'G'],
    mood: 'bittersweet',
    blurb: 'Anthemic vi-IV-I-V minor drive',
    heardIn: ['rock-en-espanol', 'chinese-rock', 'electronic', 'reggaeton-dembow', 'chinese-traditional'],
  },
  {
    id: 'heartache-waltz',
    name: 'Nashville Four',
    chords: ['G', 'D', 'Em', 'C'],
    mood: 'bittersweet',
    blurb: 'Warm country-pop major-to-minor turn',
    heardIn: ['country'],
  },
  {
    id: 'trova-turn',
    name: 'Trova Turn',
    chords: ['C', 'Am', 'Dm7', 'G7'],
    mood: 'bittersweet',
    origin: 'Nueva Trova',
    blurb: 'Lyrical singer-songwriter cadence',
    heardIn: ['trova'],
  },
  {
    id: 'cumbia-santafesina',
    name: 'Santafesina Turn',
    chords: ['Am', 'Dm', 'C', 'G'],
    mood: 'bittersweet',
    origin: 'Cumbia',
    blurb: 'Melodic Argentine cumbia cycle',
    heardIn: ['cumbia'],
  },

  // ---- Smooth & Jazzy -----------------------------------------------
  {
    id: 'two-five-one',
    name: 'Two-Five-One',
    chords: ['Dm7', 'G7', 'Cmaj7', 'Cmaj7'],
    mood: 'smooth-jazzy',
    origin: 'Jazz',
    blurb: 'Fundamental jazz turnaround',
    heardIn: ['jazz', 'house-techno'],
  },
  {
    id: 'bossa-glide',
    name: 'Bossa Glide',
    chords: ['Fmaj7', 'Dm7', 'Gm7', 'C7'],
    mood: 'smooth-jazzy',
    origin: 'Bossa Nova',
    blurb: 'Extended chords with fluid voice leading',
    heardIn: ['zouk', 'jazz', 'samba-bossa'],
  },
  {
    id: 'rhythm-changes-turn',
    name: 'Rhythm Changes',
    chords: ['Cmaj7', 'A7', 'Dm7', 'G7'],
    mood: 'smooth-jazzy',
    origin: 'Swing',
    blurb: 'Swing standard I-VI-ii-V backbone',
    heardIn: ['jazz', 'swing'],
  },
  {
    id: 'soul-jazz-loop',
    name: 'Soul-Jazz Descending Loop',
    chords: ['Fm7', 'Bbm7', 'Ebmaj7', 'Abmaj7'],
    mood: 'smooth-jazzy',
    origin: 'Soul / Jazz / Hip-Hop Sampling',
    blurb: 'Descending minor-seventh loop suited to sampled soul-jazz harmony',
    heardIn: ['hip-hop', 'jazz', 'funk'],
  },
  {
    id: 'uptown-turnaround',
    name: 'Uptown Turnaround',
    chords: ['Cmaj7', 'Am7', 'Dm7', 'G7'],
    mood: 'smooth-jazzy',
    origin: 'Big Band',
    blurb: 'Big-band swing turnaround',
    heardIn: ['swing'],
  },
  {
    id: 'bossa-cadence',
    name: 'Bossa Cadence',
    chords: ['Dm7', 'G7', 'Cmaj7', 'A7'],
    mood: 'smooth-jazzy',
    origin: 'Bossa Nova / Samba',
    blurb: 'ii-V-I with secondary dominant turn',
    heardIn: ['samba-bossa', 'salsa'],
  },

  // ---- Longing & Open --------------------------------------------
  {
    id: 'royal-road',
    name: 'Royal Road',
    chords: ['Fmaj7', 'G7', 'Em7', 'Am7'],
    mood: 'longing-cinematic',
    origin: 'J-Pop / City Pop',
    blurb: 'Iconic IV-V-iii-vi emotional chorus',
    heardIn: ['j-pop'],
  },
  {
    id: 'canon-drift',
    name: 'Canon Drift',
    chords: ['Cmaj7', 'Am7', 'Fmaj7', 'G7'],
    mood: 'longing-cinematic',
    blurb: 'Spacious descending major-7th walk',
    heardIn: ['j-pop', 'fusion-ambient'],
  },
  {
    id: 'balada-rock-turn',
    name: 'Balada Rock',
    chords: ['Dm', 'Bb', 'F', 'C'],
    mood: 'longing-cinematic',
    blurb: 'Expressive power-ballad cadence',
    heardIn: ['rock-en-espanol', 'kizomba', 'reggaeton-dembow'],
  },
  {
    id: 'rock-ballad-climb',
    name: 'Ballad Climb',
    chords: ['Dm', 'Am', 'Bb', 'C'],
    mood: 'longing-cinematic',
    blurb: 'Rising natural minor progression',
    heardIn: ['chinese-rock'],
  },
  {
    id: 'slow-light',
    name: 'Slow Light',
    chords: ['Dm9', 'Bbmaj7', 'Fmaj7', 'Cadd9'],
    mood: 'longing-cinematic',
    blurb: 'Lush, unresolved floating pads',
    heardIn: ['fusion-ambient'],
  },

  // ---- Tense & Dramatic ------------------------------------------------
  {
    id: 'milonga-vamp',
    name: 'Milonga Vamp',
    chords: ['Am', 'Am', 'Dm', 'E7'],
    mood: 'tense-dramatic',
    origin: 'Tango',
    blurb: 'Tonic sustain with iv-V snap',
    heardIn: ['tango'],
  },
  {
    id: 'tango-descent',
    name: 'Tango Descent',
    chords: ['Am', 'E7/G#', 'Dm/F', 'E7'],
    mood: 'tense-dramatic',
    origin: 'Tango',
    blurb: 'Chromatic stepwise bass descent',
    heardIn: ['tango'],
  },
  {
    id: 'andalusian-cadence',
    name: 'Andalusian Cadence',
    chords: ['Am', 'G', 'F', 'E7'],
    mood: 'tense-dramatic',
    origin: 'Flamenco',
    blurb: 'Stepwise descent to Spanish dominant',
    heardIn: ['flamenco', 'cumbia', 'folclorico'],
  },
  {
    id: 'iron-turn',
    name: 'Iron Turn',
    chords: ['Em', 'Em', 'C', 'B7'],
    mood: 'tense-dramatic',
    blurb: 'Heavy minor tonic to raised dominant',
    heardIn: ['metal'],
  },
  {
    id: 'piano-tumbao-loop',
    name: 'Piano Tumbao Loop',
    chords: ['Cm7', 'Ab', 'Bb', 'Cm7'],
    mood: 'tense-dramatic',
    origin: 'Cuban Timba',
    blurb: 'i-VI-VII syncopated Cuban vamp',
    heardIn: ['timba'],
  },
  {
    id: 'montuno-cycle',
    name: 'Montuno Cycle',
    chords: ['Cm7', 'Fm7', 'G7', 'Cm7'],
    mood: 'tense-dramatic',
    origin: 'Timba / Salsa',
    blurb: 'Minor i-iv-V montuno turnaround',
    heardIn: ['timba', 'salsa'],
  },

  // ---- Floating & Modal --------------------------------------------------
  {
    id: 'suspended-drift',
    name: 'Suspended Drift',
    chords: ['Em9', 'Cmaj7', 'Gmaj7', 'Aadd9'],
    mood: 'floating-modal',
    blurb: 'Open add9 voicings without hard pull',
    heardIn: ['math-rock', 'fusion-ambient'],
  },
  {
    id: 'one-chord-vamp',
    name: 'One-Chord Vamp',
    chords: ['Am7', 'Am7', 'Am7', 'Am7'],
    mood: 'floating-modal',
    blurb: 'Hypnotic single-chord groove pad',
    heardIn: ['hip-hop', 'electronic', 'afrobeats'],
  },
  {
    id: 'modal-float',
    name: 'Modal Float',
    chords: ['Dm7', 'Ebmaj7', 'Dm7', 'Ebmaj7'],
    mood: 'floating-modal',
    origin: 'Modal Jazz',
    blurb: 'Half-step planing modal vamp',
    heardIn: ['jazz'],
  },
  {
    id: 'one-chord-pocket',
    name: 'One-Chord Pocket',
    chords: ['Dm9', 'Dm9', 'Dm9', 'Dm9'],
    mood: 'floating-modal',
    blurb: 'Deep funk single-chord groove',
    heardIn: ['funk'],
  },
  {
    id: 'trap-loop',
    name: 'Trap Loop',
    chords: ['Cm', 'Ab', 'Eb', 'Bb'],
    mood: 'floating-modal',
    blurb: 'Dark minor progression for 808s',
    heardIn: ['hip-hop'],
  },
  {
    id: 'ambient-pulse',
    name: 'Ambient Pulse',
    chords: ['Am7', 'Fmaj7', 'Am7', 'Fmaj7'],
    mood: 'floating-modal',
    blurb: 'Two-chord oscillating shimmer',
    heardIn: ['electronic', 'house-techno'],
  },
  {
    id: 'chicago-deep-vamp',
    name: 'Chicago Deep',
    chords: ['Am7', 'Am7', 'Fmaj7', 'G6'],
    mood: 'floating-modal',
    origin: 'House',
    blurb: 'Hypnotic deep house chord pad',
    heardIn: ['house-techno'],
  },
  {
    id: 'dub-minor-vamp',
    name: 'Dub Minor Vamp',
    chords: ['Am7', 'Am7', 'Dm7', 'Am7'],
    mood: 'floating-modal',
    origin: 'Roots Dub',
    blurb: 'Spacious minor bed for delay echo',
    heardIn: ['reggae-dub'],
  },
  {
    id: 'roots-minor-vamp',
    name: 'Roots Minor',
    chords: ['Am', 'Am', 'Dm', 'Am'],
    mood: 'floating-modal',
    origin: 'Roots Reggae',
    blurb: 'Hypnotic minor one-drop foundation',
    heardIn: ['reggae-dub', 'chinese-traditional'],
  },
  {
    id: 'folk-modal-turn',
    name: 'Folklórico Modal',
    chords: ['Am', 'G', 'Am', 'Em'],
    mood: 'floating-modal',
    origin: 'Chacarera',
    blurb: 'Open modal folk cycle',
    heardIn: ['folclorico'],
  },
  {
    id: 'chinese-pentatonic-drone',
    name: 'Pentatonic Drone',
    chords: ['Am', 'Am', 'Am', 'G'],
    mood: 'floating-modal',
    origin: 'Chinese Traditional',
    blurb: 'Open modal bed for Guzheng/Dizi',
    heardIn: ['chinese-traditional'],
  },

  {
    id: 'celtic-modal-d-major',
    name: 'Celtic D Modal',
    chords: ['D', 'C', 'G', 'D'],
    mood: 'floating-modal',
    origin: 'Irish / Celtic traditional modal accompaniment',
    blurb: 'D-centered modal cycle using tonic, flat-seventh color and open-fifth support; realized by the Celtic engine without mandatory functional cadence',
    heardIn: ['celtic-trad'],
  },
  {
    id: 'celtic-dorian-lilt',
    name: 'Dorian Lilt',
    chords: ['Am', 'G', 'C', 'Am'],
    mood: 'floating-modal',
    origin: 'Irish traditional modal practice',
    blurb: 'A Dorian-centered cycle that keeps the modal center stable while chord labels supply optional color',
    heardIn: ['celtic-trad'],
  },
  {
    id: 'celtic-d-modal-return',
    name: 'Drone Return',
    chords: ['D', 'G', 'D', 'C'],
    mood: 'floating-modal',
    origin: 'Celtic traditional accompaniment',
    blurb: 'Tonic/fifth-oriented movement with a broad return to the modal center',
    heardIn: ['celtic-trad'],
  },
  {
    id: 'celtic-e-dorian',
    name: 'E Dorian Set',
    chords: ['Em', 'D', 'G', 'Em'],
    mood: 'floating-modal',
    origin: 'Irish / Scottish traditional modal vocabulary',
    blurb: 'E-centered Dorian color suitable for reels, jigs and tune-set accompaniment',
    heardIn: ['celtic-trad'],
  },
  {
    id: 'celtic-slow-air',
    name: 'Slow Air Open Field',
    chords: ['Am', 'G', 'Am', 'Am'],
    mood: 'longing-cinematic',
    origin: 'Traditional Celtic air/song accompaniment',
    blurb: 'Long modal field with a stable tonic for breath-led melody and open-fifth realization',
    heardIn: ['celtic-trad'],
  },

  // ---- Earthy & Bluesy ---------------------------------------------------
  {
    id: 'blues-turnaround',
    name: 'Blues Turnaround',
    chords: ['A7', 'D7', 'A7', 'E7'],
    mood: 'earthy-bluesy',
    origin: 'Delta Blues',
    blurb: 'Classic dominant-seventh blues cycle',
    heardIn: ['blues', 'rock'],
  },
  {
    id: 'funk-vamp',
    name: 'Funk Vamp',
    chords: ['Em9', 'A7', 'Em9', 'A7'],
    mood: 'earthy-bluesy',
    blurb: 'Tight two-chord groove pocket',
    heardIn: ['funk'],
  },
  {
    id: 'quick-change',
    name: 'Quick Change',
    chords: ['A7', 'D7', 'D7', 'A7'],
    mood: 'earthy-bluesy',
    origin: 'Chicago Blues',
    blurb: 'Early shift to IV chord',
    heardIn: ['blues'],
  },

  // ---- Exotic & Modal Colors ---------------------------------------------
  {
    id: 'phrygian-turn',
    name: 'Phrygian Turn',
    chords: ['E7', 'F', 'E7', 'Am'],
    mood: 'exotic-borrowed',
    origin: 'Flamenco',
    blurb: 'Half-step modal oscillation',
    heardIn: ['flamenco'],
  },
  {
    id: 'tarraxo-hold',
    name: 'Tarraxo Hold',
    chords: ['Dm7', 'C', 'Bb', 'A7'],
    mood: 'exotic-borrowed',
    origin: 'Kizomba',
    blurb: 'Slow descending minor turnaround',
    heardIn: ['kizomba'],
  },
  {
    id: 'kizomba-slow-roll',
    name: 'Kizomba Roll',
    chords: ['Dm', 'Gm', 'A7', 'Dm'],
    mood: 'exotic-borrowed',
    origin: 'Kizomba',
    blurb: 'Sensual i-iv-V minor cycle',
    heardIn: ['kizomba'],
  },

  // ---- Playful & Bouncy ---------------------------------------------------
  {
    id: 'milonga-skip',
    name: 'Milonga Skip',
    chords: ['C', 'Am', 'Dm', 'G7'],
    mood: 'playful-bouncy',
    origin: 'Milonga',
    blurb: 'Bouncy major-key milonga turn',
    heardIn: ['tango'],
  },
  {
    id: 'rumba-bounce',
    name: 'Rumba Bounce',
    chords: ['Am', 'Dm', 'E7', 'Am'],
    mood: 'playful-bouncy',
    origin: 'Rumba Flamenca',
    blurb: 'Upbeat clapping minor rumba',
    heardIn: ['flamenco', 'cumbia', 'trova', 'japanese-traditional'],
  },
  {
    id: 'bachata-bounce',
    name: 'Bachata Bounce',
    chords: ['D', 'A', 'Bm', 'G'],
    mood: 'playful-bouncy',
    origin: 'Bachata',
    blurb: 'Bright major-order bachata turnaround',
    heardIn: ['bachata'],
  },
  {
    id: 'horn-stab-turn',
    name: 'Horn Stab Turn',
    chords: ['Em9', 'A7', 'Dm9', 'G13'],
    mood: 'playful-bouncy',
    blurb: 'Punchy extended funk chords',
    heardIn: ['funk'],
  },
  {
    id: 'honky-tonk-turn',
    name: 'Honky Tonk Turn',
    chords: ['G', 'Em', 'C', 'D7'],
    mood: 'playful-bouncy',
    origin: 'Country',
    blurb: 'Two-step I-vi-IV-V country shuffle',
    heardIn: ['country', 'ska'],
  },
  {
    id: 'comi-loop',
    name: 'Comi Loop',
    chords: ['Fmaj7', 'G7', 'Cmaj7', 'Am7'],
    mood: 'playful-bouncy',
    origin: 'J-Pop',
    blurb: 'Bright hands-in-the-air idol pop',
    heardIn: ['j-pop'],
  },

  // ---- Triumphant & Anthemic -----------------------------------------------
  {
    id: 'anthem-four',
    name: 'Anthem Four',
    chords: ['Em', 'C', 'G', 'D'],
    mood: 'triumphant-anthemic',
    blurb: 'Stadium chorus vi-IV-I-V progression',
    heardIn: ['rock'],
  },
  {
    id: 'shout-chorus',
    name: 'Shout Chorus',
    chords: ['Fmaj7', 'Bb7', 'Cmaj7', 'Cmaj7'],
    mood: 'triumphant-anthemic',
    origin: 'Swing',
    blurb: 'Brass-heavy big band landing',
    heardIn: ['swing'],
  },
  {
    id: 'skatalite-stomp',
    name: 'Ska 1-4-5 Stomp',
    chords: ['C', 'F', 'G', 'F'],
    mood: 'triumphant-anthemic',
    origin: 'Ska',
    blurb: 'Traditional Jamaican ska upbeat',
    heardIn: ['ska'],
  },
  {
    id: 'rocksteady-roll',
    name: 'Rocksteady Roll',
    chords: ['C', 'G', 'F', 'G'],
    mood: 'playful-bouncy',
    origin: 'Rocksteady / Reggae',
    blurb: 'Smooth rolling Jamaican skank cadence',
    heardIn: ['reggae-dub', 'ska'],
  },

  // ---- Mysterious & Eerie -----------------------------------------------
  {
    id: 'tritone-menace',
    name: 'Tritone Menace',
    chords: ['Em', 'Bb', 'Em', 'Bb'],
    mood: 'mysterious-eerie',
    origin: 'Heavy Metal',
    blurb: 'Heavy tritone oscillation',
    heardIn: ['metal'],
  },
  {
    id: 'boom-bap-loop',
    name: 'Boom-Bap Loop',
    chords: ['Cm', 'Cm', 'Fm', 'Gm'],
    mood: 'mysterious-eerie',
    origin: 'East Coast Hip-Hop',
    blurb: 'Dark minor sampled loop',
    heardIn: ['hip-hop'],
  },
  {
    id: 'minor-blues-turn',
    name: 'Minor Blues Turn',
    chords: ['Am7', 'Dm7', 'Am7', 'E7'],
    mood: 'mysterious-eerie',
    blurb: 'Brooding minor blues turnaround',
    heardIn: ['blues'],
  },
  {
    id: 'japanese-modal-vamp',
    name: 'Gagaku Vamp',
    chords: ['Dm', 'C', 'Bb', 'C'],
    mood: 'mysterious-eerie',
    origin: 'Japanese Traditional',
    blurb: 'Modal Japanese folk progression',
    heardIn: ['japanese-traditional'],
  },
  {
    id: 'miyako-bushi-cycle',
    name: 'Miyako-bushi',
    chords: ['Dm', 'Gm', 'Dm', 'A7'],
    mood: 'mysterious-eerie',
    origin: 'Japanese Traditional',
    blurb: 'Traditional Japanese minor cadence',
    heardIn: ['japanese-traditional'],
  },

  // ---- Aggressive & Driving -----------------------------------------------
  {
    id: 'punk-vuelta',
    name: 'Punk Vuelta',
    chords: ['E', 'G', 'A', 'E'],
    mood: 'aggressive-driving',
    blurb: 'Raw power chord drive',
    heardIn: ['rock-en-espanol', 'chinese-rock', 'metal'],
  },
  {
    id: 'drop-gallop',
    name: 'Drop Gallop',
    chords: ['Em', 'D', 'C', 'B'],
    mood: 'aggressive-driving',
    origin: 'Heavy Metal',
    blurb: 'Stepwise minor metal gallop',
    heardIn: ['metal'],
  },
  {
    id: 'build-drop',
    name: 'Build & Drop',
    chords: ['Fm', 'Ab', 'Eb', 'Bb'],
    mood: 'aggressive-driving',
    blurb: 'Electronic drop progression',
    heardIn: ['electronic'],
  },

  // ---- Romantic & Sensual -----------------------------------------------
  {
    id: 'bachata-turn',
    name: 'Bachata Turn',
    chords: ['Bm', 'G', 'D', 'A'],
    mood: 'romantic-sensual',
    origin: 'Bachata',
    blurb: 'Classic romantic bachata circuit',
    heardIn: ['bachata', 'reggaeton-dembow'],
  },
  {
    id: 'zouk-sway',
    name: 'Zouk Sway',
    chords: ['Bbmaj7', 'Gm7', 'Cm7', 'F7'],
    mood: 'romantic-sensual',
    origin: 'Zouk',
    blurb: 'Lush, slow Caribbean sway',
    heardIn: ['zouk'],
  },

  // ---- Festive & Celebratory -----------------------------------------------
  {
    id: 'coro-call',
    name: 'Coro Call',
    chords: ['Fmaj7', 'Bbmaj7', 'Gm7', 'C7'],
    mood: 'festive-celebratory',
    origin: 'Salsa / Zouk',
    blurb: 'Bright call-and-response loop',
    heardIn: ['salsa', 'zouk', 'timba'],
  },
  {
    id: 'highlife-lift',
    name: 'Highlife Lift',
    chords: ['Cmaj7', 'G6', 'Am7', 'Fmaj7'],
    mood: 'festive-celebratory',
    origin: 'Highlife / Afrobeats',
    blurb: 'Joyful West African guitar cadence',
    heardIn: ['afrobeats'],
  },
  {
    id: 'choro-turn',
    name: 'Choro Minor Turn',
    chords: ['Am7', 'Bm7b5', 'E7b9', 'Am7'],
    mood: 'festive-celebratory',
    origin: 'Choro / Samba',
    blurb: 'Sophisticated Brazilian minor cycle',
    heardIn: ['samba-bossa'],
  },

  // ---- Quirky & Angular -----------------------------------------------
  {
    id: 'odd-meter-climb',
    name: 'Odd Meter Climb',
    chords: ['Cmaj7', 'Dadd9', 'Em9', 'Fmaj7'],
    mood: 'quirky-angular',
    blurb: 'Ascending add9 modal colors',
    heardIn: ['math-rock'],
  },
  {
    id: 'tapping-loop',
    name: 'Tapping Loop',
    chords: ['Emadd9', 'Cadd9', 'Gadd9', 'Dadd9'],
    mood: 'quirky-angular',
    blurb: 'Open suspended tapping chords',
    heardIn: ['math-rock'],
  },

  // ---- Chaotic -----------------------------------------------------------
  {
    id: 'chaos-turn',
    name: 'Chaos Turn',
    chords: ['Cmaj7', 'Db7', 'Am7', 'F#7'],
    mood: 'chaotic',
    blurb: 'Abrupt chromatic pivots with a restless center',
    heardIn: ['math-rock', 'fusion-ambient'],
  },
  {
    id: 'sideways-spiral',
    name: 'Sideways Spiral',
    chords: ['Em9', 'Fmaj7', 'Bb7', 'E7'],
    mood: 'chaotic',
    blurb: 'Unexpected harmonic side-steps that keep moving',
    heardIn: ['jazz', 'math-rock'],
  },
  {
    id: 'fractured-cadence',
    name: 'Fractured Cadence',
    chords: ['Dm', 'Ab', 'G7', 'C#dim7'],
    mood: 'chaotic',
    blurb: 'Dark borrowed chords and a deliberately broken cadence',
    heardIn: ['electronic', 'rock'],
  },
];

export function chordsForMood(mood: ChordMood): ChordOption[] {
  return CHORD_PALETTE.filter(c => c.mood === mood);
}

/** Palette entries commonly heard in a given genre — for surfacing suggestions, never for hiding others. */
export function suggestedPaletteForGenre(genreId: string): ChordOption[] {
  return CHORD_PALETTE.filter(c => c.heardIn?.includes(genreId));
}
