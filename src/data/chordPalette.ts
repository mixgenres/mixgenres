/**
 * Chord palette — curated musical chord progressions organized by character and feel.
 * All chord symbols are strictly validated for theory engine compatibility.
 */

export type ChordMood = 'warm-resolved' | 'bittersweet' | 'smooth-jazzy' | 'floating-modal' | 'tense-dramatic';

export interface ChordOption {
  id: string;
  name: string;
  chords: string[];
  mood: ChordMood;
  blurb: string;
  heardIn?: string[];
  origin?: string;
}

export const CHORD_MOOD_ORDER_RAW: ChordMood[] = ['warm-resolved', 'bittersweet', 'smooth-jazzy', 'floating-modal', 'tense-dramatic'];

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
  { id: 'warm-home', name: 'Warm', chords: ['C', 'G', 'Am', 'F'], mood: 'warm-resolved', blurb: 'Stable diatonic resolution.' },
  { id: 'bittersweet-turn', name: 'Bittersweet', chords: ['Am', 'F', 'C', 'G'], mood: 'bittersweet', blurb: 'Minor color with open resolution.' },
  { id: 'jazzy-motion', name: 'Jazzy', chords: ['Dm7', 'G7', 'Cmaj7', 'A7'], mood: 'smooth-jazzy', blurb: 'Functional seventh-chord movement.' },
  { id: 'modal-open', name: 'Modal', chords: ['Dm', 'C', 'Bb', 'C'], mood: 'floating-modal', blurb: 'Open modal loop with limited functional pull.' },
  { id: 'dramatic-minor', name: 'Dramatic', chords: ['Am', 'G', 'F', 'E7'], mood: 'tense-dramatic', blurb: 'Descending minor tension into dominant resolution.' },
];

export function chordsForMood(mood: ChordMood): ChordOption[] {
  return CHORD_PALETTE.filter(c => c.mood === mood);
}

/** Palette entries commonly heard in a given genre — for surfacing suggestions, never for hiding others. */
export function suggestedPaletteForGenre(genreId: string): ChordOption[] {
  return CHORD_PALETTE.filter(c => c.heardIn?.includes(genreId));
}
