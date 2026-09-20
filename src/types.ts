export type PartDensity = 'sparse' | 'normal' | 'busy';

export type LensId = string;
export type Scope = 'measure' | 'phrase' | 'repetition' | 'region' | 'track' | 'relationship' | 'song';
export type Role = 
  | 'pulse'
  | 'harmony'
  | 'bass'
  | 'melody'
  | 'percussion'
  | 'texture'
  | 'voice'
  | 'lead'
  | 'drum-kit'
  | 'drumKit'
  | 'drums'
  | 'aux-percussion'
  | 'bell'
  | 'shaker'
  | 'hand-percussion'
  | 'guitar'
  | 'rhythm-guitar'
  | 'rhythmGuitar'
  | 'melodic-guitar'
  | 'piano'
  | 'keyboard'
  | 'horn-section'
  | 'counterline'
  | 'fill'
  | 'bandoneon'
  | 'brass'
  | 'violin'
  | string;

export type InstrumentKind = 
  | 'voice'
  | 'guitar'
  | 'electric-guitar'
  | 'bass'
  | 'keys'
  | 'piano'
  | 'sax'
  | 'trumpet'
  | 'strings'
  | 'violin'
  | 'percussion'
  | 'drums'
  | 'synth'
  | 'bandoneon'
  | 'flute'
  | 'accordion'
  | 'cavaquinho'
  | 'bongos'
  | 'congas'
  | 'timbales'
  | 'guiro'
  | 'maracas'
  | 'cowbell'
  | 'cuica'
  | 'pandeiro'
  | 'surdo'
  | 'tamborim'
  | 'brass'
  | 'hand-percussion'
  | 'other'
  | 'coro'
  | string; // Extensible: genre packs may introduce culturally specific instrument IDs.

export type PatternCategory = 
  | 'cell'
  | 'ostinato'
  | 'rolePattern'
  | 'phrasePattern'
  | 'sectionPattern'
  | 'interactionPattern'
  | 'fill'
  | 'break'
  | 'cadence'
  | 'groove'
  | 'ornament'
  | 'bass'
  | 'texture'
  | 'counterline'
  | 'motif'
  | 'pulse'
  | 'comping'
  | 'accompaniment'
  | 'lead'
  | 'drone'
  | 'transition'
  | 'polyrhythm'
  | string;

export type DrumHitType = 'kick' | 'snare' | 'hat' | 'openHat' | 'clap' | 'rim' | 'ride' | 'crash' | 'tom' | 'cowbell' | 'shaker' | 'ghost' | string;

export type VariationType = 
  | 'ornamented'
  | 'sparse'
  | 'dense'
  | 'syncopated'
  | 'anticipated'
  | 'accentShift'
  | 'fill'
  | 'cadence'
  | 'phraseStart'
  | 'phraseEnd'
  | 'transition'
  | 'instrumentSpecific'
  | 'development'
  | 'breakdown';

export type InteractionRelationship = 
  | 'reinforce'
  | 'answer'
  | 'avoid'
  | 'anticipate'
  | 'follow'
  | 'mirror'
  | 'complement'
  | 'accentWith'
  | 'leaveSpace';

export type SectionType = 
  | 'intro'
  | 'verse'
  | 'pre-chorus'
  | 'chorus'
  | 'bridge'
  | 'breakdown'
  | 'solo'
  | 'interlude'
  | 'coda'
  | 'ending'
  | string;

export type DanceTag =
  | 'social-partner'
  | 'blues-fusion-compatible'
  | 'wcs-compatible'
  | 'solo-listening'
  | 'listening'
  | 'festival-fusion'
  | 'sensual-fusion'
  | 'learning'
  | string;

export type TuningSystemTag =
  | '12-tet'
  | 'maqam'
  | 'gamelan-pelog'
  | 'gamelan-slendro'
  | 'just-intonation'
  | 'raga-shruti'
  | 'xenharmonic'
  | string;

export interface GrooveMechanics {
  swingPercentage?: number;
  anticipationOffsetSteps?: number;
  microtimingFeel?: 'straight' | 'swung' | 'laid-back' | 'pushed' | 'rubato' | 'atrasado' | 'drunk';
  humanizeJitterMs?: number;
}

export type DominanceLevel = 'foundational' | 'prominent' | 'occasional' | 'rare' | 'avoid';

export interface UserPatternPreference {
  familyId?: string;
  worldId?: string;
  role?: Role;
  dominance: DominanceLevel;
  weightMultiplier: number;
}

export interface PatternVariant {
  id: string;
  parentPatternId: string;
  name: string;
  shortName?: string;
  variationType: VariationType;
  probability: number;
  description?: string;
  onsetGrid: number[]; // 16th note steps (0..15 or extended)
  /** Optional per-onset drum/perc articulation. Keeps authored rhythm from being remapped to a generic kit groove. */
  hitGrid?: DrumHitType[];
  durationGrid?: number[];
  accentProfile?: number[]; // matching onsetGrid with 0..1 accent multipliers
  velocityProfile?: number[]; // 0..1 base velocity
  microtimingOffset?: number[]; // ms or fraction of tick
  articulation?: string;
  constraints?: string[];
}

