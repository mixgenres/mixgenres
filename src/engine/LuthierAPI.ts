/**
 * THE PLUGGABLE LUTHIER API
 * =========================
 * Maps instruments to physical wave, mesh, friction, and waveguide models.
 * Replaces static SoundFont samples with parametric acoustic physical models.
 */

export type LuthierModelCategory =
  | 'membrane_tension_2d'
  | 'strum_friction_pluck'
  | 'continuous_bowed_friction'
  | 'bellows_free_reed'
  | 'aerophone_lip_tension'
  | 'resonator_struck_metal_wood'
  | 'electro_acoustic_algorithmic';

export interface LuthierPhysicalParameters {
  category: LuthierModelCategory;
  /** Primary material density (e.g. skin, steel, wood, nylon, brass) */
  materialDensity: number;
  /** Tension or internal pressure scale */
  tension: number;
  /** Body resonance factor / cavity size in liters */
  bodyResonanceVolume: number;
  /** Damping / decay rate coefficient */
  decayTimeFactor: number;
  /** Nonlinear saturation or harmonic richness */
  harmonicRichness: number;
  /** Dedicated standalone Faust profile ID if available */
  faustProfile?: 'spanish-guitar' | 'electric-bass' | 'double-bass' | 'tres' | 'flamenco-cajon';
  /** Catalog of physically supported articulations */
  articulationCapabilities?: string[];
  /** Whether this physical profile dynamically adapts wood, pickups, and transients by genre/song style */
  genreAdaptable?: boolean;
  /** Optional fine-tuned decay time in seconds */
  decayTimeSec?: number;
  /** Optional string tension ratio */
  stringTension?: number;
  /** Soundboard modal resonance frequency in Hz */
  soundboardResonanceHz?: number;
  /** Internal Helmholtz air cavity resonance frequency in Hz */
  airResonanceHz?: number;
  /** Fret clack or buzz intensity ratio */
  fretBuzzAmount?: number;
  /** Pickup blend ratio (0 = 100% neck, 1 = 100% bridge) */
  pickupBlend?: number;
}


/**
 * Registry mapping every instrument catalog ID to its physical luthier model.
 */
