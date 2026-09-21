// A broad instrument catalogue. Instruments are deliberately decoupled from
// patterns: any instrument can carry any pattern. This file only describes how
// an instrument *sounds* and roughly what register it lives in.

export type InstrumentFamily =
  | 'bellows-and-keys'
  | 'plucked'
  | 'bowed'
  | 'winds'
  | 'brass'
  | 'voice'
  | 'hand-drums'
  | 'metal-and-wood'
  | 'kit'
  | 'electronic';

export interface DrumVoice {
  /** soft / ghosted hits */
  low: number;
  /** normal hits */
  mid: number;
  /** accented hits */
  high: number;
}

export interface SoundfontPresetRef {
  soundfontId: string;
  bankMSB?: number;
  bankLSB?: number;
  program: number;
}

export interface InstrumentDef {
  id: string;
  name: string;
  family: InstrumentFamily;
  /** GM program for pitched instruments / fallback patch. */
  program?: number;
  /** Optional exact preset supplied by a preloaded secondary soundfont. */
  soundfont?: SoundfontPresetRef;
  /** GM percussion keys, chosen by accent strength */
  drum?: DrumVoice;
  /** a full kit spreads a pattern across kick / snare / hats by step position */
  kit?: boolean;
  /** semitone transposition applied to the written register */
  octave?: number;
  /** how the instrument prefers to state harmony */
  voicing: 'single' | 'chord' | 'bass' | 'unpitched';
  /** short plain-language hint shown in the picker */
  note?: string;
}

/**
 * Bundled SF2 registry. The primary font remains first; secondary ethnic
 * fonts supply missing presets and explicit culturally specific timbres.
 */
export type SoundfontDeviceProfile = 'desktop' | 'tablet' | 'mobile';

export interface SoundfontManifestEntry {
  id: string;
  files: Record<SoundfontDeviceProfile, string>;
  bankOffset: number;
  primary?: boolean;
  /** Maximum useful byte size for one cache object; all bundled banks stay below 20 MB. */
  maxBytes: number;
}

export const SOUNDFONT_MANIFEST: SoundfontManifestEntry[] = [
  { id: 'main', files: { desktop: 'desktop/generaluser_gs_core.sf3', tablet: 'tablet/generaluser_gs_core.sf3', mobile: 'mobile/generaluser_gs_core.sf3' }, bankOffset: 0, primary: true, maxBytes: 20_000_000 },
  { id: 'generaluser-misc', files: { desktop: 'desktop/generaluser_gs_misc.sf3', tablet: 'tablet/generaluser_gs_misc.sf3', mobile: 'mobile/generaluser_gs_misc.sf3' }, bankOffset: 0, maxBytes: 20_000_000 },
  { id: 'celtix', files: { desktop: 'desktop/celtix.sf3', tablet: 'tablet/celtix.sf3', mobile: 'mobile/celtix.sf3' }, bankOffset: 47, maxBytes: 20_000_000 },
  { id: 'bagpipes', files: { desktop: 'desktop/bagpipes.sf3', tablet: 'tablet/bagpipes.sf3', mobile: 'mobile/bagpipes.sf3' }, bankOffset: 117, maxBytes: 20_000_000 },
  { id: 'erhu', files: { desktop: 'desktop/erhu.sf3', tablet: 'tablet/erhu.sf3', mobile: 'mobile/erhu.sf3' }, bankOffset: 110, maxBytes: 20_000_000 },
  { id: 'shakuhachi', files: { desktop: 'desktop/shakuhachi.sf3', tablet: 'tablet/shakuhachi.sf3', mobile: 'mobile/shakuhachi.sf3' }, bankOffset: 108, maxBytes: 20_000_000 },
  { id: 'guzheng', files: { desktop: 'desktop/guzheng.sf3', tablet: 'tablet/guzheng.sf3', mobile: 'mobile/guzheng.sf3' }, bankOffset: 109, maxBytes: 20_000_000 },
  { id: 'pipa', files: { desktop: 'desktop/pipa.sf3', tablet: 'tablet/pipa.sf3', mobile: 'mobile/pipa.sf3' }, bankOffset: 95, maxBytes: 20_000_000 },
  { id: 'bandoneon', files: { desktop: 'desktop/bandoneon.sf3', tablet: 'tablet/bandoneon.sf3', mobile: 'mobile/bandoneon.sf3' }, bankOffset: 111, maxBytes: 20_000_000 },
  { id: 'percussion', files: { desktop: 'desktop/percussion.sf3', tablet: 'tablet/percussion.sf3', mobile: 'mobile/percussion.sf3' }, bankOffset: 0, maxBytes: 20_000_000 },
  { id: 'spanish-guitar', files: { desktop: 'desktop/spanish_guitar.sf3', tablet: 'tablet/spanish_guitar.sf3', mobile: 'mobile/spanish_guitar.sf3' }, bankOffset: 115, maxBytes: 20_000_000 },
  { id: 'bachata-guitar', files: { desktop: 'desktop/bachata_guitar.sf3', tablet: 'tablet/bachata_guitar.sf3', mobile: 'mobile/bachata_guitar.sf3' }, bankOffset: 114, maxBytes: 20_000_000 },
  { id: 'bachata-guitar-misc', files: { desktop: 'desktop/bachata_guitar_misc.sf3', tablet: 'tablet/bachata_guitar_misc.sf3', mobile: 'mobile/bachata_guitar_misc.sf3' }, bankOffset: 114, maxBytes: 20_000_000 },
  { id: 'salsa-trumpet', files: { desktop: 'desktop/salsa_trumpet.sf3', tablet: 'tablet/salsa_trumpet.sf3', mobile: 'mobile/salsa_trumpet.sf3' }, bankOffset: 112, maxBytes: 20_000_000 },
  { id: 'salsa-brass', files: { desktop: 'desktop/salsa_brass.sf3', tablet: 'tablet/salsa_brass.sf3', mobile: 'mobile/salsa_brass.sf3' }, bankOffset: 113, maxBytes: 20_000_000 },
  { id: 'salsa-brass-misc', files: { desktop: 'desktop/salsa_brass_misc.sf3', tablet: 'tablet/salsa_brass_misc.sf3', mobile: 'mobile/salsa_brass_misc.sf3' }, bankOffset: 113, maxBytes: 20_000_000 },
];

