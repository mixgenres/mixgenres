import { WorkletSynthesizer } from "spessasynth_lib";
import { INSTRUMENTS_BY_ID } from '../data/instruments';
import { Mp3Encoder } from '@breezystack/lamejs';
import { createMasterChain, MasterChain, RoomPreset, roomFor, ROOMS } from './mixer';
import { previewCulturalRules, culturalPitchSet, shoCluster, celticOpenHarmony } from './cultural';
import type { Performance } from './perform';

let ctx: AudioContext | null = null;
let synth: WorkletSynthesizer | null = null;
let masterGain: GainNode | null = null;
let chain: MasterChain | null = null;
let currentRoom: RoomPreset = ROOMS[1];
let initPromise: Promise<WorkletSynthesizer> | null = null;

export let isRenderingMp3 = false;

/* ---------------------------------------------------------------------------
   SoundFont: one raw .sf2 file, fetched by the browser from public/soundfont.sf2.
   No size limit, no Cache Storage, no per-device variants. The bytes are kept
   in memory for the session only, so the live synth and the MP3 export worker
   share one download.
--------------------------------------------------------------------------- */
export const SOUNDFONT_FILE = 'soundfont.sf2';

/* ---------------------------------------------------------------------------
   A second, dedicated SoundFont for instruments that don't live in the main
   GM bank. Today that's just Spanish Guitar (public/spanish_guitar.sf2),
   loaded into soundBankManager at bank offset 1 — see InstrumentDef.bank and
   src/data/soundfonts.ts. Unlike the main SoundFont, this one is optional:
   if it's missing, instruments that ask for it just don't sound rather than
   the whole synth failing to start.
--------------------------------------------------------------------------- */
export const SPANISH_GUITAR_SOUNDFONT_FILE = 'spanish_guitar.sf2';
export const SPANISH_GUITAR_BANK_OFFSET = 1;

let soundfontPromise: Promise<ArrayBuffer> | null = null;
let spanishGuitarSoundfontPromise: Promise<ArrayBuffer | null> | null = null;

export function getAppBaseUrl(): string {
  const viteBase = import.meta.env.BASE_URL || './';
  const docBase = (typeof document !== 'undefined' && document.baseURI)
    ? document.baseURI
    : (typeof window !== 'undefined' ? window.location.href : 'http://localhost/');

  let base = docBase;
  try {
    const urlObj = new URL(base);
    if (!urlObj.pathname.endsWith('/') && !urlObj.pathname.split('/').pop()?.includes('.')) {
      urlObj.pathname += '/';
      base = urlObj.href;
    }
  } catch {}

  let resolved = new URL(viteBase, base).href;
  if (!resolved.endsWith('/')) resolved += '/';
  return resolved;
}

