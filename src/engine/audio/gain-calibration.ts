/**
 * GAIN CALIBRATION ENGINE
 * =======================
 * Calculates target linear energy and frequency distribution curves per instrument
 * and genre world to maintain master bus calibration and style balance.
 */

export interface GenreGainProfile {
  genreId: string;
  subBassBoostDb: number;
  midRangeTransparencyDb: number;
  highAirBoostDb: number;
  targetLufs: number;
  targetSpectralCentroidHz: number;
}

export const GENRE_GAIN_PROFILES: Record<string, GenreGainProfile> = {
  afrobeats: { genreId: 'afrobeats', subBassBoostDb: 3.5, midRangeTransparencyDb: -0.5, highAirBoostDb: 1.2, targetLufs: -12.0, targetSpectralCentroidHz: 1800 },
  reggaeton: { genreId: 'reggaeton', subBassBoostDb: 4.0, midRangeTransparencyDb: -1.0, highAirBoostDb: 1.5, targetLufs: -11.5, targetSpectralCentroidHz: 2100 },
  'hip-hop': { genreId: 'hip-hop', subBassBoostDb: 3.8, midRangeTransparencyDb: -0.8, highAirBoostDb: 1.0, targetLufs: -12.0, targetSpectralCentroidHz: 1950 },
  reggae: { genreId: 'reggae', subBassBoostDb: 3.2, midRangeTransparencyDb: -0.5, highAirBoostDb: 0.8, targetLufs: -13.0, targetSpectralCentroidHz: 1650 },
  dub: { genreId: 'dub', subBassBoostDb: 4.5, midRangeTransparencyDb: -1.2, highAirBoostDb: 0.5, targetLufs: -13.5, targetSpectralCentroidHz: 1450 },
  funk: { genreId: 'funk', subBassBoostDb: 1.5, midRangeTransparencyDb: 1.2, highAirBoostDb: 2.0, targetLufs: -12.5, targetSpectralCentroidHz: 2600 },
  salsa: { genreId: 'salsa', subBassBoostDb: 1.0, midRangeTransparencyDb: 1.8, highAirBoostDb: 2.2, targetLufs: -13.0, targetSpectralCentroidHz: 2800 },
  timba: { genreId: 'timba', subBassBoostDb: 1.8, midRangeTransparencyDb: 1.5, highAirBoostDb: 2.5, targetLufs: -12.0, targetSpectralCentroidHz: 2900 },
  tango: { genreId: 'tango', subBassBoostDb: 0.5, midRangeTransparencyDb: 2.2, highAirBoostDb: 1.0, targetLufs: -14.0, targetSpectralCentroidHz: 2200 },
  flamenco: { genreId: 'flamenco', subBassBoostDb: 0.2, midRangeTransparencyDb: 2.5, highAirBoostDb: 1.8, targetLufs: -14.5, targetSpectralCentroidHz: 2450 },
  bachata: { genreId: 'bachata', subBassBoostDb: 1.2, midRangeTransparencyDb: 1.5, highAirBoostDb: 2.8, targetLufs: -13.5, targetSpectralCentroidHz: 2700 },
  cumbia: { genreId: 'cumbia', subBassBoostDb: 2.0, midRangeTransparencyDb: 1.0, highAirBoostDb: 1.5, targetLufs: -13.0, targetSpectralCentroidHz: 2300 },
  brazilian: { genreId: 'brazilian', subBassBoostDb: 1.5, midRangeTransparencyDb: 1.8, highAirBoostDb: 2.0, targetLufs: -13.5, targetSpectralCentroidHz: 2500 },
  jazz: { genreId: 'jazz', subBassBoostDb: 0.0, midRangeTransparencyDb: 2.0, highAirBoostDb: 0.8, targetLufs: -15.0, targetSpectralCentroidHz: 2100 },
  swing: { genreId: 'swing', subBassBoostDb: 0.2, midRangeTransparencyDb: 2.2, highAirBoostDb: 1.0, targetLufs: -14.5, targetSpectralCentroidHz: 2250 },
  folk: { genreId: 'folk', subBassBoostDb: 0.0, midRangeTransparencyDb: 2.4, highAirBoostDb: 1.2, targetLufs: -15.5, targetSpectralCentroidHz: 2350 },
  blues: { genreId: 'blues', subBassBoostDb: 1.0, midRangeTransparencyDb: 1.8, highAirBoostDb: 1.5, targetLufs: -13.8, targetSpectralCentroidHz: 2300 },
  rock: { genreId: 'rock', subBassBoostDb: 1.8, midRangeTransparencyDb: 1.0, highAirBoostDb: 2.0, targetLufs: -12.0, targetSpectralCentroidHz: 2750 },
  metal: { genreId: 'metal', subBassBoostDb: 2.2, midRangeTransparencyDb: 0.5, highAirBoostDb: 2.8, targetLufs: -11.0, targetSpectralCentroidHz: 3100 },
  electronic: { genreId: 'electronic', subBassBoostDb: 3.5, midRangeTransparencyDb: 0.0, highAirBoostDb: 2.5, targetLufs: -11.5, targetSpectralCentroidHz: 2950 },
  house: { genreId: 'house', subBassBoostDb: 3.2, midRangeTransparencyDb: 0.2, highAirBoostDb: 2.2, targetLufs: -12.0, targetSpectralCentroidHz: 2850 },
  'drum-and-bass': { genreId: 'drum-and-bass', subBassBoostDb: 4.2, midRangeTransparencyDb: -0.5, highAirBoostDb: 2.8, targetLufs: -11.2, targetSpectralCentroidHz: 3200 },
  industrial: { genreId: 'industrial', subBassBoostDb: 3.0, midRangeTransparencyDb: -0.2, highAirBoostDb: 3.0, targetLufs: -11.0, targetSpectralCentroidHz: 3300 },
  'punk-hardcore': { genreId: 'punk-hardcore', subBassBoostDb: 1.5, midRangeTransparencyDb: 1.0, highAirBoostDb: 2.5, targetLufs: -11.5, targetSpectralCentroidHz: 2900 },
  'uk-bass': { genreId: 'uk-bass', subBassBoostDb: 4.5, midRangeTransparencyDb: -0.8, highAirBoostDb: 1.8, targetLufs: -11.8, targetSpectralCentroidHz: 2600 },
  country: { genreId: 'country', subBassBoostDb: 0.5, midRangeTransparencyDb: 2.0, highAirBoostDb: 1.8, targetLufs: -14.0, targetSpectralCentroidHz: 2500 },
  gospel: { genreId: 'gospel', subBassBoostDb: 1.2, midRangeTransparencyDb: 2.0, highAirBoostDb: 1.5, targetLufs: -13.2, targetSpectralCentroidHz: 2400 },
  kizomba: { genreId: 'kizomba', subBassBoostDb: 3.5, midRangeTransparencyDb: -0.2, highAirBoostDb: 1.0, targetLufs: -12.5, targetSpectralCentroidHz: 2000 },
  zouk: { genreId: 'zouk', subBassBoostDb: 3.2, midRangeTransparencyDb: 0.0, highAirBoostDb: 1.2, targetLufs: -12.8, targetSpectralCentroidHz: 2150 },
  ska: { genreId: 'ska', subBassBoostDb: 1.8, midRangeTransparencyDb: 1.2, highAirBoostDb: 2.2, targetLufs: -12.5, targetSpectralCentroidHz: 2700 },
  soul: { genreId: 'soul', subBassBoostDb: 1.5, midRangeTransparencyDb: 1.8, highAirBoostDb: 1.2, targetLufs: -13.5, targetSpectralCentroidHz: 2350 },
  disco: { genreId: 'disco', subBassBoostDb: 2.5, midRangeTransparencyDb: 1.0, highAirBoostDb: 2.0, targetLufs: -12.2, targetSpectralCentroidHz: 2650 },
};

