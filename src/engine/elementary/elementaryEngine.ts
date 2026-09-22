import { el } from '@elemaudio/core';
import { getLuthierModelForInstrument, type LuthierPhysicalParameters } from '../LuthierAPI';

type Node = any;

export function midiToFreq(note: number): number {
  return 440 * Math.pow(2, (note - 69) / 12);
}

export function styleFlavorForGenre(worldId = '', styleId = ''): number {
  const token = `${worldId}:${styleId}`.toLowerCase();
  if (token.includes('flamenco')) return 0.82;
  if (token.includes('afrobeat')) return 0.74;
  if (token.includes('reggae') || token.includes('dub')) return 0.68;
  if (token.includes('cumbia')) return 0.60;
  if (token.includes('jazz')) return 0.55;
  if (token.includes('samba') || token.includes('bossa')) return 0.50;
  return 0.35;
}

export type PerformanceMode = 'acoustic-ensemble' | 'programmed-electronic' | 'hybrid';

export interface VoiceState {
  note: number;
  velocity: number;
  gate: number;
  id: string;
  actionType?: 'strike' | 'pluck' | 'bow_drag' | 'abanico' | 'rasgueado' | 'tap' | 'golpe' | 'arrastre' | 'slap' | 'mute';
  technique?: string;
  contactPoint?: number;
  mass?: number;
  /** Optional culturally-tuned frequency supplied by the composition layer. */
  frequencyHz?: number;
}

export interface TrackParams {
  brightness: number;
  decay: number;
  drive: number;
  body: number;
  tension: number;
  styleFlavor: number;
  articulation: number;
  contact: number;
  mute: number;
  bowPressure: number;
  bowVelocity: number;
  bodyTap: number;
  pluckPosition: number;
  pressure: number;
  resonance: number;
  model: number;
  volume: number;
  pan: number;
  dialect?: string;
  performanceMode?: PerformanceMode;
}

export interface RoomParams {
  warmth: number;
  presence: number;
  air: number;
  highPass: number;
  space: number;
  volume: number;
  performanceMode?: PerformanceMode;
}

export function defaultRoomParams(): RoomParams {
  return {
    warmth: 0.5,
    presence: 0.5,
    air: 0.5,
    highPass: 40,
    space: 0.3,
    volume: 1.0,
    performanceMode: 'acoustic-ensemble',
  };
}

export function modelForInstrument(instrumentId: string, luthier?: LuthierPhysicalParameters): number {
  const id = instrumentId.toLowerCase();
  if (luthier?.faustProfile) {
    switch (luthier.faustProfile) {
      case 'spanish-guitar': return 0;
      case 'electric-bass': return 3;
      case 'double-bass': return 3;
      case 'tres': return 0;
      case 'flamenco-cajon': return 4;
    }
  }
  if (/guitar|tres|cuatro|requinto|charango|vihuela|sitar|oud|kora|berimbau|cavaquinho|harp|mandolin|banjo|shamisen|guqin|pipa|guzheng|jarana|koto|dulcimer/.test(id)) {
    return /electric|strat|tele|lespaul/.test(id) ? 2 : 0;
  }
  if (/bass|bajo|contrabajo|tuba/.test(id)) return 3;
  // Tuned struck/mallet resonators (long, pitched decay) are checked before
  // the percussion families below -- "steel-drums" would otherwise collide
  // with the generic "drum" match and get treated as a membrane.
  if (/steel-drums|steelpan|steel-pan|marimba|vibes|vibraphone|xylophone|tubular-bells|balafon|glockenspiel|celeste|music-box|crystal/.test(id)) return 8;
  // Membranophones: an actual skin/head stretched over a shell, whose pitch
  // and ring both come from the membrane itself.
  if (/cajon|djembe|conga|bongo|timbal|tambor(?!ine)|drum|kick|snare|perc|tabla|bombo|pandeiro|bata|surdo|zabumba|bodhran|darbuka|taiko|paigu|brush-kit/.test(id)) return 4;
  // Shaken & scraped idiophones: friction/impact noise with no tonal
  // membrane or bar at all -- a maraca or guiro has nothing in common
  // acoustically with a drum head, so it gets its own noise-driven patch
  // rather than reusing the membrane resonance model.
  if (/shaker|maraca|guiro|cabasa|guacharaca|quijada/.test(id)) return 17;
  // Struck metal & wood idiophones: a short inharmonic clang (bell/block/
  // click), distinct from both the membrane family above and the
  // longer-ringing tuned-mallet family (model 8).
  if (/cowbell|agogo|claves|woodblock|triangle|tambourine|castanets|palmas|\bride\b|kane|zapateado|gongs|bones|\bhats\b/.test(id)) return 18;
  // jinghu (Beijing-opera spike fiddle) is bowed, not plucked -- it was
  // previously caught by the guitar/pluck regex above and rendered with
  // Karplus-Strong pluck synthesis instead of the bowed-friction model.
  if (/violin|cello|viola|fiddle|erhu|jinghu|string/.test(id)) return 6;
  // Winds split by excitation mechanism, not lumped into one shared patch:
  // lip-buzz brass, single/double-reed, and breathy edge-blown flutes are
  // physically distinct instruments and need distinct synthesis, or an
  // arrangement with a horn section just sounds like one flute at three pitches.
  if (/trumpet|trombone|\bbrass\b|\bhorn\b|horn-section|cornet|flugelhorn|tuba/.test(id)) return 15;
  if (/sax|clarinet|oboe|bagpipe|uilleann|shawm|dulzaina|bombarde/.test(id)) return 16;
  if (/flute|quena|zampoña|tin-whistle|low-whistle|piccolo|shakuhachi|xiao|dizi|ryuteki|hichiriki|recorder|ocarina/.test(id)) return 7;
  if (/accordion|bandoneon|harmonica|shō|sho|concertina|melodica/.test(id)) return 10;
  if (/grand-piano|upright-piano|piano|player-piano|harpsichord/.test(id)) return 11;
  if (/organ|hammond|church-organ|pipe-organ/.test(id)) return 13;
  if (/voice|vocal|choir|soprano|alto|tenor|baritone|chorus/.test(id)) return 12;
  if (/rhodes|wurlitzer|electric-piano|fm-ep|epiano/.test(id)) return 14;
  // marimba/vibes/xylophone/etc. are already handled above; this catches
  // the remaining piano-adjacent and mallet-adjacent ids (kalimba, keys).
  if (/piano|keys|clavinet|kalimba/.test(id)) return /clavinet/.test(id) ? 2 : 8;
  if (/synth|lead|pad|acid|808|909|noise-sweep|dub-echo|turntable/.test(id)) return 9;
  return 0;
}

