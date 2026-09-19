import { GenreWorld } from '../../types';

export const FUSION_AMBIENT_WORLD: GenreWorld = {
  "id": "fusion-ambient",
  "name": "Fusion & Ambient Dance",
  "family": "Fusion Dance / Downtempo Electronic",
  "color": "#5b8296",
  "level": "world",
  "description": "The sonic meeting ground for modern partner Fusion dancing, Blues fusion, and contemporary West Coast Swing: Bonobo-style organic downtempo, deep sub-bass drones, intimate felt piano arpeggios, and expansive cinematic soundscapes designed for intuitive physical connection.",
  "traditions": [
    {
      "id": "fusion-downtempo",
      "worldId": "fusion-ambient",
      "name": "Downtempo & Organic Bass (Bonobo Lineage)",
      "origin": "UK / Global Fusion Festivals",
      "era": "2000s–Present",
      "description": "Hypnotic, organic downtempo combining deep warm sub-bass drones, kalimba / acoustic picking, dusty vinyl percussion, and expansive atmospheric pads.",
      "characteristicInstruments": [
        "bass",
        "synth",
        "drums",
        "percussion",
        "guitar",
        "keys"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        78,
        105
      ],
      "keySubstyles": [
        "Organic Downtempo (Bonobo, Tycho)",
        "Trip-Hop Grooves",
        "Folktronica"
      ],
      "coreConcepts": [
        "deep sub-bass drone",
        "organic textured percussion (foley, shakers)",
        "ambient volume swells",
        "micro-timing pocket"
      ],
      "rhythmicGrammar": [
        "unhurried backbeat with syncopated ghost percussion and sub-bass drops"
      ],
      "danceTags": [
        "festival-fusion",
        "blues-fusion-compatible",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Slow breathing sub-bass pulse under organic hand percussion and ambient guitar swells",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am9",
          "Fmaj7#11",
          "Dm9",
          "Em7"
        ],
        "verse": [
          "Am9",
          "Fmaj7#11",
          "Dm9",
          "Em7"
        ],
        "chorus": [
          "Fmaj7",
          "G6",
          "Am9",
          "Cmaj7"
        ],
        "coda": [
          "Am9",
          "Fmaj7",
          "Am9",
          "Fmaj7"
        ]
      }
    },
    {
      "id": "fusion-cinematic-neoclassical",
      "worldId": "fusion-ambient",
      "name": "Neoclassical & Cinematic Fusion",
      "origin": "International",
      "era": "2010s–Present",
      "description": "Poignant neoclassical acoustic-electronic hybrid: felt piano arpeggios, expressive solo cello / violin, slow sub-bass pulses, and granular ambient washes designed for partner dance connection.",
      "characteristicInstruments": [
        "piano",
        "strings",
        "violin",
        "synth",
        "bass"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        65,
        95
      ],
      "keySubstyles": [
        "Neoclassical Partner Dance (Olafur Arnalds, Nils Frahm)",
        "Cinematic Ambient",
        "Acoustic Drone"
      ],
      "coreConcepts": [
        "intimate felt piano touch",
        "slow expressive string glissandos",
        "static harmonic bed",
        "partner improvisation space"
      ],
      "rhythmicGrammar": [
        "sparse, breathing onsets prioritizing space and dancer physical connection"
      ],
      "danceTags": [
        "festival-fusion",
        "blues-fusion-compatible",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Felt piano arpeggio hovering over a warm sub-bass drone",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Bbmaj7",
          "F",
          "C"
        ],
        "verse": [
          "Dm",
          "Bbmaj7",
          "F",
          "C"
        ],
        "chorus": [
          "Bbmaj7",
          "C",
          "Dm",
          "Am7"
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
    "Organic Downtempo (Bonobo)",
    "Neoclassical Fusion (Olafur Arnalds)",
    "Trip-Hop Beats",
    "Global Bass",
    "Ambient Electronica"
  ],
  "artists": [
    "Bonobo",
    "Tycho",
    "Olafur Arnalds",
    "Nils Frahm",
    "Emancipator",
    "Maribou State",
    "Kiasmos",
    "Weval"
  ],
  "concepts": [
    "deep breathing sub-bass drones",
    "organic textured percussion (udu, seeds, shakers)",
    "intimate felt piano",
    "ambient modal volume swells",
    "negative space for partner dance connection"
  ],
  "roles": {
    "bass": [
      "slow breathing sub-bass drone",
      "world-fusion syncopated bass hybrid"
    ],
    "drums": [
      "downtempo pocket & ghost kit",
      "minimal glitch-edited groove"
    ],
    "guitar": [
      "ambient modal volume swells",
      "organic acoustic fingerstyle"
    ],
    "keys": [
      "felt piano intimate arpeggiations",
      "airy Rhodes comping"
    ],
    "percussion": [
      "organic shaker and clay drum interlock",
      "world hand-percussion layers"
    ],
    "texture": [
      "granular ambient atmosphere wash"
    ]
  },
  "patterns": [
    {
      "id": "fusion-sub-drone-bass",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Slow Breathing Sub-Bass Drone",
      "family": "Fusion Bass",
      "category": "ostinato",
      "description": "Deep, warm analog sub-bass drone providing an immovable anchor for slow partner dance isolations.",
      "tags": [
        "fusion",
        "ambient",
        "bass",
        "sub-bass",
        "drone"
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
        "synth"
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
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "coda"
      ],
      "variants": [
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-1",
          "worldId": "fusion-ambient",
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
      "id": "fusion-downtempo-glitch-kit",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Downtempo Pocket & Ghost Kit",
      "family": "Fusion Drums",
      "category": "groove",
      "description": "Slow, dusty downtempo hip-hop drum beat with micro-timed ghost snares and soft kick drops.",
      "tags": [
        "downtempo",
        "drums",
        "pocket",
        "fusion",
        "trip-hop"
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
        7,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.8,
        0.95,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.75,
        0.9,
        0.65,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-2",
          "worldId": "fusion-ambient",
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
      "id": "fusion-ambient-guitar-swells",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Ambient Modal Guitar Swells",
      "family": "Guitar",
      "category": "ostinato",
      "description": "Reverb-drenched volume-swell chords creating shifting harmonic color without sharp transients.",
      "tags": [
        "ambient",
        "guitar",
        "swell",
        "texture"
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
        "electric-guitar",
        "guitar"
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
        0.9,
        0.85,
        0.8
      ],
      "velocityProfile": [
        0.85,
        0.8,
        0.75
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient"
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
          "id": "fusion-ambient-interaction-3",
          "worldId": "fusion-ambient",
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
      "id": "fusion-felt-piano-arpeggio",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-cinematic-neoclassical",
      "name": "Felt Piano Intimate Arpeggiation",
      "family": "Piano",
      "category": "groove",
      "description": "Muted felt piano playing delicate cyclical arpeggios that leave plenty of breath for movement.",
      "tags": [
        "neoclassical",
        "piano",
        "arpeggio",
        "intimate"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "keys"
      ],
      "instruments": [
        "piano",
        "keys"
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
        0.95,
        0.7,
        0.85,
        0.9,
        0.7,
        0.8
      ],
      "velocityProfile": [
        0.9,
        0.65,
        0.8,
        0.85,
        0.65,
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
        
        ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 2,
      "weight": 1,
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "harmony"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "interactionRules": [
        {
          "id": "fusion-ambient-interaction-4",
          "worldId": "fusion-ambient",
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
      "id": "fusion-organic-percussion",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Organic Shaker & Clay Drum Interlock",
      "family": "Hand Percussion",
      "category": "groove",
      "description": "Subtle clay drum (udu) tone with continuous woven basket shaker providing an earthy acoustic texture.",
      "tags": [
        "hand-percussion",
        "shaker",
        "udu",
        "organic"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],
      "instruments": [
        "percussion",
        "bongos"
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
        0.9,
        0.7,
        0.8,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.7,
        0.85,
        0.65,
        0.75,
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient"
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
      "interactionRules": [
        {
          "id": "fusion-ambient-interaction-5",
          "worldId": "fusion-ambient",
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
      "id": "fusion-deep-granular-pad",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Granular Ambient Atmosphere Wash",
      "family": "Atmosphere",
      "category": "cell",
      "description": "Slow-evolving granular soundscape pad that wraps the acoustic instruments in a cohesive twilight space.",
      "tags": [
        "ambient",
        "synth",
        "pad",
        "granular"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region"
      ],
      "roles": [
        "texture"
      ],
      "instruments": [
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0
      ],
      "accentProfile": [
        0.9
      ],
      "velocityProfile": [
        0.85
      ],
      "density": "sparse",
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "coda"
      ],
      "variants": [
        {
          "id": "fusion-deep-granular-pad-v-01-safe",
          "parentPatternId": "fusion-deep-granular-pad",
          "name": "Granular Ambient Atmosphere Wash — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0
          ],
          "accentProfile": [
            0.85
          ],
          "velocityProfile": [
            0.88
          ],
          "microtimingOffset": [
            -2
          ]
        },
        {
          "id": "fusion-deep-granular-pad-v-02-safe",
          "parentPatternId": "fusion-deep-granular-pad",
          "name": "Granular Ambient Atmosphere Wash — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse patterns with only a few attacks.",
          "onsetGrid": [
            0
          ],
          "accentProfile": [
            0.85
          ],
          "velocityProfile": [
            0.88
          ],
          "microtimingOffset": [
            -2
          ]
        }
      ],
      "harmonicContext": [
        "tonal or modal context"
      ],
      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "roleDependencies": [
        "texture"
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
      "id": "fusion-ambient-phrase-7",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Texture Phrase",
      "family": "Texture",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves deliberate space for melodic expression. Built around slow build and the texture vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "texture",
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
        6,
        8,
        13
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
      "syncopationRating": 0.75,
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "texture"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-call-8",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Solo Response",
      "family": "Solo",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the next phrase open for an answer. Built around harmonic space and the solo vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "solo",
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
        "bass",
        "piano"
      ],
      "compatibleRoles": [
        "voice",
        "lead"
      ],
      "compatibleInstruments": [
        "bass",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        7,
        9,
        14
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
        "voice",
        "lead"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        
        
        ],
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "solo"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-anchor-9",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Lift Anchor",
      "family": "Lift",
      "category": "ostinato",
      "description": "A repeating anchor that locks the low end to the groove. Built around improvised lead and the lift vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "lift",
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
        3,
        8,
        10,
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
      "syncopationRating": 0.75,
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "lift"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-comp-10",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Ambient Pulse Comping",
      "family": "Ambient Pulse",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports the lead without occupying every subdivision. Built around texture and the ambient pulse vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "ambient-pulse",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        5,
        10,
        12
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "ambient-pulse"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "fusion-ambient-intro-11",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Fusion Sync Intro",
      "family": "Fusion Sync",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish the genre before the full groove arrives. Built around polyrhythm and the fusion sync vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "fusion-sync",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
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
          "id": "fusion-ambient-intro-11-v-03",
          "parentPatternId": "fusion-ambient-intro-11",
          "name": "Fusion Sync Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            0,
            6,
            11,
            14,
            15
          ],
          "accentProfile": [
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "fusion-sync"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-verse-12",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Texture Verse Variation",
      "family": "Texture",
      "category": "groove",
      "description": "A restrained verse variation with intentional headroom for melody. Built around slow build and the texture vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "texture",
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
        7,
        12
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
      "syncopationRating": 0.5,
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "texture"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "fusion-ambient-chorus-13",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Solo Chorus Lift",
      "family": "Solo",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases density without changing the genre identity. Built around harmonic space and the solo vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "solo",
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
        "piano"
      ],
      "compatibleRoles": [
        "pulse",
        "harmony",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        2,
        8,
        13
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
          "id": "fusion-ambient-chorus-13-v-03",
          "parentPatternId": "fusion-ambient-chorus-13",
          "name": "Solo Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            1,
            2,
            8,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "solo"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-bridge-14",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Lift Bridge",
      "family": "Lift",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to reset repetition before the final return. Built around improvised lead and the lift vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "lift",
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
        "piano"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        3,
        4,
        10,
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
          "id": "fusion-ambient-bridge-14-v-03",
          "parentPatternId": "fusion-ambient-bridge-14",
          "name": "Lift Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            3,
            4,
            10,
            14,
            15
          ],
          "accentProfile": [
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "lift"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-fill-15",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Ambient Pulse Fill",
      "family": "Ambient Pulse",
      "category": "fill",
      "description": "A short transition fill that signals the next section instead of looping the main groove unchanged. Built around texture and the ambient pulse vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "ambient-pulse",
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
        3,
        8,
        12
      ],
      "accentProfile": [
        0.72,
        0.78,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        1
      ],
      "syncopationRating": 0.33,
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
          "id": "fusion-ambient-fill-15-v-03",
          "parentPatternId": "fusion-ambient-fill-15",
          "name": "Ambient Pulse Fill — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            3,
            8,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.7,
            0.76,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            1,
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "ambient-pulse"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-break-16",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Fusion Sync Break",
      "family": "Fusion Sync",
      "category": "break",
      "description": "A deliberate drop in density for a breakdown or stop-time moment. Built around polyrhythm and the fusion sync vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "fusion-sync",
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
        4,
        9,
        13
      ],
      "accentProfile": [
        1,
        0.55,
        1
      ],
      "velocityProfile": [
        1,
        0.5,
        1
      ],
      "syncopationRating": 0.67,
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
          "id": "fusion-ambient-break-16-v-01",
          "parentPatternId": "fusion-ambient-break-16",
          "name": "Fusion Sync Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            4,
            13
          ],
          "accentProfile": [
            0.95,
            0.5
          ],
          "velocityProfile": [
            0.92,
            0.42
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "fusion-ambient-break-16-v-02",
          "parentPatternId": "fusion-ambient-break-16",
          "name": "Fusion Sync Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves emphasis to different attacks for a played repetition.",
          "onsetGrid": [
            4,
            9,
            13
          ],
          "accentProfile": [
            0.96,
            0.63,
            0.96
          ],
          "velocityProfile": [
            1,
            0.48,
            0.98
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        },
        {
          "id": "fusion-ambient-break-16-v-03",
          "parentPatternId": "fusion-ambient-break-16",
          "name": "Fusion Sync Break — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            4,
            9,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.53,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            1,
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
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "fusion-sync"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-ambient-cadence-17",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-downtempo",
      "name": "Texture Cadence",
      "family": "Texture",
      "category": "cadence",
      "description": "A phrase-ending cadence that gives the arrangement a clear point of release. Built around slow build and the texture vocabulary of Fusion & Ambient Dance.",
      "tags": [
        "fusion-ambient",
        "texture",
        "cadence",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "bass"
      ],
      "instruments": [
        "piano",
        "bass"
      ],
      "compatibleRoles": [
        "harmony",
        "bass"
      ],
      "compatibleInstruments": [
        "piano",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        5,
        10,
        14
      ],
      "accentProfile": [
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "density": "sparse",
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "turnaround",
        "ending",
        "coda",
        "remate",
        "cierre"
      ],
      "harmonicContext": [
        "dominant",
        "turnaround",
        "tonal or modal context"
      ],
      "roleDependencies": [
        "harmony",
        "bass"
      ],
      "transformations": [
        "density",
        "accent",
        "phrasePosition"
      ],
      "variants": [
        {
          "id": "fusion-ambient-cadence-17-v-01",
          "parentPatternId": "fusion-ambient-cadence-17",
          "name": "Texture Cadence — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the phrase breathes on repeated passes.",
          "onsetGrid": [
            5,
            14
          ],
          "accentProfile": [
            0.95,
            0.69
          ],
          "velocityProfile": [
            0.92,
            0.61
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        
        {
          "id": "fusion-ambient-cadence-17-v-03",
          "parentPatternId": "fusion-ambient-cadence-17",
          "name": "Texture Cadence — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for section transitions.",
          "onsetGrid": [
            5,
            10,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "Fusion & Ambient Dance genre-pack structural pattern; generalized for engine coverage and recombination, not a transcription of a single recording.",
      "authenticityTags": [
        "fusion-ambient",
        "texture"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "fusion-cinematic-cello-melody",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-cinematic-neoclassical",
      "name": "Expressive Neoclassical Solo Cello",
      "family": "Strings",
      "category": "phrasePattern",
      "description": "Lyrical, expressive solo cello melody with subtle vibrato and breath-like pacing for intimate partner dance connection.",
      "tags": ["neoclassical", "strings", "cello", "melody", "cinematic"],
      "scopes": ["phrase", "region", "track"],
      "roles": ["melody", "lead"],
      "instruments": ["strings", "violin"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 6, 12, 16, 22, 26],
      "accentProfile": [1.0, 0.8, 0.85, 0.95, 0.8, 0.75],
      "velocityProfile": [0.9, 0.75, 0.8, 0.9, 0.75, 0.7],
      "articulations": ["legato"],
      "density": "sparse",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["verse", "chorus", "solo"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Neoclassical & Cinematic Fusion; generalized from documented musical conventions.",
      "authenticityTags": ["neoclassical", "strings"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "fusion-cinematic-sub-drone",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-cinematic-neoclassical",
      "name": "Cinematic Warm Sub-Bass Drone",
      "family": "Bass",
      "category": "drone",
      "description": "Continuous warm analog sub-sine drone with slow breathing low-pass filter motion grounding the acoustic instruments.",
      "tags": ["neoclassical", "sub-bass", "drone", "cinematic"],
      "scopes": ["phrase", "region", "track"],
      "roles": ["bass", "pulse"],
      "instruments": ["bass", "synth"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 16],
      "accentProfile": [1.0, 0.9],
      "velocityProfile": [0.95, 0.85],
      "articulations": ["tenuto"],
      "density": "sparse",
      "phrasePosition": ["start", "middle"],
      "sectionUsage": ["intro", "verse", "chorus", "coda"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Neoclassical & Cinematic Fusion; generalized from documented musical conventions.",
      "authenticityTags": ["neoclassical", "bass"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "fusion-cinematic-granular-shimmer",
      "worldId": "fusion-ambient",
      "traditionId": "fusion-cinematic-neoclassical",
      "name": "Granular Shimmer Ambient Cloud",
      "family": "Synth",
      "category": "texture",
      "description": "Granular pitch-shifted shimmer cloud hovering in the high frequencies, creating vast cinematic depth.",
      "tags": ["neoclassical", "ambient", "shimmer", "pad", "texture"],
      "scopes": ["phrase", "region", "track"],
      "roles": ["texture", "pad", "harmony"],
      "instruments": ["synth"],
      "meter": "4/4",
      "cycleLength": 2,
      "subdivisions": 16,
      "onsetGrid": [0, 8, 16, 24],
      "accentProfile": [0.9, 0.7, 0.85, 0.7],
      "velocityProfile": [0.85, 0.65, 0.8, 0.65],
      "articulations": ["legato"],
      "density": "sparse",
      "phrasePosition": ["start", "middle", "end"],
      "sectionUsage": ["intro", "verse", "chorus", "coda"],
      "variants": [],
      "provenance": "Genre-pack support pattern for Neoclassical & Cinematic Fusion; generalized from documented musical conventions.",
      "authenticityTags": ["neoclassical", "ambient"],
      "danceTags": ["social-partner"],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    }
  ],
  "techniques": [
    "volume pedal swells with shimmer reverb",
    "micro-timing pocket adjustments",
    "felt piano dampening",
    "granular time-stretching"
  ],
  "forms": [
    "intro",
    "verse",
    "chorus",
    "breakdown",
    "verse",
    "chorus",
    "coda"
  ],
  "relationships": [
    "sub-bass ↔ felt piano (intimate anchor & melody)",
    "percussion ↔ guitar swells (textural tapestry)",
    "drums ↔ bass (relaxed downtempo pocket)"
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
    "open, meditative, and responsive sonic architecture allowing dancers freedom to interpret musicality with complete physical freedom",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  "instrumentIdeas": {
    "bass": [
      "analog synthesizer sine/saw low-pass filtered sub-bass (Moog style)"
    ],
    "piano": [
      "upright felt piano with mechanical pedal and hammer warmth"
    ],
    "percussion": [
      "natural clay udu drum with soft dried seed pod rattles"
    ],
    "synth": [
      "evolving texture and harmonic motion"
    ],
    "guitar": [
      "fusion lead/texture color"
    ]
  },
  "combinations": [
    "Fusion + Blues Dance",
    "Fusion + Neo-Zouk",
    "Fusion + West Coast Swing"
  ],
  "danceTags": [
    "festival-fusion",
    "blues-fusion-compatible",
    "wcs-compatible",
    "social-partner"
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Slow breathing sub-bass pulse under organic hand percussion and ambient guitar swells",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Blues ↔ Fusion/Ambient ↔ WCS (shared slow-groove pocket)",
    "Zouk ↔ Fusion/Ambient (Neo-Zouk crossover)",
    "Tango ↔ Fusion/Ambient (Electro-Tango neo sets)"
  ]
};
