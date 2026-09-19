import { GenreWorld } from '../../types';

export const FOLK_WORLD: GenreWorld = {
  "id": "folk",
  "name": "Folk",
  "family": "Acoustic / Traditional",
  "color": "#DFE2C7",
  "level": "world",
  "description": "Acoustic-driven music centered around storytelling, fingerpicking, strumming, and vocal harmony.",
  "traditions": [
    {
      "id": "folk-singer-songwriter",
      "worldId": "folk",
      "name": "Singer-Songwriter",
      "origin": "Global",
      "era": "1960s-Present",
      "description": "Acoustic guitar and vocal focus.",
      "characteristicInstruments": [
        "guitar",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "3/4",
        "6/8"
      ],
      "tempoRange": [
        70,
        120
      ],
      "keySubstyles": [
        "Contemporary Folk"
      ],
      "coreConcepts": [
        "fingerpicking",
        "strumming",
        "storytelling"
      ],
      "rhythmicGrammar": [
        "alternating bass"
      ],
      "danceTags": [
        "listening",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Alternating thumb Travis picking with syncopated treble melody and open chords",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "Am",
          "F",
          "G"
        ],
        "verse": [
          "C",
          "Am",
          "F",
          "G"
        ],
        "chorus": [
          "F",
          "G",
          "C",
          "Am"
        ],
        "solo": [
          "Dm",
          "G",
          "C",
          "Am"
        ],
        "coda": [
          "C",
          "Am",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "folk-bluegrass",
      "worldId": "folk",
      "name": "Bluegrass & Old Time",
      "origin": "US",
      "era": "1940s-Present",
      "description": "Fast acoustic string band music.",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "violin"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        100,
        160
      ],
      "keySubstyles": [
        "Bluegrass"
      ],
      "coreConcepts": [
        "flatpicking",
        "driving rhythm"
      ],
      "rhythmicGrammar": [
        "boom-chuck"
      ],
      "danceTags": [
        "social-partner",
        "listening",
        "solo-vernacular"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Boom-chuck bass and mandolin chop driving high-speed acoustic flatpicking",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C",
          "D",
          "G"
        ],
        "verse": [
          "G",
          "G",
          "C",
          "G"
        ],
        "chorus": [
          "C",
          "G",
          "D",
          "G"
        ],
        "solo": [
          "G",
          "C",
          "D",
          "G"
        ],
        "coda": [
          "G",
          "D",
          "G",
          "G"
        ]
      }
    }
  ],
  "substyles": [
    "Singer-Songwriter",
    "Contemporary Folk",
    "Bluegrass",
    "Old Time",
    "Americana",
    "Indie Folk",
    "Celtic Folk"
  ],
  "artists": [
    "Bob Dylan",
    "Joni Mitchell",
    "Woody Guthrie",
    "Joan Baez",
    "Bill Monroe",
    "Doc Watson",
    "Fleet Foxes",
    "Gillian Welch"
  ],
  "concepts": [
    "Travis picking",
    "alternating bass",
    "Carter scratch",
    "boom-chuck",
    "ballad form",
    "modal tuning",
    "close vocal harmony"
  ],
  "roles": {
    "guitar": [
      "Travis picking",
      "flatpicking runs",
      "syncopated strumming"
    ],
    "bass": [
      "root-fifth alternating bass",
      "boom-chuck foundation"
    ],
    "violin": [
      "old-time fiddle drones",
      "melodic breaks"
    ],
    "voice": [
      "narrative delivery",
      "high lonesome vocal harmony"
    ]
  },
  "patterns": [
    {
      "id": "folk-travis",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Travis Picking",
      "family": "Fingerpicking",
      "category": "phrasePattern",
      "description": "Alternating thumb bass with syncopated treble.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
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
        6,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.95,
        0.85,
        0.75,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.8,
        0.7,
        0.75
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
          "id": "folk-travis-variant-clawhammer-feel",
          "parentPatternId": "folk-travis",
          "name": "Clawhammer Feel",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Bum-ditty rhythm translated to guitar. Retained as a variation rather than a separate pattern entry.",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.7,
            0.85,
            0.95,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.9,
            0.65,
            0.8
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "folk-interaction-1",
          "worldId": "folk",
          "sourceRole": "drums",
          "targetRole": "bass",
          "relationship": "reinforce",
          "description": "Low-end attacks reinforce the main pulse without doubling every subdivision.",
          "timingOffsetSteps": 0,
          "probability": 0.78
        }
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "folk-travis-sync",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Syncopated Travis",
      "family": "Fingerpicking",
      "category": "fill",
      "description": "Travis picking with anticipations.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
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
        7,
        8,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.85,
        0.9,
        0.95,
        0.85,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.85,
        0.9,
        0.8,
        0.75
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
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
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
      "id": "folk-strum-basic",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Basic Strum",
      "family": "Strumming",
      "category": "break",
      "description": "Down on beats, up on offbeats.",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
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
        0.75,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.75
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
          "id": "folk-strum-basic-variant-carter-scratch",
          "parentPatternId": "folk-strum-basic",
          "name": "Carter Scratch",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Melody on bass notes followed by strum. Retained as a variation rather than a separate pattern entry.",
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.8,
            0.95,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.75,
            0.9,
            0.8
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
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
      "id": "folk-strum-sync",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Syncopated Strum",
      "family": "Strumming",
      "category": "cadence",
      "description": "Standard folk syncopated strum (D-D-U-U-D-U).",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.8,
        0.9,
        0.75,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.75,
        0.85,
        0.7,
        0.8
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
          "id": "folk-strum-sync-v-01",
          "parentPatternId": "folk-strum-sync",
          "name": "Syncopated Strum — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5,
            6
          ],
          "accentProfile": [
            0.95,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
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
      "id": "folk-waltz",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Waltz Strum",
      "family": "Strumming",
      "category": "groove",
      "description": "Bass on 1, strum on 2 and 3.",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 6,
      "onsetGrid": [
        0,
        2,
        4
      ],
      "accentProfile": [
        1,
        0.72,
        0.65
      ],
      "velocityProfile": [
        0.95,
        0.68,
        0.6
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
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "folk-interaction-2",
          "worldId": "folk",
          "sourceRole": "voice",
          "targetRole": "harmony",
          "relationship": "leaveSpace",
          "description": "Harmony reduces density under vocal entries so the phrase remains foregrounded.",
          "timingOffsetSteps": 0,
          "probability": 0.72
        }
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "folk-waltz-pick",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Waltz Fingerpick",
      "family": "Fingerpicking",
      "category": "groove",
      "description": "Arpeggio over 3 beats.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 6,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "accentProfile": [
        1,
        0.65,
        0.75,
        0.85,
        0.7,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.7,
        0.8,
        0.65,
        0.7
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
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "folk-interaction-3",
          "worldId": "folk",
          "sourceRole": "bass",
          "targetRole": "drums",
          "relationship": "accentWith",
          "description": "Bass accents align with selected kick/backbeat events for a tighter pocket.",
          "timingOffsetSteps": 0,
          "probability": 0.65
        }
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "folk-68-arpeggio",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "6/8 Arpeggio",
      "family": "Fingerpicking",
      "category": "groove",
      "description": "Rolling 6/8 arpeggio pattern.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 6,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "accentProfile": [
        1,
        0.6,
        0.7,
        0.9,
        0.65,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.65,
        0.85,
        0.6,
        0.65
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
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
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
      "id": "folk-fiddle-drone",
      "worldId": "folk",
      "traditionId": "folk-bluegrass",
      "name": "Old-Time Fiddle Drone & Shuffle Bow",
      "family": "Fiddle",
      "category": "ostinato",
      "description": "Sustained open-string drone under a rhythmic shuffle-bow melody, the backbone of old-time Appalachian fiddle tunes.",
      "tags": [
        "folk",
        "old-time",
        "fiddle"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "violin"
      ],
      "instruments": [
        "violin"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        9,
        10
      ],
      "accentProfile": [
        1,
        0.6,
        0.75,
        0.9,
        0.6,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.7,
        0.85,
        0.55,
        0.7
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
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "violin"
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
      "id": "folk-fast-bluegrass",
      "worldId": "folk",
      "traditionId": "folk-bluegrass",
      "name": "Fast Bluegrass Drive",
      "family": "Rhythm",
      "category": "groove",
      "description": "Driving 2/4 feel flatpicking rhythm.",
      "tags": [
        "folk",
        "bluegrass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 4,
      "onsetGrid": [
        0,
        1,
        2,
        3
      ],
      "accentProfile": [
        1,
        0.75,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.9,
        0.75
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
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
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
      "id": "folk-driving-8ths",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Driving 8ths",
      "family": "Strumming",
      "category": "groove",
      "description": "Continuous 8th note strumming for builds.",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
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
        0.65,
        0.85,
        0.7,
        0.95,
        0.65,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.8,
        0.65,
        0.9,
        0.6,
        0.8,
        0.7
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
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Folk genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,
      "roleDependencies": [
        "rhythm-guitar"
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
      "id": "folk-roster-bass",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Folk bass part",
      "family": "Flatpick",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives this genre an authored part for one of its declared instruments. Built around alternating bass and the flatpick vocabulary of Folk.",
      "tags": [
        "folk",
        "flatpick",
        "roster",
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        9,
        12
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
      "swingPercentage": 52,
      "articulations": [
        "accented",
        "ghost-aware"
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
        "section-dependent",
        "tonal or modal context"
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
      "provenance": "Folk genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk",
        "flatpick"
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
      "id": "folk-roster-voice",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Folk voice part",
      "family": "Banjo Roll",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives this genre an authored part for one of its declared instruments. Built around flatpicking and the banjo roll vocabulary of Folk.",
      "tags": [
        "folk",
        "banjo-roll",
        "roster",
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
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        10,
        13
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
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 52,
      "articulations": [
        "breath",
        "phrase-end"
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
        "section-dependent",
        "tonal or modal context"
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
      "provenance": "Folk genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk",
        "banjo-roll"
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
      "id": "folk-call-13",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Fiddle Break Response",
      "family": "Fiddle Break",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around storytelling vocal and the fiddle break vocabulary of Folk.",
      "tags": [
        "folk",
        "fiddle-break",
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
        1,
        4,
        7,
        10,
        13
      ],
      "accentProfile": [
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
        0.9
      ],
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 52,
      "articulations": [
        "breath",
        "phrase-end"
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
        "section-dependent",
        "tonal or modal context"
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
      "provenance": "Folk genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk",
        "fiddle-break"
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
      "id": "folk-anchor-14",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Vocal Harmony Anchor",
      "family": "Vocal Harmony",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around fiddle breaks and the vocal harmony vocabulary of Folk.",
      "tags": [
        "folk",
        "vocal-harmony",
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        5,
        8,
        11,
        14
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
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 52,
      "articulations": [
        "accented",
        "ghost-aware"
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
        "section-dependent",
        "tonal or modal context"
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
      "provenance": "Folk genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk",
        "vocal-harmony"
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
      "id": "folk-comp-15",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Fingerpick Comping",
      "family": "Fingerpick",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around fingerpicking and the fingerpick vocabulary of Folk.",
      "tags": [
        "folk",
        "fingerpick",
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
        4
      ],
      "accentProfile": [
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9
      ],
      "syncopationRating": 0.33,
      "anticipationOffset": 0,
      "swingPercentage": 52,
      "articulations": [
        "accented",
        "ghost-aware"
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
        "section-dependent",
        "tonal or modal context"
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
          "id": "folk-comp-15-v-01",
          "parentPatternId": "folk-comp-15",
          "name": "Fingerpick Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.95,
            0.69
          ],
          "velocityProfile": [
            0.92,
            0.61
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        ],
      "provenance": "Folk genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk",
        "fingerpick"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "folk-intro-16",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Flatpick Intro",
      "family": "Flatpick",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around alternating bass and the flatpick vocabulary of Folk.",
      "tags": [
        "folk",
        "flatpick",
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
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        4,
        6,
        8,
        11,
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
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9,
        0.63
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 52,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "density": "dynamic",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],
      "harmonicContext": [
        "tonal",
        "section-dependent",
        "tonal or modal context"
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
          "id": "folk-intro-16-v-03",
          "parentPatternId": "folk-intro-16",
          "name": "Flatpick Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            4,
            6,
            8,
            11,
            12,
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
            0.88,
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
            0.9,
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
      "provenance": "Folk genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk",
        "flatpick"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "folk-verse-17",
      "worldId": "folk",
      "traditionId": "folk-singer-songwriter",
      "name": "Banjo Roll Verse Variation",
      "family": "Banjo Roll",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around flatpicking and the banjo roll vocabulary of Folk.",
      "tags": [
        "folk",
        "banjo-roll",
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
        1,
        2,
        5,
        7,
        9,
        12,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9,
        0.63
      ],
      "syncopationRating": 0.875,
      "anticipationOffset": 0,
      "swingPercentage": 52,
      "articulations": [
        "accented",
        "ghost-aware"
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
        "section-dependent",
        "tonal or modal context"
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
      "provenance": "Folk genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "folk",
        "banjo-roll"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "folk-bluegrass-mandolin-chop",
      "worldId": "folk",
      "traditionId": "folk-bluegrass",
      "name": "Bluegrass Mandolin Offbeat Chop",
      "family": "Acoustic String",
      "category": "groove",
      "description": "Crisp, percussive muted offbeat chord chop on beats 2 and 4 serving as the rhythmic engine and snare substitute of bluegrass.",
      "tags": ["bluegrass", "mandolin", "chop", "offbeat", "old-time"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "pulse", "harmony"],
      "instruments": ["acoustic-guitar"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [4, 12],
      "accentProfile": [1.0, 1.0],
      "velocityProfile": [0.95, 0.95],
      "density": "sparse",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Bluegrass & Old Time; generalized from documented musical conventions.",
      "authenticityTags": ["bluegrass", "mandolin"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "techniques": [
    "Travis fingerstyle",
    "flatpicking",
    "Carter scratch thumb-brush",
    "clawhammer rhythm"
  ],
  "forms": [
    "strophic verse ballad",
    "verse-chorus",
    "AABB fiddle tune",
    "instrumental breakdown"
  ],
  "relationships": [
    "thumb bass ↔ treble melody (Travis counterpoint)",
    "guitar flatpicking ↔ bass boom-chuck (rhythmic lock)"
  ],
  "transformations": [
    "trans-density-sparse",
    "trans-density-dense",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "story-driven vocal phrasing with instrumental fills between stanzas",
    "dynamic builds through strumming density",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "acoustic dreadnought with bronze strings and alternating thumb bass"
    ],
    "bass": [
      "upright acoustic bass with warm woody thud"
    ],
    "voice": [
      "narrative vocal phrasing and harmony"
    ]
  },
  "combinations": [
    "Folk + Country",
    "Folk + Blues",
    "Folk + Rock"
  ],
  "danceTags": [
    "listening",
    "social-partner",
    "wcs-compatible",
    "solo-vernacular"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Alternating thumb Travis picking with syncopated treble melody and open chords",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Folk ↔ Country",
    "Folk ↔ Blues",
    "Folk ↔ Rock"
  ]
};