export const INSTRUMENT_CATALOG: InstrumentDef[] = [
  // — bellows & keys —
  { id: 'bandoneon', name: 'Bandoneon', family: 'bellows-and-keys', program: 23, soundfont: { soundfontId: 'bandoneon', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'chord', note: 'Dedicated sampled bandoneón; program 0 in the supplied MI BANDONEON bank' },
  { id: 'accordion', name: 'Accordion', family: 'bellows-and-keys', program: 21, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 21 }, voicing: 'chord' },
  { id: 'piano', name: 'Piano', family: 'bellows-and-keys', program: 0, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'chord' },
  { id: 'fm-ep', name: 'FM electric piano', family: 'bellows-and-keys', program: 5, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 5 }, voicing: 'chord' },
  { id: 'rhodes', name: 'Rhodes', family: 'bellows-and-keys', program: 4, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 4 }, voicing: 'chord', note: 'Soft attack, long tail' },
  { id: 'clavinet', name: 'Clavinet', family: 'bellows-and-keys', program: 7, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 7 }, voicing: 'chord' },
  { id: 'organ', name: 'Tonewheel organ', family: 'bellows-and-keys', program: 16, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 16 }, voicing: 'chord' },
  { id: 'rock-organ', name: 'Rock organ', family: 'bellows-and-keys', program: 18, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 18 }, voicing: 'chord' },
  { id: 'harpsichord', name: 'Harpsichord', family: 'bellows-and-keys', program: 6, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 6 }, voicing: 'chord' },
  { id: 'celeste', name: 'Celeste', family: 'metal-and-wood', program: 8, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 8 }, voicing: 'chord' },
  { id: 'glockenspiel', name: 'Glockenspiel', family: 'metal-and-wood', program: 9, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 9 }, voicing: 'single' },
  { id: 'crystal', name: 'Crystal', family: 'electronic', program: 98, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 98 }, voicing: 'single', note: 'Bright bell-like color' },
  { id: 'vibraphone', name: 'Vibraphone', family: 'metal-and-wood', program: 11, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 11 }, voicing: 'chord', note: 'Useful for jazz, city pop and soft color' },
  { id: 'marimba', name: 'Marimba', family: 'metal-and-wood', program: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 12 }, voicing: 'single' },
  { id: 'music-box', name: 'Music box', family: 'metal-and-wood', program: 10, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 10 }, voicing: 'single' },
  { id: 'xylophone', name: 'Xylophone', family: 'metal-and-wood', program: 13, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 13 }, voicing: 'single' },
  { id: 'tubular-bells', name: 'Tubular bells', family: 'metal-and-wood', program: 14, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 14 }, voicing: 'single' },
  { id: 'dulcimer', name: 'Dulcimer', family: 'metal-and-wood', program: 15, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 15 }, voicing: 'single' },

  // — plucked —
  { id: 'guitar', name: 'Nylon guitar', family: 'plucked', program: 24, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 24 }, voicing: 'chord' },
  { id: 'nylon-guitar', name: 'Nylon guitar (explicit)', family: 'plucked', program: 24, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 24 }, voicing: 'chord' },
  { id: 'acoustic-guitar', name: 'Acoustic guitar', family: 'plucked', program: 25, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 25 }, voicing: 'chord' },
  { id: 'steel-guitar', name: 'Steel-string guitar', family: 'plucked', program: 25, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 25 }, voicing: 'chord' },
  { id: 'electric-guitar', name: 'Clean electric guitar', family: 'plucked', program: 27, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 27 }, voicing: 'chord' },
  { id: 'jazz-guitar', name: 'Jazz guitar', family: 'plucked', program: 26, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 26 }, voicing: 'chord' },
  { id: 'distortion-guitar', name: 'Distortion guitar', family: 'plucked', program: 30, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 30 }, voicing: 'chord' },
  { id: 'muted-guitar', name: 'Muted guitar', family: 'plucked', program: 28, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 28 }, voicing: 'chord' },
  { id: 'guitar-harmonics', name: 'Guitar harmonics', family: 'plucked', program: 31, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 31 }, voicing: 'single' },
  { id: 'requinto', name: 'Requinto', family: 'plucked', program: 25, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 25 }, voicing: 'single', note: 'High-register lead guitar color' },
  { id: 'overdrive-guitar', name: 'Overdriven guitar', family: 'plucked', program: 29, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 29 }, voicing: 'chord' },
  { id: 'tres', name: 'Tres', family: 'plucked', program: 25, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 25 }, voicing: 'chord', note: 'Doubled courses, bright' },
  { id: 'cavaquinho', name: 'Cavaquinho', family: 'plucked', program: 24, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 24 }, voicing: 'chord' },
  { id: 'charango', name: 'Charango', family: 'plucked', program: 24, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 24 }, voicing: 'chord' },
  { id: 'harp', name: 'Harp', family: 'plucked', program: 46, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 46 }, voicing: 'chord' },
  { id: 'celtic-harp', name: 'Celtic harp', family: 'plucked', program: 46, voicing: 'chord', soundfont: { soundfontId: 'celtix', bankMSB: 64, bankLSB: 0, program: 46 }, note: 'Celtic harp from the celtix secondary font' },
  { id: 'concertina', name: 'Concertina', family: 'bellows-and-keys', program: 21, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 21 }, voicing: 'chord', note: 'Free-reed box; primary accordion timbre' },
  { id: 'guitarron', name: 'Guitarron', family: 'plucked', program: 32, octave: -12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 32 }, voicing: 'bass', note: 'Large folk guitar-family bass' },
  { id: 'mandolin', name: 'Mandolin', family: 'plucked', program: 25, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 25 }, voicing: 'single', note: 'Bright tremolo/plucked folk color' },
  { id: 'banjo', name: 'Banjo', family: 'plucked', program: 105, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 105 }, voicing: 'chord', note: 'Bluegrass / country drive' },
  { id: 'sitar', name: 'Sitar', family: 'plucked', program: 104, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 104 }, voicing: 'single', note: 'Standard Sitar timbre (GM Program 104)' },
  { id: 'shamisen', name: 'Shamisen', family: 'plucked', program: 106, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 106 }, voicing: 'single', note: 'Japanese three-string color' },
  { id: 'shō', name: 'Sho', family: 'bellows-and-keys', program: 16, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 16 }, voicing: 'chord', note: 'Sustained Japanese reed-organ cluster' },
  { id: 'guqin', name: 'Guqin', family: 'plucked', program: 24, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 24 }, voicing: 'single', note: 'Plucked Chinese zither' },
  { id: 'pipa', name: 'Pipa', family: 'plucked', program: 105, octave: 12, voicing: 'single', soundfont: { soundfontId: 'pipa', bankMSB: 32, bankLSB: 0, program: 105 }, note: 'Dedicated pipa secondary font' },
  { id: 'guzheng', name: 'Guzheng', family: 'plucked', program: 107, voicing: 'single', soundfont: { soundfontId: 'guzheng', bankMSB: 1, bankLSB: 0, program: 107 }, note: 'Dedicated guzheng secondary font' },
  { id: 'jarana', name: 'Jarana', family: 'plucked', program: 24, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 24 }, voicing: 'chord', note: 'Mexican folk guitar-family strum' },
  { id: 'koto', name: 'Koto', family: 'plucked', program: 107, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 107 }, voicing: 'single', note: 'Standard Koto timbre (GM Program 107)' },
  { id: 'kalimba', name: 'Kalimba', family: 'plucked', program: 108, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 108 }, voicing: 'single', note: 'African thumb-piano color' },
  { id: 'bass', name: 'Electric bass', family: 'plucked', program: 33, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 33 }, voicing: 'bass' },
  { id: 'upright-bass', name: 'Upright bass', family: 'plucked', program: 32, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 32 }, voicing: 'bass', note: 'Pizzicato, woody decay' },
  { id: 'slap-bass', name: 'Slap bass', family: 'plucked', program: 36, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 36 }, voicing: 'bass' },
  { id: 'acoustic-bass', name: 'Acoustic bass', family: 'plucked', program: 32, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 32 }, voicing: 'bass' },
  { id: 'pick-bass', name: 'Pick bass', family: 'plucked', program: 34, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 34 }, voicing: 'bass' },
  { id: 'fretless-bass', name: 'Fretless bass', family: 'plucked', program: 35, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 35 }, voicing: 'bass' },
  { id: 'sub-bass', name: 'Sub bass', family: 'electronic', program: 38, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 38 }, voicing: 'bass', note: 'Felt more than heard' },
  { id: 'synth', name: 'Synth', family: 'electronic', program: 81, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 81 }, voicing: 'single', note: 'Lead synth voice' },

  // — bowed —
  { id: 'violin', name: 'Violin', family: 'bowed', program: 40, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 40 }, voicing: 'single' },
  { id: 'viola', name: 'Viola', family: 'bowed', program: 41, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 41 }, voicing: 'single' },
  { id: 'cello', name: 'Cello', family: 'bowed', program: 42, octave: -12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 42 }, voicing: 'single' },
  { id: 'strings', name: 'Fast string ensemble', family: 'bowed', program: 48, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 48 }, voicing: 'chord' },
  { id: 'slow-strings', name: 'Slow string ensemble', family: 'bowed', program: 49, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 49 }, voicing: 'chord' },
  { id: 'tremolo-strings', name: 'Tremolo strings', family: 'bowed', program: 44, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 44 }, voicing: 'chord' },
  { id: 'orchestral-harp', name: 'Orchestral harp', family: 'plucked', program: 46, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 46 }, voicing: 'chord' },
  { id: 'pizz-strings', name: 'Pizzicato strings', family: 'bowed', program: 45, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 45 }, voicing: 'chord' },
  { id: 'fiddle', name: 'Fiddle', family: 'bowed', program: 110, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 110 }, voicing: 'single', note: 'Fiddle for folk and country' },
  { id: 'erhu', name: 'Erhu', family: 'bowed', program: 110, octave: 12, voicing: 'single', soundfont: { soundfontId: 'erhu', bankMSB: 8, bankLSB: 0, program: 110 }, note: 'Dedicated erhu secondary font' },
  { id: 'jinghu', name: 'Jinghu', family: 'bowed', program: 40, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 40 }, voicing: 'single', note: 'High Chinese opera bowed-string' },

  // — winds —
  { id: 'flute', name: 'Flute', family: 'winds', program: 73, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 73 }, voicing: 'single' },
  { id: 'tin-whistle', name: 'Tin whistle', family: 'winds', program: 78, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 78 }, voicing: 'single', note: 'Whistle register with Celtic ornament rules' },
  { id: 'low-whistle', name: 'Low whistle', family: 'winds', program: 78, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 78 }, voicing: 'single', note: 'Low-register whistle voice' },
  { id: 'bagpipes', name: 'Highland bagpipes', family: 'winds', program: 109, voicing: 'single', soundfont: { soundfontId: 'bagpipes', bankMSB: 0, bankLSB: 0, program: 109 }, note: 'Dedicated bagpipes secondary font' },
  { id: 'uilleann-pipes', name: 'Uilleann pipes', family: 'winds', program: 109, voicing: 'single', soundfont: { soundfontId: 'celtix', bankMSB: 8, bankLSB: 0, program: 109 }, note: 'Celtix Biniou coz preset; Irish phrase rules remain distinct' },
  { id: 'clarinet', name: 'Clarinet', family: 'winds', program: 71, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 71 }, voicing: 'single' },
  { id: 'quena', name: 'Quena', family: 'winds', program: 75, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 75 }, voicing: 'single' },
  { id: 'harmonica', name: 'Harmonica', family: 'winds', program: 22, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 22 }, voicing: 'single' },
  { id: 'soprano-sax', name: 'Soprano sax', family: 'winds', program: 64, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 64 }, voicing: 'single' },
  { id: 'alto-sax', name: 'Alto sax', family: 'winds', program: 65, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 65 }, voicing: 'single' },
  { id: 'tenor-sax', name: 'Tenor sax', family: 'winds', program: 66, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 66 }, voicing: 'single' },
  { id: 'bari-sax', name: 'Baritone sax', family: 'winds', program: 67, octave: -12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 67 }, voicing: 'single' },
  { id: 'oboe', name: 'Oboe', family: 'winds', program: 68, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 68 }, voicing: 'single' },
  { id: 'bassoon', name: 'Bassoon', family: 'winds', program: 70, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 70 }, voicing: 'single' },
  { id: 'piccolo', name: 'Piccolo', family: 'winds', program: 72, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 72 }, voicing: 'single' },
  { id: 'pan-flute', name: 'Pan flute', family: 'winds', program: 75, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 75 }, voicing: 'single' },
  { id: 'shakuhachi', name: 'Shakuhachi', family: 'winds', program: 77, octave: 12, voicing: 'single', soundfont: { soundfontId: 'shakuhachi', bankMSB: 0, bankLSB: 0, program: 77 }, note: 'Dedicated shakuhachi secondary font' },
  { id: 'xiao', name: 'Xiao', family: 'winds', program: 75, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 75 }, voicing: 'single', note: 'Soft Chinese end-blown flute' },
  { id: 'dizi', name: 'Dizi', family: 'winds', program: 73, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 73 }, voicing: 'single', note: 'Bright Chinese transverse flute' },
  { id: 'ryuteki', name: 'Ryuteki', family: 'winds', program: 73, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 73 }, voicing: 'single', note: 'Gagaku flute' },
  { id: 'hichiriki', name: 'Hichiriki', family: 'winds', program: 68, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 68 }, voicing: 'single', note: 'Gagaku double-reed' },
  { id: 'english-horn', name: 'English horn', family: 'winds', program: 69, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 69 }, voicing: 'single' },
  { id: 'recorder', name: 'Recorder', family: 'winds', program: 74, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 74 }, voicing: 'single' },
  { id: 'ocarina', name: 'Ocarina', family: 'winds', program: 79, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 79 }, voicing: 'single' },

  // — brass —
  { id: 'trumpet', name: 'Trumpet', family: 'brass', program: 56, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 56 }, voicing: 'single' },
  { id: 'muted-trumpet', name: 'Muted trumpet', family: 'brass', program: 59, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 59 }, voicing: 'single' },
  { id: 'trombone', name: 'Trombone', family: 'brass', program: 57, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 57 }, voicing: 'single' },
  { id: 'horn-section', name: 'Horn section', family: 'brass', program: 61, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 61 }, voicing: 'chord', note: 'Stabs and block hits' },
  { id: 'brass', name: 'Brass section', family: 'brass', program: 61, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 61 }, voicing: 'chord', note: 'Generic brass-section fallback' },
  { id: 'french-horn', name: 'French horns', family: 'brass', program: 60, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 60 }, voicing: 'single' },
  { id: 'tuba', name: 'Tuba', family: 'brass', program: 58, octave: -12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 58 }, voicing: 'single' },
  { id: 'synth-brass', name: 'Synth brass', family: 'electronic', program: 62, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 62 }, voicing: 'chord' },

  // — voice —
  { id: 'voice', name: 'Synth voice', family: 'voice', program: 54, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 54 }, voicing: 'single', note: 'Synth voice tone' },
  { id: 'choir', name: 'Choir', family: 'voice', program: 52, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 52 }, voicing: 'chord' },
  { id: 'backing-vocals', name: 'Backing vocals', family: 'voice', program: 53, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 53 }, voicing: 'chord', note: 'Choir vocal texture' },

  // — hand drums —
  { id: 'congas', name: 'Congas', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Accents open the tone' },
  { id: 'bongos', name: 'Bongos', family: 'hand-drums', drum: { low: 61, mid: 61, high: 60 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'bongo', name: 'Bongo', family: 'hand-drums', drum: { low: 61, mid: 61, high: 60 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'zabumba', name: 'Zabumba', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Brazilian folk bass drum' },
  { id: 'bombo', name: 'Bombo', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Generic Argentine folk bombo' },
  { id: 'bata', name: 'Batá', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Afro-Cuban double-headed drum color' },
  { id: 'batá', name: 'Batá (accented ID)', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Afro-Cuban double-headed drum color' },
  { id: 'cajon', name: 'Cajon', family: 'hand-drums', drum: { low: 36, mid: 38, high: 40 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'timbales', name: 'Timbales', family: 'hand-drums', drum: { low: 66, mid: 65, high: 65 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'surdo', name: 'Surdo', family: 'hand-drums', drum: { low: 41, mid: 41, high: 43 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'pandeiro', name: 'Pandeiro', family: 'hand-drums', drum: { low: 69, mid: 54, high: 54 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'bodhran', name: 'Bodhrán', family: 'hand-drums', drum: { low: 36, mid: 38, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Frame-drum role using the percussion engine' },
  { id: 'bones', name: 'Bones', family: 'metal-and-wood', drum: { low: 76, mid: 77, high: 78 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Traditional rhythmic articulation' },
  { id: 'tamborim', name: 'Tamborim', family: 'hand-drums', drum: { low: 69, mid: 69, high: 54 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'High Brazilian drum punctuation' },
  { id: 'darbuka', name: 'Darbuka', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'tabla', name: 'Tabla', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Paired tuned hand drums' },
  { id: 'log-drum', name: 'Log drum', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Deep rhythmic log-drum color' },
  { id: 'cumbia-drum', name: 'Cumbia drum', family: 'hand-drums', drum: { low: 36, mid: 38, high: 40 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Hand-drum for cumbia tambor' },
  { id: 'bombo-andino', name: 'Bombo andino', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Andean folk drum' },
  { id: 'vihuela', name: 'Vihuela', family: 'plucked', program: 24, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 24 }, voicing: 'chord', note: 'Mexican son guitar-family' },

  { id: 'tambora', name: 'Tambora', family: 'hand-drums', drum: { low: 36, mid: 38, high: 40 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Colombian cumbia drum' },
  { id: 'tambor-alegre', name: 'Tambor alegre', family: 'hand-drums', drum: { low: 64, mid: 62, high: 63 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Colombian cumbia hand-drum' },
  { id: 'guacharaca', name: 'Guacharaca', family: 'metal-and-wood', drum: { low: 73, mid: 73, high: 74 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Colombian scraper' },
  { id: 'bombo-leguero', name: 'Bombo leguero', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Argentine folk bass drum' },
  { id: 'gongs', name: 'Gong / small gong', family: 'metal-and-wood', drum: { low: 59, mid: 59, high: 59 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },

  // — metal & wood —
  { id: 'cowbell', name: 'Cowbell', family: 'metal-and-wood', drum: { low: 56, mid: 56, high: 56 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'agogo', name: 'Agogo bells', family: 'metal-and-wood', drum: { low: 67, mid: 67, high: 68 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Paired Brazilian agogo bell' },
  { id: 'claves', name: 'Claves', family: 'metal-and-wood', drum: { low: 75, mid: 75, high: 75 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'woodblock', name: 'Wood block', family: 'metal-and-wood', drum: { low: 77, mid: 76, high: 76 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'triangle', name: 'Triangle', family: 'metal-and-wood', drum: { low: 80, mid: 81, high: 81 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'maracas', name: 'Maracas', family: 'metal-and-wood', drum: { low: 70, mid: 70, high: 70 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'shaker', name: 'Shaker', family: 'metal-and-wood', drum: { low: 82, mid: 82, high: 82 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'guiro', name: 'Guiro', family: 'metal-and-wood', drum: { low: 73, mid: 73, high: 74 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'cabasa', name: 'Cabasa', family: 'metal-and-wood', drum: { low: 69, mid: 69, high: 69 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'tambourine', name: 'Tambourine', family: 'metal-and-wood', drum: { low: 54, mid: 54, high: 54 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'castanets', name: 'Castanets', family: 'metal-and-wood', drum: { low: 76, mid: 77, high: 77 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'palmas', name: 'Palmas', family: 'metal-and-wood', drum: { low: 39, mid: 39, high: 39 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Hand claps, sordas or fuertes' },
  { id: 'ride', name: 'Ride cymbal', family: 'metal-and-wood', drum: { low: 51, mid: 51, high: 53 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'steel-drums', name: 'Steel drums', family: 'metal-and-wood', program: 114, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 114 }, voicing: 'single' },
  { id: 'taiko', name: 'Taiko drum', family: 'metal-and-wood', drum: { low: 41, mid: 43, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'paigu', name: 'Paigu drums', family: 'hand-drums', drum: { low: 41, mid: 43, high: 45 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Chinese tuned barrel drums' },
  { id: 'kane', name: 'Kane bell', family: 'metal-and-wood', drum: { low: 80, mid: 81, high: 81 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Japanese temple/performance bell color' },
  { id: 'zapateado', name: 'Zapateado footwork', family: 'metal-and-wood', drum: { low: 39, mid: 76, high: 77 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Footwork percussion' },

  // — kit —
  { id: 'drums', name: 'Drum kit', family: 'kit', kit: true, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched', note: 'Spreads a pattern over kick, snare, hats' },
  { id: 'brush-kit', name: 'Brush kit', family: 'kit', kit: true, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'kick', name: 'Kick drum', family: 'kit', drum: { low: 35, mid: 36, high: 36 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'snare', name: 'Snare', family: 'kit', drum: { low: 37, mid: 38, high: 40 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },
  { id: 'hats', name: 'Hi-hats', family: 'kit', drum: { low: 42, mid: 42, high: 46 }, soundfont: { soundfontId: 'percussion', bankMSB: 0, bankLSB: 0, program: 0 }, voicing: 'unpitched' },

  // — electronic —
  { id: 'acid-303', name: 'Acid 303', family: 'electronic', program: 87, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 87 }, voicing: 'single', note: 'Resonant bass/lead synth' },
  { id: 'noise-sweep', name: 'Noise sweep', family: 'electronic', program: 95, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 95 }, voicing: 'single', note: 'Build and riser sweep' },
  { id: 'dub-echo', name: 'Dub echo', family: 'electronic', program: 95, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 95 }, voicing: 'single', note: 'Echo and reverb tail' },
  { id: 'turntable', name: 'Turntable', family: 'electronic', program: 95, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 95 }, voicing: 'single', note: 'DJ scratch / sampled texture' },
  { id: 'melodica', name: 'Melodica', family: 'winds', program: 21, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 21 }, voicing: 'single', note: 'Breathy melodica line' },
  { id: 'saw-lead', name: 'Saw lead', family: 'electronic', program: 81, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 81 }, voicing: 'single' },
  { id: 'square-lead', name: 'Square lead', family: 'electronic', program: 80, octave: 12, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 80 }, voicing: 'single' },
  { id: 'warm-pad', name: 'Warm pad', family: 'electronic', program: 89, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 89 }, voicing: 'chord' },
  { id: 'synth-strings', name: 'Synth strings', family: 'electronic', program: 50, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 50 }, voicing: 'chord' },
  { id: 'bass-lead', name: 'Bass & lead', family: 'electronic', program: 87, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 87 }, voicing: 'single' },
  { id: 'polysynth', name: 'Polysynth', family: 'electronic', program: 90, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 90 }, voicing: 'chord' },
  { id: 'halo-pad', name: 'Halo pad', family: 'electronic', program: 94, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 94 }, voicing: 'chord' },
  { id: 'sweep-pad', name: 'Sweep pad', family: 'electronic', program: 95, soundfont: { soundfontId: 'main', bankMSB: 0, bankLSB: 0, program: 95 }, voicing: 'chord' },
];

export const INSTRUMENTS_BY_ID: Record<string, InstrumentDef> = Object.fromEntries(
  INSTRUMENT_CATALOG.map(i => [i.id, i])
);

export const GENRE_SOUNDFONT_OVERRIDES: Record<string, Record<string, SoundfontPresetRef>> = {
  tango: {
    bandoneon: { soundfontId: 'bandoneon', bankMSB: 0, bankLSB: 0, program: 0 },
    guitar: { soundfontId: 'spanish-guitar', bankMSB: 0, bankLSB: 0, program: 24 },
    'nylon-guitar': { soundfontId: 'spanish-guitar', bankMSB: 0, bankLSB: 0, program: 24 },
  },
  flamenco: {
    guitar: { soundfontId: 'spanish-guitar', bankMSB: 0, bankLSB: 0, program: 24 },
    'nylon-guitar': { soundfontId: 'spanish-guitar', bankMSB: 0, bankLSB: 0, program: 24 },
    requinto: { soundfontId: 'spanish-guitar', bankMSB: 0, bankLSB: 0, program: 24 },
  },
  bachata: {
    guitar: { soundfontId: 'bachata-guitar', bankMSB: 0, bankLSB: 0, program: 0 },
    'nylon-guitar': { soundfontId: 'bachata-guitar', bankMSB: 0, bankLSB: 0, program: 0 },
    requinto: { soundfontId: 'bachata-guitar', bankMSB: 0, bankLSB: 0, program: 1 },
  },
  salsa: {
    trumpet: { soundfontId: 'salsa-trumpet', bankMSB: 0, bankLSB: 0, program: 56 },
    'horn-section': { soundfontId: 'salsa-brass', bankMSB: 0, bankLSB: 0, program: 1 },
    brass: { soundfontId: 'salsa-brass', bankMSB: 0, bankLSB: 0, program: 1 },
    trombone: { soundfontId: 'salsa-brass', bankMSB: 0, bankLSB: 0, program: 13 },
  },
  zouk: {
    'horn-section': { soundfontId: 'salsa-brass', bankMSB: 0, bankLSB: 0, program: 1 },
    brass: { soundfontId: 'salsa-brass', bankMSB: 0, bankLSB: 0, program: 1 },
  },
};

export function effectiveSoundfontPreset(instrumentId: string, genreId?: string): { soundfontId: string; bankMSB: number; bankLSB: number; program: number } | null {
  const override = genreId ? GENRE_SOUNDFONT_OVERRIDES[genreId]?.[instrumentId] : undefined;
  const ref = override ?? INSTRUMENTS_BY_ID[instrumentId]?.soundfont;
  if (!ref) return null;
  // bankOffset is applied by SoundBankManager.addSoundBank(). Do not add it
  // to the MIDI bank here as well, or secondary banks are addressed twice
  // (e.g. a bankOffset of 111 would become bank 222 and wrap incorrectly).
  // The preset reference contains the bank number *inside* the SF3; the
  // manifest offset moves that bank when the font is registered.
  return {
    soundfontId: ref.soundfontId,
    bankMSB: Math.max(0, Math.min(127, ref.bankMSB ?? 0)),
    bankLSB: Math.max(0, Math.min(127, ref.bankLSB ?? 0)),
    program: Math.max(0, Math.min(127, ref.program)),
  };
}

export const FAMILY_LABELS: Record<InstrumentFamily, string> = {
  'bellows-and-keys': 'Bellows & keys',
  plucked: 'Plucked & strung',
  bowed: 'Bowed',
  winds: 'Winds',
  brass: 'Brass',
  voice: 'Voices',
  'hand-drums': 'Hand drums',
  'metal-and-wood': 'Metal & wood',
  kit: 'Kit pieces',
  electronic: 'Electronic',
};

export const FAMILY_ORDER: InstrumentFamily[] = [
  'bellows-and-keys', 'plucked', 'bowed', 'winds', 'brass',
  'voice', 'hand-drums', 'metal-and-wood', 'kit', 'electronic',
];

export function instrument(id: string): InstrumentDef {
  return INSTRUMENTS_BY_ID[id] ?? INSTRUMENT_CATALOG[0];
}

/** Pattern vocabulary aliases. Genre pattern data uses musical roles/kinds
 * (e.g. "keys", "guitar", "percussion") rather than catalog IDs. Keep that
 * vocabulary separate from the concrete GeneralUser patch selected by a track. */
export function instrumentPatternKinds(id: string): string[] {
  const d = INSTRUMENTS_BY_ID[id];
  if (!d) return [];
  const out = new Set<string>([id]);
  if (d.voicing === 'bass') out.add('bass');
  if (d.voicing === 'unpitched') out.add('percussion');
  if (d.voicing === 'single') { out.add('melody'); out.add('lead'); }
  if (d.voicing === 'chord') out.add('harmony');
  if (d.family === 'kit') { out.add('drums'); out.add('percussion'); out.add('pulse'); }
  if (d.family === 'plucked') { out.add('guitar'); out.add('plucked'); }
  if (d.family === 'bowed') { out.add('strings'); if (id === 'violin' || id === 'fiddle') out.add('violin'); if (id === 'cello') out.add('cello'); }
  if (d.family === 'winds' && ['soprano-sax', 'alto-sax', 'tenor-sax', 'bari-sax'].includes(id)) out.add('sax');
  if (id === 'flute' || id === 'dizi' || id === 'xiao' || id === 'tin-whistle' || id === 'low-whistle' || id === 'quena') { out.add('flute'); out.add('lead'); }
  if (d.family === 'brass') out.add('brass');
  if (d.family === 'voice') { out.add('voice'); out.add('coro'); }
  if (id === 'backing-vocals' || id === 'choir') out.add('coro');
  if (d.family === 'bellows-and-keys') { out.add('keys'); if (id.includes('accordion') || id.includes('concertina')) out.add('accordion'); }
  if (d.family === 'electronic') { out.add('synth'); out.add('texture'); }
  if (id === 'piano') { out.add('piano'); out.add('keys'); }
  if (id === 'rhodes') { out.add('piano'); out.add('keys'); }
  if (id === 'organ') { out.add('organ'); out.add('keys'); }
  if (id === 'electric-guitar' || id.includes('guitar')) out.add('electric-guitar');
  if (id === 'congas') out.add('congas');
  if (id === 'bongos') out.add('bongos');
  if (id === 'timbales') out.add('timbales');
  if (id === 'guiro' || id === 'guacharaca') { out.add('guiro'); out.add('guacharaca'); }
  if (id === 'pandeiro' || id === 'tamborim') { out.add('hand-percussion'); out.add('pandeiro'); }
  if (id === 'bodhran') { out.add('bodhran'); out.add('percussion'); }
  if (id === 'cajon') { out.add('cajon'); out.add('percussion'); }
  if (id === 'palmas' || id === 'zapateado') { out.add('palmas'); out.add('percussion'); }
  if (id === 'tambora') { out.add('tambora'); out.add('percussion'); }
  if (id === 'taiko' || id === 'kane' || id === 'paigu') { out.add('percussion'); }
  if (id === 'tabla') { out.add('tabla'); out.add('percussion'); }
  if (id === 'shaker') { out.add('shaker'); out.add('percussion'); }
  if (id === 'log-drum') { out.add('log-drum'); out.add('percussion'); out.add('bass'); }
  if (id === 'uilleann-pipes' || id === 'bagpipes') { out.add('uilleann-pipes'); out.add('bagpipes'); out.add('lead'); }
  if (id === 'celtic-harp' || id === 'harp') { out.add('celtic-harp'); out.add('harp'); out.add('harmony'); }
  if (id === 'tres') { out.add('tres'); out.add('guitar'); }
  if (id === 'charango') { out.add('charango'); out.add('guitar'); }
  if (id === 'requinto') { out.add('requinto'); out.add('guitar'); }
  if (id === 'guitarron') { out.add('guitarron'); out.add('bass'); }
  if (id === 'erhu') { out.add('erhu'); out.add('strings'); out.add('lead'); }
  if (id === 'pipa') { out.add('pipa'); out.add('plucked'); out.add('lead'); }
  if (id === 'guzheng' || id === 'guqin') { out.add('guzheng'); out.add('plucked'); out.add('harmony'); }
  if (id === 'koto') { out.add('koto'); out.add('plucked'); out.add('harmony'); }
  if (id === 'shamisen') { out.add('shamisen'); out.add('plucked'); out.add('lead'); }
  if (id === 'shakuhachi') { out.add('shakuhachi'); out.add('flute'); out.add('lead'); }
  return [...out];
}

export function isPercussive(id: string): boolean {
  const def = INSTRUMENTS_BY_ID[id];
  return !!def && (def.kit === true || def.drum !== undefined);
}

export function cleanInstrumentName(name: string): string {
  return name
    .replace(/\s*\([^)]*GM[^)]*\)/gi, '')
    .replace(/\s*\([^)]*approx[^)]*\)/gi, '')
    .replace(/\s*\(GM approximation\)/gi, '')
    .replace(/GM approximation/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/** Instruments a world tends to reach for first, by world id. */
export const WORLD_INSTRUMENT_HINTS: Record<string, string[]> = {
  // The first five are the default demo: a compact, identity-carrying ensemble.
  // Remaining instruments stay available through the picker for fuller arrangements.
  tango: ['bandoneon', 'piano', 'upright-bass', 'violin', 'cello'],
  salsa: ['piano', 'bass', 'congas', 'timbales', 'trumpet'],
  timba: ['piano', 'bass', 'timbales', 'congas', 'trombone'],
  // Flamenco core ensemble only. Palo-specific extras (castanets, flute, bass)
  // belong to individual styles rather than the genre-wide starter pack.
  flamenco: ['guitar', 'voice', 'palmas', 'cajon', 'zapateado'],
  jazz: ['piano', 'upright-bass', 'brush-kit', 'tenor-sax', 'jazz-guitar'],
  blues: ['electric-guitar', 'bass', 'drums', 'piano', 'harmonica'],
  rock: ['overdrive-guitar', 'bass', 'drums', 'electric-guitar', 'organ'],
  'rock-en-espanol': ['electric-guitar', 'bass', 'drums', 'overdrive-guitar', 'organ'],
  zouk: ['sub-bass', 'drums', 'rhodes', 'electric-guitar', 'warm-pad'],
  kizomba: ['sub-bass', 'drums', 'rhodes', 'electric-guitar', 'warm-pad'],
  funk: ['slap-bass', 'drums', 'clavinet', 'electric-guitar', 'horn-section'],
  metal: ['distortion-guitar', 'overdrive-guitar', 'bass', 'drums', 'guitar-harmonics'],
  bachata: ['requinto', 'guitar', 'bass', 'bongos', 'guiro'],
  folk: ['guitar', 'fiddle', 'upright-bass', 'bodhran', 'mandolin'],
  'hip-hop': ['drums', 'sub-bass', 'piano', 'turntable', 'warm-pad'],
  electronic: ['drums', 'bass-lead', 'warm-pad', 'saw-lead', 'polysynth'],
  country: ['steel-guitar', 'upright-bass', 'brush-kit', 'fiddle', 'banjo'],
  swing: ['upright-bass', 'drums', 'piano', 'tenor-sax', 'jazz-guitar'],
  'math-rock': ['electric-guitar', 'guitar-harmonics', 'bass', 'drums', 'overdrive-guitar'],
  afrobeats: ['sub-bass', 'log-drum', 'electric-guitar', 'shaker', 'tenor-sax'],
  'j-pop': ['electric-guitar', 'slap-bass', 'drums', 'piano', 'saw-lead'],
  'chinese-rock': ['distortion-guitar', 'bass', 'drums', 'guzheng', 'strings'],
  'fusion-ambient': ['electric-guitar', 'warm-pad', 'fretless-bass', 'tabla', 'rhodes'],
  'chinese-traditional': ['erhu', 'pipa', 'guzheng', 'dizi', 'paigu'],
  'japanese-traditional': ['koto', 'shamisen', 'shakuhachi', 'taiko', 'kane'],
  'reggaeton-dembow': ['drums', 'sub-bass', 'piano', 'synth-brass', 'guitar'],
  cumbia: ['bass', 'tambora', 'accordion', 'guitar', 'guacharaca'],
  trova: ['guitar', 'tres', 'upright-bass', 'cajon', 'flute'],
  folclorico: ['guitar', 'charango', 'accordion', 'zapateado', 'guitarron'],
  'house-techno': ['kick', 'sub-bass', 'polysynth', 'saw-lead', 'hats'],
  'reggae-dub': ['bass', 'drums', 'organ', 'electric-guitar', 'melodica'],
  ska: ['bass', 'drums', 'electric-guitar', 'organ', 'trumpet'],
  'samba-bossa': ['guitar', 'upright-bass', 'piano', 'pandeiro', 'flute'],
  'celtic-trad': ['fiddle', 'harp', 'accordion', 'uilleann-pipes', 'bodhran'],
};
