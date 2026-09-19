import { GenreWorld } from '../../types';

export const FLAMENCO_WORLD: GenreWorld = {
  "id": "flamenco",
  "name": "Flamenco",
  "family": "Andalusia / Iberian",
  "color": "#d9914e",
  "level": "world",
  "description": "Deep Flamenco compás architectures: Soleá and Bulerías 12-beat cycles, Tangos de Triana binary pulses, alzapúa thumb sweeps, abanico fan strums, picado runs, and interlocking palmas/cajón.",
  "traditions": [
    {
      "id": "flamenco-solea",
      "worldId": "flamenco",
      "name": "Soleá & Cantiñas (12-Beat Compás)",
      "origin": "Andalusia (Seville, Cádiz, Jerez)",
      "description": "The mother of cante jondo: deep, slow 12-beat compás accented on [12, 3, 6, 8, 10].",
      "characteristicInstruments": [
        "guitar",
        "voice",
        "percussion"
      ],
      "preferredMeters": [
        "12/8",
        "3/4"
      ],
      "tempoRange": [
        70,
        95
      ],
      "keySubstyles": [
        "Soleá por Bulerías",
        "Alegrías de Cádiz",
        "Caracoles",
        "Mirabrás",
        "Caña y Polo"
      ],
      "coreConcepts": [
        "12-beat compás",
        "falseta",
        "llamada",
        "letra",
        "cierre",
        "remate",
        "palmas sordas"
      ],
      "rhythmicGrammar": [
        "compás accents on: [12] 1 2 [3] 4 5 [6] 7 [8] 9 [10] 11"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "12-beat compás accented on [12, 3, 6, 8, 10] with Andalusian cadence",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E"
        ],
        "verse": [
          "Am",
          "G",
          "F",
          "E"
        ],
        "chorus": [
          "C",
          "F",
          "G",
          "E"
        ],
        "solo": [
          "Am",
          "G",
          "F",
          "E"
        ],
        "coda": [
          "E",
          "E",
          "E",
          "E"
        ]
      }
    },
    {
      "id": "flamenco-bulerias",
      "worldId": "flamenco",
      "name": "Bulerías de Jerez (Fast Festive 12-Beat)",
      "origin": "Jerez de la Frontera & Triana",
      "description": "Blazing fast, highly syncopated 12-beat party rhythm with polyrhythmic counter-clapping (contratiempo).",
      "characteristicInstruments": [
        "guitar",
        "voice",
        "percussion",
        "hand-percussion"
      ],
      "preferredMeters": [
        "12/8",
        "6/8",
        "3/4"
      ],
      "tempoRange": [
        180,
        240
      ],
      "keySubstyles": [
        "Bulería al Golpe",
        "Bulería Festera",
        "Bulería por Soleá"
      ],
      "coreConcepts": [
        "remate",
        "jaleo",
        "alzapúa",
        "rasgueado",
        "contratiempo",
        "cajón syncopation"
      ],
      "rhythmicGrammar": [
        "accents on [12] . . [3] . . [6] . [7] [8] . [10] ."
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Blazing 12-beat compás with contratiempo palmas and alzapúa thumb engine",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Bb",
          "F",
          "Bb",
          "A"
        ],
        "verse": [
          "Dm",
          "C",
          "Bb",
          "A"
        ],
        "chorus": [
          "Gm",
          "A",
          "Gm",
          "A"
        ],
        "solo": [
          "Dm",
          "C",
          "Bb",
          "A"
        ],
        "coda": [
          "A",
          "A",
          "A",
          "A"
        ]
      }
    },
    {
      "id": "flamenco-tangos-tientos",
      "worldId": "flamenco",
      "name": "Tangos & Tientos (Binary 4/4 Compás)",
      "origin": "Cádiz, Triana, Granada",
      "description": "Crisp 4/4 rhythm with characteristic accentuation on beats 2, 3, and 4 (beat 1 is often silent or ghosted).",
      "characteristicInstruments": [
        "guitar",
        "voice",
        "percussion",
        "bass"
      ],
      "preferredMeters": [
        "4/4",
        "2/4"
      ],
      "tempoRange": [
        110,
        140
      ],
      "keySubstyles": [
        "Tangos de Triana",
        "Tangos de Cádiz",
        "Tangos de Granada",
        "Tientos Lentos"
      ],
      "coreConcepts": [
        "silent downbeat (1)",
        "heavy 2-3-4 accent",
        "alzapúa",
        "golpe on top plate"
      ],
      "rhythmicGrammar": [
        "[. x x x] - beat 1 is preparation, 2, 3, 4 carry the weight"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Tangos 4/4 binary compás with silent beat 1 and heavy weight on 2, 3, 4",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Bb",
          "A",
          "Bb",
          "A"
        ],
        "verse": [
          "Dm",
          "C",
          "Bb",
          "A"
        ],
        "chorus": [
          "F",
          "Bb",
          "A",
          "A"
        ],
        "coda": [
          "A",
          "A",
          "A",
          "A"
        ]
      }
    },
    {
      "id": "flamenco-rumba-sevillanas",
      "worldId": "flamenco",
      "name": "Rumba Flamenca & Sevillanas",
      "origin": "Catalonia, Seville & Caribbean crossover",
      "description": "Dance-floor accessible flamenco styles with continuous guitar strumming, fan-strums (abanico), and lively cajón.",
      "characteristicInstruments": [
        "guitar",
        "percussion",
        "bass",
        "voice",
        "flute"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        100,
        135
      ],
      "keySubstyles": [
        "Rumba Catalana",
        "Rumba Gitana",
        "Sevillanas en 4 Coplas"
      ],
      "coreConcepts": [
        "abanico fan strum",
        "golpe on beat 2 & 4",
        "cajón slap",
        "rumba bass movement"
      ],
      "rhythmicGrammar": [
        "abanico [down-thumb-up-down-golpe]",
        "sevillanas 3/4 waltz-like dance pulse"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Abanico continuous fan strum with body golpe and lively cajón slap",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E"
        ],
        "verse": [
          "Am",
          "Dm",
          "G",
          "C"
        ],
        "chorus": [
          "F",
          "E7",
          "Am",
          "E7"
        ],
        "solo": [
          "Am",
          "G",
          "F",
          "E"
        ],
        "coda": [
          "E",
          "E",
          "Am",
          "Am"
        ]
      }
    }
  ],
  "substyles": [
    "Soleá",
    "Bulerías de Jerez",
    "Alegrías de Cádiz",
    "Tangos de Triana",
    "Tientos",
    "Seguiriya",
    "Rumba Flamenca",
    "Sevillanas",
    "Fandangos de Huelva",
    "Guajiras",
    "Taranta y Granadinas",
    "Flamenco Jazz / Nuevo Flamenco"
  ],
  "artists": [
    "Paco de Lucía",
    "Camarón de la Isla",
    "Tomatito",
    "Vicente Amigo",
    "Sabicas",
    "Moraito Chico",
    "Diego del Morao",
    "Jorge Pardo",
    "Chano Domínguez"
  ],
  "concepts": [
    "compás",
    "palo",
    "falseta",
    "llamada",
    "letra",
    "cierre",
    "remate",
    "jaleo",
    "contratiempo",
    "palmas sordas / fuertes",
    "golpe",
    "alzapúa",
    "abanico"
  ],
  "roles": {
    "harmony": [
      "abanico rasgueado",
      "compás accompaniment",
      "arpeggios",
      "golpe on top plate"
    ],
    "melody": [
      "falseta development",
      "picado runs",
      "flamenco tremolo",
      "expressive cante lead"
    ],
    "percussion": [
      "cajón grave/agudo",
      "palmas base y contratiempo",
      "golpes",
      "taconeo"
    ],
    "bass": [
      "compás root support",
      "alzapúa doubling",
      "rumba bassline",
      "modal pedal"
    ],
    "lead": [
      "falseta dialogue",
      "sax/flute cante phrases",
      "virtuoso picado"
    ]
  },
  "patterns": [
    {
      "id": "flam-abanico-strum",
      "worldId": "flamenco",
      "traditionId": "flamenco-rumba-sevillanas",
      "name": "Abanico Fan Strum (Rumba & Sevillanas)",
      "family": "Rasgueado Strumming",
      "category": "ostinato",
      "description": "Continuous triplets and fan strums utilizing down-finger, up-thumb, and percussive golpe on the guitar body.",
      "tags": [
        "guitar",
        "abanico",
        "rasgueado",
        "rumba",
        "golpe"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony",
        "rhythm-guitar",
        "pulse"
      ],
      "instruments": [
        "guitar",
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.9,
        0.5,
        0.95,
        0.4,
        0.9,
        0.5,
        1,
        0.4
      ],
      "velocityProfile": [
        0.85,
        0.5,
        0.9,
        0.45,
        0.85,
        0.5,
        0.95,
        0.45
      ],
      "articulations": [
        "abanico-fan",
        "golpe-tap"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "flam-abanico-syncopated",
          "parentPatternId": "flam-abanico-strum",
          "name": "Abanico with 16th Golpe Accent",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            1,
            2,
            4,
            6,
            8,
            9,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.3,
            0.5,
            0.95,
            0.4,
            0.9,
            0.3,
            0.5,
            1,
            0.4
          ],
          "description": "Rapid rasgueado triplet lead-in to beat 1 and 3."
        },
        {
          "id": "flam-abanico-strum-variant-caj-n-palmas-interlocking-groove",
          "parentPatternId": "flam-abanico-strum",
          "name": "Cajón & Palmas Interlocking Groove",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Deep bass box thump on beats 1 & 3, high snare edge slap on beats 2 & 4, woven with contratiempo hand claps. Retained as a variation rather than a separate pattern entry.",
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.4,
            1,
            0.45,
            0.9,
            0.4,
            1,
            0.5
          ],
          "velocityProfile": [
            0.9,
            0.4,
            0.95,
            0.45,
            0.85,
            0.4,
            0.95,
            0.5
          ],
          "articulation": "cajon-grave, cajon-agudo, palmas-claras",
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "flam-abanico-strum-variant-rumba-strum",
          "parentPatternId": "flam-abanico-strum",
          "name": "Rumba Strum",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Continuous Catalan rumba strumming with rhythmic chucks. Retained as a variation rather than a separate pattern entry.",
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.65,
            0.9,
            0.6,
            0.95,
            0.65,
            0.9,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.85,
            0.55,
            0.9,
            0.6,
            0.85,
            0.65
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 3,
      "weight": 0.7,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "flamenco-interaction-1",
          "worldId": "flamenco",
          "sourceRole": "drums",
          "targetRole": "bass",
          "relationship": "reinforce",
          "description": "Low-end attacks reinforce the main pulse without doubling every subdivision.",
          "timingOffsetSteps": 0,
          "probability": 0.78
        }
      ]
    },
    {
      "id": "flam-tangos-compas",
      "worldId": "flamenco",
      "traditionId": "flamenco-tangos-tientos",
      "name": "Tangos de Triana (Binary Compás)",
      "family": "Tangos Rhythm",
      "category": "ostinato",
      "description": "Iconic 4/4 flamenco pulse where beat 1 breathes and beats 2, 3, 4 are driven with sharp rasgueados and palmas.",
      "tags": [
        "tangos",
        "triana",
        "compas",
        "palmas",
        "cajon"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "pulse",
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "hand-percussion",
        "percussion"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        8,
        12,
        14
      ],
      "accentProfile": [
        0.95,
        0.9,
        1,
        0.6
      ],
      "velocityProfile": [
        0.9,
        0.85,
        0.95,
        0.6
      ],
      "articulations": [
        "rasgueado",
        "palmas-fuertes"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "development"
      ],
      "variants": [
        {
          "id": "flam-tangos-with-remate",
          "parentPatternId": "flam-tangos-compas",
          "name": "Tangos Compás with Remate Hit",
          "variationType": "cadence",
          "probability": 0.45,
          "onsetGrid": [
            4,
            8,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.9,
            0.85,
            1,
            0.6,
            0.8,
            0.95
          ],
          "description": "Ending cadence with rapid 16th note finger flourish."
        },
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "flamenco-interaction-2",
          "worldId": "flamenco",
          "sourceRole": "voice",
          "targetRole": "harmony",
          "relationship": "leaveSpace",
          "description": "Harmony reduces density under vocal entries so the phrase remains foregrounded.",
          "timingOffsetSteps": 0,
          "probability": 0.72
        }
      ]
    },
    {
      "id": "flam-solea-12beat",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Soleá 12-Beat Compás Framework",
      "family": "12-Beat Metrical Cycles",
      "category": "phrasePattern",
      "description": "The foundation of cante jondo, counted 1 2 [3] 4 5 [6] 7 [8] 9 [10] 11 [12].",
      "tags": [
        "solea",
        "12beat",
        "compas",
        "deep",
        "jondo"
      ],
      "scopes": [
        "phrase",
        "region",
        "track"
      ],
      "roles": [
        "melody",
        "lead",
        "voice"
      ],
      "instruments": [
        "voice",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        2,
        5,
        7,
        9,
        11
      ],
      "accentProfile": [
        1,
        0.9,
        0.95,
        1,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.9,
        0.95,
        0.8
      ],
      "articulations": [
        "alzapua",
        "palmas-sordas"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "solo",
        "development"
      ],
      "variants": [
        {
          "id": "flam-solea-cierre",
          "parentPatternId": "flam-solea-12beat",
          "name": "Soleá Cierre (Formal Cadence on 10)",
          "variationType": "cadence",
          "probability": 0.6,
          "onsetGrid": [
            2,
            5,
            7,
            8,
            9
          ],
          "accentProfile": [
            0.8,
            0.8,
            0.9,
            0.95,
            1
          ],
          "description": "Decisive closing golpe and silence on beat 10."
        },
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "lead",
        "voice"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "flamenco-interaction-3",
          "worldId": "flamenco",
          "sourceRole": "lead",
          "targetRole": "voice",
          "relationship": "answer",
          "description": "Lead instrument answers a vocal phrase in the open space after the line.",
          "timingOffsetSteps": 2,
          "probability": 0.58
        }
      ]
    },
    {
      "id": "flam-alzapua-bass",
      "worldId": "flamenco",
      "traditionId": "flamenco-bulerias",
      "name": "Alzapúa Thumb Technique (Bass Driver)",
      "family": "Thumb Virtuosity",
      "category": "rolePattern",
      "description": "Iconic three-stroke thumb mechanic: down-stroke on bass string, up-stroke brush, and percussive down-stroke tap.",
      "tags": [
        "alzapua",
        "thumb",
        "bass",
        "guitar",
        "virtuoso"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track"
      ],
      "roles": [
        "bass",
        "harmony",
        "counterline"
      ],
      "instruments": [
        "guitar",
        "electric-guitar",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        3,
        4,
        6,
        7,
        8,
        10,
        11,
        12,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.7,
        0.95,
        0.5,
        0.7,
        1,
        0.5,
        0.7,
        0.9,
        0.5,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.5,
        0.7,
        0.9,
        0.5,
        0.7,
        0.95,
        0.5,
        0.7,
        0.85,
        0.5,
        0.7
      ],
      "articulations": [
        "pulgar-apoyando",
        "brush-up"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "solo",
        "chorus",
        "development"
      ],
      "variants": [
        {
          "id": "flam-alzapua-syncopated",
          "parentPatternId": "flam-alzapua-bass",
          "name": "Alzapúa with Off-Beat Punch",
          "variationType": "syncopated",
          "probability": 0.5,
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.8,
            0.9,
            0.8,
            1,
            0.8,
            0.9,
            0.85
          ],
          "description": "Polyrhythmic thumb grouping cutting across the meter."
        },
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass",
        "harmony"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ]
    },
    {
      "id": "flam-falseta-melodic",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Falseta Melodic Development",
      "family": "Solo Falsetas",
      "category": "phrasePattern",
      "description": "Self-contained lyric guitar or instrumental solo passage developed within the compás cycle.",
      "tags": [
        "falseta",
        "picado",
        "tremolo",
        "melody",
        "solo"
      ],
      "scopes": [
        "phrase",
        "region",
        "track"
      ],
      "roles": [
        "melody",
        "lead",
        "counterline"
      ],
      "instruments": [
        "guitar",
        "flute",
        "sax",
        "violin"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        12,
        14,
        16,
        19,
        22,
        24,
        28,
        30
      ],
      "accentProfile": [
        0.9,
        0.6,
        0.8,
        0.95,
        0.7,
        0.8,
        0.9,
        0.6,
        0.85,
        1,
        0.7,
        0.9
      ],
      "velocityProfile": [
        0.85,
        0.6,
        0.75,
        0.9,
        0.7,
        0.75,
        0.85,
        0.6,
        0.8,
        0.95,
        0.7,
        0.85
      ],
      "articulations": [
        "picado",
        "ligado",
        "tremolo"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "intro",
        "solo",
        "falseta",
        "development"
      ],
      "variants": [
        {
          "id": "flam-falseta-tremolo-swell",
          "parentPatternId": "flam-falseta-melodic",
          "name": "4-Note Flamenco Tremolo Swell",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.4,
            0.4,
            0.4,
            0.9,
            0.4,
            0.4,
            0.4,
            0.95,
            0.4,
            0.4,
            0.4,
            1,
            0.4,
            0.4,
            0.4
          ],
          "description": "Thumb bass note followed by p-i-a-m-i 4-finger rapid sustained tremolo."
        },
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "lead",
        "counterline"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "flamenco-interaction-4",
          "worldId": "flamenco",
          "sourceRole": "bass",
          "targetRole": "drums",
          "relationship": "accentWith",
          "description": "Bass accents align with selected kick/backbeat events for a tighter pocket.",
          "timingOffsetSteps": 0,
          "probability": 0.65
        }
      ]
    },
    {
      "id": "flamenco-golpe",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Golpe (Tap)",
      "family": "Percussion",
      "category": "fill",
      "description": "Resonant finger taps on the tapador/guitar soundboard.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion",
        "guitar"
      ],
      "instruments": [
        "percussion",
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12
      ],
      "accentProfile": [
        0.9,
        1,
        0.85,
        1
      ],
      "velocityProfile": [
        0.85,
        0.95,
        0.8,
        0.95
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "percussion",
        "guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "flamenco-bulerias-palmas",
      "worldId": "flamenco",
      "traditionId": "flamenco-bulerias",
      "name": "Bulerias Palmas",
      "family": "Palmas",
      "category": "break",
      "description": "12-beat compás cycle handclaps with classic accents on 12, 3, 7, 8, 10.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],
      "instruments": [
        "percussion"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        7,
        8,
        10
      ],
      "accentProfile": [
        1,
        0.85,
        0.9,
        0.95,
        1
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.85,
        0.9,
        0.95
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "flamenco-picado",
      "worldId": "flamenco",
      "traditionId": "flamenco-tangos-tientos",
      "name": "Picado Scale",
      "family": "Guitar",
      "category": "cadence",
      "description": "Rapid rest-stroke i-m finger scale passages.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.7,
        0.85,
        0.7,
        0.95,
        0.7,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.8,
        0.65,
        0.9,
        0.65,
        0.8,
        0.7
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "ending",
        "turnaround"
      ],
      "variants": [
        {
          "id": "flamenco-picado-variant-flamenco-tremolo",
          "parentPatternId": "flamenco-picado",
          "name": "Flamenco Tremolo",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "5-note tremolo pattern (p-i-a-m-i) with thumb bass attack. Retained as a variation rather than a separate pattern entry.",
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
          ],
          "accentProfile": [
            1,
            0.6,
            0.65,
            0.7,
            0.65,
            0.95,
            0.6,
            0.65,
            0.7,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.6,
            0.65,
            0.6,
            0.9,
            0.55,
            0.6,
            0.65,
            0.6
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "flamenco-cajon-rumba",
      "worldId": "flamenco",
      "traditionId": "flamenco-rumba-sevillanas",
      "name": "Cajon Rumba",
      "family": "Cajon",
      "category": "groove",
      "description": "Cajón rhythm for rumba flamenca with low thump and high slap.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion",
        "drums"
      ],
      "instruments": [
        "percussion",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.95,
        0.8,
        0.7,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
        0.75,
        0.65,
        0.85
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Flamenco genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums",
        "percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "flamenco-interaction-5",
          "worldId": "flamenco",
          "sourceRole": "harmony",
          "targetRole": "lead",
          "relationship": "leaveSpace",
          "description": "Accompaniment thins when the instrumental lead enters.",
          "timingOffsetSteps": 0,
          "probability": 0.62
        }
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "flamenco-phrase-10",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Llamada Phrase",
      "family": "Llamada",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around compás and the llamada vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "llamada",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "voice"
      ],
      "instruments": ["voice"],
      "compatibleRoles": [
        "voice"
      ],
      "compatibleInstruments": ["voice"],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        6,
        7,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.71,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "voice"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "llamada"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "flamenco-call-11",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Remate Response",
      "family": "Remate",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around llamada and the remate vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "remate",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "voice"
      ],
      "instruments": ["voice"],
      "compatibleRoles": [
        "voice"
      ],
      "compatibleInstruments": ["voice"],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        3,
        7,
        8,
        11,
        13
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62,
        0.95,
        0.62,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.9,
        0.62,
        0.95
      ],
      "syncopationRating": 0.71,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "medium",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "voice"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "remate"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "flamenco-anchor-12",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Rasgueado Anchor",
      "family": "Rasgueado",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around remate and the rasgueado vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "rasgueado",
        "anchor",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "bass"
      ],
      "instruments": [
        "bass"
      ],
      "compatibleRoles": [
        "bass"
      ],
      "compatibleInstruments": [
        "bass"
      ],
      "canCrossRole": true,
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        2,
        4,
        8,
        9,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.57,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "rasgueado"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "flamenco-comp-13",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Falseta Comping",
      "family": "Falseta",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around palmas and the falseta vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "falseta",
        "comp",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "guitar"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        8
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95
      ],
      "syncopationRating": 0.6,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "medium",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "harmony"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "falseta"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "flamenco-intro-14",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Compás Intro",
      "family": "Compás",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around falseta and the compás vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "compas",
        "intro",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "texture"
      ],
      "instruments": [
        "guitar"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        6,
        9,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74
      ],
      "syncopationRating": 0.83,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "dense",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "harmony",
        "texture"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "flamenco-intro-14-v-03",
          "parentPatternId": "flamenco-intro-14",
          "name": "Compás Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "compas"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "flamenco-verse-15",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Llamada Verse Variation",
      "family": "Llamada",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around compás and the llamada vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "llamada",
        "verse",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "instruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        5,
        7,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74
      ],
      "syncopationRating": 0.83,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "medium",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "drums",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "llamada"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "flamenco-chorus-16",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Remate Chorus Lift",
      "family": "Remate",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around llamada and the remate vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "remate",
        "chorus",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "harmony",
        "drums"
      ],
      "instruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "compatibleRoles": [
        "pulse",
        "harmony",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        11,
        13
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": 1,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "dynamic",
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "harmony",
        "drums"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "flamenco-chorus-16-v-03",
          "parentPatternId": "flamenco-chorus-16",
          "name": "Remate Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "remate"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "flamenco-bridge-17",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea",
      "name": "Rasgueado Bridge",
      "family": "Rasgueado",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around remate and the rasgueado vocabulary of Flamenco.",
      "tags": [
        "flamenco",
        "rasgueado",
        "bridge",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "lead"
      ],
      "instruments": [
        "guitar",
        "sax"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
      ],
      "compatibleInstruments": [
        "guitar",
        "sax"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        6,
        8
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
      ],
      "density": "dense",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "bridge",
        "interlude",
        "development"
      ],
      "harmonicContext": [
        "tonal",
        "modal traditional context",
        "modal/tonal traditional context"
      ],
      "roleDependencies": [
        "harmony",
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "flamenco-bridge-17-v-03",
          "parentPatternId": "flamenco-bridge-17",
          "name": "Rasgueado Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            4,
            6,
            8,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "Flamenco genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "flamenco",
        "rasgueado"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "flam-bulerias-cajon-remate",
      "worldId": "flamenco",
      "traditionId": "flamenco-bulerias",
      "name": "Bulerías Cajón & Remate",
      "family": "Percussion",
      "category": "groove",
      "description": "High-velocity 12-beat Bulerías cajón compás locking strictly onto 3, 6, 8, 10, 12 accents with explosive remate snaps.",
      "tags": ["flamenco", "bulerias", "cajon", "remate", "percussion"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "pulse"],
      "instruments": ["drums"],
      "meter": "3/4",
      "cycleLength": 2,
      "subdivisions": 12,
      "onsetGrid": [2, 5, 7, 9, 11],
      "accentProfile": [1.0, 1.0, 1.0, 1.0, 1.0],
      "velocityProfile": [0.95, 0.95, 0.95, 0.95, 0.95],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Bulerías de Jerez; generalized from documented musical conventions.",
      "authenticityTags": ["flamenco", "cajon"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "flam-tangos-cajon-pulse",
      "worldId": "flamenco",
      "traditionId": "flamenco-tangos-tientos",
      "name": "Tangos Flamencos Cajón Pulse",
      "family": "Percussion",
      "category": "groove",
      "description": "Swinging, earthy binary 4/4 Tangos flamencos cajón groove with deep bass tones on beat 1 and crisp high slaps driving beats 2, 3, 4.",
      "tags": ["flamenco", "tangos", "cajon", "pulse", "percussion"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "pulse"],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 4, 7, 10, 12, 14],
      "accentProfile": [1.0, 0.7, 0.9, 0.75, 1.0, 0.8],
      "velocityProfile": [0.95, 0.7, 0.85, 0.75, 0.95, 0.8],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Tangos & Tientos; generalized from documented musical conventions.",
      "authenticityTags": ["flamenco", "tangos"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "flam-rumba-guitar-rasgueo",
      "worldId": "flamenco",
      "traditionId": "flamenco-rumba-sevillanas",
      "name": "Rumba Catalana Golpe-Strum",
      "family": "Guitar",
      "category": "groove",
      "description": "Festive, infectious Rumba Flamenca guitar rhythm featuring rapid downward fan strokes combined with percussive wood-slap (golpe) accents.",
      "tags": ["flamenco", "rumba", "guitar", "abanico", "golpe"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["guitar", "harmony"],
      "instruments": ["guitar"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.7, 0.9, 0.7, 0.95, 0.7, 0.85],
      "velocityProfile": [0.95, 0.65, 0.9, 0.7, 0.9, 0.65, 0.85],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Rumba Flamenca; generalized from documented musical conventions.",
      "authenticityTags": ["flamenco", "rumba"],
      "danceTags": ["festival-fusion", "social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "techniques": [
    "rasgueado (4-finger fan)",
    "abanico (thumb-finger-golpe continuous fan)",
    "alzapúa (3-stroke thumb engine)",
    "picado (rapid alternating rest-stroke scale run)",
    "golpe (finger-strike on soundboard)",
    "tremolo flamenco (p-i-a-m-i 5-note figure)",
    "palmas sordas (cupped hands) & fuertes (flat fingers)"
  ],
  "forms": [
    "llamada",
    "letra",
    "falseta",
    "remate",
    "cierre",
    "silencio",
    "escobilla"
  ],
  "relationships": [
    "guitar ↔ palmas (strict compás lock)",
    "cajón ↔ guitar golpe (synchronized punctuation)",
    "voice/lead ↔ guitar (falseta responses between vocal letras)",
    "cierre ↔ transition (cadential resolution on beat 10 or 4)"
  ],
  "transformations": [
    "trans-density-dense",
    "trans-density-sparse",
    "trans-syncopation-tresillo",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "cyclical compás that locks harmonic and dynamic tension",
    "interlocking palmas base and contratiempo creating a perpetual rhythmic weave",
    "sudden llamadas calling the ensemble into remates and closures",
    "falsetas functioning as narrative melodic journeys between vocal sections",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "abanico strums",
      "alzapúa thumb ostinatos",
      "lyric picado falsetas",
      "crisp golpes"
    ],
    "bass": [
      "follow compás accent milestones (12, 3, 6, 8, 10)",
      "alzapúa-inspired low ostinato"
    ],
    "sax": [
      "cante-inspired vocal phrasing with quarter-tone inflections",
      "flamenco jazz modal counterlines"
    ],
    "flute": [
      "rapid picado-like staccato runs",
      "lyric falseta accompaniment"
    ],
    "percussion": [
      "cajón low/high split",
      "interlocking handclaps",
      "finger snaps and jaleos"
    ],
    "voice": [
      "cante phrasing and remate calls"
    ]
  },
  "combinations": [
    "Flamenco + Jazz",
    "Flamenco + Tango",
    "Flamenco + Afro-Cuban",
    "Flamenco + Arabic"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "12-beat compás accented on [12, 3, 6, 8, 10] with Andalusian cadence",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Flamenco ↔ Tango",
    "Flamenco ↔ Jazz",
    "Flamenco ↔ Arabic / Mediterranean"
  ]
};
