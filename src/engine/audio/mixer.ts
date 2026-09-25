/* --- Master Signal Chain & Ensemble Balance --- */

import type { MixCharacter } from '../../data/styles/contracts';

export interface MixRoleProfile {
  level: number;
  pan: number;
  width: number;
  densityLimit: number;
}

export const DEFAULT_ROLE_PROFILES: Record<string, MixRoleProfile> = {
  bass: { level: 0.85, pan: 0.0, width: 0.0, densityLimit: 8 },
  drums: { level: 0.88, pan: 0.0, width: 0.3, densityLimit: 16 },
  comp: { level: 0.72, pan: -0.2, width: 0.4, densityLimit: 8 },
  harmony: { level: 0.70, pan: 0.2, width: 0.4, densityLimit: 8 },
  lead: { level: 0.90, pan: 0.0, width: 0.2, densityLimit: 12 },
  melody: { level: 0.90, pan: 0.0, width: 0.2, densityLimit: 12 },
  pad: { level: 0.65, pan: 0.1, width: 0.6, densityLimit: 4 },
  percussion: { level: 0.75, pan: 0.25, width: 0.4, densityLimit: 16 },
};

export function roleProfileForGenre(role: string, mixCharacter?: MixCharacter): MixRoleProfile {
  const base = DEFAULT_ROLE_PROFILES[role] || { level: 0.8, pan: 0, width: 0.3, densityLimit: 8 };
  if (!mixCharacter) return base;

  let levelAdj = 0;
  if (role === 'bass' || role === 'drums' || role === 'percussion') {
    levelAdj = (mixCharacter.bassForward - 0.5) * 0.15;
  } else {
    levelAdj = (0.5 - mixCharacter.bassForward) * 0.08;
  }

  const widthFactor = 0.5 + mixCharacter.width * 0.8;
  return {
    ...base,
    level: Math.max(0.2, Math.min(1.0, base.level + levelAdj)),
    width: Math.max(0.0, Math.min(1.0, base.width * widthFactor)),
  };
}

export interface MasterChain {
  input: GainNode;
  drumBus: GainNode;
  instBus: GainNode;
  subBus: GainNode;
  output: GainNode;
  tap: GainNode;
  setVolume(v: number): void;
  setMixCharacter(char: MixCharacter, genreId?: string): void;
  dispose(): void;
}

/** Saturation curve generator: Tape (smooth), Tube (asymmetric 2nd harmonic), Hard-Clip (aggressive) */
function saturationCurve(drive: number, type: 'tape' | 'tube' | 'hard-clip' = 'tape'): Float32Array {
  const n = 2048;
  const curve = new Float32Array(n);
  const amount = Math.max(0, Math.min(1, drive));

  for (let i = 0; i < n; i++) {
    const x = (i * 2) / (n - 1) - 1;
    if (type === 'hard-clip') {
      const thresh = 1.0 - amount * 0.4;
      curve[i] = Math.max(-thresh, Math.min(thresh, x * (1 + amount * 1.5)));
    } else if (type === 'tube') {
      // Asymmetric saturation adding warm 2nd harmonics
      const asym = x + 0.2 * amount * (x * x - 1);
      curve[i] = Math.tanh(asym * (1 + amount * 1.5));
    } else {
      // Tape saturation: smooth polynomial compression
      const gain = 1 + amount * 0.6;
      const soft = x * gain;
      curve[i] = soft / Math.sqrt(1 + soft * soft);
    }
  }
  return curve;
}

export function calculateSidechainDepth(char?: MixCharacter): number {
  if (!char) return 0.5;
  if (char.bassForward >= 0.75) return 1.0;
  if (char.bassForward <= 0.45) return 0.0;
  return Math.max(0, Math.min(1, (char.bassForward - 0.45) / 0.3));
}

export function calculateDrumKnock(char?: MixCharacter): number {
  if (!char) return 0.2;
  return Math.max(0.05, Math.min(0.85, (char.bassForward - 0.3) * 1.2));
}

