import { Role, SectionType, TuningSystemTag, GrooveMechanics, SectionEnergy } from '../../types';
import type { WorldContract } from './contracts';

export type Aspect = 'form' | 'harmony' | 'rhythm' | 'melody' | 'arrangement' | 'sound' | 'gestures';

export type StyleKind = 'canonical' | 'form' | 'era' | 'school' | 'fusion' | 'regional';

export type Range = [number, number];

export interface Condition {
  sectionType?: SectionType | string;
  energyBand?: 'low' | 'medium' | 'high' | 'peak';
  barPosition?: 'start' | 'middle' | 'end' | 'cadence' | 'pickup';
  phraseRole?: string;
  instrumentRole?: Role | string;
}

export interface Weighted<T> {
  value: T;
  w: number;
  when?: Condition;
}

export interface StyleInfluence {
  source: {
    styleId?: string;
    genreId?: string;
  };
  weight: number;
  aspects: Aspect[];
}

export interface FormStepTemplate {
  key: string;
  label: string;
  kind: SectionType | string;
  bars: number;
  intensity: 'low' | 'medium' | 'high' | 'peak';
}

export interface FormGrammar {
  sectionVocab: (SectionType | string)[];
  templates: Weighted<FormStepTemplate[]>[];
  barLengthDistributions?: Record<string, Weighted<number>[]>;
  intros?: Weighted<string>[];
  outros?: Weighted<string>[];
  breaks?: Weighted<string>[];
  pickups?: Weighted<boolean>[];
  /** Roles that receive an automatic arrangement spotlight for each form section. */
  defaultSpotlights: Record<string, Role[]>;
  preferredMeters: string[];
}

export interface HarmonyGrammar {
  model: 'functional' | 'modal-drone' | 'heterophonic' | 'fixed-cluster' | string;
  modePolicy: 'major' | 'minor' | 'modal' | 'blues' | 'dorian' | 'phrygian' | 'mixolydian' | 'pentatonic' | string;
  progressionTemplates: Weighted<string[]>[];
  sectionProgressions?: Partial<Record<SectionType | string, string[]>>;
  cadences?: Weighted<string[]>[];
  chordVocabulary: string[];
  harmonicRhythm?: '1-bar' | '2-bar' | 'half-bar' | 'static' | string;
  voicingStyle?: string;
  bassMotion?: 'root-fifth' | 'walking' | 'tumbao' | 'drone' | 'arpeggiated' | 'riff' | 'syncopated' | string;
  tuningSystem?: TuningSystemTag;
}

export interface RhythmGrammar {
  meter: string;
  tempoRange: [number, number];
  defaultBpm: number;
  feel: string;
  swingPercentage: number;
  anticipationOffsetSteps: number;
  microtimingFeel: 'straight' | 'swung' | 'laid-back' | 'pushed' | 'rubato' | 'atrasado' | 'drunk';
  humanizeJitterMs: number;
  timelineClave?: string;
  grooveFamilies?: Record<string, string[]>;
  accentMaps?: Record<string, number[]>;
  fillGrammar?: Record<string, unknown>;
  signatureCell?: string;
  grooveMechanics?: GrooveMechanics;
}

import type {
  PerformanceGrammar,
  PhraseDevelopmentProbabilities,
  MicrotimingPolicy,
} from '../../engine/performance/performanceGrammar';

export type {
  PerformanceGrammar,
  PhraseDevelopmentProbabilities,
  MicrotimingPolicy,
};

export interface MelodyGrammar {
  scaleMode: string;
  pitchIntervals?: number[];
  snapToChord?: boolean;
  heterophonic?: boolean;
  rangePerSection?: Record<string, [number, number]>;
  contourArchetypes?: string[];
  phraseLengthsBars?: number[];
  motifOps?: string[];
  ornamentVocabulary?: string[];
  chordToneTargeting?: boolean;
  callAndResponse?: boolean;
}

/**
 * World-level grammar for a spotlighted Solo section. Unlike MelodyGrammar,
 * this describes improvisational behavior rather than the style's written/head melody.
 */
