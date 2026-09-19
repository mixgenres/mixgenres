import { GenreWorld } from '../../types';

export const CHINESE_ROCK_WORLD: GenreWorld = {
  "id": "chinese-rock",
  "name": "Chinese Rock & Pop",
  "family": "Mandopop / Cantopop / Chinese Rock",
  "color": "#c44536",
  "level": "world",
  "description": "Chinese-language rock and pop continuum: from Hong Kong’s passionate 1980s–90s Canto-rock (Beyond) to Taiwanese Mandopop arena-rock anthems (Mayday 五月天), featuring intimate acoustic verses, soaring electric guitar leads, and monumental chorus builds.",
  "traditions": [
    {
      "id": "chinese-rock-mandopop",
      "worldId": "chinese-rock",
      "name": "Taiwanese Mandopop & Arena Rock",
      "origin": "Taiwan / Pan-Chinese",
      "era": "1990s–Present",
      "description": "Emotive arena rock pioneered by Mayday (五月天) and Jonathan Lee: gentle acoustic guitar / piano verses building into massive, sing-along distorted chorus crescendos.",
      "characteristicInstruments": [
        "electric-guitar",
        "guitar",
        "bass",
        "drums",
        "piano",
        "strings"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        75,
        125
      ],
      "keySubstyles": [
        "Arena Rock (Mayday / 五月天)",
        "Campus Folk / Xinyao",
        "Mandopop Power Ballad"
      ],
      "coreConcepts": [
        "dynamic layering (sparse acoustic verse to explosive arena chorus)",
        "anthemic pentatonic melodic hooks",
        "sing-along vocal phrasing",
        "string swells"
      ],
      "rhythmicGrammar": [
        "open acoustic guitar strum verse shifting to driving eighth-note power chords and crash cymbals"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Dynamic acoustic verse arpeggio blossoming into soaring anthemic chorus",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G/B",
          "Am",
          "Em/G",
          "F",
          "C/E",
          "Dm7",
          "G7"
        ],
        "verse": [
          "C",
          "G/B",
          "Am",
          "Em/G",
          "F",
          "C/E",
          "Dm7",
          "G7"
        ],
        "chorus": [
          "F",
          "G",
          "Em",
          "Am",
          "Dm7",
          "G7",
          "C",
          "C7"
        ],
        "solo": [
          "Am",
          "F",
          "C",
          "G"
        ]
      }
    },
    {
      "id": "chinese-rock-cantorock",
      "worldId": "chinese-rock",
      "name": "Cantopop & Canto-Rock (Beyond Lineage)",
      "origin": "Hong Kong",
      "era": "1980s–1990s",
      "description": "Golden era Hong Kong rock defined by Wong Ka Kui and Beyond: driving rock rhythms, passionate vocal melodies, soaring electric guitar leads, and resonant chorus pads.",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "keys",
        "voice"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        80,
        130
      ],
      "keySubstyles": [
        "Classic Canto-Rock (Beyond)",
        "Hong Kong Alt-Rock",
        "Canto-Pop Rock Ballad"
      ],
      "coreConcepts": [
        "soaring pentatonic guitar leads (Glorious Days / Hai Kuo Tian Kong)",
        "driving 8th-note rock bass",
        "reverb-drenched clean picking"
      ],
      "rhythmicGrammar": [
        "straight rock backbeat with expressive crash cymbal punctuation"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Soaring major-pentatonic electric guitar lead with octave bends",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "F",
          "C",
          "Dm",
          "Am",
          "Bb",
          "F",
          "Gm",
          "C"
        ],
        "verse": [
          "F",
          "C",
          "Dm",
          "Am",
          "Bb",
          "F",
          "Gm",
          "C"
        ],
        "chorus": [
          "F",
          "C",
          "Dm",
          "Bb",
          "F",
          "C",
          "F",
          "F"
        ],
        "solo": [
          "Dm",
          "Bb",
          "C",
          "Am"
        ]
      }
    }
  ],
  "substyles": [
    "Taiwanese Arena Rock",
    "Hong Kong Canto-Rock",
    "Mandopop Power Ballad",
    "Campus Folk / Xinyao",
    "Chinese Indie Rock"
  ],
  "artists": [
    "Beyond (黄家驹)",
    "Mayday (五月天)",
    "Jonathan Lee (李宗盛)",
    "Cui Jian (崔健)",
    "Omnipotent Youth Society (万能青年旅店)",
    "No Party For Cao Dong (草东没有派对)"
  ],
  "concepts": [
    "extreme verse-to-chorus dynamic layering",
    "soaring pentatonic electric guitar hooks",
    "orchestral string section swells",
    "anthemic sing-along vocal hooks"
  ],
  "roles": {
    "bass": [
      "arena ballad root-fifth bass",
      "driving 8th-note rock bass"
    ],
    "guitar": [
      "gentle acoustic fingerpicking",
      "distorted arena power chords",
      "soaring pentatonic leads"
    ],
    "drums": [
      "intimate verse cross-stick into thunderous chorus crash"
    ],
    "texture": [
      "lush orchestral string pad swells"
    ]
  },
  "patterns": [
    {
      "id": "crock-anthemic-bass",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Arena Ballad Root-Fifth Bass",
      "family": "Chinese Rock Bass",
      "category": "groove",
      "description": "Solid root-fifth bassline anchoring dynamic build from soft acoustic verses into explosive choruses.",
      "tags": [
        "chinese-rock",
        "mandopop",
        "bass",
        "arena"
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
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.75,
        0.8
      ],
      "density": "medium",
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "crock-anthemic-bass-v-01",
          "parentPatternId": "crock-anthemic-bass",
          "name": "Arena Ballad Root-Fifth Bass — sparse variation",
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
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock"
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
          "id": "chinese-rock-interaction-1",
          "worldId": "chinese-rock",
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
      "id": "crock-acoustic-verse-strum",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Mandopop Acoustic Verse Strum",
      "family": "Acoustic Guitar",
      "category": "groove",
      "description": "Gentle steel-string acoustic guitar arpeggiation and light strumming providing intimate warmth during the verse.",
      "tags": [
        "mandopop",
        "acoustic",
        "guitar",
        "strum"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "guitar"
      ],
      "instruments": [
        "guitar"
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
        0.9,
        0.7,
        0.85,
        0.8,
        0.75,
        0.9
      ],
      "velocityProfile": [
        0.85,
        0.65,
        0.8,
        0.75,
        0.7,
        0.85
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "chinese-rock-interaction-2",
          "worldId": "chinese-rock",
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
      "id": "crock-power-chorus-guitar",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Arena Chorus Power Chords",
      "family": "Electric Guitar",
      "category": "groove",
      "description": "Distorted electric guitar power chords ringing out with full sustain across the chorus.",
      "tags": [
        "chinese-rock",
        "guitar",
        "power-chords",
        "distorted"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "guitar"
      ],
      "instruments": [
        "electric-guitar"
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
        0.85,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.85
      ],
      "density": "medium",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "chorus",
        "solo"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony",
        "guitar"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "chinese-rock-interaction-3",
          "worldId": "chinese-rock",
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
      "id": "crock-canto-lead-solo",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-cantorock",
      "name": "Beyond-Style Pentatonic Lead Hook",
      "family": "Lead Guitar",
      "category": "ostinato",
      "description": "Soaring major/minor pentatonic electric guitar lead melody with singing vibrato and double-stops.",
      "tags": [
        "canto-rock",
        "lead",
        "guitar",
        "beyond",
        "solo"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "lead"
      ],
      "instruments": [
        "electric-guitar"
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
        15
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.8,
        0.7,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.75,
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
        "intro",
        "chorus",
        "solo"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "chinese-rock-interaction-4",
          "worldId": "chinese-rock",
          "sourceRole": "bass",
          "targetRole": "drums",
          "relationship": "accentWith",
          "description": "Bass accents align with selected kick/backbeat events for a tighter pocket.",
          "timingOffsetSteps": 0,
          "probability": 0.65
        }
      ],
      "articulations": [
        "legato"
      ]
    },
    {
      "id": "crock-dynamic-drums",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Dynamic Arena Rock Drum Build",
      "family": "Drums",
      "category": "groove",
      "description": "Soft cross-stick and hi-hat during verses building into heavy backbeat snare and crash cymbals in choruses.",
      "tags": [
        "chinese-rock",
        "drums",
        "rock",
        "build"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "drums",
        "pulse"
      ],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        10
      ],
      "accentProfile": [
        1,
        0.9,
        0.85,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.8,
        0.9,
        0.7
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock"
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
          "id": "chinese-rock-interaction-5",
          "worldId": "chinese-rock",
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
      "id": "crock-cantorock-driving-bass",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-cantorock",
      "name": "Canto-Rock Driving Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Syncopated driving rock bass in the Beyond / classic Canto-rock tradition, pushing ahead of the beat beneath soaring guitar leads.",
      "tags": [
        "chinese-rock",
        "cantorock",
        "bass",
        "drive"
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        7,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.7,
        0.95,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.65,
        0.9,
        0.8,
        0.7
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
      "difficulty": 2,
      "weight": 1,
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock"
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
      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "chinese-rock-roster-strings",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Chinese Rock & Pop strings part",
      "family": "Bridge",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives this genre an authored part for one of its declared instruments. Built around power-ballad build and the bridge vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "bridge",
        "roster",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "lead"
      ],
      "instruments": [
        "strings",
        "violin"
      ],
      "compatibleRoles": [
        "lead"
      ],
      "compatibleInstruments": [
        "strings",
        "violin"
      ],
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
      "syncopationRating": 0.67,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
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
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
      ],
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "bridge"
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
      "id": "chinese-rock-call-8",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "String Lift Response",
      "family": "String Lift",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around Chinese pop phrasing and the string lift vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "string-lift",
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
        4,
        7,
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
        0.62
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.9,
        0.62
      ],
      "syncopationRating": 0.67,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "string-lift"
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
      "id": "chinese-rock-anchor-9",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Lead Anchor",
      "family": "Lead",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around guitar bridge and the lead vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "lead",
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
        5,
        8,
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
      "syncopationRating": 0.67,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "lead"
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
      "id": "chinese-rock-comp-10",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Mandopop Hook Comping",
      "family": "Mandopop Hook",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around vocal hook and the mandopop hook vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "mandopop-hook",
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
        "strings"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "strings"
      ],
      "canCrossRole": true,
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
      "syncopationRating": 0.67,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "mandopop-hook"
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
      "id": "chinese-rock-intro-11",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Power Ballad Intro",
      "family": "Power Ballad",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around string lift and the power ballad vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "power-ballad",
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
        "strings"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "guitar",
        "strings"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        3,
        4,
        6,
        9,
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
          "id": "chinese-rock-intro-11-v-03",
          "parentPatternId": "chinese-rock-intro-11",
          "name": "Power Ballad Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            3,
            4,
            6,
            9,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "power-ballad"
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
      "id": "chinese-rock-verse-12",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Bridge Verse Variation",
      "family": "Bridge",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around power-ballad build and the bridge vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "bridge",
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
        2,
        4,
        5,
        7,
        10,
        12,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "bridge"
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
      "id": "chinese-rock-chorus-13",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "String Lift Chorus Lift",
      "family": "String Lift",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around Chinese pop phrasing and the string lift vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "string-lift",
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
        3,
        5,
        6,
        8,
        11,
        13,
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
          "id": "chinese-rock-chorus-13-v-03",
          "parentPatternId": "chinese-rock-chorus-13",
          "name": "String Lift Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            3,
            5,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "string-lift"
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
      "id": "chinese-rock-bridge-14",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Lead Bridge",
      "family": "Lead",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around guitar bridge and the lead vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "lead",
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
        "strings"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
      ],
      "compatibleInstruments": [
        "guitar",
        "strings"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        5,
        7,
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
          "id": "chinese-rock-bridge-14-v-03",
          "parentPatternId": "chinese-rock-bridge-14",
          "name": "Lead Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            2,
            5,
            7,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "lead"
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
      "id": "chinese-rock-fill-15",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Mandopop Hook Fill",
      "family": "Mandopop Hook",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around vocal hook and the mandopop hook vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "mandopop-hook",
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
        6,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.72,
        0.78,
        0.84,
        0.72,
        1,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        0.84,
        0.72,
        0.95,
        1
      ],
      "syncopationRating": 0.5,
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
          "id": "chinese-rock-fill-15-v-03",
          "parentPatternId": "chinese-rock-fill-15",
          "name": "Mandopop Hook Fill — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.7,
            0.76,
            0.82,
            0.7,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
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
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "mandopop-hook"
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
      "id": "chinese-rock-break-16",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Power Ballad Break",
      "family": "Power Ballad",
      "category": "break",
      "description": "A deliberate drop in density for a breakdown or stop-time moment. Built around string lift and the power ballad vocabulary of Chinese Rock & Pop.",
      "tags": [
        "chinese-rock",
        "power-ballad",
        "break",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "drums",
        "bass"
      ],
      "instruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "compatibleRoles": [
        "drums",
        "bass"
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
        1,
        5,
        7,
        11,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.55,
        0.55,
        0.55,
        1,
        1
      ],
      "velocityProfile": [
        1,
        0.5,
        0.55,
        0.55,
        0.95,
        1
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented"
      ],
      "density": "sparse",
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "stop-time"
      ],
      "harmonicContext": [
        "tonal",
        "section-dependent",
        "tonal or modal context"
      ],
      "roleDependencies": [
        "drums",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        {
          "id": "chinese-rock-break-16-v-03",
          "parentPatternId": "chinese-rock-break-16",
          "name": "Power Ballad Break — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.53,
            0.53,
            0.53,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
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
            -6,
            -6
          ]
        }
      ],
      "provenance": "Chinese Rock & Pop genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "chinese-rock",
        "power-ballad"
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
      "id": "chinese-rock-voice-phrasing",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-mandopop",
      "name": "Chinese Rock Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Lead-vocal pop-rock phrase template with clear breath points and chorus-hook spacing.",
      "tags": [
        "chinese-rock",
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
      "syncopationRating": 0.67,
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
          "id": "chinese-rock-voice-phrasing-v-voice-alt",
          "parentPatternId": "chinese-rock-voice-phrasing",
          "name": "Chinese Rock Vocal Phrasing — alternate phrasing",
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
        ],
      "provenance": "Genre-pack structural pattern for dedicated vocal phrasing coverage for Chinese Rock & Pop; generalized for engine coverage, not a transcription.",
      "authenticityTags": [
        "chinese-rock",
        "voice"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "crock-cantorock-anthemic-drums",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-cantorock",
      "name": "Beyond Stadium Arena Drums",
      "family": "Drums",
      "category": "groove",
      "description": "Solid, punchy 80s/90s Hong Kong arena rock drumkit groove with powerful snare backbeat, steady driving 8th-note kick, and open hi-hat wash.",
      "tags": ["cantorock", "beyond", "drums", "arena-rock"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["drums", "pulse"],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.6, 0.95, 0.65, 1.0, 0.6, 0.95, 0.7],
      "velocityProfile": [0.95, 0.6, 0.95, 0.6, 0.95, 0.6, 0.95, 0.65],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Canto-Rock; generalized from documented musical conventions.",
      "authenticityTags": ["cantorock", "drums"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "crock-cantorock-rhythm-chords",
      "worldId": "chinese-rock",
      "traditionId": "chinese-rock-cantorock",
      "name": "Canto-Rock Rhythm Power Chords",
      "family": "Guitar",
      "category": "harmony",
      "description": "Driving electric guitar power chords moving from tight palm-muted verse rhythms to ringing anthemic chorus sustain.",
      "tags": ["cantorock", "guitar", "power-chords", "beyond"],
      "scopes": ["measure", "phrase", "region", "track"],
      "roles": ["guitar", "harmony"],
      "instruments": ["electric-guitar"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [0, 2, 4, 6, 8, 10, 12, 14],
      "accentProfile": [1.0, 0.65, 0.85, 0.65, 0.95, 0.65, 0.85, 0.7],
      "velocityProfile": [0.9, 0.65, 0.85, 0.65, 0.9, 0.65, 0.85, 0.7],
      "density": "dense",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Canto-Rock; generalized from documented musical conventions.",
      "authenticityTags": ["cantorock", "guitar"],
      "danceTags": ["festival-fusion"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "techniques": [
    "dynamic acoustic-to-electric layering",
    "singing pentatonic guitar bends",
    "orchestral string arrangement swells"
  ],
  "forms": [
    "intro",
    "verse",
    "pre-chorus",
    "chorus",
    "verse",
    "chorus",
    "solo",
    "chorus",
    "coda"
  ],
  "relationships": [
    "acoustic guitar ↔ piano (gentle verse bed)",
    "electric guitar ↔ strings (massive chorus crescendo)",
    "bass ↔ drums (rock foundation)"
  ],
  "transformations": [
    "trans-density-dense",
    "trans-anticipation",
    "trans-phrase-cadence",
    "catalog-v2-density-variation",
    "catalog-v2-transition-coverage",
    "catalog-v2-ensemble-interactions"
  ],
  "songBehaviors": [
    "dynamic narrative journey starting with whispered acoustic reflections and culminating in cathartic, arena-wide sing-along choruses",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "guitar": [
      "Gibson Les Paul through Marshall JCM800 for soaring leads and heavy chorus power chords"
    ],
    "bass": [
      "Fender Precision Bass for deep, punchy root notes"
    ],
    "strings": [
      "warm analog string ensemble or high-register violin countermelody"
    ],
    "voice": [
      "lead-vocal pop-rock phrasing"
    ]
  },
  "combinations": [
    "Chinese Rock + Post-Rock",
    "Canto-Rock + Blues",
    "Mandopop + Orchestral Ballad"
  ],
  "danceTags": [
    "listening",
    "festival-fusion"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Dynamic acoustic verse arpeggio blossoming into soaring anthemic chorus",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Rock ↔ Chinese Rock",
    "Chinese Rock ↔ Post-Rock / Math Rock"
  ]
};
