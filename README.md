# Mix Genres

**Mix Genres** is a browser-native music generation engine and interactive composition workstation built with React, TypeScript, Vite, Tailwind CSS, Elementary Audio, and Web Audio. It models culturally authentic musical traditions, generates multi-track arrangements, executes real-time physical acoustic synthesis, and exports studio-grade MP3s directly inside your browser without external servers or cloud dependencies.

---

## Table of Contents

1. [Architectural Overview & Principles](#1-architectural-overview--principles)
2. [Comprehensive Engine Structure](#2-comprehensive-engine-structure)
   - [2.1 Knowledge & Data Layer](#21-knowledge--data-layer)
   - [2.2 Cultural Performance Interpretation Layer](#22-cultural-performance-interpretation-layer)
   - [2.3 Composition, Harmony & Sequencing Pipeline](#23-composition-harmony--sequencing-pipeline)
   - [2.4 Elementary Audio Physical Modeling & DSP](#24-elementary-audio-physical-modeling--dsp)
   - [2.5 Offline Audio Rendering & Master Bus](#25-offline-audio-rendering--master-bus)
   - [2.6 User Interface & Workflow Canvas](#26-user-interface--workflow-canvas)
3. [The 32 Available Genres](#3-the-32-available-genres)
   - [How Genres Work & How They Are Interpreted](#how-genres-work--how-they-are-interpreted)
   - [Removal of Generic Latin Pop](#removal-of-generic-latin-pop)
4. [Catalog of Song Styles](#4-catalog-of-song-styles)
5. [Instruments Used in Sample Songs & Arrangements](#5-instruments-used-in-sample-songs--arrangements)
6. [Culturally Specific Articulations by Style](#6-culturally-specific-articulations-by-style)
7. [Development & Deployment](#7-development--deployment)

---

## 1. Architectural Overview & Principles

Mix Genres departs radically from generic MIDI sequencers and linear Eurocentric DAW workflows:

- **100% Client-Side DSP**: All chord selection, phrase planning, microtiming calculation, voice synthesis, and MP3 encoding run on the user's device.
- **Cultural Grounding Over Eurocentric Grids**: Music is not assumed to be a 4/4 grid of 12-TET quarter notes with a Western rock backbeat (kick on 1, snare on 2 and 4). The engine supports non-Western microtonal intonations (maqam quarter tones, just intonation, Andalusian Phrygian temperaments), 12-count cyclical compás (Flamenco), timeline cycles (Afrobeats, Salsa clave polarities), and polymetric syncopations.
- **Room-Free Direct Acoustic Design**: Environmental room reverberation and artificial room simulations have been completely eliminated. Audio synthesis focuses purely on authentic physical instrument mechanics, body resonance, string harmonics, membrane tension, close-mic direct sound, and clean stereo bus summing.
- **Authored Patterns as Living Musical Material**: Authored patterns are not rigid loops of static clock-ticks. The engine treats patterns as authoritative structural anchors, passing them through a culturally grounded performance interpreter that introduces phrase memory, contextual variation, dynamic pickup gestures, and humanized microtiming.
- **Silence as an Active Performance Decision**: Real musicians know when to breathe and when not to play. The engine explicitly models rest and conversational pause as authoritative musical choices.

---

## 2. Comprehensive Engine Structure

```text
mixgenres/
├── src/
│   ├── data/                         # Cultural Knowledge & Music Theory
│   │   ├── genres/                   # 32 Canonical Genre World Definitions
│   │   ├── styles/                   # Style Contracts, Dialects & Catalog
│   │   │   ├── contracts.ts          # World Contracts & Style Patches
│   │   │   ├── catalog.ts            # Style Registry & Influence Graphs
│   │   │   ├── schema.ts             # Performance Grammar & Style Types
│   │   │   └── styleDialect.ts       # Progressions & Rhythm Fallbacks
│   │   ├── instruments/              # 100+ Instrument Definitions & Profiles
│   │   ├── chordPalette.ts           # Harmonic Tiers (Shared, Jazz, Genre)
│   │   └── genreForms.ts             # Macro-Structure Form Blueprints
│   │
│   ├── engine/                       # Execution & Audio Generation
│   │   ├── performance/              # Performance Interpretation Layer
│   │   │   ├── performanceGrammar.ts     # Grammar Rules, Density & Boundaries
│   │   │   ├── phraseMemory.ts           # Track-Level Phrasing Context & State
│   │   │   ├── performanceInterpreter.ts # Attack Gathering & Figure Modification
│   │   │   └── ensembleInteraction.ts    # Pocket, Contagion & Inter-Track Listening
│   │   ├── sequencing/               # Performance Compilation
│   │   │   ├── perform.ts            # Master Timeline & Attack Assembler
│   │   │   └── humanize.ts           # Microtiming Feel & Velocity Shading
│   │   ├── generators/               # Role-Specific Melodic/Rhythmic Generators
│   │   │   ├── bass.ts               # Tumbao, Walking, One-Drop, Dembow, Riff
│   │   │   ├── drums.ts              # Kick, Snare, Ghost, Clave, Palmas, Shaker
│   │   │   ├── comping.ts            # Piano Montuno, Guitar Skank, Rasgueado
│   │   │   ├── melody.ts             # Call-and-Response, Vocal & Lead Lines
│   │   │   └── arpeggiator.ts        # Dynamic Multi-Register Arpeggiation
│   │   ├── theory/                   # Microtonality & Physical Excitations
│   │   │   ├── tunings.ts            # 12-TET, Just, Maqam, Pelog, Andalusian
│   │   │   ├── CulturalAcousticEvent.ts # Physical Excitation & Continuous Phases
│   │   │   └── dialects.ts           # Acoustic Dialects & Performance Modes
│   │   ├── audio/                    # Sound Output & Offline Render
│   │   │   ├── BandWorklet.ts        # Real-time Multi-Voice AudioWorklet
│   │   │   ├── offlineRender.ts      # Multi-Sample Offline MP3 Render Pipeline
│   │   │   ├── mixer.ts              # Direct Master Summing & Compressor
│   │   │   └── LuthierAPI.ts         # Physical Parameter Specifications
│   │   └── elementary/               # Elementary Audio Graph Architecture
│   │       ├── elementaryEngine.ts   # Waveguides, Karplus-Strong, FM & Sub DSP
│   │       └── ElementaryBridge.ts   # WebRenderer Event Dispatcher
│   │
│   └── ui/                           # Responsive Presentation Layer
│       ├── components/               # Arrangement Grid, Dials, Track Strips
│       ├── worlds.ts                 # Palette & Visual Color Tokens
│       └── App.tsx                   # Master Workstation Shell
```

### 2.1 Knowledge & Data Layer
- **`src/data/genres/`**: Encapsulates 32 independent genre world contracts. Each genre defines its foundational meter, pulse model, strictness level, tempo range, typical key centers, and role assignments.
- **`src/data/styles/contracts.ts`**: Formalizes `WorldContract` rules: rhythm invariants (e.g. *never place kick on beat 1 in Reggae*, *never use a 4/4 rock backbeat in Flamenco*), chord grammars, role responsibilities (motor, texture, lead, answer), and negative constraints (`forbidden`).
- **`src/data/instruments/`**: Defines acoustic, electric, and traditional world instruments with precise ranges, frequency limits, GM program numbers, excitation physics, and technique profiles.
- **`src/data/chordPalette.ts`**: Provides curated harmonic progressions divided into Shared (familiar pop/folk/rock cadences), Jazz (extended 9th/13th, tritone substitutions, minor ii-V-i), and Genre-Specific cells.

### 2.2 Cultural Performance Interpretation Layer
Located in `src/engine/performance/`, this layer translates static notation or pattern grids into organic musical performances:
- **`PerformanceGrammar`**: Defines allowed subdivisions, role-specific attack density targets (e.g., minimum and maximum attacks per bar for bass, drums, or comping), phrasing variation likelihoods, and strict forbidden idioms.
- **`PerformancePhraseMemory`**: Implements track-level musical awareness across bars and section boundaries. A track transitions logically through distinct development stages:
  - `establish`: Lay down the core thematic figure cleanly.
  - `repeat`: Reinforce the figure with minimal micro-variation.
  - `vary`: Introduce rhythmic displacement, passing tones, or altered accents.
  - `answer`: Provide a counter-statement in response to leading voices.
  - `fill`: Generate transitional excitement before a section boundary.
  - `rest`: Intentionally breathe and remain silent.
  - `cadence`: Drive toward harmonic and rhythmic resolution.
- **`interpretPattern`**: Evaluates authored patterns against phrase memory and current dynamic tension, generating tailored attacks with expressive velocity profiles, microtiming displacement, and authentic articulations.
- **`resolveHybridGrammar`**: When blending two musical styles, host meter and timeline invariants remain strictly authoritative, while guest elements contribute expressive coloration without destroying the underlying groove.

### 2.3 Composition, Harmony & Sequencing Pipeline
- **`perform.ts`**: Collects track data, builds song section structures (`intro`, `verse`, `chorus`, `breakdown`, etc.), and orchestrates note-on/note-off event timelines.
- **`tunings.ts`**: Resolves frequency in Hertz for every note based on the genre's authentic tuning temperament rather than default 12-TET.
- **`generators/`**: Dedicated sub-engines for specific musical roles:
  - `bass.ts`: Generates walking bass (Jazz/Swing), syncopated salsa tumbao, dembow answer pulses, heavy one-drop roots, or driving rock riffs.
  - `drums.ts`: Produces authentic percussion grooves including Son clave (2-3 and 3-2), Rumba clave, Brazilian Surdo/Pandeiro patterns, Flamenco compás accents, and Reggae skanks.
  - `comping.ts`: Renders piano montunos, guitar skanks, Rhodes chord voicings, and clavinet funk chops.
  - `melody.ts`: Constructs motif-driven melodic themes adhering to scale modes and chord-tone targeting.

### 2.4 Elementary Audio Physical Modeling & DSP
Mix Genres utilizes Elementary Audio (`@elemaudio/web-renderer`) to run direct physical modeling algorithms:
- **Karplus-Strong & Waveguide Models**: Generates plucked nylon, steel, flamenco guitars, harps, and upright basses with realistic pluck positions, string stiffness, and body cavity resonance.
- **Membrane & Percussion Synthesis**: Models skin tension, strike hardness, rim resonance, and shell materials for cajón, congas, bongos, and timbales.
- **FM & Nonlinear Analog Synthesis**: Generates classic 808 sub-basses, 909 kicks, Acid 303 basslines, FM electric pianos, and lush analog pads.

### 2.5 Offline Audio Rendering & Master Bus
- **`offlineRender.ts`**: Provides fast, deterministic rendering using an offline audio buffer and an embedded LAME MP3 encoder.
- **Clean Summing Bus**: Eliminates artificial reverb convolution. Individual tracks feature volume and pan controls, summing into a master bus with high-pass filtering (30 Hz) and a mastering limiter to prevent digital clipping while preserving dynamic range.

### 2.6 User Interface & Workflow Canvas
- Built with React and Tailwind CSS.
- Features an interactive multi-track timeline, section-by-section arrangement editor, chord picker, BPM dial, groove feel switcher, and one-click MP3 export modal.

---

## 3. The 32 Available Genres

Mix Genres supports 32 canonical genres, each implemented with its own pulse model, harmonic grammar, and ensemble configuration:

| Genre | Family | Pulse / Meter | Default Feel | Core Motor & Essential Role |
| :--- | :--- | :--- | :--- | :--- |
| **Afrobeats** | African | 4/4 Timeline | Laid-back syncopation | Interlocking percussion, guitar, log-drum sub |
| **Bachata** | Latin / Caribbean | 4/4 Metric | Derecho / Majao pocket | Requinto lead, segunda guitar, bongo, güira |
| **Blues** | American Roots | 4/4 Swing | Blues shuffle | Walking/shuffle bass, shuffle drums, blues guitar |
| **Brazilian** | South American | 2/4 Metric | Samba / Bossa syncopation | Nylon guitar levada, surdo pulse, pandeiro |
| **Country** | American Roots | 4/4 Metric | Train shuffle | Acoustic guitar, walking/root-fifth bass, telecaster |
| **Cumbia** | Latin / Colombian | 4/4 Metric | Cumbia sway | Accordion, guacharaca/güira, syncopated cumbia bass |
| **Disco** | Electronic / Funk | 4/4 Machine | Four-on-the-floor | Four-on-floor kick, octave disco bass, string stabs |
| **Drum & Bass** | Club / Bass | 4/4 Machine (174 BPM) | Breakbeat drive | Two-step/amen breakbeats, reese/sub bass |
| **Electronic** | Club / Synth | 4/4 Machine | Electronic grid | Arpeggiated synths, electronic kicks, atmospheric pads |
| **Flamenco** | Iberian | 12/8 Compás | 12-count cycle | Flamenco guitar rasgueado, cajón, palmas (claps) |
| **Folk** | American Roots | 4/4 Metric | Acoustic pulse | Fingerpicked acoustic guitar, double bass, fiddle |
| **Funk** | Black American | 4/4 Metric | Heavy "On the One" | Slap/finger bass, scratch 16th guitar, drum pocket |
| **Gospel** | Black American | 4/4 Metric | Church pocket | Hammond B3 organ, grand piano, expressive bass |
| **Hip Hop** | Urban / Beat | 4/4 Machine | Laid-back sample drag | Boom-bap/trap drums, deep 808 sub, sampled chops |
| **House** | Club / Electronic | 4/4 Machine | Four-on-the-floor | 909 kick, offbeat hi-hat, syncopated bass loop |
| **Industrial** | Alternative / Heavy | 4/4 Machine | Heavy mechanical pulse | Distorted bass synths, pounding machine drums, metal hits |
| **Jazz** | African American | 4/4 Swing | Swing ride pocket | Walking acoustic bass, swing ride cymbal, comping piano |
| **Kizomba** | African / Angolan | 4/4 Metric | Deep laid-back | Sub-bass syncopation, gentle guitar, zouk-derived beat |
| **Metal** | Heavy Rock | 4/4 Machine | Precision drive | Palm-muted double-kick riffs, distorted bass |
| **Punk / Hardcore** | Alternative / Rock | 4/4 Metric (180 BPM) | Straight speed drive | Fast 8th-note pick bass, aggressive power-chord guitars |
| **R&B** | Black American | 4/4 Metric | Behind-the-beat pocket | Rhodes electric piano, melodic fretless/synth bass |
| **Reggae** | Caribbean | 4/4 Metric | One-drop pocket | Heavy bassline, kick/snare on 3, guitar skank on 2 & 4 |
| **Reggaeton** | Caribbean Urban | 4/4 Machine | 3+3+2 Dembow | Dembow kick-snare syncopation, synthesized sub |
| **Rock** | Western Roots | 4/4 Metric | Driving backbeat | Overdriven guitar, punchy drum backbeat (2 & 4) |
| **Salsa** | Afro-Cuban | 4/4 Clave | 2-3 / 3-2 Clave pocket | Piano montuno, conga tumbao, anticipatory bass |
| **Ska** | Caribbean | 4/4 Metric | Fast upbeat skank | Walking bass, offbeat skank guitar/brass, bright drums |
| **Soul** | Black American | 4/4 Metric | Deep pocket | Melodic soul bass, Motown/Stax horn stabs, electric piano |
| **Swing** | Big Band Jazz | 4/4 Swing | Big-band bounce | Driving walking bass, four-to-the-bar rhythm guitar |
| **Tango** | Argentine | 4/4 Metric | Marcato / Síncopa | Bandoneón sweeps, marcato piano/strings, arrastre bass |
| **Timba** | Contemporary Cuban | 4/4 Clave | Gear pocket (Marcha) | Aggressive piano montuno, kick/conga gear changes |
| **UK Bass** | Club / Bass | 4/4 Machine (132 BPM) | Broken club pocket | Skippy 2-step garage beats, deep modulated sub-bass |
| **Zouk** | French Caribbean | 4/4 Metric | Kompa / Zouk lean | Synthetic hi-hat patterns, warm melodic bass, zouk guitars |

### How Genres Work & How They Are Interpreted

1. **Rhythm Invariants**: Every genre specifies unbreakable rules (`forbid`). For example:
   - Flamenco forbids Western rock backbeats and cymbal crashes at section starts.
   - Reggae forbids a standard rock kick on beat 1.
   - Salsa strictly aligns every percussion and bass figure to the active Clave polarity (2-3 or 3-2).
   - Metal forbids swing and loose shuffles in favor of machine-tight articulation.
2. **Dynamic Role Allocation**: Instrumentation is assigned functional musical roles (`motor`, `texture`, `lead`, `answer`, `comp`, `sub`). The performance interpreter tracks density bounds per role to prevent clashing.
3. **Harmonic Language**: Ranging from simple diatonic cadences (Country, Folk) and modal vamp grooves (Cumbia, Funk) to complex altered dominants and secondary cadences (Jazz, Bossa Nova, Tango).

### Removal of Generic Latin Pop
Generic, homogenized "Latin Pop" has been completely removed from Mix Genres. Rather than collapsing distinct Latin American and Caribbean traditions into a diluted commercial preset, Mix Genres provides deep, culturally authentic implementations of the actual foundational genres: **Bachata**, **Cumbia**, **Flamenco**, **Reggaeton**, **Salsa**, **Tango**, and **Timba**.

---

## 4. Catalog of Song Styles

Mix Genres includes over 200 historically and regionally grounded song styles:

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

## 5. Instruments Used in Sample Songs & Arrangements

Sample arrangements and generated templates draw from an extensive catalog of over 100 instruments:

### Keyboards, Organs & Bellows
- **Bandoneón**: The quintessential voice of Argentine Tango, featuring rapid bellows accents and breathing textures.
- **Accordion**: Used in Cumbia, Choro, Forró, and Zydeco styles.
- **Piano (Acoustic Grand)**: Primary chordal and rhythmic motor across Salsa (montuno), Jazz, Tango, Classical, and Pop.
- **Rhodes Electric Piano**: Warm tine bell tone used extensively in Neo-Soul, R&B, and Cool Jazz.
- **Clavinet**: Funky, percussive plucked keyboard with high bite for Funk and Disco.
- **Hammond B3 Organ**: Rotary-speaker gospel and soul foundation; provides the "organ bubble" in Reggae.

### Guitars & Traditional Plucked Strings
- **Spanish / Flamenco Guitar**: High transient attack, low string action, resonant spruce top for rasgueados and golpes.
- **Requinto**: Bright, high-register nylon lead guitar that drives Bachata melodies and Bolero ornamentation.
- **Segunda Guitar**: Rhythmic nylon accompaniment guitar in Bachata.
- **Tres Cubano**: Double-coursed Cuban stringed instrument providing syncopated son montuno hooks.
- **Cavaquinho**: Small 4-string Brazilian instrument driving Samba and Pagode rhythms.
- **Acoustic Guitar (Steel / Dreadnought)**: Fingerstyle and rhythmic strumming for Folk, Country, and Rock.
- **Electric Clean & Jazz Archtop Guitar**: Smooth, warm melodic comping for Jazz, R&B, and Blues.
- **Overdrive & Distortion Guitars**: Heavy, palm-muted rhythm and screaming lead solos for Rock, Metal, and Punk.

### Basses
- **Upright / Double Bass**: Acoustically resonant pizzicato bass for Jazz, Swing, Tango, Bluegrass, and Rockabilly.
- **Electric Finger Bass**: Versatile solid-body bass for Funk, Salsa, R&B, and Pop.
- **Slap Bass**: High-snap percussive thumb-and-pop bass for Deep Funk and Disco.
- **Pick Bass**: Driving, aggressive pick attack for Metal, Punk, and Hard Rock.
- **Fretless Bass**: Expressive microtonal slides and "mwah" timbre for Neo-Soul and Fusion.
- **808 Sub / Synth Bass**: Electronic sine/triangle low-end foundations for Hip Hop, Trap, Reggaeton, and Drum & Bass.
- **Acid 303 Bass**: Resonant diode-ladder filter synth bass for Acid House and Techno.

### Drums & World Percussion
- **Acoustic Drum Kit**: Standard kick, snare, toms, hi-hat, ride, and crash for Rock, Jazz, Funk, and Pop.
- **Electronic Drum Kits (808 / 909)**: Analog synthetic drum hits powering House, Techno, Hip Hop, and Trap.
- **Congas (Quinto, Conga, Tumba)**: Multi-drum hand percussion executing Tumbao, Guaguancó, and Marcha.
- **Bongos**: High-pitched macho/hembra drums providing martillo rhythms in Bachata, Son, and Salsa.
- **Cajón**: Wooden box percussion instrument essential to Flamenco and Afro-Peruvian styles.
- **Palmas**: Hand claps categorized into *sordas* (muffled/deep) and *claras* (crisp/open) for Flamenco compás.
- **Güira / Guacharaca**: Metal scraper providing continuous driving friction in Bachata and Cumbia.
- **Timbales & Paila**: Metal single-headed drums with cascara shell patterns and cowbells for Salsa and Timba.
- **Surdo & Pandeiro**: Heavy bass drum and specialized Brazilian tambourine anchoring Samba.

### Horns & Strings
- **Brass Section (Trumpet, Trombone, Saxophones)**: Powerful stabs, mambo horn lines, and big-band hits.
- **Bowed Strings (Violin, Viola, Cello, Contrabass)**: Lush orchestral accompaniment, tango arrastres, and dramatic sweeps.

---

## 6. Culturally Specific Articulations by Style

Mix Genres captures the nuanced performance techniques unique to world musical traditions:

### Flamenco
- **`rasgueado`**: Multi-finger rolling strum across the nylon strings, creating rapid percussive chord sheets.
- **`golpe`**: Tapping the right hand's ring fingernail against the protective tap plate (*golpeador*) on the guitar soundboard.
- **`alzapúa`**: Virtuosic thumb technique combining downstroke, nail upstroke, and melodic pluck in triplet rhythms.
- **`ligado`**: Crisp left-hand hammer-ons and pull-offs without right-hand replucking.
- **`picado`**: High-velocity rest-stroke scalar melodic runs executed with index and middle fingers.
- **`remate`**: Climax accent pattern signaling the conclusion of a letra or falseta cycle.

### Argentine Tango
- **`marcato`**: Sharp, accented pulse marking downbeats with heavy, detached bow or bellows pressure.
- **`arrastre`**: Dramatic, anticipatory low slide dragging into the downbeat from below, characteristic of the bandoneón and double bass.
- **`síncopa`**: Offbeat push displacing the accent across strong beats to generate dance tension.
- **`canyengue`**: Low, staccato, heavily rhythmic historical playing style with exaggerated percussive damping.
- **`yeite`**: Extended string techniques including *strapata* (striking behind the bridge) and body knocks.

### Dominican Bachata
- **`derecho`**: The foundational verse rhythm, featuring a steady 4/4 guira scrape and closed bongo martillo.
- **`majao`**: The energetic chorus transition where the bongo switches to open resonant heads and the guira opens up.
- **`mambo`**: The instrumental solo section where the requinto unleashes syncopated ornamental leads, string bends, and slides.
- **`apagado`**: Right-hand palm mute damping strings immediately after plucking for a crisp, percussive staccato.

### Afro-Cuban Salsa & Timba
- **`tumbao`**: Syncopated bass pattern landing on beat 4 and tying over beat 1, locking with the conga open tones.
- **`campana`**: Heavy bongo cowbell pattern struck on downbeats during montuno and mambo sections.
- **`cascara`**: Rhythmic stick pattern tapped against the metal shell of the timbales during verses.
- **`bloque`**: Sudden, synchronized full-ensemble rhythmic stabs that interrupt the continuous groove.

### Jamaican Reggae & Dub
- **`one-drop`**: The signature roots drum rhythm where beat 1 is completely empty, and the kick and snare strike simultaneously on beat 3.
- **`skank`**: Crisp, staccato up-strums on beats 2 and 4 played by electric guitar and piano.
- **`bubble`**: Rolling 16th-note shuffle pattern played on a Hammond organ using both hands to interlock between offbeats.
- **`dub-throw`**: Sudden isolated hits fed into tape delays and high-resonance filters with long decay tails.

### Brazilian Samba & Bossa Nova
- **`levada`**: Syncopated nylon guitar pattern where the thumb plays the steady surdo pulse while the fingers pluck offbeat chord accents.
- **`surdo-swing`**: Alternating deep bass drums where the second surdo is struck loudly with a subtle micro-delay (swing) on beat 2.
- **`tamborim-virada`**: Rapid, inverted turning movement of the small frame drum stick to execute intricate syncopated rolls.

### Metal & Hardcore
- **`palm-mute`**: Resting the heel of the picking hand across the guitar bridge to produce heavy, chugging low-end riffs.
- **`tremolo-picking`**: Rapid, unmetered alternate picking on a single string to create sheets of relentless sound.
- **`pinch-harmonic`**: Touching the picking thumb against the vibrating string to excite screaming artificial overtones.

---

## 7. Development & Deployment

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Verification & Testing

```bash
# Validate TypeScript and lint rules
npm run lint

# Compile production build
npm run build

# Preview production build locally
npm run preview
```

### Static GitHub Pages Deployment

The application is fully static and client-side. The automated workflow at `.github/workflows/deploy-pages.yml` builds and deploys `dist/` directly to GitHub Pages on every push to `main`. No backend database or server infrastructure is required.

---

## License

MIT License. Open source and free for educational, compositional, and musical exploration.
