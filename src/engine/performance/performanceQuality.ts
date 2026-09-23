import type { Performance, PerfNote } from '../sequencing/perform';
import { seedOf, rand01, randNorm } from '../generators/groove';

export interface PerformanceQualityOptions {
  timingScale?: number;
  velocityScale?: number;
  maxEarlySeconds?: number;
  minDurationSeconds?: number;
}

/** Deterministic, style-preserving ensemble pass: correlated pocket, role hierarchy,
 * phrase breathing, velocity memory, and hard note-safety invariants. */
export function polishPerformance(perf: Performance, options: PerformanceQualityOptions = {}): Performance {
  const timingScale = options.timingScale ?? 1;
  const velocityScale = options.velocityScale ?? 1;
  const maxEarly = options.maxEarlySeconds ?? 0.012;
  const minDur = options.minDurationSeconds ?? 0.018;
  const info = perf.trackInfo ?? {};
  const role = (n: PerfNote) => info[n.trackId]?.role ?? '';
  const notes = perf.notes.map((n, i) => {
    const r = role(n);
    const phrase = Math.floor(n.bar / 4);
    const base = seedOf(perf.worldId ?? 'world', n.trackId, n.bar, i);
    const shared = randNorm(seedOf(perf.worldId ?? 'world', phrase, 'ensemble')) * 0.0025;
    const player = randNorm(base) * 0.0015;
    const roleBias = r === 'bass' ? -0.0015 : r === 'lead' || r === 'melody' ? 0.001 : r === 'comp' ? 0.002 : 0;
    const phraseBreath = Math.sin((phrase % 8) / 8 * Math.PI * 2) * 0.0015;
    const timing = (shared + player + roleBias + phraseBreath) * timingScale;
    const accentMemory = 0.97 + rand01(seedOf(base, 'velocity-memory')) * 0.06;
    const roleGain = r === 'kick' || r === 'snare' || r === 'drums' ? 1 : r === 'bass' ? 0.985 : 1.0;
    return {
      ...n,
      time: Math.max(0, n.time + Math.max(-maxEarly, timing)),
      dur: Math.max(minDur, n.dur),
      vel: Math.max(1, Math.min(127, Math.round(n.vel * (1 + (accentMemory - 1) * velocityScale) * roleGain))),
    };
  });

  // Keep a note from running into the next note of the same track/pitch.
  const byVoice = new Map<string, PerfNote[]>();
  for (const n of notes) {
    const key = `${n.trackId}:${n.midi}`;
    const list = byVoice.get(key) ?? [];
    list.push(n);
    byVoice.set(key, list);
  }
  for (const list of byVoice.values()) {
    list.sort((a, b) => a.time - b.time);
    for (let i = 0; i < list.length - 1; i++) {
      const gap = list[i + 1].time - list[i].time;
      if (gap > 0) list[i].dur = Math.min(list[i].dur, Math.max(minDur, gap - 0.004));
    }
  }
  notes.sort((a, b) => a.time - b.time || a.trackId.localeCompare(b.trackId));
  return { ...perf, notes };
}

export function validatePerformance(perf: Performance): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  for (const [i, n] of perf.notes.entries()) {
    if (!Number.isFinite(n.time) || n.time < 0) errors.push(`note ${i}: invalid time`);
    if (!Number.isFinite(n.dur) || n.dur <= 0) errors.push(`note ${i}: invalid duration`);
    if (!Number.isInteger(n.midi) || n.midi < 0 || n.midi > 127) errors.push(`note ${i}: invalid MIDI`);
    if (!Number.isInteger(n.vel) || n.vel < 1 || n.vel > 127) errors.push(`note ${i}: invalid velocity`);
    const key = `${n.trackId}|${n.time.toFixed(6)}|${n.midi}`;
    if (seen.has(key)) errors.push(`duplicate onset: ${key}`);
    seen.add(key);
  }
  for (let i = 1; i < perf.notes.length; i++) {
    if (perf.notes[i].time < perf.notes[i - 1].time) errors.push(`notes not sorted at ${i}`);
  }
  return errors;
}
