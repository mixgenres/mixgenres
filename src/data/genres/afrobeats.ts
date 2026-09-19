import { GenreWorld } from '../../types';

export const AFROBEATS_WORLD: GenreWorld = {
  "id": "afrobeats",
  "name": "Afrobeats",
  "family": "West African Pop / Global Groove",
  "color": "#d48834",
  "level": "world",
  "description": "Vibrant West African dance music continuum: from classic 1970s Afrobeat horn vamps and Highlife clean guitar picking to modern Afropop syncopated pockets and South African Amapiano log-drum basslines.",
  "traditions": [
    {
      "id": "afrobeats-modern",
      "worldId": "afrobeats",
      "name": "Afrobeats & Afropop",
      "origin": "Nigeria / Ghana / UK",
      "era": "2010s–Present",
      "description": "Modern West African pop defined by syncopated kick/clap pockets, deep 808/log drum basslines, bright clean guitar chops, and infectious vocal hooks.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "guitar",
        "synth",
        "percussion",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        98,
        115
      ],
      "keySubstyles": [
        "Naija Pop (Burna Boy, Wizkid)",
        "Afro-Fusion",
        "Afro-Swing",
        "Afro-R&B"
      ],
      "coreConcepts": [
        "syncopated kick/snare pocket",
        "log drum pitched bass rolls",
        "clean single-note guitar licks",
        "shekere / shaker perpetual motion"
      ],
      "rhythmicGrammar": [
        "kick on 1, 1-and, 3-and with sharp snare clap on 4-and or beat 3"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Syncopated Afrobeats pocket kick [0, 6, 10] with offbeat snare clap",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Fmaj7",
          "G",
          "Em7",
          "Am7"
        ],
        "verse": [
          "Fmaj7",
          "G",
          "Em7",
          "Am7"
        ],
        "chorus": [
          "Dm7",
          "Em7",
          "Fmaj7",
          "G"
        ],
        "coda": [
          "Am7",
          "G",
          "Fmaj7",
          "Em7"
        ]
      }
    },
    {
      "id": "afrobeat-fela",
      "worldId": "afrobeats",
      "name": "Afrobeat (Fela Kuti Lineage)",
      "origin": "Lagos, Nigeria",
      "era": "1970s–1980s",
      "description": "Monumental political big-band funk pioneered by Fela Kuti and Tony Allen: complex polyrhythmic kit drumming, interlocking rhythm guitars, hypnotic bass vamps, and fiery horn section hits.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "electric-guitar",
        "brass",
        "percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        130
      ],
      "keySubstyles": [
        "Classic Afrobeat (Africa 70, Egypt 80)",
        "Afrobeat Revival (Antibalas, Seun Kuti)"
      ],
      "coreConcepts": [
        "Tony Allen 4-limb polyrhythm",
        "dual interlocking rhythm guitars (tenor and rhythm)",
        "relentless minor vamp",
        "punchy horn stabs"
      ],
      "rhythmicGrammar": [
        "hi-hat 16th pulse, syncopated snare cross-stick, bass pedal ostinato"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Two interlocking guitars weaving around steady minor modal bass vamp",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm7",
          "Dm7",
          "Dm7",
          "Dm7"
        ],
        "verse": [
          "Dm7",
          "G7",
          "Dm7",
          "G7"
        ],
        "solo": [
          "Dm7",
          "G7",
          "Dm7",
          "G7"
        ],
        "coda": [
          "Dm7",
          "Dm7",
          "Dm7",
          "Dm7"
        ]
      }
    },
    {
      "id": "afrobeats-amapiano",
      "worldId": "afrobeats",
      "name": "Amapiano Crossover",
      "origin": "South Africa",
      "era": "2018–Present",
      "description": "South African house fusion characterized by deep pitched FM log-drum baselines, jazzy airy Rhodes piano chords, slow-burning four-on-the-floor tempo, and minimalist shakers.",
      "characteristicInstruments": [
        "synth",
        "drums",
        "keys",
        "percussion",
        "bass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        112,
        118
      ],
      "keySubstyles": [
        "Amapiano",
        "Afro-House",
        "Private School Amapiano"
      ],
      "coreConcepts": [
        "pitched log drum rolls",
        "jazzy 9th and 11th Rhodes voicings",
        "four-on-floor ghost kicks",
        "high metallic shaker"
      ],
      "rhythmicGrammar": [
        "log drum sliding and pitching between octave drops on upbeat 16ths"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Pitched log drum roll dropping on unexpected syncopated subdivisions",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": -1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Ebmaj7"
        ],
        "verse": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Ebmaj7"
        ],
        "chorus": [
          "Dbmaj7",
          "Eb",
          "Fm7",
          "Gm7"
        ],
        "coda": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Ebmaj7"
        ]
      }
    }
  ],
  "substyles": [
    "Afropop",
    "Afro-Fusion",
    "Classic Afrobeat (Fela)",
    "Amapiano Crossover",
    "Highlife",
    "Afro-Swing"
  ],
  "artists": [
    "Burna Boy",
    "Wizkid",
    "Fela Kuti",
    "Tony Allen",
    "Davido",
    "Tiwa Savage",
    "Kabza De Small",
    "Rema"
  ],
  "concepts": [
    "syncopated kick/clap pocket",
    "log-drum pitched bass rolls",
    "clean highlife guitar picking",
    "shekere continuous groove",
    "horn section punch",
    "vocal hook repetition"
  ],
  "roles": {
    "bass": [
      "pitched log-drum bass rolls",
      "Fela minor vamp bass",
      "sub 808 pulse"
    ],
    "drums": [
      "syncopated Afropop kick/clap pocket",
      "Tony Allen polyrhythmic snare",
      "Amapiano ghost kick"
    ],
    "guitar": [
      "highlife fingerstyle arpeggios",
      "rhythm muted chops"
    ],
    "percussion": [
      "shekere shaker rattle",
      "talking drum accents",
      "conga syncopations"
    ],
    "lead": [
      "horn section stabs",
      "vocal hook lines"
    ],
    "harmony": [
      "airy Rhodes 9th chords",
      "warm pad washes"
    ]
  },
  "patterns": [
    {
      "id": "afro-log-drum-bass",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Pitched Log Drum Bass Groove",
      "family": "Log Drum",
      "category": "groove",
      "description": "Resonant FM synth log drum bassline providing harmonic weight and syncopated rhythmic propulsion.",
      "tags": [
        "afrobeats",
        "bass",
        "log-drum",
        "amapiano",
        "sub"
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
        3,
        6,
        8,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.95,
        0.75,
        0.9,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.7,
        0.85,
        0.8
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Afrobeats genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats"
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
          "id": "afrobeats-interaction-1",
          "worldId": "afrobeats",
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
      "id": "afro-syncopated-kit",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Modern Afropop Kick & Rim Pocket",
      "family": "Afrobeats Drums",
      "category": "groove",
      "description": "Signature Afrobeats syncopated kick placement with crisp wooden rimshot and shaker engine.",
      "tags": [
        "afrobeats",
        "drums",
        "kick",
        "rimshot"
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
        6,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.9,
        0.95,
        0.75,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.9,
        0.7,
        0.8
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats"
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
          "id": "afrobeats-interaction-2",
          "worldId": "afrobeats",
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
      "id": "afro-highlife-guitar",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Highlife Fingerstyle Clean Guitar",
      "family": "Highlife Guitar",
      "category": "ostinato",
      "description": "Bright clean electric guitar playing rhythmic two-finger arpeggiated chops.",
      "tags": [
        "afrobeats",
        "guitar",
        "highlife",
        "clean"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "guitar"
      ],
      "instruments": [
        "guitar",
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        7,
        8,
        11,
        13,
        15
      ],
      "accentProfile": [
        0.85,
        0.95,
        0.75,
        0.9,
        0.8,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.8,
        0.9,
        0.7,
        0.85,
        0.75,
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
        "chorus"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Afrobeats genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "afrobeats-interaction-3",
          "worldId": "afrobeats",
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
      "id": "afro-shekere-shaker",
      "worldId": "afrobeats",
      "traditionId": "afrobeat-fela",
      "name": "Shekere & Gourd Shaker Engine",
      "family": "Afro Percussion",
      "category": "groove",
      "description": "Continuous 16th-note gourd shaker rattle with accented palm drops on beats 1 and 3.",
      "tags": [
        "afrobeat",
        "percussion",
        "shekere",
        "shaker"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "percussion",
        "guiro"
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
        0.5,
        0.75,
        0.5,
        0.85,
        0.5,
        0.75,
        0.5,
        0.95,
        0.5,
        0.75,
        0.5,
        0.85,
        0.5,
        0.75,
        0.55
      ],
      "velocityProfile": [
        0.95,
        0.45,
        0.7,
        0.45,
        0.8,
        0.45,
        0.7,
        0.45,
        0.9,
        0.45,
        0.7,
        0.45,
        0.8,
        0.45,
        0.7,
        0.5
      ],
      "density": "dense",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 5,
      "weight": 1,
      "provenance": "Afrobeats genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "percussion"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "afrobeats-interaction-4",
          "worldId": "afrobeats",
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
      "id": "afro-horn-stabs",
      "worldId": "afrobeats",
      "traditionId": "afrobeat-fela",
      "name": "Fela Afrobeat Horn Section Stabs",
      "family": "Afro Horns",
      "category": "cadence",
      "description": "Pungent brass section horn stabs locking with the kit snare.",
      "tags": [
        "afrobeat",
        "horns",
        "brass",
        "fela"
      ],
      "scopes": [
        "phrase",
        "region"
      ],
      "roles": [
        "lead",
        "brass"
      ],
      "instruments": [
        "trumpet",
        "brass",
        "sax"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        3,
        7,
        11,
        14
      ],
      "accentProfile": [
        0.95,
        0.9,
        0.95,
        1
      ],
      "velocityProfile": [
        0.9,
        0.85,
        0.9,
        0.95
      ],
      "density": "sparse",
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "solo",
        "coda"
      ],
      "variants": [
        
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Afrobeats genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "articulations": [
        "legato"
      ]
    },
    {
      "id": "afro-amapiano-pad",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-amapiano",
      "name": "Airy Rhodes & Synth Pad Comping",
      "family": "Amapiano Keys",
      "category": "groove",
      "description": "Spacious, warm electric piano voicings floating over the deep log drum baseline.",
      "tags": [
        "amapiano",
        "keys",
        "rhodes",
        "pad"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "harmony",
        "texture"
      ],
      "instruments": [
        "keys",
        "piano",
        "synth"
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
        0.85,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.8,
        0.85,
        0.75
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "texture"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "afrobeats-interaction-5",
          "worldId": "afrobeats",
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
      "id": "afrobeats-call-7",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Shekere Response",
      "family": "Shekere",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around highlife guitar and the shekere vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "shekere",
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "shekere"
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
      "id": "afrobeats-anchor-8",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Hook Anchor",
      "family": "Hook",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around shekere and the hook vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "hook",
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "hook"
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
      "id": "afrobeats-comp-9",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Horn Comping",
      "family": "Horn",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around vocal hook and the horn vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "horn",
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
        2,
        4,
        7,
        10,
        12,
        15
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "horn"
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
      "id": "afrobeats-intro-10",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Afrobeat Intro",
      "family": "Afrobeat",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around syncopated pocket and the afrobeat vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "afrobeat",
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
        1,
        3,
        4,
        6,
        9,
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
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
          "id": "afrobeats-intro-10-v-03",
          "parentPatternId": "afrobeats-intro-10",
          "name": "Afrobeat Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            3,
            4,
            6,
            9,
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "afrobeat"
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
      "id": "afrobeats-verse-11",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Log Drum Verse Variation",
      "family": "Log Drum",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around log drum in Afrobeats.",
      "tags": [
        "afrobeats",
        "log-drum",
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
        "bass"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "log-drum"
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
      "id": "afrobeats-chorus-12",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Shekere Chorus Lift",
      "family": "Shekere",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around highlife guitar and the shekere vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "shekere",
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
        0,
        3,
        5,
        6,
        8,
        11,
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
      "syncopationRating": 0.75,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
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
          "id": "afrobeats-chorus-12-v-03",
          "parentPatternId": "afrobeats-chorus-12",
          "name": "Shekere Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            3,
            5,
            6,
            8,
            11,
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "shekere"
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
      "id": "afrobeats-bridge-13",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Hook Bridge",
      "family": "Hook",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around shekere and the hook vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "hook",
        "bridge",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "lead"
      ],
      "instruments": [
        "guitar"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
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
        5,
        7,
        8,
        10,
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
      ],
      "density": "dense",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "bridge",
        "interlude",
        "development"
      ],
      "harmonicContext": [
        "tonal",
        "section-dependent",
        "tonal or modal context"
      ],
      "roleDependencies": [
        "harmony",
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "afrobeats-bridge-13-v-03",
          "parentPatternId": "afrobeats-bridge-13",
          "name": "Hook Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            5,
            7,
            8,
            10,
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "hook"
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
      "id": "afrobeats-fill-14",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Horn Fill",
      "family": "Horn",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around vocal hook and the horn vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "horn",
        "fill",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "fill",
        "drums"
      ],
      "instruments": [
        "drums",
        "percussion"
      ],
      "compatibleRoles": [
        "fill",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion"
      ],
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
        0.72,
        0.78,
        0.84,
        0.72,
        1,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        0.84,
        0.72,
        0.95,
        1
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "fill"
      ],
      "density": "dense",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "pre-chorus",
        "turnaround",
        "ending"
      ],
      "harmonicContext": [
        "tonal",
        "section-dependent",
        "tonal or modal context"
      ],
      "roleDependencies": [
        "drums"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "afrobeats-fill-14-v-03",
          "parentPatternId": "afrobeats-fill-14",
          "name": "Horn Fill — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.7,
            0.76,
            0.82,
            0.7,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
            0.95,
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "horn"
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
      "id": "afrobeats-break-15",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Afrobeat Break",
      "family": "Afrobeat",
      "category": "break",
      "description": "A deliberate drop in density for a breakdown or stop-time moment. Built around syncopated pocket and the afrobeat vocabulary of Afrobeats.",
      "tags": [
        "afrobeats",
        "afrobeat",
        "break",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "drums",
        "bass"
      ],
      "instruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "compatibleRoles": [
        "drums",
        "bass"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "bass"
      ],
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
        1,
        0.55,
        0.55,
        0.55,
        1,
        1
      ],
      "velocityProfile": [
        1,
        0.5,
        0.55,
        0.55,
        0.95,
        1
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented"
      ],
      "density": "sparse",
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "stop-time"
      ],
      "harmonicContext": [
        "tonal",
        "section-dependent",
        "tonal or modal context"
      ],
      "roleDependencies": [
        "drums",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "afrobeats-break-15-v-03",
          "parentPatternId": "afrobeats-break-15",
          "name": "Afrobeat Break — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.53,
            0.53,
            0.53,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
            0.55,
            0.95,
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "afrobeat"
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
      "id": "afrobeats-cadence-16",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Log Drum Cadence",
      "family": "Log Drum",
      "category": "cadence",
      "description": "A phrase-ending cadence that gives the arrangement a clear point of release. Built around log drum in Afrobeats.",
      "tags": [
        "afrobeats",
        "log-drum",
        "cadence",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "bass"
      ],
      "instruments": [
        "guitar",
        "bass"
      ],
      "compatibleRoles": [
        "harmony",
        "bass"
      ],
      "compatibleInstruments": [
        "guitar",
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
        "accented",
        "ghost-aware"
      ],
      "density": "sparse",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "turnaround",
        "ending",
        "coda",
        "remate",
        "cierre"
      ],
      "harmonicContext": [
        "dominant",
        "turnaround",
        "tonal or modal context"
      ],
      "roleDependencies": [
        "harmony",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "afrobeats-cadence-16-v-03",
          "parentPatternId": "afrobeats-cadence-16",
          "name": "Log Drum Cadence — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            6,
            8,
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
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
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
      "provenance": "Afrobeats genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "afrobeats",
        "log-drum"
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
      "id": "afrobeats-voice-phrasing",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-modern",
      "name": "Afrobeats Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Hook-driven vocal placement designed around syncopated pocket, log-drum movement, and call-response space.",
      "tags": [
        "afrobeats",
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
          "id": "afrobeats-voice-phrasing-v-voice-alt",
          "parentPatternId": "afrobeats-voice-phrasing",
          "name": "Afrobeats Vocal Phrasing — alternate phrasing",
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
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Afrobeats; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "afrobeats",
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
      "id": "afro-fela-tony-allen-drums",
      "worldId": "afrobeats",
      "traditionId": "afrobeat-fela",
      "name": "Tony Allen Polyrhythmic Kit",
      "family": "Afrobeat Drums",
      "category": "groove",
      "description": "Tony Allen signature polyrhythmic kit groove with floating hi-hat 16ths, syncopated snare cross-stick, and independent kick counterpoint.",
      "tags": ["afrobeat", "fela", "tony-allen", "drums", "polyrhythm"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["drums", "pulse"],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
      "accentProfile": [1.0, 0.6, 0.9, 0.7, 1.0, 0.6, 0.85, 0.75, 1.0, 0.6, 0.9, 0.7, 1.0, 0.6, 0.85, 0.75],
      "velocityProfile": [0.95, 0.6, 0.85, 0.7, 0.95, 0.6, 0.8, 0.7, 0.95, 0.6, 0.85, 0.7, 0.95, 0.6, 0.8, 0.7],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Authored for Afrobeat (Fela Kuti) tradition.",
      "authenticityTags": ["afrobeat", "drums"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "afro-fela-bass-vamp",
      "worldId": "afrobeats",
      "traditionId": "afrobeat-fela",
      "name": "Hypnotic Afrobeat Minor Bass Vamp",
      "family": "Afrobeat Bass",
      "category": "groove",
      "description": "Relentless two-bar minor modal bass ostinato holding down the heavy hypnotic pocket.",
      "tags": ["afrobeat", "fela", "bass", "vamp"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass"],
      "instruments": ["bass"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 11, 14, 16, 19, 22, 24, 28],
      "accentProfile": [1.0, 0.7, 0.85, 0.9, 0.7, 0.85, 1.0, 0.7, 0.85, 0.9, 0.8],
      "velocityProfile": [0.95, 0.65, 0.8, 0.9, 0.65, 0.8, 0.95, 0.65, 0.8, 0.9, 0.75],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Authored for Afrobeat (Fela Kuti) tradition.",
      "authenticityTags": ["afrobeat", "bass"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "afro-fela-tenor-guitar",
      "worldId": "afrobeats",
      "traditionId": "afrobeat-fela",
      "name": "Interlocking Afrobeat Tenor Guitar",
      "family": "Guitar",
      "category": "groove",
      "description": "Clean, tight single-coil tenor guitar rhythmic scratch interlocking with the drummer's hi-hat pulse.",
      "tags": ["afrobeat", "fela", "guitar"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["guitar", "harmony"],
      "instruments": ["electric-guitar"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [2, 4, 7, 10, 12, 15],
      "accentProfile": [0.8, 1.0, 0.75, 0.8, 1.0, 0.75],
      "velocityProfile": [0.75, 0.95, 0.7, 0.75, 0.95, 0.7],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Authored for Afrobeat (Fela Kuti) tradition.",
      "authenticityTags": ["afrobeat", "guitar"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "afro-amapiano-logdrum-roll",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-amapiano",
      "name": "Amapiano Pitch-Bending Log Drum Roll",
      "family": "Log Drum",
      "category": "groove",
      "description": "Authentic South African Amapiano FM log-drum roll with pitch-bending octave drops on 16th upbeat syncopations.",
      "tags": ["amapiano", "log-drum", "bass", "synth"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass", "pulse"],
      "instruments": ["synth", "bass"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 8, 11, 14, 16, 22, 24, 27, 30],
      "accentProfile": [1.0, 0.9, 0.85, 0.95, 0.8, 1.0, 0.9, 0.85, 0.95, 0.85],
      "velocityProfile": [0.95, 0.85, 0.8, 0.9, 0.75, 0.95, 0.85, 0.8, 0.9, 0.8],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Authored for Amapiano Crossover tradition.",
      "authenticityTags": ["amapiano", "log-drum"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "afro-amapiano-minimal-drums",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-amapiano",
      "name": "Amapiano Shaker & Ghost Kick Engine",
      "family": "Drums",
      "category": "groove",
      "description": "Minimalist slow-tempo four-on-the-floor ghost kick with rapid metallic shaker roll and woody rim click.",
      "tags": ["amapiano", "drums", "shaker", "percussion"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["drums", "percussion", "pulse"],
      "instruments": ["drums", "percussion"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.65, 0.75, 0.7, 0.95, 0.65, 0.75, 0.7],
      "velocityProfile": [0.9, 0.6, 0.7, 0.65, 0.85, 0.6, 0.7, 0.65],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Authored for Amapiano Crossover tradition.",
      "authenticityTags": ["amapiano", "drums"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "afro-amapiano-rhodes-chords",
      "worldId": "afrobeats",
      "traditionId": "afrobeats-amapiano",
      "name": "Amapiano Jazzy Rhodes Chords",
      "family": "Keys",
      "category": "harmony",
      "description": "Smooth jazzy major 9th and minor 11th electric piano syncopated stabs floating over the log drum.",
      "tags": ["amapiano", "rhodes", "keys", "harmony"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["harmony", "keys"],
      "instruments": ["keys", "synth"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 12, 16, 22, 28],
      "accentProfile": [0.95, 0.85, 0.8, 0.95, 0.85, 0.8],
      "velocityProfile": [0.9, 0.8, 0.75, 0.9, 0.8, 0.75],
      "density": "sparse",
      "phrasePosition": ["start", "middle"],
      "sectionUsage": ["intro", "verse", "chorus", "coda"],
      "variants": [],
      "provenance": "Authored for Amapiano Crossover tradition.",
      "authenticityTags": ["amapiano", "rhodes"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "log-drum pitch bending",
    "clean single-coil guitar muting",
    "hand-held shekere rolling",
    "horn section unisons"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "verse",
    "chorus",
    "solo",
    "coda"
  ],
  "relationships": [
    "shekere ↔ log drum (perpetual anchor interlock)",
    "guitar ↔ bass (counterpoint conversation)",
    "horns ↔ drums (accent punctuation)"
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
    "irresistible dance groove build with infectious sing-along melodic hooks and hypnotic log-drum drops",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "drums": [
      "snappy snare clap, dry punchy kick, and crisp tambourine/shekere shaker"
    ],
    "bass": [
      "round wooden log drum with FM synth bass low sub resonance"
    ],
    "guitar": [
      "ultra-clean Stratocaster in bridge/middle position through light chorus"
    ],
    "voice": [
      "hook-led vocal phrasing"
    ]
  },
  "combinations": [
    "Afrobeats + Kizomba",
    "Afrobeats + Hip-Hop",
    "Afrobeat + Jazz Fusion"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Syncopated Afrobeats pocket kick [0, 6, 10] with offbeat snare clap",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Kizomba ↔ Afrobeats (Afro-Kiz festival room)",
    "Afrobeats ↔ Global Urban Beat",
    "Afrobeats ↔ Funk (Fela Kuti / James Brown shared DNA)"
  ]
};
