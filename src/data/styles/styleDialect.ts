import { MusicalPattern, Role } from '../../types';
import { SongStyle } from './schema';
import { profileForStyle } from './styleProfiles';

function grid(kind: string, subdivision = 16): number[] {
  if (subdivision === 8) {
    if (kind === 'offbeat') return [1,3,5,7];
    if (kind === 'shuffle') return [0,3,4,7];
    return [0,2,4,6];
  }
  switch (kind) {
    case 'clave': return [0,2,5,8,10,12,14];
    case 'clave3': return [0,3,6,8,10,12,14];
    case 'tresillo': return [0,3,6,8,11,14];
    case 'offbeat': return [2,6,10,14];
    case 'four': return [0,4,8,12];
    case 'backbeat': return [0,4,8,12,4,12];
    case 'shuffle': return [0,3,6,8,11,14];
    case 'boom': return [0,4,8,12,7,15];
    case 'dnb': return [0,3,6,8,10,13,15];
    case '12count': return [0,3,5,6,8,10,12,14];
    case 'three-two': return [0,3,6,8];
    default: return [0,4,8,12];
  }
}

function familyFor(style: SongStyle): string {
  const n = style.name.toLowerCase();
  if (/bossa|choro|samba|pagode|forró/.test(n)) return 'brazilian-interlock';
  if (/clave|salsa|son|timba|mambo|charanga/.test(n)) return 'clave-cycle';
  if (/flamenco|soleá|buler/.test(n)) return 'compás-cycle';
  if (/house|disco|techno|electro/.test(n)) return 'machine-grid';
  if (/jazz|swing|blues/.test(n)) return 'swing-or-triplet';
  if (/reggae|rocksteady|dancehall/.test(n)) return 'offbeat-skank';
  if (/metal|punk|hardcore|rock/.test(n)) return 'riff-grid';
  if (/drum|jungle|breakbeat|garage|dubstep|grime/.test(n)) return 'broken-grid';
  if (/country|bluegrass|honky/.test(n)) return 'boom-chick';
  return 'style-native-groove';
}

function onsetKind(style: SongStyle): string {
  const n = style.name.toLowerCase();
  if (/salsa|son|timba|mambo|clave/.test(n)) return /on-2|2-step/.test(n) ? 'clave3' : 'clave';
  if (/soleá|buler|seguiriya|flamenco/.test(n)) return '12count';
  if (/bossa|samba|pagode|choro|forró/.test(n)) return /bossa|choro/.test(n) ? 'tresillo' : 'three-two';
  if (/house|disco|techno|electro/.test(n)) return 'four';
  if (/reggae|rocksteady/.test(n)) return 'offbeat';
  if (/jazz|swing|blues|boogie/.test(n)) return 'shuffle';
  if (/dnb|jungle|garage|dubstep|grime|break/.test(n)) return 'dnb';
  if (/country|bluegrass|honky/.test(n)) return 'boom';
  if (/metal|punk|hardcore|rock/.test(n)) return 'backbeat';
  return 'tresillo';
}

function roleForCategory(category: string): Role[] {
  if (category === 'bass') return ['bass'];
  if (category === 'comping') return ['harmony'];
  if (category === 'lead') return ['melody'];
  if (category === 'percussion') return ['percussion'];
  return ['harmony','bass'];
}

