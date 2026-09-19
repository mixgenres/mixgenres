import { SongStyle, StyleKind, HarmonyGrammar, FormGrammar, FormStepTemplate } from './schema';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID } from '../genres';
import { GENRE_FORMS, PROGRESSIONS, TEMPOS } from '../genreForms';
import { ROOM_BY_WORLD } from '../../engine/mixer';

/**
 * Registry of all available Song Styles across the entire catalog.
 */
const STYLES_CATALOG: SongStyle[] = [];

// Curated specialized style families requested by prompt
const SPECIALIZED_STYLES: SongStyle[] = [
  // --- FLAMENCO: palo-specific styles -------------------------------------
  {
    "id": "flamenco-solea-style",
    "name": "Soleá",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "canonical",
    "canonical": true,
    "summary": "Deep • 12-beat • Phrygian\nThe foundation of Flamenco.\nPaco de Lucía · Camarón · Fernanda",
    "signatureTraits": [
      "12-beat 3+3+2+2+2",
      "Heavy 3/10/12",
      "Phrygian / Andalusian cadence",
      "Cante–guitar breathing",
      "Llamada / cierre"
    ],
    "era": "Traditional / modern",
    "region": "Andalusia, Spain",
    "confidence": "high",
    "authoringNotes": "Palo-specific patch: compás, harmonic color, phrase vocabulary and starter ensemble are intentionally coupled.",
    "form": {
      "sectionVocab": [
        "intro",
        "verse",
        "solo",
        "verse",
        "chorus",
        "ending"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "intro",
              "label": "Salida / Falseta",
              "kind": "intro",
              "bars": 8,
              "intensity": "low"
            },
            {
              "key": "letra-1",
              "label": "Letra 1",
              "kind": "verse",
              "bars": 12,
              "intensity": "medium"
            },
            {
              "key": "falseta",
              "label": "Falseta",
              "kind": "solo",
              "bars": 12,
              "intensity": "high"
            },
            {
              "key": "letra-2",
              "label": "Letra 2",
              "kind": "verse",
              "bars": 12,
              "intensity": "medium"
            },
            {
              "key": "remate",
              "label": "Remate / Cierre",
              "kind": "chorus",
              "bars": 8,
              "intensity": "peak"
            },
            {
              "key": "coda",
              "label": "Cierre",
              "kind": "ending",
              "bars": 4,
              "intensity": "low"
            }
          ]
        }
      ],
      "preferredMeters": [
        "12/8"
      ]
    },
    "harmony": {
      "model": "functional",
      "modePolicy": "phrygian",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "Am",
            "G",
            "F",
            "E7"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "Am",
            "Dm",
            "G",
            "C",
            "F",
            "E7",
            "Am",
            "E7"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "verse": [
          "Am",
          "G",
          "F",
          "E7",
          "Am",
          "G",
          "F",
          "E7"
        ],
        "solo": [
          "Dm",
          "C",
          "Bb",
          "A7",
          "Dm",
          "E7",
          "Am",
          "E7"
        ],
        "coda": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      },
      "chordVocabulary": [
        "Am",
        "G",
        "F",
        "E7",
        "Dm",
        "C",
        "Bb",
        "A7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "12/8",
      "tempoRange": [
        70,
        100
      ],
      "defaultBpm": 84,
      "feel": "measured-jondo",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "12-beat compás: 12, 3, 6, 8, 10; strong closure at 10 and release into 12."
    },
    "melody": {
      "scaleMode": "phrygian",
      "phraseLengthsBars": [
        2,
        4,
        8
      ],
      "contourArchetypes": [
        "flamenco-arch",
        "descending-cadence",
        "call-and-response"
      ],
      "ornamentVocabulary": [
        "slide",
        "grace-note",
        "vibrato",
        "mordent",
        "picado"
      ],
      "chordToneTargeting": true,
      "callAndResponse": true
    },
    "arrangement": {
      "ensemble": [
        {
          "role": "harmony",
          "instrumentIds": [
            "guitar"
          ],
          "priority": 10
        },
        {
          "role": "melody",
          "instrumentIds": [
            "voice"
          ],
          "priority": 10
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "palmas"
          ],
          "priority": 6
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "cajon"
          ],
          "priority": 4
        }
      ],
      "densityCurve": {
        "intro": "sparse",
        "letra-1": "normal",
        "falseta": "normal",
        "letra-2": "normal",
        "remate": "busy",
        "coda": "sparse"
      },
      "solos": [
        "guitar"
      ]
    },
    "sound": {
      "instrumentPalette": [
        {
          "value": "guitar",
          "w": 1
        },
        {
          "value": "voice",
          "w": 0.95
        },
        {
          "value": "palmas",
          "w": 0.7
        },
        {
          "value": "cajon",
          "w": 0.35
        }
      ],
      "articulations": {
        "guitar": "rasgueado, golpe, alzapúa, picado, tremolo",
        "cajon": "grave/agudo/slap",
        "palmas": "sordas/claras",
        "voice": "cante / melisma"
      },
      "masterProfile": {
        "roomId": "studio",
        "pocket": 0.52,
        "lift": 0.62
      }
    },
    "patterns": {
      "require": [
        "flam-solea-guitar-compas",
        "flam-solea-palmas",
        "flam-llamada-12",
        "flam-remate-12"
      ],
      "avoid": []
    },
    "gestures": {
      "llamada": {
        "id": "llamada",
        "name": "Llamada",
        "probability": 0.9
      },
      "cierre": {
        "id": "cierre",
        "name": "Cierre on 10",
        "probability": 0.9
      },
      "falseta": {
        "id": "falseta",
        "name": "Falseta interlude",
        "probability": 0.8
      }
    },
    "rules": {
      "require": [
        {
          "tag": "flamenco"
        }
      ],
      "forbid": []
    }
  },
  {
    "id": "flamenco-buleria-style",
    "name": "Bulerías",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Fast • 12-beat • Contratiempo\nPlayful, explosive, endlessly interactive.\nLa Paquera · Camarón",
    "signatureTraits": [
      "Fast 12-beat compás",
      "Contratiempo palmas",
      "Cortes and remates",
      "Jaleo / fin de fiesta",
      "Alzapúa and rasgueado"
    ],
    "era": "Traditional / modern",
    "region": "Andalusia, Spain",
    "confidence": "high",
    "authoringNotes": "Palo-specific patch: compás, harmonic color, phrase vocabulary and starter ensemble are intentionally coupled.",
    "form": {
      "sectionVocab": [
        "intro",
        "verse",
        "chorus",
        "solo",
        "ending"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "intro",
              "label": "Llamada",
              "kind": "intro",
              "bars": 4,
              "intensity": "medium"
            },
            {
              "key": "letra",
              "label": "Letras / Chuflas",
              "kind": "verse",
              "bars": 12,
              "intensity": "high"
            },
            {
              "key": "jaleo",
              "label": "Jaleo / Respuestas",
              "kind": "chorus",
              "bars": 12,
              "intensity": "peak"
            },
            {
              "key": "pataita",
              "label": "Pataíta / Falseta",
              "kind": "solo",
              "bars": 12,
              "intensity": "peak"
            },
            {
              "key": "fin",
              "label": "Fin de Fiesta",
              "kind": "ending",
              "bars": 8,
              "intensity": "peak"
            }
          ]
        }
      ],
      "preferredMeters": [
        "12/8"
      ]
    },
    "harmony": {
      "model": "functional",
      "modePolicy": "phrygian",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "Am",
            "G",
            "F",
            "E7"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "Dm",
            "C",
            "Bb",
            "A7",
            "Dm",
            "E7",
            "Am",
            "E7"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "verse": [
          "Dm",
          "C",
          "Bb",
          "A7"
        ],
        "chorus": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "solo": [
          "Dm",
          "C",
          "Bb",
          "A7"
        ],
        "ending": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      },
      "chordVocabulary": [
        "Am",
        "G",
        "F",
        "E7",
        "Dm",
        "C",
        "Bb",
        "A7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "12/8",
      "tempoRange": [
        180,
        240
      ],
      "defaultBpm": 210,
      "feel": "buleria-fast-contratiempo",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "12-beat bulería with flexible accents, contratiempo and abrupt cortes."
    },
    "melody": {
      "scaleMode": "phrygian",
      "phraseLengthsBars": [
        2,
        4,
        8
      ],
      "contourArchetypes": [
        "flamenco-arch",
        "descending-cadence",
        "call-and-response"
      ],
      "ornamentVocabulary": [
        "slide",
        "grace-note",
        "vibrato",
        "mordent",
        "picado"
      ],
      "chordToneTargeting": true,
      "callAndResponse": true
    },
    "arrangement": {
      "ensemble": [
        {
          "role": "harmony",
          "instrumentIds": [
            "guitar"
          ],
          "priority": 10
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "palmas"
          ],
          "priority": 9
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "cajon"
          ],
          "priority": 8
        },
        {
          "role": "melody",
          "instrumentIds": [
            "voice"
          ],
          "priority": 8
        },
        {
          "role": "bass",
          "instrumentIds": [
            "bass"
          ],
          "priority": 5
        }
      ],
      "densityCurve": {
        "intro": "normal",
        "letra": "normal",
        "jaleo": "busy",
        "pataita": "busy",
        "fin": "busy"
      },
      "solos": [
        "guitar"
      ]
    },
    "sound": {
      "instrumentPalette": [
        {
          "value": "guitar",
          "w": 1
        },
        {
          "value": "palmas",
          "w": 0.95
        },
        {
          "value": "cajon",
          "w": 0.8
        },
        {
          "value": "voice",
          "w": 0.8
        },
        {
          "value": "bass",
          "w": 0.35
        }
      ],
      "articulations": {
        "guitar": "rasgueado, golpe, alzapúa, picado, tremolo",
        "cajon": "grave/agudo/slap",
        "palmas": "sordas/claras",
        "voice": "cante / melisma"
      },
      "masterProfile": {
        "roomId": "studio",
        "pocket": 0.52,
        "lift": 0.62
      }
    },
    "patterns": {
      "require": [
        "flam-buleria-compas",
        "flam-buleria-palmas",
        "flam-alzapua-12",
        "flam-remate-12"
      ],
      "avoid": []
    },
    "gestures": {
      "jaleo": {
        "id": "jaleo",
        "name": "Jaleo",
        "probability": 0.9
      },
      "corte": {
        "id": "corte",
        "name": "Bulería Corte",
        "probability": 0.8
      },
      "remate": {
        "id": "remate",
        "name": "Remate",
        "probability": 0.9
      }
    },
    "rules": {
      "require": [
        {
          "tag": "flamenco"
        }
      ],
      "forbid": []
    }
  },
  {
    "id": "flamenco-alegrias-style",
    "name": "Alegrías",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Bright • 12-beat • Major\nCadiz sparkle, escobilla and fiesta.\nChano Lobato · Carmen Linares",
    "signatureTraits": [
      "Cádiz / Cantiñas",
      "Major-key brightness",
      "12-beat 3+3+2+2+2",
      "Silencio + falseta",
      "Escobilla / subida"
    ],
    "era": "Traditional / modern",
    "region": "Andalusia, Spain",
    "confidence": "high",
    "authoringNotes": "Palo-specific patch: compás, harmonic color, phrase vocabulary and starter ensemble are intentionally coupled.",
    "form": {
      "sectionVocab": [
        "intro",
        "verse",
        "bridge",
        "solo",
        "chorus",
        "ending"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "salida",
              "label": "Salida / Tirititrán",
              "kind": "intro",
              "bars": 8,
              "intensity": "medium"
            },
            {
              "key": "letra",
              "label": "Letra",
              "kind": "verse",
              "bars": 12,
              "intensity": "high"
            },
            {
              "key": "silencio",
              "label": "Silencio / Falseta",
              "kind": "bridge",
              "bars": 8,
              "intensity": "low"
            },
            {
              "key": "escobilla",
              "label": "Escobilla",
              "kind": "solo",
              "bars": 12,
              "intensity": "peak"
            },
            {
              "key": "subida",
              "label": "Subida / Remate",
              "kind": "chorus",
              "bars": 8,
              "intensity": "peak"
            },
            {
              "key": "buleria",
              "label": "Final por Bulerías",
              "kind": "ending",
              "bars": 8,
              "intensity": "peak"
            }
          ]
        }
      ],
      "preferredMeters": [
        "12/8"
      ]
    },
    "harmony": {
      "model": "functional",
      "modePolicy": "major",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "C",
            "F",
            "G7",
            "C"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "C",
            "G7",
            "Am",
            "Dm",
            "G7",
            "C",
            "F",
            "G7"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "C",
          "G7",
          "C",
          "C"
        ],
        "verse": [
          "C",
          "F",
          "G7",
          "C"
        ],
        "bridge": [
          "Am",
          "Dm",
          "G7",
          "C"
        ],
        "chorus": [
          "F",
          "C",
          "G7",
          "C"
        ],
        "solo": [
          "Am",
          "Dm",
          "G7",
          "C"
        ],
        "ending": [
          "G7",
          "G7",
          "C",
          "C"
        ]
      },
      "chordVocabulary": [
        "C",
        "F",
        "G7",
        "Am",
        "Dm",
        "E7",
        "A7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "12/8",
      "tempoRange": [
        120,
        160
      ],
      "defaultBpm": 138,
      "feel": "alegrias-bright",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "Bright 12-beat cantiñas compás with buoyant 3/10/12 accents."
    },
    "melody": {
      "scaleMode": "major",
      "phraseLengthsBars": [
        2,
        4,
        8
      ],
      "contourArchetypes": [
        "flamenco-arch",
        "descending-cadence",
        "call-and-response"
      ],
      "ornamentVocabulary": [
        "slide",
        "grace-note",
        "vibrato",
        "mordent",
        "picado"
      ],
      "chordToneTargeting": true,
      "callAndResponse": true
    },
    "arrangement": {
      "ensemble": [
        {
          "role": "harmony",
          "instrumentIds": [
            "guitar"
          ],
          "priority": 10
        },
        {
          "role": "melody",
          "instrumentIds": [
            "voice"
          ],
          "priority": 9
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "palmas"
          ],
          "priority": 8
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "cajon",
            "zapateado"
          ],
          "priority": 7
        }
      ],
      "densityCurve": {
        "salida": "normal",
        "letra": "normal",
        "silencio": "sparse",
        "escobilla": "busy",
        "subida": "busy",
        "buleria": "busy"
      },
      "solos": [
        "guitar"
      ]
    },
    "sound": {
      "instrumentPalette": [
        {
          "value": "guitar",
          "w": 1
        },
        {
          "value": "voice",
          "w": 0.9
        },
        {
          "value": "palmas",
          "w": 0.85
        },
        {
          "value": "cajon",
          "w": 0.55
        },
        {
          "value": "zapateado",
          "w": 0.35
        }
      ],
      "articulations": {
        "guitar": "rasgueado, golpe, alzapúa, picado, tremolo",
        "cajon": "grave/agudo/slap",
        "palmas": "sordas/claras",
        "voice": "cante / melisma"
      },
      "masterProfile": {
        "roomId": "studio",
        "pocket": 0.52,
        "lift": 0.62
      }
    },
    "patterns": {
      "require": [
        "flam-alegrias-compas",
        "flam-alegrias-palmas",
        "flam-escobilla-12",
        "flam-remate-12"
      ],
      "avoid": []
    },
    "gestures": {
      "silencio": {
        "id": "silencio",
        "name": "Silencio",
        "probability": 0.75
      },
      "subida": {
        "id": "subida",
        "name": "Subida",
        "probability": 0.85
      }
    },
    "rules": {
      "require": [
        {
          "tag": "flamenco"
        }
      ],
      "forbid": []
    }
  },
  {
    "id": "flamenco-tangos-style",
    "name": "Tangos",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Grounded • 4-beat • Phrygian\nHeavy pulse, palmas and swagger.\nFernanda de Utrera · La Repompa",
    "signatureTraits": [
      "4/4 binary compás",
      "Weight on 2–3–4",
      "Phrygian por medio/por arriba",
      "Rasgueado + golpe",
      "Compact remates"
    ],
    "era": "Traditional / modern",
    "region": "Andalusia, Spain",
    "confidence": "high",
    "authoringNotes": "Palo-specific patch: compás, harmonic color, phrase vocabulary and starter ensemble are intentionally coupled.",
    "form": {
      "sectionVocab": [
        "intro",
        "verse",
        "chorus",
        "solo",
        "ending"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "intro",
              "label": "Compás Intro",
              "kind": "intro",
              "bars": 4,
              "intensity": "low"
            },
            {
              "key": "letra",
              "label": "Letra",
              "kind": "verse",
              "bars": 16,
              "intensity": "medium"
            },
            {
              "key": "estribillo",
              "label": "Estribillo",
              "kind": "chorus",
              "bars": 8,
              "intensity": "high"
            },
            {
              "key": "falseta",
              "label": "Falseta",
              "kind": "solo",
              "bars": 8,
              "intensity": "high"
            },
            {
              "key": "remate",
              "label": "Remate",
              "kind": "ending",
              "bars": 4,
              "intensity": "peak"
            }
          ]
        }
      ],
      "preferredMeters": [
        "4/4"
      ]
    },
    "harmony": {
      "model": "functional",
      "modePolicy": "phrygian",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "Am",
            "G",
            "F",
            "E7"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "Dm",
            "C",
            "Bb",
            "A7",
            "Dm",
            "E7",
            "Am",
            "E7"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "verse": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "chorus": [
          "Dm",
          "C",
          "Bb",
          "A7"
        ],
        "solo": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "ending": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      },
      "chordVocabulary": [
        "Am",
        "G",
        "F",
        "E7",
        "Dm",
        "C",
        "Bb",
        "A7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "4/4",
      "tempoRange": [
        110,
        150
      ],
      "defaultBpm": 128,
      "feel": "tangos-binary",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "4/4: beat 1 breathes; 2, 3 and 4 carry the dance weight."
    },
    "melody": {
      "scaleMode": "phrygian",
      "phraseLengthsBars": [
        2,
        4,
        8
      ],
      "contourArchetypes": [
        "flamenco-arch",
        "descending-cadence",
        "call-and-response"
      ],
      "ornamentVocabulary": [
        "slide",
        "grace-note",
        "vibrato",
        "mordent",
        "picado"
      ],
      "chordToneTargeting": true,
      "callAndResponse": true
    },
    "arrangement": {
      "ensemble": [
        {
          "role": "harmony",
          "instrumentIds": [
            "guitar"
          ],
          "priority": 10
        },
        {
          "role": "melody",
          "instrumentIds": [
            "voice"
          ],
          "priority": 8
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "palmas"
          ],
          "priority": 8
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "cajon"
          ],
          "priority": 7
        },
        {
          "role": "bass",
          "instrumentIds": [
            "bass"
          ],
          "priority": 5
        }
      ],
      "densityCurve": {
        "intro": "sparse",
        "letra": "normal",
        "estribillo": "normal",
        "falseta": "normal",
        "remate": "busy"
      },
      "solos": [
        "guitar"
      ]
    },
    "sound": {
      "instrumentPalette": [
        {
          "value": "guitar",
          "w": 1
        },
        {
          "value": "palmas",
          "w": 0.9
        },
        {
          "value": "cajon",
          "w": 0.7
        },
        {
          "value": "voice",
          "w": 0.8
        },
        {
          "value": "bass",
          "w": 0.4
        }
      ],
      "articulations": {
        "guitar": "rasgueado, golpe, alzapúa, picado, tremolo",
        "cajon": "grave/agudo/slap",
        "palmas": "sordas/claras",
        "voice": "cante / melisma"
      },
      "masterProfile": {
        "roomId": "studio",
        "pocket": 0.52,
        "lift": 0.62
      }
    },
    "patterns": {
      "require": [
        "flam-tangos-guitar",
        "flam-tangos-compas",
        "flamenco-golpe"
      ],
      "avoid": []
    },
    "gestures": {
      "golpe": {
        "id": "golpe",
        "name": "Golpe",
        "probability": 0.85
      }
    },
    "rules": {
      "require": [
        {
          "tag": "flamenco"
        }
      ],
      "forbid": []
    }
  },
  {
    "id": "flamenco-tientos-style",
    "name": "Tientos",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Slow • 4-beat • Modal\nTangos stretched into tension.\nEl Chocolate · Carmen Linares",
    "signatureTraits": [
      "Slow 4/4",
      "Phrygian gravity",
      "Triplet-like traditional feel",
      "Cante jondo",
      "Often closes into Tangos"
    ],
    "era": "Traditional / modern",
    "region": "Andalusia, Spain",
    "confidence": "high",
    "authoringNotes": "Palo-specific patch: compás, harmonic color, phrase vocabulary and starter ensemble are intentionally coupled.",
    "form": {
      "sectionVocab": [
        "intro",
        "verse",
        "solo",
        "bridge",
        "chorus"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "salida",
              "label": "Salida",
              "kind": "intro",
              "bars": 4,
              "intensity": "low"
            },
            {
              "key": "letra",
              "label": "Letra Tientos",
              "kind": "verse",
              "bars": 16,
              "intensity": "medium"
            },
            {
              "key": "falseta",
              "label": "Falseta",
              "kind": "solo",
              "bars": 8,
              "intensity": "high"
            },
            {
              "key": "subida",
              "label": "Subida",
              "kind": "bridge",
              "bars": 8,
              "intensity": "peak"
            },
            {
              "key": "tangos",
              "label": "Salida por Tangos",
              "kind": "chorus",
              "bars": 8,
              "intensity": "peak"
            }
          ]
        }
      ],
      "preferredMeters": [
        "4/4"
      ]
    },
    "harmony": {
      "model": "functional",
      "modePolicy": "phrygian",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "Am",
            "G",
            "F",
            "E7"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "Am",
            "Dm",
            "G",
            "C",
            "F",
            "E7",
            "Am",
            "E7"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "verse": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "solo": [
          "Dm",
          "C",
          "Bb",
          "A7"
        ],
        "ending": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      },
      "chordVocabulary": [
        "Am",
        "G",
        "F",
        "E7",
        "Dm",
        "C",
        "Bb",
        "A7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "4/4",
      "tempoRange": [
        50,
        85
      ],
      "defaultBpm": 68,
      "feel": "tientos-heavy",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "Slow binary compás with heavy space and triplet-like internal subdivision."
    },
    "melody": {
      "scaleMode": "phrygian",
      "phraseLengthsBars": [
        2,
        4,
        8
      ],
      "contourArchetypes": [
        "flamenco-arch",
        "descending-cadence",
        "call-and-response"
      ],
      "ornamentVocabulary": [
        "slide",
        "grace-note",
        "vibrato",
        "mordent",
        "picado"
      ],
      "chordToneTargeting": true,
      "callAndResponse": true
    },
    "arrangement": {
      "ensemble": [
        {
          "role": "harmony",
          "instrumentIds": [
            "guitar"
          ],
          "priority": 10
        },
        {
          "role": "melody",
          "instrumentIds": [
            "voice"
          ],
          "priority": 9
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "palmas"
          ],
          "priority": 5
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "cajon"
          ],
          "priority": 4
        }
      ],
      "densityCurve": {
        "salida": "sparse",
        "letra": "normal",
        "falseta": "normal",
        "subida": "busy",
        "tangos": "busy"
      },
      "solos": [
        "guitar"
      ]
    },
    "sound": {
      "instrumentPalette": [
        {
          "value": "guitar",
          "w": 1
        },
        {
          "value": "voice",
          "w": 0.95
        },
        {
          "value": "palmas",
          "w": 0.5
        },
        {
          "value": "cajon",
          "w": 0.3
        }
      ],
      "articulations": {
        "guitar": "rasgueado, golpe, alzapúa, picado, tremolo",
        "cajon": "grave/agudo/slap",
        "palmas": "sordas/claras",
        "voice": "cante / melisma"
      },
      "masterProfile": {
        "roomId": "studio",
        "pocket": 0.52,
        "lift": 0.62
      }
    },
    "patterns": {
      "require": [
        "flam-tientos-compas",
        "flam-tientos-palmas",
        "flam-tangos-guitar"
      ],
      "avoid": []
    },
    "gestures": {
      "subida": {
        "id": "subida",
        "name": "Subida into Tangos",
        "probability": 0.85
      }
    },
    "rules": {
      "require": [
        {
          "tag": "flamenco"
        }
      ],
      "forbid": []
    }
  },
  {
    "id": "flamenco-seguiriya-style",
    "name": "Seguiriya",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Dark • Asymmetric • Cante jondo\nRaw, dramatic and rhythmically severe.\nManuel Torre · Antonio Mairena",
    "signatureTraits": [
      "2+2+3+3+2 grouping",
      "Cante jondo",
      "Sparse palmas",
      "Dramatic closures",
      "Rubato inside compás"
    ],
    "era": "Traditional / modern",
    "region": "Andalusia, Spain",
    "confidence": "high",
    "authoringNotes": "Palo-specific patch: compás, harmonic color, phrase vocabulary and starter ensemble are intentionally coupled.",
    "form": {
      "sectionVocab": [
        "intro",
        "verse",
        "solo",
        "ending"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "salida",
              "label": "Salida / Quejío",
              "kind": "intro",
              "bars": 6,
              "intensity": "low"
            },
            {
              "key": "letra",
              "label": "Letra",
              "kind": "verse",
              "bars": 12,
              "intensity": "medium"
            },
            {
              "key": "falseta",
              "label": "Falseta",
              "kind": "solo",
              "bars": 12,
              "intensity": "high"
            },
            {
              "key": "remate",
              "label": "Remate / Corte",
              "kind": "ending",
              "bars": 6,
              "intensity": "peak"
            }
          ]
        }
      ],
      "preferredMeters": [
        "12/8"
      ]
    },
    "harmony": {
      "model": "functional",
      "modePolicy": "phrygian",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "Am",
            "G",
            "F",
            "E7"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "Dm",
            "C",
            "Bb",
            "A7",
            "Dm",
            "E7",
            "Am",
            "E7"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "verse": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "solo": [
          "Dm",
          "C",
          "Bb",
          "A7"
        ],
        "ending": [
          "E7",
          "E7",
          "Am",
          "Am"
        ]
      },
      "chordVocabulary": [
        "Am",
        "G",
        "F",
        "E7",
        "Dm",
        "C",
        "Bb",
        "A7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "12/8",
      "tempoRange": [
        90,
        140
      ],
      "defaultBpm": 112,
      "feel": "seguiriya-elastic",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "2+2+3+3+2 asymmetric cycle; do not substitute the smoother Soleá accent map."
    },
    "melody": {
      "scaleMode": "phrygian",
      "phraseLengthsBars": [
        2,
        4,
        8
      ],
      "contourArchetypes": [
        "flamenco-arch",
        "descending-cadence",
        "call-and-response"
      ],
      "ornamentVocabulary": [
        "slide",
        "grace-note",
        "vibrato",
        "mordent",
        "picado"
      ],
      "chordToneTargeting": true,
      "callAndResponse": true
    },
    "arrangement": {
      "ensemble": [
        {
          "role": "harmony",
          "instrumentIds": [
            "guitar"
          ],
          "priority": 10
        },
        {
          "role": "melody",
          "instrumentIds": [
            "voice"
          ],
          "priority": 10
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "palmas"
          ],
          "priority": 4
        }
      ],
      "densityCurve": {
        "salida": "sparse",
        "letra": "normal",
        "falseta": "normal",
        "remate": "busy"
      },
      "solos": [
        "guitar"
      ]
    },
    "sound": {
      "instrumentPalette": [
        {
          "value": "guitar",
          "w": 1
        },
        {
          "value": "voice",
          "w": 1
        },
        {
          "value": "palmas",
          "w": 0.35
        }
      ],
      "articulations": {
        "guitar": "rasgueado, golpe, alzapúa, picado, tremolo",
        "cajon": "grave/agudo/slap",
        "palmas": "sordas/claras",
        "voice": "cante / melisma"
      },
      "masterProfile": {
        "roomId": "studio",
        "pocket": 0.52,
        "lift": 0.62
      }
    },
    "patterns": {
      "require": [
        "flam-seguiriya-compas",
        "flam-seguiriya-palmas"
      ],
      "avoid": []
    },
    "gestures": {
      "quejio": {
        "id": "quejio",
        "name": "Quejío Space",
        "probability": 0.9
      },
      "corte": {
        "id": "corte",
        "name": "Dramatic Corte",
        "probability": 0.85
      }
    },
    "rules": {
      "require": [
        {
          "tag": "flamenco"
        }
      ],
      "forbid": []
    }
  },
  {
    "id": "flamenco-fandango-style",
    "name": "Fandangos",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Folk-rooted • 3-beat • Expressive\nCoplas, melody and regional character.\nPaco Toronjo",
    "signatureTraits": [
      "3/4 ternary",
      "Four 3-beat phrases",
      "Modal-to-major movement",
      "Huelva identity",
      "Flexible vocal phrasing"
    ],
    "era": "Traditional / modern",
    "region": "Andalusia, Spain",
    "confidence": "high",
    "authoringNotes": "Palo-specific patch: compás, harmonic color, phrase vocabulary and starter ensemble are intentionally coupled.",
    "form": {
      "sectionVocab": [
        "intro",
        "verse",
        "solo",
        "ending"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "intro",
              "label": "Guitar Intro",
              "kind": "intro",
              "bars": 4,
              "intensity": "low"
            },
            {
              "key": "copla",
              "label": "Copla",
              "kind": "verse",
              "bars": 12,
              "intensity": "medium"
            },
            {
              "key": "falseta",
              "label": "Falseta",
              "kind": "solo",
              "bars": 8,
              "intensity": "high"
            },
            {
              "key": "coda",
              "label": "Cierre",
              "kind": "ending",
              "bars": 4,
              "intensity": "low"
            }
          ]
        }
      ],
      "preferredMeters": [
        "3/4"
      ]
    },
    "harmony": {
      "model": "functional",
      "modePolicy": "major",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "Am",
            "G",
            "F",
            "E7"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "C",
            "G7",
            "C",
            "F",
            "G7",
            "C"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "verse": [
          "Am",
          "G",
          "F",
          "E7"
        ],
        "solo": [
          "C",
          "F",
          "G7",
          "C"
        ],
        "ending": [
          "G7",
          "G7",
          "C",
          "C"
        ]
      },
      "chordVocabulary": [
        "Am",
        "G",
        "F",
        "E7",
        "C",
        "F",
        "G7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "3/4",
      "tempoRange": [
        130,
        150
      ],
      "defaultBpm": 140,
      "feel": "fandango-ternary",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "Four phrases of 3/4 with modal opening and major/minor melodic turns."
    },
    "melody": {
      "scaleMode": "major",
      "phraseLengthsBars": [
        2,
        4,
        8
      ],
      "contourArchetypes": [
        "flamenco-arch",
        "descending-cadence",
        "call-and-response"
      ],
      "ornamentVocabulary": [
        "slide",
        "grace-note",
        "vibrato",
        "mordent",
        "picado"
      ],
      "chordToneTargeting": true,
      "callAndResponse": true
    },
    "arrangement": {
      "ensemble": [
        {
          "role": "harmony",
          "instrumentIds": [
            "guitar"
          ],
          "priority": 10
        },
        {
          "role": "melody",
          "instrumentIds": [
            "voice"
          ],
          "priority": 9
        },
        {
          "role": "percussion",
          "instrumentIds": [
            "palmas"
          ],
          "priority": 5
        }
      ],
      "densityCurve": {
        "intro": "sparse",
        "copla": "normal",
        "falseta": "normal",
        "coda": "sparse"
      },
      "solos": [
        "guitar"
      ]
    },
    "sound": {
      "instrumentPalette": [
        {
          "value": "guitar",
          "w": 1
        },
        {
          "value": "voice",
          "w": 0.9
        },
        {
          "value": "palmas",
          "w": 0.45
        }
      ],
      "articulations": {
        "guitar": "rasgueado, golpe, alzapúa, picado, tremolo",
        "cajon": "grave/agudo/slap",
        "palmas": "sordas/claras",
        "voice": "cante / melisma"
      },
      "masterProfile": {
        "roomId": "studio",
        "pocket": 0.52,
        "lift": 0.62
      }
    },
    "patterns": {
      "require": [
        "flam-fandango-3"
      ],
      "avoid": []
    },
    "gestures": {
      "copla": {
        "id": "copla",
        "name": "Fandango Copla",
        "probability": 0.8
      }
    },
    "rules": {
      "require": [
        {
          "tag": "flamenco"
        }
      ],
      "forbid": []
    }
  },
  {
    id: 'flamenco-rumba',
    name: 'Rumba',
    aliases: ['Rumba Gitana', 'Rumba Catalana', 'Rumba Flamenca'],
    genres: ['flamenco'], primaryGenre: 'flamenco', kind: 'canonical', canonical: false,
    summary: 'Driving • 4-beat • Crossover\nFlamenco guitar meets Latin groove.\nCamarón · Paco de Lucía',
    signatureTraits: ['Continuous abanico/rasgueado', 'Cajón + palmas interlock', 'Rumba bass movement', 'Andalusian cadence', 'Instrumental turnarounds'],
    era: 'Traditional / modern rumba', region: 'Spain / Catalan and Gitano traditions', confidence: 'high',
    form: {
      sectionVocab: ['intro','verse','chorus','instrumental','breakdown','coda'],
      templates: [{ w: 1, value: [
        { key:'intro', label:'Guitar Intro / Rasgueado', kind:'intro', bars:8, intensity:'low' },
        { key:'verse-1', label:'Copla / Verse 1', kind:'verse', bars:16, intensity:'medium' },
        { key:'coro-1', label:'Coro / Hook 1', kind:'chorus', bars:12, intensity:'high' },
        { key:'verse-2', label:'Copla / Verse 2', kind:'verse', bars:16, intensity:'medium' },
        { key:'instrumental', label:'Guitar / Flute Turnaround', kind:'solo', bars:12, intensity:'peak' },
        { key:'breakdown', label:'Palmas + Cajón Break', kind:'breakdown', bars:8, intensity:'low' },
        { key:'coro-final', label:'Final Coro / Jaleo', kind:'chorus', bars:16, intensity:'peak' },
        { key:'coda', label:'Rasgueado Coda', kind:'coda', bars:4, intensity:'low' },
      ]}],
      preferredMeters:['4/4'],
    },
    harmony: {
      model:'functional', modePolicy:'phrygian',
      progressionTemplates:[
        { w:1, value:['Am','G','F','E7'] },
        { w:.8, value:['Am','Dm','G','C','F','E7','Am','E7'] },
        { w:.6, value:['A','G','F','E7'] },
      ],
      sectionProgressions:{
        intro:['Am','G','F','E7'], verse:['Am','G','F','E7','Am','G','F','E7'],
        chorus:['C','F','E7','Am','C','F','E7','Am'], solo:['Am','G','F','E7'],
        breakdown:['Am','Am','E7','E7'], coda:['E7','E7','Am','Am']
      },
      chordVocabulary:['Am','A','C','Dm','F','G','E7','A7'], harmonicRhythm:'1-bar',
      voicingStyle:'open-flamenco-guitar', bassMotion:'syncopated', tuningSystem:'12-tet',
    },
    rhythm:{ meter:'4/4', tempoRange:[100,135], defaultBpm:120, feel:'continuous-rasgueado', swingPercentage:52, anticipationOffsetSteps:0, microtimingFeel:'straight', humanizeJitterMs:7, signatureCell:'Abanico/rasgueado with cajón slap and palmas counter-rhythm' },
    melody:{ scaleMode:'phrygian', phraseLengthsBars:[4,8], contourArchetypes:['flamenco-arch','descending-cadence','call-and-response'], ornamentVocabulary:['slide','grace-note','mordent','vibrato','picado'], chordToneTargeting:true, callAndResponse:true },
    arrangement:{
      ensemble:[
        {role:'harmony',instrumentIds:['guitar'],priority:10},{role:'bass',instrumentIds:['bass','upright-bass'],priority:9},
        {role:'percussion',instrumentIds:['cajon'],priority:9},{role:'percussion',instrumentIds:['palmas'],priority:8},
        {role:'melody',instrumentIds:['voice','flute'],priority:7},{role:'melody',instrumentIds:['flute','guitar'],priority:6},
        {role:'percussion',instrumentIds:['castanets'],priority:4}
      ],
      densityCurve:{intro:'sparse','verse-1':'normal','coro-1':'busy','verse-2':'normal',instrumental:'busy',breakdown:'sparse','coro-final':'busy',coda:'sparse'},
      solos:['guitar','flute']
    },
    sound:{ instrumentPalette:[
      {value:'guitar',w:1},{value:'cajon',w:.95},{value:'palmas',w:.85},{value:'bass',w:.8},{value:'voice',w:.75},{value:'flute',w:.55},{value:'castanets',w:.35}
    ], articulations:{guitar:'rasgueado, abanico, golpe, muted-chuck',cajon:'grave/agudo/slap',palmas:'sordas/claras'}, masterProfile:{roomId:'studio',pocket:.55,lift:.65} },
    patterns:{require:['flam-abanico-strum','flamenco-cajon-rumba'],avoid:[]},
    gestures:{abanico:{id:'abanico',name:'Abanico fan strum',probability:.95},rumba_fill:{id:'rumba_fill',name:'Rumba turnaround',probability:.75},jaleo:{id:'jaleo',name:'Jaleo / final accents',probability:.7}},
    rules:{require:[{tag:'flamenco'},{tag:'rumba'}],forbid:[]}
  },
];

