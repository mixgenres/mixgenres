import { VoiceLeadingResolver } from './voiceLeading';

export class RomanNumeralParser {
  public parse(numeral: string, _key?: any, _voicingRule?: string): any {
    const rootOffsets: Record<string, number> = {
      I: 0, i: 0,
      II: 2, ii: 2,
      III: 4, iii: 4,
      IV: 5, iv: 5,
      V: 7, v: 7,
      VI: 9, vi: 9,
      VII: 11, vii: 11,
    };
    const offset = rootOffsets[numeral.replace(/[^a-zA-Z]/g, '')] ?? 0;
    const baseMidi = 60 + offset;
    return {
      numeral,
      notes: [baseMidi, baseMidi + 4, baseMidi + 7].map(m => ({
        midiValue: m,
        pitch: m,
      })),
    };
  }
}

export class ProgressionBuilder {
  public romanParser: RomanNumeralParser;
  public voiceLeader: VoiceLeadingResolver;

  constructor() {
    this.romanParser = new RomanNumeralParser();
    this.voiceLeader = new VoiceLeadingResolver();
  }

  public parseRomanNumeral(numeral: string, key?: any, voicingRule?: string): any {
    return this.romanParser.parse(numeral, key, voicingRule);
  }

  public generateFunctionalHarmony(length: number, key?: any, _rng?: any): any[] {
    const defaultNumerals = ['I', 'IV', 'V', 'I', 'ii', 'V', 'I', 'IV'];
    const chords: any[] = [];
    for (let i = 0; i < length; i++) {
      const numeral = defaultNumerals[i % defaultNumerals.length];
      chords.push(this.parseRomanNumeral(numeral, key));
    }
    return chords;
  }

  public generateProgression(length: number, ctx: any): any[] {
    const idiomaticPool = ctx?.genre?.idiomaticProgressions;
    if (idiomaticPool && idiomaticPool.length > 0) {
      const rngFloat = ctx.rng?.float ? ctx.rng.float() : Math.random();
      const index = Math.floor(rngFloat * idiomaticPool.length);
      const chosen = idiomaticPool[index];
      const resolvedChords = chosen.map((numeral: string) =>
        this.parseRomanNumeral(numeral, ctx.key, ctx.genre?.culturalHarmony?.voicingRule)
      );
      for (let i = 1; i < resolvedChords.length; i++) {
        resolvedChords[i].notes = this.voiceLeader.applySmoothVoiceLeading(
          resolvedChords[i].notes,
          resolvedChords[i - 1].notes
        );
      }
      return resolvedChords;
    }
    return this.generateFunctionalHarmony(length, ctx?.key, ctx?.rng);
  }
}
