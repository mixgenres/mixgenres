export interface PerformanceEvent {
  note: number;
  velocity: number;
  durationMs: number;
  articulation: string;
}

export interface InterpretedAudioParams {
  frequencyHz: number;
  gain: number;
  filterCutoffHz: number;
  attackTimeSec: number;
  releaseTimeSec: number;
}

export function interpretPerformanceEvent(
  event: PerformanceEvent,
  baseCutoffHz: number = 2000,
  minCutoffHz: number = 80,
  maxCutoffHz: number = 18000
): InterpretedAudioParams {
  // Convert MIDI note to Frequency safely
  const midiNote = isNaN(event.note) ? 60 : event.note;
  const frequencyHz = Math.max(20, Math.min(20000, 440 * Math.pow(2, (midiNote - 69) / 12)));

  // Normalize velocity (0 - 127)
  const normalizedVel = Math.max(0, Math.min(127, event.velocity || 0)) / 127;

  // Calculate dynamic gain (Exponential response)
  const gain = Math.pow(normalizedVel, 1.8);

  // Safe Filter Cutoff Calculation (Prevents underflow/negative frequency values)
  const cutoffModulation = (normalizedVel - 0.5) * 3000; 
  const rawCutoff = baseCutoffHz + cutoffModulation;
  const filterCutoffHz = Math.max(minCutoffHz, Math.min(maxCutoffHz, rawCutoff));

  // Articulation Envelope Modifiers
  let attackTimeSec = 0.01;
  let releaseTimeSec = Math.max(0.01, (event.durationMs || 250) / 1000);

  if (event.articulation === 'palm_mute' || event.articulation === 'hand_mute') {
    releaseTimeSec = Math.min(releaseTimeSec, 0.06);
  } else if (event.articulation === 'slur_legato') {
    attackTimeSec = 0.03;
  }

  return {
    frequencyHz,
    gain,
    filterCutoffHz,
    attackTimeSec,
    releaseTimeSec,
  };
}

export * from './performance/performanceInterpreter';