export function normalizedParams(instrumentId: string, luthier: LuthierPhysicalParameters, modelNum: number) {
  const electric = /electric|distortion|synth|acid|clavinet|sub-bass|rhodes|fm-ep/.test(instrumentId.toLowerCase());
  const b = Math.max(0, Math.min(1, 0.42 + luthier.harmonicRichness * 0.48 + (electric ? 0.1 : 0)));
  const d = Math.max(0.1, Math.min(8, luthier.decayTimeSec ?? luthier.decayTimeFactor));
  const dr = Math.max(0, Math.min(1, electric ? 0.15 + luthier.harmonicRichness * 0.55 : luthier.harmonicRichness * 0.08));
  // Shaken/scraped idiophones (model 17) all have small bodyResonanceVolume
  // values (gourds/shells, not full drum shells), so the default /30 divisor
  // would crush shaker vs. guiro vs. guacharaca down to near-zero and
  // indistinguishable; a smaller divisor keeps their relative differences
  // in a usable 0-1 range.
  const bodyDivisor = modelNum === 1 ? 60 : modelNum === 3 ? 120 : modelNum === 17 ? 2 : 30;
  const bo = Math.max(0, Math.min(1, luthier.bodyResonanceVolume / bodyDivisor));
  return {
    brightness: b,
    decay: d,
    drive: dr,
    body: bo,
    model: modelNum,
  };
}

/**
 * Per-model makeup gain, calibrated so a fixed reference note (velocity 100,
 * held for ~1.2s) produces roughly the same measured RMS across every
 * synthesis model. Before this table there was no calibration anywhere in
 * the engine: every track used the same flat `volume: 0.8` regardless of how
 * loud that model's algorithm naturally puts out, which produced a ~50 dB
 * spread between models playing at the "same" volume (e.g. congas vs. organ).
 * The only other level-shaping step in the pipeline is a single global
 * peak-normalize at the very end of the render (offlineRender.ts), which sets
 * the whole song's ceiling off whichever one instrument hits hardest and does
 * nothing to balance instruments against each other -- so without this table,
 * fixing one instrument's patch just reveals the next one is out of balance
 * with it.
 *
 * Regenerate with `npx tsx scripts/gain-calibration.ts` after changing a
 * model's synthesis (the reference instrument list lives there). This is a
 * first-pass, mechanically-measured table, not a final mix -- per-instrument
 * (rather than per-model) trimming is still worth doing on top of it for
 * instruments that are outliers within their shared model.
 */