/**
 * Automatically migrate and construct a SongStyle from an existing GenreWorld tradition
 * ensuring zero data loss and exact preservation of all cultural metadata.
 */
function normalizeInstrumentId(inst: string): string {
  const map: Record<string, string> = {
    keys: 'piano',
    keyboard: 'piano',
    brass: 'horn-section',
    percussion: 'drums',
    sax: 'tenor-sax',
    strings: 'strings',
    voice: 'voice',
    vocals: 'voice',
    drums: 'drums',
    bass: 'bass',
    guitar: 'guitar',
    piano: 'piano',
    synth: 'synth',
    bandoneon: 'bandoneon',
    accordion: 'accordion',
    flute: 'flute',
    trumpet: 'trumpet',
    violin: 'violin',
    'upright-bass': 'upright-bass',
    'cello': 'cello',
    'cajon': 'cajon',
    'cavaquinho': 'cavaquinho',
    pandeiro: 'pandeiro',
    surdo: 'surdo',
    tamborim: 'tamborim',
    congas: 'congas',
    timbales: 'timbales',
    guiro: 'guiro',
    maracas: 'maracas',
    cowbell: 'cowbell',
    'celtic-harp': 'celtic-harp',
    harp: 'harp',
    shakuhachi: 'shakuhachi',
    koto: 'koto',
    shamisen: 'shamisen',
    guqin: 'guqin',
    pipa: 'pipa',
    'erhu': 'erhu',
    'jinghu': 'jinghu',
    'shō': 'sho',
    'bagpipes': 'bagpipes',
    'uilleann-pipes': 'uilleann-pipes',
    fiddle: 'fiddle',
    'tin-whistle': 'tin-whistle',
    'low-whistle': 'low-whistle',
    concertina: 'concertina',
    mandolin: 'mandolin',
    banjo: 'banjo',
    charango: 'charango',
    tres: 'tres',
    requinto: 'requinto',
    'steel-guitar': 'steel-guitar',
  };
  return map[inst] ?? inst;
}

