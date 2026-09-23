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

  // Keep a note from running into the next note.
  // For monophonic tracks (bass, lead, melody, wind, brass, solo), group strictly by track ID
  // so any new note cuts off the previous note regardless of pitch.
  const isMonoTrack = (trackId: string) => {
    const r = (info[trackId]?.role || '').toLowerCase();
    const inst = (info[trackId]?.instrumentId || trackId).toLowerCase();
    if (r === 'bass' || r === 'lead' || r === 'melody' || r === 'solo') return true;
    if (/flute|sax|trumpet|horn|trombone|clarinet|oboe|bassoon|whistle|duduk|shakuhachi|bansuri|sitar|oud|kora|erhu|violin_solo|cello_solo|voice|vocal|synth_lead|acid/i.test(inst)) return true;
    return false;
  };

  const byVoice = new Map<string, PerfNote[]>();
  for (const n of notes) {
    const key = isMonoTrack(n.trackId) ? `${n.trackId}` : `${n.trackId}:${n.midi}`;
    const list = byVoice.get(key) ?? [];
    list.push(n);
    byVoice.set(key, list);
  }
  for (const list of byVoice.values()) {
    list.sort((a, b) => a.time - b.time);
    for (let i = 0; i < list.length - 1; i++) {
      const gap = list[i + 1].time - list[i].time;
      if (gap > 0) {
        const curNote = list[i];
        const artic = String(curNote.articulation || '').toLowerCase();
        const inst = (info[curNote.trackId]?.instrumentId || curNote.trackId).toLowerCase();
        const r = (info[curNote.trackId]?.role || '').toLowerCase();

        const isCymbalOrCrash = curNote.drum && (curNote.midi === 49 || curNote.midi === 57 || curNote.midi === 51 || curNote.midi === 52 || curNote.midi === 55);
        const isRingableInstrument = isCymbalOrCrash || /crash|cymbal|pad|strings|piano|harp|organ|slow-strings|bowed|synth_pad/i.test(inst) || r === 'pad' || r === 'strings';

        const hasGlideLegato = /slide|portamento|glissando|legato|arrastre|slur|bind|bend/.test(artic);
        if (hasGlideLegato) {
          // Allow duration to overlap subsequent note by 18ms for smooth DSP glides
          curNote.dur = Math.max(curNote.dur, gap + 0.018);
        } else if (isRingableInstrument) {
          // Let ring across boundaries naturally; do not force curNote.dur = gap - 0.004
          curNote.dur = Math.max(curNote.dur, minDur);
        } else {
          curNote.dur = Math.min(curNote.dur, Math.max(minDur, gap - 0.004));
        }
      }
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