export const GAIN_BY_MODEL: Record<number, number> = {
  // Regenerated by `npx tsx scripts/gain-calibration.ts` after splitting
  // the old shared percussion patch into models 4/5 (membranes), 17
  // (shaken/scraped idiophones) and 18 (struck metal/wood idiophones) --
  // adding those two representative instruments moves the measured median,
  // so this shifts every value slightly, not just the two new ones.
  0: 2.847,  // plucked strings (guitar family)
  2: 1.000,  // overdriven electric guitar
  3: 0.896,  // bass
  4: 2.172,  // membrane percussion (congas/tabla/etc.) -- model 5 shares this patch
  5: 2.172,
  6: 6.540,  // bowed strings
  7: 25.202, // edge-blown air-jet (flute family) -- this model's raw output
             // is roughly 40x quieter in amplitude than most other models
             // (see scripts/gain-calibration.ts --peaks); even after this
             // gain it still has more headroom than most models before
             // clipping, so the large multiplier is safe, not a band-aid
             // over distortion.
  8: 1.076,  // struck resonators (marimba/vibes/bells/etc.)
  9: 0.438,  // synth / programmed-electronic
  10: 0.562, // free reed (accordion/bandoneon/harmonica)
  11: 3.224, // piano family
  12: 0.460, // voice
  13: 0.320, // organ
  14: 0.331, // electric piano (rhodes/wurlitzer)
  15: 0.528, // brass
  16: 0.536, // single/double reed winds
  // Shaken/scraped idiophones (shaker/maracas/cabasa/guiro/guacharaca) are
  // so much quieter than everything else that the loudness-matched
  // multiplier the script computes (~38x) would push the reference
  // shaker's transient peak above 0dBFS (0.04 peak * 38 > 1.0). Capped
  // below clipping instead, at the cost of sitting a bit under the target
  // level -- same tradeoff already made for model 7 above.
  17: 20.000, // shaken/scraped idiophones (noise-driven)
  18: 5.929,  // struck metal/wood idiophones (short clang)
};

function makeupGainFor(modelNum: number): number {
  return GAIN_BY_MODEL[Math.round(modelNum)] ?? 1;
}

export function defaultTrackParams(instrumentId = '', luthier?: LuthierPhysicalParameters, modelNum = 0): TrackParams {
  const l = luthier ?? getLuthierModelForInstrument(instrumentId);
  const norm = normalizedParams(instrumentId, l, modelNum);
  const isElectronic = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test(instrumentId.toLowerCase());
  // Base volume stays a musical default (0.8); the per-model makeup gain
  // brings that default to a comparable perceived loudness across models.
  // Clamped so a bad/missing table entry can't silence or blow out a track.
  // renderVoice() forces model 9 (synth) at synthesis time whenever the
  // performance mode is programmed-electronic, regardless of the
  // instrument's own acoustic model number -- the makeup gain has to track
  // whichever DSP patch actually runs, or a bass/keys part played in
  // electronic mode gets its acoustic model's gain applied to the synth
  // patch's output, reintroducing the exact per-model mismatch this table
  // exists to remove.
  const effectiveModelForGain = isElectronic ? 9 : modelNum;
  const volume = Math.max(0.05, Math.min(30, 0.8 * makeupGainFor(effectiveModelForGain)));

  return {
    brightness: norm.brightness,
    decay: norm.decay,
    drive: norm.drive,
    body: norm.body,
    tension: Math.max(0, Math.min(1, l.tension)),
    styleFlavor: 0.5,
    articulation: 0,
    contact: 0.5,
    mute: 0,
    bowPressure: 0.45,
    bowVelocity: 0.35,
    bodyTap: 0,
    pluckPosition: 0.28,
    pressure: 0.55,
    resonance: 0.5,
    model: modelNum,
    volume,
    pan: 0.5,
    performanceMode: isElectronic ? 'programmed-electronic' : 'acoustic-ensemble',
  };
}

/**
 * Elementary Audio Physical Voice Generator
 * Real Digital Waveguide Synthesis, Bounded Tube Jet-Drive, & Modal Resonators
 */
