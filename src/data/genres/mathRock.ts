import { GenreWorld } from '../../types';

export const MATH_ROCK_WORLD: GenreWorld = {
  "id": "math-rock",
  "name": "Math Rock",
  "family": "Progressive / Polymetric",
  "color": "#4e738c",
  "level": "world",
  "description": "Intricate, rhythmically adventurous guitar-forward music defined by two-hand fretboard tapping, odd time signatures (7/8, 11/8, 5/4), interlocking polymetric riffs, conversational bass counterpoint, and dynamic post-rock crescendos.",
  "traditions": [
    {
      "id": "math-rock-midwest-tapping",
      "worldId": "math-rock",
      "name": "Midwest Tapping",
      "origin": "American Midwest (Urbana / Chicago)",
      "era": "Late 1990s–2000s",
      "description": "Twinkly • Clean Tapping • Emo\nPolymetric clean two-hand guitar tapping.\nAmerican Football · TTNG",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "trumpet"
      ],
      "preferredMeters": [
        "7/8",
        "11/8",
        "4/4"
      ],
      "tempoRange": [
        110,
        140
      ],
      "keySubstyles": [
        "Twinkle Daddies",
        "Midwest Emo Math"
      ],
      "coreConcepts": [
        "two-handed clean fretboard tapping in open tunings (FACGCE)",
        "frequent time signature modulations (7/8 to 6/8 to 4/4)",
        "melancholic nostalgic vocal melodies and trumpet lines",
        "snappy intricate drum accents"
      ],
      "rhythmicGrammar": [
        "asymmetric odd-meter bar groupings (3+2+2) with displaced snare rimshots"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Clean open-tuned two-handed fretboard tapping run in 7/8 with off-grid snare rimshot",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Fmaj9",
          "Am9",
          "Gadd9",
          "Cadd9"
        ],
        "verse": [
          "Fmaj9",
          "Am9",
          "Gadd9",
          "Cadd9",
          "Fmaj9",
          "Am9",
          "Dm9",
          "Gadd9"
        ],
        "chorus": [
          "Dm9",
          "Em7",
          "Fmaj9",
          "Gadd9",
          "Dm9",
          "Em7",
          "Am9",
          "Am9"
        ],
        "coda": [
          "Fmaj9",
          "Gadd9",
          "Cadd9",
          "Cadd9"
        ]
      }
    },
    {
      "id": "math-rock-noise-rock",
      "worldId": "math-rock",
      "name": "Noise Rock",
      "origin": "Chicago / Providence / New York",
      "era": "1990s",
      "description": "Aggressive • Dissonant • Angular\nHeavy angular math with blistering feedback.\nShellac · The Jesus Lizard",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "5/4",
        "7/4",
        "4/4"
      ],
      "tempoRange": [
        120,
        160
      ],
      "keySubstyles": [
        "Albini Sound",
        "Angular Noise Math"
      ],
      "coreConcepts": [
        "abrasive treble-heavy aluminum guitar tones",
        "punishing metronomic Steve Albini drum punch",
        "dissonant major-second and tritone chord bites",
        "tense sardonic spoken/shouted vocals"
      ],
      "rhythmicGrammar": [
        "punishing odd-meter stops and starts with absolute silence between violent chord hits"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Abrasive dissonant guitar screech puncturing punishing odd-meter bass and drum impact",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "D5",
          "D#5",
          "D5",
          "G#5"
        ],
        "verse": [
          "D5",
          "D#5",
          "D5",
          "G#5",
          "D5",
          "F5",
          "E5",
          "D#5"
        ],
        "climax": [
          "D5",
          "D5",
          "G#5",
          "G#5"
        ],
        "coda": [
          "D5",
          "D5",
          "D5",
          "D5"
        ]
      }
    },
    {
      "id": "math-rock-japanese-math",
      "worldId": "math-rock",
      "name": "Japanese Math",
      "origin": "Tokyo / Kyoto, Japan",
      "era": "2000s–Present",
      "description": "Intricate • Melodic • High-Speed\nHyper-precise technical Japanese math rock.\ntoe · Tricot",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "acoustic-guitar",
        "voice"
      ],
      "preferredMeters": [
        "5/8",
        "7/8",
        "13/8",
        "4/4"
      ],
      "tempoRange": [
        125,
        165
      ],
      "keySubstyles": [
        "Japanese Instrumental Math",
        "J-Math Pop"
      ],
      "coreConcepts": [
        "hyper-athletic ghost-note drum mastery (Kashikura Takashi style)",
        "interlocking dual clean and driven guitars",
        "lyrical emotional melodic phrasing amidst metric chaos",
        "seamless transitions between odd meters"
      ],
      "rhythmicGrammar": [
        "rapid-fire 16th-note ghost snare drumming weaving through shifting 5/8 and 7/8 bar phrases"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Blisteringly fast ghost-snare drum roll underpinning intricate dual-guitar metric counterpoint",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dbmaj7",
          "Ebm7",
          "Fm7",
          "Gbmaj7"
        ],
        "verse": [
          "Dbmaj7",
          "Ebm7",
          "Fm7",
          "Gbmaj7",
          "Bbm7",
          "Ab",
          "Gbmaj7",
          "Gbmaj7"
        ],
        "chorus": [
          "Gbmaj7",
          "Ab",
          "Bbm7",
          "Fm7",
          "Gbmaj7",
          "Ab",
          "Dbmaj7",
          "Dbmaj7"
        ],
        "coda": [
          "Gbmaj7",
          "Ab",
          "Dbmaj7",
          "Dbmaj7"
        ]
      }
    },
    {
      "id": "math-rock-mathcore",
      "worldId": "math-rock",
      "name": "Mathcore",
      "origin": "New Jersey / Massachusetts",
      "era": "Late 1990s–2000s",
      "description": "Chaotic • Breakneck • Polytonal\nMetalcore pushed to mathematical extremes.\nThe Dillinger Escape Plan · Converge",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "13/16",
        "7/8",
        "9/8",
        "11/16"
      ],
      "tempoRange": [
        180,
        240
      ],
      "keySubstyles": [
        "Extreme Mathcore",
        "Chaotic Hardcore"
      ],
      "coreConcepts": [
        "16th-note odd-meter time signatures (13/16, 17/16)",
        "polytonal panic chords and pick-scrapes",
        "blistering blast beats and technical jazz fills",
        "ferocious vocal screaming"
      ],
      "rhythmicGrammar": [
        "erratic polyrhythmic metric shifts changing every 1-2 bars at extreme speeds"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "13/16 panic-chord guitar flurry colliding with lightning blast beat and screeching vocal scream",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "F#5",
          "G5",
          "F#5",
          "C5"
        ],
        "chaos": [
          "F#5",
          "G5",
          "F#5",
          "C5",
          "F#5",
          "F5",
          "E5",
          "Eb5"
        ],
        "coda": [
          "F#5",
          "F#5",
          "F#5",
          "F#5"
        ]
      }
    },
    {
      "id": "math-rock-post-rock",
      "worldId": "math-rock",
      "name": "Post-Rock",
      "origin": "Chicago / Louisville / UK",
      "era": "1990s–Present",
      "description": "Dynamic • Crescendo • Instrumental\nLong-form dynamic mathematical compositions.\nDon Caballero · Tortoise",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "vibraphone",
        "synth"
      ],
      "preferredMeters": [
        "4/4",
        "5/4",
        "7/8"
      ],
      "tempoRange": [
        90,
        130
      ],
      "keySubstyles": [
        "Chicago Post-Rock",
        "Instrumental Math"
      ],
      "coreConcepts": [
        "Damon Che powerhouse polymetric drumming",
        "layered looping guitar motifs building into massive walls of sound",
        "vibraphone and synth textural countermelodies",
        "cinematic dynamic architecture"
      ],
      "rhythmicGrammar": [
        "cyclical polymetric loops (e.g. 4 over 3) gradually developing over extended durations"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Polymetric drum ostinato supporting slowly unfolding guitar loop into explosive crescendo",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Em9",
          "Cmaj7",
          "G",
          "D"
        ],
        "build": [
          "Em9",
          "Cmaj7",
          "G",
          "D",
          "Em9",
          "Cmaj7",
          "Am7",
          "B7"
        ],
        "climax": [
          "Cmaj7",
          "D",
          "Em9",
          "G",
          "Cmaj7",
          "D",
          "Em9",
          "Em9"
        ],
        "coda": [
          "Cmaj7",
          "D",
          "Em9",
          "Em9"
        ]
      }
    },
    {
      "id": "math-rock-math-pop",
      "worldId": "math-rock",
      "name": "Math-Pop",
      "origin": "Oxford, UK / Global",
      "era": "2000s–Present",
      "description": "Danceable • Catchy • Polyrhythmic\nBright pop melodies over complex time signatures.\nFoals · Minus the Bear",
      "characteristicInstruments": [
        "electric-guitar",
        "synth",
        "bass",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "7/8",
        "5/4"
      ],
      "tempoRange": [
        120,
        145
      ],
      "keySubstyles": [
        "Indie Math Pop",
        "Glitch Pop Math"
      ],
      "coreConcepts": [
        "interlocking clean staccato guitar patterns",
        "driving dance-punk four-on-the-floor hi-hat beats",
        "catchy anthemic vocal hooks over metric shifts",
        "bright uplifting tonality"
      ],
      "rhythmicGrammar": [
        "danceable 4/4 drum pocket underlying interlocking 7/8 or 5/4 guitar riffs"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Catchy bright guitar interlocking riff dancing over driving four-on-the-floor hi-hat groove",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "A",
          "F#m",
          "D",
          "E"
        ],
        "verse": [
          "A",
          "F#m",
          "D",
          "E",
          "A",
          "F#m",
          "D",
          "E"
        ],
        "chorus": [
          "D",
          "E",
          "A",
          "F#m",
          "D",
          "E",
          "A",
          "A"
        ],
        "coda": [
          "D",
          "E",
          "A",
          "A"
        ]
      }
    },
    {
      "id": "math-rock-shoegaze",
      "worldId": "math-rock",
      "name": "Shoegaze",
      "origin": "UK / Japan / USA",
      "era": "2010s–Present",
      "description": "Reverb • Odd Meters • Wall of Sound\nAtmospheric wall-of-sound with tapping.\nCovet · Delta Sleep",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "synth",
        "voice"
      ],
      "preferredMeters": [
        "7/8",
        "6/8",
        "4/4"
      ],
      "tempoRange": [
        100,
        130
      ],
      "keySubstyles": [
        "Mathgaze",
        "Dream Math"
      ],
      "coreConcepts": [
        "Yvette Young clean fingerstyle tapping saturated in lush shimmering reverb and chorus",
        "dreamy ethereal vocals",
        "dynamic contrast between soft sparkle and heavy fuzz distortion",
        "expressive odd-meter phrasing"
      ],
      "rhythmicGrammar": [
        "flowing 6/8 and 7/8 compound meters enveloped in shimmering guitar delay repeats"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Shimmering two-hand tapped melody floating through lush reverb into massive fuzzy wall of sound",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Cmaj7#11",
          "Em9",
          "Fmaj7",
          "Gadd9"
        ],
        "verse": [
          "Cmaj7#11",
          "Em9",
          "Fmaj7",
          "Gadd9",
          "Cmaj7#11",
          "Em9",
          "Dm9",
          "Gadd9"
        ],
        "chorus": [
          "Fmaj7",
          "Gadd9",
          "Em9",
          "Am9",
          "Fmaj7",
          "Gadd9",
          "Cmaj7",
          "Cmaj7"
        ],
        "coda": [
          "Fmaj7",
          "Gadd9",
          "Cmaj7",
          "Cmaj7"
        ]
      }
    },
    {
      "id": "math-rock-progressive-rock",
      "worldId": "math-rock",
      "name": "Progressive Rock",
      "origin": "UK / USA",
      "era": "1970s–Present",
      "description": "Virtuosic • Complex Form • Heavy Riffs\nInstrumental prog rock precision.\nKing Crimson · CHON",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "synth"
      ],
      "preferredMeters": [
        "5/8",
        "7/8",
        "11/8",
        "12/8"
      ],
      "tempoRange": [
        115,
        150
      ],
      "keySubstyles": [
        "Technical Instrumental Prog",
        "Neo-Prog Math"
      ],
      "coreConcepts": [
        "blistering dual-guitar sweep picking and hybrid picking runs",
        "Robert Fripp interlocking polymetric guitars",
        "complex multi-part suite compositions",
        "virtuosic slap and tap electric basslines"
      ],
      "rhythmicGrammar": [
        "complex polymetric counterpoint (e.g. 5/8 against 7/8) executed with surgical synchronization"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Blisteringly synchronized dual-guitar sweep-picked arpeggio executing in 11/8 with drum crash",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "E5",
          "G5",
          "A5",
          "Bb5"
        ],
        "riff": [
          "E5",
          "G5",
          "A5",
          "Bb5",
          "E5",
          "G5",
          "F5",
          "D#5"
        ],
        "solo": [
          "Em9",
          "Fmaj7#11",
          "Am9",
          "B7alt",
          "Em9",
          "Fmaj7#11",
          "Cmaj7#11",
          "D7"
        ],
        "coda": [
          "E5",
          "Bb5",
          "E5",
          "E5"
        ]
      }
    }
  ],
  "substyles": [
    "Midwest Tapping",
    "Noise Rock",
    "Japanese Math",
    "Mathcore",
    "Post-Rock",
    "Math-Pop",
    "Shoegaze",
    "Progressive Rock"
  ],
  "artists": [
    "American Football",
    "TTNG",
    "Shellac",
    "The Jesus Lizard",
    "toe",
    "Tricot",
    "The Dillinger Escape Plan",
    "Converge",
    "Don Caballero",
    "Tortoise",
    "Foals",
    "Minus the Bear",
    "Covet",
    "Delta Sleep",
    "King Crimson",
    "CHON"
  ],
  "concepts": [
    "two-hand tapping",
    "odd-meter cycles (7/8, 11/8)",
    "open alternate tunings (FACGCE)",
    "polymeter (5 against 4)",
    "metric modulation",
    "clean tone sparkle",
    "dynamic crescendo"
  ],
  "roles": {
    "guitar": [
      "two-hand clean tapping arpeggios",
      "polymetric riffing",
      "tremolo swells"
    ],
    "bass": [
      "conversational tapped bassline",
      "odd-meter walking cells",
      "percussive thump"
    ],
    "drums": [
      "precise odd-meter ghost notes",
      "metric modulation fills",
      "building tom crescendos"
    ],
    "lead": [
      "angular tapped melodic lines",
      "soaring post-rock tremolo leads"
    ],
    "texture": [
      "ambient shimmer reverb swells",
      "delay washes"
    ]
  },
  "patterns": [
    {
      "id": "math-tapping-7-8",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Midwest Clean Tapped Arpeggio (7/8)",
      "family": "Math Guitar",
      "category": "ostinato",
      "description": "Intricate clean two-hand fretboard tapping cycling in 7/8 (grouped 2+2+3) with natural harmonics.",
      "tags": [
        "math-rock",
        "guitar",
        "tapping",
        "odd-meter",
        "clean"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "lead",
        "harmony",
        "guitar"
      ],
      "instruments": [
        "electric-guitar",
        "guitar"
      ],
      "meter": "7/8",
      "cycleLength": 1,
      "subdivisions": 14,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10,
        12
      ],
      "accentProfile": [
        1,
        0.65,
        0.9,
        0.6,
        0.95,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.85,
        0.55,
        0.9,
        0.65,
        0.8
      ],
      "articulations": [
        "hammer-on",
        "pull-off"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "math-tapping-7-8-v-02",
          "parentPatternId": "math-tapping-7-8",
          "name": "Midwest Clean Tapped Arpeggio (7/8) — accent shift",
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
            12
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.86,
            0.6799999999999999,
            0.9099999999999999,
            0.7799999999999999,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.83,
            0.6100000000000001,
            0.88,
            0.63,
            0.8600000000000001
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
      "provenance": "Math Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "math-rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "lead",
        "harmony"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "math-rock-interaction-1",
          "worldId": "math-rock",
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
      "id": "math-odd-meter-drums",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Odd-Meter Precision Kit Groove",
      "family": "Math Drums",
      "category": "groove",
      "description": "Punchy kick and ghosted snare accents locking with odd-meter guitar figures and open hi-hat barks.",
      "tags": [
        "math-rock",
        "drums",
        "odd-meter",
        "dynamic"
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
      "meter": "7/8",
      "cycleLength": 1,
      "subdivisions": 14,
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
        0.6,
        0.95,
        0.55,
        0.9,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.9,
        0.5,
        0.85,
        0.65,
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
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "math-odd-meter-drums-v-01",
          "parentPatternId": "math-odd-meter-drums",
          "name": "Odd-Meter Precision Kit Groove — sparse variation",
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
            0.5499999999999999,
            0.8999999999999999,
            0.5,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.8200000000000001,
            0.42,
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
          "id": "math-odd-meter-drums-v-02",
          "parentPatternId": "math-odd-meter-drums",
          "name": "Odd-Meter Precision Kit Groove — accent shift",
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
            0.6799999999999999,
            0.9099999999999999,
            0.63,
            0.86,
            0.7799999999999999,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.53,
            0.88,
            0.56,
            0.83,
            0.63,
            0.8600000000000001
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
      "provenance": "Math Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "math-rock"
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
          "id": "math-rock-interaction-2",
          "worldId": "math-rock",
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
      "id": "math-two-hand-bass",
      "worldId": "math-rock",
      "traditionId": "math-rock-prog-fusion",
      "name": "Conversational Tapped Bassline",
      "family": "Math Bass",
      "category": "ostinato",
      "description": "Melodic mid-range bass line with percussive fret-taps and counter-melodic responses to the lead guitar.",
      "tags": [
        "math-rock",
        "bass",
        "counterline",
        "melodic"
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
        "counterline"
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
        1,
        0.75,
        0.9,
        0.8,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
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
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "math-two-hand-bass-v-01",
          "parentPatternId": "math-two-hand-bass",
          "name": "Conversational Tapped Bassline — sparse variation",
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
            0.7,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77,
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
          "id": "math-two-hand-bass-v-02",
          "parentPatternId": "math-two-hand-bass",
          "name": "Conversational Tapped Bassline — accent shift",
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
            0.83,
            0.86,
            0.88,
            0.9099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.81,
            0.88,
            0.63
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
      "weight": 0.7,
      "provenance": "Math Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "math-rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass",
        "counterline"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "math-rock-interaction-3",
          "worldId": "math-rock",
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
      "id": "math-polymeter-interlock",
      "worldId": "math-rock",
      "traditionId": "math-rock-prog-fusion",
      "name": "Polymetric 5-Against-4 Guitar Ostinato",
      "family": "Math Guitar",
      "category": "ostinato",
      "description": "Repeated 5-sixteenth note guitar motif phase-shifting across 4/4 measure barlines.",
      "tags": [
        "math-rock",
        "guitar",
        "polymeter"
      ],
      "scopes": [
        "phrase",
        "region"
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
        5,
        10,
        15
      ],
      "accentProfile": [
        1,
        0.9,
        0.85,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.85,
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
        {
          "id": "math-polymeter-interlock-v-01",
          "parentPatternId": "math-polymeter-interlock",
          "name": "Polymetric 5-Against-4 Guitar Ostinato — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            10,
            15
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
          "id": "math-polymeter-interlock-v-02",
          "parentPatternId": "math-polymeter-interlock",
          "name": "Polymetric 5-Against-4 Guitar Ostinato — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            5,
            10,
            15
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.8099999999999999,
            0.88
          ],
          "velocityProfile": [
            1,
            0.83,
            0.78,
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
      "weight": 0.7,
      "provenance": "Math Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "math-rock"
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
          "id": "math-rock-interaction-4",
          "worldId": "math-rock",
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
      "id": "math-post-rock-crescendo",
      "worldId": "math-rock",
      "traditionId": "math-rock-post-rock",
      "name": "Post-Rock Tremolo & Swell",
      "family": "Post Rock",
      "category": "groove",
      "description": "Rapid tremolo picking and delay wash building emotional tension across multiple measures.",
      "tags": [
        "post-rock",
        "tremolo",
        "ambient",
        "guitar"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "lead",
        "texture"
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
        0.6,
        0.65,
        0.7,
        0.75,
        0.8,
        0.82,
        0.85,
        0.88,
        0.9,
        0.92,
        0.94,
        0.96,
        0.98,
        1,
        1,
        1
      ],
      "velocityProfile": [
        0.55,
        0.6,
        0.65,
        0.7,
        0.75,
        0.78,
        0.8,
        0.84,
        0.86,
        0.88,
        0.9,
        0.92,
        0.95,
        0.98,
        0.98,
        0.98
      ],
      "density": "dense",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "math-post-rock-crescendo-v-01",
          "parentPatternId": "math-post-rock-crescendo",
          "name": "Post-Rock Tremolo & Swell — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.5499999999999999,
            0.6,
            0.6499999999999999,
            0.7,
            0.75,
            0.7699999999999999,
            0.7999999999999999,
            0.83,
            0.85,
            0.87,
            0.8899999999999999
          ],
          "velocityProfile": [
            0.47000000000000003,
            0.52,
            0.5700000000000001,
            0.62,
            0.67,
            0.7000000000000001,
            0.7200000000000001,
            0.76,
            0.78,
            0.8,
            0.8200000000000001
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
          "id": "math-post-rock-crescendo-v-02",
          "parentPatternId": "math-post-rock-crescendo",
          "name": "Post-Rock Tremolo & Swell — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.5599999999999999,
            0.73,
            0.6599999999999999,
            0.83,
            0.76,
            0.8999999999999999,
            0.8099999999999999,
            0.96,
            0.86,
            1,
            0.8999999999999999,
            1,
            0.94,
            1,
            0.96,
            1
          ],
          "velocityProfile": [
            0.6100000000000001,
            0.58,
            0.63,
            0.76,
            0.73,
            0.76,
            0.8600000000000001,
            0.82,
            0.84,
            0.94,
            0.88,
            0.9,
            1,
            0.96,
            0.96,
            1
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
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 5,
      "weight": 1,
      "provenance": "Math Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "math-rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "lead",
        "texture"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "math-rock-interaction-5",
          "worldId": "math-rock",
          "sourceRole": "harmony",
          "targetRole": "lead",
          "relationship": "leaveSpace",
          "description": "Accompaniment thins when the instrumental lead enters.",
          "timingOffsetSteps": 0,
          "probability": 0.62
        }
      ],
      "articulations": [
        "legato"
      ]
    },
    {
      "id": "math-ambient-swell",
      "worldId": "math-rock",
      "traditionId": "math-rock-post-rock",
      "name": "Ambient Guitar Volume Swell",
      "family": "Atmosphere",
      "category": "cell",
      "description": "Ethereal volume pedal swells drenched in shimmer reverb behind the rhythmic interplay.",
      "tags": [
        "math-rock",
        "swell",
        "texture"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "texture"
      ],
      "instruments": [
        "synth",
        "electric-guitar"
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
        0.85,
        0.9,
        0.95
      ],
      "velocityProfile": [
        0.8,
        0.85,
        0.9
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "coda"
      ],
      "variants": [
        {
          "id": "math-ambient-swell-v-01",
          "parentPatternId": "math-ambient-swell",
          "name": "Ambient Guitar Volume Swell — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.7999999999999999,
            0.85
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "math-ambient-swell-v-02",
          "parentPatternId": "math-ambient-swell",
          "name": "Ambient Guitar Volume Swell — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            0.8099999999999999,
            0.98,
            0.9099999999999999
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.83,
            0.88
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
      "provenance": "Math Rock catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "math-rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "texture"
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
      "id": "math-rock-phrase-7",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Tap Riff Phrase",
      "family": "Tap Riff",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around polyrhythm and the tap riff vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "tap-riff",
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
        0,
        2,
        5,
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
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
          "id": "math-rock-phrase-7-v-01",
          "parentPatternId": "math-rock-phrase-7",
          "name": "Tap Riff Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5,
            8,
            13,
            15
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
          "id": "math-rock-phrase-7-v-02",
          "parentPatternId": "math-rock-phrase-7",
          "name": "Tap Riff Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            5,
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
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "tap-riff"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-call-8",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Polyrhythm Response",
      "family": "Polyrhythm",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around dynamic stops and the polyrhythm vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "polyrhythm",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "voice",
        "lead"
      ],
      "instruments": [
        "guitar",
        "bass"
      ],
      "compatibleRoles": [
        "voice",
        "lead"
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
        1,
        3,
        6,
        9,
        11,
        14
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
        0.8999999999999999,
        0.62,
        0.95
      ],
      "syncopationRating": 0.8571428571428571,
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
        "voice",
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "math-rock-call-8-v-01",
          "parentPatternId": "math-rock-call-8",
          "name": "Polyrhythm Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            6,
            11,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54,
            0.82
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
          "id": "math-rock-call-8-v-02",
          "parentPatternId": "math-rock-call-8",
          "name": "Polyrhythm Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            1,
            3,
            6,
            9,
            11,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999,
            0.8799999999999999,
            0.6,
            1
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
        },
        {
          "id": "math-rock-call-8-v-03",
          "parentPatternId": "math-rock-call-8",
          "name": "Polyrhythm Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            3,
            6,
            9,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.62,
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
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "polyrhythm"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-anchor-9",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Build Anchor",
      "family": "Build",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around counterpoint and the build vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "build",
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
        1,
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
      "syncopationRating": 0.7142857142857143,
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
          "id": "math-rock-anchor-9-v-01",
          "parentPatternId": "math-rock-anchor-9",
          "name": "Build Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            4,
            7,
            12,
            15
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
          "id": "math-rock-anchor-9-v-02",
          "parentPatternId": "math-rock-anchor-9",
          "name": "Build Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
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
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "build"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-comp-10",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Odd Meter Comping",
      "family": "Odd Meter",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around odd meter in Math Rock.",
      "tags": [
        "math-rock",
        "odd-meter",
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
        1,
        3,
        4,
        6,
        9,
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
      "syncopationRating": 0.7142857142857143,
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
          "id": "math-rock-comp-10-v-01",
          "parentPatternId": "math-rock-comp-10",
          "name": "Odd Meter Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            4,
            6,
            12,
            14
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
          "id": "math-rock-comp-10-v-02",
          "parentPatternId": "math-rock-comp-10",
          "name": "Odd Meter Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            3,
            4,
            6,
            9,
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
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "odd-meter"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "math-rock-intro-11",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Interlock Intro",
      "family": "Interlock",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around interlocking guitars and the interlock vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "interlock",
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
        2,
        4,
        7
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
      ],
      "syncopationRating": 0.5,
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
          "id": "math-rock-intro-11-v-01",
          "parentPatternId": "math-rock-intro-11",
          "name": "Interlock Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            7
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "math-rock-intro-11-v-02",
          "parentPatternId": "math-rock-intro-11",
          "name": "Interlock Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            4,
            7
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "math-rock-intro-11-v-03",
          "parentPatternId": "math-rock-intro-11",
          "name": "Interlock Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            4,
            7,
            14,
            15
          ],
          "accentProfile": [
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
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "interlock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-verse-12",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Tap Riff Verse Variation",
      "family": "Tap Riff",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around polyrhythm and the tap riff vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "tap-riff",
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
        3,
        5,
        8
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
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
          "id": "math-rock-verse-12-v-01",
          "parentPatternId": "math-rock-verse-12",
          "name": "Tap Riff Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            5,
            8
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "math-rock-verse-12-v-02",
          "parentPatternId": "math-rock-verse-12",
          "name": "Tap Riff Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            3,
            5,
            8
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "tap-riff"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "math-rock-chorus-13",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Polyrhythm Chorus Lift",
      "family": "Polyrhythm",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around dynamic stops and the polyrhythm vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "polyrhythm",
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
        4,
        6,
        9
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
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
          "id": "math-rock-chorus-13-v-01",
          "parentPatternId": "math-rock-chorus-13",
          "name": "Polyrhythm Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            6,
            9
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "math-rock-chorus-13-v-02",
          "parentPatternId": "math-rock-chorus-13",
          "name": "Polyrhythm Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            4,
            6,
            9
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "math-rock-chorus-13-v-03",
          "parentPatternId": "math-rock-chorus-13",
          "name": "Polyrhythm Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            4,
            6,
            9,
            14,
            15
          ],
          "accentProfile": [
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
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "polyrhythm"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-bridge-14",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Build Bridge",
      "family": "Build",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around counterpoint and the build vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "build",
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
        4,
        6,
        8,
        11
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
      ],
      "syncopationRating": 0.5,
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
          "id": "math-rock-bridge-14-v-01",
          "parentPatternId": "math-rock-bridge-14",
          "name": "Build Bridge — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            4,
            8,
            11
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "math-rock-bridge-14-v-02",
          "parentPatternId": "math-rock-bridge-14",
          "name": "Build Bridge — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            4,
            6,
            8,
            11
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "math-rock-bridge-14-v-03",
          "parentPatternId": "math-rock-bridge-14",
          "name": "Build Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            4,
            6,
            8,
            11,
            14,
            15
          ],
          "accentProfile": [
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
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "build"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-fill-15",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Odd Meter Fill",
      "family": "Odd Meter",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around odd meter in Math Rock.",
      "tags": [
        "math-rock",
        "odd-meter",
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
        1,
        3,
        5,
        7
      ],
      "accentProfile": [
        0.72,
        0.78,
        0.84,
        0.72,
        0.78
      ],
      "velocityProfile": [
        0.72,
        0.73,
        0.84,
        0.72,
        0.73
      ],
      "syncopationRating": 0.8,
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
          "id": "math-rock-fill-15-v-01",
          "parentPatternId": "math-rock-fill-15",
          "name": "Odd Meter Fill — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            5
          ],
          "accentProfile": [
            0.6699999999999999,
            0.73,
            0.7899999999999999
          ],
          "velocityProfile": [
            0.64,
            0.65,
            0.76
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "math-rock-fill-15-v-02",
          "parentPatternId": "math-rock-fill-15",
          "name": "Odd Meter Fill — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            1,
            3,
            5,
            7
          ],
          "accentProfile": [
            0.6799999999999999,
            0.86,
            0.7999999999999999,
            0.7999999999999999,
            0.74
          ],
          "velocityProfile": [
            0.78,
            0.71,
            0.82,
            0.78,
            0.71
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "math-rock-fill-15-v-03",
          "parentPatternId": "math-rock-fill-15",
          "name": "Odd Meter Fill — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            3,
            5,
            7,
            14,
            15
          ],
          "accentProfile": [
            0.7,
            0.76,
            0.82,
            0.7,
            0.76,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
            0.73,
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
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "odd-meter"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-break-16",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Interlock Break",
      "family": "Interlock",
      "category": "break",
      "description": "A deliberate drop in density for a breakdown or stop-time moment. Built around interlocking guitars and the interlock vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "interlock",
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
      "meter": "7/8",
      "cycleLength": 1,
      "subdivisions": 14,
      "onsetGrid": [
        1,
        2,
        4,
        5,
        7
      ],
      "accentProfile": [
        1,
        0.55,
        0.55,
        0.55,
        0.55
      ],
      "velocityProfile": [
        1,
        0.5,
        0.55,
        0.55,
        0.5
      ],
      "syncopationRating": 0.8,
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
          "id": "math-rock-break-16-v-01",
          "parentPatternId": "math-rock-break-16",
          "name": "Interlock Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            4,
            5
          ],
          "accentProfile": [
            0.95,
            0.5,
            0.5
          ],
          "velocityProfile": [
            0.92,
            0.42,
            0.47000000000000003
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "math-rock-break-16-v-02",
          "parentPatternId": "math-rock-break-16",
          "name": "Interlock Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            2,
            4,
            5,
            7
          ],
          "accentProfile": [
            0.96,
            0.63,
            0.51,
            0.63,
            0.51
          ],
          "velocityProfile": [
            1,
            0.48,
            0.53,
            0.6100000000000001,
            0.48
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "math-rock-break-16-v-03",
          "parentPatternId": "math-rock-break-16",
          "name": "Interlock Break — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            2,
            4,
            5,
            7,
            12,
            13
          ],
          "accentProfile": [
            0.98,
            0.53,
            0.53,
            0.53,
            0.53,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
            0.55,
            0.5,
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
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "interlock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "math-rock-cadence-17",
      "worldId": "math-rock",
      "traditionId": "math-rock-midwest",
      "name": "Tap Riff Cadence",
      "family": "Tap Riff",
      "category": "cadence",
      "description": "A phrase-ending cadence that gives the arrangement a clear point of release. Built around polyrhythm and the tap riff vocabulary of Math Rock.",
      "tags": [
        "math-rock",
        "tap-riff",
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
        2,
        3,
        5,
        7,
        9
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
      "syncopationRating": 1,
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
          "id": "math-rock-cadence-17-v-01",
          "parentPatternId": "math-rock-cadence-17",
          "name": "Tap Riff Cadence — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            5,
            7
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "math-rock-cadence-17-v-02",
          "parentPatternId": "math-rock-cadence-17",
          "name": "Tap Riff Cadence — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            3,
            5,
            7,
            9
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "math-rock-cadence-17-v-03",
          "parentPatternId": "math-rock-cadence-17",
          "name": "Tap Riff Cadence — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            3,
            5,
            7,
            9,
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
      "provenance": "GenreDAW catalog rebuild from existing Math Rock world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "math-rock",
        "tap-riff"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    }
  ],
  "techniques": [
    "two-hand fretboard tapping",
    "hybrid picking",
    "volume pedal swells",
    "polymetric rhythmic displacement",
    "ghost-note snare work"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "interlude",
    "verse",
    "solo",
    "coda"
  ],
  "relationships": [
    "guitar ↔ bass (two-hand counterpoint conversation)",
    "drums ↔ guitar (odd-meter accent lock)",
    "lead ↔ texture (ambient swell bed)"
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
    "dynamic arcs from whisper-quiet fingerpicking to massive math-rock climaxes",
    "subtle metric phase shifts that resolve every several bars",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "clean single-coil Fender Telecaster through chimey tube amp with analog delay"
    ],
    "bass": [
      "punchy active bass with bright roundwound strings for clear tapping attack"
    ],
    "drums": [
      "crisp maple snare with tight, articulate cymbals and punchy kick"
    ]
  },
  "combinations": [
    "Math Rock + Jazz Fusion",
    "Math Rock + Djent Metal",
    "Math Rock + Post-Rock Ambient"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "just-intonation",
  "signatureCell": "Additive odd-meter 7/8 cell [2+2+3] with clean tapped arpeggios",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Math Rock ↔ Metal (Djent)",
    "Math Rock ↔ Jazz Fusion",
    "Math Rock ↔ Electronic / IDM"
  ]
};
