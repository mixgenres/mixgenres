import type { SequenceEvent } from '../sequencing/timing';

export class InstrumentBank {
  private audioCtx: AudioContext | null = null;

  constructor(audioCtx?: AudioContext) {
    if (audioCtx) {
      this.audioCtx = audioCtx;
    } else if (typeof window !== 'undefined' && ((window as any).AudioContext || (window as any).webkitAudioContext)) {
      const AudioCtxConstructor = (window as any).AudioContext || (window as any).webkitAudioContext;
      try {
        this.audioCtx = new AudioCtxConstructor();
      } catch (_e) {
        this.audioCtx = null;
      }
    }
  }

  public resolvePatch(instrumentName: string, ctx?: any): string {
    const genrePalette = ctx?.genre?.timbrePalette;
    if (genrePalette && genrePalette[instrumentName]) return genrePalette[instrumentName];

    const smartFallbacks: Record<string, string> = {
      piano: 'acoustic_grand_resonant',
      keys: 'electric_piano_vintage',
      bass: 'upright_bass_plucked',
      drums: 'studio_kit_dry',
      guitar: 'acoustic_steel_strum',
      strings_high: 'violins_legato_vibrato',
      strings_low: 'cellos_spiccato',
    };
    return smartFallbacks[instrumentName] || 'pure_sine';
  }

  public triggerNote(_patchId: string, noteEvent: SequenceEvent): GainNode | null {
    if (!this.audioCtx) return null;
    const node = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    const filterNode = this.audioCtx.createBiquadFilter();

    const vel = noteEvent.velocity !== undefined ? noteEvent.velocity : 80;
    gainNode.gain.value = Math.pow(vel / 127.0, 2);
    filterNode.type = 'lowpass';
    filterNode.frequency.value = 1000 + (vel / 127.0) * 14000;

    node.connect(filterNode);
    filterNode.connect(gainNode);
    try {
      node.start();
    } catch (_e) {
      // AudioContext might be in suspended state
    }
    return gainNode;
  }
}
