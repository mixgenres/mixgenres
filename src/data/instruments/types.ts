export type InstrumentFamily =
  | 'bellows-and-keys' | 'plucked' | 'bowed' | 'winds' | 'brass' | 'voice'
  | 'hand-drums' | 'metal-and-wood' | 'kit' | 'electronic';

export interface DrumVoice { low: number; mid: number; high: number; }


export type ExcitationModel =
  | 'plucked-string' | 'bowed-string' | 'struck-string' | 'blown-reed'
  | 'blown-air' | 'lip-reed' | 'membrane' | 'metal-impact'
  | 'sample-playback' | 'subtractive-synth' | 'fm-synth' | 'wavetable'
  | 'voice-source' | 'noise-source' | 'hybrid';

export interface PhysicalModelProfile {
  model: ExcitationModel;
  /** Physical parameters are normalized 0..1 unless otherwise noted. */
  parameters: {
    stiffness?: number; damping?: number; inharmonicity?: number;
    bodyResonance?: number; airResonance?: number; membraneModes?: number[];
    membraneTension?: number; membraneDamping?: number;
    pickupPosition?: number; pickupDistance?: number; pickupResponse?: 'magnetic' | 'piezo' | 'microphone' | 'none';
    nonlinearDrive?: number; saturation?: number; bowPressure?: number; bowSpeed?: number;
    pluckPosition?: number; pluckHardness?: number; reedStiffness?: number; breathNoise?: number;
    transientSharpness?: number; noiseAmount?: number; stereoWidth?: number;
  };
  signalChain: Array<'preamp' | 'eq' | 'compressor' | 'distortion' | 'filter' | 'chorus' | 'delay' | 'reverb' | 'cabinet' | 'tape' | 'spring' | 'dub-send'>;
  synthesisNotes: string[];
}

export interface ArticulationModel {
  id: string;
  method: string;
  synthesis: 'physical' | 'sample' | 'hybrid' | 'event';
  parameters: Record<string, number | string | boolean>;
  genreUse?: Record<string, string[]>;
}

export interface InstrumentTechniqueProfile {
  /** Canonical articulation ids this instrument can realize meaningfully. */
  articulations: string[];
  /** Human performance methods used to obtain the sound. */
  techniqueMethods: string[];
  /** Playing contexts/styles in which these methods are idiomatic. */
  playingStyles: string[];
  /** Optional genre/style-specific articulation preferences. */
  genreTechniques?: Record<string, string[]>;
  articulationMetadata?: Record<string, { onsetShape?: string; envelope?: string; velocityCurve?: string; pitchBehavior?: string; noiseComponent?: number; }>;
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
  physicalModel?: PhysicalModelProfile;
  articulationModels?: ArticulationModel[];
  /** Style-level performance constraints and idiomatic patterns. */
  genrePerformanceProfiles?: Record<string, { role: string; articulations: string[]; patternRules: string[]; forbidden?: string[] }>;
}
