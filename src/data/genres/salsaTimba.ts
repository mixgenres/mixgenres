export type ClavePatternType = '2_3_son' | '3_2_son' | '2_3_rumba' | '3_2_rumba';

export interface TumbaoPattern {
  id: string;
  bassLineSteps: Array<{ step: number; noteOffset: number; velocity: number; articulation: string }>;
}

/**
 * Shifts a 16-step pattern half (8 steps) to correctly align with 3-2 or 2-3 Clave orientation
 */
export function alignPatternToClave(
  pattern: TumbaoPattern,
  targetClave: ClavePatternType
): TumbaoPattern {
  const isTarget32 = targetClave.startsWith('3_2');
  
  // Shift 8 steps (one bar of 4/4 in 16th resolution)
  const shiftedSteps = pattern.bassLineSteps.map((event) => {
    const newStep = (event.step + (isTarget32 ? 8 : 0)) % 16;
    return { ...event, step: newStep };
  });

  return {
    ...pattern,
    id: `${pattern.id}_aligned_${targetClave}`,
    bassLineSteps: shiftedSteps.sort((a, b) => a.step - b.step),
  };
}

export const standardTumbaoPattern: TumbaoPattern = {
  id: 'standard_tumbao_2_3',
  bassLineSteps: [
    { step: 2, noteOffset: 7, velocity: 85, articulation: 'hand_mute' },
    { step: 6, noteOffset: 0, velocity: 110, articulation: 'hand_open' },
    { step: 10, noteOffset: 7, velocity: 90, articulation: 'hand_mute' },
    { step: 14, noteOffset: 0, velocity: 115, articulation: 'hand_open' },
  ],
};
