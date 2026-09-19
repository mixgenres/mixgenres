import { GenreWorld } from '../../types';

export const REGGAE_DUB_WORLD : GenreWorld = {
  "id": "reggae-dub",
  "name": "Reggae / Dub",
  "family": "Jamaican / sound-system",
  "color": "#4f8f6f",
  "level": "world",
  "description": "Reggae and dub are represented as bass-and-space music: one-drop, offbeat skank and melodic bass define roots reggae; dub adds subtraction, echo-friendly fragments and studio-space behavior; steppers provides a more continuous kick foundation.",
  "traditions": [
    {
      "id": "reggae-roots",
      "worldId": "reggae-dub",
      "name": "Roots Reggae",
      "origin": "Jamaica",
      "era": "Late 1960s–Present",
      "description": "One-drop and rockers rhythm sections, offbeat guitar/organ skank, deep bass lines and spacious vocal arrangements; bass and drums define the center of gravity.",
      "characteristicInstruments": [
        "bass",
        "drums",
        "electric-guitar",
        "organ",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        65,
        85
      ],
      "keySubstyles": [
        "Roots reggae",
        "Rockers",
        "One-drop"
      ],
      "coreConcepts": [
        "one-drop",
        "skank",
        "deep bass",
        "rimshot",
        "vocal harmony"
      ],
      "rhythmicGrammar": [
        "kick/rimshot emphasizes the third beat in one-drop",
        "guitar/organ chords on offbeats"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "One-drop backbeat with offbeat skank and melodic bass",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 8
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Am",
          "Dm",
          "Am"
        ],
        "verse": [
          "Am",
          "Am",
          "Dm",
          "Am"
        ],
        "chorus": [
          "C",
          "G",
          "Am",
          "Am"
        ],
        "solo": [
          "Am",
          "Am",
          "Dm",
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
      "id": "reggae-dub",
      "worldId": "reggae-dub",
      "name": "Dub",
      "origin": "Jamaica",
      "era": "1960s–Present",
      "description": "Studio-remix grammar that foregrounds bass, drums and space, using spring/plate-like ambience, echo throws, dropouts and instrumental fragments.",
      "characteristicInstruments": [
        "bass",
        "drums",
        "organ",
        "electric-guitar",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        65,
        90
      ],
      "keySubstyles": [
        "Dub",
        "Steppers",
        "Digital dub"
      ],
      "coreConcepts": [
        "dropout",
        "echo send",
        "spring reverb",
        "bass foreground",
        "versioning"
      ],
      "rhythmicGrammar": [
        "steady one-drop/steppers skeleton with dramatic subtraction",
        "delayed fragments answer the main groove"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Deep bass and one-drop drum bed with sparse skank hits and echo space",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 10
      }
    },
    {
      "id": "reggae-steppers",
      "worldId": "reggae-dub",
      "name": "Steppers / Digital Reggae",
      "origin": "Jamaica / UK sound-system culture",
      "era": "1970s–Present",
      "description": "More persistent four-to-the-floor kick drive, syncopated bass and spacious dub textures; useful as a bridge into modern electronic reggae.",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "synth",
        "organ"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        70,
        100
      ],
      "keySubstyles": [
        "Steppers",
        "Digital reggae",
        "Dubwise"
      ],
      "coreConcepts": [
        "four-to-floor kick",
        "dub bass",
        "digital percussion",
        "sound-system space"
      ],
      "rhythmicGrammar": [
        "continuous kick foundation with syncopated bass/organ",
        "dropouts create section contrast"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Steppers kick with deep syncopated bass and organ skank",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 6
      }
    }
  ],
  "substyles": [
    "Roots Reggae",
    "One-Drop",
    "Rockers",
    "Dub",
    "Steppers",
    "Digital Reggae"
  ],
  "artists": [
    "Lee 'Scratch' Perry",
    "King Tubby",
    "Bob Marley & The Wailers",
    "Burning Spear",
    "Sly & Robbie",
    "Augustus Pablo"
  ],
  "concepts": [
    "one-drop",
    "skank",
    "melodic bass",
    "dub dropout",
    "echo space",
    "steppers"
  ],
  "roles": {
    "drums": [
      "one-drop",
      "steppers"
    ],
    "bass": [
      "melodic deep bass"
    ],
    "harmony": [
      "guitar/organ skank"
    ],
    "texture": [
      "dub fragments"
    ],
    "voice": [
      "laid-back lead/coro"
    ]
  },
  "patterns": [
  {
    "id": "rd-one-drop",
    "worldId": "reggae-dub",
    "traditionId": "reggae-roots",
    "name": "One-Drop Foundation",
    "family": "Reggae Drums",
    "category": "groove",
    "description": "Kick and rimshot center the third beat while leaving beat one comparatively open.",
    "tags": [
      "one-drop",
      "reggae",
      "drums"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "drums"
    ],
    "instruments": [
      "drums",
      "kick",
      "snare"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      6,
      8,
      12,
      14
    ],
    "accentProfile": [
      1,
      0.72,
      0.9,
      0.65,
      0.88
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58,
      0.84
    ],
    "syncopationRating": 0.7,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "kick",
      "rimshot"
    ],
    "density": "medium",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": null,
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [
      {
        "id": "rd-one-drop-v-sparse",
        "parentPatternId": "rd-one-drop",
        "name": "One-Drop Foundation — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          8,
          14
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "rd-one-drop-v-shift",
        "parentPatternId": "rd-one-drop",
        "name": "One-Drop Foundation — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          6,
          8,
          12,
          14
        ],
        "accentProfile": [
          0.95,
          0.7,
          0.95,
          0.7,
          0.95
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "one-drop",
      "reggae",
      "drums"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.85,
    "enabled": true
  },
  {
    "id": "rd-skank",
    "worldId": "reggae-dub",
    "traditionId": "reggae-roots",
    "name": "Offbeat Skank",
    "family": "Reggae Skank",
    "category": "ostinato",
    "description": "Short guitar/organ chord attacks on the offbeats, deliberately leaving the downbeats to bass and drums.",
    "tags": [
      "skank",
      "reggae",
      "offbeat"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "organ"
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
      1,
      0.72,
      0.9,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58
    ],
    "syncopationRating": 0.76,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "staccato"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus",
      "solo"
    ],
    "patternFunction": null,
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [
      {
        "id": "rd-skank-v-sparse",
        "parentPatternId": "rd-skank",
        "name": "Offbeat Skank — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          2,
          10
        ],
        "accentProfile": [
          0.9,
          0.65
        ]
      },
      {
        "id": "rd-skank-v-shift",
        "parentPatternId": "rd-skank",
        "name": "Offbeat Skank — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          2,
          6,
          10,
          14
        ],
        "accentProfile": [
          0.95,
          0.7,
          0.95,
          0.7
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "skank",
      "reggae",
      "offbeat"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.85,
    "enabled": true
  },
  {
    "id": "rd-reggae-bass",
    "worldId": "reggae-dub",
    "traditionId": "reggae-roots",
    "name": "Melodic Reggae Bass",
    "family": "Reggae Bass",
    "category": "ostinato",
    "description": "Long, syncopated bass notes occupy the spaces between drums and often carry the melodic identity.",
    "tags": [
      "reggae",
      "bass",
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
      "bass"
    ],
    "instruments": [
      "bass",
      "sub-bass"
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
      0.72,
      0.9,
      0.65,
      0.88,
      0.7
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58,
      0.84,
      0.64
    ],
    "syncopationRating": 0.8,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "legato"
    ],
    "density": "medium",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus",
      "solo"
    ],
    "patternFunction": null,
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [
      {
        "id": "rd-reggae-bass-v-sparse",
        "parentPatternId": "rd-reggae-bass",
        "name": "Melodic Reggae Bass — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          6,
          11
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "rd-reggae-bass-v-shift",
        "parentPatternId": "rd-reggae-bass",
        "name": "Melodic Reggae Bass — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
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
          0.95,
          0.7,
          0.95,
          0.7
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "reggae",
      "bass",
      "melodic"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.85,
    "enabled": true
  },
  {
    "id": "rd-dub-drop",
    "worldId": "reggae-dub",
    "traditionId": "reggae-dub",
    "name": "Dub Dropout & Echo Fragment",
    "family": "Dub Space",
    "category": "break",
    "description": "Removes selected skank/drum attacks and leaves a sparse echo-friendly fragment at phrase boundaries.",
    "tags": [
      "dub",
      "dropout",
      "echo"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
      "electric-guitar",
      "organ",
      "voice"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      2,
      8,
      14
    ],
    "accentProfile": [
      1,
      0.72,
      0.9
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86
    ],
    "syncopationRating": 0.65,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "delay"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "breakdown",
      "bridge",
      "solo"
    ],
    "patternFunction": null,
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [
      {
        "id": "rd-dub-drop-v-sparse",
        "parentPatternId": "rd-dub-drop",
        "name": "Dub Dropout & Echo Fragment — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          2,
          14
        ],
        "accentProfile": [
          0.9,
          0.65
        ]
      },
      {
        "id": "rd-dub-drop-v-shift",
        "parentPatternId": "rd-dub-drop",
        "name": "Dub Dropout & Echo Fragment — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          2,
          8,
          14
        ],
        "accentProfile": [
          0.95,
          0.7,
          0.95
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "dub",
      "dropout",
      "echo"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.85,
    "enabled": true
  },
  {
    "id": "rd-steppers",
    "worldId": "reggae-dub",
    "traditionId": "reggae-steppers",
    "name": "Steppers Foundation",
    "family": "Steppers Drums",
    "category": "groove",
    "description": "Four-to-the-floor kick with a deep bass answer and restrained offbeat organ.",
    "tags": [
      "steppers",
      "sound-system"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "drums"
    ],
    "instruments": [
      "drums",
      "kick"
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
      0.72,
      0.9,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58
    ],
    "syncopationRating": 0.1,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "kick"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": null,
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [
      {
        "id": "rd-steppers-v-sparse",
        "parentPatternId": "rd-steppers",
        "name": "Steppers Foundation — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          8
        ],
        "accentProfile": [
          0.9,
          0.65
        ]
      },
      {
        "id": "rd-steppers-v-shift",
        "parentPatternId": "rd-steppers",
        "name": "Steppers Foundation — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          4,
          8,
          12
        ],
        "accentProfile": [
          0.95,
          0.7,
          0.95,
          0.7
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "steppers",
      "sound-system"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.85,
    "enabled": true
  },
  {
    "id": "rd-06-one-drop-core",
    "worldId": "reggae-dub",
    "traditionId": "reggae-roots",
    "name": "One Drop Core",
    "family": "Roots Reggae",
    "category": "groove",
    "description": "Drum pattern leaves the first beat relatively open while the backbeat anchors the bar.",
    "tags": [
      "one-drop"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "drum-kit"
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
      8,
      12
    ],
    "accentProfile": [
      0.45,
      0.8,
      0.7,
      0.9
    ],
    "syncopationRating": 0.25,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "one-drop"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "One Drop Core",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Roots Reggae; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "one-drop"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-07-skank-guitar",
    "worldId": "reggae-dub",
    "traditionId": "reggae-roots",
    "name": "Skank Guitar",
    "family": "Roots Reggae",
    "category": "cell",
    "description": "Short clipped guitar chord on the offbeat, leaving the bass dominant.",
    "tags": [
      "skank"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
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
      6,
      10,
      14
    ],
    "accentProfile": [
      0.72,
      0.68,
      0.7,
      0.75
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "skank"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Skank Guitar",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Roots Reggae; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "skank"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-08-reggae-bass-lead",
    "worldId": "reggae-dub",
    "traditionId": "reggae-roots",
    "name": "Reggae Bass Lead",
    "family": "Roots Reggae",
    "category": "bass",
    "description": "Longer, melodic bass line with rests; bass is a primary melodic voice.",
    "tags": [
      "bass-led"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "bass"
    ],
    "instruments": [
      "bass"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      6,
      9,
      14,
      16,
      22,
      25,
      30
    ],
    "accentProfile": [
      0.9,
      0.6,
      0.75,
      0.55,
      0.88,
      0.62,
      0.72,
      0.58
    ],
    "syncopationRating": 0.75,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "bass-led"
    ],
    "density": "dense",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus",
      "solo"
    ],
    "patternFunction": "Reggae Bass Lead",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Roots Reggae; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "bass-led"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-09-bubble-organ",
    "worldId": "reggae-dub",
    "traditionId": "reggae-roots",
    "name": "Bubble Organ",
    "family": "Roots Reggae",
    "category": "cell",
    "description": "Short organ bubble fills the offbeat gaps without competing with guitar on every hit.",
    "tags": [
      "organ bubble"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "harmony"
    ],
    "instruments": [
      "organ"
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
      0.5,
      0.62,
      0.48,
      0.66
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "organ bubble"
    ],
    "density": "medium",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Bubble Organ",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Roots Reggae; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "organ bubble"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-10-dub-echo-fragment",
    "worldId": "reggae-dub",
    "traditionId": "reggae-dub",
    "name": "Dub Echo Fragment",
    "family": "Dub",
    "category": "texture",
    "description": "Isolated snare/perc fragment sent into echo/reverb space; the silence afterward is part of the effect.",
    "tags": [
      "dub",
      "echo",
      "send"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
  "snare",
  "shaker"
],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      4,
      12
    ],
    "accentProfile": [
      0.7,
      0.55
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "dub",
      " echo"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "breakdown",
      "bridge"
    ],
    "patternFunction": "Dub Echo Fragment",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Dub; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "dub",
      "echo",
      "send"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-11-dub-dropout",
    "worldId": "reggae-dub",
    "traditionId": "reggae-dub",
    "name": "Dub subtraction / return",
    "family": "Dub",
    "category": "break",
    "description": "Bass/drum dropout with a final pickup for re-entry; the musical idea is subtraction and return, central to dub versioning.",
    "tags": [
      "dropout",
      "version"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
  "bass",
  "drums",
  "dub-echo"
],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      15
    ],
    "accentProfile": [
      0.9,
      0.65
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "dropout",
      " version"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "end"
    ],
    "sectionUsage": [
      "breakdown"
    ],
    "patternFunction": "Dub Dropout",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Dub; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "dropout",
      "version"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-12-steppers-kick-grid",
    "worldId": "reggae-dub",
    "traditionId": "reggae-steppers",
    "name": "Steppers four-kick pulse",
    "family": "Digital Reggae",
    "category": "groove",
    "description": "Steppers kick architecture: four quarter-note kicks, distinguished from one-drop by the persistent kick rather than the one-drop omission.",
    "tags": [
      "steppers"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "pulse"
    ],
    "instruments": [
      "kick",
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
      0.9,
      0.72,
      0.85,
      0.75
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "steppers"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "chorus",
      "solo"
    ],
    "patternFunction": "Steppers Kick Grid",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Digital Reggae; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "steppers"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-13-reggae-percussion-skitter",
    "worldId": "reggae-dub",
    "traditionId": "reggae-steppers",
    "name": "Reggae shaker cross-rhythm",
    "family": "Percussion",
    "category": "ostinato",
    "description": "Sparse shaker placements that sit around the skank instead of filling every eighth note.",
    "tags": [
      "shaker",
      "ghost"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "percussion"
    ],
    "instruments": [
  "shaker",
  "maracas"
],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      1,
      5,
      9,
      13
    ],
    "accentProfile": [
      0.32,
      0.42,
      0.35,
      0.45
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "shaker",
      " ghost"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Reggae Percussion Skitter",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Percussion; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "shaker",
      "ghost"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-14-dub-horn-reply",
    "worldId": "reggae-dub",
    "traditionId": "reggae-dub",
    "name": "Dub Horn Reply",
    "family": "Dub / Roots",
    "category": "interactionPattern",
    "description": "Short horn stab answers a vocal or bass phrase, then disappears.",
    "tags": [
      "horn reply"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "lead"
    ],
    "instruments": [
      "trumpet",
      "trombone"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      8,
      12,
      24,
      28
    ],
    "accentProfile": [
      0.65,
      0.8,
      0.6,
      0.78
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "horn reply"
    ],
    "density": "medium",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "chorus",
      "bridge"
    ],
    "patternFunction": "Dub Horn Reply",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "rd-14-dub-horn-reply-answer",
        "sourceRole": "lead",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "reggae-dub",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Dub / Roots; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "horn reply"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-15-dub-version-tag",
    "worldId": "reggae-dub",
    "traditionId": "reggae-dub",
    "name": "Dub Version Tag",
    "family": "Dub",
    "category": "cadence",
    "description": "A short bass-and-drum tag announces a stripped version or final fade.",
    "tags": [
      "version",
      "tag"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "fill"
    ],
    "instruments": [
      "bass",
      "drums"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      8,
      12,
      15
    ],
    "accentProfile": [
      0.65,
      0.78,
      1
    ],
    "syncopationRating": 0.33,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "version",
      " tag"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "bridge",
      "ending"
    ],
    "patternFunction": "Dub Version Tag",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Dub; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "version",
      "tag"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "rd-steppers-heavy-bass",
    "worldId": "reggae-dub",
    "traditionId": "reggae-steppers",
    "name": "Heavy Steppers Sound System Bass",
    "family": "Bass",
    "category": "groove",
    "description": "Massive deep sound-system sub-bass driving in syncopated 16ths locked with the four-on-the-floor steppers kick.",
    "tags": ["steppers", "bass", "sub", "dub", "sound-system"],
    "scopes": ["measure", "phrase", "region", "track"],
    "roles": ["bass"],
    "instruments": ["bass", "sub-bass"],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [0, 3, 6, 8, 11, 14],
    "accentProfile": [1.0, 0.75, 0.85, 1.0, 0.75, 0.85],
    "velocityProfile": [0.95, 0.7, 0.8, 0.95, 0.7, 0.8],
    "articulations": ["tenuto", "accented"],
    "density": "medium",
    "phrasePosition": ["start", "middle", "end"],
    "sectionUsage": ["verse", "chorus", "solo"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Steppers / Digital Reggae; generalized from documented musical conventions.",
    "authenticityTags": ["steppers", "bass"],
    "danceTags": ["festival-fusion"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  },
  {
    "id": "rd-steppers-syn-siren",
    "worldId": "reggae-dub",
    "traditionId": "reggae-steppers",
    "name": "Sound System Analog Dub Siren & Echo",
    "family": "Texture",
    "category": "rolePattern",
    "description": "Classic Jamaican / UK sound-system analog dub siren frequency sweep thrown into high-feedback tape delay.",
    "tags": ["steppers", "siren", "dub", "fx", "echo"],
    "scopes": ["phrase", "region", "track"],
    "roles": ["texture", "lead"],
    "instruments": ["synth"],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 16,
    "onsetGrid": [0, 6, 12, 18],
    "accentProfile": [1.0, 0.85, 0.75, 0.65],
    "velocityProfile": [0.95, 0.8, 0.7, 0.6],
    "articulations": ["accented", "staccato"],
    "density": "sparse",
    "phrasePosition": ["start", "end"],
    "sectionUsage": ["intro", "verse", "chorus", "coda"],
    "variants": [],
    "provenance": "Genre-pack support pattern for Steppers / Digital Reggae; generalized from documented musical conventions.",
    "authenticityTags": ["steppers", "siren"],
    "danceTags": ["festival-fusion"],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 1,
    "enabled": true
  }
],
  "engineProfile": {
    "phraseLengthsBars": [
      1,
      2,
      4
    ],
    "primaryPulse": [
      "bass foreground",
      "offbeat skank",
      "space / echo"
    ],
    "rhythmicPriorities": [
      "bass foreground",
      "offbeat skank",
      "space / echo"
    ],
    "harmonicStrategy": [
      "vamp and repeated progression",
      "bass-driven harmonic definition",
      "minimal chord movement"
    ],
    "melodicStrategy": [
      "bass melody",
      "vocal/horn call-response",
      "dub fragments"
    ],
    "arrangementStrategy": "Establish riddim, introduce vocal/hook, create a version, strip to bass/drums/echo, then return or fade.",
    "engineConstraints": [
      "Do not bury bass; do not use a constant kick pattern for roots; do not turn dub into continuous ambient wash.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "one-drop placement",
    "bass foregrounding",
    "skank subtraction",
    "dub dropout/echo cues",
    "steppers conversion"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "dub break",
    "instrumental",
    "version",
    "outro"
  ],
  "relationships": [
    "bass ↔ drums",
    "skank ↔ bass",
    "dub fragment ↔ lead/voice"
  ],
  "songBehaviors": [
    "keep bass legible",
    "leave space for dub effects",
    "do not overfill percussion",
    "make drops structural rather than merely quiet"
,
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize bass foreground and offbeat skank as the identity layer.",
    "Use bass melody and vocal/horn call-response for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "bass": [
      "deep melodic line"
    ],
    "electric-guitar": [
      "muted offbeat skank"
    ],
    "organ": [
      "bubble/skank"
    ],
    "drums": [
      "one-drop / steppers"
    ],
    "sub-bass": [
      "dub extension"
    ]
  },
  "combinations": [
    "Reggae + Dub Techno",
    "Reggae + Ska",
    "Dub + Ambient"
  ],
  "danceTags": [
    "social-partner",
    "listening",
    "festival-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "One-drop/steppers drum skeleton with offbeat skank and bass-led space",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back",
    "humanizeJitterMs": 8
  },
  "crossLinks": [
    "Reggae ↔ Ska",
    "Dub ↔ House/Techno"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
