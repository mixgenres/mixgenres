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
  occupiedSubdivisions?: number[];
  activeTrackIds?: string[];
  trackRoleMap?: Record<string, string>;
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
  isSectionStart?: boolean;
  isSectionEnd?: boolean;
  isTransitionBar?: boolean;
  transitionDirection?: 'build' | 'drop';
  sectionKind?: string;
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
 * Dynamically escalates authored articulation contextually based on cadence/phrase position
 * and role vocabulary in the active performance grammar.
 */
function contextualArticulation(
  authored: string | undefined,
  isCadenceBar: boolean,
  isStructural: boolean,
  grammar: PerformanceGrammar,
  role: string,
  instrumentId?: string,
  sectionKind?: string,
): string | undefined {
  if (authored) return authored;
  const vocab = grammar.articulationVocabulary?.[role] ?? [];
  const inst = (instrumentId || '').toLowerCase();
  const kind = (sectionKind || '').toLowerCase();

  // Culturally Grounded Articulations
  // 1. Tango bass patterns trigger arrastre slide
  if ((inst.includes('upright') || inst.includes('contrabajo') || role === 'bass') && (vocab.includes('arrastre') || inst.includes('tango') || kind.includes('tango'))) {
    if (isCadenceBar || !isStructural) return 'arrastre';
  }
  // 2. Bachata patterns dictate apagado right-hand palm mute
  if ((inst.includes('requinto') || inst.includes('bachata') || inst.includes('guitar')) && (vocab.includes('apagado') || vocab.includes('palm-mute') || inst.includes('requinto'))) {
    if (!isStructural) return 'apagado';
  }
  // 3. Reggae Hammond patterns execute syncopated double-handed bubble
  if ((inst.includes('organ') || inst.includes('hammond')) && (vocab.includes('bubble') || vocab.includes('staccato') || inst.includes('reggae'))) {
    if (!isStructural) return 'bubble';
  }
  // 4. Flamenco patterns trigger rasgueado or golpe or alzapua
  if (inst.includes('spanish-guitar') || inst.includes('flamenco') || inst.includes('cajon')) {
    if (vocab.includes('alzapua') && !isStructural) return 'alzapua';
    if (vocab.includes('rasgueado') && isStructural) return 'rasgueado';
    if (vocab.includes('golpe')) return 'golpe';
  }
  // 5. Salsa and Timba patterns trigger montuno / tumbao strokes
  if (inst.includes('piano') && (vocab.includes('montuno') || inst.includes('salsa') || inst.includes('timba'))) {
    return 'montuno';
  }
  if (inst.includes('conga') || inst.includes('tumbao')) {
    return 'tumbao';
  }
  // 6. Samba percussion triggers friction modulation (Cuíca / Pandeiro)
  if (inst.includes('cuica') || inst.includes('pandeiro') || vocab.includes('cuica-friction') || vocab.includes('friction_mod')) {
    return 'cuica-friction';
  }
  // 7. Wind / Brass growl & falls
  if (role === 'lead' || role === 'horns' || inst.includes('sax') || inst.includes('trumpet') || inst.includes('trombone') || inst.includes('horn')) {
    if (isCadenceBar && (vocab.includes('fall') || vocab.includes('fall_off') || vocab.includes('doit'))) {
      return vocab.includes('doit') ? 'doit' : 'fall';
    }
    if (vocab.includes('growl') || vocab.includes('flutter_tongue')) {
      return 'growl';
    }
  }

  if (isCadenceBar && vocab.includes('pesante') && !isStructural) return 'pesante';
  if (isCadenceBar && vocab.includes('arrastre')) return 'arrastre';
  return authored;
}

