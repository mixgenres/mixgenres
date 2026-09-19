import { GenreWorld } from '../../types';

export const REGGAETON_DEMBOW_WORLD : GenreWorld = {
  "id": "reggaeton-dembow",
  "name": "Reggaetón / Dembow",
  "family": "Caribbean / Latin urban",
  "color": "#d14b7a",
  "level": "world",
  "description": "Reggaetón and dembow are represented as drum-first rhythmic worlds: the dembow timeline is structural, bass answers it, and harmony/voice are deliberately prevented from washing out the groove. The world distinguishes classic and modern production grammar.",
  "traditions": [
    {
      "id": "reggaeton-dembow",
      "worldId": "reggaeton-dembow",
      "name": "Classic Reggaetón / Dembow",
      "origin": "Puerto Rico / Panama; Caribbean urban continuum",
      "era": "1990s–Present",
      "description": "Four-on-the-floor-adjacent kick architecture is replaced by the characteristic dembow kick/snare conversation, often with sparse synth stabs and bass that leaves the drum cell audible.",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "synth",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        105
      ],
      "keySubstyles": [
        "Classic reggaetón",
        "Dembow",
        "Underground reggaetón"
      ],
      "coreConcepts": [
        "dembow timeline",
        "kick-snare interlock",
        "syncopated bass",
        "vocal pocket",
        "percussive synth stabs"
      ],
      "rhythmicGrammar": [
        "3+3+2-ish syncopated kick logic against snare backbeats",
        "short repeated two-bar drum/bass cells"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Dembow kick/snare cell with syncopated low-end answer",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed",
        "humanizeJitterMs": 5
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "C",
          "G"
        ],
        "verse": [
          "Am",
          "F",
          "C",
          "G"
        ],
        "chorus": [
          "F",
          "G",
          "Am",
          "Am"
        ],
        "solo": [
          "Am",
          "F",
          "C",
          "G"
        ],
        "coda": [
          "Am",
          "Am",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "reggaeton-modern",
      "worldId": "reggaeton-dembow",
      "name": "Modern Reggaetón",
      "origin": "Puerto Rico / Colombia / Dominican Republic and global Latin pop",
      "era": "2010s–Present",
      "description": "Polished dembow with wider negative space, sub-bass, layered percussion and pop-oriented harmonic loops; production can alternate between dry rhythmic focus and lush pads.",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "synth",
        "piano",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        100
      ],
      "keySubstyles": [
        "Pop reggaetón",
        "Trap-reggaetón",
        "Romantic reggaetón"
      ],
      "coreConcepts": [
        "negative-space dembow",
        "sub-bass sustain",
        "vocal syncopation",
        "filtered transitions"
      ],
      "rhythmicGrammar": [
        "dembow skeleton with selective kick omissions",
        "snare/perc anchors remain legible"
      ],
      "danceTags": [
        "social-partner",
        "sensual-fusion",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sparse dembow skeleton under a sustained sub bass and syncopated vocal phrase",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 4
      }
    }
  ],
  "substyles": [
    "Classic Reggaetón",
    "Dembow",
    "Pop Reggaetón",
    "Romantic Reggaetón"
  ],
  "artists": [
    "DJ Playero",
    "Daddy Yankee",
    "Tego Calderón",
    "Don Omar",
    "Wisin & Yandel",
    "Ivy Queen"
  ],
  "concepts": [
    "dembow",
    "negative space",
    "kick-snare interlock",
    "syncopated sub-bass",
    "vocal pocket"
  ],
  "roles": {
    "drums": [
      "dembow skeleton",
      "kick/snare interlock"
    ],
    "bass": [
      "syncopated sub answers"
    ],
    "harmony": [
      "short offbeat stabs"
    ],
    "voice": [
      "syncopated reggaetón phrasing"
    ]
  },
  "patterns": [
  {
    "id": "rg-dembow-core",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-dembow",
    "name": "Dembow Core Timeline",
    "family": "Dembow Drums",
    "category": "groove",
    "description": "The canonical engine cell: kick attacks and snare answers form a two-bar conversation with enough gaps for vocals.",
    "tags": [
      "dembow",
      "reggaeton",
      "timeline"
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
      "kick",
      "snare"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0, 3, 4, 6, 8, 11, 12, 14,
      16, 19, 20, 22, 24, 27, 28, 30
    ],
    "hitGrid": [
      "kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare",
      "kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare"
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
      0.9,
      0.65,
      1,
      0.72,
      0.9,
      0.65
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
      0.86,
      0.58,
      0.92,
      0.62,
      0.86,
      0.58
    ],
    "syncopationRating": 0.92,
    "anticipationOffset": 1,
    "swingPercentage": 50,
    "articulations": [
      "kick-snare"
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
      "breakdown"
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
        "id": "rg-dembow-core-v-sparse",
        "parentPatternId": "rg-dembow-core",
        "name": "Dembow Core Timeline — sparse",
        "variationType": "sparse",
        "probability": 0.05,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [0, 8, 14, 24],
        "hitGrid": ["kick", "kick", "snare", "kick"],
        "accentProfile": [0.92, 0.72, 0.9, 0.68]
      },
      {
        "id": "rg-dembow-core-v-shift",
        "parentPatternId": "rg-dembow-core",
        "name": "Dembow Core Timeline — accent shift",
        "variationType": "accentShift",
        "probability": 0.12,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0, 3, 4, 6, 8, 11, 12, 14,
          16, 19, 20, 22, 24, 27, 28, 30
        ],
        "hitGrid": [
          "kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare",
          "kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare"
        ],
        "accentProfile": [
          0.95, 0.7, 0.95, 0.7, 0.95, 0.7, 0.95, 0.7,
          0.95, 0.7, 0.95, 0.7, 0.95, 0.7, 0.95, 0.7
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "dembow",
      "reggaeton",
      "timeline"
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
    "id": "rg-dembow-bass",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-dembow",
    "name": "Dembow Syncopated Bass",
    "family": "Dembow Bass",
    "category": "ostinato",
    "description": "Short sub-bass notes answer the kick cell rather than simply doubling it.",
    "tags": [
      "dembow",
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
      "sub-bass",
      "bass"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      6,
      8,
      14,
      16,
      22,
      24,
      30
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
    "syncopationRating": 0.9,
    "anticipationOffset": 1,
    "swingPercentage": 50,
    "articulations": [
      "short",
      "sub"
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
        "id": "rg-dembow-bass-v-sparse",
        "parentPatternId": "rg-dembow-bass",
        "name": "Dembow Syncopated Bass — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          8,
          16,
          24
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9,
          0.65
        ]
      },
      {
        "id": "rg-dembow-bass-v-shift",
        "parentPatternId": "rg-dembow-bass",
        "name": "Dembow Syncopated Bass — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
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
      "dembow",
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
    "id": "rg-perc-ghost",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Percussive Ghost Layer",
    "family": "Modern Reggaetón Percussion",
    "category": "rolePattern",
    "description": "A sparse shaker/click layer fills selected sixteenth gaps while preserving the dembow skeleton.",
    "tags": [
      "negative-space",
      "shaker"
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
      "shaker",
      "cabasa"
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
    "syncopationRating": 0.65,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "shaker"
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
        "id": "rg-perc-ghost-v-sparse",
        "parentPatternId": "rg-perc-ghost",
        "name": "Percussive Ghost Layer — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          2,
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
        "id": "rg-perc-ghost-v-shift",
        "parentPatternId": "rg-perc-ghost",
        "name": "Percussive Ghost Layer — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          2,
          4,
          6,
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
          0.7
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "negative-space",
      "shaker"
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
    "id": "rg-synth-stab",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Offbeat Synth Stab",
    "family": "Reggaetón Stabs",
    "category": "ostinato",
    "description": "Short chord/synth stabs reinforce the offbeat spaces instead of carpeting every subdivision.",
    "tags": [
      "stabs",
      "offbeat",
      "reggaeton"
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
      "clavinet"
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
        "id": "rg-synth-stab-v-sparse",
        "parentPatternId": "rg-synth-stab",
        "name": "Offbeat Synth Stab — sparse",
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
        "id": "rg-synth-stab-v-shift",
        "parentPatternId": "rg-synth-stab",
        "name": "Offbeat Synth Stab — accent shift",
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
      "stabs",
      "offbeat",
      "reggaeton"
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
    "id": "rg-dembow-break",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-dembow",
    "name": "Dembow Break & Pickup",
    "family": "Breaks",
    "category": "break",
    "description": "Drops the main kick for a half-bar, then restores the snare/pickup into the next phrase.",
    "tags": [
      "break",
      "pickup",
      "dembow"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "drums"
    ],
    "instruments": [
      "drums",
      "snare"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 4, 8, 12, 14],
    "hitGrid": ["kick", "kick", "kick", "kick", "snare"],
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
    "anticipationOffset": 1,
    "swingPercentage": 50,
    "articulations": [
      "fill"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "breakdown",
      "ending",
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
        "id": "rg-dembow-break-v-sparse",
        "parentPatternId": "rg-dembow-break",
        "name": "Dembow Break & Pickup — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          8,
          14
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "rg-dembow-break-v-shift",
        "parentPatternId": "rg-dembow-break",
        "name": "Dembow Break & Pickup — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          4,
          8,
          12,
          14
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
      "break",
      "pickup",
      "dembow"
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
    "id": "rg-06-classic-dembow-skeleton",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-dembow",
    "name": "Classic dembow two-bar answer",
    "family": "Dembow",
    "category": "groove",
    "description": "Two-bar dembow skeleton with a second-bar answer; deliberately not a duplicate of the one-bar core.",
    "tags": [
      "dembow",
      "timeline"
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
      "kick",
      "snare"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0, 3, 4, 6, 8, 11, 12, 14,
      16, 19, 20, 22, 24, 27, 28, 30
    ],
    "hitGrid": [
      "kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare",
      "kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare"
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
      1,
      0.72,
      0.9,
      0.65,
      0.88,
      0.7
    ],
    "syncopationRating": 0.38,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "dembow",
      "timeline"
    ],
    "density": "dense",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Classic Dembow Skeleton",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Dembow; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "dembow",
      "timeline"
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
    "id": "rg-07-dembow-clave-like-ghosts",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Dembow Offbeat Texture",
    "family": "Dembow",
    "category": "groove",
    "description": "A sparse 2-bar shaker/click texture that reinforces the dembow subdivision without importing a separate clave grammar.",
    "tags": [
      "offbeat texture",
      "negative space"
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
      "shaker",
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      2, 6, 10, 14,
      18, 22, 26, 30
    ],
    "accentProfile": [
      0.28, 0.34, 0.26, 0.38,
      0.30, 0.36, 0.28, 0.42
    ],
    "syncopationRating": 0.58,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "offbeat texture",
      "negative space"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Dembow Offbeat Texture",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Dembow; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "dembow texture",
      "offbeat subdivision"
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
    "id": "rg-08-reggaeton-sub-answer",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Reggaeton Sub Answer",
    "family": "Bass",
    "category": "rolePattern",
    "description": "Short sub-bass answer lands around the drum cell instead of copying every kick.",
    "tags": [
      "sub-bass",
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
      "sub-bass"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      6,
      10,
      14,
      16,
      22,
      26,
      30
    ],
    "accentProfile": [
      1,
      0.65,
      0.7,
      0.6,
      0.9,
      0.62,
      0.72,
      0.58
    ],
    "syncopationRating": 0.75,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "sub-bass",
      " syncopation"
    ],
    "density": "dense",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Reggaeton Sub Answer",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Bass; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "sub-bass",
      "syncopation"
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
    "id": "rg-09-reggaeton-piano-stab",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Reggaetón piano offbeat stab",
    "family": "Harmony",
    "category": "cell",
    "description": "Short piano/synth anticipations that leave the kick and vocal pocket open.",
    "tags": [
      "stabs",
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
      0.55,
      0.72,
      0.58,
      0.8
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "stabs",
      " offbeat"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Reggaeton Piano Stab",
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
      "stabs",
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
    "id": "rg-10-perreo-shaker-layer",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Perreo shaker displacement",
    "family": "Percussion",
    "category": "ostinato",
    "description": "Straight eighth-note shaker pulse kept quiet so the dembow displacement remains audible underneath it.",
    "tags": [
      "shaker",
      "density control"
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
      "shaker"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0, 2, 4, 6, 8, 10, 12, 14
    ],
    "accentProfile": [
      0.38,
      0.5,
      0.4,
      0.52,
      0.4,
      0.48,
      0.38,
      0.5
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "shaker",
      " density control"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "chorus",
      "solo"
    ],
    "patternFunction": "Perreo Shaker Layer",
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
      "shaker",
      "density control"
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
    "id": "rg-11-dembow-vocal-pickup",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Dembow Vocal Pickup",
    "family": "Voice",
    "category": "phrasePattern",
    "description": "Short pickup into the next bar, leaving the main downbeat open for the groove.",
    "tags": [
      "pickup",
      "vocal pocket"
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
      13,
      14,
      15
    ],
    "accentProfile": [
      0.5,
      0.7,
      0.9
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "pickup",
      " vocal pocket"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Dembow Vocal Pickup",
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
      "vocal pocket"
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
    "id": "rg-12-reggaeton-hook-lift",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Reggaeton Hook Dembow Lift",
    "family": "Dembow",
    "category": "sectionPattern",
    "description": "Two-bar chorus variation: the core dembow remains intact while the second bar adds a short clap/syncopation lift. Drum-only so the engine preserves track separation.",
    "tags": [
      "hook lift",
      "dembow",
      "chorus"
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
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0, 3, 4, 6, 8, 11, 12, 14,
      16, 19, 20, 22, 24, 27, 28, 30
    ],
    "hitGrid": [
      "kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare",
      "kick", "snare", "kick", "snare", "kick", "snare", "clap", "kick"
    ],
    "accentProfile": [
      1, 0.72, 0.9, 0.65, 0.88, 0.7, 0.82, 0.62,
      1, 0.72, 0.92, 0.7, 0.9, 0.68, 0.86, 0.94
    ],
    "syncopationRating": 0.54,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "hook lift",
      "dembow"
    ],
    "density": "dense",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "chorus"
    ],
    "patternFunction": "Reggaeton Hook Dembow Lift",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern rebuilt as a single-track dembow performance cell; no mixed-layer recipe.",
    "authenticityTags": [
      "dembow",
      "chorus variation",
      "clap punctuation"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.9,
    "enabled": true
  },
  {
    "id": "rg-13-dembow-break-silence",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Dembow Break / Re-entry",
    "family": "Breaks",
    "category": "break",
    "description": "A sparse dembow break that keeps the displaced snare relationship audible before the full groove returns.",
    "tags": [
      "dropout",
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
      "drums",
      "kick",
      "snare"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0, 3, 8, 11, 14
    ],
    "hitGrid": [
      "kick", "snare", "kick", "snare", "clap"
    ],
    "accentProfile": [
      1, 0.72, 0.92, 0.68, 0.82
    ],
    "syncopationRating": 0.49,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "dropout",
      "re-entry"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "end"
    ],
    "sectionUsage": [
      "breakdown",
      "bridge"
    ],
    "patternFunction": "Dembow Break / Re-entry",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Breaks; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "dropout",
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
    "id": "rg-14-modern-dembow-triplet-fill",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Modern Dembow Phrase-End Turn",
    "family": "Fill",
    "category": "fill",
    "description": "A short 16th-note phrase-end turn that punctuates the dembow cycle without introducing a generic triplet-rock fill.",
    "tags": [
      "fill",
      "phrase end",
      "16th subdivision"
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
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [12, 14, 15],
    "hitGrid": ["snare", "clap", "kick"],
    "accentProfile": [0.58, 0.76, 0.96],
    "syncopationRating": 0.72,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "fill",
      "phrase end"
    ],
    "density": "medium",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "chorus",
      "bridge"
    ],
    "patternFunction": "Modern Dembow Phrase-End Turn",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Fill; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "phrase-end fill",
      "16th subdivision"
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
    "id": "rg-15-reggaeton-tag-turn",
    "worldId": "reggaeton-dembow",
    "traditionId": "reggaeton-modern",
    "name": "Dembow tag turnaround",
    "family": "Cadence",
    "category": "cadence",
    "description": "Four-hit turnaround into the next loop or vocal section.",
    "tags": [
      "tag",
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
      "fill"
    ],
    "instruments": [
  "drums",
  "claves"
],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [11, 13, 14, 15],
    "hitGrid": ["snare", "clap", "snare", "clap"],
    "accentProfile": [
      0.75,
      1,
      0.75,
      1
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "tag",
      " transition"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "chorus",
      "ending"
    ],
    "patternFunction": "Reggaeton Tag Turn",
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
      "transition"
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
      2
    ],
    "primaryPulse": [
      "dembow timeline",
      "negative space",
      "kick/bass interlock"
    ],
    "rhythmicPriorities": [
      "dembow timeline",
      "negative space",
      "kick/bass interlock"
    ],
    "harmonicStrategy": [
      "short cyclic loops",
      "modal/pop vamp",
      "harmonic simplicity in groove-heavy sections"
    ],
    "melodicStrategy": [
      "syncopated vocal cells",
      "pickup phrases",
      "short repeated hooks"
    ],
    "arrangementStrategy": "Intro can reveal percussion gradually; verses leave air; hooks layer the same core groove rather than replacing it; breaks remove elements before re-entry.",
    "engineConstraints": [
      "Do not overfill 16ths; do not make bass a constant kick double; do not erase the two-bar identity.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "dembow timeline preservation",
    "negative-space density",
    "sub-bass answer placement",
    "drop/re-entry"
  ],
  "forms": [
    "intro",
    "verse",
    "pre-chorus",
    "chorus",
    "breakdown",
    "bridge",
    "outro"
  ],
  "relationships": [
    "dembow drums ↔ bass",
    "kick ↔ synth stab",
    "drums ↔ vocal space"
  ],
  "songBehaviors": [
    "keep the dembow skeleton audible",
    "do not fill every sixteenth with percussion",
    "let bass answer rather than double",
    "use sparse breaks before peak sections"
,
    "Phrase in 1–2 bar units before making a major pattern change.",
    "Prioritize dembow timeline and negative space as the identity layer.",
    "Use syncopated vocal cells and pickup phrases for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "sub-bass": [
      "short mono low-end answers to kick",
      "sustained modern sub notes"
    ],
    "drums": [
      "dry dembow kit"
    ],
    "shaker": [
      "fine sixteenth ghost layer"
    ],
    "polysynth": [
      "short offbeat chord stabs"
    ],
    "voice": [
      "syncopated lead phrase"
    ]
  },
  "combinations": [
    "Reggaetón + Dancehall",
    "Dembow + Latin Pop",
    "Reggaetón + Afrobeats"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "sensual-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Dembow kick/snare conversation with a syncopated sub-bass answer",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "pushed",
    "humanizeJitterMs": 5
  },
  "crossLinks": [
    "Reggaetón ↔ Dancehall / Afrobeats",
    "Reggaetón ↔ Salsa / Bachata"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
