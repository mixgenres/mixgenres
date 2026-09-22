import type { PerformanceMode } from './elementary/elementaryEngine';

export interface InstrumentDialect {
  id: string;
  instrumentId: string;
  name: string;
  family: string;
  performanceMode: PerformanceMode;
  defaultTechnique: string;
  allowedTechniques: string[];
  pluckPositionOverride?: number;
  bowPressureOverride?: number;
  contactPointOverride?: number;
  decayMultiplier?: number;
  brightnessMultiplier?: number;
  tuningSystemId?: string;
  micProximityPreset?: 'close-mic' | 'room-ambient' | 'direct-box' | 'hall-stage';
}

export const DIALECTS: Record<string, InstrumentDialect> = {
  'double-bass:salsa-tumbao': {
    id: 'double-bass:salsa-tumbao',
    instrumentId: 'contrabajo',
    name: 'Double Bass (Salsa Tumbao)',
    family: 'bass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pizzicato',
    allowedTechniques: ['pizzicato', 'slap-bass', 'mute'],
    pluckPositionOverride: 0.15,
    contactPointOverride: 0.2,
    decayMultiplier: 0.7,
    brightnessMultiplier: 1.15,
    micProximityPreset: 'close-mic',
  },
  'double-bass:tango-arco': {
    id: 'double-bass:tango-arco',
    instrumentId: 'contrabajo',
    name: 'Double Bass (Tango Arco)',
    family: 'bass',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'arco',
    allowedTechniques: ['arco', 'arrastre', 'chicharra', 'pizzicato', 'golpe'],
    bowPressureOverride: 0.65,
    decayMultiplier: 1.4,
    brightnessMultiplier: 0.85,
    micProximityPreset: 'hall-stage',
  },
  'guitar:flamenco': {
    id: 'guitar:flamenco',
    instrumentId: 'guitarra_flamenca',
    name: 'Flamenco Guitar (Spanish Nylon)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'punteado',
    allowedTechniques: ['punteado', 'rasgueado', 'abanico', 'golpe', 'arrastre', 'palm-mute'],
    pluckPositionOverride: 0.22,
    brightnessMultiplier: 1.25,
    decayMultiplier: 0.85,
    micProximityPreset: 'close-mic',
  },
  'guitar:tango': {
    id: 'guitar:tango',
    instrumentId: 'guitarra_tango',
    name: 'Tango Guitar (Steel/Nylon Muted Chording)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'punteado',
    allowedTechniques: ['punteado', 'arrastre', 'palm-mute', 'chicharra'],
    pluckPositionOverride: 0.35,
    brightnessMultiplier: 0.9,
    decayMultiplier: 0.75,
    micProximityPreset: 'close-mic',
  },
  'guitar:blues': {
    id: 'guitar:blues',
    instrumentId: 'guitarra_blues',
    name: 'Blues Guitar (Slide & Bent Notes)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pick',
    allowedTechniques: ['pick', 'slide', 'bend', 'palm-mute'],
    pluckPositionOverride: 0.3,
    brightnessMultiplier: 1.1,
    decayMultiplier: 1.2,
    tuningSystemId: 'blues-continuum',
    micProximityPreset: 'direct-box',
  },
  'cajon:flamenco': {
    id: 'cajon:flamenco',
    instrumentId: 'cajon_flamenco',
    name: 'Flamenco Cajón (Peru/Spain Mesh)',
    family: 'percussion',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'center-bass',
    allowedTechniques: ['center-bass', 'edge-slap', 'rim-tap', 'side-wood'],
    micProximityPreset: 'close-mic',
  },
  'bandoneon:tango': {
    id: 'bandoneon:tango',
    instrumentId: 'bandoneon',
    name: 'Tango Bandoneón (Double Reed Free Air)',
    family: 'bellows',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'bellows-press',
    allowedTechniques: ['bellows-press', 'staccato-stab', 'bellows-shake'],
    micProximityPreset: 'room-ambient',
  },
  'oud:arabic-maqam': {
    id: 'oud:arabic-maqam',
    instrumentId: 'oud',
    name: 'Arabic Oud (Fretless Microtonal Lute)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'tremolo', 'glissando'],
    pluckPositionOverride: 0.25,
    brightnessMultiplier: 1.05,
    tuningSystemId: 'maqam-bayati',
    micProximityPreset: 'close-mic',
  },
  'sitar:hindustani': {
    id: 'sitar:hindustani',
    instrumentId: 'sitar',
    name: 'Hindustani Sitar (Meend Bend & Sympathetic Strings)',
    family: 'guitar',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'pluck',
    allowedTechniques: ['pluck', 'meend-bend', 'jhala-drone'],
    pluckPositionOverride: 0.2,
    brightnessMultiplier: 1.3,
    decayMultiplier: 1.5,
    tuningSystemId: 'just-intonation',
    micProximityPreset: 'room-ambient',
  },
  'quena:andean-flute': {
    id: 'quena:andean-flute',
    instrumentId: 'quena',
    name: 'Andean Quena (Notched Cane Jet-Drive Flute)',
    family: 'wind',
    performanceMode: 'acoustic-ensemble',
    defaultTechnique: 'breath',
    allowedTechniques: ['breath', 'overblow', 'glissando'],
    brightnessMultiplier: 1.2,
    micProximityPreset: 'close-mic',
  },
  'kizomba:electronic-beat': {
    id: 'kizomba:electronic-beat',
    instrumentId: 'kizomba_synth_bass',
    name: 'Electronic Kizomba / Tarraxo Synth Bass',
    family: 'electronic',
    performanceMode: 'programmed-electronic',
    defaultTechnique: 'sub-sweep',
    allowedTechniques: ['sub-sweep', 'punch-stab'],
    micProximityPreset: 'direct-box',
  },
};

