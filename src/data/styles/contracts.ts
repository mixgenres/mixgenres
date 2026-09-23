import type { SongStyle, ImprovisationGrammar } from './schema';

export type InteractionModel = 'homophonic' | 'interlock' | 'unison' | 'counterpoint';

export type PulseModel =
  | 'metric-hierarchical'
  | 'timeline-cycle'
  | 'additive'
  | 'long-cycle'
  | 'free-rubato'
  | 'machine-grid';

export interface PocketSpec {
  referenceTempo: number;
  beatRelative: boolean;
  byRole: Partial<Record<string, number[]>>;
  jitterMs: number;
}

export interface PercussionDialect {
  kitMode: 'none' | 'hybrid' | 'full';
  allowedHitTypes: string[];
  forbidWesternBackbeat: boolean;
  forbidSectionCrash: boolean;
  allowTomFills: boolean;
  ride: boolean;
}

export interface BassDialect {
  style: 'root' | 'rootFifth' | 'walking' | 'tumbao' | 'octave' | 'riff' | 'sub' | 'dembow' | 'cumbia' | 'reggae' | 'samba' | 'house';
  rhythmJob: string;
  pitchJob: string;
  articulation: string[];
}

export interface ApproachSpec {
  /** Stable behavioral vocabulary independent of the physical instrument. */
  id: string;
  description?: string;
  /** Catalog tags/phrases that identify authored material for this approach. */
  tags: string[];
}

/**
 * What one Section Energy level *means inside this world*. Energy is never a
 * universal loudness curve: a world decides how much of the authored material
 * is actually voiced (`activity`), how bright the parts get, and how wet.
 *
 * `activity` replaces the old `density` field. It is the proportion of authored
 * onsets a part is expected to voice at this energy, 0..1.
 */
export interface EnergyMapping {
  activity: number;
  brightness: number;
  fxWetness: number;
}

export type EnergyDelta = 'build' | 'drop' | 'hold';
export type TransitionType = 'fill' | 'turnaround' | 'drop-out' | 'arrastre' | 'corte';

export interface TransitionGrammar {
  /** Required transitions by energy delta. */
  byDelta: Record<EnergyDelta, TransitionType[]>;
  /** Legacy-compatible flattened vocabulary. */
  types: TransitionType[];
  onEnergyRise?: TransitionType;
  onEnergyFall?: TransitionType;
  authoredPriority?: boolean;
}

export interface DragProfile {
  roles: string[];              // e.g. ['lead', 'bass', 'harmony', 'comp']
  maxLagBeats: number;          // how far behind the grid the drag can pull at its peak
  growthCurve: 'linear' | 'eased-in' | 'eased-in-out';
  resolvesAtCadence: boolean;   // snaps back to on-time at phrase/cadence boundaries
  affectsTempo?: boolean;       // phrase-local tempo elasticity for soloist/expressive tracks
}

export interface PerformanceIdioms {
  /** Enables genre-native expressive pitch gestures when the context matches. */
  bluesRockLeadMinorThirdBend?: boolean;
  /** Applies downward portamento on bass/lead notes at drop transitions. */
  dropPortamento?: boolean;
  /** Allows spotlighted lead phrasing to move independently of the master pocket. */
  spotlightLeadRubato?: boolean;
  /** Directional, phrase-position-dependent lag profile for rubato/arrastre/drag gestures. */
  dragProfile?: DragProfile;
}



export interface MixCharacter {
  dryness: number;      // 0..1, 1 = very dry/close, 0 = roomy/ambient
  bassForward: number;  // 0..1, how far forward the bass/drums sit vs. the rest
  width: number;        // 0..1, overall stereo spread
  brightness: number;   // 0..1, overall top-end lift
}

export interface WorldContract {
  pulseModel: PulseModel;
  meter: string;
  cycleLength: number;
  /** Genre-specific meaning of Section Energy 1..5. */
  energyMappings: Record<1 | 2 | 3 | 4 | 5, EnergyMapping>;
  /** Optional world-native names for the five energy steps, shown on the dial. */
  energyLabels?: Partial<Record<1 | 2 | 3 | 4 | 5, string>>;
  subdivision: number;
  timeline: string;
  timelineGrid: number[];
  timelineRequired: boolean;
  microtiming: PocketSpec;
  accentGrammar: Record<string, string>;
  accentMap: number[];
  articulationGrammar: Record<string, string[]>;
  harmonyModel: string;
  harmonyVocabulary: string[];
  harmonicRhythm: string;
  pitchModel: string;
  tuningSystem: string;
  pitchIntervals: number[];
  bass: BassDialect;
  form: string[];
  /** How parts are expected to interact when the arranger allocates attention. */
  interactionModel: InteractionModel;
  /** Role -> culturally meaningful performance behavior. */
  approaches: Record<string, ApproachSpec>;
  transitionGrammar: TransitionGrammar;
  defaultSpotlights: Record<string, string[]>;
  performanceIdioms: PerformanceIdioms;
  improvisationGrammar: ImprovisationGrammar;
  ensemble: Record<string, string>;
  timbreSpace: { palette: string[]; production: string; mixCharacter?: MixCharacter };
  instrumentDialects?: Record<string, Partial<import('../../engine/theory/dialects').InstrumentDialect>>;
  performanceGrammar?: import('./schema').PerformanceGrammar;
  performanceMode?: 'acoustic-ensemble' | 'programmed-electronic' | 'hybrid';
  forbidden: string[];
  groove: {
    name: string;
    swing: number;
    swingUnit: 8 | 16;
    lean: number;
    roleLean: Record<string, number>;
    humanizeMs: number;
    humanizeVel: number;
    accentDepth: number;
    pocket: number[];
    anticipationMs: number;
    dynamicRange: number;
  };
  percussion: PercussionDialect;
}

const z = (n: number = 16) => Array.from({ length: n }, () => 0);

function base(
  pulseModel: PulseModel,
  meter: string,
  timeline: string,
  harmonyModel: string,
  pitchModel: string,
  tuningSystem: string,
  bass: BassDialect,
  form: string[],
  ensemble: Record<string,string>,
  palette: string[],
  production: string,
  forbidden: string[],
  groove: WorldContract['groove'],
  percussion: PercussionDialect,
  opts: Partial<Pick<WorldContract,'cycleLength'|'subdivision'|'timelineRequired'|'harmonicRhythm'|'harmonyVocabulary'|'accentGrammar'|'articulationGrammar'|'microtiming'|'interactionModel' | 'energyMappings' | 'transitionGrammar' | 'approaches' | 'performanceIdioms' | 'instrumentDialects'>> & { mixCharacter?: MixCharacter } = {},
): WorldContract {
  const pm = pitchModel.toLowerCase();
  const pitchIntervals = pm.includes('pentatonic') ? [0,2,4,7,9]
    : pm.includes('phrygian') ? [0,1,3,5,7,8,10]
    : pm.includes('dorian') ? [0,2,3,5,7,9,10]
    : pm.includes('mixolydian') ? [0,2,4,5,7,9,10]
    : pm.includes('minor') ? [0,2,3,5,7,8,10]
    : [0,2,4,5,7,9,11];
  const accentMap = Array.from({length: Math.max(8, opts.subdivision ?? 16)}, (_, i) => {
    if (timeline !== 'none' && (timeline.includes('clave') || timeline.includes('3+3+2'))) {
      const grid = timeline.includes('3+3+2') ? [0,3,6,8] : [0,2,5,8,10,12,14];
      return grid.includes(i) ? 1 : 0.58;
    }
    if (i % Math.max(1, Math.round((opts.subdivision ?? 16) / 4)) === 0) return 1;
    return i % 2 === 0 ? 0.72 : 0.52;
  });
  const transitionGrammar = opts.transitionGrammar ?? { byDelta: { build: ['fill'], drop: ['drop-out'], hold: [] }, types: ['fill', 'drop-out'], onEnergyRise: 'fill', onEnergyFall: 'drop-out', authoredPriority: true };
  const approaches = opts.approaches ?? {
      bass: { id: bass.style === 'walking' ? 'walking' : bass.style, tags: [bass.style, 'bass'] },
      pulse: { id: bass.style === 'dembow' ? 'dembow-bass' : bass.style, tags: [bass.style, 'pulse', 'bass'] },
      harmony: { id: 'comping', tags: ['harmony', 'comping'] },
      lead: { id: 'phrase', tags: ['lead', 'phrase'] },
      percussion: { id: 'groove', tags: ['percussion', 'groove'] },
    };
  const energyMappings = opts.energyMappings ?? {
    // Activity is a light simplifier, not a note-by-note mute switch. The
    // previous 20/40/60/80/100 curve randomly removed too much authored
    // material, especially from accompaniment, leaving songs with one audible
    // foreground loop. Section decisions already control personnel and role
    // density, so the remaining activity curve should preserve the vocabulary.
    1: { activity: 0.35, brightness: 0.25, fxWetness: 1.25 },
    2: { activity: 0.55, brightness: 0.4, fxWetness: 1.1 },
    3: { activity: 0.75, brightness: 0.58, fxWetness: 1.0 },
    4: { activity: 0.9, brightness: 0.78, fxWetness: 0.9 },
    5: { activity: 1.0, brightness: 1.0, fxWetness: 0.78 },
  };
  return {
    pulseModel, meter, cycleLength: opts.cycleLength ?? 1, energyMappings, subdivision: opts.subdivision ?? 16,
    timeline, timelineGrid: timeline === 'none' ? [] : (timeline.includes('clave') ? [0,2,5,8,10,12,14] : timeline.includes('3+3+2') ? [0,3,6,8] : []), timelineRequired: opts.timelineRequired ?? false,
    microtiming: opts.microtiming ?? {
      referenceTempo: 100, beatRelative: true,
      byRole: { bass: groove.roleLean.bass ? [groove.roleLean.bass] : [0], comp: [groove.roleLean.comp ?? 0], lead: [groove.roleLean.lead ?? 0], percussion: [groove.roleLean.perc ?? 0] },
      jitterMs: groove.humanizeMs,
    },
    accentGrammar: opts.accentGrammar ?? { ensemble: 'metric accents from the style pocket' },
    accentMap,
    articulationGrammar: opts.articulationGrammar ?? { ensemble: ['style-native attack and release'] },
    harmonyModel, harmonyVocabulary: opts.harmonyVocabulary ?? ['shared chord library'],
    harmonicRhythm: opts.harmonicRhythm ?? '1-bar',
    pitchModel, tuningSystem, pitchIntervals, bass, form,
    interactionModel: opts.interactionModel ?? (timeline.includes('clave') ? 'interlock' : pulseModel === 'machine-grid' ? 'unison' : 'homophonic'),
    approaches,
    performanceIdioms: {
      bluesRockLeadMinorThirdBend: false,
      dropPortamento: false,
      spotlightLeadRubato: false,
      ...(opts as any).performanceIdioms,
    },
    improvisationGrammar: {
      scaleMode: pm.includes('minor') ? 'minor-pentatonic' : 'major',
      targetToneStrategy: 'chord-tone-on-beat-1',
      phraseStages: ['state', 'rest', 'repeat-transpose', 'rapid-run'],
      transposeDegrees: 2,
      phraseBars: 4,
      rapidRunOrnaments: ['rapid-run'],
      ...(opts as any).improvisationGrammar,
    },
    transitionGrammar,
    defaultSpotlights: { intro: ['pulse'], verse: ['harmony'], chorus: ['lead'], solo: ['lead'], outro: ['pulse'] },
    ensemble,
    timbreSpace: {
      palette,
      production,
      mixCharacter: opts.mixCharacter ?? { dryness: 0.6, bassForward: 0.5, width: 0.5, brightness: 0.5 },
    },
    instrumentDialects: opts.instrumentDialects ?? {},
    forbidden,
    groove,
    percussion,
  };
}

