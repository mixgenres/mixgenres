export interface SongTemplate {
  id: string;
  name: string;
  genreId: string;
  bpm: number;
  key: string;
  scale: string;
  instruments: string[];
}

export const starterSongs: SongTemplate[] = [
  {
    id: "tango_starter",
    name: "Noche de Buenos Aires",
    genreId: "tango",
    bpm: 118,
    key: "D",
    scale: "minor", // Essential for dramatic Tango
    instruments: ["bandoneon", "violin", "piano", "bass"]
  },
  {
    id: "lofi_starter",
    name: "Midnight Coffee",
    genreId: "lofi_hiphop",
    bpm: 78,
    key: "Eb",
    scale: "major",
    instruments: ["piano", "bass", "drums", "vinyl_foley"]
  },
  {
    id: "synthwave_starter",
    name: "Neon Overdrive",
    genreId: "synthwave",
    bpm: 115,
    key: "F",
    scale: "minor",
    instruments: ["lead", "arpeggio", "bass", "drums"]
  },
  {
    id: "flamenco_starter",
    name: "Fuego en las Palmas",
    genreId: "flamenco",
    bpm: 160,
    key: "A",
    scale: "phrygian", // The definitive Spanish Flamenco mode
    instruments: ["guitar", "palmas", "cajon"]
  },
  {
    id: "jazz_starter",
    name: "Midnight at the Vanguard",
    genreId: "jazz",
    bpm: 145,
    key: "Bb",
    scale: "major",
    instruments: ["piano", "bass", "drums", "horn"]
  },
  {
    id: "reggae_starter",
    name: "Kingston Echoes",
    genreId: "reggae",
    bpm: 75,
    key: "C",
    scale: "minor",
    instruments: ["keys", "guitar", "bass", "drums"]
  },
  {
    id: "house_starter",
    name: "Warehouse 4AM",
    genreId: "house",
    bpm: 122,
    key: "G",
    scale: "minor", // Minor keys dominate deep house
    instruments: ["keys", "bass", "drums"]
  },
  {
    id: "metal_starter",
    name: "Absolute Zero",
    genreId: "metal",
    bpm: 135,
    key: "E",
    scale: "phrygian", // Dark, aggressive and dissonant
    instruments: ["guitar", "bass", "drums"]
  },
  {
    id: "afrobeat_starter",
    name: "Lagos Groove",
    genreId: "afrobeat",
    bpm: 115,
    key: "F",
    scale: "dorian", // Dorian mode for that classic Fela sound
    instruments: ["guitar", "horn", "bass", "drums"]
  }
];
