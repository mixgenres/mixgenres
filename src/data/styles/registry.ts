import { SongStyle } from './schema';
import { GENRE_FORMS, TEMPOS } from '../genreForms';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID, GENRE_NAMES } from '../genres';
import { buildCuratedStyles, assembleStylePatterns } from './catalog';
import { applyStyleDialect, dialectPatternsForStyle } from './styleDialect';
import { ALL_PATTERNS, PATTERNS_BY_WORLD, PATTERNS_BY_ID, GENRE_SOURCE_MAP } from '../genres';
import { INSTRUMENTS_BY_ID } from '../instruments';
import { contractForGenre } from './contracts';

const STARTER_INSTRUMENTS: Record<string, string[]> = {
  afrobeats: ['log-drum','kalimba','shaker','bass','voice'],
  bachata: ['requinto','guitarron','guiro','bongos','voice'],
  blues: ['harmonica','jazz-guitar','upright-bass','brush-kit','voice'],
  brazilian: ['cavaquinho','pandeiro','surdo','tamborim','voice'],
  country: ['steel-guitar','fiddle','banjo','upright-bass','voice'],
  cumbia: ['accordion','guacharaca','tambor-alegre','bass','voice'],
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
  const contract = contractForGenre(worldId);
  const rhythm = GENRE_RHYTHM[worldId] ?? { bpm: 110, range:[80,140] as [number,number], meter:contract.meter, feel:contract.groove.name, swing:contract.groove.swing * 100 };
  const instruments = (STARTER_INSTRUMENTS[worldId] ?? seed.characteristicInstruments ?? ['piano','bass','drums','guitar','voice'])
    .filter((id: string) => INSTRUMENTS_BY_ID[id]).slice(0, 5);
  const formSteps = contract.form.map((name, i) => ({
    key: `${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${i}`,
    label: name,
    kind: name,
    bars: i === 0 ? 4 : 8,
    intensity: i === contract.form.length - 1 ? 'low' : (i >= contract.form.length - 2 ? 'high' : 'medium') as 'low'|'medium'|'high'|'peak',
  }));
  const ensemble = instruments.map((instrumentId: string, i: number) => {
    const def = INSTRUMENTS_BY_ID[instrumentId];
    const role = def?.voicing === 'bass' ? 'bass'
      : def?.voicing === 'unpitched' ? 'percussion'
      : def?.voicing === 'single' ? 'melody' : 'harmony';
    return { role: role as any, instrumentIds:[instrumentId], priority:10-i };
  });
  return {
    id: seed.id,
    name: seed.name,
    genres:[worldId], primaryGenre:worldId,
    kind:index === 0 ? 'canonical' : 'form', canonical:index === 0,
    summary:shortText(seed.description || `${seed.name} ${GENRE_NAMES[worldId]}`),
    signatureTraits:(seed.coreConcepts ?? seed.rhythmicGrammar ?? [seed.name]).slice(0, 6),
    era:seed.era, region:seed.origin,
    form:{
      sectionVocab:[...contract.form],
      templates:[{w:1, value:formSteps}],
      preferredMeters:[contract.meter],
    },
    harmony:{
      model:contract.harmonyModel,
      modePolicy: contract.pitchModel.toLowerCase().includes('minor') ? 'minor' : 'major',
      progressionTemplates:[],
      chordVocabulary:Array.from(new Set([...contract.harmonyVocabulary, ...(Object.values(seed.sectionProgressions ?? {}).flatMap((x:any) => x).map(String))])),
      harmonicRhythm:contract.harmonicRhythm,
      bassMotion:contract.bass.style,
      sectionProgressions: seed.sectionProgressions ?? {},
      tuningSystem:(seed.tuningSystem ?? contract.tuningSystem) as any,
    },
    rhythm:{
      meter:contract.meter,
      tempoRange:(seed.tempoRange ?? rhythm.range) as [number,number],
      defaultBpm:Math.round(((seed.tempoRange?.[0] ?? rhythm.bpm) + (seed.tempoRange?.[1] ?? rhythm.bpm)) / 2),
      feel:seed.grooveMechanics?.microtimingFeel ?? contract.groove.name,
      swingPercentage:seed.grooveMechanics?.swingPercentage ?? contract.groove.swing * 100,
      anticipationOffsetSteps:0,
      microtimingFeel: seed.grooveMechanics?.microtimingFeel ?? (contract.groove.swing > .57 ? 'swung' : 'straight'),
      humanizeJitterMs:contract.groove.humanizeMs,
      timelineClave:contract.timeline === 'none' ? undefined : contract.timeline,
      signatureCell:seed.signatureCell ?? contract.timeline,
      grooveMechanics:{
        swingPercentage:contract.groove.swing * 100,
        anticipationOffsetSteps:contract.groove.anticipationMs < 0 ? -1 : 0,
        microtimingFeel: seed.grooveMechanics?.microtimingFeel ?? 'straight',
        humanizeJitterMs:contract.groove.humanizeMs,
      },
    },
    melody:{
      scaleMode:contract.pitchModel,
      phraseLengthsBars:[4,8],
      chordToneTargeting:contract.harmonyModel === 'functional',
      callAndResponse:/call|answer|coro|response/i.test(contract.ensemble.lead ?? '') || /call|response/i.test(contract.ensemble.interaction ?? ''),
      ornamentVocabulary:Object.values(contract.articulationGrammar).flat(),
    },
    arrangement:{
      ensemble,
      densityCurve:Object.fromEntries(formSteps.map(step => [step.key, step.intensity === 'low' ? 'sparse' : step.intensity === 'high' || step.intensity === 'peak' ? 'busy' : 'normal'])),
      doublingRules:[contract.ensemble.motor ?? '', contract.ensemble.answer ?? ''].filter(Boolean),
    },
    sound:{
      instrumentPalette:instruments.map(value => ({value,w:1})),
      masterProfile:{roomId:contract.timbreSpace.room,pocket:0.5,lift:0.5},
    },
    patterns:{require:[],preferred:[],allowed:[],avoid:[]}, gestures:{}, rules:{
      require:contract.timelineRequired ? [{tag:'timeline-lock',description:contract.timeline}] : [],
      forbid:contract.forbidden.map(tag => ({tag})),
    },
  };
}