const G: Record<string, WorldContract> = {};

G.tango = base('metric-hierarchical','4/4','none','functional','tonal with chromatic passing','12-tet',
  {style:'riff',rhythmJob:'marcato roots/fifths/octaves; cadence approach and arrastre; never walking',pitchJob:'root/fifth/octave with chromatic approach',articulation:['marcato','arrastre','arco','hard pizzicato']},
  ['intro','A','B','A','variación','coda'], {motor:'piano + bass',lead:'bandoneón / violin',answer:'bandoneón ↔ violin'}, ['bandoneon','violin','piano','upright-bass','cello'],'dry room, wood/bellows/bow detail',
  ['drum-kit','2-and-4 backbeat','crash on section start','walking bass','swing','tom fills'],
  {name:'Marcato / Yumba',swing:.5,swingUnit:16,lean:5,roleLean:{bass:-6,comp:7,lead:13,perc:0},humanizeMs:9,humanizeVel:.14,accentDepth:.95,pocket:(()=>{const a=z();a[0]=-3;a[4]=2;a[8]=-2;a[12]=8;return a})(),anticipationMs:-22,dynamicRange:1.35},
  {kitMode:'none',allowedHitTypes:[],forbidWesternBackbeat:true,forbidSectionCrash:true,allowTomFills:false,ride:false},
  {cycleLength:1,subdivision:16,timelineRequired:false,harmonicRhythm:'1/2-bar',
   harmonyVocabulary:['minor-key cadence','V7b9','chromatic passing','secondary dominant'],
   accentGrammar:{bass:'marcato en 4 or en 2; weight 1/3',comp:'short marcato / yumba',lead:'rubato over stable motor'},
   articulationGrammar:{bass:['pizzicato','arco','arrastre'],bandoneon:['staccato','legato','bellows phrasing'],violin:['chicharra','látigo','portamento'],piano:['octave marcato','variación']},
   microtiming:{referenceTempo:120,beatRelative:true,byRole:{bass:[-6,0,-6,2],comp:[7,0,7,8],lead:[12,18,8,20],percussion:[0]},jitterMs:5}});
G.salsa = base('timeline-cycle','4/4','son clave 2-3 or 3-2','modal-vamp','major/minor tonal with modal vamp color','12-tet',
  {style:'tumbao',rhythmJob:'downbeat sparse/empty; anticipates next bar',pitchJob:'root/fifth/octave and approach into next root',articulation:['plucked','muted','slap']},
  ['intro','verso/tema','montuno','mambo','montuno','cierre'], {motor:'piano guajeo + bass tumbao',percussion:'conga + timbales + clave/cáscara',voice:'coro/pregón'}, ['piano','timbales','congas','trumpet','upright-bass'],'bright brass, forward percussion, tight room',
  ['rock backbeat','crash on section start','tom fills','walking bass','clave mismatch'],
  {name:'Clave Pocket',swing:.5,swingUnit:16,lean:-1,roleLean:{bass:-12,comp:-7,perc:-2,lead:3,stab:-5},humanizeMs:5,humanizeVel:.1,accentDepth:.84,pocket:(()=>{const a=z();a[6]=-8;a[12]=-6;a[14]=-5;return a})(),anticipationMs:-28,dynamicRange:1.25},
  {kitMode:'hybrid',allowedHitTypes:['rim','cowbell','ghost'],forbidWesternBackbeat:true,forbidSectionCrash:true,allowTomFills:false,ride:false},
  {cycleLength:2,subdivision:16,timelineRequired:true,harmonicRhythm:'1/2-bar',
   harmonyVocabulary:['montuno vamp','ii-V','minor vamp','dominant vamp'],
   accentGrammar:{clave:'hard invariant',bass:'tumbao anticipations',piano:'guajeo interlock',horn:'short stabs'},
   articulationGrammar:{conga:['open','slap','muff','bass'],timbales:['cáscara','paila','rim','campana'],bongo:['martillo','campana'],horn:['stab']},
   microtiming:{referenceTempo:96,beatRelative:true,byRole:{bass:[0,-5,-10,-3],comp:[0,-4,-8,-2],percussion:[0,0,0,0],lead:[2,4,3,5]},jitterMs:3}});
G.timba = { ...G.salsa, pulseModel:'timeline-cycle', timeline:'son clave / style-specific clave direction', form:['intro','verso','coro','marcha','gear','break','cierre'], ensemble:{motor:'tumbao + marcha',interaction:'gears, breaks, coro/pregón'}, timbreSpace:{...G.salsa.timbreSpace,production:'harder attacks, sectional breaks, dense percussion'}, forbidden:[...G.salsa.forbidden,'static salsa arrangement'], groove:{...G.salsa.groove,name:'Gear Pocket',lean:-3,roleLean:{...G.salsa.groove.roleLean,bass:-15,comp:-10,stab:-8},anticipationMs:-32,dynamicRange:1.32} };

G.jazz = { ...base('metric-hierarchical','4/4','none','functional','major/minor modes + chromatic','12-tet',
  {style:'walking',rhythmJob:'quarter-note walking with phrase-leading approach',pitchJob:'chord tones + scale passing tones',articulation:['pizzicato','ghost','legato']},
  ['head','solo','trading','solo','head','tag'], {motor:'ride + walking bass',comp:'interactive piano/guitar',lead:'horn'}, ['tenor-sax','upright-bass','piano','jazz-guitar','brush-kit'],'live room, moderate width, soft compression',
  ['fixed pop backbeat','crash every section','four-bar fill rule'],
  {name:'Swing',swing:.64,swingUnit:8,lean:2,roleLean:{ride:5,bass:-4,comp:7,snare:3,lead:9},humanizeMs:8,humanizeVel:.15,accentDepth:.76,pocket:z(16),anticipationMs:-22,dynamicRange:1.3},
  {kitMode:'full',allowedHitTypes:['ride','brush','hat','snare','ghost','kick'],forbidWesternBackbeat:false,forbidSectionCrash:true,allowTomFills:false,ride:true},
  {harmonicRhythm:'1/2-bar',harmonyVocabulary:['ii-V-I','turnaround','dominant substitution','modal vamp'],
   accentGrammar:{ride:'triplet pulse',bass:'quarter-note walking',comp:'irregular comping',lead:'phrase accents'},
   articulationGrammar:{bass:['pizzicato'],drums:['ride','brush','ghost'],lead:['legato','fall','doit']},
   microtiming:{referenceTempo:140,beatRelative:true,byRole:{ride:[0,2,0,2],bass:[-4,0,-4,0],comp:[7,4,9,4],lead:[8,14,10,16]},jitterMs:4}}),
  improvisationGrammar:{
    scaleMode:'chromatic-enclosure',
    targetToneStrategy:'chord-tone-on-beat-1',
    phraseStages:['state','rest','repeat-transpose','rapid-run'],
    transposeDegrees:2,
    phraseBars:4,
    rapidRunOrnaments:['rapid-run','mordent','grace-note'],
  }
};
G.swing = { ...G.jazz, form:['head','ensemble riff','shout chorus','solo','head','tag'], ensemble:{...G.jazz.ensemble,sections:'sax/brass section writing and call-response riffs'}, groove:{...G.jazz.groove,name:'Big Band Swing',swing:.66,roleLean:{...G.jazz.groove.roleLean,comp:6,lead:7}} };
G.blues = { ...G.jazz, harmonyModel:'blues-form', pitchModel:'blue-note vocabulary', form:['12-bar head','vocal/guitar answer','solo','turnaround'], bass:{...G.jazz.bass,style:'walking',rhythmJob:'shuffle / walking hybrid with turnaround'}, groove:{...G.jazz.groove,name:'Shuffle',swing:.63,lean:4,roleLean:{...G.jazz.groove.roleLean,lead:13,comp:8},humanizeMs:10} };

function simple(
  _id:string, meter:string, pulse:PulseModel, feel:string, swing:number, bass:BassDialect,
  form:string[], ensemble:Record<string,string>, palette:string[], forbidden:string[],
  timeline='none', harmony='functional', pitch='tonal', production='genre-specific',
  kit:PercussionDialect={kitMode:'full',allowedHitTypes:['kick','snare','hat'],forbidWesternBackbeat:false,forbidSectionCrash:true,allowTomFills:false,ride:false},
): WorldContract {
  const a = z(); return base(pulse,meter,timeline,harmony,pitch,'12-tet',bass,form,ensemble,palette,production,forbidden,
    {name:feel,swing,swingUnit:8 as 8|16,lean:0,roleLean:{bass:-2,comp:2,lead:4,perc:0},humanizeMs:7,humanizeVel:.12,accentDepth:.78,pocket:a,anticipationMs:-18,dynamicRange:1.2},kit);
}