function makePattern(style: SongStyle, suffix: string, category: MusicalPattern['category'], kind: string, index: number): MusicalPattern {
  const subdivision = /2\/4/.test(style.rhythm?.meter ?? '') ? 8 : /12\/8|6\/8|3\/4/.test(style.rhythm?.meter ?? '') ? 12 : 16;
  const onsets = grid(kind, subdivision);
  const accents = onsets.map((_, i) => i % 3 === 0 ? 1 : i % 2 ? .55 : .75);
  return {
    id: `style-${style.id}-${suffix}`,
    worldId: style.primaryGenre,
    styleIds: [style.id],
    name: `${category === 'bass' ? 'Bass ostinato' : category === 'rolePattern' ? 'Comping cell' : category === 'phrasePattern' ? 'Lead motif' : 'Rhythm cell'} — ${familyFor(style)}`,
    shortName: `${familyFor(style)} ${suffix}`,
    family: familyFor(style),
    category,
    description: `Universal ${category} pattern dialect for ${style.name}; local terminology: ${style.rhythm?.signatureCell ?? style.name}`,
    tags: ['universal-pattern', category, familyFor(style), style.name.toLowerCase()],
    scopes: ['region','track'],
    roles: category === 'groove' ? ['bass','harmony','melody','percussion'] : roleForCategory(category),
    compatibleRoles: category === 'groove' ? ['bass','harmony','melody','percussion'] : roleForCategory(category),
    meter: style.rhythm?.meter ?? '4/4',
    cycleLength: /clave|12count|compás/.test(familyFor(style)) ? 2 : 1,
    subdivisions: subdivision,
    onsetGrid: onsets,
    durationGrid: onsets.map(() => category === 'bass' ? 2 : 1),
    accentProfile: accents,
    velocityProfile: accents,
    syncopationRating: kind === 'four' ? .15 : .72,
    anticipationOffset: kind === 'clave' || kind === 'tresillo' ? -1 : 0,
    swingPercentage: style.rhythm?.swingPercentage,
    articulations: category === 'bass' ? ['short','accent'] : ['accent','ghost'],
    density: index === 0 ? 'medium' : index === 1 ? 'dense' : 'dynamic',
    phrasePosition: ['any'],
    sectionUsage: ['intro','verse','chorus','bridge','solo','breakdown','groove','montuno','coro','outro'] as any,
    patternFunction: `${familyFor(style)} ${category}`,
    roleDependencies: [],
    interactionRules: [],
    transformations: ['accent-variation','phrase-ending-variation'],
    variants: [],
    provenance: `style dialect authored from ${style.name}`,
    authenticityTags: ['general-theory-name-first','genre-dialect'],
    enabled: true,
    weight: 30,
  };
}


const GENRE_PROGRESSION_FALLBACKS: Record<string, string[][][]> = {
  cumbia: [[['Am','G','F','E7'],['Dm','C','Bb','A7']],[['Am','F','G','E7'],['Dm','G','C','A7']]],
  flamenco: [[['Am','G','F','E7'],['Dm','C','Bb','A7']],[['E7','Am','G','F'],['Am','Bb','E7','Am']]],
  electronic: [[['Am','F','C','G'],['Em','D','C','Em']],[['Dm7','G7','Cmaj7','Am7'],['Am7','G','F','G']]],
  folk: [[['G','C','G','D'],['Em','C','G','D']],[['Dm','C','Bb','C'],['G','D','Em','C']]],
  gospel: [[['C','F','G','Am'],['F','C','Dm7','G7']],[['Cmaj7','Am7','Dm7','G7'],['Ab','Bb','C','C']]],
  funk: [[['Dm7','C','Bb','C'],['Am7','D7','G7','C7']],[['Em7','A7','Dm7','G7'],['C7','C7','F7','G7']]],
  'hip-hop': [[['Dm7','Bb','F','C'],['Am7','Fmaj7','Cmaj7','G6']],[['Dm9','G7','Cm9','A7'],['Am','G','F','G']]],
  kizomba: [[['Am7','Fmaj7','Cmaj7','G7'],['Dm7','G7','Cmaj7','Am7']],[['Bm7','Gmaj7','Dmaj7','A7'],['Em7','A7','Dmaj7','Bm7']]],
  'latin-pop': [[['C','G','Am','F'],['Dm7','G7','Cmaj7','Am7']],[['Am7','Fmaj7','Cmaj7','G6'],['Dm7','G7','Cmaj7','A7']]],
  'r-and-b': [[['Dm9','G13','Cmaj9','Am9'],['Fmaj9','Em7','Dm9','G13']],[['Cmaj9','A7#5','Dm9','G13'],['Ebmaj9','F13','Gm9','C13']]],
  rock: [[['E5','C5','D5','B5'],['A','D','E','A']],[['Em','C','G','D'],['A','G','D','E']]],
  ska: [[['C','G','Am','F'],['F','C','G','C']],[['Dm7','G7','Cmaj7','A7'],['C','Bb','F','G']]],
  soul: [[['Cmaj7','Am7','Dm7','G7'],['Fmaj7','Em7','Dm7','G7']],[['Ebmaj7','Cm7','Fm7','Bb7'],['Cmaj7','A7','Dm7','G7']]],
  swing: [[['C6','A7','Dm7','G7'],['Dm7','G7','C6','A7']],[['Fmaj7','D7','Gm7','C7'],['Bb6','G7','Cm7','F7']]],
  timba: [[['Am7','Dm7','E7','Am7'],['Dm7','G7','Cmaj7','A7']],[['Cm7','Fm7','G7','Cm7'],['Dm7','G7','C7','A7']]],
  zouk: [[['Am7','Fmaj7','Cmaj7','G7'],['Dm9','G13','Cmaj9','Am7']],[['Bm7','Gmaj7','Dmaj7','A7'],['Em9','A13','Dmaj9','Bm7']]],
  'drum-and-bass': [[['Em7','Cmaj7','G','D'],['Dm7','Bbmaj7','F','C']],[['Am7','G','Fmaj7','G'],['Em9','D','Cmaj7','B7']]],
  industrial: [[['E5','F5','E5','E5'],['E5','Bb5','F5','E5']],[['C5','Db5','C5','F#5'],['E5','G5','F5','E5']]],
  'punk-hardcore': [[['E5','G5','A5','B5'],['A5','C5','D5','E5']],[['E5','F#5','G5','E5'],['D5','A5','G5','D5']]],
  'uk-bass': [[['Am7','G','F','G'],['Dm7','C','Bb','C']],[['Em7','D','C','D'],['Fm7','Eb','Db','Eb']]],
};



