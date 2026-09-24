import {
  GenreProfile,
  StyleProfile,
  ArticulationDefinition,
} from './schema';

/**
 * Standard Universal Technique Libraries
 */
export const SHARED_ARTICULATION_DEFINITIONS: Record<string, ArticulationDefinition> = {
  // String Articulations
  rasgueado: {
    id: 'rasgueado',
    category: 'string',
    name: 'Rasgueado',
    velocityRange: [80, 127],
    curve: {
      attackTimeMs: 15,
      decayTimeMs: 380,
      transientBrightness: 0.88,
      resonanceModulation: 0.75,
    },
    acousticNoiseProbability: 0.28,
  },
  alzapua: {
    id: 'alzapua',
    category: 'string',
    name: 'Alzapúa',
    velocityRange: [75, 122],
    curve: {
      attackTimeMs: 8,
      decayTimeMs: 420,
      transientBrightness: 0.82,
      pitchBendSemiSemitones: [-12, 0, 0],
      resonanceModulation: 0.7,
    },
    acousticNoiseProbability: 0.22,
  },
  palm_mute: {
    id: 'palm_mute',
    category: 'string',
    name: 'Palm Mute / Apagado',
    velocityRange: [45, 110],
    curve: {
      attackTimeMs: 3,
      decayTimeMs: 35, // Shortened release < 40ms
      transientBrightness: 0.35, // High-frequency cutoff reduced by ~65%
      resonanceModulation: 0.2,
    },
    acousticNoiseProbability: 0.15,
  },
  slap_thumb: {
    id: 'slap_thumb',
    category: 'string',
    name: 'Slap Thumb',
    velocityRange: [85, 127],
    curve: {
      attackTimeMs: 2,
      decayTimeMs: 220,
      transientBrightness: 0.92,
      resonanceModulation: 0.6,
    },
    acousticNoiseProbability: 0.18,
  },
  pop_index: {
    id: 'pop_index',
    category: 'string',
    name: 'Pop Index',
    velocityRange: [90, 127],
    curve: {
      attackTimeMs: 1.5,
      decayTimeMs: 180,
      transientBrightness: 0.96,
      resonanceModulation: 0.65,
    },
    acousticNoiseProbability: 0.2,
  },
  harmonic_natural: {
    id: 'harmonic_natural',
    category: 'string',
    name: 'Natural Harmonic',
    velocityRange: [40, 85],
    curve: {
      attackTimeMs: 6,
      decayTimeMs: 800,
      transientBrightness: 0.9,
      pitchBendSemiSemitones: [12],
      resonanceModulation: 0.95,
    },
    acousticNoiseProbability: 0.08,
  },
  tremolo_picking: {
    id: 'tremolo_picking',
    category: 'string',
    name: 'Tremolo Picking',
    velocityRange: [65, 115],
    curve: {
      attackTimeMs: 4,
      decayTimeMs: 120,
      transientBrightness: 0.78,
      resonanceModulation: 0.5,
    },
    acousticNoiseProbability: 0.12,
  },

  // Percussion Articulations
  hand_open: {
    id: 'hand_open',
    category: 'percussion',
    name: 'Open Tone (Abierto)',
    velocityRange: [70, 95], // Mid-high velocity (70-95), full resonance sustain
    curve: {
      attackTimeMs: 2,
      decayTimeMs: 480,
      transientBrightness: 0.72,
      resonanceModulation: 0.92,
    },
    acousticNoiseProbability: 0.05,
  },
  hand_slap: {
    id: 'hand_slap',
    category: 'percussion',
    name: 'Slap (Seco)',
    velocityRange: [100, 127], // High velocity (100-127), sharp transient, high-pass filtered tail
    curve: {
      attackTimeMs: 0.8,
      decayTimeMs: 95,
      transientBrightness: 0.98,
      resonanceModulation: 0.25,
    },
    acousticNoiseProbability: 0.12,
  },
  hand_bass: {
    id: 'hand_bass',
    category: 'percussion',
    name: 'Bass Tone (Bajo)',
    velocityRange: [60, 95],
    curve: {
      attackTimeMs: 5,
      decayTimeMs: 380,
      transientBrightness: 0.4,
      resonanceModulation: 0.85,
    },
    acousticNoiseProbability: 0.04,
  },
  hand_mute: {
    id: 'hand_mute',
    category: 'percussion',
    name: 'Heel-Toe (Palma-Dedo)',
    velocityRange: [20, 45], // Low velocity (20-45), muted high frequencies
    curve: {
      attackTimeMs: 3.5,
      decayTimeMs: 60,
      transientBrightness: 0.28,
      resonanceModulation: 0.18,
    },
    acousticNoiseProbability: 0.08,
  },
  hand_fingertip: {
    id: 'hand_fingertip',
    category: 'percussion',
    name: 'Fingertip Touch (Dedo)',
    velocityRange: [20, 45],
    curve: {
      attackTimeMs: 3,
      decayTimeMs: 50,
      transientBrightness: 0.32,
      resonanceModulation: 0.15,
    },
    acousticNoiseProbability: 0.07,
  },
  friction_mod: {
    id: 'friction_mod',
    category: 'percussion',
    name: 'Cuíca / Pandeiro Friction Modulation',
    velocityRange: [60, 115],
    curve: {
      attackTimeMs: 12,
      decayTimeMs: 320,
      transientBrightness: 0.78,
      pitchBendSemiSemitones: [0, 2.5, 5, 7], // dynamic pitch shift up to +7 semitones during stroke
      resonanceModulation: 0.88,
    },
    acousticNoiseProbability: 0.32,
  },
  brush_sweep: {
    id: 'brush_sweep',
    category: 'percussion',
    name: 'Brush Sweep (Escobilla)',
    velocityRange: [40, 85],
    curve: {
      attackTimeMs: 25,
      decayTimeMs: 450,
      transientBrightness: 0.65,
      resonanceModulation: 0.4,
    },
    acousticNoiseProbability: 0.35,
  },
  stick_rimshot: {
    id: 'stick_rimshot',
    category: 'percussion',
    name: 'Stick Rimshot',
    velocityRange: [95, 127],
    curve: {
      attackTimeMs: 0.6,
      decayTimeMs: 180,
      transientBrightness: 0.95,
      resonanceModulation: 0.7,
    },
    acousticNoiseProbability: 0.08,
  },
  stick_cross_stick: {
    id: 'stick_cross_stick',
    category: 'percussion',
    name: 'Cross Stick / Side Stick',
    velocityRange: [60, 100],
    curve: {
      attackTimeMs: 1.2,
      decayTimeMs: 140,
      transientBrightness: 0.82,
      resonanceModulation: 0.75,
    },
    acousticNoiseProbability: 0.06,
  },

  // Wind & Brass Articulations
  growl: {
    id: 'growl',
    category: 'brass_wind',
    name: 'Growl & Flutter Tongue',
    velocityRange: [75, 127],
    curve: {
      attackTimeMs: 8,
      decayTimeMs: 650,
      transientBrightness: 0.92,
      resonanceModulation: 0.85, // 25-40 Hz amplitude/pitch modulation with overdrive
    },
    acousticNoiseProbability: 0.38,
  },
  flutter_tongue: {
    id: 'flutter_tongue',
    category: 'brass_wind',
    name: 'Flutter Tongue',
    velocityRange: [70, 120],
    curve: {
      attackTimeMs: 6,
      decayTimeMs: 550,
      transientBrightness: 0.88,
      resonanceModulation: 0.8,
    },
    acousticNoiseProbability: 0.3,
  },
  fall_off: {
    id: 'fall_off',
    category: 'brass_wind',
    name: 'Fall Off',
    velocityRange: [65, 115],
    curve: {
      attackTimeMs: 10,
      decayTimeMs: 480,
      transientBrightness: 0.7,
      pitchBendSemiSemitones: [0, 0, -1.5, -3.5, -5], // drops 2-5 semitones at note release
      resonanceModulation: 0.5,
    },
    acousticNoiseProbability: 0.2,
  },
  doit: {
    id: 'doit',
    category: 'brass_wind',
    name: 'Doit (Rip Up)',
    velocityRange: [75, 125],
    curve: {
      attackTimeMs: 8,
      decayTimeMs: 420,
      transientBrightness: 0.88,
      pitchBendSemiSemitones: [0, 0, 1.5, 3.5, 5], // jumps 2-5 semitones at note release
      resonanceModulation: 0.6,
    },
    acousticNoiseProbability: 0.22,
  },
  tongued_staccato: {
    id: 'tongued_staccato',
    category: 'brass_wind',
    name: 'Tongued Staccato',
    velocityRange: [70, 120],
    curve: {
      attackTimeMs: 1.5,
      decayTimeMs: 120,
      transientBrightness: 0.85,
      resonanceModulation: 0.4,
    },
    acousticNoiseProbability: 0.15,
  },
  slur_legato: {
    id: 'slur_legato',
    category: 'brass_wind',
    name: 'Slur Legato',
    velocityRange: [50, 100],
    curve: {
      attackTimeMs: 18,
      decayTimeMs: 700,
      transientBrightness: 0.55,
      resonanceModulation: 0.9,
    },
    acousticNoiseProbability: 0.1,
  },
  breath_tone: {
    id: 'breath_tone',
    category: 'brass_wind',
    name: 'Subtone / Breath Tone',
    velocityRange: [35, 75],
    curve: {
      attackTimeMs: 22,
      decayTimeMs: 600,
      transientBrightness: 0.48,
      resonanceModulation: 0.65,
    },
    acousticNoiseProbability: 0.45,
  },
};