G.afrobeats = simple('afrobeats','4/4','timeline-cycle','layered syncopation',.5,{style:'riff',rhythmJob:'interlocking syncopated bass; log-drum patterns where idiomatic',pitchJob:'root/third/fifth plus melodic fills',articulation:['short','muted']},['intro','verse','pre-chorus','chorus','break','outro'],{motor:'kick + percussion + bass',lead:'vocal'},['log-drum','kalimba','shaker','bass','voice'],['dembow clone','straight rock backbeat'],'3+3+2-type cells','modal-vamp','pentatonic/major','layered percussion, controlled sub');
G.bachata = simple('bachata','4/4','metric-hierarchical','derecho with anticipation',.5,{style:'tumbao',rhythmJob:'anticipated bass into chord changes',pitchJob:'root/fifth with passing approach',articulation:['plucked','muted']},['intro','verso','coro','mambo','coda'],{motor:'requinto + bongo + güira',bass:'anticipated bass',lead:'requinto'},['requinto','guitarron','guiro','bongos','voice'],['salsa clave lock','rock backbeat'],'none','functional','minor/major','bright guitar, dry percussion');
G.brazilian = simple('brazilian','2/4','timeline-cycle','interlocking Brazilian pulse',.5,{style:'samba',rhythmJob:'style-specific syncopation; surdo anchor; bass follows style',pitchJob:'root/guide-tone with passing tones',articulation:['muted','short','ghost']},['intro','theme','variation','solo','coda'],{motor:'surdo + pandeiro + tamborim',harmony:'cavaquinho/violão interlock'},['cavaquinho','pandeiro','surdo','tamborim','voice'],['generic Latin backbeat','four-on-floor'],'samba-specific cells','functional/modal-vamp','major/minor','tight ensemble, natural room');
G.country = simple('country','4/4','metric-hierarchical','boom-chick / shuffle',.56,{style:'rootFifth',rhythmJob:'alternating bass with strum backbeat',pitchJob:'root/fifth + walk-ups',articulation:['pick','muted','slide']},['intro','verse','chorus','instrumental','verse','outro'],{motor:'alternating bass + strum',lead:'fiddle / steel'},['steel-guitar','fiddle','banjo','upright-bass','voice'],['funk syncopation','four-on-floor'],'none','functional','major/mixolydian','dry room, string articulation');
G.cumbia = simple('cumbia','4/4','timeline-cycle','chucu-chucu',.5,{style:'cumbia',rhythmJob:'alternating bass around percussion cycle',pitchJob:'root/fifth/approach',articulation:['plucked','short']},['intro','tema','verso','coro','break','cierre'],{motor:'guacharaca + bass + percussion',lead:'accordion/guitar'},['accordion','guacharaca','tambora','bass','voice'],['generic pop backbeat','four-on-floor'],'chucu-chucu cell','functional','minor/major','dry percussion, bright melodic lead');
G.disco = simple('disco','4/4','machine-grid','four-on-floor + octave bass',.5,{style:'octave',rhythmJob:'repeating octave 16ths locked to kick',pitchJob:'root/octave with passing tones',articulation:['short','palm-muted']},['intro','verse','chorus','break','chorus','outro'],{motor:'kick + octave bass',lead:'strings/horns'},['strings','clavinet','synth','slap-bass','drums'],['swing','rock backbeat'],'four-on-floor','functional','major/minor','pumping sidechain-style dynamics');
G.electronic = simple('electronic','4/4','machine-grid','style-dependent machine grid',.5,{style:'octave',rhythmJob:'loop-specific bass pulse',pitchJob:'root/octave or modal sub',articulation:['short','gated']},['intro','build','drop','breakdown','drop','outro'],{motor:'drum machine + bass',texture:'synth/pads'},['synth','acid-303','drums','sub-bass','noise-sweep'],['unjustified acoustic fills'],'none','modal-vamp','mode/scale','automation and filter movement');
G.folk = simple('folk','4/4','metric-hierarchical','acoustic cycle',.5,{style:'rootFifth',rhythmJob:'supportive root/fifth; style-dependent drone',pitchJob:'modal/tonal melody',articulation:['pick','open','drone']},['intro','verse','refrain','instrumental','verse','coda'],{motor:'acoustic strum',lead:'voice/fiddle'},['banjo','fiddle','mandolin','upright-bass','voice'],['default pop chorus'],'none','modal-vamp','major/minor/modal','natural room, limited processing');
G.funk = simple('funk','4/4','metric-hierarchical','the one',.5,{style:'riff',rhythmJob:'syncopated short bass locked to kick',pitchJob:'root/fifth/7th with chromatic approach',articulation:['muted','ghost','slap']},['intro','groove','verse','breakdown','groove','tag'],{motor:'bass + kick',comp:'guitar/clavinet stabs',lead:'horn/voice'},['clavinet','slap-bass','electric-guitar','drums','horn-section'],['straight rock bass','crash every section'],'none','functional','mixolydian/dorian','tape warmth, tight mono-ish center');
G.gospel = simple('gospel','4/4','metric-hierarchical','call-response build',.52,{style:'rootFifth',rhythmJob:'supportive bass with gospel passing motion',pitchJob:'roots/guide tones and passing chords',articulation:['legato','staccato']},['verse','build','vamp','shout','coda'],{motor:'organ + piano + bass',lead:'choir / solo voice'},['organ','choir','piano','bass','drums'],['static pop loop'],'none','functional','major/blues/gospel','crescendo and room bloom');
G['hip-hop'] = simple('hip-hop','4/4','machine-grid','sample pocket / laid-back drag',.5,{style:'sub',rhythmJob:'sparse kick-synced sub; style-specific 808 rhythm',pitchJob:'root with 808 glides when available',articulation:['short','slide','sustain']},['intro','verse','hook','verse','bridge','outro'],{motor:'drums + sub',texture:'sample/chop',lead:'rap flow'},['drums','sub-bass','synth','electric-guitar','voice'],['rock drum kit','four-on-floor'],'boom-bap / trap cells','functional/modal-vamp','minor/pentatonic','sample space, controlled sub');
G.house = simple('house','4/4','machine-grid','four-on-floor',.5,{style:'house',rhythmJob:'bass syncopates between kicks; repeats as a loop',pitchJob:'root/fifth/7th',articulation:['short','gated']},['intro','groove','breakdown','drop','groove','outro'],{motor:'four-on-floor kick + bass',texture:'hats/pads'},['acid-303','synth','drums','sub-bass','cowbell'],['rock backbeat','random fills'],'four-on-floor','functional/modal-vamp','minor/dorian','sidechain pumping, filter automation');
G.kizomba = simple('kizomba','4/4','metric-hierarchical','deep laid-back',.5,{style:'sub',rhythmJob:'sub-bass anchors with syncopated anticipations',pitchJob:'root/fifth with melodic movement',articulation:['legato','short']},['intro','verse','chorus','break','chorus','outro'],{motor:'sub-bass + percussion',lead:'voice'},['sub-bass','guitar','shaker','drums','voice'],['reggaeton dembow','rock backbeat'],'none','modal-vamp','minor/major','sub-heavy, soft transients');
G.flamenco = simple('flamenco','12/8','long-cycle','compás',.5,{style:'root',rhythmJob:'compás-anchored bass/guitar support; avoid generic backbeat',pitchJob:'tonic/dominant with Phrygian cadence color',articulation:['rasgueado','golpe','ligado','alzapúa']},['salida','llamada','letra','falseta','remate','cierre'],{motor:'guitar + palmas/cajón',lead:'cante',answer:'falseta'},['guitar','palmas','cajon','voice','castanets'],['rock backbeat','crash on section start','walking bass','four-on-floor'],'12-count compás','functional','phrygian/Andalusian','dry room, strong transient contrast',{kitMode:'hybrid',allowedHitTypes:['rim','ghost'],forbidWesternBackbeat:true,forbidSectionCrash:true,allowTomFills:false,ride:false});
G.metal = simple('metal','4/4','machine-grid','precision',.5,{style:'riff',rhythmJob:'palm-muted riff alignment with kick/double-kick',pitchJob:'root/power-chord/tritone/Phrygian color',articulation:['palm-mute','staccato','tremolo']},['intro','riff','verse','chorus','breakdown','solo','coda'],{motor:'guitar riffs + kick',lead:'guitar solo'},['distortion-guitar','bass','drums','tremolo-strings','voice'],['swing','loose shuffle','pop fills'],'none','functional','minor/phrygian','tight multitrack, saturation');
G['r-and-b'] = simple('r-and-b','4/4','metric-hierarchical','behind-the-beat pocket',.5,{style:'sub',rhythmJob:'syncopated melodic bass with space',pitchJob:'extended chord tones',articulation:['legato','ghost','slide']},['intro','verse','pre-chorus','chorus','bridge','outro'],{motor:'bass + drums',harmony:'Rhodes/keys',lead:'voice'},['rhodes','fretless-bass','clavinet','drums','voice'],['stiff quantization','rock backbeat default'],'none','functional','major/minor','warm, close, vocal-forward');
G.reggae = simple('reggae','4/4','metric-hierarchical','one-drop + skank',.5,{style:'reggae',rhythmJob:'melodic heavy bass; leaves space',pitchJob:'root/5th/6th with melodic contour',articulation:['short','muted','legato']},['intro','verse','chorus','dub break','verse','outro'],{motor:'bass + one-drop',comp:'offbeat skank',texture:'organ bubble'},['organ','electric-guitar','bass','drums','voice'],['rock backbeat','kick on 1 as default','crash section start'],'none','modal-vamp','major/minor/mixolydian','drop-outs, delay throws');
G.reggaeton = simple('reggaeton','4/4','machine-grid','straight dembow',.5,{style:'dembow',rhythmJob:'bass answers the dembow cell; avoid continuous blanket',pitchJob:'root/fifth/approach',articulation:['short','sub']},['intro','verso','coro','puente','coro','outro'],{motor:'dembow + sub-bass',lead:'voice'},['synth','sub-bass','drums','congas','voice'],['swing','rock backbeat'],'3+3+2 dembow','functional/modal-vamp','minor/major','dry punch, controlled sub');
G.rock = { ...simple('rock','4/4','metric-hierarchical','driving backbeat',.5,{style:'riff',rhythmJob:'riff-centered bass/guitar lock',pitchJob:'root/fifth/power-chord tones',articulation:['pick','palm-mute','sustain']},['intro','verse','chorus','bridge','solo','outro'],{motor:'guitar + bass + drums',lead:'guitar/voice'},['overdrive-guitar','bass','drums','organ','voice'],['swing as default','genre-inappropriate Latin cells'],'none','functional','major/minor/mixolydian','live room, guitar-forward'),
  improvisationGrammar:{
    scaleMode:'minor-pentatonic',
    targetToneStrategy:'root-or-fifth-on-beat-1',
    phraseStages:['state','rest','repeat-transpose','rapid-run'],
    transposeDegrees:2,
    phraseBars:4,
    rapidRunOrnaments:['rapid-run','blues-slur','grace-note'],
  }
};
G.ska = simple('ska','4/4','metric-hierarchical','fast offbeat skank',.5,{style:'walking',rhythmJob:'walking/propulsive bass under offbeat guitar',pitchJob:'root/fifth/passing',articulation:['short','staccato']},['intro','verse','chorus','instrumental','verse','outro'],{motor:'offbeat guitar + walking bass',lead:'horns'},['trumpet','trombone','electric-guitar','bass','drums'],['reggae one-drop as identity'],'none','functional','major/minor','bright horns, dry room');
G.soul = simple('soul','4/4','metric-hierarchical','deep pocket',.5,{style:'riff',rhythmJob:'melodic bass with backbeat support',pitchJob:'root/guide-tone/chromatic fills',articulation:['legato','short','ghost']},['intro','verse','chorus','bridge','instrumental','outro'],{motor:'bass + drums',answer:'horn/choir response',lead:'voice'},['rhodes','strings','organ','bass','voice'],['generic R&B clone'],'none','functional','major/minor/blues','tape-like warmth, vocal space');
G.zouk = simple('zouk','4/4','metric-hierarchical','rolling offbeat',.5,{style:'sub',rhythmJob:'soft rolling bass with offbeat movement',pitchJob:'root/5th/6th',articulation:['legato','short']},['intro','verse','refrain','break','refrain','outro'],{motor:'bass + percussion',harmony:'pads/keys',lead:'voice'},['guitar','sub-bass','synth','shaker','voice'],['kizomba clone','reggaeton dembow'],'none','modal-vamp','major/minor','wide pads, soft transient profile');
G['drum-and-bass'] = simple('drum-and-bass','4/4','machine-grid','breakbeat drive',.5,{style:'sub',rhythmJob:'sub/reese locks to break gaps; half-time bass phrasing',pitchJob:'root/fifth with modal tension',articulation:['sustain','glide']},['intro','drop','breakdown','drop','variation','outro'],{motor:'breakbeat + sub/reese',texture:'pads/noise'},['sub-bass','drums','synth','soprano-sax','noise-sweep'],['four-on-floor as core','swing default'],'two-step break','modal-vamp','minor/dorian','sub-heavy, pumping');
G.industrial = simple('industrial','4/4','machine-grid','mechanical pulse',.5,{style:'riff',rhythmJob:'repeating machine riff and bass lock',pitchJob:'chromatic/power/tritone',articulation:['staccato','distorted','gated']},['intro','machine','verse','break','machine','outro'],{motor:'drums + bass + noise',texture:'distortion/noise'},['distortion-guitar','synth','drums','sub-bass','noise-sweep'],['swing','random humanization'],'none','fixed-cluster','chromatic','distortion/noise bursts');
G['punk-hardcore'] = simple('punk-hardcore','4/4','machine-grid','straight speed',.5,{style:'riff',rhythmJob:'direct eighth-note root/power-chord lock',pitchJob:'root/fifth/power chords',articulation:['down-pick','staccato']},['intro','verse','chorus','break','chorus','ending'],{motor:'guitar + bass + drums',lead:'voice'},['distortion-guitar','bass','drums','voice','electric-guitar'],['swing','extended jazz harmony','long intro'],'none','functional','major/minor/power','dry loud room');
G['uk-bass'] = simple('uk-bass','4/4','machine-grid','broken club umbrella',.5,{style:'sub',rhythmJob:'style-owned 2-step/half-time bass cell',pitchJob:'sub root/5th with style-specific movement',articulation:['sustain','glide','gated']},['intro','groove','drop','breakdown','drop','outro'],{motor:'broken drums + sub',texture:'bass sound design'},['sub-bass','synth','drums','cowbell','soprano-sax'],['generic EDM four-on-floor'],'2-step / half-time style cell','modal-vamp','minor/dorian','bass sound design, pumping where style permits');

