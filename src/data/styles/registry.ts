import { SongStyle } from './schema';
import { GENRE_FORMS, TEMPOS } from '../genreForms';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID, GENRE_NAMES } from '../genres';
import { buildCuratedStyles, assembleStylePatterns } from './catalog';
import { ALL_PATTERNS, PATTERNS_BY_WORLD, PATTERNS_BY_ID, GENRE_SOURCE_MAP } from '../genres';
import { ROOM_BY_WORLD } from '../../engine/mixer';
import { INSTRUMENTS_BY_ID } from '../instruments';

const STARTER_INSTRUMENTS: Record<string, string[]> = {
  afrobeats: ['log-drum','kalimba','shaker','bass','voice'],
  bachata: ['requinto','guitarron','guiro','bongos','voice'],
  blues: ['harmonica','jazz-guitar','upright-bass','brush-kit','voice'],
  brazilian: ['cavaquinho','pandeiro','surdo','tamborim','voice'],
  country: ['steel-guitar','fiddle','banjo','upright-bass','voice'],
  cumbia: ['accordion','guacharaca','tambora','bass','voice'],
  disco: ['strings','clavinet','synth','slap-bass','drums'],
  electronic: ['synth','acid-303','drums','sub-bass','noise-sweep'],
  folk: ['banjo','fiddle','mandolin','upright-bass','voice'],
  funk: ['clavinet','slap-bass','electric-guitar','drums','horn-section'],
  gospel: ['organ','choir','piano','bass','drums'],
  'hip-hop': ['drums','sub-bass','synth','electric-guitar','voice'],
  house: ['acid-303','synth','drums','sub-bass','cowbell'],
  jazz: ['tenor-sax','upright-bass','brush-kit','piano','jazz-guitar'],
  kizomba: ['sub-bass','guitar','shaker','drums','voice'],
  'latin-pop': ['requinto','synth','bass','congas','voice'],
  tango: ['bandoneon','violin','piano','upright-bass','cello'],
  flamenco: ['guitar','palmas','cajon','voice','castanets'],
  metal: ['distortion-guitar','bass','drums','tremolo-strings','voice'],
  'r-and-b': ['rhodes','fretless-bass','clavinet','drums','voice'],
  reggae: ['organ','electric-guitar','bass','drums','voice'],
  reggaeton: ['synth','sub-bass','drums','congas','voice'],
  rock: ['overdrive-guitar','bass','drums','organ','voice'],
  salsa: ['piano','timbales','congas','trumpet','bass'],
  ska: ['trumpet','trombone','electric-guitar','bass','drums'],
  soul: ['rhodes','strings','organ','bass','voice'],
  swing: ['upright-bass','ride','trumpet','clarinet','piano'],
  timba: ['tres','timbales','congas','slap-bass','horn-section'],
  zouk: ['guitar','sub-bass','synth','shaker','voice'],
  'drum-and-bass': ['sub-bass','drums','synth','soprano-sax','noise-sweep'],
  industrial: ['distortion-guitar','synth','drums','sub-bass','noise-sweep'],
  'punk-hardcore': ['distortion-guitar','bass','drums','voice','electric-guitar'],
  'uk-bass': ['sub-bass','synth','drums','cowbell','soprano-sax'],
};

