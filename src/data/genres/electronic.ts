import { GenreWorld } from '../../types';

export const ELECTRONIC_WORLD: GenreWorld = {
  "id": "electronic",
  "name": "Electronic",
  "family": "Electronic / Dance",
  "color": "#C7E2E0",
  "level": "world",
  "description": "Synthesizer and drum machine driven music spanning hypnotic four-on-the-floor house to heavy syncopated bass breaks.",
  "traditions": [
    {
      "id": "electronic-house",
      "worldId": "electronic",
      "name": "House & Techno",
      "origin": "US/Europe",
      "era": "1980s-Present",
      "description": "Four-on-the-floor dance music.",
      "characteristicInstruments": [
        "drums",
        "bass",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        135
      ],
      "keySubstyles": [
        "Deep House",
        "Techno"
      ],
      "coreConcepts": [
        "four on the floor",
        "off-beat hats"
      ],
      "rhythmicGrammar": [
        "kick on every quarter"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Driving four-on-the-floor kick with open offbeat hi-hat and rolling bassline",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "Fmaj7",
          "Dm7",
          "Em7"
        ],
        "verse": [
          "Am7",
          "Fmaj7",
          "Dm7",
          "Em7"
        ],
        "chorus": [
          "Fmaj7",
          "G",
          "Em7",
          "Am7"
        ],
        "drop": [
          "Am7",
          "Am7",
          "Fmaj7",
          "G"
        ],
        "coda": [
          "Am7",
          "Fmaj7",
          "Am7",
          "Am7"
        ]
      }
    },
    {
      "id": "electronic-bass",
      "worldId": "electronic",
      "name": "Bass Music",
      "origin": "UK",
      "era": "1990s-Present",
      "description": "Syncopated breaks and half-time feels.",
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
        175
      ],
      "keySubstyles": [
        "Dubstep",
        "Drum & Bass"
      ],
      "coreConcepts": [
        "wobble bass",
        "syncopated breaks"
      ],
      "rhythmicGrammar": [
        "snare on 3"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Heavy 140bpm half-time kick/snare drop with modulated wobble sub-bass",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Fm",
          "Db",
          "Bbm",
          "C7"
        ],
        "verse": [
          "Fm",
          "Db",
          "Bbm",
          "C7"
        ],
        "drop": [
          "Fm",
          "Fm",
          "Db",
          "C7"
        ],
        "coda": [
          "Fm",
          "Fm",
          "Fm",
          "Fm"
        ]
      }
    }
  ],
  "substyles": [
    "Deep House",
    "Techno",
    "UK Garage",
    "Drum & Bass",
    "Dubstep",
    "Trance",
    "Synthwave",
    "Ambient"
  ],
  "artists": [
    "Kraftwerk",
    "Daft Punk",
    "Aphex Twin",
    "Burial",
    "The Chemical Brothers",
    "Disclosure",
    "Four Tet",
    "Deadmau5"
  ],
  "concepts": [
    "four-on-the-floor",
    "sidechain compression",
    "filter sweeps",
    "breakbeat chopping",
    "wobble bass",
    "risers and drops",
    "arpeggiation"
  ],
  "roles": {
    "drums": [
      "four-on-the-floor kick",
      "open offbeat hats",
      "breakbeats"
    ],
    "bass": [
      "sub-bass rumble",
      "acid synth bass",
      "reese bass"
    ],
    "synth": [
      "chord stabs",
      "supersaw leads",
      "ambient pads"
    ]
  },
  "patterns": [
    {
      "id": "elec-4onfloor",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Four on the Floor",
      "family": "Beat",
      "category": "fill",
      "description": "Kick on every quarter note driving the club pulse.",
      "tags": [
        "electronic",
        "house"
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
        12
      ],
      "accentProfile": [
        1,
        0.9,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.88,
        0.92,
        0.88
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
          "id": "elec-4onfloor-v-01",
          "parentPatternId": "elec-4onfloor",
          "name": "Four on the Floor — sparse variation",
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
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8,
            0.8400000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "elec-4onfloor-v-02",
          "parentPatternId": "elec-4onfloor",
          "name": "Four on the Floor — accent shift",
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
            0.98,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.86,
            0.9,
            0.94
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "elec-offbeat-hats",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Offbeat Hats",
      "family": "Beat",
      "category": "break",
      "description": "Open hi-hats on the upbeats creating forward momentum.",
      "tags": [
        "electronic",
        "house"
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
        2,
        6,
        10,
        14
      ],
      "accentProfile": [
        0.95,
        0.9,
        1,
        0.9
      ],
      "velocityProfile": [
        0.9,
        0.85,
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
          "id": "elec-offbeat-hats-v-01",
          "parentPatternId": "elec-offbeat-hats",
          "name": "Offbeat Hats — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            10,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.77,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "elec-offbeat-hats-v-02",
          "parentPatternId": "elec-offbeat-hats",
          "name": "Offbeat Hats — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.98,
            0.96,
            0.98
          ],
          "velocityProfile": [
            0.96,
            0.83,
            0.9299999999999999,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "elec-techno-rumble",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Techno Rumble",
      "family": "Beat",
      "category": "cadence",
      "description": "Driving 16th note bass/kick interaction and sub rumble.",
      "tags": [
        "electronic",
        "techno"
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
        0.65,
        0.7,
        0.95,
        0.65,
        0.7,
        1,
        0.65,
        0.7,
        0.95,
        0.65,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.6,
        0.9,
        0.55,
        0.6,
        0.95,
        0.55,
        0.6,
        0.9,
        0.55,
        0.6
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
          "id": "elec-techno-rumble-v-01",
          "parentPatternId": "elec-techno-rumble",
          "name": "Techno Rumble — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
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
            0.95,
            0.6,
            0.6499999999999999,
            0.8999999999999999,
            0.6,
            0.6499999999999999,
            0.95,
            0.6
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.52,
            0.8200000000000001,
            0.47000000000000003,
            0.52,
            0.87,
            0.47000000000000003
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "elec-techno-rumble-v-02",
          "parentPatternId": "elec-techno-rumble",
          "name": "Techno Rumble — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.73,
            0.6599999999999999,
            1,
            0.61,
            0.7799999999999999,
            0.96,
            0.73,
            0.6599999999999999,
            1,
            0.61,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.53,
            0.58,
            0.96,
            0.53,
            0.58,
            1,
            0.53,
            0.58,
            0.96,
            0.53,
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
      "difficulty": 4,
      "weight": 1,
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "elec-trance-16ths",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Trance Bass 16ths",
      "family": "Bass",
      "category": "groove",
      "description": "Driving 16th note arpeggiated bass with sidechain pumping curve.",
      "tags": [
        "electronic",
        "trance"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
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
        0.75,
        0.85,
        0.95,
        0.9,
        0.75,
        0.85,
        0.95,
        0.9,
        0.75,
        0.85,
        0.95,
        0.9,
        0.75,
        0.85,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.7,
        0.8,
        0.95,
        0.85,
        0.7,
        0.8,
        0.95,
        0.85,
        0.7,
        0.8,
        0.95,
        0.85,
        0.7,
        0.8,
        0.95,
        0.85
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
          "id": "elec-trance-16ths-v-01",
          "parentPatternId": "elec-trance-16ths",
          "name": "Trance Bass 16ths — sparse variation",
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
            0.7,
            0.7999999999999999,
            0.8999999999999999,
            0.85,
            0.7,
            0.7999999999999999,
            0.8999999999999999,
            0.85,
            0.7,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.62,
            0.7200000000000001,
            0.87,
            0.77,
            0.62,
            0.7200000000000001,
            0.87,
            0.77,
            0.62,
            0.7200000000000001,
            0.87
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
          "id": "elec-trance-16ths-v-02",
          "parentPatternId": "elec-trance-16ths",
          "name": "Trance Bass 16ths — accent shift",
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
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98,
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98,
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98,
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            0.76,
            0.78,
            0.9299999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.78,
            1,
            0.83,
            0.6799999999999999,
            0.8600000000000001,
            0.9299999999999999,
            0.83,
            0.76,
            0.78,
            0.9299999999999999,
            0.9099999999999999
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
          "id": "electronic-interaction-1",
          "worldId": "electronic",
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
      "id": "elec-dubstep-half",
      "worldId": "electronic",
      "traditionId": "electronic-bass",
      "name": "Dubstep Half-Time",
      "family": "Beat",
      "category": "groove",
      "description": "Heavy kick on 1 and crushing snare on 3 in 140bpm half-time.",
      "tags": [
        "electronic",
        "dubstep"
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
        8
      ],
      "accentProfile": [
        1,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.9
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
          "id": "elec-dubstep-half-v-01-safe",
          "parentPatternId": "elec-dubstep-half",
          "name": "Dubstep Half-Time — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.95,
            1
          ],
          "velocityProfile": [
            0.98,
            0.86
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "elec-dubstep-half-v-02-safe",
          "parentPatternId": "elec-dubstep-half",
          "name": "Dubstep Half-Time — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.95,
            1
          ],
          "velocityProfile": [
            0.98,
            0.86
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
          "id": "electronic-interaction-2",
          "worldId": "electronic",
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
      "id": "elec-dnb-amen",
      "worldId": "electronic",
      "traditionId": "electronic-bass",
      "name": "DnB Break",
      "family": "Beat",
      "category": "groove",
      "description": "Fast syncopated breakbeat at 174 BPM with ghost snares.",
      "tags": [
        "electronic",
        "dnb"
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
        9,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.95,
        0.75,
        0.8,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.65,
        0.75,
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
          "id": "elec-dnb-amen-v-01",
          "parentPatternId": "elec-dnb-amen",
          "name": "DnB Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            7,
            9,
            14
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.7,
            0.75
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
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
          "id": "elec-dnb-amen-v-02",
          "parentPatternId": "elec-dnb-amen",
          "name": "DnB Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            7,
            9,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            1,
            0.71,
            0.88,
            0.9099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.88,
            0.63,
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
      "weight": 1,
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
          "id": "electronic-interaction-3",
          "worldId": "electronic",
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
      "id": "elec-footwork",
      "worldId": "electronic",
      "traditionId": "electronic-bass",
      "name": "Chicago Footwork / Juke",
      "family": "Footwork",
      "category": "groove",
      "description": "Rapid, chopped kick pattern with triplet-displaced snares built for Chicago juke and footwork dance battles.",
      "tags": [
        "electronic",
        "footwork",
        "juke"
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
        7,
        9,
        12,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.65,
        0.9,
        0.6,
        0.95,
        0.85,
        0.6,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.85,
        0.55,
        0.9,
        0.8,
        0.55,
        0.85
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
          "id": "elec-footwork-v-01",
          "parentPatternId": "elec-footwork",
          "name": "Chicago Footwork / Juke — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            7,
            12,
            13
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.85,
            0.5499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.77,
            0.47000000000000003,
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
          "id": "elec-footwork-v-02",
          "parentPatternId": "elec-footwork",
          "name": "Chicago Footwork / Juke — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6,
            7,
            9,
            12,
            13,
            15
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.86,
            0.6799999999999999,
            0.9099999999999999,
            0.9299999999999999,
            0.5599999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.58,
            0.83,
            0.6100000000000001,
            0.88,
            0.78,
            0.6100000000000001,
            0.83
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
          "id": "electronic-interaction-4",
          "worldId": "electronic",
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
      "id": "elec-ukg",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "UK Garage Swung",
      "family": "Beat",
      "category": "groove",
      "description": "Swung 16ths with skipping 2-step kicks and crisp snare snaps.",
      "tags": [
        "electronic",
        "ukg"
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
        12,
        15
      ],
      "accentProfile": [
        1,
        0.95,
        0.8,
        0.85,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
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
        "chorus"
      ],
      "variants": [
        {
          "id": "elec-ukg-v-01",
          "parentPatternId": "elec-ukg",
          "name": "UK Garage Swung — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            7,
            8,
            15
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.75,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67,
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
          "id": "elec-ukg-v-02",
          "parentPatternId": "elec-ukg",
          "name": "UK Garage Swung — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            1,
            0.76,
            0.9299999999999999,
            0.9099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.8600000000000001,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
          "id": "electronic-interaction-5",
          "worldId": "electronic",
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
      "id": "elec-electro",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Electro 808",
      "family": "Beat",
      "category": "groove",
      "description": "Classic syncopated 808 robotic electro beat.",
      "tags": [
        "electronic",
        "electro"
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
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.95,
        0.8,
        0.85,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
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
          "id": "elec-electro-v-01",
          "parentPatternId": "elec-electro",
          "name": "Electro 808 — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            7,
            10,
            14
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.75,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67,
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
          "id": "elec-electro-v-02",
          "parentPatternId": "elec-electro",
          "name": "Electro 808 — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            7,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            1,
            0.76,
            0.9299999999999999,
            0.9099999999999999,
            0.88
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.8600000000000001,
            0.88,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "elec-ambient",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Ambient Pulse",
      "family": "Synth",
      "category": "groove",
      "description": "Slow evolving chord pulses with gentle dynamic decay.",
      "tags": [
        "electronic",
        "ambient"
      ],
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
      "subdivisions": 4,
      "onsetGrid": [
        0,
        2
      ],
      "accentProfile": [
        1,
        0.8
      ],
      "velocityProfile": [
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
          "id": "elec-ambient-v-01-safe",
          "parentPatternId": "elec-ambient",
          "name": "Ambient Pulse — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.95,
            0.88
          ],
          "velocityProfile": [
            0.93,
            0.71
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "elec-ambient-v-02-safe",
          "parentPatternId": "elec-ambient",
          "name": "Ambient Pulse — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.95,
            0.88
          ],
          "velocityProfile": [
            0.93,
            0.71
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "elec-synthwave",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Synthwave 8ths",
      "family": "Bass",
      "category": "groove",
      "description": "Straight 8th note driving retro synth bass with rolling cutoff filter.",
      "tags": [
        "electronic",
        "synthwave"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
      ],
      "instruments": [
        "bass",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.8,
        0.92,
        0.8,
        0.96,
        0.8,
        0.92,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.75,
        0.88,
        0.75,
        0.92,
        0.75,
        0.88,
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
          "id": "elec-synthwave-v-01",
          "parentPatternId": "elec-synthwave",
          "name": "Synthwave 8ths — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6
          ],
          "accentProfile": [
            0.95,
            0.75,
            0.87,
            0.75,
            0.9099999999999999
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.8,
            0.67,
            0.8400000000000001
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
          "id": "elec-synthwave-v-02",
          "parentPatternId": "elec-synthwave",
          "name": "Synthwave 8ths — accent shift",
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
            7
          ],
          "accentProfile": [
            0.96,
            0.88,
            0.88,
            0.88,
            0.9199999999999999,
            0.88,
            0.88,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.73,
            0.86,
            0.81,
            0.9,
            0.73,
            0.94,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "elec-acid-303",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Acid House 303 Bassline",
      "family": "Acid Bass",
      "category": "ostinato",
      "description": "Squelchy Roland TB-303 style syncopated 16th-note bassline with accented slides and rests, the signature Chicago acid-house hook.",
      "tags": [
        "electronic",
        "acid-house",
        "bass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
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
        4,
        7,
        10,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.6,
        0.9,
        0.65,
        0.95,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.85,
        0.6,
        0.9,
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
        {
          "id": "elec-acid-303-v-01",
          "parentPatternId": "elec-acid-303",
          "name": "Acid House 303 Bassline — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.85,
            0.6,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.77,
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
          "id": "elec-acid-303-v-02",
          "parentPatternId": "elec-acid-303",
          "name": "Acid House 303 Bassline — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            10,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.6799999999999999,
            0.86,
            0.73,
            0.9099999999999999,
            0.7799999999999999,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.53,
            0.83,
            0.6599999999999999,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "electronic-phrase-13",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Pluck Phrase",
      "family": "Pluck",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around arpeggio and the pluck vocabulary of Electronic.",
      "tags": [
        "electronic",
        "pluck",
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
          "id": "electronic-phrase-13-v-01",
          "parentPatternId": "electronic-phrase-13",
          "name": "Pluck Phrase — sparse variation",
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
          "id": "electronic-phrase-13-v-02",
          "parentPatternId": "electronic-phrase-13",
          "name": "Pluck Phrase — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "pluck"
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
      "id": "electronic-call-14",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Breakbeat Response",
      "family": "Breakbeat",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around sidechain pulse and the breakbeat vocabulary of Electronic.",
      "tags": [
        "electronic",
        "breakbeat",
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
        "synth",
        "bass"
      ],
      "compatibleRoles": [
        "voice",
        "lead"
      ],
      "compatibleInstruments": [
        "synth",
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
          "id": "electronic-call-14-v-01",
          "parentPatternId": "electronic-call-14",
          "name": "Breakbeat Response — sparse variation",
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
          "id": "electronic-call-14-v-02",
          "parentPatternId": "electronic-call-14",
          "name": "Breakbeat Response — accent shift",
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
          "id": "electronic-call-14-v-03",
          "parentPatternId": "electronic-call-14",
          "name": "Breakbeat Response — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "breakbeat"
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
      "id": "electronic-anchor-15",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Build Anchor",
      "family": "Build",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around four-on-floor and the build vocabulary of Electronic.",
      "tags": [
        "electronic",
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
          "id": "electronic-anchor-15-v-01",
          "parentPatternId": "electronic-anchor-15",
          "name": "Build Anchor — sparse variation",
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
          "id": "electronic-anchor-15-v-02",
          "parentPatternId": "electronic-anchor-15",
          "name": "Build Anchor — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
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
      "id": "electronic-comp-16",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Drop Comping",
      "family": "Drop",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around build-up and the drop vocabulary of Electronic.",
      "tags": [
        "electronic",
        "drop",
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
        "synth"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "synth"
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
          "id": "electronic-comp-16-v-01",
          "parentPatternId": "electronic-comp-16",
          "name": "Drop Comping — sparse variation",
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
          "id": "electronic-comp-16-v-02",
          "parentPatternId": "electronic-comp-16",
          "name": "Drop Comping — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "drop"
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
      "id": "electronic-intro-17",
      "worldId": "electronic",
      "traditionId": "electronic-house",
      "name": "Arp Intro",
      "family": "Arp",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around drop and the arp vocabulary of Electronic.",
      "tags": [
        "electronic",
        "arp",
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
        "synth"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "synth"
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
      "density": "dynamic",
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
          "id": "electronic-intro-17-v-01",
          "parentPatternId": "electronic-intro-17",
          "name": "Arp Intro — sparse variation",
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
          "id": "electronic-intro-17-v-02",
          "parentPatternId": "electronic-intro-17",
          "name": "Arp Intro — accent shift",
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
          "id": "electronic-intro-17-v-03",
          "parentPatternId": "electronic-intro-17",
          "name": "Arp Intro — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "arp"
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
    "filter sweep automation",
    "sidechain pumping",
    "breakbeat time-stretching",
    "arpeggiated gating"
  ],
  "forms": [
    "intro build",
    "drop / groove",
    "breakdown",
    "build-up",
    "second drop",
    "outro"
  ],
  "relationships": [
    "kick ↔ bass (sidechain ducking interaction)",
    "open hat ↔ kick (unwavering upbeat pulse)"
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
    "gradual timbral filtering building tension toward explosive rhythmic drops and sustained hypnotic loops",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "synth": [
      "analog-modeled saw lead with resonant lowpass filter cutoff sweep"
    ],
    "bass": [
      "saturated sub-bass square wave with sidechain compression from kick"
    ],
    "drums": [
      "crisp 909 kick and open 909 hi-hat on upbeats"
    ]
  },
  "combinations": [
    "Electronic + Hip-Hop",
    "Electronic + Rock",
    "Electronic + Funk"
  ],
  "danceTags": [
    "festival-fusion",
    "social-partner",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Driving four-on-the-floor kick with open offbeat hi-hat and pumping sidechain bass",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Electronic ↔ Hip-Hop",
    "Electronic ↔ Rock",
    "Electronic ↔ Funk"
  ]
};
