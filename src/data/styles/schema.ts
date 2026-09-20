import { Role, SectionType, TuningSystemTag, GrooveMechanics } from '../../types';
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

export interface ArrangementGrammar {
  ensemble: { role: Role | string; instrumentIds: string[]; priority: number }[];
  schedule?: Record<string, string[]>;
  densityCurve?: Record<string, 'sparse' | 'normal' | 'busy'>;
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
  soundfontPicks?: Record<string, string>;
  articulations?: Record<string, string>;
  fxChains?: Record<string, SoundFxPreset>;
  reverbDelay?: { room: string; decay?: number; wet?: number };
  masterProfile: { roomId: string; pocket?: number; lift?: number };
}

export interface GestureRule {
  id: string;
  name: string;
  probability: number;
  when?: Condition;
  description?: string;
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
  arrangement?: Partial<ArrangementGrammar>; // ensemble template by role, entrance/exit schedule per section, density curve, register allocation, doubling, stabs/hits, solos
  sound?: Partial<SoundProfile>;           // instrument palette (weighted), patch/soundfont picks, articulation, FX chains, reverb/delay character, saturation/compression, stereo image, master profile
  patterns?: { require?: string[]; preferred?: string[]; allowed?: string[]; avoid?: string[] };
  gestures?: Record<string, GestureRule>; // signature moves (arrastre, yumba, dembow fill, riser...) with per-context probabilities; 0 = style refrains from it
  rules?: { require?: RuleRef[]; forbid?: RuleRef[] };
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