const GENRE_RHYTHM: Record<string, { bpm: number; range: [number, number]; meter: string; feel: string; swing: number }> = {
  afrobeats:{bpm:108,range:[100,118],meter:'4/4',feel:'laid-back syncopation',swing:52}, bachata:{bpm:128,range:[118,138],meter:'4/4',feel:'derecho pocket',swing:52},
  blues:{bpm:92,range:[72,110],meter:'4/4',feel:'shuffle',swing:63}, brazilian:{bpm:112,range:[88,132],meter:'2/4',feel:'Brazilian syncopation',swing:50},
  country:{bpm:110,range:[90,132],meter:'4/4',feel:'train shuffle',swing:56}, cumbia:{bpm:102,range:[92,112],meter:'4/4',feel:'cumbia sway',swing:50},
  disco:{bpm:120,range:[112,128],meter:'4/4',feel:'four-on-floor',swing:50}, electronic:{bpm:124,range:[90,140],meter:'4/4',feel:'electronic grid',swing:50},
  folk:{bpm:96,range:[78,122],meter:'4/4',feel:'acoustic pulse',swing:52}, funk:{bpm:104,range:[92,116],meter:'4/4',feel:'on-the-one',swing:55},
  gospel:{bpm:104,range:[76,124],meter:'4/4',feel:'church pocket',swing:54}, 'hip-hop':{bpm:90,range:[70,110],meter:'4/4',feel:'laid-back drag',swing:57},
  house:{bpm:124,range:[118,130],meter:'4/4',feel:'club grid',swing:50}, jazz:{bpm:140,range:[110,180],meter:'4/4',feel:'swing',swing:64},
  kizomba:{bpm:92,range:[82,102],meter:'4/4',feel:'deep laid-back',swing:55}, 'latin-pop':{bpm:100,range:[88,116],meter:'4/4',feel:'Latin pop pulse',swing:50},
  tango:{bpm:120,range:[108,132],meter:'4/4',feel:'marcato',swing:50}, flamenco:{bpm:96,range:[70,140],meter:'12/8',feel:'compás',swing:50},
  metal:{bpm:150,range:[110,210],meter:'4/4',feel:'machine-tight',swing:50}, 'r-and-b':{bpm:82,range:[65,105],meter:'4/4',feel:'behind-the-beat',swing:54},
  reggae:{bpm:78,range:[68,94],meter:'4/4',feel:'one-drop',swing:50}, reggaeton:{bpm:96,range:[88,108],meter:'4/4',feel:'dembow',swing:50},
  rock:{bpm:128,range:[100,160],meter:'4/4',feel:'driving',swing:50}, salsa:{bpm:96,range:[88,108],meter:'4/4',feel:'clave pocket',swing:52},
  ska:{bpm:168,range:[145,190],meter:'4/4',feel:'upbeat offbeat',swing:50}, soul:{bpm:94,range:[70,112],meter:'4/4',feel:'deep pocket',swing:54},
  swing:{bpm:160,range:[130,220],meter:'4/4',feel:'big-band swing',swing:66}, timba:{bpm:100,range:[92,112],meter:'4/4',feel:'gear pocket',swing:52},
  zouk:{bpm:100,range:[90,110],meter:'4/4',feel:'kompa lean',swing:54}, 'drum-and-bass':{bpm:174,range:[165,180],meter:'4/4',feel:'breakbeat drive',swing:50},
  industrial:{bpm:128,range:[110,145],meter:'4/4',feel:'machine pulse',swing:50}, 'punk-hardcore':{bpm:180,range:[150,220],meter:'4/4',feel:'straight drive',swing:50},
  'uk-bass':{bpm:132,range:[125,140],meter:'4/4',feel:'broken club',swing:50},
};

function shortText(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');
}

function sourceTempo(id: string): number { return GENRE_RHYTHM[id]?.bpm ?? TEMPOS[id] ?? 120; }

