import type { SequenceEvent } from '../sequencing/timing';

export interface ModulationParams {
  vibratoDepth: number;
  vibratoRate: number;
  portamentoTime: number;
  vibratoDelay?: number;
  pitchWobble?: number;
}

export class ArticulationInterpreter {
  public applyModulation(event: SequenceEvent, ctx: any): ModulationParams {
    const modulationMeta = ctx?.genre?.expressiveModulation?.[event.instrument || ''];
    if (!modulationMeta) {
      return { vibratoDepth: 0.05, vibratoRate: 5.0, portamentoTime: 0, vibratoDelay: 0 };
    }

    const durationMultiplier = Math.min(1.0, (event.duration || 1) / 2.0);
    const rngFloat = ctx?.rng?.float ? ctx.rng.float() : Math.random();
    return {
      vibratoDepth: modulationMeta.depth * durationMultiplier,
      vibratoRate: modulationMeta.rate + (rngFloat * 0.5 - 0.25),
      vibratoDelay: modulationMeta.delay || 0.15,
      portamentoTime: event.metadata?.isSlide ? modulationMeta.slideSpeed || 0.1 : 0,
      pitchWobble: modulationMeta.wowAndFlutter || 0.0,
    };
  }
}
