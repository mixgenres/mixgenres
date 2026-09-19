import { GenreWorld } from '../../types';

export const METAL_WORLD: GenreWorld = {
  "id": "metal",
  "name": "Metal",
  "family": "Heavy / Amplified",
  "color": "#8c7b83",
  "level": "world",
  "description": "The sonic power of Metal: Iron Maiden galloping rhythm riffs, thrash down-picking, double-kick drum streams, Meshuggah polymetric djent chugs, and crushing half-time breakdowns.",
  "traditions": [
    {
      "id": "metal-heavy-thrash",
      "worldId": "metal",
      "name": "Heavy & Thrash Metal (Iron Maiden, Metallica, Slayer)",
      "origin": "UK & Bay Area, California",
      "era": "1970–Present",
      "description": "High-speed palm-muted galloping guitar riffs, double-bass drum onslaughts, twin guitar harmonies, and aggressive dynamic shifts.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        220
      ],
      "keySubstyles": [
        "NWOBHM (Iron Maiden)",
        "Bay Area Thrash (Metallica, Megadeth)",
        "Speed Metal",
        "Power Metal"
      ],
      "coreConcepts": [
        "the gallop (16th-16th-8th)",
        "down-picking precision",
        "twin lead harmonies in 3rds/6ths",
        "double bass kick drum rolls"
      ],
      "rhythmicGrammar": [
        "gallop: [0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14]",
        "fast thrash 2-beat d-beat or skank beat"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "High-speed palm-muted galloping guitar chug locked with double-kick drum and snare crack",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "E5",
          "G5",
          "A5",
          "Bb5"
        ],
        "verse": [
          "E5",
          "E5",
          "G5",
          "A5"
        ],
        "chorus": [
          "C5",
          "D5",
          "E5",
          "E5"
        ],
        "solo": [
          "E5",
          "D5",
          "C5",
          "B5"
        ],
        "coda": [
          "E5",
          "E5",
          "E5",
          "E5"
        ]
      }
    },
    {
      "id": "metal-prog-djent",
      "worldId": "metal",
      "name": "Progressive Metal & Djent (Meshuggah, Dream Theater, Tool)",
      "origin": "Sweden & Global",
      "era": "1990–Present",
      "description": "Extreme metric complexity, extended-range 7/8-string guitars, low-tuned palm-muted syncopated chugs against a steady 4/4 cymbal pulse.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "synth"
      ],
      "preferredMeters": [
        "4/4",
        "7/8",
        "5/8",
        "9/8",
        "11/8"
      ],
      "tempoRange": [
        90,
        150
      ],
      "keySubstyles": [
        "Djent (Meshuggah, Periphery)",
        "Progressive Metal (Dream Theater)",
        "Tool Polymetric Metal",
        "Technical Death Metal"
      ],
      "coreConcepts": [
        "djent palm-mute timbre",
        "polymeter (odd-time guitar over 4/4 drums)",
        "half-time crushing breakdown",
        "herta drum fill"
      ],
      "rhythmicGrammar": [
        "syncopated accents grouped in 3s and 5s against a 4/4 crash cymbal anchor"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Polymetric low-tuned 7/8 string palm-mute syncopation over steady 4/4 cymbal crash",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "F#5",
          "G5",
          "F#5",
          "C5"
        ],
        "verse": [
          "F#5",
          "F#5",
          "G5",
          "F#5"
        ],
        "chorus": [
          "D5",
          "A#5",
          "F#5",
          "G5"
        ],
        "solo": [
          "B5",
          "G5",
          "F#5",
          "F5"
        ],
        "coda": [
          "F#5",
          "F#5",
          "F#5",
          "F#5"
        ]
      }
    }
  ],
  "substyles": [
    "Heavy Metal",
    "Thrash Metal",
    "Progressive Metal",
    "Djent",
    "Death Metal",
    "Doom Metal",
    "Power Metal",
    "Metalcore"
  ],
  "artists": [
    "Iron Maiden",
    "Metallica",
    "Black Sabbath",
    "Meshuggah",
    "Dream Theater",
    "Tool",
    "Judas Priest",
    "Opeth",
    "Gojira",
    "Periphery"
  ],
  "concepts": [
    "the gallop",
    "palm-muting",
    "down-picking precision",
    "double bass kick",
    "djent tone",
    "polymeter",
    "breakdown",
    "twin harmonies"
  ],
  "roles": {
    "rhythmGuitar": [
      "tight palm-muted chugs",
      "gallop figures",
      "polymetric djent syncopations"
    ],
    "leadGuitar": [
      "twin lead harmonized melodies",
      "sweep arpeggios",
      "screaming pinch harmonics"
    ],
    "bass": [
      "distorted pick attack doubling guitars",
      "independent low end foundation"
    ],
    "drums": [
      "double bass drum patterns",
      "blast beats",
      "crushing half-time breakdown snares"
    ]
  },
  "patterns": [
    {
      "id": "metal-gallop-riff",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "The Gallop Rhythm (Iron Maiden / Steve Harris)",
      "family": "Metal Gallop",
      "category": "ostinato",
      "description": "Classic 16th-16th-8th galloping chug on palm-muted low E string synchronized between rhythm guitar, bass, and double-kick drum.",
      "tags": [
        "metal",
        "gallop",
        "thrash",
        "iron-maiden",
        "palm-mute"
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
        "bass",
        "drums"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        2,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        13,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        1,
        0.7,
        0.9,
        1,
        0.7,
        0.9,
        1,
        0.7,
        0.9
      ],
      "velocityProfile": [
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85
      ],
      "articulations": [
        "palm-mute",
        "down-pick"
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
          "id": "metal-double-kick-blast",
          "parentPatternId": "metal-gallop-riff",
          "name": "Continuous 16th Double-Kick Stream",
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
            0.8,
            0.9,
            0.8,
            1,
            0.8,
            0.9,
            0.8,
            1,
            0.8,
            0.9,
            0.8,
            1,
            0.8,
            0.9,
            0.8
          ],
          "description": "Wall of 16th note double bass drum hits powering high-intensity sections."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "bass",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "metal-interaction-1",
          "worldId": "metal",
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
      "id": "metal-djent-chug",
      "worldId": "metal",
      "traditionId": "metal-prog-djent",
      "name": "Djent Polymetric Low Chug",
      "family": "Djent Rhythms",
      "category": "ostinato",
      "description": "Syncopated, unyielding low-tuned palm-muted chugs grouped in asymmetrical 3+3+2 or 5+5+6 patterns.",
      "tags": [
        "djent",
        "prog-metal",
        "meshuggah",
        "polymeter",
        "chug"
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
        "bass"
      ],
      "instruments": [
        "electric-guitar",
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
        11,
        14
      ],
      "accentProfile": [
        1,
        0.9,
        1,
        0.9,
        0.85,
        1
      ],
      "velocityProfile": [
        1,
        0.9,
        1,
        0.9,
        0.85,
        1
      ],
      "articulations": [
        "tight-djent-mute",
        "percussive-strike"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "breakdown",
        "solo"
      ],
      "variants": [
        {
          "id": "metal-half-time-breakdown",
          "parentPatternId": "metal-djent-chug",
          "name": "Crushing Half-Time Breakdown",
          "variationType": "breakdown",
          "probability": 0.6,
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            1,
            0.9
          ],
          "description": "Tempo feel halved with devastating snare drop on beat 3 and sub-bass drops."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "bass",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "metal-interaction-2",
          "worldId": "metal",
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
      "id": "metal-blast-beat",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Blast Beat",
      "family": "Drums",
      "category": "fill",
      "description": "Extremely fast alternating kick and snare with quarter-note accents.",
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
        0.85,
        0.95,
        0.85,
        1,
        0.85,
        0.95,
        0.85,
        1,
        0.85,
        0.95,
        0.85,
        1,
        0.85,
        0.95,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.8,
        0.95,
        0.8,
        0.9,
        0.8,
        0.95,
        0.8,
        0.9,
        0.8,
        0.95,
        0.8,
        0.9,
        0.8
      ],
      "density": "dense",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "metal-blast-beat-variant-double-kick-16ths",
          "parentPatternId": "metal-blast-beat",
          "name": "Double Kick 16ths",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Continuous 16th note double bass stream with pulse accents. Retained as a variation rather than a separate pattern entry.",
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
            0.7,
            0.85,
            0.7,
            0.95,
            0.7,
            0.85,
            0.7,
            1,
            0.7,
            0.85,
            0.7,
            0.95,
            0.7,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.65,
            0.9,
            0.65,
            0.8,
            0.65,
            0.95,
            0.65,
            0.8,
            0.65,
            0.9,
            0.65,
            0.8,
            0.65
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "metal-blast-beat-variant-tremolo-picking",
          "parentPatternId": "metal-blast-beat",
          "name": "Tremolo Picking",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Fast continuous picking with dynamic shaping across the bar. Retained as a variation rather than a separate pattern entry.",
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
            0.6,
            0.7,
            0.6,
            0.9,
            0.6,
            0.7,
            0.6,
            0.95,
            0.6,
            0.7,
            0.6,
            0.9,
            0.6,
            0.7,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.65,
            0.55,
            0.85,
            0.55,
            0.65,
            0.55,
            0.9,
            0.55,
            0.65,
            0.55,
            0.85,
            0.55,
            0.65,
            0.6
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "metal-blast-beat-variant-sweep-picking-solo",
          "parentPatternId": "metal-blast-beat",
          "name": "Sweep Picking Solo",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Fluid high-speed arpeggiated lead guitar run. Retained as a variation rather than a separate pattern entry.",
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
            0.65,
            0.7,
            0.75,
            0.8,
            0.85,
            0.9,
            0.95,
            1,
            0.9,
            0.85,
            0.8,
            0.75,
            0.7,
            0.65,
            0.6
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.65,
            0.7,
            0.75,
            0.8,
            0.85,
            0.9,
            0.95,
            0.85,
            0.8,
            0.75,
            0.7,
            0.65,
            0.6,
            0.55
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 5,
      "weight": 1,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "id": "metal-breakdown",
      "worldId": "metal",
      "traditionId": "metal-prog-djent",
      "name": "Breakdown Chug",
      "family": "Guitar",
      "category": "break",
      "description": "Crushing, heavy, syncopated palm-muted chords.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar",
        "bass"
      ],
      "instruments": [
        "electric-guitar",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        10,
        14
      ],
      "accentProfile": [
        1,
        0.9,
        0.8,
        0.95,
        1,
        0.85,
        0.95
      ],
      "velocityProfile": [
        1,
        0.85,
        0.75,
        0.9,
        0.95,
        0.8,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "id": "metal-djent-sync",
      "worldId": "metal",
      "traditionId": "metal-prog-djent",
      "name": "Djent Syncopation",
      "family": "Guitar",
      "category": "cadence",
      "description": "Complex syncopated low-register chugging.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        8,
        11,
        13
      ],
      "accentProfile": [
        1,
        0.9,
        0.8,
        0.95,
        0.85,
        1
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.75,
        0.9,
        0.8,
        0.95
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "electric-guitar"
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
      "id": "metal-clean-arp",
      "worldId": "metal",
      "traditionId": "metal-prog-djent",
      "name": "Clean Arpeggio",
      "family": "Guitar",
      "category": "groove",
      "description": "Atmospheric clean arpeggiated intro with dynamic swell.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar",
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
        0.6,
        0.75,
        0.65,
        0.9,
        0.6,
        0.75,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.7,
        0.6,
        0.85,
        0.55,
        0.7,
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
      "difficulty": 3,
      "weight": 1,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
          "id": "metal-interaction-3",
          "worldId": "metal",
          "sourceRole": "lead",
          "targetRole": "voice",
          "relationship": "answer",
          "description": "Lead instrument answers a vocal phrase in the open space after the line.",
          "timingOffsetSteps": 2,
          "probability": 0.58
        }
      ],
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "metal-bass-gallop",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Bass Gallop",
      "family": "Bass",
      "category": "groove",
      "description": "Iron Maiden style triplet/gallop feel driving rhythm.",
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
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.8,
        0.95,
        0.65,
        0.8,
        0.95,
        0.65,
        0.8,
        0.95,
        0.65,
        0.8
      ],
      "density": "dense",
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
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
          "id": "metal-interaction-4",
          "worldId": "metal",
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
      "id": "metal-prog-odd-meter",
      "worldId": "metal",
      "traditionId": "metal-prog-djent",
      "name": "5/8 Riff",
      "family": "Guitar",
      "category": "groove",
      "description": "Odd meter progressive riff in asymmetric 3+2 grouping.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "5/8",
      "cycleLength": 1,
      "subdivisions": 10,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.75,
        0.85,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.8,
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
      "difficulty": 2,
      "weight": 1,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "electric-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "metal-interaction-5",
          "worldId": "metal",
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
      "id": "metal-groove-metal",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Groove Metal Riff",
      "family": "Guitar",
      "category": "groove",
      "description": "Mid-tempo swinging heavy riff with biting accents.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "instruments": [
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
        0.75,
        0.9,
        0.7,
        0.95,
        0.7,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.65,
        0.9,
        0.65,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Metal genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "electric-guitar"
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
      "id": "metal-phrase-10",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Breakdown Phrase",
      "family": "Breakdown",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around gallop and the breakdown vocabulary of Metal.",
      "tags": [
        "metal",
        "breakdown",
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
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        6,
        10,
        12,
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
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Metal genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal",
        "breakdown"
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
      "id": "metal-call-11",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Gallop Response",
      "family": "Gallop",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around breakdown and the gallop vocabulary of Metal.",
      "tags": [
        "metal",
        "gallop",
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
        5,
        7,
        11,
        13,
        15
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62,
        0.95,
        0.62
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.9,
        0.62
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Metal genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal",
        "gallop"
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
      "id": "metal-anchor-12",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Tremolo Anchor",
      "family": "Tremolo",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around tremolo in Metal.",
      "tags": [
        "metal",
        "tremolo",
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
        0,
        2,
        6,
        8,
        12,
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
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Metal genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal",
        "tremolo"
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
      "id": "metal-comp-13",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Blast Comping",
      "family": "Blast",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around blast beat and the blast vocabulary of Metal.",
      "tags": [
        "metal",
        "blast",
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
        4,
        8,
        10,
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
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
        
        ],
      "provenance": "Metal genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal",
        "blast"
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
      "id": "metal-intro-14",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Lead Intro",
      "family": "Lead",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around odd meter riffing and the lead vocabulary of Metal.",
      "tags": [
        "metal",
        "lead",
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
        0,
        1,
        4,
        5,
        8,
        9,
        12,
        13
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
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
          "id": "metal-intro-14-v-03",
          "parentPatternId": "metal-intro-14",
          "name": "Lead Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            4,
            5,
            8,
            9,
            12,
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
            0.95,
            0.74,
            0.9,
            0.63,
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
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "Metal genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal",
        "lead"
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
      "id": "metal-verse-15",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Breakdown Verse Variation",
      "family": "Breakdown",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around gallop and the breakdown vocabulary of Metal.",
      "tags": [
        "metal",
        "breakdown",
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
        6,
        9,
        10,
        13,
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
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Metal genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal",
        "breakdown"
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
      "id": "metal-chorus-16",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Gallop Chorus Lift",
      "family": "Gallop",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around breakdown and the gallop vocabulary of Metal.",
      "tags": [
        "metal",
        "gallop",
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        3,
        6,
        7,
        10,
        11,
        14,
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
      "syncopationRating": 1,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
        "section-dependent",
        "tonal or modal context"
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
          "id": "metal-chorus-16-v-03",
          "parentPatternId": "metal-chorus-16",
          "name": "Gallop Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            3,
            6,
            7,
            10,
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
      "provenance": "Metal genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "metal",
        "gallop"
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
      "id": "metal-voice-phrasing",
      "worldId": "metal",
      "traditionId": "metal-heavy-thrash",
      "name": "Metal Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Screamed/clean vocal onset template with accented entrances and space around breakdown figures.",
      "tags": [
        "metal",
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
      "swingPercentage": 50,
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
        "bridge"
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
          "id": "metal-voice-phrasing-v-voice-alt",
          "parentPatternId": "metal-voice-phrasing",
          "name": "Metal Vocal Phrasing — alternate phrasing",
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
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Metal; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "metal",
        "voice"
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
    "tight palm muting",
    "aggressive down-picking",
    "pinch harmonics",
    "double-kick drum precision",
    "polymetric counting"
  ],
  "forms": [
    "intro riff",
    "verse chug",
    "chorus anthem",
    "bridge / breakdown",
    "dual guitar solo",
    "coda"
  ],
  "relationships": [
    "rhythm guitar ↔ kick drum (exact unison transient lock)",
    "lead guitars (harmonized in thirds and fifths)",
    "snare ↔ breakdown (half-time dramatic emphasis)"
  ],
  "transformations": [
    "trans-density-dense",
    "trans-phrase-cadence",
    "trans-density-sparse",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "seismic dynamic shifts between relentless fast speed and crushing slow breakdowns",
    "razor-sharp unison ensemble riffs and sudden stops",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "high-gain palm-muted galloping riffs",
      "dissonant octave chord accents"
    ],
    "bass": [
      "overdriven clanky pick attack tracking guitar chugs"
    ],
    "drums": [
      "blistering double-kick rolls with thunderous china cymbal accents"
    ],
    "voice": [
      "screamed/clean vocal attack and breakdown space"
    ]
  },
  "combinations": [
    "Metal + Classical / Symphonic",
    "Metal + Jazz / Prog",
    "Metal + Tango",
    "Metal + Flamenco"
  ],
  "danceTags": [
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "High-speed palm-muted galloping guitar chug locked with double-kick drum and crushing breakdown",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed"
  },
  "crossLinks": [
    "Metal ↔ Rock",
    "Metal ↔ Classical / Symphonic",
    "Metal ↔ Math Rock"
  ]
};
