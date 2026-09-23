import type { MusicalPattern, PatternVariant, SectionEnergy } from '../../types';
import type { PerformanceGrammar } from './performanceGrammar';
import type {
  InterpretedAttack,
  PerformancePhraseMemory,
  DevelopmentStage,
  PerformanceEventKind,
} from './phraseMemory';
import { rand01, seedOf } from '../generators/groove';
import type { ParsedChord } from '../theory/theory';

export interface PerformanceExplanation {
  trackId: string;
  role: string;
  patternId: string;
  variantId?: string;
  developmentStage: DevelopmentStage;
  authoredCount: number;
  derivedCount: number;
  restCount: number;
  interactionCount: number;
  summary: string;
}

export interface EnsembleContext {
  kickTimesInBar?: number[];
  leadActiveBeats?: [number, number][]; // [startBeat, endBeat] intervals where lead/soloist plays
  otherAccentsInBar?: number[];
}

export interface InteractionDirective {
  targetTrackId: string;
  relationship:
    | 'reinforce'
    | 'answer'
    | 'avoid'
    | 'anticipate'
    | 'follow'
    | 'mirror'
    | 'complement'
    | 'accentWith'
    | 'leaveSpace';
  strength?: number;
}

export interface InterpretPatternOptions {
  trackId: string;
  role: string;
  instrumentId: string;
  pattern: MusicalPattern;
  selectedVariant?: PatternVariant;
  grammar: PerformanceGrammar;
  chord: ParsedChord;
  nextChord?: ParsedChord;
  sectionEnergy: SectionEnergy;
  beatsPerBar: number;
  barIndex: number;
  barInPhrase: number;
  phraseBars: number;
  isPhraseStart: boolean;
  isPhraseEnd: boolean;
  isCadenceBar: boolean;
  memory: PerformancePhraseMemory;
  developmentDial: number; // 0..1
  expressionDial: number;  // 0..1
  seed: number;
  ensembleContext?: EnsembleContext;
  interactions?: InteractionDirective[];
}

export interface InterpretationResult {
  attacks: InterpretedAttack[];
  explanation: PerformanceExplanation;
}

/**
 * Deterministic pattern interpreter: takes authored pattern material and interprets it
 * according to resolved style grammar, phrase memory, and ensemble interaction.
 */
