import * as Tone from 'tone';

/**
 * Master Bus, EQ, and Spatialization
 */
const masterEQ = new Tone.EQ3({ low: 2.5, mid: 0, high: -4.5 }).toDestination();

const masterCompressor = new Tone.Compressor({
  threshold: -20,
  ratio: 3.5,
  attack: 0.01,
  release: 0.15,
}).connect(masterEQ);

const masterLimiter = new Tone.Limiter(-2).connect(masterCompressor);

const hallReverb = new Tone.Reverb({ decay: 3.2, preDelay: 0.04, wet: 0.35 }).connect(masterLimiter);
const drumRoom = new Tone.Reverb({ decay: 0.8, preDelay: 0.01, wet: 0.20 }).connect(masterLimiter);

if (typeof hallReverb.generate === 'function') {
  hallReverb.generate();
}
if (typeof drumRoom.generate === 'function') {
  drumRoom.generate();
}

/**
 * Intelligent Pitch Range Clamping
 */
function clampToInstrumentRange(note, minMidi, maxMidi) {
  try {
    let midiValue = Tone.Frequency(note).toMidi();
    if (!midiValue) return note;
    while (midiValue > maxMidi) midiValue -= 12;
    while (midiValue < minMidi) midiValue += 12;
    return Tone.Frequency(midiValue, 'midi').toNote();
  } catch (_e) {
    return note;
  }
}

/**
 * Trumpet Model
 */
const trumpetVibrato = new Tone.Vibrato({ frequency: 5.2, depth: 0.04 }).connect(hallReverb);

const trumpetSynth = new Tone.FMSynth({
  harmonicity: 1,
  modulationIndex: 1.5,
  oscillator: { type: 'sawtooth' },
  modulation: { type: 'sine' },
  envelope: { attack: 0.06, decay: 0.2, sustain: 0.75, release: 0.8 },
  modulationEnvelope: { attack: 0.08, decay: 0.1, sustain: 0.5, release: 0.6 },
  volume: -4,
});

const trumpetFilter = new Tone.Filter({
  type: 'lowpass',
  frequency: 350,
  rolloff: -24,
  Q: 2.5,
}).connect(trumpetVibrato);

trumpetSynth.connect(trumpetFilter);

const breathNoise = new Tone.NoiseSynth({
  noise: { type: 'pink' },
  envelope: { attack: 0.1, decay: 0.2, sustain: 0.05, release: 0.5 },
  volume: -20,
}).connect(trumpetFilter);

export const trumpet = {
  triggerAttackRelease: (note, duration, time) => {
    const clampedNote = clampToInstrumentRange(note, 54, 84); // F#3 to C6
    const midi = Tone.Frequency(clampedNote).toMidi();
    const filterFreq = Math.min(3000, 350 + ((midi - 54) * 50));

    trumpetFilter.frequency.setValueAtTime(filterFreq, time);
    trumpetSynth.triggerAttackRelease(clampedNote, duration, time);
    breathNoise.triggerAttackRelease(duration, time);
  },
};

/**
 * Bandoneon Model
 */
const bandoneonChorus = new Tone.Chorus({ frequency: 2.5, delayTime: 3.5, depth: 0.7, wet: 0.4 }).start().connect(hallReverb);
const bandoneonEQ = new Tone.EQ3({ low: 2, mid: 4, high: -2 }).connect(bandoneonChorus);

const bandoneonSynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: { type: 'fatsquare', count: 3, spread: 12 },
  envelope: { attack: 0.12, decay: 0.3, sustain: 0.85, release: 0.9 },
  volume: -6,
}).connect(bandoneonEQ);

const buttonClick = new Tone.MembraneSynth({
  pitchDecay: 0.01,
  octaves: 1,
  oscillator: { type: 'triangle' },
  envelope: { attack: 0.001, decay: 0.05, sustain: 0, release: 0.01 },
  volume: -25,
}).connect(hallReverb);

export const bandoneon = {
  triggerAttackRelease: (note, duration, time) => {
    const clampedNote = clampToInstrumentRange(note, 36, 81); // C2 to A5
    buttonClick.triggerAttackRelease('C6', '32n', time);
    bandoneonSynth.triggerAttackRelease(clampedNote, duration, time);
  },
};

/**
 * Drumkit Multi-Layer Percussion
 */
