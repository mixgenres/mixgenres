import type { SequenceEvent, PerformanceContext } from './strumming';

export interface ModulationParams {
  vibratoDepth: number;
  vibratoRate: number;
  vibratoDelay: number;
  portamentoTime: number;
  pitchWobble?: number;
}

export class ArticulationInterpreter {
  public applyModulation(event: SequenceEvent, ctx: PerformanceContext): ModulationParams {
    // Extract expressive modulation rules from the genre world
    const modulationMeta = event.instrument ? ctx.genre?.expressiveModulation?.[event.instrument] : undefined;
    
    if (!modulationMeta) {
      return { vibratoDepth: 0.05, vibratoRate: 5.0, portamentoTime: 0, vibratoDelay: 0, pitchWobble: 0.0 };
    }
    
    // Scale vibrato based on note duration (long notes get more expression)
    const duration = event.duration ?? event.dur ?? 0.5;
    const durationMultiplier = Math.min(1.0, duration / 2.0);
    
    return {
      // Allow genres to dictate heavy, slow vibrato (Tango) vs fast, tight vibrato (Gypsy Jazz)
      vibratoDepth: (modulationMeta.depth ?? 0.1) * durationMultiplier,
      vibratoRate: (modulationMeta.rate ?? 5.0) + (ctx.rng.float() * 0.5 - 0.25),
      
      // Delay vibrato onset for authentic string/wind phrasing
      vibratoDelay: modulationMeta.delay || 0.15,
      
      // Slide/Glissando mechanics tied directly to arrangement metadata
      portamentoTime: event.metadata?.isSlide ? (modulationMeta.slideSpeed || 0.1) : 0,
      
      // Applies a slow, un-synced LFO to pitch, emulating warped tape motors (Wow/Flutter)
      pitchWobble: modulationMeta.wowAndFlutter || 0.0,
    };
  }
}