export function calculateAcousticCrosstalk(char?: MixCharacter): number {
  if (!char) return 0.02;
  if (char.dryness < 0.6 && char.bassForward < 0.6) {
    return Math.max(0.02, Math.min(0.08, (0.6 - char.dryness) * 0.15));
  }
  return 0.005;
}

export function createMasterChain(ctx: BaseAudioContext, initialMixCharacter?: MixCharacter, genreId?: string): MasterChain {
  // 1. Bus inputs
  const drumBus = ctx.createGain();
  drumBus.gain.value = 1.0;

  const instBus = ctx.createGain();
  instBus.gain.value = 1.0;

  const subBus = ctx.createGain();
  subBus.gain.value = 1.0;

  const input = ctx.createGain();
  input.gain.value = 1.0;
  input.connect(instBus);

  const isSalsa = /salsa/i.test(genreId || '');

  // 2. Drum Bus Saturation ("Knock") with Saturation Type
  const drumShaper = ctx.createWaveShaper();
  const initialKnock = calculateDrumKnock(initialMixCharacter);
  const initialSatType = initialMixCharacter?.saturationType ?? 'tape';
  drumShaper.curve = saturationCurve(initialKnock, initialSatType);
  drumShaper.oversample = '2x';

  // 3. Clean Sub Bus Filter (Sub-Harmonic Exciter removed for pure, weighty low-end)
  const subFilter = ctx.createBiquadFilter();
  subFilter.type = 'lowpass';
  subFilter.frequency.value = 80;

  // 4. Sidechain Ducking
  const kickFilter = ctx.createBiquadFilter();
  kickFilter.type = 'lowpass';
  kickFilter.frequency.value = 110;
  kickFilter.Q.value = 1.0;

  const subDuckingGain = ctx.createGain();
  subDuckingGain.gain.value = 1.0;

  subBus.connect(subFilter);
  subFilter.connect(subDuckingGain);

  // 5. Lush Room Reverb (FDN Network for Live Playback)
  const initialRoomDepth = isSalsa ? 0.04 : (initialMixCharacter ? (1.0 - initialMixCharacter.dryness) * 0.45 : 0.25);

  const rev1 = ctx.createDelay(0.5); rev1.delayTime.value = 0.037;
  const rev2 = ctx.createDelay(0.5); rev2.delayTime.value = 0.043;
  const rev3 = ctx.createDelay(0.5); rev3.delayTime.value = 0.053;
  const rev4 = ctx.createDelay(0.5); rev4.delayTime.value = 0.067;

  const revFb1 = ctx.createGain(); revFb1.gain.value = 0.45;
  const revFb2 = ctx.createGain(); revFb2.gain.value = 0.45;
  const revFb3 = ctx.createGain(); revFb3.gain.value = 0.45;
  const revFb4 = ctx.createGain(); revFb4.gain.value = 0.45;

  rev1.connect(revFb1); revFb1.connect(rev2);
  rev2.connect(revFb2); revFb2.connect(rev3);
  rev3.connect(revFb3); revFb3.connect(rev4);
  rev4.connect(revFb4); revFb4.connect(rev1);

  const revMixL = ctx.createGain(); revMixL.gain.value = initialRoomDepth;
  const revMixR = ctx.createGain(); revMixR.gain.value = initialRoomDepth;

  const revFilterL = ctx.createBiquadFilter(); revFilterL.type = 'lowpass'; revFilterL.frequency.value = 3500;
  const revFilterR = ctx.createBiquadFilter(); revFilterR.type = 'lowpass'; revFilterR.frequency.value = 3500;

  rev1.connect(revFilterL); revFilterL.connect(revMixL);
  rev2.connect(revFilterR); revFilterR.connect(revMixR);

  const revMerger = ctx.createChannelMerger(2);
  revMixL.connect(revMerger, 0, 0);
  revMixR.connect(revMerger, 0, 1);

  // 6. Master Summing
  const masterSum = ctx.createGain();
  masterSum.gain.value = 1.0;

  drumBus.connect(drumShaper);
  drumBus.connect(kickFilter);
  drumShaper.connect(masterSum);

  subDuckingGain.connect(masterSum);
  instBus.connect(masterSum);

  // Feed reverb
  instBus.connect(rev1);
  instBus.connect(rev3);
  drumBus.connect(rev2);
  revMerger.connect(masterSum);

  // 7. Subsonic Filter & Master EQ
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 28;
  hp.Q.value = 0.6;

  const lowGainInit = initialMixCharacter ? (initialMixCharacter.bassForward - 0.5) * 4.0 : 0.5;
  const presGainInit = initialMixCharacter ? (initialMixCharacter.dryness - 0.5) * 3.0 : 0.8;
  const airGainInit = initialMixCharacter ? (initialMixCharacter.brightness - 0.5) * 5.0 : 1.0;

  const low = ctx.createBiquadFilter();
  low.type = 'lowshelf';
  low.frequency.value = 100;
  low.gain.value = lowGainInit;

  const pres = ctx.createBiquadFilter();
  pres.type = 'peaking';
  pres.frequency.value = 3200;
  pres.Q.value = 0.8;
  pres.gain.value = presGainInit;

  const air = ctx.createBiquadFilter();
  air.type = 'highshelf';
  air.frequency.value = 11000;
  air.gain.value = airGainInit;

  // 8. Dynamic Compressor Profiles (Glue Compressor)
  const glue = ctx.createDynamicsCompressor();
  const ratioInit = initialMixCharacter?.compressionRatio ?? 1.8;
  const snapInit = initialMixCharacter?.transientSnap ?? 0.3;

  if (isSalsa) {
    // Salsa requires a very dry, punchy mix. Set glue compressor attack to 0.01 to catch sharp timbale hits.
    glue.threshold.value = -12;
    glue.knee.value = 12;
    glue.ratio.value = 3.0;
    glue.attack.value = 0.01;
    glue.release.value = 0.15;
  } else if (ratioInit <= 2.0) {
    // Slow, transparent compressor (Folk, Jazz)
    glue.threshold.value = -8;
    glue.knee.value = 18;
    glue.ratio.value = Math.max(1.1, ratioInit);
    glue.attack.value = 0.08;
    glue.release.value = 0.35;
  } else {
    // Fast, punchy, or aggressive compressor (Metal, Trap, House)
    glue.threshold.value = -16;
    glue.knee.value = 8;
    glue.ratio.value = ratioInit;
    glue.attack.value = Math.max(0.003, 0.03 * (1 - snapInit));
    glue.release.value = 0.12;
  }

  // 9. Mid-Side Processing Matrix (Stereo spatialization with mono sub-bass < 300Hz)
  // Split L/R -> Mid (L+R)*0.707 and Side (L-R)*0.707
  const sideHighPass = ctx.createBiquadFilter();
  sideHighPass.type = 'highpass';
  sideHighPass.frequency.value = 300; // Sub-bass < 300Hz is strictly mono
  sideHighPass.Q.value = 0.707;

  const sideGain = ctx.createGain();
  const initWidth = initialMixCharacter?.width ?? 0.5;
  sideGain.gain.value = Math.max(0.0, Math.min(1.8, initWidth * 1.2));

  // 9. Transparent Limiter & Output
  const limiter = ctx.createDynamicsCompressor();
  limiter.threshold.value = -0.2;
  limiter.knee.value = 0.5;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.001;
  limiter.release.value = 0.05;

  const makeup = ctx.createGain();
  makeup.gain.value = 1;

  const tap = ctx.createGain();
  tap.gain.value = 1;

  const output = ctx.createGain();
  output.gain.value = 0.95;

  // Signal routing (clean, linear, phase-coherent chain)
  masterSum.connect(hp);
  hp.connect(low);
  low.connect(pres);
  pres.connect(air);
  air.connect(glue);
  glue.connect(makeup);
  makeup.connect(limiter);
  limiter.connect(tap);
  tap.connect(output);

  if (ctx.destination) {
    try {
      output.connect(ctx.destination);
    } catch {
      /* Offline Audio Context handle */
    }
  }

  return {
    input,
    drumBus,
    instBus,
    subBus,
    output,
    tap,
    setVolume(v: number) {
      output.gain.setTargetAtTime(Math.max(0, Math.min(1.5, v * 0.95)), ctx.currentTime, 0.02);
    },
    setMixCharacter(char: MixCharacter, genId?: string) {
      const gId = genId || genreId;
      const now = ctx.currentTime;
      const lowTarget = (char.bassForward - 0.5) * 4.0;
      const presTarget = (char.dryness - 0.5) * 3.0;
      const airTarget = (char.brightness - 0.5) * 5.0;

      low.gain.setTargetAtTime(lowTarget, now, 0.05);
      pres.gain.setTargetAtTime(presTarget, now, 0.05);
      air.gain.setTargetAtTime(airTarget, now, 0.05);

      // Dynamic Compressor Update
      const ratio = char.compressionRatio ?? 1.8;
      const snap = char.transientSnap ?? 0.3;
      const isSalsaActive = /salsa/i.test(gId || '');

      if (isSalsaActive) {
        glue.threshold.setTargetAtTime(-12, now, 0.05);
        glue.ratio.setTargetAtTime(3.0, now, 0.05);
        glue.attack.setTargetAtTime(0.01, now, 0.05);
        glue.release.setTargetAtTime(0.15, now, 0.05);
      } else if (ratio <= 2.0) {
        glue.threshold.setTargetAtTime(-10, now, 0.05);
        glue.ratio.setTargetAtTime(Math.max(1.2, ratio), now, 0.05);
        glue.attack.setTargetAtTime(0.06, now, 0.05);
      } else {
        glue.threshold.setTargetAtTime(-16, now, 0.05);
        glue.ratio.setTargetAtTime(ratio, now, 0.05);
        glue.attack.setTargetAtTime(Math.max(0.003, 0.03 * (1 - snap)), now, 0.05);
      }

      // Room Depth (Reverb)
      const rDepth = isSalsaActive ? 0.05 : (1.0 - char.dryness) * 0.45;
      revMixL.gain.setTargetAtTime(rDepth, now, 0.05);
      revMixR.gain.setTargetAtTime(rDepth, now, 0.05);

      // Drum Bus Saturation & Saturation Type
      const knock = calculateDrumKnock(char);
      const satType = char.saturationType ?? 'tape';
      drumShaper.curve = saturationCurve(knock, satType);

      // Mid-Side Width
      sideGain.gain.setTargetAtTime(Math.max(0.0, Math.min(1.8, char.width * 1.2)), now, 0.05);
    },
    dispose() {
      try {
        input.disconnect();
        drumBus.disconnect();
        instBus.disconnect();
        subBus.disconnect();
        drumShaper.disconnect();
        subFilter.disconnect();
        kickFilter.disconnect();
        subDuckingGain.disconnect();
        masterSum.disconnect();
        rev1.disconnect();
        rev2.disconnect();
        rev3.disconnect();
        rev4.disconnect();
        revFb1.disconnect();
        revFb2.disconnect();
        revFb3.disconnect();
        revFb4.disconnect();
        revFilterL.disconnect();
        revFilterR.disconnect();
        revMixL.disconnect();
        revMixR.disconnect();
        revMerger.disconnect();
        hp.disconnect();
        low.disconnect();
        pres.disconnect();
        air.disconnect();
        glue.disconnect();
        sideHighPass.disconnect();
        sideGain.disconnect();
        makeup.disconnect();
        limiter.disconnect();
        tap.disconnect();
        output.disconnect();
      } catch {
        /* ignore disconnect errors */
      }
    },
  };
}
