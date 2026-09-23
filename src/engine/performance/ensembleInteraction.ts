import type { Performance, PerfNote } from '../sequencing/perform';

export interface InteractionParams {
  rhythmicLockingStrength: number; // 0..1 (how closely bass locks to kick)
  dynamicDuckingDepth: number;     // 0..1 (ducking depth when lead/horns strike)
  energyCoupling: number;          // 0..1 (shared intensity scaling)
}

export const DEFAULT_INTERACTION: InteractionParams = {
  rhythmicLockingStrength: 0.7,
  dynamicDuckingDepth: 0.25,
  energyCoupling: 0.65,
};

/**
 * Applies ensemble cross-listening & interaction:
 * - Bass onsets lock to nearest kick drum onset.
 * - Comping instruments duck slightly during lead/horn stabs.
 */
export function applyEnsembleInteraction(
  perf: Performance,
  params: InteractionParams = DEFAULT_INTERACTION
): Performance {
  if (!perf.notes || perf.notes.length === 0) return perf;

  const notes = perf.notes.map(n => ({ ...n }));

  // Track IDs are opaque (v0, v1, ...), so never infer musical identity from them.
  // The performance compiler supplies instrument/role metadata explicitly.
  const info = perf.trackInfo ?? {};
  const instrumentOf = (n: PerfNote) => info[n.trackId]?.instrumentId ?? n.trackId;
  const roleOf = (n: PerfNote) => info[n.trackId]?.role ?? '';

  // 1. Gather actual kick/bass-drum onsets
  const kickNotes = notes.filter(n => roleOf(n) === 'drums' || /kick|bombo|tambor_grave|bass_drum/i.test(instrumentOf(n)));
  const kickTimes = kickNotes.map(k => k.time);

  // 2. Lock Bass Onsets to Kick Transients
  if (kickTimes.length > 0 && params.rhythmicLockingStrength > 0) {
    const bassNotes = notes.filter(n => roleOf(n) === 'bass' || /bass|bajo|contrabajo|tuba|sousaphone/i.test(instrumentOf(n)));
    for (const bNote of bassNotes) {
      let nearestKickTime = kickTimes[0];
      let minDiff = Math.abs(bNote.time - nearestKickTime);

      for (let i = 1; i < kickTimes.length; i++) {
        const diff = Math.abs(bNote.time - kickTimes[i]);
        if (diff < minDiff) {
          minDiff = diff;
          nearestKickTime = kickTimes[i];
        }
      }

      // Lock if within 60ms window
      if (minDiff <= 0.060) {
        bNote.time = bNote.time + (nearestKickTime - bNote.time) * params.rhythmicLockingStrength;
      }
    }
  }

  // 3. Dynamic Ducking / Horn Stab Carving
  if (params.dynamicDuckingDepth > 0) {
    const leadHorns = notes.filter(n => { const id = instrumentOf(n); return roleOf(n) === 'lead' || /horn|trumpet|brass|trombon|sax|vocal|voice/i.test(id); });
    const comping = notes.filter(n => { const id = instrumentOf(n); return /guitar|piano|organ|rhodes|tres|accordion|keys|clav/i.test(id) || roleOf(n) === 'harmony' || roleOf(n) === 'comp'; });

    for (const compNote of comping) {
      const hasOverlappingStab = leadHorns.some(
        h => h.time <= compNote.time + compNote.dur && h.time + h.dur >= compNote.time
      );
      if (hasOverlappingStab) {
        compNote.vel = Math.max(15, Math.round(compNote.vel * (1 - Math.min(0.55, params.dynamicDuckingDepth))));
      }
    }
  }

  // Re-sort notes chronologically
  notes.sort((a, b) => a.time - b.time);

  return {
    ...perf,
    notes,
  };
}