const kickSub = new Tone.MembraneSynth({ pitchDecay: 0.06, octaves: 6, oscillator: { type: 'sine' }, envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4 }, volume: 2 }).connect(masterLimiter);
const kickClick = new Tone.NoiseSynth({ noise: { type: 'white' }, envelope: { attack: 0.001, decay: 0.02, sustain: 0, release: 0.02 }, volume: -15 }).connect(drumRoom);

const snareBody = new Tone.MembraneSynth({ pitchDecay: 0.03, octaves: 3, oscillator: { type: 'triangle' }, envelope: { attack: 0.001, decay: 0.15, sustain: 0, release: 0.1 }, volume: -2 }).connect(drumRoom);
const snareFilter = new Tone.Filter({ type: 'bandpass', frequency: 2500, Q: 1.5 }).connect(drumRoom);
const snareNoise = new Tone.NoiseSynth({ noise: { type: 'pink' }, envelope: { attack: 0.001, decay: 0.25, sustain: 0, release: 0.2 }, volume: 0 }).connect(snareFilter);

const hihat = new Tone.MetalSynth({ frequency: 300, envelope: { attack: 0.001, decay: 0.08, release: 0.02 }, harmonicity: 5.1, modulationIndex: 32, resonance: 4000, octaves: 1.5, volume: -10 }).connect(drumRoom);
const openHihat = new Tone.MetalSynth({ frequency: 250, envelope: { attack: 0.001, decay: 0.4, release: 0.1 }, harmonicity: 5.1, modulationIndex: 32, resonance: 4000, octaves: 1.5, volume: -12 }).connect(drumRoom);
const rideCymbal = new Tone.MetalSynth({ frequency: 400, envelope: { attack: 0.005, decay: 1.2, release: 0.5 }, harmonicity: 6.2, modulationIndex: 45, resonance: 5000, octaves: 2, volume: -14 }).connect(drumRoom);
const tomSynth = new Tone.MembraneSynth({ pitchDecay: 0.04, octaves: 4, oscillator: { type: 'sine' }, envelope: { attack: 0.005, decay: 0.5, sustain: 0, release: 0.5 }, volume: -3 }).connect(drumRoom);

export const drumkit = {
  triggerAttackRelease: (note, _duration, time) => {
    let midiVal = Tone.Frequency(note).toMidi();

    const isKick = (midiVal >= 35 && midiVal <= 36) || (note.startsWith('C') && parseInt(note.slice(-1)) < 4);
    const isSnare = (midiVal >= 38 && midiVal <= 40) || note.startsWith('D') || note.startsWith('E');
    const isClosedHat = (midiVal === 42 || midiVal === 44) || note.startsWith('F#') || note.startsWith('G#');
    const isOpenHat = (midiVal === 46) || note.startsWith('A#');
    const isRide = (midiVal >= 51 && midiVal <= 53) || note.startsWith('D#');
    const isTom = (midiVal >= 41 && midiVal <= 48 && !isClosedHat && !isOpenHat) || note.startsWith('F') || note.startsWith('G') || note.startsWith('A');

    if (isKick) {
      kickSub.triggerAttackRelease('C1', '8n', time);
      kickClick.triggerAttackRelease('16n', time);
    } else if (isSnare) {
      snareBody.triggerAttackRelease('G2', '16n', time);
      snareNoise.triggerAttackRelease('16n', time);
    } else if (isClosedHat) {
      hihat.triggerAttackRelease('32n', time);
    } else if (isOpenHat) {
      openHihat.triggerAttackRelease('8n', time);
    } else if (isRide) {
      rideCymbal.triggerAttackRelease('4n', time);
    } else if (isTom) {
      if (midiVal % 3 === 0) tomSynth.triggerAttackRelease('G2', '8n', time);
      else if (midiVal % 3 === 1) tomSynth.triggerAttackRelease('D2', '8n', time);
      else tomSynth.triggerAttackRelease('A1', '8n', time);
    } else {
      hihat.triggerAttackRelease('32n', time);
    }
  },
};

/**
 * Global Note Play Function
 */
export function playNote(instrument, note, time) {
  const humanizeOffset = Math.random() * 0.01;
  const triggerTime = time + humanizeOffset;
  let duration = instrument === bandoneon ? '4n' : '8n';

  try {
    instrument.triggerAttackRelease(note, duration, triggerTime);
  } catch (error) {
    console.warn(`[SynthDefinitions] Failed to play note: ${note} on instrument`, error);
  }
}