/**
 * Genre Profiles
 */
export const GENRE_PROFILES: Record<string, GenreProfile> = {
  flamenco: {
    id: 'flamenco',
    name: 'Flamenco',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.5,
      ticksPushPull: { 0: 0, 2: 2, 4: -3, 6: 0, 7: 4, 9: -2, 11: 3, 13: -1 },
      humanizeJitterMs: 10,
    },
    harmonicGrammar: {
      allowedScales: ['phrygian', 'phrygian-dominant', 'aeolian', 'dorian'],
      preferredVoicings: ['flamenco-b9', 'minor-add9', 'open-string-pedal', 'dominant7-b9'],
      cadenceRules: [
        { trigger: 'bII', resolveTo: 'I' },
        { trigger: 'iv', resolveTo: 'bII' },
        { trigger: 'bIII', resolveTo: 'bII' },
      ],
    },
    sharedTechniques: {
      rasgueado: SHARED_ARTICULATION_DEFINITIONS.rasgueado,
      alzapua: SHARED_ARTICULATION_DEFINITIONS.alzapua,
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
      hand_open: SHARED_ARTICULATION_DEFINITIONS.hand_open,
      hand_slap: SHARED_ARTICULATION_DEFINITIONS.hand_slap,
      hand_mute: SHARED_ARTICULATION_DEFINITIONS.hand_mute,
    },
    corePatternLibraries: {
      bassPatterns: ['flamenco-tango-bass', 'buleria-bass', 'solea-bass'],
      rhythmPatterns: ['solea-compas', 'bulerias-compas', 'tangos-compas', 'alegrias-compas'],
      percussionPatterns: ['cajon-flamenco-base', 'palmas-sordas', 'palmas-fuertes'],
    },
  },

  salsa: {
    id: 'salsa',
    name: 'Salsa & Afro-Cuban',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.52,
      ticksPushPull: { 0: 0, 3: 4, 6: -2, 8: 1, 10: 3, 14: 2 },
      humanizeJitterMs: 6,
    },
    harmonicGrammar: {
      allowedScales: ['dorian', 'mixolydian', 'minor', 'major', 'dominant-bebop'],
      preferredVoicings: ['rootless-9th', 'm7-11', 'dom13-b9', 'montuno-octaves'],
      cadenceRules: [
        { trigger: 'ii7', resolveTo: 'V7' },
        { trigger: 'V7', resolveTo: 'I' },
        { trigger: 'iv6', resolveTo: 'V7' },
      ],
    },
    sharedTechniques: {
      hand_open: SHARED_ARTICULATION_DEFINITIONS.hand_open,
      hand_slap: SHARED_ARTICULATION_DEFINITIONS.hand_slap,
      hand_mute: SHARED_ARTICULATION_DEFINITIONS.hand_mute,
      growl: SHARED_ARTICULATION_DEFINITIONS.growl,
      fall_off: SHARED_ARTICULATION_DEFINITIONS.fall_off,
      doit: SHARED_ARTICULATION_DEFINITIONS.doit,
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
    },
    corePatternLibraries: {
      bassPatterns: ['tumbao-traditional', 'tumbao-syncopated', 'baby-bass-montuno'],
      rhythmPatterns: ['piano-guajeo-son', 'montuno-2-3', 'montuno-3-2'],
      percussionPatterns: ['conga-tumbao-2-3', 'bongo-martillo', 'timbal-cascara', 'clave-son-2-3'],
    },
  },

  timba: {
    id: 'timba',
    name: 'Timba Cubana',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.53,
      ticksPushPull: { 0: -1, 3: 5, 7: 3, 10: 4, 14: 3 },
      humanizeJitterMs: 7,
    },
    harmonicGrammar: {
      allowedScales: ['funk-dorian', 'mixolydian-altered', 'phrygian', 'blues'],
      preferredVoicings: ['quartal-chords', 'altered-dominant-7#9', 'drop2-syncopated'],
      cadenceRules: [
        { trigger: 'bVII', resolveTo: 'i' },
        { trigger: 'V7#9', resolveTo: 'i' },
      ],
    },
    sharedTechniques: {
      hand_open: SHARED_ARTICULATION_DEFINITIONS.hand_open,
      hand_slap: SHARED_ARTICULATION_DEFINITIONS.hand_slap,
      hand_mute: SHARED_ARTICULATION_DEFINITIONS.hand_mute,
      slap_thumb: SHARED_ARTICULATION_DEFINITIONS.slap_thumb,
      pop_index: SHARED_ARTICULATION_DEFINITIONS.pop_index,
      growl: SHARED_ARTICULATION_DEFINITIONS.growl,
      fall_off: SHARED_ARTICULATION_DEFINITIONS.fall_off,
    },
    corePatternLibraries: {
      bassPatterns: ['timba-funk-bass', 'bomba-bass-slide', 'despelote-kick-lock'],
      rhythmPatterns: ['timba-piano-despelote', 'manana-guajeo', 'gear-shift-montuno'],
      percussionPatterns: ['timbal-kick-batería', 'conga-timba-dense', 'campana-contra-campana'],
    },
  },

  afrobeats: {
    id: 'afrobeats',
    name: 'Afrobeats & Afro-Fusion',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.56,
      ticksPushPull: { 0: 0, 3: -2, 6: 3, 8: 0, 11: -3, 14: 4 },
      humanizeJitterMs: 8,
    },
    harmonicGrammar: {
      allowedScales: ['major-pentatonic', 'dorian', 'mixolydian', 'minor-pentatonic'],
      preferredVoicings: ['triad-inversions', 'add9-clean', 'sus4-vamps', 'sparse-dyads'],
      cadenceRules: [
        { trigger: 'IV', resolveTo: 'I' },
        { trigger: 'vi', resolveTo: 'V' },
        { trigger: 'ii', resolveTo: 'V' },
      ],
    },
    sharedTechniques: {
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
      hand_open: SHARED_ARTICULATION_DEFINITIONS.hand_open,
      hand_mute: SHARED_ARTICULATION_DEFINITIONS.hand_mute,
      growl: SHARED_ARTICULATION_DEFINITIONS.growl,
      breath_tone: SHARED_ARTICULATION_DEFINITIONS.breath_tone,
    },
    corePatternLibraries: {
      bassPatterns: ['afro-sub-808', 'highlife-walking-bass', 'amapiano-log-drum'],
      rhythmPatterns: ['afro-guitar-skank', 'highlife-interlocking-guitar', 'keys-syncopated-vamp'],
      percussionPatterns: ['shekere-roll', 'talking-drum-talking', 'afro-rim-snare-pocket'],
    },
  },

  jazz: {
    id: 'jazz',
    name: 'Jazz & Bebop',
    timing: {
      gridResolution: '1/8t',
      swingFactor: 0.67,
      ticksPushPull: { 0: 0, 1: 8, 2: -1, 3: 7, 4: 0, 5: 9 },
      humanizeJitterMs: 9,
    },
    harmonicGrammar: {
      allowedScales: ['altered', 'lydian-dominant', 'dorian', 'bebop-dominant', 'diminished-whole-half'],
      preferredVoicings: ['rootless-type-a', 'rootless-type-b', 'drop2-4-way-close', 'quartal-so-what'],
      cadenceRules: [
        { trigger: 'ii7b5', resolveTo: 'V7alt' },
        { trigger: 'V7alt', resolveTo: 'i' },
        { trigger: 'subV7', resolveTo: 'Imaj7' },
      ],
    },
    sharedTechniques: {
      growl: SHARED_ARTICULATION_DEFINITIONS.growl,
      fall_off: SHARED_ARTICULATION_DEFINITIONS.fall_off,
      doit: SHARED_ARTICULATION_DEFINITIONS.doit,
      brush_sweep: SHARED_ARTICULATION_DEFINITIONS.brush_sweep,
      slur_legato: SHARED_ARTICULATION_DEFINITIONS.slur_legato,
      tongued_staccato: SHARED_ARTICULATION_DEFINITIONS.tongued_staccato,
    },
    corePatternLibraries: {
      bassPatterns: ['walking-bass-quarter-notes', 'pedal-point-broken', 'bop-two-feel'],
      rhythmPatterns: ['charleston-comp', 'red-garland-left-hand', 'freddie-green-four-to-the-bar'],
      percussionPatterns: ['ride-cymbal-spang-a-lang', 'feathered-kick-hat-chick', 'snare-brush-circle'],
    },
  },

  brazilian: {
    id: 'brazilian',
    name: 'Samba & Bossa Nova',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.54,
      ticksPushPull: { 0: 0, 1: -1, 2: 2, 3: -2, 4: 0, 5: -1, 6: 3, 7: -3 },
      humanizeJitterMs: 7,
    },
    harmonicGrammar: {
      allowedScales: ['lydian', 'dorian', 'melodic-minor', 'major69', 'harmonic-minor'],
      preferredVoicings: ['bossa-thumb-index-pinches', 'm69', 'dom7-13-b9', 'maj7#11'],
      cadenceRules: [
        { trigger: 'ii7', resolveTo: 'V7b9' },
        { trigger: 'V7b9', resolveTo: 'Imaj7' },
        { trigger: 'bII7', resolveTo: 'Imaj7' },
      ],
    },
    sharedTechniques: {
      friction_mod: SHARED_ARTICULATION_DEFINITIONS.friction_mod,
      hand_open: SHARED_ARTICULATION_DEFINITIONS.hand_open,
      hand_mute: SHARED_ARTICULATION_DEFINITIONS.hand_mute,
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
      stick_cross_stick: SHARED_ARTICULATION_DEFINITIONS.stick_cross_stick,
    },
    corePatternLibraries: {
      bassPatterns: ['surdo-heartbeat-bass', 'bossa-surdo-bassline', 'samba-cavaquinho-bass'],
      rhythmPatterns: ['bossa-guitar-joao-gilberto', 'samba-telecoteco', 'choro-arpeggios'],
      percussionPatterns: ['pandeiro-samba-grid', 'cuica-friction-groove', 'tamborim-virada', 'agogo-samba'],
    },
  },

  bachata: {
    id: 'bachata',
    name: 'Bachata Dominicana',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.51,
      ticksPushPull: { 0: 0, 2: 1, 3: -2, 6: 2, 8: 0, 10: 1, 14: 2 },
      humanizeJitterMs: 6,
    },
    harmonicGrammar: {
      allowedScales: ['major', 'aeolian', 'harmonic-minor'],
      preferredVoicings: ['requinto-triads-high', 'segunda-chops-m7', 'arpeggio-sweep-dyads'],
      cadenceRules: [
        { trigger: 'iv', resolveTo: 'V' },
        { trigger: 'V', resolveTo: 'I' },
      ],
    },
    sharedTechniques: {
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
      hand_open: SHARED_ARTICULATION_DEFINITIONS.hand_open,
      hand_slap: SHARED_ARTICULATION_DEFINITIONS.hand_slap,
      hand_mute: SHARED_ARTICULATION_DEFINITIONS.hand_mute,
      tremolo_picking: SHARED_ARTICULATION_DEFINITIONS.tremolo_picking,
    },
    corePatternLibraries: {
      bassPatterns: ['bachata-bass-syncopation', 'majeo-bass-runs', 'mambo-section-bass'],
      rhythmPatterns: ['requinto-derecho', 'segunda-apoya', 'requinto-mambo-punteo'],
      percussionPatterns: ['bongo-bachata-martillo', 'guira-dominicana-scrape'],
    },
  },

  cumbia: {
    id: 'cumbia',
    name: 'Cumbia',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.52,
      ticksPushPull: { 0: 0, 2: 3, 4: -1, 6: 4, 8: 0, 10: 3, 14: 4 },
      humanizeJitterMs: 8,
    },
    harmonicGrammar: {
      allowedScales: ['dorian', 'aeolian', 'major', 'mixolydian'],
      preferredVoicings: ['accordion-bellows-stabs', 'synth-lead-minor', 'clean-chords-offbeat'],
      cadenceRules: [
        { trigger: 'v', resolveTo: 'i' },
        { trigger: 'bVII', resolveTo: 'i' },
      ],
    },
    sharedTechniques: {
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
      hand_open: SHARED_ARTICULATION_DEFINITIONS.hand_open,
      hand_slap: SHARED_ARTICULATION_DEFINITIONS.hand_slap,
      stick_cross_stick: SHARED_ARTICULATION_DEFINITIONS.stick_cross_stick,
    },
    corePatternLibraries: {
      bassPatterns: ['cumbia-walking-bass', 'villera-synth-bass', 'rebajada-slow-bass'],
      rhythmPatterns: ['cumbia-guitar-raspa', 'accordion-vamp', 'piano-cumbia-octaves'],
      percussionPatterns: ['guacharaca-raspa', 'tambora-golpe-cumbia', 'llamador-offbeat'],
    },
  },

  metal: {
    id: 'metal',
    name: 'Heavy Metal & Extreme Styles',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.5,
      ticksPushPull: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
      humanizeJitterMs: 3,
    },
    harmonicGrammar: {
      allowedScales: ['aeolian', 'phrygian', 'locrian', 'diminished', 'harmonic-minor'],
      preferredVoicings: ['power-chord-root-5th', 'tritone-diminished', 'cluster-dyads', 'drop-d-unison'],
      cadenceRules: [
        { trigger: 'bII5', resolveTo: 'I5' },
        { trigger: 'bVI5', resolveTo: 'V5' },
      ],
    },
    sharedTechniques: {
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
      tremolo_picking: SHARED_ARTICULATION_DEFINITIONS.tremolo_picking,
      harmonic_natural: SHARED_ARTICULATION_DEFINITIONS.harmonic_natural,
      stick_rimshot: SHARED_ARTICULATION_DEFINITIONS.stick_rimshot,
    },
    corePatternLibraries: {
      bassPatterns: ['metal-chug-unison', 'thrash-gallop-bass', 'blast-support-bass'],
      rhythmPatterns: ['guitar-gallop-palm-mute', 'djent-polyrhythm', 'death-metal-tremolo-riff'],
      percussionPatterns: ['double-kick-machine-gun', 'snare-blast-beat', 'china-cymbal-accent'],
    },
  },

  tango: {
    id: 'tango',
    name: 'Tango Argentino',
    timing: {
      gridResolution: '1/16',
      swingFactor: 0.5,
      ticksPushPull: { 0: -2, 4: 3, 8: -2, 12: 4, 14: 5 },
      humanizeJitterMs: 9,
    },
    harmonicGrammar: {
      allowedScales: ['harmonic-minor', 'melodic-minor', 'dorian', 'major'],
      preferredVoicings: ['bandoneon-dense-clusters', 'm-maj7', 'diminished-7th', 'chromatic-inner-voice'],
      cadenceRules: [
        { trigger: 'iv6', resolveTo: 'V7b9' },
        { trigger: 'V7b9', resolveTo: 'i' },
      ],
    },
    sharedTechniques: {
      slur_legato: SHARED_ARTICULATION_DEFINITIONS.slur_legato,
      tongued_staccato: SHARED_ARTICULATION_DEFINITIONS.tongued_staccato,
      hand_slap: SHARED_ARTICULATION_DEFINITIONS.hand_slap,
      palm_mute: SHARED_ARTICULATION_DEFINITIONS.palm_mute,
    },
    corePatternLibraries: {
      bassPatterns: ['arrastre-slide-bass', 'marcato-in-4-bass', 'sincopa-tango-bass'],
      rhythmPatterns: ['bandoneon-marcato-accent', 'piano-arrastre-chords', 'yumba-heavy-downbeat'],
      percussionPatterns: ['caja-tango-hit', 'tambor-golpe-strings'],
    },
  },
};