export function preloadSoundfont(): Promise<ArrayBuffer> {
  if (soundfontPromise) return soundfontPromise;
  const url = new URL(SOUNDFONT_FILE, getAppBaseUrl()).href;
  const promise = (async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not load ${url} (HTTP ${res.status}). Put your SoundFont at public/${SOUNDFONT_FILE}.`);
    }
    const buf = await res.arrayBuffer();
    // A missing file on GitHub Pages returns an HTML 404 page, and a Git LFS
    // pointer is a tiny text file. Fail loudly instead of feeding either to the synth.
    const magic = new TextDecoder('latin1').decode(new Uint8Array(buf, 0, Math.min(12, buf.byteLength)));
    if (magic.slice(0, 4) !== 'RIFF' || magic.slice(8, 12) !== 'sfbk') {
      throw new Error(`${url} is not a SoundFont 2 (.sf2) file (${buf.byteLength} bytes).`);
    }
    return buf;
  })();
  soundfontPromise = promise;
  promise.catch(() => { if (soundfontPromise === promise) soundfontPromise = null; }); // allow retry
  return promise;
}

/** Optional second SoundFont. Resolves to null (and warns) instead of
 *  throwing, so a missing/broken file degrades the Spanish Guitar instrument
 *  rather than breaking audio entirely. */
export function preloadSpanishGuitarSoundfont(): Promise<ArrayBuffer | null> {
  if (spanishGuitarSoundfontPromise) return spanishGuitarSoundfontPromise;
  const url = new URL(SPANISH_GUITAR_SOUNDFONT_FILE, getAppBaseUrl()).href;
  const promise = (async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`Spanish Guitar SoundFont not found at ${url} (HTTP ${res.status}). The Spanish Guitar instrument will be silent.`);
        return null;
      }
      const buf = await res.arrayBuffer();
      const magic = new TextDecoder('latin1').decode(new Uint8Array(buf, 0, Math.min(12, buf.byteLength)));
      if (magic.slice(0, 4) !== 'RIFF' || magic.slice(8, 12) !== 'sfbk') {
        console.warn(`${url} is not a SoundFont 2 (.sf2) file (${buf.byteLength} bytes). The Spanish Guitar instrument will be silent.`);
        return null;
      }
      return buf;
    } catch (err) {
      console.warn('Could not load the Spanish Guitar SoundFont:', err);
      return null;
    }
  })();
  spanishGuitarSoundfontPromise = promise;
  promise.catch(() => { if (spanishGuitarSoundfontPromise === promise) spanishGuitarSoundfontPromise = null; }); // allow retry
  return promise;
}

/** Add the spessasynth worklet processor to any BaseAudioContext (live or offline). */
async function addSpessaWorklet(target: BaseAudioContext): Promise<void> {
  const appBase = getAppBaseUrl();
  const urls = [
    new URL('spessasynth_processor.min.js', appBase).href,
    new URL('public/spessasynth_processor.min.js', appBase).href,
  ];
  let lastErr: any = null;
  for (const u of urls) {
    try {
      await target.audioWorklet.addModule(u);
      return;
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

export async function ensureSynth(): Promise<WorkletSynthesizer> {
  if (synth) return synth;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      if (!ctx) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        ctx = new AudioCtx();
      }
      if (ctx.state === 'suspended') {
        try {
          await ctx.resume();
        } catch {
          // Will resume on explicit startAudio user action
        }
      }

      const sf2 = await preloadSoundfont();
      await addSpessaWorklet(ctx);
      const s = new WorkletSynthesizer(ctx);

      /* The synth runs through a master chain — high-pass, tilt EQ, warmth,
         glue compression, stereo width and a limiter. */
      if (chain) {
        try { chain.dispose(); } catch {}
      }
      chain = createMasterChain(ctx, currentRoom);
      masterGain = chain.input;
      masterGain.gain.value = 1;
      s.connect(masterGain);

      await s.soundBankManager.addSoundBank(sf2.slice(0), 'main', 0);

      const guitarSf2 = await preloadSpanishGuitarSoundfont();
      if (guitarSf2) {
        try {
          await s.soundBankManager.addSoundBank(guitarSf2.slice(0), 'spanish-guitar', SPANISH_GUITAR_BANK_OFFSET);
        } catch (err) {
          console.warn('Failed to add the Spanish Guitar SoundFont bank:', err);
        }
      }

      await (s as any).isReady;
      synth = s;
      return s;
    } catch (err) {
      console.error('Synthesizer initialization error:', err);
      initPromise = null; // allow retry
      throw err;
    }
  })();

  return initPromise;
}

export async function startAudio(): Promise<AudioContext | null> {
  try {
    if (!ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      ctx = new AudioCtx();
    }
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
    await ensureSynth();
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }
    return ctx;
  } catch (err) {
    console.error('Failed to start audio engine:', err);
    initPromise = null;
    throw err;
  }
}

export function stopAudio() {
  if (synth) {
    try {
      (synth as any).stopAll?.(true);
    } catch {}
    for (let ch = 0; ch < 16; ch++) {
      synth.controllerChange(ch, 123, 0);
      synth.controllerChange(ch, 120, 0);
    }
  }
}

function floatChannelToInt16(input: Float32Array): Int16Array {
  const out = new Int16Array(input.length);
  for (let i = 0; i < input.length; i++) {
    out[i] = Math.max(-32768, Math.min(32767, Math.round(input[i] * 32768)));
  }
  return out;
}

interface WorkerRenderResult {
  left: ArrayBuffer;
  right: ArrayBuffer;
  sampleRate: number;
  peak: number;
}

interface WorkerRenderMessage {
  type: 'progress' | 'done' | 'error';
  fraction?: number;
  left?: ArrayBuffer;
  right?: ArrayBuffer;
  sampleRate?: number;
  peak?: number;
  message?: string;
  stack?: string;
}

function renderWithWorker(
  perf: Performance,
  sampleRate: number,
  onProgress?: (frac: number) => void,
): Promise<WorkerRenderResult> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(
      new URL('./mp3-render.worker.ts', import.meta.url),
      { type: 'module' },
    );

    let settled = false;

    const cleanup = () => {
      worker.onmessage = null;
      worker.onerror = null;
      worker.terminate();
    };

    const fail = (error: Error) => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(error);
    };

    worker.onerror = event => {
      fail(new Error(event.message || 'MP3 synthesis worker failed.'));
    };

    worker.onmessage = (event: MessageEvent<WorkerRenderMessage>) => {
      const message = event.data;

      if (message.type === 'progress') {
        onProgress?.(Math.min(0.85, (message.fraction ?? 0) * 0.85));
        return;
      }

      if (message.type === 'error') {
        const error = new Error(message.message || 'Offline synthesis failed.');
        if (message.stack) error.stack = message.stack;
        fail(error);
        return;
      }

      if (
        message.type === 'done' &&
        message.left &&
        message.right &&
        message.sampleRate &&
        message.peak !== undefined
      ) {
        if (settled) return;
        settled = true;
        cleanup();
        resolve({
          left: message.left,
          right: message.right,
          sampleRate: message.sampleRate,
          peak: message.peak,
        });
      }
    };

    Promise.all([preloadSoundfont(), preloadSpanishGuitarSoundfont()])
      .then(([buf, guitarBuf]) => {
        if (settled) return;

        const soundfont = buf.slice(0);
        const guitarSoundfont = guitarBuf ? guitarBuf.slice(0) : undefined;
        const transfer = guitarSoundfont ? [soundfont, guitarSoundfont] : [soundfont];

        worker.postMessage(
          {
            type: 'render',
            sampleRate,
            performance: {
              notes: perf.notes,
              ccs: perf.ccs,
              programs: perf.programs,
              drumChannels: perf.drumChannels,
              duration: perf.duration,
              tail: perf.tail,
            },
            soundfont,
            guitarSoundfont,
          },
          transfer,
        );
      })
      .catch(error => {
        fail(error instanceof Error ? error : new Error(String(error)));
      });
  });
}

function validateRenderedPcm(buffer: AudioBuffer): number {
  let peak = 0;

  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < data.length; i++) {
      const value = Math.abs(data[i]);
      if (Number.isFinite(value) && value > peak) peak = value;
    }
  }

  if (!Number.isFinite(peak) || peak < 1e-7) {
    throw new Error(`Master render produced silence (PCM peak=${peak}).`);
  }

  return peak;
}

export interface Mp3RenderOptions {
  selectedTrackIds?: ReadonlySet<string> | string[] | Set<string>;
}

/**
 * Filters a compiled Performance to include only events/programs/CCs from
 * the selected tracks.
 */
export function filterPerformanceForExport(
  perf: Performance,
  selectedTrackIds?: ReadonlySet<string> | string[] | Set<string>,
): Performance {
  if (selectedTrackIds === undefined) {
    return perf;
  }

  const selectedTrackIdsSet = new Set(selectedTrackIds);

  // Translate selected track IDs into MIDI channels using perf.channelOf
  const selectedChannels = new Set<number>();
  for (const trackId of selectedTrackIdsSet) {
    if (perf.channelOf && perf.channelOf[trackId] !== undefined) {
      selectedChannels.add(perf.channelOf[trackId]);
    }
  }

  // Filter notes
  const filteredNotes = perf.notes.filter(n => n.trackId && selectedTrackIdsSet.has(n.trackId));

  // Filter CCs (only schedule CC events for selected channels)
  const filteredCcs = perf.ccs.filter(cc => selectedChannels.has(cc.channel));

  // Filter programs (only schedule programs for selected channels)
  const filteredPrograms = perf.programs.filter(p => selectedChannels.has(p.channel));

  // Filter drumChannels
  const filteredDrumChannels = perf.drumChannels.filter(ch => selectedChannels.has(ch));

  return {
    ...perf,
    notes: filteredNotes,
    ccs: filteredCcs,
    programs: filteredPrograms,
    drumChannels: filteredDrumChannels,
  };
}

/**
 * Renders a whole song directly from its compiled event list to an MP3 Blob.
 *
 * Export deliberately avoids WorkletSynthesizer + OfflineAudioContext.
 * Chromium can fail to deliver AudioWorklet messages while an
 * OfflineAudioContext is rendering. The synth therefore renders deterministic
 * PCM in a Worker, and only the existing master chain runs in OfflineAudioContext.
 */
export async function renderSongToMp3(
  perf: Performance,
  optionsOrProgress?: Mp3RenderOptions | ((frac: number) => void),
  onProgress?: (frac: number) => void,
): Promise<Blob> {
  if (isRenderingMp3) throw new Error('A render is already in progress.');
  isRenderingMp3 = true;

  let options: Mp3RenderOptions | undefined;
  let progressFn = onProgress;

  if (typeof optionsOrProgress === 'function') {
    progressFn = optionsOrProgress;
  } else {
    options = optionsOrProgress;
  }

  let offlineChain: MasterChain | null = null;
  let progressTimer: number | null = null;

  try {
    const sampleRate = ctx?.sampleRate ?? 44100;
    const filteredPerf = filterPerformanceForExport(perf, options?.selectedTrackIds);
    const tailSeconds = Math.max(1, filteredPerf.tail || 1);
    const totalSeconds = Math.max(1, filteredPerf.duration + tailSeconds);

    if (filteredPerf.notes.length === 0) {
      console.info('[MP3] Empty track selection, rendering silence of duration', totalSeconds);
      const silentLength = Math.ceil(totalSeconds * sampleRate);
      const encoder = new Mp3Encoder(2, sampleRate, 128);
      const BLOCK = 1152;
      const chunks: Int8Array[] = [];

      for (let i = 0; i < silentLength; i += BLOCK) {
        const l16 = new Int16Array(Math.min(BLOCK, silentLength - i));
        const r16 = new Int16Array(Math.min(BLOCK, silentLength - i));
        const buf = encoder.encodeBuffer(l16, r16);
        if (buf.length > 0) chunks.push(new Int8Array(buf));
        progressFn?.(0.1 + 0.8 * Math.min(1, (i + BLOCK) / silentLength));
      }
      const tailBuf = encoder.flush();
      if (tailBuf.length > 0) chunks.push(new Int8Array(tailBuf));
      const blob = new Blob(chunks, { type: 'audio/mpeg' });
      progressFn?.(1);
      return blob;
    }

    const raw = await renderWithWorker(filteredPerf, sampleRate, progressFn);

    const rawLeft = new Float32Array(raw.left);
    const rawRight = new Float32Array(raw.right);
    const length = Math.max(rawLeft.length, 1);

    const offlineCtx = new OfflineAudioContext({
      numberOfChannels: 2,
      sampleRate: raw.sampleRate,
      length,
    });

    const source = offlineCtx.createBufferSource();
    const sourceBuffer = offlineCtx.createBuffer(2, length, raw.sampleRate);
    sourceBuffer.copyToChannel(rawLeft, 0);
    sourceBuffer.copyToChannel(rawRight, 1);
    source.buffer = sourceBuffer;

    offlineChain = createMasterChain(offlineCtx, currentRoom);
    source.connect(offlineChain.input);
    source.start(0);

    onProgress?.(0.86);

    const rendered = await offlineCtx.startRendering();
    onProgress?.(0.92);

    const masterPeak = validateRenderedPcm(rendered);

    console.info(
      `[MP3] PCM validated: synth peak=${raw.peak.toFixed(6)}, ` +
      `master peak=${masterPeak.toFixed(6)}, duration=${totalSeconds.toFixed(3)}s`,
    );

    const encoder = new Mp3Encoder(2, raw.sampleRate, 128);
    const left = rendered.getChannelData(0);
    const right = rendered.numberOfChannels > 1
      ? rendered.getChannelData(1)
      : left;
    const BLOCK = 1152;
    const chunks: Int8Array[] = [];

    for (let i = 0; i < left.length; i += BLOCK) {
      const l16 = floatChannelToInt16(left.subarray(i, i + BLOCK));
      const r16 = floatChannelToInt16(right.subarray(i, i + BLOCK));
      const buf = encoder.encodeBuffer(l16, r16);
      if (buf.length > 0) chunks.push(new Int8Array(buf));

      onProgress?.(
        0.92 + 0.07 * Math.min(1, (i + BLOCK) / left.length),
      );
    }

    const tailBuf = encoder.flush();
    if (tailBuf.length > 0) chunks.push(new Int8Array(tailBuf));

    const blob = new Blob(chunks, { type: 'audio/mpeg' });

    if (blob.size < 1024) {
      throw new Error(
        `MP3 encoder returned an unexpectedly small file (${blob.size} bytes).`,
      );
    }

    onProgress?.(1);
    return blob;
  } finally {
    if (progressTimer !== null) window.clearInterval(progressTimer);
    offlineChain?.dispose();
    isRenderingMp3 = false;
  }
}

export function setMasterVolume(value: number) {
  chain?.setVolume(value);
  if (!synth) return;
  const v14 = Math.floor(Math.max(0, Math.min(1, value)) * 16383);
  synth.systemExclusive(new Uint8Array([0x7F, 0x7F, 0x04, 0x01, v14 & 0x7F, (v14 >> 7) & 0x7F, 0xF7]));
}

/* --- harmony -------------------------------------------------------------- */
import { parseChord, noteName as theoryNoteName, midiOf } from './theory';
import { voiceProfile, foldToRange } from './instrumentProfile';
import type { TransportSink } from './transport';

const NOTE: Record<string, number> = {
  C: 48, 'C#': 49, Db: 49, D: 50, 'D#': 51, Eb: 51, E: 52, F: 53,
  'F#': 54, Gb: 54, G: 55, 'G#': 56, Ab: 56, A: 57, 'A#': 58, Bb: 58, B: 59,
};

export function chordRootMidi(chord: string) {
  const m = chord.match(/^([A-G](?:#|b)?)/);
  return m ? (NOTE[m[1]] ?? 57) : 57;
}

export function midiToNoteName(midi: number): string {
  return theoryNoteName(midi);
}

/** What a voice will actually play on this chord — used by the inspector UI. */
export function getVoiceFeedSummary(instrumentId: string, chord: string) {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) return null;
  if (def.kit || def.drum) {
    return {
      instrumentName: def.name,
      source: def.kit ? 'Drum Kit (MIDI Ch 10)' : `Percussion (${def.drum?.high ?? 0}/${def.drum?.mid ?? 0}/${def.drum?.low ?? 0})`,
      voicing: 'rhythm / unpitched',
      notes: def.kit ? ['Kick', 'Snare', 'Hat'] : ['Perc'],
    };
  }
  const parsed = parseChord(chord);
  const prof = voiceProfile(instrumentId);
  const culture = previewCulturalRules(instrumentId);
  if (culture) {
    const pcs = culturalPitchSet(culture, parsed.rootPc);
    const midis = culture.sourceModel === 'modal-drone' && def.voicing === 'chord'
      ? celticOpenHarmony(parsed.rootPc, prof, 0.84, 17)
      : instrumentId === 'shō'
        ? shoCluster(parsed.rootPc, prof, 0.84)
        : [foldToRange(midiOf(pcs[0], 4), prof)];
    return {
      instrumentName: def.name,
      source: `Cultural ${culture.harmonyModel} model; GM patch #${def.program ?? 0} is a timbral approximation`,
      voicing: culture.sourceModel === 'modal-drone' && def.voicing === 'chord' ? 'modal open-fifth harmony' : culture.harmonyModel,
      notes: midis.map(m => theoryNoteName(m)),
    };
  }
  let midis: number[];
  if (prof.role === 'bass') {
    midis = [foldToRange(midiOf(parsed.bassPc, 2), prof)];
  } else if (def.voicing === 'single') {
    midis = [foldToRange(midiOf(parsed.rootPc, 4), prof)];
  } else {
    midis = parsed.intervals
      .map(iv => foldToRange(midiOf((parsed.rootPc + iv) % 12, 3) + Math.floor(iv / 12) * 12, prof))
      .sort((a, b) => a - b);
  }
  return {
    instrumentName: def.name,
    source: `Patch #${def.program ?? 0}`,
    voicing: def.voicing,
    notes: midis.map(m => theoryNoteName(m)),
  };
}

