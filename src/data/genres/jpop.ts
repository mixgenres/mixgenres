import { GenreWorld } from '../../types';

export const JPOP_WORLD: GenreWorld = {
  "id": "j-pop",
  "name": "J-Pop & City Pop",
  "family": "Japanese Pop & Rock Continuum",
  "color": "#c25e80",
  "level": "world",
  "description": "Japanese pop continuum spanning 1970s–80s City Pop (Tatsuro Yamashita, Mariya Takeuchi) with slap bass ostinatos, lush jazz 7th/9th Rhodes chords, and sparkling chorus guitars to high-energy J-Rock anime anthems.",
  "traditions": [
    {
      "id": "jpop-idol-pop",
      "worldId": "jpop",
      "name": "Idol Pop",
      "origin": "Tokyo, Japan",
      "era": "1980s–Present",
      "description": "Upbeat • Royal Road (Oudou) • Sparkle\nEnergetic, colorful Japanese idol anthems.\nAKB48 · Morning Musume",
      "characteristicInstruments": [
        "synth",
        "electric-guitar",
        "bass",
        "drums",
        "strings",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        128,
        160
      ],
      "keySubstyles": [
        "Oudou Idol",
        "Chika Idol Pop"
      ],
      "coreConcepts": [
        "\"Royal Road\" IV-V-iii-vi (Oudou) chord progression",
        "euphoric multi-member unison choral shouts",
        "sparkling synthesizer brass and chimes",
        "fast driving four-on-the-floor beat with rock guitar riffs"
      ],
      "rhythmicGrammar": [
        "driving 4-on-the-floor dance-rock beat with energetic snare fills and tambourine shakes"
      ],
      "danceTags": [
        "festival-fusion",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sparkling synth bells and overdrive guitar leading into classic Oudou IV-V-iii-vi chord progression",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
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
          "Am7",
          "Fmaj7",
          "G",
          "C",
          "C7"
        ],
        "chorus": [
          "Fmaj7",
          "G",
          "Em7",
          "Am7",
          "Dm7",
          "G",
          "C",
          "C"
        ],
        "coda": [
          "Fmaj7",
          "G",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "jpop-city-pop",
      "worldId": "jpop",
      "name": "City Pop",
      "origin": "Tokyo, Japan",
      "era": "Late 1970s–1980s",
      "description": "Sophisticated • Jazzy Chords • Seaside\nUrban nostalgic Japanese funk & pop.\nTatsuro Yamashita · Mariya Takeuchi",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "piano",
        "brass",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        105,
        124
      ],
      "keySubstyles": [
        "Resort Pop",
        "Urban AOR City Pop"
      ],
      "coreConcepts": [
        "jazz 9th and major 7th chord progressions",
        "crisp Nile Rodgers-inspired rhythm guitar chucking",
        "punchy horn section fanfares and sax solos",
        "luxurious high-end 80s studio production"
      ],
      "rhythmicGrammar": [
        "smooth 4/4 funk groove with tight snare backbeat, hi-hat 16ths, and slap bass accents"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Lush maj7/9th chord progression with clean funk guitar chucking and singing sax solo",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
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
          "Cmaj7",
          "Fmaj7",
          "Em7",
          "Am7",
          "Am7"
        ],
        "chorus": [
          "Bbmaj7",
          "Am7",
          "Gm7",
          "Fmaj7",
          "Dm7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ],
        "coda": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "Cmaj7"
        ]
      }
    },
    {
      "id": "jpop-denpa-kei",
      "worldId": "jpop",
      "name": "Denpa-kei",
      "origin": "Akihabara, Tokyo",
      "era": "2000s–Present",
      "description": "Hyper • Chiptune • Fast\nFrantic otaku anime subculture sound.\nMOSAIC.WAV · Dempagumi.inc",
      "characteristicInstruments": [
        "synth",
        "sampler",
        "drums",
        "electric-guitar",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        160,
        200
      ],
      "keySubstyles": [
        "Akiba Pop",
        "Chiptune Denpa"
      ],
      "coreConcepts": [
        "manic 180+ BPM tempos",
        "pitched squeaky vocal delivery and spoken dialogue skits",
        "8-bit chiptune sound effects and arpeggios",
        "chaotic tempo shifts and meme humor"
      ],
      "rhythmicGrammar": [
        "frantic 16th-note electronic beats with relentless high-speed kick and snare patterns"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Hyperactive 8-bit chiptune arpeggio bursting into 180 BPM manic vocal call",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G",
          "Am",
          "F"
        ],
        "verse": [
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F"
        ],
        "chorus": [
          "F",
          "G",
          "Em",
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
      "id": "jpop-shibuya-kei",
      "worldId": "jpop",
      "name": "Shibuya-kei",
      "origin": "Shibuya, Tokyo",
      "era": "1990s",
      "description": "Retro • Bossa Nova • Chic\nFrench pop and bossa inspired indie.\nPizzicato Five · Cornelius",
      "characteristicInstruments": [
        "acoustic-guitar",
        "sampler",
        "flute",
        "strings",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        130
      ],
      "keySubstyles": [
        "Picardy Shibuya-kei",
        "Cut-up Indie Pop"
      ],
      "coreConcepts": [
        "bossa nova guitar comping and French ye-ye pop motifs",
        "sampling collage aesthetics (60s soundtracks, lounge)",
        "stylish bilingual spoken/sung vocals",
        "chic breezy cosmopolitan atmosphere"
      ],
      "rhythmicGrammar": [
        "breezy bossa-pop drum groove with tambourine shimmer and walking bass"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Chic 60s French-pop flute riff over breezy bossa nova guitar comp and swinging bass",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Cmaj7",
          "Dm7",
          "Em7",
          "A7"
        ],
        "verse": [
          "Cmaj7",
          "Dm7",
          "Em7",
          "A7",
          "Dm7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ],
        "chorus": [
          "Fmaj7",
          "Fm7",
          "Em7",
          "A7",
          "Dm7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ],
        "coda": [
          "Fmaj7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ]
      }
    },
    {
      "id": "jpop-j-rnb",
      "worldId": "jpop",
      "name": "J-R&B",
      "origin": "Tokyo, Japan",
      "era": "Late 1990s–2000s",
      "description": "Smooth • Melismatic • Groovy\nSoulful, melismatic Japanese R&B vocals.\nHikaru Utada · MISIA",
      "characteristicInstruments": [
        "piano",
        "synth",
        "drums",
        "bass",
        "electric-guitar",
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
        "Late 90s J-Urban",
        "Contemporary J-Soul"
      ],
      "coreConcepts": [
        "virtuosic vocal runs and American R&B melisma in Japanese",
        "lush Rhodes piano 9th/11th chords",
        "warm syncopated drum machine beats",
        "emotional introspective lyricism"
      ],
      "rhythmicGrammar": [
        "relaxed 4/4 hip-hop/R&B drum pocket with warm bass syncopations and gentle finger-snaps"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Virtuosic vocal melisma gliding across rich minor 9th Rhodes chord and smooth R&B beat",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Bbm7",
          "Ebm7",
          "Ab7",
          "Dbmaj7"
        ],
        "verse": [
          "Bbm7",
          "Ebm7",
          "Ab7",
          "Dbmaj7",
          "Gbmaj7",
          "Ebm7",
          "F7",
          "F7"
        ],
        "chorus": [
          "Gbmaj7",
          "Ab",
          "Fm7",
          "Bbm7",
          "Ebm7",
          "F7",
          "Bbm7",
          "Bbm7"
        ],
        "coda": [
          "Gbmaj7",
          "F7",
          "Bbm7",
          "Bbm7"
        ]
      }
    },
    {
      "id": "jpop-electropop",
      "worldId": "jpop",
      "name": "Electropop",
      "origin": "Tokyo, Japan",
      "era": "2000s–Present",
      "description": "Vocoder • Four-on-the-Floor • Catchy\nFuturistic Yasutaka Nakata productions.\nPerfume · Kyary Pamyu Pamyu",
      "characteristicInstruments": [
        "synth",
        "drums",
        "sub-bass",
        "vocoder",
        "sampler"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        126,
        134
      ],
      "keySubstyles": [
        "Nakata Sound",
        "Capsule Electro Pop"
      ],
      "coreConcepts": [
        "heavily auto-tuned / vocoded robotic multi-vocal unisons",
        "pumping French electro sidechain compression",
        "bouncy saw-wave synthesizer riffs",
        "hyper-catchy repetitive chorus hooks"
      ],
      "rhythmicGrammar": [
        "pumping four-on-the-floor electro kick with crisp offbeat hats and synth bass sidechain"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Pumping sidechain electro bass drop with robotic three-part vocoder vocal hook",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
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
          "G",
          "Am",
          "F",
          "C",
          "G"
        ],
        "chorus": [
          "F",
          "G",
          "Am",
          "Em",
          "F",
          "G",
          "C",
          "C"
        ],
        "coda": [
          "F",
          "G",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "jpop-visual-kei",
      "worldId": "jpop",
      "name": "Visual Kei",
      "origin": "Tokyo / Osaka, Japan",
      "era": "1980s–Present",
      "description": "Theatrical • Heavy Rock • Dramatic\nGothic visual aesthetics with metal edge.\nX Japan · the GazettE",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "piano",
        "strings",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        140,
        185
      ],
      "keySubstyles": [
        "Tanbi-ha (Gothic VK)",
        "Kote-kei",
        "Nagoya-kei"
      ],
      "coreConcepts": [
        "dramatic classical piano and string orchestrations",
        "blistering dual-guitar speed-metal harmonies",
        "passionate theatrical high-register vocals",
        "dark romantic melodrama"
      ],
      "rhythmicGrammar": [
        "high-speed double-bass drum gallop alternating with dramatic slow classical pauses"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Dramatic grand piano arpeggio exploding into double-kick metal drums and screaming dual guitar solo",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
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
          "G",
          "C",
          "Dm",
          "Am",
          "B7",
          "E7"
        ],
        "chorus": [
          "F",
          "G",
          "Em",
          "Am",
          "Dm",
          "E7",
          "Am",
          "A7"
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
      "id": "jpop-enka",
      "worldId": "jpop",
      "name": "Enka",
      "origin": "Japan",
      "era": "Post-WWII / 1960s–Present",
      "description": "Melodramatic • Kobushi • Pentatonic\nTraditional-influenced sentimental ballads.\nHibari Misora · Saburo Kitajima",
      "characteristicInstruments": [
        "voice",
        "electric-guitar",
        "strings",
        "brass",
        "shakuhachi",
        "taiko"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        65,
        85
      ],
      "keySubstyles": [
        "Classic Postwar Enka",
        "Modern Enka"
      ],
      "coreConcepts": [
        "intense kobushi (vocal melismatic trembling and ornamentations)",
        "yonanuki minor pentatonic scale",
        "weeping Hawaiian/electric slide guitar fills",
        "sentimental themes of sea, tears, parting, and sake"
      ],
      "rhythmicGrammar": [
        "slow 4/4 ballad pulse with prominent brushed snare and dramatic orchestral pauses"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Trembling kobushi vocal phrase culminating in weeping electric guitar fill in yonanuki minor",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "verse": [
          "Am",
          "Dm",
          "E7",
          "Am",
          "Dm",
          "Am",
          "B7",
          "E7"
        ],
        "chorus": [
          "Dm",
          "Am",
          "E7",
          "Am",
          "Dm",
          "Am",
          "E7",
          "Am"
        ],
        "coda": [
          "Dm",
          "E7",
          "Am",
          "Am"
        ]
      }
    }
  ],
  "substyles": [
    "Idol Pop",
    "City Pop",
    "Denpa-kei",
    "Shibuya-kei",
    "J-R&B",
    "Electropop",
    "Visual Kei",
    "Enka"
  ],
  "artists": [
    "AKB48",
    "Morning Musume",
    "Tatsuro Yamashita",
    "Mariya Takeuchi",
    "MOSAIC.WAV",
    "Dempagumi.inc",
    "Pizzicato Five",
    "Cornelius",
    "Hikaru Utada",
    "MISIA",
    "Perfume",
    "Kyary Pamyu Pamyu",
    "X Japan",
    "the GazettE",
    "Hibari Misora",
    "Saburo Kitajima"
  ],
  "concepts": [
    "Oudou (royal road) chord progression (IV-V-iii-vi)",
    "syncopated slap bass thumbing",
    "lush major 7th and minor 9th chords",
    "chorus-drenched guitar chops",
    "tight studio backbeats"
  ],
  "roles": {
    "bass": [
      "syncopated slap & pop bass",
      "melodic driving 8th-note bassline"
    ],
    "guitar": [
      "chorus-drenched clean rhythm chops",
      "soaring anime rock lead melodies"
    ],
    "keys": [
      "Rhodes electric piano 9th chord comping",
      "sparkling digital bells"
    ],
    "drums": [
      "tight studio funk pocket kit",
      "driving double-time anime rock beat"
    ],
    "texture": [
      "warm chorus analog pad wash"
    ]
  },
  "patterns": [
    {
      "id": "jpop-city-slap-bass",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "City Pop Slap & Thumb Groove",
      "family": "City Pop Bass",
      "category": "groove",
      "description": "Crisp syncopated thumb slap and pop bassline in the style of Tatsuro Yamashita’s rhythm section.",
      "tags": [
        "city-pop",
        "bass",
        "slap",
        "funk",
        "japan"
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
        3,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.95,
        0.8,
        0.65,
        0.9,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
        0.75,
        0.6,
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
        {
          "id": "jpop-city-slap-bass-v-01",
          "parentPatternId": "jpop-city-slap-bass",
          "name": "City Pop Slap & Thumb Groove — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.8999999999999999,
            0.75,
            0.6
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.8200000000000001,
            0.67,
            0.52
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
          "id": "jpop-city-slap-bass-v-02",
          "parentPatternId": "jpop-city-slap-bass",
          "name": "City Pop Slap & Thumb Groove — accent shift",
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
            14
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.9099999999999999,
            0.88,
            0.61,
            0.98,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.88,
            0.81,
            0.58,
            0.83,
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
      "provenance": "J-Pop & City Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "j-pop"
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
          "id": "j-pop-interaction-1",
          "worldId": "j-pop",
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
      "id": "jpop-city-guitar-chops",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "City Pop Clean Rhythm Chops",
      "family": "City Pop Guitar",
      "category": "ostinato",
      "description": "Pristine chorus-pedal clean electric guitar playing syncopated 16th-note funk chops.",
      "tags": [
        "city-pop",
        "guitar",
        "chops",
        "chorus"
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
        "electric-guitar",
        "guitar"
      ],
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
        0.85,
        0.95,
        0.7,
        0.9,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.8,
        0.9,
        0.65,
        0.85,
        0.9,
        0.7
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
          "id": "jpop-city-guitar-chops-v-01",
          "parentPatternId": "jpop-city-guitar-chops",
          "name": "City Pop Clean Rhythm Chops — sparse variation",
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
            0.7999999999999999,
            0.8999999999999999,
            0.6499999999999999,
            0.85
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.8200000000000001,
            0.5700000000000001,
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
          "id": "jpop-city-guitar-chops-v-02",
          "parentPatternId": "jpop-city-guitar-chops",
          "name": "City Pop Clean Rhythm Chops — accent shift",
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
            0.8099999999999999,
            1,
            0.6599999999999999,
            0.98,
            0.9099999999999999,
            0.83
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.88,
            0.63,
            0.9099999999999999,
            0.88,
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
      "weight": 0.7,
      "provenance": "J-Pop & City Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "j-pop"
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
          "id": "j-pop-interaction-2",
          "worldId": "j-pop",
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
      "id": "jpop-city-rhodes-comp",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Jazzy 7th/9th Electric Piano Comping",
      "family": "Keys",
      "category": "groove",
      "description": "Smooth Rhodes electric piano voicing lush major 7th and minor 9th extensions.",
      "tags": [
        "city-pop",
        "keys",
        "rhodes",
        "jazz"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "harmony",
        "keys"
      ],
      "instruments": [
        "keys",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        8,
        14
      ],
      "accentProfile": [
        0.95,
        0.8,
        0.9,
        0.75
      ],
      "velocityProfile": [
        0.9,
        0.75,
        0.85,
        0.7
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jpop-city-rhodes-comp-v-01",
          "parentPatternId": "jpop-city-rhodes-comp",
          "name": "Jazzy 7th/9th Electric Piano Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.67,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jpop-city-rhodes-comp-v-02",
          "parentPatternId": "jpop-city-rhodes-comp",
          "name": "Jazzy 7th/9th Electric Piano Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.88,
            0.86,
            0.83
          ],
          "velocityProfile": [
            0.96,
            0.73,
            0.83,
            0.76
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
      "provenance": "J-Pop & City Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "j-pop"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "j-pop-interaction-3",
          "worldId": "j-pop",
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
      "id": "jpop-city-pocket-drums",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Tokyo Studio Funk Pocket Kit",
      "family": "Drums",
      "category": "groove",
      "description": "Tight studio kit with dry fat snare on 2 & 4, crisp 16th hi-hats, and punchy kick.",
      "tags": [
        "city-pop",
        "drums",
        "funk",
        "groove"
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
        2,
        4,
        6,
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.65,
        0.95,
        0.65,
        0.9,
        0.65,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.9,
        0.6,
        0.85,
        0.6,
        0.9,
        0.7
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
          "id": "jpop-city-pocket-drums-v-01",
          "parentPatternId": "jpop-city-pocket-drums",
          "name": "Tokyo Studio Funk Pocket Kit — sparse variation",
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
          "id": "jpop-city-pocket-drums-v-02",
          "parentPatternId": "jpop-city-pocket-drums",
          "name": "Tokyo Studio Funk Pocket Kit — accent shift",
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
            15
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.9099999999999999,
            0.73,
            0.86,
            0.73,
            0.9099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.58,
            0.88,
            0.6599999999999999,
            0.83,
            0.58,
            0.96,
            0.6799999999999999
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
      "provenance": "J-Pop & City Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "j-pop"
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
      "id": "jpop-jrock-driving-bass",
      "worldId": "j-pop",
      "traditionId": "jpop-jrock",
      "name": "J-Rock Melodic Driving 8th Bass",
      "family": "J-Rock Bass",
      "category": "ostinato",
      "description": "Relentless driving eighth-note bassline with melodic scale fills leading into the chorus.",
      "tags": [
        "j-rock",
        "bass",
        "driving",
        "anime"
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
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.75,
        0.95,
        0.75,
        0.9,
        0.8,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.7,
        0.9,
        0.7,
        0.85,
        0.75,
        0.65
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
          "id": "jpop-jrock-driving-bass-v-01",
          "parentPatternId": "jpop-jrock-driving-bass",
          "name": "J-Rock Melodic Driving 8th Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.85,
            0.7,
            0.8999999999999999,
            0.7
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77,
            0.62,
            0.8200000000000001,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "jpop-jrock-driving-bass-v-02",
          "parentPatternId": "jpop-jrock-driving-bass",
          "name": "J-Rock Melodic Driving 8th Bass — accent shift",
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
            15
          ],
          "accentProfile": [
            0.96,
            0.83,
            0.86,
            0.83,
            0.9099999999999999,
            0.83,
            0.86,
            0.88,
            0.6599999999999999
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.76,
            0.88,
            0.6799999999999999,
            0.9099999999999999,
            0.73,
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
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 0.7,
      "provenance": "J-Pop & City Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "j-pop"
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
      "id": "jpop-lush-synth-pad",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Chorus-Drenched Analog Synth Wash",
      "family": "Pad",
      "category": "cell",
      "description": "Warm, sparkling 80s analog synth pad bed (Roland Juno style) sustaining under the mix.",
      "tags": [
        "city-pop",
        "synth",
        "pad",
        "wash"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "texture"
      ],
      "instruments": [
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        8
      ],
      "accentProfile": [
        0.85,
        0.9
      ],
      "velocityProfile": [
        0.8,
        0.85
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
        {
          "id": "jpop-lush-synth-pad-v-01-safe",
          "parentPatternId": "jpop-lush-synth-pad",
          "name": "Chorus-Drenched Analog Synth Wash — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.7999999999999999,
            0.98
          ],
          "velocityProfile": [
            0.8300000000000001,
            0.8099999999999999
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "jpop-lush-synth-pad-v-02-safe",
          "parentPatternId": "jpop-lush-synth-pad",
          "name": "Chorus-Drenched Analog Synth Wash — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.7999999999999999,
            0.98
          ],
          "velocityProfile": [
            0.8300000000000001,
            0.8099999999999999
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
      "weight": 0.7,
      "provenance": "J-Pop & City Pop catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "j-pop"
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
      "id": "j-pop-phrase-7",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Pre-Chorus Phrase",
      "family": "Pre-Chorus",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around bright guitars and the pre-chorus vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "pre-chorus",
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
          "id": "j-pop-phrase-7-v-01",
          "parentPatternId": "j-pop-phrase-7",
          "name": "Pre-Chorus Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5,
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
          "id": "j-pop-phrase-7-v-02",
          "parentPatternId": "j-pop-phrase-7",
          "name": "Pre-Chorus Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            5,
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "pre-chorus"
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
      "id": "j-pop-call-8",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Lift Response",
      "family": "Lift",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around pre-chorus lift and the lift vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "lift",
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
        0,
        1,
        3,
        6,
        8,
        11,
        13
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
      "syncopationRating": 0.7142857142857143,
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
          "id": "j-pop-call-8-v-01",
          "parentPatternId": "j-pop-call-8",
          "name": "Lift Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            6,
            11,
            13
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
          "id": "j-pop-call-8-v-02",
          "parentPatternId": "j-pop-call-8",
          "name": "Lift Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            1,
            3,
            6,
            8,
            11,
            13
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
          "id": "j-pop-call-8-v-03",
          "parentPatternId": "j-pop-call-8",
          "name": "Lift Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            3,
            6,
            8,
            11,
            13,
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
            0.62,
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
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "lift"
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
      "id": "j-pop-anchor-9",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Lead Anchor",
      "family": "Lead",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around synth hook and the lead vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
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
        1,
        2,
        4,
        7,
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
          "id": "j-pop-anchor-9-v-01",
          "parentPatternId": "j-pop-anchor-9",
          "name": "Lead Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            4,
            7,
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
          "id": "j-pop-anchor-9-v-02",
          "parentPatternId": "j-pop-anchor-9",
          "name": "Lead Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            2,
            4,
            7,
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
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
      "id": "j-pop-comp-10",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "City Pop Comping",
      "family": "City Pop",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around vocal melody and the city pop vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "city-pop",
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
        "keys"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "keys"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        9,
        11,
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
          "id": "j-pop-comp-10-v-01",
          "parentPatternId": "j-pop-comp-10",
          "name": "City Pop Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6,
            11,
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
          "id": "j-pop-comp-10-v-02",
          "parentPatternId": "j-pop-comp-10",
          "name": "City Pop Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            9,
            11,
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "city-pop"
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
      "id": "j-pop-intro-11",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Vocal Hook Intro",
      "family": "Vocal Hook",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around city-pop bass and the vocal hook vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "vocal-hook",
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
        "keys"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "guitar",
        "keys"
      ],
      "canCrossRole": true,
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
          "id": "j-pop-intro-11-v-01",
          "parentPatternId": "j-pop-intro-11",
          "name": "Vocal Hook Intro — sparse variation",
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
          "id": "j-pop-intro-11-v-02",
          "parentPatternId": "j-pop-intro-11",
          "name": "Vocal Hook Intro — accent shift",
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
        },
        {
          "id": "j-pop-intro-11-v-03",
          "parentPatternId": "j-pop-intro-11",
          "name": "Vocal Hook Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            3,
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "vocal-hook"
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
      "id": "j-pop-verse-12",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Pre-Chorus Verse Variation",
      "family": "Pre-Chorus",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around bright guitars and the pre-chorus vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "pre-chorus",
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
        1,
        4,
        7,
        9,
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
          "id": "j-pop-verse-12-v-01",
          "parentPatternId": "j-pop-verse-12",
          "name": "Pre-Chorus Verse Variation — sparse variation",
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
          "id": "j-pop-verse-12-v-02",
          "parentPatternId": "j-pop-verse-12",
          "name": "Pre-Chorus Verse Variation — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "pre-chorus"
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
      "id": "j-pop-chorus-13",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Lift Chorus Lift",
      "family": "Lift",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around pre-chorus lift and the lift vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "lift",
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
          "id": "j-pop-chorus-13-v-01",
          "parentPatternId": "j-pop-chorus-13",
          "name": "Lift Chorus Lift — sparse variation",
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
          "id": "j-pop-chorus-13-v-02",
          "parentPatternId": "j-pop-chorus-13",
          "name": "Lift Chorus Lift — accent shift",
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
        },
        {
          "id": "j-pop-chorus-13-v-03",
          "parentPatternId": "j-pop-chorus-13",
          "name": "Lift Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            5,
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "lift"
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
      "id": "j-pop-fill-14",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Lead Fill",
      "family": "Lead",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around synth hook and the lead vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "lead",
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
        0.72,
        0.78,
        0.84,
        0.72,
        0.78,
        0.84,
        1,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        0.84,
        0.72,
        0.73,
        0.84,
        1,
        0.95
      ],
      "syncopationRating": 0.75,
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
          "id": "j-pop-fill-14-v-01",
          "parentPatternId": "j-pop-fill-14",
          "name": "Lead Fill — sparse variation",
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
            0.6699999999999999,
            0.73,
            0.7899999999999999,
            0.6699999999999999,
            0.73
          ],
          "velocityProfile": [
            0.64,
            0.65,
            0.76,
            0.64,
            0.65
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
          "id": "j-pop-fill-14-v-02",
          "parentPatternId": "j-pop-fill-14",
          "name": "Lead Fill — accent shift",
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
            0.6799999999999999,
            0.86,
            0.7999999999999999,
            0.7999999999999999,
            0.74,
            0.9199999999999999,
            0.96,
            1
          ],
          "velocityProfile": [
            0.78,
            0.71,
            0.82,
            0.78,
            0.71,
            0.82,
            1,
            0.9299999999999999
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
          "id": "j-pop-fill-14-v-03",
          "parentPatternId": "j-pop-fill-14",
          "name": "Lead Fill — transition variation",
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
            0.7,
            0.76,
            0.82,
            0.7,
            0.76,
            0.82,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
            0.73,
            0.84,
            1,
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
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
      "id": "j-pop-break-15",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "City Pop Break",
      "family": "City Pop",
      "category": "break",
      "description": "A deliberate drop in density for a breakdown or stop-time moment. Built around vocal melody and the city pop vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "city-pop",
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
        0.55,
        0.55,
        0.55,
        0.55,
        1,
        1,
        1
      ],
      "velocityProfile": [
        1,
        0.5,
        0.55,
        0.55,
        0.5,
        1,
        1,
        0.95
      ],
      "syncopationRating": 0.75,
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
          "id": "j-pop-break-15-v-01",
          "parentPatternId": "j-pop-break-15",
          "name": "City Pop Break — sparse variation",
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
            0.5,
            0.5,
            0.5,
            0.5
          ],
          "velocityProfile": [
            0.92,
            0.42,
            0.47000000000000003,
            0.47000000000000003,
            0.42
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
          "id": "j-pop-break-15-v-02",
          "parentPatternId": "j-pop-break-15",
          "name": "City Pop Break — accent shift",
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
            0.63,
            0.51,
            0.63,
            0.51,
            1,
            0.96,
            1
          ],
          "velocityProfile": [
            1,
            0.48,
            0.53,
            0.6100000000000001,
            0.48,
            0.98,
            1,
            0.9299999999999999
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
          "id": "j-pop-break-15-v-03",
          "parentPatternId": "j-pop-break-15",
          "name": "City Pop Break — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            4,
            5,
            7,
            10,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.53,
            0.53,
            0.53,
            0.53,
            0.98,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
            0.55,
            0.5,
            1,
            1,
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "city-pop"
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
      "id": "j-pop-cadence-16",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "Vocal Hook Cadence",
      "family": "Vocal Hook",
      "category": "cadence",
      "description": "A phrase-ending cadence that gives the arrangement a clear point of release. Built around city-pop bass and the vocal hook vocabulary of J-Pop & City Pop.",
      "tags": [
        "j-pop",
        "vocal-hook",
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
        "keys",
        "bass"
      ],
      "compatibleRoles": [
        "harmony",
        "bass"
      ],
      "compatibleInstruments": [
        "guitar",
        "keys",
        "bass"
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
          "id": "j-pop-cadence-16-v-01",
          "parentPatternId": "j-pop-cadence-16",
          "name": "Vocal Hook Cadence — sparse variation",
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
          "id": "j-pop-cadence-16-v-02",
          "parentPatternId": "j-pop-cadence-16",
          "name": "Vocal Hook Cadence — accent shift",
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
          "id": "j-pop-cadence-16-v-03",
          "parentPatternId": "j-pop-cadence-16",
          "name": "Vocal Hook Cadence — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing J-Pop & City Pop world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "j-pop",
        "vocal-hook"
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
      "id": "j-pop-voice-phrasing",
      "worldId": "j-pop",
      "traditionId": "jpop-city-pop",
      "name": "J-Pop Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Lead-vocal hook placement for verse, pre-chorus, and chorus lift without filling every subdivision.",
      "tags": [
        "j-pop",
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
          "id": "j-pop-voice-phrasing-v-voice-alt",
          "parentPatternId": "j-pop-voice-phrasing",
          "name": "J-Pop Vocal Phrasing — alternate phrasing",
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
          "id": "j-pop-voice-phrasing-v-final-accent",
          "parentPatternId": "j-pop-voice-phrasing",
          "name": "J-Pop Vocal Phrasing — accent shift",
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for J-Pop & City Pop.",
      "authenticityTags": [
        "j-pop",
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
    "slap-and-pop bass thumbing",
    "clean single-coil picking with stereo chorus",
    "extended jazz harmony comping"
  ],
  "forms": [
    "intro",
    "verse",
    "pre-chorus",
    "chorus",
    "verse",
    "chorus",
    "solo",
    "coda"
  ],
  "relationships": [
    "bass ↔ kick (slap lock)",
    "guitar chops ↔ snare (offbeat funk interplay)",
    "keys ↔ vocals (extended harmonic support)"
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
    "sophisticated, upbeat groove balancing melancholy lyricism with ultra-danceable funk and pop pocket",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "bass": [
      "active 4-string bass with scooped mids for punchy slap and bright pop"
    ],
    "guitar": [
      "vintage Fender Stratocaster in positions 2 & 4 through analog chorus pedal"
    ],
    "keys": [
      "Fender Rhodes Mark I or Roland Juno-106 analog synth"
    ],
    "voice": [
      "lead-vocal melody placement"
    ],
    "synth": [
      "pop hook and pad support"
    ]
  },
  "combinations": [
    "City Pop + Funk/Soul",
    "J-Rock + Math Rock",
    "City Pop + Neo-Soul"
  ],
  "danceTags": [
    "social-partner",
    "wcs-compatible",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Jazzy major 7th comping with 16th-note slap bass groove",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Funk ↔ J-Pop (City Pop)",
    "J-Rock ↔ Math Rock",
    "J-Pop ↔ Swing / WCS"
  ]
};