/**
 * Deterministic, musically expressive pattern interpreter:
 * Evaluates authored patterns as vocabulary rather than static loops.
 * Employs phrase memory, role-aware attack filtering, staggered section entries,
 * ensemble interaction, and an anti-drone safeguard.
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
    isSectionStart = false,
    isSectionEnd = false,
    isTransitionBar = false,
    transitionDirection,
    sectionKind,
    memory,
    developmentDial,
    expressionDial,
    seed,
    ensembleContext,
    interactions = [],
  } = options;

  const stage = memory.developmentStage;
  const sub = pattern.subdivisions || 16;
  const cycleBars = Math.max(1, pattern.cycleLength || 1);
  const barInCycle = barIndex % cycleBars;

  let authoredCount = 0;
  let derivedCount = 0;
  let restCount = 0;
  let interactionCount = 0;

  // 1. Staggered Section Entrances:
  // Prevent every instrument from blasting on step 0 at the start of a section.
  // Groove foundation (bass, kick, percussion anchor) establishes first;
  // melody, lead, and secondary texture/comp enter organically.
  const isIntroOrVerse = sectionKind === 'intro' || sectionKind === 'verse' || sectionKind === 'breakdown';
  const isMelodicLead = role === 'lead' || role === 'melody';
  const isTexture = role === 'texture' || role === 'pad';

  if (isSectionStart && barInPhrase === 0) {
    if (isMelodicLead && isIntroOrVerse && sectionEnergy <= 3) {
      // Lead rests on the very first bar of the section to let rhythm section establish groove
      const delayedLeadRoll = rand01(seedOf(seed, barIndex, 'staggered-lead-start'));
      if (delayedLeadRoll < 0.65) {
        memory.lastEvents = [];
        memory.lastDensity = 0;
        memory.lastAccentPositions = [];
        return {
          attacks: [],
          explanation: {
            trackId,
            role,
            patternId: pattern.id,
            developmentStage: 'rest',
            authoredCount: 0,
            derivedCount: 0,
            restCount: 1,
            interactionCount: 0,
            summary: `staggered entrance rest (bar 0)`,
          },
        };
      }
    } else if (isTexture && sectionEnergy <= 2 && isIntroOrVerse) {
      // Texture rests at start of quiet sections, enters on bar 2
      memory.lastEvents = [];
      memory.lastDensity = 0;
      memory.lastAccentPositions = [];
      return {
        attacks: [],
        explanation: {
          trackId,
          role,
          patternId: pattern.id,
          developmentStage: 'rest',
          authoredCount: 0,
          derivedCount: 0,
          restCount: 1,
          interactionCount: 0,
          summary: `texture delayed entry`,
        },
      };
    }
  }

  // 2. Complete Rest Stage Handling
  if (stage === 'rest') {
    // If resting, instrument is completely silent for intentional musical space
    memory.lastEvents = [];
    memory.lastDensity = 0;
    memory.lastAccentPositions = [];
    return {
      attacks: [],
      explanation: {
        trackId,
        role,
        patternId: pattern.id,
        variantId: selectedVariant?.id,
        developmentStage: 'rest',
        authoredCount: 0,
        derivedCount: 0,
        restCount: 1,
        interactionCount: 0,
        summary: `intentional musical rest`,
      },
    };
  }

  // 3. Select pattern variant matching phrase development stage
  let activeVariant = selectedVariant;
  if (!activeVariant && pattern.variants && pattern.variants.length > 0) {
    if (stage === 'cadence' || isCadenceBar || isPhraseEnd) {
      activeVariant = pattern.variants.find(v =>
        v.variationType === 'cadence' || v.variationType === 'phraseEnd' || v.variationType === 'fill'
      );
    } else if (stage === 'transition' || isPhraseStart) {
      activeVariant = pattern.variants.find(v => v.variationType === 'phraseStart' || v.variationType === 'transition');
    } else if (stage === 'vary') {
      activeVariant = pattern.variants.find(v =>
        v.variationType === 'syncopated' || v.variationType === 'dense' || v.variationType === 'sparse' || v.variationType === 'ornamented'
      );
    } else if (stage === 'answer') {
      activeVariant = pattern.variants.find(v => v.variationType === 'sparse' || v.variationType === 'syncopated');
    } else if (sectionEnergy <= 2) {
      activeVariant = pattern.variants.find(v => v.variationType === 'sparse' || v.variationType === 'breakdown');
    } else if (sectionEnergy >= 4 && developmentDial > 0.4) {
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

  // 4. Process authored onsets into base attacks with role and harmonic awareness
  for (let i = 0; i < barOnsets.length; i++) {
    const o = barOnsets[i];
    const beat = (o.step / stepsPerMeasure) * beatsPerBar;
    const isDownbeat = beat < 0.12;
    const isStrongBeat = Math.abs(beat - Math.round(beat)) < 0.12;
    const isLooseFeel = grammar.microtiming?.tendency === 'rubato' || grammar.microtiming?.tendency === 'drunk' || grammar.microtiming?.tendency === 'laid-back';
    const structuralThreshold = isLooseFeel ? 0.92 : 0.82;
    const isStructural = isDownbeat
      ? (isLooseFeel && role !== 'bass' ? o.accent >= 0.88 : true)
      : (o.accent >= structuralThreshold || grammar.preserveAuthoredRhythm >= 0.95);

    // Pitch intent determination
    let pitchIntent: InterpretedAttack['pitchIntent'] = 'written';
    let registerOffset = 0;

    if (role === 'bass') {
      if (isTransitionBar && transitionDirection === 'build') {
        // Parametric walk-up: bias pitchIntent toward 'approach' across transition bars
        pitchIntent = 'approach';
      } else if (isDownbeat) {
        pitchIntent = 'root';
      } else if (i === barOnsets.length - 1 && nextChord && nextChord.rootPc !== chord.rootPc) {
        pitchIntent = 'approach';
      } else if (stage === 'vary' && o.accent > 0.7 && rand01(seedOf(seed, barIndex, i, 'bass-vary')) > 0.5) {
        pitchIntent = (i % 2 === 1) ? 'fifth' : 'octave';
      } else if (o.accent > 0.78 && grammar.allowDerivedPitch > 0.3) {
        pitchIntent = (i % 2 === 1) ? 'fifth' : 'root';
      } else {
        pitchIntent = 'root';
      }
    } else if (role === 'comp' || role === 'harmony' || role === 'keyboard' || role === 'piano' || role === 'guitar') {
      pitchIntent = 'chord-tone';
      if (stage === 'vary' && memory.repetitionCount >= 2) {
        registerOffset = (memory.repetitionCount % 2 === 1) ? 12 : 0;
      }
    } else if (role === 'lead' || role === 'melody') {
      pitchIntent = isDownbeat ? 'chord-tone' : 'scale-neighbor';
    }

    const baseKind: PerformanceEventKind = (stage === 'repeat') ? 'repeat' : (stage === 'vary' ? 'variation' : 'written');

    // Dynamic velocity scaling based on stage and expression
    let velocityMultiplier = 1.0;
    if (stage === 'repeat') {
      // Subtle micro-dynamics so repetitions don't sound mechanical
      const dynamicNudge = (rand01(seedOf(seed, barIndex, i, 'dyn-nudge')) - 0.5) * 0.12 * expressionDial;
      velocityMultiplier += dynamicNudge;
    } else if (stage === 'vary') {
      velocityMultiplier += (o.accent > 0.75 ? 0.08 : -0.06);
    } else if (stage === 'answer') {
      velocityMultiplier -= 0.12;
    }

    // Parametric transition shaping for accompaniment
    if (isTransitionBar && (role === 'harmony' || role === 'comp' || role === 'pad' || role === 'texture' || role === 'keyboard')) {
      const barProgress = Math.max(0, Math.min(1, o.step / sub));
      if (transitionDirection === 'build') {
        velocityMultiplier *= (0.8 + 0.45 * barProgress); // crescendo
      } else if (transitionDirection === 'drop') {
        velocityMultiplier *= (1.15 - 0.45 * barProgress); // decrescendo
      }
    }

    let contextualArt = contextualArticulation(activeVariant?.articulation, isCadenceBar, isStructural, grammar, role, instrumentId, sectionKind);
    let calculatedVelocity = Math.max(20, Math.min(127, Math.round(o.accent * 100 * velocityMultiplier)));

    // Conga Tumbao Distinct Stroke Techniques:
    // Heel-Toe (Palma-Dedo): Low velocity (20-45), muted high frequencies
    // Open Tone (Abierto): Mid-high velocity (70-95), full resonance sustain
    // Slap (Seco): High velocity (100-127), sharp transient, high-pass filtered tail
    const isCongaOrLatinPerc = /conga|tumbao|bata|quinto|tumba/.test((instrumentId || '').toLowerCase()) || role === 'percussion';
    if (isCongaOrLatinPerc) {
      const stepInBar = o.step % 16;
      if (stepInBar === 4 || stepInBar === 12 || (o.accent > 0.88 && (stepInBar === 4 || stepInBar === 12))) {
        // Seco / Slap stroke on beat 2 or 4
        contextualArt = 'hand_slap';
        calculatedVelocity = Math.max(100, Math.min(127, Math.round(calculatedVelocity * 1.15)));
      } else if (stepInBar === 6 || stepInBar === 7 || stepInBar === 14 || stepInBar === 15) {
        // Abierto / Open tone stroke on syncopated upbeats
        contextualArt = 'hand_open';
        calculatedVelocity = Math.max(70, Math.min(95, Math.round(calculatedVelocity * 0.95)));
      } else {
        // Palma-Dedo / Heel-Toe muted stroke
        contextualArt = 'hand_mute';
        calculatedVelocity = Math.max(20, Math.min(45, Math.round(calculatedVelocity * 0.4)));
      }
    }

    attacks.push({
      beat,
      durationSteps: o.duration,
      accent: o.accent,
      velocity: calculatedVelocity,
      source: 'authored',
      kind: baseKind,
      pitchIntent,
      structural: isStructural,
      hitType: o.hitType,
      articulation: contextualArt,
      onsetIndex: o.originalIdx,
      registerOffset,
    });
    authoredCount++;
  }

  // Inject subtle acoustic artifacts (fret noise, breath sound, key click)
  const isAcousticStringOrWind = /guitar|bass|requinto|flute|sax|trumpet|horn|woodwind/.test((instrumentId || '').toLowerCase());
  if (isAcousticStringOrWind && attacks.length > 1 && expressionDial > 0.3) {
    const artifactRoll = rand01(seedOf(seed, barIndex, 'acoustic-noise-artifact'));
    if (artifactRoll < 0.28) {
      const targetAtk = attacks[attacks.length - 1];
      const noiseOffset = Math.min(beatsPerBar - 0.1, targetAtk.beat + 0.35);
      attacks.push({
        beat: noiseOffset,
        durationSteps: 0.5,
        accent: 0.25,
        velocity: Math.round(18 + rand01(seedOf(seed, barIndex, 'noise-vel')) * 20),
        source: 'derived',
        kind: 'written',
        pitchIntent: 'written',
        structural: false,
        hitType: 'ghost',
        articulation: 'ghost',
      });
      derivedCount++;
    }
  }

  // Cadence/phrase-end fallback: ensure phrase boundaries feel intentional even when no authored variant exists
  if (!activeVariant && (isCadenceBar || isPhraseEnd) && attacks.length > 0) {
    const last = attacks[attacks.length - 1];
    last.accent = Math.min(1, last.accent * 1.12);
    last.velocity = Math.min(127, Math.round(last.velocity * 1.1));
    last.structural = true; // protect it from the thinning pass below
  }

  // 5. Attack-Level Rejection / Thinning / Space Decision Making:
  // Allow the interpreter to prune non-essential attacks according to role, stage, and repetition
  if (attacks.length > 2) {
    if (stage === 'answer') {
      // Answering instruments drop non-structural attacks in the first half of the bar
      for (let i = attacks.length - 1; i >= 0; i--) {
        const atk = attacks[i];
        if (!atk.structural && atk.beat < beatsPerBar / 2) {
          attacks.splice(i, 1);
          restCount++;
        }
      }
    } else if (sectionEnergy <= 2 && attacks.length > 4 && role !== 'bass') {
      // Thin dense accompaniment during low-energy sections
      for (let i = attacks.length - 1; i >= 0; i--) {
        if (!attacks[i].structural && i % 2 === 1) {
          attacks.splice(i, 1);
          restCount++;
        }
      }
    }
  }

  // 6. Subdivision & Derived Pickup Attacks (where permitted by grammar)
  const isPostDropLead = (role === 'lead' || role === 'melody') && isSectionStart && transitionDirection === 'drop';
  const canSubdivide = !isPostDropLead && grammar.allowDerivedAttacks > 0.15 &&
    (stage === 'vary' || stage === 'transition' || sectionEnergy >= 4) &&
    developmentDial > 0.35 &&
    !(grammar.forbiddenInterpretations?.includes('dense-subdivision'));

  if (canSubdivide && attacks.length > 0 && attacks.length < 10) {
    const subdivideRoll = rand01(seedOf(seed, barIndex, 'subdiv'));
    if (subdivideRoll < grammar.allowDerivedAttacks) {
      for (let i = 0; i < attacks.length - 1; i++) {
        const cur = attacks[i];
        const nxt = attacks[i + 1];
        const gap = nxt.beat - cur.beat;
        if (gap >= 0.75 && gap <= 1.5) {
          const midBeat = cur.beat + gap / 2;
          const ghostHit: InterpretedAttack = {
            beat: midBeat,
            durationSteps: 1,
            accent: cur.accent * 0.62,
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
          break;
        }
      }
    }
  }

  // 7. Cadence / Boundary Fill or Pickup
  if ((isCadenceBar || isPhraseEnd) && grammar.phraseDevelopment?.cadenceProbability) {
    const cadenceRoll = rand01(seedOf(seed, barIndex, 'phrase-cadence'));
    if (cadenceRoll < (grammar.phraseDevelopment.cadenceProbability * 3 + developmentDial * 0.2)) {
      const lastAtk = attacks[attacks.length - 1];
      if (lastAtk && lastAtk.beat < beatsPerBar - 0.75) {
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

  // 8. Ensemble Listening & Interactions
  if (ensembleContext?.leadActiveBeats && (role === 'comp' || role === 'harmony' || role === 'texture')) {
    // Duck and thin comping hits when lead vocalist/soloist is active
    for (let i = attacks.length - 1; i >= 0; i--) {
      const atk = attacks[i];
      const overlaps = ensembleContext.leadActiveBeats.some(
        ([start, end]) => atk.beat >= start - 0.1 && atk.beat <= end + 0.1
      );
      if (overlaps) {
        if (!atk.structural && rand01(seedOf(seed, barIndex, i, 'comp-lead-duck')) > 0.4) {
          attacks.splice(i, 1);
          restCount++;
          interactionCount++;
        } else {
          atk.velocity = Math.round(atk.velocity * 0.7);
          atk.accent = atk.accent * 0.75;
          interactionCount++;
        }
      }
    }
  }

  if (role === 'bass' && ensembleContext?.kickTimesInBar && ensembleContext.kickTimesInBar.length > 0) {
    // Bass listens to kick drum: aligns syncopated attacks to kick accents
    for (const atk of attacks) {
      const matchingKick = ensembleContext.kickTimesInBar.find(k => Math.abs(k - atk.beat) < 0.2);
      if (matchingKick !== undefined) {
        atk.accent = Math.min(1.0, atk.accent * 1.1);
        atk.velocity = Math.min(127, Math.round(atk.velocity * 1.08));
        interactionCount++;
      }
    }
  }

  for (const inter of interactions) {
    if (inter.relationship === 'leaveSpace') {
      for (let i = attacks.length - 1; i >= 0; i--) {
        if (!attacks[i].structural) {
          attacks.splice(i, 1);
          interactionCount++;
          restCount++;
        }
      }
    } else if (inter.relationship === 'accentWith' && ensembleContext?.otherAccentsInBar) {
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
    }
  }

  attacks.sort((a, b) => a.beat - b.beat);
  const currentSignature = attacks.map(a => `${a.beat.toFixed(2)}:${a.kind}:${a.pitchIntent ?? 'w'}`).join('|');

  memory.motifSignature = currentSignature;
  memory.consecutiveIdenticalCount = 0;

  // Update memory state
  memory.lastEvents = attacks;
  memory.lastDensity = attacks.length;
  memory.lastAccentPositions = attacks.map(a => a.beat);
  memory.phraseHistory.push({
    stage,
    density: attacks.length,
    signature: currentSignature,
    onsets: attacks.map(a => a.beat),
  });
  if (memory.phraseHistory.length > 8) {
    memory.phraseHistory.shift();
  }

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
