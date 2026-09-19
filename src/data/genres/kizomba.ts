import { GenreWorld } from '../../types';

export const KIZOMBA_WORLD: GenreWorld = {
  "id": "kizomba",
  "name": "Kizomba",
  "family": "African / Angolan",
  "color": "#c86d3b",
  "level": "world",
  "description": "The sensual partner dance tradition of Angola and PALOP nations: deep batida kick pulse, dikanza bamboo scraper, tarraxinha sub-bass drops, Semba guitar lines, and modern Urban Kiz electronic textures.",
  "traditions": [
    {
      "id": "kizomba-semba",
      "worldId": "kizomba",
      "name": "Semba Tradicional & Clássica",
      "origin": "Angola",
      "era": "1980s–Present",
      "description": "The Angolan heartbeat of partner dance: lively Semba rhythmic swing, dikanza bamboo scraper, warm bass counterlines, and rich Portuguese/Kimbundu vocal storytelling.",
      "characteristicInstruments": [
        "bass",
        "guitar",
        "electric-guitar",
        "percussion",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        108
      ],
      "keySubstyles": [
        "Semba Tradicional",
        "Kizomba Clássica",
        "Passada"
      ],
      "coreConcepts": [
        "batida kick pulse",
        "dikanza scraper articulation",
        "semba interlocking guitar lines",
        "sensual vocal phrasing"
      ],
      "rhythmicGrammar": [
        "batida syncopated kick pattern [0, 6, 8, 12, 14]",
        "continuous 16th dikanza scraper rasp"
      ],
      "danceTags": [
        "social-partner",
        "blues-fusion-compatible",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Syncopated batida kick [0,6,8,12,14] with continuous 16th dikanza scraper and semba guitar",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Dm",
          "G",
          "C"
        ],
        "verse": [
          "Am",
          "Dm",
          "G",
          "C"
        ],
        "chorus": [
          "F",
          "G",
          "Em",
          "Am"
        ],
        "solo": [
          "Dm",
          "G",
          "C",
          "Am"
        ],
        "coda": [
          "Am",
          "Dm",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "kizomba-tarraxinha",
      "worldId": "kizomba",
      "name": "Tarraxinha",
      "origin": "Angola / Lisbon",
      "era": "1990s–Present",
      "description": "Heavy electronic sub-bass, stripped-back minimalist percussion, and slow hypnotic tempo designed for intimate close body isolations.",
      "characteristicInstruments": [
        "bass",
        "synth",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        80,
        95
      ],
      "keySubstyles": [
        "Tarraxo",
        "Ghetto Tarraxinha",
        "Tarraxa"
      ],
      "coreConcepts": [
        "sub-bass pitch drops",
        "minimalistic space",
        "accented hip articulation"
      ],
      "rhythmicGrammar": [
        "heavy sub hit on 1",
        "syncopated pickup kicks"
      ],
      "danceTags": [
        "social-partner",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Slow heavy electronic sub-bass drops with minimal syncopated pickup kicks",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Bb",
          "Gm",
          "A7"
        ],
        "verse": [
          "Dm",
          "Bb",
          "Gm",
          "A7"
        ],
        "chorus": [
          "Bb",
          "C",
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
      "id": "kizomba-urban-kiz",
      "worldId": "kizomba",
      "name": "Urban Kiz",
      "origin": "France / Europe",
      "era": "2010s–Present",
      "description": "Modern European evolution blending Kizomba syncopation with R&B, electronic trap textures, sudden syncopated stops, and linear footwork.",
      "characteristicInstruments": [
        "synth",
        "drums",
        "bass",
        "keys"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        85,
        102
      ],
      "keySubstyles": [
        "Urban Kiz Fusion",
        "Kizomba R&B",
        "Douceur"
      ],
      "coreConcepts": [
        "linear dynamic changes",
        "syncopated breaks and pauses",
        "atmospheric synth pads"
      ],
      "rhythmicGrammar": [
        "electronic batida",
        "syncopated ghost hi-hats",
        "sudden stop-time cadences"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Electronic batida beat with sudden syncopated stop-time cuts and ambient pads",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Cm",
          "Ab",
          "Eb",
          "Bb"
        ],
        "verse": [
          "Cm",
          "Ab",
          "Eb",
          "Bb"
        ],
        "chorus": [
          "Ab",
          "Bb",
          "Cm",
          "Gm"
        ],
        "solo": [
          "Fm",
          "Ab",
          "Cm",
          "Bb"
        ],
        "coda": [
          "Cm",
          "Ab",
          "Eb",
          "Bb"
        ]
      }
    }
  ],
  "substyles": [
    "Semba Tradicional",
    "Kizomba Clássica",
    "Tarraxinha",
    "Urban Kiz",
    "Ghetto Zouk",
    "Passada"
  ],
  "artists": [
    "Eduardo Paim",
    "Bonga",
    "Nelson Freitas",
    "Anselmo Ralph",
    "Matias Damásio",
    "Kaysha"
  ],
  "concepts": [
    "batida kick pulse",
    "dikanza bamboo scraper",
    "tarraxinha sub-bass",
    "sensual vocal phrasing",
    "semba guitar arpeggio"
  ],
  "roles": {
    "bass": [
      "deep tarraxinha sub-bass",
      "melodic semba bassline",
      "batida sub-pulse"
    ],
    "guitar": [
      "semba lead arpeggios",
      "syncopated rhythmic guitar lines"
    ],
    "keys": [
      "atmospheric synth pads",
      "DX7 electric piano chords"
    ],
    "drums": [
      "batida kick and rimshot groove",
      "hi-hat 16th shuffles",
      "dikanza scrape"
    ],
    "voice": [
      "Portuguese and Kimbundu lyric phrasing",
      "sensual vocal call and response"
    ]
  },
  "patterns": [
    {
      "id": "kizomba-batida-groove",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Kizomba Batida & Sub-Kick Beat",
      "family": "Kizomba Drumming",
      "category": "break",
      "description": "The hypnotic heartbeat of Kizomba: low sub-kick and rimshot combo with dikanza scraper rustle.",
      "tags": [
        "kizomba",
        "batida",
        "dikanza",
        "drums",
        "angola"
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
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.82,
        0.94,
        0.72,
        0.88
      ],
      "velocityProfile": [
        0.95,
        0.78,
        0.88,
        0.68,
        0.82
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "tarraxinha-sub-drop",
          "parentPatternId": "kizomba-batida-groove",
          "name": "Tarraxinha Minimal Sub Drop",
          "variationType": "breakdown",
          "probability": 0.5,
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            1,
            0.92,
            0.86
          ],
          "description": "Stripped-down heavy electronic sub-bass kick for intimate slow tarraxinha movements."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "id": "kizomba-dikanza-scraper",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Dikanza Scraper",
      "family": "Percussion",
      "category": "cadence",
      "description": "Authentic Angolan dikanza (reco-reco / bamboo scraper) syncopated rasping strokes.",
      "tags": [
        "kizomba",
        "semba",
        "dikanza",
        "percussion",
        "angola"
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
        7,
        10,
        12,
        15
      ],
      "accentProfile": [
        0.76,
        0.94,
        0.72,
        0.88,
        0.82,
        0.94
      ],
      "velocityProfile": [
        0.72,
        0.88,
        0.68,
        0.84,
        0.76,
        0.88
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
      "id": "kizomba-semba-guitar",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Semba Guitar Arpeggio",
      "family": "Guitar",
      "category": "groove",
      "description": "Fast intricate African guitar lines and syncopated arpeggios answering the vocal phrase.",
      "tags": [
        "kizomba",
        "semba",
        "guitar",
        "angola"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar",
        "electric-guitar"
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
        3,
        6,
        9,
        12,
        14
      ],
      "accentProfile": [
        0.98,
        0.74,
        0.88,
        0.74,
        0.92,
        0.82
      ],
      "velocityProfile": [
        0.92,
        0.7,
        0.84,
        0.7,
        0.88,
        0.76
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
          "id": "kizomba-interaction-1",
          "worldId": "kizomba",
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
      "id": "kizomba-tarraxinha-sub",
      "worldId": "kizomba",
      "traditionId": "kizomba-tarraxinha",
      "name": "Tarraxinha Sub-Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Heavy syncopated sub-bass pulse anchoring sensual slow movement and physical isolations.",
      "tags": [
        "kizomba",
        "tarraxinha",
        "sub-bass",
        "bass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
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
        6,
        12
      ],
      "accentProfile": [
        1,
        0.88,
        0.82
      ],
      "velocityProfile": [
        0.96,
        0.84,
        0.78
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
          "id": "kizomba-tarraxinha-sub-v-01",
          "parentPatternId": "kizomba-tarraxinha-sub",
          "name": "Tarraxinha Sub-Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.95,
            0.83
          ],
          "velocityProfile": [
            0.88,
            0.76
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
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
          "id": "kizomba-interaction-2",
          "worldId": "kizomba",
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
      "id": "kizomba-kick-batida",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Kizomba Kick Batida",
      "family": "Beat",
      "category": "groove",
      "description": "Classic syncopated kizomba batida kick pattern driving the dance floor.",
      "tags": [
        "kizomba",
        "kick",
        "batida",
        "drums"
      ],
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
        0,
        6,
        10,
        14
      ],
      "accentProfile": [
        1,
        0.86,
        0.92,
        0.78
      ],
      "velocityProfile": [
        0.95,
        0.82,
        0.86,
        0.74
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "kizomba-interaction-3",
          "worldId": "kizomba",
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
      "id": "kizomba-hats",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Kizomba Hi-Hats",
      "family": "Beat",
      "category": "groove",
      "description": "16th note hi-hats with subtle swing and offbeat articulation.",
      "tags": [
        "kizomba",
        "hihat",
        "drums"
      ],
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
        0.92,
        0.62,
        0.82,
        0.64,
        0.88,
        0.62,
        0.82,
        0.68
      ],
      "velocityProfile": [
        0.88,
        0.58,
        0.78,
        0.58,
        0.82,
        0.58,
        0.78,
        0.62
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "drums"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "kizomba-interaction-4",
          "worldId": "kizomba",
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
      "id": "kizomba-urban-synth-pulse",
      "worldId": "kizomba",
      "traditionId": "kizomba-urban-kiz",
      "name": "Urban Kiz Synth Pulse",
      "family": "Synth",
      "category": "groove",
      "description": "Polished electronic synth pulse and atmospheric pad stabs in modern European Urban Kiz.",
      "tags": [
        "kizomba",
        "urban-kiz",
        "synth",
        "keys"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys",
        "synth"
      ],
      "instruments": [
        "keys",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        5,
        8,
        11,
        14
      ],
      "accentProfile": [
        0.85,
        0.95,
        0.8,
        0.9,
        0.75
      ],
      "velocityProfile": [
        0.8,
        0.9,
        0.75,
        0.85,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "keys"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "kizomba-interaction-5",
          "worldId": "kizomba",
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
      "id": "kizomba-vocal-comping",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Kizomba Vocal Phrase Response",
      "family": "Voice",
      "category": "groove",
      "description": "Sensual vocal phrase answers and smooth Portuguese lyric pocketing.",
      "tags": [
        "kizomba",
        "voice",
        "comping"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "voice"
      ],
      "instruments": ["voice"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        7,
        12,
        15
      ],
      "accentProfile": [
        0.92,
        0.85,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.88,
        0.8,
        0.9,
        0.75
      ],
      "density": "sparse",
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "voice"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "articulations": [
        "breath",
        "phrase-end"
      ]
    },
    {
      "id": "kizomba-phrase-9",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Hook Phrase",
      "family": "Hook",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around soft synth comping and the hook vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "hook",
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
        1,
        4,
        7,
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
      "syncopationRating": 0.71,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
        "section-dependent",
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "hook"
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
      "id": "kizomba-call-10",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Kizomba Bass Response",
      "family": "Kizomba Bass",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around semba and the kizomba bass vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "kizomba-bass",
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
        2,
        5,
        8,
        9,
        12,
        14
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
      "syncopationRating": 0.57,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
        "section-dependent",
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "kizomba-bass"
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
      "id": "kizomba-anchor-11",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Semba Anchor",
      "family": "Semba",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around tarraxinha and the semba vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "semba",
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
        3,
        6,
        9,
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
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
        "section-dependent",
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "semba"
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
      "id": "kizomba-comp-12",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Call Comping",
      "family": "Call",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around syncopated kick and the call vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "call",
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
        "keys"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "keys"
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
      "syncopationRating": 0.71,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
        "section-dependent",
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "call"
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
      "id": "kizomba-intro-13",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Drop Intro",
      "family": "Drop",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around vocal space and the drop vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "drop",
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
        "keys"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "guitar",
        "keys"
      ],
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
        14,
        15
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
        "section-dependent",
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
          "id": "kizomba-intro-13-v-03",
          "parentPatternId": "kizomba-intro-13",
          "name": "Drop Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            6,
            7,
            10,
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "drop"
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
      "id": "kizomba-verse-14",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Hook Verse Variation",
      "family": "Hook",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around soft synth comping and the hook vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "hook",
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
        "bass"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "bass"
      ],
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
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
        "section-dependent",
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
        
        ],
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "hook"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "kizomba-chorus-15",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Kizomba Bass Chorus Lift",
      "family": "Kizomba Bass",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around semba and the kizomba bass vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "kizomba-bass",
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
        0,
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
      "anticipationOffset": 1,
      "swingPercentage": 50,
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
        "section-dependent",
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
          "id": "kizomba-chorus-15-v-03",
          "parentPatternId": "kizomba-chorus-15",
          "name": "Kizomba Bass Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            1,
            2,
            4,
            8,
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "kizomba-bass"
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
      "id": "kizomba-bridge-16",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Semba Bridge",
      "family": "Semba",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around tarraxinha and the semba vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "semba",
        "bridge",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "lead"
      ],
      "instruments": [
        "guitar",
        "keys"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
      ],
      "compatibleInstruments": [
        "guitar",
        "keys"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
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
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
      ],
      "density": "dense",
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "bridge",
        "interlude",
        "development"
      ],
      "harmonicContext": [
        "tonal",
        "section-dependent",
        "tonal or modal context"
      ],
      "roleDependencies": [
        "harmony",
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "kizomba-bridge-16-v-03",
          "parentPatternId": "kizomba-bridge-16",
          "name": "Semba Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            10,
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "semba"
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
      "id": "kizomba-fill-17",
      "worldId": "kizomba",
      "traditionId": "kizomba-semba",
      "name": "Call Fill",
      "family": "Call",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around syncopated kick and the call vocabulary of Kizomba.",
      "tags": [
        "kizomba",
        "call",
        "fill",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "fill",
        "drums"
      ],
      "instruments": [
        "drums",
        "percussion"
      ],
      "compatibleRoles": [
        "fill",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion"
      ],
      "canCrossRole": true,
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
        0.72,
        0.78,
        0.84,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        0.84,
        1
      ],
      "syncopationRating": 0,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "fill"
      ],
      "density": "dense",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "pre-chorus",
        "turnaround",
        "ending"
      ],
      "harmonicContext": [
        "tonal",
        "section-dependent",
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
          "id": "kizomba-fill-17-v-03",
          "parentPatternId": "kizomba-fill-17",
          "name": "Call Fill — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.7,
            0.76,
            0.82,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            1,
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
      "provenance": "Kizomba genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "kizomba",
        "call"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "kizomba-tarraxinha-batida",
      "worldId": "kizomba",
      "traditionId": "kizomba-tarraxinha",
      "name": "Tarraxinha Heavy Sub Batida",
      "family": "Drums",
      "category": "groove",
      "description": "Slow, heavy 85bpm minimalist electronic kick pulse with syncopated pickup kicks designed for intimate body isolations.",
      "tags": ["tarraxinha", "drums", "kick", "batida"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["drums", "pulse", "percussion"],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 12, 14],
      "accentProfile": [1.0, 0.7, 0.9, 0.8],
      "velocityProfile": [0.95, 0.65, 0.85, 0.75],
      "density": "sparse",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "tarraxinha drop"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Tarraxinha; generalized from documented musical conventions.",
      "authenticityTags": ["tarraxinha", "drums"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "kizomba-tarraxinha-percussion",
      "worldId": "kizomba",
      "traditionId": "kizomba-tarraxinha",
      "name": "Tarraxinha Minimalist Woodblock & Rim",
      "family": "Percussion",
      "category": "ostinato",
      "description": "Spacious metallic click and woodblock hits emphasizing syncopated hip movement in Tarraxo.",
      "tags": ["tarraxinha", "percussion", "rim", "woodblock"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["percussion"],
      "instruments": ["percussion"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [4, 10, 14],
      "accentProfile": [0.85, 0.9, 0.75],
      "velocityProfile": [0.8, 0.85, 0.7],
      "density": "sparse",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "tarraxinha drop"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Tarraxinha; generalized from documented musical conventions.",
      "authenticityTags": ["tarraxinha", "percussion"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "kizomba-tarraxinha-glide-bass",
      "worldId": "kizomba",
      "traditionId": "kizomba-tarraxinha",
      "name": "Tarraxinha Resonant Sub Glide",
      "family": "Bass",
      "category": "groove",
      "description": "Deep sub-sine bass gliding between root pitches with slow portamento and intense low-end weight.",
      "tags": ["tarraxinha", "bass", "sub", "glide"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass"],
      "instruments": ["bass", "synth"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 12],
      "accentProfile": [1.0, 0.8, 0.9],
      "velocityProfile": [0.95, 0.75, 0.85],
      "density": "sparse",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "tarraxinha drop"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Tarraxinha; generalized from documented musical conventions.",
      "authenticityTags": ["tarraxinha", "bass"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "kizomba-urban-batida-trap",
      "worldId": "kizomba",
      "traditionId": "kizomba-urban-kiz",
      "name": "Urban Kiz Electronic Batida & Stop-Time",
      "family": "Drums",
      "category": "groove",
      "description": "Modern European Urban Kiz electronic kick with crisp trap snap on 3, rapid hi-hat bursts, and sudden sharp stop-time cuts.",
      "tags": ["urban-kiz", "drums", "electronic", "trap"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["drums", "pulse", "percussion"],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 8, 12, 14],
      "accentProfile": [1.0, 0.8, 0.95, 0.75, 0.9],
      "velocityProfile": [0.95, 0.75, 0.9, 0.7, 0.85],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Urban Kiz; generalized from documented musical conventions.",
      "authenticityTags": ["urban-kiz", "drums"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "kizomba-urban-linear-bass",
      "worldId": "kizomba",
      "traditionId": "kizomba-urban-kiz",
      "name": "Urban Kiz Compressed 808 Linear Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Heavy compressed 808 bass with precise gated cutoffs matching the stop-start linear choreography of Urban Kiz.",
      "tags": ["urban-kiz", "bass", "808", "synth"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass"],
      "instruments": ["bass", "synth"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 8, 12],
      "accentProfile": [1.0, 0.85, 0.95, 0.8],
      "velocityProfile": [0.95, 0.8, 0.9, 0.75],
      "density": "medium",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Urban Kiz; generalized from documented musical conventions.",
      "authenticityTags": ["urban-kiz", "bass"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "kizomba-urban-atmosphere-pad",
      "worldId": "kizomba",
      "traditionId": "kizomba-urban-kiz",
      "name": "Urban Kiz Dark Cinematic Pad & Pluck",
      "family": "Synth",
      "category": "harmony",
      "description": "Moody, spacious minor chords and shimmering arpeggiated plucks giving European Urban Kiz its contemporary R&B atmosphere.",
      "tags": ["urban-kiz", "synth", "pad", "harmony"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["harmony", "synth", "pad"],
      "instruments": ["synth", "keys"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 8, 16, 24],
      "accentProfile": [0.95, 0.8, 0.95, 0.8],
      "velocityProfile": [0.9, 0.75, 0.9, 0.75],
      "density": "sparse",
      "phrasePosition": ["start", "middle"],
      "sectionUsage": ["intro", "verse", "chorus", "coda"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Urban Kiz; generalized from documented musical conventions.",
      "authenticityTags": ["urban-kiz", "synth"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "dikanza scraping",
    "sub-bass pitch drops",
    "guitar fingerstyle syncopation",
    "linear stop-time cadences"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "tarraxinha drop",
    "verse",
    "chorus",
    "coda"
  ],
  "relationships": [
    "kick ↔ sub-bass (tight batida lock)",
    "dikanza ↔ hi-hat (continuous 16th shimmer)",
    "voice ↔ guitar arpeggio response"
  ],
  "transformations": [
    "trans-density-sparse",
    "trans-anticipation",
    "trans-density-dense",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "hypnotic, uninterrupted groove flow designed for close partner dance",
    "subtle dynamic builds where guitar and synth layers enter gradually",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "bass": [
      "deep 808/sub-bass with punchy transient",
      "melodic syncopated bass runs"
    ],
    "guitar": [
      "clean chorus guitar arpeggios",
      "nylon-string fingerstyle"
    ],
    "keys": [
      "warm FM electric piano with sustained lush ambient pads"
    ],
    "voice": [
      "lead vocal and response space"
    ]
  },
  "combinations": [
    "Kizomba + Soul",
    "Kizomba + Afrobeats",
    "Kizomba + R&B"
  ],
  "danceTags": [
    "social-partner",
    "blues-fusion-compatible",
    "wcs-compatible",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Syncopated batida kick [0,6,8,12,14] with continuous 16th dikanza scraper and warm sub-bass",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Kizomba ↔ Zouk",
    "Kizomba ↔ Semba",
    "Kizomba ↔ Blues Fusion"
  ]
};
