import { GenreWorld } from '../../types';

export const FUSION_AMBIENT_WORLD: GenreWorld = {
  "id": "fusion-ambient",
  "name": "Fusion & Ambient Dance",
  "family": "Fusion Dance / Downtempo Electronic",
  "color": "#5b8296",
  "level": "world",
  "description": "The sonic meeting ground for modern partner Fusion dancing, Blues fusion, and contemporary West Coast Swing: Bonobo-style organic downtempo, deep sub-bass drones, intimate felt piano arpeggios, and expansive cinematic soundscapes designed for intuitive physical connection.",
  "traditions": [
    {
      "id": "fusion-ambient-drone",
      "worldId": "fusion-ambient",
      "name": "Drone",
      "origin": "New York / Global",
      "era": "1960s–Present",
      "description": "Sustained • Resonant • Meditative\nDeep continuous harmonic vibrations.\nLa Monte Young · Sunn O)))",
      "characteristicInstruments": [
        "drone",
        "synth",
        "guitar",
        "bowed-strings",
        "modular-synth"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        30,
        50
      ],
      "keySubstyles": [
        "Minimalist Drone",
        "Heavy Guitar Drone"
      ],
      "coreConcepts": [
        "microtonal beatings between sustained fundamental frequencies",
        "infinite sustain and overtone series resonance",
        "timbral shift over harmonic movement",
        "deep meditative concentration"
      ],
      "rhythmicGrammar": [
        "completely unmetered sound continuous in time"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Deep sustained resonant low drone with shimmering microtonal acoustic overtones",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "theme": [
          "C",
          "C",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "fusion-ambient-dark-ambient",
      "worldId": "fusion-ambient",
      "name": "Dark Ambient",
      "origin": "Sweden / UK / Germany",
      "era": "1980s–Present",
      "description": "Ominous • Cavernous • Foreboding\nIndustrial, gothic soundscapes.\nLustmord · Raison d'être",
      "characteristicInstruments": [
        "sampler",
        "synth",
        "drone",
        "low-percussion"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        35,
        55
      ],
      "keySubstyles": [
        "Industrial Dark Ambient",
        "Ritual Ambient"
      ],
      "coreConcepts": [
        "sub-audible low rumble frequencies",
        "cavernous industrial reverb impulses",
        "foreboding metallic scrapings and distant choirs",
        "claustrophobic psychological tension"
      ],
      "rhythmicGrammar": [
        "sporadic thunderous sub-bass impacts echoing into deep spatial darkness"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Cavernous sub-audible bass rumble echoing behind distant bowed metallic screeches",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "theme": [
          "Em",
          "Em",
          "C",
          "B7",
          "Em",
          "Em",
          "Am",
          "Em"
        ]
      }
    },
    {
      "id": "fusion-ambient-space-music",
      "worldId": "fusion-ambient",
      "name": "Space Music",
      "origin": "Germany / USA",
      "era": "1970s–Present",
      "description": "Cosmic • Synthesizer • Floating\nCosmic analog journeys to the stars.\nKlaus Schulze · Steve Roach",
      "characteristicInstruments": [
        "synth",
        "modular-synth",
        "sampler",
        "drone"
      ],
      "preferredMeters": [
        "free",
        "4/4"
      ],
      "tempoRange": [
        50,
        75
      ],
      "keySubstyles": [
        "Berlin School Space Ambient",
        "Cosmic Synthesizer"
      ],
      "coreConcepts": [
        "cascading analog step-sequencer arpeggios",
        "sweeping resonant filter sweeps",
        "stellar white noise sweeps and delays",
        "weightless floating sensation"
      ],
      "rhythmicGrammar": [
        "gentle hypnotic 16th-note analog sequencer pulses floating without heavy drums"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Gentle hypnotic analog synth sequencer line floating through cosmic delay and filter sweep",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "theme": [
          "Dm9",
          "Fmaj7",
          "Am9",
          "Gadd9",
          "Bbmaj7",
          "C",
          "Dm9",
          "Dm9"
        ]
      }
    },
    {
      "id": "fusion-ambient-lo-fi-ambient",
      "worldId": "fusion-ambient",
      "name": "Lo-Fi Ambient",
      "origin": "Internet / Global",
      "era": "2010s–Present",
      "description": "Warm • Tape Warble • Nostalgic\nCassette degraded peaceful textures.\nWilliam Basinski · Grouper",
      "characteristicInstruments": [
        "sampler",
        "tape-loop",
        "piano",
        "guitar",
        "synth"
      ],
      "preferredMeters": [
        "free",
        "4/4"
      ],
      "tempoRange": [
        55,
        75
      ],
      "keySubstyles": [
        "Tape Decay Ambient",
        "Hauntology"
      ],
      "coreConcepts": [
        "cassette tape wow-and-flutter and hiss",
        "disintegrating acoustic piano loops",
        "warm analog saturation",
        "melancholic nostalgic memories of childhood"
      ],
      "rhythmicGrammar": [
        "cyclical tape loop repetitions slowly degrading in timbre with each cycle"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Warm degraded piano tape loop warbling gently with tape hiss and crackle",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "loop": [
          "Fmaj7",
          "Cmaj7",
          "Am7",
          "G"
        ]
      }
    },
    {
      "id": "fusion-ambient-field-recordings",
      "worldId": "fusion-ambient",
      "name": "Field Recordings",
      "origin": "Global Natural / Urban Environments",
      "era": "20th Century–Present",
      "description": "Environmental • Organic • Pure\nSoundscapes captured from nature.\nChris Watson · Francisco López",
      "characteristicInstruments": [
        "sampler",
        "field-recording",
        "acoustic-instruments"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        40,
        60
      ],
      "keySubstyles": [
        "Bioacoustics",
        "Soundscape Ecology",
        "Phonography"
      ],
      "coreConcepts": [
        "pristine environmental audio captures (rainforest, ocean, arctic wind)",
        "micro-sounds of wildlife and water",
        "unprocessed natural acoustic depth",
        "active listening immersion"
      ],
      "rhythmicGrammar": [
        "organic natural rhythms of rainfall, ocean surf, insect chirps, and wind gusts"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Immersive binaural forest rainfall blending seamlessly with subtle tonal wind resonance",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "soundscape": [
          "C",
          "C",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "fusion-ambient-illbient",
      "worldId": "fusion-ambient",
      "name": "Illbient",
      "origin": "Brooklyn, New York",
      "era": "1990s",
      "description": "Dubby • Grimy • Hip-hop\nBrooklyn underground dub-ambient hybrid.\nDJ Spooky · We™",
      "characteristicInstruments": [
        "sampler",
        "drums",
        "sub-bass",
        "turntables",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        70,
        88
      ],
      "keySubstyles": [
        "Brooklyn Illbient",
        "Experimental Dub"
      ],
      "coreConcepts": [
        "slow mutated hip-hop drum loops",
        "deep cavernous dub delay feeds",
        "avant-garde vinyl turntable collages",
        "grimy urban subterranean mood"
      ],
      "rhythmicGrammar": [
        "sluggish fractured breakbeat surrounded by heavy spatial dub echoes and sub-bass"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Fractured hip-hop drum break mutating through cavernous space echo and dark sub-bass",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "groove": [
          "Cm",
          "Ab",
          "Fm",
          "G7",
          "Cm",
          "Ab",
          "Bb",
          "G7"
        ]
      }
    },
    {
      "id": "fusion-ambient-isolationist",
      "worldId": "fusion-ambient",
      "name": "Isolationist",
      "origin": "UK / Europe",
      "era": "Early 1990s",
      "description": "Cold • Bleak • Distant\nChilly, desolate sound architecture.\nThomas Köner · Lull",
      "characteristicInstruments": [
        "sampler",
        "synth",
        "drone",
        "low-percussion"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        30,
        50
      ],
      "keySubstyles": [
        "Arctic Ambient",
        "Isolationism"
      ],
      "coreConcepts": [
        "extreme low-frequency sub-bass waves",
        "arctic wind and frozen metallic reverberations",
        "total absence of melodic warmth or sentimentality",
        "bleak spatial emptiness"
      ],
      "rhythmicGrammar": [
        "glacial unmetered flow with immense silence gaps between micro-events"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Glacial sub-bass wave slowly rolling beneath distant icy metallic gong resonance",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "drift": [
          "Am",
          "Am",
          "F",
          "Em"
        ]
      }
    },
    {
      "id": "fusion-ambient-dub-ambient",
      "worldId": "fusion-ambient",
      "name": "Dub Ambient",
      "origin": "Berlin / Detroit",
      "era": "1990s–Present",
      "description": "Echo • Filtered Chords • Sub-bass\nSpacious dub chords and deep space.\nBasic Channel · Deepchord",
      "characteristicInstruments": [
        "synth",
        "sub-bass",
        "sampler",
        "drums",
        "tape-echo"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        122
      ],
      "keySubstyles": [
        "Dub Techno Ambient",
        "Echospace"
      ],
      "coreConcepts": [
        "heavily filtered analog minor chord stabs (noise + resonance)",
        "infinite Roland Space Echo feedback loops",
        "warm vinyl noise and tape hiss blankets",
        "deep rolling sub-bass foundation"
      ],
      "rhythmicGrammar": [
        "subtle 4-on-the-floor kick muffled under dense analog hiss with dub chord falling on 2-and or 4"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Filtered minor chord stab shooting into infinite tape delay over deep warm sub-bass",
      "grooveMechanics": {
        "swingPercentage": 50,
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
        "flow": [
          "Dm7",
          "Dm7",
          "Gm7",
          "Dm7",
          "Dm7",
          "Dm7",
          "Bbmaj7",
          "Am7"
        ],
        "coda": [
          "Dm7",
          "Dm7",
          "Dm7",
          "Dm7"
        ]
      }
    }
  ],
  "substyles": [
    "Drone",
    "Dark Ambient",
    "Space Music",
    "Lo-Fi Ambient",
    "Field Recordings",
    "Illbient",
    "Isolationist",
    "Dub Ambient"
  ],
  "artists": [
    "La Monte Young",
    "Sunn O)))",
    "Lustmord",
    "Raison d'être",
    "Klaus Schulze",
    "Steve Roach",
    "William Basinski",
    "Grouper",
    "Chris Watson",
    "Francisco López",
    "DJ Spooky",
    "We™",
    "Thomas Köner",
    "Lull",
    "Basic Channel",
    "Deepchord"
  ],
  "concepts": [
    "deep breathing sub-bass drones",
    "organic textured percussion (udu, seeds, shakers)",
    "intimate felt piano",
    "ambient modal volume swells",
    "negative space for partner dance connection"
  ],
  "roles": {
    "bass": [
      "slow breathing sub-bass drone",
      "world-fusion syncopated bass hybrid"
    ],
    "drums": [
      "downtempo pocket & ghost kit",
      "minimal glitch-edited groove"
    ],
    "guitar": [
      "ambient modal volume swells",
      "organic acoustic fingerstyle"
    ],
    "keys": [
      "felt piano intimate arpeggiations",
      "airy Rhodes comping"
    ],
    "percussion": [
      "organic shaker and clay drum interlock",
      "world hand-percussion layers"
    ],
    "texture": [
      "granular ambient atmosphere wash"
    ]
  },
  "patterns": [
    {
      "id": "fusion-sub-drone-bass",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Slow Breathing Sub-Bass Drone",
      "family": "Fusion Bass",
      "category": "ostinato",
      "description": "Deep, warm analog sub-bass drone providing an immovable anchor for slow partner dance isolations.",
      "tags": [
        "fusion",
        "ambient",
        "bass",
        "sub-bass",
        "drone"
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
        8
      ],
      "accentProfile": [
        1,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "coda"
      ],
      "variants": [
        {
          "id": "fusion-sub-drone-bass-v-01-safe",
          "parentPatternId": "fusion-sub-drone-bass",
          "name": "Slow Breathing Sub-Bass Drone — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.95,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.98,
            0.76
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "fusion-sub-drone-bass-v-02-safe",
          "parentPatternId": "fusion-sub-drone-bass",
          "name": "Slow Breathing Sub-Bass Drone — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.95,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.98,
            0.76
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
      "provenance": "Fusion & Ambient Dance catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-1",
          "worldId": "fusion-ambient",
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
      "id": "fusion-downtempo-glitch-kit",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Downtempo Pocket & Ghost Kit",
      "family": "Fusion Drums",
      "category": "groove",
      "description": "Slow, dusty downtempo hip-hop drum beat with micro-timed ghost snares and soft kick drops.",
      "tags": [
        "downtempo",
        "drums",
        "pocket",
        "fusion",
        "trip-hop"
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
        7,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.8,
        0.95,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.75,
        0.9,
        0.65,
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
          "id": "fusion-downtempo-glitch-kit-v-01",
          "parentPatternId": "fusion-downtempo-glitch-kit",
          "name": "Downtempo Pocket & Ghost Kit — sparse variation",
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
            0.6499999999999999,
            0.75,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.67,
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
          "id": "fusion-downtempo-glitch-kit-v-02",
          "parentPatternId": "fusion-downtempo-glitch-kit",
          "name": "Downtempo Pocket & Ghost Kit — accent shift",
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
            0.7799999999999999,
            0.76,
            1,
            0.6599999999999999,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.73,
            0.96,
            0.63,
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
      "provenance": "Fusion & Ambient Dance catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-2",
          "worldId": "fusion-ambient",
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
      "id": "fusion-ambient-guitar-swells",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Ambient Modal Guitar Swells",
      "family": "Guitar",
      "category": "ostinato",
      "description": "Reverb-drenched volume-swell chords creating shifting harmonic color without sharp transients.",
      "tags": [
        "ambient",
        "guitar",
        "swell",
        "texture"
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
        0,
        6,
        12
      ],
      "accentProfile": [
        0.9,
        0.85,
        0.8
      ],
      "velocityProfile": [
        0.85,
        0.8,
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
        {
          "id": "fusion-ambient-guitar-swells-v-01",
          "parentPatternId": "fusion-ambient-guitar-swells",
          "name": "Ambient Modal Guitar Swells — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.85,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.77,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "fusion-ambient-guitar-swells-v-02",
          "parentPatternId": "fusion-ambient-guitar-swells",
          "name": "Ambient Modal Guitar Swells — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            0.86,
            0.9299999999999999,
            0.76
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.78,
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
      "weight": 0.7,
      "provenance": "Fusion & Ambient Dance catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-3",
          "worldId": "fusion-ambient",
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
      "id": "fusion-felt-piano-arpeggio",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-cinematic-neoclassical",
      "name": "Felt Piano Intimate Arpeggiation",
      "family": "Piano",
      "category": "groove",
      "description": "Muted felt piano playing delicate cyclical arpeggios that leave plenty of breath for movement.",
      "tags": [
        "neoclassical",
        "piano",
        "arpeggio",
        "intimate"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "keys"
      ],
      "instruments": [
        "piano",
        "keys"
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
        0.95,
        0.7,
        0.85,
        0.9,
        0.7,
        0.8
      ],
      "velocityProfile": [
        0.9,
        0.65,
        0.8,
        0.85,
        0.65,
        0.75
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
        {
          "id": "fusion-felt-piano-arpeggio-v-01",
          "parentPatternId": "fusion-felt-piano-arpeggio",
          "name": "Felt Piano Intimate Arpeggiation — sparse variation",
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
            0.8999999999999999,
            0.6499999999999999,
            0.7999999999999999,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.5700000000000001,
            0.7200000000000001,
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
          "id": "fusion-felt-piano-arpeggio-v-02",
          "parentPatternId": "fusion-felt-piano-arpeggio",
          "name": "Felt Piano Intimate Arpeggiation — accent shift",
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
            0.9099999999999999,
            0.7799999999999999,
            0.8099999999999999,
            0.98,
            0.6599999999999999,
            0.88
          ],
          "velocityProfile": [
            0.96,
            0.63,
            0.78,
            0.9099999999999999,
            0.63,
            0.73
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
      "provenance": "Fusion & Ambient Dance catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-4",
          "worldId": "fusion-ambient",
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
      "id": "fusion-organic-percussion",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Organic Shaker & Clay Drum Interlock",
      "family": "Hand Percussion",
      "category": "groove",
      "description": "Subtle clay drum (udu) tone with continuous woven basket shaker providing an earthy acoustic texture.",
      "tags": [
        "hand-percussion",
        "shaker",
        "udu",
        "organic"
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
        "bongos"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        6,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.75,
        0.9,
        0.7,
        0.8,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.7,
        0.85,
        0.65,
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
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "fusion-organic-percussion-v-01",
          "parentPatternId": "fusion-organic-percussion",
          "name": "Organic Shaker & Clay Drum Interlock — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.7,
            0.85,
            0.6499999999999999,
            0.75
          ],
          "velocityProfile": [
            0.62,
            0.77,
            0.5700000000000001,
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
          "id": "fusion-organic-percussion-v-02",
          "parentPatternId": "fusion-organic-percussion",
          "name": "Organic Shaker & Clay Drum Interlock — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.71,
            0.98,
            0.6599999999999999,
            0.88,
            0.9099999999999999,
            0.83
          ],
          "velocityProfile": [
            0.76,
            0.83,
            0.63,
            0.81,
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
      "weight": 1,
      "provenance": "Fusion & Ambient Dance catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-5",
          "worldId": "fusion-ambient",
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
      "id": "fusion-deep-granular-pad",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Granular Ambient Atmosphere Wash",
      "family": "Atmosphere",
      "category": "cell",
      "description": "Slow-evolving granular soundscape pad that wraps the acoustic instruments in a cohesive twilight space.",
      "tags": [
        "ambient",
        "synth",
        "pad",
        "granular"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region"
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
        0
      ],
      "accentProfile": [
        0.9
      ],
      "velocityProfile": [
        0.85
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "coda"
      ],
      "variants": [
        {
          "id": "fusion-deep-granular-pad-v-01-safe",
          "parentPatternId": "fusion-deep-granular-pad",
          "name": "Granular Ambient Atmosphere Wash — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0
          ],
          "accentProfile": [
            0.85
          ],
          "velocityProfile": [
            0.88
          ],
          "microtimingOffset": [
            -2
          ]
        },
        {
          "id": "fusion-deep-granular-pad-v-02-safe",
          "parentPatternId": "fusion-deep-granular-pad",
          "name": "Granular Ambient Atmosphere Wash — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0
          ],
          "accentProfile": [
            0.85
          ],
          "velocityProfile": [
            0.88
          ],
          "microtimingOffset": [
            -2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Fusion & Ambient Dance catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "fusion-ambient"
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
      "id": "fusion-ambient-phrase-7",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Texture Phrase",
      "family": "Texture",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around slow build and the texture vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "texture",
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
        1,
        6,
        8,
        13
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
          "id": "fusion-ambient-phrase-7-v-01",
          "parentPatternId": "fusion-ambient-phrase-7",
          "name": "Texture Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            8,
            13
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
          "id": "fusion-ambient-phrase-7-v-02",
          "parentPatternId": "fusion-ambient-phrase-7",
          "name": "Texture Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            6,
            8,
            13
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
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "texture"
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
      "id": "fusion-ambient-call-8",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Solo Response",
      "family": "Solo",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around harmonic space and the solo vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "solo",
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
        "bass",
        "piano"
      ],
      "compatibleRoles": [
        "voice",
        "lead"
      ],
      "compatibleInstruments": [
        "bass",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        7,
        9,
        14
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62
      ],
      "syncopationRating": 1,
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
          "id": "fusion-ambient-call-8-v-01",
          "parentPatternId": "fusion-ambient-call-8",
          "name": "Solo Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            9,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "fusion-ambient-call-8-v-02",
          "parentPatternId": "fusion-ambient-call-8",
          "name": "Solo Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            7,
            9,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "fusion-ambient-call-8-v-03",
          "parentPatternId": "fusion-ambient-call-8",
          "name": "Solo Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            7,
            9,
            14,
            15
          ],
          "accentProfile": [
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
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "solo"
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
      "id": "fusion-ambient-anchor-9",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Lift Anchor",
      "family": "Lift",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around improvised lead and the lift vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "lift",
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
        3,
        8,
        10,
        15
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
          "id": "fusion-ambient-anchor-9-v-01",
          "parentPatternId": "fusion-ambient-anchor-9",
          "name": "Lift Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            3,
            10,
            15
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
          "id": "fusion-ambient-anchor-9-v-02",
          "parentPatternId": "fusion-ambient-anchor-9",
          "name": "Lift Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            3,
            8,
            10,
            15
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
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "lift"
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
      "id": "fusion-ambient-comp-10",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Ambient Pulse Comping",
      "family": "Ambient Pulse",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around texture and the ambient pulse vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "ambient-pulse",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        5,
        10,
        12
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
          "id": "fusion-ambient-comp-10-v-01",
          "parentPatternId": "fusion-ambient-comp-10",
          "name": "Ambient Pulse Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            10,
            12
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
          "id": "fusion-ambient-comp-10-v-02",
          "parentPatternId": "fusion-ambient-comp-10",
          "name": "Ambient Pulse Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            5,
            10,
            12
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
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "ambient-pulse"
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
      "id": "fusion-ambient-intro-11",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Fusion Sync Intro",
      "family": "Fusion Sync",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around polyrhythm and the fusion sync vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "fusion-sync",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        11,
        15
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
          "id": "fusion-ambient-intro-11-v-01",
          "parentPatternId": "fusion-ambient-intro-11",
          "name": "Fusion Sync Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            11,
            15
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
          "id": "fusion-ambient-intro-11-v-02",
          "parentPatternId": "fusion-ambient-intro-11",
          "name": "Fusion Sync Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            11,
            15
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
          "id": "fusion-ambient-intro-11-v-03",
          "parentPatternId": "fusion-ambient-intro-11",
          "name": "Fusion Sync Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            6,
            11,
            14,
            15
          ],
          "accentProfile": [
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
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "fusion-sync"
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
      "id": "fusion-ambient-verse-12",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Texture Verse Variation",
      "family": "Texture",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around slow build and the texture vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "texture",
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
        0,
        1,
        7,
        12
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
          "id": "fusion-ambient-verse-12-v-01",
          "parentPatternId": "fusion-ambient-verse-12",
          "name": "Texture Verse Variation — sparse variation",
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
          "id": "fusion-ambient-verse-12-v-02",
          "parentPatternId": "fusion-ambient-verse-12",
          "name": "Texture Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            1,
            7,
            12
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
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "texture"
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
      "id": "fusion-ambient-chorus-13",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Solo Chorus Lift",
      "family": "Solo",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around harmonic space and the solo vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "solo",
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
        "piano"
      ],
      "compatibleRoles": [
        "pulse",
        "harmony",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        2,
        8,
        13
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
          "id": "fusion-ambient-chorus-13-v-01",
          "parentPatternId": "fusion-ambient-chorus-13",
          "name": "Solo Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            8,
            13
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
          "id": "fusion-ambient-chorus-13-v-02",
          "parentPatternId": "fusion-ambient-chorus-13",
          "name": "Solo Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            2,
            8,
            13
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
          "id": "fusion-ambient-chorus-13-v-03",
          "parentPatternId": "fusion-ambient-chorus-13",
          "name": "Solo Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            2,
            8,
            13,
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
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "solo"
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
      "id": "fusion-ambient-bridge-14",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Lift Bridge",
      "family": "Lift",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around improvised lead and the lift vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "lift",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        3,
        4,
        10,
        15
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
          "id": "fusion-ambient-bridge-14-v-01",
          "parentPatternId": "fusion-ambient-bridge-14",
          "name": "Lift Bridge — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            3,
            10,
            15
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
          "id": "fusion-ambient-bridge-14-v-02",
          "parentPatternId": "fusion-ambient-bridge-14",
          "name": "Lift Bridge — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            3,
            4,
            10,
            15
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
          "id": "fusion-ambient-bridge-14-v-03",
          "parentPatternId": "fusion-ambient-bridge-14",
          "name": "Lift Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            3,
            4,
            10,
            14,
            15
          ],
          "accentProfile": [
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
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "lift"
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
      "id": "fusion-ambient-fill-15",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Ambient Pulse Fill",
      "family": "Ambient Pulse",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around texture and the ambient pulse vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "ambient-pulse",
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
        3,
        8,
        12
      ],
      "accentProfile": [
        0.72,
        0.78,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        1
      ],
      "syncopationRating": 0.3333333333333333,
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
          "id": "fusion-ambient-fill-15-v-01",
          "parentPatternId": "fusion-ambient-fill-15",
          "name": "Ambient Pulse Fill — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            3,
            12
          ],
          "accentProfile": [
            0.6699999999999999,
            0.73
          ],
          "velocityProfile": [
            0.64,
            0.65
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "fusion-ambient-fill-15-v-02",
          "parentPatternId": "fusion-ambient-fill-15",
          "name": "Ambient Pulse Fill — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            3,
            8,
            12
          ],
          "accentProfile": [
            0.6799999999999999,
            0.86,
            0.96
          ],
          "velocityProfile": [
            0.78,
            0.71,
            0.98
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        },
        {
          "id": "fusion-ambient-fill-15-v-03",
          "parentPatternId": "fusion-ambient-fill-15",
          "name": "Ambient Pulse Fill — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            3,
            8,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.7,
            0.76,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            1,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "ambient-pulse"
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
      "id": "fusion-ambient-break-16",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Fusion Sync Break",
      "family": "Fusion Sync",
      "category": "break",
      "description": "A deliberate drop in density for a breakdown or stop-time moment. Built around polyrhythm and the fusion sync vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "fusion-sync",
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
        4,
        9,
        13
      ],
      "accentProfile": [
        1,
        0.55,
        1
      ],
      "velocityProfile": [
        1,
        0.5,
        1
      ],
      "syncopationRating": 0.6666666666666666,
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
          "id": "fusion-ambient-break-16-v-01",
          "parentPatternId": "fusion-ambient-break-16",
          "name": "Fusion Sync Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            4,
            13
          ],
          "accentProfile": [
            0.95,
            0.5
          ],
          "velocityProfile": [
            0.92,
            0.42
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "fusion-ambient-break-16-v-02",
          "parentPatternId": "fusion-ambient-break-16",
          "name": "Fusion Sync Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            4,
            9,
            13
          ],
          "accentProfile": [
            0.96,
            0.63,
            0.96
          ],
          "velocityProfile": [
            1,
            0.48,
            0.98
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        },
        {
          "id": "fusion-ambient-break-16-v-03",
          "parentPatternId": "fusion-ambient-break-16",
          "name": "Fusion Sync Break — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            4,
            9,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.53,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            1,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "fusion-sync"
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
      "id": "fusion-ambient-cadence-17",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Texture Cadence",
      "family": "Texture",
      "category": "cadence",
      "description": "A phrase-ending cadence that gives the arrangement a clear point of release. Built around slow build and the texture vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "texture",
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
        "piano",
        "bass"
      ],
      "compatibleRoles": [
        "harmony",
        "bass"
      ],
      "compatibleInstruments": [
        "piano",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        5,
        10,
        14
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
          "id": "fusion-ambient-cadence-17-v-01",
          "parentPatternId": "fusion-ambient-cadence-17",
          "name": "Texture Cadence — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            5,
            14
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
        {
          "id": "fusion-ambient-cadence-17-v-02",
          "parentPatternId": "fusion-ambient-cadence-17",
          "name": "Texture Cadence — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            5,
            10,
            14
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        },
        {
          "id": "fusion-ambient-cadence-17-v-03",
          "parentPatternId": "fusion-ambient-cadence-17",
          "name": "Texture Cadence — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            5,
            10,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Fusion & Ambient Dance world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "fusion-ambient",
        "texture"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    }
  ],
  "techniques": [
    "volume pedal swells with shimmer reverb",
    "micro-timing pocket adjustments",
    "felt piano dampening",
    "granular time-stretching"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "breakdown",
    "verse",
    "chorus",
    "coda"
  ],
  "relationships": [
    "sub-bass ↔ felt piano (intimate anchor & melody)",
    "percussion ↔ guitar swells (textural tapestry)",
    "drums ↔ bass (relaxed downtempo pocket)"
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
    "open, meditative, and responsive sonic architecture allowing dancers freedom to interpret musicality with complete physical freedom",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "bass": [
      "analog synthesizer sine/saw low-pass filtered sub-bass (Moog style)"
    ],
    "piano": [
      "upright felt piano with mechanical pedal and hammer warmth"
    ],
    "percussion": [
      "natural clay udu drum with soft dried seed pod rattles"
    ],
    "synth": [
      "evolving texture and harmonic motion"
    ],
    "guitar": [
      "fusion lead/texture color"
    ]
  },
  "combinations": [
    "Fusion + Blues Dance",
    "Fusion + Neo-Zouk",
    "Fusion + West Coast Swing"
  ],
  "danceTags": [
    "festival-fusion",
    "blues-fusion-compatible",
    "wcs-compatible",
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Slow breathing sub-bass pulse under organic hand percussion and ambient guitar swells",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Blues ↔ Fusion/Ambient ↔ WCS (shared slow-groove pocket)",
    "Zouk ↔ Fusion/Ambient (Neo-Zouk crossover)",
    "Tango ↔ Fusion/Ambient (Electro-Tango neo sets)"
  ]
};