export function getGenreGainCalibration(genreId = 'flamenco'): GenreGainProfile {
  return GENRE_GAIN_PROFILES[genreId.toLowerCase()] ?? {
    genreId,
    subBassBoostDb: 1.0,
    midRangeTransparencyDb: 1.0,
    highAirBoostDb: 1.0,
    targetLufs: -13.5,
    targetSpectralCentroidHz: 2300,
  };
}

/**
 * Calculates target linear gain multiplier for an instrument in a given genre world.
 */
export function calculateInstrumentTargetEnergy(
  instrumentId: string,
  genreId = 'flamenco',
  role = 'melody'
): number {
  const profile = getGenreGainCalibration(genreId);
  const idLower = instrumentId.toLowerCase();
  
  let baseGain = 1.0;
  if (role === 'bass' || idLower.includes('bass') || idLower.includes('bajo') || idLower.includes('log-drum')) {
    const dbBoost = profile.subBassBoostDb;
    baseGain *= Math.pow(10, dbBoost / 20);
  } else if (role === 'comp' || role === 'harmony') {
    const dbBoost = profile.midRangeTransparencyDb;
    baseGain *= Math.pow(10, dbBoost / 20);
  } else if (role === 'lead' || role === 'melody' || role === 'brass' || role === 'winds') {
    baseGain *= 1.12;
  } else if (role === 'percussion' || role === 'drums') {
    baseGain *= 1.05;
  }

  return Math.max(0.1, Math.min(3.5, baseGain));
}
