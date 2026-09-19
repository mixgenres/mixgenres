import { GenreWorld } from '../../types';

export const HIP_HOP_WORLD: GenreWorld = {
  "id": "hip-hop",
  "name": "Global Urban Beat",
  "family": "Urban / Beat-driven Continuum",
  "color": "#8c8c8c",
  "level": "world",
  "description": "Unified global urban beat continuum spanning classic 90s Boom-Bap vinyl breaks, Atlanta Trap 808 slides and rolling hats, Caribbean Reggaeton / Dembow riddims, and Afro-Urban crossover pockets.",
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
      "id": "hiphop-dembow",
      "worldId": "hip-hop",
      "name": "Reggaeton & Dembow",
      "origin": "Puerto Rico / Dominican Republic / Jamaica",
      "era": "1990s–Present",
      "description": "The ubiquitous global Latin urban riddim: syncopated dembow snare pattern locked with 4-on-the-floor kick, deep sub-bass, and driving vocal hooks.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "synth",
        "percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        90,
        105
      ],
      "keySubstyles": [
        "Reggaeton Clásico",
        "Urbano Latino",
        "Dembow Dominicano"
      ],
      "coreConcepts": [
        "dembow riddim ([3, 3, 2] syncopation)",
        "steady four-on-the-floor kick",
        "heavy offbeat rim/snare hits",
        "sub-bass pocket"
      ],
      "rhythmicGrammar": [
        "kick on [0, 4, 8, 12] with snare answering on [3, 6, 11, 14]"
      ],
      "danceTags": [
        "social-partner",
        "sensual-fusion",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "The classic Dembow riddim: steady kick with syncopated offbeat snares [3, 6, 11, 14]",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Bm",
          "G",
          "D",
          "A"
        ],
        "verse": [
          "Bm",
          "G",
          "D",
          "A"
        ],
        "chorus": [
          "G",
          "A",
          "Bm",
          "F#m"
        ],
        "coda": [
          "Bm",
          "G",
          "D",
          "A"
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
        {
          "id": "hiphop-boom-basic-v-01",
          "parentPatternId": "hiphop-boom-basic",
          "name": "Boom Bap Basic — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-boom-basic-v-02",
          "parentPatternId": "hiphop-boom-basic",
          "name": "Boom Bap Basic — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            10
          ],
          "accentProfile": [
            0.96,
            1,
            0.8099999999999999,
            1,
            0.71
          ],
          "velocityProfile": [
            1,
            0.88,
            0.78,
            0.96,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-boom-sync-v-01",
          "parentPatternId": "hiphop-boom-sync",
          "name": "Syncopated Kick — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            7,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "hiphop-boom-sync-v-02",
          "parentPatternId": "hiphop-boom-sync",
          "name": "Syncopated Kick — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            7,
            8,
            11,
            12
          ],
          "accentProfile": [
            0.96,
            1,
            0.76,
            0.98,
            0.71,
            1
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.9099999999999999,
            0.6799999999999999,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
          "id": "hiphop-trap-basic-v-01",
          "parentPatternId": "hiphop-trap-basic",
          "name": "Trap Half-Time — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            14
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-trap-hats-v-01",
          "parentPatternId": "hiphop-trap-hats",
          "name": "Trap Hi-Hats — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            16,
            18,
            21,
            22,
            26,
            28
          ],
          "accentProfile": [
            0.85,
            0.6,
            0.75,
            0.6,
            0.7999999999999999,
            0.6,
            0.75,
            0.6,
            0.85,
            0.6,
            0.6499999999999999
          ],
          "velocityProfile": [
            0.77,
            0.47000000000000003,
            0.67,
            0.47000000000000003,
            0.7200000000000001,
            0.47000000000000003,
            0.67,
            0.47000000000000003,
            0.77,
            0.47000000000000003,
            0.52
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-trap-hats-v-02",
          "parentPatternId": "hiphop-trap-hats",
          "name": "Trap Hi-Hats — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.86,
            0.73,
            0.76,
            0.73,
            0.8099999999999999,
            0.73,
            0.76,
            0.73,
            0.86,
            0.73,
            0.6599999999999999,
            0.88,
            0.86,
            0.9299999999999999,
            0.61,
            0.88,
            0.61
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.53,
            0.73,
            0.6100000000000001,
            0.78,
            0.53,
            0.81,
            0.53,
            0.83,
            0.6100000000000001,
            0.58,
            0.6799999999999999,
            0.9099999999999999,
            0.78,
            0.53,
            0.81,
            0.53
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 5,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-lofi-v-01",
          "parentPatternId": "hiphop-lofi",
          "name": "Lo-Fi Swing — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            12,
            18
          ],
          "accentProfile": [
            0.85,
            0.7999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.77,
            0.7200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-lofi-v-02",
          "parentPatternId": "hiphop-lofi",
          "name": "Lo-Fi Swing — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            12,
            18,
            10
          ],
          "accentProfile": [
            0.86,
            0.9299999999999999,
            0.76,
            0.98,
            0.6599999999999999
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.78,
            0.73,
            0.9099999999999999,
            0.63
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-gfunk-v-01",
          "parentPatternId": "hiphop-gfunk",
          "name": "G-Funk — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.8999999999999999,
            0.6,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.8200000000000001,
            0.52,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-gfunk-v-02",
          "parentPatternId": "hiphop-gfunk",
          "name": "G-Funk — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.73,
            0.9099999999999999,
            0.73,
            0.86,
            0.73,
            0.9099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.88,
            0.6599999999999999,
            0.83,
            0.58,
            0.96,
            0.63
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-drill-v-01",
          "parentPatternId": "hiphop-drill",
          "name": "Drill Beat — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-drill-v-02",
          "parentPatternId": "hiphop-drill",
          "name": "Drill Beat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.9099999999999999,
            0.88
          ],
          "velocityProfile": [
            1,
            0.78,
            0.88,
            0.81
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-breakbeat-v-01",
          "parentPatternId": "hiphop-breakbeat",
          "name": "Old School Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            7,
            10,
            12
          ],
          "accentProfile": [
            0.95,
            0.73,
            0.9299999999999999,
            0.6699999999999999,
            0.83
          ],
          "velocityProfile": [
            0.88,
            0.64,
            0.86,
            0.6000000000000001,
            0.76
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-breakbeat-v-02",
          "parentPatternId": "hiphop-breakbeat",
          "name": "Old School Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.86,
            0.94,
            0.7999999999999999,
            0.84,
            0.8999999999999999,
            0.9199999999999999
          ],
          "velocityProfile": [
            1,
            0.7,
            0.9199999999999999,
            0.74,
            0.82,
            0.76,
            0.98
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-bounce-v-01",
          "parentPatternId": "hiphop-bounce",
          "name": "Bounce Beat — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.95,
            0.75,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.7200000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "hiphop-bounce-v-02",
          "parentPatternId": "hiphop-bounce",
          "name": "Bounce Beat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.88,
            0.8099999999999999,
            1,
            0.76,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.73,
            0.78,
            0.96,
            0.73,
            0.78
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-westcoast-v-01",
          "parentPatternId": "hiphop-westcoast",
          "name": "West Coast — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            7,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-westcoast-v-02",
          "parentPatternId": "hiphop-westcoast",
          "name": "West Coast — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            7,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            1,
            0.76,
            1,
            0.71
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.96,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-neosoul-v-01",
          "parentPatternId": "hiphop-neosoul",
          "name": "Neo-Soul Hip Hop — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            8,
            13
          ],
          "accentProfile": [
            0.85,
            0.7999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.77,
            0.7200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-neosoul-v-02",
          "parentPatternId": "hiphop-neosoul",
          "name": "Neo-Soul Hip Hop — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            5,
            8,
            13
          ],
          "accentProfile": [
            0.86,
            0.9299999999999999,
            0.76,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.78,
            0.73,
            0.8600000000000001
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-minimal808-v-01",
          "parentPatternId": "hiphop-minimal808",
          "name": "Minimal 808 — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            14
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "hiphop-minimal808-v-02",
          "parentPatternId": "hiphop-minimal808",
          "name": "Minimal 808 — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            10,
            14
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.86
          ],
          "velocityProfile": [
            1,
            0.78,
            0.83
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
      "id": "hiphop-dembow-riddim",
      "worldId": "hip-hop",
      "traditionId": "hiphop-dembow",
      "name": "Classic Dembow Riddim",
      "family": "Dembow",
      "category": "groove",
      "description": "The heartbeat of global urban Latin music: 4-on-the-floor kick with sharp syncopated offbeat snares.",
      "tags": [
        "reggaeton",
        "dembow",
        "drums",
        "latin",
        "beat"
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
        {
          "id": "hiphop-dembow-riddim-v-01",
          "parentPatternId": "hiphop-dembow-riddim",
          "name": "Classic Dembow Riddim — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6,
            11,
            12
          ],
          "accentProfile": [
            0.95,
            0.83,
            0.8999999999999999,
            0.83,
            0.95
          ],
          "velocityProfile": [
            0.87,
            0.74,
            0.8400000000000001,
            0.74,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-dembow-riddim-v-02",
          "parentPatternId": "hiphop-dembow-riddim",
          "name": "Classic Dembow Riddim — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.96,
            0.9099999999999999,
            0.96,
            0.96,
            0.96,
            0.9099999999999999,
            0.96
          ],
          "velocityProfile": [
            1,
            0.7999999999999999,
            0.9,
            0.8799999999999999,
            0.9299999999999999,
            0.7999999999999999,
            0.98,
            0.7999999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "hiphop-808-glide-bass-v-01",
          "parentPatternId": "hiphop-808-glide-bass",
          "name": "808 Glide & Sub Slide Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "hiphop-808-glide-bass-v-02",
          "parentPatternId": "hiphop-808-glide-bass",
          "name": "808 Glide & Sub Slide Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.86
          ],
          "velocityProfile": [
            1,
            0.78,
            0.83
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
      "weight": 0.7,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
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
        0.8999999999999999,
        0.62
      ],
      "syncopationRating": 0.6666666666666666,
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
        {
          "id": "hip-hop-call-15-v-01",
          "parentPatternId": "hip-hop-call-15",
          "name": "Boom Bap Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            7,
            9,
            15
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "hip-hop-call-15-v-02",
          "parentPatternId": "hip-hop-call-15",
          "name": "Boom Bap Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            4,
            7,
            9,
            12,
            15
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999,
            0.8799999999999999,
            0.6
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "hip-hop-call-15-v-03",
          "parentPatternId": "hip-hop-call-15",
          "name": "Boom Bap Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            4,
            7,
            9,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.98,
            0.98
          ],
          "microtimingOffset": [
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
      "provenance": "GenreDAW catalog rebuild from existing Global Urban Beat world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.6666666666666666,
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
        {
          "id": "hip-hop-anchor-16-v-01",
          "parentPatternId": "hip-hop-anchor-16",
          "name": "Sample Chop Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5,
            8,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "hip-hop-anchor-16-v-02",
          "parentPatternId": "hip-hop-anchor-16",
          "name": "Sample Chop Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            5,
            8,
            10,
            13
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Global Urban Beat world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.6666666666666666,
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Global Urban Beat.",
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
    "Global Urban Beat ↔ Afrobeats",
    "Global Urban Beat ↔ Bachata Sensual",
    "Global Urban Beat ↔ Funk"
  ]
};