// Cultural overrides are explicit and data-driven; no genre inherits a universal cycle or interaction model.
const CULTURAL_OVERRIDES: Record<string, Partial<WorldContract>> = {
  tango: {
    cycleLength: 2,
    interactionModel: 'homophonic',
    transitionGrammar: { byDelta: { build: ['arrastre'], drop: ['corte'], hold: [] }, types: ['arrastre','corte'], onEnergyRise: 'arrastre', onEnergyFall: 'corte', authoredPriority: true },
    performanceIdioms: {
      spotlightLeadRubato: true,
      dragProfile: {
        roles: ['lead', 'melody', 'harmony', 'comp', 'bass'],
        maxLagBeats: 0.22,
        growthCurve: 'eased-in',
        resolvesAtCadence: true,
        affectsTempo: true,
      },
    },
    timbreSpace: {
      palette: ['bandoneon', 'violin', 'piano', 'upright-bass', 'cello'],
      production: 'dry room, wood/bellows/bow detail',
      mixCharacter: { dryness: 0.75, bassForward: 0.45, width: 0.4, brightness: 0.48 },
    },
    instrumentDialects: {
      cello: {
        defaultTechnique: 'arco',
        allowedTechniques: ['arco', 'arrastre', 'pizzicato', 'chicharra'],
        bowPressureOverride: 0.7,
        decayMultiplier: 1.5,
        brightnessMultiplier: 0.82,
        bendGlideMs: 55,
        micProximityPreset: 'hall-stage',
        performanceMode: 'acoustic-ensemble',
      },
      violin: {
        defaultTechnique: 'arco',
        allowedTechniques: ['arco', 'chicharra', 'látigo', 'arrastre', 'pizzicato'],
        bowPressureOverride: 0.6,
        decayMultiplier: 1.2,
        brightnessMultiplier: 0.9,
        bendGlideMs: 40,
        micProximityPreset: 'hall-stage',
        performanceMode: 'acoustic-ensemble',
      },
      contrabajo: {
        defaultTechnique: 'arco',
        allowedTechniques: ['arco', 'arrastre', 'chicharra', 'pizzicato', 'golpe'],
        bowPressureOverride: 0.65,
        decayMultiplier: 1.4,
        brightnessMultiplier: 0.85,
        micProximityPreset: 'hall-stage',
        bendGlideMs: 45,
        performanceMode: 'acoustic-ensemble',
      },
      'upright-bass': {
        defaultTechnique: 'arco',
        allowedTechniques: ['arco', 'arrastre', 'chicharra', 'pizzicato', 'golpe'],
        bowPressureOverride: 0.65,
        decayMultiplier: 1.4,
        brightnessMultiplier: 0.85,
        micProximityPreset: 'hall-stage',
        bendGlideMs: 45,
        performanceMode: 'acoustic-ensemble',
      },
      bandoneon: {
        defaultTechnique: 'bellows-press',
        allowedTechniques: ['bellows-press', 'staccato-stab', 'bellows-shake'],
        micProximityPreset: 'room-ambient',
        performanceMode: 'acoustic-ensemble',
      },
      piano: {
        defaultTechnique: 'marcato',
        allowedTechniques: ['marcato', 'arrastre', 'staccato'],
        brightnessMultiplier: 1.1,
        decayMultiplier: 0.82,
        performanceMode: 'acoustic-ensemble',
      },
      guitar: {
        defaultTechnique: 'punteado',
        allowedTechniques: ['punteado', 'arrastre', 'palm-mute', 'chicharra'],
        pluckPositionOverride: 0.35,
        brightnessMultiplier: 0.9,
        decayMultiplier: 0.75,
        micProximityPreset: 'close-mic',
        performanceMode: 'acoustic-ensemble',
      },
    },
  },
  salsa: {
    cycleLength: 2,
    interactionModel: 'interlock',
    transitionGrammar: { byDelta: { build: ['fill'], drop: ['drop-out'], hold: [] }, types: ['fill','drop-out'], onEnergyRise: 'fill', onEnergyFall: 'drop-out', authoredPriority: true },
    timbreSpace: {
      palette: ['piano', 'timbales', 'congas', 'trumpet', 'upright-bass'],
      production: 'bright brass, forward percussion, tight room',
      mixCharacter: { dryness: 0.7, bassForward: 0.6, width: 0.65, brightness: 0.75 },
    },
    instrumentDialects: {
      contrabajo: {
        defaultTechnique: 'pizzicato',
        allowedTechniques: ['pizzicato', 'slap-bass', 'mute'],
        pluckPositionOverride: 0.15,
        contactPointOverride: 0.2,
        decayMultiplier: 0.7,
        brightnessMultiplier: 1.15,
        micProximityPreset: 'close-mic',
        performanceMode: 'acoustic-ensemble',
      },
      'upright-bass': {
        defaultTechnique: 'pizzicato',
        allowedTechniques: ['pizzicato', 'slap-bass', 'mute'],
        pluckPositionOverride: 0.15,
        contactPointOverride: 0.2,
        decayMultiplier: 0.7,
        brightnessMultiplier: 1.15,
        micProximityPreset: 'close-mic',
        performanceMode: 'acoustic-ensemble',
      },
      piano: {
        defaultTechnique: 'guajeo-staccato',
        allowedTechniques: ['staccato', 'montuno', 'accent'],
        brightnessMultiplier: 1.2,
        decayMultiplier: 0.85,
        micProximityPreset: 'close-mic',
      },
      congas: {
        defaultTechnique: 'open-tone',
        allowedTechniques: ['open', 'slap', 'muff', 'bass-tone'],
        brightnessMultiplier: 1.15,
        decayMultiplier: 0.75,
        micProximityPreset: 'close-mic',
      },
      timbales: {
        defaultTechnique: 'cascara',
        allowedTechniques: ['cascara', 'paila', 'rim', 'campana'],
        brightnessMultiplier: 1.25,
        decayMultiplier: 0.65,
        micProximityPreset: 'close-mic',
      },
      trumpet: {
        defaultTechnique: 'stab',
        allowedTechniques: ['stab', 'accent', 'fall'],
        brightnessMultiplier: 1.3,
        decayMultiplier: 0.7,
        bendGlideMs: 25,
      },
    },
  },
  timba: {
    timbreSpace: {
      palette: ['piano', 'timbales', 'congas', 'trumpet', 'bass'],
      production: 'harder attacks, sectional breaks, dense percussion',
      mixCharacter: { dryness: 0.75, bassForward: 0.65, width: 0.7, brightness: 0.8 },
    },
    instrumentDialects: {
      bass: {
        defaultTechnique: 'slap-bass',
        allowedTechniques: ['slap-bass', 'pizzicato', 'slide'],
        brightnessMultiplier: 1.35,
        decayMultiplier: 0.6,
      },
      timbales: {
        defaultTechnique: 'cascara',
        allowedTechniques: ['cascara', 'paila', 'rim', 'campana', 'kick-sub'],
        brightnessMultiplier: 1.3,
        decayMultiplier: 0.6,
      },
      trumpet: {
        defaultTechnique: 'stab',
        allowedTechniques: ['stab', 'screamer', 'fall'],
        brightnessMultiplier: 1.35,
        decayMultiplier: 0.65,
      },
    },
  },
  flamenco: {
    cycleLength: 12,
    interactionModel: 'counterpoint',
    transitionGrammar: { byDelta: { build: ['fill','arrastre'], drop: ['corte'], hold: [] }, types: ['fill','arrastre','corte'], onEnergyRise: 'arrastre', onEnergyFall: 'corte', authoredPriority: true },
    performanceIdioms: { spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['guitar', 'palmas', 'cajon', 'voice', 'castanets'],
      production: 'dry room, strong transient contrast',
      mixCharacter: { dryness: 0.85, bassForward: 0.3, width: 0.35, brightness: 0.6 },
    },
    instrumentDialects: {
      'spanish-guitar': {
        defaultTechnique: 'punteado',
        allowedTechniques: ['punteado', 'rasgueado', 'abanico', 'golpe', 'arrastre', 'palm-mute'],
        pluckPositionOverride: 0.22,
        brightnessMultiplier: 1.25,
        decayMultiplier: 0.85,
        micProximityPreset: 'close-mic',
        excitationType: 'nail',
        performanceMode: 'acoustic-ensemble',
      },
      guitar: {
        defaultTechnique: 'punteado',
        allowedTechniques: ['punteado', 'rasgueado', 'abanico', 'golpe', 'arrastre', 'palm-mute'],
        pluckPositionOverride: 0.22,
        brightnessMultiplier: 1.25,
        decayMultiplier: 0.85,
        micProximityPreset: 'close-mic',
        excitationType: 'nail',
        performanceMode: 'acoustic-ensemble',
      },
      cajon: {
        defaultTechnique: 'center-bass',
        allowedTechniques: ['center-bass', 'edge-slap', 'rim-tap', 'side-wood'],
        micProximityPreset: 'close-mic',
        performanceMode: 'acoustic-ensemble',
      },
      palmas: {
        defaultTechnique: 'clara',
        allowedTechniques: ['sorda', 'clara', 'remate'],
        brightnessMultiplier: 1.2,
        micProximityPreset: 'close-mic',
      },
      voice: {
        defaultTechnique: 'quejio',
        allowedTechniques: ['quejio', 'vibrato', 'falsetto'],
        brightnessMultiplier: 1.15,
        bendGlideMs: 35,
      },
    },
  },
  jazz: {
    cycleLength: 4,
    interactionModel: 'counterpoint',
    performanceIdioms: { spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['tenor-sax', 'upright-bass', 'piano', 'jazz-guitar', 'brush-kit'],
      production: 'live room, moderate width, soft compression',
      mixCharacter: { dryness: 0.45, bassForward: 0.5, width: 0.55, brightness: 0.5 },
    },
    instrumentDialects: {
      'upright-bass': {
        defaultTechnique: 'pizzicato',
        allowedTechniques: ['pizzicato', 'ghost', 'walk'],
        pluckPositionOverride: 0.3,
        decayMultiplier: 1.1,
        brightnessMultiplier: 0.95,
        micProximityPreset: 'room-ambient',
        performanceMode: 'acoustic-ensemble',
      },
      'jazz-guitar': {
        defaultTechnique: 'pick',
        allowedTechniques: ['pick', 'comp', 'chord-melody'],
        pluckPositionOverride: 0.35,
        brightnessMultiplier: 0.85,
        decayMultiplier: 1.05,
        excitationType: 'fingerpad',
        micProximityPreset: 'direct-box',
        performanceMode: 'acoustic-ensemble',
      },
      'brush-kit': {
        defaultTechnique: 'swish',
        allowedTechniques: ['swish', 'tap', 'feather-kick'],
        decayMultiplier: 1.2,
        brightnessMultiplier: 0.9,
        micProximityPreset: 'room-ambient',
      },
      'tenor-sax': {
        defaultTechnique: 'breath',
        allowedTechniques: ['subtone', 'growl', 'legato'],
        brightnessMultiplier: 1.05,
        bendGlideMs: 30,
        micProximityPreset: 'room-ambient',
      },
      piano: {
        defaultTechnique: 'comp',
        allowedTechniques: ['comp', 'voicing', 'legato'],
        brightnessMultiplier: 0.95,
        decayMultiplier: 1.1,
        micProximityPreset: 'room-ambient',
      },
    },
  },
  swing: {
    timbreSpace: {
      palette: ['tenor-sax', 'trumpet', 'trombone', 'piano', 'upright-bass', 'drums'],
      production: 'big band width, brass sizzle, wooden floor acoustic',
      mixCharacter: { dryness: 0.5, bassForward: 0.52, width: 0.6, brightness: 0.6 },
    },
  },
  blues: {
    cycleLength: 12,
    interactionModel: 'counterpoint',
    performanceIdioms: { bluesRockLeadMinorThirdBend: true, spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['electric-guitar', 'harmonica', 'piano', 'bass', 'drums'],
      production: 'tape compression, warm valve room',
      mixCharacter: { dryness: 0.6, bassForward: 0.55, width: 0.5, brightness: 0.55 },
    },
    instrumentDialects: {
      guitar: {
        defaultTechnique: 'pick',
        allowedTechniques: ['pick', 'slide', 'bend', 'palm-mute'],
        pluckPositionOverride: 0.3,
        brightnessMultiplier: 1.1,
        decayMultiplier: 1.2,
        tuningSystemId: 'blues-continuum',
        micProximityPreset: 'direct-box',
        bendGlideMs: 40,
        performanceMode: 'acoustic-ensemble',
      },
      'electric-guitar': {
        defaultTechnique: 'pick',
        allowedTechniques: ['pick', 'slide', 'bend', 'palm-mute'],
        pluckPositionOverride: 0.3,
        brightnessMultiplier: 1.1,
        decayMultiplier: 1.2,
        tuningSystemId: 'blues-continuum',
        micProximityPreset: 'direct-box',
        bendGlideMs: 40,
        performanceMode: 'acoustic-ensemble',
      },
      harmonica: {
        defaultTechnique: 'reed-draw',
        allowedTechniques: ['bend', 'draw', 'blow', 'chuff'],
        brightnessMultiplier: 1.2,
        bendGlideMs: 45,
        micProximityPreset: 'close-mic',
      },
    },
  },
  funk: {
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['slap-bass', 'clavinet', 'electric-guitar', 'drums', 'horn-section'],
      production: 'tape warmth, tight mono-ish center',
      mixCharacter: { dryness: 0.75, bassForward: 0.75, width: 0.45, brightness: 0.65 },
    },
    instrumentDialects: {
      'slap-bass': {
        defaultTechnique: 'thumb-slap',
        allowedTechniques: ['thumb-slap', 'pop', 'ghost', 'mute'],
        pluckPositionOverride: 0.12,
        brightnessMultiplier: 1.4,
        decayMultiplier: 0.6,
        micProximityPreset: 'direct-box',
        performanceMode: 'hybrid',
      },
      'electric-guitar': {
        defaultTechnique: 'scratch',
        allowedTechniques: ['scratch', 'mute', 'skank'],
        pluckPositionOverride: 0.18,
        brightnessMultiplier: 1.35,
        decayMultiplier: 0.55,
        excitationType: 'hard-pick',
      },
      clavinet: {
        defaultTechnique: 'percussive-key',
        allowedTechniques: ['percussive-key', 'mute'],
        brightnessMultiplier: 1.3,
        decayMultiplier: 0.5,
      },
      'horn-section': {
        defaultTechnique: 'stab',
        allowedTechniques: ['stab', 'rip', 'fall'],
        brightnessMultiplier: 1.3,
        decayMultiplier: 0.5,
      },
    },
  },
  reggae: {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['organ', 'electric-guitar', 'bass', 'drums', 'voice'],
      production: 'drop-outs, delay throws',
      mixCharacter: { dryness: 0.25, bassForward: 0.8, width: 0.7, brightness: 0.4 },
    },
    instrumentDialects: {
      bass: {
        defaultTechnique: 'deep-sub-finger',
        allowedTechniques: ['finger', 'palm-mute'],
        decayMultiplier: 1.3,
        brightnessMultiplier: 0.75,
        contactPointOverride: 0.1,
        micProximityPreset: 'direct-box',
      },
      'electric-guitar': {
        defaultTechnique: 'choked-skank',
        allowedTechniques: ['skank', 'chop', 'palm-mute'],
        decayMultiplier: 0.4,
        brightnessMultiplier: 1.2,
        excitationType: 'hard-pick',
      },
      organ: {
        defaultTechnique: 'bubble-chop',
        allowedTechniques: ['chop', 'bubble', 'swell'],
        decayMultiplier: 0.6,
        brightnessMultiplier: 0.85,
      },
    },
  },
  brazilian: {
    timbreSpace: {
      palette: ['cavaquinho', 'pandeiro', 'surdo', 'tamborim', 'voice'],
      production: 'tight ensemble, natural room',
      mixCharacter: { dryness: 0.6, bassForward: 0.55, width: 0.5, brightness: 0.6 },
    },
    instrumentDialects: {
      cavaquinho: {
        defaultTechnique: 'palheta',
        allowedTechniques: ['palheta', 'rasgado'],
        courses: 1,
        excitationType: 'hard-pick',
        pluckPositionOverride: 0.18,
        brightnessMultiplier: 1.35,
        decayMultiplier: 0.7,
      },
      pandeiro: {
        defaultTechnique: 'thumb-slap',
        allowedTechniques: ['thumb', 'fingertip', 'palm', 'jingle'],
        brightnessMultiplier: 1.2,
        decayMultiplier: 0.8,
      },
      surdo: {
        defaultTechnique: 'mallet',
        allowedTechniques: ['open', 'damped', 'hand-mute'],
        brightnessMultiplier: 0.8,
        decayMultiplier: 1.4,
      },
      guitar: {
        defaultTechnique: 'dedilhado',
        allowedTechniques: ['dedilhado', 'batida'],
        excitationType: 'nail',
        brightnessMultiplier: 1.05,
        decayMultiplier: 0.9,
      },
    },
  },
  metal: {
    cycleLength: 1,
    interactionModel: 'unison',
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['distortion-guitar', 'bass', 'drums', 'tremolo-strings', 'voice'],
      production: 'tight multitrack, saturation',
      mixCharacter: { dryness: 0.8, bassForward: 0.7, width: 0.85, brightness: 0.7 },
    },
    instrumentDialects: {
      'distortion-guitar': {
        defaultTechnique: 'palm-mute',
        allowedTechniques: ['palm-mute', 'open', 'pinch-harmonic', 'tremolo'],
        excitationType: 'hard-pick',
        decayMultiplier: 0.7,
        brightnessMultiplier: 1.35,
        performanceMode: 'acoustic-ensemble',
      },
      'overdrive-guitar': {
        defaultTechnique: 'palm-mute',
        allowedTechniques: ['palm-mute', 'open', 'pinch-harmonic'],
        excitationType: 'hard-pick',
        decayMultiplier: 0.75,
        brightnessMultiplier: 1.25,
      },
      bass: {
        defaultTechnique: 'pick',
        allowedTechniques: ['pick', 'down-pick', 'mute'],
        excitationType: 'hard-pick',
        brightnessMultiplier: 1.3,
        decayMultiplier: 0.75,
      },
      'pick-bass': {
        defaultTechnique: 'pick',
        allowedTechniques: ['pick', 'down-pick', 'mute'],
        excitationType: 'hard-pick',
        brightnessMultiplier: 1.35,
        decayMultiplier: 0.75,
      },
    },
  },
  country: {
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['steel-guitar', 'fiddle', 'banjo', 'upright-bass', 'voice'],
      production: 'dry room, string articulation',
      mixCharacter: { dryness: 0.65, bassForward: 0.5, width: 0.55, brightness: 0.6 },
    },
    instrumentDialects: {
      'steel-guitar': {
        defaultTechnique: 'bar-slide',
        allowedTechniques: ['slide', 'volume-swell', 'pedal-bend'],
        bendGlideMs: 60,
        brightnessMultiplier: 1.2,
        decayMultiplier: 1.4,
      },
      fiddle: {
        defaultTechnique: 'shuffle-bow',
        allowedTechniques: ['shuffle-bow', 'double-stop', 'sawstroke'],
        bowPressureOverride: 0.6,
        brightnessMultiplier: 1.25,
        decayMultiplier: 0.85,
      },
      banjo: {
        defaultTechnique: 'three-finger-roll',
        allowedTechniques: ['roll', 'clawhammer', 'choke'],
        excitationType: 'hard-pick',
        brightnessMultiplier: 1.4,
        decayMultiplier: 0.65,
      },
    },
  },
  cumbia: {
    timbreSpace: {
      palette: ['accordion', 'guacharaca', 'tambora', 'bass', 'voice'],
      production: 'dry percussion, bright melodic lead',
      mixCharacter: { dryness: 0.7, bassForward: 0.6, width: 0.5, brightness: 0.65 },
    },
    instrumentDialects: {
      accordion: {
        defaultTechnique: 'bellows-pique',
        allowedTechniques: ['pique', 'chucu-chucu', 'legato'],
        brightnessMultiplier: 1.15,
        decayMultiplier: 0.9,
      },
      guacharaca: {
        defaultTechnique: 'scrape',
        allowedTechniques: ['down-up', 'accent-scrape'],
        brightnessMultiplier: 1.3,
        decayMultiplier: 0.5,
      },
      tambora: {
        defaultTechnique: 'rim-and-skin',
        allowedTechniques: ['skin', 'wood-rim'],
        brightnessMultiplier: 1.1,
        decayMultiplier: 0.85,
      },
    },
  },
  bachata: {
    timbreSpace: {
      palette: ['requinto', 'guitarron', 'guiro', 'bongos', 'voice'],
      production: 'bright guitar, dry percussion',
      mixCharacter: { dryness: 0.75, bassForward: 0.6, width: 0.55, brightness: 0.7 },
    },
    instrumentDialects: {
      requinto: {
        defaultTechnique: 'pique',
        allowedTechniques: ['pique', 'bend', 'staccato'],
        excitationType: 'hard-pick',
        pluckPositionOverride: 0.2,
        brightnessMultiplier: 1.4,
        decayMultiplier: 0.65,
        bendGlideMs: 25,
      },
      guiro: {
        defaultTechnique: 'scrape',
        allowedTechniques: ['scrape', 'tap'],
        brightnessMultiplier: 1.3,
        decayMultiplier: 0.5,
      },
      bongos: {
        defaultTechnique: 'martillo',
        allowedTechniques: ['martillo', 'rim-shot', 'open-tone'],
        brightnessMultiplier: 1.25,
        decayMultiplier: 0.7,
      },
    },
  },
  afrobeats: {
    timbreSpace: {
      palette: ['log-drum', 'kalimba', 'shaker', 'bass', 'voice'],
      production: 'layered percussion, controlled sub',
      mixCharacter: { dryness: 0.6, bassForward: 0.75, width: 0.65, brightness: 0.65 },
    },
    instrumentDialects: {
      'log-drum': {
        defaultTechnique: 'soft-mallet',
        allowedTechniques: ['mallet', 'sub-thump'],
        brightnessMultiplier: 0.85,
        decayMultiplier: 1.2,
      },
      shaker: {
        defaultTechnique: 'shekere-roll',
        allowedTechniques: ['forward-back', 'accent-hit'],
        brightnessMultiplier: 1.1,
        decayMultiplier: 0.6,
      },
      'electric-guitar': {
        defaultTechnique: 'highlife-pluck',
        allowedTechniques: ['clean-pluck', 'palm-mute'],
        pluckPositionOverride: 0.22,
        brightnessMultiplier: 1.2,
        decayMultiplier: 0.75,
        excitationType: 'hard-pick',
      },
    },
  },
  kizomba: {
    timbreSpace: {
      palette: ['sub-bass', 'guitar', 'shaker', 'drums', 'voice'],
      production: 'sub-heavy, soft transients',
      mixCharacter: { dryness: 0.5, bassForward: 0.8, width: 0.65, brightness: 0.5 },
    },
    instrumentDialects: {
      'sub-bass': {
        defaultTechnique: 'sub-sweep',
        allowedTechniques: ['sub-sweep', 'punch-stab'],
        performanceMode: 'programmed-electronic',
        micProximityPreset: 'direct-box',
      },
      shaker: {
        defaultTechnique: 'soft-shake',
        allowedTechniques: ['soft-shake'],
        brightnessMultiplier: 0.9,
        decayMultiplier: 0.6,
      },
    },
  },
  rock: {
    cycleLength: 4,
    interactionModel: 'homophonic',
    transitionGrammar: { byDelta: { build: ['fill'], drop: ['drop-out'], hold: [] }, types: ['fill','drop-out'], onEnergyRise: 'fill', onEnergyFall: 'drop-out', authoredPriority: true },
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['overdrive-guitar', 'bass', 'drums', 'organ', 'voice'],
      production: 'live room, guitar-forward',
      mixCharacter: { dryness: 0.65, bassForward: 0.6, width: 0.7, brightness: 0.65 },
    },
  },
  'hip-hop': {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['drums', 'sub-bass', 'synth', 'electric-guitar', 'voice'],
      production: 'sample space, controlled sub',
      mixCharacter: { dryness: 0.65, bassForward: 0.85, width: 0.6, brightness: 0.55 },
    },
  },
  house: {
    timbreSpace: {
      palette: ['acid-303', 'synth', 'drums', 'sub-bass', 'cowbell'],
      production: 'sidechain pumping, filter automation',
      mixCharacter: { dryness: 0.55, bassForward: 0.8, width: 0.75, brightness: 0.65 },
    },
  },
  electronic: {
    cycleLength: 4,
    interactionModel: 'unison',
    transitionGrammar: { byDelta: { build: ['fill'], drop: ['drop-out'], hold: [] }, types: ['fill','drop-out'], onEnergyRise: 'fill', onEnergyFall: 'drop-out', authoredPriority: true },
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['synth', 'acid-303', 'drums', 'sub-bass', 'noise-sweep'],
      production: 'automation and filter movement',
      mixCharacter: { dryness: 0.5, bassForward: 0.75, width: 0.8, brightness: 0.7 },
    },
  },
  industrial: {
    timbreSpace: {
      palette: ['distortion-guitar', 'synth', 'drums', 'sub-bass', 'noise-sweep'],
      production: 'distortion/noise bursts',
      mixCharacter: { dryness: 0.8, bassForward: 0.8, width: 0.8, brightness: 0.75 },
    },
  },
  'drum-and-bass': {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['sub-bass', 'drums', 'synth', 'soprano-sax', 'noise-sweep'],
      production: 'sub-heavy, pumping',
      mixCharacter: { dryness: 0.6, bassForward: 0.88, width: 0.75, brightness: 0.7 },
    },
  },
  'uk-bass': {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['sub-bass', 'synth', 'drums', 'cowbell', 'soprano-sax'],
      production: 'bass sound design, pumping where style permits',
      mixCharacter: { dryness: 0.55, bassForward: 0.85, width: 0.75, brightness: 0.65 },
    },
  },
  reggaeton: {
    performanceIdioms: { dropPortamento: true },
    timbreSpace: {
      palette: ['synth', 'sub-bass', 'drums', 'congas', 'voice'],
      production: 'dry punch, controlled sub',
      mixCharacter: { dryness: 0.7, bassForward: 0.85, width: 0.6, brightness: 0.65 },
    },
  },
  disco: {
    timbreSpace: {
      palette: ['strings', 'clavinet', 'synth', 'slap-bass', 'drums'],
      production: 'pumping sidechain-style dynamics',
      mixCharacter: { dryness: 0.5, bassForward: 0.7, width: 0.75, brightness: 0.7 },
    },
  },
  folk: {
    performanceIdioms: { spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['banjo', 'fiddle', 'mandolin', 'upright-bass', 'voice'],
      production: 'natural room, limited processing',
      mixCharacter: { dryness: 0.55, bassForward: 0.4, width: 0.45, brightness: 0.5 },
    },
  },
  gospel: {
    performanceIdioms: { spotlightLeadRubato: true },
    timbreSpace: {
      palette: ['organ', 'choir', 'piano', 'bass', 'drums'],
      production: 'crescendo and room bloom',
      mixCharacter: { dryness: 0.35, bassForward: 0.55, width: 0.7, brightness: 0.6 },
    },
  },
  'r-and-b': {
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['rhodes', 'fretless-bass', 'clavinet', 'drums', 'voice'],
      production: 'warm, close, vocal-forward',
      mixCharacter: { dryness: 0.6, bassForward: 0.7, width: 0.6, brightness: 0.55 },
    },
  },
  soul: {
    performanceIdioms: { bluesRockLeadMinorThirdBend: true },
    timbreSpace: {
      palette: ['rhodes', 'strings', 'organ', 'bass', 'voice'],
      production: 'tape-like warmth, vocal space',
      mixCharacter: { dryness: 0.5, bassForward: 0.65, width: 0.55, brightness: 0.55 },
    },
  },
  ska: {
    timbreSpace: {
      palette: ['trumpet', 'trombone', 'electric-guitar', 'bass', 'drums'],
      production: 'bright horns, dry room',
      mixCharacter: { dryness: 0.75, bassForward: 0.6, width: 0.6, brightness: 0.7 },
    },
  },
  zouk: {
    timbreSpace: {
      palette: ['guitar', 'sub-bass', 'synth', 'shaker', 'voice'],
      production: 'wide pads, soft transient profile',
      mixCharacter: { dryness: 0.45, bassForward: 0.7, width: 0.7, brightness: 0.6 },
    },
  },
  'punk-hardcore': {
    timbreSpace: {
      palette: ['distortion-guitar', 'bass', 'drums', 'voice', 'electric-guitar'],
      production: 'dry loud room',
      mixCharacter: { dryness: 0.85, bassForward: 0.65, width: 0.75, brightness: 0.75 },
    },
  },
};
for (const [id, override] of Object.entries(CULTURAL_OVERRIDES)) {
  if (G[id]) {
    G[id] = {
      ...G[id],
      ...override,
      performanceIdioms: {
        ...(G[id]?.performanceIdioms ?? {}),
        ...(override.performanceIdioms ?? {}),
      },
      timbreSpace: {
        ...G[id].timbreSpace,
        ...(override.timbreSpace ?? {}),
        mixCharacter: {
          ...(G[id].timbreSpace.mixCharacter ?? { dryness: 0.6, bassForward: 0.5, width: 0.5, brightness: 0.5 }),
          ...(override.timbreSpace?.mixCharacter ?? {}),
        },
      },
      instrumentDialects: {
        ...(G[id]?.instrumentDialects ?? {}),
        ...(override.instrumentDialects ?? {}),
      },
    };
  }
}