function styleFromSeed(worldId: string, seed: any, index: number): SongStyle {
  const rhythm = GENRE_RHYTHM[worldId] ?? { bpm: sourceTempo(worldId), range:[80,140] as [number,number], meter:'4/4', feel:'straight', swing:50 };
  const instruments = (STARTER_INSTRUMENTS[worldId] ?? seed.characteristicInstruments ?? ['piano','bass','drums','guitar','voice'])
    .filter((id: string) => INSTRUMENTS_BY_ID[id]).slice(0, 5);
  const form = GENRE_FORMS[worldId];
  return {
    id: seed.id,
    name: seed.name,
    genres:[worldId], primaryGenre:worldId,
    kind:index === 0 ? 'canonical' : 'form', canonical:index === 0,
    summary:shortText(seed.description || `${seed.name} ${GENRE_NAMES[worldId]}`),
    signatureTraits:(seed.coreConcepts ?? seed.rhythmicGrammar ?? [seed.name]).slice(0, 6),
    era:seed.era, region:seed.origin,
    form:{
      sectionVocab:['intro','verse','pre-chorus','chorus','bridge','solo','coda','ending'],
      templates: form ? [{w:1, value:form.steps.map(step => ({ key:step.key,label:step.label,kind:step.kind,bars:step.bars,intensity:step.intensity }))}] : [],
      preferredMeters:[rhythm.meter],
    },
    // Progressions are metadata only. Songs use chordPalette 4-chord cells.
    harmony:{model:'functional', modePolicy:'major', progressionTemplates:[], sectionProgressions:{}, chordVocabulary:[]},
    rhythm:{meter:rhythm.meter,tempoRange:rhythm.range,defaultBpm:rhythm.bpm,feel:rhythm.feel,swingPercentage:rhythm.swing,anticipationOffsetSteps:0,microtimingFeel:'straight',humanizeJitterMs:8},
    melody:{scaleMode:'major',phraseLengthsBars:[4,8],chordToneTargeting:true,callAndResponse:false},
    arrangement:{ensemble:instruments.map((instrumentId: string, i: number) => ({role:'accompaniment',instrumentIds:[instrumentId],priority:10-i})),densityCurve:Object.fromEntries((form?.steps ?? []).map(s => [s.key, s.intensity === 'peak' ? 'busy' : s.intensity === 'low' ? 'sparse' : s.intensity === 'high' ? 'busy' : 'normal']))},
    sound:{instrumentPalette:instruments.map(value => ({value,w:1})),masterProfile:{roomId:ROOM_BY_WORLD[worldId] ?? 'studio',pocket:0.5,lift:0.5}},
    patterns:{require:[],preferred:[],allowed:[],avoid:[]}, gestures:{}, rules:{require:[],forbid:[]},
  };
}

const baseStyles: SongStyle[] = [];
for (const world of GENRE_WORLDS) {
  for (const [index, seed] of (world.styleDefinitions ?? []).entries()) {
    baseStyles.push(styleFromSeed(world.id, seed, index));
  }
}

const styles = buildCuratedStyles(baseStyles, ALL_PATTERNS);
const curatedPatterns = assembleStylePatterns(styles, ALL_PATTERNS);

// The compact runtime pattern registry exposes only definitions reachable by
// the supported genre hierarchy. Shared patterns appear in multiple genre
// views without being cloned.
ALL_PATTERNS.splice(0, ALL_PATTERNS.length, ...curatedPatterns);
for (const key of Object.keys(PATTERNS_BY_WORLD)) delete PATTERNS_BY_WORLD[key];
for (const key of Object.keys(PATTERNS_BY_ID)) delete PATTERNS_BY_ID[key];
for (const pattern of curatedPatterns) {
  PATTERNS_BY_ID[pattern.id] = pattern;
  const source = pattern.worldId;
  for (const [genreId, sourceId] of Object.entries(GENRE_SOURCE_MAP)) {
    if (sourceId === source) (PATTERNS_BY_WORLD[genreId] ??= []).push(pattern);
  }
}

// Every style has a bounded reusable pattern contract; no song owns a pattern.
for (const style of styles) {
  const owned = curatedPatterns.filter(p => p.styleIds?.includes(style.id)).slice(0, 6);
  style.patterns = { require:owned.slice(0,3).map(p=>p.id), preferred:owned.slice(3).map(p=>p.id), allowed:owned.map(p=>p.id), avoid:[] };
}

export const ALL_STYLES = styles;
export const ALL_STYLES_BY_ID: Record<string, SongStyle> = Object.fromEntries(styles.map(s => [s.id, s]));
export const STYLES_BY_GENRE: Record<string, SongStyle[]> = Object.fromEntries(
  Object.keys(GENRE_NAMES).map(g => [g, styles.filter(s => s.primaryGenre === g)])
);

export function getStyle(id: string): SongStyle | undefined { return ALL_STYLES_BY_ID[id]; }
export function getStylesForGenre(genreId: string): SongStyle[] { return STYLES_BY_GENRE[genreId] ?? []; }
export function getCanonicalStyle(genreId: string): SongStyle {
  return getStylesForGenre(genreId).find(s => s.canonical) ?? getStylesForGenre(genreId)[0] ?? ALL_STYLES[0];
}

export { STARTER_INSTRUMENTS, GENRE_RHYTHM };
