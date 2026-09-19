import { GenreWorld } from '../../types';

export const TANGO_WORLD: GenreWorld = {
  id: 'tango',
  name: 'Tango',
  family: 'Río de la Plata',
  color: '#c87561',
  level: 'world',
  description: "A deep architectural Tango lens: marcato en 2 & 4, yumba, síncopa a tierra, arrastres, bordoneos, cuts (cortes), and Piazzolla’s 3+3+2 additive frameworks.",
  traditions: [
    {
      id: 'tango-guardia-vieja',
      worldId: 'tango',
      name: 'Guardia Vieja (1890–1920)',
      origin: 'Buenos Aires & Montevideo',
      era: '1890–1920',
      description: 'Habanera-derived syncopation, lively tempo, guitar, flute, and early bandoneón interplay.',
      characteristicInstruments: [
        'guitar',
        'flute',
        'bandoneon',
        'violin'
      ],
      preferredMeters: ['2/4', '4/4'],
      tempoRange: [100, 130],
      keySubstyles: [
        'Tango Criollo',
        'Milonga Primitiva',
        'Habanera'
      ],
      coreConcepts: [
        'habanera pulse',
        'bordoneo',
        'rasguido criollo',
        'pizzicato'
      ],
      rhythmicGrammar: [
        '3+3+2 habanera',
        'straight eighths with grace notes'
      ],
      danceTags: [
        'social-partner',
        'listening'
      ],
      tuningSystem: '12-tet',
      signatureCell: 'Habanera syncopation [3+3+2] with acoustic guitar bordoneo',
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: 1,
        microtimingFeel: 'atrasado',
        humanizeJitterMs: 12
      },
      sectionProgressions: {
        intro: ['i', 'V7', 'i', 'V7'],
        verse: ['i', 'iv', 'V7', 'i'],
        chorus: ['III', 'VII7', 'III', 'V7'],
        coda: ['i', 'V7', 'i', 'i']
      }
    },
    {
      id: 'tango-epoca-oro',
      worldId: 'tango',
      name: 'Época de Oro / Golden Age (1935–1955)',
      origin: 'Buenos Aires',
      era: '1935–1955',
      description: 'The definitive orquesta típica sound: marcato en 4, marcato en 2, yumba, síncopas, arrastres, and dramatic cortes.',
      characteristicInstruments: [
        'piano',
        'bandoneon',
        'strings',
        'bass'
      ],
      preferredMeters: ['4/4'],
      tempoRange: [110, 135],
      keySubstyles: [
        'Tango Rítmico (D’Arienzo)',
        'Tango Melódico (Troilo / Di Sarli)',
        'Tango Dramático (Pugliese)',
        'Tango Virtuoso (Salgán)'
      ],
      coreConcepts: [
        'marcato en 4',
        'marcato en 2',
        'yumba',
        'síncopa',
        'arrastre',
        'corte',
        'chiche'
      ],
      rhythmicGrammar: [
        'accent on 1 and 3 (marcato 2)',
        'heavy accents on 1, 2, 3, 4 with staccato',
        'pesado on 1 and 3 with arrastre lead-in'
      ],
      danceTags: [
        'social-partner',
        'listening'
      ],
      tuningSystem: '12-tet',
      signatureCell: 'Marcato en 4 with heavy Pesado on beats 1 & 3 and chromatic arrastre',
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: 0,
        microtimingFeel: 'rubato'
      },
      sectionProgressions: {
        intro: ['i', 'V7', 'i', 'V7'],
        verse: ['i', 'iv6', 'V7', 'i'],
        chorus: ['III', 'VII7', 'III', 'V7'],
        solo: ['i', 'iv', 'II7', 'V7'],
        coda: ['i', 'V7', 'i', 'i']
      }
    },
    {
      id: 'tango-milonga',
      worldId: 'tango',
      name: 'Milonga (Campera & Ciudadana)',
      origin: 'Río de la Plata',
      description: 'Fast, syncopated 2/4 rhythm featuring the iconic habanera-milonga pattern and crisp guitar bordoneos.',
      characteristicInstruments: [
        'guitar',
        'bass',
        'bandoneon',
        'percussion'
      ],
      preferredMeters: ['2/4', '4/4'],
      tempoRange: [90, 120],
      keySubstyles: [
        'Milonga Ciudadana',
        'Milonga Campera',
        'Milonga con Candombe'
      ],
      coreConcepts: [
        'habanera cell',
        'contratiempo',
        'bordoneo',
        'guitar rasgueo'
      ],
      rhythmicGrammar: [
        '[x . . x . . x .]',
        'dotted eighth + sixteenth + two eighths'
      ],
      danceTags: [
        'social-partner',
        'festival-fusion'
      ],
      tuningSystem: '12-tet',
      signatureCell: 'Milonga habanera cell [0, 3, 6, 8, 12] with guitar bordoneo',
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: -1,
        microtimingFeel: 'pushed',
        humanizeJitterMs: 6
      },
      sectionProgressions: {
        intro: ['i', 'V7', 'i', 'V7'],
        verse: ['i', 'V7', 'i', 'V7'],
        chorus: ['I7', 'iv', 'V7', 'i'],
        coda: ['i', 'V7', 'i', 'i']
      }
    },
    {
      id: 'tango-nuevo',
      worldId: 'tango',
      name: 'Tango Nuevo & Contemporary (Piazzolla & Beyond)',
      origin: 'Buenos Aires / Global',
      era: '1960–Present',
      description: 'Piazzolla-style 3+3+2 asymmetric additive rhythms, fugal counterpoint, jazz harmonies, and extended techniques (tambor, golpe, chiche).',
      characteristicInstruments: [
        'bandoneon',
        'electric-guitar',
        'piano',
        'bass',
        'strings'
      ],
      preferredMeters: ['4/4', '3+3+2', '6/8'],
      tempoRange: [95, 145],
      keySubstyles: [
        'Nuevo Tango Quintet',
        'Fuga Criolla',
        'Tango Contemporáneo'
      ],
      coreConcepts: [
        '3+3+2 grouping',
        'extended arrastre',
        'chiche',
        'slap bass',
        'fugal counterpoint'
      ],
      rhythmicGrammar: [
        '3+3+2 16th groupings: [0, 3, 6, 8, 11, 14] or [0, 6, 12]'
      ],
      danceTags: [
        'listening',
        'blues-fusion-compatible',
        'social-partner'
      ],
      tuningSystem: '12-tet',
      signatureCell: 'Piazzolla 3+3+2 additive syncopation [0, 3, 6, 8, 11, 14] with jazz chord extensions',
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: -1,
        microtimingFeel: 'pushed',
        humanizeJitterMs: 8
      },
      sectionProgressions: {
        intro: ['i9', 'viø7', 'VImaj7', 'V7b9'],
        verse: ['i9', 'iv7', 'VII13', 'IIImaj7'],
        chorus: ['VImaj7', 'iiø7', 'V7b9', 'i9'],
        solo: ['i9', 'iv9', 'iiø7', 'V7alt'],
        coda: ['i9', 'i9', 'i9', 'i9']
      }
    }
  ],
  substyles: [
    'Guardia Vieja',
    'Guardia Nueva',
    'Época de Oro (Golden Age)',
    'Tango Rítmico (D’Arienzo)',
    'Tango Melódico (Troilo / Di Sarli)',
    'Tango Dramático (Pugliese)',
    'Milonga Ciudadana',
    'Milonga Campera',
    'Vals Criollo',
    'Nuevo Tango (Piazzolla)',
    'Contemporary / Tango Electrónico'
  ],
  artists: [
    'Carlos Gardel',
    'Juan D’Arienzo',
    'Aníbal Troilo',
    'Osvaldo Pugliese',
    'Carlos Di Sarli',
    'Horacio Salgán',
    'Astor Piazzolla',
    'Eduardo Rovira',
    'Dino Saluzzi'
  ],
  concepts: [
    'marcato en 4',
    'marcato en 2',
    'yumba',
    'síncopa a tierra',
    'arrastre',
    'anticipación',
    'bordoneo',
    'corte',
    'chiche',
    'fraseo',
    'rubato',
    '3+3+2 grouping',
    'pesado vs liviano'
  ],
  roles: {
    bass: [
      'marcato en 2',
      'marcato en 4',
      'arrastre',
      'bass division',
      'bordoneo',
      'slap pizzicato'
    ],
    piano: [
      'marcato',
      'yumba',
      'síncopa',
      'campanitas',
      'arrastre',
      'percussive chords'
    ],
    harmony: [
      'marcato accompaniment',
      'síncopa',
      'arpeggios',
      'bordoneos'
    ],
    melody: [
      'fraseo',
      'rubato',
      'variation',
      'dialogue',
      'counter-phrase'
    ],
    lead: [
      'bandoneón variation',
      'violin solo',
      'expressive fraseo'
    ],
    percussion: [
      'chiche string hits',
      'piano wood knocking',
      'pandeiro/candombe accents'
    ]
  },
  patterns: [
    {
      id: 'tango-marcato-4',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Marcato en 4 (Orquesta Típica)',
      shortName: 'Marcato 4',
      family: 'Marcato Accompaniment',
      category: 'ostinato',
      description: 'Strict four-beat staccato accompaniment with pesado accents on beats 1 and 3, driving dancers.',
      scopes: ['measure'],
      roles: ['bass', 'harmony', 'piano'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      difficulty: 2,
      tags: ['pulse', 'tango', 'marcato', 'staccato', 'dance'],
      accentProfile: [1.0, 0.4, 0.4, 0.4, 0.8, 0.4, 0.4, 0.4, 1.0, 0.4, 0.4, 0.4, 0.8, 0.4, 0.4, 0.4],
      velocityProfile: [1.0, 0.3, 0.3, 0.3, 0.85, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3, 0.85, 0.3, 0.3, 0.3],
      variants: [
        {
          id: 'tango-m4-staccato-crisp',
          parentPatternId: 'tango-marcato-4',
          name: 'Crisp Staccato Marcato en 4',
          shortName: 'Crisp M4',
          variationType: 'accentShift',
          probability: 0.3,
          description: 'Dry, percussive staccatissimo execution characteristic of D’Arienzo.',
          onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [1.0, 0.3, 0.3, 0.3, 0.9, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3, 0.9, 0.3, 0.3, 0.3],
          velocityProfile: [0.95, 0.25, 0.25, 0.25, 0.85, 0.25, 0.25, 0.25, 0.95, 0.25, 0.25, 0.25, 0.85, 0.25, 0.25, 0.25]
        },
        {
          id: 'tango-marcato-4-variant-yumba-osvaldo-pugliese',
          parentPatternId: 'tango-marcato-4',
          name: 'Yumba (Osvaldo Pugliese)',
          shortName: 'Yumba',
          variationType: 'development',
          probability: 0.25,
          description: 'Pugliese’s iconic heavy downbeat "Yum" and airy lifted offbeat "ba".',
          onsetGrid: [0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 14, 15],
          accentProfile: [1.0, 0.2, 0.3, 0.2, 0.6, 0.2, 0.3, 0.2, 1.0, 0.2, 0.3, 0.2, 0.6, 0.2, 0.3, 0.2],
          velocityProfile: [1.0, 0.2, 0.3, 0.2, 0.6, 0.2, 0.3, 0.2, 1.0, 0.2, 0.3, 0.2, 0.6, 0.2, 0.3, 0.2]
        }
      ]
    },
    {
      id: 'tango-marcato-2',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Marcato en 2 (Troilo & Di Sarli)',
      shortName: 'Marcato 2',
      family: 'Marcato Accompaniment',
      category: 'ostinato',
      description: 'Lyrical two-beat accompaniment emphasizing beats 1 and 3 for melodic breathing space.',
      scopes: ['measure'],
      roles: ['bass', 'harmony', 'piano'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 4, 8, 12],
      difficulty: 2,
      tags: ['pulse', 'tango', 'marcato', 'lyrical'],
      accentProfile: [1.0, 0.3, 0.3, 0.3, 0.4, 0.3, 0.3, 0.3, 0.9, 0.3, 0.3, 0.3, 0.4, 0.3, 0.3, 0.3],
      velocityProfile: [0.95, 0.25, 0.25, 0.25, 0.45, 0.25, 0.25, 0.25, 0.9, 0.25, 0.25, 0.25, 0.45, 0.25, 0.25, 0.25],
      variants: [
        {
          id: 'tango-m2-arrastre-lead',
          parentPatternId: 'tango-marcato-2',
          name: 'Marcato en 2 with Arrastre Lead',
          shortName: 'Arrastre Lead',
          variationType: 'anticipated',
          probability: 0.3,
          description: 'Chromatic slide pickup into the heavy downbeat on 1.',
          onsetGrid: [0, 4, 8, 12, 14, 15],
          accentProfile: [1.0, 0.3, 0.3, 0.3, 0.4, 0.3, 0.3, 0.3, 0.9, 0.3, 0.3, 0.3, 0.4, 0.3, 0.7, 0.8],
          velocityProfile: [1.0, 0.25, 0.25, 0.25, 0.45, 0.25, 0.25, 0.25, 0.9, 0.25, 0.25, 0.25, 0.45, 0.3, 0.7, 0.85]
        }
      ]
    },
    {
      id: 'tango-sincopa',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Síncopa a Tierra (Orquesta Típica)',
      shortName: 'Síncopa',
      family: 'Tango Syncopation',
      category: 'rhythm',
      description: 'The quintessential tango syncopation accenting beat 1, anticipating beat 3, and landing sharply on 4.',
      scopes: ['measure'],
      roles: ['piano', 'bandoneon', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 4, 6, 12],
      difficulty: 3,
      tags: ['sincopa', 'syncopation', 'tango', 'accent'],
      accentProfile: [1.0, 0.3, 0.3, 0.3, 0.4, 0.3, 0.9, 0.3, 0.3, 0.3, 0.4, 0.3, 1.0, 0.3, 0.3, 0.3],
      velocityProfile: [1.0, 0.25, 0.25, 0.25, 0.4, 0.25, 0.95, 0.25, 0.25, 0.25, 0.4, 0.25, 1.0, 0.25, 0.25, 0.25],
      variants: [
        {
          id: 'tango-sincopa-volcada',
          parentPatternId: 'tango-sincopa',
          name: 'Síncopa Volcada (Falling Syncopation)',
          shortName: 'Volcada',
          variationType: 'syncopated',
          probability: 0.3,
          description: 'Dramatic falling syncopation dropping onto beat 3.',
          onsetGrid: [0, 6, 8, 14],
          accentProfile: [1.0, 0.3, 0.3, 0.3, 0.3, 0.3, 1.0, 0.3, 0.9, 0.3, 0.3, 0.3, 0.3, 0.3, 0.8, 0.3],
          velocityProfile: [0.95, 0.25, 0.25, 0.25, 0.25, 0.25, 1.0, 0.25, 0.9, 0.25, 0.25, 0.25, 0.25, 0.25, 0.8, 0.25]
        }
      ]
    },
    {
      id: 'tango-arrastre',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Arrastre (Bass & Bandoneón Pickup)',
      shortName: 'Arrastre',
      family: 'Tango Ornaments',
      category: 'ornament',
      description: 'Swept glissando drag anticipating the downbeat, imparting heavy dramatic gravity.',
      scopes: ['measure'],
      roles: ['bass', 'lead'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [12, 13, 14, 15],
      difficulty: 3,
      tags: ['arrastre', 'slide', 'pickup', 'tango', 'dramatic'],
      accentProfile: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.6, 0.8, 0.9, 1.0],
      velocityProfile: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.6, 0.75, 0.9, 1.0],
      variants: [
        {
          id: 'tango-arrastre-extended',
          parentPatternId: 'tango-arrastre',
          name: 'Extended Chromatic Arrastre',
          shortName: 'Chromatic',
          variationType: 'ornamented',
          probability: 0.25,
          description: 'Long four-step chromatic ascent into the tonic.',
          onsetGrid: [8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1.0, 0.3],
          velocityProfile: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1.0, 0.3]
        }
      ]
    },
    {
      id: 'tango-bordoneo',
      worldId: 'tango',
      traditionId: 'tango-guardia-vieja',
      name: 'Bordoneo Criollo (Guitar Bassline)',
      shortName: 'Bordoneo',
      family: 'Tango Guitar',
      category: 'bass',
      description: 'Lively acoustic guitar bassline melodic run ("bordoneo") rooted in traditional Argentine gaucho folk.',
      scopes: ['measure'],
      roles: ['bass', 'guitar'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 4, 6, 8, 10, 12, 14],
      difficulty: 2,
      tags: ['guitar', 'bordoneo', 'criollo', 'folk', 'tango'],
      accentProfile: [1.0, 0.6, 0.8, 0.6, 0.9, 0.6, 0.8, 0.6, 1.0, 0.6, 0.8, 0.6, 0.9, 0.7, 0.8, 0.6],
      velocityProfile: [0.95, 0.6, 0.8, 0.6, 0.9, 0.6, 0.8, 0.6, 0.95, 0.6, 0.8, 0.6, 0.9, 0.7, 0.8, 0.6],
      variants: [
        {
          id: 'tango-bordoneo-milonga',
          parentPatternId: 'tango-bordoneo',
          name: 'Milonga Bordoneo Cadence',
          shortName: 'Milonga Run',
          variationType: 'cadence',
          probability: 0.3,
          description: 'Habanera rhythm thumb strokes in the lower register.',
          onsetGrid: [0, 3, 6, 8, 11, 14],
          accentProfile: [1.0, 0.4, 0.4, 0.9, 0.4, 0.4, 0.8, 0.4, 1.0, 0.4, 0.4, 0.9, 0.4, 0.4, 0.8, 0.4],
          velocityProfile: [0.95, 0.4, 0.4, 0.9, 0.4, 0.4, 0.85, 0.4, 0.95, 0.4, 0.4, 0.9, 0.4, 0.4, 0.85, 0.4]
        }
      ]
    },
    {
      id: 'tango-332-piazzolla',
      worldId: 'tango',
      traditionId: 'tango-nuevo',
      name: 'Piazzolla 3+3+2 Additive Framework',
      shortName: '3+3+2 Nuevo',
      family: 'Tango Nuevo Rhythms',
      category: 'groove',
      description: 'Astor Piazzolla’s legendary asymmetrical 3+3+2 eighth-note pulse driving modern Nuevo Tango.',
      scopes: ['measure'],
      roles: ['rhythm-guitar', 'piano', 'lead'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 3, 6, 8, 11, 14],
      difficulty: 3,
      tags: ['piazzolla', 'nuevo', '3+3+2', 'asymmetrical', 'tango'],
      accentProfile: [1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 0.9, 0.3, 1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 0.9, 0.3],
      velocityProfile: [1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 0.9, 0.3, 1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 0.9, 0.3],
      variants: [
        {
          id: 'tango-332-dense-16th',
          parentPatternId: 'tango-332-piazzolla',
          name: 'Piazzolla Dense 16th Counterpoint',
          shortName: 'Dense 16th',
          variationType: 'dense',
          probability: 0.25,
          description: 'Continuous 16th note arpeggios highlighting the 3+3+2 metric anchors.',
          onsetGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          accentProfile: [1.0, 0.6, 0.6, 0.9, 0.6, 0.6, 0.9, 0.6, 1.0, 0.6, 0.6, 0.9, 0.6, 0.6, 0.9, 0.6],
          velocityProfile: [0.95, 0.6, 0.6, 0.9, 0.6, 0.6, 0.85, 0.6, 0.95, 0.6, 0.6, 0.9, 0.6, 0.6, 0.85, 0.6]
        }
      ]
    },
    {
      id: 'tango-fraseo-bandoneon',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Bandoneón Fraseo & Rubato',
      shortName: 'Fraseo',
      family: 'Tango Bandoneón',
      category: 'lead',
      description: 'Soulful, elastic rubato phrasing ("fraseo") with breath-like bellow dynamic swells.',
      scopes: ['measure'],
      roles: ['lead', 'bandoneon'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 4, 6, 8, 10, 12, 14],
      difficulty: 3,
      tags: ['bandoneon', 'fraseo', 'rubato', 'bellows', 'tango'],
      accentProfile: [1.0, 0.7, 0.8, 0.6, 0.9, 0.7, 0.8, 0.6, 1.0, 0.8, 0.9, 0.7, 0.9, 0.8, 0.7, 0.5],
      velocityProfile: [0.95, 0.7, 0.8, 0.65, 0.9, 0.7, 0.8, 0.65, 0.95, 0.8, 0.9, 0.7, 0.9, 0.8, 0.7, 0.5],
      variants: [
        {
          id: 'tango-fraseo-dramatic-cut',
          parentPatternId: 'tango-fraseo-bandoneon',
          name: 'Dramatic Corte & Fraseo',
          shortName: 'Corte',
          variationType: 'cadence',
          probability: 0.3,
          description: 'Abrupt cadential stop ("corte") followed by a suspended breath.',
          onsetGrid: [0, 2, 4, 6],
          accentProfile: [1.0, 0.7, 0.8, 0.6, 0.9, 0.7, 1.0, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
          velocityProfile: [0.95, 0.7, 0.8, 0.65, 0.9, 0.7, 1.0, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
        }
      ]
    },
    {
      id: 'tango-bandoneon-chords',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Bandoneón Marcato Chords',
      shortName: 'Bando Chords',
      family: 'Tango Bandoneón',
      category: 'harmony',
      description: 'Tight, staccato four-voice harmonic stabs on the bandoneón keyboard supporting the strings.',
      scopes: ['measure'],
      roles: ['harmony', 'bandoneon'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 4, 8, 12],
      difficulty: 2,
      tags: ['bandoneon', 'chords', 'marcato', 'harmony', 'tango'],
      accentProfile: [1.0, 0.3, 0.3, 0.3, 0.8, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3, 0.8, 0.3, 0.3, 0.3],
      velocityProfile: [0.95, 0.25, 0.25, 0.25, 0.8, 0.25, 0.25, 0.25, 0.95, 0.25, 0.25, 0.25, 0.8, 0.25, 0.25, 0.25],
      variants: [
        {
          id: 'tango-bandoneon-chords-v-01',
          parentPatternId: 'tango-bandoneon-chords',
          name: 'Staccato Bellows Jab',
          shortName: 'Bellows Jab',
          variationType: 'accentShift',
          probability: 0.3,
          description: 'Sharp biting accents on the offbeat eighths.',
          onsetGrid: [2, 6, 10, 14],
          accentProfile: [0.3, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3],
          velocityProfile: [0.25, 0.25, 0.25, 0.25, 0.95, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.95, 0.25, 0.25, 0.25]
        }
      ]
    },
    {
      id: 'tango-violin-melody',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Violin Lyrical Canto & Strappata',
      shortName: 'Violin Canto',
      family: 'Tango Strings',
      category: 'lead',
      description: 'Lyrical violin melody alternating between sweet vibrato canto and sharp rhythmic strappata bow attacks.',
      scopes: ['measure'],
      roles: ['lead', 'violin'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 4, 6, 8, 10, 12, 14],
      difficulty: 3,
      tags: ['violin', 'strings', 'melody', 'strappata', 'tango'],
      accentProfile: [1.0, 0.6, 0.8, 0.6, 0.9, 0.6, 0.8, 0.6, 1.0, 0.7, 0.9, 0.7, 1.0, 0.8, 0.7, 0.5],
      velocityProfile: [0.95, 0.6, 0.8, 0.6, 0.9, 0.6, 0.8, 0.6, 0.95, 0.7, 0.9, 0.7, 1.0, 0.8, 0.7, 0.5],
      variants: [
        {
          id: 'tango-violin-melody-v-01-safe',
          parentPatternId: 'tango-violin-melody',
          name: 'Violin Strappata Accents',
          shortName: 'Strappata',
          variationType: 'instrumentSpecific',
          probability: 0.3,
          description: 'Percussive chordal downbows ("strappata") ripping across three strings.',
          onsetGrid: [0, 4, 8, 12],
          accentProfile: [1.0, 0.3, 0.3, 0.3, 0.9, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3, 0.9, 0.3, 0.3, 0.3],
          velocityProfile: [1.0, 0.25, 0.25, 0.25, 0.9, 0.25, 0.25, 0.25, 1.0, 0.25, 0.25, 0.25, 0.9, 0.25, 0.25, 0.25]
        }
      ]
    },
    {
      id: 'tango-piano-chumba',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Piano Chumba-Chumba & Campanitas',
      shortName: 'Piano Chumba',
      family: 'Tango Piano',
      category: 'harmony',
      description: 'Classic tango piano comping with low octave bass on 1 & 3 and crisp syncopated campanitas in the upper register.',
      scopes: ['measure'],
      roles: ['piano', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 4, 6, 8, 10, 12, 14],
      difficulty: 2,
      tags: ['piano', 'chumba', 'campanitas', 'syncopated', 'tango'],
      accentProfile: [1.0, 0.3, 0.8, 0.3, 0.9, 0.3, 0.8, 0.3, 1.0, 0.3, 0.8, 0.3, 0.9, 0.3, 0.8, 0.3],
      velocityProfile: [0.95, 0.25, 0.8, 0.25, 0.9, 0.25, 0.8, 0.25, 0.95, 0.25, 0.8, 0.25, 0.9, 0.25, 0.8, 0.25],
      variants: [
        {
          id: 'tango-piano-chumba-v-01',
          parentPatternId: 'tango-piano-chumba',
          name: 'Piano Campanitas Bell Fill',
          shortName: 'Campanitas',
          variationType: 'ornamented',
          probability: 0.3,
          description: 'High delicate bell notes floating above the tango rhythm.',
          onsetGrid: [8, 10, 12, 14],
          accentProfile: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1.0, 0.8, 0.9, 0.8, 1.0, 0.9, 1.0, 0.4],
          velocityProfile: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.9, 0.8, 0.85, 0.8, 0.95, 0.85, 0.95, 0.4]
        }
      ]
    },
    {
      id: 'tango-bass-pizzicato',
      worldId: 'tango',
      traditionId: 'tango-epoca-oro',
      name: 'Upright Bass Pizzicato & Marcato',
      shortName: 'Bass Pizz',
      family: 'Tango Bass',
      category: 'bass',
      description: 'Acoustic upright bass marcato heartbeat anchoring the ensemble with deep, dry pizzicato and occasional arco cuts.',
      scopes: ['measure'],
      roles: ['bass'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 4, 8, 12],
      difficulty: 2,
      tags: ['bass', 'upright-bass', 'pizzicato', 'marcato', 'tango'],
      accentProfile: [1.0, 0.3, 0.3, 0.3, 0.8, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3, 0.8, 0.3, 0.3, 0.3],
      velocityProfile: [1.0, 0.25, 0.25, 0.25, 0.85, 0.25, 0.25, 0.25, 1.0, 0.25, 0.25, 0.25, 0.85, 0.25, 0.25, 0.25],
      variants: [
        {
          id: 'tango-bass-pizzicato-v-01',
          parentPatternId: 'tango-bass-pizzicato',
          name: 'Bass Bartók Snap Pizzicato',
          shortName: 'Snap Pizz',
          variationType: 'accentShift',
          probability: 0.3,
          description: 'String snapped against the fingerboard producing a sharp wooden pop.',
          onsetGrid: [0, 4, 8, 12],
          accentProfile: [1.0, 0.3, 0.3, 0.3, 0.4, 0.3, 0.3, 0.3, 1.0, 0.3, 0.3, 0.3, 0.4, 0.3, 0.3, 0.3],
          velocityProfile: [1.0, 0.2, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 1.0, 0.2, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2]
        }
      ]
    },
    {
      id: 'tango-milonga-habanera-bass',
      worldId: 'tango',
      traditionId: 'tango-milonga',
      name: 'Milonga Habanera Bass',
      shortName: 'Habanera Bass',
      family: 'Milonga Rhythms',
      category: 'bass',
      description: 'Classic syncopated habanera-milonga bass line driving fast 2/4 dancing.',
      scopes: ['measure'],
      roles: ['bass'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 3, 6, 8, 11, 14],
      difficulty: 2,
      tags: ['milonga', 'habanera', 'bass', 'syncopated', 'tango'],
      accentProfile: [1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 0.8, 0.3, 1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 0.8, 0.3],
      velocityProfile: [0.95, 0.25, 0.25, 0.9, 0.25, 0.25, 0.85, 0.25, 0.95, 0.25, 0.25, 0.9, 0.25, 0.25, 0.85, 0.25],
      variants: [
        {
          id: 'tango-milonga-habanera-bass-v1',
          parentPatternId: 'tango-milonga-habanera-bass',
          name: 'Milonga Bass Contratiempo',
          shortName: 'Contratiempo',
          variationType: 'syncopated',
          probability: 0.3,
          description: 'Stronger offbeat accentuation pushing the milonga forward.',
          onsetGrid: [0, 3, 6, 8, 11, 14],
          accentProfile: [0.8, 0.3, 0.3, 1.0, 0.3, 0.3, 0.9, 0.3, 0.8, 0.3, 0.3, 1.0, 0.3, 0.3, 0.9, 0.3],
          velocityProfile: [0.8, 0.25, 0.25, 1.0, 0.25, 0.25, 0.9, 0.25, 0.8, 0.25, 0.25, 1.0, 0.25, 0.25, 0.9, 0.25]
        }
      ]
    },
    {
      id: 'tango-milonga-bordoneo',
      worldId: 'tango',
      traditionId: 'tango-milonga',
      name: 'Milonga Bordoneo Guitar',
      shortName: 'Milonga Guitar',
      family: 'Milonga Guitar',
      category: 'rhythm',
      description: 'Lively criollo guitar milonga accompaniment blending bass bordoneos with light treble strums.',
      scopes: ['measure'],
      roles: ['rhythm-guitar', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 3, 6, 8, 11, 14],
      difficulty: 2,
      tags: ['milonga', 'guitar', 'bordoneo', 'rasgueo', 'tango'],
      accentProfile: [1.0, 0.5, 0.5, 0.9, 0.5, 0.5, 0.8, 0.5, 1.0, 0.5, 0.5, 0.9, 0.5, 0.5, 0.8, 0.5],
      velocityProfile: [0.95, 0.5, 0.5, 0.9, 0.5, 0.5, 0.85, 0.5, 0.95, 0.5, 0.5, 0.9, 0.5, 0.5, 0.85, 0.5],
      variants: []
    },
    {
      id: 'tango-milonga-bandoneon-corte',
      worldId: 'tango',
      traditionId: 'tango-milonga',
      name: 'Milonga Bandoneón Corte',
      shortName: 'Milonga Corte',
      family: 'Milonga Bandoneón',
      category: 'riff',
      description: 'Sharp staccato bandoneón chords with sudden cuts highlighting the dancing steps.',
      scopes: ['measure'],
      roles: ['lead', 'bandoneon', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 3, 6, 8, 11, 14],
      difficulty: 3,
      tags: ['milonga', 'bandoneon', 'corte', 'staccato', 'tango'],
      accentProfile: [1.0, 0.4, 0.4, 0.9, 0.4, 0.4, 1.0, 0.3, 1.0, 0.4, 0.4, 0.9, 0.4, 0.4, 1.0, 0.3],
      velocityProfile: [1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 1.0, 0.3, 1.0, 0.3, 0.3, 0.9, 0.3, 0.3, 1.0, 0.3],
      variants: []
    },
    {
      id: 'tango-milonga-candombe-pulse',
      worldId: 'tango',
      traditionId: 'tango-milonga',
      name: 'Milonga Candombe Pulse',
      shortName: 'Candombe Pulse',
      family: 'Milonga Percussion',
      category: 'ostinato',
      description: 'Afro-Uruguayan candombe drum pulse (chico, piano, repique) driving Milonga con Candombe.',
      scopes: ['measure'],
      roles: ['percussion', 'hand-percussion'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 2, 3, 6, 8, 10, 12, 14],
      difficulty: 2,
      tags: ['candombe', 'milonga', 'percussion', 'afro-uruguayan', 'tango'],
      accentProfile: [1.0, 0.4, 0.7, 1.0, 0.4, 0.8, 0.4, 1.0, 0.4, 0.7, 1.0, 0.4, 0.8, 0.4, 1.0, 0.4],
      velocityProfile: [0.95, 0.4, 0.7, 0.95, 0.4, 0.8, 0.4, 0.95, 0.4, 0.7, 0.95, 0.4, 0.8, 0.4, 0.95, 0.4],
      variants: []
    },
    {
      id: 'tango-nuevo-arrastre-groove',
      worldId: 'tango',
      traditionId: 'tango-nuevo',
      name: 'Tango Nuevo Arrastre Groove',
      shortName: 'Nuevo Groove',
      family: 'Tango Nuevo',
      category: 'ostinato',
      description: 'Heavy, slow-burning Piazzolla groove featuring chromatic bass slides and electric guitar jazz chords.',
      scopes: ['measure'],
      roles: ['rhythm-guitar', 'bass', 'harmony'],
      meter: '4/4',
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [0, 4, 8, 12],
      difficulty: 3,
      tags: ['nuevo', 'piazzolla', 'groove', 'guitar', 'tango'],
      accentProfile: [1.0, 0.4, 0.7, 0.4, 0.9, 0.4, 0.7, 0.4, 1.0, 0.4, 0.7, 0.4, 0.9, 0.4, 0.8, 0.6],
      velocityProfile: [0.95, 0.4, 0.7, 0.4, 0.9, 0.4, 0.7, 0.4, 0.95, 0.4, 0.7, 0.4, 0.9, 0.4, 0.8, 0.6],
      variants: []
    }
  ],
  techniques: ['arrastre', 'chicharra', 'choke (corte)', 'yumba accenting', 'strappato'],
  forms: ['binary A-B tango form', 'ternary A-B-A', 'milonga campera', 'rondo (Piazzolla style)'],
  relationships: [
    'bandoneón ↔ violin counterpoint',
    'piano yumba ↔ bass arrastre low-end lock'
  ],
  transformations: ['rubato acceleration', 'staccato crispness', 'arrastre drag expansion'],
  songBehaviors: [
    'dramatic dynamic shifts from pianissimo cantabile to fortissimo marcato',
    'sudden cortes (stops) at section boundaries',
    'expressive rubato phrasing leading into sharp rhythmic resolution'
  ],
  instrumentIdeas: {
    bandoneon: ['A A Alfred Arnold bandoneón with dual-voice bellows expressive control'],
    piano: ['Grand piano playing heavy low-register octave yumba accents'],
    violin: ['Classical violin utilizing percussive chicharra bowings behind the bridge']
  }
};
