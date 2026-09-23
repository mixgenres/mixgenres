import type { PhraseDevelopmentProbabilities } from './performanceGrammar';
import { rand01, seedOf } from '../generators/groove';

export type DevelopmentStage =
  | 'establish'
  | 'repeat'
  | 'vary'
  | 'answer'
  | 'transition'
  | 'ending'
  | 'rest'
  | 'cadence';

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
    | 'octave'
    | 'chord-tone'
    | 'scale-neighbor'
    | 'approach'
    | 'drone'
    | 'register-copy'
    | 'rest';
  articulation?: string;
  structural: boolean;
  hitType?: string;
  onsetIndex?: number;
  registerOffset?: number;
}

export interface PerformancePhraseMemory {
  lastEvents: InterpretedAttack[];
  repetitionCount: number;
  consecutiveIdenticalCount: number;
  lastDensity: number;
  lastAccentPositions: number[];
  lastEndingType?: string;
  developmentStage: DevelopmentStage;
  motifSignature?: string;
  phraseIndex: number;
  phraseHistory: {
    stage: DevelopmentStage;
    density: number;
    signature: string;
    onsets: number[];
  }[];
  restSpansRemaining: number;
}

export function createInitialPhraseMemory(): PerformancePhraseMemory {
  return {
    lastEvents: [],
    repetitionCount: 0,
    consecutiveIdenticalCount: 0,
    lastDensity: 0,
    lastAccentPositions: [],
    developmentStage: 'establish',
    phraseIndex: -1,
    phraseHistory: [],
    restSpansRemaining: 0,
  };
}

/**
 * Deterministically steps the phrase development state machine based on phrase index,
 * repetition count, anti-drone repetition tracking, and the style's phrase development probabilities.
 */
export function advancePhraseDevelopment(
  memory: PerformancePhraseMemory,
  currentPhraseIndex: number,
  probs: PhraseDevelopmentProbabilities = {
    repeatProbability: 0.45,
    variationProbability: 0.28,
    answerProbability: 0.12,
    fillProbability: 0.08,
    restProbability: 0.04,
    cadenceProbability: 0.03,
  },
  isCadenceBar: boolean,
  seedKey: number,
  role?: string
): DevelopmentStage {
  if (memory.phraseIndex !== currentPhraseIndex) {
    memory.phraseIndex = currentPhraseIndex;
    memory.repetitionCount = currentPhraseIndex === 0 ? 0 : memory.repetitionCount + 1;
  }

  // Handle active rest span
  if (memory.restSpansRemaining > 0) {
    memory.restSpansRemaining--;
    memory.developmentStage = 'rest';
    return 'rest';
  }

  // Cadence bar at the end of a section or phrase has high probability of cadence/ending
  if (isCadenceBar) {
    const cadenceRoll = rand01(seedOf(seedKey, memory.phraseIndex, 'cadence-check'));
    if (cadenceRoll < Math.max(0.65, probs.cadenceProbability * 3)) {
      memory.developmentStage = 'cadence';
      return 'cadence';
    }
  }

  // Phase 0: Initial statement
  if (memory.repetitionCount === 0) {
    memory.developmentStage = 'establish';
    memory.consecutiveIdenticalCount = 0;
    return 'establish';
  }

  // Natural 4-phrase musical development arc (Establish -> Reinforce -> Vary/Answer -> Cadence/Turnaround)
  const arcCycle = memory.repetitionCount % 4;
  if (arcCycle === 1) {
    // 2nd iteration: Reinforce/repeat with subtle nuance
    memory.developmentStage = 'repeat';
    return 'repeat';
  } else if (arcCycle === 2) {
    // 3rd iteration: Vary or answer
    const roll = rand01(seedOf(seedKey, memory.phraseIndex, memory.repetitionCount, 'dev-stage-3'));
    const isAnswer = roll < (probs.answerProbability / (probs.answerProbability + probs.variationProbability + 0.01));
    memory.developmentStage = isAnswer ? 'answer' : 'vary';
    return memory.developmentStage;
  } else if (arcCycle === 3) {
    // 4th iteration: Transition / Fill / Cadence leading to next phrase
    const roll = rand01(seedOf(seedKey, memory.phraseIndex, memory.repetitionCount, 'dev-stage-4'));
    if (roll < 0.6) {
      memory.developmentStage = 'transition';
      return 'transition';
    }
  }

  // Seeded transition evaluation using probability distribution
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

  accum += (probs.restProbability ?? 0.05);
  if (roll < accum && role !== 'bass' && role !== 'drums' && role !== 'motor') {
    memory.developmentStage = 'rest';
    return 'rest';
  }

  accum += (probs.cadenceProbability ?? 0.05);
  if (roll < accum) {
    memory.developmentStage = 'cadence';
    return 'cadence';
  }

  // Default fallback depending on repetition depth
  if (memory.repetitionCount % 2 === 1) {
    memory.developmentStage = 'vary';
    return 'vary';
  }

  memory.developmentStage = 'repeat';
  return 'repeat';
}

