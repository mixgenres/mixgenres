import { GenreWorld } from '../../types';

export const CUMBIA_WORLD : GenreWorld = {
  "id": "cumbia",
  "name": "Cumbia",
  "family": "Colombian / Latin American",
  "color": "#3f9b62",
  "level": "world",
  "description": "Cumbia is treated as a family of related traditions rather than a single generic Latin beat: Colombian drum/gaita roots, Argentine electric cumbia, and Peruvian chicha each get distinct pattern families while sharing the underlying cumbia pulse.",
  "traditions": [
    {
      "id": "cumbia-colombian",
      "worldId": "cumbia",
      "name": "Colombian Cumbia",
      "origin": "Caribbean lowlands of Colombia",
      "era": "19th century–Present",
      "description": "Cumbia's core drum and bell vocabulary combines a steady low drum pulse with offbeat tambor/bell figures, scraper textures and cyclical call-and-response melodies.",
      "characteristicInstruments": [
        "cumbia-drum",
        "guiro",
        "maracas",
        "flute",
        "bass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        115
      ],
      "keySubstyles": [
        "Traditional cumbia",
        "Cumbia sabanera",
        "Cumbia de gaitas"
      ],
      "coreConcepts": [
        "tambor alegre",
        "tambor llamador",
        "tambora",
        "gaita melody",
        "guacharaca"
      ],
      "rhythmicGrammar": [
        "steady binary pulse with interlocking offbeat drum strokes",
        "short bell/scraper cycles under repetitive melody"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Tambor/guacharaca interlock with a repeating gaita phrase",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 9
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
      "id": "cumbia-villera",
      "worldId": "cumbia",
      "name": "Argentine Cumbia / Cumbia Villera",
      "origin": "Argentina",
      "era": "1990s–Present",
      "description": "Electricized cumbia with more direct drum-kit articulation, repeating bass figures, keyboard hooks and dense vocal choruses while retaining the cumbia rhythmic skeleton.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "synth",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        85,
        105
      ],
      "keySubstyles": [
        "Cumbia villera",
        "Cumbia romántica",
        "Digital cumbia"
      ],
      "coreConcepts": [
        "cumbia pulse",
        "keyboard hooks",
        "electric bass ostinato",
        "chorus repetition"
      ],
      "rhythmicGrammar": [
        "binary cumbia pulse with syncopated fills",
        "short hook cycles between vocal phrases"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Cumbia pulse under a repeating keyboard/bass hook",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 6
      }
    },
    {
      "id": "cumbia-chicha",
      "worldId": "cumbia",
      "name": "Peruvian Chicha / Andean Cumbia",
      "origin": "Peru",
      "era": "1960s–Present",
      "description": "Electric guitar-led cumbia that merges Andean melodic color with cumbia rhythm, using tremolo guitar, organ/keyboard and distinctive bass movement.",
      "characteristicInstruments": [
        "electric-guitar",
        "organ",
        "bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        90,
        115
      ],
      "keySubstyles": [
        "Chicha",
        "Peruvian cumbia",
        "Andean cumbia"
      ],
      "coreConcepts": [
        "tremolo guitar",
        "Andean pentatonic color",
        "electric organ",
        "cumbia bass"
      ],
      "rhythmicGrammar": [
        "cumbia ostinato with melodic electric-guitar subdivisions",
        "fills often answer phrase ends"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Tremolo electric-guitar melody riding a cumbia bass/drum cycle",
      "grooveMechanics": {
        "swingPercentage": 51,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 7
      }
    }
  ],
  "substyles": [
    "Traditional Colombian Cumbia",
    "Cumbia Sabanera",
    "Cumbia Villera",
    "Chicha",
    "Digital Cumbia"
  ],
  "artists": [
    "Totó la Momposina",
    "Andrés Landero",
    "Los Mirlos",
    "Antonio Ríos",
    "Celso Piña"
  ],
  "concepts": [
    "cumbia pulse",
    "tambora",
    "alegre",
    "guacharaca",
    "gaita",
    "chicha tremolo"
  ],
  "roles": {
    "bass": [
      "cumbia root/fifth pulse"
    ],
    "percussion": [
      "tambora / alegre",
      "guacharaca"
    ],
    "melody": [
      "gaita or tremolo guitar"
    ],
    "harmony": [
      "keyboard hooks"
    ]
  },
  "patterns": [
  {
    "id": "cu-cumbia-bass",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Cumbia bass anticipation",
    "family": "Cumbia Bass",
    "category": "ostinato",
    "description": "Short-long bass anticipation that leaves the characteristic scraper/percussion layer audible; distinct from the steadier tumbao variant.",
    "tags": [
      "cumbia",
      "bass",
      "pulse"
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
      "acoustic-bass"
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
      14
    ],
    "accentProfile": [
      1,
      0.72,
      0.9,
      0.65,
      1,
      0.72
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58,
      0.92,
      0.62
    ],
    "syncopationRating": 0.45,
    "anticipationOffset": 0,
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
        "id": "cu-cumbia-bass-v-sparse",
        "parentPatternId": "cu-cumbia-bass",
        "name": "Cumbia Bass Pulse — sparse",
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
        "id": "cu-cumbia-bass-v-shift",
        "parentPatternId": "cu-cumbia-bass",
        "name": "Cumbia Bass Pulse — accent shift",
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
      "cumbia",
      "bass",
      "pulse"
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
    "id": "cu-cumbia-drum",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Tambora / alegre conversation",
    "family": "Cumbia Drums",
    "category": "groove",
    "description": "Abstracted low/high hand-drum conversation for a cumbia ensemble; the renderer uses a dedicated cumbia drum carrier rather than generic conga/cajón.",
    "tags": [
      "cumbia",
      "tambora",
      "alegre"
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
      "cumbia-drum"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      2,
      5,
      8,
      10,
      13
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
        "id": "cu-cumbia-drum-v-sparse",
        "parentPatternId": "cu-cumbia-drum",
        "name": "Tambora / Alegre Interlock — sparse",
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
        "id": "cu-cumbia-drum-v-shift",
        "parentPatternId": "cu-cumbia-drum",
        "name": "Tambora / Alegre Interlock — accent shift",
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
      "cumbia",
      "tambora",
      "alegre"
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
    "id": "cu-guacharaca",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Guacharaca scraper pulse",
    "family": "Cumbia Scrapers",
    "category": "ostinato",
    "description": "Continuous scraper motion with accented downstrokes; a guacharaca is a ribbed Colombian scraper, not a maraca pattern.",
    "tags": [
      "guacharaca",
      "scraper",
      "cumbia"
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
      "guacharaca"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      1,
      3,
      4,
      6,
      7,
      9,
      10,
      12,
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
      0.62,
      1,
      0.72,
      0.9
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58,
      0.84,
      0.64,
      0.78,
      0.58,
      0.92,
      0.62,
      0.86
    ],
    "syncopationRating": 0.55,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "scrape"
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
        "id": "cu-guacharaca-v-sparse",
        "parentPatternId": "cu-guacharaca",
        "name": "Guacharaca Scrape — sparse",
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
        "id": "cu-guacharaca-v-shift",
        "parentPatternId": "cu-guacharaca",
        "name": "Guacharaca Scrape — accent shift",
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
      "guacharaca",
      "scraper",
      "cumbia"
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
    "id": "cu-chicha-guitar",
    "worldId": "cumbia",
    "traditionId": "cumbia-chicha",
    "name": "Chicha Tremolo Guitar",
    "family": "Chicha Guitar",
    "category": "ostinato",
    "description": "Fast tremolo-picked pentatonic melody that sits above the cumbia pulse and can be fragmented for verse space.",
    "tags": [
      "chicha",
      "tremolo",
      "andino"
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
      "electric-guitar",
      "guitar"
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
    "syncopationRating": 0.62,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "tremolo"
    ],
    "density": "dense",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
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
        "id": "cu-chicha-guitar-v-sparse",
        "parentPatternId": "cu-chicha-guitar",
        "name": "Chicha Tremolo Guitar — sparse",
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
        "id": "cu-chicha-guitar-v-shift",
        "parentPatternId": "cu-chicha-guitar",
        "name": "Chicha Tremolo Guitar — accent shift",
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
      "chicha",
      "tremolo",
      "andino"
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
    "id": "cu-keyboard-hook",
    "worldId": "cumbia",
    "traditionId": "cumbia-villera",
    "name": "Keyboard Hook",
    "family": "Cumbia Hooks",
    "category": "rolePattern",
    "description": "Short repeating keyboard hook placed between vocal phrases, not continuously underneath them.",
    "tags": [
      "cumbia",
      "hook",
      "keyboard"
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
      "polysynth",
      "organ"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      3,
      6,
      10,
      12
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
    "syncopationRating": 0.68,
    "anticipationOffset": 1,
    "swingPercentage": 50,
    "articulations": [
      "staccato"
    ],
    "density": "medium",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "chorus",
      "verse"
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
        "id": "cu-keyboard-hook-v-sparse",
        "parentPatternId": "cu-keyboard-hook",
        "name": "Keyboard Hook — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          6,
          12
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "cu-keyboard-hook-v-shift",
        "parentPatternId": "cu-keyboard-hook",
        "name": "Keyboard Hook — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          3,
          6,
          10,
          12
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
      "cumbia",
      "hook",
      "keyboard"
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
    "id": "cu-06-cumbia-bass-tumbao",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Cumbia tumbao bass",
    "family": "Colombian Cumbia",
    "category": "bass",
    "description": "A syncopated tumbao-like bass cycle used in Colombian-derived and later cumbia arrangements; more active than the basic bass anticipation.",
    "tags": [
      "tumbao",
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
      3,
      6,
      8,
      11,
      14
    ],
    "accentProfile": [
      0.9,
      0.55,
      0.75,
      0.7,
      0.6,
      0.82
    ],
    "syncopationRating": 0.67,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "tumbao",
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
    "patternFunction": "Cumbia Bass Tumbao",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Colombian Cumbia; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "tumbao",
      "bass"
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
    "id": "cu-07-tambor-alegre-reply",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Tambor Alegre Reply",
    "family": "Colombian Cumbia",
    "category": "groove",
    "description": "Hand-drum answer pattern that sits around the main pulse rather than becoming a straight backbeat.",
    "tags": [
      "tambor",
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
      "percussion"
    ],
    "instruments": [
      "cumbia-drum"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      5,
      8,
      13,
      16,
      21,
      24,
      29
    ],
    "accentProfile": [
      0.9,
      0.55,
      0.78,
      0.62,
      0.85,
      0.5,
      0.8,
      0.65
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "tambor",
      " call-response"
    ],
    "density": "dense",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Tambor Alegre Reply",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Colombian Cumbia; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "tambor",
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
    "id": "cu-08-guacharaca-scrape",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Guacharaca reverse accent cycle",
    "family": "Colombian Cumbia",
    "category": "ostinato",
    "description": "A denser guacharaca variant with displaced accents for phrase development.",
    "tags": [
      "guacharaca",
      "scrape"
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
      "guacharaca"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      2,
      4,
      5,
      7,
      9,
      10,
      12,
      14,
      15
    ],
    "accentProfile": [
      0.55,
      0.65,
      0.5,
      0.68,
      0.56,
      0.66,
      0.52,
      0.72,
      0.55,
      0.65
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "guacharaca",
      " scrape"
    ],
    "density": "dense",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Guacharaca Scrape",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Colombian Cumbia; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "guacharaca",
      "scrape"
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
    "id": "cu-09-cumbia-guitar-offbeat",
    "worldId": "cumbia",
    "traditionId": "cumbia-chicha",
    "name": "Cumbia guitar anticipations",
    "family": "Cumbia Guitar",
    "category": "cell",
    "description": "Short anticipated guitar attacks that sit between the main pulse rather than copying a reggae-style skank.",
    "tags": [
      "offbeat guitar",
      "cumbia"
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
      "electric-guitar",
      "guitar"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      1,
      5,
      9,
      13
    ],
    "accentProfile": [
      0.62,
      0.7,
      0.58,
      0.78
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "offbeat guitar",
      " cumbia"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Cumbia Guitar Offbeat",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Cumbia Guitar; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "offbeat guitar",
      "cumbia"
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
    "id": "cu-10-chicha-tremolo-figure",
    "worldId": "cumbia",
    "traditionId": "cumbia-chicha",
    "name": "Chicha Tremolo Figure",
    "family": "Peruvian Cumbia / Chicha",
    "category": "ostinato",
    "description": "Electric-guitar tremolo line with minor-key contour, characteristic of chicha-derived cumbia textures.",
    "tags": [
      "chicha",
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
      "electric-guitar"
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
      0.7,
      0.55,
      0.68,
      0.5,
      0.75,
      0.6,
      0.7,
      0.55,
      0.65,
      0.5,
      0.78,
      0.62
    ],
    "syncopationRating": 0.67,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "chicha",
      " tremolo"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus",
      "solo"
    ],
    "patternFunction": "Chicha Tremolo Figure",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Peruvian Cumbia / Chicha; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "chicha",
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
    "id": "cu-11-cumbia-organ-hook",
    "worldId": "cumbia",
    "traditionId": "cumbia-villera",
    "name": "Cumbia Organ Hook",
    "family": "Electric Cumbia",
    "category": "rolePattern",
    "description": "Short organ riff repeating over the dance cycle; the hook should remain rhythmically simple.",
    "tags": [
      "organ",
      "hook"
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
      "organ"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      6,
      12,
      16,
      22,
      28
    ],
    "accentProfile": [
      0.8,
      0.65,
      0.75,
      0.8,
      0.65,
      0.9
    ],
    "syncopationRating": 0.33,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "organ",
      " hook"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "chorus"
    ],
    "patternFunction": "Cumbia Organ Hook",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Electric Cumbia; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "organ",
      "hook"
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
    "id": "cu-12-cumbia-maraca-layer",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Maraca offbeat shimmer",
    "family": "Percussion",
    "category": "ostinato",
    "description": "Even offbeat maraca layer; kept separate from the guacharaca scraper vocabulary.",
    "tags": [
      "maracas",
      "texture"
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
      "maracas"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      15
    ],
    "accentProfile": [
      0.4,
      0.52,
      0.45,
      0.58,
      0.42,
      0.5,
      0.46,
      0.62
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "maracas",
      " texture"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Cumbia Maraca Layer",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Percussion; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "maracas",
      "texture"
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
    "id": "cu-13-cumbia-call-and-response",
    "worldId": "cumbia",
    "traditionId": "cumbia-colombian",
    "name": "Cumbia Call-and-Response",
    "family": "Melody",
    "category": "interactionPattern",
    "description": "Lead phrase is answered by guitar/organ in the following half-bar.",
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
      "electric-guitar",
      "organ"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      4,
      8,
      12,
      18,
      22,
      26,
      30
    ],
    "accentProfile": [
      0.8,
      0.6,
      0.7,
      0.55,
      0.78,
      0.62,
      0.72,
      0.6
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "call-response"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Cumbia Call-and-Response",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "cu-13-cumbia-call-and-response-answer",
        "sourceRole": "counterline",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "cumbia",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Melody; generalized for engine recombination, not literal transcription.",
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
    "id": "cu-14-cumbia-stop-break",
    "worldId": "cumbia",
    "traditionId": "cumbia-villera",
    "name": "Cumbia Stop Break",
    "family": "Break",
    "category": "break",
    "description": "Band cuts the scraper and bass briefly, leaving a drum cue before re-entry.",
    "tags": [
      "stop-time",
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
      "percussion"
    ],
    "instruments": [
      "drums",
      "guiro"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      12
    ],
    "accentProfile": [
      1,
      0.75
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "stop-time",
      " re-entry"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "breakdown",
      "bridge"
    ],
    "patternFunction": "Cumbia Stop Break",
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
      "stop-time",
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
    "id": "cu-15-cumbia-final-tag",
    "worldId": "cumbia",
    "traditionId": "cumbia-villera",
    "name": "Cumbia Final Tag",
    "family": "Cadence",
    "category": "cadence",
    "description": "Compact percussion and bass tag to close a chorus or instrumental round.",
    "tags": [
      "tag",
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
      "fill"
    ],
    "instruments": [
      "bass",
      "cumbia-drum"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      8,
      12,
      14
    ],
    "accentProfile": [
      0.65,
      0.8,
      1
    ],
    "syncopationRating": 0.33,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "tag",
      " cadence"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "chorus",
      "ending"
    ],
    "patternFunction": "Cumbia Final Tag",
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
      "tag",
      "cadence"
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
    "id": "cu-villera-synth-bass",
    "worldId": "cumbia",
    "traditionId": "cumbia-villera",
    "name": "Villera Octave Synth Bass",
    "family": "Bass",
    "category": "groove",
    "description": "Aggressive, punchy synth bass bouncing in octaves on the upbeat and downbeat of the cumbia tempo.",
    "tags": ["villera", "synth", "bass", "cumbia"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["bass"],
    "instruments": ["bass", "synth"],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 4, 6, 8, 12, 14],
    "accentProfile": [1.0, 0.7, 0.9, 1.0, 0.7, 0.9],
    "velocityProfile": [0.95, 0.65, 0.85, 0.95, 0.65, 0.85],
    "articulations": ["staccato", "accented"],
    "density": "medium",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus"],
    "variants": [],
    "provenance": "Authored for Argentine Cumbia Villera tradition.",
    "authenticityTags": ["villera", "bass"],
    "danceTags": ["social-partner"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  },
  {
    "id": "cu-chicha-pentatonic-bass",
    "worldId": "cumbia",
    "traditionId": "cumbia-chicha",
    "name": "Chicha Walking Pentatonic Bass",
    "family": "Bass",
    "category": "groove",
    "description": "Melodic Andean pentatonic electric bass line walking between root, fifth, and minor thirds.",
    "tags": ["chicha", "bass", "andean", "cumbia"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["bass"],
    "instruments": ["bass", "electric-bass"],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 3, 6, 8, 11, 14],
    "accentProfile": [1.0, 0.7, 0.85, 1.0, 0.7, 0.85],
    "velocityProfile": [0.9, 0.65, 0.8, 0.9, 0.65, 0.8],
    "articulations": ["legato", "syncopated"],
    "density": "medium",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "solo"],
    "variants": [],
    "provenance": "Authored for Peruvian Chicha tradition.",
    "authenticityTags": ["chicha", "bass"],
    "danceTags": ["social-partner"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  }
],
  "engineProfile": {
    "phraseLengthsBars": [
      1,
      2
    ],
    "primaryPulse": [
      "guacharaca continuity",
      "bass/tambor interlock",
      "cyclic repetition"
    ],
    "rhythmicPriorities": [
      "guacharaca continuity",
      "bass/tambor interlock",
      "cyclic repetition"
    ],
    "harmonicStrategy": [
      "cyclic tonal vamps",
      "minor/major modal mixture",
      "simple harmony serving dance"
    ],
    "melodicStrategy": [
      "short melodic hooks",
      "call-response",
      "tremolo/electric-guitar ornament"
    ],
    "arrangementStrategy": "Establish the cycle, add refrain hook, alternate vocal/instrumental responses, use a brief stop or instrumental lift, then return.",
    "engineConstraints": [
      "Do not substitute generic four-on-floor drums; do not flatten chicha tremolo or guacharaca into straight pads.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "cumbia pulse preservation",
    "scraper texture",
    "regional guitar/gaita substitution",
    "hook density control"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "instrumental",
    "bridge",
    "outro"
  ],
  "relationships": [
    "bass ↔ hand drums",
    "scraper ↔ drum pulse",
    "guitar ↔ keyboard hook"
  ],
  "songBehaviors": [
    "keep the pulse cyclical",
    "let scraper remain lighter than drums",
    "use regional lead colors by tradition",
    "avoid turning all cumbia into four-on-the-floor pop"
,
    "Phrase in 1–2 bar units before making a major pattern change.",
    "Prioritize guacharaca continuity and bass/tambor interlock as the identity layer.",
    "Use short melodic hooks and call-response for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "bass": [
      "electric/acoustic cumbia pulse"
    ],
    "cajon": [
      "fallback hand-drum carrier"
    ],
    "guiro": [
      "guacharaca scraper"
    ],
    "electric-guitar": [
      "chicha tremolo"
    ],
    "organ": [
      "vintage cumbia/chicha bed"
    ]
  },
  "combinations": [
    "Cumbia + Reggaetón",
    "Cumbia + Chicha",
    "Cumbia + Ska"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Cyclical cumbia pulse with scraper/drum interlock and regional lead figures",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight",
    "humanizeJitterMs": 9
  },
  "crossLinks": [
    "Cumbia ↔ Reggaetón",
    "Cumbia ↔ Latin Folk"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