export const LUTHIER_INSTRUMENT_MAP: Record<string, LuthierPhysicalParameters> = {
  // 1. Membrane & Tension Model (2D Waveguide Mesh)
  congas: { category: 'membrane_tension_2d', materialDensity: 0.8, tension: 0.85, bodyResonanceVolume: 12.0, decayTimeFactor: 0.6, harmonicRichness: 0.7 },
  bongos: { category: 'membrane_tension_2d', materialDensity: 0.75, tension: 0.9, bodyResonanceVolume: 3.0, decayTimeFactor: 0.4, harmonicRichness: 0.8 },
  zabumba: { category: 'membrane_tension_2d', materialDensity: 0.9, tension: 0.6, bodyResonanceVolume: 25.0, decayTimeFactor: 1.2, harmonicRichness: 0.5 },
  bombo: { category: 'membrane_tension_2d', materialDensity: 0.95, tension: 0.5, bodyResonanceVolume: 40.0, decayTimeFactor: 1.8, harmonicRichness: 0.4 },
  bata: { category: 'membrane_tension_2d', materialDensity: 0.85, tension: 0.8, bodyResonanceVolume: 15.0, decayTimeFactor: 0.8, harmonicRichness: 0.75 },
  cajon: {
    category: 'membrane_tension_2d',
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 20.0,
    decayTimeFactor: 0.5,
    harmonicRichness: 0.6,
    faustProfile: 'flamenco-cajon',
    articulationCapabilities: ['bass', 'slap', 'tip', 'side-tap', 'brush', 'roll'],
    genreAdaptable: true,
  },
  timbales: { category: 'membrane_tension_2d', materialDensity: 0.9, tension: 0.95, bodyResonanceVolume: 8.0, decayTimeFactor: 0.7, harmonicRichness: 0.9 },
  surdo: { category: 'membrane_tension_2d', materialDensity: 0.95, tension: 0.45, bodyResonanceVolume: 60.0, decayTimeFactor: 2.2, harmonicRichness: 0.35 },
  pandeiro: { category: 'membrane_tension_2d', materialDensity: 0.7, tension: 0.8, bodyResonanceVolume: 4.0, decayTimeFactor: 0.5, harmonicRichness: 0.85 },
  bodhran: { category: 'membrane_tension_2d', materialDensity: 0.85, tension: 0.55, bodyResonanceVolume: 18.0, decayTimeFactor: 1.4, harmonicRichness: 0.4 },
  tamborim: { category: 'membrane_tension_2d', materialDensity: 0.9, tension: 0.98, bodyResonanceVolume: 2.0, decayTimeFactor: 0.3, harmonicRichness: 0.9 },
  darbuka: { category: 'membrane_tension_2d', materialDensity: 0.85, tension: 0.9, bodyResonanceVolume: 7.0, decayTimeFactor: 0.6, harmonicRichness: 0.8 },
  tabla: { category: 'membrane_tension_2d', materialDensity: 0.8, tension: 0.75, bodyResonanceVolume: 6.0, decayTimeFactor: 1.1, harmonicRichness: 0.85 },
  'log-drum': { category: 'membrane_tension_2d', materialDensity: 0.5, tension: 0.6, bodyResonanceVolume: 14.0, decayTimeFactor: 0.9, harmonicRichness: 0.3 },
  'cumbia-drum': { category: 'membrane_tension_2d', materialDensity: 0.85, tension: 0.65, bodyResonanceVolume: 22.0, decayTimeFactor: 1.1, harmonicRichness: 0.6 },
  'bombo-andino': { category: 'membrane_tension_2d', materialDensity: 0.9, tension: 0.5, bodyResonanceVolume: 35.0, decayTimeFactor: 1.6, harmonicRichness: 0.45 },
  tambora: { category: 'membrane_tension_2d', materialDensity: 0.88, tension: 0.7, bodyResonanceVolume: 28.0, decayTimeFactor: 1.0, harmonicRichness: 0.65 },
  'tambor-alegre': { category: 'membrane_tension_2d', materialDensity: 0.82, tension: 0.75, bodyResonanceVolume: 16.0, decayTimeFactor: 0.8, harmonicRichness: 0.7 },
  'bombo-leguero': { category: 'membrane_tension_2d', materialDensity: 0.92, tension: 0.52, bodyResonanceVolume: 38.0, decayTimeFactor: 1.7, harmonicRichness: 0.4 },
  paigu: { category: 'membrane_tension_2d', materialDensity: 0.8, tension: 0.8, bodyResonanceVolume: 10.0, decayTimeFactor: 0.7, harmonicRichness: 0.6 },
  taiko: { category: 'membrane_tension_2d', materialDensity: 0.98, tension: 0.85, bodyResonanceVolume: 120.0, decayTimeFactor: 2.5, harmonicRichness: 0.5 },
  drums: { category: 'membrane_tension_2d', materialDensity: 0.85, tension: 0.75, bodyResonanceVolume: 25.0, decayTimeFactor: 0.9, harmonicRichness: 0.7 },
  'brush-kit': { category: 'membrane_tension_2d', materialDensity: 0.7, tension: 0.7, bodyResonanceVolume: 20.0, decayTimeFactor: 0.6, harmonicRichness: 0.8 },
  kick: { category: 'membrane_tension_2d', materialDensity: 0.9, tension: 0.4, bodyResonanceVolume: 30.0, decayTimeFactor: 0.5, harmonicRichness: 0.3 },
  snare: { category: 'membrane_tension_2d', materialDensity: 0.85, tension: 0.9, bodyResonanceVolume: 3.0, decayTimeFactor: 0.3, harmonicRichness: 0.75 },

  // Shaken & scraped idiophones (noise-driven, model 17) -- no tonal
  // membrane, so bodyResonanceVolume here just shapes the noise's
  // "gourd/shell size" bandpass color, not a pitched resonance.
  shaker: { category: 'membrane_tension_2d', materialDensity: 0.4, tension: 0.8, bodyResonanceVolume: 0.5, decayTimeFactor: 0.3, harmonicRichness: 0.9 },
  maracas: { category: 'membrane_tension_2d', materialDensity: 0.5, tension: 0.7, bodyResonanceVolume: 0.6, decayTimeFactor: 0.3, harmonicRichness: 0.8 },
  cabasa: { category: 'membrane_tension_2d', materialDensity: 0.6, tension: 0.8, bodyResonanceVolume: 0.5, decayTimeFactor: 0.3, harmonicRichness: 0.9 },
  guiro: { category: 'membrane_tension_2d', materialDensity: 0.7, tension: 0.8, bodyResonanceVolume: 1.0, decayTimeFactor: 0.4, harmonicRichness: 0.9 },
  guacharaca: { category: 'membrane_tension_2d', materialDensity: 0.7, tension: 0.8, bodyResonanceVolume: 1.2, decayTimeFactor: 0.4, harmonicRichness: 0.9 },

  // Struck metal & wood idiophones (short inharmonic clang, model 18).
  tambourine: { category: 'resonator_struck_metal_wood', materialDensity: 0.8, tension: 0.75, bodyResonanceVolume: 1.5, decayTimeFactor: 0.35, harmonicRichness: 0.8 },
  castanets: { category: 'resonator_struck_metal_wood', materialDensity: 0.6, tension: 0.8, bodyResonanceVolume: 0.15, decayTimeFactor: 0.12, harmonicRichness: 0.55 },
  bones: { category: 'resonator_struck_metal_wood', materialDensity: 0.55, tension: 0.7, bodyResonanceVolume: 0.2, decayTimeFactor: 0.1, harmonicRichness: 0.4 },
  woodblock: { category: 'resonator_struck_metal_wood', materialDensity: 0.55, tension: 0.8, bodyResonanceVolume: 0.3, decayTimeFactor: 0.15, harmonicRichness: 0.35 },
  triangle: { category: 'resonator_struck_metal_wood', materialDensity: 0.98, tension: 0.95, bodyResonanceVolume: 0.2, decayTimeFactor: 1.8, harmonicRichness: 0.95 },
  palmas: { category: 'resonator_struck_metal_wood', materialDensity: 0.5, tension: 0.6, bodyResonanceVolume: 0.3, decayTimeFactor: 0.1, harmonicRichness: 0.5 },
  zapateado: { category: 'resonator_struck_metal_wood', materialDensity: 0.6, tension: 0.6, bodyResonanceVolume: 0.5, decayTimeFactor: 0.15, harmonicRichness: 0.4 },
  ride: { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.85, bodyResonanceVolume: 2.0, decayTimeFactor: 0.8, harmonicRichness: 0.85 },
  hats: { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.9, bodyResonanceVolume: 0.4, decayTimeFactor: 0.15, harmonicRichness: 0.9 },

  // 2. Strum, Friction & Pluck Model (Karplus-Strong & Friction Exciters)
  guitar: {
    category: 'strum_friction_pluck',
    materialDensity: 0.6,
    tension: 0.7,
    bodyResonanceVolume: 12.0,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.6,
    faustProfile: 'spanish-guitar',
    articulationCapabilities: ['pluck', 'rest-stroke', 'palm-mute', 'rasgueado', 'alzapua', 'golpe', 'tremolo', 'ponticello', 'tasto'],
    genreAdaptable: true,
  },
  'spanish-guitar': {
    category: 'strum_friction_pluck',
    materialDensity: 0.5,
    tension: 0.65,
    bodyResonanceVolume: 11.0,
    decayTimeFactor: 2.2,
    harmonicRichness: 0.65,
    faustProfile: 'spanish-guitar',
    articulationCapabilities: ['rasgueado', 'picado', 'alzapua', 'golpe', 'tremolo', 'apagado', 'ponticello', 'tasto', 'chicharra', 'fret-noise'],
    genreAdaptable: true,
  },
  'acoustic-guitar': { category: 'strum_friction_pluck', materialDensity: 0.7, tension: 0.75, bodyResonanceVolume: 14.0, decayTimeFactor: 2.8, harmonicRichness: 0.7 },
  'steel-guitar': { category: 'strum_friction_pluck', materialDensity: 0.85, tension: 0.8, bodyResonanceVolume: 15.0, decayTimeFactor: 3.5, harmonicRichness: 0.8 },
  'electric-guitar': { category: 'strum_friction_pluck', materialDensity: 0.9, tension: 0.8, bodyResonanceVolume: 5.0, decayTimeFactor: 4.0, harmonicRichness: 0.85 },
  'jazz-guitar': { category: 'strum_friction_pluck', materialDensity: 0.8, tension: 0.72, bodyResonanceVolume: 16.0, decayTimeFactor: 3.2, harmonicRichness: 0.6 },
  'distortion-guitar': { category: 'strum_friction_pluck', materialDensity: 0.95, tension: 0.85, bodyResonanceVolume: 5.0, decayTimeFactor: 5.0, harmonicRichness: 0.98 },
  'overdrive-guitar': { category: 'strum_friction_pluck', materialDensity: 0.92, tension: 0.82, bodyResonanceVolume: 5.0, decayTimeFactor: 4.4, harmonicRichness: 0.92 },
  'muted-guitar': { category: 'strum_friction_pluck', materialDensity: 0.75, tension: 0.7, bodyResonanceVolume: 4.0, decayTimeFactor: 0.5, harmonicRichness: 0.55 },
  'guitar-harmonics': { category: 'strum_friction_pluck', materialDensity: 0.6, tension: 0.85, bodyResonanceVolume: 3.0, decayTimeFactor: 2.2, harmonicRichness: 0.9 },
  jarana: { category: 'strum_friction_pluck', materialDensity: 0.65, tension: 0.82, bodyResonanceVolume: 5.0, decayTimeFactor: 1.6, harmonicRichness: 0.75 },
  guqin: { category: 'strum_friction_pluck', materialDensity: 0.45, tension: 0.55, bodyResonanceVolume: 8.0, decayTimeFactor: 3.5, harmonicRichness: 0.4 },
  pipa: { category: 'strum_friction_pluck', materialDensity: 0.7, tension: 0.85, bodyResonanceVolume: 6.0, decayTimeFactor: 1.5, harmonicRichness: 0.8 },
  guzheng: { category: 'strum_friction_pluck', materialDensity: 0.55, tension: 0.72, bodyResonanceVolume: 28.0, decayTimeFactor: 2.8, harmonicRichness: 0.7 },
  tres: {
    category: 'strum_friction_pluck',
    materialDensity: 0.75,
    tension: 0.85,
    bodyResonanceVolume: 8.0,
    decayTimeFactor: 2.0,
    harmonicRichness: 0.85,
    faustProfile: 'tres',
    articulationCapabilities: ['martillo', 'syncopated-pluck', 'palm-mute', 'double-strum'],
    genreAdaptable: true,
  },
  cavaquinho: { category: 'strum_friction_pluck', materialDensity: 0.7, tension: 0.9, bodyResonanceVolume: 3.0, decayTimeFactor: 1.5, harmonicRichness: 0.8 },
  charango: { category: 'strum_friction_pluck', materialDensity: 0.65, tension: 0.88, bodyResonanceVolume: 2.5, decayTimeFactor: 1.4, harmonicRichness: 0.8 },
  guitarron: { category: 'strum_friction_pluck', materialDensity: 0.55, tension: 0.5, bodyResonanceVolume: 45.0, decayTimeFactor: 2.8, harmonicRichness: 0.5 },
  mandolin: { category: 'strum_friction_pluck', materialDensity: 0.75, tension: 0.92, bodyResonanceVolume: 4.0, decayTimeFactor: 1.8, harmonicRichness: 0.85 },
  banjo: { category: 'strum_friction_pluck', materialDensity: 0.85, tension: 0.85, bodyResonanceVolume: 6.0, decayTimeFactor: 1.6, harmonicRichness: 0.9 },
  vihuela: { category: 'strum_friction_pluck', materialDensity: 0.55, tension: 0.7, bodyResonanceVolume: 7.0, decayTimeFactor: 1.8, harmonicRichness: 0.7 },
  sitar: { category: 'strum_friction_pluck', materialDensity: 0.6, tension: 0.75, bodyResonanceVolume: 22.0, decayTimeFactor: 4.5, harmonicRichness: 0.95 },
  shamisen: { category: 'strum_friction_pluck', materialDensity: 0.8, tension: 0.8, bodyResonanceVolume: 5.0, decayTimeFactor: 1.2, harmonicRichness: 0.85 },
  koto: { category: 'strum_friction_pluck', materialDensity: 0.55, tension: 0.7, bodyResonanceVolume: 30.0, decayTimeFactor: 3.0, harmonicRichness: 0.7 },
  kalimba: { category: 'strum_friction_pluck', materialDensity: 0.9, tension: 0.8, bodyResonanceVolume: 2.0, decayTimeFactor: 2.0, harmonicRichness: 0.4 },
  bass: {
    category: 'strum_friction_pluck',
    materialDensity: 0.88,
    tension: 0.6,
    bodyResonanceVolume: 8.0,
    decayTimeFactor: 3.5,
    harmonicRichness: 0.6,
    faustProfile: 'electric-bass',
    articulationCapabilities: ['fingerstyle', 'slap', 'pop', 'picked', 'palm-mute', 'ghost-note', 'hammer-on', 'pull-off'],
    genreAdaptable: true,
  },
  'electric-bass': {
    category: 'strum_friction_pluck',
    materialDensity: 0.88,
    tension: 0.6,
    bodyResonanceVolume: 8.0,
    decayTimeFactor: 3.5,
    harmonicRichness: 0.6,
    faustProfile: 'electric-bass',
    articulationCapabilities: ['fingerstyle', 'slap', 'pop', 'picked', 'palm-mute', 'ghost-note', 'hammer-on', 'pull-off'],
    genreAdaptable: true,
  },
  'slap-bass': {
    category: 'strum_friction_pluck',
    materialDensity: 0.92,
    tension: 0.7,
    bodyResonanceVolume: 7.0,
    decayTimeFactor: 2.5,
    harmonicRichness: 0.85,
    faustProfile: 'electric-bass',
    articulationCapabilities: ['thumb-slap', 'index-pop', 'double-thumb', 'machine-gun-slap', 'hammer-on'],
    genreAdaptable: true,
  },
  'pick-bass': {
    category: 'strum_friction_pluck',
    materialDensity: 0.9,
    tension: 0.68,
    bodyResonanceVolume: 7.5,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.8,
    faustProfile: 'electric-bass',
    articulationCapabilities: ['picked-down', 'picked-up', 'palm-mute', 'chug'],
    genreAdaptable: true,
  },
  'fretless-bass': {
    category: 'strum_friction_pluck',
    materialDensity: 0.82,
    tension: 0.55,
    bodyResonanceVolume: 9.0,
    decayTimeFactor: 3.8,
    harmonicRichness: 0.65,
    faustProfile: 'electric-bass',
    articulationCapabilities: ['mwah-growl', 'fretless-slide', 'vibrato', 'soft-finger'],
    genreAdaptable: true,
  },
  'upright-bass': {
    category: 'strum_friction_pluck',
    materialDensity: 0.5,
    tension: 0.45,
    bodyResonanceVolume: 80.0,
    decayTimeFactor: 2.8,
    harmonicRichness: 0.5,
    faustProfile: 'double-bass',
    articulationCapabilities: ['pizzicato', 'arco', 'slap-bass', 'arrastre', 'martele', 'ponticello', 'col-legno', 'mute'],
    genreAdaptable: true,
  },
  'double-bass': {
    category: 'strum_friction_pluck',
    materialDensity: 0.5,
    tension: 0.45,
    bodyResonanceVolume: 100.0,
    decayTimeFactor: 3.2,
    harmonicRichness: 0.52,
    faustProfile: 'double-bass',
    articulationCapabilities: ['pizzicato', 'arco', 'slap-bass', 'arrastre', 'martele', 'ponticello', 'col-legno', 'mute'],
    genreAdaptable: true,
  },
  'acoustic-bass': {
    category: 'strum_friction_pluck',
    materialDensity: 0.58,
    tension: 0.5,
    bodyResonanceVolume: 70.0,
    decayTimeFactor: 2.9,
    harmonicRichness: 0.55,
    faustProfile: 'double-bass',
    articulationCapabilities: ['pizzicato', 'arco', 'slap-bass', 'palm-mute'],
    genreAdaptable: true,
  },
  harp: { category: 'strum_friction_pluck', materialDensity: 0.5, tension: 0.7, bodyResonanceVolume: 50.0, decayTimeFactor: 4.0, harmonicRichness: 0.65 },
  'celtic-harp': { category: 'strum_friction_pluck', materialDensity: 0.55, tension: 0.75, bodyResonanceVolume: 30.0, decayTimeFactor: 3.2, harmonicRichness: 0.6 },
  'orchestral-harp': { category: 'strum_friction_pluck', materialDensity: 0.5, tension: 0.7, bodyResonanceVolume: 55.0, decayTimeFactor: 4.2, harmonicRichness: 0.65 },
  piano: { category: 'strum_friction_pluck', materialDensity: 0.8, tension: 0.8, bodyResonanceVolume: 180.0, decayTimeFactor: 4.5, harmonicRichness: 0.7 },
  clavinet: { category: 'strum_friction_pluck', materialDensity: 0.9, tension: 0.9, bodyResonanceVolume: 1.0, decayTimeFactor: 0.8, harmonicRichness: 0.95 },
  harpsichord: { category: 'strum_friction_pluck', materialDensity: 0.8, tension: 0.95, bodyResonanceVolume: 2.0, decayTimeFactor: 1.5, harmonicRichness: 0.9 },

  // 3. Continuous Bowed Friction Model
  violin: { category: 'continuous_bowed_friction', materialDensity: 0.5, tension: 0.8, bodyResonanceVolume: 2.5, decayTimeFactor: 1.5, harmonicRichness: 0.75 },
  viola: { category: 'continuous_bowed_friction', materialDensity: 0.5, tension: 0.75, bodyResonanceVolume: 4.0, decayTimeFactor: 1.8, harmonicRichness: 0.7 },
  cello: { category: 'continuous_bowed_friction', materialDensity: 0.5, tension: 0.65, bodyResonanceVolume: 25.0, decayTimeFactor: 2.5, harmonicRichness: 0.65 },
  strings: { category: 'continuous_bowed_friction', materialDensity: 0.5, tension: 0.7, bodyResonanceVolume: 60.0, decayTimeFactor: 2.2, harmonicRichness: 0.7 },
  'slow-strings': { category: 'continuous_bowed_friction', materialDensity: 0.5, tension: 0.65, bodyResonanceVolume: 70.0, decayTimeFactor: 3.0, harmonicRichness: 0.6 },
  'tremolo-strings': { category: 'continuous_bowed_friction', materialDensity: 0.5, tension: 0.75, bodyResonanceVolume: 55.0, decayTimeFactor: 1.6, harmonicRichness: 0.75 },
  'pizz-strings': { category: 'continuous_bowed_friction', materialDensity: 0.5, tension: 0.7, bodyResonanceVolume: 45.0, decayTimeFactor: 0.9, harmonicRichness: 0.65 },
  fiddle: { category: 'continuous_bowed_friction', materialDensity: 0.55, tension: 0.85, bodyResonanceVolume: 2.5, decayTimeFactor: 1.3, harmonicRichness: 0.8 },
  erhu: { category: 'continuous_bowed_friction', materialDensity: 0.7, tension: 0.8, bodyResonanceVolume: 1.5, decayTimeFactor: 1.2, harmonicRichness: 0.85 },
  jinghu: { category: 'continuous_bowed_friction', materialDensity: 0.8, tension: 0.92, bodyResonanceVolume: 0.5, decayTimeFactor: 0.8, harmonicRichness: 0.9 },

  // 4. Bellows & Free-Reed Model
  bandoneon: { category: 'bellows_free_reed', materialDensity: 0.8, tension: 0.7, bodyResonanceVolume: 10.0, decayTimeFactor: 1.0, harmonicRichness: 0.9 },
  accordion: { category: 'bellows_free_reed', materialDensity: 0.75, tension: 0.75, bodyResonanceVolume: 12.0, decayTimeFactor: 1.0, harmonicRichness: 0.85 },
  harmonica: { category: 'bellows_free_reed', materialDensity: 0.85, tension: 0.8, bodyResonanceVolume: 0.5, decayTimeFactor: 0.8, harmonicRichness: 0.95 },
  shō: { category: 'bellows_free_reed', materialDensity: 0.6, tension: 0.6, bodyResonanceVolume: 1.0, decayTimeFactor: 1.5, harmonicRichness: 0.7 },
  melodica: { category: 'bellows_free_reed', materialDensity: 0.6, tension: 0.7, bodyResonanceVolume: 1.0, decayTimeFactor: 0.8, harmonicRichness: 0.7 },
  concertina: { category: 'bellows_free_reed', materialDensity: 0.75, tension: 0.72, bodyResonanceVolume: 5.0, decayTimeFactor: 0.9, harmonicRichness: 0.8 },

  // 5. Aerophone & Lip-Tension Tube Model
  flute: { category: 'aerophone_lip_tension', materialDensity: 0.3, tension: 0.5, bodyResonanceVolume: 0.8, decayTimeFactor: 0.5, harmonicRichness: 0.4 },
  'tin-whistle': { category: 'aerophone_lip_tension', materialDensity: 0.4, tension: 0.6, bodyResonanceVolume: 0.3, decayTimeFactor: 0.4, harmonicRichness: 0.6 },
  'low-whistle': { category: 'aerophone_lip_tension', materialDensity: 0.4, tension: 0.55, bodyResonanceVolume: 1.0, decayTimeFactor: 0.55, harmonicRichness: 0.45 },
  piccolo: { category: 'aerophone_lip_tension', materialDensity: 0.3, tension: 0.65, bodyResonanceVolume: 0.3, decayTimeFactor: 0.3, harmonicRichness: 0.5 },
  recorder: { category: 'aerophone_lip_tension', materialDensity: 0.35, tension: 0.45, bodyResonanceVolume: 0.5, decayTimeFactor: 0.4, harmonicRichness: 0.35 },
  ocarina: { category: 'aerophone_lip_tension', materialDensity: 0.4, tension: 0.4, bodyResonanceVolume: 0.4, decayTimeFactor: 0.35, harmonicRichness: 0.25 },
  quena: { category: 'aerophone_lip_tension', materialDensity: 0.4, tension: 0.5, bodyResonanceVolume: 0.9, decayTimeFactor: 0.5, harmonicRichness: 0.5 },
  'pan-flute': { category: 'aerophone_lip_tension', materialDensity: 0.35, tension: 0.45, bodyResonanceVolume: 0.5, decayTimeFactor: 0.35, harmonicRichness: 0.3 },
  shakuhachi: { category: 'aerophone_lip_tension', materialDensity: 0.45, tension: 0.45, bodyResonanceVolume: 1.2, decayTimeFactor: 0.7, harmonicRichness: 0.45 },
  xiao: { category: 'aerophone_lip_tension', materialDensity: 0.4, tension: 0.42, bodyResonanceVolume: 1.0, decayTimeFactor: 0.6, harmonicRichness: 0.4 },
  dizi: { category: 'aerophone_lip_tension', materialDensity: 0.4, tension: 0.55, bodyResonanceVolume: 0.7, decayTimeFactor: 0.4, harmonicRichness: 0.6 },
  ryuteki: { category: 'aerophone_lip_tension', materialDensity: 0.4, tension: 0.5, bodyResonanceVolume: 0.6, decayTimeFactor: 0.4, harmonicRichness: 0.55 },
  bagpipes: { category: 'aerophone_lip_tension', materialDensity: 0.7, tension: 0.8, bodyResonanceVolume: 5.0, decayTimeFactor: 2.0, harmonicRichness: 0.95 },
  'uilleann-pipes': { category: 'aerophone_lip_tension', materialDensity: 0.65, tension: 0.75, bodyResonanceVolume: 3.0, decayTimeFactor: 1.2, harmonicRichness: 0.82 },
  clarinet: { category: 'aerophone_lip_tension', materialDensity: 0.65, tension: 0.7, bodyResonanceVolume: 2.5, decayTimeFactor: 0.55, harmonicRichness: 0.55 },
  'soprano-sax': { category: 'aerophone_lip_tension', materialDensity: 0.85, tension: 0.8, bodyResonanceVolume: 2.0, decayTimeFactor: 0.6, harmonicRichness: 0.75 },
  'alto-sax': { category: 'aerophone_lip_tension', materialDensity: 0.85, tension: 0.78, bodyResonanceVolume: 3.0, decayTimeFactor: 0.65, harmonicRichness: 0.7 },
  'tenor-sax': { category: 'aerophone_lip_tension', materialDensity: 0.85, tension: 0.75, bodyResonanceVolume: 4.5, decayTimeFactor: 0.7, harmonicRichness: 0.65 },
  'bari-sax': { category: 'aerophone_lip_tension', materialDensity: 0.9, tension: 0.72, bodyResonanceVolume: 7.0, decayTimeFactor: 0.8, harmonicRichness: 0.6 },
  oboe: { category: 'aerophone_lip_tension', materialDensity: 0.75, tension: 0.85, bodyResonanceVolume: 1.2, decayTimeFactor: 0.45, harmonicRichness: 0.8 },
  bassoon: { category: 'aerophone_lip_tension', materialDensity: 0.8, tension: 0.6, bodyResonanceVolume: 9.0, decayTimeFactor: 0.9, harmonicRichness: 0.55 },
  'english-horn': { category: 'aerophone_lip_tension', materialDensity: 0.75, tension: 0.75, bodyResonanceVolume: 2.5, decayTimeFactor: 0.55, harmonicRichness: 0.7 },
  hichiriki: { category: 'aerophone_lip_tension', materialDensity: 0.8, tension: 0.9, bodyResonanceVolume: 0.6, decayTimeFactor: 0.4, harmonicRichness: 0.92 },
  trumpet: { category: 'aerophone_lip_tension', materialDensity: 0.9, tension: 0.85, bodyResonanceVolume: 1.5, decayTimeFactor: 0.6, harmonicRichness: 0.88 },
  'muted-trumpet': { category: 'aerophone_lip_tension', materialDensity: 0.9, tension: 0.88, bodyResonanceVolume: 0.7, decayTimeFactor: 0.4, harmonicRichness: 0.7 },
  trombone: { category: 'aerophone_lip_tension', materialDensity: 0.9, tension: 0.75, bodyResonanceVolume: 4.5, decayTimeFactor: 0.8, harmonicRichness: 0.85 },
  tuba: { category: 'aerophone_lip_tension', materialDensity: 0.95, tension: 0.6, bodyResonanceVolume: 30.0, decayTimeFactor: 1.4, harmonicRichness: 0.6 },
  'french-horn': { category: 'aerophone_lip_tension', materialDensity: 0.85, tension: 0.65, bodyResonanceVolume: 12.0, decayTimeFactor: 1.1, harmonicRichness: 0.7 },
  'horn-section': { category: 'aerophone_lip_tension', materialDensity: 0.85, tension: 0.8, bodyResonanceVolume: 8.0, decayTimeFactor: 0.7, harmonicRichness: 0.85 },
  brass: { category: 'aerophone_lip_tension', materialDensity: 0.87, tension: 0.78, bodyResonanceVolume: 7.0, decayTimeFactor: 0.7, harmonicRichness: 0.82 },

  // 6. Resonator & Struck Metal/Wood Model
  vibraphone: { category: 'resonator_struck_metal_wood', materialDensity: 0.9, tension: 0.9, bodyResonanceVolume: 15.0, decayTimeFactor: 4.0, harmonicRichness: 0.5 },
  marimba: { category: 'resonator_struck_metal_wood', materialDensity: 0.5, tension: 0.6, bodyResonanceVolume: 25.0, decayTimeFactor: 1.8, harmonicRichness: 0.5 },
  cowbell: { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.95, bodyResonanceVolume: 1.0, decayTimeFactor: 0.4, harmonicRichness: 0.9 },
  agogo: { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.98, bodyResonanceVolume: 0.8, decayTimeFactor: 0.5, harmonicRichness: 0.92 },
  claves: { category: 'resonator_struck_metal_wood', materialDensity: 0.85, tension: 0.9, bodyResonanceVolume: 0.2, decayTimeFactor: 0.15, harmonicRichness: 0.3 },
  'fm-ep': { category: 'resonator_struck_metal_wood', materialDensity: 0.8, tension: 0.7, bodyResonanceVolume: 5.0, decayTimeFactor: 3.5, harmonicRichness: 0.8 },
  rhodes: { category: 'resonator_struck_metal_wood', materialDensity: 0.7, tension: 0.6, bodyResonanceVolume: 6.0, decayTimeFactor: 3.0, harmonicRichness: 0.6 },
  celeste: { category: 'resonator_struck_metal_wood', materialDensity: 0.6, tension: 0.8, bodyResonanceVolume: 2.0, decayTimeFactor: 2.0, harmonicRichness: 0.6 },
  glockenspiel: { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.9, bodyResonanceVolume: 0.5, decayTimeFactor: 2.5, harmonicRichness: 0.8 },
  'music-box': { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.9, bodyResonanceVolume: 0.1, decayTimeFactor: 1.5, harmonicRichness: 0.5 },
  xylophone: { category: 'resonator_struck_metal_wood', materialDensity: 0.5, tension: 0.8, bodyResonanceVolume: 3.0, decayTimeFactor: 0.6, harmonicRichness: 0.4 },
  'tubular-bells': { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.8, bodyResonanceVolume: 20.0, decayTimeFactor: 4.0, harmonicRichness: 0.8 },
  dulcimer: { category: 'resonator_struck_metal_wood', materialDensity: 0.7, tension: 0.8, bodyResonanceVolume: 5.0, decayTimeFactor: 2.5, harmonicRichness: 0.7 },
  'steel-drums': { category: 'resonator_struck_metal_wood', materialDensity: 0.85, tension: 0.7, bodyResonanceVolume: 15.0, decayTimeFactor: 2.0, harmonicRichness: 0.7 },
  kane: { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.9, bodyResonanceVolume: 1.0, decayTimeFactor: 3.0, harmonicRichness: 0.8 },
  gongs: { category: 'resonator_struck_metal_wood', materialDensity: 0.95, tension: 0.6, bodyResonanceVolume: 50.0, decayTimeFactor: 4.5, harmonicRichness: 0.7 },

  // 7. Electro-Acoustic Algorithmic Model
  synth: { category: 'electro_acoustic_algorithmic', materialDensity: 0.5, tension: 0.5, bodyResonanceVolume: 10.0, decayTimeFactor: 2.0, harmonicRichness: 0.9 },
  'sub-bass': { category: 'electro_acoustic_algorithmic', materialDensity: 0.2, tension: 0.3, bodyResonanceVolume: 50.0, decayTimeFactor: 3.0, harmonicRichness: 0.2 },
  'acid-303': { category: 'electro_acoustic_algorithmic', materialDensity: 0.8, tension: 0.9, bodyResonanceVolume: 5.0, decayTimeFactor: 1.5, harmonicRichness: 0.98 },
  voice: { category: 'electro_acoustic_algorithmic', materialDensity: 0.5, tension: 0.6, bodyResonanceVolume: 8.0, decayTimeFactor: 1.5, harmonicRichness: 0.6 },
  choir: { category: 'electro_acoustic_algorithmic', materialDensity: 0.5, tension: 0.6, bodyResonanceVolume: 12.0, decayTimeFactor: 2.0, harmonicRichness: 0.7 },
  'backing-vocals': { category: 'electro_acoustic_algorithmic', materialDensity: 0.5, tension: 0.6, bodyResonanceVolume: 10.0, decayTimeFactor: 1.8, harmonicRichness: 0.6 },
};

/**
 * Resolves physical Luthier model parameters for any given instrument ID.
 */
export function getLuthierModelForInstrument(instrumentId: string): LuthierPhysicalParameters {
  if (LUTHIER_INSTRUMENT_MAP[instrumentId]) {
    return LUTHIER_INSTRUMENT_MAP[instrumentId];
  }
  // Fallback default physical model based on string matching
  if (instrumentId.includes('drum') || instrumentId.includes('perc')) {
    return { category: 'membrane_tension_2d', materialDensity: 0.8, tension: 0.7, bodyResonanceVolume: 15.0, decayTimeFactor: 0.8, harmonicRichness: 0.6 };
  }
  if (instrumentId.includes('guitar') || instrumentId.includes('bass') || instrumentId.includes('string')) {
    return { category: 'strum_friction_pluck', materialDensity: 0.7, tension: 0.7, bodyResonanceVolume: 10.0, decayTimeFactor: 2.5, harmonicRichness: 0.65 };
  }
  return { category: 'electro_acoustic_algorithmic', materialDensity: 0.5, tension: 0.5, bodyResonanceVolume: 10.0, decayTimeFactor: 2.0, harmonicRichness: 0.7 };
}
