import { GenreWorld } from '../../types';

export const FOLCLORICO_WORLD : GenreWorld = {
  "id": "folclorico",
  "name": "Latin American Folclórico",
  "family": "Latin American folk traditions",
  "color": "#b36b2c",
  "level": "world",
  "description": "Folclórico is treated as an umbrella rather than a single beat. Andean, Mexican son/huapango, and Southern Cone traditions have different meters, instruments and accent grammars; the engine preserves those differences while offering shared Latin-folk interoperability.",
  "traditions": [
    {
      "id": "folclorico-andean",
      "worldId": "folclorico",
      "name": "Andean Folklore",
      "origin": "Andes: Peru, Bolivia, Ecuador, northern Chile/Argentina",
      "era": "Traditional–Present",
      "description": "A broad highland family featuring panpipes/quena, charango, guitar and hand percussion; pentatonic/modal melodies and repeating dance rhythms vary strongly by region.",
      "characteristicInstruments": [
        "quena",
        "pan-flute",
        "charango",
        "guitar",
        "cajon"
      ],
      "preferredMeters": [
        "2/4",
        "4/4",
        "6/8"
      ],
      "tempoRange": [
        70,
        150
      ],
      "keySubstyles": [
        "Huayno",
        "Carnavalito",
        "Sikuri",
        "Saya"
      ],
      "coreConcepts": [
        "huayno rhythm",
        "panpipe parallelism",
        "charango strum",
        "pentatonic melody"
      ],
      "rhythmicGrammar": [
        "binary/compound dance cells",
        "short anticipations around phrase endings"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Charango strum under a quena/panpipe pentatonic melody",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 10
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "verse": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "chorus": [
          "C",
          "G",
          "Am",
          "F"
        ],
        "solo": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "coda": [
          "Am",
          "Am",
          "E7",
          "Am"
        ]
      }
    },
    {
      "id": "folclorico-mexican",
      "worldId": "folclorico",
      "name": "Mexican Son & Huapango",
      "origin": "Mexico",
      "era": "Traditional–Present",
      "description": "Regional son traditions with guitar-family strumming, violin and winds/brass; meter and accent patterns vary across son jarocho, huapango and related repertories.",
      "characteristicInstruments": [
        "guitar",
        "violin",
        "jarana",
        "marimba",
        "trumpet"
      ],
      "preferredMeters": [
        "3/4",
        "6/8",
        "4/4"
      ],
      "tempoRange": [
        80,
        170
      ],
      "keySubstyles": [
        "Son Jarocho",
        "Huapango",
        "Son Huasteco",
        "Mariachi-adjacent folk"
      ],
      "coreConcepts": [
        "sesquialtera",
        "jarana strum",
        "violin ornament",
        "dance zapateado"
      ],
      "rhythmicGrammar": [
        "3:2/2:3 cross-meter feel",
        "compound-duple and triple-meter alternation"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Jarana/guitar strum interlocking with violin on a 6/8–3/4 cross-feel",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed",
        "humanizeJitterMs": 9
      }
    },
    {
      "id": "folclorico-southern-cone",
      "worldId": "folclorico",
      "name": "Southern Cone Folk",
      "origin": "Argentina, Uruguay, Chile",
      "era": "Traditional–Present",
      "description": "Chacarera, zamba and related song/dance forms using guitar, bombo, violin and hand percussion, with strong 6/8–3/4 interplay and phrase-specific accents.",
      "characteristicInstruments": [
        "guitar",
        "fiddle",
        "cajon",
        "bass"
      ],
      "preferredMeters": [
        "6/8",
        "3/4",
        "4/4"
      ],
      "tempoRange": [
        70,
        145
      ],
      "keySubstyles": [
        "Chacarera",
        "Zamba",
        "Cueca",
        "Milonga folklórica"
      ],
      "coreConcepts": [
        "6/8–3/4 hemiola",
        "bombo legüero",
        "rasgueo",
        "palmas"
      ],
      "rhythmicGrammar": [
        "compound and triple accents interlock",
        "cadential hand-clap/bombo figures"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "6/8 guitar/bombo cycle with 3/4 counter-accent",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 10
      }
    }
  ],
  "substyles": [
    "Andean Folklore",
    "Huayno",
    "Sikuri",
    "Son Jarocho",
    "Huapango",
    "Chacarera",
    "Zamba",
    "Cueca"
  ],
  "artists": [
    "Mercedes Sosa",
    "Atahualpa Yupanqui",
    "Los Kjarkas",
    "Amparo Ochoa",
    "Lila Downs",
    "Inti-Illimani"
  ],
  "concepts": [
    "6/8–3/4 hemiola",
    "charango",
    "quena",
    "bombo legüero",
    "jarana",
    "sesquialtera"
  ],
  "roles": {
    "harmony": [
      "charango/guitar strum",
      "jarana cells"
    ],
    "melody": [
      "quena/panpipe",
      "violin"
    ],
    "percussion": [
      "bombo/cajon"
    ],
    "voice": [
      "regional folk phrase"
    ]
  },
  "patterns": [
  {
    "id": "ff-huayno-strum",
    "worldId": "folclorico",
    "traditionId": "folclorico-andean",
    "name": "Huayno Charango Strum",
    "family": "Andean Strums",
    "category": "groove",
    "description": "Alternating short/long charango strokes supporting a pentatonic melody.",
    "tags": [
      "huayno",
      "charango",
      "andean"
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
      "charango",
      "guitar"
    ],
    "meter": "2/4",
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
    "syncopationRating": 0.6,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "strum"
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
        "id": "ff-huayno-strum-v-sparse",
        "parentPatternId": "ff-huayno-strum",
        "name": "Huayno Charango Strum — sparse",
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
        "id": "ff-huayno-strum-v-shift",
        "parentPatternId": "ff-huayno-strum",
        "name": "Huayno Charango Strum — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "huayno",
      "charango",
      "andean"
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
    "id": "ff-sesquialtera",
    "worldId": "folclorico",
    "traditionId": "folclorico-mexican",
    "name": "Sesquialtera Strum",
    "family": "Mexican Son Cells",
    "category": "groove",
    "description": "A compound/triple cross-accent cell representing the 6/8–3/4 interaction common to Mexican son families.",
    "tags": [
      "sesquialtera",
      "son",
      "6/8"
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
      "violin"
    ],
    "meter": "6/8",
    "cycleLength": 1,
    "subdivisions": 12,
    "onsetGrid": [
      0,
      3,
      6,
      8,
      10
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
    "syncopationRating": 0.8,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "strum"
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
        "id": "ff-sesquialtera-v-sparse",
        "parentPatternId": "ff-sesquialtera",
        "name": "Sesquialtera Strum — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          6,
          10
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "ff-sesquialtera-v-shift",
        "parentPatternId": "ff-sesquialtera",
        "name": "Sesquialtera Strum — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          3,
          6,
          8,
          10
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "sesquialtera",
      "son",
      "6/8"
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
    "id": "ff-bombo-leguero",
    "worldId": "folclorico",
    "traditionId": "folclorico-southern-cone",
    "name": "Bombo Legüero Foundation",
    "family": "Southern Cone Percussion",
    "category": "groove",
    "description": "Low/high bombo-style interlock mapped to available hand-drum/kit carriers.",
    "tags": [
      "bombo",
      "chacarera",
      "6/8"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "percussion"
    ],
    "instruments": [
      "cajon",
      "drums"
    ],
    "meter": "6/8",
    "cycleLength": 1,
    "subdivisions": 12,
    "onsetGrid": [
      0,
      3,
      6,
      8,
      10
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
    "syncopationRating": 0.65,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "hand-drum"
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
        "id": "ff-bombo-leguero-v-sparse",
        "parentPatternId": "ff-bombo-leguero",
        "name": "Bombo Legüero Foundation — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          6,
          10
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "ff-bombo-leguero-v-shift",
        "parentPatternId": "ff-bombo-leguero",
        "name": "Bombo Legüero Foundation — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          3,
          6,
          8,
          10
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "bombo",
      "chacarera",
      "6/8"
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
    "id": "ff-quena-answer",
    "worldId": "folclorico",
    "traditionId": "folclorico-andean",
    "name": "Quena phrase answer",
    "family": "Andean Melody",
    "category": "phrasePattern",
    "description": "Breath-shaped quena response phrase; the exact notes are generated later from the regional melodic vocabulary.",
    "tags": [
      "quena",
      "pentatonic",
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
      "melody"
    ],
    "instruments": [
      "quena",
      "pan-flute"
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
    "syncopationRating": 0.68,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "breath"
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
        "id": "ff-quena-answer-v-sparse",
        "parentPatternId": "ff-quena-answer",
        "name": "Quena Pentatonic Answer — sparse",
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
        "id": "ff-quena-answer-v-shift",
        "parentPatternId": "ff-quena-answer",
        "name": "Quena Pentatonic Answer — accent shift",
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "quena",
      "pentatonic",
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
    "id": "ff-zamba-6-8",
    "worldId": "folclorico",
    "traditionId": "folclorico-southern-cone",
    "name": "Zamba 6/8–3/4 Interlock",
    "family": "Zamba Cells",
    "category": "ostinato",
    "description": "Compound-duple pattern with a secondary 3/4 accent layer, preserving the dance's cross-meter identity.",
    "tags": [
      "zamba",
      "hemiola",
      "6/8"
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
      "fiddle"
    ],
    "meter": "6/8",
    "cycleLength": 2,
    "subdivisions": 24,
    "onsetGrid": [
      0,
      4,
      8,
      12,
      16,
      20
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
    "syncopationRating": 0.84,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "rasgueo"
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
        "id": "ff-zamba-6-8-v-sparse",
        "parentPatternId": "ff-zamba-6-8",
        "name": "Zamba 6/8–3/4 Interlock — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          8,
          16
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "ff-zamba-6-8-v-shift",
        "parentPatternId": "ff-zamba-6-8",
        "name": "Zamba 6/8–3/4 Interlock — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          4,
          8,
          12,
          16,
          20
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "zamba",
      "hemiola",
      "6/8"
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
    "id": "ff-06-huayno-strum",
    "worldId": "folclorico",
    "traditionId": "folclorico-andean",
    "name": "Huayno Strum",
    "family": "Andean",
    "category": "groove",
    "description": "Driving guitar/charango strum in a binary 2/4-feeling dance pulse.",
    "tags": [
      "huayno",
      "strum"
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
      "guitar",
      "charango"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      0,
      2,
      4,
      6
    ],
    "accentProfile": [
      1,
      0.55,
      0.82,
      0.62
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "huayno",
      " strum"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Huayno Strum",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Andean; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "huayno",
      "strum"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-07-andean-bombo-foundation",
    "worldId": "folclorico",
    "traditionId": "folclorico-andean",
    "name": "Andean Bombo Foundation",
    "family": "Andean",
    "category": "groove",
    "description": "Low drum anchors the dance while smaller percussion fills the spaces.",
    "tags": [
      "bombo",
      "downbeat"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "percussion"
    ],
    "instruments": [
  "bombo-leguero"
],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      0,
      4
    ],
    "accentProfile": [
      1,
      0.72
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "bombo",
      " downbeat"
    ],
    "density": "sparse",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Andean Bombo Foundation",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Andean; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "bombo",
      "downbeat"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-08-quena-answer",
    "worldId": "folclorico",
    "traditionId": "folclorico-andean",
    "name": "Quena Answer",
    "family": "Andean",
    "category": "interactionPattern",
    "description": "Quena phrase answers the sung/charango melody in short pentatonic gestures.",
    "tags": [
      "quena",
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
      "lead"
    ],
    "instruments": [
      "quena"
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
      0.65,
      0.8,
      0.58,
      0.75
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "quena",
      " answer"
    ],
    "density": "medium",
    "phrasePosition": [
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Quena Answer",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "ff-08-quena-answer-answer",
        "sourceRole": "lead",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "folclorico",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Andean; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "quena",
      "answer"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-09-charango-tremolo",
    "worldId": "folclorico",
    "traditionId": "folclorico-andean",
    "name": "Charango Tremolo",
    "family": "Andean",
    "category": "ostinato",
    "description": "Fast repeated-note tremolo or rolled figure used as a melodic texture, not a synth pad.",
    "tags": [
      "charango",
      "tremolo"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "melody"
    ],
    "instruments": [
      "charango"
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
      0.5,
      0.65,
      0.52,
      0.68,
      0.55,
      0.7,
      0.52,
      0.72
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "charango",
      " tremolo"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "chorus",
      "solo"
    ],
    "patternFunction": "Charango Tremolo",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Andean; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "charango",
      "tremolo"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-10-son-huapango-sesquialtera",
    "worldId": "folclorico",
    "traditionId": "folclorico-mexican",
    "name": "Son Huapango Sesquialtera",
    "family": "Mexican",
    "category": "groove",
    "description": "Alternating 6/8 and 3/4 accent logic; the pattern must preserve the hemiola rather than flatten it.",
    "tags": [
      "sesquialtera",
      "6/8-3/4"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "pulse"
    ],
    "instruments": [
  "guitar",
  "vihuela"
],
    "meter": "6/8",
    "cycleLength": 2,
    "subdivisions": 24,
    "onsetGrid": [
      0,
      3,
      6,
      9,
      12,
      15,
      18,
      21
    ],
    "accentProfile": [
      1,
      0.55,
      0.8,
      0.6,
      1,
      0.5,
      0.78,
      0.62
    ],
    "syncopationRating": 0.75,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "sesquialtera",
      " 6/8-3/4"
    ],
    "density": "dense",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Son Huapango Sesquialtera",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Mexican; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "sesquialtera",
      "6/8-3/4"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-11-jarana-strum",
    "worldId": "folclorico",
    "traditionId": "folclorico-mexican",
    "name": "Jarana Strum",
    "family": "Mexican",
    "category": "cell",
    "description": "Bright repeated strum with accent displacement characteristic of son-derived ensemble texture.",
    "tags": [
      "jarana",
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
      "guitar"
    ],
    "instruments": [
      "jarana"
    ],
    "meter": "6/8",
    "cycleLength": 1,
    "subdivisions": 12,
    "onsetGrid": [
      0,
      2,
      4,
      6,
      8,
      10
    ],
    "accentProfile": [
      0.9,
      0.55,
      0.7,
      0.5,
      0.82,
      0.6
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "jarana",
      " son"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Jarana Strum",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Mexican; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "jarana",
      "son"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-12-zamba-6-8-cue",
    "worldId": "folclorico",
    "traditionId": "folclorico-southern-cone",
    "name": "Zamba guitar accent cue",
    "family": "Southern Cone",
    "category": "groove",
    "description": "Guitar accent pattern for Argentine zamba; avoids using a generic percussion cue as the primary identity.",
    "tags": [
      "zamba",
      "6/8"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "percussion"
    ],
    "instruments": [
      "guitar"
    ],
    "meter": "6/8",
    "cycleLength": 1,
    "subdivisions": 12,
    "onsetGrid": [
      0,
      4,
      6,
      9
    ],
    "accentProfile": [
      0.9,
      0.5,
      0.78,
      0.58
    ],
    "syncopationRating": 0.75,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "zamba",
      " 6/8"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Zamba 6/8 Cue",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Southern Cone; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "zamba",
      "6/8"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-13-bombo-leg-ero-march",
    "worldId": "folclorico",
    "traditionId": "folclorico-southern-cone",
    "name": "Bombo legüero low/high alternation",
    "family": "Southern Cone",
    "category": "groove",
    "description": "Low/high bombo legüero alternation for Argentine folk accompaniment.",
    "tags": [
      "bombo legüero"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "percussion"
    ],
    "instruments": [
      "bombo-leguero"
    ],
    "meter": "6/8",
    "cycleLength": 2,
    "subdivisions": 24,
    "onsetGrid": [
      0,
      5,
      8,
      13,
      16,
      21
    ],
    "accentProfile": [
      1,
      0.72,
      0.9,
      0.68,
      1,
      0.72
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "bombo legüero"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "dance"
    ],
    "patternFunction": "Bombo Legüero March",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Southern Cone; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "bombo legüero"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-14-copla-call-response",
    "worldId": "folclorico",
    "traditionId": "folclorico-southern-cone",
    "name": "Copla Call-Response",
    "family": "Regional",
    "category": "interactionPattern",
    "description": "Lead vocal/cantor phrase followed by instrumental response, with asymmetric breath space.",
    "tags": [
      "copla",
      "response"
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
      "quena",
      "guitar"
    ],
    "meter": "6/8",
    "cycleLength": 2,
    "subdivisions": 24,
    "onsetGrid": [
      0,
      4,
      8,
      12,
      16,
      20
    ],
    "accentProfile": [
      0.8,
      0.55,
      0.7,
      0.85,
      0.55,
      0.72
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "copla",
      " response"
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
    "patternFunction": "Copla Call-Response",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "ff-14-copla-call-response-answer",
        "sourceRole": "voice",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "folclorico",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Regional; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "copla",
      "response"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-15-folcl-rico-estribillo-lift",
    "worldId": "folclorico",
    "traditionId": "folclorico-southern-cone",
    "name": "Folclórico estribillo lift",
    "family": "Regional",
    "category": "sectionPattern",
    "description": "Ensemble lift for a refrain; designed to sit on top of a regional rhythm rather than define one universal Latin-folk groove.",
    "tags": [
      "estribillo",
      "ensemble lift"
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
  "guitar",
  "charango",
  "bombo-leguero"
],
    "meter": "6/8",
    "cycleLength": 2,
    "subdivisions": 24,
    "onsetGrid": [
      0,
      3,
      6,
      9,
      12,
      15,
      18,
      21
    ],
    "accentProfile": [
      0.9,
      0.6,
      0.8,
      0.58,
      0.95,
      0.62,
      0.82,
      0.65
    ],
    "syncopationRating": 0.75,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "estribillo",
      " ensemble lift"
    ],
    "density": "dense",
    "phrasePosition": [
      "start",
      "middle"
    ],
    "sectionUsage": [
      "chorus"
    ],
    "patternFunction": "Folclórico Estribillo Lift",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Regional; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "estribillo",
      "ensemble lift"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ff-mexican-guitarron-bass",
    "worldId": "folclorico",
    "traditionId": "folclorico-mexican",
    "name": "Mexican Guitarrón Octave Bass",
    "family": "Mexican",
    "category": "bass",
    "description": "Powerful acoustic Guitarrón playing simultaneous octaves on root-fifth basslines defining Mexican Son and Mariachi rhythms.",
    "tags": ["mexican", "guitarron", "bass", "son"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["bass"],
    "instruments": ["bass"],
    "meter": "3/4",
    "cycleLength": 2,
    "subdivisions": 12,
    "onsetGrid": [0, 3, 6, 9],
    "accentProfile": [1.0, 0.75, 0.9, 0.75],
    "velocityProfile": [0.95, 0.7, 0.85, 0.7],
    "articulations": ["staccato", "accented"],
    "density": "medium",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "solo"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Mexican Son & Huapango; generalized from documented musical conventions.",
    "authenticityTags": ["mexican", "guitarron"],
    "danceTags": ["social-partner"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  },
  {
    "id": "ff-mexican-zapateado-tacon",
    "worldId": "folclorico",
    "traditionId": "folclorico-mexican",
    "name": "Tarima Zapateado Footwork Percussion",
    "family": "Mexican",
    "category": "groove",
    "description": "Crisp percussive footwork of dancers striking the wooden tarima platform in syncopated 6/8–3/4 hemiola bursts.",
    "tags": ["mexican", "zapateado", "percussion", "tarima"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["percussion", "pulse"],
    "instruments": ["percussion"],
    "meter": "6/8",
    "cycleLength": 2,
    "subdivisions": 24,
    "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 15, 18, 21],
    "accentProfile": [1.0, 0.7, 0.85, 0.7, 0.85, 0.7, 1.0, 0.75, 0.9, 0.75],
    "velocityProfile": [0.95, 0.65, 0.8, 0.65, 0.8, 0.65, 0.95, 0.7, 0.85, 0.7],
    "articulations": ["staccato"],
    "density": "dense",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "solo"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Mexican Son & Huapango; generalized from documented musical conventions.",
    "authenticityTags": ["mexican", "zapateado"],
    "danceTags": ["festival-fusion"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
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
      "regional meter",
      "dance accent",
      "ensemble call-response"
    ],
    "rhythmicPriorities": [
      "regional meter",
      "dance accent",
      "ensemble call-response"
    ],
    "harmonicStrategy": [
      "modal/cyclic harmony",
      "regional tonic-dominant motion",
      "harmony secondary to melody/rhythm"
    ],
    "melodicStrategy": [
      "copla/equivalent phrase",
      "pentatonic/modal melody",
      "instrumental answer"
    ],
    "arrangementStrategy": "Often moves from copla/verse to estribillo or dance refrain, with instrumental interludes and regional variation; ensemble density rises at the refrain.",
    "engineConstraints": [
      "Do not collapse Andean, Mexican son/huapango and Southern Cone forms into one rhythm; do not genericize instruments.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "compound-meter normalization",
    "hemiola preservation",
    "regional instrument substitution",
    "pentatonic/modal melody"
  ],
  "forms": [
    "intro",
    "verse",
    "refrain",
    "dance",
    "instrumental",
    "bridge",
    "coda"
  ],
  "relationships": [
    "guitar ↔ percussion",
    "lead ↔ voice",
    "strum ↔ bombo"
  ],
  "songBehaviors": [
    "preserve regional meter",
    "do not collapse all folk into generic 4/4",
    "use instrument-specific lead colors",
    "let 6/8 patterns stay native in playback"
,
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize regional meter and dance accent as the identity layer.",
    "Use copla/equivalent phrase and pentatonic/modal melody for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "charango": [
      "bright doubled-course strum"
    ],
    "quena": [
      "breathy pentatonic lead"
    ],
    "pan-flute": [
      "layered panpipe melody"
    ],
    "cajon": [
      "bombo fallback"
    ],
    "fiddle": [
      "folk violin lead"
    ]
  },
  "combinations": [
    "Folclórico + Nueva Trova",
    "Andean Folk + Ambient",
    "Cumbia + Andean Folk"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Regional 6/8, 3/4 and binary cells with charango/guitar, winds and bombo textures",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight",
    "humanizeJitterMs": 10
  },
  "crossLinks": [
    "Latin Folklórico ↔ Cumbia",
    "Latin Folklórico ↔ Tango / Trova"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
