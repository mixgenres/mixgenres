import type { MusicalPattern, GrooveFusionSpec } from '../../types';
import { contractForGenre } from '../../data/styles/contracts';

/** Simple deterministic pseudo-random generator between 0 and 1 */
function pseudoHash(str: string, index: number): number {
  let h = 0x811c9dc5 ^ index;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return ((h >>> 0) % 10000) / 10000;
}

/**
 * Interleaves two patterns' onset and accent grids into a coherent hybrid groove.
 * Rather than simply gating or picking one over the other, it computes the shared
 * metric anchors and probabilistic off-beat syncopations with collision resolution.
 */
export function interleavePatterns(
  primaryPattern: MusicalPattern,
  weightPrimary: number,
  secondaryPattern: MusicalPattern,
  weightSecondary: number,
  subdivisions = 16,
  seed = 0
): {
  onsetGrid: number[];
  accentProfile: number[];
  hitGrid?: string[];
} {
  const totalWeight = Math.max(0.001, weightPrimary + weightSecondary);
  const normP = weightPrimary / totalWeight;
  const normS = weightSecondary / totalWeight;

  const subP = primaryPattern.subdivisions || subdivisions;
  const subS = secondaryPattern.subdivisions || subdivisions;

  // Map onsets to normalized step positions in [0, subdivisions)
  const mapOnsets = (pat: MusicalPattern, patSub: number) => {
    const onsets = pat.onsetGrid || [];
    const accents = pat.accentProfile || onsets.map(() => 0.7);
    const hits = pat.hitGrid || [];
    const stepMap = new Map<number, { accent: number; hit?: string }>();

    for (let idx = 0; idx < onsets.length; idx++) {
      const step = onsets[idx];
      // Scale step to target subdivisions
      const targetStep = Math.round((step / patSub) * subdivisions) % subdivisions;
      const accent = accents[idx] ?? 0.7;
      const hit = hits[idx];
      if (!stepMap.has(targetStep) || (stepMap.get(targetStep)?.accent ?? 0) < accent) {
        stepMap.set(targetStep, { accent, hit });
      }
    }
    return stepMap;
  };

  const mapA = mapOnsets(primaryPattern, subP);
  const mapB = mapOnsets(secondaryPattern, subS);

  const combinedOnsets: number[] = [];
  const combinedAccents: number[] = [];
  const combinedHits: string[] = [];
  const hasHits = (primaryPattern.hitGrid && primaryPattern.hitGrid.length > 0) ||
                  (secondaryPattern.hitGrid && secondaryPattern.hitGrid.length > 0);

  const seedKey = `${primaryPattern.id}:${secondaryPattern.id}:${seed}`;

  for (let step = 0; step < subdivisions; step++) {
    const inA = mapA.get(step);
    const inB = mapB.get(step);

    if (inA && inB) {
      // Anchored in both traditions: guaranteed onset, weighted accent
      combinedOnsets.push(step);
      const blendedAccent = Math.min(1.0, Math.max(0.2, inA.accent * normP + inB.accent * normS));
      combinedAccents.push(blendedAccent);
      if (hasHits) {
        const hit = normP >= normS ? (inA.hit || inB.hit || 'accent') : (inB.hit || inA.hit || 'accent');
        combinedHits.push(hit);
      }
    } else if (inA) {
      // Primary onset: kept with high likelihood unless secondary dominates heavily
      const roll = pseudoHash(seedKey, step * 7 + 1);
      const keep = normP >= 0.5 || roll < normP + 0.35;
      if (keep) {
        combinedOnsets.push(step);
        combinedAccents.push(Math.max(0.25, inA.accent * (0.8 + 0.2 * normP)));
        if (hasHits) combinedHits.push(inA.hit || 'accent');
      }
    } else if (inB) {
      // Secondary guest syncopation: injected according to secondary weight
      const roll = pseudoHash(seedKey, step * 13 + 3);
      const keep = roll < (normS * 0.88);
      if (keep) {
        combinedOnsets.push(step);
        combinedAccents.push(Math.max(0.2, inB.accent * (0.75 + 0.25 * normS)));
        if (hasHits) combinedHits.push(inB.hit || 'accent');
      }
    }
  }

  // Safety: Ensure grid is not completely empty
  if (combinedOnsets.length === 0) {
    combinedOnsets.push(0);
    combinedAccents.push(0.8);
    if (hasHits) combinedHits.push('accent');
  }

  return {
    onsetGrid: combinedOnsets,
    accentProfile: combinedAccents,
    hitGrid: hasHits ? combinedHits : undefined,
  };
}

/**
 * Resolves the master clock (meter, cycle length, and subdivisions) for a fusion spec.
 */
export function resolveFusionClock(spec: GrooveFusionSpec): {
  meter: string;
  cycleLength: number;
  subdivision: number;
} {
  const clockOwnerId = spec.clockGenreId || spec.members[0]?.genreId;
  const contract = contractForGenre(clockOwnerId);
  return {
    meter: contract.meter,
    cycleLength: contract.cycleLength,
    subdivision: contract.subdivision,
  };
}

/**
 * In 'call-and-response' strategy, tracks rotate which genre's rhythmic vocabulary
 * they speak every `rotatesEveryBars` measures (default 2).
 */
export function rotateTrackGenreForBar(
  spec: GrooveFusionSpec,
  trackRole: string,
  barIndex: number
): { genreId: string; styleId?: string; weight: number } {
  if (!spec.members.length) {
    return { genreId: spec.clockGenreId, weight: 1.0 };
  }
  const rotateBars = Math.max(1, spec.rotatesEveryBars ?? 2);
  const cycleIndex = Math.floor(barIndex / rotateBars);
  // Give rhythm section (bass, drums) an offset from leads/horns for dialogue
  const roleOffset = ['lead', 'melody', 'counterline', 'guitar'].includes(trackRole) ? 1 : 0;
  const memberIndex = (cycleIndex + roleOffset) % spec.members.length;
  return spec.members[memberIndex];
}
