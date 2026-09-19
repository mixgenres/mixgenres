import { GenreWorld } from '../../types';

export const MATH_ROCK_WORLD: GenreWorld = {
  id: "math-rock",
  name: "Math Rock",
  family: "Progressive / Polymetric",
  color: "#4e738c",
  level: "world",
  description: "Intricate, rhythmically adventurous guitar-forward music defined by two-hand fretboard tapping, odd time signatures (7/8, 11/8, 5/4), interlocking polymetric riffs, conversational bass counterpoint, and dynamic post-rock crescendos.",
  traditions: [
    {
      id: "math-rock-midwest",
      worldId: "math-rock",
      name: "Midwest Math Rock & Tapping",
      origin: "American Midwest / Japan",
      era: "1990s–Present",
      description: "Clean-toned, open-tuned guitars with intricate two-hand tapping, complex time signatures (7/8, 11/8), conversational basslines, and jazz-influenced dynamic phrasing.",
      characteristicInstruments: [
        "electric-guitar",
        "bass",
        "drums"
      ],
      preferredMeters: [
        "7/8",
        "11/8",
        "4/4"
      ],
      tempoRange: [
        110,
        140
      ],
      keySubstyles: [
        "Midwest Emo Math",
        "Japanese Math Rock (Toe, Tricot)",
        "Clean Tapping Instrumental"
      ],
      coreConcepts: [
        "two-hand fretboard tapping",
        "odd-meter cycles (7/8, 5/8)",
        "open alternate tunings (FACGCE)",
        "interlocking polymetric guitar counterpoint"
      ],
      rhythmicGrammar: [
        "7/8 grouped as 2+2+3 or 3+2+2",
        "syncopated ghost-snare accents between tapped notes"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      signatureCell: "Additive odd-meter 7/8 cell [2+2+3] with clean tapped arpeggios",
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: 0,
        microtimingFeel: "straight"
      },
      sectionProgressions: {
        intro: ["IVmaj7", "V6", "vi9", "iii7"],
        verse: ["IVmaj7", "Imaj7", "ii9", "Vadd9"],
        chorus: ["vi9", "IVmaj7", "I", "V"],
        solo: ["IVmaj7", "V", "vi", "iii"],
        ending: ["IVmaj7", "IVmaj7", "Imaj7", "Imaj7"]
      }
    },
    {
      id: "math-rock-post-rock",
      worldId: "math-rock",
      name: "Post-Rock Instrumental Build",
      origin: "US / UK / Iceland",
      era: "1990s–Present",
      description: "Cinematic dynamic arches transitioning from whisper-quiet ambient guitar delay swells to thunderous, heavy climactic crescendos.",
      characteristicInstruments: [
        "electric-guitar",
        "bass",
        "drums",
        "synth"
      ],
      preferredMeters: [
        "4/4",
        "6/8"
      ],
      tempoRange: [
        75,
        115
      ],
      keySubstyles: [
        "Cinematic Post-Rock",
        "Crescendo-Core",
        "Ambient Instrumental Rock"
      ],
      coreConcepts: [
        "extreme dynamic range (pp to fff)",
        "reverb and delay wall-of-sound",
        "slow narrative pacing",
        "drum crescendo"
      ],
      rhythmicGrammar: [
        "sparse downbeats expanding into relentless rolling tom patterns"
      ],
      danceTags: [
        "listening",
        "festival-fusion"
      ],
      tuningSystem: "12-tet",
      signatureCell: "Slow 16-bar crescendo from single guitar harmonic to full-band explosion",
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: 0,
        microtimingFeel: "rubato"
      },
      sectionProgressions: {
        intro: ["I", "V", "vi", "IV"],
        verse: ["I", "iii", "vi", "IVmaj7"],
        chorus: ["vi", "IV", "I", "V"],
        coda: ["IVmaj7", "IVmaj7", "I", "I"]
      }
    },
    {
      id: "math-rock-prog-fusion",
      worldId: "math-rock",
      name: "Progressive & Polymetric Fusion",
      origin: "International",
      era: "2000s–Present",
      description: "Heavy, virtuosic polymeter: 4/4 drums against 5/8 guitar riffs, low-register 8-string thumping, and sudden metric modulations.",
      characteristicInstruments: [
        "electric-guitar",
        "bass",
        "drums"
      ],
      preferredMeters: [
        "5/4",
        "7/8",
        "4/4"
      ],
      tempoRange: [
        120,
        160
      ],
      keySubstyles: [
        "Djent-adjacent Math",
        "Instrumental Prog Fusion",
        "Polymetric Groove"
      ],
      coreConcepts: [
        "polymeter (3 against 4, 5 against 4)",
        "metric modulation",
        "slap/thump bass techniques",
        "accent unisons"
      ],
      rhythmicGrammar: [
        "guitar cycling 5-step motif against 4/4 kick-snare grid until resolution"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      signatureCell: "Polymetric phrase phase-shifting across measure barlines",
      grooveMechanics: {
        swingPercentage: 50,
        anticipationOffsetSteps: 0,
        microtimingFeel: "straight"
      },
      sectionProgressions: {
        intro: ["i9", "bVImaj7#11", "iv11", "V7alt"],
        verse: ["i7", "bVII/II", "bIII", "bVImaj7"],
        chorus: ["bVImaj7", "bVII", "i9", "bIII/V"],
        solo: ["iv9", "v7", "bVImaj7", "bVII9"]
      }
    }
  ],
  substyles: [
    "Midwest Math Rock",
    "Japanese Math Rock",
    "Post-Rock Instrumental",
    "Progressive Fusion",
    "Djent-adjacent Math"
  ],
  artists: [
    "American Football",
    "Toe",
    "Tricot",
    "Tera Melos",
    "Covet",
    "TTNG (This Town Needs Guns)",
    "Chon",
    "Explosions in the Sky"
  ],
  concepts: [
    "two-hand tapping",
    "odd-meter cycles (7/8, 11/8)",
    "open alternate tunings (FACGCE)",
    "polymeter (5 against 4)",
    "metric modulation",
    "clean tone sparkle",
    "dynamic crescendo"
  ],
  roles: {
    guitar: [
      "two-hand clean tapping arpeggios",
      "polymetric riffing",
      "tremolo swells"
    ],
    bass: [
      "conversational tapped bassline",
      "odd-meter walking cells",
      "percussive thump"
    ],
    drums: [
      "precise odd-meter ghost notes",
      "metric modulation fills",
      "building tom crescendos"
    ],
    lead: [
      "angular tapped melodic lines",
      "soaring post-rock tremolo leads"
    ],
    texture: [
      "ambient shimmer reverb swells",
      "delay washes"
    ]
  },
  patterns: [
    {
      id: "math-tapping-7-8",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Midwest Clean Tapped Arpeggio (7/8)",
      shortName: "Midwest 7/8 Tap",
      family: "Math Guitar",
      category: "ostinato",
      description: "Intricate clean two-hand fretboard tapping cycling in 7/8 (grouped 2+2+3) with ringing natural harmonics.",
      tags: [
        "math-rock",
        "guitar",
        "tapping",
        "odd-meter",
        "clean"
      ],
      scopes: [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      roles: [
        "lead",
        "harmony",
        "guitar"
      ],
      instruments: [
        "electric-guitar"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        0,
        2,
        4,
        6,
        8,
        10,
        12
      ],
      accentProfile: [
        1.0,
        0.65,
        0.9,
        0.6,
        0.95,
        0.7,
        0.85
      ],
      velocityProfile: [
        0.95,
        0.6,
        0.85,
        0.55,
        0.9,
        0.65,
        0.8
      ],
      articulations: [
        "hammer-on",
        "pull-off"
      ],
      density: "dense",
      phrasePosition: [
        "start",
        "middle"
      ],
      sectionUsage: [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      variants: [
        {
          id: "math-tapping-7-8-sparse",
          parentPatternId: "math-tapping-7-8",
          name: "Midwest Clean Tapped Arpeggio — 2+2+3 Pulse",
          shortName: "7/8 Tap Pulse",
          variationType: "sparse",
          probability: 0.25,
          description: "Strips interior tapping to accentuate the primary 2+2+3 pulses.",
          onsetGrid: [
            0,
            4,
            8,
            12
          ],
          accentProfile: [
            1.0,
            0.85,
            0.95,
            0.8
          ],
          velocityProfile: [
            0.9,
            0.8,
            0.9,
            0.75
          ]
        },
        {
          id: "math-tapping-7-8-syncopated",
          parentPatternId: "math-tapping-7-8",
          name: "Midwest Clean Tapped Arpeggio — Syncopated Pickups",
          shortName: "7/8 Tap Syncopated",
          variationType: "syncopated",
          probability: 0.2,
          description: "Adds 16th-note pickups and hammer-on flourishes between main beats.",
          onsetGrid: [
            0,
            3,
            4,
            7,
            8,
            11,
            12
          ],
          accentProfile: [
            1.0,
            0.6,
            0.85,
            0.6,
            0.95,
            0.65,
            0.8
          ],
          velocityProfile: [
            0.95,
            0.55,
            0.8,
            0.55,
            0.9,
            0.6,
            0.8
          ]
        }
      ],
      harmonicContext: [
        "tonal or modal context"
      ],
      difficulty: 2,
      weight: 1.0,
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "tapping"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      swingPercentage: 50,
      anticipationOffset: 0,
      roleDependencies: [
        "lead",
        "harmony"
      ],
      transformations: [
        "density",
        "accent",
        "phrasePosition"
      ],
      interactionRules: [
        {
          id: "math-rock-interaction-1",
          worldId: "math-rock",
          sourceRole: "drums",
          targetRole: "bass",
          relationship: "reinforce",
          description: "Low-end attacks reinforce the main pulse without doubling every subdivision.",
          timingOffsetSteps: 0,
          probability: 0.78
        }
      ]
    },
    {
      id: "math-odd-meter-drums",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Odd-Meter Precision Kit Groove (7/8)",
      shortName: "7/8 Kit Groove",
      family: "Math Drums",
      category: "groove",
      description: "Punchy kick and ghosted snare accents locking with odd-meter guitar figures and open hi-hat barks.",
      tags: [
        "math-rock",
        "drums",
        "odd-meter",
        "dynamic"
      ],
      scopes: [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      roles: [
        "drums",
        "pulse"
      ],
      instruments: [
        "drums"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        0,
        3,
        4,
        7,
        8,
        10,
        12
      ],
      accentProfile: [
        1.0,
        0.6,
        0.95,
        0.55,
        0.9,
        0.7,
        0.85
      ],
      velocityProfile: [
        0.95,
        0.55,
        0.9,
        0.5,
        0.85,
        0.65,
        0.8
      ],
      density: "medium",
      phrasePosition: [
        "start",
        "middle"
      ],
      sectionUsage: [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      variants: [
        {
          id: "math-odd-meter-drums-busy",
          parentPatternId: "math-odd-meter-drums",
          name: "Odd-Meter Kit Groove — Ghost Snare Drive",
          shortName: "7/8 Kit Ghost Drive",
          variationType: "dense",
          probability: 0.25,
          description: "Adds articulate 16th-note ghost snare work and ride cymbal bell pings.",
          onsetGrid: [
            0,
            2,
            3,
            4,
            6,
            8,
            9,
            10,
            12,
            13
          ],
          accentProfile: [
            1.0,
            0.4,
            0.55,
            0.95,
            0.45,
            0.9,
            0.4,
            0.75,
            0.85,
            0.4
          ],
          velocityProfile: [
            0.95,
            0.35,
            0.5,
            0.9,
            0.4,
            0.85,
            0.35,
            0.7,
            0.8,
            0.35
          ]
        },
        {
          id: "math-odd-meter-drums-sparse",
          parentPatternId: "math-odd-meter-drums",
          name: "Odd-Meter Kit Groove — Half-Time Pocket",
          shortName: "7/8 Kit Half-Time",
          variationType: "sparse",
          probability: 0.2,
          description: "Laid-back pulse emphasizing the macro beats on 0 and 8.",
          onsetGrid: [
            0,
            4,
            8,
            12
          ],
          accentProfile: [
            1.0,
            0.7,
            0.95,
            0.6
          ],
          velocityProfile: [
            0.95,
            0.65,
            0.9,
            0.55
          ]
        }
      ],
      harmonicContext: [
        "tonal or modal context"
      ],
      difficulty: 2,
      weight: 1.0,
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "drums"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      swingPercentage: 50,
      anticipationOffset: 0,
      roleDependencies: [
        "drums"
      ],
      transformations: [
        "density",
        "accent",
        "phrasePosition"
      ],
      interactionRules: [
        {
          id: "math-rock-interaction-2",
          worldId: "math-rock",
          sourceRole: "voice",
          targetRole: "harmony",
          relationship: "leaveSpace",
          description: "Harmony reduces density under vocal entries so the phrase remains foregrounded.",
          timingOffsetSteps: 0,
          probability: 0.72
        }
      ],
      articulations: [
        "accented",
        "ghost-aware"
      ]
    },
    {
      id: "math-two-hand-bass",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Conversational Tapped Bassline (7/8)",
      shortName: "7/8 Tapped Bass",
      family: "Math Bass",
      category: "ostinato",
      description: "Melodic mid-range bass line with percussive fret-taps and counter-melodic responses to the lead guitar.",
      tags: [
        "math-rock",
        "bass",
        "counterline",
        "melodic"
      ],
      scopes: [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      roles: [
        "bass",
        "counterline"
      ],
      instruments: [
        "bass"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        0,
        4,
        6,
        8,
        11,
        12
      ],
      accentProfile: [
        1.0,
        0.75,
        0.9,
        0.8,
        0.95,
        0.7
      ],
      velocityProfile: [
        0.95,
        0.7,
        0.85,
        0.75,
        0.9,
        0.65
      ],
      density: "medium",
      phrasePosition: [
        "start",
        "middle"
      ],
      sectionUsage: [
        "verse",
        "chorus",
        "solo"
      ],
      variants: [
        {
          id: "math-two-hand-bass-sparse",
          parentPatternId: "math-two-hand-bass",
          name: "Conversational Tapped Bassline — Root Anchor",
          shortName: "7/8 Bass Anchor",
          variationType: "sparse",
          probability: 0.25,
          description: "Foundational root notes on major metric anchors 0, 4, 8.",
          onsetGrid: [
            0,
            4,
            8
          ],
          accentProfile: [
            1.0,
            0.8,
            0.9
          ],
          velocityProfile: [
            0.95,
            0.75,
            0.85
          ]
        }
      ],
      harmonicContext: [
        "tonal or modal context"
      ],
      difficulty: 2,
      weight: 0.9,
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "bass"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      swingPercentage: 50,
      anticipationOffset: 0,
      roleDependencies: [
        "bass",
        "counterline"
      ],
      transformations: [
        "density",
        "accent",
        "phrasePosition"
      ],
      articulations: [
        "accented",
        "ghost-aware"
      ]
    },
    {
      id: "math-polymeter-interlock",
      worldId: "math-rock",
      traditionId: "math-rock-prog-fusion",
      name: "Polymetric 5-Against-4 Guitar Ostinato",
      shortName: "5:4 Polymetric Riff",
      family: "Math Guitar",
      category: "ostinato",
      description: "Repeated 5-sixteenth note guitar motif phase-shifting across 4/4 measure barlines.",
      tags: [
        "math-rock",
        "guitar",
        "polymeter"
      ],
      scopes: [
        "phrase",
        "region"
      ],
      roles: [
        "harmony",
        "guitar"
      ],
      instruments: [
        "electric-guitar"
      ],
      meter: "4/4",
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [
        0,
        5,
        10,
        15
      ],
      accentProfile: [
        1.0,
        0.9,
        0.85,
        0.8
      ],
      velocityProfile: [
        0.95,
        0.85,
        0.8,
        0.75
      ],
      density: "medium",
      phrasePosition: [
        "start"
      ],
      sectionUsage: [
        "verse",
        "chorus"
      ],
      variants: [],
      harmonicContext: [
        "tonal or modal context"
      ],
      difficulty: 2,
      weight: 0.8,
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "polymeter"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      swingPercentage: 50,
      anticipationOffset: 0,
      roleDependencies: [
        "harmony",
        "guitar"
      ],
      transformations: [
        "density",
        "accent",
        "phrasePosition"
      ]
    },
    {
      id: "math-post-rock-crescendo",
      worldId: "math-rock",
      traditionId: "math-rock-post-rock",
      name: "Post-Rock Tremolo & Swell",
      shortName: "Post-Rock Tremolo",
      family: "Post Rock",
      category: "groove",
      description: "Rapid tremolo picking and delay wash building emotional tension across multiple measures.",
      tags: [
        "post-rock",
        "tremolo",
        "ambient",
        "guitar"
      ],
      scopes: [
        "measure",
        "phrase"
      ],
      roles: [
        "lead",
        "texture"
      ],
      instruments: [
        "electric-guitar"
      ],
      meter: "4/4",
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
      ],
      accentProfile: [
        0.6, 0.65, 0.7, 0.75, 0.8, 0.82, 0.85, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1.0, 1.0, 1.0
      ],
      velocityProfile: [
        0.55, 0.6, 0.65, 0.7, 0.75, 0.78, 0.8, 0.84, 0.86, 0.88, 0.9, 0.92, 0.95, 0.98, 0.98, 0.98
      ],
      density: "dense",
      phrasePosition: [
        "start"
      ],
      sectionUsage: [
        "chorus",
        "solo"
      ],
      variants: [],
      harmonicContext: [
        "tonal or modal context"
      ],
      difficulty: 2,
      weight: 0.9,
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "post-rock"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      swingPercentage: 50,
      anticipationOffset: 0,
      roleDependencies: [
        "lead",
        "texture"
      ],
      transformations: [
        "density",
        "accent"
      ],
      articulations: [
        "legato"
      ]
    },
    {
      id: "math-ambient-swell",
      worldId: "math-rock",
      traditionId: "math-rock-post-rock",
      name: "Ambient Guitar Volume Swell",
      shortName: "Ambient Swell",
      family: "Atmosphere",
      category: "cell",
      description: "Ethereal volume pedal swells drenched in shimmer reverb behind the rhythmic interplay.",
      tags: [
        "math-rock",
        "swell",
        "texture"
      ],
      scopes: [
        "measure"
      ],
      roles: [
        "texture"
      ],
      instruments: [
        "electric-guitar",
        "synth"
      ],
      meter: "4/4",
      cycleLength: 1,
      subdivisions: 16,
      onsetGrid: [
        0,
        6,
        12
      ],
      accentProfile: [
        0.85,
        0.9,
        0.95
      ],
      velocityProfile: [
        0.8,
        0.85,
        0.9
      ],
      density: "sparse",
      phrasePosition: [
        "start"
      ],
      sectionUsage: [
        "intro",
        "verse",
        "coda"
      ],
      variants: [],
      harmonicContext: [
        "tonal or modal context"
      ],
      difficulty: 1,
      weight: 0.7,
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "ambient"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      swingPercentage: 50,
      anticipationOffset: 0,
      roleDependencies: [
        "texture"
      ],
      transformations: [
        "density",
        "accent"
      ]
    },
    {
      id: "math-rock-verse-7-8",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Midwest 7/8 Interlocking Verse Guitar",
      shortName: "7/8 Verse Guitar",
      family: "Math Guitar",
      category: "sectionPattern",
      description: "Delicate clean fingerpicking and hammer-ons in FACGCE tuning establishing the verse foundation in 2+2+3 grouping.",
      tags: [
        "math-rock",
        "verse",
        "guitar",
        "7/8",
        "clean"
      ],
      scopes: [
        "measure",
        "phrase",
        "region"
      ],
      roles: [
        "guitar",
        "harmony"
      ],
      instruments: [
        "electric-guitar"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        0,
        3,
        4,
        7,
        8,
        10,
        12
      ],
      accentProfile: [
        1.0,
        0.7,
        0.85,
        0.65,
        0.9,
        0.7,
        0.8
      ],
      velocityProfile: [
        0.9,
        0.65,
        0.8,
        0.6,
        0.85,
        0.65,
        0.75
      ],
      density: "medium",
      phrasePosition: [
        "start",
        "middle"
      ],
      sectionUsage: [
        "verse"
      ],
      variants: [],
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "verse"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 2,
      weight: 1.0,
      enabled: true
    },
    {
      id: "math-rock-chorus-lift",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Dynamic 7/8 Chorus Strum & Chime",
      shortName: "7/8 Chorus Lift",
      family: "Math Guitar",
      category: "sectionPattern",
      description: "Full open-string ringing chords with driving accents on beats 1, 3, and 5 creating a soaring chorus climax.",
      tags: [
        "math-rock",
        "chorus",
        "guitar",
        "7/8"
      ],
      scopes: [
        "measure",
        "phrase",
        "region"
      ],
      roles: [
        "guitar",
        "harmony"
      ],
      instruments: [
        "electric-guitar"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        0,
        2,
        4,
        6,
        8,
        9,
        10,
        12
      ],
      accentProfile: [
        1.0,
        0.75,
        0.95,
        0.7,
        1.0,
        0.65,
        0.85,
        0.8
      ],
      velocityProfile: [
        0.95,
        0.7,
        0.9,
        0.65,
        0.95,
        0.6,
        0.8,
        0.75
      ],
      density: "dense",
      phrasePosition: [
        "start",
        "middle"
      ],
      sectionUsage: [
        "chorus"
      ],
      variants: [],
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "chorus"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 2,
      weight: 1.0,
      enabled: true
    },
    {
      id: "math-rock-fill-7-8",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Odd-Meter Linear Tom & Snare Fill (7/8)",
      shortName: "7/8 Drum Fill",
      family: "Math Drums",
      category: "fill",
      description: "Rapid linear ghost-snare rolls and rack-tom descent transitioning out of odd-meter phrases.",
      tags: [
        "math-rock",
        "drums",
        "fill",
        "7/8"
      ],
      scopes: [
        "measure",
        "phrase"
      ],
      roles: [
        "drums",
        "fill"
      ],
      instruments: [
        "drums"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        4,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
      ],
      accentProfile: [
        0.7,
        0.75,
        0.8,
        0.85,
        0.85,
        0.9,
        0.95,
        1.0,
        1.0
      ],
      velocityProfile: [
        0.65,
        0.7,
        0.75,
        0.8,
        0.8,
        0.85,
        0.9,
        0.95,
        0.95
      ],
      density: "dense",
      phrasePosition: [
        "end"
      ],
      sectionUsage: [
        "verse",
        "chorus",
        "bridge"
      ],
      variants: [],
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "drums",
        "fill"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 3,
      weight: 0.9,
      enabled: true
    },
    {
      id: "math-rock-break-unison",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Unison Band Staccato Break (7/8)",
      shortName: "7/8 Unison Break",
      family: "Ensemble",
      category: "break",
      description: "Sudden tight unison full-band stabs on [0, 4, 8, 11] leaving dramatic silence between hits.",
      tags: [
        "math-rock",
        "break",
        "unison",
        "7/8"
      ],
      scopes: [
        "measure",
        "phrase"
      ],
      roles: [
        "lead",
        "guitar",
        "bass",
        "drums"
      ],
      instruments: [
        "electric-guitar",
        "bass",
        "drums"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        0,
        4,
        8,
        11
      ],
      accentProfile: [
        1.0,
        0.95,
        1.0,
        0.9
      ],
      velocityProfile: [
        0.95,
        0.9,
        0.95,
        0.85
      ],
      density: "sparse",
      phrasePosition: [
        "middle",
        "end"
      ],
      sectionUsage: [
        "breakdown",
        "interlude",
        "bridge"
      ],
      variants: [],
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "break"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 3,
      weight: 0.85,
      enabled: true
    },
    {
      id: "math-rock-cadence-7-8",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Odd-Meter Metric Resolution Cadence (7/8)",
      shortName: "7/8 Metric Cadence",
      family: "Math Guitar",
      category: "cadence",
      description: "Ritardando chord ring-out resolving the 7/8 cycle with ringing harmonics on the final downbeat.",
      tags: [
        "math-rock",
        "cadence",
        "ending",
        "7/8"
      ],
      scopes: [
        "phrase",
        "region"
      ],
      roles: [
        "harmony",
        "guitar",
        "bass"
      ],
      instruments: [
        "electric-guitar",
        "bass"
      ],
      meter: "7/8",
      cycleLength: 1,
      subdivisions: 14,
      onsetGrid: [
        0,
        4,
        8,
        12
      ],
      accentProfile: [
        1.0,
        0.8,
        0.7,
        0.6
      ],
      velocityProfile: [
        0.95,
        0.75,
        0.65,
        0.55
      ],
      density: "sparse",
      phrasePosition: [
        "end"
      ],
      sectionUsage: [
        "ending",
        "coda"
      ],
      variants: [],
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "cadence"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 2,
      weight: 0.9,
      enabled: true
    },
    {
      id: "math-asym-11-8-riff",
      worldId: "math-rock",
      traditionId: "math-rock-midwest",
      name: "Asymmetric 11/8 Tapped Riff (3+3+3+2)",
      shortName: "11/8 Asymmetric Riff",
      family: "Math Guitar",
      category: "ostinato",
      description: "Complex 11/8 tapping cycle subdivided into 3+3+3+2 with bright open harmonics and melodic counterpoint.",
      tags: [
        "math-rock",
        "tapping",
        "11/8",
        "guitar"
      ],
      scopes: [
        "measure",
        "phrase",
        "region"
      ],
      roles: [
        "guitar",
        "lead"
      ],
      instruments: [
        "electric-guitar"
      ],
      meter: "11/8",
      cycleLength: 1,
      subdivisions: 22,
      onsetGrid: [
        0,
        3,
        6,
        9,
        12,
        15,
        18,
        20
      ],
      accentProfile: [
        1.0,
        0.65,
        0.9,
        0.6,
        0.95,
        0.6,
        0.85,
        0.9
      ],
      velocityProfile: [
        0.95,
        0.6,
        0.85,
        0.55,
        0.9,
        0.55,
        0.8,
        0.85
      ],
      density: "dense",
      phrasePosition: [
        "start",
        "middle"
      ],
      sectionUsage: [
        "intro",
        "verse",
        "solo"
      ],
      variants: [],
      provenance: "Math Rock genre-pack structural pattern; generalized for recombination, not a transcription of a single recording.",
      authenticityTags: [
        "math-rock",
        "11/8"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 4,
      weight: 0.85,
      enabled: true
    },
    {
      id: "math-post-rock-rolling-toms",
      worldId: "math-rock",
      traditionId: "math-rock-post-rock",
      name: "Post-Rock Rolling Tom Crescendo",
      shortName: "Rolling Tom Swell",
      family: "Drums",
      category: "groove",
      description: "Slowly building dynamic floor and rack tom rolls with syncopated ride bell pings underpinning cinematic ambient crescendos.",
      tags: [
        "post-rock",
        "drums",
        "crescendo",
        "toms"
      ],
      scopes: [
        "measure",
        "phrase",
        "region",
        "track"
      ],
      roles: [
        "drums",
        "pulse"
      ],
      instruments: [
        "drums"
      ],
      meter: "4/4",
      cycleLength: 2,
      subdivisions: 16,
      onsetGrid: [
        0, 3, 6, 8, 11, 14, 16, 19, 22, 24, 26, 28, 30
      ],
      accentProfile: [
        0.6, 0.7, 0.75, 0.8, 0.85, 0.9, 0.7, 0.8, 0.85, 0.95, 0.9, 0.95, 1.0
      ],
      velocityProfile: [
        0.55, 0.65, 0.7, 0.75, 0.8, 0.85, 0.65, 0.75, 0.8, 0.9, 0.85, 0.9, 0.95
      ],
      density: "dense",
      phrasePosition: [
        "start",
        "middle",
        "end"
      ],
      sectionUsage: [
        "verse",
        "chorus",
        "coda"
      ],
      variants: [],
      provenance: "Genre-pack support pattern for Post-Rock; generalized from documented musical conventions.",
      authenticityTags: [
        "post-rock",
        "drums"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 2,
      weight: 0.9,
      enabled: true
    },
    {
      id: "math-prog-djent-chug",
      worldId: "math-rock",
      traditionId: "math-rock-prog-fusion",
      name: "Polymetric 5/4 Thump & Chug",
      shortName: "5/4 Thump & Chug",
      family: "Guitar",
      category: "riff",
      description: "Aggressive, ultra-tight palm-muted staccato riff cycling in 5/4 meter with 20 subdivisions.",
      tags: [
        "prog-fusion",
        "guitar",
        "polymeter",
        "djent",
        "math-rock"
      ],
      scopes: [
        "measure",
        "phrase",
        "region",
        "track"
      ],
      roles: [
        "guitar",
        "riff"
      ],
      instruments: [
        "electric-guitar"
      ],
      meter: "5/4",
      cycleLength: 1,
      subdivisions: 20,
      onsetGrid: [
        0, 4, 7, 10, 14, 17
      ],
      accentProfile: [
        1.0, 0.8, 0.95, 0.75, 1.0, 0.85
      ],
      velocityProfile: [
        0.95, 0.75, 0.9, 0.7, 0.95, 0.8
      ],
      density: "medium",
      phrasePosition: [
        "start",
        "middle",
        "end"
      ],
      sectionUsage: [
        "intro",
        "verse",
        "solo"
      ],
      variants: [],
      provenance: "Genre-pack support pattern for Progressive & Polymetric Fusion; generalized from documented musical conventions.",
      authenticityTags: [
        "prog-fusion",
        "riff"
      ],
      danceTags: [
        "listening"
      ],
      tuningSystem: "12-tet",
      difficulty: 3,
      weight: 0.9,
      enabled: true
    }
  ],
  techniques: [
    "two-hand fretboard tapping",
    "hybrid picking",
    "volume pedal swells",
    "polymetric rhythmic displacement",
    "ghost-note snare work"
  ],
  forms: [
    "intro",
    "verse",
    "chorus",
    "interlude",
    "verse",
    "solo",
    "coda"
  ],
  relationships: [
    "guitar ↔ bass (two-hand counterpoint conversation)",
    "drums ↔ guitar (odd-meter accent lock)",
    "lead ↔ texture (ambient swell bed)"
  ],
  transformations: [
    "trans-density-dense",
    "trans-anticipation",
    "trans-phrase-cadence"
  ],
  songBehaviors: [
    "dynamic arcs from whisper-quiet fingerpicking to massive math-rock climaxes",
    "subtle metric phase shifts that resolve every several bars",
    "avoid identical loop repetition by alternating pattern variants",
    "use fills, breaks, cadences, and bridge textures as structural events",
    "let lead/voice parts create space and response relationships"
  ],
  instrumentIdeas: {
    guitar: [
      "clean single-coil Fender Telecaster through chimey tube amp with analog delay"
    ],
    bass: [
      "punchy active bass with bright roundwound strings for clear tapping attack"
    ],
    drums: [
      "crisp maple snare with tight, articulate cymbals and punchy kick"
    ]
  },
  combinations: [
    "Math Rock + Jazz Fusion",
    "Math Rock + Djent Metal",
    "Math Rock + Post-Rock Ambient"
  ],
  danceTags: [
    "listening"
  ],
  tuningSystem: "12-tet",
  signatureCell: "Additive odd-meter 7/8 cell [2+2+3] with clean tapped arpeggios",
  grooveMechanics: {
    swingPercentage: 50,
    anticipationOffsetSteps: 0,
    microtimingFeel: "straight"
  },
  crossLinks: [
    "Math Rock ↔ Metal (Djent)",
    "Math Rock ↔ Jazz Fusion",
    "Math Rock ↔ Electronic / IDM"
  ]
};
