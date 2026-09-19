import { GenreWorld } from '../../types';

export const HIP_HOP_WORLD: GenreWorld = {
  "id": "hip-hop",
  "name": "Global Urban Beat",
  "family": "Urban / Beat-driven Continuum",
  "color": "#8c8c8c",
  "level": "world",
  "description": "Unified global urban beat continuum spanning classic 90s Boom-Bap vinyl breaks, Atlanta Trap 808 slides and rolling hats, and unquantized Lo-Fi / Jazz Rap MPC pockets.",
  "traditions": [
    {
      "id": "hiphop-boombap",
      "worldId": "hip-hop",
      "name": "Boom Bap & Golden Era",
      "origin": "US East Coast (New York)",
      "era": "1980s–1990s",
      "description": "Sample-based production rooted in classic funk drum breaks, swung hi-hats, acoustic/sampled upright basslines, and punchy backbeat snares.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "keys"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        84,
        98
      ],
      "keySubstyles": [
        "East Coast Boom Bap",
        "Golden Era Hip Hop",
        "Jazz Rap"
      ],
      "coreConcepts": [
        "chopped vinyl drum breaks",
        "swung 16th-note pocket",
        "sampled upright bass loop",
        "crisp backbeat snare on 2 and 4"
      ],
      "rhythmicGrammar": [
        "heavy kick on 1 and syncopated upbeat kicks leading to 3"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Swung vinyl kick-snare pocket with walking sampled bass",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Cm7",
          "Fm7",
          "Gm7",
          "Cm7"
        ],
        "verse": [
          "Cm7",
          "Fm7",
          "Gm7",
          "Cm7"
        ],
        "chorus": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Bb7"
        ],
        "coda": [
          "Cm7",
          "Fm7",
          "Cm7",
          "Cm7"
        ]
      }
    },
    {
      "id": "hiphop-trap",
      "worldId": "hip-hop",
      "name": "Modern Trap & 808",
      "origin": "US South (Atlanta)",
      "era": "2000s–Present",
      "description": "Low-end dominant modern beat production: pitched sliding 808 sub-bass, rapid 32nd-note rolling hi-hats, half-time snare placement, and dark minor-key pads.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        160
      ],
      "keySubstyles": [
        "Trap",
        "Drill",
        "Plugg"
      ],
      "coreConcepts": [
        "pitched 808 slides",
        "rolling 32nd and triplet hi-hats",
        "half-time snare hit on beat 3",
        "minimal dark pads"
      ],
      "rhythmicGrammar": [
        "half-time feel: kick anchors downbeat while snare lands strictly on beat 3"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Booming 808 sub slide with fast rolling hi-hat bursts",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "Dm",
          "E7"
        ],
        "verse": [
          "Am",
          "F",
          "Dm",
          "E7"
        ],
        "chorus": [
          "F",
          "G",
          "Am",
          "Am"
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
      "id": "hiphop-lofi-jazzrap",
      "worldId": "hip-hop",
      "name": "Lo-Fi, Jazz Rap & Neo-Soul",
      "origin": "US East Coast / Midwest (Detroit) / Tokyo",
      "era": "1990s–Present",
      "description": "Unquantized MPC pocket drumming, warm Rhodes / Wurlitzer jazz extensions, sampled upright bass, and relaxed vinyl warmth.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "keys",
        "electric-guitar"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        74,
        92
      ],
      "keySubstyles": [
        "Jazz Rap (A Tribe Called Quest)",
        "Dilla / Neo-Soul Groove",
        "Lo-Fi Hip Hop / Chillhop"
      ],
      "coreConcepts": [
        "unquantized MPC swing",
        "Rhodes 7th and 9th chord voicings",
        "laid-back snare lagging behind beat",
        "upright bass loop"
      ],
      "rhythmicGrammar": [
        "kick dragging slightly behind the grid, snare delayed by 15-25ms on beats 2 and 4"
      ],
      "danceTags": [
        "listening",
        "chill"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Unquantized swung MPC kick-snare pocket with lush major 9th chords",
      "grooveMechanics": {
        "swingPercentage": 62,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "drunk"
      },
      "sectionProgressions": {
        "intro": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "Cmaj7"
        ],
        "verse": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "Cmaj7"
        ],
        "chorus": [
          "Dm7",
          "G7",
          "Cmaj7",
          "Am7"
        ],
        "coda": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "Cmaj7"
        ]
      }
    }
  ],
  "substyles": [
    "Boom-Bap",
    "Modern Trap",
    "Reggaeton & Dembow",
    "Drill",
    "Lo-Fi Hip Hop",
    "G-Funk"
  ],
  "artists": [
    "J Dilla",
    "DJ Premier",
    "Metro Boomin",
    "Bad Bunny",
    "Daddy Yankee",
    "Dr. Dre",
    "Kanye West",
    "Kendrick Lamar"
  ],
  "concepts": [
    "808 sub glide",
    "dembow riddim [3, 3, 2]",
    "swung 16th-note hi-hat pocket",
    "half-time snare placement",
    "vocal-forward space",
    "chopped sample loops"
  ],
  "roles": {
    "drums": [
      "swung boom-bap break",
      "trap rolled hi-hat kit",
      "dembow kick-snare riddim"
    ],
    "bass": [
      "808 slide & sub bass",
      "sampled upright walking bass",
      "dembow-locked sub pulse"
    ],
    "harmony": [
      "minimal sampled piano loop",
      "dark minor synth pad"
    ],
    "lead": [
      "vocal delivery hook",
      "G-funk synth lead",
      "drill vocal chops"
    ],
    "percussion": [
      "dembow rimshot and conga accents"
    ]
  },
  "patterns": [
    {
      "id": "hiphop-boom-basic",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Boom Bap Basic",
      "family": "Beat",
      "category": "sectionPattern",
      "description": "Classic 90s boom bap beat with heavy 1 and crisp backbeat.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        8,
        12,
        10
      ],
      "accentProfile": [
        1,
        0.95,
        0.85,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.8,
        0.9,
        0.7
      ],
      "density": "dynamic",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "intro"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "interactionRules": [
        {
          "id": "hip-hop-interaction-1",
          "worldId": "hip-hop",
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
      "id": "hiphop-boom-sync",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Syncopated Kick",
      "family": "Beat",
      "category": "fill",
      "description": "Boom Bap with syncopated 16th kick anticipations.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        7,
        8,
        11,
        12
      ],
      "accentProfile": [
        1,
        0.95,
        0.8,
        0.9,
        0.75,
        1
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
        0.85,
        0.7,
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
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-trap-basic",
      "worldId": "hip-hop",
      "traditionId": "hiphop-trap",
      "name": "Trap Half-Time",
      "family": "Beat",
      "category": "break",
      "description": "Basic half-time trap beat with booming 808 sub.",
      "tags": [
        "hip-hop",
        "beat"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums",
        "bass"
      ],
      "instruments": [
        "drums",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        8,
        14
      ],
      "accentProfile": [
        1,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        
        {
          "id": "hiphop-trap-basic-v-02",
          "parentPatternId": "hiphop-trap-basic",
          "name": "Trap Half-Time — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            0.96,
            1,
            0.76
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums",
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
      "id": "hiphop-trap-hats",
      "worldId": "hip-hop",
      "traditionId": "hiphop-trap",
      "name": "Trap Hi-Hats",
      "family": "Beat",
      "category": "cadence",
      "description": "Continuous 16ths with 32nd note hi-hat rolls.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
      "subdivisions": 32,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20,
        21,
        22,
        24,
        26,
        28,
        30
      ],
      "accentProfile": [
        0.9,
        0.65,
        0.8,
        0.65,
        0.85,
        0.65,
        0.8,
        0.65,
        0.9,
        0.65,
        0.7,
        0.8,
        0.9,
        0.85,
        0.65,
        0.8,
        0.65
      ],
      "velocityProfile": [
        0.85,
        0.55,
        0.75,
        0.55,
        0.8,
        0.55,
        0.75,
        0.55,
        0.85,
        0.55,
        0.6,
        0.7,
        0.85,
        0.8,
        0.55,
        0.75,
        0.55
      ],
      "density": "dense",
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
      "difficulty": 5,
      "weight": 1,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hip-hop-sampled-keys",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Sampled Keys Loop",
      "family": "Sample Loop",
      "category": "groove",
      "description": "Looped melodic/harmonic sample role underneath the boom-bap drums and bass.",
      "tags": [
        "hip-hop",
        "beat",
        "sample-loop"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "harmony"
      ],
      "instruments": [
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 24,
      "onsetGrid": [
        0,
        6,
        12,
        18,
        10
      ],
      "accentProfile": [
        0.9,
        0.85,
        0.8,
        0.9,
        0.7
      ],
      "velocityProfile": [
        0.85,
        0.8,
        0.75,
        0.85,
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "interactionRules": [
        {
          "id": "hip-hop-interaction-2",
          "worldId": "hip-hop",
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
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "keys"
      ]
    },
    {
      "id": "hiphop-gfunk",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "G-Funk",
      "family": "Beat",
      "category": "groove",
      "description": "Heavy kick and snare with driving 8th note hats.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        0.65,
        0.95,
        0.65,
        0.9,
        0.65,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.9,
        0.6,
        0.85,
        0.6,
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
      "difficulty": 3,
      "weight": 1,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "interactionRules": [
        {
          "id": "hip-hop-interaction-3",
          "worldId": "hip-hop",
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
      "id": "hiphop-drill",
      "worldId": "hip-hop",
      "traditionId": "hiphop-trap",
      "name": "Drill Beat",
      "family": "Beat",
      "category": "groove",
      "description": "Syncopated sliding snare/clap placement for drill.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        7,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.8,
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-breakbeat",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Old School Break",
      "family": "Beat",
      "category": "groove",
      "description": "Syncopated funk breakbeat style drum groove with sampled punch.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        7,
        8,
        10,
        12
      ],
      "accentProfile": [
        1,
        0.78,
        0.98,
        0.72,
        0.88,
        0.82,
        0.96
      ],
      "velocityProfile": [
        0.96,
        0.72,
        0.94,
        0.68,
        0.84,
        0.78,
        0.92
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-bounce",
      "worldId": "hip-hop",
      "traditionId": "hiphop-trap",
      "name": "Bounce Beat",
      "family": "Beat",
      "category": "groove",
      "description": "New Orleans style bounce rhythm and clap trigger.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        0.8,
        0.85,
        0.95,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.75,
        0.8,
        0.9,
        0.75,
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-westcoast",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "West Coast",
      "family": "Beat",
      "category": "groove",
      "description": "Syncopated kicks with handclaps and crisp snaps.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        7,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.95,
        0.8,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
        0.9,
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-neosoul",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Neo-Soul Hip Hop",
      "family": "Beat",
      "category": "groove",
      "description": "Behind the beat snare with organic human touch.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        5,
        8,
        13
      ],
      "accentProfile": [
        0.9,
        0.85,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.85,
        0.8,
        0.75,
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
      "difficulty": 1,
      "weight": 1,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-minimal808",
      "worldId": "hip-hop",
      "traditionId": "hiphop-trap",
      "name": "Minimal 808",
      "family": "Beat",
      "category": "groove",
      "description": "Sparse 808 sub kicks leaving open pocket for vocals.",
      "tags": [
        "hip-hop",
        "beat"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums",
        "bass"
      ],
      "instruments": [
        "drums",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        10,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.85
      ],
      "density": "sparse",
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums",
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
      "id": "hiphop-lofi-pocket-drums",
      "worldId": "hip-hop",
      "traditionId": "hiphop-lofi-jazzrap",
      "name": "Lo-Fi Dilla MPC Pocket Drums",
      "family": "Lo-Fi Drums",
      "category": "groove",
      "description": "Laid-back unquantized drum machine groove with deep kick, lazy rimshot/snare, and swung hi-hats.",
      "tags": [
        "lo-fi",
        "jazz-rap",
        "drums",
        "mpc",
        "swing"
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
        "pulse"
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
        4,
        6,
        8,
        11,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.88,
        0.95,
        0.88,
        1,
        0.88,
        0.95,
        0.88
      ],
      "velocityProfile": [
        0.95,
        0.82,
        0.92,
        0.82,
        0.95,
        0.82,
        0.92,
        0.82
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
      "variants": [
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-808-glide-bass",
      "worldId": "hip-hop",
      "traditionId": "hiphop-trap",
      "name": "808 Glide & Sub Slide Bass",
      "family": "808 Bass",
      "category": "ostinato",
      "description": "Deep sliding 808 sub bass notes hitting on the 1 and executing pitch glides on syncopated upbeats.",
      "tags": [
        "trap",
        "808",
        "bass",
        "sub",
        "glide"
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
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        12
      ],
      "accentProfile": [
        1,
        0.85,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.85
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hip-hop-call-15",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Boom Bap Response",
      "family": "Boom Bap",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around drum break and the boom bap vocabulary of Global Urban Beat.",
      "tags": [
        "hip-hop",
        "boom-bap",
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
        9,
        12,
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
      "syncopationRating": 0.67,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop",
        "boom-bap"
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
      "id": "hip-hop-anchor-16",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Sample Chop Anchor",
      "family": "Sample Chop",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around sample loop and the sample chop vocabulary of Global Urban Beat.",
      "tags": [
        "hip-hop",
        "sample-chop",
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
        5,
        8,
        10,
        13
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
      "syncopationRating": 0.67,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
      "provenance": "Global Urban Beat genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "hip-hop",
        "sample-chop"
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
      "id": "hip-hop-voice-phrasing",
      "worldId": "hip-hop",
      "traditionId": "hiphop-boombap",
      "name": "Rap Cadence & Hook",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Rap cadence and hook placement with staggered entries and deliberate rests around the boom-bap pocket.",
      "tags": [
        "hip-hop",
        "voice",
        "vocal-phrasing",
        "catalog-v2",
        "sample-loop"
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.65,
        0.8,
        0.58,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.92,
        0.6,
        0.78,
        0.55,
        0.88,
        0.64
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
          "id": "hip-hop-voice-phrasing-v1",
          "parentPatternId": "hip-hop-voice-phrasing",
          "name": "Rap Cadence & Hook — sparse",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Reduced-density repeat.",
          "onsetGrid": [
            0,
            3,
            10,
            15
          ],
          "accentProfile": [
            1,
            0.65,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.86,
            0.64
          ]
        },
        {
          "id": "hip-hop-voice-phrasing-v2",
          "parentPatternId": "hip-hop-voice-phrasing",
          "name": "Rap Cadence & Hook — accent shift",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "Shifted emphasis repeat.",
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.9,
            0.7,
            0.75,
            0.68,
            1,
            0.62
          ],
          "velocityProfile": [
            0.86,
            0.62,
            0.72,
            0.58,
            0.92,
            0.56
          ]
        }
      ],
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Global Urban Beat; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "hip-hop",
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
      "id": "hiphop-rhodes-jazz-chords",
      "worldId": "hip-hop",
      "traditionId": "hiphop-lofi-jazzrap",
      "name": "Warm Rhodes Jazz Chords",
      "family": "Keys",
      "category": "harmony",
      "description": "Rich 7th and 9th electric piano chords with tape vibrato and laid-back syncopated stabs.",
      "tags": ["lo-fi", "jazz-rap", "rhodes", "keys", "harmony"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["keys", "harmony", "piano"],
      "instruments": ["keys", "piano"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [2, 6, 11, 18, 22, 27],
      "accentProfile": [0.9, 0.75, 0.95, 0.9, 0.75, 0.95],
      "velocityProfile": [0.85, 0.7, 0.9, 0.85, 0.7, 0.9],
      "articulations": ["tenuto", "accented"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Lo-Fi, Jazz Rap & Neo-Soul; generalized from documented musical conventions.",
      "authenticityTags": ["jazz-rap", "lo-fi", "keys"],
      "danceTags": ["listening"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "hiphop-upright-jazz-bass",
      "worldId": "hip-hop",
      "traditionId": "hiphop-lofi-jazzrap",
      "name": "Sampled Upright Jazz Bass",
      "family": "Bass",
      "category": "bass",
      "description": "Deep acoustic upright bass walking through chromatic passing tones and resting in the pocket.",
      "tags": ["lo-fi", "jazz-rap", "bass", "upright", "pulse"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass", "pulse"],
      "instruments": ["bass"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 10, 14],
      "accentProfile": [1.0, 0.8, 0.9, 0.75],
      "velocityProfile": [0.95, 0.75, 0.85, 0.7],
      "articulations": ["legato", "slide"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Lo-Fi, Jazz Rap & Neo-Soul; generalized from documented musical conventions.",
      "authenticityTags": ["jazz-rap", "bass"],
      "danceTags": ["listening"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "808 pitch gliding",
    "32nd-note hi-hat rolls",
    "vinyl crackle and sample pitching",
    "dembow offbeat rim accentuation"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "verse",
    "chorus",
    "bridge",
    "chorus",
    "coda"
  ],
  "relationships": [
    "808 sub ↔ kick (tight low-end lock)",
    "snare ↔ hats (swung timekeeping)",
    "vocal ↔ sample loop (call and space)"
  ],
  "transformations": [
    "trans-density-dense",
    "trans-anticipation",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "low-end focused groove leaving maximum dynamic space for rhythmic vocal delivery and chest-hitting bass drops",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "drums": [
      "vintage SP-1200 / MPC60 punchy sampled drums and Roland TR-808 percussion"
    ],
    "bass": [
      "pure sine-wave 808 sub with tube saturation and glide pitch envelopes"
    ],
    "voice": [
      "rap cadence and hook phrasing"
    ],
    "keys": [
      "sampled piano/keys loop"
    ],
    "synth": [
      "sample/synth support loop"
    ]
  },
  "combinations": [
    "Urban Beat + Afrobeats",
    "Urban Beat + Bachata Sensual",
    "Boom Bap + Jazz"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "listening",
    "sensual-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Dembow riddim [0, 6, 8, 12, 14] & 808 sliding sub-bass",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Hip-Hop ↔ Reggaeton & Dembow (see dedicated Reggaeton / Dembow world)",
    "Global Urban Beat ↔ Afrobeats",
    "Global Urban Beat ↔ Jazz (Jazz Rap / Boom Bap)",
    "Global Urban Beat ↔ Funk"
  ]
};