export interface InteractionRule {
  id: string;
  sourceRole: Role;
  targetRole: Role;
  relationship: InteractionRelationship;
  description: string;
  timingOffsetSteps?: number; // e.g. -1 for anticipation, +2 for response
  probability: number;
  worldId?: string; // legacy catalog field; not used for musical decisions
  styleIds?: string[];
  constraints?: string[];
}

export interface PatternTransformation {
  id: string;
  name: string;
  type: 'density' | 'anticipation' | 'accent' | 'ornament' | 'phrasePosition' | 'swing' | 'syncopation';
  parameter: number | string;
  description: string;
  allowedGenres?: string[];
}

export interface MusicalPattern {
  id: string;
  worldId: string; // genre/catalog key; musical identity is styleIds
  styleIds?: string[];
  name: string;
  shortName?: string;
  family: string;
  category: PatternCategory;
  description: string;
  tags: string[];
  scopes: Scope[];
  
  roles: Role[];
  instruments?: InstrumentKind[];
  compatibleRoles?: Role[];
  compatibleInstruments?: InstrumentKind[];
  sourceLevel?: string;
  canCrossRole?: boolean;

  meter: string; // e.g. '4/4', '3/4', '6/8', '12/8'
  cycleLength: number; // in measures (usually 1 or 2)
  subdivisions: number; // e.g. 16 per measure

  onsetGrid: number[]; // 16th note indices where events hit (0..15 for 1-bar 4/4)
  /** Optional per-onset drum/perc articulation. */
  hitGrid?: DrumHitType[];
  durationGrid?: number[]; // duration in steps
  accentProfile?: number[]; // 0..1 for each onset
  velocityProfile?: number[]; // 0..1 for each onset
  
  syncopationRating?: number; // 0..1
  anticipationOffset?: number; // steps
  swingPercentage?: number; // 0..100
  
  articulations?: string[];
  density?: 'sparse' | 'medium' | 'dense' | 'dynamic';
  
  phrasePosition?: ('start' | 'middle' | 'end' | 'any')[];
  sectionUsage?: SectionType[];
  /** Optional pattern-level technique/function; distinct from song section/form. */
  technique?: string;
  /** Optional plain-language pattern job shown in UI; distinct from section form. */
  patternFunction?: string;
  harmonicContext?: string[]; // e.g. ['minor', 'dominant', 'turnaround']
  
  roleDependencies?: Role[];
  interactionRules?: InteractionRule[];
  transformations?: string[];
  
  variants: PatternVariant[];
  
  provenance?: string;
  authenticityTags?: string[];
  danceTags?: DanceTag[];
  tuningSystem?: TuningSystemTag;
  difficulty?: number;
  weight?: number;
  enabled?: boolean;
}

export interface GenreStyleDefinition {
  id: string;
  worldId: string;
  name: string;
  origin: string;
  era?: string;
  description: string;
  characteristicInstruments: InstrumentKind[];
  preferredMeters: string[];
  tempoRange: [number, number];
  keySubstyles: string[];
  coreConcepts: string[];
  rhythmicGrammar: string[];
  danceTags?: DanceTag[];
  tuningSystem?: TuningSystemTag;
  signatureCell?: string;
  grooveMechanics?: GrooveMechanics;
  sectionProgressions?: Partial<Record<SectionType | string, string[]>>;
}

export interface GenreEngineProfile {
  phraseLengthsBars: number[];
  primaryPulse: string[];
  rhythmicPriorities: string[];
  harmonicStrategy: string[];
  melodicStrategy: string[];
  arrangementStrategy: string;
  engineConstraints: string[];
  variationStrategy: string;
  /** Optional machine-readable cultural runtime model; absent means the standard functional-harmony engine. */
  harmonicModel?: 'functional-harmony' | 'modal-center' | 'heterophonic' | 'drone-cluster';
  pitchModel?: string;
  timingModel?: 'grid-groove' | 'authored-phrase' | 'breath-and-ma';
}