export function resolveDialect(
  instrumentId: string,
  worldId = '',
  styleId = ''
): InstrumentDialect | null {
  const token = `${worldId}:${styleId}:${instrumentId}`.toLowerCase();
  
  if (token.includes('salsa') && /(bass|bajo|contrabajo|upright)/.test(instrumentId)) {
    return DIALECTS['double-bass:salsa-tumbao'];
  }
  if (token.includes('tango') && /(bass|bajo|contrabajo|upright)/.test(instrumentId)) {
    return DIALECTS['double-bass:tango-arco'];
  }
  if (token.includes('flamenco') && (instrumentId.includes('guitar') || instrumentId.includes('guitarra'))) {
    return DIALECTS['guitar:flamenco'];
  }
  if (token.includes('tango') && (instrumentId.includes('guitar') || instrumentId.includes('guitarra'))) {
    return DIALECTS['guitar:tango'];
  }
  if (token.includes('blues') && (instrumentId.includes('guitar') || instrumentId.includes('guitarra'))) {
    return DIALECTS['guitar:blues'];
  }
  if (token.includes('flamenco') && instrumentId.includes('cajon')) {
    return DIALECTS['cajon:flamenco'];
  }
  if (token.includes('tango') && instrumentId.includes('bandoneon')) {
    return DIALECTS['bandoneon:tango'];
  }
  if (instrumentId.includes('oud') || token.includes('maqam') || token.includes('middle_east')) {
    return DIALECTS['oud:arabic-maqam'];
  }
  if (instrumentId.includes('sitar') || token.includes('raga') || token.includes('india')) {
    return DIALECTS['sitar:hindustani'];
  }
  if (instrumentId.includes('quena') || instrumentId.includes('zampona') || token.includes('andean')) {
    return DIALECTS['quena:andean-flute'];
  }
  if ((token.includes('kizomba') || token.includes('tarraxo') || token.includes('dembow')) && (instrumentId.includes('bass') || instrumentId.includes('synth'))) {
    return DIALECTS['kizomba:electronic-beat'];
  }

  return null;
}


/** Resolve the production/performance mode when a style has not authored one.
 * This is deliberately conservative: acoustic traditions stay acoustic;
 * styles whose defining groove is programmed stay on the electronic path.
 */
export function performanceModeForContext(worldId = '', styleId = ''): PerformanceMode {
  const token = `${worldId}:${styleId}`.toLowerCase();
  if (/house|techno|electronic|drum-and-bass|uk-bass|industrial|reggaeton|hip-hop|trap|modern-kizomba|tarraxo/.test(token)) return 'programmed-electronic';
  if (/cumbia|afrobeats|funk|ska|soul|r-and-b|rock|pop|zouk/.test(token)) return 'hybrid';
  return 'acoustic-ensemble';
}