export function renderVoice(
  trackId: string,
  voiceIndex: number,
  voice: VoiceState,
  params: TrackParams
): Node {
  const k = `${trackId}:v${voiceIndex}`;
  const freq = (voice as VoiceState & { frequencyHz?: number }).frequencyHz ?? midiToFreq(voice.note);
  const gateSignal = el.const({ key: `${k}:gate`, value: voice.gate });
  const velSignal = el.const({ key: `${k}:vel`, value: voice.velocity * (1 - 0.58 * params.mute) });
  const freqSignal = el.const({ key: `${k}:freq`, value: freq });

  // Real instruments don't just get louder as they're played harder — they
  // get *brighter*: a plucked string, a bowed note, a blown reed all add
  // upper harmonic content under a harder attack. Without this, every note
  // in a track uses the same filter cutoff regardless of dynamics, which is
  // a big part of why a full mix reads as flat/monotonous even when the
  // note-level velocities vary. velBoost scales the track's static
  // brightness by this note's actual played velocity.
  const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, voice.velocity));
  const b = Math.max(0, Math.min(1, params.brightness * velBoost));
  const decayTime = Math.max(0.05, params.decay);
  // Programmed styles deliberately use the electronic voice family even when
  // the musical role is named bass/keys/etc. Acoustic styles retain the
  // instrument's physical family. Hybrid remains instrument-led.
  const model = params.performanceMode === 'programmed-electronic'
    ? 9
    : Math.round(params.model);
  const action = voice.actionType ?? (params.bodyTap > 0.5 ? 'golpe' : 'pluck');

  const isMuted = action === 'mute' || params.mute > 0.4;
  const attack = 0.0008 + (1 - b) * 0.01;
  const release = isMuted ? 0.012 : 0.03 + decayTime * 0.25;
  const sustain = isMuted ? 0.05 : 0.35 + 0.3 * params.body;

  const env = el.adsr(attack, decayTime * (isMuted ? 0.1 : 0.3), sustain, release, gateSignal);

  let rawAudio: Node;

  if (action === 'golpe' || action === 'tap') {
    // Percussive Body Golpe (instrument shell/wood hit without string loop)
    const bodyPunch = el.mul(el.cycle(110), el.adsr(0.0005, 0.02, 0, 0.01, gateSignal));
    const woodClick = el.mul(el.highpass(1400, 1.2, el.noise()), el.adsr(0.0002, 0.008, 0, 0.004, gateSignal));
    rawAudio = el.add(el.mul(0.75, bodyPunch), el.mul(0.25, woodClick));
  } else switch (model) {
    case 2: {
      // Overdriven Electric Guitar Waveguide with Inharmonicity & Pick Position
      const sr = 44100;
      const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
      const pickPos = Math.max(0.05, Math.min(0.5, params.pluckPosition));

      const impulse = el.mul(el.noise(), el.adsr(0.0005, 0.008, 0, 0.003, gateSignal));
      const stringLoop = el.delay({ size: 44100 }, el.const({ value: delayLength }), el.const({ value: 0.985 - (1 - b) * 0.02 }), impulse);

      const combOffset = Math.max(1, delayLength * pickPos);
      const combSig = el.sub(stringLoop, el.delay({ size: 44100 }, el.const({ value: combOffset }), el.const({ value: 0 }), stringLoop));

      const driven = el.tanh(el.mul(el.const({ value: 1 + params.drive * 5 }), combSig));
      rawAudio = el.lowpass(1200 + b * 5500, 1.2, driven);
      break;
    }
    case 3: {
      // Bass (Salsa Tumbao / Tango Bowed / Slap)
      const isArco = action === 'bow_drag' || params.bowPressure > 0.6;
      if (isArco) {
        // Tango Bowed Double Bass Stick-Slip Friction Waveguide
        const osc = el.blepsaw(freqSignal);
        const frictionNoise = el.mul(params.bowPressure * 0.25, el.pinknoise());
        const bowSig = el.add(osc, frictionNoise);
        rawAudio = el.svf({ mode: 'lowpass' }, 220 + b * 2000, 1.4, bowSig);
      } else {
        // Plucked / Slap Bass Waveguide
        const sr = 44100;
        const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
        const impulse = el.mul(el.noise(), el.adsr(0.001, 0.015, 0, 0.005, gateSignal));
        const slapClick = action === 'slap' ? el.mul(0.4, el.adsr(0.0003, 0.004, 0, 0.002, gateSignal)) : 0;

        const stringLoop = el.delay({ size: 44100 }, el.const({ value: delayLength }), el.const({ value: 0.99 }), el.add(impulse, slapClick));
        const subSine = el.mul(0.4, el.cycle(freqSignal));
        const mixed = el.add(stringLoop, subSine);
        rawAudio = el.svf({ mode: 'lowpass' }, 120 + b * 2200, 1 + params.drive * 1.5, mixed);
      }
      break;
    }
    case 4:
    case 5: {
      // Modal 2D Circular Membrane Percussion (Cajon, Djembe, Tabla, Congas,
      // Bombo, Taiko). Exact circular membrane Bessel zero ratios: 1.000,
      // 1.593, 2.135, 2.295, 2.653.
      //
      // shellDecay is driven by this instrument's own decayTime and body
      // size (both per-instrument, from LuthierAPI's decayTimeFactor /
      // bodyResonanceVolume). Previously every membrane instrument used the
      // same fixed 0.25/0.12/0.08/0.06s mode decays regardless of its own
      // physical profile, so e.g. a taiko and a bongo -- same DSP patch,
      // wildly different real decay times -- were indistinguishable apart
      // from pitch.
      const f0 = freqSignal;
      const shellDecay = decayTime * (0.35 + 0.5 * params.body);
      const m01 = el.mul(el.cycle(f0), el.adsr(0.0005, shellDecay, 0, 0.04 + shellDecay * 0.1, gateSignal));
      const m11 = el.mul(0.45, el.mul(el.cycle(el.mul(f0, 1.593)), el.adsr(0.0005, shellDecay * 0.5, 0, 0.02, gateSignal)));
      const m21 = el.mul(0.25, el.mul(el.cycle(el.mul(f0, 2.135)), el.adsr(0.0005, shellDecay * 0.32, 0, 0.015, gateSignal)));
      const m02 = el.mul(0.18, el.mul(el.cycle(el.mul(f0, 2.295)), el.adsr(0.0005, shellDecay * 0.24, 0, 0.01, gateSignal)));

      const isRim = voice.contactPoint ? voice.contactPoint < 0.25 : false;
      const snapNoise = el.mul(
        isRim ? 0.65 : 0.2,
        el.mul(el.highpass(1800, 1.2, el.noise()), el.adsr(0.0002, 0.012, 0, 0.005, gateSignal))
      );

      const membraneSum = el.add(m01, el.add(m11, el.add(m21, el.add(m02, snapNoise))));
      rawAudio = membraneSum;
      break;
    }
    case 17: {
      // Shaken & scraped idiophones (Shaker, Maracas, Cabasa, Guiro,
      // Guacharaca): friction/impact noise with no tonal membrane or bar to
      // excite, so this is a noise-driven patch rather than a pitched
      // resonance model -- these previously reused the membrane patch above
      // and so rang like a small tuned drum instead of rattling/scraping.
      const burst = el.mul(el.noise(), el.adsr(0.001, 0.02 + decayTime * 0.06, 0, 0.03 + decayTime * 0.08, gateSignal));
      const bodyPeak = 1100 + params.body * 2800;
      const shell = el.svf({ mode: 'bandpass' }, bodyPeak, 2.0, burst);
      const brightNoise = el.mul(0.5 + b * 0.5, el.highpass(2400 + b * 4200, 0.9, burst));
      rawAudio = el.add(el.mul(0.55, shell), el.mul(0.65, brightNoise));
      break;
    }
    case 18: {
      // Struck metal & wood idiophones (Cowbell, Agogo, Claves, Woodblock,
      // Triangle, Tambourine, hi-hats/ride, Gongs): a short inharmonic
      // clang -- closer to a small bell than to a tuned mallet bar (model
      // 8) or a drum membrane (models 4/5) -- fast decay, non-integer
      // partial ratios, mostly transient click.
      const f0 = freqSignal;
      const clangDecay = Math.max(0.04, decayTime * 0.28);
      const p1 = el.mul(el.cycle(f0), el.adsr(0.0004, clangDecay, 0, 0.02, gateSignal));
      const p2 = el.mul(0.55, el.mul(el.cycle(el.mul(f0, 2.76)), el.adsr(0.0004, clangDecay * 0.6, 0, 0.015, gateSignal)));
      const p3 = el.mul(0.32, el.mul(el.cycle(el.mul(f0, 4.18)), el.adsr(0.0004, clangDecay * 0.4, 0, 0.01, gateSignal)));
      const click = el.mul(0.4, el.mul(el.highpass(3500, 1.0, el.noise()), el.adsr(0.0002, 0.006, 0, 0.004, gateSignal)));
      rawAudio = el.add(p1, el.add(p2, el.add(p3, click)));
      break;
    }
    case 6: {
      // Bowed Strings (Violin, Cello, Viola, Erhu)
      const isPizz = action === 'pluck' || params.articulation > 0.7;
      if (isPizz) {
        // Pizzicato Waveguide
        const sr = 44100;
        const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
        const impulse = el.mul(el.noise(), el.adsr(0.0005, 0.006, 0, 0.003, gateSignal));
        const stringLoop = el.delay({ size: 44100 }, el.const({ value: delayLength }), el.const({ value: 0.98 }), impulse);
        rawAudio = el.lowpass(800 + b * 4000, 1.1, stringLoop);
      } else {
        // Stick-slip Bowed Friction Waveguide. params.body (derived from the
        // instrument's actual body/cavity volume) sets a body-resonance peak
        // so a cello reads as darker/boxier and a violin as brighter/nasal —
        // previously every bowed instrument shared the same brightness-only
        // cutoff and violin/viola/cello were nearly indistinguishable.
        const osc = el.blepsaw(freqSignal);
        const bowPressure = Math.max(0.1, params.bowPressure);
        const friction = el.tanh(el.mul(1 + bowPressure * 2.5, osc));
        const breath = el.mul(0.08 * bowPressure, el.pinknoise());
        const raw = el.add(friction, breath);
        // Bigger body (cello/double-bass-family) -> lower resonance peak;
        // smaller body (violin) -> higher, more nasal peak.
        const bodyPeak = 180 + (1 - params.body) * 900;
        const bodyRes = el.svf({ mode: 'bandpass' }, bodyPeak, 1.6, raw);
        const shaped = el.add(raw, el.mul(0.4 + params.body * 0.3, bodyRes));
        rawAudio = el.lowpass(450 + b * 4200, 1.2, shaped);
      }
      break;
    }
    case 7: {
      // Edge-blown Air-Jet Aerophones (Flute, Quena, Zampoña, Piccolo, Ocarina).
      // Breathy, no reed/lip-buzz: the resonance peaks track the *played*
      // fundamental (and its octave) rather than a fixed absolute formant, so
      // low and high notes both actually pass through the filter instead of
      // being attenuated whenever the note falls outside a hardcoded band —
      // that mismatch was the main reason this whole family rendered far
      // quieter than every other instrument in the mix.
      const breath = el.mul(0.16 * (1 - params.pressure), el.noise());
      const exciter = el.mul(0.6, el.adsr(0.018, 0.06, 0.65, 0.05, gateSignal));
      const jetInput = el.add(exciter, breath);
      const fundamental = el.svf({ mode: 'bandpass' }, freq, 2.4, jetInput);
      const overtone = el.svf({ mode: 'bandpass' }, el.mul(freqSignal, 2), 2.2, jetInput);
      const airNoise = el.mul(0.22, breath);
      const mixed = el.add(el.mul(0.9, fundamental), el.add(el.mul(0.32, overtone), airNoise));
      rawAudio = el.mul(0.9, mixed);
      break;
    }
    case 15: {
      // Brass (Trumpet, Trombone, Horn): buzzing-lip excitation — a
      // harmonic-rich pulse, not a breathy jet — driving a bore resonance.
      // Distinct from the reed and flute families both in excitation
      // mechanism and in how it responds to dynamics: brass gets noticeably
      // buzzier/brighter under a harder attack (the "blattiness" of a loud
      // brass hit), which we model by opening the bright formant with b.
      const lipBuzz = el.blepsquare(freqSignal);
      const breathNoise = el.mul(0.05 * (1 - params.pressure), el.noise());
      const buzzEnv = el.adsr(0.012, 0.05, 0.85, 0.07, gateSignal);
      const excited = el.mul(buzzEnv, el.add(lipBuzz, breathNoise));
      const bore = el.svf({ mode: 'bandpass' }, freq, 3.2, excited);
      const brightPeak = el.svf({ mode: 'bandpass' }, 1100 + b * 3600, 0.9, excited);
      const mixed = el.add(el.mul(0.8, bore), el.mul(0.45 + b * 0.55, brightPeak));
      rawAudio = el.mul(0.65, el.tanh(el.mul(1.2 + params.drive * 1.4, mixed)));
      break;
    }
    case 16: {
      // Single/double reed (Sax, Clarinet, Oboe, Bagpipe): a buzzier, more
      // nasal excitation than a flute's air jet, with a fixed-ish nasal
      // formant on top of the tracked bore resonance — this is what makes a
      // clarinet/sax read as "reedy" rather than "breathy" or "brassy".
      const reedPulse = el.blepsaw(freqSignal);
      const breathNoise = el.mul(0.10 * (1 - params.pressure), el.noise());
      const reedEnv = el.adsr(0.007, 0.05, 0.78, 0.05, gateSignal);
      const excited = el.mul(reedEnv, el.add(reedPulse, breathNoise));
      const bore = el.svf({ mode: 'bandpass' }, freq, 3.0, excited);
      const nasalFormant = el.svf({ mode: 'bandpass' }, 950 + b * 2500, 1.4, excited);
      rawAudio = el.mul(0.75, el.tanh(el.add(el.mul(0.7, bore), el.mul(0.6, nasalFormant))));
      break;
    }
    case 11: {
      // Struck-string piano: short hammer excitation feeding multiple inharmonic
      // string modes. This is deliberately not a bar/plate or plucked-string model.
      const f0 = freqSignal;
      const hammer = el.mul(el.noise(), el.adsr(0.00015, 0.004 + (1 - b) * 0.004, 0, 0.002, gateSignal));
      const s1 = el.delay({ size: 44100 }, el.const({ value: Math.max(2, Math.min(4000, 44100 / Math.max(20, freq))) }), el.const({ value: 0.994 }), hammer);
      const s2 = el.delay({ size: 44100 }, el.const({ value: Math.max(2, Math.min(4000, 44100 / Math.max(20, freq * 2.001))) }), el.const({ value: 0.989 }), hammer);
      const s3 = el.delay({ size: 44100 }, el.const({ value: Math.max(2, Math.min(4000, 44100 / Math.max(20, freq * 3.006))) }), el.const({ value: 0.982 }), hammer);
      const tone = el.add(s1, el.add(el.mul(0.45, s2), el.mul(0.2, s3)));
      rawAudio = el.lowpass(900 + b * 7000, 1.0, tone);
      break;
    }
    case 12: {
      // Formant-style voice/choir approximation: voiced source plus breath/noise
      // shaped by two vocal resonances rather than treating the voice as a synth pad.
      const source = el.blepsaw(freqSignal);
      const breath = el.mul(0.08 + 0.16 * (1 - params.pressure), el.noise());
      const vowel = el.add(
        el.mul(0.7, el.svf({ mode: 'bandpass' }, 700 + b * 450, 5.0, source)),
        el.mul(0.45, el.svf({ mode: 'bandpass' }, 1200 + b * 900, 7.0, source)),
      );
      rawAudio = el.lowpass(7000, 1.1, el.add(vowel, breath));
      break;
    }
    case 13: {
      // Sustained organ: harmonics are held by the gate instead of a struck/plucked envelope.
      const h1 = el.cycle(freqSignal);
      const h2 = el.cycle(el.mul(freqSignal, 2));
      const h3 = el.cycle(el.mul(freqSignal, 3));
      const h4 = el.cycle(el.mul(freqSignal, 4));
      rawAudio = el.mul(el.adsr(0.008, 0.02, 0.95, 0.08, gateSignal), el.add(h1, el.add(el.mul(0.45, h2), el.add(el.mul(0.2, h3), el.mul(0.1, h4)))));
      break;
    }
    case 14: {
      // Electric piano / tine: struck tone with a bright inharmonic upper partial and tremor.
      const tine = el.cycle(freqSignal);
      const upper = el.mul(0.32, el.cycle(el.mul(freqSignal, 2.01)));
      const attackNoise = el.mul(0.12, el.mul(el.noise(), el.adsr(0.0003, 0.012, 0, 0.003, gateSignal)));
      rawAudio = el.lowpass(1100 + b * 6500, 1.2, el.add(tine, el.add(upper, attackNoise)));
      break;
    }
    case 10: {
      // Dual Free Reeds & Bellows (Bandoneon, Accordion, Shō)
      const f1 = freqSignal;
      const f2 = el.mul(freqSignal, 1.0038); // Characteristic beating
      const reed1 = el.blepsaw(f1);
      const reed2 = el.blepsaw(f2);
      const bellowsBreath = el.mul(0.05, el.noise());
      const reedSum = el.add(el.mul(0.5, reed1), el.add(el.mul(0.5, reed2), bellowsBreath));
      rawAudio = el.lowpass(800 + b * 4200, 1.1, reedSum);
      break;
    }
    case 8: {
      // Modal Bar / Kalimba / Marimba / Vibraphone
      // Transverse bar inharmonic mode ratios: 1.00, 2.756, 5.404, 8.933
      const f0 = freqSignal;
      const bar0 = el.mul(el.cycle(f0), el.adsr(0.0003, decayTime * 0.4, 0, 0.01, gateSignal));
      const bar1 = el.mul(0.35, el.mul(el.cycle(el.mul(f0, 2.756)), el.adsr(0.0003, decayTime * 0.2, 0, 0.005, gateSignal)));
      const bar2 = el.mul(0.15, el.mul(el.cycle(el.mul(f0, 5.404)), el.adsr(0.0003, decayTime * 0.1, 0, 0.002, gateSignal)));

      const strike = el.mul(0.3, el.adsr(0.0002, 0.005, 0, 0.002, gateSignal));
      rawAudio = el.add(strike, el.add(bar0, el.add(bar1, bar2)));
      break;
    }
    case 9: {
      // Programmed Electronic / Acid 303 / 808
      const osc1 = el.blepsaw(freqSignal);
      const osc2 = el.blepsquare(el.mul(freqSignal, 1.004));
      const sig = el.add(el.mul(0.5, osc1), el.mul(0.5, osc2));
      const cut = 300 + b * 7500;
      const q = 1 + params.resonance * 4;
      rawAudio = el.svf({ mode: 'lowpass' }, cut, q, sig);
      break;
    }
    case 0:
    case 1:
    default: {
      // Digital Waveguide Karplus-Strong Plucked Acoustic Strings with Inharmonicity (Guitar, Tres, Oud, Sitar)
      const sr = 44100;
      const B = 0.00015; // String stiffness inharmonicity
      const delayLength = Math.max(2, Math.min(4000, sr / Math.max(20, freq)));
      const inharmonicDelay = Math.max(2, Math.min(4000, sr / Math.max(20, freq * Math.sqrt(1 + B * 4))));
      const pickPos = Math.max(0.05, Math.min(0.5, params.pluckPosition));
      const isRasgueado = action === 'abanico' || action === 'rasgueado' || params.articulation > 0.6;

      let impulse: Node;
      if (isRasgueado) {
        // Decorrelated 4-finger multi-strum roll sequence
        const b1 = el.adsr(0.0003, 0.006, 0, 0.003, gateSignal);
        const b2 = el.adsr(0.003, 0.006, 0, 0.003, gateSignal);
        const b3 = el.adsr(0.006, 0.006, 0, 0.003, gateSignal);
        impulse = el.mul(el.noise(), el.add(b1, el.add(b2, b3)));
      } else {
        impulse = el.mul(el.noise(), el.adsr(0.0005, 0.008, 0, 0.004, gateSignal));
      }

      // Dual Inharmonic Karplus-Strong Waveguide Loops
      const loop1 = el.delay({ size: 44100 }, el.const({ value: delayLength }), el.const({ value: 0.988 - (1 - b) * 0.02 }), impulse);
      const loop2 = el.delay({ size: 44100 }, el.const({ value: inharmonicDelay }), el.const({ value: 0.982 - (1 - b) * 0.02 }), impulse);
      const stringInharmonic = el.add(loop1, el.mul(0.25, loop2));

      // Acoustic Body Resonance Filter Bank (Air 100Hz, Wood 220Hz, Top Plate 380Hz)
      const airRes = el.svf({ mode: 'bandpass' }, 100, 3.0, stringInharmonic);
      const woodRes = el.svf({ mode: 'bandpass' }, 220, 2.5, stringInharmonic);
      const topRes = el.svf({ mode: 'bandpass' }, 380, 2.0, stringInharmonic);
      const bodyOut = el.add(stringInharmonic, el.add(el.mul(0.35, airRes), el.add(el.mul(0.25, woodRes), el.mul(0.15, topRes))));

      // Pluck position comb filter
      const combOffset = Math.max(1, delayLength * pickPos);
      const combSig = el.sub(bodyOut, el.delay({ size: 44100 }, el.const({ value: combOffset }), el.const({ value: 0 }), bodyOut));

      rawAudio = el.lowpass(900 + b * 6800, 1.0, combSig);
      break;
    }
  }

  const gain = el.mul(velSignal, env);
  return el.mul(gain, rawAudio);
}

