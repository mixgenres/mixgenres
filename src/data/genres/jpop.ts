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
      "id": "jpop-city-pop",
      "worldId": "j-pop",
      "name": "Japanese City Pop",
      "origin": "Tokyo, Japan",
      "era": "1970s–1980s",
      "description": "Sophisticated Tokyo cosmopolitan funk-pop: slap bass ostinatos, lush jazz 7th/9th chord extensions on electric piano, bright chorus guitars, and tight studio backbeats.",
      "characteristicInstruments": [
        "bass",
        "electric-guitar",
        "keys",
        "drums",
        "synth",
        "brass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        126
      ],
      "keySubstyles": [
        "City Pop (Tatsuro Yamashita, Mariya Takeuchi)",
        "Shibuya-kei",
        "Breeze Pop"
      ],
      "coreConcepts": [
        "syncopated slap bass pocket",
        "major 7th and minor 9th chord voicings",
        "chorus-drenched clean guitar chops",
        "tight funk snare backbeat"
      ],
      "rhythmicGrammar": [
        "16th-note syncopated bass thumbing locking with kick on 1, 3-and"
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
      "sectionProgressions": {
        "intro": [
          "Fmaj7",
          "G/F",
          "Em7",
          "Am7"
        ],
        "verse": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "Cmaj7"
        ],
        "chorus": [
          "Fmaj7",
          "G7/F",
          "Em7",
          "A7",
          "Dm7",
          "G7",
          "Cmaj7",
          "C7"
        ],
        "solo": [
          "Fmaj7",
          "Em7",
          "Dm7",
          "G7"
        ]
      }
    },
    {
      "id": "jpop-jrock",
      "worldId": "j-pop",
      "name": "J-Rock & Anime Rock Anthem",
      "origin": "Japan",
      "era": "1990s–Present",
      "description": "High-energy, harmonically sophisticated rock featuring driving eighth-note basslines, blazing dual-guitar power chords, melodic guitar hooks, and explosive chorus drops.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "synth",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        135,
        185
      ],
      "keySubstyles": [
        "Anime Opening (Shonen Rock)",
        "Visual Kei (X Japan, L’Arc~en~Ciel)",
        "Modern J-Rock (King Gnu, Radwimps)"
      ],
      "coreConcepts": [
        "melodic driving bass (Tetsuo Sakurai/Kameda lineage)",
        "dense modal chord substitutions",
        "fast 16th hi-hat work",
        "anthemic guitar hooks"
      ],
      "rhythmicGrammar": [
        "driving 8th-note kick and bass with punchy 2 & 4 snare hits"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Driving 8th bass with fast syncopated royal road (Oudou) progression",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": -1,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "IV",
          "V",
          "iii",
          "vi"
        ],
        "verse": [
          "Fmaj7",
          "G",
          "Am",
          "C"
        ],
        "chorus": [
          "Fmaj7",
          "G",
          "Em7",
          "Am7",
          "Dm7",
          "G7",
          "C",
          "C7"
        ],
        "solo": [
          "Am",
          "F",
          "G",
          "Em"
        ]
      }
    }
  ],
  "substyles": [
    "City Pop",
    "Shibuya-kei",
    "J-Rock Anime Anthem",
    "Visual Kei",
    "Breeze Pop"
  ],
  "artists": [
    "Tatsuro Yamashita",
    "Mariya Takeuchi",
    "Anri",
    "Miki Matsubara",
    "King Gnu",
    "Radwimps",
    "Yoasobi",
    "Official HIGE DANDism"
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 0.7,
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
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
      "syncopationRating": 0.71,
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
        
        ],
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
        0.9,
        0.62,
        0.95
      ],
      "syncopationRating": 0.71,
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
        
        
        ],
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "syncopationRating": 0.71,
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
        
        ],
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "syncopationRating": 0.71,
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
        
        ],
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "syncopationRating": 0.67,
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
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "syncopationRating": 0.67,
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
        
        ],
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "syncopationRating": 0.67,
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
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
      "provenance": "J-Pop & City Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
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
        ],
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for J-Pop & City Pop; generalized for engine coverage, not a transcription.",
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
    },
    {
      "id": "jpop-jrock-anime-drums",
      "worldId": "j-pop",
      "traditionId": "jpop-jrock",
      "name": "High-Energy Anime Anthem Rock Kit",
      "family": "Drums",
      "category": "groove",
      "description": "High-velocity 160bpm driving rock drums with rapid 16th-note hi-hat grooves, four-on-the-floor double-time kick, and cracking snare on 2 and 4.",
      "tags": ["j-rock", "drums", "anime", "rock", "anthem"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["drums", "pulse"],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.7, 0.95, 0.7, 1.0, 0.7, 0.95, 0.7],
      "velocityProfile": [0.95, 0.65, 0.9, 0.65, 0.95, 0.65, 0.9, 0.65],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for J-Rock & Anime Rock Anthem; generalized from documented musical conventions.",
      "authenticityTags": ["j-rock", "drums"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "jpop-jrock-oudou-guitar",
      "worldId": "j-pop",
      "traditionId": "jpop-jrock",
      "name": "Royal Road (Oudou) Power Chords",
      "family": "Guitar",
      "category": "harmony",
      "description": "High-gain wall-of-sound rhythm electric guitar driving the iconic Royal Road (IV-V-iii-vi) chord progression with 16th-note anticipation chugs.",
      "tags": ["j-rock", "guitar", "power-chords", "oudou"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["guitar", "harmony"],
      "instruments": ["electric-guitar"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 15, 16, 18, 20, 22, 24, 26, 28, 31],
      "accentProfile": [1.0, 0.75, 0.9, 0.75, 1.0, 0.75, 0.9, 0.85, 1.0, 0.75, 0.9, 0.75, 1.0, 0.75, 0.9, 0.85],
      "velocityProfile": [0.95, 0.7, 0.85, 0.7, 0.95, 0.7, 0.85, 0.8, 0.95, 0.7, 0.85, 0.7, 0.95, 0.7, 0.85, 0.8],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for J-Rock & Anime Rock Anthem; generalized from documented musical conventions.",
      "authenticityTags": ["j-rock", "guitar"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "jpop-jrock-lead-hook",
      "worldId": "j-pop",
      "traditionId": "jpop-jrock",
      "name": "Anthemic Dual-Guitar Melody Hook",
      "family": "Lead",
      "category": "phrasePattern",
      "description": "Blazing, lyrical unison lead guitar melody soaring above the Oudou chords with dramatic wide vibrato.",
      "tags": ["j-rock", "lead", "guitar", "melody", "anime"],
      "scopes": ["phrase", "region", "track"],
      "roles": ["melody", "lead"],
      "instruments": ["electric-guitar"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 11, 14, 16, 19, 22, 24, 28],
      "accentProfile": [1.0, 0.8, 0.9, 0.8, 0.95, 0.8, 1.0, 0.8, 0.9, 0.8, 0.95],
      "velocityProfile": [0.95, 0.75, 0.85, 0.75, 0.9, 0.75, 0.95, 0.75, 0.85, 0.75, 0.9],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "chorus", "solo", "coda"],
      "variants": [],
      "provenance": "Genre-pack support pattern for J-Rock & Anime Rock Anthem; generalized from documented musical conventions.",
      "authenticityTags": ["j-rock", "lead"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
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
