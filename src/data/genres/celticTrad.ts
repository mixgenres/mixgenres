import { GenreWorld } from '../../types';

export const CELTIC_TRAD_WORLD: GenreWorld = {
  "id": "celtic-trad",
  "name": "Celtic Trad",
  "family": "Celtic / Irish / Scottish Traditional",
  "color": "#6b8e72",
  "level": "world",
  "description": "A phrase-led Celtic traditional lens covering Irish and Scottish dance-tune practices: reels, jigs, slip jigs, hornpipes, polkas, slides, marches, airs and strathspeys. It treats tune shape, modal centers, drones, ornament, lift and phrase landmarks as primary, while allowing chord labels and open-fifth accompaniment without forcing functional Western harmony.",
  "traditions": [
    {
      "id": "celtic-trad-reel",
      "worldId": "celtic-trad",
      "name": "Reel",
      "origin": "Ireland / Scotland",
      "era": "18th Century–Present",
      "description": "Fast • 2/2 or 4/4 • Driving\nUpbeat session dance rhythm.\nThe Chieftains · Lunasa",
      "characteristicInstruments": [
        "fiddle",
        "tin-whistle",
        "uilleann-pipes",
        "guitar",
        "bodhran",
        "accordion"
      ],
      "preferredMeters": [
        "4/4",
        "2/2"
      ],
      "tempoRange": [
        108,
        124
      ],
      "keySubstyles": [
        "Irish Session Reel",
        "Scottish Driving Reel"
      ],
      "coreConcepts": [
        "continuous even eighth-note flow",
        "fiddle rolls, cuts, and triplets",
        "driving bodhrán low end",
        "guitar DADGAD modal backing"
      ],
      "rhythmicGrammar": [
        "even 8th-note pulse accented on beats 1 and 3 with subtle lift on upbeat 8ths"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Rapid ornamentation rolls on fiddle over DADGAD guitar strum and bodhran pulse",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "D",
          "D",
          "G",
          "A"
        ],
        "part-a": [
          "D",
          "G",
          "A",
          "D",
          "D",
          "G",
          "A",
          "D"
        ],
        "part-b": [
          "G",
          "D",
          "Em",
          "A",
          "G",
          "D",
          "A",
          "D"
        ],
        "coda": [
          "D",
          "A",
          "D",
          "D"
        ]
      }
    },
    {
      "id": "celtic-trad-jig",
      "worldId": "celtic-trad",
      "name": "Jig",
      "origin": "Ireland / Scotland",
      "era": "Traditional",
      "description": "Bouncy • 6/8 • Compound\nTriple feel dancing tune.\nThe Bothy Band · Solas",
      "characteristicInstruments": [
        "accordion",
        "tin-whistle",
        "fiddle",
        "bodhran",
        "guitar",
        "mandolin"
      ],
      "preferredMeters": [
        "6/8"
      ],
      "tempoRange": [
        110,
        126
      ],
      "keySubstyles": [
        "Double Jig",
        "Slip Jig (9/8)",
        "Single Jig"
      ],
      "coreConcepts": [
        "compound duple lilting bounce",
        "rasping accordion bellows accents",
        "rolling triplet flute articulations",
        "crisp bodhran tipper work"
      ],
      "rhythmicGrammar": [
        "6/8 meter grouped as two dotted quarter beats with buoyant triplet division"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Buoyant 6/8 triple-step lilt with accordion ornament cuts and tipper clicks",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C",
          "D",
          "G"
        ],
        "part-a": [
          "G",
          "C",
          "D",
          "G",
          "G",
          "C",
          "D",
          "G"
        ],
        "part-b": [
          "Em",
          "C",
          "D",
          "G",
          "Em",
          "C",
          "D",
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
      "id": "celtic-trad-air",
      "worldId": "celtic-trad",
      "name": "Air",
      "origin": "Ireland / Scottish Highlands",
      "era": "Ancient / Traditional",
      "description": "Lyrical • Free Meter • Melancholic\nExpressive non-dance instrumental melody.\nPlanxty · Martin Hayes",
      "characteristicInstruments": [
        "fiddle",
        "uilleann-pipes",
        "harp",
        "low-whistle",
        "guitar"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        50,
        72
      ],
      "keySubstyles": [
        "Slow Air",
        "Lament"
      ],
      "coreConcepts": [
        "expressive rubato phrasing",
        "uilleann pipes continuous drone with chanter bends",
        "harp gentle arpeggiations",
        "melancholic Gaelic modal themes"
      ],
      "rhythmicGrammar": [
        "unmetered or rubato melodic flow governed by breath and emotional contour"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Lamenting uilleann chanter bend sustained over deep continuous fifth drone",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "Em"
        ],
        "theme": [
          "Am",
          "G",
          "Am",
          "Em",
          "F",
          "G",
          "Am",
          "Am"
        ],
        "development": [
          "C",
          "G",
          "Am",
          "Em",
          "F",
          "G",
          "Am",
          "Am"
        ],
        "coda": [
          "F",
          "G",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "celtic-trad-sean-nos",
      "worldId": "celtic-trad",
      "name": "Seán-Nós",
      "origin": "Connemara / Munster / Donegal, Ireland",
      "era": "Ancient Roots",
      "description": "Raw • Unaccompanied • Ancient\nOrnamented Gaelic vocal song.\nIarla Ó Lionáird · Muireann Nic Amhlaoibh",
      "characteristicInstruments": [
        "voice",
        "harp",
        "uilleann-pipes",
        "drone"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        45,
        68
      ],
      "keySubstyles": [
        "Connemara Style",
        "Munster Style"
      ],
      "coreConcepts": [
        "unaccompanied solo vocal performance",
        "microtonal ornamentation and nasal timbre",
        "ancient Gaelic narrative poetry",
        "free breath-led meter"
      ],
      "rhythmicGrammar": [
        "free unaccompanied speech rhythm following poetic cadence"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Intricate vocal melisma and microtonal turns in unmetered Gaelic lament",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "verse": [
          "Am",
          "G",
          "Am",
          "G",
          "F",
          "Em",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "celtic-trad-strathspey",
      "worldId": "celtic-trad",
      "name": "Strathspey",
      "origin": "Strathspey Valley, Scotland",
      "era": "18th Century",
      "description": "Staccato • 4/4 • Scottish\nDotted rhythms, Scotch snaps.\nAlasdair Fraser · Silly Wizard",
      "characteristicInstruments": [
        "fiddle",
        "accordion",
        "guitar",
        "bodhran",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        76,
        92
      ],
      "keySubstyles": [
        "Highland Strathspey",
        "Highland Dance Tune"
      ],
      "coreConcepts": [
        "iconic \"Scotch snap\" (16th followed by dotted 8th)",
        "strong stately cadence",
        "driving bow weight on downbeats",
        "crisp piano/guitar chordal backing"
      ],
      "rhythmicGrammar": [
        "heavy dotted rhythms and inverted syncopated snaps on quarter beats"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sharp Scotch snap [16th-dotted 8th] fiddle cut over stately marching bass",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "A",
          "D",
          "E",
          "A"
        ],
        "part-a": [
          "A",
          "D",
          "E",
          "A",
          "A",
          "F#m",
          "D",
          "E"
        ],
        "part-b": [
          "D",
          "A",
          "E",
          "A",
          "D",
          "A",
          "E",
          "A"
        ],
        "coda": [
          "D",
          "E",
          "A",
          "A"
        ]
      }
    },
    {
      "id": "celtic-trad-hornpipe",
      "worldId": "celtic-trad",
      "name": "Hornpipe",
      "origin": "Britain / Ireland",
      "era": "18th Century",
      "description": "Measured • 4/4 • Swung\nHeavy, dotted-note dance step.\nTommy Peoples · Kevin Burke",
      "characteristicInstruments": [
        "fiddle",
        "tin-whistle",
        "accordion",
        "bodhran",
        "guitar",
        "banjo"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        84,
        98
      ],
      "keySubstyles": [
        "Irish Step Hornpipe",
        "Swung Hornpipe"
      ],
      "coreConcepts": [
        "heavily swung dotted eighth-sixteenth pairs",
        "three-beat closing cadence triplets",
        "stately deliberate tempo",
        "intricate finger triplets"
      ],
      "rhythmicGrammar": [
        "dotted swung 8ths with characteristic 3-note cadence at phrase endings"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Swung dotted 8th fiddle phrasing culminating in 3-note rhythmic foot-tap cadence",
      "grooveMechanics": {
        "swingPercentage": 62,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C",
          "D",
          "G"
        ],
        "part-a": [
          "G",
          "C",
          "D",
          "G",
          "G",
          "C",
          "D",
          "G"
        ],
        "part-b": [
          "Em",
          "B7",
          "Em",
          "A7",
          "D",
          "C",
          "D",
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
      "id": "celtic-trad-polka",
      "worldId": "celtic-trad",
      "name": "Polka",
      "origin": "Sliabh Luachra, Ireland",
      "era": "19th Century",
      "description": "Fast • 2/4 • Bright\nSimple, lifted Irish dance.\nSharon Shannon · Sliabh Notes",
      "characteristicInstruments": [
        "accordion",
        "fiddle",
        "tin-whistle",
        "bodhran",
        "guitar"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        120,
        140
      ],
      "keySubstyles": [
        "Sliabh Luachra Polka",
        "Kerry Polka"
      ],
      "coreConcepts": [
        "snappy 2/4 offbeat lift",
        "bright energetic accordion and fiddle unisons",
        "simple memorable melodies",
        "punchy bass downbeats"
      ],
      "rhythmicGrammar": [
        "fast 2/4 with accented second eighth-note of each beat generating bouncy lift"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Bright snappy 2/4 accordion bounce with lifted offbeat accents and bodhran drive",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "D",
          "G",
          "A",
          "D"
        ],
        "part-a": [
          "D",
          "G",
          "A",
          "D",
          "D",
          "G",
          "A",
          "D"
        ],
        "part-b": [
          "G",
          "D",
          "A",
          "D",
          "G",
          "D",
          "A",
          "D"
        ],
        "coda": [
          "G",
          "A",
          "D",
          "D"
        ]
      }
    },
    {
      "id": "celtic-trad-slide",
      "worldId": "celtic-trad",
      "name": "Slide",
      "origin": "Sliabh Luachra (Kerry/Cork), Ireland",
      "era": "Traditional",
      "description": "Fast • 12/8 • Flowing\nKerry region dance rhythm.\nDennis Murphy · Julia Clifford",
      "characteristicInstruments": [
        "fiddle",
        "accordion",
        "tin-whistle",
        "bodhran",
        "guitar"
      ],
      "preferredMeters": [
        "12/8"
      ],
      "tempoRange": [
        128,
        148
      ],
      "keySubstyles": [
        "Kerry Slide",
        "Sliabh Luachra Set Dance"
      ],
      "coreConcepts": [
        "fast 12/8 compound quadruple meter",
        "smooth flowing phrase lines",
        "sliding fiddle fingerings into tonic notes",
        "continuous energetic bodhran roll"
      ],
      "rhythmicGrammar": [
        "four dotted quarter beats per bar with fast driving quarter-eighth division"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Fast rolling 12/8 continuous melody with characteristic fiddle slides into notes",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "A",
          "D",
          "E",
          "A"
        ],
        "part-a": [
          "A",
          "D",
          "E",
          "A",
          "A",
          "D",
          "E",
          "A"
        ],
        "part-b": [
          "D",
          "A",
          "E",
          "A",
          "D",
          "A",
          "E",
          "A"
        ],
        "coda": [
          "D",
          "E",
          "A",
          "A"
        ]
      }
    }
  ],
  "substyles": [
    "Reel",
    "Jig",
    "Air",
    "Seán-Nós",
    "Strathspey",
    "Hornpipe",
    "Polka",
    "Slide"
  ],
  "artists": [
    "The Chieftains",
    "Lunasa",
    "The Bothy Band",
    "Solas",
    "Planxty",
    "Martin Hayes",
    "Iarla Ó Lionáird",
    "Muireann Nic Amhlaoibh",
    "Alasdair Fraser",
    "Silly Wizard",
    "Tommy Peoples",
    "Kevin Burke",
    "Sharon Shannon",
    "Sliabh Notes",
    "Dennis Murphy",
    "Julia Clifford"
  ],
  "concepts": [
    "AABB tune form",
    "modal centers",
    "drone and fifth",
    "ornamented unison",
    "rolls",
    "cuts",
    "crans",
    "triplets",
    "doublings",
    "grace notes",
    "lift",
    "strain change",
    "Scotch snap",
    "dotted rhythm",
    "céilí pulse",
    "set continuity",
    "heterophonic variation"
  ],
  "roles": {
    "pulse": [
      "reel drive",
      "jig compound pulse",
      "polka two-step",
      "march pulse",
      "set continuity"
    ],
    "harmony": [
      "tonic/fifth drone",
      "open fifth dyads",
      "modal parallel support",
      "cadential open sonority"
    ],
    "bass": [
      "drone foundation",
      "sparse tonic/fifth support",
      "phrase-end low response",
      "avoid walking bass"
    ],
    "melody": [
      "ornamented unison",
      "turns",
      "rolls",
      "cuts",
      "crans",
      "triplet lift",
      "cadential variation",
      "strain A/B contrast"
    ],
    "lead": [
      "fiddle lead",
      "uilleann pipe lead",
      "whistle lead",
      "pipe grace-note articulation"
    ],
    "percussion": [
      "bodhrán pulse",
      "bones articulation",
      "light frame-drum support",
      "phrase-end accents"
    ],
    "texture": [
      "harp drone",
      "open fifth bed",
      "sparse sustained field"
    ]
  },
  "patterns": [],
  "techniques": [
    "cut",
    "roll",
    "cran",
    "triplet",
    "grace-note pickup",
    "bowed ornament",
    "bowed drone",
    "pipe grace note",
    "slide into target",
    "strain lift",
    "cadential hold",
    "open-fifth accompaniment",
    "heterophonic doubling"
  ],
  "forms": [
    "AABB reel",
    "AABB jig",
    "AABB hornpipe",
    "AABB polka",
    "AABB march",
    "AABB strathspey",
    "slow air",
    "dance set / tune medley",
    "call-and-response song"
  ],
  "relationships": [
    "melody ↔ fiddle doubling",
    "melody ↔ whistle answer",
    "pipes ↔ drone",
    "bass ↔ drone",
    "bodhrán ↔ phrase pulse",
    "harp ↔ modal center",
    "accordion ↔ fiddle unison"
  ],
  "transformations": [
    "ornament density",
    "strain repetition",
    "register lift",
    "pickup variation",
    "modal center shift",
    "drone persistence",
    "phrase-length breathing",
    "heterophonic shadowing",
    "open-fifth expansion"
  ],
  "songBehaviors": [
    "repeat strains as AABB rather than verse/chorus by default",
    "keep the modal center stable across a tune",
    "increase lift through ornament, doubling and register before adding harmony",
    "allow tune medleys to change material without a conventional chorus drop",
    "let drones and silence persist across phrase boundaries"
  ],
  "engineProfile": {
    "phraseLengthsBars": [
      8,
      16,
      32
    ],
    "primaryPulse": [
      "reel eighths",
      "compound 6/8",
      "compound 9/8",
      "two-step 2/4",
      "dotted hornpipe",
      "Scotch snap"
    ],
    "rhythmicPriorities": [
      "authored tune cell",
      "meter-specific dance step",
      "pickup into strain",
      "phrase-end release",
      "ornament as articulation"
    ],
    "harmonicStrategy": [
      "modal center",
      "tonic/fifth drone",
      "open fifths",
      "sparse chord labels",
      "avoid mandatory functional cadences"
    ],
    "melodicStrategy": [
      "pitch-set led",
      "ornamented single-line melody",
      "heterophonic doubling",
      "strain A/B contrast",
      "cadential neighbor motion"
    ],
    "arrangementStrategy": "Build from the tune outward: establish the modal center and core strain, add a drone or sparse open-fifth support, then layer rhythm and heterophonic doubles. Avoid filling every subdivision or requiring a bass/chord instrument.",
    "engineConstraints": [
      "Do not force melody to chord tones",
      "Do not impose generic swing on reels or jigs",
      "Preserve authored meter-specific grids",
      "Treat drones as structural rather than decorative",
      "Allow sections to repeat the same tune with ornament/register change",
      "Use space as an active phrase boundary"
    ],
    "variationStrategy": "Vary ornament density, register, pickup, bow/pipe articulation and heterophonic timing before changing the underlying tune cell.",
    "harmonicModel": "modal-center",
    "pitchModel": "Celtic modal pitch-set approximation with transposable tonic; Dorian, Mixolydian, Aeolian and major-like collections chosen by tradition/seed",
    "timingModel": "authored-phrase"
  },
  "instrumentIdeas": {
    "fiddle": [
      "ornamented unison",
      "double-stop response",
      "bowed triplet lift",
      "strain-ending variation"
    ],
    "tin-whistle": [
      "cut/roll ornaments",
      "breath-separated phrase",
      "high-register lift"
    ],
    "low-whistle": [
      "long modal line",
      "breath space",
      "cadential turns"
    ],
    "uilleann-pipes": [
      "drone-aware melody",
      "cran/cut-like grace attacks",
      "phrase-end lift"
    ],
    "bagpipes": [
      "sustained chanter line",
      "grace-note attack",
      "drone continuity"
    ],
    "accordion": [
      "light chordal pulse",
      "unison doubling",
      "open fifth support"
    ],
    "concertina": [
      "compact chord pulse",
      "melody doubling",
      "pickup articulation"
    ],
    "celtic-harp": [
      "open fifth drone",
      "arpeggiated modal color",
      "cadential resonance"
    ],
    "bodhran": [
      "low pulse",
      "rim/skin contrast",
      "phrase-end accent"
    ],
    "bones": [
      "offbeat articulation",
      "strain change cue"
    ],
    "bass": [
      "tonic/fifth drone",
      "sparse phrase anchors",
      "no walking foundation"
    ]
  },
  "combinations": [
    "Celtic Trad + Folk",
    "Celtic Trad + Ambient",
    "Celtic Trad + World",
    "Celtic Trad + Rock"
  ],
  "danceTags": [
    "social-partner",
    "listening",
    "festival-fusion"
  ],
  "tuningSystem": "12-tet; modal practice approximated in equal temperament",
  "signatureCell": "Tune-led AABB phrasing with modal center, drone/open fifth support and meter-specific ornamented lift",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed",
    "humanizeJitterMs": 7
  },
  "crossLinks": [
    "Irish Trad ↔ Scottish Trad",
    "Celtic Trad ↔ Folk",
    "Celtic Trad ↔ World"
  ]
};
