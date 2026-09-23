import type { PhraseDevelopmentProbabilities } from './performanceGrammar';
import { rand01, seedOf } from '../generators/groove';

export type DevelopmentStage =
  | 'establish'
  | 'repeat'
  | 'vary'
  | 'answer'
  | 'transition'
  | 'ending';

export type PerformanceEventKind =
  | 'written'
  | 'repeat'
  | 'subdivision'
  | 'approach'
  | 'anticipation'
  | 'response'
  | 'pickup'
  | 'release'
  | 'ghost'
  | 'fill'
  | 'variation'
  | 'sustain';

export interface InterpretedAttack {
  beat: number;
  durationSteps: number;
  accent: number;
  velocity: number;
  source: 'authored' | 'derived';
  kind: PerformanceEventKind;
  pitchIntent?:
    | 'written'
    | 'root'
    | 'fifth'
    | 'chord-tone'
    | 'scale-neighbor'
    | 'approach'
    | 'drone'
    | 'register-copy';
  articulation?: string;
  structural: boolean;
  hitType?: string;
  onsetIndex?: number;
}

export interface PerformancePhraseMemory {
  lastEvents: InterpretedAttack[];
  repetitionCount: number;
  lastDensity: number;
  lastAccentPositions: number[];
  lastEndingType?: string;
  developmentStage: DevelopmentStage;
  motifSignature?: string;
  phraseIndex: number;
}

export function createInitialPhraseMemory(): PerformancePhraseMemory {
  return {
    lastEvents: [],
    repetitionCount: 0,
    lastDensity: 0,
    lastAccentPositions: [],
    developmentStage: 'establish',
    phraseIndex: -1,
  };
}

/**
 * Deterministically steps the phrase development state machine based on phrase index,
 * repetition count, and the style's phrase development probabilities.
 */
export function advancePhraseDevelopment(
  memory: PerformancePhraseMemory,
  currentPhraseIndex: number,
  probs: PhraseDevelopmentProbabilities,
  isCadenceBar: boolean,
  seedKey: number
): DevelopmentStage {
  if (memory.phraseIndex !== currentPhraseIndex) {
    memory.phraseIndex = currentPhraseIndex;
    memory.repetitionCount = currentPhraseIndex === 0 ? 0 : memory.repetitionCount + 1;
  }

  // Cadence bar at the end of a section or phrase has high probability of cadence/ending
  if (isCadenceBar) {
    const cadenceRoll = rand01(seedOf(seedKey, memory.phraseIndex, 'cadence-check'));
    if (cadenceRoll < Math.max(0.65, probs.cadenceProbability * 3)) {
      memory.developmentStage = 'ending';
      return 'ending';
    }
  }

  // Phase 0: Initial statement
  if (memory.repetitionCount === 0) {
    memory.developmentStage = 'establish';
    return 'establish';
  }

  // Seeded transition evaluation
  const roll = rand01(seedOf(seedKey, memory.phraseIndex, memory.repetitionCount, 'dev-stage'));
  let accum = 0;

  accum += probs.repeatProbability;
  if (roll < accum) {
    memory.developmentStage = 'repeat';
    return 'repeat';
  }

  accum += probs.variationProbability;
  if (roll < accum) {
    memory.developmentStage = 'vary';
    return 'vary';
  }

  accum += probs.answerProbability;
  if (roll < accum) {
    memory.developmentStage = 'answer';
    return 'answer';
  }

  accum += probs.fillProbability;
  if (roll < accum) {
    memory.developmentStage = 'transition';
    return 'transition';
  }

  // Default fallback depending on repetition depth
  if (memory.repetitionCount % 2 === 1) {
    memory.developmentStage = 'vary';
    return 'vary';
  }

  memory.developmentStage = 'repeat';
  return 'repeat';
}
