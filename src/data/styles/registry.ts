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
  // --- FLAMENCO: keep Rumba and Sevillanas as separate, first-class song styles ---
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
    "summary": "Deep cante-jondo Soleá: measured 12-beat compás, Phrygian gravity, falsetas, llamadas and decisive cierres.",
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
    "name": "Bulerías de Jerez",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Fast festive 12-beat Bulería built for jaleo, contratiempo, rapid llamadas and remates; ideal fin de fiesta.",
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
    "name": "Alegrías / Cantiñas",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Bright Cádiz 12-beat palo: major-key color, buoyant palmas, letras, silencio/falseta and a lift toward the final bulería.",
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
    "name": "Tangos Flamencos",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Binary flamenco dance palo with a breathing downbeat, weighted 2–3–4, rasgueado, palmas and compact remates.",
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
    "summary": "Slow, weighty binary flamenco with grave cante, dense guitar punctuation and a traditional path into faster tangos.",
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
    "summary": "Asymmetric, dramatic cante-jondo palo with 2+2+3+3+2 grouping, sparse support and high expressive tension.",
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
    "id": "flamenco-farruca-style",
    "name": "Farruca",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Grounded slow binary dance palo in minor, dry guitar punctuation and a controlled subida toward a fast ending.",
    "signatureTraits": [
      "Slow binary pulse",
      "Minor tonality",
      "Dry golpes",
      "Grounded dance phrasing",
      "Subida / acceleration"
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
        "chorus",
        "ending"
      ],
      "templates": [
        {
          "w": 1,
          "value": [
            {
              "key": "intro",
              "label": "Tran-tran / Intro",
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
              "key": "escobilla",
              "label": "Escobilla",
              "kind": "solo",
              "bars": 12,
              "intensity": "high"
            },
            {
              "key": "subida",
              "label": "Subida",
              "kind": "chorus",
              "bars": 8,
              "intensity": "peak"
            },
            {
              "key": "coda",
              "label": "Coda",
              "kind": "ending",
              "bars": 4,
              "intensity": "low"
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
      "modePolicy": "minor",
      "progressionTemplates": [
        {
          "w": 1,
          "value": [
            "Am",
            "E7",
            "Am",
            "Dm"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "Am",
            "G",
            "F",
            "E7",
            "Am",
            "E7",
            "Am",
            "Am"
          ]
        }
      ],
      "sectionProgressions": {
        "intro": [
          "Am",
          "E7",
          "Am",
          "E7"
        ],
        "verse": [
          "Am",
          "E7",
          "Am",
          "Dm"
        ],
        "solo": [
          "Dm",
          "Am",
          "E7",
          "Am"
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
        "E7",
        "Dm",
        "F",
        "G"
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
        90
      ],
      "defaultBpm": 68,
      "feel": "farruca-grounded",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "Slow 4/4 minor compás with dry punctuation and a controlled acceleration."
    },
    "melody": {
      "scaleMode": "minor",
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
            "cajon",
            "zapateado"
          ],
          "priority": 7
        }
      ],
      "densityCurve": {
        "intro": "sparse",
        "letra": "normal",
        "escobilla": "normal",
        "subida": "busy",
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
          "value": "cajon",
          "w": 0.65
        },
        {
          "value": "zapateado",
          "w": 0.55
        },
        {
          "value": "voice",
          "w": 0.7
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
        "flam-farruca-guitar"
      ],
      "avoid": []
    },
    "gestures": {
      "subida": {
        "id": "subida",
        "name": "Farruca Subida",
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
    "id": "flamenco-guajira-style",
    "name": "Guajira",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Flamenco ida-y-vuelta palo with Cuban-inflected 12-beat lilt, lighter major-key harmony and elegant guitar phrasing.",
    "signatureTraits": [
      "Ida-y-vuelta",
      "12-beat lilt",
      "Major/modal brightness",
      "Cuban influence",
      "Lyrical guitar"
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
              "label": "Salida",
              "kind": "intro",
              "bars": 8,
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
              "label": "Remate",
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
            "G7",
            "C",
            "F"
          ]
        },
        {
          "w": 0.7,
          "value": [
            "Am",
            "Dm",
            "G7",
            "C",
            "F",
            "G7",
            "C",
            "C"
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
        "chorus": [
          "Am",
          "Dm",
          "G7",
          "C"
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
        "C",
        "F",
        "G7",
        "Am",
        "Dm",
        "E7"
      ],
      "harmonicRhythm": "1-bar",
      "voicingStyle": "open-flamenco-guitar",
      "bassMotion": "drone",
      "tuningSystem": "12-tet"
    },
    "rhythm": {
      "meter": "12/8",
      "tempoRange": [
        105,
        145
      ],
      "defaultBpm": 125,
      "feel": "guajira-ida-y-vuelta",
      "swingPercentage": 50,
      "anticipationOffsetSteps": 0,
      "microtimingFeel": "straight",
      "humanizeJitterMs": 7,
      "signatureCell": "Light 12-beat ida-y-vuelta compás with songful Cuban-inflected motion."
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
          "priority": 6
        }
      ],
      "densityCurve": {
        "intro": "sparse",
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
          "w": 0.85
        },
        {
          "value": "palmas",
          "w": 0.5
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
        "flam-guajira-12"
      ],
      "avoid": []
    },
    "gestures": {
      "remate": {
        "id": "remate",
        "name": "Guajira Remate",
        "probability": 0.7
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
    "name": "Fandangos de Huelva",
    "aliases": [],
    "genres": [
      "flamenco"
    ],
    "primaryGenre": "flamenco",
    "kind": "form",
    "canonical": false,
    "summary": "Ternary flamenco/folk bridge built from four 3-beat phrases, with modal opening and bright major/minor lyric turns.",
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
    name: 'Rumba Flamenca',
    aliases: ['Rumba Gitana', 'Rumba Catalana'],
    genres: ['flamenco'], primaryGenre: 'flamenco', kind: 'canonical', canonical: false,
    summary: 'Dance-forward flamenco rumba with continuous rasgueado/abanico guitar, cajón and palmas interlock, bass propulsion, vocal refrains, and bright instrumental turnarounds.',
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
    rules:{require:[{tag:'flamenco'},{tag:'rumba'}],forbid:[{tag:'sevillanas'}]}
  },
  {
    id: 'flamenco-sevillanas',
    name: 'Sevillanas',
    aliases: ['Sevillanas en Cuatro Coplas'],
    genres:['flamenco'], primaryGenre:'flamenco', kind:'canonical', canonical:false,
    summary:'Traditional Sevillanas dance form: four distinct coplas, bright 3/4 pulse, guitar rasgueado, palmas, castanets, voice, and strongly cadential phrase endings.',
    signatureTraits:['Four-copla architecture','3/4 dance pulse','Guitar rasgueado','Palmas + castanets','Strong copla cadences'],
    era:'Traditional / Andalusian dance repertory', region:'Seville and western Andalusia', confidence:'high',
    form:{ sectionVocab:['intro','copla','transition','breakdown','coda'], templates:[{w:1,value:[
      {key:'intro',label:'Introducción',kind:'intro',bars:4,intensity:'low'},
      {key:'copla-1',label:'Primera Copla',kind:'verse',bars:12,intensity:'medium'},
      {key:'copla-2',label:'Segunda Copla',kind:'verse',bars:12,intensity:'high'},
      {key:'copla-3',label:'Tercera Copla',kind:'verse',bars:12,intensity:'high'},
      {key:'copla-4',label:'Cuarta Copla / Final',kind:'chorus',bars:12,intensity:'peak'},
      {key:'coda',label:'Remate Final',kind:'coda',bars:4,intensity:'low'}
    ]}], preferredMeters:['3/4','6/8'] },
    harmony:{model:'functional',modePolicy:'major',progressionTemplates:[
      {w:1,value:['A','D','E7','A']},{w:.8,value:['A','E7','A','D','A','E7','A','A']},{w:.6,value:['Dm','G','C','A7','Dm','E7','A','A']}
    ],sectionProgressions:{intro:['A','E7','A','A'],verse:['A','D','E7','A'],chorus:['D','A','E7','A'],coda:['E7','E7','A','A']},chordVocabulary:['A','D','E7','A7','Bm','C#m','F#m','G'],harmonicRhythm:'1-bar',voicingStyle:'open-guitar',bassMotion:'root-fifth',tuningSystem:'12-tet'},
    rhythm:{meter:'3/4',tempoRange:[100,125],defaultBpm:116,feel:'sevillanas-waltz',swingPercentage:50,anticipationOffsetSteps:0,microtimingFeel:'straight',humanizeJitterMs:6,signatureCell:'3/4 sevillanas pulse with rasgueado, palmas and castanet punctuation'},
    melody:{scaleMode:'major',phraseLengthsBars:[4,6,12],contourArchetypes:['dance-arch','call-and-response','cadential-turn'],ornamentVocabulary:['grace-note','slide','vibrato'],chordToneTargeting:true,callAndResponse:true},
    arrangement:{ensemble:[
      {role:'harmony',instrumentIds:['guitar'],priority:10},{role:'percussion',instrumentIds:['palmas'],priority:9},{role:'percussion',instrumentIds:['castanets'],priority:8},
      {role:'bass',instrumentIds:['bass','upright-bass'],priority:6},{role:'melody',instrumentIds:['voice'],priority:7},{role:'percussion',instrumentIds:['cajon'],priority:5}
    ],densityCurve:{intro:'sparse','copla-1':'normal','copla-2':'normal','copla-3':'busy','copla-4':'busy',coda:'sparse'},solos:['guitar']},
    sound:{instrumentPalette:[{value:'guitar',w:1},{value:'palmas',w:.95},{value:'castanets',w:.8},{value:'voice',w:.8},{value:'cajon',w:.55},{value:'bass',w:.45}],articulations:{guitar:'rasgueado, golpe, muted-chuck',castanets:'clean-dry'},masterProfile:{roomId:'studio',pocket:.52,lift:.58}},
    patterns:{require:['flam-abanico-strum'],avoid:['flamenco-cajon-rumba']},
    gestures:{sevillanas_remate:{id:'sevillanas_remate',name:'Copla remate',probability:.95},castanet_accent:{id:'castanet_accent',name:'Castanet accent',probability:.8},palmas_clara:{id:'palmas_clara',name:'Palmas claras',probability:.9}},
    rules:{require:[{tag:'flamenco'}],forbid:[{tag:'rumba'}]}
  },

  // --- TANGO ---
  {
    id: 'tango-clasico',
    name: 'Tango Clásico',
    aliases: ['Golden Age Tango', 'Tango de Pista'],
    genres: ['tango'],
    primaryGenre: 'tango',
    kind: 'canonical',
    canonical: true,
    summary: 'Classical Golden Age salon tango built on solid marcato in 4, dramatic bandoneón fraseo, arrastre bass pickups, and staccato piano syncopation.',
    signatureTraits: ['Marcato in 4 rhythm', 'Bandoneón fraseo & rubato', 'Arrastre bass pickup', 'Staccato piano syncopation'],
    era: '1935–1955',
    region: 'Buenos Aires, Argentina',
    confidence: 'high',
    authoringNotes: 'Canonical archetype of D’Arienzo, Troilo, Di Sarli, and Fresedo.',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'solo', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Marcato)', kind: 'intro', bars: 4, intensity: 'low' },
            { key: 'tema-a', label: 'Tema A (Melodia)', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'tema-b', label: 'Tema B (Fraseo)', kind: 'chorus', bars: 8, intensity: 'high' },
            { key: 'variacion', label: 'Variación (Bandoneón)', kind: 'solo', bars: 8, intensity: 'peak' },
            { key: 'coda', label: 'Chan-Chan (Final)', kind: 'coda', bars: 4, intensity: 'high' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [
        { w: 1.0, value: ['Am', 'E7', 'Am', 'Dm', 'Am', 'E7', 'Am', 'E7'] },
        { w: 0.7, value: ['Dm', 'G7', 'Cmaj7', 'Fmaj7', 'Bm7b5', 'E7', 'Am', 'Am'] },
      ],
      sectionProgressions: {
        intro: ['Am', 'E7', 'Am', 'E7'],
        verse: ['Am', 'E7', 'Am', 'Dm', 'Am', 'E7', 'Am', 'Am'],
        chorus: ['C', 'G7', 'C', 'G7', 'C', 'E7', 'Am', 'Am'],
        solo: ['Dm', 'Am', 'E7', 'Am', 'Dm', 'Am', 'E7', 'Am'],
        coda: ['E7', 'E7', 'Am', 'Am'],
      },
      chordVocabulary: ['Am', 'Dm', 'E7', 'A7', 'C', 'G7', 'F', 'Bm7b5', 'B7'],
      voicingStyle: 'tango-closed-chords',
      bassMotion: 'root-fifth',
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [115, 132],
      defaultBpm: 124,
      feel: 'marcato-pushed',
      swingPercentage: 50,
      anticipationOffsetSteps: -1,
      microtimingFeel: 'pushed',
      humanizeJitterMs: 9,
      signatureCell: 'Marcato in 4 with heavy beat 1 and crisp beat 4 syncopation',
      grooveMechanics: {
        microtimingFeel: 'pushed',
        swingPercentage: 50,
        anticipationOffsetSteps: -1,
        humanizeJitterMs: 9,
      },
    },
    melody: {
      scaleMode: 'harmonic-minor',
      contourArchetypes: ['arch', 'wave', 'descending-sigh'],
      phraseLengthsBars: [4, 8],
      ornamentVocabulary: ['mordent', 'slide', 'arrastre', 'trill'],
      chordToneTargeting: true,
      callAndResponse: true,
    },
    arrangement: {
      ensemble: [
        { role: 'bandoneon', instrumentIds: ['bandoneon'], priority: 10 },
        { role: 'piano', instrumentIds: ['piano'], priority: 9 },
        { role: 'violin', instrumentIds: ['violin', 'strings'], priority: 8 },
        { role: 'bass', instrumentIds: ['upright-bass', 'bass'], priority: 7 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'bandoneon', w: 1.0 },
        { value: 'piano', w: 0.95 },
        { value: 'violin', w: 0.85 },
        { value: 'upright-bass', w: 0.8 },
      ],
      masterProfile: { roomId: 'hall', pocket: 0.5, lift: 0.55 },
    },
    gestures: {
      arrastre: { id: 'arrastre', name: 'Arrastre Pickup', probability: 0.8, description: 'Swept bass slide anticipating the downbeat' },
      tango_corte_final: { id: 'tango_corte_final', name: 'Corte Final', probability: 0.8, description: 'Short, sharply articulated cadential stop characteristic of tango arranging' },
    },
    rules: { require: [], forbid: [{ tag: 'trap_drums' }, { tag: 'slap_bass' }] },
  },
  {
    id: 'tango-vals',
    name: 'Tango Vals Criollo',
    aliases: ['Vals Porteño', 'Vals'],
    genres: ['tango'],
    primaryGenre: 'tango',
    kind: 'form',
    summary: 'Lyrical 3/4 Argentine vals criollo with flowing bandoneón arpeggios, romantic melodic swells, and syncopated waltz bass.',
    signatureTraits: ['3/4 meter', 'Flowing arpeggiated bandoneón', 'Romantic lyrical phrasing', 'Bouncing waltz bass'],
    era: '1940s–Present',
    region: 'Buenos Aires, Argentina',
    confidence: 'high',
    extends: 'tango-clasico',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'bridge', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Vals)', kind: 'intro', bars: 4, intensity: 'low' },
            { key: 'tema-a', label: 'Tema A', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'tema-b', label: 'Tema B (Vals Swell)', kind: 'chorus', bars: 8, intensity: 'high' },
            { key: 'retorno', label: 'Retorno', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'coda', label: 'Coda Vals', kind: 'coda', bars: 4, intensity: 'low' },
          ],
        },
      ],
      preferredMeters: ['3/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [{ w: 1.0, value: ['Am', 'Dm', 'E7', 'Am', 'F', 'Dm', 'E7', 'Am'] }],
      chordVocabulary: ['Am', 'Dm', 'E7', 'C', 'G7', 'F', 'B7'],
    },
    rhythm: {
      meter: '3/4',
      tempoRange: [160, 210],
      defaultBpm: 180,
      feel: 'flowing-waltz',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'rubato',
      humanizeJitterMs: 11,
      signatureCell: 'Boom-chick-chick waltz pulse with rubato on the downbeat',
    },
    melody: {
      scaleMode: 'harmonic-minor',
      contourArchetypes: ['wave', 'arch'],
      phraseLengthsBars: [4, 8],
    },
    arrangement: {
      ensemble: [
        { role: 'bandoneon', instrumentIds: ['bandoneon'], priority: 10 },
        { role: 'piano', instrumentIds: ['piano'], priority: 9 },
        { role: 'violin', instrumentIds: ['violin'], priority: 8 },
        { role: 'bass', instrumentIds: ['upright-bass'], priority: 7 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'bandoneon', w: 1.0 },
        { value: 'piano', w: 0.9 },
        { value: 'violin', w: 0.85 },
        { value: 'upright-bass', w: 0.8 },
      ],
      masterProfile: { roomId: 'hall', pocket: 0.45, lift: 0.6 },
    },
    gestures: {
      waltz_rubato: { id: 'waltz_rubato', name: 'Lyrical Rubato Stretch', probability: 0.75 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'tango-milonga',
    name: 'Milonga (Campera & Ciudadana)',
    aliases: ['Milonga'],
    genres: ['tango'],
    primaryGenre: 'tango',
    kind: 'form',
    summary: 'Lively, fast 2/4 milonga featuring the iconic syncopated habanera/traspié rhythmic cell, sharp staccato accents, and punchy guitar/piano comping.',
    signatureTraits: ['Habanera / traspié rhythm', 'Fast 2/4 tempo', 'Punchy staccato bass', 'Playful counterlines'],
    era: '1890s–Present',
    region: 'Rio de la Plata, Argentina/Uruguay',
    confidence: 'high',
    extends: 'tango-clasico',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'solo', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Traspié)', kind: 'intro', bars: 4, intensity: 'medium' },
            { key: 'tema-a', label: 'Tema A (Milonga)', kind: 'verse', bars: 8, intensity: 'high' },
            { key: 'tema-b', label: 'Tema B (Contrapunto)', kind: 'chorus', bars: 8, intensity: 'high' },
            { key: 'variacion', label: 'Variación', kind: 'solo', bars: 8, intensity: 'peak' },
            { key: 'coda', label: 'Final', kind: 'coda', bars: 4, intensity: 'high' },
          ],
        },
      ],
      preferredMeters: ['2/4', '4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [{ w: 1.0, value: ['Am', 'E7', 'Am', 'E7', 'Dm', 'Am', 'E7', 'Am'] }],
      chordVocabulary: ['Am', 'E7', 'Dm', 'A7', 'C', 'G7'],
    },
    rhythm: {
      meter: '2/4',
      tempoRange: [90, 115],
      defaultBpm: 102,
      feel: 'syncopated-traspie',
      swingPercentage: 50,
      anticipationOffsetSteps: -1,
      microtimingFeel: 'pushed',
      humanizeJitterMs: 8,
      signatureCell: 'Dotted-eighth sixteenth eighth eighth (3+3+2 habanera traspié)',
    },
    melody: {
      scaleMode: 'dorian',
      phraseLengthsBars: [2, 4],
    },
    arrangement: {
      ensemble: [
        { role: 'bandoneon', instrumentIds: ['bandoneon'], priority: 10 },
        { role: 'guitar', instrumentIds: ['guitar', 'guitar'], priority: 9 },
        { role: 'piano', instrumentIds: ['piano'], priority: 8 },
        { role: 'bass', instrumentIds: ['upright-bass'], priority: 7 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'bandoneon', w: 1.0 },
        { value: 'guitar', w: 0.95 },
        { value: 'piano', w: 0.9 },
        { value: 'upright-bass', w: 0.85 },
      ],
      masterProfile: { roomId: 'room', pocket: 0.55, lift: 0.45 },
    },
    gestures: {
      traspie_accent: { id: 'traspie_accent', name: 'Traspié Double Step', probability: 0.85 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'tango-salgan',
    name: 'Salgán-School Modern Tango',
    aliases: ['Quinteto Real Style', 'Salgán'],
    genres: ['tango'],
    primaryGenre: 'tango',
    kind: 'school',
    summary: 'Horacio Salgán school emphasizing virtuosic piano comping, umpa-umpa syncopated bass, modern jazz-influenced reharmonizations, and playful polyrhythms.',
    signatureTraits: ['Umpa-umpa syncopated bass', 'Virtuosic piano comping', 'Extended 9th/11th chords', 'Polyrhythmic accents'],
    era: '1950s–1980s',
    region: 'Buenos Aires, Argentina',
    confidence: 'high',
    extends: 'tango-clasico',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'solo', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Salgán Syncopation)', kind: 'intro', bars: 4, intensity: 'medium' },
            { key: 'tema', label: 'Tema Principal', kind: 'verse', bars: 8, intensity: 'high' },
            { key: 'desarrollo', label: 'Desarrollo Polirítmico', kind: 'chorus', bars: 8, intensity: 'high' },
            { key: 'solo-piano', label: 'Solo de Piano Virtuoso', kind: 'solo', bars: 8, intensity: 'peak' },
            { key: 'coda', label: 'Coda con Remate', kind: 'coda', bars: 4, intensity: 'high' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [{ w: 1.0, value: ['Am9', 'Dm9', 'G13', 'Cmaj9', 'Fmaj7', 'Bm7b5', 'E7alt', 'Am6'] }],
      chordVocabulary: ['Am9', 'Dm9', 'G13', 'Cmaj9', 'Fmaj7', 'Bm7b5', 'E7alt', 'Am6', 'Bbmaj7'],
      voicingStyle: 'jazz-tango-extended',
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [120, 138],
      defaultBpm: 128,
      feel: 'umpa-umpa-syncopated',
      swingPercentage: 50,
      anticipationOffsetSteps: -1,
      microtimingFeel: 'pushed',
      humanizeJitterMs: 8,
      signatureCell: 'Umpa-umpa delayed syncopation with sharp piano accents',
    },
    melody: {
      scaleMode: 'minor-pentatonic-jazz',
      phraseLengthsBars: [4, 8],
    },
    arrangement: {
      ensemble: [
        { role: 'piano', instrumentIds: ['piano'], priority: 10 },
        { role: 'bandoneon', instrumentIds: ['bandoneon'], priority: 9 },
        { role: 'electric-guitar', instrumentIds: ['electric-guitar'], priority: 8 },
        { role: 'upright-bass', instrumentIds: ['upright-bass'], priority: 7 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'piano', w: 1.0 },
        { value: 'bandoneon', w: 0.95 },
        { value: 'electric-guitar', w: 0.85 },
        { value: 'upright-bass', w: 0.8 },
      ],
      masterProfile: { roomId: 'hall', pocket: 0.5, lift: 0.6 },
    },
    gestures: {
      salgan_umpa: { id: 'salgan_umpa', name: 'Umpa-Umpa Syncopated Kick', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'tango-pugliese',
    name: 'Pugliese-School Dramatic Tango',
    aliases: ['La Yumba Style', 'Pugliese'],
    genres: ['tango'],
    primaryGenre: 'tango',
    kind: 'school',
    summary: 'Osvaldo Pugliese school famous for its heavy "La Yumba" downbeat pulse, extreme dynamic swells (pianissimo to fortissimo), elastic rubato, and passionate violin solos.',
    signatureTraits: ['La Yumba heavy downbeat', 'Extreme dynamic swells', 'Dramatic rubato pauses', 'Passionate violin solos'],
    era: '1940s–1990s',
    region: 'Buenos Aires, Argentina',
    confidence: 'high',
    extends: 'tango-clasico',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'solo', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Yumba)', kind: 'intro', bars: 4, intensity: 'medium' },
            { key: 'misterio', label: 'Misterioso (Rubato)', kind: 'verse', bars: 8, intensity: 'low' },
            { key: 'explosion', label: 'Explosión (La Yumba)', kind: 'chorus', bars: 8, intensity: 'peak' },
            { key: 'fraseo-violin', label: 'Fraseo de Violín', kind: 'solo', bars: 8, intensity: 'high' },
            { key: 'coda', label: 'Gran Coda', kind: 'coda', bars: 4, intensity: 'peak' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [{ w: 1.0, value: ['Am', 'Am', 'E7', 'E7', 'F', 'F', 'E7', 'Am'] }],
      chordVocabulary: ['Am', 'E7', 'F', 'Dm', 'A7', 'Bm7b5', 'C'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [108, 126],
      defaultBpm: 118,
      feel: 'yumba-heavy',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'rubato',
      humanizeJitterMs: 12,
      signatureCell: 'YUM-BA heavy accented beats 1 and 3 with breathing space',
    },
    melody: {
      scaleMode: 'harmonic-minor',
      phraseLengthsBars: [4, 8],
    },
    arrangement: {
      ensemble: [
        { role: 'bandoneon', instrumentIds: ['bandoneon'], priority: 10 },
        { role: 'violin', instrumentIds: ['violin', 'strings'], priority: 9 },
        { role: 'piano', instrumentIds: ['piano'], priority: 8 },
        { role: 'upright-bass', instrumentIds: ['upright-bass'], priority: 7 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'bandoneon', w: 1.0 },
        { value: 'violin', w: 0.95 },
        { value: 'piano', w: 0.9 },
        { value: 'upright-bass', w: 0.85 },
      ],
      masterProfile: { roomId: 'hall', pocket: 0.45, lift: 0.8 },
    },
    gestures: {
      la_yumba: { id: 'la_yumba', name: 'La Yumba Deep Breath', probability: 0.95 },
      dynamic_swell: { id: 'dynamic_swell', name: 'Pugliese Dynamic Swell', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'tango-nuevo',
    name: 'Nuevo Tango (Piazzolla-School)',
    aliases: ['Nuevo Tango', 'Piazzolla Style'],
    genres: ['tango'],
    primaryGenre: 'tango',
    kind: 'era',
    summary: 'Astor Piazzolla’s revolutionary nuevo tango blending classical chamber forms, jazz dissonance, 3+3+2 additive rhythm, and aggressive bandoneón attacks.',
    signatureTraits: ['3+3+2 additive accents', 'Fugal baroque counterpoint', 'Extended dissonance & chromaticism', 'Aggressive slap/arrastre attacks'],
    era: '1960s–Present',
    region: 'Buenos Aires / International',
    confidence: 'high',
    extends: 'tango-clasico',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'solo', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (3+3+2 Drive)', kind: 'intro', bars: 4, intensity: 'high' },
            { key: 'fuga', label: 'Fuga Contrapuntística', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'melancolia', label: 'Melancolía Lírica', kind: 'chorus', bars: 8, intensity: 'high' },
            { key: 'impro-solo', label: 'Solo Libertango', kind: 'solo', bars: 8, intensity: 'peak' },
            { key: 'coda', label: 'Coda Creciente', kind: 'coda', bars: 4, intensity: 'peak' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [{ w: 1.0, value: ['Am', 'Fmaj7#11', 'Dm7', 'E7b9', 'Am/C', 'Bm7b5', 'E7#9', 'Am(add9)'] }],
      chordVocabulary: ['Am(add9)', 'Fmaj7#11', 'Dm7', 'E7b9', 'Am/C', 'Bm7b5', 'E7#9', 'Bbmaj7#11'],
      voicingStyle: 'contemporary-dissonant',
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [125, 148],
      defaultBpm: 136,
      feel: '3+3+2-additive',
      swingPercentage: 50,
      anticipationOffsetSteps: -1,
      microtimingFeel: 'pushed',
      humanizeJitterMs: 7,
      signatureCell: '3+3+2 syncopation (dotted-quarter dotted-quarter quarter)',
    },
    melody: {
      scaleMode: 'melodic-minor-modal',
      phraseLengthsBars: [4, 8],
      contourArchetypes: ['wave', 'jagged'],
    },
    arrangement: {
      ensemble: [
        { role: 'bandoneon', instrumentIds: ['bandoneon'], priority: 10 },
        { role: 'electric-guitar', instrumentIds: ['electric-guitar'], priority: 9 },
        { role: 'piano', instrumentIds: ['piano'], priority: 8 },
        { role: 'violin', instrumentIds: ['violin'], priority: 8 },
        { role: 'bass', instrumentIds: ['upright-bass', 'bass'], priority: 7 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'bandoneon', w: 1.0 },
        { value: 'electric-guitar', w: 0.9 },
        { value: 'piano', w: 0.9 },
        { value: 'violin', w: 0.85 },
        { value: 'upright-bass', w: 0.8 },
      ],
      masterProfile: { roomId: 'studio', pocket: 0.5, lift: 0.7 },
    },
    gestures: {
      piazzolla_332: { id: 'piazzolla_332', name: '3+3+2 Driving Accent', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'tango-electrotango',
    name: 'Electrotango',
    aliases: ['Gotan Style', 'Bajofondo Style', 'Electronic Tango'],
    genres: ['tango'],
    primaryGenre: 'tango',
    kind: 'fusion',
    summary: 'Modern electrotango fusing organic acoustic bandoneón and strings with programmed house / dembow electronic beats, 808 sub-bass, and trip-hop atmospheres.',
    signatureTraits: ['Electronic house/trip-hop beat', 'Acoustic bandoneón melody', 'Sub-bass foundation', 'Atmospheric filter sweeps'],
    era: '2000s–Present',
    region: 'Buenos Aires / Paris',
    confidence: 'high',
    extends: 'tango-clasico',
    influences: [
      { source: { genreId: 'electronic' }, weight: 0.6, aspects: ['rhythm', 'sound'] },
      { source: { genreId: 'hip-hop' }, weight: 0.4, aspects: ['rhythm'] },
    ],
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'breakdown', 'drop', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Synth & Bandoneón)', kind: 'intro', bars: 4, intensity: 'low' },
            { key: 'groove', label: 'Groove Drop (Dembow/House)', kind: 'verse', bars: 8, intensity: 'high' },
            { key: 'hook', label: 'Hook (Strings & Bandoneón)', kind: 'chorus', bars: 8, intensity: 'peak' },
            { key: 'breakdown', label: 'Atmospheric Breakdown', kind: 'breakdown', bars: 4, intensity: 'low' },
            { key: 'final-drop', label: 'Final Electro Drop', kind: 'drop', bars: 8, intensity: 'peak' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [110, 128],
      defaultBpm: 120,
      feel: 'electronic-downtempo',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'straight',
      humanizeJitterMs: 5,
    },
    arrangement: {
      ensemble: [
        { role: 'bandoneon', instrumentIds: ['bandoneon'], priority: 10 },
        { role: 'drums', instrumentIds: ['drums', 'drums'], priority: 9 },
        { role: 'bass', instrumentIds: ['sub-bass', 'bass'], priority: 9 },
        { role: 'strings', instrumentIds: ['strings', 'polysynth'], priority: 7 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'bandoneon', w: 1.0 },
        { value: 'drums', w: 0.95 },
        { value: 'bass', w: 0.9 },
        { value: 'strings', w: 0.8 },
      ],
      masterProfile: { roomId: 'club', pocket: 0.5, lift: 0.65 },
    },
    gestures: {
      filter_riser: { id: 'filter_riser', name: 'Filter Riser to Drop', probability: 0.8 },
    },
    rules: { require: [], forbid: [] },
  },

  // --- ZOUK ---
  {
    id: 'zouk-love',
    name: 'Zouk Love',
    aliases: ['Sensual Zouk'],
    genres: ['zouk'],
    primaryGenre: 'zouk',
    kind: 'canonical',
    canonical: true,
    summary: 'Smooth, sensual Antillean zouk love with flowing clean guitar arpeggios, lush keyboard pads, and a gentle syncopated kick-snare groove.',
    signatureTraits: ['Sensual tempo (80-92 BPM)', 'Syncopated zouk love beat', 'Lush keyboard pads', 'Clean guitar arpeggios'],
    era: '1985–Present',
    region: 'Guadeloupe / Martinique / Cape Verde',
    confidence: 'high',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'bridge', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Guitare)', kind: 'intro', bars: 4, intensity: 'low' },
            { key: 'verse1', label: 'Couplet A', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'chorus', label: 'Refrain (Zouk Love)', kind: 'chorus', bars: 8, intensity: 'high' },
            { key: 'verse2', label: 'Couplet B', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'coda', label: 'Outro Doux', kind: 'coda', bars: 4, intensity: 'low' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'major',
      progressionTemplates: [{ w: 1.0, value: ['Fmaj7', 'Dm7', 'Gm7', 'C7', 'Am7', 'Dm7', 'Gm7', 'C7'] }],
      chordVocabulary: ['Fmaj7', 'Dm7', 'Gm7', 'C7', 'Am7', 'Bbmaj7', 'Ebmaj7'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [80, 94],
      defaultBpm: 86,
      feel: 'sensual-syncopated',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'laid-back',
      humanizeJitterMs: 8,
      signatureCell: 'Boom ... ch-ch-boom chick sensual syncopation',
    },
    arrangement: {
      ensemble: [
        { role: 'guitar', instrumentIds: ['guitar', 'electric-guitar'], priority: 10 },
        { role: 'piano', instrumentIds: ['piano', 'piano'], priority: 9 },
        { role: 'bass', instrumentIds: ['bass', 'bass'], priority: 8 },
        { role: 'drums', instrumentIds: ['drums', 'drums'], priority: 8 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'guitar', w: 1.0 },
        { value: 'piano', w: 0.95 },
        { value: 'bass', w: 0.9 },
        { value: 'drums', w: 0.85 },
      ],
      masterProfile: { roomId: 'club', pocket: 0.5, lift: 0.5 },
    },
    gestures: {
      guitar_arpeggio: { id: 'guitar_arpeggio', name: 'Zouk Guitar Arpeggiation', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'zouk-urban',
    name: 'Urban Zouk / Kizomba Fusion',
    aliases: ['Urban Kiz', 'Modern Zouk Fusion'],
    genres: ['zouk', 'kizomba'],
    primaryGenre: 'zouk',
    kind: 'fusion',
    summary: 'Modern urban zouk influenced by contemporary R&B, hip-hop, and trap, driven by deep 808 sub-bass, atmospheric vocal plucks, and syncopated trap hi-hat rolls.',
    signatureTraits: ['808 sub-bass', 'Trap-style hi-hat rolls', 'Contemporary R&B chords', 'Atmospheric vocal chop pads'],
    era: '2010s–Present',
    region: 'Paris / Lisbon / International',
    confidence: 'high',
    extends: 'zouk-love',
    influences: [
      { source: { genreId: 'hip-hop' }, weight: 0.6, aspects: ['rhythm', 'sound'] },
      { source: { genreId: 'electronic' }, weight: 0.4, aspects: ['sound', 'arrangement'] },
    ],
    form: {
      sectionVocab: ['intro', 'verse', 'pre-chorus', 'chorus', 'breakdown', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Filtered Pluck)', kind: 'intro', bars: 4, intensity: 'low' },
            { key: 'verse', label: 'Urban Verse', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'build', label: 'Trap Buildup', kind: 'pre-chorus', bars: 4, intensity: 'high' },
            { key: 'chorus', label: '808 Sub Drop', kind: 'chorus', bars: 8, intensity: 'peak' },
            { key: 'outro', label: 'Atmospheric Outro', kind: 'coda', bars: 4, intensity: 'low' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [84, 96],
      defaultBpm: 88,
      feel: 'urban-trap-zouk',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'straight',
      humanizeJitterMs: 6,
    },
    sound: {
      instrumentPalette: [
        { value: 'bass', w: 1.0 },
        { value: 'drums', w: 0.95 },
        { value: 'synth', w: 0.9 },
        { value: 'piano', w: 0.8 },
      ],
      masterProfile: { roomId: 'club', pocket: 0.55, lift: 0.65 },
    },
    gestures: {
      sub_drop: { id: 'sub_drop', name: '808 Sub Bass Drop', probability: 0.85 },
      hihat_roll: { id: 'hihat_roll', name: 'Trap Hi-hat Triplets', probability: 0.8 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'zouk-beton',
    name: 'Zouk Béton / Carnaval',
    aliases: ['Kassav Style', 'Zouk Chiré'],
    genres: ['zouk'],
    primaryGenre: 'zouk',
    kind: 'era',
    summary: 'High-octane, carnival-ready fast zouk béton pioneered by Kassav’, driven by punchy horn section stabs, driving percussion, and syncopated slap/synth bass.',
    signatureTraits: ['Fast tempo (120-140 BPM)', 'Punchy horn section stabs', 'Driving carnival percussion', 'Call-and-response coro'],
    era: '1980s–1990s',
    region: 'Antilles (Guadeloupe / Martinique)',
    confidence: 'high',
    extends: 'zouk-love',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'solo', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Cuivres & Perc)', kind: 'intro', bars: 4, intensity: 'high' },
            { key: 'couplet', label: 'Couplet Béton', kind: 'verse', bars: 8, intensity: 'high' },
            { key: 'refrain', label: 'Refrain Explosif', kind: 'chorus', bars: 8, intensity: 'peak' },
            { key: 'solo-cuivres', label: 'Solo de Cuivres', kind: 'solo', bars: 8, intensity: 'peak' },
            { key: 'final', label: 'Final Carnaval', kind: 'coda', bars: 4, intensity: 'peak' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [120, 138],
      defaultBpm: 128,
      feel: 'carnaval-driving',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'pushed',
      humanizeJitterMs: 8,
    },
    sound: {
      instrumentPalette: [
        { value: 'horn-section', w: 1.0 },
        { value: 'drums', w: 0.95 },
        { value: 'bass', w: 0.9 },
        { value: 'guitar', w: 0.85 },
      ],
      masterProfile: { roomId: 'club', pocket: 0.5, lift: 0.7 },
    },
    gestures: {
      horn_stab: { id: 'horn_stab', name: 'Zouk Horn Hit', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },

  // --- SALSA ---
  {
    id: 'salsa-dura',
    name: 'Salsa Dura',
    aliases: ['Hard Salsa', 'Classic Salsa'],
    genres: ['salsa'],
    primaryGenre: 'salsa',
    kind: 'canonical',
    canonical: true,
    summary: 'Hard-hitting New York / Puerto Rican salsa dura powered by driving woodblock/clave, heavy timbal breaks, fiery piano montunos, and aggressive brass sections.',
    signatureTraits: ['Son clave 2-3 / 3-2', 'Syncopated piano montuno', 'Punchy brass/trombone stabs', 'Heavy timbal cascara'],
    era: '1970s–Present',
    region: 'New York / Puerto Rico / Colombia',
    confidence: 'high',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'montuno', 'mambo', 'moña', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Metales)', kind: 'intro', bars: 4, intensity: 'medium' },
            { key: 'canto', label: 'Canto (Tema)', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'coro-guia', label: 'Montuno (Coro-Pregón)', kind: 'montuno', bars: 8, intensity: 'high' },
            { key: 'mambo', label: 'Mambo (Sección de Vientos)', kind: 'mambo', bars: 8, intensity: 'peak' },
            { key: 'coda', label: 'Moña y Coda', kind: 'coda', bars: 4, intensity: 'peak' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [
        { w: 1.0, value: ['Am', 'Dm', 'E7', 'Am', 'Dm', 'G7', 'C', 'E7'] },
        { w: 0.8, value: ['Dm', 'G7', 'Cmaj7', 'Fmaj7', 'Bm7b5', 'E7', 'Am', 'A7'] },
      ],
      sectionProgressions: {
        intro: ['Am', 'Dm', 'E7', 'Am'],
        verse: ['Am', 'Dm', 'G7', 'C', 'F', 'Bm7b5', 'E7', 'Am'],
        montuno: ['Dm', 'G7', 'C', 'Am', 'Dm', 'E7', 'Am', 'Am'],
        mambo: ['Dm', 'G7', 'C', 'A7', 'Dm', 'E7', 'Am', 'Am'],
        coda: ['E7', 'E7', 'Am', 'Am'],
      },
      chordVocabulary: ['Am', 'Dm', 'E7', 'G7', 'C', 'F', 'Bm7b5', 'A7'],
      voicingStyle: 'salsa-montuno-octaves',
      bassMotion: 'tumbao',
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [90, 110],
      defaultBpm: 98,
      feel: 'clave-tumbao',
      swingPercentage: 50,
      anticipationOffsetSteps: -1,
      microtimingFeel: 'pushed',
      humanizeJitterMs: 8,
      timelineClave: 'son-2-3',
      signatureCell: 'Piano montuno anticipating downbeat 1 and resolution on beat 4.5',
    },
    arrangement: {
      ensemble: [
        { role: 'piano', instrumentIds: ['piano'], priority: 10 },
        { role: 'bass', instrumentIds: ['bass', 'bass'], priority: 9 },
        { role: 'horn-section', instrumentIds: ['trumpet', 'trombone', 'horn-section'], priority: 9 },
        { role: 'drums', instrumentIds: ['congas', 'timbales', 'drums'], priority: 8 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'piano', w: 1.0 },
        { value: 'bass', w: 0.95 },
        { value: 'trumpet', w: 0.9 },
        { value: 'congas', w: 0.85 },
      ],
      masterProfile: { roomId: 'club', pocket: 0.5, lift: 0.6 },
    },
    gestures: {
      timbal_fill: { id: 'timbal_fill', name: 'Timbal Abanico Roll', probability: 0.85 },
      brass_punch: { id: 'brass_punch', name: 'Mambo Brass Punch', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'salsa-romantica',
    name: 'Salsa Romántica',
    aliases: ['Romantic Salsa', 'Salsa Balada'],
    genres: ['salsa'],
    primaryGenre: 'salsa',
    kind: 'era',
    summary: 'Polished, melodic 1980s/1990s salsa romántica featuring sweet pop-ballad chord voicings, synthesizer pads, smooth vocal melodies, and relaxed percussion.',
    signatureTraits: ['Smooth ballad chord sequences', 'Lush synthesizer string pads', 'Sweet vocal lead phrasing', 'Subtle percussion montuno'],
    era: '1980s–1990s',
    region: 'Puerto Rico / Miami / Latin America',
    confidence: 'high',
    extends: 'salsa-dura',
    influences: [
      { source: { genreId: 'folk' }, weight: 0.5, aspects: ['harmony', 'arrangement'] },
    ],
    harmony: {
      model: 'functional',
      modePolicy: 'major',
      progressionTemplates: [
        { w: 1.0, value: ['Cmaj7', 'Am7', 'Dm7', 'G7', 'Em7', 'Am7', 'Dm7', 'G7'] },
      ],
      chordVocabulary: ['Cmaj7', 'Am7', 'Dm7', 'G7', 'Em7', 'Fmaj7', 'Bbmaj7'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [84, 96],
      defaultBpm: 90,
      feel: 'romantic-relaxed',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'laid-back',
      humanizeJitterMs: 8,
    },
    sound: {
      instrumentPalette: [
        { value: 'piano', w: 1.0 },
        { value: 'piano', w: 0.9 },
        { value: 'bass', w: 0.9 },
        { value: 'congas', w: 0.8 },
      ],
      masterProfile: { roomId: 'studio', pocket: 0.5, lift: 0.45 },
    },
    gestures: {
      pad_swell: { id: 'pad_swell', name: 'Synth Pad Swell', probability: 0.8 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'salsa-chacha-danzon',
    name: 'Cha-cha-chá & Danzón',
    aliases: ['Cha-cha-cha', 'Charanga'],
    genres: ['salsa'],
    primaryGenre: 'salsa',
    kind: 'form',
    summary: 'Classic Cuban cha-cha-chá and refined danzón played at a relaxed medium tempo with charanga flute, scraping güiro, and crisp unhurried clave.',
    signatureTraits: ['Medium tempo (110-128 BPM)', 'Flute lead improvisation', 'Scraped güiro pattern', 'Steady timbal cowbell beat'],
    era: '1950s–Present',
    region: 'Cuba',
    confidence: 'high',
    extends: 'salsa-dura',
    rhythm: {
      meter: '4/4',
      tempoRange: [110, 128],
      defaultBpm: 118,
      feel: 'chacha-steady',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'straight',
      humanizeJitterMs: 7,
      signatureCell: 'One, two, cha-cha-cha (quarter quarter eighth-eighth quarter)',
    },
    arrangement: {
      ensemble: [
        { role: 'flute', instrumentIds: ['flute'], priority: 10 },
        { role: 'piano', instrumentIds: ['piano'], priority: 9 },
        { role: 'violin', instrumentIds: ['violin'], priority: 8 },
        { role: 'bass', instrumentIds: ['bass'], priority: 8 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'flute', w: 1.0 },
        { value: 'piano', w: 0.95 },
        { value: 'violin', w: 0.9 },
        { value: 'bass', w: 0.85 },
      ],
      masterProfile: { roomId: 'hall', pocket: 0.5, lift: 0.4 },
    },
    gestures: {
      chacha_stop: { id: 'chacha_stop', name: 'Cha-cha-cha Signature Stop', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'salsa-rumba',
    name: 'Afro-Cuban Rumba (Guaguancó & Columbia)',
    aliases: ['Rumba Cubana', 'Guaguancó'],
    genres: ['salsa'],
    primaryGenre: 'salsa',
    kind: 'form',
    summary: 'Deep Afro-Cuban folkloric root style featuring interlocking tres golpes / salidor congas, wooden catá clave, and responsive call-and-response coro.',
    signatureTraits: ['Three-conga interlock (quinto/salidor/tres-golpes)', 'Wooden rumba clave', 'Spiritual call-and-response', 'Vaccination accents'],
    era: '19th Century–Present',
    region: 'Havana / Matanzas, Cuba',
    confidence: 'high',
    extends: 'salsa-dura',
    rhythm: {
      meter: '4/4',
      tempoRange: [96, 120],
      defaultBpm: 108,
      feel: 'afrocuban-rumba',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'laid-back',
      humanizeJitterMs: 11,
      timelineClave: 'rumba-clave',
    },
    arrangement: {
      ensemble: [
        { role: 'drums', instrumentIds: ['congas', 'drums'], priority: 10 },
        { role: 'voice', instrumentIds: ['voice', 'voice'], priority: 9 },
      ],
    },
    gestures: {
      quinto_flourish: { id: 'quinto_flourish', name: 'Quinto Solo Flourish', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },

  // --- REGGAETON ---
  {
    id: 'reggaeton-classic',
    name: 'Dembow & Underground (Classic Era)',
    aliases: ['Classic Reggaeton', 'Playero Era', 'Old School Dembow'],
    genres: ['reggaeton-dembow'],
    primaryGenre: 'reggaeton-dembow',
    kind: 'canonical',
    canonical: true,
    summary: 'Classic 1990s/2000s Puerto Rican dembow-era reggaeton defined by the raw, repetitive boom-ch-boom-chick beat, dark synth brass, minor modal stabs, and stripped basslines.',
    signatureTraits: ['Raw dembow rhythm (boom-ch-boom-chick)', 'Dark synth horn stabs', 'Minor modal progressions', 'Stripped-down maratón energy'],
    era: '1995–2006',
    region: 'Puerto Rico / Panama',
    confidence: 'high',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'breakdown', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro Dembow', kind: 'intro', bars: 4, intensity: 'low' },
            { key: 'chanteo', label: 'Chanteo (Verse)', kind: 'verse', bars: 8, intensity: 'high' },
            { key: 'voice', label: 'Coro Pegajoso', kind: 'chorus', bars: 8, intensity: 'peak' },
            { key: 'mambo', label: 'Pique / Mambo Dembow', kind: 'breakdown', bars: 4, intensity: 'high' },
            { key: 'coda', label: 'Outro', kind: 'coda', bars: 4, intensity: 'medium' },
          ],
        },
      ],
      preferredMeters: ['4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [
        { w: 1.0, value: ['Am', 'F', 'G', 'Em'] },
        { w: 0.8, value: ['Am', 'G', 'F', 'E7'] },
      ],
      chordVocabulary: ['Am', 'F', 'G', 'Em', 'Dm', 'E7'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [90, 100],
      defaultBpm: 94,
      feel: 'dembow-punch',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'straight',
      humanizeJitterMs: 5,
      signatureCell: 'Kick on 1, 2, 3, 4 with syncopated snares on 1.75, 2.5, 3.75, 4.5',
    },
    arrangement: {
      ensemble: [
        { role: 'drums', instrumentIds: ['drums', 'drums'], priority: 10 },
        { role: 'bass', instrumentIds: ['bass', 'sub-bass'], priority: 9 },
        { role: 'synth', instrumentIds: ['synth', 'piano'], priority: 8 },
      ],
    },
    sound: {
      instrumentPalette: [
        { value: 'drums', w: 1.0 },
        { value: 'bass', w: 0.95 },
        { value: 'synth', w: 0.85 },
      ],
      masterProfile: { roomId: 'club', pocket: 0.5, lift: 0.6 },
    },
    gestures: {
      dembow_fill: { id: 'dembow_fill', name: 'Snare Maratón Roll', probability: 0.85 },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'reggaeton-modern',
    name: 'Modern Melodic Reggaeton',
    aliases: ['Pop Urbano', 'New Wave Reggaeton'],
    genres: ['reggaeton-dembow'],
    primaryGenre: 'reggaeton-dembow',
    kind: 'era',
    summary: 'Contemporary melodic reggaeton featuring polished vocal chop synths, deep 808 glide bass, major/minor 7th emotional chord loops, and wide airy production.',
    signatureTraits: ['Polished vocal chops & plucks', '808 glide bass', 'Major 7th emotional chords', 'Filtered intro builds'],
    era: '2016–Present',
    region: 'Medellín / Puerto Rico / Global',
    confidence: 'high',
    extends: 'reggaeton-classic',
    harmony: {
      model: 'functional',
      modePolicy: 'minor',
      progressionTemplates: [
        { w: 1.0, value: ['Fmaj7', 'G6', 'Am7', 'Em7'] },
        { w: 0.8, value: ['Dm7', 'G7', 'Cmaj7', 'Am7'] },
      ],
      chordVocabulary: ['Fmaj7', 'G6', 'Am7', 'Em7', 'Dm7', 'Cmaj7'],
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [82, 96],
      defaultBpm: 88,
      feel: 'smooth-dembow',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'laid-back',
      humanizeJitterMs: 6,
    },
    sound: {
      instrumentPalette: [
        { value: 'drums', w: 1.0 },
        { value: 'bass', w: 0.95 },
        { value: 'piano', w: 0.9 },
        { value: 'synth', w: 0.85 },
      ],
      masterProfile: { roomId: 'club', pocket: 0.55, lift: 0.65 },
    },
    gestures: {
      filter_sweep: { id: 'filter_sweep', name: 'Lowpass Filter Intro Rise', probability: 0.9 },
    },
    rules: { require: [], forbid: [] },
  },
  // --- MATH ROCK ---
  {
    id: 'math-rock-midwest',
    name: 'Midwest Math Rock & Tapping',
    aliases: ['Clean Tapping Math', 'Midwest Emo Math', 'Japanese Math Rock'],
    genres: ['math-rock'],
    primaryGenre: 'math-rock',
    kind: 'canonical',
    canonical: true,
    summary: 'Clean-toned, open-tuned guitars with intricate two-hand tapping in 7/8 (2+2+3), conversational bass counterpoint, and crisp ghost-snare dynamic drumming.',
    signatureTraits: ['Two-hand fretboard tapping', '7/8 additive meter (2+2+3)', 'Open alternate tunings (FACGCE)', 'Conversational bass counterline'],
    era: '1990s–Present',
    region: 'American Midwest / Japan',
    confidence: 'high',
    authoringNotes: 'Modeled after American Football, Toe, Tricot, and TTNG.',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'interlude', 'solo', 'ending'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Intro (Clean Tapping)', kind: 'intro', bars: 8, intensity: 'low' },
            { key: 'verse', label: 'Verse (Interlocking 7/8)', kind: 'verse', bars: 8, intensity: 'medium' },
            { key: 'chorus', label: 'Chorus Lift (Full Strum)', kind: 'chorus', bars: 8, intensity: 'high' },
            { key: 'breakdown', label: 'Unison Break', kind: 'interlude', bars: 4, intensity: 'medium' },
            { key: 'solo', label: 'Tapped Solo', kind: 'solo', bars: 8, intensity: 'peak' },
            { key: 'ending', label: 'Harmonic Ring-out', kind: 'ending', bars: 4, intensity: 'low' },
          ],
        },
      ],
      preferredMeters: ['7/8', '11/8', '4/4'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'major',
      progressionTemplates: [
        { w: 1.0, value: ['IVmaj7', 'V6', 'vi9', 'iii7'] },
        { w: 0.8, value: ['IVmaj7', 'Imaj7', 'ii9', 'Vadd9'] },
      ],
      sectionProgressions: {
        intro: ['IVmaj7', 'V6', 'vi9', 'iii7'],
        verse: ['IVmaj7', 'Imaj7', 'ii9', 'Vadd9'],
        chorus: ['vi9', 'IVmaj7', 'I', 'V'],
        solo: ['IVmaj7', 'V', 'vi', 'iii'],
        ending: ['IVmaj7', 'IVmaj7', 'Imaj7', 'Imaj7'],
      },
      chordVocabulary: ['IVmaj7', 'V6', 'vi9', 'iii7', 'Imaj7', 'ii9', 'Vadd9', 'I', 'V', 'vi', 'iii'],
      voicingStyle: 'open-string-extensions',
      bassMotion: 'counterpoint',
    },
    rhythm: {
      meter: '7/8',
      tempoRange: [110, 140],
      defaultBpm: 126,
      feel: 'odd-meter-crisp',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'straight',
      humanizeJitterMs: 5,
      signatureCell: 'Additive 7/8 cell [2+2+3] with clean tapped arpeggios',
      grooveMechanics: {
        microtimingFeel: 'straight',
        swingPercentage: 50,
        anticipationOffsetSteps: 0,
        humanizeJitterMs: 5,
      },
    },
    melody: {
      scaleMode: 'major',
      chordToneTargeting: true,
      phraseLengthsBars: [4, 8],
    },
    sound: {
      instrumentPalette: [
        { value: 'electric-guitar', w: 1.0 },
        { value: 'bass', w: 0.95 },
        { value: 'drums', w: 0.95 },
      ],
      masterProfile: { roomId: 'studio', pocket: 0.6, lift: 0.5 },
    },
    gestures: {
      tapped_harmonic: { id: 'tapped_harmonic', name: 'Fretboard Harmonic Ping', probability: 0.85, description: 'Bright chime on 12th fret overtone' },
      unison_stab: { id: 'unison_stab', name: 'Unison Band Punch', probability: 0.8, description: 'All instruments hit and cut on the syncopation' },
    },
    rules: { require: [], forbid: [] },
  },
  {
    id: 'math-rock-post-rock',
    name: 'Post-Rock Instrumental Build',
    aliases: ['Cinematic Post-Rock', 'Crescendo-Core'],
    genres: ['math-rock'],
    primaryGenre: 'math-rock',
    kind: 'canonical',
    summary: 'Cinematic dynamic arches transitioning from whisper-quiet ambient guitar delay swells to thunderous, heavy climactic crescendos.',
    signatureTraits: ['Extreme dynamic range (pp to fff)', 'Reverb and delay wall-of-sound', 'Slow rolling tom build', 'Ethereal tremolo picking'],
    era: '1990s–Present',
    region: 'US / UK / Iceland',
    confidence: 'high',
    authoringNotes: 'Modeled after Explosions in the Sky, Mogwai, and Sigur Rós.',
    form: {
      sectionVocab: ['intro', 'verse', 'chorus', 'coda'],
      templates: [
        {
          w: 1.0,
          value: [
            { key: 'intro', label: 'Whisper Intro (Swells)', kind: 'intro', bars: 8, intensity: 'low' },
            { key: 'verse', label: 'Slow Build (Rolling Toms)', kind: 'verse', bars: 16, intensity: 'medium' },
            { key: 'chorus', label: 'Climax Explosion', kind: 'chorus', bars: 16, intensity: 'peak' },
            { key: 'coda', label: 'Reverb Decay Coda', kind: 'coda', bars: 8, intensity: 'low' },
          ],
        },
      ],
      preferredMeters: ['4/4', '6/8'],
    },
    harmony: {
      model: 'functional',
      modePolicy: 'major',
      progressionTemplates: [
        { w: 1.0, value: ['I', 'V', 'vi', 'IV'] },
        { w: 0.8, value: ['I', 'iii', 'vi', 'IVmaj7'] },
      ],
      sectionProgressions: {
        intro: ['I', 'V', 'vi', 'IV'],
        verse: ['I', 'iii', 'vi', 'IVmaj7'],
        chorus: ['vi', 'IV', 'I', 'V'],
        coda: ['IVmaj7', 'IVmaj7', 'I', 'I'],
      },
      chordVocabulary: ['I', 'V', 'vi', 'IV', 'iii', 'IVmaj7'],
      voicingStyle: 'wide-reverb-spread',
      bassMotion: 'root-fifth',
    },
    rhythm: {
      meter: '4/4',
      tempoRange: [75, 115],
      defaultBpm: 92,
      feel: 'ambient-rubato',
      swingPercentage: 50,
      anticipationOffsetSteps: 0,
      microtimingFeel: 'rubato',
      humanizeJitterMs: 12,
      signatureCell: 'Slow 16-bar crescendo from single guitar harmonic to full-band explosion',
      grooveMechanics: {
        microtimingFeel: 'rubato',
        swingPercentage: 50,
        anticipationOffsetSteps: 0,
        humanizeJitterMs: 12,
      },
    },
    melody: {
      scaleMode: 'major',
      contourArchetypes: ['ascending', 'soaring'],
      phraseLengthsBars: [8, 16],
    },
    sound: {
      instrumentPalette: [
        { value: 'electric-guitar', w: 1.0 },
        { value: 'bass', w: 0.95 },
        { value: 'drums', w: 0.95 },
        { value: 'synth', w: 0.85 },
      ],
      masterProfile: { roomId: 'hall', pocket: 0.7, lift: 0.8 },
    },
    gestures: {
      volume_swell: { id: 'volume_swell', name: 'Guitar Volume Swell', probability: 0.9 },
      crescendo_drop: { id: 'crescendo_drop', name: 'Full-Band Dynamic Explosion', probability: 0.85 },
    },
    rules: { require: [], forbid: [] },
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
    if (/sevillana/.test(text)) return T([
      {key:'intro',label:'Introducción',kind:'intro',bars:4,intensity:'low'},
      {key:'copla-1',label:'Primera Copla',kind:'verse',bars:12,intensity:'medium'},
      {key:'copla-2',label:'Segunda Copla',kind:'verse',bars:12,intensity:'high'},
      {key:'copla-3',label:'Tercera Copla',kind:'verse',bars:12,intensity:'high'},
      {key:'copla-4',label:'Cuarta Copla / Final',kind:'chorus',bars:12,intensity:'peak'},
      {key:'coda',label:'Remate Final',kind:'coda',bars:4,intensity:'low'},
    ]);
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
      // The old combined flamenco tradition is retained in the raw world pack for
      // backward compatibility, but it must not remain a selectable Song Style:
      // Rumba Flamenca and Sevillanas now have independent grammars above.
      if (world.id === 'flamenco' && trad.id === 'flamenco-rumba-sevillanas') return;
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
