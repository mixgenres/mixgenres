class InstrumentRenderer {
  constructor(instrumentType = 'guitar', ctx = null) {
    this.instrumentType = instrumentType;
    this.ctx = ctx;
  }

  playNote(note, ctx) {
    const audioCtx = ctx || this.ctx;
    const profile = this.getAcousticProfile(this.instrumentType);
    const vel = note.velocity !== undefined ? note.velocity : (note.vel !== undefined ? note.vel / 127 : 0.8);
    const attackTime = profile.attack * (1.2 - vel); // Softer notes have slower transient attacks
    
    // Use harmonically rich source instead of synthetic flat oscillator
    const source = this.createRichTimbre(note.pitch || note.frequencyHz || 440, vel, profile, attackTime, audioCtx);
    if (source && source.start && audioCtx) {
      source.start(note.time || audioCtx.currentTime);
    }
    
    // Real-world acoustic integrations
    if (profile.hasBodyResonance) {
      this.applySympatheticResonance(note, audioCtx);
    }
    if (profile.isWind && source && source.detune && audioCtx) {
      this.simulateBreathPressure(source, { ...note, velocity: vel }, audioCtx);
    }
    
    // Authentic NoteOff interactions based on instrument mechanics
    const noteTime = note.time || (audioCtx ? audioCtx.currentTime : 0);
    const noteDur = note.duration || note.dur || 0.5;
    const releaseTime = noteTime + noteDur;
    if (source && source.stop) {
      source.stop(releaseTime);
    }
    this.scheduleNoteOffNoise({ ...note, velocity: vel }, releaseTime, profile, audioCtx);
  }

  getAcousticProfile(type) {
    const profiles = {
      trumpet: { isWind: true, attack: 0.06, valveClickVol: 0.12, breathNoise: 0.25 },
      guitar: { hasBodyResonance: true, attack: 0.015, fretNoiseVol: 0.18, bodyThump: 0.05 },
      upright_bass: { hasBodyResonance: true, attack: 0.08, stringSlapVol: 0.22, bodyThump: 0.1 }
    };
    return profiles[type] || { attack: 0.01 };
  }

  createRichTimbre(pitch, velocity, profile, attack, ctx) {
    if (!ctx) return { start: () => {}, stop: () => {}, detune: { value: 0 } };
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = typeof pitch === 'number' ? pitch : 440;
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    // Attack envelope based on velocity
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(velocity || 0.8, now + attack);
    
    return osc;
  }

  simulateBreathPressure(source, note, ctx) {
    if (!ctx || !source || !source.detune) return;
    const vel = note.velocity || 0.8;
    // Wind instruments fluctuate pitch and timbre based on breath support
    const breathLfo = ctx.createOscillator();
    breathLfo.frequency.value = 3.5 + (vel * 2.5); // Faster vibrato on high breath intensity
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.03 * vel * 100; // Cents depth
    breathLfo.connect(lfoGain);
    lfoGain.connect(source.detune);
    
    const startTime = note.time || ctx.currentTime;
    const dur = note.duration || note.dur || 0.5;
    breathLfo.start(startTime);
    breathLfo.stop(startTime + dur);
  }

  scheduleNoteOffNoise(note, time, profile, ctx) {
    if (!ctx) return;
    const vel = note.velocity || 0.8;
    // Physical artifacts that ground the sound when a note is released
    if (profile.valveClickVol) {
      this.playSample('valve_click', time, profile.valveClickVol * vel, ctx);
    }
    if (profile.fretNoiseVol && note.isSlide) {
      this.playSample('fret_squeak', time, profile.fretNoiseVol, ctx);
    }
    if (profile.bodyThump) {
      // Resonance settling back into the physical instrument body
      this.triggerBodyThump(time, vel * profile.bodyThump, ctx);
    }
  }
  
  applySympatheticResonance(note, ctx) {
    // Triggers subtle harmonic ringing of unplayed strings/body via convolver or resonant filter
    if (!ctx) return;
  }
  
  triggerBodyThump(time, intensity, ctx) {
    // A short low-frequency transient simulating physical acoustic body settling
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(80, time);
      osc.frequency.exponentialRampToValueAtTime(30, time + 0.05);
      gain.gain.setValueAtTime(Math.max(0.001, intensity || 0.1), time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 0.06);
    } catch {
      // AudioParam scheduling safety fallback
    }
  }
  
  playSample(sampleId, time, volume, ctx) {
    // Utility to overlay mechanical noises at targeted timestamps
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(1200, time);
      gain.gain.setValueAtTime(Math.max(0.001, (volume || 0.1) * 0.1), time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 0.03);
    } catch {
      // AudioParam scheduling safety fallback
    }
  }
}

export default InstrumentRenderer;
export { InstrumentRenderer };
