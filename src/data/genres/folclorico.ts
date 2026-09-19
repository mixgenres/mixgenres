import { GenreWorld } from '../../types';

export const FOLCLORICO_WORLD: GenreWorld = {
  "id": "folclorico",
  "name": "Latin American Folclórico",
  "family": "Latin American folk traditions",
  "color": "#b36b2c",
  "level": "world",
  "description": "Folclórico is treated as an umbrella rather than a single beat. Andean, Mexican son/huapango, and Southern Cone traditions have different meters, instruments and accent grammars; the engine preserves those differences while offering shared Latin-folk interoperability.",
  "traditions": [
    {
      "id": "folclorico-huapango",
      "worldId": "folclorico",
      "name": "Huapango",
      "origin": "Huasteca Region, Mexico",
      "era": "Traditional",
      "description": "Falsetto • 6/8 • Violin-led\nVigorous Huastecan zapateado dance.\nLos Camperos de Valles · Trio Huasteco",
      "characteristicInstruments": [
        "violin",
        "guitar",
        "voice",
        "jarana",
        "percussion"
      ],
      "preferredMeters": [
        "6/8",
        "3/4"
      ],
      "tempoRange": [
        110,
        132
      ],
      "keySubstyles": [
        "Son Huasteco",
        "Huapango Arribeño"
      ],
      "coreConcepts": [
        "acrobatic violin glissandi and triplets",
        "soaring falsetto vocal leaps",
        "jarana huasteca syncopated strumming (apagón)",
        "percussive wooden platform zapateado"
      ],
      "rhythmicGrammar": [
        "sesquiáltera shifting between 6/8 and 3/4 with sharp percussive mutes on the jarana"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Soaring vocal falsetto leap answered by virtuosic violin floritura over 6/8-3/4 jarana rasgueo",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "D7",
          "G",
          "D7"
        ],
        "verse": [
          "G",
          "C",
          "D7",
          "G",
          "G",
          "C",
          "D7",
          "G"
        ],
        "zapateado": [
          "D7",
          "D7",
          "G",
          "G",
          "D7",
          "D7",
          "G",
          "G"
        ],
        "coda": [
          "D7",
          "D7",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "folclorico-chamame",
      "worldId": "folclorico",
      "name": "Chamamé",
      "origin": "Corrientes / Litoral, Argentina",
      "era": "Traditional / 20th Century",
      "description": "Accordion • 6/8 • Emotional\nLitoral Argentine accordion folk.\nRaúl Barboza · Tránsito Cocomarola",
      "characteristicInstruments": [
        "accordion",
        "guitar",
        "voice",
        "bass"
      ],
      "preferredMeters": [
        "6/8",
        "3/4"
      ],
      "tempoRange": [
        118,
        140
      ],
      "keySubstyles": [
        "Chamamé Romántico",
        "Chamamé Maceta"
      ],
      "coreConcepts": [
        "rich accordion polyphony and bellows vibrato",
        "interlocking dual acoustic guitars",
        "passionate sapukái vocal cries",
        "syncopated littoral river groove"
      ],
      "rhythmicGrammar": [
        "sesquiáltera rhythm in 6/8 with syncopated bass downbeats and offbeat guitar rasgueos"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Cascading accordion melody with expressive sapukái cry over galloping 6/8 guitar pulse",
      "grooveMechanics": {
        "swingPercentage": 52,
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
          "G",
          "C",
          "F",
          "Dm",
          "E7",
          "Am"
        ],
        "tema-b": [
          "A7",
          "Dm",
          "G",
          "C",
          "E7",
          "E7",
          "Am",
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
      "id": "folclorico-cueca",
      "worldId": "folclorico",
      "name": "Cueca",
      "origin": "Chile / Western South America",
      "era": "19th Century–Present",
      "description": "Syncopated • 6/8 • Handkerchief\nNational courtship dance of Chile.\nLos Huasos Quincheros · Violeta Parra",
      "characteristicInstruments": [
        "guitar",
        "accordion",
        "hand-percussion",
        "voice",
        "piano"
      ],
      "preferredMeters": [
        "6/8",
        "3/4"
      ],
      "tempoRange": [
        120,
        145
      ],
      "keySubstyles": [
        "Cueca Chilena",
        "Cueca Brava / Urbana"
      ],
      "coreConcepts": [
        "handkerchief waving courtship dynamics",
        "tamboreteo percussive slapping on guitar body",
        "snappy dual-vocal harmonies in parallel thirds",
        "6/8-3/4 sesquiáltera polyrhythm"
      ],
      "rhythmicGrammar": [
        "constant polyrhythmic tension between 3/4 guitar strumming and 6/8 vocal phrasing"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Tamboreteo slap on guitar soundboard followed by twin vocal entrance in thirds",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "A",
          "E7",
          "A",
          "E7"
        ],
        "canto": [
          "A",
          "D",
          "E7",
          "A",
          "D",
          "A",
          "E7",
          "A"
        ],
        "remate": [
          "D",
          "E7",
          "A",
          "A"
        ],
        "coda": [
          "E7",
          "E7",
          "A",
          "A"
        ]
      }
    },
    {
      "id": "folclorico-forro",
      "worldId": "folclorico",
      "name": "Forró",
      "origin": "Northeastern Brazil (Sertão)",
      "era": "1940s–Present",
      "description": "Accordion • Zabumba • Triangle\nJoyful Northeast Brazilian dance.\nLuiz Gonzaga · Dominguinhos",
      "characteristicInstruments": [
        "accordion",
        "percussion",
        "triangle",
        "acoustic-bass",
        "guitar",
        "voice"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        96,
        126
      ],
      "keySubstyles": [
        "Baião",
        "Xote",
        "Arrasta-pé"
      ],
      "coreConcepts": [
        "sanfona (accordion) virtuosic regional phrasing",
        "zabumba double-sided drum pulse (low thump and high syncopated stick hit)",
        "metallic triangle 16th-note shimmer",
        "joyous rustic storytelling"
      ],
      "rhythmicGrammar": [
        "zabumba playing syncopated pickup to downbeat with triangle playing continuous 16ths (open-closed)"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Low zabumba syncopated thump answering fast metallic triangle shimmer and accordion lead",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "D7",
          "G",
          "D7"
        ],
        "verse": [
          "G",
          "C",
          "D7",
          "G",
          "Em",
          "Am",
          "D7",
          "G"
        ],
        "chorus": [
          "C",
          "D7",
          "G",
          "Em",
          "Am",
          "D7",
          "G",
          "G"
        ],
        "coda": [
          "D7",
          "D7",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "folclorico-festejo",
      "worldId": "folclorico",
      "name": "Festejo",
      "origin": "Afro-Peruvian Coastal Communities",
      "era": "17th Century Roots–Present",
      "description": "Polyrhythmic • 6/8 • Cajón-driven\nJoyous Afro-Peruvian celebration.\nEva Ayllón · Perú Negro",
      "characteristicInstruments": [
        "cajon",
        "guitar",
        "hand-percussion",
        "bass",
        "voice",
        "quijada"
      ],
      "preferredMeters": [
        "6/8",
        "12/8"
      ],
      "tempoRange": [
        115,
        138
      ],
      "keySubstyles": [
        "Afro-Peruvian Festejo",
        "Alcatraz"
      ],
      "coreConcepts": [
        "virtuosic cajón polyrhythms and slapping",
        "quijada (donkey jawbone) percussive rattle",
        "cajita (small box) syncopated clicking",
        "acrobatic joyful dancing and call-and-response vocals"
      ],
      "rhythmicGrammar": [
        "12/8 cross-rhythm: cajón bass on 1, 4, 7, 10 with sharp syncopated high slaps on offbeats"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Thunderous cajon low-end thud with quijada rattle answering syncopated minor guitar lick",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "E7",
          "Am",
          "E7"
        ],
        "verse": [
          "Am",
          "Dm",
          "E7",
          "Am",
          "Dm",
          "G",
          "C",
          "E7"
        ],
        "coro": [
          "Dm",
          "Am",
          "E7",
          "Am",
          "Dm",
          "Am",
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
      "id": "folclorico-joropo",
      "worldId": "folclorico",
      "name": "Joropo",
      "origin": "Los Llanos (Venezuela / Colombia)",
      "era": "Traditional",
      "description": "Fast • Llanera Harp • Maracas\nVirtuosic plains dance in 3/4 & 6/8.\nReynaldo Armas · Hugo Blanco",
      "characteristicInstruments": [
        "harp",
        "cuatro",
        "maracas",
        "acoustic-bass",
        "voice"
      ],
      "preferredMeters": [
        "3/4",
        "6/8"
      ],
      "tempoRange": [
        130,
        160
      ],
      "keySubstyles": [
        "Joropo Llanero",
        "Golpe Llanero",
        "Pasaje"
      ],
      "coreConcepts": [
        "arpa llanera nylon-string high-speed arpeggiation and bass bordonas",
        "cuatro percussive syncopated frenados",
        "virtuosic maracas repiques and floreos",
        "heroic llanero poetry"
      ],
      "rhythmicGrammar": [
        "superimposed 3/4 and 6/8 polymeter with cuatro strumming percussive muted chops on beat 3"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Rapid arpa llanera cascading run accompanied by syncopated cuatro frenado and maraca floreo",
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
        "corrido": [
          "D",
          "G",
          "A7",
          "D",
          "D",
          "G",
          "A7",
          "D"
        ],
        "revuelta": [
          "G",
          "A7",
          "F#m",
          "Bm",
          "Em",
          "A7",
          "D",
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
      "id": "folclorico-lando",
      "worldId": "folclorico",
      "name": "Landó",
      "origin": "Afro-Peruvian Coast",
      "era": "18th Century Roots / 1960s Revival",
      "description": "Slow • Sensual • 12/8 Syncopation\nDeep Afro-Peruvian rhythmic ballad.\nSusana Baca · Chabuca Granda",
      "characteristicInstruments": [
        "cajon",
        "guitar",
        "voice",
        "acoustic-bass",
        "hand-percussion"
      ],
      "preferredMeters": [
        "12/8"
      ],
      "tempoRange": [
        78,
        98
      ],
      "keySubstyles": [
        "Landó Tradicional",
        "Afro-Peruvian Ballad"
      ],
      "coreConcepts": [
        "haunting slow 12/8 syncopated cajón groove",
        "nylon-string acoustic guitar arpeggios and modal phrasing",
        "poetic melancholic and sensual lyrical imagery",
        "spacious vocal delivery"
      ],
      "rhythmicGrammar": [
        "complex syncopated 12/8 cajón pattern with deep grave strokes on beats 1 and 7 and subtle high ghost taps"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Deep syncopated cajon grave stroke followed by melancholic acoustic guitar arpeggio",
      "grooveMechanics": {
        "swingPercentage": 54,
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
        "verse": [
          "Dm",
          "Gm",
          "C",
          "F",
          "Bb",
          "Gm",
          "A7",
          "Dm"
        ],
        "chorus": [
          "F",
          "C",
          "Dm",
          "Am",
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
    },
    {
      "id": "folclorico-son-jarocho",
      "worldId": "folclorico",
      "name": "Son Jarocho",
      "origin": "Veracruz, Mexico (Sotavento Region)",
      "era": "18th Century–Present",
      "description": "Arpa Jarocha • Jarana • Zapateado\nCommunal fandango music of Veracruz.\nMono Blanco · Son de Madera",
      "characteristicInstruments": [
        "harp",
        "jarana",
        "percussion",
        "guitar",
        "voice"
      ],
      "preferredMeters": [
        "6/8",
        "3/4"
      ],
      "tempoRange": [
        100,
        130
      ],
      "keySubstyles": [
        "Fandango Jarocho",
        "Son Tradicional Jarocho"
      ],
      "coreConcepts": [
        "arpa jarocha / requinto jarocho melodic leadership",
        "jarana jarocha polyrhythmic rasgueo chords",
        "tarima wooden platform zapateado percussion",
        "decima poetic verse singing and improvisation"
      ],
      "rhythmicGrammar": [
        "continuous sesquiáltera shifting between 3/4 and 6/8 anchored by tarima footwork"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Arpa jarocha cascading melodic motif over jarana polyrhythmic rasgueo and tarima foot stomps",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "F",
          "G7",
          "C"
        ],
        "son": [
          "C",
          "F",
          "G7",
          "C",
          "C",
          "F",
          "G7",
          "C"
        ],
        "coda": [
          "F",
          "G7",
          "C",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Huapango",
    "Chamamé",
    "Cueca",
    "Forró",
    "Festejo",
    "Joropo",
    "Landó",
    "Son Jarocho"
  ],
  "artists": [
    "Los Camperos de Valles",
    "Trio Huasteco",
    "Raúl Barboza",
    "Tránsito Cocomarola",
    "Los Huasos Quincheros",
    "Violeta Parra",
    "Luiz Gonzaga",
    "Dominguinhos",
    "Eva Ayllón",
    "Perú Negro",
    "Reynaldo Armas",
    "Hugo Blanco",
    "Susana Baca",
    "Chabuca Granda",
    "Mono Blanco",
    "Son de Madera"
  ],
  "concepts": [
    "6/8–3/4 hemiola",
    "charango",
    "quena",
    "bombo legüero",
    "jarana",
    "sesquialtera"
  ],
  "roles": {
    "harmony": [
      "charango/guitar strum",
      "jarana cells"
    ],
    "melody": [
      "quena/panpipe",
      "violin"
    ],
    "percussion": [
      "bombo/cajon"
    ],
    "voice": [
      "regional folk phrase"
    ]
  },
  "patterns": [
    {
      "id": "ff-huayno-strum",
      "worldId": "folclorico",
      "traditionId": "folclorico-andean",
      "name": "Huayno Charango Strum",
      "family": "Andean Strums",
      "category": "groove",
      "description": "Alternating short/long charango strokes supporting a pentatonic melody.",
      "tags": [
        "huayno",
        "charango",
        "andean"
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
        "charango",
        "guitar"
      ],
      "meter": "2/4",
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
      "syncopationRating": 0.6,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "strum"
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
          "id": "ff-huayno-strum-v-sparse",
          "parentPatternId": "ff-huayno-strum",
          "name": "Huayno Charango Strum — sparse",
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
          "id": "ff-huayno-strum-v-shift",
          "parentPatternId": "ff-huayno-strum",
          "name": "Huayno Charango Strum — accent shift",
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
        "huayno",
        "charango",
        "andean"
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
      "id": "ff-sesquialtera",
      "worldId": "folclorico",
      "traditionId": "folclorico-mexican",
      "name": "Sesquialtera Strum",
      "family": "Mexican Son Cells",
      "category": "groove",
      "description": "A compound/triple cross-accent cell representing the 6/8–3/4 interaction common to Mexican son families.",
      "tags": [
        "sesquialtera",
        "son",
        "6/8"
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
        "guitar",
        "violin"
      ],
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        10
      ],
      "accentProfile": [
        1,
        0.72,
        0.9,
        0.65,
        0.88
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58,
        0.84
      ],
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "strum"
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
          "id": "ff-sesquialtera-v-sparse",
          "parentPatternId": "ff-sesquialtera",
          "name": "Sesquialtera Strum — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            6,
            10
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "ff-sesquialtera-v-shift",
          "parentPatternId": "ff-sesquialtera",
          "name": "Sesquialtera Strum — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7,
            0.95
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "sesquialtera",
        "son",
        "6/8"
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
      "id": "ff-bombo-leguero",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Bombo Legüero Foundation",
      "family": "Southern Cone Percussion",
      "category": "groove",
      "description": "Low/high bombo-style interlock mapped to available hand-drum/kit carriers.",
      "tags": [
        "bombo",
        "chacarera",
        "6/8"
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
        "cajon",
        "drums"
      ],
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        10
      ],
      "accentProfile": [
        1,
        0.72,
        0.9,
        0.65,
        0.88
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58,
        0.84
      ],
      "syncopationRating": 0.65,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "hand-drum"
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
          "id": "ff-bombo-leguero-v-sparse",
          "parentPatternId": "ff-bombo-leguero",
          "name": "Bombo Legüero Foundation — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            6,
            10
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "ff-bombo-leguero-v-shift",
          "parentPatternId": "ff-bombo-leguero",
          "name": "Bombo Legüero Foundation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7,
            0.95
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "bombo",
        "chacarera",
        "6/8"
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
      "id": "ff-quena-answer",
      "worldId": "folclorico",
      "traditionId": "folclorico-andean",
      "name": "Quena phrase answer",
      "family": "Andean Melody",
      "category": "phrasePattern",
      "description": "Breath-shaped quena response phrase; the exact notes are generated later from the regional melodic vocabulary.",
      "tags": [
        "quena",
        "pentatonic",
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
        "quena",
        "pan-flute"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        9,
        12,
        15
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
      "syncopationRating": 0.68,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath"
      ],
      "density": "sparse",
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
          "id": "ff-quena-answer-v-sparse",
          "parentPatternId": "ff-quena-answer",
          "name": "Quena Pentatonic Answer — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            6,
            11
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "ff-quena-answer-v-shift",
          "parentPatternId": "ff-quena-answer",
          "name": "Quena Pentatonic Answer — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14
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
        "quena",
        "pentatonic",
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
      "id": "ff-zamba-6-8",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Zamba 6/8–3/4 Interlock",
      "family": "Zamba Cells",
      "category": "ostinato",
      "description": "Compound-duple pattern with a secondary 3/4 accent layer, preserving the dance's cross-meter identity.",
      "tags": [
        "zamba",
        "hemiola",
        "6/8"
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
        "guitar",
        "fiddle"
      ],
      "meter": "6/8",
      "cycleLength": 2,
      "subdivisions": 24,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        16,
        20
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
      "syncopationRating": 0.84,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "rasgueo"
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
          "id": "ff-zamba-6-8-v-sparse",
          "parentPatternId": "ff-zamba-6-8",
          "name": "Zamba 6/8–3/4 Interlock — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            8,
            16
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9
          ]
        },
        {
          "id": "ff-zamba-6-8-v-shift",
          "parentPatternId": "ff-zamba-6-8",
          "name": "Zamba 6/8–3/4 Interlock — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            16,
            20
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
        "zamba",
        "hemiola",
        "6/8"
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
      "id": "ff-06-huayno-strum",
      "worldId": "folclorico",
      "traditionId": "folclorico-andean",
      "name": "Huayno Strum",
      "family": "Andean",
      "category": "groove",
      "description": "Driving guitar/charango strum in a binary 2/4-feeling dance pulse.",
      "tags": [
        "huayno",
        "strum"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "guitar"
      ],
      "instruments": [
        "guitar",
        "charango"
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
        0.82,
        0.62
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "huayno",
        " strum"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Huayno Strum",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Andean; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "huayno",
        "strum"
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
      "id": "ff-07-andean-bombo-foundation",
      "worldId": "folclorico",
      "traditionId": "folclorico-mexican",
      "name": "Andean Bombo Foundation",
      "family": "Andean",
      "category": "groove",
      "description": "Low drum anchors the dance while smaller percussion fills the spaces.",
      "tags": [
        "bombo",
        "downbeat"
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
        "bombo-leguero"
      ],
      "meter": "2/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        4
      ],
      "accentProfile": [
        1,
        0.72
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "bombo",
        " downbeat"
      ],
      "density": "sparse",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Andean Bombo Foundation",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Andean; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bombo",
        "downbeat"
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
      "id": "ff-08-quena-answer",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Quena Answer",
      "family": "Andean",
      "category": "interactionPattern",
      "description": "Quena phrase answers the sung/charango melody in short pentatonic gestures.",
      "tags": [
        "quena",
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
        "quena"
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
        0.65,
        0.8,
        0.58,
        0.75
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "quena",
        " answer"
      ],
      "density": "medium",
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Quena Answer",
      "roleDependencies": [
        "melody"
      ],
      "interactionRules": [
        {
          "id": "ff-08-quena-answer-answer",
          "sourceRole": "lead",
          "targetRole": "melody",
          "relationship": "answer",
          "timingOffsetSteps": 2,
          "probability": 0.75,
          "worldId": "folclorico",
          "description": "Enter only after the source phrase leaves a response window."
        }
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Andean; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "quena",
        "answer"
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
      "id": "ff-09-charango-tremolo",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Charango Tremolo",
      "family": "Andean",
      "category": "ostinato",
      "description": "Fast repeated-note tremolo or rolled figure used as a melodic texture, not a synth pad.",
      "tags": [
        "charango",
        "tremolo"
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
        "charango"
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
        0.5,
        0.65,
        0.52,
        0.68,
        0.55,
        0.7,
        0.52,
        0.72
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "charango",
        " tremolo"
      ],
      "density": "dense",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "chorus",
        "solo"
      ],
      "patternFunction": "Charango Tremolo",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Andean; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "charango",
        "tremolo"
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
      "id": "ff-10-son-huapango-sesquialtera",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Son Huapango Sesquialtera",
      "family": "Mexican",
      "category": "groove",
      "description": "Alternating 6/8 and 3/4 accent logic; the pattern must preserve the hemiola rather than flatten it.",
      "tags": [
        "sesquialtera",
        "6/8-3/4"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "pulse"
      ],
      "instruments": [
        "guitar",
        "vihuela"
      ],
      "meter": "6/8",
      "cycleLength": 2,
      "subdivisions": 24,
      "onsetGrid": [
        0,
        3,
        6,
        9,
        12,
        15,
        18,
        21
      ],
      "accentProfile": [
        1,
        0.55,
        0.8,
        0.6,
        1,
        0.5,
        0.78,
        0.62
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "sesquialtera",
        " 6/8-3/4"
      ],
      "density": "dense",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Son Huapango Sesquialtera",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Mexican; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "sesquialtera",
        "6/8-3/4"
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
      "id": "ff-11-jarana-strum",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Jarana Strum",
      "family": "Mexican",
      "category": "cell",
      "description": "Bright repeated strum with accent displacement characteristic of son-derived ensemble texture.",
      "tags": [
        "jarana",
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
        "guitar"
      ],
      "instruments": [
        "jarana"
      ],
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10
      ],
      "accentProfile": [
        0.9,
        0.55,
        0.7,
        0.5,
        0.82,
        0.6
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "jarana",
        " son"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Jarana Strum",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Mexican; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "jarana",
        "son"
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
      "id": "ff-12-zamba-6-8-cue",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Zamba guitar accent cue",
      "family": "Southern Cone",
      "category": "groove",
      "description": "Guitar accent pattern for Argentine zamba; avoids using a generic percussion cue as the primary identity.",
      "tags": [
        "zamba",
        "6/8"
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
        "guitar"
      ],
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        4,
        6,
        9,
        12,
        16
      ],
      "accentProfile": [
        0.9,
        0.5,
        0.78,
        0.58,
        0.9,
        0.5
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "zamba",
        " 6/8"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Zamba 6/8 Cue",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Southern Cone; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "zamba",
        "6/8"
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
      "id": "ff-13-bombo-leg-ero-march",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Bombo legüero low/high alternation",
      "family": "Southern Cone",
      "category": "groove",
      "description": "Low/high bombo legüero alternation for Argentine folk accompaniment.",
      "tags": [
        "bombo legüero"
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
        "bombo-leguero"
      ],
      "meter": "6/8",
      "cycleLength": 2,
      "subdivisions": 24,
      "onsetGrid": [
        0,
        5,
        8,
        13,
        16,
        21
      ],
      "accentProfile": [
        1,
        0.72,
        0.9,
        0.68,
        1,
        0.72
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "bombo legüero"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "dance"
      ],
      "patternFunction": "Bombo Legüero March",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Southern Cone; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bombo legüero"
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
      "id": "ff-14-copla-call-response",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Copla Call-Response",
      "family": "Regional",
      "category": "interactionPattern",
      "description": "Lead vocal/cantor phrase followed by instrumental response, with asymmetric breath space.",
      "tags": [
        "copla",
        "response"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "voice"
      ],
      "instruments": [
        "voice",
        "quena",
        "guitar"
      ],
      "meter": "6/8",
      "cycleLength": 2,
      "subdivisions": 24,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        16,
        20
      ],
      "accentProfile": [
        0.8,
        0.55,
        0.7,
        0.85,
        0.55,
        0.72
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "copla",
        " response"
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
      "patternFunction": "Copla Call-Response",
      "roleDependencies": [
        "melody"
      ],
      "interactionRules": [
        {
          "id": "ff-14-copla-call-response-answer",
          "sourceRole": "voice",
          "targetRole": "melody",
          "relationship": "answer",
          "timingOffsetSteps": 2,
          "probability": 0.75,
          "worldId": "folclorico",
          "description": "Enter only after the source phrase leaves a response window."
        }
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Regional; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "copla",
        "response"
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
      "id": "ff-15-folcl-rico-estribillo-lift",
      "worldId": "folclorico",
      "traditionId": "folclorico-southern-cone",
      "name": "Folclórico estribillo lift",
      "family": "Regional",
      "category": "sectionPattern",
      "description": "Ensemble lift for a refrain; designed to sit on top of a regional rhythm rather than define one universal Latin-folk groove.",
      "tags": [
        "estribillo",
        "ensemble lift"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "texture"
      ],
      "instruments": [
        "voice",
        "guitar",
        "charango",
        "bombo-leguero"
      ],
      "meter": "6/8",
      "cycleLength": 2,
      "subdivisions": 24,
      "onsetGrid": [
        0,
        3,
        6,
        9,
        12,
        15,
        18,
        21
      ],
      "accentProfile": [
        0.9,
        0.6,
        0.8,
        0.58,
        0.95,
        0.62,
        0.82,
        0.65
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "estribillo",
        " ensemble lift"
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "chorus"
      ],
      "patternFunction": "Folclórico Estribillo Lift",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Regional; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "estribillo",
        "ensemble lift"
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
      2,
      4
    ],
    "primaryPulse": [
      "regional meter",
      "dance accent",
      "ensemble call-response"
    ],
    "rhythmicPriorities": [
      "regional meter",
      "dance accent",
      "ensemble call-response"
    ],
    "harmonicStrategy": [
      "modal/cyclic harmony",
      "regional tonic-dominant motion",
      "harmony secondary to melody/rhythm"
    ],
    "melodicStrategy": [
      "copla/equivalent phrase",
      "pentatonic/modal melody",
      "instrumental answer"
    ],
    "arrangementStrategy": "Often moves from copla/verse to estribillo or dance refrain, with instrumental interludes and regional variation; ensemble density rises at the refrain.",
    "engineConstraints": [
      "Do not collapse Andean, Mexican son/huapango and Southern Cone forms into one rhythm; do not genericize instruments.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "compound-meter normalization",
    "hemiola preservation",
    "regional instrument substitution",
    "pentatonic/modal melody"
  ],
  "forms": [
    "intro",
    "verse",
    "refrain",
    "dance",
    "instrumental",
    "bridge",
    "coda"
  ],
  "relationships": [
    "guitar ↔ percussion",
    "lead ↔ voice",
    "strum ↔ bombo"
  ],
  "songBehaviors": [
    "preserve regional meter",
    "do not collapse all folk into generic 4/4",
    "use instrument-specific lead colors",
    "let 6/8 patterns stay native in playback",
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize regional meter and dance accent as the identity layer.",
    "Use copla/equivalent phrase and pentatonic/modal melody for development rather than generic fills."
  ],
  "instrumentIdeas": {
    "charango": [
      "bright doubled-course strum"
    ],
    "quena": [
      "breathy pentatonic lead"
    ],
    "pan-flute": [
      "layered panpipe melody"
    ],
    "cajon": [
      "bombo fallback"
    ],
    "fiddle": [
      "folk violin lead"
    ]
  },
  "combinations": [
    "Folclórico + Nueva Trova",
    "Andean Folk + Ambient",
    "Cumbia + Andean Folk"
  ],
  "danceTags": [
    "social-partner",
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Regional 6/8, 3/4 and binary cells with charango/guitar, winds and bombo textures",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight",
    "humanizeJitterMs": 10
  },
  "crossLinks": [
    "Latin Folklórico ↔ Cumbia",
    "Latin Folklórico ↔ Tango / Trova"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