export function interpretPattern(options: InterpretPatternOptions): InterpretationResult {
  const {
    trackId,
    role,
    instrumentId,
    pattern,
    selectedVariant,
    grammar,
    chord,
    nextChord,
    sectionEnergy,
    beatsPerBar,
    barIndex,
    barInPhrase,
    phraseBars,
    isPhraseStart,
    isPhraseEnd,
    isCadenceBar,
    memory,
    developmentDial,
    seed,
    ensembleContext,
    interactions = [],
  } = options;

  const stage = memory.developmentStage;
  const sub = pattern.subdivisions || 16;
  const cycleBars = Math.max(1, pattern.cycleLength || 1);
  const barInCycle = barIndex % cycleBars;

  // 1. Choose base onset data: prefer selected variant or pattern variants matching phrase stage
  let activeVariant = selectedVariant;
  if (!activeVariant && pattern.variants && pattern.variants.length > 0) {
    if (isCadenceBar || isPhraseEnd) {
      activeVariant = pattern.variants.find(v =>
        v.variationType === 'cadence' || v.variationType === 'phraseEnd' || v.variationType === 'fill'
      );
    } else if (isPhraseStart) {
      activeVariant = pattern.variants.find(v => v.variationType === 'phraseStart');
    } else if (sectionEnergy <= 2) {
      activeVariant = pattern.variants.find(v => v.variationType === 'sparse' || v.variationType === 'breakdown');
    } else if (sectionEnergy >= 4 && developmentDial > 0.5) {
      activeVariant = pattern.variants.find(v => v.variationType === 'dense' || v.variationType === 'syncopated');
    }
  }

  const rawOnsets = activeVariant?.onsetGrid ?? pattern.onsetGrid ?? [];
  const rawAccents = activeVariant?.accentProfile ?? pattern.accentProfile ?? [];
  const rawDurations = activeVariant?.durationGrid ?? pattern.durationGrid ?? [];
  const rawHitTypes = activeVariant?.hitGrid ?? pattern.hitGrid ?? [];

  // Filter onsets belonging to this bar in multi-bar cycles
  const barOnsets: { step: number; accent: number; duration: number; hitType?: string; originalIdx: number }[] = [];
  const stepsPerMeasure = sub;
  const cycleStartStep = barInCycle * stepsPerMeasure;
  const cycleEndStep = cycleStartStep + stepsPerMeasure;

  for (let i = 0; i < rawOnsets.length; i++) {
    const step = rawOnsets[i];
    if (step >= cycleStartStep && step < cycleEndStep) {
      barOnsets.push({
        step: step - cycleStartStep,
        accent: rawAccents[i] ?? 0.75,
        duration: rawDurations[i] ?? 1,
        hitType: rawHitTypes[i],
        originalIdx: i,
      });
    }
  }

  // Fallback if no hits in this bar of cycle
  if (barOnsets.length === 0 && rawOnsets.length > 0 && barInCycle === 0) {
    for (let i = 0; i < rawOnsets.length; i++) {
      barOnsets.push({
        step: rawOnsets[i] % stepsPerMeasure,
        accent: rawAccents[i] ?? 0.75,
        duration: rawDurations[i] ?? 1,
        hitType: rawHitTypes[i],
        originalIdx: i,
      });
    }
  }

  const attacks: InterpretedAttack[] = [];
  let authoredCount = 0;
  let derivedCount = 0;
  let restCount = 0;
  let interactionCount = 0;

  // 2. Process authored onsets into base attacks
  for (let i = 0; i < barOnsets.length; i++) {
    const o = barOnsets[i];
    const beat = (o.step / stepsPerMeasure) * beatsPerBar;
    const isDownbeat = beat < 0.12;
    const isStructural = isDownbeat || o.accent >= 0.82 || grammar.preserveAuthoredRhythm >= 0.95;

    // Pitch intent determination
    let pitchIntent: InterpretedAttack['pitchIntent'] = 'written';
    if (role === 'bass') {
      if (isDownbeat) {
        pitchIntent = 'root';
      } else if (i === barOnsets.length - 1 && nextChord && nextChord.rootPc !== chord.rootPc) {
        pitchIntent = 'approach';
      } else if (o.accent > 0.78 && grammar.allowDerivedPitch > 0.3) {
        pitchIntent = (i % 2 === 1) ? 'fifth' : 'root';
      } else {
        pitchIntent = 'root';
      }
    } else if (role === 'comp' || role === 'harmony' || role === 'keyboard' || role === 'piano') {
      pitchIntent = 'chord-tone';
    }

    const baseKind: PerformanceEventKind = (stage === 'repeat') ? 'repeat' : 'written';

    attacks.push({
      beat,
      durationSteps: o.duration,
      accent: o.accent,
      velocity: Math.round(o.accent * 100),
      source: 'authored',
      kind: baseKind,
      pitchIntent,
      structural: isStructural,
      hitType: o.hitType,
      articulation: activeVariant?.articulation,
      onsetIndex: o.originalIdx,
    });
    authoredCount++;
  }

  // 3. Stage & Phrase Modifications (Variation, Silence/Rest, Answer)
  // Non-structural attacks may be subjected to musical silence / rest decisions
  const shouldThinForSpace = (stage === 'answer' || sectionEnergy <= 2) && attacks.length > 2;
  if (shouldThinForSpace && developmentDial > 0.25) {
    const leaveSpaceRoll = rand01(seedOf(seed, barIndex, 'leave-space'));
    if (leaveSpaceRoll < (grammar.phraseDevelopment?.restProbability ?? 0.1) * 2) {
      // Performer leaves space in first half or second half of the bar
      const leaveFirstHalf = leaveSpaceRoll < 0.05;
      for (let i = attacks.length - 1; i >= 0; i--) {
        const atk = attacks[i];
        if (!atk.structural) {
          const inTargetZone = leaveFirstHalf ? atk.beat < beatsPerBar / 2 : atk.beat >= beatsPerBar / 2;
          if (inTargetZone) {
            attacks.splice(i, 1);
            restCount++;
          }
        }
      }
    }
  }

  // 4. Delayed Entry / Space after repetition
  if (memory.repetitionCount >= 2 && stage === 'vary' && (role === 'comp' || role === 'percussion') && attacks.length > 3) {
    const delayedEntryRoll = rand01(seedOf(seed, barIndex, 'delayed-entry'));
    if (delayedEntryRoll < 0.22) {
      for (let i = attacks.length - 1; i >= 0; i--) {
        if (!attacks[i].structural && attacks[i].beat < 1.0) {
          attacks.splice(i, 1);
          restCount++;
        }
      }
    }
  }

  // 5. Subdivision & Derived Attacks (where permitted by grammar)
  const canSubdivide = grammar.allowDerivedAttacks > 0.15 &&
    (stage === 'vary' || stage === 'transition' || sectionEnergy >= 4) &&
    developmentDial > 0.35 &&
    !(grammar.forbiddenInterpretations?.includes('dense-subdivision'));

  if (canSubdivide && attacks.length > 0 && attacks.length < 12) {
    const subdivideRoll = rand01(seedOf(seed, barIndex, 'subdiv'));
    if (subdivideRoll < grammar.allowDerivedAttacks) {
      // Find a suitable gap to insert an idiomatic ghost/pickup or subdivision
      for (let i = 0; i < attacks.length - 1; i++) {
        const cur = attacks[i];
        const nxt = attacks[i + 1];
        const gap = nxt.beat - cur.beat;
        if (gap >= 0.75 && gap <= 1.5) {
          const midBeat = cur.beat + gap / 2;
          const ghostHit: InterpretedAttack = {
            beat: midBeat,
            durationSteps: 1,
            accent: cur.accent * 0.65,
            velocity: Math.round(cur.velocity * 0.6),
            source: 'derived',
            kind: (stage === 'transition') ? 'pickup' : 'subdivision',
            pitchIntent: cur.pitchIntent === 'root' ? 'fifth' : cur.pitchIntent,
            structural: false,
            hitType: role === 'drums' ? 'hat' : cur.hitType,
            articulation: 'ghost',
          };
          attacks.splice(i + 1, 0, ghostHit);
          derivedCount++;
          break; // Insert one per bar for restraint
        }
      }
    }
  }

  // 6. Cadence / Phrase Ending Pickup or Fill
  if ((isCadenceBar || isPhraseEnd) && grammar.phraseDevelopment?.cadenceProbability) {
    const cadenceRoll = rand01(seedOf(seed, barIndex, 'phrase-cadence'));
    if (cadenceRoll < (grammar.phraseDevelopment.cadenceProbability * 3 + developmentDial * 0.2)) {
      const lastAtk = attacks[attacks.length - 1];
      if (lastAtk && lastAtk.beat < beatsPerBar - 0.75) {
        // Insert a pickup to lead into the next section/phrase
        attacks.push({
          beat: beatsPerBar - 0.5,
          durationSteps: 1,
          accent: 0.85,
          velocity: Math.round(lastAtk.velocity * 0.95),
          source: 'derived',
          kind: 'pickup',
          pitchIntent: role === 'bass' ? 'approach' : lastAtk.pitchIntent,
          structural: false,
          hitType: role === 'drums' ? 'snare' : lastAtk.hitType,
          articulation: 'accent',
        });
        derivedCount++;
      }
    }
  }

  // 7. Ensemble Interactions
  for (const inter of interactions) {
    if (inter.relationship === 'leaveSpace') {
      // Suppress non-structural attacks to give room to another part
      for (let i = attacks.length - 1; i >= 0; i--) {
        if (!attacks[i].structural) {
          attacks.splice(i, 1);
          interactionCount++;
          restCount++;
        }
      }
    } else if (inter.relationship === 'accentWith' && ensembleContext?.otherAccentsInBar) {
      // Align or reinforce accents
      for (const atk of attacks) {
        const matchesAccent = ensembleContext.otherAccentsInBar.some(
          b => Math.abs(b - atk.beat) < 0.15
        );
        if (matchesAccent) {
          atk.accent = Math.min(1.0, atk.accent * 1.15);
          atk.velocity = Math.min(127, Math.round(atk.velocity * 1.15));
          interactionCount++;
        }
      }
    } else if (inter.relationship === 'avoid' && ensembleContext?.leadActiveBeats) {
      // Soften or drop hits when lead is singing/playing intensely
      for (let i = attacks.length - 1; i >= 0; i--) {
        const atk = attacks[i];
        const overlaps = ensembleContext.leadActiveBeats.some(
          ([start, end]) => atk.beat >= start - 0.05 && atk.beat <= end + 0.05
        );
        if (overlaps && !atk.structural) {
          atk.velocity = Math.round(atk.velocity * 0.72);
          atk.accent = atk.accent * 0.8;
          interactionCount++;
        }
      }
    }
  }

  // Sort chronologically
  attacks.sort((a, b) => a.beat - b.beat);

  // Update memory state
  memory.lastEvents = attacks;
  memory.lastDensity = attacks.length;
  memory.lastAccentPositions = attacks.map(a => a.beat);

  const explanation: PerformanceExplanation = {
    trackId,
    role,
    patternId: pattern.id,
    variantId: activeVariant?.id,
    developmentStage: stage,
    authoredCount,
    derivedCount,
    restCount,
    interactionCount,
    summary: `${stage} (${authoredCount} authored, ${derivedCount} derived, ${restCount} rests)`,
  };

  return { attacks, explanation };
}
