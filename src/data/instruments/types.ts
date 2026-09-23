export type InstrumentFamily =
  | 'bellows-and-keys' | 'plucked' | 'bowed' | 'winds' | 'brass' | 'voice'
  | 'hand-drums' | 'metal-and-wood' | 'kit' | 'electronic';

export interface DrumVoice { low: number; mid: number; high: number; }

export interface InstrumentTechniqueProfile {
  /** Canonical articulation ids this instrument can realize meaningfully. */
  articulations: string[];
  /** Human performance methods used to obtain the sound. */
  techniqueMethods: string[];
  /** Playing contexts/styles in which these methods are idiomatic. */
  playingStyles: string[];
  /** Optional genre/style-specific articulation preferences. */
  genreTechniques?: Record<string, string[]>;
}

export interface InstrumentDef {
  id: string;
  name: string;
  family: InstrumentFamily;
  program?: number;
  drum?: DrumVoice;
  kit?: boolean;
  octave?: number;
  voicing: 'single' | 'chord' | 'bass' | 'unpitched';
  note?: string;
  bank?: number;
  courses?: number;
  bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric';
  excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer';
  sympatheticStrings?: boolean;
  techniques: InstrumentTechniqueProfile;
}
