export interface SongTemplate {
  id: string;
  name: string;
  genreId?: string;
  bpm: number;
  key: string;
  scale: string;
  instruments: string[];
}

export const starterSongs: SongTemplate[] = [
  { id: "tango_starter", name: "Noche de Buenos Aires", genreId: "tango", bpm: 118, key: "D", scale: "minor", instruments: ["bandoneon", "violin", "piano", "bass"] },
  { id: "lofi_starter", name: "Midnight Coffee", genreId: "lofi_hiphop", bpm: 78, key: "Eb", scale: "major", instruments: ["piano", "bass", "drums", "vinyl_foley"] },
  { id: "synthwave_starter", name: "Neon Overdrive", genreId: "synthwave", bpm: 115, key: "F", scale: "minor", instruments: ["lead", "arpeggio", "bass", "drums"] },
  { id: "flamenco_starter", name: "Fuego en las Palmas", genreId: "flamenco", bpm: 160, key: "A", scale: "phrygian", instruments: ["guitar", "palmas", "cajon"] },
  { id: "funk_starter", name: "Mothership Groove", genreId: "funk", bpm: 105, key: "E", scale: "dorian", instruments: ["guitar", "horn", "bass", "drums"] },
  { id: "celtic_starter", name: "The Rolling Wave", genreId: "celtic", bpm: 115, key: "D", scale: "mixolydian", instruments: ["fiddle", "flute", "guitar", "drums"] },
  { id: "country_starter", name: "Whiskey and Dust", genreId: "country", bpm: 110, key: "G", scale: "major", instruments: ["guitar", "pedal_steel", "bass", "drums"] },
  { id: "kpop_starter", name: "Neon Lights Drop", genreId: "kpop", bpm: 130, key: "Db", scale: "minor", instruments: ["synth", "arp", "bass", "drums"] },
  { id: "jazz_starter", name: "Midnight at the Vanguard", genreId: "jazz", bpm: 145, key: "Bb", scale: "major", instruments: ["piano", "bass", "drums", "horn"] },
  { id: "reggae_starter", name: "Kingston Echoes", genreId: "reggae", bpm: 75, key: "C", scale: "minor", instruments: ["keys", "guitar", "bass", "drums"] },
  { id: "house_starter", name: "Warehouse 4AM", genreId: "house", bpm: 122, key: "G", scale: "minor", instruments: ["keys", "bass", "drums"] },
  { id: "metal_starter", name: "Absolute Zero", genreId: "metal", bpm: 135, key: "E", scale: "phrygian", instruments: ["guitar", "bass", "drums"] },
  { id: "afrobeat_starter", name: "Lagos Groove", genreId: "afrobeat", bpm: 115, key: "F", scale: "dorian", instruments: ["guitar", "horn", "bass", "drums"] },
  { id: "neosoul_starter", name: "Brown Sugar Pocket", genreId: "neo_soul", bpm: 72, key: "Eb", scale: "minor", instruments: ["keys", "bass", "drums", "lead"] },
  { id: "cyberpunk_starter", name: "Night City Override", genreId: "cyberpunk", bpm: 100, key: "F", scale: "phrygian", instruments: ["bass", "drums", "arp", "pad"] },
  { id: "bossa_starter", name: "Corcovado Breeze", genreId: "bossa_nova", bpm: 135, key: "C", scale: "major", instruments: ["guitar", "bass", "drums", "flute"] }
];
