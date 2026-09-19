import { GenreWorld } from '../../types';

export const ROCK_WORLD: GenreWorld = {
  "id": "rock",
  "name": "Rock",
  "family": "Amplified / Guitar Music",
  "color": "#b45b68",
  "level": "world",
  "description": "A broad rock vocabulary organized around riffs, backbeats, power chords, dynamic song forms, guitar/bass locks, instrumental development, and contrasting textures.",
  "traditions": [
    {
      "id": "rock-classic",
      "worldId": "rock",
      "name": "Classic Rock",
      "origin": "US / UK",
      "era": "1960s–Present",
      "description": "Guitar-led rock built from memorable riffs, strong backbeats, verse/chorus contrast, instrumental breaks, and dynamic arrangement.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "voice",
        "keys"
      ],
      "preferredMeters": [
        "4/4",
        "6/8"
      ],
      "tempoRange": [
        90,
        165
      ],
      "keySubstyles": [
        "Classic Rock",
        "Blues Rock",
        "Arena Rock"
      ],
      "coreConcepts": [
        "riff",
        "power chord",
        "backbeat",
        "verse-chorus",
        "solo"
      ],
      "rhythmicGrammar": [
        "straight eighth-note drive",
        "kick and bass lock to riffs",
        "snare anchors 2 and 4"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Driving straight-8th power riff locked with kick drum and snare on 2 & 4",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "E5",
          "D5",
          "A5",
          "E5"
        ],
        "verse": [
          "E5",
          "D5",
          "A5",
          "E5"
        ],
        "chorus": [
          "G5",
          "D5",
          "A5",
          "E5"
        ],
        "solo": [
          "E5",
          "G5",
          "A5",
          "B5"
        ],
        "coda": [
          "E5",
          "E5",
          "E5",
          "E5"
        ]
      }
    },
    {
      "id": "rock-punk",
      "worldId": "rock",
      "name": "Punk & Garage",
      "origin": "US / UK",
      "era": "1960s–Present",
      "description": "Direct, economical rock based on repetition, aggressive downstrokes, simple harmonic movement, and short high-energy forms.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        210
      ],
      "keySubstyles": [
        "Garage Rock",
        "Punk Rock",
        "Post-Punk"
      ],
      "coreConcepts": [
        "downstroke drive",
        "power chords",
        "short form",
        "stop-start energy"
      ],
      "rhythmicGrammar": [
        "straight eighths",
        "tight kick/bass unison",
        "snare backbeat",
        "abrupt breaks"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Rapid downstroke power chords with relentless straight-8th kick/snare drive",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "A5",
          "D5",
          "E5",
          "A5"
        ],
        "verse": [
          "A5",
          "D5",
          "E5",
          "A5"
        ],
        "chorus": [
          "F#5",
          "D5",
          "A5",
          "E5"
        ],
        "coda": [
          "A5",
          "A5",
          "A5",
          "A5"
        ]
      }
    },
    {
      "id": "rock-alt",
      "worldId": "rock",
      "name": "Alternative & Indie Rock",
      "origin": "US / UK / Global",
      "era": "1980s–Present",
      "description": "Rock vocabulary expanded through contrasting textures, unusual riffs, dynamic shifts, layered guitars, and less predictable song forms.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "voice",
        "keys"
      ],
      "preferredMeters": [
        "4/4",
        "6/8",
        "3/4"
      ],
      "tempoRange": [
        75,
        175
      ],
      "keySubstyles": [
        "Alternative Rock",
        "Indie Rock",
        "Shoegaze",
        "Post-Rock"
      ],
      "coreConcepts": [
        "texture contrast",
        "dynamic arc",
        "ostinato riff",
        "open voicings"
      ],
      "rhythmicGrammar": [
        "alternating dense and sparse sections",
        "delayed entrances",
        "repeating guitar cells over changing harmony"
      ],
      "danceTags": [
        "listening",
        "festival-fusion",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Quiet arpeggiated verse exploding into loud fuzz-drenched chorus with half-time drums",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "G",
          "C",
          "D"
        ],
        "verse": [
          "Em",
          "G",
          "C",
          "D"
        ],
        "chorus": [
          "C",
          "G",
          "D",
          "Em"
        ],
        "solo": [
          "Am",
          "C",
          "Em",
          "D"
        ],
        "coda": [
          "Em",
          "C",
          "G",
          "D"
        ]
      }
    },
    {
      "id": "rock-progressive",
      "worldId": "rock",
      "name": "Progressive & Art Rock",
      "origin": "UK / Europe / US",
      "era": "1960s–Present",
      "description": "Long-form rock using odd meters, sectional development, recurring motifs, instrumental passages, and harmonic contrast.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "keys",
        "voice"
      ],
      "preferredMeters": [
        "4/4",
        "5/4",
        "7/8",
        "6/8"
      ],
      "tempoRange": [
        70,
        155
      ],
      "keySubstyles": [
        "Progressive Rock",
        "Art Rock",
        "Math Rock"
      ],
      "coreConcepts": [
        "odd meter",
        "motivic development",
        "metric contrast",
        "long-form arrangement"
      ],
      "rhythmicGrammar": [
        "meter changes",
        "accent-group displacement",
        "instrumental development sections"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Asymmetric 7/8 (2+2+3) metric riff with interlocking synth arpeggiator",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Bbmaj7",
          "C",
          "Am7"
        ],
        "verse": [
          "Dm",
          "F",
          "G",
          "Bb"
        ],
        "chorus": [
          "Gm7",
          "C7",
          "Fmaj7",
          "A7"
        ],
        "solo": [
          "Dm",
          "Em7b5",
          "A7",
          "Dm"
        ],
        "coda": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ]
      }
    }
  ],
  "substyles": [
    "Classic Rock",
    "Punk",
    "Garage",
    "Alternative",
    "Indie",
    "Progressive",
    "Post-Punk",
    "Shoegaze"
  ],
  "artists": [
    "The Beatles",
    "The Rolling Stones",
    "Led Zeppelin",
    "The Clash",
    "Sonic Youth",
    "Radiohead",
    "Nirvana",
    "King Crimson"
  ],
  "concepts": [
    "riff architecture",
    "power chords",
    "backbeat",
    "dynamic contrast",
    "verse/chorus",
    "instrumental break",
    "odd meter"
  ],
  "roles": {
    "guitar": [
      "power-chord riffs",
      "single-note hooks",
      "textural layers",
      "fills"
    ],
    "bass": [
      "riff lock",
      "root drive",
      "melodic counterline"
    ],
    "drums": [
      "backbeat",
      "kick/riff lock",
      "fills",
      "breaks"
    ]
  },
  "patterns": [
    {
      "id": "rock-riff-lock",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Riff + Bass Lock",
      "family": "Riff",
      "category": "ostinato",
      "description": "Electric guitar and bass share a repeating riff while kick accents reinforce its structural points.",
      "tags": [
        "rock",
        "riff",
        "bass",
        "guitar"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "rhythm-guitar",
        "bass",
        "pulse",
        "drums"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.8,
        0.9,
        0.95,
        0.7,
        0.9,
        0.8
      ],
      "velocityProfile": [
        1,
        0.75,
        0.85,
        0.9,
        0.65,
        0.85,
        0.75
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "rock-riff-stop",
          "parentPatternId": "rock-riff-lock",
          "name": "Stop-Time Hit",
          "variationType": "breakdown",
          "probability": 0.4,
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            1,
            1
          ],
          "description": "The riff collapses into accented hits, creating a clear break before the groove returns."
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass",
        "drums",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "rock-interaction-1",
          "worldId": "rock",
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
      "id": "rock-straight-drive",
      "worldId": "rock",
      "traditionId": "rock-punk",
      "name": "Straight-Eighth Drive",
      "family": "Driving Eighths",
      "category": "phrasePattern",
      "description": "Continuous guitar eighths with a firm bass/kick foundation and snare backbeat.",
      "tags": [
        "rock",
        "punk",
        "eighths",
        "drive"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "rhythm-guitar",
        "bass",
        "drums",
        "pulse"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
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
        1,
        0.7,
        0.9,
        0.7,
        1,
        0.7,
        0.9,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.65,
        0.95,
        0.65,
        0.85,
        0.65
      ],
      "density": "dense",
      "phrasePosition": [
        "start",
        "middle"
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
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass",
        "drums",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "rock-interaction-2",
          "worldId": "rock",
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
      "id": "rock-open-close",
      "worldId": "rock",
      "traditionId": "rock-alt",
      "name": "Open Verse → Full Chorus",
      "family": "Dynamic Arrangement",
      "category": "sectionPattern",
      "description": "A sparse verse leaves negative space before additional guitar layers, cymbals and sustained harmony arrive for the chorus.",
      "tags": [
        "rock",
        "arrangement",
        "dynamics",
        "chorus"
      ],
      "scopes": [
        "phrase",
        "region",
        "song"
      ],
      "roles": [
        "rhythm-guitar",
        "bass",
        "drums",
        "texture"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums",
        "keys"
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
        0.8,
        0.7,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.6,
        0.55,
        0.7,
        0.6
      ],
      "density": "dynamic",
      "phrasePosition": [
        "start",
        "middle",
        "end"
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
      "weight": 0.7,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass",
        "drums",
        "rhythm-guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "rock-interaction-3",
          "worldId": "rock",
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
      "id": "rock-odd-meter",
      "worldId": "rock",
      "traditionId": "rock-progressive",
      "name": "7/8 Accent Group",
      "family": "Odd Meter",
      "category": "ostinato",
      "description": "A seven-eighth-note cycle grouped 2+2+3, with bass, guitar and kick sharing the same structural accents.",
      "tags": [
        "rock",
        "progressive",
        "7/8",
        "odd-meter"
      ],
      "scopes": [
        "measure",
        "phrase",
        "track",
        "region"
      ],
      "roles": [
        "rhythm-guitar",
        "bass",
        "drums"
      ],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums"
      ],
      "meter": "7/8",
      "cycleLength": 1,
      "subdivisions": 14,
      "onsetGrid": [
        0,
        4,
        8,
        10
      ],
      "accentProfile": [
        1,
        0.7,
        1,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
        0.75
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "solo"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "bass",
        "drums",
        "rhythm-guitar"
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
      "id": "rock-power-chords",
      "worldId": "rock",
      "traditionId": "rock-punk",
      "name": "Power Chords",
      "family": "Guitar",
      "category": "fill",
      "description": "Distorted 8th note power chords driving straight through.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "instruments": [
        "electric-guitar"
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
        0.78,
        0.88,
        0.76,
        0.95,
        0.78,
        0.88,
        0.82
      ],
      "velocityProfile": [
        0.95,
        0.72,
        0.82,
        0.7,
        0.9,
        0.72,
        0.82,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "electric-guitar"
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
      "id": "rock-halftime-groove",
      "worldId": "rock",
      "traditionId": "rock-alt",
      "name": "Half-Time Groove",
      "family": "Drums",
      "category": "break",
      "description": "Spacious half-time groove with massive snare on beat 3.",
      "tags": [],
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
      "subdivisions": 8,
      "onsetGrid": [
        0,
        4
      ],
      "accentProfile": [
        0.96,
        1
      ],
      "velocityProfile": [
        0.92,
        0.98
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
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "rock-tom-beat",
      "worldId": "rock",
      "traditionId": "rock-alt",
      "name": "Tom Groove",
      "family": "Drums",
      "category": "cadence",
      "description": "Tribal tom-tom beat for atmospheric verses and builds.",
      "tags": [],
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
        0.7,
        0.85,
        0.65,
        0.95,
        0.7,
        0.85,
        0.65
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.8,
        0.6,
        0.9,
        0.65,
        0.8,
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
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "rock-organ-sustain",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Hammond Organ Sustain",
      "family": "Keys",
      "category": "cell",
      "description": "Sustained Hammond B3 chords with Leslie swirl, filling harmonic space beneath the guitars in classic rock ballads and jams.",
      "tags": [
        "rock",
        "organ",
        "keys"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys"
      ],
      "instruments": [
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        7,
        8,
        15
      ],
      "accentProfile": [
        0.9,
        0.6,
        0.85,
        0.65
      ],
      "velocityProfile": [
        0.85,
        0.55,
        0.8,
        0.6
      ],
      "density": "sparse",
      "phrasePosition": [
        "start",
        "middle"
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
      "weight": 0.7,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "rock-prog-7-8",
      "worldId": "rock",
      "traditionId": "rock-progressive",
      "name": "7/8 Riff",
      "family": "Guitar",
      "category": "groove",
      "description": "Odd meter guitar riff in 2+2+3 asymmetric phrasing.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "7/8",
      "cycleLength": 1,
      "subdivisions": 7,
      "onsetGrid": [
        0,
        2,
        4,
        5
      ],
      "accentProfile": [
        1,
        0.8,
        0.9,
        0.75
      ],
      "velocityProfile": [
        0.95,
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
        {
          "id": "rock-prog-7-8-v-01",
          "parentPatternId": "rock-prog-7-8",
          "name": "7/8 Riff — sparse variation",
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
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "rock-prog-7-8-v-02",
          "parentPatternId": "rock-prog-7-8",
          "name": "7/8 Riff — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            0,
            2,
            4,
            5
          ],
          "accentProfile": [
            0.96,
            0.88,
            0.86,
            0.83
          ],
          "velocityProfile": [
            1,
            0.73,
            0.83,
            0.76
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
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "electric-guitar"
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
      "id": "rock-prog-synth",
      "worldId": "rock",
      "traditionId": "rock-progressive",
      "name": "Prog Synth Arp",
      "family": "Synth",
      "category": "groove",
      "description": "Fast synth arpeggiator creating swirling harmonic motion.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "synth",
        "keys"
      ],
      "instruments": [
        "synth",
        "keys"
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
        0.75,
        0.6,
        0.9,
        0.6,
        0.75,
        0.6,
        0.95,
        0.6,
        0.75,
        0.6,
        0.9,
        0.6,
        0.75,
        0.65
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.7,
        0.55,
        0.85,
        0.55,
        0.7,
        0.55,
        0.9,
        0.55,
        0.7,
        0.55,
        0.85,
        0.55,
        0.7,
        0.6
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
      "difficulty": 5,
      "weight": 1,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "synth"
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
      "id": "rock-acoustic-strum",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Acoustic Strum",
      "family": "Guitar",
      "category": "groove",
      "description": "Acoustic guitar layering with accented down-up syncopation.",
      "tags": [],
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
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        4,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.65,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.6,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "rock-lead-bend",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Lead Guitar Bend",
      "family": "Guitar",
      "category": "groove",
      "description": "Sustained bending lead note answering vocal phrases.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        2,
        6
      ],
      "accentProfile": [
        0.88,
        0.96
      ],
      "velocityProfile": [
        0.82,
        0.92
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "rock-lead-bend-v-01-safe",
          "parentPatternId": "rock-lead-bend",
          "name": "Lead Guitar Bend — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            2,
            6
          ],
          "accentProfile": [
            0.83,
            1
          ],
          "velocityProfile": [
            0.85,
            0.88
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "rock-lead-bend-v-02-safe",
          "parentPatternId": "rock-lead-bend",
          "name": "Lead Guitar Bend — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            2,
            6
          ],
          "accentProfile": [
            0.83,
            1
          ],
          "velocityProfile": [
            0.85,
            0.88
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "electric-guitar"
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
      "id": "rock-roster-voice",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Rock voice part",
      "family": "Build",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives this genre an authored part for one of its declared instruments. Built around vocal hook and the build vocabulary of Rock.",
      "tags": [
        "rock",
        "build",
        "roster",
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
        10,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.72,
        0.72,
        1,
        0.72,
        0.72
      ],
      "velocityProfile": [
        0.95,
        0.68,
        0.68,
        0.95,
        0.68,
        0.68
      ],
      "syncopationRating": 0,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
        "voice"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
      ],
      "provenance": "Rock genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock",
        "build"
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
      "id": "rock-call-14",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Break Response",
      "family": "Break",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around dynamic build and the break vocabulary of Rock.",
      "tags": [
        "rock",
        "break",
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
        1,
        5,
        9,
        13
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Rock genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock",
        "break"
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
      "id": "rock-anchor-15",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Power Chord Anchor",
      "family": "Power Chord",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around power chords and the power chord vocabulary of Rock.",
      "tags": [
        "rock",
        "power-chord",
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
        2,
        6,
        10,
        14
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Rock genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock",
        "power-chord"
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
      "id": "rock-comp-16",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Backbeat Comping",
      "family": "Backbeat",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around backbeat in Rock.",
      "tags": [
        "rock",
        "backbeat",
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
        3,
        7,
        11,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Rock genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock",
        "backbeat"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "rock-verse-17",
      "worldId": "rock",
      "traditionId": "rock-classic",
      "name": "Solo Verse Variation",
      "family": "Solo",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around guitar solo and the solo vocabulary of Rock.",
      "tags": [
        "rock",
        "solo",
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
        1,
        3,
        5,
        7,
        9,
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
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
      "provenance": "Rock genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "rock",
        "solo"
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
      "id": "rock-punk-downpick-bass",
      "worldId": "rock",
      "traditionId": "rock-punk",
      "name": "Punk Plectrum Downpicked Bass",
      "family": "Bass",
      "category": "bass",
      "description": "Relentless, hard-hitting pick-played eighth-note bassline driving high-speed punk rock momentum locked with kick and snare.",
      "tags": ["punk", "bass", "downpick", "garage"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["bass"],
      "instruments": ["bass"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.7, 0.9, 0.7, 1.0, 0.7, 0.9, 0.7],
      "velocityProfile": [0.95, 0.75, 0.9, 0.75, 0.95, 0.75, 0.9, 0.75],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Punk & Garage; generalized from documented musical conventions.",
      "authenticityTags": ["punk", "bass"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "techniques": [
    "downstroke articulation",
    "palm muting",
    "power-chord movement",
    "riff repetition",
    "dynamic muting",
    "feedback and sustained texture"
  ],
  "forms": [
    "riff intro → verse → chorus → verse → chorus → solo → final chorus",
    "verse / chorus / bridge",
    "A/B instrumental form",
    "long-form progressive suite"
  ],
  "relationships": [
    "guitar ↔ bass riff lock",
    "kick ↔ riff accents",
    "snare ↔ backbeat",
    "lead guitar ↔ vocal space"
  ],
  "transformations": [
    "trans-density-sparse",
    "trans-density-dense",
    "trans-accent",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "riffs establish identity before vocals enter",
    "choruses often widen the arrangement rather than merely repeat the verse",
    "instrumental sections create space for development and soloing",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "power chords",
      "single-note riffs",
      "layered octave lines"
    ],
    "bass": [
      "riff doubling",
      "root drive",
      "counter-riffs"
    ],
    "drums": [
      "backbeat",
      "kick syncopation",
      "tom fills"
    ],
    "keys": [
      "organ sustain",
      "piano reinforcement",
      "textural synth"
    ],
    "voice": [
      "verse storytelling",
      "chorus hook"
    ]
  },
  "combinations": [
    "Rock + Blues",
    "Rock + Funk",
    "Rock + Folk",
    "Rock + Electronic"
  ],
  "danceTags": [
    "social-partner",
    "wcs-compatible",
    "festival-fusion",
    "listening"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Driving straight-8th power riff locked with kick drum and snare on 2 & 4",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Rock ↔ Blues",
    "Rock ↔ Metal",
    "Rock ↔ Rock en Español",
    "Rock ↔ Chinese Rock"
  ]
};
