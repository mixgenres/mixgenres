import { GenreWorld } from '../../types';

export const SALSA_WORLD: GenreWorld = {
  "id": "salsa",
  "name": "Salsa",
  "family": "Caribbean / Cuban",
  "color": "#d3a23d",
  "level": "world",
  "description": "The monumental Afro-Cuban & Salsa universe: Son Clave 2-3 & 3-2, syncopated bass tumbaos, interlocking piano montunos, cáscara, bongo martillo, conga marchas, and explosive horn mambos.",
  "traditions": [
    {
      "id": "afro-son-montuno",
      "worldId": "salsa",
      "name": "Son Montuno & Changüí (Cuban Root)",
      "origin": "Eastern Cuba (Santiago, Guantánamo, Havana)",
      "era": "1920–Present",
      "description": "The architectural pillar of Afro-Cuban music: son clave, anticipatory bass tumbao, piano montunos, tres guajeos, and bongo martillo.",
      "characteristicInstruments": [
        "piano",
        "bass",
        "congas",
        "bongos",
        "trumpet",
        "guitar"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        85,
        115
      ],
      "keySubstyles": [
        "Son Tradicional",
        "Son Montuno",
        "Changüí",
        "Guajira",
        "Bolero-Son"
      ],
      "coreConcepts": [
        "son clave 2-3 & 3-2",
        "tumbao",
        "guajeo / montuno",
        "martillo",
        "anticipación"
      ],
      "rhythmicGrammar": [
        "son clave: [0, 6, 12, 16, 22] or [0, 6, 10, 16, 22]",
        "bass tumbao landing on 4-and (step 14) and 4 (step 12)"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Son Clave [3-2 / 2-3] with anticipatory bass tumbao on 4-and",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "verse": [
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "chorus": [
          "C",
          "G7",
          "Am",
          "E7"
        ],
        "solo": [
          "Dm",
          "G7",
          "C",
          "E7"
        ],
        "coda": [
          "Am",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "afro-salsa-dura",
      "worldId": "salsa",
      "name": "Salsa Dura & Mambo (NY / Puerto Rico / Cali)",
      "origin": "New York (Fania), San Juan, Cali",
      "era": "1950–Present",
      "description": "High-energy urban salsa: roaring horn mambos, timbal cáscara and bongo bell (campana), aggressive piano montunos, and dramatic breaks.",
      "characteristicInstruments": [
        "timbales",
        "congas",
        "bongos",
        "cowbell",
        "piano",
        "bass",
        "trumpet",
        "sax"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        180,
        220
      ],
      "keySubstyles": [
        "Salsa Dura",
        "Mambo",
        "Guaracha",
        "Salsa Romántica",
        "Salsa en Cali"
      ],
      "coreConcepts": [
        "campana bongo bell",
        "timbal cáscara",
        "mambo section horn blocks",
        "coro-pregón",
        "bloque / break"
      ],
      "rhythmicGrammar": [
        "timbal bell driving on quarter beats",
        "bongo bell on 1 2 3 4 with syncopated upbeats"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Bongo campana bell driving on 1-2-3-4 with interlocking piano montuno",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Gm",
          "Cm",
          "D7",
          "Gm"
        ],
        "verse": [
          "Gm",
          "Cm",
          "D7",
          "Gm"
        ],
        "chorus": [
          "Bb",
          "F7",
          "Gm",
          "D7"
        ],
        "solo": [
          "Cm7",
          "F7",
          "Bbmaj7",
          "D7"
        ],
        "coda": [
          "Gm",
          "D7",
          "Gm",
          "Gm"
        ]
      }
    },
    {
      "id": "afro-rumba",
      "worldId": "salsa",
      "name": "Rumba (Guaguancó, Yambú, Columbia)",
      "origin": "Matanzas & Havana",
      "description": "Secular Afro-Cuban drum and vocal tradition based on rumba clave, interlocking congas (quinto, tres dos, salidor), and catá.",
      "characteristicInstruments": [
        "congas",
        "hand-percussion",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "6/8",
        "12/8"
      ],
      "tempoRange": [
        90,
        140
      ],
      "keySubstyles": [
        "Guaguancó (Medium)",
        "Yambú (Slow)",
        "Columbia (Fast 6/8)",
        "Rumba Abierta"
      ],
      "coreConcepts": [
        "rumba clave (delayed 3rd hit)",
        "quinto improvisation",
        "salidor pulse",
        "catá / cáscara"
      ],
      "rhythmicGrammar": [
        "rumba clave: [0, 6, 14, 16, 22] in 2 bars"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Rumba clave with interlocking quinto and salidor conga tones",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "atrasado",
        "humanizeJitterMs": 16
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "A7",
          "Dm",
          "A7"
        ],
        "verse": [
          "Dm",
          "A7",
          "Dm",
          "A7"
        ],
        "chorus": [
          "Dm",
          "Gm",
          "A7",
          "Dm"
        ],
        "coda": [
          "Dm",
          "A7",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "afro-chachacha-danzon",
      "worldId": "salsa",
      "name": "Cha-cha-chá & Danzón (Charanga Sound)",
      "origin": "Havana",
      "description": "Elegant, buoyant groove featuring flute, violin charanga textures, and the iconic \"one, two, cha-cha-chá\" on beats 4-and-1.",
      "characteristicInstruments": [
        "flute",
        "strings",
        "piano",
        "timbales",
        "guiro",
        "bass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        130
      ],
      "keySubstyles": [
        "Cha-cha-chá",
        "Danzón-Mambo",
        "Charanga Francesa",
        "Pachanga"
      ],
      "coreConcepts": [
        "guiro rasp (long-short-short)",
        "cha-cha-chá shuffle on 4-and-1",
        "baqueteo"
      ],
      "rhythmicGrammar": [
        "accent on [4-and, 1]: steps 14, 0"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Guiro rasp with cha-cha-chá shuffle on beats 4-and-1",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back",
        "humanizeJitterMs": 8
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G7",
          "C",
          "G7"
        ],
        "verse": [
          "C",
          "F",
          "G7",
          "C"
        ],
        "chorus": [
          "F",
          "G7",
          "Em",
          "Am",
          "Dm",
          "G7",
          "C",
          "C"
        ],
        "coda": [
          "C",
          "G7",
          "C",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Son Tradicional",
    "Son Montuno",
    "Salsa Dura",
    "Mambo",
    "Cha-cha-chá",
    "Danzón",
    "Rumba Guaguancó",
    "Rumba Yambú",
    "Rumba Columbia",
    "Salsa Romántica",
    "Changüí",
    "Guajira"
  ],
  "artists": [
    "Arsenio Rodríguez",
    "Tito Puente",
    "Celia Cruz",
    "Héctor Lavoe",
    "Willie Colón",
    "Eddie Palmieri",
    "Rubén Blades",
    "Ray Barretto",
    "Machito",
    "Benny Moré",
    "Irakere"
  ],
  "concepts": [
    "clave 2-3 & 3-2",
    "rumba clave",
    "tumbao",
    "montuno / guajeo",
    "cáscara",
    "campana (bongo bell & mambo bell)",
    "martillo",
    "coro-pregón",
    "bloque / break",
    "anticipación",
    "interlocking syncopation"
  ],
  "roles": {
    "bass": [
      "tumbao on 2-and & 4",
      "anticipated chord modulation",
      "pedal breakdowns"
    ],
    "piano": [
      "guajeo / montuno",
      "syncopated octaves",
      "percussive block chords",
      "vamp expansion"
    ],
    "harmony": [
      "guitar guajeo",
      "tres pattern",
      "montuno accompaniment"
    ],
    "percussion": [
      "clave timeline",
      "timbal cáscara",
      "campana bongo bell",
      "conga marcha",
      "guiro"
    ],
    "lead": [
      "mambo horn stabs",
      "trumpet pregón response",
      "sax solo over montuno"
    ]
  },
  "patterns": [
    {
      "id": "afro-clave-son-23",
      "worldId": "salsa",
      "traditionId": "afro-son-montuno",
      "name": "Son Clave 2–3 Structural Timeline",
      "family": "Clave Timelines",
      "category": "ostinato",
      "description": "The structural rhythmic key: 2-side (beats 2 & 3 in bar 1) leading to 3-side (beats 1, 2-and, 4 in bar 2).",
      "tags": [
        "clave",
        "son",
        "2-3",
        "timeline",
        "structural"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "pulse",
        "percussion",
        "bell"
      ],
      "instruments": [
        "percussion",
        "drums",
        "cowbell"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        4,
        8,
        16,
        22,
        28
      ],
      "accentProfile": [
        0.95,
        0.9,
        1,
        0.9,
        0.95
      ],
      "velocityProfile": [
        0.9,
        0.85,
        0.95,
        0.85,
        0.9
      ],
      "articulations": [
        "clave-strike"
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
        "chorus",
        "montuno",
        "mambo",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "afro-clave-son-32",
          "parentPatternId": "afro-clave-son-23",
          "name": "Son Clave 3–2 (Reverse Polarity)",
          "variationType": "syncopated",
          "probability": 0.5,
          "onsetGrid": [
            0,
            6,
            12,
            20,
            24
          ],
          "accentProfile": [
            1,
            0.9,
            0.95,
            0.9,
            0.95
          ],
          "description": "Son clave with 3-side in measure 1 and 2-side in measure 2."
        },
        {
          "id": "afro-clave-rumba-23",
          "parentPatternId": "afro-clave-son-23",
          "name": "Rumba Clave 2–3 (Delayed 8th Hit)",
          "variationType": "syncopated",
          "probability": 0.45,
          "onsetGrid": [
            4,
            8,
            16,
            22,
            30
          ],
          "accentProfile": [
            0.95,
            0.9,
            1,
            0.85,
            0.95
          ],
          "description": "Rumba clave where the 3rd stroke is displaced to the final 16th note for added swing."
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
          "id": "salsa-interaction-1",
          "worldId": "salsa",
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
      "id": "afro-bass-tumbao",
      "worldId": "salsa",
      "traditionId": "afro-son-montuno",
      "name": "Bass Tumbao (Anticipated Harmony)",
      "family": "Tumbao Basslines",
      "category": "ostinato",
      "description": "Classic bass tumbao hitting on the \"and\" of 2 (beat 2-and, step 6) and anticipation on 4 (step 12), floating over downbeat 1.",
      "tags": [
        "bass",
        "tumbao",
        "anticipation",
        "salsa",
        "son"
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
        6,
        12
      ],
      "accentProfile": [
        0.85,
        1
      ],
      "velocityProfile": [
        0.8,
        1
      ],
      "articulations": [
        "sustained-pizz",
        "percussive-finger"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "montuno",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "afro-bass-tumbao-with-downbeat",
          "parentPatternId": "afro-bass-tumbao",
          "name": "Bass Tumbao with Downbeat Anchor",
          "variationType": "dense",
          "probability": 0.4,
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            0.7,
            0.85,
            1
          ],
          "description": "Tumbao incorporating a light downbeat on 1 before launching the syncopation."
        },
        {
          "id": "afro-bass-tumbao-salsa-walk",
          "parentPatternId": "afro-bass-tumbao",
          "name": "Walking Salsa Tumbao Turnaround",
          "variationType": "cadence",
          "probability": 0.5,
          "onsetGrid": [
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.85,
            0.7,
            0.95,
            0.8
          ],
          "description": "Leading bass walk setting up the chord modulation on the next bar."
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
          "id": "salsa-interaction-2",
          "worldId": "salsa",
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
      "id": "afro-piano-montuno",
      "worldId": "salsa",
      "traditionId": "afro-son-montuno",
      "name": "Piano Montuno / Guajeo (Interlocking Arpeggios)",
      "family": "Montuno Interlocking Figures",
      "category": "ostinato",
      "description": "Two-bar syncopated piano ostinato that weaves octaves and triads around the clave timeline.",
      "tags": [
        "piano",
        "montuno",
        "guajeo",
        "interlocking",
        "salsa"
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
        "keyboard",
        "counterline"
      ],
      "instruments": [
        "piano",
        "keys",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        11,
        14,
        16,
        19,
        22,
        24,
        27,
        30
      ],
      "accentProfile": [
        0.9,
        0.7,
        0.95,
        0.7,
        0.9,
        0.95,
        0.9,
        0.7,
        0.95,
        0.7,
        0.9,
        1
      ],
      "velocityProfile": [
        0.85,
        0.65,
        0.9,
        0.65,
        0.85,
        0.9,
        0.85,
        0.65,
        0.9,
        0.65,
        0.85,
        0.95
      ],
      "articulations": [
        "staccato-octaves",
        "tenuto-top-note"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "montuno",
        "mambo",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "afro-montuno-cross-octave",
          "parentPatternId": "afro-piano-montuno",
          "name": "Eddie Palmieri Heavy Block Montuno",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            3,
            6,
            9,
            12,
            14,
            16,
            19,
            22,
            25,
            28,
            30
          ],
          "accentProfile": [
            1,
            0.8,
            1,
            0.8,
            1,
            1,
            1,
            0.8,
            1,
            0.8,
            1,
            1
          ],
          "description": "Aggressive two-handed dissonant block chords characteristic of Eddie Palmieri."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 4,
      "weight": 0.7,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "counterline"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "salsa-interaction-3",
          "worldId": "salsa",
          "sourceRole": "lead",
          "targetRole": "voice",
          "relationship": "answer",
          "description": "Lead instrument answers a vocal phrase in the open space after the line.",
          "timingOffsetSteps": 2,
          "probability": 0.58
        }
      ]
    },
    {
      "id": "afro-timbal-cascara",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Timbal Cáscara Pattern (Side-Shell Stick)",
      "family": "Percussion Timelines",
      "category": "ostinato",
      "description": "Crisp wooden/metal click on the side of the timbale pailas during verse and vocal sections.",
      "tags": [
        "timbales",
        "cascara",
        "percussion",
        "salsa"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "aux-percussion",
        "drums"
      ],
      "instruments": [
        "timbales",
        "percussion",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
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
        0.95,
        0.4,
        0.9,
        0.4,
        0.95,
        0.4,
        0.9,
        0.4,
        0.95,
        0.4,
        0.9,
        0.4,
        0.95,
        0.4,
        0.95,
        0.4
      ],
      "velocityProfile": [
        0.9,
        0.4,
        0.85,
        0.4,
        0.9,
        0.4,
        0.85,
        0.4,
        0.9,
        0.4,
        0.85,
        0.4,
        0.9,
        0.4,
        0.9,
        0.4
      ],
      "articulations": [
        "cascara-side-stick"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "solo"
      ],
      "variants": [
        {
          "id": "afro-cascara-with-mambo-bell",
          "parentPatternId": "afro-timbal-cascara",
          "name": "Campana Bongo Bell & Cáscara Transition",
          "variationType": "dense",
          "probability": 0.6,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14,
            16,
            20,
            24,
            28,
            30
          ],
          "accentProfile": [
            1,
            0.9,
            1,
            0.95,
            0.85,
            1,
            0.9,
            1,
            0.95,
            0.85
          ],
          "description": "Switch from cáscara to heavy hand-held cowbell driving the montuno/coro."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 5,
      "weight": 0.7,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
      "interactionRules": [
        {
          "id": "salsa-interaction-4",
          "worldId": "salsa",
          "sourceRole": "bass",
          "targetRole": "drums",
          "relationship": "accentWith",
          "description": "Bass accents align with selected kick/backbeat events for a tighter pocket.",
          "timingOffsetSteps": 0,
          "probability": 0.65
        }
      ]
    },
    {
      "id": "afro-conga-tumbao",
      "worldId": "salsa",
      "traditionId": "afro-son-montuno",
      "name": "Conga Marcha (Slap & Open Tones)",
      "family": "Conga Tumbaos",
      "category": "ostinato",
      "description": "Heel-toe hand technique on beats 1 & 3, sharp slap on beat 2, and resonant open tones on beat 4 & 4-and.",
      "tags": [
        "congas",
        "tumbao",
        "slap",
        "open-tone",
        "percussion"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "percussion",
        "hand-percussion",
        "pulse"
      ],
      "instruments": [
        "congas",
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
        0.4,
        0.4,
        1,
        0.4,
        0.4,
        0.4,
        0.95,
        0.95
      ],
      "velocityProfile": [
        0.45,
        0.45,
        1,
        0.45,
        0.45,
        0.45,
        0.9,
        0.9
      ],
      "articulations": [
        "heel-toe",
        "slap-tap",
        "abierto-open"
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
        "montuno",
        "mambo",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "afro-conga-two-drum-quinto",
          "parentPatternId": "afro-conga-tumbao",
          "name": "Two-Drum Conga Open Tones with Quinto Flourish",
          "variationType": "ornamented",
          "probability": 0.5,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.4,
            0.4,
            1,
            0.4,
            0.4,
            0.4,
            0.9,
            0.6,
            0.95,
            0.7
          ],
          "description": "Tumbao extending into high-drum syncopated roll."
        },
        {
          "id": "afro-conga-tumbao-variant-bongo-martillo",
          "parentPatternId": "afro-conga-tumbao",
          "name": "Bongo Martillo",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Steady martillo rhythm with slap on 4 and hembra open stroke on 12. Retained as a variation rather than a separate pattern entry.",
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
            0.75,
            0.5,
            1,
            0.5,
            0.7,
            0.5,
            0.95,
            0.55
          ],
          "velocityProfile": [
            0.7,
            0.45,
            0.95,
            0.45,
            0.65,
            0.45,
            0.9,
            0.5
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
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
          "id": "salsa-interaction-5",
          "worldId": "salsa",
          "sourceRole": "harmony",
          "targetRole": "lead",
          "relationship": "leaveSpace",
          "description": "Accompaniment thins when the instrumental lead enters.",
          "timingOffsetSteps": 0,
          "probability": 0.62
        }
      ]
    },
    {
      "id": "afro-mambo-horn-hits",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Mambo Section Horn Stabs & Punctuation",
      "family": "Horn Mambos",
      "category": "phrasePattern",
      "description": "Explosive syncopated horn riffs and stabs interjected over the continuous montuno section.",
      "tags": [
        "horns",
        "mambo",
        "trumpet",
        "sax",
        "brass",
        "stabs"
      ],
      "scopes": [
        "phrase",
        "region",
        "track"
      ],
      "roles": [
        "lead",
        "horn-section",
        "counterline"
      ],
      "instruments": [
        "trumpet",
        "sax",
        "electric-guitar",
        "keys"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        6,
        12,
        14,
        22,
        28,
        30
      ],
      "accentProfile": [
        1,
        0.95,
        1,
        1,
        0.95,
        1
      ],
      "velocityProfile": [
        1,
        0.9,
        1,
        1,
        0.9,
        1
      ],
      "articulations": [
        "staccatissimo",
        "fall-off"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "mambo",
        "breakdown",
        "chorus"
      ],
      "variants": [
        {
          "id": "afro-mambo-unison-break",
          "parentPatternId": "afro-mambo-horn-hits",
          "name": "Ensemble Tutti Bloque / Break",
          "variationType": "breakdown",
          "probability": 0.5,
          "onsetGrid": [
            0,
            3,
            6,
            12,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.9,
            1,
            0.95,
            1,
            1
          ],
          "description": "Full band unison stop-time break."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "lead",
        "counterline"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ]
    },
    {
      "id": "salsa-campana",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Campana (Bongo Bell)",
      "family": "Bell",
      "category": "fill",
      "description": "Driving hand-held bongo bell pattern with low mouth strikes and high body taps.",
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
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.95,
        0.65,
        0.95,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.9,
        0.6,
        0.9,
        0.8
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "montuno",
        "mambo",
        "chorus"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
      "id": "salsa-guiro",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Guiro Pattern",
      "family": "Guiro",
      "category": "break",
      "description": "Traditional long down-stroke and rapid up-up scrapes (ch-ch-ch).",
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
        0.5,
        0.7,
        1,
        0.5,
        0.7,
        1,
        0.5,
        0.7,
        1,
        0.5,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.45,
        0.65,
        0.95,
        0.45,
        0.65,
        0.95,
        0.45,
        0.65,
        0.95,
        0.45,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 4,
      "weight": 1,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
      "id": "salsa-maracas",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Maracas",
      "family": "Maracas",
      "category": "cadence",
      "description": "Crisp forward-back maraca pulse with accented downbeats.",
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
        0.6,
        0.9,
        0.6,
        0.95,
        0.6,
        0.9,
        0.65
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.85,
        0.55,
        0.9,
        0.55,
        0.85,
        0.6
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
      "difficulty": 3,
      "weight": 1,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
      "id": "salsa-clave-32",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "3-2 Son Clave",
      "family": "Clave",
      "category": "groove",
      "description": "Classic 3-2 clave timeline.",
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
        6,
        10,
        12
      ],
      "accentProfile": [
        1,
        0.85,
        0.95,
        0.9,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.85,
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
      "difficulty": 2,
      "weight": 1,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
      "id": "salsa-timbal-bell",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Timbal Mambo Bell",
      "family": "Bell",
      "category": "groove",
      "description": "Timbalero mambo cowbell pattern riding the montuno.",
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
        1,
        0.65,
        0.85,
        0.7,
        0.95,
        0.65,
        0.85,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.8,
        0.65,
        0.9,
        0.6,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Salsa genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa"
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
      "id": "salsa-phrase-12",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Coro Phrase",
      "family": "Coro / backing vocals",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around montuno and the coro vocabulary of Salsa.",
      "tags": [
        "salsa",
        "coro",
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
        2,
        5,
        6,
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
      "provenance": "Salsa genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa",
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
      "id": "salsa-call-13",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Mambo Response",
      "family": "Mambo",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around mambo breaks and the mambo vocabulary of Salsa.",
      "tags": [
        "salsa",
        "mambo",
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
        3,
        6,
        7,
        10,
        13,
        15
      ],
      "accentProfile": [
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
        0.9,
        0.62
      ],
      "syncopationRating": 1,
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
      "provenance": "Salsa genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa",
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
      "id": "salsa-anchor-14",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Tumbao Anchor",
      "family": "Tumbao",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around coro and the tumbao vocabulary of Salsa.",
      "tags": [
        "salsa",
        "tumbao",
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
      "provenance": "Salsa genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa",
        "tumbao"
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
      "id": "salsa-comp-15",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Son Clave Comping",
      "family": "Son Clave",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around clave and the son clave vocabulary of Salsa.",
      "tags": [
        "salsa",
        "son-clave",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
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
      "provenance": "Salsa genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa",
        "son-clave"
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
      "id": "salsa-intro-16",
      "worldId": "salsa",
      "traditionId": "afro-salsa-dura",
      "name": "Montuno Intro",
      "family": "Montuno",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around tumbao and the montuno vocabulary of Salsa.",
      "tags": [
        "salsa",
        "montuno",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "guitar",
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
        7,
        8,
        11,
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
      "swingPercentage": 53,
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
          "id": "salsa-intro-16-v-03",
          "parentPatternId": "salsa-intro-16",
          "name": "Montuno Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11,
            12,
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
      "provenance": "Salsa genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "salsa",
        "montuno"
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
      "id": "salsa-voice-phrasing",
      "worldId": "salsa",
      "traditionId": "afro-son-montuno",
      "name": "Salsa Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Coro response phrasing sits between clave-driven instrumental phrases and leaves deliberate space for sonero delivery.",
      "tags": [
        "salsa",
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
          "id": "salsa-voice-phrasing-v-voice-alt",
          "parentPatternId": "salsa-voice-phrasing",
          "name": "Salsa Vocal Phrasing — alternate phrasing",
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
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Salsa; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "salsa",
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
      "id": "salsa-rumba-clave-guaguanco",
      "worldId": "salsa",
      "traditionId": "afro-rumba",
      "name": "Rumba Clave (Guaguancó) 3–2",
      "family": "Rumba Rhythm Section",
      "category": "timeline",
      "description": "The fundamental structural timeline of Cuban Rumba with delayed 3rd hit on the three-side.",
      "tags": ["rumba", "clave", "guaguanco", "timeline", "pulse"],
      "scopes": ["measure", "phrase", "region", "track", "song"],
      "roles": ["pulse", "percussion", "bell"],
      "instruments": ["hand-percussion", "percussion", "drums"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [0, 6, 11, 16, 22],
      "accentProfile": [1.0, 0.85, 0.95, 0.85, 0.9],
      "velocityProfile": [1.0, 0.8, 0.95, 0.85, 0.9],
      "articulations": ["accented", "staccato"],
      "density": "sparse",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "verse", "chorus", "solo", "coda"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Afro-Cuban Rumba; generalized from documented musical conventions.",
      "authenticityTags": ["rumba", "clave"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "salsa-rumba-conga-interlock",
      "worldId": "salsa",
      "traditionId": "afro-rumba",
      "name": "Rumba Congas Interlock (Quinto, Tres Golpes, Salidor)",
      "family": "Rumba Rhythm Section",
      "category": "groove",
      "description": "Three-conga polyrhythmic conversation: steady salidor heartbeat, resonant tres golpes, and conversational quinto slaps.",
      "tags": ["rumba", "congas", "quinto", "salidor", "hand-percussion"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "hand-percussion"],
      "instruments": ["congas", "hand-percussion", "percussion"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 4, 7, 8, 10, 12, 14, 15],
      "accentProfile": [0.9, 0.7, 0.95, 0.7, 0.9, 0.75, 0.95, 0.8, 0.85],
      "velocityProfile": [0.85, 0.7, 0.9, 0.7, 0.85, 0.75, 0.9, 0.8, 0.8],
      "articulations": ["slap", "open", "palm"],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Afro-Cuban Rumba; generalized from documented musical conventions.",
      "authenticityTags": ["rumba", "conga"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "salsa-rumba-cata-bamboo",
      "worldId": "salsa",
      "traditionId": "afro-rumba",
      "name": "Catá / Guagua Bamboo Stick Pattern",
      "family": "Rumba Rhythm Section",
      "category": "ostinato",
      "description": "Wooden bamboo catá pattern played with two sticks reinforcing the rumba drive.",
      "tags": ["rumba", "cata", "guagua", "percussion"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "aux-percussion"],
      "instruments": ["percussion", "hand-percussion", "drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 3, 6, 8, 10, 11, 14],
      "accentProfile": [0.95, 0.7, 0.85, 0.9, 0.7, 0.85, 0.8, 0.9],
      "velocityProfile": [0.9, 0.65, 0.8, 0.85, 0.65, 0.8, 0.75, 0.85],
      "articulations": ["martellato", "staccato"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Afro-Cuban Rumba; generalized from documented musical conventions.",
      "authenticityTags": ["rumba", "cata"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "salsa-rumba-bass-diana",
      "worldId": "salsa",
      "traditionId": "afro-rumba",
      "name": "Rumba Acoustic Bass & Diana Drive",
      "family": "Rumba Harmonic Ground",
      "category": "bass",
      "description": "Deep grounded acoustic bass pulse supporting the opening diana vocal chant.",
      "tags": ["rumba", "bass", "diana", "pulse"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass", "pulse"],
      "instruments": ["bass", "voice"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 10, 12, 14],
      "accentProfile": [1.0, 0.8, 0.85, 0.9, 0.75],
      "velocityProfile": [0.95, 0.75, 0.8, 0.85, 0.7],
      "articulations": ["tenuto", "staccato"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Afro-Cuban Rumba; generalized from documented musical conventions.",
      "authenticityTags": ["rumba", "bass"],
      "danceTags": ["listening"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "salsa-chachacha-guiro-step",
      "worldId": "salsa",
      "traditionId": "afro-chachacha-danzon",
      "name": "Cha-cha-chá Güiro & Maraca 4-and-1 Drive",
      "family": "Charanga Rhythm Section",
      "category": "groove",
      "description": "Crisp scraped güiro and maracas driving the iconic cha-cha-chá shuffle on beats 4-and-1.",
      "tags": ["chachacha", "guiro", "maracas", "charanga", "percussion"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion", "guiro", "aux-percussion"],
      "instruments": ["guiro", "percussion", "hand-percussion"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 4, 8, 12, 14, 15],
      "accentProfile": [0.95, 0.8, 0.85, 1.0, 0.9, 0.8],
      "velocityProfile": [0.9, 0.75, 0.8, 0.95, 0.85, 0.75],
      "articulations": ["scraped", "staccato"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "bridge"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Cha-cha-chá & Danzón; generalized from documented musical conventions.",
      "authenticityTags": ["chachacha", "guiro"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "salsa-chachacha-piano-montuno",
      "worldId": "salsa",
      "traditionId": "afro-chachacha-danzon",
      "name": "Cha-cha-chá Elegant Piano Guajeo",
      "family": "Charanga Harmony Section",
      "category": "montuno",
      "description": "Lighter, syncopated parlour piano guajeo emphasizing elegance and swing over pure salsa velocity.",
      "tags": ["chachacha", "piano", "guajeo", "harmony", "keys"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["harmony", "piano", "keys"],
      "instruments": ["piano", "keys"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 3, 6, 8, 12, 14],
      "accentProfile": [0.9, 0.8, 0.9, 0.85, 0.95, 0.8],
      "velocityProfile": [0.85, 0.75, 0.85, 0.8, 0.9, 0.75],
      "articulations": ["staccato", "tenuto"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Cha-cha-chá & Danzón; generalized from documented musical conventions.",
      "authenticityTags": ["chachacha", "piano"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "salsa-chachacha-flute-lead",
      "worldId": "salsa",
      "traditionId": "afro-chachacha-danzon",
      "name": "Charanga Flute Melodic Ostinato",
      "family": "Charanga Lead Section",
      "category": "melody",
      "description": "Wood wooden/silver charanga flute running sweet high-register arpeggios and trills.",
      "tags": ["charanga", "flute", "melody", "lead"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["lead", "flute", "melody"],
      "instruments": ["flute", "strings", "violin"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [2, 4, 7, 8, 10, 12, 14],
      "accentProfile": [0.85, 0.9, 0.75, 0.85, 0.8, 0.95, 0.9],
      "velocityProfile": [0.8, 0.85, 0.7, 0.8, 0.75, 0.9, 0.85],
      "articulations": ["legato", "ornamented"],
      "density": "medium",
      "phrasePosition": ["start", "middle"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Cha-cha-chá & Danzón; generalized from documented musical conventions.",
      "authenticityTags": ["charanga", "flute"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "salsa-danzon-baqueteo-bass",
      "worldId": "salsa",
      "traditionId": "afro-chachacha-danzon",
      "name": "Danzón Baqueteo Bass",
      "family": "Charanga Bass Section",
      "category": "bass",
      "description": "Traditional baqueteo-derived grounded acoustic bassline walking through Danzón and Cha-cha-chá sections.",
      "tags": ["danzon", "bass", "baqueteo", "pulse"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass", "pulse"],
      "instruments": ["bass"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 4, 6, 8, 12, 14],
      "accentProfile": [1.0, 0.7, 0.85, 0.9, 0.8, 0.85],
      "velocityProfile": [0.95, 0.7, 0.8, 0.85, 0.75, 0.8],
      "articulations": ["tenuto", "pizzicato"],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Cha-cha-chá & Danzón; generalized from documented musical conventions.",
      "authenticityTags": ["danzon", "bass"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "clave alignment (never crossing the clave)",
    "anticipated harmonic arrival on beat 4",
    "interlocking rhythm layers between piano, bass, congas, and timbales",
    "open vs slap drum stroke contrasts",
    "syncopated horn stabs"
  ],
  "forms": [
    "intro / tema",
    "verse / cuerpo",
    "montuno / vamp",
    "mambo / brass section",
    "moña / solo",
    "coro-pregón",
    "coda"
  ],
  "relationships": [
    "bass ↔ congas (tumbao slap and open tone lock)",
    "piano ↔ clave (montuno accents mirror the 3-side and 2-side)",
    "timbales ↔ bells (cáscara in verse, campana in montuno)",
    "horns ↔ coro (call-and-response during mambo)"
  ],
  "transformations": [
    "trans-anticipation",
    "trans-density-dense",
    "trans-syncopation-tresillo",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "smooth escalation from sparse verse (cáscara) to roaring montuno (bongo bell & mambo horns)",
    "cyclic groove continuous stability with interlocking micro-variations",
    "sudden unison breaks (bloques) with immediate return to groove",
    "vocal pregón answering chorus",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "tres-like guajeos with octave unisons",
      "syncopated chord chops"
    ],
    "bass": [
      "classic tumbao anticipating on 4",
      "descending walking turnarounds"
    ],
    "sax": [
      "mambo brass section stabs",
      "fluid bebop/cuban soloing over montuno"
    ],
    "piano": [
      "two-handed octave montunos",
      "dense salsa dura chord clusters"
    ],
    "drums": [
      "timbales cáscara pattern on hi-hat/ride",
      "kick accents matching bass tumbao"
    ],
    "voice": [
      "lead sonero phrasing and coro responses"
    ],
    "trumpet": [
      "mambo brass punctuation"
    ]
  },
  "combinations": [
    "Salsa + Timba",
    "Salsa + Jazz",
    "Salsa + Funk",
    "Salsa + Flamenco"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Son Clave [3-2 / 2-3] with anticipatory bass tumbao on 4-and",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "pushed"
  },
  "crossLinks": [
    "Salsa ↔ Timba",
    "Salsa ↔ Bachata (Latin Congress)",
    "Salsa ↔ Jazz"
  ]
};
