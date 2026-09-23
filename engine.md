Restoring the Band: A Staged Rewrite Plan for the Physical-Modeling Audio Engine

Goal: Keep the new Elementary Audio / physical-modeling engine as the permanent default (no soundfonts, no sample playback), and bring it up to — and past — the richness of the old spessasynth/SF2 engine by rebuilding, in DSP, everything that made the old version sound like a real band in a real room.

Non-goal: Reverting to soundfont/sample playback. Every recommendation below is either (a) pure synthesis/DSP, (b) standard Web Audio nodes (filters, waveshapers, compressors — not sample playback), or (c) small tables of physical measurements (resonance frequencies, decay times) rather than recorded audio. That distinction matters and is called out explicitly wherever it's relevant, because it's easy to accidentally reintroduce "sample-ish" thinking (e.g. impulse-response convolution using a recorded IR file) without realizing it's the same category of thing you're trying to get away from.

Part 0 — How to read this document

Each stage below has five parts:

What's broken — the exact current behavior, with file/line references from the codebase you uploaded.
Why it's like this — the actual mechanical reason the gap exists (not a guess — traced from the code).
The fix — the concrete technical approach, in enough detail that it's a spec, not a vibe.
Acceptance criteria — how you'll know it's actually fixed, not just "changed."
AI Studio prompt — a ready-to-paste prompt for an AI coding assistant to execute that stage. Each prompt assumes the assistant has the repository open and can read/edit files; it names the exact files to touch and the exact constraints to respect.

Stages are ordered by leverage: Stage 1 alone will likely be the single biggest audible improvement, because it's cheap, low-risk, and mostly reuses code you already have.

Part 1 — Exact diagnosis: why the current engine is incomplete

This isn't a vague "it needs more polish." Here is the literal, traceable list of what got dropped or never finished when the engine was rewritten, and why.

1.1 The mastering chain was deleted, not ported

old/src/engine/mixer.ts had a ~150-line createMasterChain() function: highpass → low-shelf → "de-mud" peaking EQ at 340 Hz → presence peak → air shelf → tanh warmth saturation (its own gain-staged pre/post pair) → glue DynamicsCompressor → mid/side stereo widening → limiter DynamicsCompressor → makeup gain.

src/engine/audio/mixer.ts only kept the RoomPreset data table. The processing function is gone. In its place, src/engine/elementary/elementaryEngine.ts → renderMaster() does: highpass, a two-tap feedback delay standing in for reverb, and one el.tanh() applied to the summed mix as both "warmth" and "limiter."

Why this happened: when the synth path moved from a WorkletSynthesizer (a standard Web Audio-compatible node you could pipe into createMasterChain() unchanged) to Elementary Audio's declarative graph, the person doing the rewrite had to decide where mastering lives: inside the Elementary graph (as el.* nodes) or downstream of it (as ordinary Web Audio nodes, exactly like before). They chose "inside the graph," wrote a minimal placeholder (highpass + delay + tanh), and never came back to build out the rest. This is confirmed by the code itself: RoomParams.warmth, .presence, and .air are still defined on the type, still populated from RoomPreset, still passed into renderMaster() as an argument — and never read inside the function body. That's not a design choice, that's an unfinished migration. A grep for DynamicsCompressor across the entire new engine returns zero matches.

1.2 Pitch bend is a stub

src/engine/audio/BandWorklet.ts:

ts
postBend(trackId: string, value: number, atTime?: number) {
  // Pitch bend support
}

Empty. Meanwhile src/engine/sequencing/perform.ts and src/engine/sequencing/transport.ts both still generate and schedule real pitch-bend events (slides, blue notes, idiomatic ornaments) and call sink.pitchBend(...) at the right times. The composition layer never regressed — it's the synthesis layer that dropped the ball on the last step. This is the cleanest kind of bug: data flows correctly all the way to the door and gets thrown away right before it would have mattered.

1.3 A huge instrument catalog is collapsed onto ~26 shared algorithms

modelForInstrument() in elementaryEngine.ts routes instruments to one of ~26 numbered synthesis "models" by regex match on instrument id. That's a reasonable starting factoring, but the biggest bucket (model 0, the default) currently catches this single regex:

/guitar|tres|cuatro|requinto|charango|vihuela|sitar|oud|kora|berimbau|cavaquinho|harp|mandolin|banjo|shamisen|guqin|pipa|guzheng|jarana|koto|dulcimer/

Nineteen instrument families — Spanish guitar, Andean charango, Middle Eastern oud, West African kora, Japanese koto and shamisen, Chinese guqin/pipa/guzheng, and more — all run through the exact same single-delay-loop Karplus-Strong patch, differentiated only by three continuous scalars (brightness, decay, body) pulled from LuthierAPI.ts. Real instances of these instruments differ in string count, courses (single vs. doubled/tripled unison strings), sympathetic-string resonance (sitar, sarangi), resonator type (gourd vs. wood box vs. skin-faced body), and excitation (nail vs. fingerpad vs. plectrum vs. bare finger). None of that is modeled — only continuous knob differences on one shared algorithm.

Why: building N genuinely distinct physical models is a lot of DSP code, and the rewrite prioritized breadth-of-coverage (every instrument produces some sound, nothing is silent) over depth-of-differentiation. That was probably the right call for a first pass — it's the reason the app works at all — but it's also exactly why "everything sounds like the same instrument at different pitches."

1.4 The mastering "room" reverb is a comb filter, not a reverb
ts
const delayL = el.delay({ size: 44100 }, el.const({ value: 1250 }), el.const({ value: feedback }), hpLeft);
const delayR = el.delay({ size: 44100 }, el.const({ value: 1680 }), el.const({ value: feedback }), hpRight);

A single fixed-length feedback delay per channel is a comb filter / slapback echo, not a diffuse reverb. It will impose audible, regularly-spaced resonant peaks (the classic "metallic" or "robotic" character) rather than a smooth sense of space. The old engine never attempted algorithmic reverb at all (the space field existed on RoomPreset but was unused by createMasterChain), so this is a case of the new engine reaching further than the old one and landing short, rather than a straight regression — but it's actively contributing to the "not authentic" complaint, so it's in scope for this plan.

