import { GenreWorld } from '../../types';

export const CHINESE_TRADITIONAL_WORLD : GenreWorld = {
  "id": "chinese-traditional",
  "name": "Chinese Traditional",
  "family": "Chinese classical / folk / opera",
  "color": "#9c6b30",
  "level": "world",
  "description": "Chinese traditional music is a large family rather than one genre. This world separates literati guqin practice, Jiangnan silk-and-bamboo heterophony, and xiqu/opera accompaniment while giving the engine modal, pentatonic and ornament-aware vocabularies without imposing Western functional harmony. Pitch inflection is approximated when the renderer is 12-TET.",
  "traditions": [
    {
      "id": "chinese-traditional-guqin",
      "worldId": "chinese-traditional",
      "name": "Guqin & Literati Tradition",
      "origin": "China",
      "era": "Ancient–Present",
      "description": "Quiet, highly expressive guqin practice built around isolated plucks, harmonics, slides, ornamental pitch inflection, and spacious phrase timing rather than a fixed backbeat.",
      "characteristicInstruments": [
        "guqin",
        "xiao"
      ],
      "preferredMeters": [
        "free",
        "4/4"
      ],
      "tempoRange": [
        40,
        90
      ],
      "keySubstyles": [
        "Guqin qin music",
        "Literati chamber practice",
        "Solo qin pieces"
      ],
      "coreConcepts": [
        "san yin open strings",
        "fan yin harmonics",
        "an yin stopped notes",
        "hua yin slides",
        "breath-like phrase spacing"
      ],
      "rhythmicGrammar": [
        "asymmetric phrase lengths",
        "long rests between gestures",
        "ornament-led rather than drum-led pulse"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Open-string resonance followed by a harmonically colored stopped-note slide",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato",
        "humanizeJitterMs": 22
      },
      "sectionProgressions": {
        "intro": [
          "D5",
          "D5",
          "D5",
          "D5"
        ],
        "verse": [
          "D5",
          "D5",
          "D5",
          "D5"
        ],
        "chorus": [
          "D5",
          "D5",
          "D5",
          "D5"
        ],
        "solo": [
          "D5",
          "D5",
          "D5",
          "D5"
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
      "id": "chinese-traditional-silk-bamboo",
      "worldId": "chinese-traditional",
      "name": "Jiangnan Sizhu & Silk-and-Bamboo",
      "origin": "Jiangnan, especially Shanghai/Suzhou region",
      "era": "19th century–Present",
      "description": "Small-ensemble silk-and-bamboo chamber music with interlocking melodic lines, ornamented heterophony, flexible repetition, and bright xiao/flute, pipa, erhu and zheng colors.",
      "characteristicInstruments": [
        "dizi",
        "erhu",
        "pipa",
        "guzheng"
      ],
      "preferredMeters": [
        "4/4",
        "2/4",
        "6/8"
      ],
      "tempoRange": [
        70,
        150
      ],
      "keySubstyles": [
        "Jiangnan sizhu",
        "Silk-and-bamboo ensemble",
        "Xiaosi"
      ],
      "coreConcepts": [
        "heterophony",
        "ornamented unison",
        "ti hua / hua yin ornaments",
        "leader-follower variation",
        "cyclic tune development"
      ],
      "rhythmicGrammar": [
        "short repeated cells with ornamental displacement",
        "melodic lines breathe around a shared pulse"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Shared pentatonic melody with staggered ornaments across pipa, erhu and dizi",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight",
        "humanizeJitterMs": 8
      }
    },
    {
      "id": "chinese-traditional-opera",
      "worldId": "chinese-traditional",
      "name": "Xiqu / Opera Accompaniment",
      "origin": "China; regional opera traditions",
      "era": "Ming–Present",
      "description": "Stage-music grammar where melodic modes, spoken-sung phrasing, percussion punctuation and flexible pacing coordinate with dramatic action; regional traditions differ substantially.",
      "characteristicInstruments": [
        "jinghu",
        "dizi",
        "gongs",
        "woodblock"
      ],
      "preferredMeters": [
        "4/4",
        "2/4",
        "free"
      ],
      "tempoRange": [
        60,
        180
      ],
      "keySubstyles": [
        "Peking Opera / Jingju",
        "Kunqu",
        "Regional xiqu"
      ],
      "coreConcepts": [
        "banqiang tempo families",
        "percussion punctuation",
        "jinghu lead",
        "spoken-sung contour",
        "dramatic tempo change"
      ],
      "rhythmicGrammar": [
        "fixed ban/yan pulse in set passages",
        "cue-like percussion punctuates vocal gestures",
        "tempo may accelerate or suspend for drama"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Jinghu lead gesture answered by small gong/woodblock punctuation",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato",
        "humanizeJitterMs": 14
      }
    }
  ],
  "substyles": [
    "Guqin",
    "Jiangnan sizhu",
    "Xiqu / Jingju",
    "Kunqu",
    "Silk-and-bamboo"
  ],
  "artists": [
    "Gao Ruixue",
    "Wu Zhaoji",
    "Liu Tianhua",
    "Mei Lanfang",
    "Abing"
  ],
  "concepts": [
    "pentatonic modal vocabulary",
    "heterophony",
    "ornamented unison",
    "rubato phrase timing",
    "banqiang",
    "open-string resonance"
  ],
  "roles": {
    "melody": [
      "pentatonic single-line gestures",
      "ornamented heterophony"
    ],
    "harmony": [
      "drone-like open strings",
      "sparse interval colors"
    ],
    "percussion": [
      "woodblock cue",
      "small gong punctuation"
    ],
    "voice": [
      "spoken-sung / opera contour"
    ]
  },
  "patterns": [
  {
    "id": "ct-guqin-resonance",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-guqin",
    "name": "Guqin Resonance Gesture",
    "family": "Guqin Cells",
    "category": "cell",
    "description": "Sparse open-string attack followed by a higher harmonic/stopped response; space is part of the pattern.",
    "tags": [
      "guqin",
      "harmonic",
      "rubato"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "melody"
    ],
    "instruments": [
      "guqin"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      6,
      10
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
    "syncopationRating": 0.72,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "pluck",
      "slide"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "intro",
      "verse",
      "solo",
      "coda"
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
        "id": "ct-guqin-resonance-v-sparse",
        "parentPatternId": "ct-guqin-resonance",
        "name": "Guqin Resonance Gesture — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0,
          10
        ],
        "accentProfile": [
          0.9,
          0.65
        ]
      },
      {
        "id": "ct-guqin-resonance-v-shift",
        "parentPatternId": "ct-guqin-resonance",
        "name": "Guqin Resonance Gesture — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          6,
          10
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
      "guqin",
      "harmonic",
      "rubato"
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
    "id": "ct-sizhu-heterophony",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-silk-bamboo",
    "name": "Sizhu Heterophonic Thread",
    "family": "Heterophonic Lines",
    "category": "phrasePattern",
    "description": "A shared pentatonic phrase that can be doubled by erhu/dizi/pipa with slightly different ornament placement.",
    "tags": [
      "sizhu",
      "heterophony",
      "pentatonic"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "melody"
    ],
    "instruments": [
      "erhu",
      "dizi",
      "pipa",
      "xiao"
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
      "legato",
      "ornament"
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
        "id": "ct-sizhu-heterophony-v-sparse",
        "parentPatternId": "ct-sizhu-heterophony",
        "name": "Sizhu Heterophonic Thread — sparse",
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
        "id": "ct-sizhu-heterophony-v-shift",
        "parentPatternId": "ct-sizhu-heterophony",
        "name": "Sizhu Heterophonic Thread — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
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
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "sizhu",
      "heterophony",
      "pentatonic"
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
    "id": "ct-pipa-articulation",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-silk-bamboo",
    "name": "Pipa Articulated Tremolo",
    "family": "Pipa Figures",
    "category": "ostinato",
    "description": "Fast repeated plucks with alternating attacks, leaving the final subdivision open for breath.",
    "tags": [
      "pipa",
      "tremolo",
      "silk-and-bamboo"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "melody"
    ],
    "instruments": [
      "pipa"
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
      12
    ],
    "accentProfile": [
      1,
      0.72,
      0.9,
      0.65,
      0.88,
      0.7,
      0.82
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58,
      0.84,
      0.64,
      0.78
    ],
    "syncopationRating": 0.7,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "alternate-pluck"
    ],
    "density": "medium",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
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
        "id": "ct-pipa-articulation-v-sparse",
        "parentPatternId": "ct-pipa-articulation",
        "name": "Pipa Articulated Tremolo — sparse",
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
        "id": "ct-pipa-articulation-v-shift",
        "parentPatternId": "ct-pipa-articulation",
        "name": "Pipa Articulated Tremolo — accent shift",
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
          12
        ],
        "accentProfile": [
          0.95,
          0.7,
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
      "pipa",
      "tremolo",
      "silk-and-bamboo"
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
    "id": "ct-opera-cue",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-opera",
    "name": "Xiqu gong / woodblock punctuation",
    "family": "Opera Punctuation",
    "category": "interactionPattern",
    "description": "Stage percussion punctuation for xiqu-style cueing; the renderer approximates regional gong/woodblock timbres.",
    "tags": [
      "xiqu",
      "cue",
      "banqiang"
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
      "woodblock",
      "gongs"
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
      1,
      0.72
    ],
    "velocityProfile": [
      0.92,
      0.62,
      0.86,
      0.58,
      0.92,
      0.62
    ],
    "syncopationRating": 0.35,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "woodblock"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "intro",
      "verse",
      "bridge",
      "ending"
    ],
    "patternFunction": null,
    "roleDependencies": [],
    "interactionRules": [
      {
        "id": "ct-opera-cue-i",
        "sourceRole": "voice",
        "targetRole": "percussion",
        "relationship": "answer",
        "description": "Percussion punctuates the end of a sung/spoken gesture.",
        "timingOffsetSteps": 0,
        "probability": 0.78,
        "worldId": "chinese-traditional"
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [
      {
        "id": "ct-opera-cue-v-sparse",
        "parentPatternId": "ct-opera-cue",
        "name": "Xiqu Percussion Cue — sparse",
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
        "id": "ct-opera-cue-v-shift",
        "parentPatternId": "ct-opera-cue",
        "name": "Xiqu Percussion Cue — accent shift",
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
      "xiqu",
      "cue",
      "banqiang"
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
    "id": "ct-pentatonic-drone",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-silk-bamboo",
    "name": "Chinese open-string drone color",
    "family": "Drone Textures",
    "category": "ostinato",
    "description": "Sparse sustained resonance supporting a melody; not a Western tonic-subdominant progression.",
    "tags": [
      "drone",
      "pentatonic"
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
      "guzheng",
      "pipa"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      12
    ],
    "accentProfile": [
      1,
      0.72
    ],
    "velocityProfile": [
      0.92,
      0.62
    ],
    "syncopationRating": 0.2,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "ringing"
    ],
    "density": "sparse",
    "phrasePosition": [
      "start",
      "middle",
      "end"
    ],
    "sectionUsage": [
      "intro",
      "verse",
      "coda"
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
        "id": "ct-pentatonic-drone-v-sparse",
        "parentPatternId": "ct-pentatonic-drone",
        "name": "Pentatonic Drone Bed — sparse",
        "variationType": "sparse",
        "probability": 0.35,
        "description": "Leaves selected attacks open for a played repetition.",
        "onsetGrid": [
          0
        ],
        "accentProfile": [
          0.9
        ]
      },
      {
        "id": "ct-pentatonic-drone-v-shift",
        "parentPatternId": "ct-pentatonic-drone",
        "name": "Pentatonic Drone Bed — accent shift",
        "variationType": "accentShift",
        "probability": 0.2,
        "description": "Retains the cell while moving emphasis between repeated attacks.",
        "onsetGrid": [
          0,
          8
        ],
        "accentProfile": [
          0.95,
          0.7
        ]
      }
    ],
    "provenance": "Genre-pack structural pattern authored from documented rhythmic and ensemble conventions; generalized for engine recombination.",
    "authenticityTags": [
      "drone",
      "pentatonic"
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
    "id": "ct-06-guqin-open-string-breath",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-guqin",
    "name": "Guqin Open-String Breath",
    "family": "Guqin Cells",
    "category": "cell",
    "description": "Sparse san-yin resonance followed by a long release; the silence is intentional.",
    "tags": [
      "san yin",
      "ma",
      "rubato"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "melody"
    ],
    "instruments": [
      "guqin"
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
      0.5
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "san yin",
      " ma"
    ],
    "density": "sparse",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "intro",
      "verse",
      "coda"
    ],
    "patternFunction": "Guqin Open-String Breath",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Guqin Cells; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "san yin",
      "ma",
      "rubato"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-07-guqin-harmonic-point",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-guqin",
    "name": "Guqin Harmonic Point",
    "family": "Guqin Techniques",
    "category": "ornament",
    "description": "Natural-harmonic fan yin color used as a punctuation point rather than a sustained pad.",
    "tags": [
      "fan yin",
      "harmonic point"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "melody"
    ],
    "instruments": [
      "guqin"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      4,
      12
    ],
    "accentProfile": [
      1,
      0.55,
      0.7
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "fan yin",
      " harmonic point"
    ],
    "density": "sparse",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "bridge",
      "coda"
    ],
    "patternFunction": "Guqin Harmonic Point",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Guqin Techniques; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "fan yin",
      "harmonic point"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-08-guqin-slide-answer",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-guqin",
    "name": "Guqin Slide Answer",
    "family": "Guqin Cells",
    "category": "phrasePattern",
    "description": "Stopped-note gesture with hua yin slide answering a lower open-string tone.",
    "tags": [
      "hua yin",
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
      "melody"
    ],
    "instruments": [
      "guqin"
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
      0.75,
      0.5,
      0.8,
      0.45
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "hua yin",
      " answer"
    ],
    "density": "medium",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "bridge"
    ],
    "patternFunction": "Guqin Slide Answer",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Guqin Cells; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "hua yin",
      "answer"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-09-sizhu-shared-tune",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-silk-bamboo",
    "name": "Sizhu Shared Tune",
    "family": "Silk-and-Bamboo",
    "category": "phrasePattern",
    "description": "Shared pentatonic melody intended for ornamented heterophony across several players.",
    "tags": [
      "heterophony",
      "pentatonic",
      "ensemble"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "melody"
    ],
    "instruments": [
      "dizi",
      "erhu",
      "pipa",
      "xiao"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      4,
      8,
      12,
      16,
      20,
      24,
      28
    ],
    "accentProfile": [
      1,
      0.65,
      0.85,
      0.55,
      1,
      0.65,
      0.8,
      0.6
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "heterophony",
      " pentatonic"
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
    "patternFunction": "Sizhu Shared Tune",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Silk-and-Bamboo; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "heterophony",
      "pentatonic",
      "ensemble"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-10-sizhu-ornament-chase",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-silk-bamboo",
    "name": "Sizhu Ornament Chase",
    "family": "Silk-and-Bamboo",
    "category": "interactionPattern",
    "description": "A lead phrase is echoed with slightly delayed ornamental variants by the ensemble.",
    "tags": [
      "heterophony",
      "leader-follower"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "counterline"
    ],
    "instruments": [
      "erhu",
      "dizi",
      "pipa"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      2,
      6,
      10,
      14,
      18,
      22,
      26,
      30
    ],
    "accentProfile": [
      0.7,
      0.8,
      0.65,
      0.85,
      0.75,
      0.82,
      0.68,
      0.9
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "heterophony",
      " leader-follower"
    ],
    "density": "dense",
    "phrasePosition": [
      "middle",
      "end"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Sizhu Ornament Chase",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "ct-10-sizhu-ornament-chase-answer",
        "sourceRole": "counterline",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "chinese-traditional",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Silk-and-Bamboo; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "heterophony",
      "leader-follower"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-11-pipa-tremolo-cadence",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-silk-bamboo",
    "name": "Pipa Tremolo Cadence",
    "family": "Silk-and-Bamboo",
    "category": "cadence",
    "description": "Pipa tremolo/rolled articulation gathers energy into a phrase close.",
    "tags": [
      "lun",
      "tremolo",
      "cadence"
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
      "pipa"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      8,
      10,
      12,
      14
    ],
    "accentProfile": [
      0.55,
      0.65,
      0.78,
      1
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "lun",
      " tremolo"
    ],
    "density": "medium",
    "phrasePosition": [
      "end"
    ],
    "sectionUsage": [
      "chorus",
      "coda"
    ],
    "patternFunction": "Pipa Tremolo Cadence",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Silk-and-Bamboo; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "lun",
      "tremolo",
      "cadence"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-12-erhu-sliding-counterline",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-silk-bamboo",
    "name": "Erhu Sliding Counterline",
    "family": "Silk-and-Bamboo",
    "category": "rolePattern",
    "description": "Singing erhu line fills the spaces left by the principal tune without becoming a chord pad.",
    "tags": [
      "portamento",
      "heterophony"
    ],
    "scopes": [
      "measure",
      "phrase",
      "region",
      "track",
      "song"
    ],
    "roles": [
      "counterline"
    ],
    "instruments": [
      "erhu"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      4,
      11,
      18,
      27
    ],
    "accentProfile": [
      0.65,
      0.8,
      0.7,
      0.9
    ],
    "syncopationRating": 0.75,
    "anticipationOffset": -1,
    "swingPercentage": 50,
    "articulations": [
      "portamento",
      " heterophony"
    ],
    "density": "medium",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Erhu Sliding Counterline",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Silk-and-Bamboo; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "portamento",
      "heterophony"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-13-opera-banqiang-cue",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-opera",
    "name": "Banqiang pulse punctuation",
    "family": "Xiqu / Opera",
    "category": "groove",
    "description": "Regularized engine carrier for banqiang-style pulse; actual xiqu tempo and phrase shape vary by qupai and dramatic cue.",
    "tags": [
      "banqiang",
      "cue"
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
      "woodblock",
      "gongs"
    ],
    "meter": "2/4",
    "cycleLength": 1,
    "subdivisions": 8,
    "onsetGrid": [
      0,
      2,
      4,
      6
    ],
    "accentProfile": [
      1,
      0.55,
      0.85,
      0.65
    ],
    "syncopationRating": 0.5,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "banqiang",
      " cue"
    ],
    "density": "medium",
    "phrasePosition": [
      "start",
      "end"
    ],
    "sectionUsage": [
      "intro",
      "verse",
      "bridge"
    ],
    "patternFunction": "Opera Banqiang Cue",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Xiqu / Opera; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "banqiang",
      "cue"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-14-jinghu-vocal-echo",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-opera",
    "name": "Jinghu vocal-response gesture",
    "family": "Xiqu / Opera",
    "category": "interactionPattern",
    "description": "Short jinghu response to a vocal line, leaving room for the sung/spoken phrase.",
    "tags": [
      "jinghu",
      "vocal echo"
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
      "jinghu"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      6,
      10,
      14
    ],
    "accentProfile": [
      0.75,
      0.6,
      0.85,
      0.65
    ],
    "syncopationRating": 1.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "jinghu",
      " vocal echo"
    ],
    "density": "medium",
    "phrasePosition": [
      "middle"
    ],
    "sectionUsage": [
      "verse",
      "chorus"
    ],
    "patternFunction": "Jinghu Vocal Echo",
    "roleDependencies": [
      "melody"
    ],
    "interactionRules": [
      {
        "id": "ct-14-jinghu-vocal-echo-answer",
        "sourceRole": "lead",
        "targetRole": "melody",
        "relationship": "answer",
        "timingOffsetSteps": 2,
        "probability": 0.75,
        "worldId": "chinese-traditional",
        "description": "Enter only after the source phrase leaves a response window."
      }
    ],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Xiqu / Opera; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "jinghu",
      "vocal echo"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  },
  {
    "id": "ct-15-pentatonic-drone-bed",
    "worldId": "chinese-traditional",
    "traditionId": "chinese-traditional-guqin",
    "name": "Pentatonic Drone Bed",
    "family": "Cross-Tradition",
    "category": "ostinato",
    "description": "Open-string/drone support under a melody; deliberately avoids Western functional cadence pressure.",
    "tags": [
      "drone",
      "pentatonic"
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
      "guqin",
      "xiao"
    ],
    "meter": "4/4",
    "cycleLength": 2,
    "subdivisions": 32,
    "onsetGrid": [
      0,
      8,
      16,
      24
    ],
    "accentProfile": [
      0.8,
      0.5,
      0.8,
      0.5
    ],
    "syncopationRating": 0.0,
    "anticipationOffset": 0,
    "swingPercentage": 50,
    "articulations": [
      "drone",
      " pentatonic"
    ],
    "density": "medium",
    "phrasePosition": [
      "any"
    ],
    "sectionUsage": [
      "intro",
      "verse",
      "bridge",
      "coda"
    ],
    "patternFunction": "Pentatonic Drone Bed",
    "roleDependencies": [],
    "interactionRules": [],
    "transformations": [
      "density",
      "accent",
      "phrasePosition"
    ],
    "variants": [],
    "provenance": "Genre-pack structural pattern based on Cross-Tradition; generalized for engine recombination, not literal transcription.",
    "authenticityTags": [
      "drone",
      "pentatonic"
    ],
    "danceTags": [
      "listening"
    ],
    "tuningSystem": "12-tet",
    "difficulty": 2,
    "weight": 0.82,
    "enabled": true
  }
],
  "engineProfile": {
    "harmonicModel": "heterophonic",
    "pitchModel": "zheng-diao / anhemitonic-pentatonic by tradition",
    "timingModel": "authored-phrase",
    "phraseLengthsBars": [
      1,
      2,
      4
    ],
    "primaryPulse": [
      "breath and phrase space",
      "heterophonic variation",
      "ornament before density"
    ],
    "rhythmicPriorities": [
      "breath and phrase space",
      "heterophonic variation",
      "ornament before density"
    ],
    "harmonicStrategy": [
      "pentatonic/modal",
      "drone or open-string support",
      "avoid functional cadence as default"
    ],
    "melodicStrategy": [
      "single-line contour",
      "ornamented repetition",
      "leader-follower heterophony"
    ],
    "arrangementStrategy": "Introduce one voice, add heterophonic companions, intensify ornament, then thin to a coda.",
    "engineConstraints": [
      "Never quantize ornamental slides into generic scalar runs; never turn the ensemble into block chords.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "heterophonic doubling",
    "ornament density control",
    "rubato phrase release",
    "percussion cue placement"
  ],
  "forms": [
    "free opening",
    "theme",
    "development",
    "cadential cue",
    "coda"
  ],
  "relationships": [
    "lead ↔ heterophonic follower",
    "melody ↔ percussion cue",
    "drone ↔ melodic register"
  ],
  "songBehaviors": [
    "prefer sparse openings",
    "develop by ornamentation before adding density",
    "avoid Western four-chord assumptions in traditional presets",
    "keep pitch-bend-sensitive lines in expressive roles"
,
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize breath and phrase space and heterophonic variation as the identity layer.",
    "Use single-line contour and ornamented repetition for development rather than generic fills."
    ],
  "instrumentIdeas": {
    "guzheng": [
      "bright plucked zither arpeggiation and tremolo color"
    ],
    "pipa": [
      "articulated plucked melodic figures"
    ],
    "erhu": [
      "expressive bowed single-line melody"
    ],
    "dizi": [
      "breathy bamboo-flute lead"
    ],
    "xiao": [
      "soft low-register breathy line"
    ],
    "guitar": [
      "fallback plucked-string carrier for nontraditional rendering"
    ]
  },
  "combinations": [
    "Chinese Traditional + Ambient",
    "Sizhu + Contemporary Chamber",
    "Xiqu percussion + Experimental"
  ],
  "danceTags": [
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Pentatonic melody expressed through ornamented heterophony and cue-like percussion",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato",
    "humanizeJitterMs": 22
  },
  "crossLinks": [
    "Chinese traditional ↔ Ambient / Contemporary",
    "Chinese traditional ↔ Chinese Rock / J-pop"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
