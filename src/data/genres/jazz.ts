import { GenreWorld } from '../../types';

export const JAZZ_WORLD: GenreWorld = {
  "id": "jazz",
  "name": "Jazz",
  "family": "Improvisation / Harmony",
  "color": "#5f83bb",
  "level": "world",
  "description": "The monumental Jazz tradition: Swing and Bebop ride cymbal phrasing, four-to-the-bar walking basslines, Charleston syncopation, McCoy Tyner quartal voicings, and improvisational motif development.",
  "traditions": [
    {
      "id": "jazz-swing-bebop",
      "worldId": "jazz",
      "name": "Swing, Bebop & Hard Bop",
      "origin": "New York, Kansas City, Chicago",
      "era": "1930–1960",
      "description": "The foundation of jazz: swinging ride cymbal (spang-a-lang), continuous walking basslines, Charleston syncopations, and bebop enclosures.",
      "characteristicInstruments": [
        "piano",
        "bass",
        "drums",
        "sax",
        "trumpet",
        "guitar"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        110,
        260
      ],
      "keySubstyles": [
        "Swing",
        "Bebop",
        "Hard Bop",
        "Cool Jazz",
        "Kansas City Jump"
      ],
      "coreConcepts": [
        "spang-a-lang ride pattern",
        "walking bass line",
        "charleston syncopation",
        "bebop enclosure",
        "ii-V-I guide tones"
      ],
      "rhythmicGrammar": [
        "triplet swing feel",
        "ride cymbal [0, 4, 6, 8, 12, 14]",
        "hi-hat pedal on beats 2 & 4"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Spang-a-lang ride cymbal with 4-to-the-bar walking bass and ii-V-I progressions",
      "grooveMechanics": {
        "swingPercentage": 66,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7"
        ],
        "verse": [
          "Dm7",
          "G7",
          "Cmaj7",
          "Am7"
        ],
        "chorus": [
          "Fmaj7",
          "Bb7",
          "Em7",
          "A7",
          "Dm7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ],
        "solo": [
          "Dm7",
          "G7",
          "Em7",
          "A7"
        ],
        "coda": [
          "Dm7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ]
      }
    },
    {
      "id": "jazz-modal-contemporary",
      "worldId": "jazz",
      "name": "Modal, Post-Bop & Fusion (Miles, Coltrane, Wayne Shorter)",
      "origin": "New York & Global",
      "era": "1959–Present",
      "description": "Expanded modal landscapes, quartal piano voicings (So What), polymetric bass pedals, and syncopated contemporary comping.",
      "characteristicInstruments": [
        "piano",
        "bass",
        "drums",
        "sax",
        "electric-guitar",
        "trumpet"
      ],
      "preferredMeters": [
        "4/4",
        "3/4",
        "5/4",
        "7/4"
      ],
      "tempoRange": [
        90,
        180
      ],
      "keySubstyles": [
        "Modal Jazz (Kind of Blue)",
        "Post-Bop",
        "Jazz Fusion",
        "Contemporary European ECM Jazz",
        "Latin Jazz"
      ],
      "coreConcepts": [
        "quartal voicings (McCoy Tyner / Bill Evans)",
        "pedal point",
        "broken time drumming",
        "metric modulation"
      ],
      "rhythmicGrammar": [
        "broken swing / linear interaction",
        "syncopated anticipations on upbeats of 2 and 4"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "So What quartal piano voicings over modal Dorian bass pedal",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm11",
          "Dm11",
          "Dm11",
          "Dm11"
        ],
        "verse": [
          "Dm11",
          "Dm11",
          "Ebm11",
          "Dm11"
        ],
        "chorus": [
          "Bbmaj7#11",
          "Am7",
          "Gm7",
          "C7alt"
        ],
        "solo": [
          "Dm11",
          "Dm11",
          "Ebm11",
          "Dm11"
        ],
        "coda": [
          "Dm11",
          "Dm11",
          "Dm11",
          "Dm11"
        ]
      }
    }
  ],
  "substyles": [
    "Swing",
    "Bebop",
    "Cool Jazz",
    "Hard Bop",
    "Modal Jazz",
    "Post-Bop",
    "Jazz Fusion",
    "Latin Jazz",
    "Contemporary ECM"
  ],
  "artists": [
    "Miles Davis",
    "John Coltrane",
    "Bill Evans",
    "Thelonious Monk",
    "Charlie Parker",
    "Duke Ellington",
    "Herbie Hancock",
    "Wayne Shorter",
    "Pat Metheny",
    "McCoy Tyner"
  ],
  "concepts": [
    "walking bass",
    "spang-a-lang ride",
    "charleston syncopation",
    "ii-V-I guide tones",
    "quartal voicings",
    "enclosures",
    "pedal point",
    "broken time"
  ],
  "roles": {
    "bass": [
      "4-feel walking line",
      "2-feel head anchor",
      "modal pedal point",
      "syncopated counterpoint"
    ],
    "piano": [
      "syncopated comping",
      "shell voicings",
      "quartal stacks",
      "chord melody"
    ],
    "drums": [
      "ride cymbal swing",
      "hi-hat 2 & 4 snap",
      "snare comping punches",
      "brush ballad sweep"
    ],
    "lead": [
      "bebop melody / solo",
      "horn section harmonized head",
      "expressive counterlines"
    ]
  },
  "patterns": [
    {
      "id": "jazz-walking-bass",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Walking Bass (Continuous Harmonic Navigation)",
      "family": "Walking Basslines",
      "category": "ostinato",
      "description": "Continuous four-to-the-bar walking bass connecting roots, chord tones, and chromatic approach notes.",
      "tags": [
        "bass",
        "walking",
        "swing",
        "bebop",
        "pulse"
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
        4,
        8,
        12
      ],
      "accentProfile": [
        0.9,
        0.95,
        0.85,
        1
      ],
      "velocityProfile": [
        0.85,
        0.9,
        0.8,
        0.95
      ],
      "articulations": [
        "tenuto-pizz",
        "chromatic-lead"
      ],
      "density": "medium",
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
          "id": "jazz-two-feel-bass",
          "parentPatternId": "jazz-walking-bass",
          "name": "Two-Feel Bass (Head Statement)",
          "variationType": "sparse",
          "probability": 0.5,
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            1,
            0.9
          ],
          "description": "Half-note pulse used during head statements before opening up to 4-feel walking in solos."
        },
        {
          "id": "jazz-walking-with-triplet-skip",
          "parentPatternId": "jazz-walking-bass",
          "name": "Walking Bass with Triplet Ghost Skip",
          "variationType": "ornamented",
          "probability": 0.45,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12
          ],
          "accentProfile": [
            0.9,
            0.9,
            0.5,
            0.85,
            1
          ],
          "description": "Ray Brown-style ghosted triplet skip note leading into beat 3."
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
          "id": "jazz-interaction-1",
          "worldId": "jazz",
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
      "id": "jazz-ride-spangalang",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Jazz Ride Cymbal (Spang-a-Lang)",
      "family": "Jazz Drumming",
      "category": "ostinato",
      "description": "The definitive jazz swing ride pattern with hi-hat pedal snapping crisply on beats 2 & 4.",
      "tags": [
        "drums",
        "ride",
        "swing",
        "jazz",
        "hi-hat"
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
        4,
        6,
        8,
        12,
        14
      ],
      "accentProfile": [
        0.85,
        0.95,
        0.65,
        0.85,
        1,
        0.7
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.6,
        0.8,
        1,
        0.65
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
          "id": "jazz-brushes-ballad",
          "parentPatternId": "jazz-ride-spangalang",
          "name": "Ballad Snare Brushes (Circular Sweep)",
          "variationType": "sparse",
          "probability": 0.5,
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.6,
            0.75,
            0.6,
            0.8
          ],
          "description": "Gentle circular wire brush sweeps on snare drum."
        },
        {
          "id": "jazz-ride-spangalang-v-02",
          "parentPatternId": "jazz-ride-spangalang",
          "name": "Jazz Ride Cymbal (Spang-a-Lang) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.61,
            0.9299999999999999,
            0.96,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.58,
            0.8600000000000001,
            0.98,
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "interactionRules": [
        {
          "id": "jazz-interaction-2",
          "worldId": "jazz",
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
      "id": "jazz-piano-comping",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Syncopated Piano Comping (Charleston & Red Garland Pluck)",
      "family": "Piano Comping",
      "category": "ostinato",
      "description": "Sparse, syncopated chord voicings placed around the soloist’s phrasing (Charleston rhythm on beat 1 and 2-and).",
      "tags": [
        "piano",
        "comping",
        "charleston",
        "harmony",
        "voicings"
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
        "piano",
        "keyboard"
      ],
      "instruments": [
        "piano",
        "keys",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        14
      ],
      "accentProfile": [
        0.95,
        1,
        0.85
      ],
      "velocityProfile": [
        0.9,
        0.95,
        0.8
      ],
      "density": "sparse",
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
          "id": "jazz-quartal-mccoy-comping",
          "parentPatternId": "jazz-piano-comping",
          "name": "McCoy Tyner Quartal Power Comping",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.8,
            0.9,
            1
          ],
          "description": "Powerful fourth-based modal chords with pentatonic rhythmic accents."
        },
        {
          "id": "jazz-piano-comping-v-02",
          "parentPatternId": "jazz-piano-comping",
          "name": "Syncopated Piano Comping (Charleston & Red Garland Pluck) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            1,
            0.8099999999999999
          ],
          "velocityProfile": [
            0.96,
            0.9299999999999999,
            0.78
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
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
          "id": "jazz-interaction-3",
          "worldId": "jazz",
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
      "id": "jazz-brushes-swing",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Brushes Swing",
      "family": "Drums",
      "category": "fill",
      "description": "Sweeping wire brush circular patterns on snare.",
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
        0.95,
        0.6,
        0.85,
        0.65,
        0.95,
        0.6,
        0.85,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.8,
        0.6,
        0.9,
        0.55,
        0.8,
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
          "id": "jazz-brushes-swing-v-01",
          "parentPatternId": "jazz-brushes-swing",
          "name": "Brushes Swing — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            9
          ],
          "accentProfile": [
            0.8999999999999999,
            0.5499999999999999,
            0.7999999999999999,
            0.6,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.47000000000000003,
            0.7200000000000001,
            0.52,
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
          "id": "jazz-brushes-swing-v-02",
          "parentPatternId": "jazz-brushes-swing",
          "name": "Brushes Swing — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.73,
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.78,
            0.6599999999999999,
            0.88,
            0.53,
            0.8600000000000001,
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "id": "jazz-latin-montuno-comp",
      "worldId": "jazz",
      "traditionId": "jazz-modal-contemporary",
      "name": "Latin Jazz Montuno Comping",
      "family": "Piano Comping",
      "category": "ostinato",
      "description": "Syncopated two-handed montuno piano ostinato bringing an Afro-Cuban Latin Jazz clave feel into modal harmony.",
      "tags": [
        "jazz",
        "latin-jazz",
        "montuno",
        "piano"
      ],
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
        1,
        0.7,
        0.95,
        0.8,
        0.9
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.65,
        0.9,
        0.75,
        0.85
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
          "id": "jazz-latin-montuno-comp-v-01",
          "parentPatternId": "jazz-latin-montuno-comp",
          "name": "Latin Jazz Montuno Comping — sparse variation",
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
            0.95,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.87,
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
          "id": "jazz-latin-montuno-comp-v-02",
          "parentPatternId": "jazz-latin-montuno-comp",
          "name": "Latin Jazz Montuno Comping — accent shift",
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
            1,
            0.76,
            0.98
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.63,
            0.96,
            0.73,
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
      "weight": 0.7,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "interactionRules": [
        {
          "id": "jazz-interaction-4",
          "worldId": "jazz",
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
      "id": "jazz-piano-red-garland",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Block Chords",
      "family": "Piano",
      "category": "break",
      "description": "Locked-hands syncopated block chords.",
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
      "subdivisions": 8,
      "onsetGrid": [
        0,
        3,
        5
      ],
      "accentProfile": [
        0.95,
        0.8,
        1
      ],
      "velocityProfile": [
        0.9,
        0.75,
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
          "id": "jazz-piano-red-garland-v-01",
          "parentPatternId": "jazz-piano-red-garland",
          "name": "Block Chords — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5
          ],
          "accentProfile": [
            0.8999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "jazz-piano-red-garland-v-02",
          "parentPatternId": "jazz-piano-red-garland",
          "name": "Block Chords — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            5
          ],
          "accentProfile": [
            0.9099999999999999,
            0.88,
            0.96
          ],
          "velocityProfile": [
            0.96,
            0.73,
            0.9299999999999999
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "id": "jazz-hihat-2-4",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Hi-Hat 2 & 4",
      "family": "Drums",
      "category": "cadence",
      "description": "Crisp foot hi-hat chick locking beats 2 and 4.",
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
      "subdivisions": 4,
      "onsetGrid": [
        1,
        3
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
        "chorus",
        "ending",
        "turnaround"
      ],
      "variants": [
        {
          "id": "jazz-hihat-2-4-v-01-safe",
          "parentPatternId": "jazz-hihat-2-4",
          "name": "Hi-Hat 2 & 4 — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            1,
            3
          ],
          "accentProfile": [
            0.85,
            1
          ],
          "velocityProfile": [
            0.88,
            0.9099999999999999
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "jazz-hihat-2-4-v-02-safe",
          "parentPatternId": "jazz-hihat-2-4",
          "name": "Hi-Hat 2 & 4 — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            1,
            3
          ],
          "accentProfile": [
            0.85,
            1
          ],
          "velocityProfile": [
            0.88,
            0.9099999999999999
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "id": "jazz-ride-broken",
      "worldId": "jazz",
      "traditionId": "jazz-modal-contemporary",
      "name": "Broken Ride",
      "family": "Drums",
      "category": "groove",
      "description": "Interactive, conversational broken-time ride cymbal.",
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
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        9
      ],
      "accentProfile": [
        1,
        0.7,
        0.95,
        0.6,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
        0.55,
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
          "id": "jazz-ride-broken-v-01",
          "parentPatternId": "jazz-ride-broken",
          "name": "Broken Ride — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            8
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-ride-broken-v-02",
          "parentPatternId": "jazz-ride-broken",
          "name": "Broken Ride — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            9
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.88,
            0.6100000000000001,
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
          "id": "jazz-interaction-5",
          "worldId": "jazz",
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
      "id": "jazz-bass-pedal",
      "worldId": "jazz",
      "traditionId": "jazz-modal-contemporary",
      "name": "Pedal Point",
      "family": "Bass",
      "category": "groove",
      "description": "Repeating root pedal anchor building modal tension.",
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
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        4,
        6
      ],
      "accentProfile": [
        0.95,
        0.78,
        0.88,
        0.72
      ],
      "velocityProfile": [
        0.9,
        0.7,
        0.82,
        0.68
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
          "id": "jazz-bass-pedal-v-01",
          "parentPatternId": "jazz-bass-pedal",
          "name": "Pedal Point — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6
          ],
          "accentProfile": [
            0.8999999999999999,
            0.73,
            0.83
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.62,
            0.74
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-bass-pedal-v-02",
          "parentPatternId": "jazz-bass-pedal",
          "name": "Pedal Point — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            0.9099999999999999,
            0.86,
            0.84,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.96,
            0.6799999999999999,
            0.7999999999999999,
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
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "id": "jazz-comping-sync",
      "worldId": "jazz",
      "traditionId": "jazz-modal-contemporary",
      "name": "Syncopated Comping",
      "family": "Piano",
      "category": "groove",
      "description": "Offbeat pushes and harmonic anticipations.",
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
      "subdivisions": 8,
      "onsetGrid": [
        1,
        4,
        7
      ],
      "accentProfile": [
        0.85,
        1,
        0.9
      ],
      "velocityProfile": [
        0.8,
        0.95,
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
          "id": "jazz-comping-sync-v-01",
          "parentPatternId": "jazz-comping-sync",
          "name": "Syncopated Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            7
          ],
          "accentProfile": [
            0.7999999999999999,
            0.95
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "jazz-comping-sync-v-02",
          "parentPatternId": "jazz-comping-sync",
          "name": "Syncopated Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            4,
            7
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.86
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "id": "jazz-snare-comp",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Snare Comping",
      "family": "Drums",
      "category": "groove",
      "description": "Dropping bombs and snare commentary behind soloist.",
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
      "subdivisions": 12,
      "onsetGrid": [
        2,
        7,
        10
      ],
      "accentProfile": [
        0.75,
        1,
        0.85
      ],
      "velocityProfile": [
        0.7,
        0.95,
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
          "id": "jazz-snare-comp-v-01",
          "parentPatternId": "jazz-snare-comp",
          "name": "Snare Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            10
          ],
          "accentProfile": [
            0.7,
            0.95
          ],
          "velocityProfile": [
            0.62,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "jazz-snare-comp-v-02",
          "parentPatternId": "jazz-snare-comp",
          "name": "Snare Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            7,
            10
          ],
          "accentProfile": [
            0.71,
            1,
            0.8099999999999999
          ],
          "velocityProfile": [
            0.76,
            0.9299999999999999,
            0.78
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
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "id": "jazz-waltz-ride",
      "worldId": "jazz",
      "traditionId": "jazz-modal-contemporary",
      "name": "Jazz Waltz Ride",
      "family": "Drums",
      "category": "groove",
      "description": "Swinging triplet ride pattern in 3/4 meter.",
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
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 9,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        6,
        8
      ],
      "accentProfile": [
        1,
        0.65,
        0.85,
        0.6,
        0.9,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.8,
        0.55,
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
          "id": "jazz-waltz-ride-v-01",
          "parentPatternId": "jazz-waltz-ride",
          "name": "Jazz Waltz Ride — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            3,
            5,
            8
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.7999999999999999,
            0.5499999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.7200000000000001,
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
          "id": "jazz-waltz-ride-v-02",
          "parentPatternId": "jazz-waltz-ride",
          "name": "Jazz Waltz Ride — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.8099999999999999,
            0.6799999999999999,
            0.86,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.78,
            0.6100000000000001,
            0.83,
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
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
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
      "id": "jazz-phrase-13",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Solo Phrase",
      "family": "Solo",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around horn head and the solo vocabulary of Jazz.",
      "tags": [
        "jazz",
        "solo",
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
        1,
        4,
        6,
        9,
        11
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
      "syncopationRating": 0.8,
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
        "jazz dominant",
        "ii-V-I",
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
          "id": "jazz-phrase-13-v-01",
          "parentPatternId": "jazz-phrase-13",
          "name": "Solo Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
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
          "id": "jazz-phrase-13-v-02",
          "parentPatternId": "jazz-phrase-13",
          "name": "Solo Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "solo"
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
      "id": "jazz-call-14",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Horn Head & Solo Phrase",
      "family": "Horn Head",
      "category": "interactionPattern",
      "description": "A horn-head/solo contour slot that gives the rhythm section a melodic identity.",
      "tags": [
        "jazz",
        "shout",
        "call",
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
        "sax"
      ],
      "compatibleRoles": [
        "lead"
      ],
      "compatibleInstruments": [
        "sax"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        5,
        7,
        10,
        12
      ],
      "accentProfile": [
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
        0.8999999999999999
      ],
      "syncopationRating": 0.8,
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
        "jazz dominant",
        "ii-V-I",
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
          "id": "jazz-call-14-v-01",
          "parentPatternId": "jazz-call-14",
          "name": "Shout Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            7,
            10
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
          "id": "jazz-call-14-v-02",
          "parentPatternId": "jazz-call-14",
          "name": "Shout Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            5,
            7,
            10,
            12
          ],
          "accentProfile": [
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
            0.8799999999999999
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
          "id": "jazz-call-14-v-03",
          "parentPatternId": "jazz-call-14",
          "name": "Shout Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            5,
            7,
            10,
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
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "shout"
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
      "id": "jazz-anchor-15",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Head Anchor",
      "family": "Head",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around swing and the head vocabulary of Jazz.",
      "tags": [
        "jazz",
        "head",
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
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        3,
        6,
        8,
        11,
        13
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
      "syncopationRating": 0.8,
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
        "jazz dominant",
        "ii-V-I",
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
          "id": "jazz-anchor-15-v-01",
          "parentPatternId": "jazz-anchor-15",
          "name": "Head Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            3,
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
          "id": "jazz-anchor-15-v-02",
          "parentPatternId": "jazz-anchor-15",
          "name": "Head Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            3,
            6,
            8,
            11,
            13
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "head"
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
      "id": "jazz-comp-16",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Comping Comping",
      "family": "Comping",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around comping in Jazz.",
      "tags": [
        "jazz",
        "comping",
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
        1
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95
      ],
      "syncopationRating": 0.8,
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
        "jazz dominant",
        "ii-V-I",
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
          "id": "jazz-comp-16-v-01",
          "parentPatternId": "jazz-comp-16",
          "name": "Comping Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            5,
            10,
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
          "id": "jazz-comp-16-v-02",
          "parentPatternId": "jazz-comp-16",
          "name": "Comping Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "comping"
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
      "id": "jazz-intro-17",
      "worldId": "jazz",
      "traditionId": "jazz-swing-bebop",
      "name": "Shout Horn Answer",
      "family": "Turnaround",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around walking bass and the turnaround vocabulary of Jazz.",
      "tags": [
        "jazz",
        "turnaround",
        "intro",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "texture",
        "lead"
      ],
      "instruments": [
        "trumpet"
      ],
      "compatibleRoles": [
        "harmony",
        "texture",
        "lead"
      ],
      "compatibleInstruments": [
        "trumpet"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        5,
        7,
        8
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
      "swingPercentage": 66,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "density": "dynamic",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],
      "harmonicContext": [
        "jazz dominant",
        "ii-V-I",
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
          "id": "jazz-intro-17-v-01",
          "parentPatternId": "jazz-intro-17",
          "name": "Turnaround Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            5,
            8
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
          "id": "jazz-intro-17-v-02",
          "parentPatternId": "jazz-intro-17",
          "name": "Turnaround Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            8
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
          "id": "jazz-intro-17-v-03",
          "parentPatternId": "jazz-intro-17",
          "name": "Turnaround Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            8,
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
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "turnaround"
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
    "triplet swing feel",
    "chromatic approach notes",
    "drop-2 voicings",
    "hi-hat chick on 2 & 4",
    "linear drum comping"
  ],
  "forms": [
    "head-solos-head",
    "32-bar AABA",
    "12-bar jazz blues",
    "rhythm changes",
    "modal vamp",
    "coda"
  ],
  "relationships": [
    "bass ↔ ride cymbal (swing time lock)",
    "piano ↔ soloist (interactive comping dialogue)",
    "drums ↔ horns (kick/snare accents supporting brass hits)"
  ],
  "transformations": [
    "trans-density-sparse",
    "trans-anticipation",
    "trans-density-dense",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "rhythm section dynamically breathes around the soloist",
    "subtle metric syncopation across bar lines",
    "clear transitions between head statement and open solo space",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "bass": [
      "walking quarter notes with chromatic leading tones",
      "two-feel half note anchor"
    ],
    "piano": [
      "crisp off-beat comping chords",
      "quartal modern voicings"
    ],
    "drums": [
      "spang-a-lang swing ride with feathering bass drum",
      "brush circular snare sweeps"
    ],
    "sax": [
      "horn-head and solo phrasing"
    ],
    "trumpet": [
      "ensemble/shout punctuation"
    ]
  },
  "combinations": [
    "Jazz + Tango",
    "Jazz + Flamenco",
    "Jazz + Afro-Cuban",
    "Jazz + Bossa Nova",
    "Jazz + Funk"
  ],
  "danceTags": [
    "social-partner",
    "wcs-compatible",
    "listening",
    "festival-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Spang-a-lang ride cymbal with 4-to-the-bar walking bass and ii-V-I progressions",
  "grooveMechanics": {
    "swingPercentage": 66,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Jazz ↔ Blues",
    "Jazz ↔ Swing",
    "Jazz ↔ Funk",
    "Jazz ↔ Bossa Nova"
  ]
};