1.5 Polyphony management is crude and duplicated

BandWorkletNode.MAX_POLYPHONY = 8 (live path) and a second, independently hardcoded voices.length >= 8 (in offlineRender.ts) — two copies of the same magic number that can drift apart. Voice stealing just grabs voices[0] and overwrites it with no fade-out, which can click. The old spessasynth engine had proper, much deeper polyphony management built in; this is a real capability gap for dense chordal parts (full guitar/piano voicings, sustained pads layered under new attacks).

1.6 The gain-calibration table is explicitly a first draft

The comment above GAIN_BY_MODEL in elementaryEngine.ts says so directly: "This is a first-pass, mechanically-measured table, not a final mix — per-instrument (rather than per-model) trimming is still worth doing on top of it." It's measured (good — it's not guessed), but it only balances the ~26 models, not the ~150+ instruments that share them. Two guitars with very different LuthierAPI parameters (say, a bright flamenco guitar vs. a dark archtop jazz guitar) get the same model-level gain even though their actual synthesized loudness at that gain can differ.

1.7 Live and offline rendering independently reimplement the same logic

audio.ts/BandWorklet.ts (live) and offlineRender.ts (export) each have their own copy of: default track-parameter construction, dialect resolution, articulation-string parsing, and the polyphony/voice-stealing logic. They're kept in sync by hand today. Any future change to one and not the other (which already happened — the offline path's CC handling only forwards 7, 10, 74, 18, while the live path's forwards those plus 16, 17, 19, 20, 21, 22, 24, 25) will make live playback and exported MP3s of the same song sound different. This is a structural risk, not an audible bug yet, but it will actively fight every stage below unless it's fixed early.

Part 2 — Target architecture

Keep exactly what's working:

Elementary Audio (@elemaudio/web-renderer + @elemaudio/offline-renderer) as the voice synthesis engine — this is the right call, it's real DSP, it's fast, and it unifies live/offline synthesis through one graph description.
The LuthierAPI.ts physical-parameter model (material density, tension, body volume, decay factor, harmonic richness) as the instrument description layer.
The dialect/cultural-rules system (dialects.ts, cultural.ts) as the performance-style layer.

Change the architecture in one specific way: stop trying to do mastering inside the Elementary graph, and stop treating live and offline as separate implementations.

                    ┌─────────────────────────────┐
                    │   Shared Voice Param Resolver │  (NEW — Stage 8)
                    │  instrument → luthier → model │
                    │  → TrackParams, one codepath   │
                    └───────────────┬─────────────┘
                                    │
                    ┌───────────────▼─────────────┐
                    │   Elementary synthesis graph  │  (per-voice DSP, deepened
                    │   renderVoice / renderTrack    │   in Stages 3–6)
                    └───────────────┬─────────────┘
                                    │ dry stereo signal (AudioNode live / Float32Array offline)
                    ┌───────────────▼─────────────┐
                    │   Web Audio mastering chain   │  (RESTORED — Stage 1,
                    │  EQ / warmth / glue / width /  │   extended in Stage 2 & 4)
                    │  limiter — ordinary biquads &  │
                    │  DynamicsCompressor nodes      │
                    └───────────────┬─────────────┘
                                    │
                              speakers / MP3 encoder

The key insight: Elementary's WebRenderer.initialize() already returns a standard AudioNode. Nothing stops you from connecting that node into old/src/engine/mixer.ts's createMasterChain() (recovered almost verbatim) instead of straight to context.destination. And on the offline side, OfflineRenderer in offlineRender.ts already produces raw Float32Array L/R buffers before MP3 encoding — exactly the shape the old worker-based renderer produced — so you can push those buffers through an OfflineAudioContext running the same createMasterChain(), exactly like old/src/engine/audio.ts's renderSongToMp3() did. This means Stage 1 requires almost no new DSP code — it's mostly restoring deleted code and re-wiring two connection points.

Part 3 — Stages
Stage 1 — Restore the mastering chain (highest leverage, lowest risk)

What's broken: No EQ shaping, no compression, no stereo widening, no real limiter — just highpass + comb-delay + tanh. This is very likely the single largest contributor to "one beam" vs. "a band in a room."

The fix:

Resurrect createMasterChain() from old/src/engine/mixer.ts essentially unchanged into src/engine/audio/mixer.ts, restoring MasterChain interface, saturationCurve(), and the full biquad/waveshaper/compressor/widener/limiter chain.
In src/engine/audio/BandWorklet.ts, change initialize(): instead of this.audioNode.connect(context.destination), create the master chain (createMasterChain(context, room)) and connect this.audioNode → chain.input, with chain.output already wired to destination. Update setRoom()/setVolume() to call chain.setRoom()/chain.setVolume() instead of (or in addition to) touching Elementary's roomParams.
In src/engine/elementary/elementaryEngine.ts, simplify renderMaster() back down to just summing tracks and applying a gentle highpass (keep the highpass — it's genuinely useful for removing sub-rumble before it hits the compressor). Remove the tanh-as-limiter and the comb-delay reverb from here — they move downstream (limiter → Stage 1's restored chain; real reverb → Stage 4).
In src/engine/audio/offlineRender.ts, after the existing render loop produces left/right Float32Arrays (right before the current peak-normalize step), create an OfflineAudioContext, run those buffers through createMasterChain(offlineCtx, room) exactly as old/src/engine/audio.ts's renderSongToMp3() did, call offlineCtx.startRendering(), and encode that result to MP3. Delete the current simplistic peak-normalize + fade block — the restored limiter replaces it (keep a short fade-in/out, 5–10 ms, purely to avoid a sample-0 click, nothing more).

Acceptance criteria:

grep -r "DynamicsCompressor" new/src/engine returns non-zero matches again.
Switching the Room preset audibly changes warmth/presence/air, not just highpass cutoff.
A/B a dense full-band section before/after: the "after" version should feel glued together (transients controlled) without obviously pumping.
Exported MP3 and live playback of the same song are perceptually identical (same chain, same parameters).

AI Studio prompt:

You are working in a TypeScript/React audio application. Two zips of the
codebase are available: an OLD version (soundfont-based) and a NEW version
(Elementary Audio physical-modeling based, currently in production and
staying that way — do not reintroduce soundfont/sample playback).

