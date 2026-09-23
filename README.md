# Mix Genres

> **Browser-native generative music workstation and cultural acoustic engine.**  
> Built with React 19, TypeScript, Elementary Audio, and Web Audio. Runs 100% client-side with zero external servers, modeling authentic global musical traditions and exporting broadcast-quality MP3s directly in the browser.

---

## Table of Contents

1. [Architectural Overview & Core Principles](#1-architectural-overview--core-principles)
2. [System Architecture & Repository Structure](#2-system-architecture--repository-structure)
   - [2.1 Cultural Knowledge & Data Layer](#21-cultural-knowledge--data-layer)
   - [2.2 Performance Interpretation & Ensemble Grammar](#22-performance-interpretation--ensemble-grammar)
   - [2.3 Composition, Harmony & Sequencing Pipeline](#23-composition-harmony--sequencing-pipeline)
   - [2.4 Interactive Performance Dials](#24-interactive-performance-dials)
   - [2.5 Elementary Audio Physical Modeling & DSP](#25-elementary-audio-physical-modeling--dsp)
   - [2.6 Real-Time Transport & Offline MP3 Render Engine](#26-real-time-transport--offline-mp3-render-engine)
   - [2.7 Responsive Canvas & Editorial UI](#27-responsive-canvas--editorial-ui)
3. [The 32 Canonical Genre Worlds](#3-the-32-canonical-genre-worlds)
   - [Genre Reference Matrix](#genre-reference-matrix)
   - [Deep Dive: Specialized Cultural Heritage Traditions](#deep-dive-specialized-cultural-heritage-traditions)
4. [Catalog of Over 200 Song Styles](#4-catalog-of-over-200-song-styles)
5. [Authoritative Instrument Catalog & Acoustic Profiles](#5-authoritative-instrument-catalog--acoustic-profiles)
6. [Culturally Grounded Articulations by Tradition](#6-culturally-grounded-articulations-by-tradition)
7. [Development, Verification & CLI Tooling](#7-development-verification--cli-tooling)
   - [Quick Start](#quick-start)
   - [Analysis, Audit & Diagnostic Scripts](#analysis-audit--diagnostic-scripts)
   - [Production Build & GitHub Pages Deployment](#production-build--github-pages-deployment)
8. [License](#8-license)

---

## 1. Architectural Overview & Core Principles

Mix Genres is not a typical step sequencer, loop library, or MIDI playback engine. It is a culturally grounded musical simulator that models how ensembles of human musicians listen to each other, interpret rhythmic cycles, shape dynamic phrasing, and physically excite acoustic instruments.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        User Interface & Controls                       │
│     Arrangement Timeline • Chord Picker • 5 Expressive Dials           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Cultural Knowledge & Style Contracts                 │
│    32 Genre Worlds • 200+ Styles • World Contracts • Invariant Rules   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│             Performance Interpretation & Phrase Memory                 │
│      Ensemble Listening • Role Densities • Dynamic Phrase Memory       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                Sequencing Engine & Harmonic Voice Leading              │
│       Microtiming • Tuning (Maqam/Just/12-TET) • Drop-2 Voicing        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     ▼                             ▼
       ┌───────────────────────────┐ ┌───────────────────────────┐
       │   Real-Time Web Audio     │ │    Offline MP3 Bouncer    │
       │   AudioWorklet + Node     │ │   LameJS 128kbps Stream   │
       │   Interactive Playback    │ │   Direct File Export      │
       └───────────────────────────┘ └───────────────────────────┘
```

### Key Engineering Tenets

- **100% Client-Side DSP**: All chord selection, phrase planning, microtiming calculation, physical voice synthesis, and MP3 encoding execute directly on the user's CPU inside standard Web Audio and AudioWorklet contexts without sending any data over the network.
- **Cultural Grounding Over Eurocentric Grids**: Music is not treated as a rigid 4/4 grid of 12-TET quarter notes with a Western rock backbeat (kick on 1, snare on 2 and 4). The engine supports non-Western microtonal intonations (maqam quarter tones, 5-limit just intonation, Andalusian Phrygian temperaments), 12-count cyclical compás (Flamenco), timeline cycles (Afrobeats, Salsa clave polarities), and polymetric syncopations.
- **Direct Acoustic Physics Over Reverb Wash**: Environmental room reverberation and artificial room simulations are avoided in favor of direct instrument mechanics: body resonance, string harmonics, membrane tension, close-mic direct sound, and clean stereo bus summing.
- **Authored Patterns as Living Musical Material**: Authored patterns are treated as authoritative structural anchors, passing through a culturally grounded performance interpreter that introduces phrase memory, contextual variation, dynamic pickup gestures, and humanized microtiming.
- **Silence as an Active Performance Decision**: Real musicians know when to breathe and when not to play. The engine explicitly models rest, sparse comping, and conversational pause as authoritative musical choices.

---

## 2. System Architecture & Repository Structure

```text
mixgenres/
├── .github/workflows/
│   └── deploy-pages.yml              # Automated GitHub Pages CI/CD deployment
├── scripts/                          # Analysis, diagnostic & verification tooling
│   ├── GENRE_CATALOG_REQUIREMENTS.md # Authoritative catalog design guidelines
│   ├── audio-regression-harness.ts   # Audio engine output regression suite
│   ├── audit-instruments.ts          # Complete instrument range & register audit
│   ├── gain-calibration.ts           # Mix gain & headroom calibration analysis
│   ├── render-song.ts                # Headless CLI MP3 song renderer
│   ├── test-filter.ts                # Audio DSP filter unit verification
│   ├── verify-fixes.ts               # Comprehensive diagnostic validation suite
│   └── verify-microtiming-consistency.ts # Microtiming swing & feel consistency tests
├── src/
│   ├── data/                         # Cultural Knowledge & Music Theory
│   │   ├── genres/                   # 32 Canonical Genre World Definitions
│   │   │   ├── afrobeats.ts          # Afro-fusion timeline cycles
│   │   │   ├── bachata.ts            # Dominican derecho, majao & mambo
│   │   │   ├── blues.ts              # Shuffle feels, walking bass, turnaround riffs
│   │   │   ├── country.ts            # Two-step, train beats, pedal steel licks
│   │   │   ├── cumbia.ts             # Colombian/Sonidera syncopated bass & güira
│   │   │   ├── electronic.ts         # Machine grids, arp synths, club foundations
│   │   │   ├── flamenco.ts           # 12-count compás (Soleá, Bulerías, Tangos)
│   │   │   ├── folk.ts               # Fingerpicking, fiddle tunes, modal drones
│   │   │   ├── funk.ts               # "On the One" syncopation & clavinet chops
│   │   │   ├── hipHop.ts             # Boom-bap, trap hats, 808 sub patterns
│   │   │   ├── houseTechno.ts        # Four-on-the-floor, 909 hats, 303 acid lines
│   │   │   ├── jazz.ts               # Swing ride, walking bass, drop-2 substitutions
│   │   │   ├── kizomba.ts            # Angolan passada & batida pulse
│   │   │   ├── metal.ts              # Double-kick precision, palm-muted riffs
│   │   │   ├── reggaeDub.ts          # One-drop, guitar skank, organ bubble, tape echo
│   │   │   ├── reggaetonDembow.ts    # 3+3+2 dembow rhythm & perreo synth leads
│   │   │   ├── rock.ts               # Driving backbeats, power chords, melodic bass
│   │   │   ├── salsa.ts              # 2-3 / 3-2 Clave polarity, piano montuno, tumbao
│   │   │   ├── sambaBossa.ts         # Brazilian levada, surdo pulse, pandeiro
│   │   │   ├── ska.ts                # Upbeat skank, walking bass, brass stabs
│   │   │   ├── swing.ts              # Big-band Lindy bounce, four-to-the-bar guitar
│   │   │   ├── tango.ts              # Marcato, arrastre, bandoneón sweeps, síncopa
│   │   │   ├── timba.ts              # Cuban gear changes, marcha, aggressive montunos
│   │   │   ├── zouk.ts               # French Caribbean Kompa/Zouk cadence
│   │   │   └── index.ts              # Unified genre registry, source mapping & feels
│   │   ├── styles/                   # Style Contracts, Dialects & Catalog
│   │   │   ├── catalog.ts            # 200+ Style definitions & influence graphs
│   │   │   ├── contracts.ts          # World contracts, invariants & role definitions
│   │   │   ├── registry.ts           # Genre style registration & lookup helpers
│   │   │   ├── resolve.ts            # Dynamic style resolution & inheritance trails
│   │   │   ├── runtime.ts            # Runtime style helpers & fallback resolvers
│   │   │   ├── schema.ts             # Style schemas, grammar interfaces & types
│   │   │   ├── styleDialect.ts       # Progressions & rhythm fallbacks
│   │   │   └── styleProfiles.ts      # Curated sonic profiles & register mappings
│   │   ├── instruments/              # 100+ Instrument Definitions & Profiles
│   │   │   ├── definitions/          # Physical & GM Instrument Defs
│   │   │   ├── index.ts              # Catalog aggregator & family classifications
│   │   │   └── types.ts              # Physical instrument interfaces & categories
│   │   ├── chordPalette.ts           # Harmonic Tiers (Shared, Jazz, Genre-Specific)
│   │   └── genreForms.ts             # Macro-structural song form blueprints
│   │
│   ├── engine/                       # Execution & Audio Generation
│   │   ├── performance/              # Cultural Performance Interpretation Layer
│   │   │   ├── ensembleInteraction.ts    # Pocket locking, contagion & inter-track listening
│   │   │   ├── performanceGrammar.ts     # Grammar rules, density bounds & boundaries
│   │   │   ├── performanceInterpreter.ts # Attack gathering & figure modification
│   │   │   ├── performanceQuality.ts     # Voicing polish & harmonic refinement
│   │   │   └── phraseMemory.ts           # Track-level phrasing state (establish, vary, etc.)
│   │   ├── sequencing/               # Performance Compilation & Transport
│   │   │   ├── grid.ts               # Metric cycles, subdivisions & transitions
│   │   │   ├── perform.ts            # Master timeline assembler & attack builder
│   │   │   ├── tieredEngine.ts       # Multi-tier incremental caching compiler
│   │   │   └── transport.ts          # Real-time Web Audio transport sink & scheduler
│   │   ├── generators/               # Role-Specific Melodic/Rhythmic Generators
│   │   │   ├── arrange.ts            # Song sheet state, section mutations & undo
│   │   │   ├── arrangement.ts        # Dynamic section roles & voice orchestration
│   │   │   ├── bass.ts               # Tumbao, walking, one-drop, dembow, riff engine
│   │   │   ├── blend.ts              # Cross-genre guest lens blending
│   │   │   ├── cultural.ts           # Traditional rules & modal drone logic
│   │   │   ├── drums.ts              # Clave, palmas, ghost notes, hi-hats, shakers
│   │   │   ├── fusion.ts             # Multi-genre groove fusion & rhythm interleaving
│   │   │   ├── groove.ts             # Microtiming feel, swing curves & humanization
│   │   │   └── melody.ts             # Motif planning, lead lines & ornamental figures
│   │   ├── metadata/                 # Interactive Expressive Dials
│   │   │   ├── dials.ts              # Normalization for Pocket, Lift, Adventure, etc.
│   │   │   └── energy.ts             # Section dynamics & energy levels
│   │   ├── theory/                   # Microtonality, Articulation & Tuning
│   │   │   ├── articulation.ts       # Articulation resolvers & playback specs
│   │   │   ├── CulturalAcousticEvent.ts # Physical excitation & continuous phases
│   │   │   ├── dialects.ts           # Acoustic dialects & performance modes
│   │   │   ├── instrumentProfile.ts  # Voice ranges, registers & pitch profiles
│   │   │   ├── theory.ts             # Pitch parsing, interval logic & scale systems
│   │   │   ├── tuning.ts             # 12-TET, Just, Maqam, Blues Continuum temperaments
│   │   │   └── voicing.ts            # Chord voicings, drop-2 inversions & voice leading
│   │   ├── audio/                    # Sound Output & Offline Render
│   │   │   ├── audio.ts              # Master audio system & Worklet bridge
│   │   │   ├── BandWorklet.ts        # Real-time multi-voice AudioWorklet processor
│   │   │   ├── LuthierAPI.ts         # Physical acoustic synthesis parameters
│   │   │   ├── mixer.ts              # Master summing bus, panning & dynamics limiter
│   │   │   └── offlineRender.ts      # Multi-sample offline MP3 render pipeline
│   │   └── elementary/               # Elementary Audio DSP Architecture
│   │       └── elementaryEngine.ts   # Waveguides, Karplus-Strong, FM & Sub DSP
│   │
│   ├── ui/                           # Responsive Presentation Layer
│   │   ├── Glyph.tsx                 # Expressive rhythm shape renderer
│   │   ├── noteTags.ts               # Clean tag categorization & filtering
│   │   ├── Sheet.tsx                 # Modal sheets, note cards & touch drawers
│   │   ├── sheets.tsx                # Instrument, Pattern, Genre & Chord pickers
│   │   ├── StyleInspector.tsx        # Developer Live Style Inspector (?dev=style)
│   │   ├── StyleSheet.tsx            # Sub-style browser & summary modal
│   │   ├── worlds.ts                 # Genre color plates & palette tokens
│   │   └── App.tsx                   # Master workstation shell & timeline
│   │
│   ├── index.css                     # Tailwind CSS & print plate typography
│   ├── main.tsx                      # React 19 application entry point
│   └── types.ts                      # Core domain types, contracts & schemas
├── tests/
│   └── audio-engine-baseline.json    # Regression baseline data for DSP verification
├── index.html                        # HTML entry point with web font links
├── metadata.json                     # AI Studio runtime metadata & permissions
├── package.json                      # Scripts and dependencies
├── tsconfig.json                     # TypeScript strict configuration
└── vite.config.ts                    # Vite build & Tailwind configuration
```

---

### 2.1 Cultural Knowledge & Data Layer

- **`src/data/genres/`**: 32 canonical genre world definitions. Each genre specifies foundational meter, pulse model, strictness rating, tempo bounds, typical key centers, and role assignments.
- **`src/data/styles/contracts.ts`**: Formalizes `WorldContract` rules: rhythm invariants (e.g. *never place kick on beat 1 in Reggae*, *never use a 4/4 rock backbeat in Flamenco*), chord grammars, role responsibilities (motor, texture, lead, answer), and negative constraints (`forbidden`).
- **`src/data/instruments/`**: 100+ instruments with physical ranges, frequency bounds, GM program equivalents, excitation physics, and technique profiles.
- **`src/data/chordPalette.ts`**: Reusable 4-chord progression cells categorized into Shared (familiar cadences), Jazz (extended 9th/13th, tritone substitutions, minor ii-V-i), and Genre-Specific structures.
- **`src/data/genreForms.ts`**: Authentic macro-structure blueprints (`Intro -> Verse -> Coro -> Mambo -> Outro` for Salsa; `Letra -> Falseta -> Remate` for Flamenco).

---

### 2.2 Performance Interpretation & Ensemble Grammar

Located in `src/engine/performance/`, this layer transforms static patterns into organic ensemble performances:

- **`PerformanceGrammar`**: Defines allowed subdivisions, role-specific attack density targets (minimum and maximum attacks per bar for bass, drums, or comping), phrasing variation likelihoods, and strict forbidden idioms.
- **`PerformancePhraseMemory`**: Implements track-level musical awareness across bars and section boundaries:
  - `establish`: Lay down the core thematic figure cleanly.
  - `repeat`: Reinforce the figure with subtle micro-variation.
  - `vary`: Introduce rhythmic displacement, passing tones, or altered accents.
  - `answer`: Provide a counter-statement in response to leading voices.
  - `fill`: Generate transitional excitement before a section boundary.
  - `rest`: Intentionally breathe and remain silent.
  - `cadence`: Drive toward harmonic and rhythmic resolution.
- **`interpretPattern`**: Evaluates authored patterns against phrase memory and current dynamic tension, generating tailored attacks with expressive velocity profiles, microtiming displacement, and authentic articulations.
- **`ensembleInteraction`**: Models inter-track awareness (listening), ensuring the bass and drums lock into a unified groove pocket while comping and lead voices leave harmonic space for each other.

---

### 2.3 Composition, Harmony & Sequencing Pipeline

- **`perform.ts`**: Collects track data, builds song section structures (`intro`, `verse`, `chorus`, `breakdown`, etc.), and orchestrates note-on/note-off event timelines.
- **`tuning.ts`**: Resolves frequency in Hertz for every note based on authentic tuning temperaments (12-TET, 5-limit Just Intonation, Arabic Maqam Bayati, Blues Continuum).
- **`tieredEngine.ts`**: Multi-tiered caching compiler allowing instantaneous re-compilation of note data when tweaking arrangement, chords, or dials without recalculating untouched layers.
- **`generators/`**: Dedicated sub-engines for specific musical roles:
  - `bass.ts`: Generates walking bass (Jazz/Swing), syncopated salsa tumbao, dembow answer pulses, heavy one-drop roots, or driving rock riffs.
  - `drums.ts`: Produces authentic percussion grooves including Son clave (2-3 and 3-2), Rumba clave, Brazilian Surdo/Pandeiro patterns, Flamenco compás accents, and Reggae skanks.
  - `voicing.ts`: Renders piano montunos, guitar skanks, Rhodes chord voicings, and clavinet funk chops.
  - `melody.ts`: Constructs motif-driven melodic themes adhering to scale modes and chord-tone targeting.
  - `blend.ts`: Enables cross-genre guest lenses (e.g., placing a Flamenco cajón or Afrobeats log drum into a Jazz or Tango arrangement).
  - `fusion.ts`: Implements polyrhythmic and metric groove fusion (`GrooveFusionSpec`), seamlessly interleaving primary and guest genre patterns across role layers while preserving authentic metric cycles, clave polarities, and microtiming pockets.

---

### 2.4 Interactive Performance Dials

The workstation exposes 5 top-level performance dials (`src/engine/metadata/dials.ts`):

| Dial | Range | Function | Musical Impact |
| :--- | :--- | :--- | :--- |
| **Pocket** | `-1.0` to `+1.0` | Microtiming displacement | Negative values push forward (urgent, aggressive); positive values lay back (lazy, behind-the-beat). |
| **Lift** | `0.0` to `1.0` | Swing intensity & ghost notes | Modulates microtiming shuffle, secondary accent lightness, and syncopated bounce. |
| **Adventure** | `0.0` to `1.0` | Harmonic daring & substitutions | Introduces tritone substitutions, secondary dominants, altered tensions, and borrowed modal chords. |
| **Development** | `0.0` to `1.0` | Motif evolution across bars | Controls how rapidly thematic figures mutate from `establish` to `vary` and `fill`. |
| **Expression** | `0.0` to `1.0` | Velocity dynamics & articulation | Governs dynamic range, accent bite, vibrato depth, and technique-specific articulations. |

---

### 2.5 Elementary Audio Physical Modeling & DSP

Mix Genres utilizes Elementary Audio (`@elemaudio/web-renderer` and `@elemaudio/offline-renderer`) to run direct physical modeling algorithms:

- **Karplus-Strong & Waveguide Models**: Plucked nylon, steel, flamenco guitars, harps, and upright basses with realistic pluck positions, string stiffness, and body cavity resonance.
- **Contract-Driven Instrument Dialects**: Each genre world contract authoritatively specifies instrument dialect physics:
  - *String Physics*: Single vs. doubled string courses (`courses`), sympathetic string resonance (`sympatheticStrings`), and body construction (`hollow-wood`, `solid-body`, `metal-resonator`, `skin-head`).
  - *Excitation Modeling*: Excitation types (`fingerpad`, `nail`, `hard-pick`, `bow`, `mallet`, `plectrum`), contact points, and decay/brightness scalers.
  - *Technique Sets*: Distinct cultural playing techniques (e.g. Tango *arrastre*, *chicharra*, *látigo*; Flamenco *rasgueado*, *abanico*, *golpe*; Bachata *pique*).
- **Membrane & Percussion Synthesis**: Models skin tension, strike hardness, rim resonance, and shell materials for cajón, congas, bongos, timbales, and surdos.
- **FM & Nonlinear Analog Synthesis**: Generates classic 808 sub-basses, 909 kicks, Acid 303 basslines, FM electric pianos, and analog pads.

---

### 2.6 Real-Time Transport, Cultural Mix Bus & Offline MP3 Render Engine

- **Real-Time Web Audio**: Operates via `transport.ts` and `BandWorklet.ts`, scheduling audio events ahead of the playback cursor with sub-millisecond precision.
- **`offlineRender.ts`**: Provides deterministic, high-speed rendering using an offline audio buffer and an embedded LAME MP3 encoder (`@breezystack/lamejs`).
- **Culturally Grounded Mix Character**: Master summing and per-track role profiles dynamically adapt to each genre's acoustic environment (`mixCharacter`):
  - *Dryness*: Direct, intimate wood/percussion detail vs. spacious room resonance.
  - *Bass Forwardness*: Sub/low-end dominance in Dembow, Hip-Hop, and Dub vs. restrained acoustic bass balance in Folk and Jazz.
  - *Stereo Width*: Monophonic/vintage club focus vs. wide orchestral and big-band spreads.
  - *Air & Brightness*: Tailored shelving filters preserving warmth in Soul/Blues or sizzle in Salsa and Metal.
- **Clean Master Bus**: Individual tracks feature independent volume, pan, mute, solo, and spotlight controls, summing into a master bus with subsonic protection (22 Hz highpass), soft-saturation warmth, bus glue compression, and a mastering limiter.

---

### 2.7 Responsive Canvas & Editorial UI

- Built with React 19, Motion, and Tailwind CSS.
- Features an editorial "print sheet" visual identity inspired by risograph printing, where each genre adopts its own distinct two-color palette plate (`src/ui/worlds.ts`).
- Interactive multi-track timeline, section-by-section arrangement editor, chord picker, BPM dial, groove feel switcher, and one-click MP3 export modal.
- Includes a dedicated **Style Inspector** available via `?dev=style` URL parameter for auditing live resolved style matrices, inheritance trails, and performance parameters.

---

## 3. The 32 Canonical Genre Worlds

### Genre Reference Matrix

| Genre | Family | Pulse / Meter | Default Feel | Strictness | Core Motor & Signature Instrumentation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Afrobeats** | African | 4/4 Timeline | Laid-back syncopation | Flexible | Interlocking percussion, clean single-coil guitar, log-drum sub |
| **Bachata** | Latin / Caribbean | 4/4 Metric | Derecho / Majao pocket | Strict | Requinto lead, segunda guitar, bongo martillo, güira scraper |
| **Blues** | American Roots | 4/4 Swing | Blues shuffle | Flexible | Walking/shuffle bass, shuffle drums, overdriven blues guitar |
| **Brazilian** | South American | 2/4 Metric | Samba / Bossa syncopation | Flexible | Nylon guitar levada, surdo bass pulse, pandeiro, cavaquinho |
| **Country** | American Roots | 4/4 Metric | Train shuffle | Flexible | Acoustic guitar, walking/root-fifth bass, telecaster, pedal steel |
| **Cumbia** | Latin / Colombian | 4/4 Metric | Cumbia sway | Strict | Accordion melodies, guacharaca/güira, syncopated cumbia bass |
| **Disco** | Electronic / Funk | 4/4 Machine | Four-on-the-floor | Strict | Four-on-floor kick, octave disco bass, string stabs, hi-hat rolls |
| **Drum & Bass** | Club / Bass | 4/4 Machine (174 BPM) | Breakbeat drive | Strict | Two-step/amen breakbeats, reese bass, modulated sub |
| **Electronic** | Club / Synth | 4/4 Machine | Electronic grid | Open | Arpeggiated synths, electronic kicks, atmospheric pads |
| **Flamenco** | Iberian | 12/8 Compás | 12-count cycle | Strict | Flamenco guitar rasgueado, cajón, palmas (sordas & claras) |
| **Folk** | American Roots | 4/4 Metric | Acoustic pulse | Flexible | Fingerpicked acoustic guitar, double bass, fiddle, banjo |
| **Funk** | Black American | 4/4 Metric | Heavy "On the One" | Strict | Slap/finger bass, scratch 16th guitar, clavinet, drum pocket |
| **Gospel** | Black American | 4/4 Metric | Church pocket | Flexible | Hammond B3 organ, grand piano, expressive bass, choir chords |
| **Hip Hop** | Urban / Beat | 4/4 Machine | Laid-back sample drag | Flexible | Boom-bap/trap drums, deep 808 sub, sampled chops |
| **House** | Club / Electronic | 4/4 Machine | Four-on-the-floor | Strict | 909 kick, offbeat hi-hat, syncopated bass loop, piano stabs |
| **Industrial** | Alternative / Heavy | 4/4 Machine | Heavy mechanical pulse | Strict | Distorted bass synths, pounding machine drums, metallic percussion |
| **Jazz** | African American | 4/4 Swing | Swing ride pocket | Flexible | Walking acoustic bass, swing ride cymbal, comping grand piano |
| **Kizomba** | African / Angolan | 4/4 Metric | Deep laid-back | Flexible | Sub-bass syncopation, gentle guitar, zouk-derived batida beat |
| **Metal** | Heavy Rock | 4/4 Machine | Precision drive | Strict | Palm-muted double-kick riffs, distorted pick bass, power chords |
| **Punk / Hardcore** | Alternative / Rock | 4/4 Metric (180 BPM) | Straight speed drive | Strict | Fast 8th-note pick bass, aggressive power-chord guitars, open hats |
| **R&B** | Black American | 4/4 Metric | Behind-the-beat pocket | Flexible | Rhodes electric piano, melodic fretless/synth bass, finger snaps |
| **Reggae** | Caribbean | 4/4 Metric | One-drop pocket | Strict | Heavy bassline, kick/snare on 3, guitar skank on 2 & 4 |
| **Reggaeton** | Caribbean Urban | 4/4 Machine | 3+3+2 Dembow | Strict | Dembow kick-snare syncopation, synthesized 808 sub, perreo synths |
| **Rock** | Western Roots | 4/4 Metric | Driving backbeat | Flexible | Overdriven guitar, punchy drum backbeat (snare on 2 & 4), rock bass |
| **Salsa** | Afro-Cuban | 4/4 Clave | 2-3 / 3-2 Clave pocket | Strict | Piano montuno, conga tumbao, anticipatory bass, timbales cascara |
| **Ska** | Caribbean | 4/4 Metric | Fast upbeat skank | Strict | Walking bass, offbeat skank guitar/brass, bright marching snare |
| **Soul** | Black American | 4/4 Metric | Deep pocket | Flexible | Melodic soul bass, Motown/Stax horn stabs, electric piano |
| **Swing** | Big Band Jazz | 4/4 Swing | Big-band bounce | Flexible | Driving walking bass, four-to-the-bar rhythm guitar, brass section |
| **Tango** | Argentine | 4/4 Metric | Marcato / Síncopa | Strict | Bandoneón sweeps, marcato piano/strings, arrastre bass slide |
| **Timba** | Contemporary Cuban | 4/4 Clave | Gear pocket (Marcha) | Strict | Aggressive piano montuno, kick/conga gear changes, funky bass |
| **UK Bass** | Club / Bass | 4/4 Machine (132 BPM) | Broken club pocket | Strict | Skippy 2-step garage beats, deep modulated sub-bass, vinyl crackle |
| **Zouk** | French Caribbean | 4/4 Metric | Kompa / Zouk lean | Flexible | Synthetic hi-hat patterns, warm melodic bass, zouk guitars |

---

### Deep Dive: Specialized Cultural Heritage Traditions

1. **Afro-Cuban Salsa & Timba**:
   - Organized strictly around the Clave cycle (Son Clave or Rumba Clave in 2-3 or 3-2 polarity).
   - Invariant rule: Bass tumbao never strikes on beat 1; it anticipates on the "and" of 2 and lands firmly on beat 4, tying over the bar.
   - Timba introduces dynamic "gear shifts" (Marcha gear, Presión gear, Despelote breakdown) that reorganize rhythm density across section transitions.
2. **Dominican Bachata**:
   - Structured into three distinct performance states: `derecho` (steady verse pocket), `majao` (energetic chorus), and `mambo` (virtuosic requinto soloing).
   - The bongo and güira lock into tight interlocking sixteenth-note subdivisions, while the requinto guitar uses rapid syncopated ornamentations.
3. **Flamenco Compás**:
   - Functions on a 12-beat metric cycle with asymmetric accents: `[12] 1 2 [3] 4 5 [6] 7 [8] 9 [10] 11`.
   - Strictly prohibits standard Western backbeats and symmetrical rock drum fills.
   - Models *palmas sordas* (hollow, muffled claps) and *palmas claras* (sharp, piercing finger-to-palm claps).
4. **Argentine Tango**:
   - Models the classic Orquesta Típica dynamic: bandoneón, piano, violin, and double bass.
   - Employs *marcato en 4* (solid downbeats), *síncopa* (heavy syncopation across the bar), and the dramatic *arrastre* (a low slide that drags into the downbeat).
5. **Jamaican Reggae & Dub**:
   - The *one-drop* invariant: Beat 1 is completely vacant; kick and snare drop together strictly on beat 3.
   - Guitar and keyboard skank strictly on beats 2 and 4, while the Hammond organ plays the syncopated double-handed *bubble*.

---

## 4. Catalog of Over 200 Song Styles

Each genre world hosts a curated collection of authentic regional and historical sub-styles:

- **Afrobeats**: Naija Pop, Amapiano Fusion, Afro-Fusion, Alté, Highlife Modern, Coupe Decale Twist
- **Bachata**: Tradicional, Sensual, Urbana, Pop Bachata, Dominicana Clasica, Moderna
- **Blues**: Delta Blues, Chicago Blues, Texas Blues, Jump Blues, Piedmont Blues, Soul Blues, Electric Blues, Blues Rock
- **Brazilian**: Bossa Nova, Samba de Roda, Pagode, Samba-Enredo, Choro, Baião, Maracatu, MPB
- **Country**: Honky Tonk, Outlaw Country, Bluegrass, Country Pop, Western Swing, Americana, Bakersfield Sound, Neo-Traditional
- **Cumbia**: Sonidera, Villera, Tradicional Colombiana, Cumbia Chicha, Digital Cumbia, Cumbia Santafesina
- **Disco**: Classic Disco, Euro Disco, Nu-Disco, Italo Disco, Post-Disco, Funk Disco
- **Drum & Bass**: Liquid DnB, Neurofunk, Jump Up, Jungle, Atmospheric, Techstep
- **Electronic**: Ambient, Synthwave, Techno, Trance, Electro, Downtempo, IDM, Eurodance
- **Flamenco**: Soleá, Bulerías, Alegrías, Tangos, Seguiriya, Rumba
- **Folk**: Indie Folk, Old-Time, Protest Folk, Psychedelic Folk, Neo-Traditional, Chamber Folk
- **Funk**: Deep Funk, P-Funk, Boogie, Go-Go, Synth Funk, Funk Carioca
- **Gospel**: Traditional Gospel, Contemporary Gospel, Southern Gospel, Choir Gospel, Gospel Soul, Gospel Funk
- **Hip Hop**: Boom Bap, Trap, Drill, Lo-Fi, G-Funk, Cloud Rap, Jazz Rap, Conscious Rap
- **House**: Deep House, Classic House, Soulful House, Tech House, Garage House, Acid House, French House
- **Industrial**: EBM, Industrial Rock, Dark Electro, Aggrotech, Noise Industrial, Coldwave
- **Jazz**: Bebop, Cool Jazz, Hard Bop, Free Jazz, Gypsy Jazz, Fusion, Spiritual Jazz, Ragtime
- **Kizomba**: Tradicional, Semba Playful, Passada, Tarraxinha, Urbankiz, Ghetto Zouk, Kizomba Afro
- **Metal**: Heavy Metal, Thrash, Death Metal, Black Metal, Power Metal, Doom Metal, Sludge, Progressive Metal
- **Punk / Hardcore**: Hardcore Punk, Skate Punk, Post-Punk, Melodic Hardcore, Crust Punk, Anarcho-Punk
- **R&B**: Contemporary R&B, Neo-Soul, Quiet Storm, New Jack Swing, Alternative R&B, Funk R&B
- **Reggae**: Roots Reggae, Dub, Dancehall, Lovers Rock, Rocksteady, Ragga
- **Reggaeton**: Perreo, Melodic Reggaeton, Neoperreo, Pop Reggaeton, Playero, Trap Reggaeton
- **Rock**: Hard Rock, Grunge, Progressive Rock, Garage Rock, Psychedelic Rock, Post-Rock, Shoegaze, Alternative Rock
- **Salsa**: Salsa Dura, Salsa Romántica, Mambo / On-2, Pachanga, Cha-Cha-Chá, Charanga, Son Montuno, Salsa Caleña, Salsa Choke, Descarga
- **Ska**: Traditional, Two-Tone, Rocksteady, Ska-Punk, Ska-Core, Latin Ska, Ska-Jazz
- **Soul**: Classic Soul, Motown Soul, Deep Soul, Southern Soul, Neo-Soul, Psychedelic Soul
- **Swing**: Big Band Lindy, Balboa Speed, Gypsy Swing, Charleston, West Coast Swing, Boogie-Woogie, Neo-Swing, Electro Swing
- **Tango**: Tango Tradicional, Guardia Vieja, Troilo, Pugliese, Milonga, Tango Vals, Tango Nuevo, Piazzolla, Chacarera
- **Timba**: Timba Clásica, Timba Funk, Timba Despelote, Timba Rumbeada, Afro-Cuban Timba, Cimafunk Groove, Songo / Timba
- **UK Bass**: Dubstep, UK Garage, Grime, 2-Step, Future Garage, Bassline
- **Zouk**: Zouk Béton, Zouk Love, Kassav Carnival Zouk, Brazilian Zouk, Lyrical Zouk, Zouk Bass, Kompa Zouk, Acoustic Zouk

---

## 5. Authoritative Instrument Catalog & Acoustic Profiles

Arrangements draw from over 100 dedicated instrument definitions across acoustic, electric, and synthetic categories:

### Keyboards, Organs & Bellows
- **Bandoneón**: Quintessential Argentine Tango voice with expressive bellows attack and air release textures.
- **Accordion**: Reedy, breathing reed organ for Cumbia, Choro, Forró, and Zydeco.
- **Acoustic Grand Piano**: Dynamic acoustic strike with harmonic body resonance for Salsa montunos, Jazz comping, and Tango accents.
- **Rhodes Electric Piano**: Warm tine bell harmonics with gentle saturation for Neo-Soul, R&B, and Cool Jazz.
- **Clavinet**: Funky plucked string keyboard with high bite and sharp decay for Funk, Disco, and Reggae.
- **Hammond B3 Organ**: Rotary Leslie speaker simulation providing gospel beds and reggae bubble rolls.

### Guitars & Plucked Strings
- **Flamenco / Spanish Guitar**: High transient attack, low string clearance, resonant spruce top modeling rasgueados and golpes.
- **Requinto**: High-pitched, bright nylon lead guitar driving Bachata melodics and Bolero fills.
- **Segunda Guitar**: Rhythmic nylon chord guitar providing the syncopated harmony in Bachata.
- **Tres Cubano**: Double-coursed stringed Cuban instrument with dry percussive son montuno hooks.
- **Cavaquinho**: High-tension 4-string Brazilian instrument driving Samba and Pagode rhythms.
- **Acoustic Guitar (Steel / Dreadnought)**: Full-bodied acoustic strumming and fingerpicking for Folk, Country, and Rock.
- **Electric Clean & Jazz Archtop Guitar**: Warm melodic tone with soft pick attack for Jazz comping, Soul, and Blues.
- **Overdrive & Distortion Guitars**: Saturated harmonic crunch and singing sustain for Rock, Metal, and Punk.

### Basses
- **Upright / Double Bass**: Acoustically resonant pizzicato wooden body for Jazz, Swing, Tango, Bluegrass, and Rockabilly.
- **Electric Finger Bass**: Versatile solid-body electric bass for Funk, Salsa, R&B, and Pop.
- **Slap Bass**: High-snap percussive thumb slap and pop technique for Deep Funk and Disco.
- **Pick Bass**: Driving, aggressive pick attack with bright harmonic transient for Metal, Punk, and Hard Rock.
- **Fretless Bass**: Expressive continuous pitch slides and characteristic "mwah" timbre for Neo-Soul and Fusion.
- **808 Sub / Synth Bass**: Pure sine and saturated square low-end foundation for Hip Hop, Trap, Reggaeton, and Drum & Bass.
- **Acid 303 Bass**: Resonant diode-ladder filter synth bass with accent and slide for Acid House and Techno.

### Drums & World Percussion
- **Acoustic Drum Kit**: Kick, snare, hi-hats, toms, ride, and crash with velocity-sensitive stick dynamics.
- **Electronic Drum Kits (808 / 909)**: Punchy analog kicks, snappy snares, claps, and open/closed hats for club styles.
- **Congas (Quinto, Conga, Tumba)**: Multi-drum Cuban hand percussion executing open tones, slaps, and bass tones.
- **Bongos**: High-register macho and hembra drums providing martillo rhythms in Bachata, Son, and Salsa.
- **Cajón**: Resonant wooden box percussion essential to Flamenco and Afro-Peruvian music.
- **Palmas**: Hand claps categorized into *sordas* (deep, muffled) and *claras* (sharp, open) for Flamenco compás.
- **Güira / Guacharaca**: Metal scraper providing relentless forward momentum in Bachata and Cumbia.
- **Timbales & Paila**: Metal single-headed drums executing cascara shell patterns and cowbell patterns in Salsa and Timba.
- **Surdo & Pandeiro**: Heavy bass drum pulse and specialized Brazilian tambourine anchoring Samba.

### Horns & Orchestral Strings
- **Horn Section (Trumpet, Trombone, Saxophones)**: Tight brass stabs, mambo hits, and big-band swells.
- **Bowed Strings (Violin, Viola, Cello, Contrabass)**: Orchestral accompaniment, tango arrastres, and dramatic sweeps.

---

## 6. Culturally Grounded Articulations by Tradition

Mix Genres captures the physical playing mechanics unique to global musical traditions:

- **Flamenco**:
  - `rasgueado`: Multi-finger rolling strum across the nylon strings.
  - `golpe`: Striking the ring fingernail against the soundboard tap plate (*golpeador*).
  - `alzapúa`: Virtuosic thumb technique combining downstroke, upstroke, and melodic pluck.
  - `picado`: High-velocity rest-stroke scalar runs.
  - `ligado`: Crisp left-hand hammer-ons and pull-offs.
- **Argentine Tango**:
  - `marcato`: Sharp, accented pulse marking downbeats with heavy, detached bow or bellows pressure.
  - `arrastre`: Dramatic low slide dragging into the downbeat from below.
  - `síncopa`: Offbeat push displacing the accent across strong beats to create dance tension.
  - `canyengue`: Low, staccato, heavily rhythmic historical playing style with exaggerated damping.
- **Dominican Bachata**:
  - `derecho`: Steady 4/4 verse rhythm with closed bongo martillo and steady güira scraping.
  - `majao`: Energetic chorus rhythm with open bongo bells and expanded güira accents.
  - `mambo`: Instrumental solo section featuring syncopated ornamental requinto leads.
  - `apagado`: Right-hand palm mute damping strings immediately after plucking for a crisp staccato.
- **Afro-Cuban Salsa & Timba**:
  - `tumbao`: Syncopated bass figure anticipating beat 1 by landing on beat 4, locked to the conga open tones.
  - `campana`: Bongo cowbell pattern struck on downbeats during energetic montuno sections.
  - `cascara`: Stick pattern tapped against the metal shell of the timbales during verses.
  - `bloque`: Synchronized full-ensemble rhythmic stabs interrupting the continuous groove.
- **Jamaican Reggae & Dub**:
  - `one-drop`: Beat 1 remains silent; kick and snare drop together on beat 3.
  - `skank`: Crisp, staccato up-strums on beats 2 and 4.
  - `bubble`: Rolling 16th-note shuffle pattern played on a Hammond organ across offbeats.
  - `dub-throw`: Isolated hits fed into tape delays and high-resonance filters with long decay tails.
- **Brazilian Samba & Bossa Nova**:
  - `levada`: Syncopated guitar pattern balancing thumb bass pulses with offbeat finger chords.
  - `surdo-swing`: Alternating deep bass drums where the second surdo swings with subtle micro-delay.
  - `tamborim-virada`: Rapid turning movement of the small frame drum stick executing syncopated rolls.
- **Rock & Metal**:
  - `palm-mute`: Resting the picking hand heel on the bridge to produce heavy chugging low-end riffs.
  - `pinch-harmonic`: Touching the picking thumb against the string to excite screaming artificial overtones.
  - `tremolo-picking`: Rapid, unmetered alternate picking on a single string.

---

## 7. Development, Verification & CLI Tooling

### Quick Start

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev
```

Open `http://localhost:3000` in your browser.

To launch the live developer **Style Inspector**, append `?dev=style` to the URL:
`http://localhost:3000/?dev=style`

---

### Analysis, Audit & Diagnostic Scripts

Mix Genres includes a comprehensive suite of offline verification and diagnostic tools:

```bash
# Type check the codebase without emitting artifacts
npm run lint

# Run unit tests (DSP filter test & microtiming consistency)
npm test

# Run microtiming consistency verification only
npm run test:microtiming

# Run audio engine regression test suite against baseline
npm run test:audio

# Audit instrument definitions, ranges, and voice capabilities
npm run audit:instruments

# Analyze and calibrate mix gain and headroom across all genres
npm run gain-calibration

# Verify musical fixes, style contracts, and catalog invariants
npm run verify-fixes

# Headless CLI MP3 song rendering (render any genre directly to an MP3 file)
npm run render-song salsa /tmp/salsa-test.mp3
npm run render-song tango /tmp/tango-test.mp3
npm run render-song afrobeats /tmp/afrobeats-test.mp3
```

---

### Production Build & GitHub Pages Deployment

```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Deploy static bundle to GitHub Pages
npm run deploy
```

The application is completely static and client-side. The automated GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds and deploys `dist/` directly to GitHub Pages on every push to `main`. No backend database or external cloud infrastructure is required.

---

## 8. License

MIT License. Open source and free for educational, compositional, and musical exploration.
