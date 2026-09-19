export interface RoomPreset {
  id: string;
  name: string;
  description: string;
  highPass: number;
  lowShelf: number;
  presence: number;
  air: number;
  glue: number;
  warmth: number;
  width: number;
  space: number;
}

export const ROOMS: RoomPreset[] = [
  {
    id: 'club', name: 'Club',
    description: 'Tight and loud, with the bottom end pushed forward.',
    highPass: 32, lowShelf: 2.5, presence: 1.5, air: 1, glue: 0.7, warmth: 0.45, width: 0.5, space: 0.75,
  },
  {
    id: 'studio', name: 'Studio',
    description: 'Even and close. Nothing exaggerated; everything audible.',
    highPass: 28, lowShelf: 1, presence: 1.8, air: 2, glue: 0.45, warmth: 0.25, width: 0.55, space: 1.0,
  },
  {
    id: 'hall', name: 'Hall',
    description: 'Open and distant, with a long decay behind the band.',
    highPass: 34, lowShelf: 0, presence: 0.5, air: 2.5, glue: 0.3, warmth: 0.15, width: 0.85, space: 1.7,
  },
  {
    id: 'room', name: 'Live room',
    description: 'A band playing together in one space, mics a few feet back.',
    highPass: 36, lowShelf: 0.5, presence: 2, air: 1.5, glue: 0.55, warmth: 0.4, width: 0.65, space: 1.3,
  },
  {
    id: 'tape', name: 'Tape',
    description: 'Warm and slightly squashed, with the top rolled off.',
    highPass: 40, lowShelf: 2, presence: -0.5, air: -2, glue: 0.75, warmth: 0.85, width: 0.4, space: 1.1,
  },
  {
    id: 'raw', name: 'Raw',
    description: 'No processing at all. What the synth actually puts out.',
    highPass: 20, lowShelf: 0, presence: 0, air: 0, glue: 0, warmth: 0, width: 0, space: 1.0,
  },
];

export const ROOM_BY_WORLD: Record<string, string> = {
  tango: 'hall', flamenco: 'room', jazz: 'room', swing: 'hall', blues: 'room',
  salsa: 'club', timba: 'club', bachata: 'club', zouk: 'club', kizomba: 'club',
  rock: 'room', 'rock-en-espanol': 'room', metal: 'studio', 'math-rock': 'studio',
  funk: 'tape', 'hip-hop': 'club', electronic: 'club',
  country: 'room', folk: 'room', afrobeats: 'club',
  'j-pop': 'studio', jpop: 'studio', 'chinese-rock': 'studio', 'fusion-ambient': 'hall',
  'reggaeton-dembow': 'club', cumbia: 'club', trova: 'room', folclorico: 'room',
  'house-techno': 'club', 'reggae-dub': 'tape', ska: 'room', 'samba-bossa': 'room',
};


const CANONICAL_ROOM_SOURCES: Record<string, string> = {
  afrobeats:'afrobeats', bachata:'bachata', blues:'blues', brazilian:'samba-bossa', country:'country',
  cumbia:'cumbia', disco:'funk', electronic:'electronic', folk:'folk', funk:'funk', gospel:'folk',
  'hip-hop':'hip-hop', house:'house-techno', jazz:'jazz', kizomba:'kizomba', 'latin-pop':'reggaeton-dembow',
  tango:'tango', flamenco:'flamenco', metal:'metal', 'r-and-b':'funk', reggae:'reggae-dub', reggaeton:'reggaeton-dembow',
  rock:'rock', salsa:'salsa', ska:'ska', soul:'funk', swing:'swing', timba:'timba', zouk:'zouk',
  'drum-and-bass':'electronic', industrial:'metal', 'punk-hardcore':'rock', 'uk-bass':'house-techno',
};
for (const [genreId, sourceId] of Object.entries(CANONICAL_ROOM_SOURCES)) {
  if (!ROOM_BY_WORLD[genreId] && ROOM_BY_WORLD[sourceId]) ROOM_BY_WORLD[genreId] = ROOM_BY_WORLD[sourceId];
}

export function roomFor(worldId: string): RoomPreset {
  const id = ROOM_BY_WORLD[worldId] ?? 'studio';
  return ROOMS.find(r => r.id === id) ?? ROOMS[1];
}

/* --- Master chain --- */

export interface MasterChain {
  /** connect the synth here */
  input: GainNode;
  /** the end of the chain, already connected to the destination */
  output: GainNode;
  /** tap this to record — post-processing, so a bounce sounds like playback */
  tap: GainNode;
  setRoom(room: RoomPreset): void;
  setVolume(v: number): void;
  dispose(): void;
}

/** A gentle odd-harmonic transfer curve. Warmth, not distortion. */
function saturationCurve(drive: number): Float32Array {
  const n = 2048;
  const curve = new Float32Array(n);
  const k = 1 + drive * 6;
  for (let i = 0; i < n; i++) {
    const x = (i * 2) / (n - 1) - 1;
    // soft asymmetric clip; stays almost linear until it is pushed
    curve[i] = Math.tanh(k * x) / Math.tanh(k);
  }
  return curve;
}