function roleForInstrument(inst: string): string {
  const id = normalizeInstrumentId(inst);
  if (['drums', 'drums', 'congas', 'timbales', 'bongos', 'guiro', 'maracas', 'cowbell', 'pandeiro', 'surdo', 'tamborim', 'cajon'].includes(id)) return 'drums';
  if (['bass', 'upright-bass', 'acoustic-bass', 'bass', 'fretless-bass', 'slap-bass', 'pick-bass', 'sub-bass'].includes(id)) return 'bass';
  if (['piano', 'organ', 'rhodes', 'piano', 'guitar', 'electric-guitar', 'jazz-guitar', 'muted-guitar', 'guitar', 'cavaquinho'].includes(id)) return 'harmony';
  if (['bandoneon', 'accordion', 'violin', 'fiddle', 'flute', 'trumpet', 'tenor-sax', 'alto-sax', 'soprano-sax', 'bari-sax', 'horn-section', 'shakuhachi', 'koto', 'shamisen', 'guqin', 'pipa', 'erhu', 'jinghu', 'sho', 'bagpipes', 'uilleann-pipes', 'tin-whistle', 'low-whistle', 'mandolin', 'banjo', 'charango', 'tres', 'requinto'].includes(id)) return 'melody';
  if (id === 'voice') return 'voice';
  if (['synth', 'polysynth', 'synth-strings', 'synth-brass'].includes(id)) return 'texture';
  return 'melody';
}

