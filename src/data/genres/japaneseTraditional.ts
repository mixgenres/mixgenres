import { GenreWorld } from '../../types';

export const JAPANESE_TRADITIONAL_WORLD: GenreWorld = {
  "id": "japanese-traditional",
  "name": "Japanese Traditional",
  "family": "Japanese classical / folk / theater",
  "color": "#b24b5a",
  "level": "world",
  "description": "Japanese traditional music spans court, theater, folk song and chamber traditions. This world separates gagaku, shamisen/min'yō and koto/sankyoku rather than treating 'Japanese traditional' as one sound. The renderer uses a modal, phrase-led 12-TET approximation rather than Western chord-function logic, while preserving articulation, register and ma (space).",
  "traditions": [
    {
      "id": "japanese-traditional-gagaku",
      "worldId": "japanese-traditional",
      "name": "Gagaku",
      "origin": "Imperial Court, Kyoto / Nara, Japan",
      "era": "Heian Period (8th Century)–Present",
      "description": "Ancient Court • Shō Clusters • Heterophonic\nOldest continuous imperial orchestral tradition.\nImperial Court Music Dept · Reigakusha",
      "characteristicInstruments": [
        "sho",
        "hichiriki",
        "ryuteki",
        "taiko",
        "biwa",
        "koto"
      ],
      "preferredMeters": [
        "4/4",
        "free"
      ],
      "tempoRange": [
        40,
        60
      ],
      "keySubstyles": [
        "Togaku (Chinese-derived)",
        "Komagaku (Korean-derived)"
      ],
      "coreConcepts": [
        "shō 17-pipe mouth organ sustained tone clusters (aitake)",
        "piercing hichiriki double-reed microtonal bends (enbai)",
        "ryūteki flute soaring melodies",
        "spacious kakko/taiko percussion pacing (jo-ha-kyū)"
      ],
      "rhythmicGrammar": [
        "jo-ha-kyu temporal structure starting slow and spacious, expanding, then concluding"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Luminous shō mouth organ tone clusteraitake with piercing hichiriki enbai glide",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "jo": [
          "D",
          "D",
          "G",
          "A"
        ],
        "ha": [
          "D",
          "G",
          "A",
          "D",
          "Em",
          "A",
          "D",
          "D"
        ],
        "kyu": [
          "G",
          "A",
          "D",
          "D"
        ]
      }
    },
    {
      "id": "japanese-traditional-sankyoku",
      "worldId": "japanese-traditional",
      "name": "Sankyoku",
      "origin": "Edo / Kyoto, Japan",
      "era": "Edo Period (1603–1867)",
      "description": "Koto • Shamisen • Shakuhachi\nRefined three-instrument chamber art.\nYatsuhashi Kengyo · Michio Miyagi",
      "characteristicInstruments": [
        "koto",
        "shamisen",
        "shakuhachi",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "2/4"
      ],
      "tempoRange": [
        55,
        85
      ],
      "keySubstyles": [
        "Jiuta Sankyoku",
        "Edo Chamber Music"
      ],
      "coreConcepts": [
        "heterophonic tri-instrumental interaction",
        "in-sen and miyako-bushi scale modes",
        "shakuhachi breathy bamboo timbre and meri-kari pitch bending",
        "koto 13-string plucked elegance"
      ],
      "rhythmicGrammar": [
        "unhurried flexible meter with subtle accelerando in central tegoto sections"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Koto plucked motif answering shamisen snap and airy shakuhachi pitch bend",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Gm",
          "A",
          "Dm"
        ],
        "song": [
          "Dm",
          "Bb",
          "A",
          "Dm",
          "Gm",
          "A",
          "Dm",
          "Dm"
        ],
        "tegoto": [
          "Dm",
          "Gm",
          "A",
          "Dm",
          "Bb",
          "A",
          "Dm",
          "Dm"
        ],
        "coda": [
          "Gm",
          "A",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "japanese-traditional-tsugaru-shamisen",
      "worldId": "japanese-traditional",
      "name": "Tsugaru-Shamisen",
      "origin": "Aomori Prefecture (Tsugaru Peninsula)",
      "era": "Late 19th Century–Present",
      "description": "Virtuosic • Percussive Strike • Fast\nPowerhouse Northern bachi-striking shamisen.\nTakahashi Chikuzan · Yoshida Brothers",
      "characteristicInstruments": [
        "shamisen",
        "taiko",
        "hand-percussion",
        "voice"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        120,
        155
      ],
      "keySubstyles": [
        "Tsugaru Jonkara Bushi",
        "Tsugaru Ayabushi"
      ],
      "coreConcepts": [
        "heavy bachi plectrum striking the skin like a drum (tataki)",
        "lightning-fast left-hand pull-offs and hammer-ons (hajiki)",
        "improvisational virtuosity and raw Northern emotional grit",
        "soaring regional vocal calls (kakegoe)"
      ],
      "rhythmicGrammar": [
        "fast percussive 16th-note driving runs accented with explosive bachi skin strikes"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Explosive bachi strike on shamisen skin followed by blindingly fast melodic pull-off run",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ],
        "theme": [
          "Dm",
          "Gm",
          "A",
          "Dm",
          "Bb",
          "Gm",
          "A",
          "Dm"
        ],
        "virtuosic": [
          "Dm",
          "Dm",
          "Gm",
          "Dm",
          "Bb",
          "A",
          "Dm",
          "Dm"
        ],
        "coda": [
          "A",
          "A",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "japanese-traditional-minyo",
      "worldId": "japanese-traditional",
      "name": "Min'yo",
      "origin": "Regional Villages across Japan",
      "era": "Traditional Folk Roots",
      "description": "Folk Song • Kakegoe • Vibrato\nCelebratory regional working songs.\nChiemi Eri · Kazuko Matsumura",
      "characteristicInstruments": [
        "voice",
        "shamisen",
        "shakuhachi",
        "taiko",
        "hand-percussion"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        85,
        115
      ],
      "keySubstyles": [
        "Work Songs (Rōdōka)",
        "Festival Songs (Matsuri-uta)"
      ],
      "coreConcepts": [
        "intense kobushi melismatic vocal vibrato",
        "cheerful audience kakegoe shouts (\"Ha, Yoiso!\")",
        "upbeat shamisen accompaniment",
        "taiko and kane bell festival rhythms"
      ],
      "rhythmicGrammar": [
        "spirited 2/4 festival bounce with handclaps and syncopated taiko drum accents"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Expressive kobushi vocal vibrato answered by enthusiastic \"Ha, Dokkoisho!\" kakegoe shout",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C",
          "D",
          "G"
        ],
        "verse": [
          "G",
          "C",
          "D",
          "G",
          "Em",
          "C",
          "D",
          "G"
        ],
        "refrain": [
          "C",
          "D",
          "G",
          "Em",
          "C",
          "D",
          "G",
          "G"
        ],
        "coda": [
          "C",
          "D",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "japanese-traditional-shomyo",
      "worldId": "japanese-traditional",
      "name": "Shomyo",
      "origin": "Buddhist Temples (Tendai / Shingon Sects)",
      "era": "Nara/Heian Periods (6th Century–Present)",
      "description": "Chant • Monophonic • Resonant\nAncient Buddhist ritual vocal chant.\nDai Shingon Shomyo Kai · Tendai Shomyo",
      "characteristicInstruments": [
        "voice",
        "temple-bell",
        "percussion"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        35,
        55
      ],
      "keySubstyles": [
        "Tendai Shomyo",
        "Shingon Shomyo"
      ],
      "coreConcepts": [
        "deep guttural monophonic and heterophonic vocal chanting",
        "microtonal sliding between sacred pitches",
        "reverberant temple acoustic resonance",
        "bronze singing bowl (keisu) and bell punctuations"
      ],
      "rhythmicGrammar": [
        "unmetered breath chanting expanding and contracting with collective ritual breathing"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Deep resonant Buddhist vocal chant glide punctuated by pure bronze temple singing bowl strike",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "chant": [
          "D",
          "D",
          "G",
          "D",
          "A",
          "G",
          "D",
          "D"
        ]
      }
    },
    {
      "id": "japanese-traditional-nohgaku",
      "worldId": "japanese-traditional",
      "name": "Nohgaku",
      "origin": "Kyoto / Edo, Japan",
      "era": "Muromachi Period (14th Century)–Present",
      "description": "Hayashi • Austere • Flute & Drums\nSolemn Noh theater musical drama.\nKanze School · Hosho School",
      "characteristicInstruments": [
        "fue",
        "tsuzumi",
        "taiko",
        "voice"
      ],
      "preferredMeters": [
        "8-beat (Yahyoshi)"
      ],
      "tempoRange": [
        50,
        75
      ],
      "keySubstyles": [
        "Noh Hayashi",
        "Utotai Chant"
      ],
      "coreConcepts": [
        "otsuzumi (hip drum) and kotsuzumi (shoulder drum) sharp strikes",
        "piercing kakegoe vocal calls (\"Iyo!\", \"Ha!\") before strikes",
        "nohkan bamboo flute sharp shrill accents (hishigi)",
        "austere spiritual tension and ma (negative space)"
      ],
      "rhythmicGrammar": [
        "yahyōshi 8-beat framework with complex syncopated drum calls defying western grid"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Tense \"Iyo—\" vocal call culminating in sharp shoulder-drum crack and shrill nohkan flute cry",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Am",
          "Am",
          "Am"
        ],
        "kuse": [
          "Am",
          "Dm",
          "Em",
          "Am",
          "F",
          "Dm",
          "Em",
          "Am"
        ],
        "coda": [
          "Dm",
          "Em",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "japanese-traditional-taiko",
      "worldId": "japanese-traditional",
      "name": "Taiko",
      "origin": "Traditional Shrines / Modern Ensemble (Kumi-daiko)",
      "era": "Ancient Roots / 1950s Kumi-daiko",
      "description": "Thunderous • Physical • Polyrhythmic\nHigh-impact barrel drum ensemble.\nKodo · Ondekoza",
      "characteristicInstruments": [
        "taiko",
        "fue",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4",
        "2/4"
      ],
      "tempoRange": [
        120,
        160
      ],
      "keySubstyles": [
        "Kumi-daiko (Ensemble Taiko)",
        "Miyake",
        "Hachijo"
      ],
      "coreConcepts": [
        "massive nagadō-daiko and ō-daiko barrel drum power",
        "intense martial-arts physical choreography (kata)",
        "tight polyrhythmic interlocking drum patterns",
        "shinobue bamboo flute melodic counterpoint"
      ],
      "rhythmicGrammar": [
        "driving 4/4 and 2/4 base rhythm (jiuchi) supporting explosive polyrhythmic soloing (oroshi accelerando)"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Thunderous ō-daiko barrel drum downbeat answering rapid interlocking shime-daiko rolls",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ],
        "drive": [
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Bb",
          "A"
        ],
        "climax": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ],
        "coda": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "japanese-traditional-biwa-hushi",
      "worldId": "japanese-traditional",
      "name": "Biwa Hushi",
      "origin": "Medieval Japan (Blind Monk Tradition)",
      "era": "Kamakura/Muromachi Periods (12th–14th Centuries)",
      "description": "Narrative • Silk Plectrum • Epic\nTale of the Heike recited with fretted lute.\nTsuruta Kinshi · Junko Ueda",
      "characteristicInstruments": [
        "biwa",
        "voice"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        40,
        65
      ],
      "keySubstyles": [
        "Heike Biwa",
        "Satsuma Biwa"
      ],
      "coreConcepts": [
        "broad wooden bachi plectrum striking strings and body simultaneously",
        "sawari buzzing string overtone effect",
        "dramatic recitation of epic samurai warrior tales",
        "poignant melancholic impermanence (mono no aware)"
      ],
      "rhythmicGrammar": [
        "dramatic pauses and explosive percussive lute strums pacing spoken/sung narrative"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Harsh bachi strike on biwa buzzing sawari string followed by solemn epic narrative recitation",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "recitation": [
          "Dm",
          "A",
          "Dm",
          "Gm",
          "Dm",
          "A",
          "Dm",
          "Dm"
        ]
      }
    }
  ],
  "substyles": [
    "Gagaku",
    "Sankyoku",
    "Tsugaru-Shamisen",
    "Min'yo",
    "Shomyo",
    "Nohgaku",
    "Taiko",
    "Biwa Hushi"
  ],
  "artists": [
    "Imperial Court Music Dept",
    "Reigakusha",
    "Yatsuhashi Kengyo",
    "Michio Miyagi",
    "Takahashi Chikuzan",
    "Yoshida Brothers",
    "Chiemi Eri",
    "Kazuko Matsumura",
    "Dai Shingon Shomyo Kai",
    "Tendai Shomyo",
    "Kanze School",
    "Hosho School",
    "Kodo",
    "Ondekoza",
    "Tsuruta Kinshi",
    "Junko Ueda"
  ],
  "concepts": [
    "ma / intentional space",
    "heterophony",
    "kakeai response",
    "shō sustained sonority",
    "bachi attack",
    "koto pitch bend"
  ],
  "roles": {
    "melody": [
      "shakuhachi breath-tone gestures",
      "shamisen ornamented single line",
      "koto plucked figures"
    ],
    "harmony": [
      "shō-like sustained cluster",
      "open-string interval beds"
    ],
    "percussion": [
      "theater cue punctuation"
    ],
    "voice": [
      "min'yō phrase contour"
    ]
  },
  "patterns": [
    {
      "id": "jt-gagaku-sho-bed",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-gagaku",
      "name": "Shō Sustained Bed",
      "family": "Gagaku Sonority",
      "category": "ostinato",
      "description": "Long sustained cluster bed intended to move little while wind lines supply motion.",
      "tags": [
        "gagaku",
        "sho",
        "sustain"
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
        "shō"
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
        0.72
      ],
      "velocityProfile": [
        0.92,
        0.62
      ],
      "syncopationRating": 0.05,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "sustain"
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
          "id": "jt-gagaku-sho-bed-v-sparse",
          "parentPatternId": "jt-gagaku-sho-bed",
          "name": "Shō Sustained Bed — sparse",
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
          "id": "jt-gagaku-sho-bed-v-shift",
          "parentPatternId": "jt-gagaku-sho-bed",
          "name": "Shō Sustained Bed — accent shift",
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
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "gagaku",
        "sho",
        "sustain"
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
      "id": "jt-shamisen-bachi",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-shamisen",
      "name": "Shamisen Bachi Pulse",
      "family": "Shamisen Attacks",
      "category": "ostinato",
      "description": "Dry alternating plucks with a slightly delayed answer attack; built around articulation rather than dense harmony.",
      "tags": [
        "shamisen",
        "bachi",
        "minyo"
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
        "shamisen"
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
      "syncopationRating": 0.7,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "plectrum"
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
          "id": "jt-shamisen-bachi-v-sparse",
          "parentPatternId": "jt-shamisen-bachi",
          "name": "Shamisen Bachi Pulse — sparse",
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
          "id": "jt-shamisen-bachi-v-shift",
          "parentPatternId": "jt-shamisen-bachi",
          "name": "Shamisen Bachi Pulse — accent shift",
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
        "shamisen",
        "bachi",
        "minyo"
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
      "id": "jt-koto-arpeggio",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-koto",
      "name": "Koto Broken-String Figure",
      "family": "Koto Patterns",
      "category": "ostinato",
      "description": "Open-string arpeggiation with a terminal bend/glissando gesture.",
      "tags": [
        "koto",
        "arpeggio",
        "ma"
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
        "koto"
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
      "syncopationRating": 0.55,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "pluck",
        "glissando"
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
          "id": "jt-koto-arpeggio-v-sparse",
          "parentPatternId": "jt-koto-arpeggio",
          "name": "Koto Broken-String Figure — sparse",
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
          "id": "jt-koto-arpeggio-v-shift",
          "parentPatternId": "jt-koto-arpeggio",
          "name": "Koto Broken-String Figure — accent shift",
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
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "koto",
        "arpeggio",
        "ma"
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
      "id": "jt-kakeai-answer",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-shamisen",
      "name": "Kakeai Call & Response",
      "family": "Kakeai",
      "category": "interactionPattern",
      "description": "A short lead cell followed by a lower-register response, leaving a deliberate gap between phrases.",
      "tags": [
        "kakeai",
        "response",
        "ma"
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
        "shamisen",
        "shakuhachi"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        20,
        24,
        28
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
      "syncopationRating": 0.62,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "attack"
      ],
      "density": "sparse",
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
      "interactionRules": [
        {
          "id": "jt-kakeai-i",
          "sourceRole": "melody",
          "targetRole": "melody",
          "relationship": "answer",
          "description": "A second voice enters after the lead gesture rather than doubling it.",
          "timingOffsetSteps": 8,
          "probability": 0.72,
          "worldId": "japanese-traditional"
        }
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "jt-kakeai-answer-v-sparse",
          "parentPatternId": "jt-kakeai-answer",
          "name": "Kakeai Call & Response — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            0,
            8,
            20,
            28
          ],
          "accentProfile": [
            0.9,
            0.65,
            0.9,
            0.65
          ]
        },
        {
          "id": "jt-kakeai-answer-v-shift",
          "parentPatternId": "jt-kakeai-answer",
          "name": "Kakeai Call & Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            20,
            24,
            28
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
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "kakeai",
        "response",
        "ma"
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
      "id": "jt-cadential-gliss",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-koto",
      "name": "Cadential Koto Glissando",
      "family": "Cadential Gestures",
      "category": "cadence",
      "description": "A phrase-ending upward/downward glissando used as a structural tag, not a continuous riff.",
      "tags": [
        "cadence",
        "glissando",
        "koto"
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
        "koto"
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
        1,
        0.72,
        0.9,
        0.65
      ],
      "velocityProfile": [
        0.92,
        0.62,
        0.86,
        0.58
      ],
      "syncopationRating": 0.4,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "glissando"
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle",
        "end"
      ],
      "sectionUsage": [
        "ending",
        "coda",
        "bridge"
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
          "id": "jt-cadential-gliss-v-sparse",
          "parentPatternId": "jt-cadential-gliss",
          "name": "Cadential Koto Glissando — sparse",
          "variationType": "sparse",
          "probability": 0.35,
          "description": "Leaves selected attacks open for a played repetition.",
          "onsetGrid": [
            8,
            12
          ],
          "accentProfile": [
            0.9,
            0.65
          ]
        },
        {
          "id": "jt-cadential-gliss-v-shift",
          "parentPatternId": "jt-cadential-gliss",
          "name": "Cadential Koto Glissando — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Retains the cell while moving emphasis between repeated attacks.",
          "onsetGrid": [
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.95,
            0.7
          ]
        }
      ],
      "provenance": "GenreDAW catalog extension: authored from documented rhythmic/ensemble conventions and expressed as engine-ready structural cells.",
      "authenticityTags": [
        "cadence",
        "glissando",
        "koto"
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
      "id": "jt-06-gagaku-sh-cluster",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-gagaku",
      "name": "Shō sustained chord cluster",
      "family": "Gagaku",
      "category": "ostinato",
      "description": "Sustained shō sonority used as a gagaku harmonic color; it is not a Western chord progression.",
      "tags": [
        "shō",
        "aitake",
        "sustained"
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
        "shō"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        8
      ],
      "accentProfile": [
        0.75,
        0.65
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "shō",
        " aitake"
      ],
      "density": "sparse",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "bridge"
      ],
      "patternFunction": "Gagaku Shō Cluster",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Gagaku; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "shō",
        "aitake",
        "sustained"
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
      "id": "jt-07-gagaku-ry-teki-call",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-gagaku",
      "name": "Gagaku Ryūteki Call",
      "family": "Gagaku",
      "category": "phrasePattern",
      "description": "Long-note flute call with ornamental turns and a spacious answer.",
      "tags": [
        "gagaku",
        "ornament"
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
        "ryuteki"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        6,
        16,
        23
      ],
      "accentProfile": [
        0.8,
        0.55,
        0.9,
        0.6
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "gagaku",
        " ornament"
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
      "patternFunction": "Gagaku Ryūteki Call",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Gagaku; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "gagaku",
        "ornament"
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
      "id": "jt-08-shamisen-bachi-downstroke",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-shamisen",
      "name": "Shamisen Bachi Downstroke",
      "family": "Shamisen / Min’yō",
      "category": "cell",
      "description": "Plectrum attack on a strong beat followed by ringing or muted response.",
      "tags": [
        "bachi",
        "sawari"
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
        "shamisen"
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
        1,
        0.55,
        0.9,
        0.6
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "bachi",
        " sawari"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "patternFunction": "Shamisen Bachi Downstroke",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Shamisen / Min’yō; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bachi",
        "sawari"
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
      "id": "jt-09-shamisen-tsugaru-fill",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-shamisen",
      "name": "Shamisen Tsugaru Fill",
      "family": "Shamisen / Min’yō",
      "category": "fill",
      "description": "Fast bachi burst used as a phrase-ending flourish; it should not run continuously.",
      "tags": [
        "bachi",
        "fill",
        "tsugaru"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "fill"
      ],
      "instruments": [
        "shamisen"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        9,
        10,
        11,
        13,
        14,
        15
      ],
      "accentProfile": [
        0.55,
        0.65,
        0.72,
        0.7,
        0.82,
        1
      ],
      "syncopationRating": 1,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "bachi",
        " fill"
      ],
      "density": "medium",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "solo"
      ],
      "patternFunction": "Shamisen Tsugaru Fill",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Shamisen / Min’yō; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "bachi",
        "fill",
        "tsugaru"
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
      "id": "jt-10-koto-arpeggio-sweep",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-koto",
      "name": "Koto cascading pluck",
      "family": "Koto / Sankyoku",
      "category": "rolePattern",
      "description": "Descending/ascending koto gesture using attack clusters and register change rather than a generic Western arpeggio.",
      "tags": [
        "koto",
        "arpeggio"
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
        "koto"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        10,
        13,
        15
      ],
      "accentProfile": [
        0.75,
        0.6,
        0.7,
        0.55,
        0.8,
        0.65
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "koto",
        " arpeggio"
      ],
      "density": "medium",
      "phrasePosition": [
        "any"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "patternFunction": "Koto Arpeggio Sweep",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Koto / Sankyoku; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "koto",
        "arpeggio"
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
      "id": "jt-11-koto-oshide-bend",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-koto",
      "name": "Koto pitch-inflection gesture",
      "family": "Koto / Sankyoku",
      "category": "ornament",
      "description": "Phrase gesture for koto pitch inflection and ornament; renderer approximates the bend in 12-TET.",
      "tags": [
        "oshide",
        "pitch bend"
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
        "koto"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        7,
        9,
        14
      ],
      "accentProfile": [
        0.8,
        0.45,
        0.75,
        0.5
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "oshide",
        " pitch bend"
      ],
      "density": "medium",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "patternFunction": "Koto Oshide Bend",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Koto / Sankyoku; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "oshide",
        "pitch bend"
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
      "id": "jt-12-kakeai-question",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-koto",
      "name": "Kakeai Question",
      "family": "Cross-Tradition",
      "category": "interactionPattern",
      "description": "A short instrumental question leaves a gap for the answering voice or second instrument.",
      "tags": [
        "kakeai",
        "question-answer"
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
        "shamisen",
        "koto",
        "shakuhachi"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        0,
        4,
        8,
        20,
        24
      ],
      "accentProfile": [
        0.9,
        0.6,
        0.75,
        0.85,
        0.65
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "kakeai",
        " question-answer"
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "bridge"
      ],
      "patternFunction": "Kakeai Question",
      "roleDependencies": [
        "melody"
      ],
      "interactionRules": [
        {
          "id": "jt-12-kakeai-question-answer",
          "sourceRole": "counterline",
          "targetRole": "melody",
          "relationship": "answer",
          "timingOffsetSteps": 2,
          "probability": 0.75,
          "worldId": "japanese-traditional",
          "description": "Enter only after the source phrase leaves a response window."
        }
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Cross-Tradition; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "kakeai",
        "question-answer"
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
      "id": "jt-13-ma-dropout",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-koto",
      "name": "Ma Dropout",
      "family": "Cross-Tradition",
      "category": "break",
      "description": "Intentional silence after a gesture; re-entry is more important than continuous density.",
      "tags": [
        "ma",
        "silence"
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
        "shakuhachi",
        "koto"
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
        0.9,
        0.5,
        0.8
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "ma",
        " silence"
      ],
      "density": "sparse",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "coda"
      ],
      "patternFunction": "Ma Dropout",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Cross-Tradition; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "ma",
        "silence"
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
      "id": "jt-14-shakuhachi-breath-tone",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-shakuhachi",
      "name": "Shakuhachi Breath Tone",
      "family": "Shakuhachi",
      "category": "phrasePattern",
      "description": "Breathy sustained note with delayed attack and downward ornamental release.",
      "tags": [
        "meri",
        "kari",
        "breath"
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
        "shakuhachi"
      ],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 32,
      "onsetGrid": [
        2,
        16,
        26
      ],
      "accentProfile": [
        0.65,
        0.9,
        0.7
      ],
      "syncopationRating": 0.67,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "meri",
        " kari"
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
      "patternFunction": "Shakuhachi Breath Tone",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Shakuhachi; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "meri",
        "kari",
        "breath"
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
      "id": "jt-15-hichiriki-cadential-turn",
      "worldId": "japanese-traditional",
      "traditionId": "japanese-traditional-gagaku",
      "name": "Hichiriki cadential gesture",
      "family": "Gagaku",
      "category": "cadence",
      "description": "Short hichiriki cadence carrier appropriate to gagaku color; avoid treating it as a Western lead riff.",
      "tags": [
        "hichiriki",
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
        "hichiriki"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        8,
        11,
        13,
        15
      ],
      "accentProfile": [
        0.6,
        0.7,
        0.8,
        1
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": -1,
      "swingPercentage": 50,
      "articulations": [
        "hichiriki",
        " cadence"
      ],
      "density": "medium",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "bridge",
        "coda"
      ],
      "patternFunction": "Hichiriki Cadential Turn",
      "roleDependencies": [],
      "interactionRules": [],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [],
      "provenance": "Authored genre-pack pattern based on Gagaku; designed for engine-level recombination rather than literal transcription.",
      "authenticityTags": [
        "hichiriki",
        "cadence"
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
    "harmonicModel": "modal-center",
    "pitchModel": "gagaku-ryo / minyo-yo / hira-joshi by tradition",
    "timingModel": "breath-and-ma",
    "phraseLengthsBars": [
      1,
      2,
      4
    ],
    "primaryPulse": [
      "ma / silence",
      "heterophonic coordination",
      "attack articulation"
    ],
    "rhythmicPriorities": [
      "ma / silence",
      "heterophonic coordination",
      "attack articulation"
    ],
    "harmonicStrategy": [
      "mode/drone",
      "sustained sonority",
      "cadences as gestures rather than pop loops"
    ],
    "melodicStrategy": [
      "ma-centered motifs",
      "ornamental bends",
      "question-answer / kakeai"
    ],
    "arrangementStrategy": "Jo introduces material, instruments accumulate, kakeai creates contrast, ma clears the field, return closes the cycle.",
    "engineConstraints": [
      "Do not fill every subdivision; do not treat all Japanese traditions as one scale or one ensemble.",
      "Prefer authored genre patterns over generic fallback patterns when an instrument/role match exists.",
      "Use phrase-end variants and section transitions before introducing unrelated cells."
    ],
    "variationStrategy": "Develop density, accent, register, orchestration and phrase position before replacing the core identity."
  },
  "techniques": [
    "ma-aware phrase spacing",
    "ornament density",
    "heterophonic following",
    "terminal glissando"
  ],
  "forms": [
    "jo",
    "theme",
    "development",
    "kakeai",
    "coda"
  ],
  "relationships": [
    "lead ↔ heterophonic answer",
    "koto ↔ shamisen",
    "voice ↔ shamisen response"
  ],
  "songBehaviors": [
    "preserve silence as a musical event",
    "avoid forcing functional Western cadence",
    "use pentatonic/modal contours before chromatic embellishment",
    "Phrase in 1–4 bar units before making a major pattern change.",
    "Prioritize ma / silence and heterophonic coordination as the identity layer.",
    "Use ma-centered motifs and ornamental bends for development rather than generic fills."
  ],
  "instrumentIdeas": {
    "koto": [
      "bright zither plucks, tremolo and glissandi"
    ],
    "shamisen": [
      "dry plectrum attacks and slides"
    ],
    "shakuhachi": [
      "breathy flute lead with portamento"
    ],
    "shō": [
      "sustained reed-organ cluster"
    ],
    "voice": [
      "min'yō / theatrical melodic phrasing"
    ]
  },
  "combinations": [
    "Japanese Traditional + Ambient",
    "Koto + Minimalism",
    "Shamisen + Rock"
  ],
  "danceTags": [
    "listening",
    "festival-fusion"
  ],
  "tuningSystem": "Japanese traditional pitch practice; engine uses 12-TET modal approximation",
  "signatureCell": "Plucked pentatonic figure answered by breathy or bowed heterophony",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "rubato",
    "humanizeJitterMs": 18
  },
  "crossLinks": [
    "Japanese traditional ↔ J-pop / Japanese Rock",
    "Japanese traditional ↔ Ambient"
  ],
  "transformations": [
    "trans-density",
    "trans-anticipation",
    "trans-accent",
    "trans-phrase-position",
    "trans-ensemble-interaction"
  ]
};
