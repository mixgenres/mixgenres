// Renders one representative instrument per synthesis model at a fixed
// reference note/velocity/duration and measures RMS, so that a per-model
// makeup-gain table can be derived mechanically instead of guessed.
//
// Usage: npx tsx scripts/gain-calibration.ts
import OfflineRenderer from '@elemaudio/offline-renderer';
import { getLuthierModelForInstrument } from '../src/engine/LuthierAPI';
import {
  defaultTrackParams,
  modelForInstrument,
  renderTrack,
  type VoiceState,
} from '../src/engine/elementary/elementaryEngine';

const REFERENCE_VELOCITY = 100 / 127;
const REFERENCE_NOTE = 60; // middle C; representative instruments are folded into range by the engine anyway
const SAMPLE_RATE = 44100;
const NOTE_ON_S = 1.2;
const TAIL_S = 1.0;
const TOTAL_S = NOTE_ON_S + TAIL_S;

// One representative instrument per model number produced by modelForInstrument().
const REPRESENTATIVES: Record<number, string> = {
  0: 'guitar',
  2: 'electric-guitar',
  3: 'bass',
  4: 'congas',
  6: 'violin',
  7: 'flute',
  8: 'marimba',
  9: 'synth',
  10: 'accordion',
  11: 'piano',
  12: 'voice',
  13: 'organ',
  14: 'rhodes',
  15: 'trumpet',
  16: 'tenor-sax',
  17: 'shaker',
  18: 'cowbell',
};

function rms(buf: Float32Array): number {
  let sum = 0;
  for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
  return Math.sqrt(sum / buf.length);
}

function dbfs(v: number): number {
  return v <= 1e-9 ? -120 : 20 * Math.log10(v);
}

async function renderSolo(instrumentId: string, opts: { forceRawVolume?: boolean } = {}): Promise<{ model: number; rmsLevel: number }> {
  const luthier = getLuthierModelForInstrument(instrumentId);
  const model = modelForInstrument(instrumentId, luthier);
  const params = defaultTrackParams(instrumentId, luthier, model);
  if (opts.forceRawVolume) {
    // Force a stable reference volume; we are measuring the *synthesis*
    // output before any makeup gain, so calibration numbers are comparable
    // even after GAIN_BY_MODEL has been applied to defaultTrackParams.
    params.volume = 0.8;
  }

  const voice: VoiceState = {
    id: `${instrumentId}_solo`,
    note: REFERENCE_NOTE,
    velocity: REFERENCE_VELOCITY,
    gate: 1,
    actionType: 'pluck',
  };
  const voices: VoiceState[] = [voice];

  const core = new (OfflineRenderer as any)();
  await core.initialize({ numInputChannels: 0, numOutputChannels: 2 });

  const totalSamples = Math.ceil(TOTAL_S * SAMPLE_RATE);
  const noteOffSample = Math.round(NOTE_ON_S * SAMPLE_RATE);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);

  const sync = async () => {
    const sig = renderTrack(`${instrumentId}_solo`, voices, params);
    await core.render(sig.left, sig.right);
  };
  await sync();

  const BLOCK = 512;
  const outBlock = [new Float32Array(BLOCK), new Float32Array(BLOCK)];
  let cursor = 0;
  let gated = false;
  while (cursor < totalSamples) {
    if (!gated && cursor >= noteOffSample) {
      voice.gate = 0;
      gated = true;
      await sync();
    }
    const frames = Math.min(BLOCK, totalSamples - cursor);
    core.process([], outBlock);
    for (let i = 0; i < frames; i++) {
      left[cursor + i] = outBlock[0][i] || 0;
      right[cursor + i] = outBlock[1][i] || 0;
    }
    cursor += frames;
  }

  // Measure across the whole gated note (onset through note-off), not just a
  // late "sustain" window. A struck/plucked instrument (marimba, congas,
  // guitar) puts most of its perceived loudness in the attack and decay, not
  // in a late steady-state that a bowed/blown/electric instrument has and a
  // struck one doesn't -- a late-window-only measurement would unfairly read
  // percussive/plucked models as far quieter than they sound in a real mix.
  const winStart = 0;
  const winEnd = noteOffSample;
  const l = left.subarray(winStart, winEnd);
  const r = right.subarray(winStart, winEnd);
  const level = (rms(l) + rms(r)) / 2;
  let peak = 0;
  for (let i = 0; i < l.length; i++) peak = Math.max(peak, Math.abs(l[i]), Math.abs(r[i]));
  if (process.argv.includes('--peaks')) console.log(`  ${instrumentId}: rms=${level.toFixed(5)} peak=${peak.toFixed(5)}`);
  return { model, rmsLevel: level };
}

async function main() {
  const verify = process.argv.includes('--verify');
  const results: { id: string; model: number; rmsLevel: number; db: number }[] = [];
  for (const [modelStr, id] of Object.entries(REPRESENTATIVES)) {
    const { model, rmsLevel } = await renderSolo(id, { forceRawVolume: !verify });
    results.push({ id, model: Number(modelStr), rmsLevel, db: dbfs(rmsLevel) });
  }

  results.sort((a, b) => b.rmsLevel - a.rmsLevel);
  console.log(verify ? '\n(post-calibration, using defaultTrackParams as-is)' : '\n(raw synthesis output, volume forced to 0.8)');
  console.log('model  instrument        rms       dBFS');
  for (const r of results) {
    console.log(
      `${String(r.model).padEnd(6)} ${r.id.padEnd(17)} ${r.rmsLevel.toFixed(5)}   ${r.db.toFixed(1)}`,
    );
  }
  const spread = Math.max(...results.map(r => r.db)) - Math.min(...results.map(r => r.db));
  console.log(`\nspread: ${spread.toFixed(1)} dB`);
  if (verify) return;

  // Target: bring every model to the same reference RMS (the median of the
  // measured set is a reasonable target -- it minimises how far any single
  // model has to be pushed).
  const sortedByLevel = [...results].sort((a, b) => a.rmsLevel - b.rmsLevel);
  const target = sortedByLevel[Math.floor(sortedByLevel.length / 2)].rmsLevel;
  console.log(`\ntarget RMS: ${target.toFixed(5)} (${dbfs(target).toFixed(1)} dBFS)\n`);
  console.log('// Paste into GAIN_BY_MODEL in elementaryEngine.ts:');
  console.log('export const GAIN_BY_MODEL: Record<number, number> = {');
  for (const r of [...results].sort((a, b) => a.model - b.model)) {
    const mult = Math.max(0.15, Math.min(30, target / Math.max(1e-6, r.rmsLevel)));
    console.log(`  ${r.model}: ${mult.toFixed(3)}, // ${r.id}`);
  }
  console.log('};');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

// quick peak check helper (ad hoc)