function inferHarmonyModel(worldId: string, tradition: any, world: any): HarmonyGrammar['model'] {
  if (world?.engineProfile?.harmonicModel === 'modal-center') return 'modal-drone';
  if (world?.engineProfile?.harmonicModel === 'heterophonic') return 'heterophonic';
  if (world?.engineProfile?.harmonicModel === 'drone-cluster') return 'fixed-cluster';

  const text = [
    worldId,
    tradition.name,
    tradition.description,
    ...(tradition.coreConcepts || []),
    ...(tradition.rhythmicGrammar || []),
  ].join(' ').toLowerCase();

  if (/heteroph|unison|gagaku|sizhu|silk.and.bamboo|xiqu|guqin|shamisen/.test(text)) return 'heterophonic';
  if (/drone|open fifth|modal center|modal-cent(er|re)/.test(text)) return 'modal-drone';
  if (/cluster|sho\b|shō\b/.test(text)) return 'fixed-cluster';
  return 'functional';
}

function inferModePolicy(worldId: string, tradition: any, progression: string[]): string {
  const text = [
    worldId,
    tradition.name,
    tradition.description,
    ...(tradition.coreConcepts || []),
    ...(tradition.keySubstyles || []),
  ].join(' ').toLowerCase();

  if (/blues/.test(text)) return 'blues';
  if (/pentatonic|gagaku|guqin|shamisen|min'yō|koto|pipa|erhu|chinese|japanese|and(e|é)an|huapango|son jarocho/.test(text)) return 'pentatonic';
  if (/dorian|mixolydian|modal|drone|uilleann|reel|jig|hornpipe|celtic|folk/.test(text)) return 'modal';
  if (/phrygian|flamenco|soleá|bulería|tientos|tangos flamencos/.test(text)) return 'phrygian';
  if (/tango/.test(text)) return 'minor';
  if (/metal|hip.?hop|reggaeton|dembow|bachata|kizomba|zouk/.test(text)) return 'minor';

  const majorish = progression.filter(c => /maj|^[A-G](?:#|b)?$/.test(c)).length;
  const minorish = progression.filter(c => /m(?:aj|in)?/.test(c) && !/maj/.test(c)).length;
  if (majorish > minorish) return 'major';
  if (minorish > majorish) return 'minor';
  return 'modal';
}

function inferScaleMode(worldId: string, tradition: any, modePolicy: string): string {
  const text = [worldId, tradition.name, tradition.description, ...(tradition.coreConcepts || [])].join(' ').toLowerCase();
  if (modePolicy === 'blues') return 'blues';
  if (/flamenco|soleá|bulería|tientos/.test(text)) return 'phrygian';
  if (/pentatonic|gagaku|guqin|shamisen|min'yō|koto|pipa|erhu|chinese|japanese/.test(text)) return 'pentatonic';
  if (/dorian/.test(text)) return 'dorian';
  if (/mixolydian/.test(text)) return 'mixolydian';
  if (/modal|drone|celtic|folk|trova|folclor/.test(text)) return 'modal';
  if (/tango/.test(text)) return 'harmonic-minor';
  if (modePolicy === 'minor') return 'natural-minor';
  return 'major';
}

function inferBassMotion(text: string): HarmonyGrammar['bassMotion'] {
  if (/tumbao|montuno|son|salsa|timba|reggaeton|dembow/.test(text)) return 'tumbao';
  if (/walking|jazz|swing|bebop/.test(text)) return 'walking';
  if (/drone|open fifth|gagaku|guqin|shamisen|koto/.test(text)) return 'drone';
  if (/arpegg|arp/.test(text)) return 'arpeggiated';
  if (/riff|chug|metal|rock/.test(text)) return 'riff';
  if (/syncop|anticipat|zouk|bachata|kizomba|funk/.test(text)) return 'syncopated';
  return 'root-fifth';
}

function classifyStyleKind(name: string, description: string): StyleKind {
  const text = `${name} ${description}`.toLowerCase();
  if (/school|lineage|style|tradition|regional|region/.test(text)) return 'regional';
  if (/fusion|crossover|urban|electro|electronic|amapiano|latin jazz|neo-soul/.test(text)) return 'fusion';
  if (/vals|milonga|rumba|danzón|cha-cha|bossa|samba|reel|jig|hornpipe|march|polka|air/.test(text)) return 'form';
  if (/modern|classic|golden age|era|contemporary|traditional/.test(text)) return 'era';
  return 'regional';
}

/**
 * Construct a SongStyle from a real GenreWorld tradition without inventing a
 * generic musical grammar. The tradition remains the source of truth for
 * meter, tempo, instruments, concepts, progressions and patterns.
 */

function styleFormForTradition(worldId: string, tradition: any, baseForm: any): FormGrammar['templates'] {
  const name = String(tradition.name || '').toLowerCase();
  const text = [name, ...(tradition.keySubstyles || []), ...(tradition.coreConcepts || [])].join(' ').toLowerCase();
  const T = (steps: FormStepTemplate[]) => [{ w: 1, value: steps }];

  // Flamenco forms are palo-specific architectures, not a generic verse/chorus loop.
  if (worldId === 'flamenco') {
    if (/rumba/.test(text)) return T([
      {key:'intro',label:'Rasgueado Intro',kind:'intro',bars:8,intensity:'low'},
      {key:'verse-1',label:'Copla 1',kind:'verse',bars:16,intensity:'medium'},
      {key:'coro-1',label:'Coro / Jaleo',kind:'chorus',bars:12,intensity:'high'},
      {key:'verse-2',label:'Copla 2',kind:'verse',bars:16,intensity:'medium'},
      {key:'instrumental',label:'Instrumental / Falseta',kind:'solo',bars:12,intensity:'peak'},
      {key:'breakdown',label:'Palmas + Cajón Break',kind:'breakdown',bars:8,intensity:'low'},
      {key:'coro-final',label:'Coro Final / Remate',kind:'chorus',bars:16,intensity:'peak'},
      {key:'coda',label:'Rasgueado Coda',kind:'coda',bars:4,intensity:'low'},
    ]);
    if (/buler[ií]a/.test(text)) return T([
      {key:'intro',label:'Compás / Llamada',kind:'intro',bars:4,intensity:'medium'},
      {key:'letra-1',label:'Letra 1',kind:'verse',bars:12,intensity:'high'},
      {key:'falseta',label:'Falseta',kind:'solo',bars:12,intensity:'peak'},
      {key:'letra-2',label:'Letra 2',kind:'verse',bars:12,intensity:'high'},
      {key:'jaleo',label:'Jaleo / Remates',kind:'chorus',bars:8,intensity:'peak'},
      {key:'cierre',label:'Cierre',kind:'coda',bars:4,intensity:'low'},
    ]);
    if (/tangos|tientos/.test(text)) return T([
      {key:'intro',label:'Entrada / Compás',kind:'intro',bars:4,intensity:'low'},
      {key:'letra-1',label:'Letra 1',kind:'verse',bars:16,intensity:'medium'},
      {key:'llamada',label:'Llamada',kind:'bridge',bars:4,intensity:'high'},
      {key:'letra-2',label:'Letra 2',kind:'verse',bars:16,intensity:'high'},
      {key:'falseta',label:'Falseta / Variación',kind:'solo',bars:12,intensity:'peak'},
      {key:'remate',label:'Remate',kind:'coda',bars:4,intensity:'low'},
    ]);
    if (/sole[áa]|canti[ñn]as|ca[ñn]a|polo/.test(text)) return T([
      {key:'intro',label:'Entrada / Falseta',kind:'intro',bars:8,intensity:'low'},
      {key:'letra-1',label:'Letra 1',kind:'verse',bars:12,intensity:'medium'},
      {key:'falseta-1',label:'Falseta / Variación',kind:'solo',bars:12,intensity:'high'},
      {key:'letra-2',label:'Letra 2',kind:'verse',bars:12,intensity:'high'},
      {key:'llamada',label:'Llamada',kind:'bridge',bars:4,intensity:'peak'},
      {key:'remate',label:'Remate / Cierre',kind:'coda',bars:4,intensity:'low'},
    ]);
  }

  // Preserve the world's authored form as the base, but give traditions with strong
  // instrumental/solo vocabulary a real development section instead of a flat loop.
  const base = baseForm?.steps?.map((x: any) => ({...x})) ?? [];
  if (!base.length) return [];
  const hasSolo = /solo|falseta|variation|variaci|instrumental|improvis/.test(text);
  const hasBreak = /break|corte|drop|bridge|mambo|montuno|call|response|coro/.test(text);
  if (hasSolo && !base.some((x:any) => x.kind === 'solo')) {
    const at = Math.max(1, base.length - 2);
    base.splice(at, 0, {key:'instrumental',label:'Instrumental Variation',kind:'solo',bars:8,intensity:'high'});
  }
  if (hasBreak && !base.some((x:any) => x.kind === 'breakdown' || x.kind === 'bridge')) {
    const at = Math.max(1, base.length - 1);
    base.splice(at, 0, {key:'break',label:'Break / Turnaround',kind:'breakdown',bars:4,intensity:'low'});
  }
  return [{w:1,value:base}];
}

function traditionToStyle(worldId: string, tradition: any, index: number): SongStyle {
  const world = GENRE_WORLDS_BY_ID[worldId];
  const formDef = GENRE_FORMS[worldId] || { steps: [] };
  const progressionFallback = PROGRESSIONS[worldId] || ['D', 'G', 'A', 'D'];
  const sectionProgressions = tradition.sectionProgressions || {};
  const progressionPool = Object.values(sectionProgressions).flat().filter(Boolean) as string[];
  const progression = progressionPool.length ? progressionPool : progressionFallback;
  const chordVocabulary = Array.from(new Set(progression));
  const modePolicy = inferModePolicy(worldId, tradition, chordVocabulary);
  const text = [
    worldId,
    tradition.name,
    tradition.description,
    ...(tradition.coreConcepts || []),
    ...(tradition.keySubstyles || []),
  ].join(' ').toLowerCase();
  const harmonyModel = inferHarmonyModel(worldId, tradition, world);
  const meter = tradition.preferredMeters?.[0] || '4/4';
  const tempoRange = tradition.tempoRange || [TEMPOS[worldId] - 20, TEMPOS[worldId] + 20];
  const defaultBpm = Math.round((tempoRange[0] + tempoRange[1]) / 2);
  const instruments = Array.from(new Set<string>((tradition.characteristicInstruments || []).map(normalizeInstrumentId)));
  const ensemble = instruments.map((inst: string, i: number) => ({
    role: roleForInstrument(inst),
    instrumentIds: [inst],
    priority: 10 - Math.min(i, 9),
  }));
  const patternIds = (world?.patterns || [])
    .filter((p: any) => p.traditionId === tradition.id)
    .map((p: any) => p.id);
  const kind = index === 0 ? 'canonical' : classifyStyleKind(tradition.name || '', tradition.description || '');

  return {
    id: tradition.id,
    name: tradition.name,
    aliases: Array.from(new Set<string>((tradition.keySubstyles || []).filter((x: string) => x !== tradition.name))).slice(0, 8),
    genres: [worldId],
    primaryGenre: worldId,
    kind,
    canonical: index === 0,
    summary: tradition.description || `${tradition.name} within ${world?.name || worldId}`,
    signatureTraits: Array.from(new Set([
      ...(tradition.signatureCell ? [tradition.signatureCell] : []),
      ...(tradition.coreConcepts || []),
      ...(tradition.rhythmicGrammar || []),
    ])).slice(0, 6),
    confidence: 'medium',
    authoringNotes: 'Derived directly from the genre-pack tradition metadata; this is a generalized style grammar, not a transcription of a specific recording or artist.',
    era: tradition.era || 'Traditional / contemporary',
    region: tradition.origin || world?.name || 'Global',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'bridge', 'solo', 'coda'],
      templates: styleFormForTradition(worldId, tradition, formDef),
      preferredMeters: tradition.preferredMeters || [meter],
    },
    harmony: {
      model: harmonyModel,
      modePolicy,
      progressionTemplates: [{ w: 1.0, value: progression }],
      sectionProgressions,
      chordVocabulary,
      harmonicRhythm: /static|drone|heteroph/.test(text) ? 'static' : undefined,
      voicingStyle: tradition.coreConcepts?.find((x: string) => /voic|chord|comp|montuno|guajeo|skank/i.test(x)),
      bassMotion: inferBassMotion(text),
      tuningSystem: tradition.tuningSystem || world?.tuningSystem || '12-tet',
    },
    rhythm: {
      meter,
      tempoRange,
      defaultBpm,
      feel: tradition.grooveMechanics?.microtimingFeel || world?.grooveMechanics?.microtimingFeel || 'straight',
      swingPercentage: tradition.grooveMechanics?.swingPercentage ?? world?.grooveMechanics?.swingPercentage ?? 50,
      anticipationOffsetSteps: tradition.grooveMechanics?.anticipationOffsetSteps ?? world?.grooveMechanics?.anticipationOffsetSteps ?? 0,
      microtimingFeel: tradition.grooveMechanics?.microtimingFeel || world?.grooveMechanics?.microtimingFeel || 'straight',
      humanizeJitterMs: tradition.grooveMechanics?.humanizeJitterMs ?? world?.grooveMechanics?.humanizeJitterMs ?? 8,
      signatureCell: tradition.signatureCell || world?.signatureCell,
      grooveMechanics: tradition.grooveMechanics || world?.grooveMechanics,
    },
    melody: {
      scaleMode: inferScaleMode(worldId, tradition, modePolicy),
      phraseLengthsBars: world?.engineProfile?.phraseLengthsBars || [4, 8],
      contourArchetypes: /call.?and.?response|response|answer/.test(text)
        ? ['call-and-response', 'arch', 'wave']
        : ['arch', 'wave', 'descending', 'ascending'],
      ornamentVocabulary: Array.from(new Set(
        (world?.concepts || []).filter((x: string) => /ornament|grace|slide|gliss|roll|cut|vibrato|rubato|fraseo/i.test(x))
      )).slice(0, 8),
      chordToneTargeting: harmonyModel === 'functional',
      heterophonic: harmonyModel === 'heterophonic',
      callAndResponse: /call.?and.?response|answer|reply|response|coro|dialog/i.test(text),
    },
    arrangement: {
      ensemble,
      densityCurve: Object.fromEntries((formDef.steps || []).map(s => [s.key, s.intensity === 'peak' ? 'busy' : s.intensity === 'high' ? 'busy' : s.intensity === 'low' ? 'sparse' : 'normal'])),
    },
    sound: {
      instrumentPalette: instruments.map((value: string) => ({ value, w: 1.0 })),
      masterProfile: { roomId: ROOM_BY_WORLD[worldId] || 'studio', pocket: 0.5, lift: 0.5 },
    },
    patterns: { require: patternIds, avoid: [] },
    gestures: {},
    rules: { require: [], forbid: [] },
    legacy: { rawTradition: tradition },
  };
}

// Populate STYLES_CATALOG with specialized styles first, then all migrated world traditions
const registeredIds = new Set<string>();

// 1. Add curated specialized styles
for (const style of SPECIALIZED_STYLES) {
  STYLES_CATALOG.push(style);
  registeredIds.add(style.id);
}

// 2. Add all migrated traditions across all 34 genre worlds
for (const world of GENRE_WORLDS) {
  if (Array.isArray(world.traditions) && world.traditions.length > 0) {
    world.traditions.forEach((trad, idx) => {
      if (!registeredIds.has(trad.id)) {
        const style = traditionToStyle(world.id, trad, idx);
        // If the genre doesn't have a canonical style yet, mark the first one as canonical
        const hasCanonical = STYLES_CATALOG.some(s => s.primaryGenre === world.id && s.canonical);
        if (hasCanonical) {
          style.canonical = false;
          if (style.kind === 'canonical') {
            style.kind = 'era';
          }
        } else if (idx === 0) {
          style.canonical = true;
          style.kind = 'canonical';
        }
        STYLES_CATALOG.push(style);
        registeredIds.add(style.id);
      }
    });
  } else {
    // Genres without traditions get a standard fallback style
    const standardId = `${world.id}-standard`;
    if (!registeredIds.has(standardId)) {
      const style = traditionToStyle(world.id, { id: standardId, name: `${world.name} Standard` }, 0);
      style.canonical = true;
      style.kind = 'canonical';
      STYLES_CATALOG.push(style);
      registeredIds.add(standardId);
    }
  }
}

export const ALL_STYLES = STYLES_CATALOG;

export const ALL_STYLES_BY_ID: Record<string, SongStyle> = Object.fromEntries(
  ALL_STYLES.map(s => [s.id, s])
);

export const STYLES_BY_GENRE: Record<string, SongStyle[]> = (() => {
  const map: Record<string, SongStyle[]> = {};
  for (const s of ALL_STYLES) {
    for (const g of s.genres) {
      if (!map[g]) map[g] = [];
      if (!map[g].some(existing => existing.id === s.id)) {
        map[g].push(s);
      }
    }
  }
  return map;
})();

export function getStyle(id: string): SongStyle | undefined {
  return ALL_STYLES_BY_ID[id];
}

export function getStylesForGenre(genreId: string): SongStyle[] {
  return STYLES_BY_GENRE[genreId] || [];
}

export function getCanonicalStyle(genreId: string): SongStyle {
  const list = getStylesForGenre(genreId);
  const canonical = list.find(s => s.canonical);
  if (canonical) return canonical;
  if (list.length > 0) return list[0];

  // Guaranteed fallback
  return ALL_STYLES[0];
}
