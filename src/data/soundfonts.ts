import { INSTRUMENTS_BY_ID } from './instruments';

/**
 * PRESET RESOLUTION
 * =================
 *
 * The app plays a General MIDI SoundFont 2 file (public/soundfont.sf2) in
 * bank 0; drums use the standard kit on the drum channel. A small number of
 * instruments (currently just Spanish Guitar) are sampled from a second,
 * dedicated SoundFont loaded at bank 1 (public/spanish_guitar.sf2) — see
 * `InstrumentDef.bank` and src/engine/audio.ts.
 *
 * This module answers one question:
 *
 *     instrument + articulation  →  which GM program?
 *
 * Articulation needs a different sample, not a different envelope. Pizzicato is
 * not a short arco note, and a muted guitar is not a quiet open one. Where GM
 * has a program for it, the articulation engine's `presetTag` selects it; where
 * it does not, the instrument's own program is used and the articulation is
 * reported as `degraded` so the engine can downgrade its fidelity claim.
 */

export interface PresetResolution {
  /** General MIDI program number, 0–127. */
  program: number;
  /** SoundFont bank (bank-select MSB) the program lives in. 0 is the main GM bank. */
  bank: number;
  /** How the program was chosen, for the inspector and the validator. */
  via: 'articulation' | 'instrument';
  /** True when an articulation was requested but GM has no program for it. */
  degraded: boolean;
  /** The articulation tag that was asked for, if any. */
  requestedTag?: string;
  label: string;
}

/**
 * Articulation-specific GM programs, keyed `instrumentId::presetTag`.
 *
 * This table is deliberately data: it is the contract between the articulation
 * vocabulary and what General MIDI actually contains. Adding a row is all it
 * takes to support another sampled articulation; nothing in the engine changes.
 */
export const ARTICULATION_PROGRAMS: Record<string, number> = {
  // Bowed strings: the GM set genuinely contains pizzicato and tremolo programs.
  'violin::pizzicato': 45,
  'viola::pizzicato': 45,
  'cello::pizzicato': 45,
  'strings::pizzicato': 45,
  'upright-bass::arco': 43,
  'violin::tremolo': 44,
  'strings::tremolo': 44,
  'cello::tremolo': 44,

  // Guitars: muted and harmonic programs exist in GM.
  'guitar::muted': 28,
  'electric-guitar::muted': 28,
  'jazz-guitar::muted': 28,
  'steel-guitar::muted': 28,
  'overdrive-guitar::muted': 28,
  'guitar::harmonic': 31,
  'electric-guitar::harmonic': 31,

  // Brass: GM has a muted trumpet.
  'trumpet::muted': 59,
};

export interface ResolvePresetOptions {
  instrumentId: string;
  /** From `ArticulationSpec.presetTag`. */
  articulationTag?: string;
}

/** The single entry point: articulation program → the instrument's own GM program. */
export function resolvePreset(opts: ResolvePresetOptions): PresetResolution {
  const { instrumentId, articulationTag } = opts;
  const def = INSTRUMENTS_BY_ID[instrumentId];

  if (articulationTag) {
    const program = ARTICULATION_PROGRAMS[`${instrumentId}::${articulationTag}`];
    if (program !== undefined) {
      return {
        program: clamp7(program),
        // Articulation programs (pizzicato, muted, brush) only exist in the
        // main GM SoundFont, never in a secondary bank.
        bank: 0,
        via: 'articulation',
        degraded: false,
        requestedTag: articulationTag,
        label: `${instrumentId} · ${articulationTag}`,
      };
    }
  }

  return {
    program: clamp7(def?.program ?? 0),
    bank: clamp7(def?.bank ?? 0),
    via: 'instrument',
    degraded: !!articulationTag,
    requestedTag: articulationTag,
    label: def?.name ?? instrumentId,
  };
}

function clamp7(n: number): number {
  return Math.max(0, Math.min(127, Math.round(n)));
}
