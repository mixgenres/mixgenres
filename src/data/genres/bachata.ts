import { GenreWorld } from '../../types';

export const BACHATA_WORLD: GenreWorld = {
  "id": "bachata",
  "name": "Bachata",
  "family": "Caribbean / Latin Dance",
  "color": "#d2768e",
  "level": "world",
  "description": "Dominican and Latin dance tradition defined by Bachata’s 3 structural gears (Derecho verse, Majao chorus, Mambo solo breakdown), lead requinto picking, Merengue tambora/sax jaleos, and hypnotic Colombian Cumbia grooves.",
  "traditions": [
    {
      "id": "bachata-urbana",
      "worldId": "bachata",
      "name": "Urbana",
      "origin": "Bronx, New York / Dominican Republic",
      "era": "1999–Present",
      "description": "Smooth • 4/4 • Guitar-driven\nPop and R&B infused.\nAventura · Romeo Santos",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "bongos",
        "guiro",
        "voice",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        124,
        136
      ],
      "keySubstyles": [
        "Urban Bachata",
        "Bachata Pop",
        "Bachata R&B"
      ],
      "coreConcepts": [
        "high-register requinto arpeggiations with chorus FX",
        "melodic 5-string electric bass runs",
        "bongó martillo patterns",
        "poignant bilingual vocals"
      ],
      "rhythmicGrammar": [
        "requinto continuous 16th-note arpeggiation over syncopated bass on beat 4 and martillo bongo accent on 4"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Requinto chorus-effect arpeggio dancing over syncopated bongo martillo",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "C",
          "G"
        ],
        "derecho": [
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G"
        ],
        "majao": [
          "Dm",
          "G",
          "C",
          "Am",
          "Dm",
          "E7",
          "Am",
          "Am"
        ],
        "mambo": [
          "F",
          "G",
          "Em",
          "Am",
          "F",
          "G",
          "Am",
          "Am"
        ],
        "coda": [
          "Am",
          "F",
          "C",
          "G"
        ]
      }
    },
    {
      "id": "bachata-tradicional",
      "worldId": "bachata",
      "name": "Tradicional",
      "origin": "Dominican Republic (Campesino Roots)",
      "era": "1960s–1980s",
      "description": "Fast • Arpeggiated • Raw\nAcoustic guitar and bongos.\nLuis Vargas · Anthony Santos",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "bongos",
        "guiro",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        148
      ],
      "keySubstyles": [
        "Bachata Clásica",
        "Amargue",
        "Guitarra y Bongó"
      ],
      "coreConcepts": [
        "acoustic requinto with thumb-pick punch",
        "driving wooden güira rhythm",
        "raw amargue vocal delivery",
        "fast syncopated basslines"
      ],
      "rhythmicGrammar": [
        "fast derecho to majao shifts with high-tempo martillo and bongo repiques"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Punchy acoustic requinto syncopations over fast wooden güiro scraping",
      "grooveMechanics": {
        "swingPercentage": 50,
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
        "derecho": [
          "Dm",
          "Gm",
          "A7",
          "Dm",
          "Gm",
          "C7",
          "F",
          "A7"
        ],
        "majao": [
          "Gm",
          "C7",
          "F",
          "Dm",
          "Gm",
          "A7",
          "Dm",
          "Dm"
        ],
        "mambo": [
          "A7",
          "A7",
          "Dm",
          "Dm",
          "A7",
          "A7",
          "Dm",
          "Dm"
        ],
        "coda": [
          "A7",
          "A7",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "bachata-sensual",
      "worldId": "bachata",
      "name": "Sensual",
      "origin": "Cadiz, Spain / European Social Circuit",
      "era": "2005–Present",
      "description": "Slow • Expressive • Body rolls\nModern European social style.\nDani J · DJ Tronky",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "synth",
        "bongos",
        "guiro",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        115,
        126
      ],
      "keySubstyles": [
        "Bachata Sensual",
        "European Social Bachata",
        "Remix Sensual"
      ],
      "coreConcepts": [
        "expressive dynamic breaks and pauses",
        "deep sub-bass frequency support",
        "fluid requinto passages",
        "dramatic vocal rubato"
      ],
      "rhythmicGrammar": [
        "smooth continuous 4-beat pulse with dramatic silence cuts and body-roll rhythm cues"
      ],
      "danceTags": [
        "social-partner",
        "sensual-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Smooth legato requinto phrasing followed by dramatic bass pause and drop",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Fm",
          "Db",
          "Ab",
          "Eb"
        ],
        "verse": [
          "Fm",
          "Db",
          "Ab",
          "Eb",
          "Fm",
          "Db",
          "Ab",
          "Eb"
        ],
        "chorus": [
          "Dbmaj7",
          "Eb",
          "Fm",
          "Cm",
          "Dbmaj7",
          "Eb",
          "Fm",
          "Fm"
        ],
        "breakdown": [
          "Db",
          "Eb",
          "Fm",
          "Fm"
        ],
        "coda": [
          "Db",
          "Eb",
          "Fm",
          "Fm"
        ]
      }
    },
    {
      "id": "bachata-moderna",
      "worldId": "bachata",
      "name": "Bachata Moderna",
      "origin": "Dominican Republic / USA",
      "era": "2000s–2010s",
      "description": "Balanced • Pop-infused • Clear Syncopation\nVersatile pop turn-pattern timing.\nJohnny Sky · Toby Love",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "bongos",
        "guiro",
        "synth",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        122,
        134
      ],
      "keySubstyles": [
        "Pop Bachata",
        "Turn-Pattern Bachata"
      ],
      "coreConcepts": [
        "clean modern studio production",
        "balanced derecho/majao transitions",
        "catchy pop hooks",
        "crisp metal güira accents"
      ],
      "rhythmicGrammar": [
        "clear 4-beat pulse with defined syncopation on beat 4 and bright requinto ornamentation"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Crisp pop guitar hooks blending with tight modern bongo-güira groove",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G",
          "Am",
          "F"
        ],
        "verse": [
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F"
        ],
        "chorus": [
          "F",
          "G",
          "Em",
          "Am",
          "F",
          "G",
          "C",
          "C"
        ],
        "coda": [
          "Am",
          "F",
          "G",
          "C"
        ]
      }
    },
    {
      "id": "bachata-bolero",
      "worldId": "bachata",
      "name": "Bolero Bachata",
      "origin": "Santo Domingo, Dominican Republic",
      "era": "1950s–1960s",
      "description": "Slow • Vintage • Lyrical\n50s romantic precursor style.\nJose Manuel Calderon · Leonardo Paniagua",
      "characteristicInstruments": [
        "guitar",
        "upright-bass",
        "bongos",
        "maracas",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        96,
        114
      ],
      "keySubstyles": [
        "Bolero Campesino",
        "Early Bachata"
      ],
      "coreConcepts": [
        "nylon string guitar fingerpicking",
        "warm acoustic upright bass",
        "romantic sentimental lyrical themes",
        "soft wooden bongo accompaniment"
      ],
      "rhythmicGrammar": [
        "gentle bolero syncopation with delicate bongo martillo and soft maraca shimmer"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Romantic nylon-string guitar arpeggios over soft acoustic bolero pulse",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "B7",
          "Em",
          "B7"
        ],
        "verse": [
          "Em",
          "Am",
          "D7",
          "G",
          "C",
          "F#7",
          "B7",
          "Em"
        ],
        "chorus": [
          "Am",
          "D7",
          "G",
          "C",
          "Am",
          "B7",
          "Em",
          "Em"
        ],
        "coda": [
          "Am",
          "B7",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "bachata-bachatango",
      "worldId": "bachata",
      "name": "Bachatango",
      "origin": "Buenos Aires / Dominican Republic / Europe",
      "era": "2000s–Present",
      "description": "Dramatic • Bandoneón • Fusion\nTango strings with bachata rhythm.\nGrace Jones · Steve Morrill",
      "characteristicInstruments": [
        "bandoneon",
        "violin",
        "guitar",
        "bass",
        "bongos",
        "guiro"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        118,
        130
      ],
      "keySubstyles": [
        "Tango-Bachata Crossover",
        "Dramatic Bachatango"
      ],
      "coreConcepts": [
        "bandoneón dramatic fraseo & arrastres",
        "staccato violin fills",
        "bachata derecho bongo rhythm",
        "minor harmonic progressions"
      ],
      "rhythmicGrammar": [
        "tango staccato accents layered over driving 4-beat bachata bongo/güira groove"
      ],
      "danceTags": [
        "social-partner",
        "sensual-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Dramatic bandoneón drag resolving into driving bachata bongo beat",
      "grooveMechanics": {
        "swingPercentage": 50,
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
          "Gm",
          "A7",
          "Dm",
          "Bb",
          "E7",
          "A7",
          "Dm"
        ],
        "chorus": [
          "F",
          "C7",
          "F",
          "A7",
          "Dm",
          "Gm",
          "A7",
          "Dm"
        ],
        "coda": [
          "A7",
          "A7",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "bachata-campestre",
      "worldId": "bachata",
      "name": "Campestre",
      "origin": "Rural Cibao, Dominican Republic",
      "era": "1970s–1980s",
      "description": "Raw • Unpolished • Folk\nHinterland Dominican guitar roots.\nEdilio Paredes · Leonardo Paniagua",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "bongos",
        "guiro",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        125,
        142
      ],
      "keySubstyles": [
        "Música de Guardia",
        "Bachata Rural"
      ],
      "coreConcepts": [
        "unfiltered acoustic guitar bite",
        "intense amargue emotion",
        "relentless guira scraping",
        "folk storytelling lyrics"
      ],
      "rhythmicGrammar": [
        "fast earthy derecho and energetic mambo guitar picados"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sharp rustic requinto picados over earthy driving Cibao percussion",
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
        "chorus": [
          "Dm",
          "G",
          "C",
          "Am",
          "Dm",
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
      "id": "bachata-merengue-de-guitarra",
      "worldId": "bachata",
      "name": "Merengue de Guitarra",
      "origin": "Dominican Republic",
      "era": "1970s–Present",
      "description": "Fast • Driving Tambora • Guitar-led\nHigh-tempo fingerpicked guitar rhythm.\nJoan Soriano · Antony Santos",
      "characteristicInstruments": [
        "guitar",
        "bass",
        "drums",
        "guiro",
        "voice"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        140,
        165
      ],
      "keySubstyles": [
        "Guitar Merengue",
        "Merengue Campesino"
      ],
      "coreConcepts": [
        "rapid 16th-note requinto lead riffs",
        "driving tambora repique patterns",
        "energetic bass walking lines",
        "fiesta party atmosphere"
      ],
      "rhythmicGrammar": [
        "fast 2/4 tambora galloping rhythm with high-speed guitar ostinatos"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "High-speed requinto arpeggio over fast galloping tambora drum groove",
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
          "G7",
          "C",
          "G7",
          "F",
          "C",
          "G7",
          "C"
        ],
        "mambo": [
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
          "G7",
          "G7",
          "C",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Urbana",
    "Tradicional",
    "Sensual",
    "Bachata Moderna",
    "Bolero Bachata",
    "Bachatango",
    "Campestre",
    "Merengue de Guitarra"
  ],
  "artists": [
    "Aventura",
    "Romeo Santos",
    "Luis Vargas",
    "Anthony Santos",
    "Dani J",
    "DJ Tronky",
    "Johnny Sky",
    "Toby Love",
    "Jose Manuel Calderon",
    "Leonardo Paniagua",
    "Grace Jones",
    "Steve Morrill",
    "Edilio Paredes",
    "Joan Soriano"
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
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
      "id": "cumbia-bass-groove",
      "worldId": "bachata",
      "traditionId": "latin-cumbia",
      "name": "Cumbia Syncopated Bassline",
      "family": "Cumbia Bass",
      "category": "ostinato",
      "description": "Hypnotic syncopated cumbia bass hitting on the upbeat of 2 and anticipated 4.",
      "tags": [
        "cumbia",
        "bass",
        "syncopated",
        "colombia"
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
        {
          "id": "cumbia-bass-villera-synth",
          "parentPatternId": "cumbia-bass-groove",
          "name": "Cumbia Villera Punchy Synth Bass",
          "variationType": "dense",
          "probability": 0.45,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.8,
            0.7,
            1
          ],
          "description": "Added 8th note pump for modern urban cumbia."
        },
        {
          "id": "cumbia-bass-groove-v-02",
          "parentPatternId": "cumbia-bass-groove",
          "name": "Cumbia Syncopated Bassline — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.86,
            1,
            0.76,
            1
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.98,
            0.73,
            0.96
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
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "bachata-bass-derecho-v-01",
          "parentPatternId": "bachata-bass-derecho",
          "name": "Bass Derecho — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.85,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.77,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "bachata-bass-derecho-v-02",
          "parentPatternId": "bachata-bass-derecho",
          "name": "Bass Derecho — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            6,
            8,
            12
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.8099999999999999,
            1
          ],
          "velocityProfile": [
            1,
            0.83,
            0.78,
            0.96
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "bachata-bass-derecho-v-03",
          "parentPatternId": "bachata-bass-derecho",
          "name": "Bass Derecho — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.88,
            0.83,
            0.9299999999999999,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.85,
            0.8,
            0.9,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "bachata-bass-majao-v-01",
          "parentPatternId": "bachata-bass-majao",
          "name": "Bass Majao — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            12
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
          "id": "bachata-bass-majao-v-02",
          "parentPatternId": "bachata-bass-majao",
          "name": "Bass Majao — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.78,
            0.88
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        },
        {
          "id": "bachata-bass-majao-v-03",
          "parentPatternId": "bachata-bass-majao",
          "name": "Bass Majao — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            8,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.83,
            0.9299999999999999,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "bachata-bongo-derecho-v-01",
          "parentPatternId": "bachata-bongo-derecho",
          "name": "Bongo Derecho — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12
          ],
          "accentProfile": [
            0.6499999999999999,
            0.5499999999999999,
            0.7999999999999999,
            0.5499999999999999,
            0.6499999999999999
          ],
          "velocityProfile": [
            0.5700000000000001,
            0.47000000000000003,
            0.7200000000000001,
            0.47000000000000003,
            0.5700000000000001
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
          "id": "bachata-bongo-derecho-v-02",
          "parentPatternId": "bachata-bongo-derecho",
          "name": "Bongo Derecho — accent shift",
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
            15
          ],
          "accentProfile": [
            0.6599999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.6799999999999999,
            0.6599999999999999,
            0.6799999999999999,
            0.96,
            0.73
          ],
          "velocityProfile": [
            0.71,
            0.53,
            0.78,
            0.6100000000000001,
            0.63,
            0.53,
            1,
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
        },
        {
          "id": "bachata-bongo-derecho-v-03",
          "parentPatternId": "bachata-bongo-derecho",
          "name": "Bongo Derecho — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
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
            0.6799999999999999,
            0.58,
            0.83,
            0.58,
            0.6799999999999999,
            0.58,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.65,
            0.55,
            0.8,
            0.55,
            0.65,
            0.55,
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
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "bachata-bongo-majao-v-02",
          "parentPatternId": "bachata-bongo-majao",
          "name": "Bongo Majao — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.86,
            1,
            0.86,
            1
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.9299999999999999,
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
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "bachata-guira-majao-v-01",
          "parentPatternId": "bachata-guira-majao",
          "name": "Güira Majao — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.7999999999999999,
            0.5499999999999999,
            0.8999999999999999,
            0.5499999999999999,
            0.7999999999999999,
            0.5499999999999999,
            0.95,
            0.5499999999999999,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.42,
            0.7200000000000001,
            0.42,
            0.8200000000000001,
            0.42,
            0.7200000000000001,
            0.42,
            0.87,
            0.42,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "bachata-guira-majao-v-02",
          "parentPatternId": "bachata-guira-majao",
          "name": "Güira Majao — accent shift",
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
            0.96,
            0.6799999999999999,
            0.8099999999999999,
            0.6799999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.6799999999999999,
            0.96,
            0.6799999999999999,
            0.8099999999999999,
            0.6799999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.73
          ],
          "velocityProfile": [
            1,
            0.48,
            0.78,
            0.56,
            0.88,
            0.48,
            0.8600000000000001,
            0.48,
            0.9299999999999999,
            0.56,
            0.78,
            0.48,
            0.96,
            0.48,
            0.78,
            0.6100000000000001
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
      "weight": 1,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
        {
          "id": "bachata-segunda-derecho-v-01",
          "parentPatternId": "bachata-segunda-derecho",
          "name": "Segunda Guitar — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            10,
            14
          ],
          "accentProfile": [
            0.83,
            0.9099999999999999,
            0.83
          ],
          "velocityProfile": [
            0.74,
            0.8400000000000001,
            0.74
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "bachata-segunda-derecho-v-02",
          "parentPatternId": "bachata-segunda-derecho",
          "name": "Segunda Guitar — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.84,
            1,
            0.84,
            1
          ],
          "velocityProfile": [
            0.8799999999999999,
            0.9,
            0.7999999999999999,
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
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
      "id": "cumbia-guiro",
      "worldId": "bachata",
      "traditionId": "latin-cumbia",
      "name": "Cumbia Güiro",
      "family": "Guiro",
      "category": "groove",
      "description": "Classic cumbia shh-shh-pah scraper rhythm.",
      "tags": [
        "cumbia",
        "guiro",
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
        {
          "id": "cumbia-guiro-v-01",
          "parentPatternId": "cumbia-guiro",
          "name": "Cumbia Güiro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.7,
            0.7,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.62,
            0.62,
            0.87,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "cumbia-guiro-v-02",
          "parentPatternId": "cumbia-guiro",
          "name": "Cumbia Güiro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            2,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.71,
            0.83,
            0.96,
            0.83,
            0.71,
            1
          ],
          "velocityProfile": [
            0.76,
            0.6799999999999999,
            0.9299999999999999,
            0.76,
            0.6799999999999999,
            0.9299999999999999
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
      "weight": 1,
      "provenance": "Bachata catalog rebuild: retained source material or generated structural support pattern.",
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
      "syncopationRating": 0.5714285714285714,
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
        {
          "id": "bachata-roster-10-v-01",
          "parentPatternId": "bachata-roster-10",
          "name": "Derecho Texture — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            7,
            11,
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
          "id": "bachata-roster-10-v-02",
          "parentPatternId": "bachata-roster-10",
          "name": "Derecho Texture — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
      "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
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
        0.8999999999999999,
        0.62,
        0.95
      ],
      "syncopationRating": 0.7142857142857143,
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
          "id": "bachata-call-11-v-01",
          "parentPatternId": "bachata-call-11",
          "name": "Majao Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            5,
            8,
            12,
            15
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
          "id": "bachata-call-11-v-02",
          "parentPatternId": "bachata-call-11",
          "name": "Majao Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
          "id": "bachata-call-11-v-03",
          "parentPatternId": "bachata-call-11",
          "name": "Majao Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            3,
            5,
            8,
            9,
            12,
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
      "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.7142857142857143,
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
          "id": "bachata-anchor-12-v-01",
          "parentPatternId": "bachata-anchor-12",
          "name": "Mambo Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            13
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
          "id": "bachata-anchor-12-v-02",
          "parentPatternId": "bachata-anchor-12",
          "name": "Mambo Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
      "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.5714285714285714,
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
          "id": "bachata-comp-13-v-01",
          "parentPatternId": "bachata-comp-13",
          "name": "Coro Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            2,
            6,
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
          "id": "bachata-comp-13-v-02",
          "parentPatternId": "bachata-comp-13",
          "name": "Coro Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
      "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.8571428571428571,
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
          "id": "bachata-intro-14-v-01",
          "parentPatternId": "bachata-intro-14",
          "name": "Requinto Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            6,
            8,
            13,
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
          "id": "bachata-intro-14-v-02",
          "parentPatternId": "bachata-intro-14",
          "name": "Requinto Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
        },
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
      "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.5714285714285714,
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
        {
          "id": "bachata-verse-15-v-01",
          "parentPatternId": "bachata-verse-15",
          "name": "Derecho Verse Variation — sparse variation",
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
          "id": "bachata-verse-15-v-02",
          "parentPatternId": "bachata-verse-15",
          "name": "Derecho Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
      "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
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
      "syncopationRating": 0.8571428571428571,
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
          "id": "bachata-chorus-16-v-01",
          "parentPatternId": "bachata-chorus-16",
          "name": "Majao Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            1,
            5,
            8,
            13,
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
          "id": "bachata-chorus-16-v-02",
          "parentPatternId": "bachata-chorus-16",
          "name": "Majao Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
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
        },
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
      "provenance": "GenreDAW catalog rebuild from existing Bachata world data; generated to cover missing musical functions without runtime AI.",
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
      "instruments": [
        "voice"
      ],
      "compatibleRoles": [
        "voice",
        "lead"
      ],
      "compatibleInstruments": [
        "voice"
      ],
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
        {
          "id": "bachata-voice-phrasing-v-final-accent",
          "parentPatternId": "bachata-voice-phrasing",
          "name": "Bachata Vocal Phrasing — accent shift",
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Bachata.",
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
    "Bachata + R&B",
    "Cumbia + Dub / Reggae",
    "Merengue + Funk",
    "Latin Dance + Jazz"
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
    "Bachata ↔ R&B",
    "Bachata ↔ Dembow / Reggaeton"
  ]
};
