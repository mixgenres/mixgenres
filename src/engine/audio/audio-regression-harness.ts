/**
 * AUDIO REGRESSION HARNESS
 * ========================
 * Evaluates compiled audio renders against target physical and acoustic thresholds:
 * - Integrated LUFS (EBU R128 loudness calculation)
 * - Spectral Centroid (Hz, spectral brightness distribution)
 *
 * Used for automated verification and regression prevention across all 32 genre worlds.
 */

import { getGenreGainCalibration } from './gain-calibration';

export interface AudioRegressionReport {
  passed: boolean;
  genreId: string;
  measuredLufs: number;
  targetLufs: number;
  lufsDeltaDb: number;
  measuredSpectralCentroidHz: number;
  targetSpectralCentroidHz: number;
  centroidDeltaPercent: number;
  diagnostics: string[];
}

/**
 * Calculates approximate Integrated LUFS from an AudioBuffer channel data.
 */
export function calculateAudioBufferLufs(buffer: AudioBuffer): number {
  const numChannels = buffer.numberOfChannels;
  const length = buffer.length;
  if (length === 0) return -70;

  let sumPower = 0;
  for (let c = 0; c < numChannels; c++) {
    const channel = buffer.getChannelData(c);
    let channelSum = 0;
    for (let i = 0; i < length; i++) {
      channelSum += channel[i] * channel[i];
    }
    sumPower += channelSum / length;
  }

  const rms = Math.sqrt(sumPower / Math.max(1, numChannels));
  if (rms <= 0.00001) return -70;
  // LUFS approximation offset from RMS
  const lufs = 20 * Math.log10(rms) - 0.6;
  return Math.round(lufs * 10) / 10;
}

/**
 * Calculates Spectral Centroid (brightness center of gravity in Hz) from an AudioBuffer.
 */
export function calculateAudioBufferSpectralCentroid(buffer: AudioBuffer): number {
  const sampleRate = buffer.sampleRate;
  const channelData = buffer.getChannelData(0);
  const fftSize = 1024;
  if (channelData.length < fftSize) return 2000;

  let totalWeightedFreq = 0;
  let totalMagnitude = 0;

  // Simple DFT window analysis across the buffer
  const step = Math.floor(channelData.length / 16);
  for (let windowStart = 0; windowStart < channelData.length - fftSize; windowStart += step) {
    for (let k = 1; k < fftSize / 2; k++) {
      let real = 0;
      let imag = 0;
      const freq = (k * sampleRate) / fftSize;
      
      // DFT sample points
      for (let n = 0; n < fftSize; n += 4) {
        const angle = (2 * Math.PI * k * n) / fftSize;
        const sample = channelData[windowStart + n];
        real += sample * Math.cos(angle);
        imag -= sample * Math.sin(angle);
      }

      const mag = Math.sqrt(real * real + imag * imag);
      totalWeightedFreq += freq * mag;
      totalMagnitude += mag;
    }
  }

  if (totalMagnitude <= 0.0001) return 2000;
  return Math.round(totalWeightedFreq / totalMagnitude);
}

/**
 * Validates audio render against strict genre thresholds:
 * - LUFS within ±2.5 dB of target
 * - Spectral Centroid within ±25% of target
 */
export function validateAudioRegression(
  buffer: AudioBuffer,
  genreId = 'flamenco'
): AudioRegressionReport {
  const profile = getGenreGainCalibration(genreId);
  const measuredLufs = calculateAudioBufferLufs(buffer);
  const measuredCentroid = calculateAudioBufferSpectralCentroid(buffer);

  const targetLufs = profile.targetLufs;
  const targetCentroid = profile.targetSpectralCentroidHz;

  const lufsDeltaDb = Math.abs(measuredLufs - targetLufs);
  const centroidDeltaPercent = (Math.abs(measuredCentroid - targetCentroid) / targetCentroid) * 100;

  const diagnostics: string[] = [];
  let passed = true;

  if (lufsDeltaDb > 2.5) {
    passed = false;
    diagnostics.push(
      `LUFS deviation exceeded threshold: measured ${measuredLufs} LUFS, target ${targetLufs} LUFS (Δ ${lufsDeltaDb.toFixed(1)} dB > ±2.5 dB)`
    );
  } else {
    diagnostics.push(`LUFS check passed: measured ${measuredLufs} LUFS vs target ${targetLufs} LUFS`);
  }

  if (centroidDeltaPercent > 25) {
    passed = false;
    diagnostics.push(
      `Spectral Centroid deviation exceeded threshold: measured ${measuredCentroid} Hz, target ${targetCentroid} Hz (Δ ${centroidDeltaPercent.toFixed(1)}% > ±25%)`
    );
  } else {
    diagnostics.push(
      `Spectral Centroid check passed: measured ${measuredCentroid} Hz vs target ${targetCentroid} Hz`
    );
  }

  return {
    passed,
    genreId,
    measuredLufs,
    targetLufs,
    lufsDeltaDb,
    measuredSpectralCentroidHz: measuredCentroid,
    targetSpectralCentroidHz: targetCentroid,
    centroidDeltaPercent,
    diagnostics,
  };
}
