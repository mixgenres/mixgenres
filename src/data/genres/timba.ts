import { GenreWorld } from '../../types';

export const TIMBA_WORLD: GenreWorld = {
  "id": "timba",
  "name": "Timba",
  "family": "Cuban Popular Music",
  "color": "#8964cf",
  "level": "family",
  "parentId": "afro-cuban",
  "description": "High-energy modern Cuban popular music: dynamic gear changes (marcha, presión, bomba, pedal), songo drum grooves, funk-slap displaced basslines, piano bloques, and tight horn stabs.",
  "traditions": [
    {
      "id": "timba-havana-modern",
      "worldId": "timba",
      "name": "Timba Habanera (Modern Cuban Groove)",
      "origin": "Havana, Cuba",
      "era": "1989–Present",
      "description": "Electrifying modern Cuban popular music combining songo, funk, hip-hop, and jazz with explosive gear changes (marcha, presión, bomba, pedal).",
      "characteristicInstruments": [
        "piano",
        "bass",
        "drums",
        "timbales",
        "congas",
        "trumpet",
        "sax",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        92,
        115
      ],
      "keySubstyles": [
        "Timba Pesada",
        "Songo Moderno",
        "Cuban Funk",
        "Timba Romántica"
      ],
      "coreConcepts": [
        "gear changes (engranajes)",
        "bomba (bass slap/synth breakdown)",
        "bloque tutti",
        "pedal (drone bass)",
        "piano percussive bloque"
      ],
      "rhythmicGrammar": [
        "songo drum grooves",
        "displaced syncopated slap bass",
        "complex polyrhythmic montunos"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Timba 4-gear system (Marcha → Presión → Bomba → Pedal) with songo drums",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7alt"
        ],
        "verse": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7alt"
        ],
        "chorus": [
          "Fmaj7",
          "G7",
          "Em7",
          "Am7"
        ],
        "solo": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7alt"
        ],
        "coda": [
          "Dm7",
          "Dm7",
          "Dm7",
          "Dm7"
        ]
      }
    },
    {
      "id": "timba-bata-rumba",
      "worldId": "timba",
      "name": "Afro-Cuban Folclórico & Batá-Timba",
      "origin": "Havana / Matanzas, Cuba",
      "era": "1990s–Present",
      "description": "Integration of sacred Yoruba Batá drumming (Iyá, Itótele, Okónkolo), Guaguancó rumba breakdowns, and deep folkloric vocal coros into modern Timba gears.",
      "characteristicInstruments": [
        "congas",
        "percussion",
        "drums",
        "bass",
        "piano",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "6/8",
        "12/8"
      ],
      "tempoRange": [
        90,
        112
      ],
      "keySubstyles": [
        "Batá-Timba",
        "Rumba-Timba",
        "Guaguancó Moderno",
        "Folclore Habanero"
      ],
      "coreConcepts": [
        "Batá polymetric interlock",
        "Guaguancó catá wooden ostinato",
        "Quinto solo accents",
        "Call-and-response coro montunos"
      ],
      "rhythmicGrammar": [
        "Rumba clave 3-2 / 2-3 over Yoruba 6/8 hemiolas",
        "Explosive Bomba slap breakdowns"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sacred Batá polyrhythms interlocked with electric bass slap and rumba clave",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed"
      }
    },
    {
      "id": "timba-funk-jazz",
      "worldId": "timba",
      "name": "Timba-Funk & Latin Jazz Fusion",
      "origin": "Cuba",
      "era": "1970s–Present",
      "description": "The virtuosic lineage of Irakere and Los Van Van: Changuito songo drumkit innovations, chromatic horn moñas, slap bass grooves, and sophisticated post-bop chord substitutions.",
      "characteristicInstruments": [
        "trumpet",
        "sax",
        "piano",
        "bass",
        "drums",
        "timbales",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        95,
        120
      ],
      "keySubstyles": [
        "Songo-Funk",
        "Irakere Latin Jazz",
        "Modern Van Van Songo",
        "Afro-Cuban Jazz Rock"
      ],
      "coreConcepts": [
        "Linear songo drum grooves",
        "Virtuoso horn section moñas",
        "Two-handed syncopated piano guajeos",
        "Displaced funk slap and synth bass"
      ],
      "rhythmicGrammar": [
        "Foot cowbell pulse with linear snare drags",
        "Chromatic mambo brass punches"
      ],
      "danceTags": [
        "social-partner",
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Linear Changuito songo drums interlocking with chromatic brass moña and slap bass",
      "grooveMechanics": {
        "swingPercentage": 51,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed"
      }
    }
  ],
  "substyles": [
    "Timba Pesada",
    "Songo",
    "Cuban Funk",
    "Timba-Jazz"
  ],
  "artists": [
    "Los Van Van",
    "NG La Banda",
    "Irakere",
    "Issac Delgado",
    "Paulito FG",
    "Alexander Abreu & Havana D’Primera",
    "Cimafunk"
  ],
  "concepts": [
    "engranajes (gear changes)",
    "marcha",
    "presión",
    "bomba",
    "pedal",
    "songo",
    "bloque",
    "displaced bass"
  ],
  "roles": {
    "bass": [
      "displaced funk bass",
      "slap bomba breakdown",
      "sustained pedal",
      "tumbao progression"
    ],
    "piano": [
      "percussive bloque",
      "syncopated timba montuno",
      "block chords"
    ],
    "drumKit": [
      "songo groove",
      "foot cowbell pulse",
      "linear snare fills"
    ],
    "percussion": [
      "timbal bell drive",
      "conga slaps",
      "guiro rasp"
    ],
    "lead": [
      "horn section stabs",
      "trumpet solos",
      "vocal pregón dialogues"
    ]
  },
  "patterns": [
    {
      "id": "timba-gear-marcha",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Gear Change: Marcha (Standard Drive)",
      "family": "Timba Gear System",
      "category": "sectionPattern",
      "description": "Base gear featuring full driving groove with piano montuno, driving cáscara, and displaced bass.",
      "tags": [
        "timba",
        "gear",
        "marcha",
        "groove"
      ],
      "scopes": [
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
        "keys"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        4,
        6,
        10,
        12,
        14,
        16,
        20,
        22,
        26,
        28,
        30
      ],
      "accentProfile": [
        0.9,
        0.7,
        1,
        0.7,
        0.95,
        1,
        0.9,
        0.7,
        1,
        0.7,
        0.95,
        1
      ],
      "velocityProfile": [
        0.9,
        0.7,
        1,
        0.7,
        0.9,
        1,
        0.9,
        0.7,
        1,
        0.7,
        0.9,
        1
      ],
      "density": "dynamic",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "montuno",
        "gear-change"
      ],
      "variants": [
        {
          "id": "timba-gear-bomba",
          "parentPatternId": "timba-gear-marcha",
          "name": "Gear Change: Bomba (Bass Slap & Kick Breakdown)",
          "variationType": "breakdown",
          "probability": 0.6,
          "onsetGrid": [
            0,
            6,
            12,
            16,
            22,
            28
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            1,
            0.85,
            0.95
          ],
          "description": "Drop to raw sub-bass slap and floor tom / kick drum pulse."
        },
        {
          "id": "timba-gear-presion",
          "parentPatternId": "timba-gear-marcha",
          "name": "Gear Change: Presión (High Tension Climax)",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            16,
            18,
            20,
            22,
            24,
            26,
            28,
            30
          ],
          "accentProfile": [
            1,
            0.8,
            1,
            0.8,
            1,
            0.8,
            1,
            0.9,
            1,
            0.8,
            1,
            0.8,
            1,
            0.8,
            1,
            1
          ],
          "description": "Maximum density and cowbell acceleration for peak dancer energy."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
          "id": "timba-interaction-1",
          "worldId": "timba",
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
      "id": "timba-songo-groove",
      "worldId": "timba",
      "traditionId": "timba-funk-jazz",
      "name": "Songo Drum Kit & Cowbell Groove (Changuito / Los Van Van)",
      "family": "Songo Drumming",
      "category": "fill",
      "description": "Changuito’s revolutionary drum groove combining foot cowbell, snare ghost notes, and tom accents.",
      "tags": [
        "songo",
        "drums",
        "los-van-van",
        "changuito",
        "timba"
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
        "timbales",
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
        14
      ],
      "accentProfile": [
        0.95,
        0.5,
        0.9,
        0.6,
        0.95,
        0.5,
        1,
        0.6
      ],
      "velocityProfile": [
        0.9,
        0.5,
        0.85,
        0.6,
        0.9,
        0.5,
        0.95,
        0.6
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "montuno"
      ],
      "variants": [
        {
          "id": "timba-songo-with-snare-drag",
          "parentPatternId": "timba-songo-groove",
          "name": "Songo with Linear Snare Drags",
          "variationType": "ornamented",
          "probability": 0.5,
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            8,
            10,
            11,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.4,
            0.6,
            0.9,
            0.6,
            0.95,
            0.4,
            0.6,
            1,
            0.6
          ],
          "description": "Syncopated linear snare fills weaving between tom accents."
        },
        {
          "id": "timba-songo-groove-variant-bongo-bell-drive",
          "parentPatternId": "timba-songo-groove",
          "name": "Bongo Bell Drive",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Driving cowbell syncopation for high-energy presión sections. Retained as a variation rather than a separate pattern entry.",
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
            0.6,
            0.85,
            0.65,
            0.95,
            0.6,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.8,
            0.6,
            0.9,
            0.55,
            0.8,
            0.65
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
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
      "id": "timba-displaced-bass",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Displaced Funk / Timba Bassline",
      "family": "Timba Bass Systems",
      "category": "ostinato",
      "description": "Syncopated bass utilizing slap thumb pops, 16th-note ghost notes, and displaced metric pivots.",
      "tags": [
        "bass",
        "slap",
        "funk",
        "timba",
        "displaced"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track"
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
        10,
        12,
        15
      ],
      "accentProfile": [
        0.9,
        0.85,
        1,
        0.8,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.9,
        0.8,
        0.95,
        0.75,
        0.9,
        0.85
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "montuno",
        "gear-change"
      ],
      "variants": [
        {
          "id": "timba-bass-pedal-riff",
          "parentPatternId": "timba-displaced-bass",
          "name": "Timba Pedal Bass (Root Anchor)",
          "variationType": "sparse",
          "probability": 0.45,
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.8,
            0.95
          ],
          "description": "Heavy sustained pedal point creating tension before a gear release."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
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
      "interactionRules": [
        {
          "id": "timba-interaction-2",
          "worldId": "timba",
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
      "id": "timba-conga-gear",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Timba Conga Gear",
      "family": "Conga",
      "category": "break",
      "description": "Dense modern timba conga pattern with heel-toe, slap, and resonant open tones.",
      "tags": [],
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
        3,
        4,
        7,
        8,
        11,
        12,
        15
      ],
      "accentProfile": [
        0.75,
        0.95,
        0.6,
        0.85,
        0.75,
        0.95,
        0.6,
        0.9
      ],
      "velocityProfile": [
        0.7,
        0.95,
        0.55,
        0.8,
        0.7,
        0.95,
        0.55,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
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
      "id": "timba-bata-fusion",
      "worldId": "timba",
      "traditionId": "timba-bata-rumba",
      "name": "Bata Fusion",
      "family": "Percussion",
      "category": "cadence",
      "description": "Bata drum accents blended into drumkit polyrhythm.",
      "tags": [],
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
        10,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.8,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.75,
        0.9
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
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
      "id": "timba-synth-bass",
      "worldId": "timba",
      "traditionId": "timba-funk-jazz",
      "name": "Synth Bass Tumbao",
      "family": "Bass",
      "category": "groove",
      "description": "Aggressive synth bass timba line punching offbeats.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
      ],
      "instruments": [
        "synth",
        "bass"
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
        0.85,
        1,
        0.85,
        0.95
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.8,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
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
      "interactionRules": [
        {
          "id": "timba-interaction-3",
          "worldId": "timba",
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
      "id": "timba-piano-guajeo",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Piano Guajeo",
      "family": "Piano",
      "category": "groove",
      "description": "Syncopated two-handed timba piano ostinato.",
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
        0.9,
        0.75,
        1,
        0.7,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.85,
        0.7,
        0.95,
        0.65,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
      "id": "timba-kick-bomobo",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Kick Bombo",
      "family": "Drum Kit",
      "category": "groove",
      "description": "Kick hitting the bombo note heavily before beat 3 and 1.",
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
        6,
        14
      ],
      "accentProfile": [
        1,
        0.85
      ],
      "velocityProfile": [
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
      "id": "timba-horn-moña",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Horn Moña",
      "family": "Horns",
      "category": "groove",
      "description": "Interlocking brass riffs cutting through the texture.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "brass",
        "trumpet"
      ],
      "instruments": [
        "brass",
        "trumpet"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        9,
        12
      ],
      "accentProfile": [
        0.85,
        1,
        0.75,
        0.9,
        0.95
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.7,
        0.85,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
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
      "id": "timba-clave-rumba",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "2-3 Rumba Clave",
      "family": "Clave",
      "category": "groove",
      "description": "Rumba clave direction fundamental to modern timba.",
      "tags": [],
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
        8,
        11,
        14
      ],
      "accentProfile": [
        0.9,
        0.85,
        1,
        0.95,
        0.85
      ],
      "velocityProfile": [
        0.85,
        0.8,
        0.95,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
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
      "id": "timba-anticipated-pedal",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Anticipated Presión Pedal",
      "family": "Bass",
      "category": "groove",
      "description": "Bass hits landing a 16th note ahead of every beat, an aggressively anticipated pedal used to ratchet tension into the presión climax.",
      "tags": [
        "timba",
        "anticipated",
        "presion"
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
        3,
        7,
        11,
        15
      ],
      "accentProfile": [
        0.8,
        0.9,
        0.95,
        1
      ],
      "velocityProfile": [
        0.75,
        0.85,
        0.9,
        0.95
      ],
      "density": "medium",
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "gear-change"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Timba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba"
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "timba-phrase-12",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Gear Change Phrase",
      "family": "Gear Change",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around songo and the gear change vocabulary of Timba.",
      "tags": [
        "timba",
        "gear-change",
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
        6,
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
      "swingPercentage": 53,
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
      "provenance": "Timba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba",
        "gear-change"
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
      "id": "timba-call-13",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Coro Response",
      "family": "Coro / backing vocals",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around bomba and the coro vocabulary of Timba.",
      "tags": [
        "timba",
        "coro",
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
        7,
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
      "provenance": "Timba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba",
        "coro"
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
      "id": "timba-anchor-14",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Moña Anchor",
      "family": "Moña",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around moña in Timba.",
      "tags": [
        "timba",
        "mona",
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
        8,
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
      "provenance": "Timba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba",
        "mona"
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
      "id": "timba-comp-15",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Presión Comping",
      "family": "Presión",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around gear changes and the presión vocabulary of Timba.",
      "tags": [
        "timba",
        "presion",
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
        0,
        3,
        4,
        6,
        10,
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
      "provenance": "Timba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba",
        "presion"
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
      "id": "timba-intro-16",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Marcha Intro",
      "family": "Marcha",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around presión and the marcha vocabulary of Timba.",
      "tags": [
        "timba",
        "marcha",
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
      "syncopationRating": 0.83,
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
          "id": "timba-intro-16-v-03",
          "parentPatternId": "timba-intro-16",
          "name": "Marcha Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            4,
            6,
            9,
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
      "provenance": "Timba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "timba",
        "marcha"
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
      "id": "timba-voice-phrasing",
      "worldId": "timba",
      "traditionId": "timba-havana-modern",
      "name": "Timba Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Coro and sonero phrasing template shaped around gear changes, presión, and short response cells.",
      "tags": [
        "timba",
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
        "bridge",
        "coro"
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
          "id": "timba-voice-phrasing-v-voice-alt",
          "parentPatternId": "timba-voice-phrasing",
          "name": "Timba Vocal Phrasing — alternate phrasing",
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
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Timba; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "timba",
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
      "id": "timba-guaguanco-break",
      "worldId": "timba",
      "traditionId": "timba-bata-rumba",
      "name": "Guaguancó Rumba Break & Catá",
      "family": "Percussion",
      "category": "groove",
      "description": "High-energy Guaguancó breakdown with wooden catá stick pattern, low salidor conga tumbao, and explosive quinto accents.",
      "tags": ["timba", "rumba", "guaguanco", "cata", "congas"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "pulse"],
      "instruments": ["congas", "percussion"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.7, 0.95, 0.6, 0.9, 0.7, 0.85],
      "velocityProfile": [0.95, 0.65, 0.9, 0.55, 0.85, 0.65, 0.8],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Afro-Cuban Folclórico & Batá-Timba; generalized from documented musical conventions.",
      "authenticityTags": ["timba", "rumba"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "timba-bata-coro-call",
      "worldId": "timba",
      "traditionId": "timba-bata-rumba",
      "name": "Afro-Cuban Coro Call & Response",
      "family": "Voice",
      "category": "phrasePattern",
      "description": "Responsorial African-diaspora vocal call answered by the full band coro over rumba clave syncopation.",
      "tags": ["timba", "coro", "voice", "call-and-response"],
      "scopes": ["phrase", "region", "track"],
      "roles": ["melody", "lead"],
      "instruments": ["voice"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 12, 16, 19, 22, 24, 28],
      "accentProfile": [1.0, 0.75, 0.9, 0.8, 0.95, 1.0, 0.75, 0.9, 0.8, 0.95],
      "velocityProfile": [0.95, 0.7, 0.85, 0.75, 0.9, 0.95, 0.7, 0.85, 0.75, 0.9],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["chorus", "coda"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Afro-Cuban Folclórico & Batá-Timba; generalized from documented musical conventions.",
      "authenticityTags": ["timba", "voice"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "timba-bomba-slap-gear",
      "worldId": "timba",
      "traditionId": "timba-bata-rumba",
      "name": "Bomba Gear Slap Bass Breakdown",
      "family": "Bass",
      "category": "groove",
      "description": "The notorious Timba 'Bomba' gear: piano cuts out completely, bass drops thunderous thumb slaps and pops on the offbeats locked with kick drum bombs.",
      "tags": ["timba", "bomba", "slap-bass", "gear"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass"],
      "instruments": ["bass"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [2, 5, 8, 11, 14],
      "accentProfile": [0.9, 1.0, 0.85, 1.0, 0.95],
      "velocityProfile": [0.85, 1.0, 0.8, 1.0, 0.9],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Afro-Cuban Folclórico & Batá-Timba; generalized from documented musical conventions.",
      "authenticityTags": ["timba", "bomba"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "timba-irakere-brass-tumbao",
      "worldId": "timba",
      "traditionId": "timba-funk-jazz",
      "name": "Irakere Chromatic Brass Moña",
      "family": "Brass",
      "category": "phrasePattern",
      "description": "Virtuosic multi-horn mambo/moña with fast unison chromatic bebop lines and syncopated rhythmic punches.",
      "tags": ["timba", "brass", "irakere", "jazz", "horns"],
      "scopes": ["phrase", "region", "track"],
      "roles": ["lead", "melody"],
      "instruments": ["trumpet", "sax"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 11, 14, 16, 18, 20, 22, 24, 27, 30],
      "accentProfile": [1.0, 0.8, 0.95, 0.8, 0.9, 0.95, 1.0, 0.75, 0.85, 0.8, 1.0, 0.85, 0.95],
      "velocityProfile": [0.95, 0.75, 0.9, 0.75, 0.85, 0.9, 0.95, 0.7, 0.8, 0.75, 0.95, 0.8, 0.9],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Timba-Funk & Latin Jazz Fusion; generalized from documented musical conventions.",
      "authenticityTags": ["timba", "brass"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "timba-songo-cowbell-ride",
      "worldId": "timba",
      "traditionId": "timba-funk-jazz",
      "name": "Songo Mambo Cowbell & Kick Bomb",
      "family": "Drums",
      "category": "groove",
      "description": "High-intensity songo drum kit groove with driving mambo bell pattern, open hi-hat sizzles, and syncopated bass drum bombs.",
      "tags": ["timba", "songo", "cowbell", "drums", "kick-bomb"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["drums", "pulse"],
      "instruments": ["drums", "timbales"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.6, 0.9, 0.7, 0.95, 0.6, 1.0, 0.75],
      "velocityProfile": [0.95, 0.55, 0.85, 0.65, 0.9, 0.55, 0.95, 0.7],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Timba-Funk & Latin Jazz Fusion; generalized from documented musical conventions.",
      "authenticityTags": ["timba", "drums"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "gear changes",
    "metric displacement",
    "slap bass thumb pops",
    "linear drum fills",
    "stop-time bloques"
  ],
  "forms": [
    "intro",
    "verse (marcha)",
    "coro (presión)",
    "mambo",
    "bomba breakdown",
    "pedal tension",
    "coda"
  ],
  "relationships": [
    "bass ↔ drum kick (slap and punch lock)",
    "piano ↔ horns (bloque coordination)",
    "coro ↔ lead (explosive call and response)"
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
    "rapid gear shifts altering groove texture without stopping tempo",
    "unison ensemble hits exploding out of dense rhythms",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "bass": [
      "slap and pop passages in bomba section",
      "displaced syncopations"
    ],
    "piano": [
      "two-handed energetic montuno variations",
      "percussive chord chops"
    ],
    "drums": [
      "songo pattern with foot cowbell and open hi-hat accents"
    ],
    "voice": [
      "sonero/coro phrasing"
    ],
    "trumpet": [
      "gear-change horn moñas"
    ]
  },
  "combinations": [
    "Timba + Funk",
    "Timba + Jazz",
    "Timba + Hip-Hop"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Timba 4-gear system (Marcha → Presión → Bomba → Pedal) with songo drums",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "pushed"
  },
  "crossLinks": [
    "Timba ↔ Salsa (lineage)",
    "Timba ↔ Funk (songo/slap crossover)",
    "Timba ↔ Jazz (Cuban Latin Jazz)"
  ]
};
