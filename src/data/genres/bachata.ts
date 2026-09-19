import { GenreWorld } from '../../types';

export const BACHATA_WORLD: GenreWorld = {
  "id": "bachata",
  "name": "Bachata",
  "family": "Caribbean / Latin Dance",
  "color": "#d2768e",
  "level": "world",
  "description": "Dominican dance tradition defined by Bachata’s 3 structural gears (Derecho verse, Majao chorus, Mambo solo breakdown), lead requinto ornamentation, and high-octane Merengue Típico & Orquesta rhythm sections.",
  "traditions": [
    {
      "id": "latin-bachata",
      "worldId": "bachata",
      "name": "Bachata Tradicional & Dominicana",
      "origin": "Dominican Republic",
      "era": "1960s–Present",
      "description": "The romantic guitar dance tradition structured around 3 distinct performance gears: Derecho (verse picking), Majao (driving syncopated chorus), and Mambo (virtuosic instrumental breakdown).",
      "characteristicInstruments": [
        "guitar",
        "electric-guitar",
        "bass",
        "bongos",
        "guiro",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        145
      ],
      "keySubstyles": [
        "Bachata Tradicional (Luis Vargas, Antony Santos)",
        "Bachata Urbana (Aventura, Romeo Santos)",
        "Bachata Sensual (Dembow fusion)"
      ],
      "coreConcepts": [
        "3 bachata gears: derecho (verse), majao (chorus), mambo (instrumental breakdown)",
        "requinto ornamentation",
        "bongo martillo to campana",
        "anticipated bass pulse"
      ],
      "rhythmicGrammar": [
        "güira repique 16th scrape with accents on downbeats",
        "bass anticipation on 4th beat leading into downbeat"
      ],
      "danceTags": [
        "social-partner",
        "sensual-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "3 gears: Derecho (verse), Majao (chorus), Mambo (instrumental breakdown)",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": -1,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "derecho": [
          "Bm",
          "G",
          "D",
          "A"
        ],
        "verse": [
          "Bm",
          "G",
          "D",
          "A"
        ],
        "majao": [
          "G",
          "A",
          "D",
          "Bm"
        ],
        "chorus": [
          "G",
          "A",
          "D",
          "Bm"
        ],
        "mambo": [
          "Em",
          "F#7",
          "Bm",
          "Bm"
        ],
        "solo": [
          "Em",
          "F#7",
          "Bm",
          "Bm"
        ]
      }
    },
    {
      "id": "latin-merengue",
      "worldId": "bachata",
      "name": "Merengue Típico & Orquesta",
      "origin": "Dominican Republic",
      "era": "1850s–Present",
      "description": "Fast, high-octane 2/2 dance rhythm driven by two-sided tambora drumming, metallic güira, frantic accordion / sax jaleos, and rolling bass.",
      "characteristicInstruments": [
        "percussion",
        "bass",
        "accordion",
        "sax",
        "trumpet",
        "guiro"
      ],
      "preferredMeters": [
        "2/2",
        "4/4"
      ],
      "tempoRange": [
        130,
        175
      ],
      "keySubstyles": [
        "Merengue Típico (Perico Ripiao)",
        "Merengue de Orquesta (Juan Luis Guerra)",
        "Mambo Urbano"
      ],
      "coreConcepts": [
        "tambora golpe (wood rim and head slap)",
        "güira continuous drive",
        "sax jaleos",
        "merengue bass gallop"
      ],
      "rhythmicGrammar": [
        "tambora [rim, slap, head, head]",
        "sax syncopated 16th jaleos"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Tambora fast gallop rim-slap ostinato",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "verse": [
          "C",
          "G7",
          "C",
          "G7"
        ],
        "chorus": [
          "F",
          "G7",
          "C",
          "C"
        ],
        "mambo": [
          "C",
          "F",
          "G7",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Bachata Tradicional",
    "Bachata Urbana",
    "Bachata Sensual",
    "Merengue Típico",
    "Merengue de Orquesta",
    "Cumbia Colombiana",
    "Cumbia Villera"
  ],
  "artists": [
    "Romeo Santos",
    "Aventura",
    "Antony Santos",
    "Luis Vargas",
    "Juan Luis Guerra",
    "Los Hermanos Rosario",
    "Celso Piña"
  ],
  "concepts": [
    "3 gears: derecho (verse), majao (chorus), mambo (breakdown)",
    "requinto treble picking",
    "bongo martillo to campana",
    "güira repique",
    "anticipated bass pulse"
  ],
  "roles": {
    "lead": [
      "requinto picking",
      "accordion melody",
      "sax jaleos"
    ],
    "harmony": [
      "segunda guitar chords",
      "piano merengue comping",
      "guitar chops"
    ],
    "bass": [
      "anticipated bachata bass",
      "merengue bass gallop",
      "syncopated cumbia bass"
    ],
    "percussion": [
      "bongo martillo",
      "güira repique",
      "tambora",
      "guacharaca"
    ]
  },
  "patterns": [
    {
      "id": "bachata-requinto-derecho",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Requinto Derecho (Verse Picking)",
      "family": "Bachata Requinto",
      "category": "ostinato",
      "description": "Crisp lead guitar arpeggiation with muted thumb strokes and bright treble ornamentations during the verse (Derecho gear).",
      "tags": [
        "bachata",
        "requinto",
        "guitar",
        "derecho",
        "dominican"
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
        "melodic-guitar"
      ],
      "instruments": [
        "guitar",
        "electric-guitar"
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
        0.95,
        0.5,
        0.85,
        0.5,
        0.9,
        0.5,
        1,
        0.6
      ],
      "velocityProfile": [
        0.9,
        0.5,
        0.8,
        0.5,
        0.85,
        0.5,
        0.95,
        0.6
      ],
      "articulations": [
        "muted-thumb",
        "bright-pluck"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "derecho",
        "verse"
      ],
      "variants": [
        {
          "id": "bachata-requinto-majao-sync",
          "parentPatternId": "bachata-requinto-derecho",
          "name": "Requinto Majao (Chorus Drive)",
          "variationType": "syncopated",
          "probability": 0.6,
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
            0.8,
            0.95,
            0.7,
            0.9,
            1
          ],
          "description": "Syncopated sync-pluck driving the energetic Majao chorus."
        },
        {
          "id": "bachata-requinto-mambo-solo",
          "parentPatternId": "bachata-requinto-derecho",
          "name": "Requinto Mambo (Virtuosic Solo Breakdown)",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.6,
            0.7,
            0.6,
            0.9,
            0.8,
            0.6,
            1,
            0.6,
            0.7,
            0.6,
            0.9,
            1,
            0.7
          ],
          "description": "Rapid 16th-note scalar runs and bends in the instrumental mambo section."
        },
        {
          "id": "bachata-requinto-derecho-variant-bongo-martillo-g-ira-repique",
          "parentPatternId": "bachata-requinto-derecho",
          "name": "Bongo Martillo & Güira Repique",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Bongo alternating between low thumb and high rim pop on beat 4, locked with continuous metallic güira rasping. Retained as a variation rather than a separate pattern entry.",
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
            0.8,
            0.4,
            0.85,
            0.4,
            0.8,
            0.4,
            1,
            0.5
          ],
          "velocityProfile": [
            0.8,
            0.45,
            0.8,
            0.45,
            0.8,
            0.45,
            1,
            0.5
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "bachata-requinto-derecho-variant-bachata-mambo-solo",
          "parentPatternId": "bachata-requinto-derecho",
          "name": "Bachata Mambo Solo",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Fast virtuosic arpeggiated requinto lines for the instrumental mambo gear. Retained as a variation rather than a separate pattern entry.",
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
            0.75,
            0.9,
            0.75,
            0.95,
            0.75,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.95,
            0.7,
            0.85,
            0.7,
            0.9,
            0.7,
            0.85,
            0.75
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 0.7,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
          "id": "bachata-interaction-1",
          "worldId": "bachata",
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
      "id": "bachata-mambo-bass-drive",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Bass Mambo Drive",
      "family": "Bachata Bass",
      "category": "ostinato",
      "description": "Driving syncopated bachata bass for the mambo breakdown gear.",
      "tags": [
        "bachata",
        "bass",
        "mambo",
        "syncopated"
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
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        8,
        14
      ],
      "accentProfile": [
        0.9,
        1,
        0.8,
        0.95
      ],
      "velocityProfile": [
        0.85,
        1,
        0.75,
        0.9
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
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 1,
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
          "id": "bachata-interaction-2",
          "worldId": "bachata",
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
      "id": "bachata-bass-derecho",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Bass Derecho",
      "family": "Bass",
      "category": "fill",
      "description": "Standard bachata bass on 1, 2-and, 3, 4 anchoring the derecho rhythm.",
      "tags": [
        "bachata",
        "bass",
        "derecho"
      ],
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
        6,
        8,
        12
      ],
      "accentProfile": [
        1,
        0.9,
        0.85,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.8,
        0.9
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "derecho",
        "verse"
      ],
      "variants": [
        
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
      "id": "bachata-bass-majao",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Bass Majao",
      "family": "Bass",
      "category": "break",
      "description": "Driving syncopated bass pattern for majao choruses and high energy lifts.",
      "tags": [
        "bachata",
        "bass",
        "majao"
      ],
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
        8,
        12
      ],
      "accentProfile": [
        1,
        0.85,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "majao",
        "chorus",
        "mambo"
      ],
      "variants": [
        
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
      "id": "bachata-bongo-derecho",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Bongo Derecho",
      "family": "Bongo",
      "category": "cadence",
      "description": "Martillo bongo pattern for verses with open tone pop on 4.",
      "tags": [
        "bachata",
        "bongo",
        "derecho"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],
      "instruments": [
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
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        0.7,
        0.6,
        0.85,
        0.6,
        0.7,
        0.6,
        1,
        0.65
      ],
      "velocityProfile": [
        0.65,
        0.55,
        0.8,
        0.55,
        0.65,
        0.55,
        0.95,
        0.6
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "derecho",
        "verse",
        "ending",
        "turnaround"
      ],
      "variants": [
        
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
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
      "id": "bachata-bongo-majao",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Bongo Majao",
      "family": "Bongo",
      "category": "groove",
      "description": "Heavy bongo pattern with resonant bell tones for majao choruses.",
      "tags": [
        "bachata",
        "bongo",
        "majao"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],
      "instruments": [
        "percussion"
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
        1,
        0.9,
        1
      ],
      "velocityProfile": [
        0.85,
        0.95,
        0.85,
        0.95
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "majao",
        "chorus",
        "mambo"
      ],
      "variants": [
        {
          "id": "bachata-bongo-majao-variant-requinto-majao-chops",
          "parentPatternId": "bachata-bongo-majao",
          "name": "Requinto Majao Chops",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Rhythmic chord chops on the requinto locking with the güira. Retained as a variation rather than a separate pattern entry.",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.9,
            1,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.85,
            0.95,
            0.8,
            0.9
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
          "id": "bachata-interaction-3",
          "worldId": "bachata",
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
      "id": "bachata-guira-majao",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Güira Majao",
      "family": "Guira",
      "category": "groove",
      "description": "Continuous 16ths on the metal güira with accented downbeats.",
      "tags": [
        "bachata",
        "guira",
        "majao"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],
      "instruments": [
        "percussion"
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
        1,
        0.6,
        0.85,
        0.6,
        0.95,
        0.6,
        0.85,
        0.6,
        1,
        0.6,
        0.85,
        0.6,
        0.95,
        0.6,
        0.85,
        0.65
      ],
      "velocityProfile": [
        0.95,
        0.5,
        0.8,
        0.5,
        0.9,
        0.5,
        0.8,
        0.5,
        0.95,
        0.5,
        0.8,
        0.5,
        0.9,
        0.5,
        0.8,
        0.55
      ],
      "density": "dense",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "majao",
        "chorus",
        "mambo"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 5,
      "weight": 1,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
          "id": "bachata-interaction-4",
          "worldId": "bachata",
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
      "id": "bachata-segunda-derecho",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Segunda Guitar",
      "family": "Guitar",
      "category": "groove",
      "description": "Rhythm acoustic guitar striking syncopated upbeats with a dynamic 4-beat pulse.",
      "tags": [
        "bachata",
        "guitar",
        "segunda"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar"
      ],
      "instruments": [
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
        0.88,
        0.96,
        0.88,
        1
      ],
      "velocityProfile": [
        0.82,
        0.92,
        0.82,
        0.96
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "derecho",
        "verse",
        "majao",
        "chorus"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "bachata-interaction-5",
          "worldId": "bachata",
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
      "id": "bachata-guira-derecho",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Güira Derecho Steady Scrape",
      "family": "Guiro",
      "category": "groove",
      "description": "Classic steady 16th scraping güira pattern for the derecho verse gear.",
      "tags": [
        "bachata",
        "guiro",
        "derecho",
        "percussion"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion"
      ],
      "instruments": [
        "percussion"
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
        0.75,
        1,
        0.75,
        0.75,
        1
      ],
      "velocityProfile": [
        0.7,
        0.7,
        0.95,
        0.7,
        0.7,
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
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Bachata genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
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
      "id": "bachata-roster-drums",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Bachata drums part",
      "family": "Derecho",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives this genre an authored part for one of its declared instruments. Built around derecho in Bachata.",
      "tags": [
        "bachata",
        "derecho",
        "roster",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "drums"
      ],
      "instruments": [
        "drums",
        "drums"
      ],
      "compatibleRoles": [
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "drums"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        7,
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
      "syncopationRating": 0.57,
      "anticipationOffset": 0,
      "swingPercentage": 53,
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
        "modal traditional context",
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
      ],
      "provenance": "Bachata genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata",
        "derecho"
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
      "id": "bachata-call-11",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Majao Response",
      "family": "Majao",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around majao in Bachata.",
      "tags": [
        "bachata",
        "majao",
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
        1,
        3,
        5,
        8,
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
        0.62,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.9,
        0.62,
        0.95
      ],
      "syncopationRating": 0.71,
      "anticipationOffset": 0,
      "swingPercentage": 53,
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
        "modal traditional context",
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
        
        
        ],
      "provenance": "Bachata genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata",
        "majao"
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
      "id": "bachata-anchor-12",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Mambo Anchor",
      "family": "Mambo",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around requinto and the mambo vocabulary of Bachata.",
      "tags": [
        "bachata",
        "mambo",
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
        4,
        6,
        9,
        10,
        13
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
      "syncopationRating": 0.71,
      "anticipationOffset": 0,
      "swingPercentage": 53,
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
        "modal traditional context",
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
        
        ],
      "provenance": "Bachata genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata",
        "mambo"
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
      "id": "bachata-comp-13",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Coro Comping",
      "family": "Coro / backing vocals",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around mambo and the coro vocabulary of Bachata.",
      "tags": [
        "bachata",
        "coro",
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
        2,
        4,
        6,
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
      "syncopationRating": 0.57,
      "anticipationOffset": 0,
      "swingPercentage": 53,
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
        "modal traditional context",
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
        
        ],
      "provenance": "Bachata genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata",
        "coro"
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
      "id": "bachata-intro-14",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Requinto Intro",
      "family": "Requinto",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around güira/bongo interplay and the requinto vocabulary of Bachata.",
      "tags": [
        "bachata",
        "requinto",
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
        1,
        3,
        6,
        8,
        11,
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
      "syncopationRating": 0.86,
      "anticipationOffset": 0,
      "swingPercentage": 53,
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
        "modal traditional context",
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
          "id": "bachata-intro-14-v-03",
          "parentPatternId": "bachata-intro-14",
          "name": "Requinto Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
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
      "provenance": "Bachata genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata",
        "requinto"
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
      "id": "bachata-verse-15",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Derecho Verse Variation",
      "family": "Derecho",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around derecho in Bachata.",
      "tags": [
        "bachata",
        "derecho",
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
        0,
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
      "syncopationRating": 0.57,
      "anticipationOffset": 0,
      "swingPercentage": 53,
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
        "modal traditional context",
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
        
        ],
      "provenance": "Bachata genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata",
        "derecho"
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
      "id": "bachata-chorus-16",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Majao Chorus Lift",
      "family": "Majao",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around majao in Bachata.",
      "tags": [
        "bachata",
        "majao",
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
        1,
        3,
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
      "syncopationRating": 0.86,
      "anticipationOffset": 1,
      "swingPercentage": 53,
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
        "modal traditional context",
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
          "id": "bachata-chorus-16-v-03",
          "parentPatternId": "bachata-chorus-16",
          "name": "Majao Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            3,
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
      "provenance": "Bachata genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "bachata",
        "majao"
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
      "id": "bachata-voice-phrasing",
      "worldId": "bachata",
      "traditionId": "latin-bachata",
      "name": "Bachata Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Romantic verse/coro phrase placement that leaves room for requinto answers and instrumental mambo.",
      "tags": [
        "bachata",
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
      "syncopationRating": 0.67,
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
          "id": "bachata-voice-phrasing-v-voice-alt",
          "parentPatternId": "bachata-voice-phrasing",
          "name": "Bachata Vocal Phrasing — alternate phrasing",
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
        ],
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Bachata; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "bachata",
        "voice"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "merengue-tambora-golpe",
      "worldId": "bachata",
      "traditionId": "latin-merengue",
      "name": "Merengue Tambora Golpe & Repique",
      "family": "Merengue Rhythm Section",
      "category": "groove",
      "description": "Two-headed Dominican tambora gallop with wood rim strikes, open tones, and crisp hand slaps.",
      "tags": ["merengue", "tambora", "percussion", "drums", "pulse"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "drums", "pulse"],
      "instruments": ["percussion", "drums"],
      "meter": "2/2",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 4, 7, 8, 10, 12, 14, 15],
      "accentProfile": [1.0, 0.7, 0.9, 0.95, 0.7, 0.9, 0.85, 0.8],
      "velocityProfile": [0.95, 0.65, 0.85, 0.95, 0.65, 0.85, 0.8, 0.75],
      "articulations": ["slap", "rimshot", "open"],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "mambo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Merengue Típico & Orquesta; generalized from documented musical conventions.",
      "authenticityTags": ["merengue", "tambora"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "merengue-guira-repique",
      "worldId": "bachata",
      "traditionId": "latin-merengue",
      "name": "Merengue Güira Continuous Fast Scrape",
      "family": "Merengue Rhythm Section",
      "category": "timeline",
      "description": "Relentless metallic güira driving the fast 2/2 merengue engine with sharp downbeat rim accents.",
      "tags": ["merengue", "guira", "percussion", "pulse"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "guiro"],
      "instruments": ["guiro", "percussion"],
      "meter": "2/2",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.6, 0.8, 0.6, 0.95, 0.6, 0.8, 0.6],
      "velocityProfile": [0.95, 0.6, 0.75, 0.6, 0.9, 0.6, 0.75, 0.6],
      "articulations": ["scraped", "accented"],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "mambo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Merengue Típico & Orquesta; generalized from documented musical conventions.",
      "authenticityTags": ["merengue", "guira"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "merengue-bass-gallop",
      "worldId": "bachata",
      "traditionId": "latin-merengue",
      "name": "Merengue Gallop Bass",
      "family": "Merengue Bass Section",
      "category": "bass",
      "description": "Fast rolling 2-beat gallop bass walking between root and fifth with chromatic slide lead-ins.",
      "tags": ["merengue", "bass", "gallop", "pulse"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass", "pulse"],
      "instruments": ["bass"],
      "meter": "2/2",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 4, 6, 8, 12, 14],
      "accentProfile": [1.0, 0.7, 0.85, 0.95, 0.7, 0.85],
      "velocityProfile": [0.95, 0.7, 0.8, 0.9, 0.7, 0.8],
      "articulations": ["staccato", "tenuto"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "mambo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Merengue Típico & Orquesta; generalized from documented musical conventions.",
      "authenticityTags": ["merengue", "bass"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "merengue-sax-jaleo",
      "worldId": "bachata",
      "traditionId": "latin-merengue",
      "name": "Merengue Saxophone Jaleo & Mambo Riff",
      "family": "Merengue Horn Section",
      "category": "lead",
      "description": "Frantic, tightly synchronized alto/tenor saxophone syncopated jaleo riffs.",
      "tags": ["merengue", "sax", "jaleo", "horns", "lead"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["lead", "sax", "brass", "horn-section"],
      "instruments": ["sax", "trumpet"],
      "meter": "2/2",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [2, 4, 7, 8, 10, 12, 14, 15],
      "accentProfile": [0.85, 0.9, 0.75, 0.95, 0.8, 0.9, 0.85, 0.95],
      "velocityProfile": [0.8, 0.85, 0.7, 0.9, 0.75, 0.85, 0.8, 0.9],
      "articulations": ["staccato", "accented"],
      "density": "dense",
      "phrasePosition": ["start", "middle"],
      "sectionUsage": ["chorus", "mambo", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Merengue Típico & Orquesta; generalized from documented musical conventions.",
      "authenticityTags": ["merengue", "sax"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "merengue-piano-montuno",
      "worldId": "bachata",
      "traditionId": "latin-merengue",
      "name": "Merengue Piano Montuno & Accordion Jaleo",
      "family": "Merengue Harmony Section",
      "category": "montuno",
      "description": "Rapid syncopated octaves and accordion flourishes providing the harmonic bounce for merengue.",
      "tags": ["merengue", "piano", "accordion", "harmony", "keys"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["harmony", "piano", "accordion", "keys"],
      "instruments": ["piano", "accordion", "keys"],
      "meter": "2/2",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 11, 14],
      "accentProfile": [0.95, 0.8, 0.9, 0.95, 0.8, 0.9],
      "velocityProfile": [0.9, 0.75, 0.85, 0.9, 0.75, 0.85],
      "articulations": ["martellato", "staccato"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "mambo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Merengue Típico & Orquesta; generalized from documented musical conventions.",
      "authenticityTags": ["merengue", "piano"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "requinto muted picking and bright plucks",
    "güira fast 16th scraping",
    "tambora rim/slap combination",
    "bongo high rim accent on 4"
  ],
  "forms": [
    "intro",
    "derecho",
    "majao",
    "derecho",
    "majao",
    "mambo",
    "majao",
    "coda"
  ],
  "relationships": [
    "requinto ↔ bongo (matching accent dynamics)",
    "güira ↔ bass (continuous time anchor)",
    "lead vocals ↔ requinto responses"
  ],
  "transformations": [
    "trans-density-dense",
    "trans-anticipation",
    "trans-syncopation-tresillo",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "seamless gear shifting from romantic derecho into energetic majao and blazing mambo",
    "constant call-and-response between vocals and lead guitar/accordion",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "bachata requinto treble picking",
      "acoustic segunda rhythm chops"
    ],
    "bass": [
      "melodic anticipated bass with chromatic turns"
    ],
    "drums": [
      "bongo/güira emulation on drum kit with crisp hi-hat and rimshots"
    ],
    "voice": [
      "lead vocal and coro phrasing"
    ]
  },
  "combinations": [
    "Bachata + Merengue",
    "Bachata + R&B",
    "Bachata + Dembow",
    "Bachata + Pop"
  ],
  "danceTags": [
    "social-partner",
    "sensual-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "3 gears: Derecho (verse), Majao (chorus), Mambo (instrumental breakdown)",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": -1,
    "microtimingFeel": "pushed"
  },
  "crossLinks": [
    "Bachata ↔ Merengue (Dominican sister tradition)",
    "Bachata ↔ Cumbia (see Cumbia world)",
    "Bachata ↔ Dembow / Reggaeton",
    "Bachata ↔ Bolero",
    "Bachata ↔ R&B"
  ]
};