const GENRE_RHYTHM_FALLBACKS: Record<string,{bpm:number;range:[number,number];meter:string;feel:string;swing:number}> = {
  disco:{bpm:120,range:[112,128],meter:'4/4',feel:'four-on-floor',swing:50},
  gospel:{bpm:104,range:[76,124],meter:'4/4',feel:'call-and-response build',swing:54},
  'r-and-b':{bpm:82,range:[65,105],meter:'4/4',feel:'behind-the-beat',swing:52},
  soul:{bpm:94,range:[70,112],meter:'4/4',feel:'deep pocket',swing:54},
  'drum-and-bass':{bpm:174,range:[165,180],meter:'4/4',feel:'breakbeat drive',swing:50},
  industrial:{bpm:128,range:[110,145],meter:'4/4',feel:'machine pulse',swing:50},
  'punk-hardcore':{bpm:180,range:[150,220],meter:'4/4',feel:'straight speed',swing:50},
  'uk-bass':{bpm:132,range:[125,140],meter:'4/4',feel:'broken club',swing:50},
  'latin-pop':{bpm:100,range:[88,116],meter:'4/4',feel:'Latin pop pulse',swing:50},
};

const GENRE_INSTRUMENT_FALLBACKS: Record<string,string[]> = {
  disco:['strings','slap-bass','clavinet','drums','synth'],
  gospel:['organ','choir','piano','bass','drums'],
  'drum-and-bass':['sub-bass','drums','synth','noise-sweep','soprano-sax'],
  industrial:['distortion-guitar','synth','drums','sub-bass','noise-sweep'],
  'punk-hardcore':['distortion-guitar','bass','drums','voice','electric-guitar'],
  'uk-bass':['sub-bass','synth','drums','cowbell','soprano-sax'],
  'r-and-b':['rhodes','fretless-bass','clavinet','drums','voice'],
  soul:['rhodes','strings','organ','bass','voice'],
  'latin-pop':['requinto','synth','bass','congas','voice'],
};

function fallbackProgressions(genreId: string, index: number, styleName: string): string[][] {
  const groups = GENRE_PROGRESSION_FALLBACKS[genreId];
  if (!groups?.length) return [];
  const n = styleName.toLowerCase();
  const hard = /hard|metal|punk|industrial|neuro|death|black|thrash/.test(n);
  const slow = /ballad|quiet|deep|ambient|cool|lyrical|sensual|romantic|liquid/.test(n);
  const group = groups[(hard ? 1 : slow ? 0 : index) % groups.length];
  return group;
}