export interface ImprovisationGrammar {
  scaleMode: string;
  targetToneStrategy: string;
  phraseStages: Array<'state' | 'rest' | 'repeat-transpose' | 'rapid-run'>;
  transposeDegrees?: number;
  phraseBars?: number;
  rapidRunOrnaments?: string[];
}

export interface ArrangementGrammar {
  ensemble: { role: Role | string; instrumentIds: string[]; priority: number }[];
  schedule?: Record<string, string[]>;
  /** Section-key to energy level; world contracts hold the full 1..5 mapping. */
  energyMappings?: Partial<Record<string, SectionEnergy>>;
  registerAllocation?: Record<string, [number, number]>;
  doublingRules?: string[];
  stabsAndHits?: Record<string, number>;
  solos?: string[];
}

export interface SoundFxPreset {
  highPass?: number;
  lowShelf?: number;
  presence?: number;
  air?: number;
  glue?: number;
  warmth?: number;
  width?: number;
  space?: number;
}

export interface SoundProfile {
  instrumentPalette: Weighted<string>[];
  articulations?: Record<string, string>;
  fxChains?: Record<string, SoundFxPreset>;
  reverbDelay?: { decay?: number; wet?: number };
  masterProfile: { pocket?: number; lift?: number };
}

export interface GestureRule {
  id: string;
  name: string;
  probability: number;
  when?: Condition;
  description?: string;
}

export type PlayingTechniqueCategory = 
  | 'string' 
  | 'brass_wind' 
  | 'percussion' 
  | 'keyboard_bellows' 
  | 'vocal';

export type StringArticulation =
  | 'plucked_finger'
  | 'plucked_pick'
  | 'slap_thumb'
  | 'pop_index'
  | 'palm_mute'
  | 'fret_slide'
  | 'hammer_on_pull_off'
  | 'rasgueado'
  | 'alzapua'
  | 'harmonic_natural'
  | 'harmonic_artificial'
  | 'tremolo_picking';

export type PercussionArticulation =
  | 'hand_open'
  | 'hand_slap'
  | 'hand_bass'
  | 'hand_mute'
  | 'hand_fingertip'
  | 'stick_center'
  | 'stick_rimshot'
  | 'stick_cross_stick'
  | 'cymbal_bell'
  | 'cymbal_bow'
  | 'cymbal_edge'
  | 'brush_sweep'
  | 'friction_mod'
  | 'roll_damped';

export type WindArticulation =
  | 'tongued_staccato'
  | 'slur_legato'
  | 'flutter_tongue'
  | 'growl'
  | 'half_valve'
  | 'fall_off'
  | 'doit'
  | 'plunger_mute_open'
  | 'plunger_mute_closed'
  | 'breath_tone';

export interface ArticulationCurve {
  attackTimeMs: number;
  decayTimeMs: number;
  transientBrightness: number; // 0.0 to 1.0 (filter cutoff / noise burst)
  pitchBendSemiSemitones?: number[]; // Envelope pitch shifts
  resonanceModulation?: number;
}

export interface ArticulationDefinition {
  id: string;
  category: PlayingTechniqueCategory;
  name: string;
  velocityRange: [number, number]; // [min, max] 0-127
  curve: ArticulationCurve;
  acousticNoiseProbability: number; // Fret noise, key click, breath sound
}

export interface MicroTimingGrid {
  gridResolution: '1/16' | '1/32' | '1/8t';
  swingFactor: number; // 0.5 (straight) to 0.75 (hard swing)
  ticksPushPull: Record<number, number>; // Step offset in ticks
  humanizeJitterMs: number;
}

export interface GenreProfile {
  id: string;
  name: string;
  timing: MicroTimingGrid;
  harmonicGrammar: {
    allowedScales: string[];
    preferredVoicings: string[]; // Reference to chord palette types
    cadenceRules: Array<{ trigger: string; resolveTo: string }>;
  };
  sharedTechniques: Record<string, ArticulationDefinition>;
  corePatternLibraries: {
    bassPatterns: string[]; // Pattern IDs
    rhythmPatterns: string[];
    percussionPatterns: string[];
  };
}

