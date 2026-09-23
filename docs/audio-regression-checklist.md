# Audio Engine Regression Checklist & Quality Assurance Guide

This checklist and regression harness ensure that the physical synthesis models, mastering chain, room acoustics, and dynamic performance features remain authentic and do not silently drift or degrade during future engine development.

---

## 1. Automated Regression Suite

Before committing any changes to `elementaryEngine.ts`, `mixer.ts`, `BandWorklet.ts`, or `LuthierAPI.ts`, run:

```bash
# Run automated objective metrics test against baseline
npm run test:audio
# or
npx tsx scripts/audio-regression-harness.ts
```

### Measured Metrics & Tolerances
- **Integrated Loudness (LUFS, ITU-R BS.1770)**: Tolerance $\pm 2.5\text{ dB}$. Verifies that instruments remain loudness-matched and don't overwhelm or get lost in mixes.
- **Spectral Centroid (Hz)**: Tolerance $\pm 25\%$. Detects accidental filtering or timbre degradation.
- **Decay Time to -20 dB (seconds)**: Tolerance $\pm 0.35\text{ s}$. Confirms damping and waveguide decay characteristics.
- **Stereo L/R Correlation**: Tolerance $\pm 0.20$. Verifies stereo width and spatial positioning.
- **Master Buss Dynamics**: Verifies `DynamicsCompressorNode`, soft-saturation, and algorithmic Schroeder reverb response.

### Intentionally Updating the Baseline
When synthesis models are deliberately upgraded or re-voiced:
```bash
npx tsx scripts/gain-calibration.ts          # Re-calibrate ITU-R BS.1770 loudness
npx tsx scripts/audio-regression-harness.ts --generate  # Update checked-in baseline
```

---

## 2. Subjective Listening QA Checklist

Complete this listening checklist for changes that cannot be reduced to static numbers:

### [ ] Check 1: Plucked-String Sub-Family Distinguishability (Stage 5)
- **Test**: Play a phrase across **6-string acoustic guitar**, **12-string guitar**, **sitar**, and **koto**.
- **Expected Result**:
  - *6-String*: Clean single Karplus-Strong string with acoustic wood box resonance.
  - *12-String*: Audible dual-course octave/unison chorus shimmering with micro-detuning.
  - *Sitar*: Continuous sympathetic string halo that resonates across modal drones.
  - *Koto*: Board resonator tone with fingerpad pluck character and long even sustain.

### [ ] Check 2: Wind & Bowed String Articulations (Stage 6)
- **Test**: Render a legato phrase vs. a staccato/tongued phrase on **flute**, **trumpet**, **oboe**, and **violin**.
- **Expected Result**:
  - *Staccato/Tongue*: Crisp, distinct chiff and lip/reed attack transient burst.
  - *Legato/Slur*: Smooth continuous air/bow transitions without repeated transient pops.
  - *Violin vs. Cello*: In overlapping pitch registers (e.g. C4), violin exhibits clear bridge-hill formant (~2.8 kHz) while cello exhibits deeper wood cavity weight (~1.35 kHz).

### [ ] Check 3: Percussion Multi-Zone & Hit Variation (Stage 7)
- **Test**: Render 10 consecutive hits at the same velocity on **congas**, **taiko**, **shaker**, and **cowbell**.
- **Expected Result**:
  - Hits possess organic micro-variations in timbre and pitch ($\pm 3.5\text{ cents}$) rather than machine-gun identical repetition.
  - Large drums exhibit secondary shell/body cavity depth under the head strike.

### [ ] Check 4: Room Acoustic Presets & Reverb Tail (Stage 1 & 2)
- **Test**: Switch master room between `studio`, `club`, `hall`, `arena`, `cathedral`, `plate`, `tape`, and `raw`.
- **Expected Result**:
  - `studio`: Tight, controlled acoustic space.
  - `hall` / `cathedral`: Long, diffuse reverberation tail with high-frequency absorption.
  - `raw`: Dry direct signal with negligible room reflection.

### [ ] Check 5: Mastering Limiter & Compressor Dynamic Staging (Stage 1)
- **Test**: Render a loud, dense multi-track arrangement (e.g. salsa, metal, flamenco).
- **Expected Result**:
  - Compressor provides cohesive glue without pumping or distortion.
  - True stereo master width retains imaging clarity.
  - Output never clips above $0\text{ dBFS}$.
