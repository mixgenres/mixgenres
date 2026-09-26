export class InstrumentBank {
  public resolvePatch(instrumentName: string, ctx: { genre?: { timbrePalette?: Record<string, string> }; [key: string]: any }): string {
    // Utilize the genre's specific timbre palette to load accurate acoustic/synthetic models
    const genrePalette = ctx.genre?.timbrePalette;
    
    if (genrePalette && genrePalette[instrumentName]) {
      return genrePalette[instrumentName];
    }
    
    // Smart fallbacks based on acoustic families if genre doesn't strictly override
    const smartFallbacks: Record<string, string> = {
      piano: "acoustic_grand_resonant",
      keys: "electric_piano_vintage",
      bass: "upright_bass_plucked",
      drums: "studio_kit_dry",
      guitar: "acoustic_steel_strum",
      strings_high: "violins_legato_vibrato",
      strings_low: "cellos_spiccato"
    };

    return smartFallbacks[instrumentName] || "pure_sine";
  }
}