export interface TimbreEnvelopeOverride {
  instrumentId: string;
  brightnessMod: number; // -1.0 to 1.0
  attackSpeedMod: number;
  saturation: number;
  reverbSend: number;
}

export interface StyleProfile {
  id: string;
  genreId: string; // Links to base Genre Profile
  name: string;
  tempoRange: [number, number];
  sonicSignature: {
    timbreOverrides: TimbreEnvelopeOverride[];
    eqCurve: { lowDb: number; midDb: number; highDb: number };
  };
  techniqueOverrides: Record<string, Partial<ArticulationDefinition>>;
  patternSelect: {
    bassPatternId: string;
    rhythmPatternId: string;
    leadMotifId?: string;
  };
  grooveOffsetMap: {
    kickOffsetMs: number;
    snareOffsetMs: number;
    hihatOffsetMs: number;
  };
}

export interface RuleRef {
  tag: string;
  description?: string;
}

export interface SongStyle {
  id: string;
  name: string;
  aliases?: string[];
  genres: string[];
  primaryGenre: string;
  kind: StyleKind;
  canonical?: boolean;      // exactly one canonical per genre
  extends?: string;
  influences?: StyleInfluence[];
  era?: { from?: number; to?: number } | string;
  region?: string;
  summary: string;
  signatureTraits: string[];  // shown in UI
  confidence?: 'high' | 'medium' | 'low';
  authoringNotes?: string;

  form?: Partial<FormGrammar>;             // section vocab, order templates (weighted), bar-length distributions, intros/outros/breaks, pickups, endings
  harmony?: Partial<HarmonyGrammar>;       // mode/key policy, progression templates (functional/roman), cadences, chord vocabulary + extensions, harmonic rhythm, voicing style, bass-motion rules
  rhythm?: Partial<RhythmGrammar>;         // meter, tempo range, feel/swing, timeline/clave, per-role groove families, microtiming per instrument, accent maps, fill grammar
  melody?: Partial<MelodyGrammar>;         // scale/mode, range per section, contour archetypes, phrase lengths, motif-development ops, ornament vocabulary, chord-tone targeting, call/response
  arrangement?: Partial<ArrangementGrammar>; // ensemble template by role, entrance/exit schedule per section, energy mapping, register allocation, doubling, stabs/hits, solos
  sound?: Partial<SoundProfile>;           // instrument palette (weighted), patch picks, articulation, FX chains, reverb/delay character, saturation/compression, stereo image, master profile
  patterns?: { require?: string[]; preferred?: string[]; allowed?: string[]; avoid?: string[] };
  performance?: Partial<PerformanceGrammar>; // expressive pitch/timing idioms (arrastre, yumba, dembow fill, riser...) with per-context probabilities; 0 = style refrains from it
  rules?: { require?: RuleRef[]; forbid?: RuleRef[] };
  gestures?: Record<string, GestureRule>;
}

export interface DecisionTraceItem {
  path: string;
  value: unknown;
  source: 'style' | 'influence' | 'genre' | 'user' | 'extends' | 'hardcoded';
  sourceId?: string;
  weight?: number;
}

export type DecisionTrace = DecisionTraceItem[];

export interface ResolvedStyle extends SongStyle {
  contract: WorldContract;
  form: FormGrammar;
  harmony: HarmonyGrammar;
  rhythm: RhythmGrammar;
  melody: MelodyGrammar;
  arrangement: ArrangementGrammar;
  sound: SoundProfile;
  patterns?: { require?: string[]; preferred?: string[]; allowed?: string[]; avoid?: string[] };
  gestures: Record<string, GestureRule>;
  rules: { require: RuleRef[]; forbid: RuleRef[] };
  resolvedFrom: {
    baseStyleId: string;
    genreId: string;
    extendsChain: string[];
    appliedInfluences: StyleInfluence[];
  };
  provenance: Record<string, {
    source: 'style' | 'influence' | 'genre' | 'user' | 'extends' | 'hardcoded';
    sourceId?: string;
    weight?: number;
  }>;
  trace: DecisionTrace;
}
