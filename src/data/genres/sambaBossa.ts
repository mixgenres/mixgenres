import { GenreWorld } from '../../types';

export const SAMBA_BOSSA_WORLD : GenreWorld = {
  "id": "samba-bossa",
  "name": "Samba / Bossa Nova",
  "family": "Brazilian",
  "color": "#3f8f7a",
  "level": "world",
  "description": "Samba and bossa nova share ancestry but need different engine grammar: batucada/pagode use layered 2/4 percussion and cavaquinho interlock, while bossa nova centers on quiet guitar/bass independence and jazz harmony. They are kept in one world for intentional crossover without erasing the distinction.",
  "traditions": [
    {
      "id": "samba-batucada",
      "worldId": "samba-bossa",
      "name": "Samba Batucada",
      "origin": "Rio de Janeiro, Brazil",
      "era": "Early 20th century–Present",
      "description": "Layered Brazilian percussion with surdo foundation, pandeiro/hand percussion, syncopated bass and bright ensemble accents; dense but internally interlocking.",
      "characteristicInstruments": [
        "surdo",
        "pandeiro",
        "tamborim",
        "bass",
        "piano"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        90,
        145
      ],
      "keySubstyles": [
        "Samba-enredo",
        "Batucada",
        "Pagode-adjacent samba"
      ],
      "coreConcepts": [
        "surdo two-beat foundation",
        "pandeiro",
        "tamborim",
        "samba bass anticipation",
        "batucada interlock"
      ],
      "rhythmicGrammar": [
        "2/4 cycle with 16th syncopation",
        "low/high drum roles interlock rather than all doubling the same beat"
      ],
      "danceTags": [
        "festival-fusion",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Surdo two-beat foundation with pandeiro/tamborim syncopation",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed",
        "humanizeJitterMs": 7
      },
      "sectionProgressions": {
        "intro": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7"
        ],
        "verse": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7"
        ],
        "chorus": [
          "Fmaj7",
          "G7",
          "Em7",
          "Am7"
        ],
        "solo": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7"
        ],
        "coda": [
          "Cmaj7",
          "A7",
          "Dm7",
          "G7"
        ]
      }
    },
    {
      "id": "samba-pagode",
      "worldId": "samba-bossa",
      "name": "Pagode / Small-Ensemble Samba",
      "origin": "Rio de Janeiro / São Paulo",
      "era": "1970s–Present",
      "description": "Vocal-centered samba with pandeiro, tantan/reco-reco-like textures, cavaquinho and responsive bass; groove breathes around the singer.",
      "characteristicInstruments": [
        "pandeiro",
        "cavaquinho",
        "bass",
        "voice"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        80,
        125
      ],
      "keySubstyles": [
        "Pagode",
        "Samba de roda",
        "Partido-alto"
      ],
      "coreConcepts": [
        "cavaquinho comp",
        "pandeiro swing",
        "partido-alto accents",
        "call-and-response"
      ],
      "rhythmicGrammar": [
        "syncopated 2/4 with conversational percussion",
        "cavaquinho fills spaces around vocal"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Cavaquinho syncopation over pandeiro and surdo-like bass pulse",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 8
      }
    },
    {
      "id": "bossa-nova",
      "worldId": "samba-bossa",
      "name": "Bossa Nova",
      "origin": "Rio de Janeiro, Brazil",
      "era": "Late 1950s–Present",
      "description": "Quiet samba-derived guitar rhythm, syncopated bass, restrained drums and extended jazz harmony; the defining feel comes from guitar/bass interlock rather than a generic Latin beat.",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "piano",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        90,
        140
      ],
      "keySubstyles": [
        "Bossa nova",
        "Samba-jazz",
        "Bossa ballad"
      ],
      "coreConcepts": [
        "bossa guitar cell",
        "syncopated bass",
        "cross-rhythm",
        "jazz harmony",
        "quiet dynamics"
      ],
      "rhythmicGrammar": [
        "guitar anticipates chord tones while bass articulates a separate syncopated line",
        "brushes/rimshot remain restrained"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Syncopated nylon-guitar chord pattern with independent bass movement",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 8
      }
    }
  ],
  "substyles": [
    "Samba",
    "Batucada",
    "Pagode",
    "Partido-alto",
    "Bossa Nova",
    "Samba-jazz"
  ],
  "artists": [
    "João Gilberto",
    "Antônio Carlos Jobim",
    "Cartola",
    "Paulinho da Viola",
    "Elis Regina",
    "Jorge Ben Jor"
  ],
  "concepts": [
    "surdo",
    "pandeiro",
    "cavaquinho",
    "samba bass",
    "bossa guitar",
    "syncopated jazz harmony"
  ],
  "roles": {
    "percussion": [
      "surdo/pandeiro interlock"
    ],
    "harmony": [
      "cavaquinho comp",
      "bossa guitar"
    ],
    "bass": [
      "syncopated samba/bossa bass"
    ],
    "voice": [
      "intimate phrasing"
    ]
  },
  "patterns": [
  {
    "id": "sb-surdo-foundation",
    "worldId": "samba-bossa",
    "traditionId": "samba-batucada",
    "name": "Surdo Two-Beat Foundation",
    "family": "Samba Low Drums",
    "category": "groove",
    "description": "Low/high surdo cycle with complementary accents rather than a simple four-on-floor.",
    "tags": [
      "samba",
      "surdo",
      "2/4"
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
      "surdo",
      "drums"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      0,
      4,
      6
    ],
    "accentProfile": [
      1,
      0.72,
      0.9
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86
    ],
    "syncopationRating": 0.45,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "low-drum"
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
        "id": "sb-surdo-foundation-v-sparse",
        "parentPatternId": "sb-surdo-foundation",
        "name": "Surdo Two-Beat Foundation — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          6
        ],
        "accentProfile": [
          0.9,
          0.65
        ]
      },
      {
        "id": "sb-surdo-foundation-v-shift",
        "parentPatternId": "sb-surdo-foundation",
        "name": "Surdo Two-Beat Foundation — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          4,
          6
        ],
        "accentProfile": [
          0.95,
          0.7,
          0.95
        ]
      }
    ],
    "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
    "authenticityTags": [
      "samba",
      "surdo",
      "2/4"
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
    "id": "sb-pandeiro",
    "worldId": "samba-bossa",
    "traditionId": "samba-pagode",
    "name": "Pandeiro Syncopation",
    "family": "Samba Hand Percussion",
    "category": "groove",
    "description": "Thumb/finger-like alternating attacks translated to a compact pandeiro pattern.",
    "tags": [
      "pandeiro",
      "samba",
      "syncopation"
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
      "pandeiro",
      "shaker"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      0,
      2,
      3,
      5,
      6,
      7
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
    "syncopationRating": 0.72,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "hand-percussion"
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
        "id": "sb-pandeiro-v-sparse",
        "parentPatternId": "sb-pandeiro",
        "name": "Pandeiro Syncopation — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          3,
          6
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "sb-pandeiro-v-shift",
        "parentPatternId": "sb-pandeiro",
        "name": "Pandeiro Syncopation — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          2,
          3,
          5,
          6,
          7
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
      "pandeiro",
      "samba",
      "syncopation"
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
    "id": "sb-cavaquinho",
    "worldId": "samba-bossa",
    "traditionId": "samba-pagode",
    "name": "Cavaquinho Comp",
    "family": "Cavaquinho Chords",
    "category": "ostinato",
    "description": "Short syncopated chord attacks that interlock with the pandeiro rather than sit on every beat.",
    "tags": [
      "cavaquinho",
      "samba",
      "comp"
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
      "cavaquinho",
      "guitar"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      1,
      3,
      5,
      7
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
    "syncopationRating": 0.82,
    "anticipationOffset": 1,
    "swingPercentage": 50,
    "articulations": [
      "staccato"
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
        "id": "sb-cavaquinho-v-sparse",
        "parentPatternId": "sb-cavaquinho",
        "name": "Cavaquinho Comp — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          1,
          5
        ],
        "accentProfile": [
          0.9,
          0.65
        ]
      },
      {
        "id": "sb-cavaquinho-v-shift",
        "parentPatternId": "sb-cavaquinho",
        "name": "Cavaquinho Comp — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          1,
          3,
          5,
          7
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
      "cavaquinho",
      "samba",
      "comp"
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
    "id": "sb-bossa-guitar",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Bossa nova guitar syncopation",
    "family": "Bossa Guitar",
    "category": "groove",
    "description": "Independent thumb-and-finger guitar syncopation: bass notes anchor the harmony while upper notes answer around the beat.",
    "tags": [
      "bossa",
      "guitar",
      "syncopation"
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
      2,
      5,
      7,
      8,
      10,
      13,
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
    "syncopationRating": 0.86,
    "anticipationOffset": 1,
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
        "id": "sb-bossa-guitar-v-sparse",
        "parentPatternId": "sb-bossa-guitar",
        "name": "Bossa Nova Guitar Cell — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          5,
          8,
          13
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9,
          0.65
        ]
      },
      {
        "id": "sb-bossa-guitar-v-shift",
        "parentPatternId": "sb-bossa-guitar",
        "name": "Bossa Nova Guitar Cell — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          2,
          5,
          7,
          8,
          10,
          13,
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
      "bossa",
      "guitar",
      "syncopation"
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
    "id": "sb-bossa-bass",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Bossa bass anchor / anticipation",
    "family": "Bossa Bass",
    "category": "ostinato",
    "description": "Root/approach bass contour that supports the guitar syncopation without mechanically doubling it.",
    "tags": [
      "bossa",
      "bass",
      "interlock"
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
      7,
      8,
      11,
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
    "syncopationRating": 0.72,
    "anticipationOffset": 1,
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
        "id": "sb-bossa-bass-v-sparse",
        "parentPatternId": "sb-bossa-bass",
        "name": "Bossa Nova Bass — sparse",
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
        "id": "sb-bossa-bass-v-shift",
        "parentPatternId": "sb-bossa-bass",
        "name": "Bossa Nova Bass — accent shift",
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
      "bossa",
      "bass",
      "interlock"
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
    "id": "sb-06-samba-surdo-foundation",
    "worldId": "samba-bossa",
    "traditionId": "samba-batucada",
    "name": "Samba Surdo Foundation",
    "family": "Samba",
    "category": "groove",
    "description": "Low surdo articulates the large pulse while avoiding a generic kick-drum pattern.",
    "tags": [
      "surdo",
      "samba"
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
      "surdo"
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
      "surdo",
      " samba"
    ],
    "density": "sparse",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Samba Surdo Foundation",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "surdo",
      "samba"
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
    "id": "sb-07-samba-pandeiro-interlock",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Samba Pandeiro Interlock",
    "family": "Samba",
    "category": "groove",
    "description": "Pandeiro combines bass slap and high articulation into an interlocking subdivision.",
    "tags": [
      "pandeiro",
      "interlock"
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
      "pandeiro"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      0,
      1,
      2,
      4,
      5,
      6
    ],
    "accentProfile": [
      0.55,
      0.7,
      0.48,
      0.8,
      0.58,
      0.72
    ],
    "syncopationRating": 0.67,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "pandeiro",
      " interlock"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Samba Pandeiro Interlock",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "pandeiro",
      "interlock"
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
    "id": "sb-08-tamborim-cross-accent",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Tamborim Cross Accent",
    "family": "Samba",
    "category": "ostinato",
    "description": "Bright tamborim pattern with displaced accents; it should float above the surdo rather than duplicate it.",
    "tags": [
      "tamborim",
      "accent"
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
      "tamborim"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      1,
      2,
      4,
      6,
      7
    ],
    "accentProfile": [
      0.45,
      0.7,
      0.55,
      0.75,
      0.6
    ],
    "syncopationRating": 0.8,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "tamborim",
      " accent"
    ],
    "density": "medium",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "chorus",
      "solo"
    ],
    "patternFunction": "Tamborim Cross Accent",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "tamborim",
      "accent"
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
    "id": "sb-09-cavaquinho-partido",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Cavaquinho Partido",
    "family": "Samba",
    "category": "cell",
    "description": "Short chord strokes outlining the syncopated partido-alto groove.",
    "tags": [
      "cavaquinho",
      "partido-alto"
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
      "cavaquinho"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      1,
      3,
      5,
      7
    ],
    "accentProfile": [
      0.72,
      0.55,
      0.75,
      0.6
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "cavaquinho",
      " partido-alto"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Cavaquinho Partido",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "cavaquinho",
      "partido-alto"
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
    "id": "sb-10-bossa-guitar-clave",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Bossa Guitar Clave",
    "family": "Bossa Nova",
    "category": "ostinato",
    "description": "Quiet syncopated guitar voicing pattern combining bass note and chord attack.",
    "tags": [
      "bossa",
      "guitar rhythm"
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
      8,
      11,
      14
    ],
    "accentProfile": [
      0.65,
      0.52,
      0.7,
      0.58,
      0.68,
      0.55
    ],
    "syncopationRating": 0.67,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "bossa",
      " guitar rhythm"
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
    "patternFunction": "Bossa Guitar Clave",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "bossa",
      "guitar rhythm"
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
    "id": "sb-11-bossa-bass-anticipation",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Bossa Bass Anticipation",
    "family": "Bossa Nova",
    "category": "bass",
    "description": "Root/approach notes anticipate the next chord, with long decay and restrained dynamics.",
    "tags": [
      "bossa",
      "anticipation"
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
      10,
      14
    ],
    "accentProfile": [
      0.78,
      0.45,
      0.65,
      0.55
    ],
    "syncopationRating": 0.75,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "bossa",
      " anticipation"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Bossa Bass Anticipation",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "bossa",
      "anticipation"
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
    "id": "sb-12-bossa-piano-voicing",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Bossa piano chord punctuation",
    "family": "Bossa Nova",
    "category": "rolePattern",
    "description": "Sparse chord punctuation for a piano-led bossa texture; lets the guitar occupy the denser syncopation.",
    "tags": [
      "piano",
      "voicing"
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
      "piano"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      2,
      6,
      9,
      13
    ],
    "accentProfile": [
      0.55,
      0.62,
      0.5,
      0.66
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "piano",
      " voicing"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Bossa Piano Voicing",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "piano",
      "voicing"
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
    "id": "sb-13-samba-call-response",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Samba Call Response",
    "family": "Samba",
    "category": "interactionPattern",
    "description": "Percussion group answers a vocal or cavaquinho phrase at the end of the bar.",
    "tags": [
      "call-response"
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
      "pandeiro",
      "tamborim"
    ],
    "meter": "2/4",
    "cycleLength": 2,
    "subdivisions": 16,
    "onsetGrid": [
      4,
      6,
      12,
      14
    ],
    "accentProfile": [
      0.6,
      0.8,
      0.58,
      0.85
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "call-response"
    ],
    "density": "medium",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Samba Call Response",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "sb-13-samba-call-response-answer",
        "sourceRole": "counterline",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "samba-bossa",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "call-response"
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
    "id": "sb-14-batucada-break",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Batucada Break",
    "family": "Samba",
    "category": "break",
    "description": "Brief reduction to surdo and a high percussion cue before full ensemble re-entry.",
    "tags": [
      "batucada",
      "break"
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
      "surdo",
      "pandeiro",
      "tamborim"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      0,
      6
    ],
    "accentProfile": [
      0.9,
      0.7
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "batucada",
      " break"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "breakdown",
      "bridge"
    ],
    "patternFunction": "Batucada Break",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Samba; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "batucada",
      "break"
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
    "id": "sb-15-bossa-ending-turn",
    "worldId": "samba-bossa",
    "traditionId": "bossa-nova",
    "name": "Bossa ending cadence",
    "family": "Bossa Nova",
    "category": "cadence",
    "description": "Short harmonic cadence figure for a final tag or turnaround.",
    "tags": [
      "extended harmony",
      "release"
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
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      5,
      9,
      13
    ],
    "accentProfile": [
      0.6,
      0.45,
      0.68,
      0.5
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "extended harmony",
      " release"
    ],
    "density": "medium",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "coda",
      "ending"
    ],
    "patternFunction": "Bossa Ending Turn",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Bossa Nova; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "extended harmony",
      "release"
    ],
    "danceTags": [
      "festival-fusion"
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
      "interlocking percussion",
      "syncopated accompaniment",
      "independent bass"
    ],
    "rhythmicPriorities": [
      "interlocking percussion",
      "syncopated accompaniment",
      "independent bass"
    ],
    "harmonicStrategy": [
      "functional/extended Brazilian harmony",
      "turnarounds",
      "chromatic approach chords"
    ],
    "melodicStrategy": [
      "syncopated guitar/cavaquinho",
      "lyric melody",
      "percussion-response cells"
    ],
    "arrangementStrategy": "Samba can build from surdo into layered percussion and refrain; bossa often uses intro, verses/refrains, instrumental bridge/solo and return with subtle dynamic change.",
    "engineConstraints": [
      "Do not flatten samba into a drum-kit loop; do not make bossa a generic jazz ballad; preserve independent rhythmic roles.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "2/4 normalization",
    "pandeiro interlock",
    "cavaquinho comp",
    "bossa guitar/bass independence",
    "quiet-dynamic shaping"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "instrumental",
    "break",
    "coda"
  ],
  "relationships": [
    "bass ↔ guitar",
    "pandeiro ↔ cavaquinho",
    "surdo ↔ percussion"
  ],
  "songBehaviors": [
    "keep samba layers interlocking",
    "do not make bossa into generic swing",
    "allow quiet dynamics in bossa",
    "use 2/4-native patterns for samba traditions"
,
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize interlocking percussion and syncopated accompaniment as the identity layer.",
    "Use syncopated guitar/cavaquinho and lyric melody for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "pandeiro": [
      "finger/thumb-like syncopation"
    ],
    "surdo": [
      "low two-beat foundation"
    ],
    "cavaquinho": [
      "bright short chord comp"
    ],
    "guitar": [
      "bossa fingerstyle cell"
    ],
    "bass": [
      "syncopated melodic foundation"
    ]
  },
  "combinations": [
    "Samba + Funk",
    "Bossa + Jazz",
    "Samba + Cumbia"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Brazilian 2/4 samba interlock or quiet bossa guitar/bass independence",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "pushed",
    "humanizeJitterMs": 7
  },
  "crossLinks": [
    "Samba ↔ Funk / Latin",
    "Bossa ↔ Jazz"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