Task: restore the NEW engine's master bus processing by porting
old/src/engine/mixer.ts's createMasterChain() (highpass, low-shelf,
de-mud peaking EQ, presence peak, air shelf, tanh warmth saturation with
pre/post gain staging, glue DynamicsCompressor, mid/side stereo widening,
limiter DynamicsCompressor, makeup gain) into src/engine/audio/mixer.ts with
no material changes to its internal DSP.

Then:
1. In src/engine/audio/BandWorklet.ts, connect the WebRenderer's audioNode
   into createMasterChain(context, room).input instead of directly to
   context.destination, and wire setRoom()/setVolume() to the chain's
   setRoom()/setVolume().
2. In src/engine/elementary/elementaryEngine.ts's renderMaster(),
   remove the el.tanh()-as-limiter and the two-tap feedback-delay reverb.
   Keep only a gentle highpass on the summed tracks. Master processing now
   happens downstream in the Web Audio chain, not inside the Elementary
   graph.
3. In src/engine/audio/offlineRender.ts, after the existing sample-accurate
   render loop produces `left`/`right` Float32Arrays, run them through an
   OfflineAudioContext using the same createMasterChain(offlineCtx, room),
   matching the pattern in old/src/engine/audio.ts's renderSongToMp3().
   Remove the current ad hoc peak-normalize + fade block; keep only a
   5–10ms fade-in/out to avoid a sample-0 click.
4. Make sure live playback and MP3 export produce audibly identical
   processing for the same song and room — no parameters should differ
   between the two code paths.

Do not touch renderVoice(), modelForInstrument(), or any per-instrument
synthesis code in this pass — this stage is master-bus only.

When done, list every file changed and, for each, a one-line summary of
the change.
Stage 2 — Reconnect Room parameters end-to-end

What's broken: RoomParams.warmth/.presence/.air are threaded through the whole app but dead-ended before Stage 1. After Stage 1, the mechanism to use them exists again (in the restored Web Audio chain) — this stage is about making sure every call site actually passes real values through and that the UI's room picker visibly/audibly changes them.

The fix:

Audit every place RoomParams or RoomPreset is constructed (audio.ts, BandWorklet.ts, offlineRender.ts, any UI store) and confirm warmth, presence, air come from the actual selected ROOMS[] entry, not a default/placeholder.
Add a small dev-only diagnostic (console table or a debug panel) that prints the live RoomPreset values currently driving the master chain, so this class of "value exists but is silently ignored" bug is easy to catch again in the future.
Extend roomFor()/roomForStyle() (already present in src/engine/audio/mixer.ts) to also be reachable from the export UI, so users bouncing to MP3 can pick a room independently of what's currently playing live.

Acceptance criteria: Toggling through all six room presets while a sustained chord plays produces audibly distinct tonal character for each — not just a level or reverb-length change.

AI Studio prompt:

