import type { Performance, PerfNote, PerfCC } from './perform';

const LOOKAHEAD_SEC = 0.35;
const TICK_MS = 25;

export interface TransportSink {
  now(): number;
  noteOn(channel: number, midi: number, vel: number, time: number): void;
  noteOff(channel: number, midi: number, time: number): void;
  pitchBend(channel: number, value: number, time: number): void;
  controlChange(channel: number, cc: number, value: number, time: number): void;
  programChange(channel: number, program: number, time: number): void;
  setDrumChannel(channel: number, isDrum: boolean): void;
  allNotesOff(): void;
}

export interface TransportCallbacks {
  /** called on every tick with the currently sounding position */
  onPosition?(seconds: number): void;
  /** called once when the playhead passes the end of the song */
  onEnd?(): void;
}

export class Transport {
  private perf: Performance | null = null;
  private sink: TransportSink;
  private cb: TransportCallbacks;

  private timer: number | null = null;
  /** ctx time corresponding to song position 0 */
  private origin = 0;
  /** song position where playback started, in seconds */
  private startOffset = 0;
  private noteCursor = 0;
  private ccCursor = 0;
  private running = false;
  private looping = true;
  private endFired = false;
  private channelsPrimed = new Set<number>();

  constructor(sink: TransportSink, cb: TransportCallbacks = {}) {
    this.sink = sink;
    this.cb = cb;
  }

  get isRunning() { return this.running; }

  setLooping(v: boolean) { this.looping = v; }

  /** Swap the compiled performance in without stopping — used after an edit. */
  setPerformance(perf: Performance) {
    const wasRunning = this.running;
    const pos = wasRunning ? this.position() : this.startOffset;
    this.perf = perf;
    this.channelsPrimed.clear();
    if (wasRunning) {
      this.sink.allNotesOff();
      // instruments or levels may have changed, so re-state the channel strips
      this.primeChannels();
      this.locate(pos);
    }
  }

  position(): number {
    if (!this.perf) return this.startOffset;
    if (!this.running) return this.startOffset;
    const raw = this.sink.now() - this.origin;
    const total = this.totalLength();
    if (total <= 0) return 0;
    return this.looping ? ((raw % total) + total) % total : Math.min(raw, total);
  }

  private totalLength(): number {
    if (!this.perf) return 0;
    return this.perf.duration;
  }

  start(fromSeconds?: number) {
    if (!this.perf) return;
    this.primeChannels();
    this.locate(fromSeconds ?? this.startOffset);
    this.running = true;
    this.endFired = false;
    if (this.timer === null) {
      this.timer = window.setInterval(() => this.tick(), TICK_MS);
    }
    this.tick();
  }

  stop() {
    this.running = false;
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    this.sink.allNotesOff();
  }

  /** Move the playhead. Safe while running. */
  locate(seconds: number) {
    const total = this.totalLength();
    const pos = total > 0 ? Math.max(0, Math.min(total - 0.001, seconds)) : 0;
    this.startOffset = pos;
    this.origin = this.sink.now() - pos;
    this.noteCursor = this.findCursor(pos);

    /* Automation is stateful: jumping into the middle of a song means every
       controller has to be caught up to whatever the last written value was,
       or a section would inherit the previous section's filter and reverb. */
    const ccs = this.perf?.ccs ?? [];
    let ci = 0;
    const latest = new Map<string, PerfCC>();
    while (ci < ccs.length && ccs[ci].time <= pos) {
      const c = ccs[ci];
      latest.set(`${c.channel}:${c.cc}`, c);
      ci++;
    }
    this.ccCursor = ci;
    const now = this.sink.now() + 0.005;
    for (const c of latest.values()) this.sink.controlChange(c.channel, c.cc, c.value, now);

    if (this.running) this.sink.allNotesOff();
  }

  private findCursor(pos: number): number {
    const notes = this.perf?.notes ?? [];
    let lo = 0, hi = notes.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (notes[mid].time < pos) lo = mid + 1; else hi = mid;
    }
    return lo;
  }

  /** Program changes, levels and pan. Sent once, not on every note. */
  private primeChannels() {
    if (!this.perf) return;
    const t = this.sink.now() + 0.01;
    for (const ch of this.perf.drumChannels) this.sink.setDrumChannel(ch, true);
    for (const p of this.perf.programs) {
      if (!p.drum) this.sink.setDrumChannel(p.channel, false);
      this.sink.programChange(p.channel, p.program, t);
      this.channelsPrimed.add(p.channel);
    }
    // only the song-start values here; everything later is scheduled like a note
    for (const c of this.perf.ccs) {
      if (c.time > 0.0001) continue;
      this.sink.controlChange(c.channel, c.cc, c.value, t);
    }
  }

  /** Push a single CC now — used by the live mixer. */
  sendCC(channel: number, cc: number, value: number) {
    this.sink.controlChange(channel, cc, Math.max(0, Math.min(127, Math.round(value))), this.sink.now() + 0.005);
  }

  private tick() {
    if (!this.running || !this.perf) return;
    const notes = this.perf.notes;
    const total = this.totalLength();
    if (total <= 0) return;

    const now = this.sink.now();
    const horizon = now + LOOKAHEAD_SEC;

    /* automation first, so a filter move is already in place when the notes
       of that section arrive */
    const ccs = this.perf.ccs;
    let ccGuard = 0;
    while (ccGuard++ < 2000) {
      if (this.ccCursor >= ccs.length) {
        break;
      }
      const c = ccs[this.ccCursor];
      const at = this.origin + c.time;
      if (at > horizon) break;
      this.sink.controlChange(c.channel, c.cc, c.value, Math.max(now, at));
      this.ccCursor++;
    }

    // schedule everything whose absolute clock time falls in the window
    let guard = 0;
    while (guard++ < 4000) {
      if (this.noteCursor >= notes.length) {
        if (this.looping) {
          // roll the origin forward by one full song and start again
          this.origin += total;
          this.noteCursor = 0;
          this.ccCursor = 0;
          continue;
        }
        if (!this.endFired && now - this.origin >= total) {
          this.endFired = true;
          this.cb.onEnd?.();
        }
        break;
      }
      const n = notes[this.noteCursor];
      const at = this.origin + n.time;
      if (at > horizon) break;
      this.fire(n, at);
      this.noteCursor++;
    }

    this.cb.onPosition?.(this.position());
  }

  private fire(n: PerfNote, at: number) {
    const midi = Math.max(0, Math.min(127, Math.round(n.midi)));
    const vel = Math.max(1, Math.min(127, Math.round(n.vel)));
    const now = this.sink.now();
    const targetOn = Math.max(now, at);
    const targetOff = Math.max(targetOn + 0.02, at + Math.max(0.02, n.dur));
    // Pitch bend is channel-wide, so schedule the trajectory immediately before
    // the note and always restore center at note-off.
    if (n.pitchBend?.length) {
      for (const point of n.pitchBend) {
        const bendAt = Math.max(targetOn, at + Math.max(0, point.offset));
        this.sink.pitchBend(n.channel, point.value, bendAt);
      }
    }
    this.sink.noteOn(n.channel, midi, vel, targetOn);
    this.sink.noteOff(n.channel, midi, targetOff);
    if (n.pitchBend?.length) this.sink.pitchBend(n.channel, 8192, targetOff);
  }
}