/** Add three genuinely different audible cells to every shipped style. */
export function applyStyleDialect(style: SongStyle, index: number): SongStyle {
  const profile = profileForStyle(style.primaryGenre, style.name, index);
  const fallback = fallbackProgressions(style.primaryGenre, index, style.name);
  if (!profile && !fallback.length) return style;
  const base = profile ?? {
    bpm: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.bpm ?? style.rhythm?.defaultBpm,
    tempoRange: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.range ?? style.rhythm?.tempoRange,
    meter: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.meter ?? style.rhythm?.meter,
    feel: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.feel ?? style.rhythm?.feel ?? 'style-native',
    swing: GENRE_RHYTHM_FALLBACKS[style.primaryGenre]?.swing ?? style.rhythm?.swingPercentage,
    timeline: style.rhythm?.timelineClave, form: style.form?.sectionVocab ?? ['intro','verse','chorus','outro'],
    progressions: fallback, harmonicRhythm: style.harmony?.harmonicRhythm, bassMotion: style.harmony?.bassMotion,
    signatureCell: style.rhythm?.signatureCell ?? style.name, instruments: (style.sound?.instrumentPalette ?? []).map(x => x.value),
    contours: style.melody?.contourArchetypes ?? ['motif','variation'], arrangement: style.arrangement?.doublingRules ?? [], production: ''
  };
  const rhythm = { ...(style.rhythm ?? {}) };
  rhythm.defaultBpm = base.bpm ?? rhythm.defaultBpm;
  rhythm.tempoRange = base.tempoRange ?? rhythm.tempoRange;
  rhythm.meter = base.meter ?? rhythm.meter;
  rhythm.feel = base.feel ?? rhythm.feel;
  rhythm.swingPercentage = base.swing ?? rhythm.swingPercentage;
  rhythm.signatureCell = base.signatureCell;
  rhythm.timelineClave = base.timeline ?? rhythm.timelineClave;
  rhythm.microtimingFeel = /laid-back|behind|space/.test(base.feel ?? '') ? 'laid-back' : /shuffle|swing/.test(base.feel ?? '') ? 'swung' : rhythm.microtimingFeel;

  style.rhythm = rhythm;
  style.summary = `${style.name}: ${base.signatureCell}`;
  style.signatureTraits = [base.signatureCell, ...base.contours, ...(base.arrangement ?? [])].filter(Boolean).slice(0, 8);
  style.authoringNotes = 'Explicit song-type dialect: groove, form, harmony, bass, ensemble, patterns and production are structural—not a renamed source style.';
  style.form = {
    ...(style.form ?? {}),
    sectionVocab: base.form,
    templates: [{w:1, value: base.form.map((label, i) => ({
      key: `${label.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${i}`,
      label, kind: label, bars: label === 'intro' || label === 'outro' || label === 'coda' || label === 'cierre' ? 4 : 8,
      intensity: i === base.form.length - 1 ? 'low' : i >= base.form.length - 2 ? 'high' : 'medium'
    }))}],
    preferredMeters: [rhythm.meter ?? '4/4'],
  };
  style.harmony = {
    ...(style.harmony ?? {}),
    model: (base.harmonyModel ?? style.harmony?.model ?? 'functional') as any,
    modePolicy: (base.modePolicy ?? style.harmony?.modePolicy ?? 'major') as any,
    progressionTemplates: base.progressions.map(value => ({w:1,value})),
    harmonicRhythm: base.harmonicRhythm ?? style.harmony?.harmonicRhythm,
    bassMotion: base.bassMotion as any ?? style.harmony?.bassMotion,
  };
  style.melody = {
    ...(style.melody ?? {}),
    contourArchetypes: base.contours,
    phraseLengthsBars: [4,8],
  };
  style.arrangement = {
    ...(style.arrangement ?? {}),
    doublingRules: base.arrangement,
  };
  style.sound = {
    ...(style.sound ?? {}),
    instrumentPalette: base.instruments.map(value => ({value,w:1})),
    masterProfile: { ...(style.sound?.masterProfile ?? {roomId:'room'}), pocket: .5, lift: .5 },
  };
  return style;
}

export function dialectPatternsForStyle(style: SongStyle, index: number): MusicalPattern[] {
  const kind = onsetKind(style);
  const kinds = [
    kind,
    kind === 'four' ? 'offbeat' : 'four',
    kind === 'clave' ? 'clave3' : 'tresillo',
    kind === 'offbeat' ? 'tresillo' : 'offbeat',
    kind === 'dnb' ? 'boom' : 'shuffle',
  ];
  // Safety-net cells are role-separated. Authored genre/style patterns remain
  // the primary vocabulary whenever they exist.
  return [
    makePattern(style,'groove','groove',kinds[0],0),
    makePattern(style,'bass','bass',kinds[1],1),
    makePattern(style,'comp','rolePattern',kinds[2],2),
    makePattern(style,'lead','phrasePattern',kinds[3],3),
    makePattern(style,'texture','texture',kinds[4],4),
  ];
}
