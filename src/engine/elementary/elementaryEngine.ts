import { el } from '@elemaudio/core';
import { getLuthierModelForInstrument, type LuthierPhysicalParameters } from '../audio/LuthierAPI';
import { seedOf, randNorm } from '../generators/groove';
type Node = any;
/**
Physical Karplus-Strong waveguide string loop.
Uses sample-accurate internal delay feedback to ensure perfect pitch mapping,
replacing block-delayed tapIn/tapOuts. Pre/post filtering simulates frequency-dependent
loss without requiring an unsupported 1-sample in-loop filter.
*/
export function createDampedStringLoop(
persistentKey: string,
delaySamples: number | Node,
feedbackGain: number | Node,
dampingCutoffHz: number | Node,
excitation: Node,
dampingQ = 0.707
): Node {
const fbGainNode = typeof feedbackGain === 'number' ? el.const({ value: feedbackGain }) : feedbackGain;
// Soften the initial burst to prevent raw metallic comb-filtering
const dampedExcite = el.lowpass(dampingCutoffHz, dampingQ, excitation);
// Sample-accurate internal feedback guarantees perfect tuning
const loop = el.delay(
{ key: persistentKey, size: 44100 },
delaySamples,
fbGainNode,
dampedExcite
);
// Post-filter shapes the body resonance and dampens the tail
return el.lowpass(dampingCutoffHz, dampingQ, loop);
}
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
actionType?: 'strike' | 'pluck' | 'bow_drag' | 'abanico' | 'rasgueado' | 'tap' | 'golpe' | 'arrastre' | 'slap' | 'mute' | 'legato' | 'slur' | 'staccato' | 'tongue' | 'accent';
technique?: string;
contactPoint?: number;
mass?: number;
frequencyHz?: number;
retriggerId?: number;
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
bendGlideMs?: number;
instrumentId?: string;
courses?: number;
bodyConstruction?: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric';
excitationType?: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer';
sympatheticStrings?: boolean;
}
export interface PluckedPreset {
courses: number;
bodyConstruction: 'wood-box' | 'gourd' | 'skin-faced' | 'board' | 'solid-electric';
excitationType: 'plectrum' | 'nail' | 'fingerpad' | 'hard-pick' | 'hammer';
sympatheticStrings?: boolean;
}
export const EXACT_PLUCKED_PRESETS: Record<string, PluckedPreset> = {
guitar: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
'spanish-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
'acoustic-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
'steel-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'hard-pick' },
'12-string-guitar': { courses: 2, bodyConstruction: 'wood-box', excitationType: 'hard-pick' },
'12-string': { courses: 2, bodyConstruction: 'wood-box', excitationType: 'hard-pick' },
'electric-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
'jazz-guitar': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
'distortion-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
'overdrive-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
'muted-guitar': { courses: 1, bodyConstruction: 'solid-electric', excitationType: 'hard-pick' },
'guitar-harmonics': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
requinto: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
tres: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
cuatro: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
cavaquinho: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
charango: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'nail' },
oud: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
bouzouki: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
harp: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
'celtic-harp': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
'orchestral-harp': { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
guitarron: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
mandolin: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'plectrum' },
banjo: { courses: 1, bodyConstruction: 'skin-faced', excitationType: 'hard-pick' },
sitar: { courses: 1, bodyConstruction: 'gourd', excitationType: 'plectrum', sympatheticStrings: true },
sarangi: { courses: 1, bodyConstruction: 'skin-faced', excitationType: 'nail', sympatheticStrings: true },
shamisen: { courses: 1, bodyConstruction: 'skin-faced', excitationType: 'plectrum' },
kora: { courses: 1, bodyConstruction: 'gourd', excitationType: 'fingerpad' },
berimbau: { courses: 1, bodyConstruction: 'gourd', excitationType: 'hard-pick' },
guqin: { courses: 1, bodyConstruction: 'board', excitationType: 'fingerpad' },
pipa: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'nail' },
guzheng: { courses: 1, bodyConstruction: 'board', excitationType: 'nail' },
jarana: { courses: 2, bodyConstruction: 'wood-box', excitationType: 'nail' },
koto: { courses: 1, bodyConstruction: 'board', excitationType: 'fingerpad' },
kalimba: { courses: 1, bodyConstruction: 'wood-box', excitationType: 'fingerpad' },
dulcimer: { courses: 2, bodyConstruction: 'board', excitationType: 'hammer' },
};
export interface FormantBand {
freq: number;
q: number;
gain: number;
}
export interface AcousticFormantProfile {
f1: FormantBand;
f2: FormantBand;
f3?: FormantBand;
tongueType: 'chiff' | 'reed-tongue' | 'lip-slap' | 'soft-puff';
tongueFreq: number;
}
export const WIND_BRASS_REED_FORMANTS: Record<string, AcousticFormantProfile> = {
flute: { f1: { freq: 800, q: 2.8, gain: 0.8 }, f2: { freq: 2200, q: 2.5, gain: 0.35 }, f3: { freq: 4500, q: 2.0, gain: 0.15 }, tongueType: 'chiff', tongueFreq: 2400 },
piccolo: { f1: { freq: 1750, q: 3.2, gain: 0.85 }, f2: { freq: 3800, q: 2.8, gain: 0.4 }, f3: { freq: 7200, q: 2.2, gain: 0.2 }, tongueType: 'chiff', tongueFreq: 4200 },
'pan-flute': { f1: { freq: 650, q: 3.5, gain: 0.9 }, f2: { freq: 1400, q: 3.0, gain: 0.3 }, f3: { freq: 3000, q: 2.2, gain: 0.15 }, tongueType: 'soft-puff', tongueFreq: 1800 },
quena: { f1: { freq: 920, q: 3.4, gain: 0.85 }, f2: { freq: 2450, q: 3.0, gain: 0.4 }, f3: { freq: 4800, q: 2.2, gain: 0.18 }, tongueType: 'chiff', tongueFreq: 2600 },
shakuhachi: { f1: { freq: 720, q: 4.0, gain: 0.9 }, f2: { freq: 1650, q: 3.2, gain: 0.35 }, f3: { freq: 3400, q: 2.5, gain: 0.2 }, tongueType: 'chiff', tongueFreq: 2100 },
xiao: { f1: { freq: 580, q: 3.0, gain: 0.8 }, f2: { freq: 1480, q: 2.6, gain: 0.3 }, f3: { freq: 3100, q: 2.0, gain: 0.12 }, tongueType: 'soft-puff', tongueFreq: 1600 },
dizi: { f1: { freq: 1150, q: 3.8, gain: 0.85 }, f2: { freq: 2750, q: 3.5, gain: 0.45 }, f3: { freq: 5400, q: 2.8, gain: 0.25 }, tongueType: 'chiff', tongueFreq: 3200 },
'tin-whistle': { f1: { freq: 1350, q: 3.2, gain: 0.85 }, f2: { freq: 3100, q: 2.8, gain: 0.4 }, f3: { freq: 5900, q: 2.2, gain: 0.2 }, tongueType: 'chiff', tongueFreq: 3600 },
'low-whistle': { f1: { freq: 520, q: 2.8, gain: 0.8 }, f2: { freq: 1280, q: 2.5, gain: 0.32 }, f3: { freq: 2750, q: 2.0, gain: 0.15 }, tongueType: 'chiff', tongueFreq: 1900 },
recorder: { f1: { freq: 980, q: 3.0, gain: 0.8 }, f2: { freq: 2150, q: 2.5, gain: 0.35 }, f3: { freq: 4300, q: 2.0, gain: 0.15 }, tongueType: 'chiff', tongueFreq: 2300 },
ocarina: { f1: { freq: 840, q: 4.5, gain: 0.95 }, f2: { freq: 1680, q: 4.0, gain: 0.25 }, tongueType: 'soft-puff', tongueFreq: 1500 },
'soprano-sax': { f1: { freq: 1050, q: 2.2, gain: 0.75 }, f2: { freq: 2700, q: 2.0, gain: 0.55 }, f3: { freq: 4800, q: 1.8, gain: 0.25 }, tongueType: 'reed-tongue', tongueFreq: 2800 },
'alto-sax': { f1: { freq: 820, q: 2.0, gain: 0.75 }, f2: { freq: 2100, q: 2.2, gain: 0.55 }, f3: { freq: 3800, q: 1.8, gain: 0.22 }, tongueType: 'reed-tongue', tongueFreq: 2200 },
'tenor-sax': { f1: { freq: 580, q: 2.0, gain: 0.75 }, f2: { freq: 1550, q: 2.2, gain: 0.55 }, f3: { freq: 3100, q: 1.6, gain: 0.2 }, tongueType: 'reed-tongue', tongueFreq: 1800 },
'bari-sax': { f1: { freq: 380, q: 1.8, gain: 0.8 }, f2: { freq: 1050, q: 2.0, gain: 0.5 }, f3: { freq: 2300, q: 1.5, gain: 0.2 }, tongueType: 'reed-tongue', tongueFreq: 1400 },
clarinet: { f1: { freq: 1450, q: 3.2, gain: 0.7 }, f2: { freq: 2950, q: 2.6, gain: 0.45 }, f3: { freq: 4900, q: 2.0, gain: 0.2 }, tongueType: 'reed-tongue', tongueFreq: 2400 },
oboe: { f1: { freq: 1100, q: 4.8, gain: 0.85 }, f2: { freq: 2850, q: 4.2, gain: 0.65 }, f3: { freq: 4300, q: 3.0, gain: 0.3 }, tongueType: 'reed-tongue', tongueFreq: 3000 },
'english-horn': { f1: { freq: 780, q: 4.2, gain: 0.8 }, f2: { freq: 2150, q: 3.6, gain: 0.55 }, f3: { freq: 3500, q: 2.6, gain: 0.25 }, tongueType: 'reed-tongue', tongueFreq: 2200 },
bassoon: { f1: { freq: 440, q: 3.8, gain: 0.85 }, f2: { freq: 1120, q: 3.2, gain: 0.5 }, f3: { freq: 2250, q: 2.4, gain: 0.22 }, tongueType: 'reed-tongue', tongueFreq: 1500 },
bagpipes: { f1: { freq: 1250, q: 5.2, gain: 0.85 }, f2: { freq: 2650, q: 4.5, gain: 0.6 }, f3: { freq: 4600, q: 3.5, gain: 0.35 }, tongueType: 'reed-tongue', tongueFreq: 3100 },
'uilleann-pipes': { f1: { freq: 1180, q: 4.8, gain: 0.85 }, f2: { freq: 2500, q: 4.2, gain: 0.55 }, f3: { freq: 4400, q: 3.2, gain: 0.3 }, tongueType: 'reed-tongue', tongueFreq: 2900 },
hichiriki: { f1: { freq: 1350, q: 5.4, gain: 0.9 }, f2: { freq: 2820, q: 4.8, gain: 0.65 }, f3: { freq: 4950, q: 3.8, gain: 0.35 }, tongueType: 'reed-tongue', tongueFreq: 3200 },
harmonica: { f1: { freq: 1550, q: 2.8, gain: 0.75 }, f2: { freq: 3350, q: 2.2, gain: 0.45 }, tongueType: 'reed-tongue', tongueFreq: 2500 },
trumpet: { f1: { freq: 1200, q: 2.0, gain: 0.75 }, f2: { freq: 2600, q: 2.4, gain: 0.5 }, f3: { freq: 4600, q: 2.0, gain: 0.25 }, tongueType: 'lip-slap', tongueFreq: 2400 },
'muted-trumpet': { f1: { freq: 1850, q: 4.5, gain: 0.85 }, f2: { freq: 3750, q: 3.8, gain: 0.6 }, f3: { freq: 6200, q: 3.0, gain: 0.35 }, tongueType: 'lip-slap', tongueFreq: 3500 },
trombone: { f1: { freq: 620, q: 1.8, gain: 0.8 }, f2: { freq: 1480, q: 2.2, gain: 0.5 }, f3: { freq: 2750, q: 1.8, gain: 0.25 }, tongueType: 'lip-slap', tongueFreq: 1700 },
'french-horn': { f1: { freq: 470, q: 2.4, gain: 0.85 }, f2: { freq: 1080, q: 2.6, gain: 0.45 }, f3: { freq: 2050, q: 2.0, gain: 0.2 }, tongueType: 'lip-slap', tongueFreq: 1200 },
tuba: { f1: { freq: 250, q: 2.2, gain: 0.9 }, f2: { freq: 630, q: 2.4, gain: 0.45 }, f3: { freq: 1250, q: 1.8, gain: 0.2 }, tongueType: 'lip-slap', tongueFreq: 800 },
'horn-section': { f1: { freq: 850, q: 1.6, gain: 0.8 }, f2: { freq: 1950, q: 1.9, gain: 0.5 }, f3: { freq: 3600, q: 1.7, gain: 0.25 }, tongueType: 'lip-slap', tongueFreq: 2000 },
brass: { f1: { freq: 850, q: 1.6, gain: 0.8 }, f2: { freq: 1950, q: 1.9, gain: 0.5 }, f3: { freq: 3600, q: 1.7, gain: 0.25 }, tongueType: 'lip-slap', tongueFreq: 2000 },
};
export function getFormantProfileForInstrument(instrumentId: string, model: number): AcousticFormantProfile {
const idLower = instrumentId.toLowerCase();
const exact = WIND_BRASS_REED_FORMANTS[idLower];
if (exact) return exact;
if (model === 7) return WIND_BRASS_REED_FORMANTS['flute'];
if (model === 15) return WIND_BRASS_REED_FORMANTS['brass'];
if (model === 16) return WIND_BRASS_REED_FORMANTS['alto-sax'];
return WIND_BRASS_REED_FORMANTS['flute'];
}
export interface BowedResonanceProfile {
bodyFreq: number;
bodyQ: number;
bodyGain: number;
bridgeHillFreq: number;
bridgeHillQ: number;
bridgeHillGain: number;
}
export const BOWED_RESONANCES: Record<string, BowedResonanceProfile> = {
violin: { bodyFreq: 460, bodyQ: 2.2, bodyGain: 0.45, bridgeHillFreq: 2800, bridgeHillQ: 2.8, bridgeHillGain: 0.40 },
fiddle: { bodyFreq: 480, bodyQ: 2.0, bodyGain: 0.45, bridgeHillFreq: 3000, bridgeHillQ: 2.6, bridgeHillGain: 0.45 },
viola: { bodyFreq: 340, bodyQ: 2.2, bodyGain: 0.50, bridgeHillFreq: 2000, bridgeHillQ: 2.5, bridgeHillGain: 0.35 },
cello: { bodyFreq: 180, bodyQ: 2.5, bodyGain: 0.55, bridgeHillFreq: 1350, bridgeHillQ: 2.2, bridgeHillGain: 0.30 },
contrabajo: { bodyFreq: 95, bodyQ: 2.8, bodyGain: 0.60, bridgeHillFreq: 850, bridgeHillQ: 2.0, bridgeHillGain: 0.25 },
'double-bass': { bodyFreq: 95, bodyQ: 2.8, bodyGain: 0.60, bridgeHillFreq: 850, bridgeHillQ: 2.0, bridgeHillGain: 0.25 },
erhu: { bodyFreq: 520, bodyQ: 3.2, bodyGain: 0.40, bridgeHillFreq: 2700, bridgeHillQ: 3.0, bridgeHillGain: 0.50 },
jinghu: { bodyFreq: 680, bodyQ: 3.5, bodyGain: 0.35, bridgeHillFreq: 3300, bridgeHillQ: 3.2, bridgeHillGain: 0.55 },
strings: { bodyFreq: 380, bodyQ: 1.8, bodyGain: 0.45, bridgeHillFreq: 2400, bridgeHillQ: 2.0, bridgeHillGain: 0.35 },
'slow-strings': { bodyFreq: 350, bodyQ: 1.6, bodyGain: 0.45, bridgeHillFreq: 2200, bridgeHillQ: 1.8, bridgeHillGain: 0.30 },
'tremolo-strings': { bodyFreq: 400, bodyQ: 1.8, bodyGain: 0.45, bridgeHillFreq: 2500, bridgeHillQ: 2.0, bridgeHillGain: 0.35 },
};
export function getBowedResonanceProfile(instrumentId: string, bodyParam: number): BowedResonanceProfile {
const idLower = instrumentId.toLowerCase();
const exact = BOWED_RESONANCES[idLower];
if (exact) return exact;
const bodyFreq = 100 + (1 - bodyParam) * 450;
const bridgeHillFreq = 900 + (1 - bodyParam) * 2200;
return {
bodyFreq,
bodyQ: 2.2,
bodyGain: 0.45,
bridgeHillFreq,
bridgeHillQ: 2.5,
bridgeHillGain: 0.35,
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
const EXACT_MODELS: Record<string, number> = {
clavinet: 19,
harpsichord: 20,
'electric-guitar': 21,
'jazz-guitar': 22,
'muted-guitar': 23,
'distortion-guitar': 24,
'overdrive-guitar': 25,
'guitar-harmonics': 26,
};
const exactModel = EXACT_MODELS[id];
if (exactModel !== undefined) return exactModel;
if (/guitar|tres|cuatro|requinto|charango|vihuela|sitar|oud|kora|berimbau|cavaquinho|harp|mandolin|banjo|shamisen|guqin|pipa|guzheng|jarana|koto|dulcimer|bouzouki|sarangi/.test(id)) {
return 0;
}
if (/bass|bajo|contrabajo|tuba/.test(id)) return 3;
if (/steel-drums|steelpan|steel-pan|marimba|vibes|vibraphone|xylophone|tubular-bells|balafon|glockenspiel|celeste|music-box|crystal/.test(id)) return 8;
if (/cajon|djembe|conga|bongo|timbal|tambor(?!ine)|drum|kick|snare|perc|tabla|bombo|pandeiro|bata|surdo|zabumba|bodhran|darbuka|taiko|paigu|brush-kit/.test(id)) return 4;
if (/shaker|maraca|guiro|cabasa|guacharaca|quijada/.test(id)) return 17;
if (/cowbell|agogo|claves|woodblock|triangle|tambourine|castanets|palmas|\bride\b|kane|zapateado|gongs|bones|\bhats\b/.test(id)) return 18;
if (/violin|cello|viola|fiddle|erhu|jinghu|string/.test(id)) return 6;
if (/trumpet|trombone|\bbrass\b|\bhorn\b|horn-section|cornet|flugelhorn|tuba/.test(id)) return 15;
if (/sax|clarinet|oboe|bagpipe|uilleann|shawm|dulzaina|bombarde/.test(id)) return 16;
if (/flute|quena|zampoña|tin-whistle|low-whistle|piccolo|shakuhachi|xiao|dizi|ryuteki|hichiriki|recorder|ocarina/.test(id)) return 7;
if (/accordion|bandoneon|harmonica|shō|sho|concertina|melodica/.test(id)) return 10;
if (/grand-piano|upright-piano|piano|player-piano/.test(id)) return 11;
if (/organ|hammond|church-organ|pipe-organ/.test(id)) return 13;
if (/voice|vocal|choir|soprano|alto|tenor|baritone|chorus/.test(id)) return 12;
if (/rhodes|wurlitzer|electric-piano|fm-ep|epiano/.test(id)) return 14;
if (/piano|keys|kalimba/.test(id)) return 8;
if (/synth|lead|pad|acid|808|909|noise-sweep|dub-echo|turntable/.test(id)) return 9;
return 0;
}
export function normalizedParams(instrumentId: string, luthier: LuthierPhysicalParameters, modelNum: number) {
const electric = /electric|distortion|synth|acid|clavinet|sub-bass|rhodes|fm-ep/.test(instrumentId.toLowerCase());
const b = Math.max(0, Math.min(1, 0.42 + luthier.harmonicRichness * 0.48 + (electric ? 0.1 : 0)));
const d = Math.max(0.1, Math.min(8, luthier.decayTimeSec ?? luthier.decayTimeFactor));
const dr = Math.max(0, Math.min(1, electric ? 0.15 + luthier.harmonicRichness * 0.55 : luthier.harmonicRichness * 0.08));
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
export const GAIN_BY_MODEL: Record<number, number> = {
0: 4.282,
2: 0.551,
3: 1.000,
4: 1.988,
5: 1.988,
6: 6.557,
7: 18.558,
8: 1.041,
9: 0.390,
10: 0.544,
11: 3.540,
12: 0.375,
13: 0.219,
14: 0.330,
15: 0.550,
16: 0.669,
17: 20.309,
18: 6.402,
19: 9.706,
20: 1.997,
21: 0.551,
22: 1.813,
23: 7.116,
24: 0.270,
25: 0.395,
26: 0.478,
};
export const GAIN_BY_INSTRUMENT: Partial<Record<string, number>> = {
'congas': 1.988,
'bongos': 4.433,
'zabumba': 0.830,
'bombo': 0.632,
'bata': 1.474,
'cajon': 1.967,
'timbales': 2.125,
'surdo': 0.609,
'pandeiro': 3.250,
'tamborim': 6.115,
'darbuka': 2.468,
'tabla': 1.470,
'log-drum': 1.275,
'cumbia-drum': 0.980,
'bombo-andino': 0.646,
'tambora': 0.914,
'tambor-alegre': 1.387,
'bombo-leguero': 0.614,
'paigu': 1.817,
'taiko': 0.486,
'drums': 0.980,
'brush-kit': 1.640,
'kick': 1.705,
'snare': 5.899,
'shaker': 20.309,
'maracas': 21.906,
'cabasa': 23.629,
'guiro': 18.716,
'guacharaca': 17.749,
'tambourine': 6.986,
'castanets': 26.921,
'bones': 24.603,
'woodblock': 21.768,
'triangle': 1.278,
'palmas': 23.900,
'zapateado': 22.173,
'ride': 2.826,
'hats': 23.440,
'cowbell': 6.402,
'agogo': 4.642,
'claves': 19.691,
'kane': 0.944,
'gongs': 0.646,
'guitar': 4.282,
'spanish-guitar': 3.013,
'acoustic-guitar': 4.053,
'steel-guitar': 2.971,
'12-string-guitar': 3.384,
'requinto': 3.916,
'jarana': 3.757,
'guqin': 4.128,
'pipa': 3.248,
'guzheng': 3.147,
'tres': 4.396,
'cuatro': 3.172,
'cavaquinho': 4.328,
'charango': 3.916,
'oud': 3.979,
'bouzouki': 4.173,
'guitarron': 3.577,
'mandolin': 4.662,
'banjo': 3.029,
'vihuela': 4.781,
'sitar': 2.575,
'shamisen': 3.613,
'kora': 2.789,
'berimbau': 3.316,
'koto': 3.289,
'harp': 3.356,
'celtic-harp': 3.467,
'orchestral-harp': 3.338,
'dulcimer': 5.584,
'electric-guitar': 0.551,
'jazz-guitar': 1.813,
'distortion-guitar': 0.270,
'overdrive-guitar': 0.395,
'muted-guitar': 7.116,
'guitar-harmonics': 0.478,
'upright-bass': 7.372,
'double-bass': 0.727,
'acoustic-bass': 7.429,
'sub-bass': 0.436,
'piano': 3.540,
'clavinet': 9.706,
'harpsichord': 1.997,
'rhodes': 0.330,
'fm-ep': 0.326,
'organ': 0.219,
'rock-organ': 0.224,
'vibraphone': 0.664,
'music-box': 1.357,
'xylophone': 2.853,
'tubular-bells': 0.650,
'violin': 6.557,
'viola': 6.310,
'cello': 5.137,
'strings': 4.912,
'slow-strings': 4.989,
'tremolo-strings': 4.967,
'pizz-strings': 5.496,
'fiddle': 6.667,
'erhu': 6.768,
'jinghu': 7.468,
'bandoneon': 0.565,
'accordion': 0.544,
'harmonica': 0.707,
'shō': 0.638,
'melodica': 0.697,
'concertina': 0.630,
'flute': 18.558,
'tin-whistle': 14.570,
'low-whistle': 20.402,
'piccolo': 14.420,
'recorder': 13.982,
'ocarina': 21.239,
'quena': 19.438,
'pan-flute': 19.777,
'shakuhachi': 18.535,
'xiao': 20.006,
'dizi': 19.215,
'ryuteki': 20.194,
'bagpipes': 0.639,
'uilleann-pipes': 0.707,
'clarinet': 0.750,
'soprano-sax': 0.757,
'alto-sax': 0.723,
'tenor-sax': 0.669,
'bari-sax': 0.626,
'oboe': 0.778,
'english-horn': 0.537,
'hichiriki': 16.367,
'trumpet': 0.550,
'muted-trumpet': 0.571,
'trombone': 0.501,
'french-horn': 0.416,
'horn-section': 0.467,
'brass': 0.478,
'synth': 0.390,
'acid-303': 0.446,
'voice': 0.375,
'choir': 0.331,
'backing-vocals': 0.354,
'crystal': 0.663,
'synth-brass': 0.401,
'noise-sweep': 0.300,
'dub-echo': 0.248,
'turntable': 0.471,
'saw-lead': 0.391,
'square-lead': 0.404,
'warm-pad': 0.233,
'synth-strings': 0.255,
'polysynth': 0.282,
'halo-pad': 0.236,
'sweep-pad': 0.237,
};
export function makeupGainFor(modelNum: number, instrumentId?: string): number {
if (instrumentId) {
const override = GAIN_BY_INSTRUMENT[instrumentId.toLowerCase()];
if (typeof override === 'number') {
return override;
}
}
return GAIN_BY_MODEL[Math.round(modelNum)] ?? 1;
}
export function defaultTrackParams(instrumentId = '', luthier?: LuthierPhysicalParameters, modelNum = 0): TrackParams {
const l = luthier ?? getLuthierModelForInstrument(instrumentId);
const norm = normalizedParams(instrumentId, l, modelNum);
const isElectronic = /synth|808|909|acid|sub-bass|kizomba|tarraxo|trap|house/.test(instrumentId.toLowerCase());
const effectiveModelForGain = isElectronic ? 9 : modelNum;
// Volume un-clamped from upper boundaries to support massive hybrid textures
const volume = Math.max(0.01, 0.8 * makeupGainFor(effectiveModelForGain, instrumentId));
const idLower = instrumentId.toLowerCase();
const preset = EXACT_PLUCKED_PRESETS[idLower];
const courses = l?.courses ?? preset?.courses ?? 1;
const bodyConstruction = l?.bodyConstruction ?? preset?.bodyConstruction ?? 'wood-box';
const excitationType = l?.excitationType ?? preset?.excitationType ?? 'fingerpad';
const sympatheticStrings = l?.sympatheticStrings ?? preset?.sympatheticStrings ?? false;
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
bendGlideMs: 15,
instrumentId,
courses,
bodyConstruction,
excitationType,
sympatheticStrings,
};
}
export function renderVoice(
trackId: string,
voiceIndex: number,
voice: VoiceState,
params: TrackParams
): Node {
const retrig = voice.retriggerId ?? 0;
// Dynamic keys for Envelopes to guarantee re-triggers
const k = `${trackId}:v${voiceIndex}:${retrig}`;
// Persistent keys for delay buffers so tails aren't wiped
const pk = `${trackId}:v${voiceIndex}`;
const rawFreq = (voice as VoiceState & { frequencyHz?: number }).frequencyHz ?? midiToFreq(voice.note || 60);
const freq = Math.max(20, isNaN(rawFreq) ? 440 : rawFreq);
const gateSignal = el.const({ key: `${k}:gate`, value: voice.gate });
const velSignal = el.const({ key: `${k}:vel`, value: voice.velocity * (1 - 0.58 * params.mute) });
const glideSec = Math.max(0.005, Math.min(0.2, (params.bendGlideMs ?? 15) / 1000));
const freqSignal = el.smooth(el.tau2pole(glideSec), el.const({ key: `${k}:freq`, value: freq }));
const safeFreqSignal = el.max(el.const({ value: 20 }), freqSignal);
const velBoost = 0.55 + 0.6 * Math.max(0, Math.min(1, voice.velocity));
const b = Math.max(0, Math.min(1, params.brightness * velBoost));
const decayTime = Math.max(0.05, params.decay);
const model = params.performanceMode === 'programmed-electronic' ? 9 : Math.round(params.model);
const action = voice.actionType ?? (params.bodyTap > 0.5 ? 'golpe' : 'pluck');
const isMuted = action === 'mute' || params.mute > 0.4;
const attack = 0.0008 + (1 - b) * 0.01;
const release = isMuted ? 0.012 : 0.03 + decayTime * 0.25;
const sustain = isMuted ? 0.05 : 0.35 + 0.3 * params.body;
const env = el.adsr(attack, decayTime * (isMuted ? 0.1 : 0.3), sustain, release, gateSignal);
let rawAudio: Node;
if (action === 'golpe' || action === 'tap') {
const bodyPunch = el.mul(el.cycle(110), el.adsr(0.0005, 0.02, 0, 0.01, gateSignal));
const woodClick = el.mul(el.highpass(1400, 1.2, el.noise()), el.adsr(0.0002, 0.008, 0, 0.004, gateSignal));
rawAudio = el.add(el.mul(0.75, bodyPunch), el.mul(0.25, woodClick));
} else switch (model) {
case 2: {
const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
const pickPos = Math.max(0.05, Math.min(0.5, params.pluckPosition));

const impulse = el.mul(el.noise(), el.adsr(0.0005, 0.008, 0, 0.003, gateSignal));
  const dampingCutoff = Math.min(19000, 1800 + b * 8500);
  const fbGain = 0.985 - (1 - b) * 0.015;
  const stringLoop = createDampedStringLoop(`${pk}:eg`, delayTimeSignal, fbGain, dampingCutoff, impulse);

  const combOffset = el.max(el.const({ value: 1 }), el.mul(delayTimeSignal, el.const({ value: pickPos })));
  const combSig = el.sub(stringLoop, el.delay({ key: `${pk}:comb`, size: 44100 }, combOffset, el.const({ value: 0 }), stringLoop));

  const driven = el.tanh(el.mul(el.const({ value: 1 + params.drive * 5 }), combSig));
  rawAudio = el.lowpass(Math.min(19000, 1200 + b * 5500), 1.2, driven);
  break;
}
case 19: {
  const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const impulse = el.mul(el.noise(), el.adsr(0.00025, 0.004, 0, 0.002, gateSignal));
  const clavCutoff = Math.min(19000, 2200 + b * 7200);
  const fbGain = 0.978 - (1 - b) * 0.012;
  const stringLoop = createDampedStringLoop(`${pk}:clav`, delayTimeSignal, fbGain, clavCutoff, impulse);
  const pickup = el.svf({ mode: 'bandpass' }, Math.min(19000, 700 + b * 1800), 1.1, stringLoop);
  const click = el.mul(0.18, el.mul(el.highpass(Math.min(19000, 2200), 1.0, el.noise()), el.adsr(0.0001, 0.003, 0, 0.0015, gateSignal)));
  rawAudio = el.lowpass(Math.min(19000, 1200 + b * 4200), 1.0, el.add(pickup, click));
  break;
}
case 20: {
  const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const detunedFreqSignal = el.max(el.const({ value: 20 }), el.mul(freqSignal, el.const({ value: 1.003 })));
  const detunedDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), detunedFreqSignal)));
  const pluck = el.mul(el.noise(), el.adsr(0.0001, 0.0025, 0, 0.0015, gateSignal));
  const harpsiCutoff = Math.min(19000, 2500 + b * 9000);
  const string1 = createDampedStringLoop(`${pk}:h1`, delayTimeSignal, 0.989 - (1 - b) * 0.008, harpsiCutoff, pluck);
  const string2 = createDampedStringLoop(`${pk}:h2`, detunedDelaySignal, 0.986 - (1 - b) * 0.008, harpsiCutoff * 0.98, pluck);
  const upper = el.mul(0.18, el.cycle(el.mul(freqSignal, 2.0)));
  const tone = el.add(string1, el.add(el.mul(0.75, string2), upper));
  rawAudio = el.lowpass(Math.min(19000, 1400 + b * 7600), 1.0, tone);
  break;
}
case 21:
case 22:
case 23:
case 24:
case 25:
case 26: {
  const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const isJazz = model === 22;
  const isMutedGuitar = model === 23;
  const isDistortion = model === 24;
  const isOverdrive = model === 25;
  const isHarmonics = model === 26;

  const damping = isMutedGuitar ? 0.93 : isJazz ? 0.975 : isDistortion ? 0.992 : isOverdrive ? 0.989 : 0.986;
  const attackTime = isMutedGuitar ? 0.00035 : 0.0007;
  const impulse = el.mul(el.noise(), el.adsr(attackTime, isMutedGuitar ? 0.004 : 0.008, 0, 0.003, gateSignal));
  const loopCutoff = Math.min(19000, isJazz ? 1500 + b * 3500 : isMutedGuitar ? 1300 + b * 3000 : 2200 + b * 8500);
  
  const stringLoop = createDampedStringLoop(`${pk}:egf`, delayTimeSignal, damping, loopCutoff, impulse);

  const pickPos = Math.max(0.04, Math.min(0.5, isJazz ? 0.34 : params.pluckPosition));
  const combOffset = el.max(el.const({ value: 1 }), el.mul(delayTimeSignal, el.const({ value: pickPos })));
  const combSig = el.sub(
    stringLoop,
    el.delay({ key: `${pk}:comb`, size: 44100 }, combOffset, el.const({ value: 0 }), stringLoop)
  );

  const pickupCut = Math.min(19000, isJazz ? 2200 : isMutedGuitar ? 1700 : isDistortion ? 4200 : isOverdrive ? 5000 : 6000);
  const driveAmount = isDistortion ? 7.5 : isOverdrive ? 4.0 : isHarmonics ? 1.6 : 1.2 + params.drive * 2.0;

  const driven = el.tanh(el.mul(el.const({ value: driveAmount }), combSig));
  const pickup = el.lowpass(Math.min(19000, pickupCut + b * (isJazz ? 900 : 2200)), 1.1, driven);

  const harmonic = isHarmonics ? el.mul(0.65, el.cycle(el.mul(freqSignal, 2.0))) : 0;
  const mutedBody = isMutedGuitar ? el.mul(0.45, el.highpass(900, 1.0, pickup)) : pickup;

  rawAudio = el.add(mutedBody, el.add(harmonic, el.mul(isDistortion ? 0.85 : isOverdrive ? 0.9 : isJazz ? 0.82 : 1.0, pickup)));
  break;
}
case 3: {
  const isArco = action === 'bow_drag' || params.bowPressure > 0.6;
  if (isArco) {
    const osc = el.blepsaw(freqSignal);
    const frictionNoise = el.mul(params.bowPressure * 0.25, el.pinknoise());
    const bowSig = el.add(osc, frictionNoise);
    rawAudio = el.svf({ mode: 'lowpass' }, Math.min(19000, 220 + b * 2000), 1.4, bowSig);
  } else {
    const idLower = (params.instrumentId ?? '').toLowerCase();
    const isUpright = /upright|acoustic-bass|contrabajo|guitarron/.test(idLower);
    const isSlap = action === 'slap' || /slap/.test(idLower);
    const isPick = /pick/.test(idLower);
    const isFretless = /fretless/.test(idLower);

    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));

    let impulse: Node;
    if (isUpright) {
      impulse = el.mul(el.lowpass(Math.min(19000, 1200), 0.8, el.noise()), el.adsr(0.0015, 0.020, 0, 0.008, gateSignal));
    } else if (isPick) {
      impulse = el.mul(el.svf({ mode: 'bandpass' }, Math.min(19000, 2400), 1.4, el.noise()), el.adsr(0.0004, 0.008, 0, 0.003, gateSignal));
    } else if (isSlap) {
      impulse = el.mul(el.highpass(Math.min(19000, 1800), 1.2, el.noise()), el.adsr(0.0003, 0.006, 0, 0.002, gateSignal));
    } else {
      impulse = el.mul(el.noise(), el.adsr(0.001, 0.015, 0, 0.005, gateSignal));
    }

    const slapClick = isSlap ? el.mul(0.5, el.adsr(0.0002, 0.004, 0, 0.002, gateSignal)) : 0;
    const damping = isUpright ? 0.982 : 0.99;
    const bassCutoff = Math.min(19000, isUpright ? 850 + b * 2400 : 1200 + b * 4800);
    const stringLoop = createDampedStringLoop(`${pk}:bass`, delayTimeSignal, damping, bassCutoff, el.add(impulse, slapClick));

    if (isUpright) {
      const air = el.svf({ mode: 'bandpass' }, 60, 3.5, stringLoop);
      const wood = el.svf({ mode: 'bandpass' }, 110, 2.5, stringLoop);
      const acousticBody = el.add(stringLoop, el.add(el.mul(0.4, air), el.mul(0.3, wood)));
      rawAudio = el.svf({ mode: 'lowpass' }, Math.min(19000, 140 + b * 1800), 1.1, acousticBody);
    } else if (isFretless) {
      const subPhasor = el.syncphasor(freqSignal, gateSignal);
      const subSine = el.mul(0.35, el.sin(el.mul(2 * Math.PI, subPhasor)));
      const mixed = el.add(stringLoop, subSine);
      const mwah = el.svf({ mode: 'bandpass' }, 750, 2.2, mixed);
      const lp = el.svf({ mode: 'lowpass' }, Math.min(19000, 180 + b * 2000), 1.2, mixed);
      rawAudio = el.add(lp, el.mul(0.35, mwah));
    } else if (isSlap) {
      const subPhasor = el.syncphasor(freqSignal, gateSignal);
      const subSine = el.mul(0.45, el.sin(el.mul(2 * Math.PI, subPhasor)));
      const mixed = el.add(stringLoop, subSine);
      const snap = el.svf({ mode: 'bandpass' }, Math.min(19000, 3200), 1.8, mixed);
      const bottom = el.svf({ mode: 'lowpass' }, Math.min(19000, 160 + b * 2200), 1.3, mixed);
      rawAudio = el.add(bottom, el.mul(0.4, snap));
    } else {
      const subPhasor = el.syncphasor(freqSignal, gateSignal);
      const subSine = el.mul(0.4, el.sin(el.mul(2 * Math.PI, subPhasor)));
      const mixed = el.add(stringLoop, subSine);
      rawAudio = el.svf({ mode: 'lowpass' }, Math.min(19000, 120 + b * 2200), 1 + params.drive * 1.5, mixed);
    }
  }
  break;
}
case 4:
case 5: {
  const hitSeed = seedOf(voice.id || 'drum', voice.note, retrig);
  const detuneSemitones = (randNorm(hitSeed ^ 0x1234) * 3.5) / 100;
  const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

  const v01 = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(hitSeed ^ 0x1111) * 0.08));
  const v11 = Math.max(0.78, Math.min(1.22, 1.0 + randNorm(hitSeed ^ 0x2222) * 0.10));
  const v21 = Math.max(0.72, Math.min(1.28, 1.0 + randNorm(hitSeed ^ 0x3333) * 0.12));
  const v02 = Math.max(0.70, Math.min(1.30, 1.0 + randNorm(hitSeed ^ 0x4444) * 0.12));

  const shellDecay = decayTime * (0.35 + 0.5 * params.body);
  const pitchEnvDepth = 0.38 + b * 0.22;
  const pitchEnv = el.adsr(0.0002, 0.022 + params.body * 0.015, 0, 0.008, gateSignal);
  const dynamicF0 = el.mul(f0, el.add(1.0, el.mul(pitchEnvDepth, pitchEnv)));

  const m01 = el.mul(v01, el.mul(el.cycle(dynamicF0), el.adsr(0.0005, shellDecay, 0, 0.04 + shellDecay * 0.1, gateSignal)));
  const m11 = el.mul(0.45 * v11, el.mul(el.cycle(el.mul(dynamicF0, 1.593)), el.adsr(0.0005, shellDecay * 0.5, 0, 0.02, gateSignal)));
  const m21 = el.mul(0.25 * v21, el.mul(el.cycle(el.mul(dynamicF0, 2.135)), el.adsr(0.0005, shellDecay * 0.32, 0, 0.015, gateSignal)));
  const m02 = el.mul(0.18 * v02, el.mul(el.cycle(el.mul(dynamicF0, 2.295)), el.adsr(0.0005, shellDecay * 0.24, 0, 0.01, gateSignal)));

  const instId = (params.instrumentId ?? '').toLowerCase();
  const isHighModeRich = b > 0.52 || /timbal|darbuka|tabla|snare|tamborim|pandeiro|bata|cuica/.test(instId);
  let highModes: Node = el.const({ value: 0 });
  if (isHighModeRich) {
    const v12 = Math.max(0.65, Math.min(1.35, 1.0 + randNorm(hitSeed ^ 0x5555) * 0.15));
    const v22 = Math.max(0.60, Math.min(1.40, 1.0 + randNorm(hitSeed ^ 0x6666) * 0.15));
    const m12 = el.mul(0.12 * v12, el.mul(el.cycle(el.mul(dynamicF0, 2.653)), el.adsr(0.0004, shellDecay * 0.18, 0, 0.008, gateSignal)));
    const m22 = el.mul(0.08 * v22, el.mul(el.cycle(el.mul(dynamicF0, 2.917)), el.adsr(0.0004, shellDecay * 0.14, 0, 0.006, gateSignal)));
    highModes = el.add(m12, m22);
  }

  const isRim = voice.contactPoint ? voice.contactPoint < 0.25 : false;
  const noiseTilt = 1800 + randNorm(hitSeed ^ 0x7777) * 250;
  const snapNoise = el.mul(
    isRim ? 0.65 : 0.2,
    el.mul(el.highpass(noiseTilt, 1.2, el.noise()), el.adsr(0.0002, 0.012, 0, 0.005, gateSignal))
  );

  const membraneSum = el.add(el.add(m01, el.add(m11, el.add(m21, m02))), el.add(highModes, snapNoise));

  const shellFreq = el.mul(f0, 0.58 + params.body * 0.15);
  const shellCavityDecay = shellDecay * (0.8 + params.body * 0.5);
  const shellBurst = el.mul(0.22, el.mul(el.svf({ mode: 'bandpass' }, shellFreq, 2.2, membraneSum), el.adsr(0.001, shellCavityDecay, 0, 0.05, gateSignal)));

  rawAudio = el.add(membraneSum, shellBurst);
  break;
}
case 17: {
  const hitSeed = seedOf(voice.id || 'shaker', voice.note, retrig);
  const durDev = Math.max(0.8, Math.min(1.25, 1.0 + randNorm(hitSeed ^ 0x8888) * 0.12));
  const freqDev = randNorm(hitSeed ^ 0x9999) * 200;

  const burst = el.mul(el.noise(), el.adsr(0.001, (0.02 + decayTime * 0.06) * durDev, 0, 0.03 + decayTime * 0.08, gateSignal));
  const bodyPeak = 1100 + params.body * 2800 + freqDev;
  const shell = el.svf({ mode: 'bandpass' }, bodyPeak, 2.0, burst);
  const brightNoise = el.mul(0.5 + b * 0.5, el.highpass(2400 + b * 4200 + freqDev, 0.9, burst));
  rawAudio = el.add(el.mul(0.55, shell), el.mul(0.65, brightNoise));
  break;
}
case 18: {
  const hitSeed = seedOf(voice.id || 'clang', voice.note, retrig);
  const detuneSemitones = (randNorm(hitSeed ^ 0xaaaa) * 4.0) / 100;
  const f0 = el.mul(freqSignal, Math.pow(2, detuneSemitones / 12));

  const v1 = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(hitSeed ^ 0xbbbb) * 0.08));
  const v2 = Math.max(0.78, Math.min(1.22, 1.0 + randNorm(hitSeed ^ 0xcccc) * 0.10));
  const v3 = Math.max(0.75, Math.min(1.25, 1.0 + randNorm(hitSeed ^ 0xdddd) * 0.12));

  const clangDecay = Math.max(0.04, decayTime * 0.28);
  const p1 = el.mul(v1, el.mul(el.cycle(f0), el.adsr(0.0004, clangDecay, 0, 0.02, gateSignal)));
  const p2 = el.mul(0.55 * v2, el.mul(el.cycle(el.mul(f0, 2.76)), el.adsr(0.0004, clangDecay * 0.6, 0, 0.015, gateSignal)));
  const p3 = el.mul(0.32 * v3, el.mul(el.cycle(el.mul(f0, 4.18)), el.adsr(0.0004, clangDecay * 0.4, 0, 0.01, gateSignal)));
  const clickCutoff = 3500 + randNorm(hitSeed ^ 0xeeee) * 300;
  const click = el.mul(0.4, el.mul(el.highpass(clickCutoff, 1.0, el.noise()), el.adsr(0.0002, 0.006, 0, 0.004, gateSignal)));
  rawAudio = el.add(p1, el.add(p2, el.add(p3, click)));
  break;
}
case 6: {
  const isPizz = action === 'pluck' || params.articulation > 0.7;
  if (isPizz) {
    const delayTimeSignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
    const impulse = el.mul(el.noise(), el.adsr(0.0005, 0.006, 0, 0.003, gateSignal));
    const pizzCutoff = Math.min(19000, 1000 + b * 5200);
    const stringLoop = createDampedStringLoop(`${pk}:pizz`, delayTimeSignal, 0.982 - (1 - b) * 0.015, pizzCutoff, impulse);
    rawAudio = el.lowpass(Math.min(19000, 800 + b * 4000), 1.1, stringLoop);
  } else {
    const noteSeed = seedOf(voice.id || 'voice', voice.note, retrig);
    const bowDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed ^ 0x5a5a) * 0.10));

    const osc = el.blepsaw(freqSignal);
    const bowPressure = Math.max(0.1, params.bowPressure * bowDev);
    const friction = el.tanh(el.mul(1 + bowPressure * 2.5, osc));
    const breath = el.mul(0.08 * bowPressure, el.pinknoise());
    const raw = el.add(friction, breath);

    const bowedProf = getBowedResonanceProfile(params.instrumentId ?? '', params.body);
    const bodyRes = el.svf({ mode: 'bandpass' }, Math.min(19000, bowedProf.bodyFreq), bowedProf.bodyQ, raw);
    const bridgeHill = el.svf({ mode: 'bandpass' }, Math.min(19000, bowedProf.bridgeHillFreq), bowedProf.bridgeHillQ, raw);
    const shaped = el.add(raw, el.add(el.mul(bowedProf.bodyGain, bodyRes), el.mul(bowedProf.bridgeHillGain, bridgeHill)));

    rawAudio = el.lowpass(Math.min(19000, 450 + b * 4200), 1.2, shaped);
  }
  break;
}
case 7: {
  const noteSeed = seedOf(voice.id || 'voice', voice.note, retrig);
  const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

  const scoopDepth = 0.04 * (0.5 + params.pressure * 0.5);
  const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
  const dynamicFreqSignal = el.mul(freqSignal, el.sub(1.0, el.mul(scoopDepth, scoopEnv)));
  const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

  const breath = el.mul(0.16 * (1 - params.pressure) * breathDev, el.noise());
  const exciter = el.mul(0.6, el.adsr(0.018, 0.06, 0.65, 0.05, gateSignal));
  const jetInput = el.add(exciter, breath);

  const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
  const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
  const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.60 : 0.28);

  const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 7);
  const chiffBurst = profile.tongueType === 'soft-puff'
    ? el.lowpass(Math.min(19000, profile.tongueFreq), 1.0, el.noise())
    : el.svf({ mode: 'bandpass' }, Math.min(19000, profile.tongueFreq), 2.2, el.noise());
  const chiff = el.mul(tongueLevel, el.mul(chiffBurst, el.adsr(0.0004, 0.009, 0, 0.003, gateSignal)));

  const fundamental = el.svf({ mode: 'bandpass' }, safeDynamicFreqSignal, 2.4, jetInput);
  const overtone = el.svf({ mode: 'bandpass' }, el.min(el.const({ value: 19000 }), el.mul(safeDynamicFreqSignal, el.const({ value: 2 }))), 2.2, jetInput);
  const formant1 = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.f1.freq), profile.f1.q, jetInput);
  const formant2 = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.f2.freq), profile.f2.q, jetInput);
  const airNoise = el.mul(0.18, breath);

  const mixed = el.add(
    el.add(el.mul(0.80, fundamental), el.mul(0.28, overtone)),
    el.add(el.mul(0.22 * profile.f1.gain, formant1), el.mul(0.16 * profile.f2.gain, formant2))
  );
  rawAudio = el.mul(0.9, el.add(mixed, el.add(airNoise, chiff)));
  break;
}
case 15: {
  const noteSeed = seedOf(voice.id || 'voice', voice.note, retrig);
  const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

  const scoopDepth = 0.045 * (0.5 + params.pressure * 0.5);
  const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
  const dynamicFreqSignal = el.mul(freqSignal, el.sub(1.0, el.mul(scoopDepth, scoopEnv)));
  const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

  const lipBuzz = el.blepsquare(safeDynamicFreqSignal);
  const breathNoise = el.mul(0.05 * (1 - params.pressure) * breathDev, el.noise());
  const buzzEnv = el.adsr(0.012, 0.05, 0.85, 0.07, gateSignal);
  const excited = el.mul(buzzEnv, el.add(lipBuzz, breathNoise));

  const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
  const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
  const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.65 : 0.32);

  const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 15);
  const lipAttackBurst = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.tongueFreq), 1.8, el.noise());
  const lipTransient = el.mul(tongueLevel, el.mul(lipAttackBurst, el.adsr(0.0003, 0.008, 0, 0.003, gateSignal)));

  const bore = el.svf({ mode: 'bandpass' }, safeDynamicFreqSignal, 3.2, excited);
  const f1 = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.f1.freq), profile.f1.q, excited);
  const f2 = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.f2.freq + b * 1200), profile.f2.q, excited);

  const mixed = el.add(
    el.mul(0.70, bore),
    el.add(el.mul(0.40 * profile.f1.gain, f1), el.mul((0.35 + b * 0.45) * profile.f2.gain, f2))
  );
  rawAudio = el.mul(0.65, el.tanh(el.mul(1.2 + params.drive * 1.4, el.add(mixed, lipTransient))));
  break;
}
case 16: {
  const noteSeed = seedOf(voice.id || 'voice', voice.note, retrig);
  const breathDev = Math.max(0.85, Math.min(1.15, 1.0 + randNorm(noteSeed) * 0.10));

  const scoopDepth = 0.04 * (0.5 + params.pressure * 0.5);
  const scoopEnv = el.adsr(0.0003, 0.024, 0, 0.006, gateSignal);
  const dynamicFreqSignal = el.mul(freqSignal, el.sub(1.0, el.mul(scoopDepth, scoopEnv)));
  const safeDynamicFreqSignal = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), dynamicFreqSignal));

  const reedPulse = el.blepsaw(safeDynamicFreqSignal);
  const breathNoise = el.mul(0.10 * (1 - params.pressure) * breathDev, el.noise());
  const reedEnv = el.adsr(0.007, 0.05, 0.78, 0.05, gateSignal);
  const excited = el.mul(reedEnv, el.add(reedPulse, breathNoise));

  const isSlur = action === 'legato' || action === 'slur' || action === 'bow_drag' || (params.articulation < 0.25 && action !== 'staccato');
  const isStaccato = action === 'staccato' || action === 'tongue' || action === 'accent' || params.articulation > 0.65;
  const tongueLevel = isSlur ? 0.03 : (isStaccato ? 0.65 : 0.30);

  const profile = getFormantProfileForInstrument(params.instrumentId ?? '', 16);
  const reedTongueBurst = el.highpass(Math.min(19000, profile.tongueFreq), 1.2, el.noise());
  const tongueTransient = el.mul(tongueLevel, el.mul(reedTongueBurst, el.adsr(0.0002, 0.006, 0, 0.002, gateSignal)));

  const bore = el.svf({ mode: 'bandpass' }, safeDynamicFreqSignal, 3.0, excited);
  const f1 = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.f1.freq), profile.f1.q, excited);
  const f2 = el.svf({ mode: 'bandpass' }, Math.min(19000, profile.f2.freq + b * 1000), profile.f2.q, excited);

  const acousticTone = el.add(
    el.mul(0.65, bore),
    el.add(el.mul(0.45 * profile.f1.gain, f1), el.mul(0.40 * profile.f2.gain, f2))
  );
  rawAudio = el.mul(0.75, el.tanh(el.add(acousticTone, tongueTransient)));
  break;
}
case 11: {
  const hammer = el.mul(el.noise(), el.adsr(0.00015, 0.004 + (1 - b) * 0.004, 0, 0.002, gateSignal));
  const len1 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const len2 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 2.001 }))))));
  const len3 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), el.max(el.const({ value: 20 }), el.mul(safeFreqSignal, el.const({ value: 3.006 }))))));
  const pianoCutoff = Math.min(19000, 1800 + b * 7500);
  const s1 = createDampedStringLoop(`${pk}:p1`, len1, 0.994 - (1 - b) * 0.006, pianoCutoff, hammer);
  const s2 = createDampedStringLoop(`${pk}:p2`, len2, 0.989 - (1 - b) * 0.008, pianoCutoff * 0.95, hammer);
  const s3 = createDampedStringLoop(`${pk}:p3`, len3, 0.982 - (1 - b) * 0.010, pianoCutoff * 0.9, hammer);
  const tone = el.add(s1, el.add(el.mul(0.45, s2), el.mul(0.2, s3)));
  rawAudio = el.lowpass(Math.min(19000, 900 + b * 7000), 1.0, tone);
  break;
}
case 12: {
  const morphEnv = el.adsr(0.012, 0.220, 1.0, 0.06, gateSignal);
  const f1Center = el.add(360, el.mul(morphEnv, 340 + b * 200));
  const f2Center = el.add(820, el.mul(morphEnv, 580 + b * 320));
  const safeF1Center = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), f1Center));
  const safeF2Center = el.min(el.const({ value: 19000 }), el.max(el.const({ value: 20 }), f2Center));

  const source = el.blepsaw(freqSignal);
  const breath = el.mul(0.08 + 0.16 * (1 - params.pressure), el.noise());
  const vowel = el.add(
    el.mul(0.70, el.svf({ mode: 'bandpass' }, safeF1Center, 5.0, source)),
    el.mul(0.45, el.svf({ mode: 'bandpass' }, safeF2Center, 7.0, source)),
  );
  rawAudio = el.lowpass(Math.min(19000, 7000), 1.1, el.add(vowel, breath));
  break;
}
case 13: {
  const h1 = el.cycle(freqSignal);
  const h2 = el.cycle(el.mul(freqSignal, 2));
  const h3 = el.cycle(el.mul(freqSignal, 3));
  const h4 = el.cycle(el.mul(freqSignal, 4));
  rawAudio = el.mul(el.adsr(0.008, 0.02, 0.95, 0.08, gateSignal), el.add(h1, el.add(el.mul(0.45, h2), el.add(el.mul(0.2, h3), el.mul(0.1, h4)))));
  break;
}
case 14: {
  const tine = el.cycle(freqSignal);
  const upper = el.mul(0.32, el.cycle(el.mul(freqSignal, 2.01)));
  const attackNoise = el.mul(0.12, el.mul(el.noise(), el.adsr(0.0003, 0.012, 0, 0.003, gateSignal)));
  rawAudio = el.lowpass(Math.min(19000, 1100 + b * 6500), 1.2, el.add(tine, el.add(upper, attackNoise)));
  break;
}
case 10: {
  const f1 = freqSignal;
  const f2 = el.mul(freqSignal, 1.0038);
  const reed1 = el.blepsaw(f1);
  const reed2 = el.blepsaw(f2);
  const bellowsBreath = el.mul(0.05, el.noise());
  const reedSum = el.add(el.mul(0.5, reed1), el.add(el.mul(0.5, reed2), bellowsBreath));
  rawAudio = el.lowpass(800 + b * 4200, 1.1, reedSum);
  break;
}
case 8: {
  const f0 = freqSignal;
  const bar0 = el.mul(el.cycle(f0), el.adsr(0.0003, decayTime * 0.4, 0, 0.01, gateSignal));
  const bar1 = el.mul(0.35, el.mul(el.cycle(el.mul(f0, 2.756)), el.adsr(0.0003, decayTime * 0.2, 0, 0.005, gateSignal)));
  const bar2 = el.mul(0.15, el.mul(el.cycle(el.mul(f0, 5.404)), el.adsr(0.0003, decayTime * 0.1, 0, 0.002, gateSignal)));

  const strike = el.mul(0.3, el.adsr(0.0002, 0.005, 0, 0.002, gateSignal));
  rawAudio = el.add(strike, el.add(bar0, el.add(bar1, bar2)));
  break;
}
case 9: {
  const p1 = el.syncphasor(freqSignal, gateSignal);
  const p2 = el.syncphasor(el.mul(freqSignal, 1.004), gateSignal);
  const sawResettable = el.sub(el.mul(2.0, p1), 1.0);
  const squareResettable = el.tanh(el.mul(8.0, el.sin(el.mul(2 * Math.PI, p2))));
  const subSine = el.sin(el.mul(2 * Math.PI, p1));
  const sig = el.add(el.mul(0.35, sawResettable), el.add(el.mul(0.35, squareResettable), el.mul(0.30, subSine)));
  const cut = 300 + b * 7500;
  const q = 1 + params.resonance * 4;
  rawAudio = el.svf({ mode: 'lowpass' }, cut, q, sig);
  break;
}
case 0:
case 1:
default: {
  const B = 0.00015;
  const pickPos = Math.max(0.05, Math.min(0.5, params.pluckPosition));
  const isRasgueado = action === 'abanico' || action === 'rasgueado' || params.articulation > 0.6;
  const excitation = params.excitationType ?? 'fingerpad';
  const construction = params.bodyConstruction ?? 'wood-box';
  const numCourses = params.courses ?? 1;
  const hasSympathetic = Boolean(params.sympatheticStrings);

  let impulse: Node;
  if (isRasgueado) {
    const b1 = el.adsr(0.0003, 0.006, 0, 0.003, gateSignal);
    const b2 = el.adsr(0.003, 0.006, 0, 0.003, gateSignal);
    const b3 = el.adsr(0.006, 0.006, 0, 0.003, gateSignal);
    impulse = el.mul(el.noise(), el.add(b1, el.add(b2, b3)));
  } else if (excitation === 'hard-pick') {
    const burstEnv = el.adsr(0.0002, 0.0035, 0, 0.002, gateSignal);
    const burstNoise = el.highpass(1800, 1.2, el.noise());
    impulse = el.mul(burstNoise, burstEnv);
  } else if (excitation === 'plectrum') {
    const burstEnv = el.adsr(0.0003, 0.0045, 0, 0.0025, gateSignal);
    const burstNoise = el.svf({ mode: 'bandpass' }, 2200, 1.3, el.noise());
    impulse = el.mul(burstNoise, burstEnv);
  } else if (excitation === 'nail') {
    const burstEnv = el.adsr(0.0004, 0.0055, 0, 0.003, gateSignal);
    const burstNoise = el.highpass(1500, 0.9, el.noise());
    impulse = el.mul(burstNoise, burstEnv);
  } else if (excitation === 'hammer') {
    const burstEnv = el.adsr(0.0006, 0.007, 0, 0.004, gateSignal);
    const burstNoise = el.svf({ mode: 'bandpass' }, 850, 1.5, el.noise());
    impulse = el.mul(burstNoise, burstEnv);
  } else {
    const burstEnv = el.adsr(0.0008, 0.009, 0, 0.005, gateSignal);
    const burstNoise = el.lowpass(1400, 0.8, el.noise());
    impulse = el.mul(burstNoise, burstEnv);
  }

  const plectrumChoke = el.mul(-0.35, el.mul(el.highpass(1200, 1.4, el.noise()), el.adsr(0.0001, 0.002, 0, 0.001, gateSignal)));
  impulse = el.add(impulse, plectrumChoke);

  let stringSignal: Node;
  const baseDelaySignal = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), safeFreqSignal)));
  const stringCutoff = Math.min(19000, construction === 'board'
    ? 1100 + b * 4800
    : construction === 'skin-faced'
    ? 1800 + b * 8500
    : 1400 + b * 7200);

  if (numCourses > 1) {
    const d1 = 0.988 - (1 - b) * 0.018;
    const loop1 = createDampedStringLoop(`${pk}:c1`, baseDelaySignal, d1, stringCutoff, impulse);

    const freqCourse2 = el.mul(freqSignal, 1.00277);
    const delayCourse2 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), el.max(el.const({ value: 20 }), freqCourse2))));
    const d2 = 0.985 - (1 - b) * 0.020;
    const loop2 = createDampedStringLoop(`${pk}:c2`, delayCourse2, d2, stringCutoff * 0.96, impulse);

    if (numCourses >= 3) {
      const freqCourse3 = el.mul(freqSignal, 0.99757);
      const delayCourse3 = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), el.max(el.const({ value: 20 }), freqCourse3))));
      const d3 = 0.983 - (1 - b) * 0.022;
      const loop3 = createDampedStringLoop(`${pk}:c3`, delayCourse3, d3, stringCutoff * 0.93, impulse);
      stringSignal = el.mul(0.48, el.add(loop1, el.add(loop2, loop3)));
    } else {
      stringSignal = el.mul(0.62, el.add(loop1, loop2));
    }
  } else {
    const inharmonicFreq = el.mul(freqSignal, Math.sqrt(1 + B * 4));
    const inharmonicDelay = el.min(el.const({ value: 4000 }), el.max(el.const({ value: 2 }), el.div(el.sr(), el.max(el.const({ value: 20 }), inharmonicFreq))));
    const loop1 = createDampedStringLoop(`${pk}:s1`, baseDelaySignal, 0.988 - (1 - b) * 0.018, stringCutoff, impulse);
    const loop2 = createDampedStringLoop(`${pk}:s2`, inharmonicDelay, 0.982 - (1 - b) * 0.020, stringCutoff * 0.9, impulse);
    stringSignal = el.add(loop1, el.mul(0.25, loop2));
  }

  let bodyOut: Node;
  if (construction === 'gourd') {
    const highPassed = el.highpass(140, 0.9, stringSignal);
    const m1 = el.svf({ mode: 'bandpass' }, 280, 3.8, highPassed);
    const m2 = el.svf({ mode: 'bandpass' }, 640, 3.2, highPassed);
    const m3 = el.svf({ mode: 'bandpass' }, 1250, 2.8, highPassed);
    bodyOut = el.add(highPassed, el.add(el.mul(0.30, m1), el.add(el.mul(0.28, m2), el.mul(0.18, m3))));
  } else if (construction === 'skin-faced') {
    const m1 = el.svf({ mode: 'bandpass' }, 420, 4.8, stringSignal);
    const m2 = el.svf({ mode: 'bandpass' }, 890, 3.8, stringSignal);
    const m3 = el.svf({ mode: 'bandpass' }, 1650, 3.0, stringSignal);
    bodyOut = el.add(stringSignal, el.add(el.mul(0.35, m1), el.add(el.mul(0.25, m2), el.mul(0.20, m3))));
  } else if (construction === 'board') {
    const m1 = el.svf({ mode: 'bandpass' }, 135, 2.2, stringSignal);
    const m2 = el.svf({ mode: 'bandpass' }, 270, 2.4, stringSignal);
    const m3 = el.svf({ mode: 'bandpass' }, 520, 1.8, stringSignal);
    const smoothedString = el.lowpass(Math.min(19000, 5500), 0.8, stringSignal);
    bodyOut = el.add(smoothedString, el.add(el.mul(0.40, m1), el.add(el.mul(0.28, m2), el.mul(0.16, m3))));
  } else if (construction === 'solid-electric') {
    const m1 = el.svf({ mode: 'bandpass' }, 450, 1.8, stringSignal);
    const m2 = el.svf({ mode: 'bandpass' }, 2400, 1.5, stringSignal);
    bodyOut = el.add(stringSignal, el.add(el.mul(0.15, m1), el.mul(0.20, m2)));
  } else {
    const airRes = el.svf({ mode: 'bandpass' }, 100, 3.0, stringSignal);
    const woodRes = el.svf({ mode: 'bandpass' }, 220, 2.5, stringSignal);
    const topRes = el.svf({ mode: 'bandpass' }, 380, 2.0, stringSignal);
    bodyOut = el.add(stringSignal, el.add(el.mul(0.35, airRes), el.add(el.mul(0.25, woodRes), el.mul(0.15, topRes))));
  }

  let finalAcoustic = bodyOut;
  if (hasSympathetic) {
    const droneBase = 146.83; 
    const tarabRatios = [1.0, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2.0, 2.25, 2.5];
    const sympatheticTap = el.mul(0.14, stringSignal);
    const tarabNodes = tarabRatios.map(r => el.svf({ mode: 'bandpass' }, droneBase * r, 24.0, sympatheticTap));
    const sumTarab = tarabNodes.reduce((acc, curr) => el.add(acc, curr));
    finalAcoustic = el.add(bodyOut, el.mul(0.85, sumTarab));
  }

  const combOffset = el.max(el.const({ value: 1 }), el.mul(baseDelaySignal, el.const({ value: pickPos })));
  const combSig = el.sub(finalAcoustic, el.delay({ key: `${pk}:comb`, size: 44100 }, combOffset, el.const({ value: 0 }), finalAcoustic));

  const filterCutoff = Math.min(19000, construction === 'board'
    ? 700 + b * 4500
    : (construction === 'skin-faced' ? 1200 + b * 7500 : 900 + b * 6800));
  rawAudio = el.lowpass(filterCutoff, 1.0, combSig);
  break;
}}
const releaseGate = el.sub(1, gateSignal);
const damperThump = (model === 11 || model === 19 || model === 20)
? el.mul(0.14, el.mul(el.lowpass(400, 1.2, el.noise()), el.adsr(0.0002, 0.018, 0, 0.008, releaseGate)))
: 0;
const roomBloom = (model === 6 || model === 7 || model === 15 || model === 16)
? el.mul(0.20, el.svf({ mode: 'bandpass' }, 420 + b * 600, 1.6, el.mul(rawAudio, releaseGate)))
: 0;
const finalRawAudio = el.add(rawAudio, el.add(damperThump, roomBloom));
const gain = el.mul(velSignal, env);
return el.mul(gain, finalRawAudio);
}
export function renderTrack(
trackId: string,
voices: VoiceState[],
params: TrackParams
): { left: Node; right: Node } {
if (voices.length === 0) {
const zero = el.const({ value: 0 });
return { left: zero, right: zero };
}
const voiceNodes = voices.map((v, idx) => renderVoice(trackId, idx, v, params));
const sum = voiceNodes.length === 1 ? voiceNodes[0] : el.add(...voiceNodes);
const trackVol = el.mul(el.const({ key: `${trackId}:vol`, value: params.volume }), sum);
const pan = Math.max(0, Math.min(1, params.pan));
const leftGain = Math.cos(pan * Math.PI * 0.5);
const rightGain = Math.sin(pan * Math.PI * 0.5);
const left = el.mul(el.const({ value: leftGain }), trackVol);
const right = el.mul(el.const({ value: rightGain }), trackVol);
return {
left: el.tanh(left),
right: el.tanh(right),
};
}
export function renderMaster(
trackSignals: { left: Node; right: Node }[],
params: MasterParams = defaultMasterParams()
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
const trackCount = Math.max(1, trackSignals.length);
const headroomTrim = Math.min(1.0, 1.8 / Math.sqrt(trackCount));
const hpFreq = Math.max(15, params.highPass ?? 20);
const hpLeft = el.highpass(hpFreq, 0.707, el.mul(el.const({ value: headroomTrim }), leftSum));
const hpRight = el.highpass(hpFreq, 0.707, el.mul(el.const({ value: headroomTrim }), rightSum));
const satLeft = el.tanh(hpLeft);
const satRight = el.tanh(hpRight);
const vol = Math.max(0, Math.min(2.0, params.volume ?? 1.0));
const finalLeft = el.mul(el.const({ value: vol }), satLeft);
const finalRight = el.mul(el.const({ value: vol }), satRight);
return { left: finalLeft, right: finalRight };
}
export interface MasterParams {
highPass?: number;
volume?: number;
performanceMode?: PerformanceMode;
}
export function defaultMasterParams(): MasterParams {
return {
highPass: 20,
volume: 1.0,
performanceMode: 'acoustic-ensemble',
};
}