/**
 * Transport sink providing scheduled audio context events.
 */
export function createSink(): TransportSink {
  return {
    now: () => (ctx ? ctx.currentTime : 0),
    noteOn(channel, midi, vel, time) {
      synth?.noteOn(channel, midi, vel, { time });
    },
    noteOff(channel, midi, time) {
      synth?.noteOff(channel, midi, { time });
    },
    pitchBend(channel, value, time) {
      const v = Math.max(0, Math.min(16383, Math.round(value)));
      const lsb = v & 0x7f;
      const msb = (v >> 7) & 0x7f;
      const target = (synth as any);
      if (typeof target?.processMessage === 'function') {
        target.processMessage(new Uint8Array([0xE0 | (channel & 0x0f), lsb, msb]), 0, { time });
      } else {
        // Older synth builds may expose no raw MIDI path; ignore gracefully.
      }
    },
    controlChange(channel, cc, value, time) {
      synth?.controllerChange(channel, cc as any, Math.max(0, Math.min(127, Math.round(value))), { time });
    },
    programChange(channel, program, time, bank) {
      if (bank) synth?.controllerChange(channel, 0 as any, Math.max(0, Math.min(127, Math.round(bank))), { time });
      synth?.programChange(channel, program, { time });
    },
    setDrumChannel(channel, isDrum) {
      try {
        const chans = (synth as any)?.midiChannels;
        if (chans && chans[channel] && typeof chans[channel].setDrums === 'function') {
          chans[channel].setDrums(isDrum);
        }
      } catch {
        /* older synth builds only support the fixed channel 10 kit */
      }
    },
    allNotesOff() {
      if (!synth) return;
      try {
        (synth as any).stopAll?.(true);
      } catch {}
      for (let ch = 0; ch < 16; ch++) {
        synth.controllerChange(ch, 123 as any, 0);
        synth.controllerChange(ch, 120 as any, 0);
      }
    },
  };
}

export function getAudioContext(): AudioContext | null {
  return ctx;
}

export function getMasterGain(): GainNode | null {
  return masterGain;
}

/** Move the whole mix into a different space. Safe while playing. */
export function setRoom(worldIdOrRoom: string | RoomPreset) {
  const next = typeof worldIdOrRoom === 'string'
    ? (ROOMS.find(r => r.id === worldIdOrRoom) ?? roomFor(worldIdOrRoom))
    : worldIdOrRoom;
  currentRoom = next;
  chain?.setRoom(next);
}

export function getRoom(): RoomPreset {
  return currentRoom;
}
