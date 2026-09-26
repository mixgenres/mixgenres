export class PhraseDynamicsInterpreter {
  public applyMacroPhrasing(event: any, ctx: any): any {
    const phraseLengthBeats = 8.0;
    const positionInPhrase = (event.beat ?? 0) % phraseLengthBeats;
    const swellFactor = Math.sin((positionInPhrase / phraseLengthBeats) * Math.PI);

    const swellAmount = ctx?.genre?.culturalHarmony?.dynamicSwell || 0;
    if (swellAmount === 0) return event;

    const currentVel = event.velocity !== undefined ? event.velocity : 70;
    const phrasedVelocity = currentVel + swellFactor * swellAmount - swellAmount / 2;
    return {
      ...event,
      velocity: Math.max(1, Math.min(127, Math.round(phrasedVelocity))),
      expressionCC: Math.floor(64 + swellFactor * 63),
    };
  }
}