export const GENRE_CONTRACTS: Record<string, WorldContract> = G;

const STYLE_PATCHES: Record<string, Partial<WorldContract>> = {
  'bachata-bachata-urbana': { groove:{...G.bachata.groove,lean:-2,roleLean:{...G.bachata.groove.roleLean,bass:-10}}, bass:{...G.bachata.bass,style:'sub',rhythmJob:'syncopated urban bass under guitar pattern'}, form:['intro','verso','coro','mambo','puente','cierre'] },
  'bachata-sensual': { groove:{...G.bachata.groove,lean:4,roleLean:{...G.bachata.groove.roleLean,lead:9}}, bass:{...G.bachata.bass,style:'sub'}, form:['intro','verso','pre-coro','coro','break','coro','cierre'], timbreSpace:{...G.bachata.timbreSpace,production:'soft transients, intimate vocal space'} },
  'bachata-bachata-moderna': { groove:{...G.bachata.groove,lean:0,roleLean:{...G.bachata.groove.roleLean,comp:4}}, form:['intro','verso','coro','mambo','solo','coro','cierre'] },
  'bachata-bolero-bachata': { groove:{...G.bachata.groove,lean:5,roleLean:{...G.bachata.groove.roleLean,lead:10}}, bass:{...G.bachata.bass,style:'rootFifth'}, form:['intro','verso','coro','puente','coda'], timbreSpace:{...G.bachata.timbreSpace,production:'lyrical bolero phrasing'} },
  'bachata-bachatango': { pulseModel:'additive', timeline:'3+3+2 fusion cell', groove:{...G.bachata.groove,lean:2,roleLean:{...G.bachata.groove.roleLean,comp:6}}, bass:{...G.bachata.bass,style:'riff'}, form:['intro','A','B','3+3+2','coda'] },

  'disco-eurodisco': { groove:{...G.disco.groove,lean:-1}, timbreSpace:{...G.disco.timbreSpace,production:'bright string/synth arrangement, wide stereo'} },
  'disco-hi-nrg': { groove:{...G.disco.groove,lean:-3,dynamicRange:1.28}, bass:{...G.disco.bass,style:'octave'}, form:['intro','build','groove','break','groove','outro'] },
  'disco-disco-funk': { groove:{...G.disco.groove,lean:-2,roleLean:{...G.disco.groove.roleLean,bass:-5,comp:-3}}, bass:{...G.disco.bass,style:'riff'}, timbreSpace:{...G.disco.timbreSpace,production:'funk guitar/clavinet syncopation'} },
  'disco-italo-disco': { groove:{...G.disco.groove,lean:0,roleLean:{...G.disco.groove.roleLean,pad:4}}, harmonyModel:'modal-vamp', form:['intro','sequence','break','sequence','outro'], timbreSpace:{...G.disco.timbreSpace,production:'sequenced synth bass and arpeggiators'} },
  'disco-nu-disco': { groove:{...G.disco.groove,lean:2,roleLean:{...G.disco.groove.roleLean,comp:3}}, timbreSpace:{...G.disco.timbreSpace,production:'modern filtered disco with tighter sub'} },

  'house-deep-house': { groove:{...G.house.groove,lean:2,roleLean:{...G.house.groove.roleLean,pad:5}}, form:['intro','groove','break','groove','outro'], timbreSpace:{...G.house.timbreSpace,production:'warm sub, restrained percussion'} },
  'house-classic-house': { groove:{...G.house.groove,lean:-1}, form:['intro','groove','breakdown','drop','groove','outro'] },
  'house-soulful-house': { groove:{...G.house.groove,lean:3,roleLean:{...G.house.groove.roleLean,lead:6}}, harmonyModel:'functional', form:['intro','verse','vamp','break','vamp','outro'], timbreSpace:{...G.house.timbreSpace,production:'Rhodes/organ warmth'} },
  'house-tech-house': { groove:{...G.house.groove,lean:-2,roleLean:{...G.house.groove.roleLean,bass:-4}}, form:['intro','groove','breakdown','drop','groove','outro'] },
  'house-garage-house': { groove:{...G.house.groove,lean:1,roleLean:{...G.house.groove.roleLean,comp:5}}, pulseModel:'metric-hierarchical', timeline:'UK garage swing cell' },
  'house-acid-house': { groove:{...G.house.groove,lean:-4,roleLean:{...G.house.groove.roleLean,bass:-5}}, form:['intro','acid groove','break','acid groove','outro'], timbreSpace:{...G.house.timbreSpace,production:'acid resonance automation'} },
  'house-french-house': { groove:{...G.house.groove,lean:0}, form:['intro','filter build','groove','break','groove','outro'], timbreSpace:{...G.house.timbreSpace,production:'sampled disco loop, filtering, pumping'} },

  'ska-traditional': { groove:{...G.ska.groove,lean:-2}, bass:{...G.ska.bass,style:'walking'}, form:['intro','verse','chorus','instrumental','verse','outro'] },
  'ska-two-tone': { groove:{...G.ska.groove,lean:-3,roleLean:{...G.ska.groove.roleLean,comp:-5}}, bass:{...G.ska.bass,style:'rootFifth'}, timbreSpace:{...G.ska.timbreSpace,production:'dry two-tone guitar/horn contrast'} },
  'ska-rocksteady': { groove:{...G.ska.groove,lean:3,roleLean:{...G.ska.groove.roleLean,bass:-6}}, form:['intro','verse','chorus','instrumental','verse','coda'] },
  'ska-ska-punk': { groove:{...G.ska.groove,lean:-4,dynamicRange:1.3}, bass:{...G.ska.bass,style:'riff'}, form:['intro','verse','chorus','break','chorus','ending'] },
  'ska-ska-core': { groove:{...G.ska.groove,lean:-5}, bass:{...G.ska.bass,style:'riff'}, timbreSpace:{...G.ska.timbreSpace,production:'hard-edged guitar and brass'} },
  'ska-latin-ska': { timeline:'Latin syncopation cell', groove:{...G.ska.groove,lean:-1,roleLean:{...G.ska.groove.roleLean,perc:-4}}, form:['intro','verso','coro','mambo','cierre'] },
  'ska-ska-jazz': { groove:{...G.ska.groove,lean:2,roleLean:{...G.ska.groove.roleLean,lead:8}}, bass:{...G.ska.bass,style:'walking'}, form:['head','solo','trading','head','tag'] },

  'timba-timba-funk': { groove:{...G.timba.groove,lean:-5,roleLean:{...G.timba.groove.roleLean,bass:-18}}, bass:{...G.timba.bass,style:'riff'}, form:['intro','verso','coro','marcha','gear','cierre'] },
  'timba-timba-despelote': { groove:{...G.timba.groove,lean:-4,dynamicRange:1.4}, form:['intro','coro','marcha','despelote','break','cierre'] },
  'timba-timba-rumbeada': { groove:{...G.timba.groove,lean:0,roleLean:{...G.timba.groove.roleLean,perc:-5}}, form:['intro','coro','rumba','gear','cierre'] },

  'industrial-ebm': { groove:{...G.industrial.groove,lean:-2}, bass:{...G.industrial.bass,style:'octave'}, pulseModel:'machine-grid', form:['intro','sequence','break','sequence','outro'] },
  'industrial-industrial-rock': { groove:{...G.industrial.groove,lean:-1}, bass:{...G.industrial.bass,style:'riff'}, timbreSpace:{...G.industrial.timbreSpace,production:'industrial rock guitars + machine percussion'} },
  'industrial-industrial-metal': { groove:{...G.industrial.groove,lean:-3}, bass:{...G.industrial.bass,style:'riff'}, timbreSpace:{...G.industrial.timbreSpace,production:'metal precision + industrial distortion'} },
  'industrial-industrial-techno': { groove:{...G.industrial.groove,lean:-5}, bass:{...G.industrial.bass,style:'sub'}, form:['intro','machine','build','drop','machine','outro'] },
  'industrial-noise-industrial': { groove:{...G.industrial.groove,lean:0,humanizeMs:2}, harmonyModel:'fixed-cluster', form:['texture','burst','texture','noise break','coda'], timbreSpace:{...G.industrial.timbreSpace,production:'noise bursts and extreme bandwidth contrast'} },
  'industrial-dark-industrial': { groove:{...G.industrial.groove,lean:3}, bass:{...G.industrial.bass,style:'sub'}, timbreSpace:{...G.industrial.timbreSpace,production:'dark saturated low-mid weight'} },
  'metal-thrash': { groove:{...G.metal.groove,lean:-5}, form:['intro','riff','verse','chorus','breakdown','solo','ending'] },
  'metal-death-metal': { groove:{...G.metal.groove,lean:-4,roleLean:{...G.metal.groove.roleLean,bass:-4}}, bass:{...G.metal.bass,style:'riff'}, pitchModel:'minor/phrygian chromatic', timbreSpace:{...G.metal.timbreSpace,production:'dense double-kick and low-tuned guitar wall'} },
  'metal-black-metal': { groove:{...G.metal.groove,lean:0,roleLean:{...G.metal.groove.roleLean,lead:5}}, pitchModel:'minor/phrygian tremolo', timbreSpace:{...G.metal.timbreSpace,production:'cold wide guitars, tremolo layers'} },
  'metal-doom-metal': { groove:{...G.metal.groove,lean:5,roleLean:{...G.metal.groove.roleLean,bass:2}}, bass:{...G.metal.bass,style:'root'}, form:['intro','riff','verse','chorus','instrumental','coda'], timbreSpace:{...G.metal.timbreSpace,production:'slow sustained distortion'} },
  'metal-sludge': { groove:{...G.metal.groove,lean:4}, bass:{...G.metal.bass,style:'riff'}, timbreSpace:{...G.metal.timbreSpace,production:'gritty saturation, loose ensemble'} },
  'metal-progressive-metal': { groove:{...G.metal.groove,lean:-1}, pulseModel:'additive', meter:'4/4', timeline:'odd-grouping phrase cells', form:['intro','riff','development','chorus','odd-meter break','solo','coda'] },

  'rock-hard-rock': { groove:{...G.rock.groove,lean:-3}, bass:{...G.rock.bass,style:'riff'}, timbreSpace:{...G.rock.timbreSpace,production:'guitar-forward live band'} },
  'rock-grunge': { groove:{...G.rock.groove,lean:2,roleLean:{...G.rock.groove.roleLean,lead:7}}, timbreSpace:{...G.rock.timbreSpace,production:'wide dynamics, rough guitar texture'} },
  'rock-progressive-rock': { groove:{...G.rock.groove,lean:0}, pulseModel:'additive', timeline:'odd-grouping phrase cells', form:['intro','theme','development','solo','reprise','coda'] },
  'rock-garage-rock': { groove:{...G.rock.groove,lean:-4,humanizeMs:8}, timbreSpace:{...G.rock.timbreSpace,production:'small-room raw guitar/bass/drums'} },
  'rock-psychedelic-rock': { groove:{...G.rock.groove,lean:4}, harmonyModel:'modal-vamp', form:['intro','vamp','verse','instrumental','vamp','coda'], timbreSpace:{...G.rock.timbreSpace,production:'modulation, tape and long tails'} },
  'rock-post-rock': { groove:{...G.rock.groove,lean:3}, form:['intro','build','theme','crescendo','peak','coda'], timbreSpace:{...G.rock.timbreSpace,production:'large dynamic arcs'} },
  'rock-shoegaze': { groove:{...G.rock.groove,lean:5,roleLean:{...G.rock.groove.roleLean,pad:10,lead:9}}, timbreSpace:{...G.rock.timbreSpace,production:'dense reverb/delay wall with soft attacks'} },


  'tango-tango-nuevo': { pulseModel:'additive', meter:'4/4', subdivision:16, timeline:'3+3+2 phrase grouping', form:['intro','A','B','3+3+2 variation','coda'] },
  'tango-milonga': { meter:'2/4', subdivision:8, pulseModel:'metric-hierarchical', timeline:'milonga 3+3+2 cell' },
  'tango-tango-vals': { meter:'3/4', subdivision:12, pulseModel:'metric-hierarchical', timeline:'none', form:['intro','A','B','A','coda'] },
  'salsa-mambo-on-2': { timeline:'son clave 2-3 with on-2 accent organization', groove:{...G.salsa.groove,lean:-2,roleLean:{...G.salsa.groove.roleLean,comp:-9,stab:-7}} },
  'salsa-salsa-dura': { groove:{...G.salsa.groove,dynamicRange:1.32,humanizeMs:4}, form:['intro','verso','montuno','mambo','descarga','cierre'] },
  'salsa-salsa-romantica': { groove:{...G.salsa.groove,lean:1,roleLean:{...G.salsa.groove.roleLean,lead:6}}, form:['intro','verso','coro','montuno','puente','cierre'] },
  'jazz-bebop': { groove:{...G.jazz.groove,swing:.58,lean:1}, form:['head','solo','trading','head','tag'] },
  'jazz-free-jazz': { pulseModel:'free-rubato', meter:'4/4', timeline:'none', groove:{...G.jazz.groove,swing:.5,lean:5,roleLean:{...G.jazz.groove.roleLean,lead:12}} },
  'reggae-dub': { form:['intro','drop','dub vamp','drop','version','outro'] },
  'reggae-dancehall': { groove:{...G.reggae.groove,lean:0,roleLean:{...G.reggae.groove.roleLean,bass:-5,comp:3}}, form:['intro','verse','chorus','drop','verse','outro'] },
  'reggaeton-neoperreo': { groove:{...G.reggaeton.groove,roleLean:{...G.reggaeton.groove.roleLean,bass:-10}}, form:['intro','verso','coro','puente','perreo break','coro'] },
  'drum-and-bass-jungle': { subdivision:16, groove:{...G['drum-and-bass'].groove,lean:-2}, form:['intro','break','drop','variation','drop','outro'] },
};

