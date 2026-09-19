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
      "tuningSystem": "phrygian-mode",
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
      "tuningSystem": "phrygian-mode",
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
      "tuningSystem": "phrygian-mode",
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
,

    {
        "id": "flamenco-alegrias",
        "worldId": "flamenco",
        "name": "Alegrías & Cantiñas",
        "origin": "Cádiz, western Andalusia",
        "era": "19th century–present",
        "description": "Bright 12-beat cantiñas family centered on Alegrías, with major-key guitar, buoyant palmas, letras, silencio/falseta, escobilla and subida.",
        "characteristicInstruments": [
            "guitar",
            "voice",
            "percussion"
        ],
        "preferredMeters": [
            "12/8",
            "6/8",
            "3/4"
        ],
        "tempoRange": [
            120,
            160
        ],
        "keySubstyles": [
            "Alegrías de Cádiz",
            "Romeras",
            "Caracoles",
            "Mirabrás"
        ],
        "coreConcepts": [
            "cantiñas",
            "silencio",
            "escobilla",
            "subida",
            "tirititrán"
        ],
        "rhythmicGrammar": [
            "12-beat cantiñas grouping 3+3+2+2+2",
            "bright palmas and dance remates"
        ],
        "danceTags": [
            "social-partner",
            "festival-fusion"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "12-beat cantiñas compás with major-key brightness and clear dance punctuation.",
        "grooveMechanics": {
            "swingPercentage": 50,
            "anticipationOffsetSteps": 0,
            "microtimingFeel": "straight"
        }
    },
    {
        "id": "flamenco-seguiriya",
        "worldId": "flamenco",
        "name": "Seguiriya",
        "origin": "Andalusia",
        "era": "19th century–present",
        "description": "Cante-jondo palo with an asymmetric 2+2+3+3+2 rhythmic grouping, sparse accompaniment and extreme expressive tension.",
        "characteristicInstruments": [
            "guitar",
            "voice",
            "percussion"
        ],
        "preferredMeters": [
            "12/8",
            "6/8"
        ],
        "tempoRange": [
            90,
            140
        ],
        "keySubstyles": [
            "Seguiriya",
            "Cabales",
            "Liviana",
            "Serranas"
        ],
        "coreConcepts": [
            "quejío",
            "jondo",
            "2+2+3+3+2",
            "corte",
            "remate"
        ],
        "rhythmicGrammar": [
            "2+2+3+3+2 grouping",
            "space around the cante",
            "elastic internal phrasing"
        ],
        "danceTags": [
            "listening"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "2+2+3+3+2 asymmetry rather than the standard Soleá-family accent map.",
        "grooveMechanics": {
            "swingPercentage": 50,
            "anticipationOffsetSteps": 0,
            "microtimingFeel": "rubato"
        }
    },
    {
        "id": "flamenco-tangos-style",
        "worldId": "flamenco",
        "name": "Tangos Flamencos",
        "origin": "Cádiz, Triana, Granada",
        "era": "19th century–present",
        "description": "Binary flamenco dance family related to Tientos, with 4/4 pulse, Phrygian color and characteristic weight on 2–3–4.",
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
            150
        ],
        "keySubstyles": [
            "Tangos de Triana",
            "Tangos de Cádiz",
            "Tangos de Granada"
        ],
        "coreConcepts": [
            "binary compás",
            "2-3-4 weight",
            "por medio",
            "por arriba",
            "golpe"
        ],
        "rhythmicGrammar": [
            "4/4 with breathing beat 1",
            "accented 2, 3 and 4",
            "contratiempo pickups"
        ],
        "danceTags": [
            "social-partner",
            "festival-fusion"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "4/4 flamenco tangos with a breathing downbeat and weighted 2–3–4.",
        "grooveMechanics": {
            "swingPercentage": 50,
            "anticipationOffsetSteps": 0,
            "microtimingFeel": "straight"
        }
    },
    {
        "id": "flamenco-tientos",
        "worldId": "flamenco",
        "name": "Tientos",
        "origin": "Andalusia",
        "era": "19th century–present",
        "description": "Slow, grave binary palo closely related to Tangos; traditional versions may feel slightly tripletized and commonly accelerate into Tangos.",
        "characteristicInstruments": [
            "guitar",
            "voice",
            "percussion"
        ],
        "preferredMeters": [
            "4/4",
            "2/4"
        ],
        "tempoRange": [
            50,
            90
        ],
        "keySubstyles": [
            "Tientos",
            "Tientos por Tangos"
        ],
        "coreConcepts": [
            "slow binary",
            "jondo",
            "subida",
            "tangos ending"
        ],
        "rhythmicGrammar": [
            "slow 4-beat compás",
            "space and weight",
            "controlled acceleration"
        ],
        "danceTags": [
            "listening",
            "social-partner"
        ],
        "tuningSystem": "phrygian-mode",
        "signatureCell": "Slow binary compás with heavy space and a path toward Tangos.",
        "grooveMechanics": {
            "swingPercentage": 50,
            "anticipationOffsetSteps": 0,
            "microtimingFeel": "straight"
        }
    },
    {
        "id": "flamenco-farruca",
        "worldId": "flamenco",
        "name": "Farruca",
        "origin": "Northern Spain adopted into flamenco",
        "era": "20th century–present",
        "description": "Slow binary dance palo in minor with dry guitar punctuation, grounded dance phrasing and a characteristic subida.",
        "characteristicInstruments": [
            "guitar",
            "voice",
            "percussion"
        ],
        "preferredMeters": [
            "4/4"
        ],
        "tempoRange": [
            50,
            90
        ],
        "keySubstyles": [
            "Farruca"
        ],
        "coreConcepts": [
            "minor",
            "golpe",
            "escobilla",
            "subida"
        ],
        "rhythmicGrammar": [
            "slow 4-beat pulse",
            "dry punctuation",
            "accelerating final section"
        ],
        "danceTags": [
            "social-partner",
            "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Grounded slow 4/4 minor pulse with dry golpes and controlled subida.",
        "grooveMechanics": {
            "swingPercentage": 50,
            "anticipationOffsetSteps": 0,
            "microtimingFeel": "straight"
        }
    },
    {
        "id": "flamenco-guajira",
        "worldId": "flamenco",
        "name": "Guajira (Ida y Vuelta)",
        "origin": "Andalusia / Cuba",
        "era": "19th century–present",
        "description": "Ida-y-vuelta flamenco family with Cuban influence, a lighter 12-beat lilt and songful major-key guitar language.",
        "characteristicInstruments": [
            "guitar",
            "voice",
            "percussion"
        ],
        "preferredMeters": [
            "12/8",
            "6/8"
        ],
        "tempoRange": [
            105,
            145
        ],
        "keySubstyles": [
            "Guajira"
        ],
        "coreConcepts": [
            "ida-y-vuelta",
            "Cuban influence",
            "12-beat lilt",
            "major color"
        ],
        "rhythmicGrammar": [
            "light 12-beat compás",
            "syncopated guitar",
            "songful phrasing"
        ],
        "danceTags": [
            "social-partner",
            "festival-fusion"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Light 12-beat ida-y-vuelta lilt with Cuban-inflected harmony.",
        "grooveMechanics": {
            "swingPercentage": 50,
            "anticipationOffsetSteps": 0,
            "microtimingFeel": "straight"
        }
    },
    {
        "id": "flamenco-fandango",
        "worldId": "flamenco",
        "name": "Fandangos de Huelva",
        "origin": "Huelva, Andalusia",
        "era": "19th century–present",
        "description": "Ternary flamenco/folk family organized in four three-beat phrases, with modal openings and bright major/minor turns.",
        "characteristicInstruments": [
            "guitar",
            "voice",
            "percussion"
        ],
        "preferredMeters": [
            "3/4",
            "6/8"
        ],
        "tempoRange": [
            130,
            150
        ],
        "keySubstyles": [
            "Fandangos de Huelva",
            "Fandangos personales"
        ],
        "coreConcepts": [
            "four 3-beat phrases",
            "copla",
            "modal opening",
            "major/minor turn"
        ],
        "rhythmicGrammar": [
            "3/4 ternary cycle",
            "four-phrase copla architecture"
        ],
        "danceTags": [
            "social-partner",
            "listening"
        ],
        "tuningSystem": "12-tet",
        "signatureCell": "Four 3/4 phrases with modal opening and major/minor melodic turns.",
        "grooveMechanics": {
            "swingPercentage": 50,
            "anticipationOffsetSteps": 0,
            "microtimingFeel": "straight"
        }
    }  ],
  "substyles": [
  "Soleá",
  "Bulerías de Jerez",
  "Alegrías de Cádiz",
  "Tangos de Triana",
  "Tientos",
  "Seguiriya",
  "Farruca",
  "Rumba Flamenca",
  "Sevillanas",
  "Fandangos de Huelva",
  "Guajiras",
  "Taranta y Granadinas",
  "Soleá por Bulerías",
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
  "patterns":   [
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
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flam-tangos-compas-v-02",
          "parentPatternId": "flam-tangos-compas",
          "name": "Tangos de Triana (Binary Compás) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            4,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.98,
            0.96,
            0.6799999999999999
          ],
          "velocityProfile": [
            0.96,
            0.83,
            0.9299999999999999,
            0.6599999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flam-solea-12beat-v-02",
          "parentPatternId": "flam-solea-12beat",
          "name": "Soleá 12-Beat Compás Framework — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            5,
            7,
            9,
            11
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.9099999999999999,
            1,
            0.76
          ],
          "velocityProfile": [
            1,
            0.83,
            0.88,
            1,
            0.78
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flam-alzapua-bass-v-02",
          "parentPatternId": "flam-alzapua-bass",
          "name": "Alzapúa Thumb Technique (Bass Driver) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.58,
            0.6599999999999999,
            1,
            0.46,
            0.7799999999999999,
            0.96,
            0.58,
            0.6599999999999999,
            0.98,
            0.46,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.48,
            0.6799999999999999,
            0.96,
            0.48,
            0.6799999999999999,
            1,
            0.48,
            0.6799999999999999,
            0.9099999999999999,
            0.48,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flam-falseta-melodic-v-02",
          "parentPatternId": "flam-falseta-melodic",
          "name": "Falseta Melodic Development — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.86,
            0.6799999999999999,
            0.76,
            1,
            0.6599999999999999,
            0.88,
            0.86,
            0.6799999999999999,
            0.8099999999999999,
            1,
            0.6599999999999999,
            0.98
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.58,
            0.73,
            0.96,
            0.6799999999999999,
            0.73,
            0.9099999999999999,
            0.58,
            0.78,
            1,
            0.6799999999999999,
            0.83
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flamenco-golpe-v-01",
          "parentPatternId": "flamenco-golpe",
          "name": "Golpe (Tap) — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.85,
            0.95,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.77,
            0.87,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "flamenco-golpe-v-02",
          "parentPatternId": "flamenco-golpe",
          "name": "Golpe (Tap) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.86,
            1,
            0.8099999999999999,
            1
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.9299999999999999,
            0.78,
            1
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flamenco-bulerias-palmas-v-01",
          "parentPatternId": "flamenco-bulerias-palmas",
          "name": "Bulerias Palmas — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            7,
            8
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "flamenco-bulerias-palmas-v-02",
          "parentPatternId": "flamenco-bulerias-palmas",
          "name": "Bulerias Palmas — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            7,
            8,
            10
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.86,
            1,
            0.96
          ],
          "velocityProfile": [
            1,
            0.78,
            0.83,
            0.96,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flamenco-picado-v-02",
          "parentPatternId": "flamenco-picado",
          "name": "Picado Scale — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.7799999999999999,
            0.8099999999999999,
            0.7799999999999999,
            0.9099999999999999,
            0.7799999999999999,
            0.8099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.63,
            0.78,
            0.71,
            0.88,
            0.63,
            0.8600000000000001,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "flamenco-cajon-rumba-v-01",
          "parentPatternId": "flamenco-cajon-rumba",
          "name": "Cajon Rumba — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.8999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.8200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "flamenco-cajon-rumba-v-02",
          "parentPatternId": "flamenco-cajon-rumba",
          "name": "Cajon Rumba — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.9099999999999999,
            0.88,
            0.6599999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.63,
            0.88,
            0.81,
            0.63,
            0.83
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
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
      "instruments": [
        "voice"
      ],
      "compatibleRoles": [
        "voice"
      ],
      "compatibleInstruments": [
        "voice"
      ],
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
      "syncopationRating": 0.7142857142857143,
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
        {
          "id": "flamenco-phrase-10-v-01",
          "parentPatternId": "flamenco-phrase-10",
          "name": "Llamada Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            7,
            12,
            15
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "flamenco-phrase-10-v-02",
          "parentPatternId": "flamenco-phrase-10",
          "name": "Llamada Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
      "instruments": [
        "voice"
      ],
      "compatibleRoles": [
        "voice"
      ],
      "compatibleInstruments": [
        "voice"
      ],
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
        0.8999999999999999,
        0.62,
        0.95
      ],
      "syncopationRating": 0.7142857142857143,
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
        {
          "id": "flamenco-call-11-v-01",
          "parentPatternId": "flamenco-call-11",
          "name": "Remate Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            7,
            11,
            13
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54,
            0.82
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "flamenco-call-11-v-02",
          "parentPatternId": "flamenco-call-11",
          "name": "Remate Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999,
            0.8799999999999999,
            0.6,
            1
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "flamenco-call-11-v-03",
          "parentPatternId": "flamenco-call-11",
          "name": "Remate Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            3,
            7,
            8,
            11,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
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
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.5714285714285714,
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
        {
          "id": "flamenco-anchor-12-v-01",
          "parentPatternId": "flamenco-anchor-12",
          "name": "Rasgueado Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            4,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "flamenco-anchor-12-v-02",
          "parentPatternId": "flamenco-anchor-12",
          "name": "Rasgueado Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
        {
          "id": "flamenco-comp-13-v-01",
          "parentPatternId": "flamenco-comp-13",
          "name": "Falseta Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            5
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "flamenco-comp-13-v-02",
          "parentPatternId": "flamenco-comp-13",
          "name": "Falseta Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            8
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.8333333333333334,
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
          "id": "flamenco-intro-14-v-01",
          "parentPatternId": "flamenco-intro-14",
          "name": "Compás Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            6,
            9,
            14
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "flamenco-intro-14-v-02",
          "parentPatternId": "flamenco-intro-14",
          "name": "Compás Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        },
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
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.8333333333333334,
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
        {
          "id": "flamenco-verse-15-v-01",
          "parentPatternId": "flamenco-verse-15",
          "name": "Llamada Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            7,
            10,
            15
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "flamenco-verse-15-v-02",
          "parentPatternId": "flamenco-verse-15",
          "name": "Llamada Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            5,
            7,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.6666666666666666,
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
          "id": "flamenco-chorus-16-v-01",
          "parentPatternId": "flamenco-chorus-16",
          "name": "Remate Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            8,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "flamenco-chorus-16-v-02",
          "parentPatternId": "flamenco-chorus-16",
          "name": "Remate Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            13
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        },
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
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
          "id": "flamenco-bridge-17-v-01",
          "parentPatternId": "flamenco-bridge-17",
          "name": "Rasgueado Bridge — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            6,
            8
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "flamenco-bridge-17-v-02",
          "parentPatternId": "flamenco-bridge-17",
          "name": "Rasgueado Bridge — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            4,
            6,
            8
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
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
      "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
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
      "id": "flam-solea-guitar-compas",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea-style",
      "substyleId": "flamenco-solea-style",
      "name": "Soleá Guitar Compás",
      "family": "12-beat compás",
      "category": "ostinato",
      "description": "Soleá accompaniment skeleton: weight on 12, 3, 6, 8 and 10, with 10 as a major cierre point and room for cante.",
      "tags": [
        "solea",
        "compas",
        "cierre",
        "rasgueado"
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
        "guitar"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        11,
        2,
        5,
        7,
        9
      ],
      "accentProfile": [
        1,
        0.82,
        0.9,
        1,
        0.92
      ],
      "velocityProfile": [
        0.98,
        0.94,
        0.96,
        0.98,
        0.96
      ],
      "syncopationRating": 0.8,
      "articulations": [
        "rasgueado"
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
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "flam-solea-guitar-cierre",
          "parentPatternId": "flam-solea-guitar-compas",
          "name": "Soleá Cierre at 10",
          "variationType": "cadence",
          "probability": 0.45,
          "description": "Land on 10, then breathe into 11–12.",
          "onsetGrid": [
            11,
            2,
            5,
            7,
            9,
            10,
            11
          ],
          "accentProfile": [
            1,
            0.85,
            0.9,
            1,
            0.98,
            0.55,
            1
          ],
          "velocityProfile": [
            0.98,
            0.95,
            0.96,
            0.98,
            0.98,
            0.89,
            0.98
          ]
        }
      ],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-solea-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.98,
      "enabled": true
    },
    {
      "id": "flam-solea-palmas",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea-style",
      "substyleId": "flamenco-solea-style",
      "name": "Soleá Palmas Contratiempo",
      "family": "Palmas",
      "category": "rolePattern",
      "description": "Cupped and clear hand-clap dialogue that reinforces the 12-beat skeleton while leaving the cante breathing space.",
      "tags": [
        "solea",
        "palmas",
        "contratiempo"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "palmas"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        1,
        3,
        4,
        6,
        8,
        10
      ],
      "accentProfile": [
        0.35,
        0.7,
        0.45,
        0.68,
        0.5,
        0.7,
        0.5
      ],
      "velocityProfile": [
        0.85,
        0.92,
        0.87,
        0.92,
        0.88,
        0.92,
        0.88
      ],
      "syncopationRating": 0.29,
      "articulations": [
        "palmas-sordas/claras"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "percussion",
        "hand-percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-solea-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.94,
      "enabled": true,
      "canCrossRole": true
    },
    {
      "id": "flam-llamada-12",
      "worldId": "flamenco",
      "traditionId": "flamenco-solea-style",
      "substyleId": "flamenco-solea-style",
      "name": "Llamada into Cante",
      "family": "Cante/Guitar Interaction",
      "category": "transition",
      "description": "Short guitar-and-compás calling gesture that announces a letra or dance entrance; not a generic fill.",
      "tags": [
        "llamada",
        "solea",
        "transition"
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
        "lead",
        "pulse"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        9,
        10,
        11,
        0,
        2
      ],
      "accentProfile": [
        0.55,
        0.75,
        1,
        0.9,
        0.75
      ],
      "velocityProfile": [
        0.89,
        0.93,
        0.98,
        0.96,
        0.93
      ],
      "syncopationRating": 0.4,
      "articulations": [
        "golpe + rasgueado"
      ],
      "density": "medium",
      "phrasePosition": [
        "end",
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "bridge"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
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
          "id": "flam-llamada-12-v2",
          "parentPatternId": "flam-llamada-12",
          "name": "Llamada with final golpe",
          "variationType": "transition",
          "probability": 0.4,
          "description": "Tightens the final two beats into a clear entrance.",
          "onsetGrid": [
            9,
            10,
            11,
            0,
            1,
            2
          ],
          "accentProfile": [
            0.6,
            0.8,
            1,
            0.9,
            0.65,
            0.95
          ],
          "velocityProfile": [
            0.9,
            0.94,
            0.98,
            0.96,
            0.91,
            0.97
          ]
        }
      ],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-solea-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.97,
      "enabled": true
    },
    {
      "id": "flam-remate-12",
      "worldId": "flamenco",
      "traditionId": "flamenco-remate",
      "substyleId": "flamenco-remate",
      "name": "12-Beat Remate",
      "family": "Cadential Punctuation",
      "category": "cadence",
      "description": "Ensemble remate: synchronized accent and release at the end of a compás, leaving a deliberate pocket before the next phrase.",
      "tags": [
        "remate",
        "corte",
        "compas"
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
        "percussion",
        "pulse"
      ],
      "instruments": [
        "guitar",
        "palmas",
        "cajon"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        9,
        10,
        11,
        0,
        2
      ],
      "accentProfile": [
        0.7,
        0.95,
        1,
        0.85,
        0.9
      ],
      "velocityProfile": [
        0.92,
        0.97,
        0.98,
        0.95,
        0.96
      ],
      "syncopationRating": 0.4,
      "articulations": [
        "golpe/corte"
      ],
      "density": "dense",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "ending"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-remate"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.99,
      "enabled": true
    },
    {
      "id": "flam-buleria-compas",
      "worldId": "flamenco",
      "traditionId": "flamenco-buleria-style",
      "substyleId": "flamenco-buleria-style",
      "name": "Bulería Compás / Jerez Drive",
      "family": "Bulería Compás",
      "category": "groove",
      "description": "Fast 12-beat bulería framework with elastic emphasis around 12, 3, 6, 8, 10 and contratiempo.",
      "tags": [
        "buleria",
        "compas",
        "contratiempo",
        "fin-de-fiesta"
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
        "harmony"
      ],
      "instruments": [
        "guitar",
        "palmas",
        "cajon"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        11,
        2,
        5,
        7,
        8,
        9,
        10
      ],
      "accentProfile": [
        1,
        0.9,
        0.75,
        1,
        0.55,
        0.92,
        0.55
      ],
      "velocityProfile": [
        0.98,
        0.96,
        0.93,
        0.98,
        0.89,
        0.96,
        0.89
      ],
      "syncopationRating": 0.57,
      "articulations": [
        "rasgueado"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "pulse",
        "percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "flam-buleria-compas-corte",
          "parentPatternId": "flam-buleria-compas",
          "name": "Bulería Corte / Stop",
          "variationType": "cadence",
          "probability": 0.35,
          "description": "Quick corte before the next respuesta.",
          "onsetGrid": [
            8,
            9,
            10,
            11,
            2
          ],
          "accentProfile": [
            0.6,
            0.85,
            1,
            0.9,
            1
          ],
          "velocityProfile": [
            0.9,
            0.95,
            0.98,
            0.96,
            0.98
          ]
        }
      ],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-buleria-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.99,
      "enabled": true
    },
    {
      "id": "flam-buleria-palmas",
      "worldId": "flamenco",
      "traditionId": "flamenco-buleria-style",
      "substyleId": "flamenco-buleria-style",
      "name": "Bulería Palmas Contratiempo",
      "family": "Bulería Palmas",
      "category": "rolePattern",
      "description": "Fast clear/contratiempo palmas that articulate the Jerez party pulse without filling every subdivision.",
      "tags": [
        "buleria",
        "palmas",
        "contratiempo",
        "jaleo"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "palmas"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        7,
        8,
        9,
        11
      ],
      "accentProfile": [
        0.5,
        0.8,
        0.55,
        0.8,
        1,
        0.55,
        0.8,
        0.95
      ],
      "velocityProfile": [
        0.88,
        0.94,
        0.89,
        0.94,
        0.98,
        0.89,
        0.94,
        0.97
      ],
      "syncopationRating": 0.62,
      "articulations": [
        "palmas-claras"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "ending"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "percussion",
        "hand-percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-buleria-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.98,
      "enabled": true,
      "canCrossRole": true
    },
    {
      "id": "flam-alzapua-12",
      "worldId": "flamenco",
      "traditionId": "flamenco-buleria-style",
      "substyleId": "flamenco-buleria-style",
      "name": "Alzapúa over 12-Beat Compás",
      "family": "Thumb Technique",
      "category": "rolePattern",
      "description": "Thumb-driven bass/brush engine used as a guitar texture inside fast 12-beat compás rather than a generic 4/4 bass loop.",
      "tags": [
        "buleria",
        "alzapua",
        "pulgar"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "bass",
        "harmony",
        "counterline"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        11,
        0,
        2,
        4,
        5,
        7,
        8,
        9,
        11
      ],
      "accentProfile": [
        1,
        0.55,
        0.9,
        0.5,
        0.7,
        0.95,
        0.5,
        0.9,
        1
      ],
      "velocityProfile": [
        0.98,
        0.89,
        0.96,
        0.88,
        0.92,
        0.97,
        0.88,
        0.96,
        0.98
      ],
      "syncopationRating": 0.56,
      "articulations": [
        "alzapúa"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "solo",
        "chorus"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "bass",
        "harmony"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-buleria-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.96,
      "enabled": true
    },
    {
      "id": "flam-alegrias-compas",
      "worldId": "flamenco",
      "traditionId": "flamenco-alegrias-style",
      "substyleId": "flamenco-alegrias-style",
      "name": "Alegrías / Cantiñas Bright Compás",
      "family": "Cantiñas Compás",
      "category": "ostinato",
      "description": "Bright 12-beat cantiñas framework: the soleá-family accent architecture with lighter forward motion and major-key guitar harmony.",
      "tags": [
        "alegrias",
        "cantinas",
        "compas",
        "cadiz"
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
        "pulse"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        11,
        2,
        5,
        7,
        9
      ],
      "accentProfile": [
        1,
        0.75,
        0.78,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.98,
        0.93,
        0.94,
        0.97,
        0.96
      ],
      "syncopationRating": 0.8,
      "articulations": [
        "rasgueado"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "pulse"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-alegrias-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.98,
      "enabled": true
    },
    {
      "id": "flam-alegrias-palmas",
      "worldId": "flamenco",
      "traditionId": "flamenco-alegrias-style",
      "substyleId": "flamenco-alegrias-style",
      "name": "Alegrías Palmas",
      "family": "Cantiñas Palmas",
      "category": "rolePattern",
      "description": "Clear, buoyant palmas for Alegrías, brighter than Soleá and suited to dance entrances and escobilla.",
      "tags": [
        "alegrias",
        "palmas",
        "cadiz"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "palmas"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        4,
        5,
        7,
        9,
        11
      ],
      "accentProfile": [
        0.45,
        0.8,
        0.45,
        0.7,
        0.95,
        0.75,
        0.95
      ],
      "velocityProfile": [
        0.87,
        0.94,
        0.87,
        0.92,
        0.97,
        0.93,
        0.97
      ],
      "syncopationRating": 0.57,
      "articulations": [
        "palmas-claras"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "percussion",
        "hand-percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-alegrias-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.95,
      "enabled": true,
      "canCrossRole": true
    },
    {
      "id": "flam-escobilla-12",
      "worldId": "flamenco",
      "traditionId": "flamenco-alegrias-style",
      "substyleId": "flamenco-alegrias-style",
      "name": "Escobilla Footwork Pulse",
      "family": "Dance Footwork",
      "category": "pulse",
      "description": "Repeated footwork-support cell for the escobilla section: dry, even attacks that intensify without changing the underlying compás.",
      "tags": [
        "escobilla",
        "alegrias",
        "zapateado"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "pulse"
      ],
      "instruments": [
        "zapateado",
        "cajon"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        4,
        5,
        7,
        8,
        9,
        11
      ],
      "accentProfile": [
        0.6,
        0.55,
        0.6,
        0.75,
        0.85,
        0.6,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.9,
        0.89,
        0.9,
        0.93,
        0.95,
        0.9,
        0.96,
        0.94
      ],
      "syncopationRating": 0.5,
      "articulations": [
        "taconeo"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "solo",
        "chorus"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "percussion",
        "pulse"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-alegrias-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.93,
      "enabled": true,
      "canCrossRole": true
    },
    {
      "id": "flam-seguiriya-compas",
      "worldId": "flamenco",
      "traditionId": "flamenco-seguiriya-style",
      "substyleId": "flamenco-seguiriya-style",
      "name": "Seguiriya 2+2+3+3+2",
      "family": "Seguiriya Compás",
      "category": "phrasePattern",
      "description": "Seguiriya's asymmetric 2+2+3+3+2 grouping, deliberately unlike the smoother Soleá/Bulería accent profile.",
      "tags": [
        "seguiriya",
        "2+2+3+3+2",
        "jondo",
        "tension"
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
        "harmony"
      ],
      "instruments": [
        "guitar",
        "palmas"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        4,
        7,
        10
      ],
      "accentProfile": [
        1,
        0.82,
        1,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.98,
        0.94,
        0.98,
        0.97,
        0.96
      ],
      "syncopationRating": 0.2,
      "articulations": [
        "golpe + rasgueado"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "solo",
        "ending"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "pulse",
        "percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "flam-seguiriya-compas-corte",
          "parentPatternId": "flam-seguiriya-compas",
          "name": "Seguiriya Cierre",
          "variationType": "cadence",
          "probability": 0.4,
          "description": "Compressed closing gesture with dramatic space after the final accent.",
          "onsetGrid": [
            0,
            2,
            4,
            7,
            9,
            10
          ],
          "accentProfile": [
            1,
            0.8,
            0.95,
            0.9,
            0.65,
            1
          ],
          "velocityProfile": [
            0.98,
            0.94,
            0.97,
            0.96,
            0.91,
            0.98
          ]
        }
      ],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-seguiriya-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.99,
      "enabled": true
    },
    {
      "id": "flam-seguiriya-palmas",
      "worldId": "flamenco",
      "traditionId": "flamenco-seguiriya-style",
      "substyleId": "flamenco-seguiriya-style",
      "name": "Seguiriya Sparse Palmas",
      "family": "Seguiriya Palmas",
      "category": "rolePattern",
      "description": "Restrained hand percussion for cante jondo: sparse support, not a festive continuous clap.",
      "tags": [
        "seguiriya",
        "palmas",
        "jondo",
        "sparse"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "palmas"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        2,
        4,
        7,
        10
      ],
      "accentProfile": [
        0.7,
        0.8,
        0.85,
        1
      ],
      "velocityProfile": [
        0.92,
        0.94,
        0.95,
        0.98
      ],
      "syncopationRating": 0.25,
      "articulations": [
        "palmas-sordas"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "percussion",
        "hand-percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-seguiriya-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.94,
      "enabled": true,
      "canCrossRole": true
    },
    {
      "id": "flam-tangos-guitar",
      "worldId": "flamenco",
      "traditionId": "flamenco-tangos-style",
      "substyleId": "flamenco-tangos-style",
      "name": "Tangos Flamencos Guitar Compás",
      "family": "Binary Compás",
      "category": "ostinato",
      "description": "Flamenco tangos guitar pulse: beat 1 breathes while 2–3–4 carry the body of the compás, with optional contratiempo pickups.",
      "tags": [
        "tangos",
        "binary",
        "compas",
        "triana"
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
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.55,
        0.9,
        0.7,
        1,
        0.65,
        0.92,
        0.8
      ],
      "velocityProfile": [
        0.89,
        0.96,
        0.92,
        0.98,
        0.91,
        0.96,
        0.94
      ],
      "syncopationRating": 0.0,
      "articulations": [
        "rasgueado"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-tangos-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.98,
      "enabled": true
    },
    {
      "id": "flam-tientos-compas",
      "worldId": "flamenco",
      "traditionId": "flamenco-tientos-style",
      "substyleId": "flamenco-tientos-style",
      "name": "Tientos Slow Binary Compás",
      "family": "Tientos Compás",
      "category": "ostinato",
      "description": "Slower, heavier binary accompaniment related to tangos; more space, weight and triplet-like subdivision in the traditional feel.",
      "tags": [
        "tientos",
        "slow",
        "binary",
        "jondo"
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
        "pulse"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        6,
        8,
        12,
        14
      ],
      "accentProfile": [
        0.75,
        0.95,
        0.8,
        1,
        0.85,
        0.9
      ],
      "velocityProfile": [
        0.93,
        0.97,
        0.94,
        0.98,
        0.95,
        0.96
      ],
      "syncopationRating": 0.0,
      "articulations": [
        "rasgueado"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "pulse"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-tientos-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.98,
      "enabled": true
    },
    {
      "id": "flam-tientos-palmas",
      "worldId": "flamenco",
      "traditionId": "flamenco-tientos-style",
      "substyleId": "flamenco-tientos-style",
      "name": "Tientos Sparse Palmas",
      "family": "Tientos Palmas",
      "category": "rolePattern",
      "description": "Measured palmas supporting tientos without turning the palo into festive tangos.",
      "tags": [
        "tientos",
        "palmas",
        "sparse"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "palmas"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        6,
        10,
        14
      ],
      "accentProfile": [
        0.7,
        0.85,
        0.75,
        0.9
      ],
      "velocityProfile": [
        0.92,
        0.95,
        0.93,
        0.96
      ],
      "syncopationRating": 0.0,
      "articulations": [
        "palmas-sordas"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "percussion",
        "hand-percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-tientos-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.93,
      "enabled": true,
      "canCrossRole": true
    },
    {
      "id": "flam-farruca-guitar",
      "worldId": "flamenco",
      "traditionId": "flamenco-farruca-style",
      "substyleId": "flamenco-farruca-style",
      "name": "Farruca Slow Binary Guitar",
      "family": "Farruca Compás",
      "category": "ostinato",
      "description": "Dry slow 4-beat farruca accompaniment in minor, designed for grounded dance phrasing and a later subida.",
      "tags": [
        "farruca",
        "binary",
        "minor",
        "dance"
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
        "pulse"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.75,
        0.9
      ],
      "velocityProfile": [
        0.98,
        0.92,
        0.96,
        0.93,
        0.96
      ],
      "syncopationRating": 0.0,
      "articulations": [
        "golpe"
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
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "pulse"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-farruca-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.92,
      "enabled": true
    },
    {
      "id": "flam-sevillanas-compas",
      "worldId": "flamenco",
      "traditionId": "flamenco-sevillanas-style",
      "substyleId": "flamenco-sevillanas-style",
      "name": "Sevillanas 3/4 Copla Pulse",
      "family": "Sevillanas Compás",
      "category": "ostinato",
      "description": "Three-beat dance pulse organized for the four-copla Sevillanas form, with crisp guitar punctuation and copla remates.",
      "tags": [
        "sevillanas",
        "3/4",
        "copla",
        "dance"
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
        "pulse"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        4,
        8,
        10
      ],
      "accentProfile": [
        1,
        0.65,
        0.8,
        0.9
      ],
      "velocityProfile": [
        0.98,
        0.91,
        0.94,
        0.96
      ],
      "syncopationRating": 0.0,
      "articulations": [
        "rasgueado"
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
        "chorus",
        "ending"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "pulse"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-sevillanas-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.97,
      "enabled": true
    },
    {
      "id": "flam-rumba-bass",
      "worldId": "flamenco",
      "traditionId": "flamenco-rumba-style",
      "substyleId": "flamenco-rumba-style",
      "name": "Rumba Flamenca Bass Propulsion",
      "family": "Rumba Groove",
      "category": "bass",
      "description": "Rumba flamenca bass motion follows the guitar's forward strum, using roots, fifths and anticipatory pickups rather than generic rock bass.",
      "tags": [
        "rumba",
        "bass",
        "pickup",
        "abanico"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "bass"
      ],
      "instruments": [
        "bass",
        "upright-bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.9,
        0.55,
        0.85,
        0.8,
        0.65,
        0.9,
        0.75
      ],
      "velocityProfile": [
        0.96,
        0.89,
        0.95,
        0.94,
        0.91,
        0.96,
        0.93
      ],
      "syncopationRating": 0.14,
      "articulations": [
        "syncopated"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-rumba-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.94,
      "enabled": true
    },
    {
      "id": "flam-guajira-12",
      "worldId": "flamenco",
      "traditionId": "flamenco-guajira-style",
      "substyleId": "flamenco-guajira-style",
      "name": "Guajira 12-Beat Ternary/Binary Lilt",
      "family": "Guajira Compás",
      "category": "groove",
      "description": "Guajira's 12-beat ida-y-vuelta feel: light, syncopated guitar with a more songful and major-key profile than Soleá.",
      "tags": [
        "guajira",
        "ida-y-vuelta",
        "12beat",
        "cuba"
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
        "pulse"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        11,
        2,
        5,
        7,
        9
      ],
      "accentProfile": [
        1,
        0.7,
        0.75,
        0.85,
        0.8
      ],
      "velocityProfile": [
        0.98,
        0.92,
        0.93,
        0.95,
        0.94
      ],
      "syncopationRating": 0.8,
      "articulations": [
        "rasgueado"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "pulse"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-guajira-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "flam-fandango-3",
      "worldId": "flamenco",
      "traditionId": "flamenco-fandango-style",
      "substyleId": "flamenco-fandango-style",
      "name": "Fandango 3/4 Guitar Cycle",
      "family": "Fandango Ternary",
      "category": "ostinato",
      "description": "Ternary fandango accompaniment: four three-beat phrases with the characteristic move between modal opening and major/minor melodic centers.",
      "tags": [
        "fandango",
        "3/4",
        "huelva",
        "ternary"
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
        "pulse"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        4,
        8
      ],
      "accentProfile": [
        1,
        0.65,
        0.85
      ],
      "velocityProfile": [
        0.98,
        0.91,
        0.95
      ],
      "syncopationRating": 0.0,
      "articulations": [
        "rasgueado"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "harmonicContext": [
        "flamenco-modal",
        "Andalusian-cadence"
      ],
      "roleDependencies": [
        "harmony",
        "pulse"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
      "authenticityTags": [
        "flamenco",
        "flamenco-fandango-style"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "techniques": [
    "rasgueado (four/five-finger fan strum)",
    "abanico (thumb-finger-golpe fan)",
    "alzapúa (thumb bass/brush engine)",
    "picado (alternating rest-stroke scale run)",
    "arpeggio (p-i-m-a / p-a-m-i patterns)",
    "flamenco tremolo (p-i-a-m-i five-note figure)",
    "golpe (soundboard tap)",
    "ligado (hammer-on/pull-off)",
    "pulgar (thumb apoyando/free stroke)",
    "trémolo de tres (compact tremolo)",
    "palmas sordas (cupped) and palmas claras (bright)",
    "jaleo / vocal interjections",
    "zapateado / taconeo",
    "silencio / space as an authored event",
    "llamada → respuesta → remate → cierre"
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
  "engineProfile": {
    "phraseLengthsBars": [2,4,8,12],
    "primaryPulse": ["12-beat compás","4/4 binary compás","3/4 ternary compás","free/rubato cante"],
    "rhythmicPriorities": ["palo-specific compás before generic meter","accent architecture before subdivision density","llamada/remate/cierre at phrase boundaries","palmas and guitar interlock","space under cante"],
    "harmonicStrategy": ["Phrygian/Andalusian cadence for jondo palos","major-key cantiñas/Alegrías","minor binary for Farruca","major/modal ida-y-vuelta colors for Guajira","do not force functional pop cadences"],
    "melodicStrategy": ["cante-like ornament and melisma","falseta between letras","chord-tone targeting inside modal color","expressive slides and vibrato","space before response"],
    "arrangementStrategy": "Treat guitar compás as the clock; add palmas/cajón according to palo; use voice/cante as the foreground; make llamadas, cortes, remates and cierres structural events.",
    "engineConstraints": ["Never substitute a 4/4 groove for a 12-beat palo","Seguiriya uses 2+2+3+3+2 accents, not the Soleá map","Alegrías should not inherit Soleá's dark harmonic profile","Bulería density comes from interaction and cuts, not constant subdivision spam","Rumba and Sevillanas are separate dance vocabularies","Use bass sparingly outside Rumba/New Flamenco contexts"],
    "variationStrategy": "Prefer authored palo variants at phrase boundaries; alternate rasgueado density, palmas response, falseta and remate rather than generic fills.",
    "harmonicModel": "functional-harmony",
    "pitchModel": "flamenco-phrygian-plus-major-cantiñas",
    "timingModel": "authored-phrase"
  },
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
  "tuningSystem": "phrygian-mode",
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
