import { GenreWorld } from '../../types';

export const TROVA_WORLD : GenreWorld = {
  "id": "trova",
  "name": "Trova",
  "family": "Cuban / Caribbean singer-songwriter",
  "color": "#6f7d9b",
  "level": "world",
  "description": "Trova is modeled as a lyric-centered Cuban song family. The engine separates traditional trova, nueva trova and bolero-trova so guitar intimacy, tres-derived rhythm and ensemble expansion can coexist without forcing salsa/timba mechanics onto the repertoire.",
  "traditions": [
    {
      "id": "trova-traditional",
      "worldId": "trova",
      "name": "Traditional Cuban Trova",
      "origin": "Santiago de Cuba",
      "era": "Late 19th century–Present",
      "description": "Guitar-and-voice song tradition emphasizing lyric delivery, intimate arpeggiation/strumming, tres-like figures and flexible rubato around the text.",
      "characteristicInstruments": [
        "guitar",
        "tres",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "2/4",
        "3/4"
      ],
      "tempoRange": [
        60,
        120
      ],
      "keySubstyles": [
        "Traditional trova",
        "Bolero-trova",
        "Son-trova"
      ],
      "coreConcepts": [
        "voice and guitar intimacy",
        "tres guajeo",
        "bolero phrasing",
        "lyric-centered cadence"
      ],
      "rhythmicGrammar": [
        "light guitar pulse under vocal text",
        "syncopation follows lyric cadence"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Nylon-guitar arpeggio under an intimate vocal pickup",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 12
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "Am",
          "Dm7",
          "G7"
        ],
        "verse": [
          "C",
          "Am",
          "Dm7",
          "G7"
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
          "C",
          "Am",
          "Dm7",
          "C"
        ]
      }
    },
    {
      "id": "trova-nueva",
      "worldId": "trova",
      "name": "Nueva Trova",
      "origin": "Cuba",
      "era": "1960s–Present",
      "description": "Songwriter-centered Cuban tradition combining acoustic guitar, poetic vocal writing and increasingly varied ensemble/orchestral colors; rhythm serves the lyric and arrangement arc.",
      "characteristicInstruments": [
        "guitar",
        "voice",
        "bass",
        "piano",
        "strings"
      ],
      "preferredMeters": [
        "4/4",
        "6/8"
      ],
      "tempoRange": [
        65,
        115
      ],
      "keySubstyles": [
        "Nueva Trova",
        "Cuban singer-songwriter",
        "Trova fusion"
      ],
      "coreConcepts": [
        "lyric-first form",
        "guitar harmony",
        "countermelody",
        "dynamic orchestration"
      ],
      "rhythmicGrammar": [
        "mixed arpeggio/strum textures",
        "arrangement grows around lyrical sections"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Acoustic guitar figure opening into a lyrical ensemble response",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 8
      }
    },
    {
      "id": "trova-bolero",
      "worldId": "trova",
      "name": "Bolero-Trova",
      "origin": "Cuba / Caribbean",
      "era": "20th century–Present",
      "description": "Slow romantic song language with guitar arpeggiation, intimate vocal phrasing and gentle bass movement; it can sit between strict pulse and rubato.",
      "characteristicInstruments": [
        "guitar",
        "voice",
        "bass",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        55,
        85
      ],
      "keySubstyles": [
        "Bolero cubano",
        "Trova romántica"
      ],
      "coreConcepts": [
        "slow arpeggio",
        "rubato vocal entrance",
        "secondary-dominant color",
        "romantic cadence"
      ],
      "rhythmicGrammar": [
        "bass often marks broad beats",
        "guitar fills the space between vocal phrases"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Slow arpeggiated guitar with a delayed vocal entrance",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 14
      }
    }
  ],
  "substyles": [
    "Traditional Trova",
    "Nueva Trova",
    "Bolero-Trova",
    "Son-Trova"
  ],
  "artists": [
    "Sindo Garay",
    "Manuel Corona",
    "Silvio Rodríguez",
    "Pablo Milanés",
    "Noel Nicola"
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
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
    "traditionId": "trova-traditional",
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
    "provenance": "Genre-pack structural pattern based on Cuban Trova; generalized for engine recombination, not literal transcription.",
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
    "traditionId": "trova-traditional",
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
    "provenance": "Genre-pack structural pattern based on Cuban Trova; generalized for engine recombination, not literal transcription.",
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
    "syncopationRating": 1.0,
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
    "provenance": "Genre-pack structural pattern based on Voice; generalized for engine recombination, not literal transcription.",
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
    "traditionId": "trova-bolero",
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
    "provenance": "Genre-pack structural pattern based on Bolero-Trova; generalized for engine recombination, not literal transcription.",
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
    "syncopationRating": 0.0,
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
    "provenance": "Genre-pack structural pattern based on Harmony; generalized for engine recombination, not literal transcription.",
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
    "provenance": "Genre-pack structural pattern based on Nueva Trova; generalized for engine recombination, not literal transcription.",
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
    "syncopationRating": 0.0,
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
    "provenance": "Genre-pack structural pattern based on Section; generalized for engine recombination, not literal transcription.",
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
    "syncopationRating": 0.0,
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
    "provenance": "Genre-pack structural pattern based on Break; generalized for engine recombination, not literal transcription.",
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
    "traditionId": "trova-traditional",
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
    "provenance": "Genre-pack structural pattern based on Interaction; generalized for engine recombination, not literal transcription.",
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
    "syncopationRating": 0.0,
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
    "provenance": "Genre-pack structural pattern based on Cadence; generalized for engine recombination, not literal transcription.",
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
  },
  {
    "id": "tr-bolero-maracas-clave",
    "worldId": "trova",
    "traditionId": "trova-bolero",
    "name": "Bolero Maracas & Clave Pulse",
    "family": "Percussion",
    "category": "groove",
    "description": "Subtle, intimate Cuban bolero acoustic percussion with continuous 8th-note maracas shake and soft son clave pulse.",
    "tags": ["bolero", "maracas", "clave", "percussion"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["percussion", "pulse"],
    "instruments": ["percussion"],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
    "accentProfile": [0.9, 0.5, 0.75, 0.5, 0.9, 0.5, 0.75, 0.5],
    "velocityProfile": [0.85, 0.45, 0.7, 0.45, 0.85, 0.45, 0.7, 0.45],
    "density": "medium",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "solo"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Bolero-Trova; generalized from documented musical conventions.",
    "authenticityTags": ["bolero", "percussion"],
    "danceTags": ["social-partner"],
    "tuningSystem": "12-tet",
    "difficulty": 1,
    "weight": 0.9,
    "enabled": true
  },
  {
    "id": "tr-bolero-requinto-melodia",
    "worldId": "trova",
    "traditionId": "trova-bolero",
    "name": "Romantic Requinto Countermelody",
    "family": "Guitar",
    "category": "phrasePattern",
    "description": "Intimate nylon-string requinto guitar playing lyrical, romantic descending arpeggios answering sung vocal lines.",
    "tags": ["bolero", "requinto", "guitar", "countermelody"],
    "scopes": ["phrase", "region", "track"],
    "roles": ["melody", "lead", "counterline"],
    "instruments": ["guitar"],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 16,
    "onsetGrid": [4, 6, 8, 11, 14, 20, 22, 24, 28],
    "accentProfile": [0.75, 0.6, 0.85, 0.65, 0.9, 0.75, 0.6, 0.85, 0.9],
    "velocityProfile": [0.7, 0.55, 0.8, 0.6, 0.85, 0.7, 0.55, 0.8, 0.85],
    "density": "sparse",
    "phrasePosition": ["middle", "end"],
    "sectionUsage": ["verse", "chorus", "solo", "coda"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Bolero-Trova; generalized from documented musical conventions.",
    "authenticityTags": ["bolero", "requinto"],
    "danceTags": ["listening"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.9,
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
    "use rubato at phrase boundaries"
,
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
