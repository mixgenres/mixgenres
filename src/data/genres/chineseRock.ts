import { GenreWorld } from '../../types';

export const CHINESE_ROCK_WORLD: GenreWorld = {
  "id": "chinese-rock",
  "name": "Chinese Rock & Pop",
  "family": "Mandopop / Cantopop / Chinese Rock",
  "color": "#c44536",
  "level": "world",
  "description": "Chinese-language rock and pop continuum: from Hong Kong’s passionate 1980s–90s Canto-rock (Beyond) to Taiwanese Mandopop arena-rock anthems (Mayday 五月天), featuring intimate acoustic verses, soaring electric guitar leads, and monumental chorus builds.",
  "traditions": [
    {
      "id": "chinese-rock-yaogun",
      "worldId": "chinese-rock",
      "name": "Yaogun",
      "origin": "Beijing, China",
      "era": "1986–1990s",
      "description": "Gravelly Voice • Red Horn • Revolution\nThe birth of Chinese rock music.\nCui Jian · Dou Wei",
      "characteristicInstruments": [
        "electric-guitar",
        "suona",
        "trumpet",
        "bass",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        135
      ],
      "keySubstyles": [
        "Classic Beijing Yaogun",
        "Pioneering Chinese Rock"
      ],
      "coreConcepts": [
        "Cui Jian passionate vocal delivery of generational truth",
        "piercing suona and brass horn countermelodies",
        "driving post-punk power chords",
        "poetic social awakening"
      ],
      "rhythmicGrammar": [
        "driving 4/4 rock beat with four-on-the-floor bass drum and piercing snare on 2 and 4"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Piercing suona horn cry answering Cui Jian vocal over driving hard rock guitar power chord",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
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
          "E7",
          "Am",
          "G",
          "F",
          "E7"
        ],
        "chorus": [
          "F",
          "G",
          "Am",
          "Em",
          "F",
          "G",
          "Am",
          "Am"
        ],
        "coda": [
          "F",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "chinese-rock-folk-rock",
      "worldId": "chinese-rock",
      "name": "Folk Rock",
      "origin": "Beijing / Lanzhou / Inner Mongolia",
      "era": "2000s–Present",
      "description": "Matouqin • Throat Singing • Desert Rock\nNomadic folk instruments with heavy rock.\nHanggai · Omnipotent Youth Society",
      "characteristicInstruments": [
        "morin-khuur",
        "erhu",
        "acoustic-guitar",
        "electric-guitar",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "6/8"
      ],
      "tempoRange": [
        90,
        128
      ],
      "keySubstyles": [
        "Mongolian Nomad Rock",
        "Hebei Chamber Folk Rock"
      ],
      "coreConcepts": [
        "horsehead fiddle (morin khuur) and throat singing (khoomei)",
        "poetic literary Chinese lyrics",
        "chamber rock orchestrations",
        "sweeping nostalgic melancholy"
      ],
      "rhythmicGrammar": [
        "galloping compound 6/8 and 4/4 nomadic rhythms driving underneath soaring folk strings"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Deep khoomei throat singing and horsehead fiddle lead driving into powerful rock chorus",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "C",
          "Bb",
          "A"
        ],
        "verse": [
          "Dm",
          "C",
          "Bb",
          "A",
          "Dm",
          "C",
          "Bb",
          "Dm"
        ],
        "chorus": [
          "F",
          "C",
          "Dm",
          "Am",
          "Bb",
          "C",
          "Dm",
          "Dm"
        ],
        "coda": [
          "Bb",
          "C",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "chinese-rock-punk-yaogun",
      "worldId": "chinese-rock",
      "name": "Punk Yaogun",
      "origin": "Beijing (Wudaokou / D-22)",
      "era": "Late 1990s–2000s",
      "description": "Fast Downstrokes • Raw Energy • D-22\nBeijing underground punk rebellion.\nReflector · Brain Failure",
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
        165,
        210
      ],
      "keySubstyles": [
        "Beijing Skate Punk",
        "Wudaokou Hardcore"
      ],
      "coreConcepts": [
        "high-speed 8th-note downpicked guitar power chords",
        "urgent shouted vocals in Mandarin and English",
        "snappy drum beat with fast snare cracks on 2 and 4",
        "youthful defiance"
      ],
      "rhythmicGrammar": [
        "fast straight 4/4 punk beat with relentless open hi-hat and driving bass downpicks"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Rapid \"Yi-Er-San-Si!\" count-in launching into blistering 190 BPM three-chord punk anthem",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "F",
          "G",
          "C"
        ],
        "verse": [
          "C",
          "F",
          "G",
          "C",
          "C",
          "F",
          "G",
          "C"
        ],
        "chorus": [
          "F",
          "G",
          "C",
          "Am",
          "F",
          "G",
          "C",
          "C"
        ],
        "coda": [
          "F",
          "G",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "chinese-rock-pop-rock",
      "worldId": "chinese-rock",
      "name": "Pop Rock",
      "origin": "Hong Kong / Taipei / Beijing",
      "era": "1980s–Present",
      "description": "Stadium Anthems • Acoustic & Electric • Singalong\nGreater China stadium rock anthems.\nBeyond · Mayday",
      "characteristicInstruments": [
        "electric-guitar",
        "acoustic-guitar",
        "bass",
        "drums",
        "piano",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        95,
        125
      ],
      "keySubstyles": [
        "Cantorock",
        "Mandopop Stadium Rock"
      ],
      "coreConcepts": [
        "unforgettable melodic vocal anthems (\"Boundless Oceans, Vast Skies\")",
        "soaring pentatonic electric guitar solos",
        "acoustic rhythm guitar layering with grand piano chords",
        "themes of freedom and perseverance"
      ],
      "rhythmicGrammar": [
        "steady uplifting 4/4 stadium rock beat with driving snare and sparkling ride cymbal"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Triumphant stadium chorus vocal anthem singing out over crying Stratocaster lead and power chords",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G",
          "Am",
          "Em",
          "F",
          "C",
          "F",
          "G"
        ],
        "verse": [
          "C",
          "G",
          "Am",
          "Em",
          "F",
          "C",
          "F",
          "G"
        ],
        "chorus": [
          "F",
          "G",
          "Em",
          "Am",
          "F",
          "G",
          "C",
          "C7"
        ],
        "coda": [
          "F",
          "G",
          "C",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Yaogun",
    "Folk Rock",
    "Punk Yaogun",
    "Pop Rock"
  ],
  "artists": [
    "Cui Jian",
    "Dou Wei",
    "Hanggai",
    "Omnipotent Youth Society",
    "Reflector",
    "Brain Failure",
    "Beyond",
    "Mayday"
  ],
  "concepts": [
    "extreme verse-to-chorus dynamic layering",
    "soaring pentatonic electric guitar hooks",
    "orchestral string section swells",
    "anthemic sing-along vocal hooks"
  ],
  "roles": {
    "bass": [
      "arena ballad root-fifth bass",
      "driving 8th-note rock bass"
    ],
    "guitar": [
      "gentle acoustic fingerpicking",
      "distorted arena power chords",
      "soaring pentatonic leads"
    ],
    "drums": [
      "intimate verse cross-stick into thunderous chorus crash"
    ],
    "texture": [
      "lush orchestral string pad swells"
    ]
  },
  "patterns": [
    {
      "id": "crock-anthemic-bass",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Arena Ballad Root-Fifth Bass",
      "family": "Chinese Rock Bass",
      "category": "groove",
      "description": "Solid root-fifth bassline anchoring dynamic build from soft acoustic verses into explosive choruses.",
      "tags": [
        "chinese-rock",
        "mandopop",
        "bass",
        "arena"
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
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.75,
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
        {
          "id": "crock-anthemic-bass-v-01",
          "parentPatternId": "crock-anthemic-bass",
          "name": "Arena Ballad Root-Fifth Bass — sparse variation",
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
        {
          "id": "crock-anthemic-bass-v-02",
          "parentPatternId": "crock-anthemic-bass",
          "name": "Arena Ballad Root-Fifth Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.83,
            0.86,
            0.88,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.81,
            0.78
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
      "provenance": "Chinese Rock & Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "chinese-rock"
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
          "id": "chinese-rock-interaction-1",
          "worldId": "chinese-rock",
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
      "id": "crock-acoustic-verse-strum",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Mandopop Acoustic Verse Strum",
      "family": "Acoustic Guitar",
      "category": "groove",
      "description": "Gentle steel-string acoustic guitar arpeggiation and light strumming providing intimate warmth during the verse.",
      "tags": [
        "mandopop",
        "acoustic",
        "guitar",
        "strum"
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
        "guitar"
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
        0.7,
        0.85,
        0.8,
        0.75,
        0.9
      ],
      "velocityProfile": [
        0.85,
        0.65,
        0.8,
        0.75,
        0.7,
        0.85
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse"
      ],
      "variants": [
        {
          "id": "crock-acoustic-verse-strum-v-01",
          "parentPatternId": "crock-acoustic-verse-strum",
          "name": "Mandopop Acoustic Verse Strum — sparse variation",
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
            0.85,
            0.6499999999999999,
            0.7999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.77,
            0.5700000000000001,
            0.7200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "crock-acoustic-verse-strum-v-02",
          "parentPatternId": "crock-acoustic-verse-strum",
          "name": "Mandopop Acoustic Verse Strum — accent shift",
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
            0.86,
            0.7799999999999999,
            0.8099999999999999,
            0.88,
            0.71,
            0.98
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.63,
            0.78,
            0.81,
            0.6799999999999999,
            0.83
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
      "provenance": "Chinese Rock & Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "chinese-rock"
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
          "id": "chinese-rock-interaction-2",
          "worldId": "chinese-rock",
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
      "id": "crock-power-chorus-guitar",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Arena Chorus Power Chords",
      "family": "Electric Guitar",
      "category": "groove",
      "description": "Distorted electric guitar power chords ringing out with full sustain across the chorus.",
      "tags": [
        "chinese-rock",
        "guitar",
        "power-chords",
        "distorted"
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
        "electric-guitar"
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
        0.85,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.85
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "crock-power-chorus-guitar-v-01",
          "parentPatternId": "crock-power-chorus-guitar",
          "name": "Arena Chorus Power Chords — sparse variation",
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
          "id": "crock-power-chorus-guitar-v-02",
          "parentPatternId": "crock-power-chorus-guitar",
          "name": "Arena Chorus Power Chords — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.78,
            0.88,
            0.9099999999999999
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
      "provenance": "Chinese Rock & Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "chinese-rock"
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
          "id": "chinese-rock-interaction-3",
          "worldId": "chinese-rock",
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
      "id": "crock-canto-lead-solo",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-cantorock",
      "name": "Beyond-Style Pentatonic Lead Hook",
      "family": "Lead Guitar",
      "category": "ostinato",
      "description": "Soaring major/minor pentatonic electric guitar lead melody with singing vibrato and double-stops.",
      "tags": [
        "canto-rock",
        "lead",
        "guitar",
        "beyond",
        "solo"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "lead"
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
        6,
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.8,
        0.7,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.75,
        0.65,
        0.9,
        0.75
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "crock-canto-lead-solo-v-01",
          "parentPatternId": "crock-canto-lead-solo",
          "name": "Beyond-Style Pentatonic Lead Hook — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            8,
            12,
            15
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.85,
            0.75,
            0.6499999999999999
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77,
            0.67,
            0.5700000000000001
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
          "id": "crock-canto-lead-solo-v-02",
          "parentPatternId": "crock-canto-lead-solo",
          "name": "Beyond-Style Pentatonic Lead Hook — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            0.83,
            0.86,
            0.88,
            0.6599999999999999,
            1,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.81,
            0.63,
            0.88,
            0.81
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
      "weight": 0.7,
      "provenance": "Chinese Rock & Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "chinese-rock"
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
      "interactionRules": [
        {
          "id": "chinese-rock-interaction-4",
          "worldId": "chinese-rock",
          "sourceRole": "bass",
          "targetRole": "drums",
          "relationship": "accentWith",
          "description": "Bass accents align with selected kick/backbeat events for a tighter pocket.",
          "timingOffsetSteps": 0,
          "probability": 0.65
        }
      ],
      "articulations": [
        "legato"
      ]
    },
    {
      "id": "crock-dynamic-drums",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Dynamic Arena Rock Drum Build",
      "family": "Drums",
      "category": "groove",
      "description": "Soft cross-stick and hi-hat during verses building into heavy backbeat snare and crash cymbals in choruses.",
      "tags": [
        "chinese-rock",
        "drums",
        "rock",
        "build"
      ],
      "scopes": [
        "measure",
        "phrase"
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
        4,
        8,
        12,
        10
      ],
      "accentProfile": [
        1,
        0.9,
        0.85,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.8,
        0.9,
        0.7
      ],
      "density": "medium",
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
          "id": "crock-dynamic-drums-v-01",
          "parentPatternId": "crock-dynamic-drums",
          "name": "Dynamic Arena Rock Drum Build — sparse variation",
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
            0.85,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.77,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "crock-dynamic-drums-v-02",
          "parentPatternId": "crock-dynamic-drums",
          "name": "Dynamic Arena Rock Drum Build — accent shift",
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
            0.98,
            0.8099999999999999,
            1,
            0.71
          ],
          "velocityProfile": [
            1,
            0.83,
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
      "provenance": "Chinese Rock & Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "chinese-rock"
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
          "id": "chinese-rock-interaction-5",
          "worldId": "chinese-rock",
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
      "id": "crock-cantorock-driving-bass",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-cantorock",
      "name": "Canto-Rock Driving Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Syncopated driving rock bass in the Beyond / classic Canto-rock tradition, pushing ahead of the beat beneath soaring guitar leads.",
      "tags": [
        "chinese-rock",
        "cantorock",
        "bass",
        "drive"
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        7,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.7,
        0.95,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.65,
        0.9,
        0.8,
        0.7
      ],
      "density": "dense",
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
          "id": "crock-cantorock-driving-bass-v-01",
          "parentPatternId": "crock-cantorock-driving-bass",
          "name": "Canto-Rock Driving Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            7,
            8,
            14
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001,
            0.5700000000000001,
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
          "id": "crock-cantorock-driving-bass-v-02",
          "parentPatternId": "crock-cantorock-driving-bass",
          "name": "Canto-Rock Driving Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.6599999999999999,
            1,
            0.8099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.78,
            0.63,
            0.96,
            0.78,
            0.6799999999999999
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
      "provenance": "Chinese Rock & Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "chinese-rock"
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
      "id": "chinese-rock-roster-strings",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Chinese Rock & Pop strings part",
      "family": "Bridge",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives this genre an authored part for one of its declared instruments. Built around power-ballad build and the bridge vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "bridge",
        "roster",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "lead"
      ],
      "instruments": [
        "strings",
        "violin"
      ],
      "compatibleRoles": [
        "lead"
      ],
      "compatibleInstruments": [
        "strings",
        "violin"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        10,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.72,
        0.72,
        1,
        0.72,
        0.72
      ],
      "velocityProfile": [
        0.95,
        0.68,
        0.68,
        0.95,
        0.68,
        0.68
      ],
      "syncopationRating": 0.6666666666666666,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
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
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "chinese-rock-roster-7-v-01",
          "parentPatternId": "chinese-rock-roster-7",
          "name": "Bridge Texture — sparse variation",
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
          "id": "chinese-rock-roster-7-v-02",
          "parentPatternId": "chinese-rock-roster-7",
          "name": "Bridge Texture — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "bridge"
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
      "id": "chinese-rock-call-8",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "String Lift Response",
      "family": "String Lift",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around Chinese pop phrasing and the string lift vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "string-lift",
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
      "instruments": [
        "voice"
      ],
      "compatibleRoles": [
        "voice"
      ],
      "compatibleInstruments": [
        "voice"
      ],
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
          "id": "chinese-rock-call-8-v-01",
          "parentPatternId": "chinese-rock-call-8",
          "name": "String Lift Response — sparse variation",
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
          "id": "chinese-rock-call-8-v-02",
          "parentPatternId": "chinese-rock-call-8",
          "name": "String Lift Response — accent shift",
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
          "id": "chinese-rock-call-8-v-03",
          "parentPatternId": "chinese-rock-call-8",
          "name": "String Lift Response — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "string-lift"
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
      "id": "chinese-rock-anchor-9",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Lead Anchor",
      "family": "Lead",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around guitar bridge and the lead vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "lead",
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
          "id": "chinese-rock-anchor-9-v-01",
          "parentPatternId": "chinese-rock-anchor-9",
          "name": "Lead Anchor — sparse variation",
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
          "id": "chinese-rock-anchor-9-v-02",
          "parentPatternId": "chinese-rock-anchor-9",
          "name": "Lead Anchor — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "lead"
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
      "id": "chinese-rock-comp-10",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Mandopop Hook Comping",
      "family": "Mandopop Hook",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around vocal hook and the mandopop hook vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "mandopop-hook",
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
        "strings"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "strings"
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
      "syncopationRating": 0.6666666666666666,
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
        {
          "id": "chinese-rock-comp-10-v-01",
          "parentPatternId": "chinese-rock-comp-10",
          "name": "Mandopop Hook Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            7,
            10,
            15
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
          "id": "chinese-rock-comp-10-v-02",
          "parentPatternId": "chinese-rock-comp-10",
          "name": "Mandopop Hook Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            4,
            7,
            10,
            12,
            15
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "mandopop-hook"
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
      "id": "chinese-rock-intro-11",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Power Ballad Intro",
      "family": "Power Ballad",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around string lift and the power ballad vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "power-ballad",
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
        "guitar",
        "strings"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "guitar",
        "strings"
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
          "id": "chinese-rock-intro-11-v-01",
          "parentPatternId": "chinese-rock-intro-11",
          "name": "Power Ballad Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            4,
            6,
            11,
            12
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
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
          "id": "chinese-rock-intro-11-v-02",
          "parentPatternId": "chinese-rock-intro-11",
          "name": "Power Ballad Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
        },
        {
          "id": "chinese-rock-intro-11-v-03",
          "parentPatternId": "chinese-rock-intro-11",
          "name": "Power Ballad Intro — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "power-ballad"
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
      "id": "chinese-rock-verse-12",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Bridge Verse Variation",
      "family": "Bridge",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around power-ballad build and the bridge vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "bridge",
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
        {
          "id": "chinese-rock-verse-12-v-01",
          "parentPatternId": "chinese-rock-verse-12",
          "name": "Bridge Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            5,
            7,
            12,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
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
          "id": "chinese-rock-verse-12-v-02",
          "parentPatternId": "chinese-rock-verse-12",
          "name": "Bridge Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "bridge"
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
      "id": "chinese-rock-chorus-13",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "String Lift Chorus Lift",
      "family": "String Lift",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around Chinese pop phrasing and the string lift vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "string-lift",
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
          "id": "chinese-rock-chorus-13-v-01",
          "parentPatternId": "chinese-rock-chorus-13",
          "name": "String Lift Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5,
            6,
            11,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
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
          "id": "chinese-rock-chorus-13-v-02",
          "parentPatternId": "chinese-rock-chorus-13",
          "name": "String Lift Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
        },
        {
          "id": "chinese-rock-chorus-13-v-03",
          "parentPatternId": "chinese-rock-chorus-13",
          "name": "String Lift Chorus Lift — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "string-lift"
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
      "id": "chinese-rock-bridge-14",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Lead Bridge",
      "family": "Lead",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around guitar bridge and the lead vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "lead",
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
        "guitar",
        "strings"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
      ],
      "compatibleInstruments": [
        "guitar",
        "strings"
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
          "id": "chinese-rock-bridge-14-v-01",
          "parentPatternId": "chinese-rock-bridge-14",
          "name": "Lead Bridge — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5,
            7,
            10,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
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
          "id": "chinese-rock-bridge-14-v-02",
          "parentPatternId": "chinese-rock-bridge-14",
          "name": "Lead Bridge — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
        },
        {
          "id": "chinese-rock-bridge-14-v-03",
          "parentPatternId": "chinese-rock-bridge-14",
          "name": "Lead Bridge — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
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
      "id": "chinese-rock-fill-15",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Mandopop Hook Fill",
      "family": "Mandopop Hook",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around vocal hook and the mandopop hook vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "mandopop-hook",
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
          "id": "chinese-rock-fill-15-v-01",
          "parentPatternId": "chinese-rock-fill-15",
          "name": "Mandopop Hook Fill — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.6699999999999999,
            0.73,
            0.7899999999999999,
            0.6699999999999999
          ],
          "velocityProfile": [
            0.64,
            0.65,
            0.76,
            0.64
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "chinese-rock-fill-15-v-02",
          "parentPatternId": "chinese-rock-fill-15",
          "name": "Mandopop Hook Fill — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.6799999999999999,
            0.86,
            0.7999999999999999,
            0.7999999999999999,
            0.96,
            1
          ],
          "velocityProfile": [
            0.78,
            0.71,
            0.82,
            0.78,
            0.9299999999999999,
            0.98
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
          "id": "chinese-rock-fill-15-v-03",
          "parentPatternId": "chinese-rock-fill-15",
          "name": "Mandopop Hook Fill — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "mandopop-hook"
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
      "id": "chinese-rock-break-16",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Power Ballad Break",
      "family": "Power Ballad",
      "category": "break",
      "description": "A deliberate drop in density for a breakdown or stop-time moment. Built around string lift and the power ballad vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "power-ballad",
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
          "id": "chinese-rock-break-16-v-01",
          "parentPatternId": "chinese-rock-break-16",
          "name": "Power Ballad Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            7,
            11,
            15
          ],
          "accentProfile": [
            0.95,
            0.5,
            0.5,
            0.5
          ],
          "velocityProfile": [
            0.92,
            0.42,
            0.47000000000000003,
            0.47000000000000003
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "chinese-rock-break-16-v-02",
          "parentPatternId": "chinese-rock-break-16",
          "name": "Power Ballad Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.96,
            0.63,
            0.51,
            0.63,
            0.96,
            1
          ],
          "velocityProfile": [
            1,
            0.48,
            0.53,
            0.6100000000000001,
            0.9299999999999999,
            0.98
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
          "id": "chinese-rock-break-16-v-03",
          "parentPatternId": "chinese-rock-break-16",
          "name": "Power Ballad Break — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Chinese Rock & Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "chinese-rock",
        "power-ballad"
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
      "id": "chinese-rock-voice-phrasing",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Chinese Rock Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Lead-vocal pop-rock phrase template with clear breath points and chorus-hook spacing.",
      "tags": [
        "chinese-rock",
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
      "instruments": [
        "voice"
      ],
      "compatibleRoles": [
        "voice",
        "lead"
      ],
      "compatibleInstruments": [
        "voice"
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
          "id": "chinese-rock-voice-phrasing-v-voice-alt",
          "parentPatternId": "chinese-rock-voice-phrasing",
          "name": "Chinese Rock Vocal Phrasing — alternate phrasing",
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
        {
          "id": "chinese-rock-voice-phrasing-v-final-accent",
          "parentPatternId": "chinese-rock-voice-phrasing",
          "name": "Chinese Rock Vocal Phrasing — accent shift",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "Same rhythmic shape with shifted emphasis on the repeat.",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.7,
            0.8999999999999999,
            0.7,
            0.8999999999999999,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.9,
            0.58,
            0.9,
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Chinese Rock & Pop.",
      "authenticityTags": [
        "chinese-rock",
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
    "dynamic acoustic-to-electric layering",
    "singing pentatonic guitar bends",
    "orchestral string arrangement swells"
  ],
  "forms": [
    "intro",
    "verse",
    "pre-chorus",
    "chorus",
    "verse",
    "chorus",
    "solo",
    "chorus",
    "coda"
  ],
  "relationships": [
    "acoustic guitar ↔ piano (gentle verse bed)",
    "electric guitar ↔ strings (massive chorus crescendo)",
    "bass ↔ drums (rock foundation)"
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
    "dynamic narrative journey starting with whispered acoustic reflections and culminating in cathartic, arena-wide sing-along choruses",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "Gibson Les Paul through Marshall JCM800 for soaring leads and heavy chorus power chords"
    ],
    "bass": [
      "Fender Precision Bass for deep, punchy root notes"
    ],
    "strings": [
      "warm analog string ensemble or high-register violin countermelody"
    ],
    "voice": [
      "lead-vocal pop-rock phrasing"
    ]
  },
  "combinations": [
    "Chinese Rock + Post-Rock",
    "Canto-Rock + Blues",
    "Mandopop + Orchestral Ballad"
  ],
  "danceTags": [
    "listening",
    "festival-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Dynamic acoustic verse arpeggio blossoming into soaring anthemic chorus",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Rock ↔ Chinese Rock",
    "Chinese Rock ↔ Post-Rock / Math Rock"
  ]
};