/**
 * Concrete Song Style Profiles inheriting from Genre Profiles with specific overrides
 */
export const STYLE_PROFILES: Record<string, StyleProfile> = {
  // Flamenco Styles
  'bulerias': {
    id: 'bulerias',
    genreId: 'flamenco',
    name: 'Bulerías de Jerez',
    tempoRange: [180, 240],
    sonicSignature: {
      timbreOverrides: [
        { instrumentId: 'spanish-guitar', brightnessMod: 0.25, attackSpeedMod: 1.4, saturation: 0.15, reverbSend: 0.2 },
        { instrumentId: 'cajon', brightnessMod: 0.35, attackSpeedMod: 1.5, saturation: 0.25, reverbSend: 0.15 },
        { instrumentId: 'palmas', brightnessMod: 0.4, attackSpeedMod: 1.6, saturation: 0.1, reverbSend: 0.25 },
      ],
      eqCurve: { lowDb: -1.5, midDb: 2.0, highDb: 3.0 },
    },
    techniqueOverrides: {
      rasgueado: {
        curve: { attackTimeMs: 10, decayTimeMs: 280, transientBrightness: 0.95 },
      },
    },
    patternSelect: {
      bassPatternId: 'buleria-bass',
      rhythmPatternId: 'bulerias-compas',
      leadMotifId: 'buleria-falseta-riff',
    },
    grooveOffsetMap: {
      kickOffsetMs: -2,
      snareOffsetMs: 4,
      hihatOffsetMs: 1,
    },
  },

  'solea': {
    id: 'solea',
    genreId: 'flamenco',
    name: 'Soleá Tradicional',
    tempoRange: [70, 95],
    sonicSignature: {
      timbreOverrides: [
        { instrumentId: 'spanish-guitar', brightnessMod: -0.1, attackSpeedMod: 0.9, saturation: 0.08, reverbSend: 0.45 },
        { instrumentId: 'cajon', brightnessMod: -0.15, attackSpeedMod: 0.95, saturation: 0.1, reverbSend: 0.35 },
      ],
      eqCurve: { lowDb: 2.0, midDb: 0.5, highDb: -1.0 },
    },
    techniqueOverrides: {
      alzapua: {
        curve: { attackTimeMs: 12, decayTimeMs: 500, transientBrightness: 0.75 },
      },
    },
    patternSelect: {
      bassPatternId: 'solea-bass',
      rhythmPatternId: 'solea-compas',
      leadMotifId: 'solea-falseta-intro',
    },
    grooveOffsetMap: {
      kickOffsetMs: 4,
      snareOffsetMs: -1,
      hihatOffsetMs: 2,
    },
  },

  // Salsa Styles
  'salsa-dura': {
    id: 'salsa-dura',
    genreId: 'salsa',
    name: 'Salsa Dura New York / Puerto Rico',
    tempoRange: [96, 115],
    sonicSignature: {
      timbreOverrides: [
        { instrumentId: 'piano', brightnessMod: 0.3, attackSpeedMod: 1.25, saturation: 0.2, reverbSend: 0.25 },
        { instrumentId: 'horns', brightnessMod: 0.45, attackSpeedMod: 1.35, saturation: 0.3, reverbSend: 0.3 },
        { instrumentId: 'congas', brightnessMod: 0.25, attackSpeedMod: 1.3, saturation: 0.18, reverbSend: 0.18 },
      ],
      eqCurve: { lowDb: 1.0, midDb: 2.5, highDb: 2.0 },
    },
    techniqueOverrides: {
      hand_slap: {
        curve: { attackTimeMs: 0.7, decayTimeMs: 85, transientBrightness: 1.0 },
      },
      growl: {
        curve: { attackTimeMs: 6, decayTimeMs: 700, transientBrightness: 0.95 },
      },
    },
    patternSelect: {
      bassPatternId: 'tumbao-syncopated',
      rhythmPatternId: 'montuno-2-3',
      leadMotifId: 'trombon-mambo-stab',
    },
    grooveOffsetMap: {
      kickOffsetMs: 0,
      snareOffsetMs: -3,
      hihatOffsetMs: 2,
    },
  },

  // Timba Styles
  'timba-funk': {
    id: 'timba-funk',
    genreId: 'timba',
    name: 'Timba Funk / Despelote',
    tempoRange: [98, 112],
    sonicSignature: {
      timbreOverrides: [
        { instrumentId: 'bass', brightnessMod: 0.4, attackSpeedMod: 1.4, saturation: 0.35, reverbSend: 0.12 },
        { instrumentId: 'piano', brightnessMod: 0.35, attackSpeedMod: 1.3, saturation: 0.25, reverbSend: 0.2 },
        { instrumentId: 'drums', brightnessMod: 0.3, attackSpeedMod: 1.45, saturation: 0.3, reverbSend: 0.15 },
      ],
      eqCurve: { lowDb: 2.5, midDb: 1.5, highDb: 2.5 },
    },
    techniqueOverrides: {
      slap_thumb: {
        curve: { attackTimeMs: 1.5, decayTimeMs: 200, transientBrightness: 0.98 },
      },
    },
    patternSelect: {
      bassPatternId: 'timba-funk-bass',
      rhythmPatternId: 'timba-piano-despelote',
      leadMotifId: 'bloque-timba-hit',
    },
    grooveOffsetMap: {
      kickOffsetMs: -3,
      snareOffsetMs: 3,
      hihatOffsetMs: 0,
    },
  },

  // Afrobeat Styles
  'afro-pop': {
    id: 'afro-pop',
    genreId: 'afrobeats',
    name: 'Afro-Pop & Amapiano Hybrid',
    tempoRange: [108, 122],
    sonicSignature: {
      timbreOverrides: [
        { instrumentId: 'bass', brightnessMod: -0.2, attackSpeedMod: 1.1, saturation: 0.45, reverbSend: 0.1 },
        { instrumentId: 'guitar', brightnessMod: 0.2, attackSpeedMod: 1.2, saturation: 0.15, reverbSend: 0.35 },
        { instrumentId: 'keys', brightnessMod: 0.1, attackSpeedMod: 1.0, saturation: 0.1, reverbSend: 0.4 },
      ],
      eqCurve: { lowDb: 3.5, midDb: 0.0, highDb: 1.5 },
    },
    techniqueOverrides: {
      palm_mute: {
        curve: { attackTimeMs: 4, decayTimeMs: 30, transientBrightness: 0.4 },
      },
    },
    patternSelect: {
      bassPatternId: 'amapiano-log-drum',
      rhythmPatternId: 'afro-guitar-skank',
      leadMotifId: 'vocal-chop-riff',
    },
    grooveOffsetMap: {
      kickOffsetMs: 0,
      snareOffsetMs: 5,
      hihatOffsetMs: -2,
    },
  },

  // Samba / Bossa Styles
  'bossa-nova': {
    id: 'bossa-nova',
    genreId: 'brazilian',
    name: 'Bossa Nova Ipanema',
    tempoRange: [120, 145],
    sonicSignature: {
      timbreOverrides: [
        { instrumentId: 'acoustic-guitar', brightnessMod: 0.0, attackSpeedMod: 0.95, saturation: 0.05, reverbSend: 0.3 },
        { instrumentId: 'pandeiro', brightnessMod: -0.1, attackSpeedMod: 1.0, saturation: 0.08, reverbSend: 0.25 },
        { instrumentId: 'flute', brightnessMod: 0.1, attackSpeedMod: 0.9, saturation: 0.05, reverbSend: 0.45 },
      ],
      eqCurve: { lowDb: 0.5, midDb: 0.5, highDb: 0.0 },
    },
    techniqueOverrides: {
      friction_mod: {
        curve: { attackTimeMs: 15, decayTimeMs: 280, transientBrightness: 0.72, pitchBendSemiSemitones: [0, 2, 4, 6] },
      },
    },
    patternSelect: {
      bassPatternId: 'bossa-surdo-bassline',
      rhythmPatternId: 'bossa-guitar-joao-gilberto',
      leadMotifId: 'flute-lyrical-bossa',
    },
    grooveOffsetMap: {
      kickOffsetMs: 2,
      snareOffsetMs: -1,
      hihatOffsetMs: 3,
    },
  },
};

export function getGenreProfile(genreId: string): GenreProfile | undefined {
  const gLower = (genreId || '').toLowerCase().replace(/[\s_]+/g, '-');
  return GENRE_PROFILES[gLower] || GENRE_PROFILES[genreId];
}

export function getStyleProfile(styleId: string): StyleProfile | undefined {
  const sLower = (styleId || '').toLowerCase().replace(/[\s_]+/g, '-');
  return STYLE_PROFILES[sLower] || STYLE_PROFILES[styleId];
}