export function createMasterChain(ctx: BaseAudioContext, room: RoomPreset): MasterChain {
  const input = ctx.createGain();
  input.gain.value = 1;

  /* clear the sub-rumble a soundfont bass can pile up */
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = room.highPass;
  hp.Q.value = 0.7;

  /* tilt EQ: weight at the bottom, presence in the upper mids, air on top */
  const low = ctx.createBiquadFilter();
  low.type = 'lowshelf';
  low.frequency.value = 120;
  low.gain.value = room.lowShelf;

  const mud = ctx.createBiquadFilter();
  mud.type = 'peaking';
  mud.frequency.value = 340;
  mud.Q.value = 1.1;
  mud.gain.value = -1.8; // the box-y region every GM soundfont piles up in

  const pres = ctx.createBiquadFilter();
  pres.type = 'peaking';
  pres.frequency.value = 3200;
  pres.Q.value = 0.8;
  pres.gain.value = room.presence;

  const air = ctx.createBiquadFilter();
  air.type = 'highshelf';
  air.frequency.value = 11000;
  air.gain.value = room.air;

  /* warmth */
  const preDrive = ctx.createGain();
  const shaper = ctx.createWaveShaper();
  shaper.curve = saturationCurve(room.warmth);
  shaper.oversample = '2x';
  const postDrive = ctx.createGain();
  preDrive.gain.value = 1 + room.warmth * 0.8;
  postDrive.gain.value = 1 / (1 + room.warmth * 0.8);

  const glue = ctx.createDynamicsCompressor();
  glue.threshold.value = -20 + (1 - room.glue) * 8;
  glue.knee.value = 26;
  glue.ratio.value = 1.6 + room.glue * 2.2;
  glue.attack.value = 0.02;
  glue.release.value = 0.22;

  const splitter = ctx.createChannelSplitter(2);
  const merger = ctx.createChannelMerger(2);
  const sideL = ctx.createGain();
  const sideR = ctx.createGain();
  const widthAmount = 1 + room.width * 0.55;
  sideL.gain.value = widthAmount;
  sideR.gain.value = widthAmount;

  const limiter = ctx.createDynamicsCompressor();
  limiter.threshold.value = -1.2;
  limiter.knee.value = 0;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.002;
  limiter.release.value = 0.08;

  const makeup = ctx.createGain();
  makeup.gain.value = 1 + room.glue * 0.35;

  const tap = ctx.createGain();
  tap.gain.value = 1;
  const output = ctx.createGain();
  output.gain.value = 0.85;

  /* wire it up */
  input.connect(hp);
  hp.connect(low);
  low.connect(mud);
  mud.connect(pres);
  pres.connect(air);
  air.connect(preDrive);
  preDrive.connect(shaper);
  shaper.connect(postDrive);
  postDrive.connect(glue);
  glue.connect(makeup);

  if (room.width > 0.01) {
    makeup.connect(splitter);
    splitter.connect(sideL, 0);
    splitter.connect(sideR, 1);
    sideL.connect(merger, 0, 0);
    sideR.connect(merger, 0, 1);
    merger.connect(limiter);
  } else {
    makeup.connect(limiter);
  }

  limiter.connect(tap);
  tap.connect(output);
  output.connect(ctx.destination);

  return {
    input, output, tap,
    setRoom(next: RoomPreset) {
      const t = ctx.currentTime;
      hp.frequency.setTargetAtTime(next.highPass, t, 0.05);
      low.gain.setTargetAtTime(next.lowShelf, t, 0.05);
      pres.gain.setTargetAtTime(next.presence, t, 0.05);
      air.gain.setTargetAtTime(next.air, t, 0.05);
      glue.threshold.setTargetAtTime(-20 + (1 - next.glue) * 8, t, 0.05);
      glue.ratio.setTargetAtTime(1.6 + next.glue * 2.2, t, 0.05);
      shaper.curve = saturationCurve(next.warmth);
      preDrive.gain.setTargetAtTime(1 + next.warmth * 0.8, t, 0.05);
      postDrive.gain.setTargetAtTime(1 / (1 + next.warmth * 0.8), t, 0.05);
      makeup.gain.setTargetAtTime(1 + next.glue * 0.35, t, 0.05);
      const w = 1 + next.width * 0.55;
      sideL.gain.setTargetAtTime(w, t, 0.05);
      sideR.gain.setTargetAtTime(w, t, 0.05);
    },
    setVolume(v: number) {
      output.gain.setTargetAtTime(Math.max(0, Math.min(1, v)), ctx.currentTime, 0.02);
    },
    dispose() {
      try {
        input.disconnect();
        hp.disconnect();
        low.disconnect();
        mud.disconnect();
        pres.disconnect();
        air.disconnect();
        preDrive.disconnect();
        shaper.disconnect();
        postDrive.disconnect();
        glue.disconnect();
        makeup.disconnect();
        splitter.disconnect();
        merger.disconnect();
        sideL.disconnect();
        sideR.disconnect();
        limiter.disconnect();
        tap.disconnect();
        output.disconnect();
      } catch { /* already gone */ }
    },
  };
}