export interface GenreWorld {
  id: LensId;
  name: string;
  /** Public catalog kind: a strict musical world, an umbrella family, or a fusion recipe. */
  kind?: 'world' | 'family' | 'fusion';
  promotedFrom?: string;
  strictness?: 'strict' | 'flexible' | 'open';
  homeStyleId?: string;
  family: string;
  color: string;
  description: string;
  parentId?: LensId;
  level: 'world' | 'family' | 'substyle' | 'artist' | 'cross-world';
  styleDefinitions: GenreStyleDefinition[]; // catalog-only style definition; never consulted by musical runtime
  substyles: string[];
  artists: string[];
  concepts: string[];
  roles: Partial<Record<Role, string[]>>;
  patterns: MusicalPattern[];
  techniques: string[];
  forms: string[];
  relationships: string[];
  transformations: string[];
  songBehaviors: string[];
  engineProfile?: GenreEngineProfile;
  instrumentIdeas: Partial<Record<InstrumentKind, string[]>>;
  combinations?: string[];
  danceTags?: DanceTag[];
  tuningSystem?: TuningSystemTag;
  signatureCell?: string;
  grooveMechanics?: GrooveMechanics;
  crossLinks?: string[];
}

// Backward compatibility alias
export type LensDef = GenreWorld;
export type PatternDef = MusicalPattern;

export interface Measure {
  id: string;
  index: number;
  label?: string;
  regionId: string;
  chord: string;
  root: string;
  patternByTrack: Record<string, string>;
  patternDetailsByTrack?: Record<string, {
    patternId: string;
    styleId?: string;
    variantId?: string;
    onsetGrid: number[];
    accentProfile?: number[];
    durationGrid?: number[];
    hitTypes?: DrumHitType[];
    articulation?: string;
    variationType?: string;
    transformationApplied?: string;
  }>;
  lensIds?: string[];
  variation?: string;
  selected?: boolean;
}

export interface Track {
  id: string;
  name: string;
  role: Role;
  /** id from INSTRUMENT_CATALOG — the sound, chosen independently of the pattern */
  instrumentId?: string;
  instrument: string;
  kind: InstrumentKind;
  muted: boolean;
  solo?: boolean;
  volume: number;
  pan?: number;
  lensIds: string[];
}

export interface Region {
  id: string;
  name: string;
  start: number;
  end: number;
  /** authored length; start/end are derived from it */
  bars?: number;
  /** section BPM override */
  bpm?: number;
  /** the progression this section cycles through */
  chords?: string[];
  /** Song-form role. Genre-specific form names live in the form registry, not in pattern category. */
  kind: SectionType | string;
  /** Stable form key for genre-aware rendering/selection. */
  formKey?: string;
  /** Short user-facing label, kept concise for touch UI. */
  formLabel?: string;
  /** Section intensity used by arrangement; separate from pattern density. */
  intensity?: 'low' | 'medium' | 'high' | 'peak';
  /** Section-level density preset / default */
  density?: 'sparse' | 'normal' | 'busy';
  repetitionGroup?: string;
  tempoShift?: string;
  genre?: string;
  /** Resolved style for this section; when genre differs from the song, this is authoritative. */
  styleId?: string;
  worldId?: string;
}

export interface Relationship {
  id: string;
  from: string;
  to: string;
  kind: InteractionRelationship | string;
  regionId?: string;
  lensIds: string[];
  interactionRuleId?: string;
}

export interface AppliedLens {
  id: string;
  lensIds: string[];
  scope: Scope;
  targetId: string;
  trackId?: string;
  patternId?: string;
  variantId?: string;
  summary: string;
  createdAt: number;
  generatedMeasures?: number;
  selectionScore?: number;
  explanation?: string;
}

export interface Song {
  id: string;
  title: string;
  bpm: number;
  timeSignature: string;
  durationMeasures: number;
  tracks: Track[];
  measures: Measure[];
  regions: Region[];
  relationships: Relationship[];
  activeLensIds: string[];
  applied: AppliedLens[];
  preferences?: UserPatternPreference[];
  generationSeed?: number;
  styleId?: string;
  styleInfluences?: any[];
  styleOverrides?: Record<string, unknown>;
}

export interface SelectionScoreDetails {
  patternId: string;
  patternName: string;
  totalScore: number;
  factors: {
    genreMatch: number;
    styleMatch: number;
    sectionMatch: number;
    roleMatch: number;
    instrumentMatch: number;
    meterMatch: number;
    phrasePositionMatch: number;
    densityMatch: number;
    interactionBonus: number;
    userPreferenceBonus: number;
    repetitionPenalty: number;
    cooldownPenalty: number;
  };
  chosenVariant?: PatternVariant;
  appliedTransformation?: PatternTransformation;
}

export interface GenreCoverageReportItem {
  worldId: string;
  worldName: string;
  stylesCount: number;
  rhythmicFamiliesCount: number;
  corePatternsCount: number;
  variantsCount: number;
  interactionRulesCount: number;
  transformationsCount: number;
  roleCoverage: Record<string, number>;
  fallbackRatePct: number;
  deadPatternsCount: number;
  reachablePatternsCount: number;
}

export interface CollisionReportItem {
  genreA: string;
  genreB: string;
  similarityScore: number; // 0..1
  rhythmicOverlapPct: number;
  differentiationFactors: string[];
  distinctiveFeaturesA: string[];
  distinctiveFeaturesB: string[];
}
