import { GenreWorld } from '../../types';

export const TANGO_WORLD: GenreWorld = {
  "id": "tango",
  "name": "Tango",
  "family": "Río de la Plata",
  "color": "#c87561",
  "level": "world",
  "description": "A deep architectural Tango lens: marcato en 2 & 4, yumba, síncopa a tierra, arrastres, bordoneos, cuts (cortes), and Piazzolla’s 3+3+2 additive frameworks.",
  "traditions": [
    {
      "id": "tango-tango-tradicional",
      "worldId": "tango",
      "name": "Tango Tradicional",
      "origin": "Buenos Aires / Montevideo",
      "era": "Golden Age (1935–1955)",
      "description": "Marcato • Bandoneón • Golden Age\nThe quintessential Golden Age milonga sound.\nJuan D'Arienzo · Carlos Di Sarli",
      "characteristicInstruments": [
        "bandoneon",
        "violin",
        "piano",
        "upright-bass"
      ],
      "preferredMeters": [
        "4/4",
        "2/4"
      ],
      "tempoRange": [
        120,
        136
      ],
      "keySubstyles": [
        "Estilo D'Arienzo",
        "Estilo Di Sarli"
      ],
      "coreConcepts": [
        "Marcato en 4 (accented downbeats 1, 2, 3, 4)",
        "Síncopa and arrastre (bass drag into the downbeat)",
        "bandoneón bellows phrasing",
        "dramatic dynamic stops"
      ],
      "rhythmicGrammar": [
        "Marcato en 4: heavy walking downbeats with sharp percussive chiques on violin"
      ],
      "danceTags": [
        "social-partner",
        "tango-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Arrastre bass drag resolving into sharp Marcato en 4 bandoneon chord and violin staccato",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "E7",
          "Am",
          "E7"
        ],
        "tema-a": [
          "Am",
          "Dm",
          "E7",
          "Am",
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "coda": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "tango-tango-nuevo",
      "worldId": "tango",
      "name": "Tango Nuevo",
      "origin": "Buenos Aires / Paris",
      "era": "1960s–1990s",
      "description": "3+3+2 • Dissonance • Bandoneón Virtuosity\nAstor Piazzolla's modern concert tango.\nAstor Piazzolla · Quinteto Real",
      "characteristicInstruments": [
        "bandoneon",
        "violin",
        "electric-guitar",
        "piano",
        "upright-bass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        140
      ],
      "keySubstyles": [
        "Piazzolla Style",
        "Concert Tango"
      ],
      "coreConcepts": [
        "iconic 3+3+2 syncopated accentuation",
        "jazz chord harmonies (m9, maj7#11)",
        "virtuosic bandoneón solo lines",
        "contrast between aggression and weeping lyricism"
      ],
      "rhythmicGrammar": [
        "relentless 3+3+2 eighth-note pulse with sharp accents on notes 1, 4, and 7"
      ],
      "danceTags": [
        "listening",
        "tango-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "3+3+2 bandoneon syncopated stab answering virtuosic weeping violin glissando",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "Dm7",
          "F#dim",
          "E7b9"
        ],
        "theme": [
          "Am7",
          "Dm7",
          "G7",
          "Cmaj7",
          "Fmaj7",
          "Bm7b5",
          "E7b9",
          "Am7"
        ],
        "coda": [
          "F#dim",
          "E7b9",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "tango-milonga",
      "worldId": "tango",
      "name": "Milonga",
      "origin": "Río de la Plata",
      "era": "Late 19th Century–Present",
      "description": "Fast • Habanera Syncopation • Bouncy\nFast, playful ancestor of tango.\nFrancisco Canaro · Edgardo Donato",
      "characteristicInstruments": [
        "bandoneon",
        "violin",
        "piano",
        "upright-bass",
        "guitar"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        96,
        116
      ],
      "keySubstyles": [
        "Milonga Ciudadana",
        "Milonga Campera"
      ],
      "coreConcepts": [
        "habanera / milonga syncopated rhythm",
        "snappy high-speed footwork (traspié)",
        "bright staccato bandoneón chords",
        "joyful urban spirit"
      ],
      "rhythmicGrammar": [
        "strict 2/4 milonga syncopation: [1, 1-and-a, 2, 2-and] played staccatissimo"
      ],
      "danceTags": [
        "social-partner",
        "tango-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Crisp 2/4 habanera milonga syncopation on piano and bandoneon with traspie violin leap",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "D",
          "A7",
          "D",
          "A7"
        ],
        "verse": [
          "D",
          "A7",
          "D",
          "A7",
          "D",
          "G",
          "A7",
          "D"
        ],
        "coda": [
          "A7",
          "A7",
          "D",
          "D"
        ]
      }
    },
    {
      "id": "tango-tango-vals",
      "worldId": "tango",
      "name": "Tango Vals",
      "origin": "Río de la Plata",
      "era": "Golden Age (1930s–1950s)",
      "description": "Lyrical • 3/4 Waltzing • Flowing\nFlowing, rotational waltz with tango soul.\nAlfredo De Angelis · Osvaldo Pugliese",
      "characteristicInstruments": [
        "violin",
        "bandoneon",
        "piano",
        "upright-bass"
      ],
      "preferredMeters": [
        "3/4"
      ],
      "tempoRange": [
        60,
        75
      ],
      "keySubstyles": [
        "Vals Porteño",
        "Vals Criollo"
      ],
      "coreConcepts": [
        "continuous rotational movement and turns (giros)",
        "expressive lyrical violin melodies in triple meter",
        "rhythmic accent on beat 1 with light 2 and 3",
        "nostalgic themes"
      ],
      "rhythmicGrammar": [
        "flowing 3/4 waltz meter with subtle syncopations across bar lines"
      ],
      "danceTags": [
        "social-partner",
        "tango-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Flowing 3/4 violin waltz melody swelling over buoyant piano downbeat and bandoneon sigh",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "E7",
          "Am",
          "E7"
        ],
        "vals-a": [
          "Am",
          "Dm",
          "G7",
          "C",
          "F",
          "Dm",
          "E7",
          "Am"
        ],
        "coda": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "tango-tango-electronico",
      "worldId": "tango",
      "name": "Tango Electrónico",
      "origin": "Paris / Buenos Aires",
      "era": "2000s–Present",
      "description": "Trip-Hop Beats • Bandoneón Sample • Sensual\nModern electronic lounge & club tango.\nGotan Project · Bajofondo",
      "characteristicInstruments": [
        "bandoneon",
        "sub-bass",
        "drums",
        "sampler",
        "acoustic-guitar",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        90,
        115
      ],
      "keySubstyles": [
        "Electrotango",
        "Tango Lounge"
      ],
      "coreConcepts": [
        "trip-hop and electronic drum programming",
        "vintage vinyl bandoneón sample loops",
        "deep sub-bass pulses with nylon guitar comping",
        "sensual downtempo lounge atmosphere"
      ],
      "rhythmicGrammar": [
        "electronic 4/4 beat with heavy kick on 1 and 3, crisp snare on 2 and 4, and bandoneón syncopation"
      ],
      "danceTags": [
        "social-partner",
        "tango-compatible",
        "sensual-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Dusty vintage bandoneon sample looping over deep trip-hop sub-bass and crisp electronic snare",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Gm",
          "A7",
          "Dm"
        ],
        "groove": [
          "Dm",
          "Gm",
          "C",
          "F",
          "Bb",
          "Gm",
          "A7",
          "Dm"
        ],
        "coda": [
          "Gm",
          "A7",
          "Dm",
          "Dm"
        ]
      }
    }
  ],
  "substyles": [
    "Tango Tradicional",
    "Tango Nuevo",
    "Milonga",
    "Tango Vals",
    "Tango Electrónico"
  ],
  "artists": [
    "Juan D'Arienzo",
    "Carlos Di Sarli",
    "Astor Piazzolla",
    "Quinteto Real",
    "Francisco Canaro",
    "Edgardo Donato",
    "Alfredo De Angelis",
    "Osvaldo Pugliese",
    "Gotan Project",
    "Bajofondo"
  ],
  "concepts": [
    "marcato en 4",
    "marcato en 2",
    "yumba",
    "síncopa a tierra",
    "arrastre",
    "anticipación",
    "bordoneo",
    "corte",
    "chiche",
    "fraseo",
    "rubato",
    "3+3+2 grouping",
    "pesado vs liviano"
  ],
  "roles": {
    "bass": [
      "marcato en 2",
      "marcato en 4",
      "arrastre",
      "bass division",
      "bordoneo",
      "slap pizzicato"
    ],
    "piano": [
      "marcato",
      "yumba",
      "síncopa",
      "campanitas",
      "arrastre",
      "percussive chords"
    ],
    "harmony": [
      "marcato accompaniment",
      "síncopa",
      "arpeggios",
      "bordoneos"
    ],
    "melody": [
      "fraseo",
      "rubato",
      "variation",
      "dialogue",
      "counter-phrase"
    ],
    "lead": [
      "bandoneón variation",
      "violin solo",
      "expressive fraseo"
    ],
    "percussion": [
      "chiche string hits",
      "piano wood knocking",
      "pandeiro/candombe accents"
    ]
  },
  "patterns": [
    {
      "id": "tango-marcato-4",
      "worldId": "tango",
      "traditionId": "tango-epoca-oro",
      "name": "Marcato en 4 (Orquesta Típica)",
      "family": "Marcato Accompaniment",
      "category": "ostinato",
      "description": "Strict four-beat staccato accompaniment providing rhythmic drive for dancers.",
      "tags": [
        "pulse",
        "tango",
        "marcato",
        "staccato",
        "dance"
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
        "harmony",
        "bass",
        "piano"
      ],
      "instruments": [
        "piano",
        "bass",
        "strings",
        "guitar"
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
        0.95,
        0.8,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.9,
        0.75,
        0.85,
        0.75
      ],
      "articulations": [
        "staccato",
        "martellato"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "development"
      ],
      "variants": [
        {
          "id": "tango-m4-staccato-crisp",
          "parentPatternId": "tango-marcato-4",
          "name": "D’Arienzo Ultra-Staccato",
          "variationType": "dense",
          "probability": 0.6,
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.9,
            1,
            0.95
          ],
          "description": "Crisp, driving staccato characteristic of Juan D’Arienzo."
        },
        {
          "id": "tango-m4-with-eighth-fill",
          "parentPatternId": "tango-marcato-4",
          "name": "Marcato en 4 with 8th-note turnaround",
          "variationType": "cadence",
          "probability": 0.4,
          "onsetGrid": [
            0,
            4,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9,
            0.7,
            0.85,
            0.6,
            0.95,
            0.7
          ],
          "description": "Enlivened beat 3-4 with running eighth note propulsion."
        },
        {
          "id": "tango-marcato-4-variant-yumba-osvaldo-pugliese",
          "parentPatternId": "tango-marcato-4",
          "name": "Yumba (Osvaldo Pugliese)",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Pugliese’s celebrated deep on-beat \"Yum\" (beats 1 & 3) contrasted with light buoyant \"Ba\" (beats 2 & 4). Retained as a variation rather than a separate pattern entry.",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            1,
            0.35,
            0.95,
            0.3
          ],
          "velocityProfile": [
            1,
            0.4,
            0.9,
            0.35
          ],
          "articulation": "pesado, subito-piano",
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "tango-interaction-1",
          "worldId": "tango",
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
      "id": "tango-marcato-2",
      "worldId": "tango",
      "traditionId": "tango-epoca-oro",
      "name": "Marcato en 2 (Troilo / Di Sarli)",
      "family": "Marcato Accompaniment",
      "category": "ostinato",
      "description": "Heavier two-beat pulse on 1 and 3 leaving space for melodic expressive rubato.",
      "tags": [
        "pulse",
        "tango",
        "marcato-2",
        "lyrical"
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
        "harmony",
        "bass",
        "piano"
      ],
      "instruments": [
        "piano",
        "bass",
        "guitar",
        "strings"
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
        0.88
      ],
      "velocityProfile": [
        0.92,
        0.78
      ],
      "articulations": [
        "pesado",
        "legato-staccato"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "variants": [
        {
          "id": "tango-m2-arrastre-lead",
          "parentPatternId": "tango-marcato-2",
          "name": "Marcato en 2 with Arrastre sweep",
          "variationType": "ornamented",
          "probability": 0.5,
          "onsetGrid": [
            14,
            15,
            0,
            8
          ],
          "accentProfile": [
            0.4,
            0.6,
            1,
            0.85
          ],
          "description": "Preceded by chromatic drag into beat 1."
        },
        {
          "id": "tango-marcato-2-v-02-safe",
          "parentPatternId": "tango-marcato-2",
          "name": "Marcato en 2 (Troilo / Di Sarli) — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.95,
            0.96
          ],
          "velocityProfile": [
            0.9500000000000001,
            0.74
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "tango-interaction-2",
          "worldId": "tango",
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
      "id": "tango-sincopa",
      "worldId": "tango",
      "traditionId": "tango-epoca-oro",
      "name": "Síncopa a Tierra (Standard Syncopation)",
      "family": "Syncopated Figures",
      "category": "cell",
      "description": "Off-beat accent landing on the \"and\" of 1 and resolving crisply to downbeat of 3.",
      "tags": [
        "sincopa",
        "syncopation",
        "tango",
        "accent"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track"
      ],
      "roles": [
        "harmony",
        "bass",
        "piano",
        "bandoneon",
        "counterline"
      ],
      "instruments": [
        "piano",
        "bandoneon",
        "guitar",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        8,
        12
      ],
      "accentProfile": [
        0.6,
        1,
        0.85,
        0.8
      ],
      "velocityProfile": [
        0.65,
        0.95,
        0.8,
        0.75
      ],
      "articulations": [
        "staccato-accent"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "development"
      ],
      "variants": [
        {
          "id": "tango-sincopa-volcada",
          "parentPatternId": "tango-sincopa",
          "name": "Síncopa con Remate",
          "variationType": "syncopated",
          "probability": 0.5,
          "onsetGrid": [
            0,
            2,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.5,
            1,
            0.7,
            0.85,
            0.9
          ],
          "description": "Síncopa concluding with an accented anticipation on beat 4-and."
        },
        {
          "id": "tango-sincopa-v-02",
          "parentPatternId": "tango-sincopa",
          "name": "Síncopa a Tierra (Standard Syncopation) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            8,
            12
          ],
          "accentProfile": [
            0.5599999999999999,
            1,
            0.8099999999999999,
            0.88
          ],
          "velocityProfile": [
            0.71,
            0.9299999999999999,
            0.78,
            0.81
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
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 1,
      "roleDependencies": [
        "harmony",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ]
    },
    {
      "id": "tango-arrastre",
      "worldId": "tango",
      "traditionId": "tango-epoca-oro",
      "name": "Arrastre (Chromatic Drag Lead-in)",
      "family": "Ornamental Transitions",
      "category": "phrasePattern",
      "description": "Upbeat glissando / drag that scoops into a climactic downbeat.",
      "tags": [
        "arrastre",
        "drag",
        "bass",
        "bandoneon",
        "transition"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track"
      ],
      "roles": [
        "bass",
        "piano",
        "bandoneon",
        "fill"
      ],
      "instruments": [
        "bass",
        "piano",
        "bandoneon",
        "strings"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        13,
        14,
        15,
        0
      ],
      "accentProfile": [
        0.4,
        0.6,
        0.8,
        1
      ],
      "velocityProfile": [
        0.45,
        0.65,
        0.85,
        1
      ],
      "articulations": [
        "glissando",
        "accented-arrival"
      ],
      "density": "sparse",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "development"
      ],
      "variants": [
        {
          "id": "tango-arrastre-extended",
          "parentPatternId": "tango-arrastre",
          "name": "Extended Bass Arrastre Sweep",
          "variationType": "ornamented",
          "probability": 0.6,
          "onsetGrid": [
            11,
            13,
            14,
            15,
            0
          ],
          "accentProfile": [
            0.3,
            0.5,
            0.7,
            0.85,
            1
          ],
          "description": "Long sweep from contrabajo bottom C to arrival pitch."
        },
        {
          "id": "tango-arrastre-v-02",
          "parentPatternId": "tango-arrastre",
          "name": "Arrastre (Chromatic Drag Lead-in) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            13,
            14,
            15,
            0
          ],
          "accentProfile": [
            0.4,
            0.6799999999999999,
            0.76,
            1
          ],
          "velocityProfile": [
            0.51,
            0.63,
            0.83,
            1
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
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
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
          "id": "tango-interaction-3",
          "worldId": "tango",
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
      "id": "tango-bordoneo",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Bordoneo Criollo (Guitar Bass Movement)",
      "family": "Guitar Bordoneos",
      "category": "rolePattern",
      "description": "Melodic low-string counterlines and turns typical of Uruguayan & Argentine criollo guitars.",
      "tags": [
        "guitar",
        "bordoneo",
        "criollo",
        "countermelody"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track"
      ],
      "roles": [
        "harmony",
        "bass",
        "melodic-guitar",
        "counterline"
      ],
      "instruments": [
        "guitar",
        "electric-guitar",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.9,
        0.6,
        0.7,
        0.85,
        0.6,
        0.8,
        0.7
      ],
      "velocityProfile": [
        0.85,
        0.6,
        0.7,
        0.8,
        0.6,
        0.75,
        0.7
      ],
      "articulations": [
        "thumb-apoyando",
        "slur"
      ],
      "density": "medium",
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
          "id": "tango-bordoneo-milonga",
          "parentPatternId": "tango-bordoneo",
          "name": "Milonga Bordoneo Turn",
          "variationType": "syncopated",
          "probability": 0.5,
          "onsetGrid": [
            0,
            3,
            6,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.75,
            0.7,
            0.9,
            0.75
          ],
          "description": "Syncopated habanera bordoneo figure."
        },
        {
          "id": "tango-bordoneo-v-02",
          "parentPatternId": "tango-bordoneo",
          "name": "Bordoneo Criollo (Guitar Bass Movement) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            4,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.86,
            0.6799999999999999,
            0.6599999999999999,
            0.9299999999999999,
            0.5599999999999999,
            0.88,
            0.6599999999999999
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.58,
            0.6799999999999999,
            0.8600000000000001,
            0.58,
            0.73,
            0.76
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
        "modal/tonal traditional context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ]
    },
    {
      "id": "tango-332-piazzolla",
      "worldId": "tango",
      "traditionId": "tango-nuevo",
      "name": "3+3+2 Nuevo Tango Pulse (Piazzolla)",
      "family": "Additive Rhythms",
      "category": "ostinato",
      "description": "Piazzolla’s definitive 3+3+2 eighth-note syncopation across 4/4 time.",
      "tags": [
        "piazzolla",
        "332",
        "nuevo-tango",
        "electric-guitar",
        "piano"
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
        "harmony",
        "bass",
        "piano",
        "rhythm-guitar",
        "drums"
      ],
      "instruments": [
        "piano",
        "electric-guitar",
        "bandoneon",
        "bass",
        "drums"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        12
      ],
      "accentProfile": [
        1,
        0.9,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.9
      ],
      "articulations": [
        "staccato-accent"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo",
        "development"
      ],
      "variants": [
        {
          "id": "tango-332-dense-16th",
          "parentPatternId": "tango-332-piazzolla",
          "name": "3+3+2 Sixteenth-Note Subdivision",
          "variationType": "dense",
          "probability": 0.5,
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
            0.6,
            0.9,
            0.6,
            0.85,
            0.6
          ],
          "description": "Double-time sixteenth note 3+3+2 additive groove."
        },
        {
          "id": "tango-332-chiche-slap",
          "parentPatternId": "tango-332-piazzolla",
          "name": "3+3+2 with Chiche / Percussive Hit",
          "variationType": "ornamented",
          "probability": 0.4,
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.4,
            0.9,
            0.4,
            0.9,
            0.5
          ],
          "description": "Accents on 0, 6, 12 layered with string body chiche scrapes."
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "tango-interaction-4",
          "worldId": "tango",
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
      "id": "tango-fraseo-bandoneon",
      "worldId": "tango",
      "traditionId": "tango-epoca-oro",
      "name": "Fraseo y Rubato (Bandoneón Lead)",
      "family": "Lyrical Lead Phrases",
      "category": "phrasePattern",
      "description": "Expressive lyrical phrasing with flexible rubato, dynamic swell, and dramatic pause.",
      "tags": [
        "lead",
        "melody",
        "bandoneon",
        "fraseo",
        "rubato"
      ],
      "scopes": [
        "phrase",
        "region",
        "track"
      ],
      "roles": [
        "melody",
        "lead",
        "counterline"
      ],
      "instruments": [
        "bandoneon",
        "sax",
        "violin",
        "trumpet",
        "flute"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        14,
        16,
        20,
        24,
        28
      ],
      "accentProfile": [
        0.8,
        0.6,
        0.9,
        0.7,
        0.85,
        0.9,
        0.7,
        0.8,
        0.6
      ],
      "velocityProfile": [
        0.75,
        0.6,
        0.9,
        0.7,
        0.8,
        0.85,
        0.65,
        0.75,
        0.6
      ],
      "articulations": [
        "espressivo",
        "portamento"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "solo",
        "development"
      ],
      "variants": [
        {
          "id": "tango-fraseo-dramatic-cut",
          "parentPatternId": "tango-fraseo-bandoneon",
          "name": "Fraseo with Corte (Sudden Stop)",
          "variationType": "cadence",
          "probability": 0.45,
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14,
            16,
            20,
            22
          ],
          "accentProfile": [
            0.8,
            0.6,
            0.9,
            0.7,
            0.85,
            1,
            0.8,
            1
          ],
          "description": "Sudden dynamic silence / corte on measure 2 beat 3."
        },
        {
          "id": "tango-fraseo-bandoneon-v-02",
          "parentPatternId": "tango-fraseo-bandoneon",
          "name": "Fraseo y Rubato (Bandoneón Lead) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14,
            16,
            20,
            24,
            28
          ],
          "accentProfile": [
            0.76,
            0.6799999999999999,
            0.86,
            0.7799999999999999,
            0.8099999999999999,
            0.98,
            0.6599999999999999,
            0.88,
            0.5599999999999999
          ],
          "velocityProfile": [
            0.81,
            0.58,
            0.88,
            0.76,
            0.78,
            0.83,
            0.71,
            0.73,
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
            2
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 3,
      "weight": 0.7,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
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
      ],
      "interactionRules": [
        {
          "id": "tango-interaction-5",
          "worldId": "tango",
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
      "id": "tango-bandoneon-chords",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Bandoneon Chords",
      "family": "Bandoneon",
      "category": "fill",
      "description": "Staccato chordal accents with marcato dynamic shape.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bandoneon",
        "keys"
      ],
      "instruments": [
        "bandoneon",
        "keys"
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
        1,
        0.65,
        0.9,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.6,
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
          "id": "tango-bandoneon-chords-v-01",
          "parentPatternId": "tango-bandoneon-chords",
          "name": "Bandoneon Chords — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "tango-bandoneon-chords-v-02",
          "parentPatternId": "tango-bandoneon-chords",
          "name": "Bandoneon Chords — accent shift",
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
            0.96,
            0.73,
            0.86,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.83,
            0.71
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
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bandoneon"
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
      "id": "tango-violin-melody",
      "worldId": "tango",
      "traditionId": "tango-epoca-oro",
      "name": "Violin Legato",
      "family": "Strings",
      "category": "break",
      "description": "Smooth expressive legato melody phrasing.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "violin",
        "strings"
      ],
      "instruments": [
        "violin",
        "strings"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        4
      ],
      "accentProfile": [
        1,
        0.8
      ],
      "velocityProfile": [
        0.95,
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
          "id": "tango-violin-melody-v-01-safe",
          "parentPatternId": "tango-violin-melody",
          "name": "Violin Legato — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.95,
            0.88
          ],
          "velocityProfile": [
            0.98,
            0.71
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "tango-violin-melody-v-02-safe",
          "parentPatternId": "tango-violin-melody",
          "name": "Violin Legato — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.95,
            0.88
          ],
          "velocityProfile": [
            0.98,
            0.71
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 53,
      "anticipationOffset": 0,
      "roleDependencies": [
        "violin"
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
      "id": "tango-piano-chumba",
      "worldId": "tango",
      "traditionId": "tango-epoca-oro",
      "name": "Piano Chumba",
      "family": "Piano",
      "category": "cadence",
      "description": "Heavy bass anchor on beats 1 & 3 with staccato chords on 2 & 4.",
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
        1,
        4,
        5
      ],
      "accentProfile": [
        1,
        0.65,
        0.95,
        0.6
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.9,
        0.55
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
          "id": "tango-piano-chumba-v-01",
          "parentPatternId": "tango-piano-chumba",
          "name": "Piano Chumba — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            5
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "tango-piano-chumba-v-02",
          "parentPatternId": "tango-piano-chumba",
          "name": "Piano Chumba — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            1,
            4,
            5
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.9099999999999999,
            0.6799999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.88,
            0.6100000000000001
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
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
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
      "id": "tango-bass-pizzicato",
      "worldId": "tango",
      "traditionId": "tango-nuevo",
      "name": "Pizzicato Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Plucked bass syncopations with dynamic accents.",
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
        3,
        6
      ],
      "accentProfile": [
        1,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.8,
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
          "id": "tango-bass-pizzicato-v-01",
          "parentPatternId": "tango-bass-pizzicato",
          "name": "Pizzicato Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            6
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "tango-bass-pizzicato-v-02",
          "parentPatternId": "tango-bass-pizzicato",
          "name": "Pizzicato Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            6
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.71
          ],
          "velocityProfile": [
            1,
            0.78,
            0.6799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],
      "harmonicContext": [
        "modal/tonal traditional context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "tango"
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
      "id": "tango-phrase-12",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Marcato Phrase",
      "family": "Marcato",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around yumba and the marcato vocabulary of Tango.",
      "tags": [
        "tango",
        "marcato",
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
      "instruments": [
        "voice"
      ],
      "compatibleRoles": [
        "voice"
      ],
      "compatibleInstruments": [
        "voice"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        8,
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
      "syncopationRating": 0.5714285714285714,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
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
        "modal/tonal traditional context"
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
          "id": "tango-phrase-12-v-01",
          "parentPatternId": "tango-phrase-12",
          "name": "Marcato Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            5,
            8,
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
          "id": "tango-phrase-12-v-02",
          "parentPatternId": "tango-phrase-12",
          "name": "Marcato Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
            5,
            8,
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
      "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "tango",
        "marcato"
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
      "id": "tango-call-13",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Síncopa Response",
      "family": "Síncopa",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around síncopa in Tango.",
      "tags": [
        "tango",
        "sincopa",
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
        "guitar",
        "bass",
        "sax"
      ],
      "compatibleRoles": [
        "voice",
        "lead"
      ],
      "compatibleInstruments": [
        "guitar",
        "bass",
        "sax"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        4,
        6,
        9,
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
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
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
        "modal/tonal traditional context"
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
          "id": "tango-call-13-v-01",
          "parentPatternId": "tango-call-13",
          "name": "Síncopa Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
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
          "id": "tango-call-13-v-02",
          "parentPatternId": "tango-call-13",
          "name": "Síncopa Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            1,
            4,
            6,
            9,
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
          "id": "tango-call-13-v-03",
          "parentPatternId": "tango-call-13",
          "name": "Síncopa Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            4,
            6,
            9,
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
      "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "tango",
        "sincopa"
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
      "id": "tango-anchor-14",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Arrastre Anchor",
      "family": "Arrastre",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around rubato and the arrastre vocabulary of Tango.",
      "tags": [
        "tango",
        "arrastre",
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
        5,
        7,
        10,
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
      "syncopationRating": 0.8571428571428571,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
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
        "modal/tonal traditional context"
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
          "id": "tango-anchor-14-v-01",
          "parentPatternId": "tango-anchor-14",
          "name": "Arrastre Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            5,
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
          "id": "tango-anchor-14-v-02",
          "parentPatternId": "tango-anchor-14",
          "name": "Arrastre Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            1,
            2,
            5,
            7,
            10,
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
      "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "tango",
        "arrastre"
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
      "id": "tango-comp-15",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Yumba Comping",
      "family": "Yumba",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around marcato en 4 and the yumba vocabulary of Tango.",
      "tags": [
        "tango",
        "yumba",
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
        3,
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
      "syncopationRating": 0.5714285714285714,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
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
        "modal/tonal traditional context"
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
          "id": "tango-comp-15-v-01",
          "parentPatternId": "tango-comp-15",
          "name": "Yumba Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
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
          "id": "tango-comp-15-v-02",
          "parentPatternId": "tango-comp-15",
          "name": "Yumba Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            3,
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
      "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "tango",
        "yumba"
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
      "id": "tango-intro-16",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Marcato Intro",
      "family": "Marcato",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around arrastre and the marcato vocabulary of Tango.",
      "tags": [
        "tango",
        "marcato",
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
        "rubato-aware"
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
        "modal/tonal traditional context"
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
          "id": "tango-intro-16-v-01",
          "parentPatternId": "tango-intro-16",
          "name": "Marcato Intro — sparse variation",
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
          "id": "tango-intro-16-v-02",
          "parentPatternId": "tango-intro-16",
          "name": "Marcato Intro — accent shift",
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
        },
        {
          "id": "tango-intro-16-v-03",
          "parentPatternId": "tango-intro-16",
          "name": "Marcato Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            2,
            5,
            6,
            9,
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
      "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "tango",
        "marcato"
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
      "id": "tango-verse-17",
      "worldId": "tango",
      "traditionId": "tango-guardia-vieja",
      "name": "Síncopa Verse Variation",
      "family": "Síncopa",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around yumba and the síncopa vocabulary of Tango.",
      "tags": [
        "tango",
        "sincopa",
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
        3,
        6,
        7,
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
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 53,
      "articulations": [
        "rubato-aware"
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
        "modal/tonal traditional context"
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
        {
          "id": "tango-verse-17-v-01",
          "parentPatternId": "tango-verse-17",
          "name": "Síncopa Verse Variation — sparse variation",
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
          "id": "tango-verse-17-v-02",
          "parentPatternId": "tango-verse-17",
          "name": "Síncopa Verse Variation — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "tango",
        "sincopa"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "staccato martellato",
    "arrastre glissando",
    "pizzicato a la bartók / slap",
    "chiche (behind the bridge scrape)",
    "tambor (string knocking)",
    "rubato phrase elastic",
    "pesado / accentuated downbeat"
  ],
  "forms": [
    "statement",
    "variation",
    "instrumental contrast",
    "corte (cut)",
    "recapitulation",
    "coda"
  ],
  "relationships": [
    "piano ↔ bass (marcato unison / division)",
    "bandoneón ↔ violin (call and response fraseo)",
    "lead ↔ accompaniment (rubato over strict pulse)",
    "arrastre ↔ downbeat (anticipatory propulsion)"
  ],
  "transformations": [
    "trans-accent-marcato",
    "trans-accent-yumba",
    "trans-anticipation",
    "trans-phrase-cadence",
    "trans-syncopation-tresillo",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "strict rhythmic cadence alternating with fluid lyrical fraseo",
    "abrupt dynamic cortes and silences",
    "dense multi-instrumental yumba arrivals",
    "expressive countermelody weaving between bandoneón and strings",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "criollo bordoneo",
      "marcato rasguido",
      "octave melody",
      "slap accents"
    ],
    "bass": [
      "pesado downbeats",
      "chromatic arrastre",
      "contratiempo syncopations"
    ],
    "sax": [
      "expressive tango fraseo",
      "counter-line to piano",
      "staccato horn stabs"
    ],
    "piano": [
      "yumba accents",
      "rapid upper register campanitas",
      "heavy marcato"
    ],
    "drums": [
      "snare rim clicks on 4",
      "kick accents matching piano yumba",
      "candombe-derived hi-hat"
    ],
    "bandoneon": [
      "staccato bandoneon marcato and arrastre accents"
    ]
  },
  "combinations": [
    "Tango + Jazz",
    "Tango + Flamenco",
    "Tango + Funk",
    "Tango + Afro-Cuban"
  ],
  "danceTags": [
    "social-partner",
    "blues-fusion-compatible",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Marcato en 4 with heavy Pesado on beats 1 & 3 and chromatic arrastre",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato"
  },
  "crossLinks": [
    "Tango ↔ Blues Fusion",
    "Tango ↔ Flamenco",
    "Tango ↔ Jazz"
  ]
};