Audit every code path in the NEW engine (new/src/engine/**, and any UI
store/component that reads or sets the current Room) that constructs or
consumes a RoomPreset/RoomParams object. Confirm that `warmth`,
`presence`, and `air` are populated from the actually-selected room in
ROOMS (src/engine/audio/mixer.ts) at every call site, with no hardcoded
defaults silently overriding the user's selection.

Add a lightweight dev-only diagnostic (a console.table call gated behind
an env flag, or a small debug overlay component if the app already has a
dev panel) that prints the live RoomPreset values currently driving the
master chain whenever the room changes, so a values-exist-but-are-ignored
regression like the one just fixed in Stage 1 is easy to catch by
inspection in the future.

Confirm the MP3 export path (src/engine/audio/offlineRender.ts) lets the
user pick a room independent of whatever room is set for live playback,
using the roomForStyle()/roomFor() helpers already in mixer.ts.

Report any call site you find where warmth/presence/air were not
actually reaching the master chain, and fix it.
Stage 3 — Restore pitch bend / slide expression

What's broken: BandWorkletNode.postBend() is an empty stub; real bend data from perform.ts/transport.ts is discarded.

The fix:

In elementaryEngine.ts, change how a voice's frequency is expressed: instead of a plain el.const({key, value: freq}), wrap it in el.sm() (Elementary's smoother/lag node) so that updating the same keyed const with a new value causes a short, continuous glide rather than an instant jump — el.sm(el.const({key: freqKey, value: currentFreq})), where currentFreq is recomputed on every bend update. A glide time of roughly 8–20 ms reads as continuous pitch motion for fast MIDI-style bends, and longer (40–120 ms) for expressive slides — expose this as a per-voice/per-dialect parameter (bendGlideMs) rather than one constant, since a pedal-steel slide and a quick blue-note bend should not glide at the same rate.
Implement BandWorkletNode.postBend(trackId, value, atTime): resolve the currently-held voice(s) for that track, compute the bent frequency from value (standard ±2 semitone default range, but pull the actual range from wherever perform.ts encodes it if it varies per dialect/instrument), update the voice's frequencyHz, and call syncGraph(). Mirror the same logic in offlineRender.ts's bend event handler (currently that event type exists in the RenderEvent union but check whether it's actually wired to update voice.frequencyHz — trace it before assuming it's handled).
Respect the "authored" vs "continuous" distinction already present in groove.ts (authoredTimingOnly) — bends generated as idiomatic ornaments (blue notes, slides baked into the performance data) should behave identically live and in export; this stage is really about making sure the plumbing that already exists downstream of composition actually reaches the oscillator.

Acceptance criteria: A blues guitar or pedal-steel part with authored bends/slides audibly glides in both live playback and exported MP3, matching the shape encoded in PerfNote.pitchBend.

AI Studio prompt:

Pitch bend data is correctly generated by the composition layer
(src/engine/sequencing/perform.ts, PerfNote.pitchBend) and correctly
scheduled by src/engine/sequencing/transport.ts (calls to sink.pitchBend), but
silently dropped at the synthesis layer: BandWorkletNode.postBend() in
src/engine/audio/BandWorklet.ts is an empty stub.

1. In src/engine/elementary/elementaryEngine.ts, change per-voice
   frequency from a bare el.const() to an el.sm()-smoothed const so that
   re-triggering the same key with a new value produces a continuous
   glide instead of an instant jump. Add a bendGlideMs parameter to
   TrackParams (with a sensible per-dialect default — fast for blue-note
   bends, slower for pedal-steel-style slides) that controls the glide
   time.
2. Implement BandWorkletNode.postBend(trackId, value, atTime): find the
   currently-held voice(s) for that track, compute the bent frequency
   (confirm and reuse whatever bend-range convention perform.ts already
   assumes — trace PerfNote.pitchBend's value encoding before assuming a
   default ±2 semitone range), update that voice's frequencyHz, and call
   syncGraph().
3. Check src/engine/audio/offlineRender.ts's `bend` RenderEvent handling —
   trace whether it currently updates voice.frequencyHz at all, and if
   not, wire it up the same way as the live path so live and exported
   audio match.

Do not change how bends are composed/scheduled upstream — this is purely
a synthesis-layer wiring fix. Verify with a simple test: a note with an
authored pitchBend array should audibly glide, not step, in both a live
play-through and an MP3 export of the same performance.
Stage 4 — Real reverb, not a comb filter

What's broken: The "space" send is a single fixed-delay feedback loop per channel — acoustically a slapback/comb filter, not a room.

The fix — algorithmic reverb only, no IR/convolution (stays in the "pure DSP, no samples" category), and no soundfont-adjacent trick like reusing a recorded room tone:

Implement a small Schroeder/Moorer-style reverb network entirely in Elementary primitives:

4–6 parallel comb filters (feedback delay lines) with mutually prime delay lengths (e.g. 1013, 1229, 1367, 1499, 1657, 1811 samples at 44.1kHz — picked so their resonances don't reinforce each other and produce the exact comb-y artifact you have today) — this is the classic technique for breaking up periodicity.
Each comb filter's feedback path passes through its own one-pole lowpass (damping) so high frequencies decay faster than lows, matching how real rooms behave.
Sum the combs, then run the sum through 2–3 series allpass filters (short delay, ~50–200 samples, feedback ~0.5–0.7) to diffuse the remaining periodicity into something that reads as texture rather than discrete echoes.
Map RoomPreset.space to overall wet/dry mix and to the damping coefficient (more space → longer perceived decay and less damping); map each room's character (club tight/short, hall long/diffuse, tape short/dark) to distinct comb-length sets and damping presets rather than one shared network with different knob values — a "Club" and a "Hall" should not just be the same reverb turned up.
Keep this as a send (parallel, mixed back in at a controlled wet level) rather than inline in the signal path, exactly like a real mixing console — this also makes it trivial to route different tracks at different send amounts later if you want closer/further-sounding instruments within the same room (a genuine "band in a room" depth cue the old engine never had either).

Acceptance criteria: A single sustained note in "Hall" should have an audibly smooth, non-metallic tail with no obvious periodic flutter; A/B against the current comb-delay should make the difference immediately obvious on headphones.

AI Studio prompt:

The current "room" ambience in src/engine/elementary/elementaryEngine.ts's
renderMaster() is a single fixed-length feedback delay per channel — this
is acoustically a comb filter / slapback echo, not a reverb, and produces
metallic, periodic artifacts. Replace it with a proper small algorithmic
reverb built from Elementary primitives only (el.delay, el.lowpass, no
convolution, no impulse-response files, no sample playback of any kind).

Implement a Schroeder/Moorer-style network:
- 4–6 parallel comb (feedback delay) filters using mutually prime delay
  lengths in samples (pick values that avoid low-order harmonic overlap,
  e.g. in the 1000–1900 sample range at 44.1kHz).
- Each comb's feedback path passes through a one-pole lowpass (damping)
  so highs decay faster than lows.
- Sum the combs and pass the sum through 2–3 series allpass filters
  (short delays, feedback ~0.5–0.7) to diffuse remaining periodicity.
- Expose this as a parallel send (mixed back at a controlled wet level),
  not inline in the main signal path.

Map RoomPreset.space to the send's overall wet level and damping amount.
Give each room preset (club/studio/hall/room/tape/raw — see
src/engine/audio/mixer.ts's ROOMS table) its own comb-length set and
damping character rather than sharing one network with different knob
values — Hall should read as long/diffuse, Club as tight/short, Tape as
short/dark, Raw as effectively bypassed.

This reverb should sit downstream of voice synthesis (post track-sum,
same place the old comb-delay lived) and upstream of, or in parallel
with, the mastering chain restored in Stage 1 — confirm ordering doesn't
cause the limiter to fight the reverb tail unpredictably (reverb send
level should be tame enough that sustained tails don't constantly
re-trigger heavy gain reduction).

Acceptance test: render a single sustained note through each room preset
and describe/measure whether the decay is smooth or shows periodic
flutter (you can check this by examining the autocorrelation or just by
ear — flag if you can't verify by ear and need a spectrogram/waveform
check instead).
Stage 5 — Break up the shared-algorithm instrument families

What's broken: ~19 acoustically distinct plucked-string traditions collapse onto one Karplus-Strong patch (model 0); similar (smaller) collapses exist elsewhere in modelForInstrument().

The fix — this is the biggest DSP-writing stage, and where "thousands of lines" actually goes. Break model 0 into genuine sub-families based on real, physically-motivated differences, not just parameter tweaks:

Course/string-count modeling. Instruments with doubled or tripled unison courses (12-string guitar, mandolin, tres, some banjo tunings, bouzouki) should run two or three Karplus-Strong delay loops per note, each with a small independent detune (±3–8 cents, seeded per-instrument so it's stable but not identical across instruments) and independent damping, summed together. This single change is disproportionately effective — the chorused, shimmering quality of doubled strings is one of the most recognizable things missing from a single-delay-loop pluck.
Sympathetic resonance for drone/sitar-family instruments. Sitar, sarangi, some Chinese/Indian traditional instruments, and (differently) 12-string-adjacent instruments have prominent sympathetic string resonance. Model this as a small bank (8–13) of very lightly-damped resonant filters (el.svf bandpass, high Q, long release) tuned to the notes of the relevant scale/drone, all fed a small amount of the main string's output continuously (not gated) — this produces the characteristic "buzzing halo" that follows the melody without literally simulating individual physical strings.
Resonator-body differentiation by construction type, not just three fixed bands. The current 100/220/380 Hz three-band body-resonance filter bank is a reasonable generic guitar-body approximation but is applied to everything in model 0. Build 3–4 distinct resonator-bank presets keyed to real instrument construction: a gourd resonator (kora, berimbau — narrower, more nasal peak, less low-end extension), a solid wood box with a soundhole (guitar, oud, charango — the current 3-band approach, tuned per approximate body size from LuthierAPI.bodyResonanceVolume), a stretched-skin-faced box (banjo, some cavaquinho/ukulele-adjacent builds — brighter, shorter sustain, more percussive attack noise blended in), and a long thin board resonator (koto, guqin, guzheng — favor lower fundamental resonances and longer, more even sustain, minimal high-frequency "pluck click"). Route each instrument to the matching resonator preset via a new lookup (extend modelForInstrument's exact-match table rather than the broad regex) instead of the shared default.
Excitation differentiation. Nail/plectrum vs. fingerpad vs. bare-finger vs. hard-pick changes the impulse spectrum feeding the delay loop. Currently every model 0 instrument uses the same el.noise() burst shaped by one ADSR. Differentiate the impulse's spectral tilt (a highpass or lowpass on the noise burst before it hits the delay loop) and its length per excitation type, and pull the excitation type from LuthierAPI (add a field if it doesn't already distinguish this) rather than hardcoding one impulse shape for the whole family.
Apply the same "break the big bucket into real sub-families" treatment to any other over-broad regex bucket you find during implementation — model 0 is the worst offender but audit bass (3), winds (7/15/16), and reed (10) the same way; they're smaller buckets but the same principle applies.

Acceptance criteria: Render the same phrase on a 6-string guitar, a 12-string guitar, a sitar, and a koto at matching pitch/velocity. They should be clearly, immediately distinguishable from each other by ear, not just by pitch range — if you can't tell them apart with your eyes closed, the family split isn't deep enough yet.

AI Studio prompt:

In src/engine/elementary/elementaryEngine.ts, modelForInstrument()
currently routes ~19 acoustically distinct plucked-string instrument
families (guitar, tres, cuatro, charango, sitar, oud, kora, berimbau,
mandolin, banjo, shamisen, guqin, pipa, guzheng, koto, dulcimer, etc.) all
to the same "model 0" default Karplus-Strong patch in renderVoice(),
differentiated only by continuous LuthierAPI parameters (brightness,
decay, body). This is why the mix reads as one homogenized plucked-string
timbre. Do not go back to soundfonts/samples — this must remain pure
synthesis. Break model 0 into genuinely distinct sub-models:

1. Course/string-count modeling: for instruments with doubled/tripled
   unison courses (12-string guitar, mandolin, tres, bouzouki, some banjo
   tunings), run 2-3 Karplus-Strong delay loops per note with small
   independent detune (roughly ±3-8 cents, seeded per-instrument for
   stability) and independent damping, summed. Identify which instruments
   in src/data/instruments/index.ts have multi-course construction (check
   for existing metadata; add a `courses` field to the instrument/luthier
   data if none exists) and route them through this multi-loop variant.

2. Sympathetic resonance for drone-family instruments (sitar, sarangi,
   and similar): add a bank of 8-13 lightly-damped high-Q bandpass
   resonators (el.svf) tuned to the relevant scale/drone notes, fed
   continuously by a small tap of the main string's output (not gated by
   the note's own envelope), producing a sympathetic "halo" that follows
   the melody.

3. Body-resonance presets by construction type instead of one shared
   3-band filter bank: implement at least 4 distinct resonator-bank
   presets (gourd resonator: narrow/nasal, less low extension; solid
   wood box with soundhole: current 3-band approach, size-scaled from
   LuthierAPI.bodyResonanceVolume; skin-faced box: brighter, shorter
   sustain, more attack noise; long thin board resonator: lower
   fundamentals, longer/more even sustain, minimal pluck click). Add an
   exact-instrument routing table (extend modelForInstrument's existing
   EXACT_MODELS pattern) mapping each specific instrument to its
   resonator preset, rather than relying on the broad regex for tone
   shaping.

4. Excitation differentiation: vary the noise burst's spectral tilt
   (pre-filter before the delay loop) and length by excitation type
   (nail/plectrum/fingerpad/hard-pick). Add or reuse a LuthierAPI field
   for excitation type and route it through.

5. After finishing model 0, audit the other broad regex buckets in
   modelForInstrument() (bass, winds, reed families) for the same kind of
   over-collapsing and apply the same principle if you find it, at your
   judgment of what's worth splitting further.

Keep renderVoice()'s existing model-number switch structure — add new
cases/sub-branches rather than restructuring the whole function, so this
stage's diff is reviewable.

Acceptance test: render the same short phrase on a 6-string guitar, a
12-string guitar, a sitar, and a koto at matching pitch and velocity, and
confirm they're clearly distinguishable from each other by timbre alone.
Stage 6 — Deepen winds, brass, reeds, and bowed strings

What's broken: these families are already better-differentiated than the plucked-string bucket (see the existing per-model comments in elementaryEngine.ts — cases 6, 7, 10, 15, 16 already show real design thought), but they're each a single fixed patch per family with no round-robin variation, no articulation-dependent noise/transient detail beyond what's already there, and formants tuned per family rather than per instrument (a flute and a piccolo currently differ only by the frequency they're asked to play, not by any distinct formant shaping).

The fix:

Per-instrument formant tuning, not per-family: extend the wind/reed/brass cases to look up a small formant-frequency table (2–3 resonance peaks with center frequency + Q) per specific instrument rather than using the same fixed offsets (e.g. 950 + b * 2500 in the reed case) for every instrument sharing that model number. Small, real acoustic differences (a bassoon's much lower dominant formant vs. an oboe's) are cheap to add here and are highly recognizable.
Attack transients as a separate, articulation-aware layer. Add a distinct tonguing-click transient for winds/reeds/brass (a short, filtered noise burst gated by a very fast envelope, timbrally different from the sustained-tone excitation) that's present on hard/staccato articulations and mostly absent on legato/slurred ones — check whether dialects.ts already encodes articulation strength/legato information you can key this off of.
Breath/bow micro-variation per note, not per track. Currently params.pressure/params.bowPressure are track-level (set once via CC, changed only on explicit CC events). Add a small per-note seeded random deviation (similar in spirit to groove.ts's noise1D humanization, reusable directly — it's already exported) to breath noise level and bow-friction amount, so consecutive notes in a sustained line don't sound like they're coming from a machine with a perfectly fixed breath pressure.
Bowed strings: add a second, higher body-resonance formant. The current model (case 6) has one body-resonance peak (bodyPeak); real violin/viola/cello bodies have at least two prominent resonances (main "wood" resonance and a higher "bridge hill" resonance around 2–3kHz on violins). Add the second peak, again with per-instrument (not just per-model) center frequency.

Acceptance criteria: A slurred legato phrase and a staccato/tongued phrase on the same wind instrument should sound clearly different in attack character, not just in note-to-note gaps. A violin and a cello playing the same pitch (in the cello's upper register / violin's lower register, where ranges overlap) should still sound like different instruments, not just "the same bowed tone, different brightness knob."

AI Studio prompt:

In src/engine/elementary/elementaryEngine.ts, the wind/reed/brass/bowed-
string synthesis cases (models 6, 7, 10, 15, 16) are already reasonably
differentiated by excitation mechanism, but each is one fixed patch per
model number, with formant frequencies fixed per family rather than per
instrument, and no articulation-dependent attack-transient layer.

1. Add a per-instrument formant table (2-3 resonance center
   frequencies + Q per instrument, not per model) for the wind/reed/brass
   families, and route lookups through it instead of the current shared
   fixed offsets (e.g. the `950 + b * 2500` nasal formant in the reed
   case, model 16). Populate initial values using published acoustic
   formant/resonance research for real instruments where you can find
   reliable figures (values only — no audio, no samples), and use
   reasonable physically-plausible estimates elsewhere, clearly commented
   as estimates.

2. Add a distinct tonguing/attack-transient layer for winds/reeds/brass:
   a short, filtered noise burst with its own fast envelope, timbrally
   separate from the sustained-tone excitation, present on hard/staccato
   articulations and largely absent on legato/slurred ones. Check
   new/src/engine/dialects.ts for existing articulation-strength or
   legato metadata to key this off of before adding new fields.

3. Add small per-note seeded random deviation to breath-noise level
   (winds/reeds) and bow-friction amount (bowed strings), reusing the
   noise1D()-style humanization approach already exported from
   new/src/engine/generators/groove.ts, so sustained lines don't sound
   perfectly mechanically uniform note to note.

4. In the bowed-strings case (model 6), add a second body-resonance
   formant (in addition to the existing single bodyPeak) roughly modeling
   a violin-family "bridge hill" resonance, with per-instrument (not
   per-model) center frequency, so violin/viola/cello are more clearly
   distinct even in overlapping pitch ranges.

Acceptance test: render the same phrase legato and staccato on one wind
instrument and confirm a clear attack-character difference beyond just
note gaps; render the same pitch on violin and cello (in their
overlapping range) and confirm they remain timbrally distinguishable.
Stage 7 — Percussion realism pass

What's broken: the membrane (4/5) and idiophone (17/18) models are already genuinely good physical modeling (real Bessel-zero mode ratios, split by excitation mechanism per the code comments) — this is the strongest part of the current engine. The gaps are: no round-robin/hit-to-hit variation (every hit on a given drum with the same velocity is bit-identical), and no shell/body secondary resonance coupling.

The fix:

Add small seeded per-hit variation (reuse groove.ts's seeded RNG helpers) to mode amplitudes and the noise-burst spectral shape in the membrane and idiophone cases, so consecutive identical-velocity hits aren't bit-for-bit identical — real percussion never repeats a hit exactly.
Add a lightly-damped secondary resonator representing the shell/body (distinct frequency from the membrane modes, much lower amplitude, longer or shorter decay depending on shell material implied by the instrument), coupled by feeding a small amount of the membrane output into it — this is what gives real congas/djembes/tablas their characteristic "body" under the head's pitch.
Extend the higher-Bessel-zero mode series already used (currently 4 modes: 1.000, 1.593, 2.135, 2.295) with 1–2 more terms (2.653, 2.917 — already noted in the existing code comment as known but unused) for drums/instruments where a metallic/higher-mode-rich character is wanted (e.g. bright steel-faced drums), gated behind instrument metadata so it's not applied everywhere indiscriminately.

Acceptance criteria: Ten consecutive hits on the same drum at the same velocity should sound like ten real hits, not one sample looped — subtle but perceptible variation, not randomness that changes the pitch or basic character.

AI Studio prompt:

The percussion synthesis in src/engine/elementary/elementaryEngine.ts
(models 4/5 membranes, 17 shaken/scraped idiophones, 18 struck metal/wood
idiophones) is already solid physical modeling (real Bessel-zero mode
ratios, correctly split by excitation mechanism). Improve realism without
changing the core algorithm:

1. Add small seeded per-hit variation to mode amplitudes and noise-burst
   spectral shape in the membrane (case 4/5) and idiophone (17/18) cases,
   reusing the seeded-RNG helpers already exported from
   new/src/engine/generators/groove.ts (seedOf/rand01/randNorm), so
   repeated same-velocity hits are subtly different from each other
   rather than bit-identical.

2. Add a lightly-damped secondary shell/body resonator to the membrane
   case: a separate resonant frequency (lower than the membrane modes,
   much lower amplitude), fed by a small tap of the membrane output, with
   decay time distinct from the head's own decay — this should read as
   the drum's "body" under the head pitch. Vary its character (frequency/
   decay) based on the instrument's implied shell material if that
   metadata exists in LuthierAPI, otherwise use a single reasonable
   default and note it as a place for future per-instrument tuning.

3. The code comment near the membrane mode series already notes two
   further Bessel-zero ratios (2.653, 2.917) that aren't currently used.
   Add them as optional extra mode terms for instruments that should read
   as more metallic/higher-mode-rich, gated by instrument metadata so
   it's not applied to every membrane instrument uniformly.

Acceptance test: render ten consecutive identical-velocity hits on the
same drum and confirm audible hit-to-hit variation without any change to
the drum's basic pitch/character.
Stage 8 — Unify the voice-parameter resolver (structural, do early or things drift)

What's broken: audio.ts/BandWorklet.ts and offlineRender.ts each independently build TrackParams, resolve dialects, parse articulation strings, and manage the voice pool/polyphony cap — already provably out of sync (offline forwards fewer CC numbers than live).

The fix:

Extract a single module (e.g. new/src/engine/voiceParams.ts) owning: default-track-parameter construction, dialect resolution and override application, articulation-string parsing, and CC-number → parameter-field mapping (the full list, not the offline path's current subset).
Extract a single VoicePool class owning: the Map<trackId, VoiceState[]>, the polyphony cap (make it a real constant imported from one place, not duplicated), and proper voice-stealing with a short fade-out ramp on the stolen voice's envelope rather than an instant cut.
Have both BandWorkletNode (live) and offlineRender.ts (export) depend on these shared modules instead of each having their own copy.

Acceptance criteria: Live playback and MP3 export of the same performance are provably running the same parameter-resolution and voice-management code (not just "sound the same" — literally share the module), so future changes can't silently diverge again.

AI Studio prompt:

src/engine/audio/BandWorklet.ts (live) and src/engine/audio/offlineRender.ts
(export) each independently reimplement: default TrackParams construction,
dialect resolution, articulation-string parsing, CC-number-to-parameter
mapping, and voice-pool/polyphony management. They have already drifted:
the offline path only forwards CC 7/10/74/18 while the live path also
handles 16/17/19/20/21/22/24/25, and MAX_POLYPHONY=8 is hardcoded
separately in each file.

1. Extract a new module, new/src/engine/voiceParams.ts, that owns:
   default-track-parameter construction (the logic currently duplicated
   between BandWorklet.ts's prepareTracks/executeNoteOn and
   offlineRender.ts's per-track setup loop), dialect resolution and
   override application, articulation-string-to-actionType parsing, and
   a single, complete CC-number-to-TrackParams-field mapping table (union
   of what both paths currently handle — don't drop any CC the live path
   currently supports).

2. Extract a new VoicePool class (same file or
   new/src/engine/voicePool.ts) that owns the Map<trackId, VoiceState[]>,
   a single exported MAX_POLYPHONY constant (currently duplicated as the
   literal `8` in two places), and voice-stealing logic that applies a
   short (~5-15ms) fade-out ramp to a stolen voice's envelope before
   reassigning it, instead of the current instant overwrite.

3. Refactor BandWorkletNode and the render loop in offlineRender.ts to
   both depend on these shared modules instead of maintaining separate
   copies. The goal is that live playback and MP3 export of the same
   performance are running the literal same parameter-resolution and
   voice-management code, not just similar code.

This is a refactor, not a synthesis change — audio output for existing
content should be unchanged except where it fixes a live/offline
discrepancy (e.g. more CCs now taking effect in exports) or removes a
stolen-voice click.
Stage 9 — Proper loudness calibration, per instrument not just per model

What's broken: GAIN_BY_MODEL balances ~26 synthesis models by (self-described) first-pass peak/RMS measurement; it doesn't account for instrument-to-instrument variation within a shared model, and it's peak/RMS-based rather than perceptual-loudness-based.

The fix:

Move from peak/RMS matching to LUFS-based loudness matching (implement a simple integrated-loudness meter per the ITU-R BS.1770 algorithm — it's a few dozen lines of DSP: K-weighting filter + mean square + gating — or use a small existing loudness-measurement library if the project's dependency policy allows it) for the calibration script (scripts/gain-calibration.ts, already referenced in the code comments).
Extend calibration from "one reference note per model" to a small matrix per instrument: a few representative pitches across that instrument's real range, a couple of velocities, run through the actual per-instrument parameters (not just the model default) — this is what catches the "two guitars with different Luthier params, same model gain" gap noted in the diagnosis.
Store the result as a two-level table: model-level default gain (current GAIN_BY_MODEL, as a fallback) plus an optional per-instrument override map populated by the extended calibration script, checked first in makeupGainFor().
Re-run this calibration automatically as a CI check (or at minimum a documented manual step) whenever renderVoice() changes for a given model, so the table doesn't silently go stale the way the current one-time table has.

Acceptance criteria: Play a chord voicing across several different instruments sharing the same model number (e.g. several different plucked-string instruments) at the same authored velocity; they should read as comparably loud, not just "roughly in the same neighborhood."

AI Studio prompt:

src/engine/elementary/elementaryEngine.ts's GAIN_BY_MODEL table
balances loudness per synthesis *model* (~26 entries) using a first-pass
peak/RMS measurement (see scripts/gain-calibration.ts). It doesn't
account for loudness variation between different instruments that share
the same model, and peak/RMS isn't a great proxy for perceived loudness.

1. Rework scripts/gain-calibration.ts to measure integrated loudness
   using an ITU-R BS.1770-style algorithm (K-weighting filter + mean
   square + gating) instead of raw peak/RMS. Implement this directly (it
   is compact — a K-weighting pre-filter pair plus a running mean-square
   with a relative gate) rather than reaching for a large new dependency,
   unless the project already has an approved loudness-measurement
   library.

2. Extend the calibration run from one reference note per model to a
   small matrix per *instrument*: a handful of representative pitches
   spanning that instrument's real playable range, at 2-3 velocities,
   synthesized using that instrument's actual LuthierAPI-derived
   TrackParams (not just the model's generic default params).

3. Store results as a two-level lookup in elementaryEngine.ts:
   GAIN_BY_MODEL stays as the fallback default; add a new
   GAIN_BY_INSTRUMENT partial-override map populated from the
   per-instrument calibration pass. makeupGainFor() should check the
   per-instrument override first, falling back to the per-model value.

4. Document (in a comment at the top of the gain table, and/or a short
   CONTRIBUTING note) that this calibration should be re-run whenever
   renderVoice()'s synthesis changes for a given model, since the current
   table already carries a comment acknowledging it can go stale.

Acceptance test: synthesize the same chord voicing across several
different instruments that share a model number, at the same authored
velocity, and confirm they read as comparably loud (not just "in the same
rough neighborhood") after calibration.
Stage 10 — Regression harness

What's broken: nothing, yet — this stage is insurance so the previous nine don't erode again the way the mastering chain did.

The fix:

Build an offline test script that renders a fixed reference note (or short phrase) through every instrument model at fixed velocity/pitch, and computes a small set of objective features per render: spectral centroid, RMS/LUFS level, a simple decay-time estimate (time to -20dB from peak), and a stereo-width measure (correlation between L/R). Store these as a checked-in baseline.
Run this script in CI (or at minimum, document it as a required manual step before merging changes to elementaryEngine.ts, mixer.ts, or BandWorklet.ts) and fail/flag when a feature drifts past a tolerance band from baseline without an explicit "baseline updated intentionally" commit.
Add a short manual blind-listening checklist (a markdown doc is fine) for changes that are hard to catch numerically — e.g. "render Stage 5's guitar/12-string/sitar/koto comparison and confirm they're still distinguishable" — so subjective regressions have a repeatable process too, not just "someone will notice eventually" (which is how the mastering chain got lost in the first place).

Acceptance criteria: Deliberately reintroducing one of the bugs fixed in Stages 1–9 (e.g. commenting out the restored compressor) should cause the harness to flag a measurable deviation.

AI Studio prompt:

Build a regression-testing harness for the audio engine so future changes
can't silently re-break what Stages 1-9 fixed (this is exactly how the
mastering chain was lost during the original Elementary Audio rewrite —
nothing caught it).

1. Write an offline Node/test script (using
   src/engine/audio/offlineRender.ts's rendering primitives, or a thin
   wrapper around them) that renders a fixed reference note or short
   phrase through every synthesis model in modelForInstrument(), at fixed
   velocity and pitch, and computes: spectral centroid, integrated
   loudness (reuse the LUFS measurement built in Stage 9 if that's done,
   otherwise implement independently), decay time to -20dB from peak, and
   L/R correlation (stereo width proxy). Store results as a checked-in
   JSON baseline file.

2. Add a script/CI step that re-runs the same renders and compares
   against the baseline within a tolerance band (define reasonable
   tolerances — tight enough to catch real regressions, loose enough to
   tolerate float/engine-version noise), failing or clearly flagging any
   metric that drifts outside tolerance. Document how to intentionally
   update the baseline when a change is a deliberate improvement.

3. Add a short markdown checklist (docs/audio-regression-checklist.md or
   similar) of manual/subjective checks that don't reduce well to a
   single number — at minimum: the Stage 5 guitar/12-string/sitar/koto
   distinguishability check, the Stage 1 room-preset audible-difference
   check, and the Stage 6 legato-vs-staccato attack check — to be run
   before merging any change to mixer.ts, elementaryEngine.ts, or
   BandWorklet.ts.

Prove the harness works by deliberately reintroducing one already-fixed
bug (e.g. temporarily removing the restored DynamicsCompressor from the
master chain) and confirming the harness flags it.
Part 4 — Suggested sequencing
Order	Stage	Why here	Depends on
1	Stage 1 — mastering chain	Biggest single audible win, almost entirely code you already have	—
2	Stage 8 — unify param resolver	Do early: every later stage adds parameters/CCs, and you don't want to duplicate that work into two drifting copies	Stage 1 (touches the same files)
3	Stage 2 — reconnect room params	Small, fast, immediately verifies Stage 1 actually closed the gap	Stage 1
4	Stage 3 — pitch bend	Small, self-contained, high expressiveness payoff for cost	Stage 8 (cleaner if voice state is already unified)
5	Stage 4 — real reverb	Independent, but do after mastering so you're not tuning reverb against a temporary limiter	Stage 1
6	Stage 5 — plucked-string family split	The big one — most DSP-writing, most audible timbral-authenticity payoff	Stage 8
7	Stage 6 — winds/brass/reed/bowed depth	Same category as Stage 5, smaller scope	Stage 8
8	Stage 7 — percussion realism	Smallest gap to close; do whenever, low risk	Stage 8
9	Stage 9 — loudness calibration	Do after Stages 5–7, since new synthesis variants change loudness balance	Stages 5, 6, 7
10	Stage 10 — regression harness	Build incrementally alongside the others if possible, but must exist by the time Stage 9 finishes	All
Part 5 — Honest risk register
CPU/performance ceiling. Every stage above adds signal-graph complexity (more delay lines, more resonators, per-note detuning, reverb network). Elementary Audio is efficient, but a dense arrangement with many simultaneous physically-modeled voices, each now carrying 2–3x the DSP of today, could hit real-time performance limits on lower-end devices before it hits a quality ceiling. Budget time in Stage 5/6 to profile CPU per voice and consider a "quality tier" (e.g. drop sympathetic-resonance banks or extra unison courses when polyphony is very high) rather than assuming it'll always fit.
"Physically distinct" still isn't "recorded." Even a very good digital waveguide model of a sitar is not the same object as a recording of a sitar — there's a ceiling on how far pure synthesis closes that gap, and it's worth setting expectations that this plan targets "convincingly, distinctly synthetic and characterful" rather than "indistinguishable from a recording." That said, the old soundfont engine's "authenticity" was also bounded (GM soundfont recordings, not bespoke per-song recordings) — this plan should meaningfully exceed it, just not asymptote to zero difference from real recordings.
Formant/resonance data quality (Stage 6). Real acoustic-measurement data for less-common world instruments may be harder to source reliably than for orchestral staples. Where good reference data isn't available, the plan explicitly asks for clearly-commented estimates rather than confident-looking fake precision — worth enforcing in review.
Don't let Stage 5 balloon unbounded. "Break every collapsed family into a distinct model" is open-ended by nature. The plan deliberately scopes Stage 5 to the worst offender (model 0) plus an audit pass for others, rather than promising exhaustive per-instrument DSP for the entire catalog up front — treat further splits as an ongoing backlog fed by the Stage 10 harness and listening checklist, not a single stage with a fixed endpoint.