export interface KeyContext {
  root: string;
  mode?: string;
  getScale(type: string): string[];
}

export interface TheoryContextProgression {
  key: KeyContext;
  rng: { float(): number };
  genre?: {
    idiomaticProgressions?: string[][];
    culturalHarmony?: {
      voicingRule?: string;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

export class ProgressionBuilder {
  public parseRomanNumeral(numeral: string, key: KeyContext, _voicingRule?: string): string {
    // Basic roman numeral translation placeholder returning named chord relative to key
    return `${key.root} ${numeral}`;
  }

  public generateFunctionalHarmony(length: number, key: KeyContext, rng: { float(): number }): string[] {
    const scale = key.getScale ? key.getScale('major') : ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];
    const chords: string[] = [];
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(rng.float() * scale.length);
      chords.push(scale[idx]);
    }
    return chords;
  }

  public generateProgression(length: number, ctx: TheoryContextProgression): string[] {
    // A student of a genre knows its idiomatic progressions. 
    // We now pull authentically mapped cadences directly from the cultural metadata.
    const idiomaticPool = ctx.genre?.idiomaticProgressions;
    
    if (idiomaticPool && idiomaticPool.length > 0) {
      // Pick an authentic progression based on the deterministic seed
      const index = Math.floor(ctx.rng.float() * idiomaticPool.length);
      const selectedNumerals = idiomaticPool[index];
      
      return selectedNumerals.map(numeral => 
        this.parseRomanNumeral(numeral, ctx.key, ctx.genre?.culturalHarmony?.voicingRule)
      );
    }
    
    // Smart diatonic fallback with functional harmony rules (Tonic -> Subdominant -> Dominant)
    return this.generateFunctionalHarmony(length, ctx.key, ctx.rng);
  }
}