/**
 * Render complete Track signal (sum of all track voices + volume/pan)
 */
export function renderTrack(
  trackId: string,
  voices: VoiceState[],
  params: TrackParams
): { left: Node; right: Node } {
  if (voices.length === 0) {
    return { left: el.const({ value: 0 }), right: el.const({ value: 0 }) };
  }

  const voiceNodes = voices.map((v, idx) => renderVoice(trackId, idx, v, params));
  const sum = voiceNodes.length === 1 ? voiceNodes[0] : el.add(...voiceNodes);
  const trackVol = el.mul(el.const({ key: `${trackId}:vol`, value: params.volume }), sum);

  const pan = Math.max(0, Math.min(1, params.pan));
  const leftGain = Math.cos(pan * Math.PI * 0.5);
  const rightGain = Math.sin(pan * Math.PI * 0.5);

  return {
    left: el.mul(el.const({ value: leftGain }), trackVol),
    right: el.mul(el.const({ value: rightGain }), trackVol),
  };
}

/**
 * Render Master Room & Mix Bus Chain
 */
export function renderMaster(
  trackSignals: { left: Node; right: Node }[],
  room: RoomParams
): { left: Node; right: Node } {
  let leftSum: Node;
  let rightSum: Node;

  if (trackSignals.length === 0) {
    leftSum = el.const({ value: 0 });
    rightSum = el.const({ value: 0 });
  } else if (trackSignals.length === 1) {
    leftSum = trackSignals[0].left;
    rightSum = trackSignals[0].right;
  } else {
    leftSum = el.add(...trackSignals.map(t => t.left));
    rightSum = el.add(...trackSignals.map(t => t.right));
  }

  const hpFreq = Math.max(10, room.highPass);
  const hpLeft = el.highpass(hpFreq, 0.707, leftSum);
  const hpRight = el.highpass(hpFreq, 0.707, rightSum);

  const space = Math.max(0, Math.min(1, room.space));
  const feedback = 0.2 + space * 0.45;
  const delayL = el.delay({ size: 44100 }, el.const({ value: 1250 }), el.const({ value: feedback }), hpLeft);
  const delayR = el.delay({ size: 44100 }, el.const({ value: 1680 }), el.const({ value: feedback }), hpRight);

  const wetAmount = space * 0.35;
  const mixL = el.add(hpLeft, el.mul(el.const({ value: wetAmount }), delayL));
  const mixR = el.add(hpRight, el.mul(el.const({ value: wetAmount }), delayR));

  const vol = Math.max(0, Math.min(2, room.volume));
  const masterL = el.tanh(el.mul(el.const({ key: 'master:vol', value: vol }), mixL));
  const masterR = el.tanh(el.mul(el.const({ key: 'master:vol', value: vol }), mixR));

  return { left: masterL, right: masterR };
}
