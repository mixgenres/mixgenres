import { GenreWorld } from '../../types';

export const ZOUK_WORLD: GenreWorld = {
  id: 'zouk',
  name: 'Zouk',
  family: 'French Caribbean / Antillean',
  color: '#55a6a1',
  level: 'world',
  description: "The revolutionary sound of Guadeloupe and Martinique created by Kassav’: driving Zouk Béton carnival energy, syncopated basslines, clean chawa guitar skanks, ti-bwa woodblock ostinatos, punchy brass horn stabs, and romantic Zouk Love DX7 Rhodes progressions.",
  traditions: [
    {
      id: 'zouk-beton',
      worldId: 'zouk',
      name: 'Zouk Béton & Rétro (Guadeloupe & Martinique)',
      origin: 'Guadeloupe & Martinique (French Antilles)',
      era: '1979–1990s',
      description: "Kassav’s revolutionary Caribbean carnival sound: hyper-energetic brass sections, driving kick/snare pocket, ti-bwa percussion, and syncopated basslines.",
      characteristicInstruments: [
        'bass',
        'guitar',
        'keys',
        'drums',
        'percussion',
        'brass'
      ],
      preferredMeters: ['4/4'],
      tempoRange: [110, 130],
      keySubstyles: [
        'Zouk Béton',
        'Zouk Chiré',
        'Carnival Zouk',
        'Zouk Rétro'
      ],
      coreConcepts: [
        'chawa guitar syncopated skank',
        'ti-bwa woodblock drive',
        'horn section punch stabs',
        'deep syncopated 16th bass'
      ],
      rhythmicGrammar: [
        'driving four-on-the-floor kick, snare on beat 3',
        'ti-bwa syncopated rimshot ostinato',
        'brass accents on upbeats'
      ],
      danceTags: [
        'social-partner',
        'festival-fusion'
      ],
      tuningSystem: '12-tet',
      signatureCell: 'Driving ti-bwa stick ostinato over syncopated 16th sub-bass and chawa guitar chops',
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: 1,
        microtimingFeel: 'pushed'
      },
      sectionProgressions: {
        intro: ['IVmaj7', 'V', 'iii7', 'vi7'],
        verse: ['IVmaj7', 'V', 'iii7', 'vi7'],
        chorus: ['ii7', 'V7', 'Imaj7', 'vi7'],
        solo: ['IVmaj7', 'V', 'iii7', 'vi7'],
        coda: ['IVmaj7', 'V', 'vi7', 'vi7']
      }
    },
    {
      id: 'zouk-love',
      worldId: 'zouk',
      name: 'Zouk Love',
      origin: 'French Antilles & Paris',
      era: '1985–Present',
      description: 'Sensual, romantic Antillean tempo featuring lush Yamaha DX7-style electric-piano layers, smooth chawa guitar, deep melodic bass, and intimate French Creole vocals.',
      characteristicInstruments: [
        'bass',
        'guitar',
        'keys',
        'drums',
        'synth',
        'voice'
      ],
      preferredMeters: ['4/4'],
      tempoRange: [85, 105],
      keySubstyles: [
        'Zouk Love Romantique',
        'Slow Zouk',
        'Antillean Pop'
      ],
      coreConcepts: [
        'warm DX7-style electric-piano chords',
        'chawa guitar skank with chorus',
        'deep sub-bass slides',
        'sensual vocal melody'
      ],
      rhythmicGrammar: [
        'slow syncopated kick and rimshot',
        'smooth upbeat guitar chops'
      ],
      danceTags: [
        'social-partner',
        'blues-fusion-compatible',
        'listening'
      ],
      tuningSystem: '12-tet',
      signatureCell: 'Warm DX7 Rhodes chords over slow syncopated kick/rimshot and chorused chawa guitar',
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: 0,
        microtimingFeel: 'laid-back'
      },
      sectionProgressions: {
        intro: ['Imaj7', 'vi7', 'ii7', 'V7'],
        verse: ['Imaj7', 'vi7', 'ii7', 'V7'],
        chorus: ['IVmaj7', 'iii7', 'ii7', 'Imaj7'],
        solo: ['ii7', 'V7', 'iii7', 'vi7'],
        coda: ['Imaj7', 'vi7', 'ii7', 'Imaj7']
      }
    }
  ],
  substyles: [
    'Zouk Béton',
    'Zouk Love',
    'Zouk Chiré',
    'Carnival Zouk',
    'Zouk Rétro',
    'Antillean Pop'
  ],
  artists: [
    'Kassav’',
    'Jacob Desvarieux',
    'Jocelyne Béroard',
    'Patrick Saint-Éloi',
    'Jean-Philippe Marthély',
    'Gilles Floro',
    'Eric Virgal',
    'Tanya Saint-Val'
  ],
  concepts: [
    'chawa guitar skank',
    'ti-bwa woodblock drive',
    'horn section punch',
    'syncopated bass movement',
    'DX7 electric piano chords',
    'French Creole vocal phrasing'
  ],
  roles: {
    bass: [
      'syncopated zouk bass',
      'sub-bass glide',
      'melodic octaves'
    ],
    guitar: [
      'clean chawa skank chops',
      'rhythmic muted riffs'
    ],
    keys: [
      'lush DX7 electric piano & pad chords',
      'synth bells'
    ],
    drums: [
      'four-on-the-floor kick with snare backbeat',
      'ti-bwa woodblock stick pattern',
      'shaker shimmer'
    ],
    brass: [
      'punchy horn section stabs',
      'trumpet counter-melodies'
    ]
  },
  patterns: [
    {
      id: 'zouk-bass-movement',
      worldId: 'zouk',
      traditionId: 'zouk-beton',
      name: 'Zouk Syncopated Bass Movement',
      shortName: 'Bass Pulse',
      family: 'Zouk Basslines',
      category: 'bass',
      description: 'Warm, round bass with syncopated 16th pushes, slides, and root-octave leaps locking with the kick drum.',
      scopes: ['measure'],
      roles: ['bass'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 3, 6, 8, 10, 11, 14],
      difficulty: 3,
      tags: ['bass', 'ostinato', 'syncopated', 'zouk'],
      accentProfile: [1.0, 0.6, 0.8, 0.9, 0.6, 0.8, 1.0, 0.6, 0.9, 0.6, 0.8, 0.9, 0.6, 0.8, 1.0, 0.7],
      velocityProfile: [0.95, 0.7, 0.85, 0.9, 0.65, 0.8, 0.95, 0.7, 0.9, 0.65, 0.8, 0.9, 0.65, 0.8, 0.95, 0.75],
      variants: [
        {
          id: 'zouk-bass-sub-pulse',
          parentPatternId: 'zouk-bass-movement',
          name: 'Zouk Bass Sub Push',
          shortName: 'Sub Push',
          variationType: 'syncopated',
          probability: 0.3,
          description: 'Heavier low-end octave drops focusing on the offbeats.',
          onsetGrid: [0, 2, 4, 6, 8, 10, 12, 14],
          accentProfile: [1.0, 0.5, 0.9, 0.5, 0.8, 0.5, 1.0, 0.5, 0.9, 0.5, 0.8, 0.5, 1.0, 0.5, 0.9, 0.6],
          velocityProfile: [1.0, 0.6, 0.9, 0.6, 0.85, 0.6, 1.0, 0.6, 0.9, 0.6, 0.85, 0.6, 1.0, 0.6, 0.9, 0.7]
        },
        {
          id: 'zouk-bass-movement-v-02',
          parentPatternId: 'zouk-bass-movement',
          name: 'Zouk Antillean Groove',
          shortName: 'Antillean',
          variationType: 'development',
          probability: 0.25,
          description: 'Walking pentatonic fills connecting chord tones on the fourth beat.',
          onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [0.9, 0.7, 0.85, 0.7, 0.9, 0.7, 1.0, 0.7, 0.9, 0.7, 0.85, 0.7, 1.0, 0.8, 0.9, 0.7],
          velocityProfile: [0.9, 0.75, 0.85, 0.7, 0.9, 0.75, 0.95, 0.7, 0.9, 0.75, 0.85, 0.7, 1.0, 0.85, 0.9, 0.75]
        },
        {
          id: 'zouk-bass-love-slide',
          parentPatternId: 'zouk-bass-movement',
          name: 'Zouk Love Melodic Slide',
          shortName: 'Love Slide',
          variationType: 'ornamented',
          probability: 0.2,
          description: 'Sensual, spacious bass pattern with smooth slides and sustaining roots.',
          onsetGrid: [0, 4, 8, 12],
          accentProfile: [1.0, 0.4, 0.8, 0.4, 0.9, 0.4, 0.7, 0.4, 1.0, 0.4, 0.8, 0.4, 0.9, 0.4, 0.7, 0.5],
          velocityProfile: [0.9, 0.5, 0.8, 0.5, 0.85, 0.5, 0.75, 0.5, 0.9, 0.5, 0.8, 0.5, 0.85, 0.5, 0.75, 0.6]
        }
      ]
    },
    {
      id: 'zouk-guitar-skank-chawa',
      worldId: 'zouk',
      traditionId: 'zouk-beton',
      name: 'Zouk Chawa Guitar Skank',
      shortName: 'Chawa Chop',
      family: 'Zouk Guitars',
      category: 'rhythm',
      description: 'Clean, chorused Stratocaster upbeat chops ("chawa") characteristic of Antillean zouk rhythm sections.',
      scopes: ['measure'],
      roles: ['rhythm-guitar', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [1, 3, 5, 7, 9, 11, 13, 15],
      difficulty: 2,
      tags: ['guitar', 'skank', 'chawa', 'upbeat', 'zouk'],
      accentProfile: [0.5, 1.0, 0.5, 0.9, 0.5, 1.0, 0.5, 0.9, 0.5, 1.0, 0.5, 0.9, 0.5, 1.0, 0.5, 0.9],
      velocityProfile: [0.5, 0.95, 0.5, 0.85, 0.5, 0.95, 0.5, 0.85, 0.5, 0.95, 0.5, 0.85, 0.5, 0.95, 0.5, 0.85],
      variants: [
        {
          id: 'zouk-guitar-double-chop',
          parentPatternId: 'zouk-guitar-skank-chawa',
          name: 'Zouk Double Upbeat Chop',
          shortName: 'Double Chop',
          variationType: 'syncopated',
          probability: 0.3,
          description: 'Double sixteenth-note chops pushing the second and fourth beats.',
          onsetGrid: [1, 2, 5, 6, 9, 10, 13, 14],
          accentProfile: [0.4, 0.9, 1.0, 0.4, 0.4, 0.9, 1.0, 0.4, 0.4, 0.9, 1.0, 0.4, 0.4, 0.9, 1.0, 0.4],
          velocityProfile: [0.45, 0.85, 0.95, 0.45, 0.45, 0.85, 0.95, 0.45, 0.45, 0.85, 0.95, 0.45, 0.45, 0.85, 0.95, 0.45]
        },
        {
          id: 'zouk-guitar-skank-chawa-v-02',
          parentPatternId: 'zouk-guitar-skank-chawa',
          name: 'Zouk Muted Strum Chawa',
          shortName: 'Muted Strum',
          variationType: 'accentShift',
          probability: 0.25,
          description: 'Tight percussive muted strums with open chord resolution on beat 4.',
          onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.7, 0.9, 1.0, 0.8],
          velocityProfile: [0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.6, 0.8, 0.75, 0.9, 0.95, 0.8]
        }
      ]
    },
    {
      id: 'zouk-french-bass',
      worldId: 'zouk',
      traditionId: 'zouk-love',
      name: 'French Caribbean Synth Bass',
      shortName: 'Synth Bass',
      family: 'Zouk Basslines',
      category: 'bass',
      description: 'Deep analog synth bass pulse delivering the signature rounded low end of 1980s zouk productions.',
      scopes: ['measure'],
      roles: ['bass'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 4, 6, 8, 10, 12, 14],
      difficulty: 2,
      tags: ['synth-bass', 'sub', 'low-end', 'zouk'],
      accentProfile: [1.0, 0.5, 0.8, 0.5, 0.9, 0.5, 0.7, 0.5, 1.0, 0.5, 0.8, 0.5, 0.9, 0.5, 0.8, 0.6],
      velocityProfile: [0.95, 0.55, 0.8, 0.55, 0.9, 0.55, 0.75, 0.55, 0.95, 0.55, 0.8, 0.55, 0.9, 0.55, 0.85, 0.6],
      variants: [
        {
          id: 'zouk-french-bass-v-01',
          parentPatternId: 'zouk-french-bass',
          name: 'French Bass Heavy 16th',
          shortName: 'Heavy 16th',
          variationType: 'dense',
          probability: 0.3,
          description: 'Driving 16th note synth arpeggiation driving the groove forward.',
          onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [1.0, 0.7, 0.85, 0.7, 0.95, 0.7, 0.85, 0.7, 1.0, 0.7, 0.85, 0.7, 0.95, 0.7, 0.85, 0.7],
          velocityProfile: [0.95, 0.7, 0.85, 0.7, 0.9, 0.7, 0.85, 0.7, 0.95, 0.7, 0.85, 0.7, 0.9, 0.7, 0.85, 0.7]
        }
      ]
    },
    {
      id: 'zouk-shaker',
      worldId: 'zouk',
      traditionId: 'zouk-beton',
      name: 'Zouk Shaker Shimmer',
      shortName: 'Shaker',
      family: 'Zouk Percussion',
      category: 'rhythm',
      description: 'Continuous, silky 16th-note shaker pulse creating steady forward momentum.',
      scopes: ['measure'],
      roles: ['percussion', 'hand-percussion'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      difficulty: 1,
      tags: ['shaker', 'percussion', 'pulse', 'zouk'],
      accentProfile: [0.7, 0.9, 0.75, 1.0, 0.7, 0.9, 0.75, 1.0, 0.7, 0.9, 0.75, 1.0, 0.7, 0.9, 0.75, 1.0],
      velocityProfile: [0.7, 0.9, 0.75, 0.95, 0.7, 0.9, 0.75, 0.95, 0.7, 0.9, 0.75, 0.95, 0.7, 0.9, 0.75, 0.95],
      variants: [
        {
          id: 'zouk-shaker-v-01',
          parentPatternId: 'zouk-shaker',
          name: 'Zouk Shaker Accented',
          shortName: 'Accented',
          variationType: 'accentShift',
          probability: 0.3,
          description: 'Shaker with emphasis on the offbeat eighths.',
          onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [0.6, 1.0, 0.6, 0.8, 0.6, 1.0, 0.6, 0.8, 0.6, 1.0, 0.6, 0.8, 0.6, 1.0, 0.6, 0.8],
          velocityProfile: [0.6, 0.95, 0.6, 0.85, 0.6, 0.95, 0.6, 0.85, 0.6, 0.95, 0.6, 0.85, 0.6, 0.95, 0.6, 0.85]
        }
      ]
    },
    {
      id: 'zouk-ti-bwa',
      worldId: 'zouk',
      traditionId: 'zouk-beton',
      name: 'Zouk Ti-Bwa Woodblock Ostinato',
      shortName: 'Ti-Bwa',
      family: 'Zouk Percussion',
      category: 'ostinato',
      description: 'Traditional Antillean bamboo stick / rim pattern providing the unmistakable syncopated rhythmic signature of zouk.',
      scopes: ['measure'],
      roles: ['percussion'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 3, 5, 7, 8, 10, 12, 13, 15],
      difficulty: 3,
      tags: ['ti-bwa', 'woodblock', 'ostinato', 'traditional', 'zouk'],
      accentProfile: [1.0, 0.4, 0.8, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.8, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4],
      velocityProfile: [0.95, 0.4, 0.8, 0.95, 0.4, 0.9, 0.4, 0.95, 0.4, 0.8, 0.95, 0.4, 0.9, 0.4, 0.95, 0.4],
      variants: [
        {
          id: 'zouk-ti-bwa-v-01',
          parentPatternId: 'zouk-ti-bwa',
          name: 'Ti-Bwa Carnival Drive',
          shortName: 'Carnaval Drive',
          variationType: 'dense',
          probability: 0.3,
          description: 'High-energy carnival variation with double stick strikes.',
          onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [1.0, 0.8, 1.0, 0.8, 0.9, 1.0, 0.8, 1.0, 1.0, 0.8, 1.0, 0.8, 0.9, 1.0, 0.8, 1.0],
          velocityProfile: [0.95, 0.8, 0.95, 0.8, 0.9, 0.95, 0.8, 0.95, 0.95, 0.8, 0.95, 0.8, 0.9, 0.95, 0.8, 0.95]
        }
      ]
    },
    {
      id: 'zouk-synth-chords',
      worldId: 'zouk',
      traditionId: 'zouk-love',
      name: 'Zouk DX7 Rhodes & Synth Chords',
      shortName: 'DX7 Chords',
      family: 'Zouk Keys',
      category: 'harmony',
      description: 'Lush, sparkling Yamaha DX7 electric piano layers combined with warm analog string pads.',
      scopes: ['measure'],
      roles: ['piano', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 4, 8, 12],
      difficulty: 2,
      tags: ['dx7', 'rhodes', 'chords', 'lush', 'zouk'],
      accentProfile: [1.0, 0.4, 0.7, 0.4, 0.9, 0.4, 0.7, 0.4, 1.0, 0.4, 0.7, 0.4, 0.9, 0.4, 0.8, 0.5],
      velocityProfile: [0.9, 0.4, 0.7, 0.4, 0.85, 0.4, 0.7, 0.4, 0.9, 0.4, 0.7, 0.4, 0.85, 0.4, 0.8, 0.5],
      variants: [
        {
          id: 'zouk-synth-chords-v-01',
          parentPatternId: 'zouk-synth-chords',
          name: 'Zouk Warm Pad Swell',
          shortName: 'Pad Swell',
          variationType: 'development',
          probability: 0.3,
          description: 'Long sustaining analog synth pad chords providing atmospheric depth.',
          onsetGrid: [0, 8],
          accentProfile: [1.0, 0.3, 0.5, 0.3, 0.8, 0.3, 0.5, 0.3, 1.0, 0.3, 0.5, 0.3, 0.8, 0.3, 0.5, 0.3],
          velocityProfile: [0.85, 0.3, 0.5, 0.3, 0.8, 0.3, 0.5, 0.3, 0.85, 0.3, 0.5, 0.3, 0.8, 0.3, 0.5, 0.3]
        }
      ]
    },
    {
      id: 'zouk-snare',
      worldId: 'zouk',
      traditionId: 'zouk-beton',
      name: 'Zouk Kick & Snare Pocket',
      shortName: 'Pocket Beat',
      family: 'Zouk Drums',
      category: 'rhythm',
      description: 'Solid four-on-the-floor kick drum locked with a crisp snare/rimshot accent on the third beat.',
      scopes: ['measure'],
      roles: ['drums', 'percussion'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 4, 8, 12],
      difficulty: 2,
      tags: ['drums', 'kick', 'snare', 'groove', 'zouk'],
      accentProfile: [1.0, 0.5, 0.7, 0.5, 0.9, 0.5, 0.7, 0.5, 1.0, 0.5, 0.7, 0.5, 0.9, 0.5, 0.8, 0.6],
      velocityProfile: [1.0, 0.5, 0.7, 0.5, 0.9, 0.5, 0.7, 0.5, 1.0, 0.5, 0.7, 0.5, 0.9, 0.5, 0.8, 0.6],
      variants: [
        {
          id: 'zouk-snare-v-01',
          parentPatternId: 'zouk-snare',
          name: 'Zouk Four-on-the-Floor Drive',
          shortName: '4-on-Floor',
          variationType: 'development',
          probability: 0.3,
          description: 'Driving kick on every quarter note with rimshot on 2 and 4.',
          onsetGrid: [0, 4, 8, 12],
          accentProfile: [1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.9, 0.4],
          velocityProfile: [1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.9, 0.4]
        }
      ]
    },
    {
      id: 'zouk-horn-stabs',
      worldId: 'zouk',
      traditionId: 'zouk-beton',
      name: 'Zouk Horn Section Stabs',
      shortName: 'Horn Stabs',
      family: 'Zouk Brass',
      category: 'riff',
      description: 'Punchy brass section stabs (trumpets, saxophones, trombones) providing high-energy celebratory accents.',
      scopes: ['measure'],
      roles: ['brass', 'lead'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [1, 3, 5, 9, 11, 13, 14],
      difficulty: 3,
      tags: ['horns', 'brass', 'stabs', 'energy', 'zouk'],
      accentProfile: [0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.4, 0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.8, 0.4],
      velocityProfile: [0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.4, 0.4, 0.4, 1.0, 0.4, 0.9, 0.4, 1.0, 0.85, 0.4],
      variants: [
        {
          id: 'zouk-horn-stabs-v-01',
          parentPatternId: 'zouk-horn-stabs',
          name: 'Zouk Upbeat Horn Hits',
          shortName: 'Upbeat Hits',
          variationType: 'syncopated',
          probability: 0.3,
          description: 'Crisp syncopated horn accents hitting on the sixteenth upbeats.',
          onsetGrid: [1, 3, 5, 7, 9, 11, 13, 14],
          accentProfile: [0.3, 0.9, 0.3, 1.0, 0.3, 0.9, 0.3, 1.0, 0.3, 0.9, 0.3, 1.0, 0.3, 0.9, 1.0, 0.4],
          velocityProfile: [0.3, 0.9, 0.3, 1.0, 0.3, 0.9, 0.3, 1.0, 0.3, 0.9, 0.3, 1.0, 0.3, 0.9, 1.0, 0.4]
        }
      ]
    },
    {
      id: 'zouk-voice-phrasing',
      worldId: 'zouk',
      traditionId: 'zouk-beton',
      name: 'French Creole Vocal Call',
      shortName: 'Creole Call',
      family: 'Zouk Voice',
      category: 'call-and-response',
      description: 'Antillean Creole vocal hook with call-and-response choir answers ("Chiré!", "Kité yo di!").',
      scopes: ['measure'],
      roles: ['lead', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 4, 6, 8, 10, 12, 14],
      difficulty: 2,
      tags: ['voice', 'vocal', 'call-and-response', 'creole', 'zouk'],
      accentProfile: [1.0, 0.7, 0.9, 0.7, 1.0, 0.7, 0.9, 0.6, 1.0, 0.7, 0.9, 0.7, 1.0, 0.8, 0.9, 0.7],
      velocityProfile: [0.95, 0.7, 0.9, 0.7, 0.95, 0.7, 0.9, 0.65, 0.95, 0.7, 0.9, 0.7, 1.0, 0.8, 0.9, 0.75],
      variants: [
        {
          id: 'zouk-voice-phrasing-v-voice-alt',
          parentPatternId: 'zouk-voice-phrasing',
          name: 'Creole Vocal Response',
          shortName: 'Response',
          variationType: 'cadence',
          probability: 0.3,
          description: 'Choir response answering the lead singer on the second half of the phrase.',
          onsetGrid: [8, 10, 12, 14],
          accentProfile: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 1.0, 0.8, 0.9, 0.8, 1.0, 0.9, 1.0, 0.7],
          velocityProfile: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.95, 0.8, 0.9, 0.8, 1.0, 0.9, 1.0, 0.75]
        }
      ]
    }
  ],
  techniques: ['chawa muted strumming', 'ti-bwa rim tapping', 'gated snare punch', 'DX7 pitch-bend pad swells'],
  forms: ['verse-chorus-ambiance', 'intro-groove-break-coda'],
  relationships: [
    'ti-bwa ostinato ↔ four-on-the-floor kick lock',
    'chawa guitar skank ↔ synth bass 16th push counterpoint'
  ],
  transformations: ['ti-bwa carnaval drive expansion', 'sub-bass push density shift'],
  songBehaviors: [
    'steady four-on-the-floor momentum driven by ti-bwa woodblock and shaker',
    'call-and-response vocal exchanges between lead singer and choir',
    'high-energy horn stabs signaling chorus and ambiance sections'
  ],
  instrumentIdeas: {
    guitar: ['Fender Stratocaster with chorused clean tone for chawa upstroke chops'],
    bass: ['Music Man StingRay or Minimoog synth bass delivering punchy low end'],
    percussion: ['Antillean ti-bwa bamboo woodblock and chacha metal shaker']
  }
};
