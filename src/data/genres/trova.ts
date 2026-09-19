import { GenreWorld } from '../../types';

export const TROVA_WORLD: GenreWorld = {
  "id": "trova",
  "name": "Trova",
  "family": "Cuban / Caribbean singer-songwriter",
  "color": "#6f7d9b",
  "level": "world",
  "description": "Trova is modeled as a lyric-centered Cuban song family. The engine separates traditional trova, nueva trova and bolero-trova so guitar intimacy, tres-derived rhythm and ensemble expansion can coexist without forcing salsa/timba mechanics onto the repertoire.",
  "traditions": [
    {
      "id": "trova-nueva-trova",
      "worldId": "trova",
      "name": "Nueva Trova",
      "origin": "Havana, Cuba",
      "era": "1960s–1980s",
      "description": "Poetic Voice • Nylon Guitar • Social Consciousness\nHeartfelt poetic Cuban revolutionary songwriting.\nSilvio Rodríguez · Pablo Milanés",
      "characteristicInstruments": [
        "acoustic-guitar",
        "voice",
        "flute",
        "cello"
      ],
      "preferredMeters": [
        "4/4",
        "3/4",
        "6/8"
      ],
      "tempoRange": [
        75,
        105
      ],
      "keySubstyles": [
        "Trova Cubana",
        "Canto Poético"
      ],
      "coreConcepts": [
        "Silvio Rodríguez intricate fingerpicking guitar accompaniment",
        "profound literary poetry and metaphors of love and justice",
        "rubato phrasing following poetic cadence",
        "clean nylon acoustic timbre"
      ],
      "rhythmicGrammar": [
        "elastic lyrical guitar arpeggios flowing with the poetic vocal phrasing and breathing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Intricate nylon guitar fingerpicking arpeggio supporting Silvio Rodríguez poetic vocal cadence",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "Em",
          "C",
          "D7"
        ],
        "verso": [
          "G",
          "Em",
          "C",
          "D7",
          "Bm",
          "Em",
          "C",
          "D7"
        ],
        "estribillo": [
          "C",
          "D7",
          "G",
          "Em",
          "C",
          "D7",
          "G",
          "G"
        ],
        "coda": [
          "C",
          "D7",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "trova-trova-tradicional",
      "worldId": "trova",
      "name": "Trova Tradicional",
      "origin": "Santiago de Cuba",
      "era": "Late 19th–Early 20th Century",
      "description": "Dual Guitars • Harmonized Voices • Bolero Roots\nThe cradle of Cuban bolero and acoustic song.\nSindo Garay · Compay Segundo",
      "characteristicInstruments": [
        "acoustic-guitar",
        "claves",
        "maracas",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "2/4"
      ],
      "tempoRange": [
        80,
        100
      ],
      "keySubstyles": [
        "Trova Santiaguera",
        "Bolero-Trova"
      ],
      "coreConcepts": [
        "two guitars playing primo (melody) and segundo (rhythmic bass counterpoint)",
        "harmonized two-part vocal singing in thirds and sixths",
        "bolero and son roots",
        "romantic chivalric lyrics"
      ],
      "rhythmicGrammar": [
        "gentle 4/4 bolero or son strumming with soft acoustic guitar rasgueo and clave ticks"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Two-part vocal harmony in thirds soaring over twin acoustic guitars in Santiago de Cuba style",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "cancion": [
          "Am",
          "Dm",
          "E7",
          "Am",
          "C",
          "G7",
          "C",
          "E7",
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "coda": [
          "Dm",
          "E7",
          "Am",
          "Am"
        ]
      }
    }
  ],
  "substyles": [
    "Nueva Trova",
    "Trova Tradicional"
  ],
  "artists": [
    "Silvio Rodríguez",
    "Pablo Milanés",
    "Sindo Garay",
    "Compay Segundo"
  ],
  "concepts": [
    "lyric-first phrasing",
    "guitar arpeggiation",
    "tres guajeo",
    "bolero cadence",
    "call-and-response"
  ],
  "roles": {
    "voice": [
      "lyric-led phrasing",
      "pickup/answer"
    ],
    "harmony": [
      "guitar arpeggio",
      "tres guajeo"
    ],
    "bass": [
      "broad supportive movement"
    ],
    "texture": [
      "strings/piano expansion"
    ]
  },
  "patterns": [
    {
      "id": "tr-trova-arpeggio",
      "worldId": "trova",
      "traditionId": "trova-traditional",
      "name": "Trova Guitar Arpeggio",
      "family": "Trova Guitar",
      "category": "ostinato",
      "description": "Nylon-guitar arpeggio with bass note on the downbeat and open space for the lyric.",
      "tags": [
        "trova",
        "arpeggio",
        "guitar"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "guitar",
        "tres"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        7,
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.72,
        0.9,
        0.65,
        0.88,
        0.7,
        0.82,
        0.62
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58,
        0.84,
        0.64,
        0.78,
        0.58
      ],
      "syncopationRating": 0.58,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "fingerstyle"
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
        "chorus"
      ],
      "patternFunction": null,
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "tr-trova-arpeggio-v-sparse",
          "parentPatternId": "tr-trova-arpeggio",
          "name": "Trova Guitar Arpeggio — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9,
            0.65
          ]
        },
        {
          "id": "tr-trova-arpeggio-v-shift",
          "parentPatternId": "tr-trova-arpeggio",
          "name": "Trova Guitar Arpeggio — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            2,
            4,
            7,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7,
            0.95,
            0.7,
            0.95,
            0.7
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "trova",
        "arpeggio",
        "guitar"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.85,
      "enabled": true
    },
    {
      "id": "tr-tres-guajeo",
      "worldId": "trova",
      "traditionId": "trova-traditional",
      "name": "Trova Tres Guajeo",
      "family": "Tres Guajeos",
      "category": "ostinato",
      "description": "Short interlocking tres figure that implies son-derived motion without becoming a full salsa montuno.",
      "tags": [
        "tres",
        "guajeo",
        "son"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "tres"
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
        0.72,
        0.9,
        0.65,
        0.88,
        0.7
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58,
        0.84,
        0.64
      ],
      "syncopationRating": 0.78,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "pluck"
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
      "patternFunction": null,
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "tr-tres-guajeo-v-sparse",
          "parentPatternId": "tr-tres-guajeo",
          "name": "Trova Tres Guajeo — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            6,
            11
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "tr-tres-guajeo-v-shift",
          "parentPatternId": "tr-tres-guajeo",
          "name": "Trova Tres Guajeo — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7,
            0.95,
            0.7
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "tres",
        "guajeo",
        "son"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.85,
      "enabled": true
    },
    {
      "id": "tr-voice-pickup",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Lyric Pickup & Answer",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "A vocal phrase starts slightly before the bar and the guitar/ensemble answers after the cadence.",
      "tags": [
        "trova",
        "voice",
        "answer"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "voice"
      ],
      "instruments": [
        "voice",
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        14,
        16,
        20,
        24,
        28
      ],
      "accentProfile": [
        1,
        0.72,
        0.9,
        0.65,
        0.88
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58,
        0.84
      ],
      "syncopationRating": 0.82,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "legato"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge"
      ],
      "patternFunction": null,
      "roleDependencies": [],
      "interactionRules": [
        {
          "id": "tr-voice-answer",
          "sourceRole": "voice",
          "targetRole": "guitar",
          "relationship": "answer",
          "description": "Guitar fills the gap after a vocal phrase.",
          "timingOffsetSteps": 4,
          "probability": 0.76,
          "worldId": "trova"
        }
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "tr-voice-pickup-v-sparse",
          "parentPatternId": "tr-voice-pickup",
          "name": "Lyric Pickup & Answer — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            14,
            20,
            28
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "tr-voice-pickup-v-shift",
          "parentPatternId": "tr-voice-pickup",
          "name": "Lyric Pickup & Answer — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            14,
            16,
            20,
            24,
            28
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7,
            0.95
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "trova",
        "voice",
        "answer"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.85,
      "enabled": true
    },
    {
      "id": "tr-bolero-bass",
      "worldId": "trova",
      "traditionId": "trova-bolero",
      "name": "Bolero Bass & Guitar Bed",
      "family": "Bolero Foundation",
      "category": "ostinato",
      "description": "Broad bass attacks and soft guitar arpeggiation support a slow romantic line.",
      "tags": [
        "bolero",
        "bass",
        "trova"
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
        "upright-bass",
        "bass",
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
        1,
        0.72,
        0.9,
        0.65
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58
      ],
      "syncopationRating": 0.25,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": null,
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "tr-bolero-bass-v-sparse",
          "parentPatternId": "tr-bolero-bass",
          "name": "Bolero Bass & Guitar Bed — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.9,
            0.65
          ]
        },
        {
          "id": "tr-bolero-bass-v-shift",
          "parentPatternId": "tr-bolero-bass",
          "name": "Bolero Bass & Guitar Bed — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "bolero",
        "bass",
        "trova"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.85,
      "enabled": true
    },
    {
      "id": "tr-trova-cadence",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Trova Cadential Tag",
      "family": "Song Cadences",
      "category": "cadence",
      "description": "A compact phrase-ending guitar/ensemble tag that leaves the last beat available for the singer.",
      "tags": [
        "cadence",
        "trova"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "guitar",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.72,
        0.9,
        0.65
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58
      ],
      "syncopationRating": 0.52,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "rubato"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "ending",
        "coda",
        "bridge"
      ],
      "patternFunction": null,
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "tr-trova-cadence-v-sparse",
          "parentPatternId": "tr-trova-cadence",
          "name": "Trova Cadential Tag — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            8,
            12
          ],
          "accentProfile": [
            0.9,
            0.65
          ]
        },
        {
          "id": "tr-trova-cadence-v-shift",
          "parentPatternId": "tr-trova-cadence",
          "name": "Trova Cadential Tag — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "cadence",
        "trova"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.85,
      "enabled": true
    },
    {
      "id": "tr-06-trova-fingerpicked-arpeggio",
      "worldId": "trova",
      "traditionId": "trova-cuban",
      "name": "Trova Fingerpicked Arpeggio",
      "family": "Cuban Trova",
      "category": "ostinato",
      "description": "Alternating guitar arpeggio that supports lyric phrasing without filling every subdivision.",
      "tags": [
        "fingerpicking",
        "lyric space"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
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
        3,
        6,
        9,
        12,
        15
      ],
      "accentProfile": [
        0.75,
        0.5,
        0.65,
        0.48,
        0.72,
        0.55
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "fingerpicking",
        " lyric space"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus"
      ],
      "patternFunction": "Trova Fingerpicked Arpeggio",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Cuban Trova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "fingerpicking",
        "lyric space"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-07-tres-guajeo-sketch",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Tres Guajeo Sketch",
      "family": "Cuban Trova",
      "category": "ostinato",
      "description": "Compact tres-derived repeated figure adapted to a guitar-like engine carrier.",
      "tags": [
        "tres",
        "guajeo"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "guitar"
      ],
      "instruments": [
        "tres",
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        11,
        14,
        16,
        19,
        22,
        24,
        27,
        30
      ],
      "accentProfile": [
        0.8,
        0.55,
        0.7,
        0.5,
        0.82,
        0.58,
        0.8,
        0.55,
        0.7,
        0.52,
        0.8,
        0.6
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "tres",
        " guajeo"
      ],
      "density": "dense",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Tres Guajeo Sketch",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Cuban Trova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "tres",
        "guajeo"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-08-trova-vocal-pickup",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Trova sung pickup",
      "family": "Voice",
      "category": "phrasePattern",
      "description": "Brief pickup into a sung phrase; unlike dembow pickups, it is a rubato/lyric-led entrance rather than a dance-grid device.",
      "tags": [
        "pickup",
        "rubato"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "voice"
      ],
      "instruments": [
        "voice"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        12,
        14,
        15
      ],
      "accentProfile": [
        0.45,
        0.65,
        0.9
      ],
      "syncopationRating": 1,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "pickup",
        " rubato"
      ],
      "density": "sparse",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Trova Vocal Pickup",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Voice; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "pickup",
        "rubato"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-09-bolero-trova-bass",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Bolero-trova bass response",
      "family": "Bolero-Trova",
      "category": "bass",
      "description": "Bass answers the guitar harmony with restrained anticipations characteristic of bolero-derived accompaniment.",
      "tags": [
        "bolero",
        "bass"
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
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        8,
        13
      ],
      "accentProfile": [
        0.85,
        0.45,
        0.7,
        0.5
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "bolero",
        " bass"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Bolero-Trova Bass",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Bolero-Trova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bolero",
        "bass"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-10-trova-descending-turn",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Trova descending harmonic turn",
      "family": "Harmony",
      "category": "cell",
      "description": "Descending guitar/piano response used to connect lyrical phrases; not a generic four-beat cadence.",
      "tags": [
        "descending turn"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "guitar",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        7,
        12
      ],
      "accentProfile": [
        0.75,
        0.65,
        0.7,
        0.8
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "descending turn"
      ],
      "density": "medium",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "verse",
        "bridge"
      ],
      "patternFunction": "Trova Descending Turn",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Harmony; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "descending turn"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-11-nueva-trova-counterline",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Nueva Trova Counterline",
      "family": "Nueva Trova",
      "category": "counterline",
      "description": "Independent guitar figure responds between vocal phrases, allowing political/poetic lyric density.",
      "tags": [
        "counterline",
        "lyric density"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "counterline"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        4,
        10,
        20,
        26
      ],
      "accentProfile": [
        0.55,
        0.7,
        0.6,
        0.75
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "counterline",
        " lyric density"
      ],
      "density": "medium",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Nueva Trova Counterline",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Nueva Trova; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "counterline",
        "lyric density"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-12-trova-chorus-lift",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Trova Chorus Lift",
      "family": "Section",
      "category": "sectionPattern",
      "description": "Add second guitar/piano support and longer vocal cadences in the refrain.",
      "tags": [
        "refrain lift"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "guitar",
        "piano",
        "voice"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        16,
        20,
        24,
        28
      ],
      "accentProfile": [
        0.7,
        0.55,
        0.7,
        0.55,
        0.8,
        0.6,
        0.75,
        0.62
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "refrain lift"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "chorus"
      ],
      "patternFunction": "Trova Chorus Lift",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Section; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "refrain lift"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-13-trova-breath-break",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Trova Breath Break",
      "family": "Break",
      "category": "break",
      "description": "Drop accompaniment for a vocal line ending; return on the next phrase.",
      "tags": [
        "breath",
        "space"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "texture"
      ],
      "instruments": [
        "voice",
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        12
      ],
      "accentProfile": [
        0.9,
        0.65
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        " space"
      ],
      "density": "sparse",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "bridge",
        "breakdown"
      ],
      "patternFunction": "Trova Breath Break",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Break; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "breath",
        "space"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-14-trova-tres-answer",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Trova Tres Answer",
      "family": "Interaction",
      "category": "interactionPattern",
      "description": "Tres/guitar answer after a vocal cadence, kept shorter than the vocal phrase.",
      "tags": [
        "answer"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "counterline"
      ],
      "instruments": [
        "tres",
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        8,
        10,
        13,
        15
      ],
      "accentProfile": [
        0.5,
        0.65,
        0.55,
        0.75
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "answer"
      ],
      "density": "medium",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Trova Tres Answer",
      "roleDependencies": [
        "melody"
      ],
      "interactionRules": [
        {
          "id": "tr-14-trova-tres-answer-answer",
          "sourceRole": "counterline",
          "targetRole": "melody",
          "relationship": "answer",
          "timingOffsetSteps": 2,
          "probability": 0.75,
          "worldId": "trova",
          "description": "Enter only after the source phrase leaves a response window."
        }
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Interaction; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "answer"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    },
    {
      "id": "tr-15-trova-cadential-ii-v",
      "worldId": "trova",
      "traditionId": "trova-nueva",
      "name": "Trova dominant arrival",
      "family": "Cadence",
      "category": "cadence",
      "description": "Compact dominant-arrival figure for a phrase ending, leaving the tonic resolution to the following bar.",
      "tags": [
        "ii-V",
        "cadence"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "guitar",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        5,
        8,
        13
      ],
      "accentProfile": [
        0.7,
        0.6,
        0.72,
        0.9
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "ii-V",
        " cadence"
      ],
      "density": "medium",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "bridge",
        "ending"
      ],
      "patternFunction": "Trova Cadential II-V",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "ii-V",
        "cadence"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.82,
      "enabled": true
    }
  ],
  "engineProfile": {
    "phraseLengthsBars": [
      1,
      2,
      4
    ],
    "primaryPulse": [
      "lyric-first phrasing",
      "guitar/vocal interdependence",
      "breath and cadence"
    ],
    "rhythmicPriorities": [
      "lyric-first phrasing",
      "guitar/vocal interdependence",
      "breath and cadence"
    ],
    "harmonicStrategy": [
      "functional song harmony",
      "ii-V and descending turns",
      "extended colors when they serve lyric emphasis"
    ],
    "melodicStrategy": [
      "melodic speech contour",
      "pickup/cadence gestures",
      "guitar counterlines"
    ],
    "arrangementStrategy": "Short guitar intro, lyric verses, refrain lift, instrumental/guitar response, final lyric peak and coda are common; allow asymmetrical phrase breathing.",
    "engineConstraints": [
      "Do not force a dance groove; do not make every guitar attack identical; preserve lyric space.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "lyric-space management",
    "guitar answer placement",
    "rubato entrance",
    "ensemble growth"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "bridge",
    "instrumental",
    "coda"
  ],
  "relationships": [
    "voice ↔ guitar",
    "tres ↔ bass",
    "voice ↔ strings"
  ],
  "songBehaviors": [
    "keep accompaniment subordinate to lyric",
    "grow instrumentation by section",
    "use rubato at phrase boundaries",
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize lyric-first phrasing and guitar/vocal interdependence as the identity layer.",
    "Use melodic speech contour and pickup/cadence gestures for development rather than generic fills."
  ],
  "instrumentIdeas": {
    "guitar": [
      "nylon fingerstyle / arpeggio"
    ],
    "tres": [
      "bright interlocking pluck"
    ],
    "voice": [
      "intimate Cuban singer-songwriter line"
    ],
    "piano": [
      "supportive harmonic punctuation"
    ],
    "strings": [
      "late-section counterline"
    ]
  },
  "combinations": [
    "Trova + Folk",
    "Nueva Trova + Rock",
    "Trova + Son"
  ],
  "danceTags": [
    "listening",
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Intimate voice-and-guitar phrase with tres-derived rhythmic color",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back",
    "humanizeJitterMs": 12
  },
  "crossLinks": [
    "Trova ↔ Latin Folk",
    "Trova ↔ Salsa / Son"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
