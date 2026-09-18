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
      "tuningSystem": "just-intonation",
      "signatureCell": "Rumba clave with interlocking quinto and salidor conga tones",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
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
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "afro-piano-montuno-v-02",
          "parentPatternId": "afro-piano-montuno",
          "name": "Piano Montuno / Guajeo (Interlocking Arpeggios) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.86,
            0.7799999999999999,
            0.9099999999999999,
            0.7799999999999999,
            0.86,
            1,
            0.86,
            0.7799999999999999,
            0.9099999999999999,
            0.7799999999999999,
            0.86,
            1
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.63,
            0.88,
            0.71,
            0.83,
            0.88,
            0.9099999999999999,
            0.63,
            0.88,
            0.71,
            0.83,
            0.9299999999999999
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
      "weight": 0.7,
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "afro-timbal-cascara-v-02",
          "parentPatternId": "afro-timbal-cascara",
          "name": "Timbal Cáscara Pattern (Side-Shell Stick) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.9099999999999999,
            0.48000000000000004,
            0.86,
            0.48000000000000004,
            0.9099999999999999,
            0.48000000000000004,
            0.86,
            0.48000000000000004,
            0.9099999999999999,
            0.48000000000000004,
            0.86,
            0.48000000000000004,
            0.9099999999999999,
            0.48000000000000004,
            0.9099999999999999,
            0.48000000000000004
          ],
          "velocityProfile": [
            0.96,
            0.4,
            0.83,
            0.46,
            0.88,
            0.4,
            0.9099999999999999,
            0.4,
            0.88,
            0.46,
            0.83,
            0.4,
            0.96,
            0.4,
            0.88,
            0.46
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "afro-mambo-horn-hits-v-02",
          "parentPatternId": "afro-mambo-horn-hits",
          "name": "Mambo Section Horn Stabs & Punctuation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            6,
            12,
            14,
            22,
            28,
            30
          ],
          "accentProfile": [
            0.96,
            1,
            0.96,
            1,
            0.9099999999999999,
            1
          ],
          "velocityProfile": [
            1,
            0.88,
            0.98,
            1,
            0.88,
            0.98
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "salsa-campana-v-01",
          "parentPatternId": "salsa-campana",
          "name": "Campana (Bongo Bell) — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.85,
            0.8999999999999999,
            0.6
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.77,
            0.8200000000000001,
            0.52
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
          "id": "salsa-campana-v-02",
          "parentPatternId": "salsa-campana",
          "name": "Campana (Bongo Bell) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
            0.96,
            0.7799999999999999,
            0.86,
            1,
            0.61,
            1,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.83,
            0.96,
            0.58,
            0.88,
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
      "weight": 1,
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "salsa-guiro-v-01",
          "parentPatternId": "salsa-guiro",
          "name": "Guiro Pattern — sparse variation",
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
            0.45,
            0.6499999999999999,
            0.95,
            0.45,
            0.6499999999999999,
            0.95,
            0.45
          ],
          "velocityProfile": [
            0.87,
            0.4,
            0.5700000000000001,
            0.87,
            0.4,
            0.5700000000000001,
            0.87,
            0.4
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
          "id": "salsa-guiro-v-02",
          "parentPatternId": "salsa-guiro",
          "name": "Guiro Pattern — accent shift",
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
            0.58,
            0.6599999999999999,
            1,
            0.46,
            0.7799999999999999,
            0.96,
            0.58,
            0.6599999999999999,
            1,
            0.46,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.43,
            0.63,
            1,
            0.43,
            0.63,
            1,
            0.43,
            0.63,
            1,
            0.43,
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "salsa-maracas-v-01",
          "parentPatternId": "salsa-maracas",
          "name": "Maracas — sparse variation",
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
            0.5499999999999999,
            0.85,
            0.5499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
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
          "id": "salsa-maracas-v-02",
          "parentPatternId": "salsa-maracas",
          "name": "Maracas — accent shift",
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
            0.6799999999999999,
            0.86,
            0.6799999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.86,
            0.73
          ],
          "velocityProfile": [
            1,
            0.53,
            0.83,
            0.6100000000000001,
            0.88,
            0.53,
            0.9099999999999999,
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
            -5
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "salsa-clave-32-v-01",
          "parentPatternId": "salsa-clave-32",
          "name": "3-2 Son Clave — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            10
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
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
          "id": "salsa-clave-32-v-02",
          "parentPatternId": "salsa-clave-32",
          "name": "3-2 Son Clave — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.9099999999999999,
            0.98,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.78,
            0.88,
            0.9099999999999999,
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "salsa-timbal-bell-v-01",
          "parentPatternId": "salsa-timbal-bell",
          "name": "Timbal Mambo Bell — sparse variation",
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
            0.6,
            0.7999999999999999,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.7200000000000001,
            0.5700000000000001,
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
          "id": "salsa-timbal-bell-v-02",
          "parentPatternId": "salsa-timbal-bell",
          "name": "Timbal Mambo Bell — accent shift",
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
            0.73,
            0.8099999999999999,
            0.7799999999999999,
            0.9099999999999999,
            0.73,
            0.8099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.78,
            0.71,
            0.88,
            0.58,
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
      "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
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
      "syncopationRating": 0.8333333333333334,
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
        {
          "id": "salsa-phrase-12-v-01",
          "parentPatternId": "salsa-phrase-12",
          "name": "Coro Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
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
          "id": "salsa-phrase-12-v-02",
          "parentPatternId": "salsa-phrase-12",
          "name": "Coro Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            5,
            6,
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
      "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
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
        0.8999999999999999,
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
        {
          "id": "salsa-call-13-v-01",
          "parentPatternId": "salsa-call-13",
          "name": "Mambo Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            3,
            7,
            10,
            15
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "salsa-call-13-v-02",
          "parentPatternId": "salsa-call-13",
          "name": "Mambo Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            3,
            6,
            7,
            10,
            13,
            15
          ],
          "accentProfile": [
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
            0.6
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
          "id": "salsa-call-13-v-03",
          "parentPatternId": "salsa-call-13",
          "name": "Mambo Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            3,
            6,
            7,
            10,
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
      "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
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
        {
          "id": "salsa-anchor-14-v-01",
          "parentPatternId": "salsa-anchor-14",
          "name": "Tumbao Anchor — sparse variation",
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
          "id": "salsa-anchor-14-v-02",
          "parentPatternId": "salsa-anchor-14",
          "name": "Tumbao Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            7,
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.8333333333333334,
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
        {
          "id": "salsa-comp-15-v-01",
          "parentPatternId": "salsa-comp-15",
          "name": "Son Clave Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6,
            9,
            13
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
          "id": "salsa-comp-15-v-02",
          "parentPatternId": "salsa-comp-15",
          "name": "Son Clave Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            6,
            9,
            10,
            13
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
      "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
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
          "id": "salsa-intro-16-v-01",
          "parentPatternId": "salsa-intro-16",
          "name": "Montuno Intro — sparse variation",
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
          "id": "salsa-intro-16-v-02",
          "parentPatternId": "salsa-intro-16",
          "name": "Montuno Intro — accent shift",
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
        },
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
      "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
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
        {
          "id": "salsa-voice-phrasing-v-final-accent",
          "parentPatternId": "salsa-voice-phrasing",
          "name": "Salsa Vocal Phrasing — accent shift",
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Salsa.",
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
