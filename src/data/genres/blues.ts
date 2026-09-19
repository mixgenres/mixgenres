import { GenreWorld } from '../../types';

export const BLUES_WORLD: GenreWorld = {
  "id": "blues",
  "name": "Blues",
  "family": "Roots / Blues",
  "color": "#6f7f9a",
  "level": "world",
  "description": "A deep blues vocabulary built around repeating forms, shuffle and straight feels, call-and-response, expressive phrasing, bass movement, turnarounds, and ensemble interaction.",
  "traditions": [
    {
      "id": "blues-delta",
      "worldId": "blues",
      "name": "Delta Blues",
      "origin": "Mississippi Delta",
      "era": "1920s–Present",
      "description": "Solo-centered blues built from repeating vocal and guitar phrases, alternating bass movement, call-and-response, and flexible timing.",
      "characteristicInstruments": [
        "guitar",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "12/8"
      ],
      "tempoRange": [
        55,
        130
      ],
      "keySubstyles": [
        "Country Blues",
        "Delta Blues",
        "Acoustic Blues"
      ],
      "coreConcepts": [
        "12-bar form",
        "call and response",
        "alternating bass",
        "turnaround",
        "bent notes"
      ],
      "rhythmicGrammar": [
        "loose triplet feel",
        "bass pulse against syncopated treble responses",
        "phrase-ending turnaround"
      ],
      "danceTags": [
        "listening",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Alternating thumb acoustic bass with syncopated slide vocal responses",
      "grooveMechanics": {
        "swingPercentage": 62,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "E",
          "B7",
          "E",
          "B7"
        ],
        "verse": [
          "E7",
          "A7",
          "E7",
          "B7",
          "A7",
          "E7",
          "B7"
        ],
        "chorus": [
          "A7",
          "A7",
          "E7",
          "E7",
          "B7",
          "A7",
          "E7",
          "B7"
        ],
        "coda": [
          "E7",
          "B7",
          "E7",
          "E7"
        ]
      }
    },
    {
      "id": "blues-chicago",
      "worldId": "blues",
      "name": "Chicago Blues",
      "origin": "Chicago, Illinois",
      "era": "1940s–Present",
      "description": "Amplified ensemble blues with a firm backbeat, electric guitar fills, harmonica or piano responses, and repeated 12-bar cycles.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "piano",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "12/8"
      ],
      "tempoRange": [
        65,
        145
      ],
      "keySubstyles": [
        "Electric Blues",
        "West Side Blues",
        "South Side Blues"
      ],
      "coreConcepts": [
        "shuffle",
        "backbeat",
        "12-bar blues",
        "ensemble call-and-response",
        "turnaround"
      ],
      "rhythmicGrammar": [
        "triplet shuffle",
        "snare on 2 and 4",
        "short fills around vocal phrases"
      ],
      "danceTags": [
        "social-partner",
        "blues-fusion-compatible",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Chicago triplet shuffle ride with heavy 2 & 4 snare backbeat and turnaround",
      "grooveMechanics": {
        "swingPercentage": 66,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "E7",
          "A7",
          "E7",
          "B7"
        ],
        "verse": [
          "E7",
          "E7",
          "E7",
          "E7",
          "A7",
          "A7",
          "E7",
          "E7",
          "B7",
          "A7",
          "E7",
          "B7"
        ],
        "chorus": [
          "A7",
          "A7",
          "E7",
          "E7",
          "B7",
          "A7",
          "E7",
          "B7"
        ],
        "solo": [
          "E7",
          "A7",
          "E7",
          "B7"
        ],
        "coda": [
          "E7",
          "B7",
          "E7",
          "E7"
        ]
      }
    },
    {
      "id": "blues-texas",
      "worldId": "blues",
      "name": "Texas Blues",
      "origin": "Texas, USA",
      "era": "1940s–Present",
      "description": "Guitar-forward blues combining shuffle and straight feels, strong lead/rhythm interplay, and spacious but expressive phrasing.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "voice",
        "keys"
      ],
      "preferredMeters": [
        "4/4",
        "12/8"
      ],
      "tempoRange": [
        70,
        155
      ],
      "keySubstyles": [
        "Texas Shuffle",
        "Slow Blues",
        "Blues Rock Crossover"
      ],
      "coreConcepts": [
        "shuffle",
        "single-note riffs",
        "double-stops",
        "turnarounds",
        "lead fills"
      ],
      "rhythmicGrammar": [
        "triplet subdivision or swung eighths",
        "bass and guitar locking on repeated figures",
        "fills answering vocal lines"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Driving Texas guitar shuffle with muted rake and boogie root-fifth bass",
      "grooveMechanics": {
        "swingPercentage": 64,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "A7",
          "D7",
          "A7",
          "E7"
        ],
        "verse": [
          "A7",
          "A7",
          "A7",
          "A7",
          "D7",
          "D7",
          "A7",
          "A7",
          "E7",
          "D7",
          "A7",
          "E7"
        ],
        "chorus": [
          "D7",
          "D7",
          "A7",
          "A7",
          "E7",
          "D7",
          "A7",
          "E7"
        ],
        "solo": [
          "A7",
          "D7",
          "A7",
          "E7"
        ],
        "coda": [
          "A7",
          "E7",
          "A7",
          "A7"
        ]
      }
    },
    {
      "id": "blues-soul",
      "worldId": "blues",
      "name": "Slow Blues & Soul Blues",
      "origin": "Southern US / Urban blues circuits",
      "era": "1950s–Present",
      "description": "Slow, spacious blues where phrasing, dynamics, sustained harmony, and vocal-guitar dialogue carry the groove.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "piano",
        "voice",
        "strings"
      ],
      "preferredMeters": [
        "4/4",
        "12/8"
      ],
      "tempoRange": [
        40,
        85
      ],
      "keySubstyles": [
        "Slow Blues",
        "Soul Blues",
        "Minor Blues"
      ],
      "coreConcepts": [
        "space",
        "dominant harmony",
        "long fills",
        "dynamic phrasing",
        "turnaround"
      ],
      "rhythmicGrammar": [
        "laid-back backbeat",
        "long note values",
        "pickup and answer phrases"
      ],
      "danceTags": [
        "blues-fusion-compatible",
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Slow 12/8 blues ballad with Hammond B3 swell and weeping guitar bends",
      "grooveMechanics": {
        "swingPercentage": 66,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "C7",
          "F7",
          "C7",
          "G7"
        ],
        "verse": [
          "C7",
          "C7",
          "C7",
          "C7",
          "F7",
          "F7",
          "C7",
          "C7",
          "G7",
          "F7",
          "C7",
          "G7"
        ],
        "chorus": [
          "F7",
          "F7",
          "C7",
          "C7",
          "G7",
          "F7",
          "C7",
          "G7"
        ],
        "solo": [
          "C7",
          "F7",
          "C7",
          "G7"
        ],
        "coda": [
          "C7",
          "G7",
          "C7",
          "C7"
        ]
      }
    }
  ],
  "substyles": [
    "Delta Blues",
    "Chicago Blues",
    "Texas Blues",
    "Slow Blues",
    "Soul Blues",
    "Minor Blues",
    "Boogie-Woogie"
  ],
  "artists": [
    "Robert Johnson",
    "Muddy Waters",
    "Howlin’ Wolf",
    "B.B. King",
    "Albert King",
    "Stevie Ray Vaughan"
  ],
  "concepts": [
    "12-bar form",
    "shuffle feel",
    "call and response",
    "turnaround",
    "blues scale",
    "dominant harmony",
    "space and phrasing"
  ],
  "roles": {
    "bass": [
      "root–fifth boogie",
      "walking blues bass",
      "riff lock"
    ],
    "guitar": [
      "fills",
      "turnarounds",
      "bends",
      "double-stops"
    ],
    "drums": [
      "shuffle",
      "backbeat",
      "fills"
    ],
    "piano": [
      "boogie",
      "blues comping",
      "turnaround figures"
    ]
  },
  "patterns": [
    {
      "id": "blues-shuffle",
      "worldId": "blues",
      "traditionId": "blues-chicago",
      "name": "Chicago Shuffle",
      "family": "Shuffle",
      "category": "fill",
      "description": "A repeating triplet-derived blues pulse with a strong backbeat and room for guitar or vocal answers.",
      "tags": [
        "blues",
        "shuffle",
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
        "drums",
        "percussion",
        "pulse"
      ],
      "instruments": [
        "drums",
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        11
      ],
      "accentProfile": [
        1,
        0.65,
        0.9,
        0.65,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.6,
        0.85,
        0.6,
        0.9,
        0.65
      ],
      "density": "medium",
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
          "id": "blues-shuffle-fill",
          "parentPatternId": "blues-shuffle",
          "name": "Shuffle Fill",
          "variationType": "fill",
          "probability": 0.45,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.6,
            0.85,
            0.7,
            0.9,
            0.65,
            1
          ],
          "description": "A short turnaround-oriented fill that leaves the vocal phrase intact."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-boogie-bass",
      "worldId": "blues",
      "traditionId": "blues-texas",
      "name": "Boogie Root–Fifth Bass",
      "family": "Boogie Bass",
      "category": "ostinato",
      "description": "Alternating root, fifth and sixth movement that establishes the blues cycle without overcrowding the upper voices.",
      "tags": [
        "blues",
        "boogie",
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
        "bass",
        "pulse"
      ],
      "instruments": [
        "bass",
        "piano"
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
        0.55,
        0.85,
        0.55,
        0.95,
        0.6,
        0.9,
        0.6
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.8,
        0.55,
        0.9,
        0.55,
        0.85,
        0.55
      ],
      "density": "medium",
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
          "id": "blues-boogie-walkup",
          "parentPatternId": "blues-boogie-bass",
          "name": "Sixth Walk-Up",
          "variationType": "development",
          "probability": 0.35,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.5,
            0.8,
            0.5,
            0.9,
            0.55,
            0.85,
            0.65,
            0.8,
            1
          ],
          "description": "A rising sixth/chromatic approach used to push into the next chord or phrase."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 0.7,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "blues-interaction-1",
          "worldId": "blues",
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
      "id": "blues-turnaround",
      "worldId": "blues",
      "traditionId": "blues-delta",
      "name": "12-Bar Turnaround",
      "family": "Turnaround",
      "category": "cadence",
      "description": "A compact cadence in the final bars that clearly announces the return to the top of the blues cycle.",
      "tags": [
        "blues",
        "12-bar",
        "turnaround",
        "cadence"
      ],
      "scopes": [
        "phrase",
        "region",
        "song"
      ],
      "roles": [
        "harmony",
        "rhythm-guitar",
        "melody"
      ],
      "instruments": [
        "electric-guitar",
        "guitar",
        "piano"
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
        14,
        15
      ],
      "accentProfile": [
        0.8,
        0.6,
        0.75,
        0.9,
        0.7,
        0.85,
        0.7,
        1
      ],
      "velocityProfile": [
        0.75,
        0.55,
        0.7,
        0.9,
        0.65,
        0.8,
        0.65,
        1
      ],
      "density": "medium",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "turnaround",
        "ending"
      ],
      "variants": [
        
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 0.7,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-slow-12-8",
      "worldId": "blues",
      "traditionId": "blues-chicago",
      "name": "Slow 12/8 Groove",
      "family": "Drums",
      "category": "break",
      "description": "Slow heavy triplet feel with snare on beats 2 and 4.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "instruments": [
        "drums"
      ],
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        6,
        9
      ],
      "accentProfile": [
        1,
        0.7,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
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
      "difficulty": 1,
      "weight": 1,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums"
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
      "id": "blues-texas-shuffle",
      "worldId": "blues",
      "traditionId": "blues-texas",
      "name": "Texas Shuffle",
      "family": "Guitar",
      "category": "groove",
      "description": "Driving guitar shuffle with muted rake and snappy upstrokes.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar",
        "electric-guitar"
      ],
      "instruments": [
        "guitar",
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        6,
        8,
        9,
        11
      ],
      "accentProfile": [
        1,
        0.65,
        0.85,
        0.6,
        0.95,
        0.65,
        0.85,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.6,
        0.8,
        0.55,
        0.9,
        0.6,
        0.8,
        0.65
      ],
      "density": "dynamic",
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
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "blues-interaction-2",
          "worldId": "blues",
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
      "id": "blues-soul-groove",
      "worldId": "blues",
      "traditionId": "blues-soul",
      "name": "Soul Blues Beat",
      "family": "Drums",
      "category": "groove",
      "description": "Straight 8ths Memphis style beat with deep snare punch.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "instruments": [
        "drums"
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
        0.6,
        0.95,
        0.65
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.9,
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
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "blues-interaction-3",
          "worldId": "blues",
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
      "id": "blues-bass-walk",
      "worldId": "blues",
      "traditionId": "blues-chicago",
      "name": "Walking Blues Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Quarter note walking bass leading through the changes.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass"
      ],
      "instruments": [
        "bass"
      ],
      "meter": "4/4",
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
          "id": "blues-bass-walk-v-01",
          "parentPatternId": "blues-bass-walk",
          "name": "Walking Blues Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            2,
            3
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.62,
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
      "difficulty": 1,
      "weight": 1,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass"
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
      "id": "blues-piano-triplets",
      "worldId": "blues",
      "traditionId": "blues-chicago",
      "name": "Piano Triplets",
      "family": "Piano",
      "category": "groove",
      "description": "Rolling right hand blues triplets over steady left-hand pulse.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "piano",
        "keys"
      ],
      "instruments": [
        "piano",
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
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
        11
      ],
      "accentProfile": [
        1,
        0.6,
        0.7,
        0.9,
        0.6,
        0.7,
        0.95,
        0.6,
        0.7,
        0.85,
        0.6,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.65,
        0.85,
        0.55,
        0.65,
        0.9,
        0.55,
        0.65,
        0.8,
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
      "difficulty": 4,
      "weight": 1,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "piano"
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
      "id": "blues-horn-stabs",
      "worldId": "blues",
      "traditionId": "blues-soul",
      "name": "Horn Stabs",
      "family": "Brass",
      "category": "groove",
      "description": "Punchy brass punctuation answering the vocal line.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "brass",
        "trumpet",
        "sax"
      ],
      "instruments": [
        "brass",
        "trumpet",
        "sax"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        2,
        6
      ],
      "accentProfile": [
        0.9,
        1
      ],
      "velocityProfile": [
        0.85,
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
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "brass"
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
      "id": "blues-delta-slide",
      "worldId": "blues",
      "traditionId": "blues-delta",
      "name": "Slide Guitar Lick",
      "family": "Guitar",
      "category": "groove",
      "description": "Acoustic slide guitar response with vocal glissando.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar",
        "electric-guitar"
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
        4,
        8,
        10,
        12
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.75,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
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
        "chorus"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
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
      "id": "blues-rhumba",
      "worldId": "blues",
      "traditionId": "blues-chicago",
      "name": "Blues Rhumba",
      "family": "Drums",
      "category": "groove",
      "description": "Cross-stick and tom rhumba beat popularized in Chicago blues.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "instruments": [
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
        0.9,
        0.95,
        0.65,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.9,
        0.6,
        0.8
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
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums"
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
      "id": "blues-organ-swell",
      "worldId": "blues",
      "traditionId": "blues-soul",
      "name": "Organ Swell",
      "family": "Keys",
      "category": "groove",
      "description": "Hammond B3 chord swell rising into the backbeat.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys",
        "synth"
      ],
      "instruments": [
        "keys",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 4,
      "onsetGrid": [
        0,
        2
      ],
      "accentProfile": [
        0.75,
        0.95
      ],
      "velocityProfile": [
        0.7,
        0.9
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
          "id": "blues-organ-swell-v-01-safe",
          "parentPatternId": "blues-organ-swell",
          "name": "Organ Swell — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.7,
            1
          ],
          "velocityProfile": [
            0.73,
            0.86
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "blues-organ-swell-v-02-safe",
          "parentPatternId": "blues-organ-swell",
          "name": "Organ Swell — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.7,
            1
          ],
          "velocityProfile": [
            0.73,
            0.86
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Blues genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,
      "roleDependencies": [
        "keys"
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
      "id": "blues-phrase-13",
      "worldId": "blues",
      "traditionId": "blues-delta",
      "name": "12-Bar Phrase",
      "family": "12-Bar",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around turnaround and the 12-bar vocabulary of Blues.",
      "tags": [
        "blues",
        "12-bar",
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
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        3,
        6,
        8,
        9,
        11
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
      "swingPercentage": 66,
      "articulations": [
        "breath",
        "phrase-end"
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
        "dominant 7",
        "12-bar turnaround",
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
      "provenance": "Blues genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues",
        "12-bar"
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
      "id": "blues-call-14",
      "worldId": "blues",
      "traditionId": "blues-delta",
      "name": "Rake Response",
      "family": "Rake",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around fills and the rake vocabulary of Blues.",
      "tags": [
        "blues",
        "rake",
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
        3,
        4,
        7,
        9,
        10,
        12
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
      "swingPercentage": 66,
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
        "dominant 7",
        "12-bar turnaround",
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
      "provenance": "Blues genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues",
        "rake"
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
      "id": "blues-anchor-15",
      "worldId": "blues",
      "traditionId": "blues-delta",
      "name": "Call & Response Anchor",
      "family": "Call & Response",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around 12-bar and the call & response vocabulary of Blues.",
      "tags": [
        "blues",
        "call-response",
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
        4,
        5,
        8,
        10,
        11,
        13
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
      "swingPercentage": 66,
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
        "dominant 7",
        "12-bar turnaround",
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
      "provenance": "Blues genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues",
        "call-response"
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
      "id": "blues-comp-16",
      "worldId": "blues",
      "traditionId": "blues-delta",
      "name": "Turnaround Comping",
      "family": "Turnaround",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around shuffle and the turnaround vocabulary of Blues.",
      "tags": [
        "blues",
        "turnaround",
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
        "guitar",
        "piano"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        6,
        7,
        10,
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
      "swingPercentage": 66,
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
        "dominant 7",
        "12-bar turnaround",
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
        
        ],
      "provenance": "Blues genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "blues",
        "turnaround"
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
      "id": "blues-voice-phrasing",
      "worldId": "blues",
      "traditionId": "blues-delta",
      "name": "Blues Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "12-bar vocal phrase placement with call-and-response space for guitar or piano answers.",
      "tags": [
        "blues",
        "voice",
        "vocal-phrasing",
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
        "voice",
        "lead"
      ],
      "compatibleInstruments": ["voice"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        8,
        11,
        14
      ],
      "accentProfile": [
        0.94,
        0.62,
        0.94,
        0.62,
        0.94,
        0.62
      ],
      "velocityProfile": [
        0.9,
        0.58,
        0.9,
        0.58,
        0.9,
        0.58
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": 0,
      "swingPercentage": 58,
      "articulations": [
        "breath",
        "phrase-end"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge",
        "intro"
      ],
      "harmonicContext": [
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
        {
          "id": "blues-voice-phrasing-v-voice-alt",
          "parentPatternId": "blues-voice-phrasing",
          "name": "Blues Vocal Phrasing — alternate phrasing",
          "variationType": "phraseStart",
          "probability": 0.2,
          "description": "Alternate vocal entry placement for a second pass through the phrase.",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.92,
            0.62,
            0.92,
            0.62,
            0.92,
            0.62
          ],
          "velocityProfile": [
            0.88,
            0.58,
            0.88,
            0.58,
            0.88,
            0.58
          ],
          "microtimingOffset": [
            2,
            -4,
            2,
            -4,
            2,
            -4
          ]
        },
        ],
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Blues; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "blues",
        "voice"
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
      "id": "blues-texas-stinging-lead",
      "worldId": "blues",
      "traditionId": "blues-texas",
      "name": "Texas Stinging Double-Stop Lead",
      "family": "Guitar",
      "category": "phrasePattern",
      "description": "Fierce, stinging electric guitar lead with Albert Collins/SRV aggressive double-stop bends and rapid descending pentatonic triplets.",
      "tags": ["texas-blues", "lead", "guitar", "double-stop", "srv"],
      "scopes": ["phrase", "region", "track"],
      "roles": ["lead", "melody"],
      "instruments": ["guitar"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 5, 8, 10, 12, 16, 19, 21, 24, 28],
      "accentProfile": [1.0, 0.75, 0.85, 1.0, 0.8, 0.9, 1.0, 0.75, 0.85, 0.95, 0.8],
      "velocityProfile": [0.95, 0.7, 0.8, 0.95, 0.75, 0.85, 0.95, 0.7, 0.8, 0.9, 0.75],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "solo", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Texas Blues; generalized from documented musical conventions.",
      "authenticityTags": ["texas-blues", "guitar"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "techniques": [
    "shuffle articulation",
    "string bends",
    "vibrato",
    "double-stops",
    "slide phrasing",
    "call-and-response timing"
  ],
  "forms": [
    "12-bar blues",
    "8-bar blues",
    "16-bar blues",
    "slow blues",
    "head → solos → turnaround",
    "vamp and turnaround"
  ],
  "relationships": [
    "voice ↔ guitar call and response",
    "bass ↔ kick foundation",
    "snare ↔ backbeat",
    "lead ↔ rhythm fills"
  ],
  "transformations": [
    "trans-density-sparse",
    "trans-density-dense",
    "trans-swing",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "repeated blues cycles create space for variation",
    "fills answer phrases rather than continuously occupying the vocal space",
    "turnarounds announce the return to the form",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "bent-note fills",
      "double-stop responses",
      "shuffle comping"
    ],
    "bass": [
      "boogie root–fifth motion",
      "walking approaches"
    ],
    "drums": [
      "shuffle ride",
      "backbeat with phrase-ending fills"
    ],
    "piano": [
      "boogie ostinatos",
      "dominant chord stabs"
    ]
  },
  "combinations": [
    "Blues + Jazz",
    "Blues + Soul",
    "Blues + Rock",
    "Blues + Country"
  ],
  "danceTags": [
    "social-partner",
    "blues-fusion-compatible",
    "wcs-compatible",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Chicago triplet shuffle ride with heavy 2 & 4 snare backbeat and turnaround",
  "grooveMechanics": {
    "swingPercentage": 66,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Blues ↔ Rock",
    "Blues ↔ Jazz",
    "Blues ↔ Country",
    "Blues ↔ Blues Fusion"
  ]
};