const baseStyles: SongStyle[] = [];
for (const world of GENRE_WORLDS) {
  for (const [index, seed] of (world.styleDefinitions ?? []).entries()) {
    baseStyles.push(styleFromSeed(world.id, seed, index));
  }
}

let styles = buildCuratedStyles(baseStyles, ALL_PATTERNS);
styles = styles.map((style, index) => applyStyleDialect(style, index));
const dialectPatterns = styles.flatMap((style, index) => dialectPatternsForStyle(style, index));
const curatedPatterns = [...assembleStylePatterns(styles, ALL_PATTERNS), ...dialectPatterns];

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
    if (source === genreId || sourceId === source) (PATTERNS_BY_WORLD[genreId] ??= []).push(pattern);
  }
}

// Every style has a bounded reusable pattern contract; no song owns a pattern.
// The curated catalog is the musical source of truth. Dialect cells supplement
// authored material; they must never replace it.
for (const style of styles) {
  const dialect = dialectPatterns.filter(p => p.id.startsWith(`style-${style.id}-`));
  const curated = Array.from(new Set(style.patterns?.allowed ?? []));
  const required = Array.from(new Set([...(style.patterns?.require ?? []), ...dialect.slice(0, 1).map(p => p.id)]));
  const preferred = Array.from(new Set([...(style.patterns?.preferred ?? []), ...dialect.slice(1).map(p => p.id)]))
    .filter(id => !required.includes(id));
  const allowed = Array.from(new Set([...curated, ...dialect.map(p => p.id)]));
  style.patterns = { require: required, preferred, allowed, avoid: style.patterns?.avoid ?? [] };
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
