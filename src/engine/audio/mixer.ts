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
  /** Connect synth/tracks here */
  input: GainNode;
  /** The end of the chain, connected to the destination */
  output: GainNode;
  /** Tap this to record post-mastering */
  tap: GainNode;
  setVolume(v: number): void;
  setMixCharacter(char: MixCharacter): void;
  dispose(): void;
}

/** A gentle odd-harmonic transfer curve: unity-gain soft saturation for warmth without distortion */
function saturationCurve(drive: number): Float32Array {
  const n = 2048;
  const curve = new Float32Array(n);
  const amount = Math.max(0, Math.min(1, drive)) * 0.25;

  for (let i = 0; i < n; i++) {
    const x = (i * 2) / (n - 1) - 1;
    // Small-signal gain remains at unity while peaks are smoothly rounded
    curve[i] = x + amount * (Math.tanh(x) - x);
  }
  return curve;
}

/**
 * Creates a clean, restrained master bus for natural ensemble reproduction.
 * No artificial room/reverb simulation; transparent tone, bus glue, and safety limiting.
 */
export function createMasterChain(ctx: BaseAudioContext, initialMixCharacter?: MixCharacter): MasterChain {
  const input = ctx.createGain();
  input.gain.value = 1;

  // 1. Subsonic protection: remove DC offset & sub-rumble below 22 Hz
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 22;
  hp.Q.value = 0.7;

  // 2. Transparent master EQ adapted to MixCharacter
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

  // 3. Gentle analog warmth
  const preDrive = ctx.createGain();
  const shaper = ctx.createWaveShaper();
  shaper.curve = saturationCurve(0.2);
  shaper.oversample = '2x';
  const postDrive = ctx.createGain();
  preDrive.gain.value = 1;
  postDrive.gain.value = 1;

  // 4. Subtle master bus glue compressor
  const glue = ctx.createDynamicsCompressor();
  glue.threshold.value = -12;
  glue.knee.value = 12;
  glue.ratio.value = 1.5;
  glue.attack.value = 0.03;
  glue.release.value = 0.25;

  // 5. Transparent safety peak limiter
  const limiter = ctx.createDynamicsCompressor();
  limiter.threshold.value = -0.5;
  limiter.knee.value = 1;
  limiter.ratio.value = 8;
  limiter.attack.value = 0.005;
  limiter.release.value = 0.12;

  const makeup = ctx.createGain();
  makeup.gain.value = 1;

  const tap = ctx.createGain();
  tap.gain.value = 1;
  const output = ctx.createGain();
  output.gain.value = 0.92;

  /* Connect the signal path */
  input.connect(hp);
  hp.connect(low);
  low.connect(pres);
  pres.connect(air);
  air.connect(preDrive);
  preDrive.connect(shaper);
  shaper.connect(postDrive);
  postDrive.connect(glue);
  glue.connect(makeup);
  makeup.connect(limiter);

  limiter.connect(tap);
  tap.connect(output);
  output.connect(ctx.destination);

  return {
    input,
    output,
    tap,
    setVolume(v: number) {
      output.gain.setTargetAtTime(Math.max(0, Math.min(1.5, v * 0.92)), ctx.currentTime, 0.02);
    },
    setMixCharacter(char: MixCharacter) {
      const now = ctx.currentTime;
      const lowTarget = (char.bassForward - 0.5) * 4.0;
      const presTarget = (char.dryness - 0.5) * 3.0;
      const airTarget = (char.brightness - 0.5) * 5.0;
      low.gain.setTargetAtTime(lowTarget, now, 0.05);
      pres.gain.setTargetAtTime(presTarget, now, 0.05);
      air.gain.setTargetAtTime(airTarget, now, 0.05);
    },
    dispose() {
      try {
        input.disconnect();
        hp.disconnect();
        low.disconnect();
        pres.disconnect();
        air.disconnect();
        preDrive.disconnect();
        shaper.disconnect();
        postDrive.disconnect();
        glue.disconnect();
        makeup.disconnect();
        limiter.disconnect();
        tap.disconnect();
        output.disconnect();
      } catch {
        /* already disconnected */
      }
    },
  };
}
