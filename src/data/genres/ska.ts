import { GenreWorld } from '../../types';

export const SKA_WORLD : GenreWorld = {
  "id": "ska",
  "name": "Ska",
  "family": "Jamaican / UK revival",
  "color": "#d4a72c",
  "level": "world",
  "description": "Ska gets its own world because its offbeat guitar/piano language, walking bass and horn responses are not interchangeable with reggae. First-wave Jamaican ska, 2 Tone and the ska-to-rocksteady continuum receive distinct patterns and groove profiles.",
  "traditions": [
    {
      "id": "ska-first-wave",
      "worldId": "ska",
      "name": "First-Wave Jamaican Ska",
      "origin": "Jamaica",
      "era": "Late 1950s–1960s",
      "description": "Up-tempo Jamaican precursor to rocksteady/reggae with walking bass, offbeat guitar/piano chops, horn riffs and energetic drum punctuation.",
      "characteristicInstruments": [
        "bass",
        "guitar",
        "piano",
        "trumpet",
        "trombone",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        170
      ],
      "keySubstyles": [
        "First-wave ska",
        "Jamaican ska"
      ],
      "coreConcepts": [
        "walking bass",
        "offbeat chop",
        "horn riff",
        "shuffle-like guitar comp"
      ],
      "rhythmicGrammar": [
        "steady four-beat pulse with emphatic offbeat chords",
        "bass often walks between chord tones"
      ],
      "danceTags": [
        "festival-fusion",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Offbeat guitar/piano chop with walking bass and horn answer",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed",
        "humanizeJitterMs": 6
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "Am",
          "F",
          "G"
        ],
        "verse": [
          "C",
          "Am",
          "F",
          "G"
        ],
        "chorus": [
          "F",
          "G",
          "C",
          "Am"
        ],
        "solo": [
          "C",
          "Am",
          "F",
          "G"
        ],
        "coda": [
          "C",
          "G",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "ska-two-tone",
      "worldId": "ska",
      "name": "2 Tone Ska",
      "origin": "UK / Jamaican diaspora",
      "era": "Late 1970s–1980s",
      "description": "British revival grammar combining ska offbeats with punk/new-wave energy, tighter drum patterns and prominent bass/guitar interplay.",
      "characteristicInstruments": [
        "bass",
        "electric-guitar",
        "drums",
        "organ",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        165
      ],
      "keySubstyles": [
        "2 Tone",
        "Ska revival"
      ],
      "coreConcepts": [
        "upstroke guitar",
        "bass hook",
        "punk dynamics",
        "organ stabs"
      ],
      "rhythmicGrammar": [
        "fast offbeat guitar with straight rock drum drive",
        "bass carries hook between chord hits"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Fast upstroke guitar over punchy bass and rock-inflected drums",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed",
        "humanizeJitterMs": 5
      }
    },
    {
      "id": "ska-rocksteady-bridge",
      "worldId": "ska",
      "name": "Ska / Rocksteady Continuum",
      "origin": "Jamaica",
      "era": "1960s–Present",
      "description": "Slower transition zone where ska offbeats relax into rocksteady/reggae bass emphasis and vocal harmony.",
      "characteristicInstruments": [
        "bass",
        "guitar",
        "drums",
        "backing-vocals"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        75,
        120
      ],
      "keySubstyles": [
        "Rocksteady",
        "Early reggae"
      ],
      "coreConcepts": [
        "bass foreground",
        "offbeat guitar",
        "vocal harmony",
        "one-drop transition"
      ],
      "rhythmicGrammar": [
        "less frantic offbeat texture",
        "bass and vocal harmony become more prominent"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Relaxed offbeat guitar with melodic bass and stacked vocal response",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 8
      }
    }
  ],
  "substyles": [
    "First-Wave Ska",
    "2 Tone",
    "Rocksteady",
    "Ska Revival"
  ],
  "artists": [
    "The Skatalites",
    "Prince Buster",
    "Desmond Dekker",
    "The Specials",
    "Madness",
    "The Selecter"
  ],
  "concepts": [
    "offbeat chop",
    "walking bass",
    "horn answer",
    "2 Tone drive",
    "rocksteady transition"
  ],
  "roles": {
    "harmony": [
      "offbeat guitar/piano"
    ],
    "bass": [
      "walking / melodic bass"
    ],
    "lead": [
      "horn riffs"
    ],
    "drums": [
      "ska drive"
    ],
    "voice": [
      "call-and-response"
    ]
  },
  "patterns": [
  {
    "id": "sk-offbeat-chop",
    "worldId": "ska",
    "traditionId": "ska-first-wave",
    "name": "Ska Offbeat Chop",
    "family": "Ska Skank",
    "category": "ostinato",
    "description": "Short guitar/piano attacks on every offbeat, with velocity shaped toward the upbeat.",
    "tags": [
      "ska",
      "upstroke",
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
      "piano"
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
    "syncopationRating": 0.78,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "upstroke"
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
        "id": "sk-offbeat-chop-v-sparse",
        "parentPatternId": "sk-offbeat-chop",
        "name": "Ska Offbeat Chop — sparse",
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
        "id": "sk-offbeat-chop-v-shift",
        "parentPatternId": "sk-offbeat-chop",
        "name": "Ska Offbeat Chop — accent shift",
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
    "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
    "authenticityTags": [
      "ska",
      "upstroke",
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
    "id": "sk-walking-bass",
    "worldId": "ska",
    "traditionId": "ska-first-wave",
    "name": "Ska Walking Bass",
    "family": "Ska Bass",
    "category": "phrasePattern",
    "description": "Walking bass connects chord roots with passing tones while leaving the offbeat chop visible.",
    "tags": [
      "ska",
      "walking",
      "bass"
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
      "upright-bass"
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
      0.72,
      0.9,
      0.65,
      0.88,
      0.7,
      0.82,
      0.62
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58,
      0.84,
      0.64,
      0.78,
      0.58
    ],
    "syncopationRating": 0.62,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "walking"
    ],
    "density": "dense",
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
        "id": "sk-walking-bass-v-sparse",
        "parentPatternId": "sk-walking-bass",
        "name": "Ska Walking Bass — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          4,
          8,
          12
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9,
          0.65
        ]
      },
      {
        "id": "sk-walking-bass-v-shift",
        "parentPatternId": "sk-walking-bass",
        "name": "Ska Walking Bass — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
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
          0.95,
          0.7,
          0.95,
          0.7,
          0.95,
          0.7,
          0.95,
          0.7
        ]
      }
    ],
    "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
    "authenticityTags": [
      "ska",
      "walking",
      "bass"
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
    "id": "sk-horn-answer",
    "worldId": "ska",
    "traditionId": "ska-first-wave",
    "name": "Horn Section Answer",
    "family": "Ska Horns",
    "category": "interactionPattern",
    "description": "Short brass riff answers the guitar/vocal phrase at the end of each two-bar unit.",
    "tags": [
      "ska",
      "horn",
      "answer"
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
      16,
      20,
      22,
      24,
      28,
      30
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
    "syncopationRating": 0.72,
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
      "chorus",
      "solo"
    ],
    "patternFunction": null,
    "roleDependencies": [],
    "interactionRules": [
      {
        "id": "sk-horn-answer-i",
        "sourceRole": "harmony",
        "targetRole": "lead",
        "relationship": "answer",
        "description": "Horn section fills the gap left by the guitar/vocal phrase.",
        "timingOffsetSteps": 0,
        "probability": 0.75,
        "worldId": "ska"
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [
      {
        "id": "sk-horn-answer-v-sparse",
        "parentPatternId": "sk-horn-answer",
        "name": "Horn Section Answer — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          16,
          22,
          28
        ],
        "accentProfile": [
          0.9,
          0.65,
          0.9
        ]
      },
      {
        "id": "sk-horn-answer-v-shift",
        "parentPatternId": "sk-horn-answer",
        "name": "Horn Section Answer — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          16,
          20,
          22,
          24,
          28,
          30
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
    "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
    "authenticityTags": [
      "ska",
      "horn",
      "answer"
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
    "id": "sk-two-tone-drive",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Two-tone upstroke drive",
    "family": "2 Tone Rhythm",
    "category": "groove",
    "description": "Tighter revival-era offbeat guitar with a more aggressive attack than first-wave ska; same placement, different articulation and section role.",
    "tags": [
      "2tone",
      "ska",
      "punk"
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
      "upstroke"
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
        "id": "sk-two-tone-drive-v-sparse",
        "parentPatternId": "sk-two-tone-drive",
        "name": "2 Tone Drive — sparse",
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
        "id": "sk-two-tone-drive-v-shift",
        "parentPatternId": "sk-two-tone-drive",
        "name": "2 Tone Drive — accent shift",
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
    "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
    "authenticityTags": [
      "2tone",
      "ska",
      "punk"
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
    "id": "sk-rocksteady-bass",
    "worldId": "ska",
    "traditionId": "ska-rocksteady-bridge",
    "name": "Rocksteady Bass Hold",
    "family": "Rocksteady Bass",
    "category": "ostinato",
    "description": "Longer bass notes and fewer attacks shift the continuum toward reggae while preserving offbeat accompaniment.",
    "tags": [
      "rocksteady",
      "bass",
      "reggae"
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
      "upright-bass"
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
    "syncopationRating": 0.35,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "legato"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "bridge",
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
        "id": "sk-rocksteady-bass-v-sparse",
        "parentPatternId": "sk-rocksteady-bass",
        "name": "Rocksteady Bass Hold — sparse",
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
        "id": "sk-rocksteady-bass-v-shift",
        "parentPatternId": "sk-rocksteady-bass",
        "name": "Rocksteady Bass Hold — accent shift",
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
    "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
    "authenticityTags": [
      "rocksteady",
      "bass",
      "reggae"
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
    "id": "sk-06-first-wave-offbeat-chop",
    "worldId": "ska",
    "traditionId": "ska-first-wave",
    "name": "First-Wave Offbeat Chop",
    "family": "First-Wave Ska",
    "category": "cell",
    "description": "Crisp guitar/piano upstrokes on the offbeats, tightly separated from the bass.",
    "tags": [
      "offbeat chop"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "rhythm-guitar"
    ],
    "instruments": [
      "electric-guitar",
      "piano"
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
      0.8,
      0.72,
      0.78,
      0.75
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "offbeat chop"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "First-Wave Offbeat Chop",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "offbeat chop"
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
    "id": "sk-07-walking-ska-bass",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Ska walking bass contour",
    "family": "First-Wave Ska",
    "category": "bass",
    "description": "Walking bass contour with an approach tone, rather than a straight quarter-note pulse.",
    "tags": [
      "walking bass"
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
      14
    ],
    "accentProfile": [
      0.9,
      0.68,
      0.82,
      0.7,
      0.9,
      0.68,
      0.82,
      0.7
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "walking bass"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus",
      "solo"
    ],
    "patternFunction": "Walking Ska Bass",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "walking bass"
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
    "id": "sk-08-horn-section-answer",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Horn Section Answer",
    "family": "First-Wave Ska",
    "category": "interactionPattern",
    "description": "Short horn riff responds after vocal/guitar phrase, often in tight ensemble hits.",
    "tags": [
      "horn answer"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "horn-section"
    ],
    "instruments": [
  "trumpet",
  "trombone",
  "alto-sax"
],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      8,
      10,
      12,
      24,
      26,
      28
    ],
    "accentProfile": [
      0.65,
      0.72,
      0.85,
      0.62,
      0.7,
      0.9
    ],
    "syncopationRating": 0.33,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "horn answer"
    ],
    "density": "medium",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "chorus",
      "bridge"
    ],
    "patternFunction": "Horn Section Answer",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "sk-08-horn-section-answer-answer",
        "sourceRole": "horn-section",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "ska",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "horn answer"
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
    "id": "sk-09-ska-drum-drive",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Ska Drum Drive",
    "family": "First-Wave Ska",
    "category": "groove",
    "description": "Up-tempo drum pattern that keeps the backbeat crisp while the guitar occupies the offbeats.",
    "tags": [
      "drive"
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
      4,
      6,
      8,
      12,
      14
    ],
    "accentProfile": [
      0.9,
      0.65,
      0.5,
      0.82,
      0.92,
      0.55
    ],
    "syncopationRating": 0.33,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "drive"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Ska Drum Drive",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "drive"
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
    "id": "sk-10-rocksteady-transition",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Rocksteady Transition",
    "family": "Ska → Rocksteady",
    "category": "sectionPattern",
    "description": "Reduce tempo feel and rhythmic density, emphasizing bass and vocal space.",
    "tags": [
      "rocksteady"
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
      "drums"
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
      0.85,
      0.5,
      0.7,
      0.55
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "rocksteady"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "bridge",
      "breakdown"
    ],
    "patternFunction": "Rocksteady Transition",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Ska → Rocksteady; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "rocksteady"
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
    "id": "sk-11-two-tone-guitar-pulse",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Two-Tone Guitar Pulse",
    "family": "Two-Tone",
    "category": "groove",
    "description": "Sharper punk-influenced offbeat guitar with slightly denser drum accents.",
    "tags": [
      "two-tone"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "rhythm-guitar"
    ],
    "instruments": [
      "electric-guitar"
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
      0.65,
      0.45,
      0.72,
      0.62,
      0.5,
      0.76
    ],
    "syncopationRating": 0.67,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "two-tone"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "chorus"
    ],
    "patternFunction": "Two-Tone Guitar Pulse",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Two-Tone; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "two-tone"
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
    "id": "sk-12-ska-piano-bubble",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Piano bubble response",
    "family": "First-Wave Ska",
    "category": "cell",
    "description": "Offbeat piano bubble used as a lighter keyboard counterpart to guitar upstrokes.",
    "tags": [
      "piano bubble"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "piano"
    ],
    "instruments": [
      "piano"
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
      0.6,
      0.7,
      0.62,
      0.74
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "piano bubble"
    ],
    "density": "medium",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Ska Piano Bubble",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on First-Wave Ska; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "piano bubble"
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
    "id": "sk-13-ska-horn-stab",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Horn offbeat punctuations",
    "family": "Horn Section",
    "category": "cell",
    "description": "Short horn punctuation displaced from the guitar chop, allowing the two layers to interlock.",
    "tags": [
      "horn stab"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "brass"
    ],
    "instruments": [
      "trumpet",
      "trombone"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      3,
      7,
      11,
      15
    ],
    "accentProfile": [
      0.75,
      0.55,
      0.8,
      0.62
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "horn stab"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "chorus",
      "bridge"
    ],
    "patternFunction": "Ska Horn Stab",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Horn Section; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "horn stab"
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
    "id": "sk-14-ska-break-call",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Ska Break Call",
    "family": "Break",
    "category": "break",
    "description": "Band stop followed by horn pickup or drum cue into the next chorus.",
    "tags": [
      "stop-time",
      "pickup"
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
  "drums",
  "horn-section"
],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      12,
      14
    ],
    "accentProfile": [
      0.8,
      0.55,
      0.9
    ],
    "syncopationRating": 0.33,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "stop-time",
      " pickup"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "bridge",
      "chorus"
    ],
    "patternFunction": "Ska Break Call",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Break; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "stop-time",
      "pickup"
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
    "id": "sk-15-ska-final-shout",
    "worldId": "ska",
    "traditionId": "ska-two-tone",
    "name": "Ska Final Shout",
    "family": "Cadence",
    "category": "cadence",
    "description": "Full-band accent sequence for the ending, with horns and drums resolving together.",
    "tags": [
      "final hit"
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
  "drums",
  "horn-section",
  "guitar"
],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      8,
      12,
      15
    ],
    "accentProfile": [
      1,
      0.7,
      0.82,
      0.75,
      1
    ],
    "syncopationRating": 0.2,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "final hit"
    ],
    "density": "medium",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "ending"
    ],
    "patternFunction": "Ska Final Shout",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Authored genre-pack pattern based on Cadence; designed for engine-level recombination rather than literal transcription.",
    "authenticityTags": [
      "final hit"
    ],
    "danceTags": [
      "festival-fusion"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  }
],
  "engineProfile": {
    "phraseLengthsBars": [
      1,
      2
    ],
    "primaryPulse": [
      "offbeat chop",
      "walking bass",
      "horn punctuation"
    ],
    "rhythmicPriorities": [
      "offbeat chop",
      "walking bass",
      "horn punctuation"
    ],
    "harmonicStrategy": [
      "bright cyclic harmony",
      "simple functional turns",
      "repeated progressions supporting horn/vocal hooks"
    ],
    "melodicStrategy": [
      "short horn riffs",
      "walking/chromatic bass",
      "offbeat guitar/piano"
    ],
    "arrangementStrategy": "Intro/verse/chorus repetition, horn breaks, instrumental passages and stop-time cues are common; later two-tone variants can add rock/punk density.",
    "engineConstraints": [
      "Do not use reggae one-drop as the default; do not make horns continuous pads; retain crisp offbeats.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "offbeat articulation",
    "walking bass generation",
    "horn answer probability",
    "rocksteady density reduction"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "instrumental",
    "break",
    "outro"
  ],
  "relationships": [
    "guitar ↔ bass",
    "guitar ↔ horns",
    "bass ↔ drums"
  ],
  "songBehaviors": [
    "keep upbeats crisp",
    "do not turn ska into four-on-floor EDM",
    "use horns as responses",
    "reduce density as the style approaches rocksteady"
,
    "Phrase in 1–2 bar units before making a major pattern change.",
    "Prioritize offbeat chop and walking bass as the identity layer.",
    "Use short horn riffs and walking/chromatic bass for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "electric-guitar": [
      "tight upstroke chop"
    ],
    "piano": [
      "offbeat piano"
    ],
    "bass": [
      "walking melodic bass"
    ],
    "trumpet": [
      "short horn answers"
    ],
    "trombone": [
      "low horn responses"
    ]
  },
  "combinations": [
    "Ska + Reggae",
    "Ska + Rock",
    "2 Tone + New Wave"
  ],
  "danceTags": [
    "festival-fusion",
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Offbeat chop + walking bass + horn response",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed",
    "humanizeJitterMs": 6
  },
  "crossLinks": [
    "Ska ↔ Reggae / Dub",
    "Ska ↔ Rock / Funk"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
