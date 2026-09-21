/// <reference lib="webworker" />

import { SoundBankLoader, SpessaSynthProcessor } from 'spessasynth_core';

interface RenderNote {
  time: number;
  dur: number;
  midi: number;
  pitchBend?: { offset: number; value: number }[];
  vel: number;
  channel: number;
}

interface RenderCC {
  time: number;
  channel: number;
  cc: number;
  value: number;
}

interface RenderProgram {
  time: number;
  channel: number;
  program: number;
  drum: boolean;
}

interface RenderPerformance {
  notes: RenderNote[];
  ccs: RenderCC[];
  programs: RenderProgram[];
  drumChannels: number[];
  duration: number;
  tail: number;
}

interface RenderRequest {
  type: 'render';
  sampleRate: number;
  performance: RenderPerformance;
  soundfont: ArrayBuffer;
}

function midi(value: number): number {
  return Math.max(0, Math.min(127, Math.round(value)));
}

function channel(value: number): number {
  return Math.max(0, Math.min(15, Math.round(value)));
}

function time(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

async function render(request: RenderRequest): Promise<void> {
  const perf = request.performance;
  const totalSeconds =
    Math.max(0, perf.duration) + Math.max(0.5, perf.tail || 0.5);
  const sampleCount = Math.max(
    128,
    Math.ceil(request.sampleRate * Math.max(1, totalSeconds)),
  );

  const synth = new SpessaSynthProcessor(request.sampleRate, {
    eventsEnabled: false,
    effectsEnabled: false,
    maxBufferSize: 128,
  });

  synth.soundBankManager.addSoundBank(
    SoundBankLoader.fromArrayBuffer(request.soundfont),
    'main',
    0,
  );

  await synth.processorInitialized;

  for (const ch of perf.drumChannels) {
    synth.midiChannels[channel(ch)]?.setDrums?.(true);
  }

  type Event = {
    time: number;
    priority: number;
    order: number;
    message: number[];
  };

  const events: Event[] = [];
  let order = 0;

  for (const p of perf.programs) {
    const ch = channel(p.channel);
    const t = time(p.time);

    synth.midiChannels[ch]?.setDrums?.(p.drum);

    events.push({
      time: t,
      priority: 10,
      order: order++,
      message: [0xC0 | ch, midi(p.program)],
    });
  }

  for (const c of perf.ccs) {
    const ch = channel(c.channel);
    events.push({
      time: time(c.time),
      priority: 20,
      order: order++,
      message: [0xB0 | ch, midi(c.cc), midi(c.value)],
    });
  }

  for (const n of perf.notes) {
    const ch = channel(n.channel);
    const note = midi(n.midi);
    const velocity = Math.max(1, midi(n.vel));
    const on = time(n.time);
    const off = on + Math.max(
      0.02,
      Number.isFinite(n.dur) ? n.dur : 0.02,
    );

    if (n.pitchBend?.length) {
      for (const point of n.pitchBend) {
        const bendTime = Math.max(on, on + Math.max(0, Number(point.offset) || 0));
        const value = Math.max(0, Math.min(16383, Math.round(point.value)));
        events.push({
          time: bendTime,
          priority: 35,
          order: order++,
          message: [0xE0 | ch, value & 0x7F, (value >> 7) & 0x7F],
        });
      }
      events.push({
        time: off,
        priority: 29,
        order: order++,
        message: [0xE0 | ch, 0, 64],
      });
    }

    events.push({
      time: off,
      priority: 30,
      order: order++,
      message: [0x80 | ch, note, 0],
    });

    events.push({
      time: on,
      priority: 40,
      order: order++,
      message: [0x90 | ch, note, velocity],
    });
  }

  events.sort((a, b) =>
    a.time - b.time ||
    a.priority - b.priority ||
    a.order - b.order,
  );

  for (const event of events) {
    synth.processMessage(
      new Uint8Array(event.message),
      0,
      { time: event.time },
    );
  }

  const left = new Float32Array(sampleCount);
  const right = new Float32Array(sampleCount);
  const BLOCK_SIZE = 128;
  let rendered = 0;
  let lastProgress = -1;

  while (rendered < sampleCount) {
    const count = Math.min(BLOCK_SIZE, sampleCount - rendered);

    synth.process(left, right, rendered, count);
    rendered += count;

    const progress = rendered / sampleCount;
    if (
      progress - lastProgress >= 0.01 ||
      rendered === sampleCount
    ) {
      lastProgress = progress;
      self.postMessage({
        type: 'progress',
        fraction: Math.min(0.99, progress),
      });

      await new Promise<void>(resolve => setTimeout(resolve, 0));
    }
  }

  let peak = 0;
  for (let i = 0; i < sampleCount; i++) {
    peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
  }

  if (!Number.isFinite(peak) || peak < 1e-7) {
    throw new Error(
      `Offline synth produced silence (PCM peak=${peak}).`,
    );
  }

  self.postMessage(
    {
      type: 'done',
      sampleRate: request.sampleRate,
      left: left.buffer,
      right: right.buffer,
      peak,
    },
    [left.buffer, right.buffer],
  );
}

self.onmessage = (event: MessageEvent<RenderRequest>) => {
  if (!event.data || event.data.type !== 'render') return;

  void render(event.data).catch(error => {
    self.postMessage({
      type: 'error',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  });
};