function cloneDeep<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

export function contractForGenre(genreId: string, style?: SongStyle): WorldContract {
  const baseContract = GENRE_CONTRACTS[genreId];
  if (!baseContract) throw new Error(`No Genre Contract for ${genreId}`);
  let out = cloneDeep(baseContract);
  const patch = style ? STYLE_PATCHES[style.id] : undefined;
  if (patch) out = mergeContract(out, patch);

  // A concrete SongStyle can refine the world contract. These are audible
  // values, not display metadata: meter, timeline, swing, timing, bass job,
  // tuning and room all flow into runtime.
  if (style?.rhythm) {
    const r = style.rhythm;
    const meter = r.meter ?? out.meter;
    const subdivision = /12\/8/.test(meter) ? 12 : /3\/4|6\/8/.test(meter) ? 12 : /2\/4/.test(meter) ? 8 : 16;
    out.meter = meter;
    out.subdivision = subdivision;
    out.groove = {
      ...out.groove,
      swing: (r.swingPercentage ?? out.groove.swing * 100) / 100,
      humanizeMs: r.humanizeJitterMs ?? out.groove.humanizeMs,
    };
    if (r.microtimingFeel === 'laid-back' || r.microtimingFeel === 'atrasado') out.groove.lean = Math.max(out.groove.lean, 4);
    if (r.microtimingFeel === 'pushed') out.groove.lean = Math.min(out.groove.lean, -3);
    if (r.microtimingFeel === 'rubato') out.microtiming.byRole.lead = [Math.max(8, out.groove.roleLean.lead ?? 8)];
    if (r.timelineClave) {
      out.timeline = r.timelineClave;
      out.timelineRequired = true;
    }
  }
  if (style?.harmony) {
    out.harmonyModel = style.harmony.model ?? out.harmonyModel;
    out.tuningSystem = style.harmony.tuningSystem ?? out.tuningSystem;
    if (style.harmony.bassMotion) out.bass.style = style.harmony.bassMotion as BassDialect['style'];
    out.harmonyVocabulary = Array.from(new Set([...out.harmonyVocabulary, ...(style.harmony.chordVocabulary ?? [])]));
  }
  return out;
}

function mergeContract(baseContract: WorldContract, patch: Partial<WorldContract>): WorldContract {
  const out = { ...baseContract, ...patch } as WorldContract;
  out.groove = { ...baseContract.groove, ...(patch.groove ?? {}), roleLean:{...baseContract.groove.roleLean,...(patch.groove?.roleLean ?? {})} };
  out.bass = { ...baseContract.bass, ...(patch.bass ?? {}) };
  out.microtiming = { ...baseContract.microtiming, ...(patch.microtiming ?? {}), byRole:{...baseContract.microtiming.byRole,...(patch.microtiming?.byRole ?? {})} };
  out.timbreSpace = {
    ...baseContract.timbreSpace,
    ...(patch.timbreSpace ?? {}),
    mixCharacter: {
      ...(baseContract.timbreSpace.mixCharacter ?? { dryness: 0.6, bassForward: 0.5, width: 0.5, brightness: 0.5 }),
      ...(patch.timbreSpace?.mixCharacter ?? {}),
    },
  };
  out.percussion = { ...baseContract.percussion, ...(patch.percussion ?? {}) };
  out.instrumentDialects = { ...baseContract.instrumentDialects, ...(patch.instrumentDialects ?? {}) };
  return out;
}
