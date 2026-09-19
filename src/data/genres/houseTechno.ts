import { GenreWorld } from '../../types';

export const HOUSE_TECHNO_WORLD : GenreWorld = {
  "id": "house-techno",
  "name": "House / Techno",
  "family": "Electronic dance music",
  "color": "#5b67c8",
  "level": "world",
  "description": "House and techno share a club-oriented engine layer but are not collapsed into one groove: deep/Chicago house emphasizes humanized pocket and offbeat hats, Detroit techno emphasizes machine repetition and sequence mutation, and acid traditions emphasize accent/slide sequences.",
  "traditions": [
    {
      "id": "house-deep",
      "worldId": "house-techno",
      "name": "Deep / Chicago House",
      "origin": "Chicago / New York",
      "era": "1980s–Present",
      "description": "Four-on-the-floor kick, offbeat hats, syncopated bass, short chord stabs and repeating vocal/synth motifs; the groove is physical and loop-oriented.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "synth",
        "piano",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        118,
        128
      ],
      "keySubstyles": [
        "Deep house",
        "Chicago house",
        "Garage house"
      ],
      "coreConcepts": [
        "four-on-floor",
        "offbeat hat",
        "bass syncopation",
        "stabs",
        "loop development"
      ],
      "rhythmicGrammar": [
        "kick every quarter note",
        "offbeat hats",
        "bass and chord attacks interlock around the kick"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Four-on-floor kick with offbeat hat and syncopated bass/stab",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 6
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "Am7",
          "Fmaj7",
          "G6"
        ],
        "verse": [
          "Am7",
          "Am7",
          "Fmaj7",
          "G6"
        ],
        "chorus": [
          "Dm7",
          "G7",
          "Cmaj7",
          "Am7"
        ],
        "solo": [
          "Am7",
          "Am7",
          "Fmaj7",
          "G6"
        ],
        "coda": [
          "Am7",
          "Am7",
          "Am7",
          "Am7"
        ]
      }
    },
    {
      "id": "house-techno-detroit",
      "worldId": "house-techno",
      "name": "Detroit Techno",
      "origin": "Detroit, Michigan",
      "era": "1980s–Present",
      "description": "Machine-tight pulse with syncopated synth sequences, deep bass, sparse chord colors and evolving repetition; groove comes from timbral and rhythmic change over a stable grid.",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "polysynth",
        "saw-lead"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        135
      ],
      "keySubstyles": [
        "Detroit techno",
        "Dub techno",
        "Electro-influenced techno"
      ],
      "coreConcepts": [
        "machine pulse",
        "sequence variation",
        "syncopated hats",
        "minor/modal synth cells"
      ],
      "rhythmicGrammar": [
        "four-on-floor foundation",
        "16th syncopated percussion",
        "sequence mutation over fixed pulse"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Four-on-floor machine kick under a syncopated 16th synth sequence",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed",
        "humanizeJitterMs": 1
      }
    },
    {
      "id": "house-techno-acid",
      "worldId": "house-techno",
      "name": "Acid House / Acid Techno",
      "origin": "Chicago / UK",
      "era": "1980s–Present",
      "description": "Resonant 303-style sequenced bass, squelchy accents and gradual filter-driven development over a stable dance pulse.",
      "characteristicInstruments": [
        "sub-bass",
        "bass-lead",
        "drums",
        "saw-lead"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        140
      ],
      "keySubstyles": [
        "Acid house",
        "Acid techno"
      ],
      "coreConcepts": [
        "resonant sequence",
        "slide/accent",
        "filter development",
        "repetition"
      ],
      "rhythmicGrammar": [
        "steady kick with offbeat hats",
        "bass sequence uses rests, ties and accents"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Resonant 16-step acid bass sequence with skipped notes and accents",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 1
      }
    }
  ],
  "substyles": [
    "Deep House",
    "Chicago House",
    "Detroit Techno",
    "Dub Techno",
    "Acid House",
    "Acid Techno"
  ],
  "artists": [
    "Frankie Knuckles",
    "Larry Heard",
    "Marshall Jefferson",
    "Juan Atkins",
    "Derrick May",
    "Kevin Saunderson",
    "Phuture"
  ],
  "concepts": [
    "four-on-floor",
    "offbeat hats",
    "syncopated bass",
    "sequence mutation",
    "acid accents",
    "filter development"
  ],
  "roles": {
    "drums": [
      "four-on-floor",
      "offbeat hats"
    ],
    "bass": [
      "syncopated house bass",
      "acid sequence"
    ],
    "harmony": [
      "short chord stabs",
      "dub chords"
    ],
    "lead": [
      "repeating synth sequences"
    ]
  },
  "patterns": [
  {
    "id": "ht-four-floor",
    "worldId": "house-techno",
    "traditionId": "house-deep",
    "name": "Four-on-the-Floor Foundation",
    "family": "House Kick",
    "category": "groove",
    "description": "Unbroken quarter-note kick foundation; other parts are expected to articulate around it.",
    "tags": [
      "house",
      "four-on-floor",
      "kick"
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
      "drums",
      "kick"
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
    "syncopationRating": 0.05,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "kick"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "intro",
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
        "id": "ht-four-floor-v-sparse",
        "parentPatternId": "ht-four-floor",
        "name": "Four-on-the-Floor Foundation — sparse",
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
        "id": "ht-four-floor-v-shift",
        "parentPatternId": "ht-four-floor",
        "name": "Four-on-the-Floor Foundation — accent shift",
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
      "house",
      "four-on-floor",
      "kick"
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
    "id": "ht-offbeat-hat",
    "worldId": "house-techno",
    "traditionId": "house-deep",
    "name": "Offbeat Hat",
    "family": "House Hats",
    "category": "ostinato",
    "description": "Open or closed hat on the offbeats, with restrained velocity variation.",
    "tags": [
      "house",
      "hat",
      "offbeat"
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
      "hats",
      "drums"
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
    "syncopationRating": 0.35,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "hat"
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
        "id": "ht-offbeat-hat-v-sparse",
        "parentPatternId": "ht-offbeat-hat",
        "name": "Offbeat Hat — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          2,
          10
        ],
        "accentProfile": [
          0.9,
          0.65
        ]
      },
      {
        "id": "ht-offbeat-hat-v-shift",
        "parentPatternId": "ht-offbeat-hat",
        "name": "Offbeat Hat — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          2,
          6,
          10,
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
      "house",
      "hat",
      "offbeat"
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
    "id": "ht-house-bass",
    "worldId": "house-techno",
    "traditionId": "house-deep",
    "name": "House Syncopated Bass",
    "family": "House Bass",
    "category": "ostinato",
    "description": "Bass notes land between kicks, creating the characteristic push-pull pocket.",
    "tags": [
      "house",
      "bass",
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
      "bass"
    ],
    "instruments": [
      "bass",
      "sub-bass"
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
      "short"
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
        "id": "ht-house-bass-v-sparse",
        "parentPatternId": "ht-house-bass",
        "name": "House Syncopated Bass — sparse",
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
        "id": "ht-house-bass-v-shift",
        "parentPatternId": "ht-house-bass",
        "name": "House Syncopated Bass — accent shift",
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
      "house",
      "bass",
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
    "id": "ht-techno-sequence",
    "worldId": "house-techno",
    "traditionId": "house-techno-detroit",
    "name": "Detroit 16th Sequence",
    "family": "Techno Sequences",
    "category": "ostinato",
    "description": "A machine-tight repeating synth sequence whose interest comes from accent and timbral evolution.",
    "tags": [
      "techno",
      "sequence",
      "16th"
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
      "polysynth",
      "saw-lead"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      2,
      3,
      6,
      8,
      10,
      11,
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
    "syncopationRating": 0.82,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "sequence"
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
        "id": "ht-techno-sequence-v-sparse",
        "parentPatternId": "ht-techno-sequence",
        "name": "Detroit 16th Sequence — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          3,
          8,
          11
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9,
          0.65
        ]
      },
      {
        "id": "ht-techno-sequence-v-shift",
        "parentPatternId": "ht-techno-sequence",
        "name": "Detroit 16th Sequence — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          2,
          3,
          6,
          8,
          10,
          11,
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
      "techno",
      "sequence",
      "16th"
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
    "id": "ht-acid-303",
    "worldId": "house-techno",
    "traditionId": "house-techno-acid",
    "name": "Acid 16-Step Sequence",
    "family": "Acid Bass",
    "category": "phrasePattern",
    "description": "16-step bass sequence with rests, accents and implied slides; designed to mutate by variant rather than chord-loop.",
    "tags": [
      "acid",
      "303",
      "sequence"
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
      "bass-lead",
      "sub-bass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      3,
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
    "syncopationRating": 0.88,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "slide",
      "accent"
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
        "id": "ht-acid-303-v-sparse",
        "parentPatternId": "ht-acid-303",
        "name": "Acid 16-Step Sequence — sparse",
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
        "id": "ht-acid-303-v-shift",
        "parentPatternId": "ht-acid-303",
        "name": "Acid 16-Step Sequence — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          3,
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "acid",
      "303",
      "sequence"
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
    "id": "ht-06-four-on-the-floor-kick",
    "worldId": "house-techno",
    "traditionId": "house-deep",
    "name": "Four-floor kick with bar accent",
    "family": "House",
    "category": "groove",
    "description": "Stable four-on-the-floor foundation; kept as a subtle accent variant of the core rather than a separate groove claim.",
    "tags": [
      "four-on-floor"
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
      "kick",
      "drums"
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
      0.86,
      0.74
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "four-on-floor"
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
    "patternFunction": "Four-on-the-Floor Kick",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on House; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "four-on-floor"
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
    "id": "ht-07-offbeat-hat",
    "worldId": "house-techno",
    "traditionId": "house-deep",
    "name": "Open-hat lift",
    "family": "House",
    "category": "ostinato",
    "description": "Sparse open-hat lift on offbeats, leaving space for kick and bass.",
    "tags": [
      "offbeat hat"
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
      "hats"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      6,
      14
    ],
    "accentProfile": [
      0.55,
      0.65
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "offbeat hat"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Offbeat Hat",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on House; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "offbeat hat"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 1,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ht-08-house-bass-lock",
    "worldId": "house-techno",
    "traditionId": "house-deep",
    "name": "House Bass Lock",
    "family": "House",
    "category": "bass",
    "description": "Short bass notes interlock with kick rather than sustaining over it.",
    "tags": [
      "bass lock"
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
      "sub-bass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      1,
      6,
      9,
      13
    ],
    "accentProfile": [
      0.7,
      0.6,
      0.78,
      0.65
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "bass lock"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "groove",
      "chorus"
    ],
    "patternFunction": "House Bass Lock",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on House; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "bass lock"
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
    "id": "ht-09-house-chord-stab",
    "worldId": "house-techno",
    "traditionId": "house-deep",
    "name": "House Chord Stab",
    "family": "House",
    "category": "cell",
    "description": "Syncopated chord stab on the offbeat with short decay.",
    "tags": [
      "stab",
      "offbeat"
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
  "piano",
  "polysynth"
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
      0.65,
      0.72,
      0.68
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "stab",
      " offbeat"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "groove",
      "chorus"
    ],
    "patternFunction": "House Chord Stab",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on House; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "stab",
      "offbeat"
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
    "id": "ht-10-detroit-sequence",
    "worldId": "house-techno",
    "traditionId": "house-techno-detroit",
    "name": "Detroit Sequence",
    "family": "Detroit Techno",
    "category": "ostinato",
    "description": "Repeating 16th-note synth sequence with small pitch/accent mutation over a static vamp.",
    "tags": [
      "Detroit",
      "sequence"
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
      "synth",
      "saw-lead"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      3,
      6,
      9,
      12,
      16,
      19,
      22,
      25,
      28
    ],
    "accentProfile": [
      0.55,
      0.65,
      0.5,
      0.72,
      0.58,
      0.6,
      0.68,
      0.52,
      0.75,
      0.55
    ],
    "syncopationRating": 0.6,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "Detroit",
      " sequence"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "groove",
      "chorus",
      "solo"
    ],
    "patternFunction": "Detroit Sequence",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Detroit Techno; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "Detroit",
      "sequence"
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
    "id": "ht-11-acid-303-accent",
    "worldId": "house-techno",
    "traditionId": "house-techno-acid",
    "name": "Acid 303 Accent",
    "family": "Acid",
    "category": "ostinato",
    "description": "Resonant 16th-note bass sequence with rests and accented slides; avoid constant note density.",
    "tags": [
      "acid",
      "slide",
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
      "bass"
    ],
    "instruments": [
      "acid-303"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      2,
      5,
      7,
      10,
      12,
      14,
      16,
      19,
      22,
      26,
      28,
      30
    ],
    "accentProfile": [
      0.8,
      0.5,
      0.65,
      0.75,
      0.45,
      0.7,
      0.82,
      0.6,
      0.55,
      0.72,
      0.62,
      0.8,
      0.55
    ],
    "syncopationRating": 0.69,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "acid",
      " slide"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "groove",
      "chorus"
    ],
    "patternFunction": "Acid 303 Accent",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Acid; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "acid",
      "slide",
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
    "id": "ht-12-techno-clap-backbeat",
    "worldId": "house-techno",
    "traditionId": "house-techno-detroit",
    "name": "Techno Clap Backbeat",
    "family": "Techno",
    "category": "groove",
    "description": "Sparse clap/snare at 2 and 4, often delayed behind the kick grid.",
    "tags": [
      "clap",
      "backbeat"
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
  "drums",
  "claves"
],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      4,
      12
    ],
    "accentProfile": [
      0.72,
      0.8
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "clap",
      " backbeat"
    ],
    "density": "sparse",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "groove",
      "chorus"
    ],
    "patternFunction": "Techno Clap Backbeat",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Techno; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "clap",
      "backbeat"
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
    "id": "ht-13-riser-build",
    "worldId": "house-techno",
    "traditionId": "house-techno-detroit",
    "name": "Riser Build",
    "family": "Arrangement",
    "category": "sectionPattern",
    "description": "Production-style build cue represented as a pattern envelope; use sparingly and never as a substitute for rhythmic development.",
    "tags": [
      "build",
      "automation"
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
  "saw-lead",
  "noise-sweep"
],
    "meter": "4/4",
    "cycleLength": 4,
    "subdivisions": 64,
    "onsetGrid": [
      0,
      8,
      16,
      24,
      32,
      40,
      48,
      56
    ],
    "accentProfile": [
      0.35,
      0.4,
      0.48,
      0.55,
      0.62,
      0.7,
      0.8,
      0.9
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "build",
      " automation"
    ],
    "density": "dense",
    "phrasePosition": [
      "start",
      "end"
    ],
    "sectionUsage": [
      "pre-chorus",
      "bridge"
    ],
    "patternFunction": "Riser Build",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Arrangement; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "build",
      "automation"
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
    "id": "ht-14-club-breakdown",
    "worldId": "house-techno",
    "traditionId": "house-techno-acid",
    "name": "Club Breakdown",
    "family": "Arrangement",
    "category": "break",
    "description": "Remove kick and bass for a short atmospheric reset before the drop.",
    "tags": [
      "breakdown",
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
      "texture"
    ],
    "instruments": [
  "warm-pad",
  "polysynth"
],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      12,
      20
    ],
    "accentProfile": [
      0.55,
      0.4,
      0.75
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "breakdown",
      " tension"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "end"
    ],
    "sectionUsage": [
      "breakdown"
    ],
    "patternFunction": "Club Breakdown",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Arrangement; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "breakdown",
      "tension"
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
    "id": "ht-15-drop-re-entry",
    "worldId": "house-techno",
    "traditionId": "house-techno-detroit",
    "name": "Post-break re-entry stack",
    "family": "Arrangement",
    "category": "sectionPattern",
    "description": "Section-level re-entry cue combining kick return with synchronized bass/synth attacks; it is an arrangement event, not a standalone groove.",
    "tags": [
      "drop",
      "re-entry"
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
      "kick",
      "bass",
      "synth"
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
      0.8,
      0.9,
      0.85
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "drop",
      " re-entry"
    ],
    "density": "medium",
    "phrasePosition": [
      "start"
    ],
    "sectionUsage": [
      "chorus"
    ],
    "patternFunction": "Drop Re-entry",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Arrangement; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "drop",
      "re-entry"
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
    "id": "ht-acid-303-squelch-slide",
    "worldId": "house-techno",
    "traditionId": "house-techno-acid",
    "name": "TB-303 Squelch & Slide Sequence",
    "family": "Acid Bass",
    "category": "phrasePattern",
    "description": "High-resonance TB-303 acid sequence with aggressive accent points and slide articulations.",
    "tags": ["acid", "303", "bass", "squelch", "synth"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["bass", "synth", "lead"],
    "instruments": ["bass-lead", "sub-bass"],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 2, 5, 7, 8, 10, 12, 14],
    "accentProfile": [1.0, 0.7, 0.95, 0.7, 0.9, 0.75, 1.0, 0.7],
    "velocityProfile": [0.95, 0.65, 0.9, 0.65, 0.85, 0.7, 0.95, 0.65],
    "articulations": ["accent", "slide"],
    "density": "dense",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "solo", "drop"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Acid House / Acid Techno; generalized from documented musical conventions.",
    "authenticityTags": ["acid", "303"],
    "danceTags": ["festival-fusion"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  },
  {
    "id": "ht-acid-tr707-drum-drive",
    "worldId": "house-techno",
    "traditionId": "house-techno-acid",
    "name": "TR-707 / TR-909 Acid Percussion Drive",
    "family": "Acid Drums",
    "category": "groove",
    "description": "Tight vintage Roland drum machine punch with accented rimshot, clap, and syncopated 16th hats.",
    "tags": ["acid", "drums", "707", "909", "pulse"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["drums", "percussion", "pulse"],
    "instruments": ["drums", "percussion"],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
    "accentProfile": [1.0, 0.6, 0.85, 0.6, 1.0, 0.6, 0.85, 0.65],
    "velocityProfile": [0.95, 0.55, 0.8, 0.55, 0.95, 0.55, 0.8, 0.6],
    "articulations": ["four-on-floor", "accented"],
    "density": "dense",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "drop"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Acid House / Acid Techno; generalized from documented musical conventions.",
    "authenticityTags": ["acid", "drums"],
    "danceTags": ["festival-fusion"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  },
  {
    "id": "ht-detroit-909-interlock",
    "worldId": "house-techno",
    "traditionId": "house-techno-detroit",
    "name": "Detroit TR-909 Syncopated Rhythm Engine",
    "family": "Detroit Techno",
    "category": "groove",
    "description": "Driving machine-precise 909 kick locked with syncopated open ride cymbal and syncopated handclap.",
    "tags": ["detroit", "techno", "drums", "909", "pulse"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["drums", "percussion", "pulse"],
    "instruments": ["drums", "percussion"],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 4, 6, 8, 12, 14],
    "accentProfile": [1.0, 0.9, 0.75, 1.0, 0.9, 0.8],
    "velocityProfile": [0.95, 0.85, 0.7, 0.95, 0.85, 0.75],
    "articulations": ["four-on-floor", "accented"],
    "density": "medium",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "peak"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Detroit Techno; generalized from documented musical conventions.",
    "authenticityTags": ["detroit", "909"],
    "danceTags": ["festival-fusion"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  },
  {
    "id": "ht-detroit-analog-strings",
    "worldId": "house-techno",
    "traditionId": "house-techno-detroit",
    "name": "Detroit Minor 9th Analog String Swell",
    "family": "Detroit Techno",
    "category": "harmony",
    "description": "Emotional futuristic Roland Juno / Prophet analog string chords with sustained minor 9th voicings.",
    "tags": ["detroit", "techno", "strings", "synth", "harmony"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["harmony", "synth", "pad"],
    "instruments": ["polysynth", "synth"],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 16,
    "onsetGrid": [0, 8, 16, 24],
    "accentProfile": [0.95, 0.8, 0.95, 0.8],
    "velocityProfile": [0.9, 0.75, 0.9, 0.75],
    "articulations": ["legato", "tenuto"],
    "density": "sparse",
    "phrasePosition": ["start", "middle"],
    "sectionUsage": ["intro", "verse", "chorus", "breakdown"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Detroit Techno; generalized from documented musical conventions.",
    "authenticityTags": ["detroit", "strings"],
    "danceTags": ["listening"],
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
      "four-on-floor grid",
      "repetition with mutation",
      "density automation"
    ],
    "rhythmicPriorities": [
      "four-on-floor grid",
      "repetition with mutation",
      "density automation"
    ],
    "harmonicStrategy": [
      "vamps",
      "extended chords in house",
      "static harmony with timbral evolution in techno"
    ],
    "melodicStrategy": [
      "short motifs",
      "sequenced cells",
      "filter/registration changes"
    ],
    "arrangementStrategy": "Long DJ-friendly intros/outros, gradual layer builds, breakdowns and drops; house often foregrounds groove/chords while techno can foreground timbral sequence.",
    "engineConstraints": [
      "Do not add song-like chord changes every bar; do not humanize the clock so much that the club grid loses identity.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "grid precision",
    "humanized house pocket",
    "sequence mutation",
    "accent/slide control",
    "filter-driven density"
  ],
  "forms": [
    "intro",
    "build",
    "groove",
    "breakdown",
    "drop",
    "peak",
    "outro"
  ],
  "relationships": [
    "kick ↔ bass",
    "hat ↔ bass",
    "sequence ↔ filter/section density"
  ],
  "songBehaviors": [
    "keep kick foundational",
    "develop repetition through variants and timbre",
    "do not fill every gap with percussion",
    "use breakdowns to remove rather than merely lower volume"
,
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize four-on-floor grid and repetition with mutation as the identity layer.",
    "Use short motifs and sequenced cells for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "drums": [
      "tight four-on-floor kit"
    ],
    "sub-bass": [
      "mono club low end"
    ],
    "bass-lead": [
      "acid-style sequence carrier"
    ],
    "polysynth": [
      "detroit sequence"
    ],
    "saw-lead": [
      "bright techno hook"
    ]
  },
  "combinations": [
    "House + Funk",
    "Techno + Ambient",
    "Acid + Electro"
  ],
  "danceTags": [
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Four-on-floor pulse with offbeat hats and evolving bass/synth sequences",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight",
    "humanizeJitterMs": 2
  },
  "crossLinks": [
    "House ↔ Funk / Disco",
    "Techno ↔ Electronic / Ambient"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
