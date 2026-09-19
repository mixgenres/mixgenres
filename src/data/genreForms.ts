import { PartDensity } from '../types';

export type FormIntensity = 'low' | 'medium' | 'high' | 'peak';

export interface FormStep {
  key: string;
  kind: string;
  bars: number;
  label: string;
  intensity: FormIntensity;
}

export interface GenreForm {
  steps: FormStep[];
  allowed: string[];
  densities?: Record<string, Partial<Record<string, PartDensity>>>;
}

/** 'Intro · Verse 1 · Chorus 1 …' — always matches the parts the song actually gets. */
export const formSummary = (form: GenreForm): string => form.steps.map(s => s.label).join(' · ');

export const F = (
  key: string,
  kind: string,
  bars: number,
  label: string,
  intensity: FormIntensity
): FormStep => ({ key, kind, bars, label, intensity });

/**
 * Genre form grammar. `kind` is the engine-level functional family used for
 * pattern density/selection; `key` is the genre-specific form vocabulary.
 * All starter forms target ~2.4 - 2.8 minutes of music (140-165 seconds).
 */
export const GENRE_FORMS: Record<string, GenreForm> = {
  // 1. TANGO (BPM: 120, 76 bars = 152s)
  tango: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('tango-a1', 'verse', 16, 'A1', 'medium'),
      F('tango-a2', 'verse', 16, 'A2', 'medium'),
      F('tango-b', 'bridge', 16, 'B', 'high'),
      F('tango-c', 'solo', 12, 'C (Solo)', 'peak'),
      F('tango-coda', 'coda', 8, 'Coda', 'low'),
    ],
    allowed: ['intro', 'tango-a1', 'tango-a2', 'tango-b', 'tango-c', 'tango-coda'],
    densities: {
      intro: { bandoneon: 'sparse', piano: 'sparse', 'upright-bass': 'sparse', violin: 'sparse', cello: 'sparse' },
      'tango-a1': { bandoneon: 'normal', piano: 'normal', 'upright-bass': 'normal', violin: 'normal', cello: 'sparse' },
      'tango-a2': { bandoneon: 'normal', piano: 'normal', 'upright-bass': 'normal', violin: 'normal', cello: 'normal' },
      'tango-b': { bandoneon: 'busy', piano: 'busy', 'upright-bass': 'normal', violin: 'busy', cello: 'normal' },
      'tango-c': { bandoneon: 'busy', piano: 'busy', 'upright-bass': 'busy', violin: 'busy', cello: 'busy' },
      'tango-coda': { bandoneon: 'sparse', piano: 'sparse', 'upright-bass': 'sparse', violin: 'sparse', cello: 'sparse' },
    },
  },

  // 2. SALSA (BPM: 190, 120 bars = 151.6s)
  salsa: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('tema', 'verse', 16, 'Tema', 'medium'),
      F('montuno-1', 'montuno', 24, 'Montuno 1', 'high'),
      F('mambo', 'mambo', 16, 'Mambo', 'peak'),
      F('montuno-2', 'montuno', 24, 'Montuno 2', 'peak'),
      F('mona', 'solo', 16, 'Moña', 'peak'),
      F('montuno-3', 'montuno', 8, 'Montuno 3', 'high'),
      F('coda', 'coda', 8, 'Coda', 'low'),
    ],
    allowed: ['intro', 'tema', 'montuno-1', 'mambo', 'montuno-2', 'mona', 'montuno-3', 'coda'],
    densities: {
      intro: { piano: 'sparse', bass: 'sparse', congas: 'sparse', timbales: 'sparse', trumpet: 'sparse' },
      tema: { piano: 'normal', bass: 'normal', congas: 'normal', timbales: 'sparse', trumpet: 'normal' },
      'montuno-1': { piano: 'busy', bass: 'normal', congas: 'busy', timbales: 'normal', trumpet: 'normal' },
      mambo: { piano: 'busy', bass: 'normal', congas: 'busy', timbales: 'busy', trumpet: 'busy' },
      'montuno-2': { piano: 'busy', bass: 'normal', congas: 'busy', timbales: 'busy', trumpet: 'busy' },
      mona: { piano: 'busy', bass: 'normal', congas: 'busy', timbales: 'busy', trumpet: 'busy' },
      'montuno-3': { piano: 'busy', bass: 'normal', congas: 'busy', timbales: 'normal', trumpet: 'normal' },
      coda: { piano: 'sparse', bass: 'sparse', congas: 'sparse', timbales: 'sparse', trumpet: 'sparse' },
    },
  },

  // 3. TIMBA (BPM: 200, 128 bars = 153.6s)
  timba: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verso', 'verse', 16, 'Verso', 'medium'),
      F('pre-montuno', 'bridge', 8, 'Coro', 'high'),
      F('montuno-1', 'montuno', 32, 'Montuno 1', 'high'),
      F('gear-break', 'breakdown', 8, 'Break', 'low'),
      F('mambo', 'mambo', 16, 'Mambo', 'peak'),
      F('montuno-2', 'montuno', 32, 'Montuno 2', 'peak'),
      F('cierre', 'ending', 8, 'Cierre', 'low'),
    ],
    allowed: ['intro', 'verso', 'pre-montuno', 'montuno-1', 'gear-break', 'mambo', 'montuno-2', 'cierre'],
    densities: {
      intro: { piano: 'sparse', bass: 'sparse', timbales: 'sparse', congas: 'sparse', trombone: 'sparse' },
      verso: { piano: 'normal', bass: 'normal', timbales: 'sparse', congas: 'normal', trombone: 'normal' },
      'pre-montuno': { piano: 'busy', bass: 'normal', timbales: 'normal', congas: 'busy', trombone: 'normal' },
      'montuno-1': { piano: 'busy', bass: 'normal', timbales: 'busy', congas: 'busy', trombone: 'busy' },
      'gear-break': { piano: 'normal', bass: 'sparse', timbales: 'sparse', congas: 'normal', trombone: 'sparse' },
      mambo: { piano: 'busy', bass: 'normal', timbales: 'busy', congas: 'busy', trombone: 'busy' },
      'montuno-2': { piano: 'busy', bass: 'busy', timbales: 'busy', congas: 'busy', trombone: 'busy' },
      cierre: { piano: 'sparse', bass: 'sparse', timbales: 'sparse', congas: 'sparse', trombone: 'sparse' },
    },
  },

  // 4. FLAMENCO — canonical palo-aware fallback. Specific SongStyle forms take precedence.
  flamenco: {
    steps: [
      F('salida', 'intro', 8, 'Salida / Falseta', 'low'),
      F('letra-1', 'verse', 12, 'Letra 1', 'medium'),
      F('falseta', 'solo', 12, 'Falseta', 'high'),
      F('letra-2', 'verse', 12, 'Letra 2', 'medium'),
      F('remate', 'chorus', 8, 'Remate / Cierre', 'peak'),
      F('cierre', 'ending', 4, 'Cierre', 'low'),
    ],
    allowed: ['salida', 'letra-1', 'falseta', 'letra-2', 'remate', 'cierre'],
    densities: {
      salida: { guitar: 'sparse', voice: 'sparse', palmas: 'sparse', cajon: 'sparse' },
      'letra-1': { guitar: 'normal', voice: 'normal', palmas: 'normal', cajon: 'sparse' },
      falseta: { guitar: 'busy', voice: 'sparse', palmas: 'normal', cajon: 'normal' },
      'letra-2': { guitar: 'normal', voice: 'normal', palmas: 'normal', cajon: 'normal' },
      remate: { guitar: 'busy', voice: 'normal', palmas: 'busy', cajon: 'busy' },
      cierre: { guitar: 'sparse', voice: 'sparse', palmas: 'sparse', cajon: 'sparse' },
    },
  },

  // 5. JAZZ (BPM: 140, 88 bars = 150.8s)
  jazz: {
    steps: [
      F('head-in', 'verse', 24, 'Head In', 'medium'),
      F('solo-1', 'solo', 24, 'Sax Solo', 'high'),
      F('solo-2', 'solo', 16, 'Piano Solo', 'peak'),
      F('head-out', 'verse', 16, 'Head Out', 'high'),
      F('coda', 'coda', 8, 'Coda', 'low'),
    ],
    allowed: ['head-in', 'solo-1', 'solo-2', 'head-out', 'coda'],
    densities: {
      'head-in': { piano: 'normal', 'upright-bass': 'normal', 'brush-kit': 'normal', 'tenor-sax': 'normal', 'jazz-guitar': 'sparse' },
      'solo-1': { piano: 'normal', 'upright-bass': 'normal', 'brush-kit': 'normal', 'tenor-sax': 'busy', 'jazz-guitar': 'normal' },
      'solo-2': { piano: 'busy', 'upright-bass': 'normal', 'brush-kit': 'normal', 'tenor-sax': 'sparse', 'jazz-guitar': 'normal' },
      'head-out': { piano: 'normal', 'upright-bass': 'normal', 'brush-kit': 'normal', 'tenor-sax': 'normal', 'jazz-guitar': 'normal' },
      coda: { piano: 'sparse', 'upright-bass': 'sparse', 'brush-kit': 'sparse', 'tenor-sax': 'sparse', 'jazz-guitar': 'sparse' },
    },
  },

  // 6. BLUES (BPM: 92, 60 bars = 156.5s)
  blues: {
    steps: [
      F('intro', 'intro', 4, 'Intro', 'low'),
      F('chorus-1', 'verse', 12, 'Chorus 1 (AAB)', 'medium'),
      F('chorus-2', 'verse', 12, 'Chorus 2 (AAB)', 'medium'),
      F('solo', 'solo', 12, 'Guitar Solo', 'peak'),
      F('chorus-3', 'chorus', 12, 'Chorus 3 (AAB)', 'high'),
      F('outro', 'ending', 8, 'Outro', 'low'),
    ],
    allowed: ['intro', 'chorus-1', 'chorus-2', 'solo', 'chorus-3', 'outro'],
    densities: {
      intro: { 'electric-guitar': 'normal', bass: 'sparse', drums: 'sparse', piano: 'sparse', harmonica: 'sparse' },
      'chorus-1': { 'electric-guitar': 'normal', bass: 'normal', drums: 'normal', piano: 'sparse', harmonica: 'normal' },
      'chorus-2': { 'electric-guitar': 'normal', bass: 'normal', drums: 'normal', piano: 'normal', harmonica: 'normal' },
      solo: { 'electric-guitar': 'busy', bass: 'normal', drums: 'normal', piano: 'normal', harmonica: 'sparse' },
      'chorus-3': { 'electric-guitar': 'normal', bass: 'normal', drums: 'normal', piano: 'normal', harmonica: 'busy' },
      outro: { 'electric-guitar': 'sparse', bass: 'sparse', drums: 'sparse', piano: 'sparse', harmonica: 'sparse' },
    },
  },

  // 7. ROCK (BPM: 128, 80 bars = 150s)
  rock: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verse-1', 'verse', 16, 'Verse 1', 'medium'),
      F('chorus-1', 'chorus', 12, 'Chorus 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('chorus-2', 'chorus', 12, 'Chorus 2', 'high'),
      F('solo', 'solo', 12, 'Guitar Solo', 'peak'),
      F('outro', 'ending', 8, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'chorus-1', 'verse-2', 'chorus-2', 'solo', 'outro'],
    densities: {
      intro: { 'overdrive-guitar': 'normal', bass: 'sparse', drums: 'sparse', 'electric-guitar': 'sparse', organ: 'sparse' },
      'verse-1': { 'overdrive-guitar': 'sparse', bass: 'normal', drums: 'normal', 'electric-guitar': 'normal', organ: 'sparse' },
      'chorus-1': { 'overdrive-guitar': 'busy', bass: 'normal', drums: 'busy', 'electric-guitar': 'busy', organ: 'normal' },
      'verse-2': { 'overdrive-guitar': 'sparse', bass: 'normal', drums: 'normal', 'electric-guitar': 'normal', organ: 'normal' },
      'chorus-2': { 'overdrive-guitar': 'busy', bass: 'normal', drums: 'busy', 'electric-guitar': 'busy', organ: 'busy' },
      solo: { 'overdrive-guitar': 'busy', bass: 'normal', drums: 'busy', 'electric-guitar': 'busy', organ: 'normal' },
      outro: { 'overdrive-guitar': 'sparse', bass: 'sparse', drums: 'sparse', 'electric-guitar': 'sparse', organ: 'sparse' },
    },
  },

  // 8. ROCK EN ESPAÑOL (BPM: 124, 80 bars = 154.8s)
  'rock-en-espanol': {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verso-1', 'verse', 16, 'Verso 1', 'medium'),
      F('coro-1', 'chorus', 12, 'Coro 1', 'high'),
      F('verso-2', 'verse', 12, 'Verso 2', 'medium'),
      F('coro-2', 'chorus', 12, 'Coro 2', 'high'),
      F('solo', 'solo', 12, 'Solo / Puente', 'peak'),
      F('final', 'ending', 8, 'Final', 'low'),
    ],
    allowed: ['intro', 'verso-1', 'coro-1', 'verso-2', 'coro-2', 'solo', 'final'],
    densities: {
      intro: { 'electric-guitar': 'normal', bass: 'sparse', drums: 'sparse', 'overdrive-guitar': 'sparse', organ: 'sparse' },
      'verso-1': { 'electric-guitar': 'normal', bass: 'normal', drums: 'normal', 'overdrive-guitar': 'sparse', organ: 'sparse' },
      'coro-1': { 'electric-guitar': 'normal', bass: 'normal', drums: 'busy', 'overdrive-guitar': 'busy', organ: 'normal' },
      'verso-2': { 'electric-guitar': 'normal', bass: 'normal', drums: 'normal', 'overdrive-guitar': 'sparse', organ: 'normal' },
      'coro-2': { 'electric-guitar': 'busy', bass: 'normal', drums: 'busy', 'overdrive-guitar': 'busy', organ: 'busy' },
      solo: { 'electric-guitar': 'busy', bass: 'normal', drums: 'busy', 'overdrive-guitar': 'busy', organ: 'normal' },
      final: { 'electric-guitar': 'sparse', bass: 'sparse', drums: 'sparse', 'overdrive-guitar': 'sparse', organ: 'sparse' },
    },
  },

  // 9. ZOUK (BPM: 100, 64 bars = 153.6s)
  zouk: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verse-1', 'verse', 12, 'Verse 1', 'medium'),
      F('hook-1', 'chorus', 8, 'Hook 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('hook-2', 'chorus', 8, 'Hook 2', 'high'),
      F('bridge', 'bridge', 8, 'Bridge', 'medium'),
      F('outro', 'coda', 8, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'hook-1', 'verse-2', 'hook-2', 'bridge', 'outro'],
    densities: {
      intro: { 'sub-bass': 'sparse', drums: 'sparse', rhodes: 'sparse', 'electric-guitar': 'sparse', 'warm-pad': 'normal' },
      'verse-1': { 'sub-bass': 'normal', drums: 'normal', rhodes: 'normal', 'electric-guitar': 'normal', 'warm-pad': 'sparse' },
      'hook-1': { 'sub-bass': 'normal', drums: 'busy', rhodes: 'busy', 'electric-guitar': 'normal', 'warm-pad': 'normal' },
      'verse-2': { 'sub-bass': 'normal', drums: 'normal', rhodes: 'normal', 'electric-guitar': 'normal', 'warm-pad': 'normal' },
      'hook-2': { 'sub-bass': 'busy', drums: 'busy', rhodes: 'busy', 'electric-guitar': 'busy', 'warm-pad': 'normal' },
      bridge: { 'sub-bass': 'sparse', drums: 'sparse', rhodes: 'normal', 'electric-guitar': 'sparse', 'warm-pad': 'busy' },
      outro: { 'sub-bass': 'sparse', drums: 'sparse', rhodes: 'sparse', 'electric-guitar': 'sparse', 'warm-pad': 'sparse' },
    },
  },

  // 10. KIZOMBA (BPM: 92, 60 bars = 156.5s)
  kizomba: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verse-1', 'verse', 12, 'Verse 1', 'medium'),
      F('pre', 'bridge', 4, 'Pre-Passada', 'high'),
      F('hook-1', 'chorus', 8, 'Hook 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('break', 'breakdown', 4, 'Break', 'low'),
      F('hook-2', 'chorus', 8, 'Hook 2', 'peak'),
      F('outro', 'coda', 4, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'pre', 'hook-1', 'verse-2', 'break', 'hook-2', 'outro'],
    densities: {
      intro: { 'sub-bass': 'sparse', drums: 'sparse', rhodes: 'sparse', 'electric-guitar': 'sparse', 'warm-pad': 'normal' },
      'verse-1': { 'sub-bass': 'normal', drums: 'normal', rhodes: 'normal', 'electric-guitar': 'normal', 'warm-pad': 'sparse' },
      pre: { 'sub-bass': 'normal', drums: 'busy', rhodes: 'normal', 'electric-guitar': 'normal', 'warm-pad': 'normal' },
      'hook-1': { 'sub-bass': 'busy', drums: 'busy', rhodes: 'normal', 'electric-guitar': 'busy', 'warm-pad': 'normal' },
      'verse-2': { 'sub-bass': 'normal', drums: 'normal', rhodes: 'normal', 'electric-guitar': 'normal', 'warm-pad': 'normal' },
      break: { 'sub-bass': 'sparse', drums: 'sparse', rhodes: 'normal', 'electric-guitar': 'sparse', 'warm-pad': 'normal' },
      'hook-2': { 'sub-bass': 'busy', drums: 'busy', rhodes: 'busy', 'electric-guitar': 'busy', 'warm-pad': 'busy' },
      outro: { 'sub-bass': 'sparse', drums: 'sparse', rhodes: 'sparse', 'electric-guitar': 'sparse', 'warm-pad': 'sparse' },
    },
  },

  // 11. FUNK (BPM: 104, 68 bars = 156.9s)
  funk: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('pocket-1', 'verse', 16, 'Pocket 1', 'medium'),
      F('hook-1', 'chorus', 8, 'Hook 1', 'high'),
      F('pocket-2', 'verse', 12, 'Pocket 2', 'medium'),
      F('breakdown', 'breakdown', 8, 'Breakdown', 'low'),
      F('hook-2', 'chorus', 12, 'Hook 2', 'peak'),
      F('end', 'ending', 4, 'End', 'low'),
    ],
    allowed: ['intro', 'pocket-1', 'hook-1', 'pocket-2', 'breakdown', 'hook-2', 'end'],
    densities: {
      intro: { 'slap-bass': 'normal', drums: 'sparse', clavinet: 'sparse', 'electric-guitar': 'sparse', 'horn-section': 'sparse' },
      'pocket-1': { 'slap-bass': 'normal', drums: 'normal', clavinet: 'normal', 'electric-guitar': 'normal', 'horn-section': 'sparse' },
      'hook-1': { 'slap-bass': 'busy', drums: 'normal', clavinet: 'normal', 'electric-guitar': 'busy', 'horn-section': 'busy' },
      'pocket-2': { 'slap-bass': 'normal', drums: 'normal', clavinet: 'busy', 'electric-guitar': 'normal', 'horn-section': 'normal' },
      breakdown: { 'slap-bass': 'sparse', drums: 'normal', clavinet: 'normal', 'electric-guitar': 'sparse', 'horn-section': 'sparse' },
      'hook-2': { 'slap-bass': 'busy', drums: 'busy', clavinet: 'busy', 'electric-guitar': 'busy', 'horn-section': 'busy' },
      end: { 'slap-bass': 'sparse', drums: 'sparse', clavinet: 'sparse', 'electric-guitar': 'sparse', 'horn-section': 'sparse' },
    },
  },

  // 12. METAL (BPM: 150, 96 bars = 153.6s)
  metal: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('riff', 'verse', 16, 'Main Riff', 'high'),
      F('verse-1', 'verse', 16, 'Verse 1', 'medium'),
      F('chorus-1', 'chorus', 16, 'Chorus 1', 'high'),
      F('breakdown', 'breakdown', 8, 'Breakdown', 'medium'),
      F('solo', 'solo', 16, 'Guitar Solo', 'peak'),
      F('chorus-2', 'chorus', 12, 'Chorus 2', 'peak'),
      F('end', 'ending', 4, 'End', 'low'),
    ],
    allowed: ['intro', 'riff', 'verse-1', 'chorus-1', 'breakdown', 'solo', 'chorus-2', 'end'],
    densities: {
      intro: { 'distortion-guitar': 'sparse', 'overdrive-guitar': 'sparse', bass: 'sparse', drums: 'sparse', 'guitar-harmonics': 'normal' },
      riff: { 'distortion-guitar': 'busy', 'overdrive-guitar': 'normal', bass: 'normal', drums: 'normal', 'guitar-harmonics': 'sparse' },
      'verse-1': { 'distortion-guitar': 'normal', 'overdrive-guitar': 'normal', bass: 'normal', drums: 'normal', 'guitar-harmonics': 'sparse' },
      'chorus-1': { 'distortion-guitar': 'busy', 'overdrive-guitar': 'busy', bass: 'normal', drums: 'busy', 'guitar-harmonics': 'normal' },
      breakdown: { 'distortion-guitar': 'busy', 'overdrive-guitar': 'sparse', bass: 'sparse', drums: 'normal', 'guitar-harmonics': 'sparse' },
      solo: { 'distortion-guitar': 'busy', 'overdrive-guitar': 'normal', bass: 'busy', drums: 'busy', 'guitar-harmonics': 'busy' },
      'chorus-2': { 'distortion-guitar': 'busy', 'overdrive-guitar': 'busy', bass: 'busy', drums: 'busy', 'guitar-harmonics': 'normal' },
      end: { 'distortion-guitar': 'sparse', 'overdrive-guitar': 'sparse', bass: 'sparse', drums: 'sparse', 'guitar-harmonics': 'sparse' },
    },
  },

  // 13. BACHATA (BPM: 128, 80 bars = 150s)
  bachata: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verso-1', 'verse', 16, 'Verso 1', 'medium'),
      F('coro-1', 'chorus', 12, 'Coro 1', 'high'),
      F('verso-2', 'verse', 12, 'Verso 2', 'medium'),
      F('mambo', 'mambo', 16, 'Mambo (Picante)', 'peak'),
      F('coro-2', 'chorus', 12, 'Coro 2', 'high'),
      F('coda', 'coda', 4, 'Coda', 'low'),
    ],
    allowed: ['intro', 'verso-1', 'coro-1', 'verso-2', 'mambo', 'coro-2', 'coda'],
    densities: {
      intro: { requinto: 'normal', guitar: 'sparse', bass: 'sparse', bongos: 'sparse', guiro: 'sparse' },
      'verso-1': { requinto: 'normal', guitar: 'normal', bass: 'normal', bongos: 'normal', guiro: 'normal' },
      'coro-1': { requinto: 'busy', guitar: 'normal', bass: 'normal', bongos: 'busy', guiro: 'normal' },
      'verso-2': { requinto: 'normal', guitar: 'normal', bass: 'normal', bongos: 'normal', guiro: 'normal' },
      mambo: { requinto: 'busy', guitar: 'normal', bass: 'busy', bongos: 'busy', guiro: 'busy' },
      'coro-2': { requinto: 'busy', guitar: 'normal', bass: 'normal', bongos: 'busy', guiro: 'normal' },
      coda: { requinto: 'sparse', guitar: 'sparse', bass: 'sparse', bongos: 'sparse', guiro: 'sparse' },
    },
  },

  // 14. FOLK (BPM: 90, 56 bars = 149.3s)
  folk: {
    steps: [
      F('intro', 'intro', 4, 'Intro', 'low'),
      F('verse-1', 'verse', 12, 'Verse 1', 'medium'),
      F('refrain-1', 'chorus', 8, 'Refrain 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('bridge', 'bridge', 8, 'Bridge / Solo', 'high'),
      F('refrain-2', 'chorus', 8, 'Final Refrain', 'peak'),
      F('end', 'ending', 4, 'End', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'refrain-1', 'verse-2', 'bridge', 'refrain-2', 'end'],
    densities: {
      intro: { guitar: 'normal', fiddle: 'sparse', 'upright-bass': 'sparse', bodhran: 'sparse', mandolin: 'sparse' },
      'verse-1': { guitar: 'normal', fiddle: 'normal', 'upright-bass': 'normal', bodhran: 'sparse', mandolin: 'sparse' },
      'refrain-1': { guitar: 'normal', fiddle: 'busy', 'upright-bass': 'normal', bodhran: 'normal', mandolin: 'normal' },
      'verse-2': { guitar: 'normal', fiddle: 'normal', 'upright-bass': 'normal', bodhran: 'normal', mandolin: 'normal' },
      bridge: { guitar: 'normal', fiddle: 'busy', 'upright-bass': 'normal', bodhran: 'sparse', mandolin: 'busy' },
      'refrain-2': { guitar: 'busy', fiddle: 'busy', 'upright-bass': 'normal', bodhran: 'busy', mandolin: 'busy' },
      end: { guitar: 'sparse', fiddle: 'sparse', 'upright-bass': 'sparse', bodhran: 'sparse', mandolin: 'sparse' },
    },
  },

  // 15. HIP-HOP (BPM: 90, 56 bars = 149.3s)
  'hip-hop': {
    steps: [
      F('intro', 'intro', 4, 'Intro', 'low'),
      F('verse-1', 'verse', 12, 'Verse 1', 'medium'),
      F('hook-1', 'chorus', 8, 'Hook 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('break', 'breakdown', 4, 'Break', 'low'),
      F('hook-2', 'chorus', 12, 'Hook 2', 'peak'),
      F('outro', 'coda', 4, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'hook-1', 'verse-2', 'break', 'hook-2', 'outro'],
    densities: {
      intro: { drums: 'sparse', 'sub-bass': 'sparse', piano: 'normal', turntable: 'sparse', 'warm-pad': 'sparse' },
      'verse-1': { drums: 'normal', 'sub-bass': 'normal', piano: 'normal', turntable: 'sparse', 'warm-pad': 'sparse' },
      'hook-1': { drums: 'busy', 'sub-bass': 'normal', piano: 'busy', turntable: 'normal', 'warm-pad': 'normal' },
      'verse-2': { drums: 'normal', 'sub-bass': 'normal', piano: 'normal', turntable: 'normal', 'warm-pad': 'sparse' },
      break: { drums: 'sparse', 'sub-bass': 'sparse', piano: 'sparse', turntable: 'busy', 'warm-pad': 'normal' },
      'hook-2': { drums: 'busy', 'sub-bass': 'busy', piano: 'busy', turntable: 'busy', 'warm-pad': 'normal' },
      outro: { drums: 'sparse', 'sub-bass': 'sparse', piano: 'sparse', turntable: 'sparse', 'warm-pad': 'sparse' },
    },
  },

  // 16. ELECTRONIC (BPM: 128, 80 bars = 150s)
  electronic: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('build-1', 'bridge', 8, 'Build 1', 'medium'),
      F('drop-1', 'chorus', 16, 'Drop 1', 'high'),
      F('break', 'breakdown', 8, 'Break', 'low'),
      F('build-2', 'bridge', 8, 'Build 2', 'high'),
      F('drop-2', 'chorus', 24, 'Drop 2', 'peak'),
      F('outro', 'coda', 8, 'Outro', 'low'),
    ],
    allowed: ['intro', 'build-1', 'drop-1', 'break', 'build-2', 'drop-2', 'outro'],
    densities: {
      intro: { drums: 'sparse', 'bass-lead': 'sparse', 'warm-pad': 'normal', 'saw-lead': 'sparse', polysynth: 'sparse' },
      'build-1': { drums: 'normal', 'bass-lead': 'normal', 'warm-pad': 'normal', 'saw-lead': 'normal', polysynth: 'normal' },
      'drop-1': { drums: 'busy', 'bass-lead': 'busy', 'warm-pad': 'sparse', 'saw-lead': 'busy', polysynth: 'normal' },
      break: { drums: 'sparse', 'bass-lead': 'sparse', 'warm-pad': 'busy', 'saw-lead': 'sparse', polysynth: 'normal' },
      'build-2': { drums: 'busy', 'bass-lead': 'normal', 'warm-pad': 'normal', 'saw-lead': 'busy', polysynth: 'busy' },
      'drop-2': { drums: 'busy', 'bass-lead': 'busy', 'warm-pad': 'normal', 'saw-lead': 'busy', polysynth: 'busy' },
      outro: { drums: 'sparse', 'bass-lead': 'sparse', 'warm-pad': 'sparse', 'saw-lead': 'sparse', polysynth: 'sparse' },
    },
  },

  // 17. COUNTRY (BPM: 110, 68 bars = 148.4s)
  country: {
    steps: [
      F('intro', 'intro', 4, 'Intro', 'low'),
      F('verse-1', 'verse', 12, 'Verse 1', 'medium'),
      F('chorus-1', 'chorus', 12, 'Chorus 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('solo', 'solo', 8, 'Pedal Steel Solo', 'peak'),
      F('chorus-2', 'chorus', 16, 'Chorus 2', 'high'),
      F('outro', 'ending', 4, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'chorus-1', 'verse-2', 'solo', 'chorus-2', 'outro'],
    densities: {
      intro: { 'steel-guitar': 'normal', 'upright-bass': 'sparse', 'brush-kit': 'sparse', fiddle: 'sparse', banjo: 'sparse' },
      'verse-1': { 'steel-guitar': 'sparse', 'upright-bass': 'normal', 'brush-kit': 'normal', fiddle: 'normal', banjo: 'normal' },
      'chorus-1': { 'steel-guitar': 'normal', 'upright-bass': 'normal', 'brush-kit': 'normal', fiddle: 'busy', banjo: 'normal' },
      'verse-2': { 'steel-guitar': 'normal', 'upright-bass': 'normal', 'brush-kit': 'normal', fiddle: 'normal', banjo: 'normal' },
      solo: { 'steel-guitar': 'busy', 'upright-bass': 'normal', 'brush-kit': 'normal', fiddle: 'sparse', banjo: 'normal' },
      'chorus-2': { 'steel-guitar': 'busy', 'upright-bass': 'normal', 'brush-kit': 'busy', fiddle: 'busy', banjo: 'busy' },
      outro: { 'steel-guitar': 'sparse', 'upright-bass': 'sparse', 'brush-kit': 'sparse', fiddle: 'sparse', banjo: 'sparse' },
    },
  },

  // 18. SWING (BPM: 160, 100 bars = 150s)
  swing: {
    steps: [
      F('head-1', 'verse', 24, 'Head 1', 'medium'),
      F('solo-1', 'solo', 24, 'Sax Solo', 'high'),
      F('shout', 'chorus', 20, 'Shout Chorus', 'peak'),
      F('head-2', 'verse', 24, 'Head 2', 'high'),
      F('out', 'coda', 8, 'Out', 'low'),
    ],
    allowed: ['head-1', 'solo-1', 'shout', 'head-2', 'out'],
    densities: {
      'head-1': { 'upright-bass': 'normal', drums: 'normal', piano: 'normal', 'tenor-sax': 'normal', 'jazz-guitar': 'sparse' },
      'solo-1': { 'upright-bass': 'busy', drums: 'normal', piano: 'normal', 'tenor-sax': 'busy', 'jazz-guitar': 'normal' },
      shout: { 'upright-bass': 'busy', drums: 'busy', piano: 'busy', 'tenor-sax': 'busy', 'jazz-guitar': 'busy' },
      'head-2': { 'upright-bass': 'normal', drums: 'normal', piano: 'normal', 'tenor-sax': 'normal', 'jazz-guitar': 'normal' },
      out: { 'upright-bass': 'sparse', drums: 'sparse', piano: 'sparse', 'tenor-sax': 'sparse', 'jazz-guitar': 'sparse' },
    },
  },

  // 19. MATH ROCK (BPM: 125, 76 bars = 145.9s)
  'math-rock': {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('theme', 'verse', 16, 'Theme', 'medium'),
      F('development', 'bridge', 16, 'Development', 'high'),
      F('break', 'breakdown', 8, 'Break', 'low'),
      F('return', 'chorus', 20, 'Return', 'peak'),
      F('coda', 'coda', 8, 'Coda', 'low'),
    ],
    allowed: ['intro', 'theme', 'development', 'break', 'return', 'coda'],
    densities: {
      intro: { 'electric-guitar': 'normal', 'guitar-harmonics': 'normal', bass: 'sparse', drums: 'sparse', 'overdrive-guitar': 'sparse' },
      theme: { 'electric-guitar': 'normal', 'guitar-harmonics': 'normal', bass: 'normal', drums: 'normal', 'overdrive-guitar': 'sparse' },
      development: { 'electric-guitar': 'busy', 'guitar-harmonics': 'normal', bass: 'normal', drums: 'busy', 'overdrive-guitar': 'normal' },
      break: { 'electric-guitar': 'sparse', 'guitar-harmonics': 'sparse', bass: 'sparse', drums: 'sparse', 'overdrive-guitar': 'sparse' },
      return: { 'electric-guitar': 'busy', 'guitar-harmonics': 'busy', bass: 'busy', drums: 'busy', 'overdrive-guitar': 'busy' },
      coda: { 'electric-guitar': 'sparse', 'guitar-harmonics': 'sparse', bass: 'sparse', drums: 'sparse', 'overdrive-guitar': 'sparse' },
    },
  },

  // 20. AFROBEATS (BPM: 108, 68 bars = 151.1s)
  afrobeats: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verse-1', 'verse', 12, 'Verse 1', 'medium'),
      F('hook-1', 'chorus', 8, 'Hook 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('bridge', 'bridge', 8, 'Bridge', 'high'),
      F('hook-2', 'chorus', 12, 'Hook 2', 'peak'),
      F('outro', 'coda', 8, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'hook-1', 'verse-2', 'bridge', 'hook-2', 'outro'],
    densities: {
      intro: { 'sub-bass': 'sparse', 'log-drum': 'sparse', 'electric-guitar': 'normal', shaker: 'normal', 'tenor-sax': 'sparse' },
      'verse-1': { 'sub-bass': 'normal', 'log-drum': 'normal', 'electric-guitar': 'normal', shaker: 'normal', 'tenor-sax': 'sparse' },
      'hook-1': { 'sub-bass': 'normal', 'log-drum': 'busy', 'electric-guitar': 'normal', shaker: 'busy', 'tenor-sax': 'normal' },
      'verse-2': { 'sub-bass': 'normal', 'log-drum': 'normal', 'electric-guitar': 'normal', shaker: 'normal', 'tenor-sax': 'normal' },
      bridge: { 'sub-bass': 'sparse', 'log-drum': 'sparse', 'electric-guitar': 'busy', shaker: 'sparse', 'tenor-sax': 'busy' },
      'hook-2': { 'sub-bass': 'busy', 'log-drum': 'busy', 'electric-guitar': 'busy', shaker: 'busy', 'tenor-sax': 'busy' },
      outro: { 'sub-bass': 'sparse', 'log-drum': 'sparse', 'electric-guitar': 'sparse', shaker: 'sparse', 'tenor-sax': 'sparse' },
    },
  },

  // 21. J-POP (BPM: 124, 80 bars = 154.8s)
  'j-pop': {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verse-a', 'verse', 16, 'Verse (A)', 'medium'),
      F('pre-chorus', 'bridge', 8, 'Pre-Chorus (B)', 'high'),
      F('sabi-1', 'chorus', 16, 'Chorus (Sabi)', 'high'),
      F('verse-a2', 'verse', 8, 'Verse 2 (A2)', 'medium'),
      F('pre-chorus-2', 'bridge', 8, 'Pre-Chorus 2', 'high'),
      F('last-sabi', 'chorus', 12, 'Chorus (Last Sabi)', 'peak'),
      F('outro', 'ending', 4, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-a', 'pre-chorus', 'sabi-1', 'verse-a2', 'pre-chorus-2', 'last-sabi', 'outro'],
    densities: {
      intro: { 'electric-guitar': 'sparse', 'slap-bass': 'sparse', drums: 'sparse', piano: 'normal', 'saw-lead': 'normal' },
      'verse-a': { 'electric-guitar': 'normal', 'slap-bass': 'normal', drums: 'normal', piano: 'normal', 'saw-lead': 'sparse' },
      'pre-chorus': { 'electric-guitar': 'normal', 'slap-bass': 'normal', drums: 'normal', piano: 'normal', 'saw-lead': 'normal' },
      'sabi-1': { 'electric-guitar': 'busy', 'slap-bass': 'busy', drums: 'busy', piano: 'busy', 'saw-lead': 'busy' },
      'verse-a2': { 'electric-guitar': 'sparse', 'slap-bass': 'normal', drums: 'normal', piano: 'normal', 'saw-lead': 'sparse' },
      'pre-chorus-2': { 'electric-guitar': 'normal', 'slap-bass': 'normal', drums: 'busy', piano: 'normal', 'saw-lead': 'normal' },
      'last-sabi': { 'electric-guitar': 'busy', 'slap-bass': 'busy', drums: 'busy', piano: 'busy', 'saw-lead': 'busy' },
      outro: { 'electric-guitar': 'sparse', 'slap-bass': 'sparse', drums: 'sparse', piano: 'sparse', 'saw-lead': 'sparse' },
    },
  },

  // 22. CHINESE ROCK (BPM: 112, 72 bars = 154.3s)
  'chinese-rock': {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verse-1', 'verse', 16, 'Verse 1', 'medium'),
      F('chorus-1', 'chorus', 12, 'Chorus 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('solo', 'solo', 8, 'Guitar / Guzheng Solo', 'peak'),
      F('chorus-2', 'chorus', 12, 'Chorus 2', 'peak'),
      F('outro', 'ending', 4, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'chorus-1', 'verse-2', 'solo', 'chorus-2', 'outro'],
    densities: {
      intro: { 'distortion-guitar': 'sparse', bass: 'sparse', drums: 'sparse', guzheng: 'normal', strings: 'sparse' },
      'verse-1': { 'distortion-guitar': 'normal', bass: 'normal', drums: 'normal', guzheng: 'normal', strings: 'sparse' },
      'chorus-1': { 'distortion-guitar': 'busy', bass: 'normal', drums: 'busy', guzheng: 'normal', strings: 'normal' },
      'verse-2': { 'distortion-guitar': 'normal', bass: 'normal', drums: 'normal', guzheng: 'sparse', strings: 'normal' },
      solo: { 'distortion-guitar': 'busy', bass: 'normal', drums: 'busy', guzheng: 'busy', strings: 'sparse' },
      'chorus-2': { 'distortion-guitar': 'busy', bass: 'busy', drums: 'busy', guzheng: 'busy', strings: 'busy' },
      outro: { 'distortion-guitar': 'sparse', bass: 'sparse', drums: 'sparse', guzheng: 'sparse', strings: 'sparse' },
    },
  },

  // 23. FUSION AMBIENT (BPM: 78, 50 bars = 153.8s)
  'fusion-ambient': {
    steps: [
      F('drift', 'intro', 8, 'Drift (Intro)', 'low'),
      F('theme', 'verse', 12, 'Theme', 'medium'),
      F('development', 'bridge', 12, 'Development', 'high'),
      F('peak', 'chorus', 12, 'Peak Resonance', 'peak'),
      F('space', 'coda', 6, 'Space (Fade)', 'low'),
    ],
    allowed: ['drift', 'theme', 'development', 'peak', 'space'],
    densities: {
      drift: { 'electric-guitar': 'sparse', 'warm-pad': 'normal', 'fretless-bass': 'sparse', tabla: 'sparse', rhodes: 'sparse' },
      theme: { 'electric-guitar': 'normal', 'warm-pad': 'normal', 'fretless-bass': 'normal', tabla: 'sparse', rhodes: 'normal' },
      development: { 'electric-guitar': 'busy', 'warm-pad': 'normal', 'fretless-bass': 'normal', tabla: 'normal', rhodes: 'normal' },
      peak: { 'electric-guitar': 'busy', 'warm-pad': 'busy', 'fretless-bass': 'normal', tabla: 'busy', rhodes: 'busy' },
      space: { 'electric-guitar': 'sparse', 'warm-pad': 'sparse', 'fretless-bass': 'sparse', tabla: 'sparse', rhodes: 'sparse' },
    },
  },

  // 24. CHINESE TRADITIONAL (BPM: 76, 48 bars = 151.6s)
  'chinese-traditional': {
    steps: [
      F('qi', 'intro', 8, 'Opening (Qi)', 'low'),
      F('cheng', 'verse', 12, 'Theme (Cheng)', 'medium'),
      F('zhuan', 'bridge', 12, 'Development (Zhuan)', 'high'),
      F('heterophony', 'solo', 10, 'Heterophony', 'peak'),
      F('he', 'coda', 6, 'Return & Cadence (He)', 'low'),
    ],
    allowed: ['qi', 'cheng', 'zhuan', 'heterophony', 'he'],
    densities: {
      qi: { erhu: 'sparse', pipa: 'normal', guzheng: 'sparse', dizi: 'sparse', paigu: 'sparse' },
      cheng: { erhu: 'normal', pipa: 'normal', guzheng: 'normal', dizi: 'normal', paigu: 'sparse' },
      zhuan: { erhu: 'busy', pipa: 'busy', guzheng: 'normal', dizi: 'normal', paigu: 'normal' },
      heterophony: { erhu: 'busy', pipa: 'busy', guzheng: 'busy', dizi: 'busy', paigu: 'busy' },
      he: { erhu: 'sparse', pipa: 'sparse', guzheng: 'sparse', dizi: 'sparse', paigu: 'sparse' },
    },
  },

  // 25. JAPANESE TRADITIONAL (BPM: 82, 52 bars = 152.2s)
  'japanese-traditional': {
    steps: [
      F('jo', 'intro', 8, 'Opening (Jo)', 'low'),
      F('ha-1', 'verse', 12, 'Theme (Ha-1)', 'medium'),
      F('ha-2', 'bridge', 12, 'Development (Ha-2)', 'high'),
      F('kyu', 'solo', 12, 'Peak / Kakeai (Kyu)', 'peak'),
      F('ma', 'coda', 8, 'Ma & Cadence', 'low'),
    ],
    allowed: ['jo', 'ha-1', 'ha-2', 'kyu', 'ma'],
    densities: {
      jo: { koto: 'normal', shamisen: 'sparse', shakuhachi: 'sparse', taiko: 'sparse', kane: 'sparse' },
      'ha-1': { koto: 'normal', shamisen: 'normal', shakuhachi: 'normal', taiko: 'sparse', kane: 'sparse' },
      'ha-2': { koto: 'normal', shamisen: 'busy', shakuhachi: 'normal', taiko: 'normal', kane: 'normal' },
      kyu: { koto: 'busy', shamisen: 'busy', shakuhachi: 'busy', taiko: 'busy', kane: 'normal' },
      ma: { koto: 'sparse', shamisen: 'sparse', shakuhachi: 'sparse', taiko: 'sparse', kane: 'sparse' },
    },
  },

  // 26. REGGAETON / DEMBOW (BPM: 96, 60 bars = 150s)
  'reggaeton-dembow': {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verso-1', 'verse', 16, 'Verso 1', 'medium'),
      F('hook-1', 'chorus', 8, 'Hook 1', 'high'),
      F('verso-2', 'verse', 12, 'Verso 2', 'medium'),
      F('break', 'breakdown', 4, 'Break', 'low'),
      F('hook-2', 'chorus', 8, 'Hook 2', 'peak'),
      F('outro', 'coda', 4, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verso-1', 'hook-1', 'verso-2', 'break', 'hook-2', 'outro'],
    densities: {
      intro: { drums: 'sparse', 'sub-bass': 'sparse', piano: 'normal', 'synth-brass': 'sparse', guitar: 'sparse' },
      'verso-1': { drums: 'normal', 'sub-bass': 'normal', piano: 'normal', 'synth-brass': 'sparse', guitar: 'normal' },
      'hook-1': { drums: 'busy', 'sub-bass': 'normal', piano: 'normal', 'synth-brass': 'busy', guitar: 'normal' },
      'verso-2': { drums: 'normal', 'sub-bass': 'normal', piano: 'normal', 'synth-brass': 'sparse', guitar: 'normal' },
      break: { drums: 'sparse', 'sub-bass': 'sparse', piano: 'sparse', 'synth-brass': 'sparse', guitar: 'normal' },
      'hook-2': { drums: 'busy', 'sub-bass': 'busy', piano: 'busy', 'synth-brass': 'busy', guitar: 'busy' },
      outro: { drums: 'sparse', 'sub-bass': 'sparse', piano: 'sparse', 'synth-brass': 'sparse', guitar: 'sparse' },
    },
  },

  // 27. CUMBIA (BPM: 102, 64 bars = 150.6s)
  cumbia: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verso-1', 'verse', 16, 'Verso 1', 'medium'),
      F('estribillo-1', 'chorus', 8, 'Estribillo 1', 'high'),
      F('verso-2', 'verse', 12, 'Verso 2', 'medium'),
      F('descarga', 'solo', 8, 'Descarga / Solo', 'peak'),
      F('estribillo-2', 'chorus', 8, 'Estribillo 2', 'high'),
      F('coda', 'coda', 4, 'Coda', 'low'),
    ],
    allowed: ['intro', 'verso-1', 'estribillo-1', 'verso-2', 'descarga', 'estribillo-2', 'coda'],
    densities: {
      intro: { bass: 'sparse', tambora: 'sparse', accordion: 'normal', guitar: 'sparse', guacharaca: 'sparse' },
      'verso-1': { bass: 'normal', tambora: 'normal', accordion: 'normal', guitar: 'normal', guacharaca: 'normal' },
      'estribillo-1': { bass: 'normal', tambora: 'normal', accordion: 'busy', guitar: 'normal', guacharaca: 'busy' },
      'verso-2': { bass: 'normal', tambora: 'normal', accordion: 'normal', guitar: 'normal', guacharaca: 'normal' },
      descarga: { bass: 'busy', tambora: 'busy', accordion: 'busy', guitar: 'busy', guacharaca: 'busy' },
      'estribillo-2': { bass: 'normal', tambora: 'normal', accordion: 'busy', guitar: 'normal', guacharaca: 'busy' },
      coda: { bass: 'sparse', tambora: 'sparse', accordion: 'sparse', guitar: 'sparse', guacharaca: 'sparse' },
    },
  },

  // 28. TROVA (BPM: 78, 50 bars = 153.8s)
  trova: {
    steps: [
      F('intro', 'intro', 4, 'Intro', 'low'),
      F('verso-1', 'verse', 12, 'Verso 1', 'medium'),
      F('estribillo-1', 'chorus', 8, 'Estribillo 1', 'high'),
      F('verso-2', 'verse', 12, 'Verso 2', 'medium'),
      F('interludio', 'bridge', 6, 'Interludio', 'high'),
      F('estribillo-2', 'chorus', 6, 'Final Estribillo', 'peak'),
      F('coda', 'coda', 2, 'Coda', 'low'),
    ],
    allowed: ['intro', 'verso-1', 'estribillo-1', 'verso-2', 'interludio', 'estribillo-2', 'coda'],
    densities: {
      intro: { guitar: 'normal', tres: 'sparse', 'upright-bass': 'sparse', cajon: 'sparse', flute: 'sparse' },
      'verso-1': { guitar: 'normal', tres: 'sparse', 'upright-bass': 'normal', cajon: 'sparse', flute: 'normal' },
      'estribillo-1': { guitar: 'normal', tres: 'normal', 'upright-bass': 'normal', cajon: 'normal', flute: 'normal' },
      'verso-2': { guitar: 'normal', tres: 'normal', 'upright-bass': 'normal', cajon: 'sparse', flute: 'normal' },
      interludio: { guitar: 'normal', tres: 'busy', 'upright-bass': 'normal', cajon: 'normal', flute: 'busy' },
      'estribillo-2': { guitar: 'busy', tres: 'busy', 'upright-bass': 'normal', cajon: 'busy', flute: 'busy' },
      coda: { guitar: 'sparse', tres: 'sparse', 'upright-bass': 'sparse', cajon: 'sparse', flute: 'sparse' },
    },
  },

  // 29. FOLCLORICO (BPM: 108, 68 bars = 151.1s)
  folclorico: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('copla-1', 'verse', 16, 'Copla 1', 'medium'),
      F('estribillo-1', 'chorus', 8, 'Estribillo 1', 'high'),
      F('copla-2', 'verse', 12, 'Copla 2', 'medium'),
      F('danza', 'solo', 12, 'Danza (Solo)', 'peak'),
      F('estribillo-2', 'chorus', 8, 'Estribillo 2', 'high'),
      F('coda', 'coda', 4, 'Coda', 'low'),
    ],
    allowed: ['intro', 'copla-1', 'estribillo-1', 'copla-2', 'danza', 'estribillo-2', 'coda'],
    densities: {
      intro: { guitar: 'normal', charango: 'normal', accordion: 'sparse', zapateado: 'sparse', guitarron: 'sparse' },
      'copla-1': { guitar: 'normal', charango: 'normal', accordion: 'normal', zapateado: 'normal', guitarron: 'normal' },
      'estribillo-1': { guitar: 'normal', charango: 'busy', accordion: 'normal', zapateado: 'busy', guitarron: 'normal' },
      'copla-2': { guitar: 'normal', charango: 'normal', accordion: 'normal', zapateado: 'normal', guitarron: 'normal' },
      danza: { guitar: 'busy', charango: 'busy', accordion: 'busy', zapateado: 'busy', guitarron: 'normal' },
      'estribillo-2': { guitar: 'normal', charango: 'busy', accordion: 'normal', zapateado: 'busy', guitarron: 'normal' },
      coda: { guitar: 'sparse', charango: 'sparse', accordion: 'sparse', zapateado: 'sparse', guitarron: 'sparse' },
    },
  },

  // 30. HOUSE / TECHNO (BPM: 126, 80 bars = 152.4s)
  'house-techno': {
    steps: [
      F('intro', 'intro', 12, 'Intro', 'low'),
      F('build-1', 'bridge', 8, 'Build 1', 'medium'),
      F('drop-1', 'chorus', 16, 'Drop 1', 'high'),
      F('breakdown', 'breakdown', 8, 'Breakdown', 'low'),
      F('build-2', 'bridge', 8, 'Build 2', 'high'),
      F('drop-2', 'chorus', 20, 'Drop 2', 'peak'),
      F('outro', 'coda', 8, 'Outro', 'low'),
    ],
    allowed: ['intro', 'build-1', 'drop-1', 'breakdown', 'build-2', 'drop-2', 'outro'],
    densities: {
      intro: { kick: 'sparse', 'sub-bass': 'sparse', polysynth: 'normal', 'saw-lead': 'sparse', hats: 'sparse' },
      'build-1': { kick: 'normal', 'sub-bass': 'normal', polysynth: 'normal', 'saw-lead': 'normal', hats: 'normal' },
      'drop-1': { kick: 'normal', 'sub-bass': 'busy', polysynth: 'normal', 'saw-lead': 'busy', hats: 'normal' },
      breakdown: { kick: 'sparse', 'sub-bass': 'sparse', polysynth: 'busy', 'saw-lead': 'sparse', hats: 'sparse' },
      'build-2': { kick: 'normal', 'sub-bass': 'normal', polysynth: 'busy', 'saw-lead': 'busy', hats: 'normal' },
      'drop-2': { kick: 'normal', 'sub-bass': 'busy', polysynth: 'busy', 'saw-lead': 'busy', hats: 'busy' },
      outro: { kick: 'sparse', 'sub-bass': 'sparse', polysynth: 'sparse', 'saw-lead': 'sparse', hats: 'sparse' },
    },
  },

  // 31. REGGAE / DUB (BPM: 78, 50 bars = 153.8s)
  'reggae-dub': {
    steps: [
      F('intro', 'intro', 4, 'Intro', 'low'),
      F('verse-1', 'verse', 12, 'Verse 1', 'medium'),
      F('chorus-1', 'chorus', 8, 'Chorus 1', 'high'),
      F('verse-2', 'verse', 12, 'Verse 2', 'medium'),
      F('dub-break', 'breakdown', 8, 'Dub Break', 'low'),
      F('dub-outro', 'coda', 6, 'Dub Version Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'chorus-1', 'verse-2', 'dub-break', 'dub-outro'],
    densities: {
      intro: { bass: 'normal', drums: 'sparse', organ: 'sparse', 'electric-guitar': 'sparse', melodica: 'sparse' },
      'verse-1': { bass: 'normal', drums: 'normal', organ: 'normal', 'electric-guitar': 'normal', melodica: 'sparse' },
      'chorus-1': { bass: 'normal', drums: 'normal', organ: 'busy', 'electric-guitar': 'normal', melodica: 'normal' },
      'verse-2': { bass: 'normal', drums: 'normal', organ: 'normal', 'electric-guitar': 'normal', melodica: 'normal' },
      'dub-break': { bass: 'sparse', drums: 'sparse', organ: 'sparse', 'electric-guitar': 'sparse', melodica: 'busy' },
      'dub-outro': { bass: 'normal', drums: 'sparse', organ: 'sparse', 'electric-guitar': 'sparse', melodica: 'sparse' },
    },
  },

  // 32. SKA (BPM: 150, 96 bars = 153.6s)
  ska: {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('verse-1', 'verse', 16, 'Verse 1', 'medium'),
      F('hook-1', 'chorus', 12, 'Hook 1', 'high'),
      F('verse-2', 'verse', 16, 'Verse 2', 'medium'),
      F('solo', 'solo', 16, 'Brass Solo', 'peak'),
      F('hook-2', 'chorus', 16, 'Hook 2', 'peak'),
      F('outro', 'coda', 12, 'Outro', 'low'),
    ],
    allowed: ['intro', 'verse-1', 'hook-1', 'verse-2', 'solo', 'hook-2', 'outro'],
    densities: {
      intro: { bass: 'normal', drums: 'normal', 'electric-guitar': 'sparse', organ: 'sparse', trumpet: 'sparse' },
      'verse-1': { bass: 'normal', drums: 'normal', 'electric-guitar': 'normal', organ: 'normal', trumpet: 'sparse' },
      'hook-1': { bass: 'busy', drums: 'normal', 'electric-guitar': 'normal', organ: 'normal', trumpet: 'busy' },
      'verse-2': { bass: 'normal', drums: 'normal', 'electric-guitar': 'normal', organ: 'normal', trumpet: 'normal' },
      solo: { bass: 'busy', drums: 'busy', 'electric-guitar': 'normal', organ: 'busy', trumpet: 'busy' },
      'hook-2': { bass: 'busy', drums: 'busy', 'electric-guitar': 'busy', organ: 'busy', trumpet: 'busy' },
      outro: { bass: 'sparse', drums: 'sparse', 'electric-guitar': 'sparse', organ: 'sparse', trumpet: 'sparse' },
    },
  },

  // 33. SAMBA / BOSSA (BPM: 112, 72 bars = 154.3s)
  'samba-bossa': {
    steps: [
      F('intro', 'intro', 8, 'Intro', 'low'),
      F('a1', 'verse', 16, 'A1 (Tema)', 'medium'),
      F('a2', 'verse', 16, 'A2', 'medium'),
      F('b', 'bridge', 16, 'B (Desenvolvimento)', 'high'),
      F('climax', 'solo', 10, 'Batucada Climax', 'peak'),
      F('coda', 'coda', 6, 'Coda', 'low'),
    ],
    allowed: ['intro', 'a1', 'a2', 'b', 'climax', 'coda'],
    densities: {
      intro: { guitar: 'normal', 'upright-bass': 'sparse', piano: 'sparse', pandeiro: 'sparse', flute: 'sparse' },
      a1: { guitar: 'normal', 'upright-bass': 'normal', piano: 'normal', pandeiro: 'normal', flute: 'normal' },
      a2: { guitar: 'normal', 'upright-bass': 'normal', piano: 'normal', pandeiro: 'normal', flute: 'normal' },
      b: { guitar: 'normal', 'upright-bass': 'normal', piano: 'busy', pandeiro: 'busy', flute: 'busy' },
      climax: { guitar: 'busy', 'upright-bass': 'busy', piano: 'busy', pandeiro: 'busy', flute: 'busy' },
      coda: { guitar: 'sparse', 'upright-bass': 'sparse', piano: 'sparse', pandeiro: 'sparse', flute: 'sparse' },
    },
  },

  // 34. CELTIC TRAD (BPM: 116, 72 bars = 148.9s)
  'celtic-trad': {
    steps: [
      F('air', 'intro', 8, 'Slow Air (Intro)', 'low'),
      F('reel-a1', 'verse', 16, 'Reel Strain A1', 'medium'),
      F('reel-b1', 'chorus', 16, 'Reel Strain B1', 'high'),
      F('reel-a2', 'verse', 16, 'Reel Strain A2', 'medium'),
      F('reel-b2', 'solo', 12, 'Reel Strain B2', 'peak'),
      F('coda', 'coda', 4, 'Cadence / Coda', 'low'),
    ],
    allowed: ['air', 'reel-a1', 'reel-b1', 'reel-a2', 'reel-b2', 'coda'],
    densities: {
      air: { fiddle: 'sparse', harp: 'normal', accordion: 'sparse', 'uilleann-pipes': 'sparse', bodhran: 'sparse' },
      'reel-a1': { fiddle: 'normal', harp: 'sparse', accordion: 'normal', 'uilleann-pipes': 'normal', bodhran: 'normal' },
      'reel-b1': { fiddle: 'busy', harp: 'normal', accordion: 'normal', 'uilleann-pipes': 'busy', bodhran: 'busy' },
      'reel-a2': { fiddle: 'normal', harp: 'normal', accordion: 'normal', 'uilleann-pipes': 'normal', bodhran: 'normal' },
      'reel-b2': { fiddle: 'busy', harp: 'busy', accordion: 'busy', 'uilleann-pipes': 'busy', bodhran: 'busy' },
      coda: { fiddle: 'sparse', harp: 'sparse', accordion: 'sparse', 'uilleann-pipes': 'sparse', bodhran: 'sparse' },
    },
  },
};

/** Preferred identity-carrying patterns for the 5 starter instruments of each genre. */
export const DEFAULT_PATTERN_PREFERENCES: Record<string, Record<string, string>> = {
  tango: {
    bandoneon: 'tango-bandoneon-chords',
    piano: 'tango-piano-chumba',
    'upright-bass': 'tango-bass-pizzicato',
    violin: 'tango-violin-melody',
    cello: 'tango-marcato-4',
  },
  salsa: {
    piano: 'salsa-comp-15',
    bass: 'afro-bass-tumbao',
    congas: 'salsa-campana',
    timbales: 'salsa-guiro',
    trumpet: 'afro-mambo-horn-hits',
  },
  timba: {
    piano: 'timba-piano-guajeo',
    bass: 'timba-synth-bass',
    timbales: 'timba-songo-groove',
    congas: 'timba-conga-gear',
    trombone: 'timba-horn-moña',
  },
  jazz: {
    piano: 'jazz-piano-red-garland',
    'upright-bass': 'jazz-bass-pedal',
    'brush-kit': 'jazz-brushes-swing',
    'tenor-sax': 'jazz-call-14',
    'jazz-guitar': 'jazz-piano-comping',
  },
  blues: {
    'electric-guitar': 'blues-texas-shuffle',
    bass: 'blues-bass-walk',
    drums: 'blues-shuffle',
    piano: 'blues-piano-triplets',
    harmonica: 'blues-turnaround',
  },
  rock: {
    'overdrive-guitar': 'rock-acoustic-strum',
    bass: 'rock-straight-drive',
    drums: 'rock-halftime-groove',
    'electric-guitar': 'rock-acoustic-strum',
    organ: 'rock-prog-synth',
  },
  'rock-en-espanol': {
    'electric-guitar': 'res-ska-upbeat',
    bass: 'res-cumbia-bass',
    drums: 'res-punk-drive',
    'overdrive-guitar': 'res-ska-upbeat',
    organ: 'res-reggae-bubble',
  },
  zouk: {
    'sub-bass': 'zouk-french-bass',
    drums: 'zouk-snare',
    rhodes: 'zouk-synth-chords',
    'electric-guitar': 'zouk-guitar-skank-chawa',
    'warm-pad': 'zouk-synth-chords',
  },
  kizomba: {
    'sub-bass': 'kizomba-tarraxinha-sub',
    drums: 'kizomba-batida-groove',
    rhodes: 'kizomba-urban-synth-pulse',
    'electric-guitar': 'kizomba-semba-guitar',
    'warm-pad': 'kizomba-tarraxinha-sub',
  },
  funk: {
    'slap-bass': 'funk-slap-bass',
    drums: 'funk-drum-breakbeat',
    clavinet: 'funk-clavinet',
    'electric-guitar': 'funk-16th-strum',
    'horn-section': 'funk-horn-section',
  },
  metal: {
    'distortion-guitar': 'metal-clean-arp',
    'overdrive-guitar': 'metal-clean-arp',
    bass: 'metal-breakdown',
    drums: 'metal-blast-beat',
    'guitar-harmonics': 'metal-clean-arp',
  },
  bachata: {
    requinto: 'bachata-segunda-derecho',
    guitar: 'bachata-segunda-derecho',
    bass: 'bachata-bass-derecho',
    bongos: 'bachata-bongo-derecho',
    guiro: 'bachata-bongo-majao',
  },
  folk: {
    guitar: 'folk-comp-15',
    fiddle: 'folk-fiddle-drone',
    'upright-bass': 'folk-roster-bass',
    bodhran: 'folk-verse-17',
    mandolin: 'folk-travis',
  },
  'hip-hop': {
    drums: 'hiphop-boom-basic',
    'sub-bass': 'hiphop-trap-basic',
    piano: 'hip-hop-sampled-keys',
    turntable: 'hiphop-808-glide-bass',
    'warm-pad': 'hiphop-808-glide-bass',
  },
  electronic: {
    drums: 'elec-4onfloor',
    'bass-lead': 'elec-trance-16ths',
    'warm-pad': 'elec-ambient',
    'saw-lead': 'elec-synthwave',
    polysynth: 'electronic-comp-16',
  },
  country: {
    'steel-guitar': 'country-chicken',
    'upright-bass': 'country-boom-chuck',
    'brush-kit': 'country-train',
    fiddle: 'country-trap-hats',
    banjo: 'country-comp-14',
  },
  swing: {
    'upright-bass': 'swing-walking-bass',
    drums: 'swing-spang',
    piano: 'swing-charleston',
    'tenor-sax': 'swing-call-11',
    'jazz-guitar': 'swing-comp-13',
  },
  'math-rock': {
    'electric-guitar': 'math-tapping-7-8',
    'guitar-harmonics': 'math-polymeter-interlock',
    bass: 'math-two-hand-bass',
    drums: 'math-odd-meter-drums',
    'overdrive-guitar': 'math-tapping-7-8',
  },
  afrobeats: {
    'sub-bass': 'afro-log-drum-bass',
    'log-drum': 'afrobeats-break-15',
    'electric-guitar': 'afro-highlife-guitar',
    shaker: 'afro-shekere-shaker',
    'tenor-sax': 'afro-horn-stabs',
  },
  'j-pop': {
    'electric-guitar': 'jpop-city-guitar-chops',
    'slap-bass': 'jpop-city-slap-bass',
    drums: 'jpop-city-pocket-drums',
    piano: 'jpop-city-rhodes-comp',
    'saw-lead': 'jpop-lush-synth-pad',
  },
  'chinese-rock': {
    'distortion-guitar': 'crock-acoustic-verse-strum',
    bass: 'crock-anthemic-bass',
    drums: 'crock-dynamic-drums',
    guzheng: 'chinese-rock-comp-10',
    strings: 'chinese-rock-intro-11',
  },
  'fusion-ambient': {
    'electric-guitar': 'fusion-ambient-guitar-swells',
    'warm-pad': 'fusion-deep-granular-pad',
    'fretless-bass': 'fusion-sub-drone-bass',
    tabla: 'fusion-organic-percussion',
    rhodes: 'fusion-felt-piano-arpeggio',
  },
  'chinese-traditional': {
    erhu: 'ct-sizhu-heterophony',
    pipa: 'ct-pipa-articulation',
    guzheng: 'ct-pentatonic-drone',
    dizi: 'ct-09-sizhu-shared-tune',
    paigu: 'ct-opera-cue',
  },
  'japanese-traditional': {
    koto: 'jt-koto-arpeggio',
    shamisen: 'jt-shamisen-bachi',
    shakuhachi: 'jt-kakeai-answer',
    taiko: 'jt-gagaku-sho-bed',
    kane: 'jt-cadential-gliss',
  },
  'reggaeton-dembow': {
    drums: 'rg-dembow-break',
    'sub-bass': 'rg-dembow-bass',
    piano: 'rg-09-reggaeton-piano-stab',
    'synth-brass': 'rg-synth-stab',
    guitar: 'rg-synth-stab',
  },
  cumbia: {
    bass: 'cu-cumbia-bass',
    tambora: 'cu-cumbia-drum',
    accordion: 'cu-keyboard-hook',
    guitar: 'cu-09-cumbia-guitar-offbeat',
    guacharaca: 'cu-guacharaca',
  },
  trova: {
    guitar: 'tr-06-trova-fingerpicked-arpeggio',
    tres: 'tr-trova-arpeggio',
    'upright-bass': 'tr-bolero-bass',
    cajon: 'tr-tres-guajeo',
    flute: 'tr-voice-pickup',
  },
  folclorico: {
    guitar: 'ff-06-huayno-strum',
    charango: 'ff-huayno-strum',
    accordion: 'ff-sesquialtera',
    zapateado: 'ff-bombo-leguero',
    guitarron: 'ff-06-huayno-strum',
  },
  'house-techno': {
    kick: 'ht-four-floor',
    'sub-bass': 'ht-house-bass',
    polysynth: 'ht-09-house-chord-stab',
    'saw-lead': 'ht-techno-sequence',
    hats: 'ht-offbeat-hat',
  },
  'reggae-dub': {
    bass: 'rd-reggae-bass',
    drums: 'rd-one-drop',
    organ: 'rd-skank',
    'electric-guitar': 'rd-07-skank-guitar',
    melodica: 'rd-14-dub-horn-reply',
  },
  ska: {
    bass: 'sk-walking-bass',
    drums: 'sk-two-tone-drive',
    'electric-guitar': 'sk-offbeat-chop',
    organ: 'sk-offbeat-chop',
    trumpet: 'sk-horn-answer',
  },
  'samba-bossa': {
    guitar: 'sb-10-bossa-guitar-clave',
    'upright-bass': 'sb-bossa-bass',
    piano: 'sb-bossa-guitar',
    pandeiro: 'sb-pandeiro',
    flute: 'sb-surdo-foundation',
  },
  'celtic-trad': {
    fiddle: 'ct-reel-drive',
    harp: 'ct-uilleann-drone',
    accordion: 'ct-jig-bounce',
    'uilleann-pipes': 'ct-cadence-open-fifth',
    bodhran: 'ct-bodhran-low',
  },
};

/** Characteristically curated chord progressions per genre. */
export const PROGRESSIONS: Record<string, string[]> = {
  tango: ['i', 'i', 'iv', 'V7'],
  salsa: ['ii7', 'V7', 'Imaj7', 'VI7'],
  timba: ['i7', 'iv7', 'V7', 'i7'],
  bachata: ['i', 'VI', 'III', 'VII'],
  zouk: ['Imaj7', 'vi7', 'ii7', 'V7'],
  kizomba: ['i', 'VI', 'III', 'VII'],
  jazz: ['ii7', 'V7', 'Imaj7', 'Imaj7'],
  blues: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'],
  rock: ['vi', 'IV', 'I', 'V'],
  'rock-en-espanol': ['vi', 'IV', 'I', 'V'],
  funk: ['i9', 'IV7', 'i9', 'IV7'],
  metal: ['i', 'i', 'VI', 'V7'],
  folk: ['I', 'V', 'vi', 'IV'],
  'hip-hop': ['i', 'i', 'iv', 'v'],
  electronic: ['vi', 'IV', 'I', 'V'],
  country: ['I', 'IV', 'I', 'V7'],
  swing: ['Imaj7', 'vi7', 'ii7', 'V7'],
  'math-rock': ['vi9', 'IVmaj7', 'Imaj7', 'IIadd9'],
  afrobeats: ['vi7', 'IVmaj7', 'Imaj7', 'V6'],
  'j-pop': ['IVmaj7', 'V7', 'iii7', 'vi7'],
  'chinese-rock': ['vi', 'IV', 'I', 'V'],
  'fusion-ambient': ['i9', 'VImaj7', 'IIImaj7', 'VIIadd9'],
  'chinese-traditional': ['i', 'i', 'iv', 'i'],
  'japanese-traditional': ['i', 'iv', 'i', 'V7'],
  'reggaeton-dembow': ['vi', 'IV', 'I', 'V'],
  cumbia: ['i', 'VII', 'VI', 'V7'],
  trova: ['I', 'vi', 'ii7', 'V7'],
  folclorico: ['i', 'VII', 'VI', 'V7'],
  'house-techno': ['i7', 'i7', 'VImaj7', 'VII6'],
  'reggae-dub': ['i', 'i', 'iv', 'i'],
  ska: ['I', 'vi', 'IV', 'V'],
  'samba-bossa': ['ii7', 'V7', 'Imaj7', 'VI7'],
  'celtic-trad': ['I', 'IV', 'V', 'I', 'vi', 'IV', 'V', 'I'],
};

/** Culturally tuned starter tempos per genre. */
export const TEMPOS: Record<string, number> = {
  tango: 120,
  salsa: 190,
  timba: 200,
  bachata: 128,
  zouk: 100,
  kizomba: 92,
  jazz: 140,
  blues: 92,
  rock: 128,
  'rock-en-espanol': 124,
  funk: 104,
  metal: 150,
  folk: 90,
  'hip-hop': 90,
  electronic: 128,
  country: 110,
  swing: 160,
  'math-rock': 125,
  afrobeats: 108,
  'j-pop': 124,
  'chinese-rock': 112,
  'fusion-ambient': 78,
  'chinese-traditional': 76,
  'japanese-traditional': 82,
  'reggaeton-dembow': 96,
  cumbia: 102,
  trova: 78,
  folclorico: 108,
  'house-techno': 126,
  'reggae-dub': 78,
  ska: 150,
  'samba-bossa': 112,
  'celtic-trad': 116,
};

/** Evocative starter song titles across all 34 musical worlds. */
export const TITLES: Record<string, string> = {
  tango: 'Yumba para nadie',
  salsa: 'Cáscara y cuero',
  timba: 'Se formó',
  bachata: 'Dos vueltas',
  zouk: 'Noche lenta',
  kizomba: 'Passada suave',
  jazz: 'Blue Corner',
  blues: 'Long Way Back',
  rock: 'Static Hour',
  'rock-en-espanol': 'Ciudad abierta',
  funk: 'Grease and Glass',
  metal: 'Iron Weather',
  folk: 'Winding River',
  'hip-hop': 'City Grid',
  electronic: 'Neon Waves',
  country: 'Dusty Road',
  swing: 'Uptown Jump',
  'math-rock': 'Odd Rooms',
  afrobeats: 'Night Market',
  'j-pop': 'Neon Summer',
  'chinese-rock': 'Open Horizon',
  'fusion-ambient': 'Slow Light',
  'chinese-traditional': 'Ink and Bamboo',
  'japanese-traditional': 'Between Bells',
  'reggaeton-dembow': 'After Midnight',
  cumbia: 'Calle cíclica',
  trova: 'Open Window',
  folclorico: 'Mountain Road',
  'house-techno': 'Pulse Architecture',
  'reggae-dub': 'Echo Version',
  ska: 'Upbeat City',
  'samba-bossa': 'Quiet Carnival',
  'celtic-trad': 'The Mist of Glen',
};
