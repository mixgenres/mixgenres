import { GenreWorld } from '../../types';

export const FUNK_WORLD: GenreWorld = {
  "id": "funk",
  "name": "Funk",
  "family": "African American Groove",
  "color": "#e28743",
  "level": "world",
  "description": "The masters of groove: \"The One\" downbeat architecture, 16th-note syncopated slap bass, chicken-scratch 9th guitar chords, Clyde Stubblefield breakbeats, and warm Neo-Soul/Motown harmonic pockets.",
  "traditions": [
    {
      "id": "funk-pfunk-neworleans",
      "worldId": "funk",
      "name": "Funk & Second Line (James Brown, P-Funk, New Orleans)",
      "origin": "New Orleans, Detroit, Cincinnati",
      "era": "1965–Present",
      "description": "The root of all groove: \"The One\" (heavy downbeat on 1), 16th-note syncopated slap bass, chicken-scratch 9th guitar chords, and crisp horn stabs.",
      "characteristicInstruments": [
        "bass",
        "electric-guitar",
        "drums",
        "keys",
        "trumpet",
        "sax"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        90,
        118
      ],
      "keySubstyles": [
        "P-Funk",
        "Deep Funk (The Meters)",
        "New Orleans Second Line",
        "Go-Go",
        "Funk Rock"
      ],
      "coreConcepts": [
        "The One (downbeat emphasis)",
        "chicken-scratch guitar muting",
        "ghost notes",
        "clavinet syncopated ostinatos"
      ],
      "rhythmicGrammar": [
        "16th-note syncopated grid",
        "bass slap on 1 followed by syncopated offbeat pops"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible",
        "festival-fusion",
        "solo-vernacular"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Explosive root slap on The One with syncopated 16th ghost notes and chicken-scratch 9th guitar",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "E9",
          "E9",
          "E9",
          "E9"
        ],
        "verse": [
          "E9",
          "A13",
          "E9",
          "B7#9"
        ],
        "chorus": [
          "A13",
          "G13",
          "A13",
          "E9"
        ],
        "solo": [
          "E9",
          "E9",
          "E9",
          "E9"
        ],
        "coda": [
          "E9",
          "E9",
          "E9",
          "E9"
        ]
      }
    },
    {
      "id": "soul-motown-neosoul",
      "worldId": "funk",
      "name": "R&B, Motown & Neo-Soul (J Dilla / D’Angelo)",
      "origin": "Detroit, Memphis, Philadelphia, New York",
      "era": "1960–Present",
      "description": "Warm, emotional groove music: Motown 4-on-the-floor tambourine, Stax horn punch, and Dilla-style swung \"drunken\" backbeats.",
      "characteristicInstruments": [
        "bass",
        "piano",
        "drums",
        "electric-guitar",
        "strings",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "6/8"
      ],
      "tempoRange": [
        75,
        105
      ],
      "keySubstyles": [
        "Classic Motown",
        "Stax Southern Soul",
        "Philadelphia Soul",
        "Neo-Soul (D’Angelo / Erykah Badu)"
      ],
      "coreConcepts": [
        "James Jamerson melodic bassline",
        "Dilla swing / unquantized pocket",
        "Wurlitzer / Rhodes tremolo chords",
        "vocal falsetto and runs"
      ],
      "rhythmicGrammar": [
        "snare placed slightly behind the beat (laid back pocket)",
        "continuous 16th shaker or tambourine"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible",
        "blues-fusion-compatible",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Warm Rhodes tremolo chords with Jamerson melodic bass and unquantized Dilla snare pocket",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
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
          "Bbmaj7",
          "Am7",
          "Gm7",
          "C7"
        ],
        "solo": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "Cmaj7"
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
    "P-Funk",
    "Deep Funk",
    "New Orleans Second Line",
    "Classic Motown",
    "Stax Southern Soul",
    "Neo-Soul",
    "Funk Rock",
    "Go-Go"
  ],
  "artists": [
    "James Brown",
    "George Clinton / Parliament-Funkadelic",
    "The Meters",
    "Stevie Wonder",
    "Sly & The Family Stone",
    "D’Angelo",
    "Prince",
    "Erykah Badu",
    "Earth, Wind & Fire"
  ],
  "concepts": [
    "The One",
    "chicken-scratch guitar",
    "ghost notes",
    "clavinet syncopation",
    "horn stabs",
    "Dilla swing",
    "laid-back snare"
  ],
  "roles": {
    "bass": [
      "slap bass on The One",
      "syncopated 16th pops",
      "melodic soul walking lines",
      "synth bass ostinatos"
    ],
    "guitar": [
      "chicken-scratch 16th muting",
      "isolated 9th chord stabs",
      "wah-wah pedal comping"
    ],
    "drums": [
      "funky drummer breakbeat",
      "linear ghost-note snare patterns",
      "laid-back neo-soul pocket"
    ],
    "keys": [
      "percussive clavinet",
      "Rhodes/Wurlitzer tremolo chords",
      "B3 organ glissandos"
    ],
    "lead": [
      "tight brass section hits",
      "vocal falsetto and call-and-response"
    ]
  },
  "patterns": [
    {
      "id": "funk-the-one-bass",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "\"The One\" 16th-Note Syncopated Bass",
      "family": "Funk Basslines",
      "category": "ostinato",
      "description": "Explosive root hit on beat 1 (\"The One\") followed by rapid 16th ghost notes, hammer-ons, and syncopated pops.",
      "tags": [
        "funk",
        "bass",
        "slap",
        "the-one",
        "james-brown",
        "groove"
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
        10,
        12,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.6,
        0.9,
        0.8,
        0.6,
        0.95,
        0.7,
        0.85
      ],
      "velocityProfile": [
        1,
        0.6,
        0.85,
        0.75,
        0.55,
        0.9,
        0.65,
        0.8
      ],
      "articulations": [
        "slap-thumb",
        "pop-pluck",
        "ghost-note"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "funk-jamerson-motown-bass",
          "parentPatternId": "funk-the-one-bass",
          "name": "James Jamerson Melodic Walking Soul Line",
          "variationType": "ornamented",
          "probability": 0.5,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.85,
            0.9,
            0.75,
            0.95,
            0.8
          ],
          "description": "Syncopated melodic bassline using chromatic enclosures and open string shifts."
        },
        {
          "id": "funk-the-one-bass-v-02",
          "parentPatternId": "funk-the-one-bass",
          "name": "\"The One\" 16th-Note Syncopated Bass — accent shift",
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
            14,
            15
          ],
          "accentProfile": [
            0.96,
            0.6799999999999999,
            0.86,
            0.88,
            0.5599999999999999,
            1,
            0.6599999999999999,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.83,
            0.81,
            0.53,
            0.88,
            0.71,
            0.78
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
      "weight": 0.7,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
          "id": "funk-interaction-1",
          "worldId": "funk",
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
      "id": "funk-chicken-scratch-guitar",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Chicken-Scratch 9th Chords (Muted 16th Strum)",
      "family": "Funk Guitar",
      "category": "ostinato",
      "description": "Rapid 16th-note muted rhythmic scratches with sharp dominant 9th chord accents on syncopated upbeats.",
      "tags": [
        "guitar",
        "funk",
        "chicken-scratch",
        "9th-chords",
        "rhythm"
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
        "rhythm-guitar"
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
        0.9,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.95,
        0.3,
        0.9,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.95,
        0.3
      ],
      "velocityProfile": [
        0.85,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.9,
        0.3,
        0.85,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.9,
        0.3
      ],
      "articulations": [
        "percussive-scratch",
        "sharp-chord-accent"
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
          "id": "funk-guitar-sparse-chank",
          "parentPatternId": "funk-chicken-scratch-guitar",
          "name": "Single-Chord Syncopated \"Chank\"",
          "variationType": "sparse",
          "probability": 0.5,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            1,
            1,
            1,
            1
          ],
          "description": "Clean, isolated off-beat chord stabs leaving space for bass and vocals."
        },
        {
          "id": "funk-chicken-scratch-guitar-v-02",
          "parentPatternId": "funk-chicken-scratch-guitar",
          "name": "Chicken-Scratch 9th Chords (Muted 16th Strum) — accent shift",
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
            0.86,
            0.4,
            0.4,
            0.4,
            0.96,
            0.4,
            0.9099999999999999,
            0.4,
            0.86,
            0.4,
            0.4,
            0.4,
            0.96,
            0.4,
            0.9099999999999999,
            0.4
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.4,
            0.4,
            0.4,
            0.98,
            0.4,
            0.96,
            0.4,
            0.83,
            0.4,
            0.4,
            0.4,
            1,
            0.4,
            0.88,
            0.4
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
      "weight": 0.7,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "interactionRules": [
        {
          "id": "funk-interaction-2",
          "worldId": "funk",
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
      "id": "funk-drum-breakbeat",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat",
      "family": "Funk Drumming",
      "category": "fill",
      "description": "The most sampled groove in music history: ghosted snare chatter, syncopated kick pulse, and tight hi-hat accents.",
      "tags": [
        "drums",
        "breakbeat",
        "funk",
        "clyde-stubblefield",
        "ghost-notes"
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
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        7,
        8,
        10,
        12,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.4,
        1,
        0.35,
        0.4,
        0.9,
        0.4,
        1,
        0.35,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.4,
        0.95,
        0.3,
        0.35,
        0.85,
        0.4,
        0.95,
        0.3,
        0.75
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
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "neosoul-dilla-swung-pocket",
          "parentPatternId": "funk-drum-breakbeat",
          "name": "Neo-Soul Laid-Back Swung Pocket",
          "variationType": "syncopated",
          "probability": 0.5,
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
            0.95,
            0.5,
            0.85,
            1,
            0.6
          ],
          "description": "Unquantized relaxed pocket with delayed backbeat snare."
        },
        {
          "id": "funk-drum-breakbeat-v-02",
          "parentPatternId": "funk-drum-breakbeat",
          "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            4,
            6,
            7,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.96,
            0.48000000000000004,
            0.96,
            0.43,
            0.4,
            0.98,
            0.4,
            1,
            0.4,
            0.88
          ],
          "velocityProfile": [
            1,
            0.4,
            0.9299999999999999,
            0.4,
            0.4,
            0.83,
            0.46,
            0.9299999999999999,
            0.4,
            0.81
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
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "id": "funk-16th-strum",
      "worldId": "funk",
      "traditionId": "soul-motown-neosoul",
      "name": "16th Note Strum",
      "family": "Guitar",
      "category": "break",
      "description": "Continuous 16ths chicken-scratch with accented backbeat chops.",
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
        2,
        3,
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
        0.7,
        1,
        0.65,
        0.9,
        0.6,
        1,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.5,
        0.6,
        0.95,
        0.55,
        0.85,
        0.5,
        0.95,
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
        {
          "id": "funk-16th-strum-v-01",
          "parentPatternId": "funk-16th-strum",
          "name": "16th Note Strum — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            4,
            8,
            10,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.5499999999999999,
            0.6499999999999999,
            0.95,
            0.6,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.42,
            0.52,
            0.87,
            0.47000000000000003,
            0.77
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
          "id": "funk-16th-strum-v-02",
          "parentPatternId": "funk-16th-strum",
          "name": "16th Note Strum — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.6799999999999999,
            0.6599999999999999,
            1,
            0.61,
            0.98,
            0.5599999999999999,
            1,
            0.6599999999999999
          ],
          "velocityProfile": [
            0.96,
            0.48,
            0.58,
            1,
            0.53,
            0.83,
            0.56,
            0.9299999999999999,
            0.58
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
      "weight": 1,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
      "id": "funk-slap-bass",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Slap Bass",
      "family": "Bass",
      "category": "cadence",
      "description": "Thumb slap on downbeats and syncopated index pops.",
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
        3,
        4,
        7,
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.85,
        0.7,
        0.9,
        0.95,
        0.8,
        0.7,
        0.85
      ],
      "velocityProfile": [
        1,
        0.8,
        0.65,
        0.85,
        0.9,
        0.75,
        0.65,
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
          "id": "funk-slap-bass-v-01",
          "parentPatternId": "funk-slap-bass",
          "name": "Slap Bass — sparse variation",
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
            0.7999999999999999,
            0.6499999999999999,
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.92,
            0.7200000000000001,
            0.5700000000000001,
            0.77,
            0.8200000000000001
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
          "id": "funk-slap-bass-v-02",
          "parentPatternId": "funk-slap-bass",
          "name": "Slap Bass — accent shift",
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
            12,
            15
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.6599999999999999,
            0.98,
            0.9099999999999999,
            0.88,
            0.6599999999999999,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.78,
            0.63,
            0.9099999999999999,
            0.88,
            0.73,
            0.71,
            0.78
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
      "id": "funk-ghost-snares",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Ghost Snares",
      "family": "Drums",
      "category": "groove",
      "description": "Subtle 16th ghost note chatter dancing around backbeat hits.",
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
        0.45,
        0.5,
        0.5,
        0.55,
        0.45,
        0.5,
        0.5,
        0.6
      ],
      "velocityProfile": [
        0.4,
        0.45,
        0.45,
        0.5,
        0.4,
        0.45,
        0.45,
        0.55
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
        {
          "id": "funk-ghost-snares-v-01",
          "parentPatternId": "funk-ghost-snares",
          "name": "Ghost Snares — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            6,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.45,
            0.45,
            0.45,
            0.5,
            0.45
          ],
          "velocityProfile": [
            0.4,
            0.4,
            0.4,
            0.42,
            0.4
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
          "id": "funk-ghost-snares-v-02",
          "parentPatternId": "funk-ghost-snares",
          "name": "Ghost Snares — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.41000000000000003,
            0.58,
            0.46,
            0.63,
            0.41000000000000003,
            0.58,
            0.46,
            0.6799999999999999
          ],
          "velocityProfile": [
            0.46,
            0.43,
            0.43,
            0.56,
            0.4,
            0.43,
            0.51,
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
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
          "id": "funk-interaction-3",
          "worldId": "funk",
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
      "id": "funk-clavinet",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Clavinet Sync",
      "family": "Keys",
      "category": "groove",
      "description": "Perceptive syncopated clavinet riff driving forward motion.",
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
        0.75,
        0.9,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.9,
        0.7,
        0.85,
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
          "id": "funk-clavinet-v-01",
          "parentPatternId": "funk-clavinet",
          "name": "Clavinet Sync — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            7,
            10
          ],
          "accentProfile": [
            0.8999999999999999,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
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
          "id": "funk-clavinet-v-02",
          "parentPatternId": "funk-clavinet",
          "name": "Clavinet Sync — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            4,
            7,
            10,
            13
          ],
          "accentProfile": [
            0.9099999999999999,
            0.83,
            0.86,
            0.88,
            0.8099999999999999
          ],
          "velocityProfile": [
            0.96,
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "id": "funk-horn-section",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Horn Section Hits",
      "family": "Brass",
      "category": "groove",
      "description": "Explosive unison brass stabs marking rhythmic landmarks.",
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
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        12
      ],
      "accentProfile": [
        1,
        0.95,
        0.9
      ],
      "velocityProfile": [
        1,
        0.9,
        0.85
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
          "id": "funk-horn-section-v-01",
          "parentPatternId": "funk-horn-section",
          "name": "Horn Section Hits — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.92,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "funk-horn-section-v-02",
          "parentPatternId": "funk-horn-section",
          "name": "Horn Section Hits — accent shift",
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
            1,
            0.86
          ],
          "velocityProfile": [
            1,
            0.88,
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "id": "funk-soul-bass",
      "worldId": "funk",
      "traditionId": "soul-motown-neosoul",
      "name": "Motown Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Melodic James Jamerson style syncopated walking bass.",
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
        4,
        7,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.85,
        0.7,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.8,
        0.65,
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
          "id": "funk-soul-bass-v-01",
          "parentPatternId": "funk-soul-bass",
          "name": "Motown Bass — sparse variation",
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
            0.7,
            0.85,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "funk-soul-bass-v-02",
          "parentPatternId": "funk-soul-bass",
          "name": "Motown Bass — accent shift",
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
            0.83,
            0.86,
            0.9299999999999999,
            0.6599999999999999,
            1
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.8600000000000001,
            0.63,
            0.88
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
      "id": "funk-hihat-open",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Open Hi-Hat",
      "family": "Drums",
      "category": "groove",
      "description": "Crisp open hi-hat barking on upbeats.",
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
        1,
        3,
        5,
        7
      ],
      "accentProfile": [
        0.95,
        0.85,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.9,
        0.8,
        0.9,
        0.85
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
          "id": "funk-hihat-open-v-01",
          "parentPatternId": "funk-hihat-open",
          "name": "Open Hi-Hat — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            5,
            7
          ],
          "accentProfile": [
            0.8999999999999999,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8200000000000001,
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
          "id": "funk-hihat-open-v-02",
          "parentPatternId": "funk-hihat-open",
          "name": "Open Hi-Hat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            3,
            5,
            7
          ],
          "accentProfile": [
            0.9099999999999999,
            0.9299999999999999,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            0.96,
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
      "id": "funk-neo-soul-beat",
      "worldId": "funk",
      "traditionId": "soul-motown-neosoul",
      "name": "Neo-Soul Drag",
      "family": "Drums",
      "category": "groove",
      "description": "Dilla-style unquantized groove with laid-back snare pocket.",
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
        5,
        8,
        13
      ],
      "accentProfile": [
        1,
        0.9,
        0.75,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.85,
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
          "id": "funk-neo-soul-beat-v-01",
          "parentPatternId": "funk-neo-soul-beat",
          "name": "Neo-Soul Drag — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            8,
            13
          ],
          "accentProfile": [
            0.95,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.87,
            0.77,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "funk-neo-soul-beat-v-02",
          "parentPatternId": "funk-neo-soul-beat",
          "name": "Neo-Soul Drag — accent shift",
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
            0.96,
            0.98,
            0.71,
            1
          ],
          "velocityProfile": [
            1,
            0.83,
            0.6799999999999999,
            0.96
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
      "id": "funk-wah-guitar",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Wah-Wah Guitar",
      "family": "Guitar",
      "category": "groove",
      "description": "Expressive wah pedal rhythm sweeping through frequencies.",
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
        2,
        4,
        7,
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        0.95,
        0.6,
        0.85,
        0.7,
        0.9,
        0.65,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.8,
        0.65,
        0.85,
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
        {
          "id": "funk-wah-guitar-v-01",
          "parentPatternId": "funk-wah-guitar",
          "name": "Wah-Wah Guitar — sparse variation",
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
            0.8999999999999999,
            0.5499999999999999,
            0.7999999999999999,
            0.6499999999999999,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.47000000000000003,
            0.7200000000000001,
            0.5700000000000001,
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
          "id": "funk-wah-guitar-v-02",
          "parentPatternId": "funk-wah-guitar",
          "name": "Wah-Wah Guitar — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            4,
            7,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.7799999999999999,
            0.86,
            0.73,
            0.8099999999999999,
            0.83
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.78,
            0.71,
            0.83,
            0.58,
            0.8600000000000001,
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
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
      "id": "funk-phrase-13",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Vamp Phrase",
      "family": "Vamp",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around horn hits and the vamp vocabulary of Funk.",
      "tags": [
        "funk",
        "vamp",
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
        3,
        4,
        7,
        8,
        11,
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
          "id": "funk-phrase-13-v-01",
          "parentPatternId": "funk-phrase-13",
          "name": "Vamp Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            7,
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
          "id": "funk-phrase-13-v-02",
          "parentPatternId": "funk-phrase-13",
          "name": "Vamp Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11,
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
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "vamp"
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
      "id": "funk-call-14",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Break Response",
      "family": "Break",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around syncopated guitar and the break vocabulary of Funk.",
      "tags": [
        "funk",
        "break",
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
        0.95,
        0.62,
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
        0.62,
        0.95,
        0.57
      ],
      "syncopationRating": 0.5,
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
          "id": "funk-call-14-v-01",
          "parentPatternId": "funk-call-14",
          "name": "Break Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            5,
            9,
            12
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
          "id": "funk-call-14-v-02",
          "parentPatternId": "funk-call-14",
          "name": "Break Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.9099999999999999,
            0.7,
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
            0.6,
            1,
            0.5499999999999999
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
          "id": "funk-call-14-v-03",
          "parentPatternId": "funk-call-14",
          "name": "Break Response — transition variation",
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
            0.9299999999999999,
            0.6,
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
            0.95,
            0.57,
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
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "break"
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
      "id": "funk-anchor-15",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Pocket Anchor",
      "family": "Pocket",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around 16ths and the pocket vocabulary of Funk.",
      "tags": [
        "funk",
        "pocket",
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
          "id": "funk-anchor-15-v-01",
          "parentPatternId": "funk-anchor-15",
          "name": "Pocket Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            5,
            6,
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
          "id": "funk-anchor-15-v-02",
          "parentPatternId": "funk-anchor-15",
          "name": "Pocket Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "pocket"
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
      "id": "funk-comp-16",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Clav Comping",
      "family": "Clav",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around ghost notes and the clav vocabulary of Funk.",
      "tags": [
        "funk",
        "clav",
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
      "syncopationRating": 0.8333333333333334,
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
          "id": "funk-comp-16-v-01",
          "parentPatternId": "funk-comp-16",
          "name": "Clav Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            6,
            9,
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
          "id": "funk-comp-16-v-02",
          "parentPatternId": "funk-comp-16",
          "name": "Clav Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
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
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "clav"
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
      "id": "funk-voice-phrasing",
      "worldId": "funk",
      "traditionId": "funk-pfunk-neworleans",
      "name": "Funk Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Rhythmic vocal hook template that uses syncopated gaps instead of constant subdivision.",
      "tags": [
        "funk",
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
          "id": "funk-voice-phrasing-v-voice-alt",
          "parentPatternId": "funk-voice-phrasing",
          "name": "Funk Vocal Phrasing — alternate phrasing",
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
          "id": "funk-voice-phrasing-v-final-accent",
          "parentPatternId": "funk-voice-phrasing",
          "name": "Funk Vocal Phrasing — accent shift",
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Funk.",
      "authenticityTags": [
        "funk",
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
    "slap and pop bass mechanics",
    "percussive guitar scratching",
    "ghost-note snare chatter",
    "horn staccato unison stabs"
  ],
  "forms": [
    "intro",
    "verse groove",
    "chorus / hook",
    "bridge / breakdown",
    "vamp / open solo",
    "coda"
  ],
  "relationships": [
    "kick ↔ bass (tight lock on The One)",
    "snare ↔ guitar chops (backbeat synchronization)",
    "horns ↔ rhythm section (answering stabs)"
  ],
  "transformations": [
    "trans-density-dense",
    "trans-anticipation",
    "trans-density-sparse",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "irresistible hypnotic repetition anchored on The One",
    "explosive ensemble unison hits leading into dance breaks",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "bass": [
      "percussive slap thumb on beat 1 with syncopated index pops"
    ],
    "guitar": [
      "single-coil Stratocaster muted 16th scratches with 9th chord bites"
    ],
    "drums": [
      "snare dead-center on 2 & 4 surrounded by light ghost-note chatter"
    ],
    "voice": [
      "rhythmic vocal hooks and ad-libs"
    ]
  },
  "combinations": [
    "Funk + Salsa",
    "Funk + Jazz",
    "Funk + Tango",
    "Funk + Rock"
  ],
  "danceTags": [
    "social-partner",
    "wcs-compatible",
    "festival-fusion",
    "solo-vernacular",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Explosive root slap on The One with syncopated 16th ghost notes and chicken-scratch 9th guitar",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Funk ↔ Jazz",
    "Funk ↔ Hip-Hop",
    "Funk ↔ Afrobeat",
    "Funk ↔ WCS"
  ]
};
