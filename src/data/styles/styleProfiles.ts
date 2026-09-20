import { SongStyle } from './schema';

/**
 * Musical song-type profiles. These are deliberately structural: a profile
 * changes groove/timeline, form, bass job, ensemble and harmonic vocabulary,
 * not merely tempo or display text.
 */
export interface StyleSongProfile {
  bpm?: number;
  tempoRange?: [number, number];
  meter?: string;
  feel?: SongStyle['rhythm'] extends infer _ ? string : string;
  swing?: number;
  microtiming?: SongStyle['rhythm'];
  timeline?: string;
  pulseModel?: string;
  form: string[];
  harmonyModel?: string;
  modePolicy?: string;
  progressions: string[][];
  harmonicRhythm?: string;
  bassMotion?: string;
  signatureCell: string;
  instruments: string[];
  contours: string[];
  arrangement: string[];
  production: string;
}

const P = (x: Omit<StyleSongProfile, 'progressions'> & { progressions: string[][] }): StyleSongProfile => x;

/** Small, intentionally opinionated song-type vocabularies. */
export const STYLE_PROFILE_LIBRARY: Record<string, StyleSongProfile[]> = {
  afrobeats: [
    P({bpm:106,tempoRange:[100,112],meter:'4/4',feel:'laid-back syncopation',swing:50,pulseModel:'metric-hierarchical',form:['intro','verse','pre-chorus','chorus','verse','chorus','bridge','chorus','outro'],progressions:[['Am7','Fmaj7','Cmaj7','G6'],['Dm7','G7','Cmaj7','Am7']],signatureCell:'syncopated kick + shaker + interlocking guitar',instruments:['log-drum','shaker','electric-guitar','bass','voice'],contours:['short vocal hook','repeated syncopated motif'],arrangement:['shaker establishes pulse','bass enters after groove','hook answers vocal'],production:'dry-forward percussion, warm bass, spacious vocal'}),
    P({bpm:118,tempoRange:[110,124],meter:'4/4',feel:'straight Afrobeat ostinato',swing:50,pulseModel:'long-cycle',form:['intro','vamp','verse','horn theme','vamp','break','vamp','outro'],progressions:[['Am7','Dm7','Am7','E7'],['Dm7','G7','Cmaj7','A7']],signatureCell:'long vamp + horn riff + layered percussion',instruments:['electric-guitar','horn-section','bass','congas','drums'],contours:['horn riff','modal repeated motif'],arrangement:['guitar ostinato','horn replies','long instrumental vamp'],production:'live-room horn/percussion density'}),
    P({bpm:108,tempoRange:[100,116],meter:'4/4',feel:'log-drum syncopation',swing:50,pulseModel:'metric-hierarchical',form:['intro','vocal','groove','drop','groove','break','final groove','outro'],progressions:[['Am7','G','Fmaj7','G'],['Dm7','Cmaj7','Bbmaj7','C']],signatureCell:'log-drum bass figure with sparse chord stabs',instruments:['log-drum','piano','shaker','sub-bass','voice'],contours:['percussive bass motif','airy vocal phrase'],arrangement:['bass owns low register','keys stab offbeats','drop removes harmony'],production:'sub-forward, short stabs, wide top percussion'}),
  ],
  bachata: [
    P({bpm:128,tempoRange:[120,136],meter:'4/4',feel:'derecho guitar-led',swing:50,pulseModel:'metric-hierarchical',form:['intro','verse','chorus','verse','chorus','requinto','chorus','coda'],progressions:[['Am','F','C','G'],['Dm','Bb','F','C']],signatureCell:'requinto arpeggio + güira + bongo',instruments:['requinto','guitarron','guiro','bongos','voice'],contours:['requinto fill','vocal call and answer'],arrangement:['requinto defines identity','guitarron anticipates cadence','bongo fills phrase ends'],production:'dry guitars, bright güira, intimate vocal'}),
    P({bpm:132,tempoRange:[124,140],meter:'4/4',feel:'modern syncopated bachata',swing:50,pulseModel:'metric-hierarchical',form:['intro','verse','pre','chorus','drop','chorus','instrumental','outro'],progressions:[['Bm7','Gmaj7','Dmaj7','A'],['Em7','A7','Dmaj7','Bm7']],signatureCell:'electronic low end around requinto syncopation',instruments:['requinto','sub-bass','guiro','bongos','synth'],contours:['short guitar hook','vocal melisma'],arrangement:['sub replaces acoustic low end','guitar hook repeats','drop strips to percussion'],production:'modern low-end, tight transient guitars'}),
    P({bpm:118,tempoRange:[110,126],meter:'4/4',feel:'bolero-derived slow bachata',swing:50,pulseModel:'metric-hierarchical',form:['intro','A','A','B','A','requinto','coda'],progressions:[['Dm','A7','Dm','Gm'],['Gm7','C7','Fmaj7','A7']],signatureCell:'bolero phrasing over bachata percussion',instruments:['guitar','requinto','upright-bass','bongos','voice'],contours:['long legato melody','ornamental guitar response'],arrangement:['bass sustains','requinto fills vocal gaps','final cadence expands'],production:'warm acoustic room, restrained percussion'}),
  ],
  blues: [
    P({bpm:88,tempoRange:[78,96],meter:'4/4',feel:'shuffle',swing:66,pulseModel:'metric-hierarchical',form:['intro','AAB','AAB','solo','AAB','turnaround'],progressions:[['C7','F7','C7','C7','F7','F7','C7','C7','G7','F7','C7','G7']],signatureCell:'12-bar shuffle + vocal/guitar answers',instruments:['harmonica','jazz-guitar','upright-bass','brush-kit','voice'],contours:['blues vocal phrase','guitar answer'],arrangement:['vocal leaves answer space','bass walks/shuffles','turnaround announces return'],production:'small-room, tube-like guitar/harmonica focus'}),
    P({bpm:104,tempoRange:[96,112],meter:'4/4',feel:'straight Texas blues',swing:54,pulseModel:'metric-hierarchical',form:['riff','verse','chorus','solo','verse','solo','ending'],progressions:[['A7','D7','A7','A7','D7','D7','A7','A7','E7','D7','A7','E7']],signatureCell:'riff-driven 12-bar with driving backbeat',instruments:['overdrive-guitar','electric-guitar','bass','drums','voice'],contours:['guitar riff','double-stop answer'],arrangement:['guitar owns riff','bass follows kick','solo expands register'],production:'loud small-band room'}),
    P({bpm:72,tempoRange:[62,82],meter:'4/4',feel:'slow minor blues',swing:58,pulseModel:'metric-hierarchical',form:['intro','verse','verse','solo','verse','coda'],progressions:[['Am7','Am7','Dm7','Am7','Dm7','Dm7','Am7','Am7','E7','Dm7','Am7','E7']],signatureCell:'slow blues triplet phrasing + space',instruments:['electric-guitar','organ','upright-bass','brush-kit','voice'],contours:['long bent phrases','organ responses'],arrangement:['large vocal gaps','organ swells','guitar bends lead'],production:'dark room, long sustain'}),
  ],
  brazilian: [
    P({bpm:96,tempoRange:[88,104],meter:'2/4',feel:'samba syncopation',swing:50,pulseModel:'timeline-cycle',form:['intro','samba','break','samba','coro','samba','coda'],progressions:[['C6','A7','Dm7','G7'],['Fmaj7','E7','Am7','D7']],signatureCell:'surdo + tamborim + pandeiro interlock',instruments:['surdo','pandeiro','tamborim','cavaquinho','voice'],contours:['cavaquinho syncopation','chorus hook'],arrangement:['surdo anchors cycle','tamborim crosses subdivisions','cavaquinho fills harmony'],production:'dry percussive ensemble'}),
    P({bpm:82,tempoRange:[72,92],meter:'4/4',feel:'bossa nova laid-back',swing:50,pulseModel:'metric-hierarchical',form:['intro','A','B','A','solo','A','coda'],progressions:[['Dm7','G7','Cmaj7','A7b9'],['Am7','D7','Gmaj7','C7']],signatureCell:'violão thumb-bass + syncopated chord pattern',instruments:['nylon-guitar','upright-bass','piano','brush-kit','voice'],contours:['quiet vocal melody','chromatic guitar inner line'],arrangement:['bass and thumb alternate','brushes stay light','piano colors cadences'],production:'intimate dry room, soft dynamics'}),
    P({bpm:118,tempoRange:[108,126],meter:'2/4',feel:'forró baião pulse',swing:50,pulseModel:'timeline-cycle',form:['intro','tema','verse','instrumental','verse','coda'],progressions:[['Am','G','F','E7'],['Dm','C','Bb','A7']],signatureCell:'zabumba + triangle + accordion',instruments:['accordion','zabumba','triangle','bass','voice'],contours:['accordion hook','short vocal phrases'],arrangement:['zabumba drives cycle','accordion answers voice','triangle constant shimmer'],production:'bright dance hall'}),
  ],
  country: [
    P({bpm:104,tempoRange:[92,116],meter:'4/4',feel:'boom-chick',swing:54,pulseModel:'metric-hierarchical',form:['intro','verse','chorus','verse','chorus','solo','chorus','outro'],progressions:[['G','C','G','D'],['G','Em','C','D']],signatureCell:'alternating bass + strum',instruments:['acoustic-guitar','steel-guitar','upright-bass','fiddle','voice'],contours:['fiddle fill','steel answer'],arrangement:['bass alternates root/fifth','snare supports 2/4','steel fills vocal gaps'],production:'honky-tonk room, dry vocal'}),
    P({bpm:128,tempoRange:[118,138],meter:'4/4',feel:'train shuffle',swing:62,pulseModel:'metric-hierarchical',form:['intro','verse','chorus','verse','solo','chorus','ending'],progressions:[['A','D','A','E'],['A','F#m','D','E']],signatureCell:'train beat + walking bass + fiddle',instruments:['acoustic-guitar','fiddle','upright-bass','brush-kit','voice'],contours:['fiddle twin-line','shuffle vocal'],arrangement:['brush train pulse','fiddle doubles hook','bass walks between roots'],production:'small live room'}),
    P({bpm:150,tempoRange:[132,164],meter:'4/4',feel:'bluegrass drive',swing:50,pulseModel:'metric-hierarchical',form:['breakdown','verse','instrumental','verse','fiddle break','banjo break','ending'],progressions:[['G','C','G','D'],['G','Em','C','D']],signatureCell:'banjo roll + upright bass + fiddle breaks',instruments:['banjo','mandolin','fiddle','upright-bass','voice'],contours:['instrumental breaks','stacked vocal harmony'],arrangement:['rotating solo breaks','bass on every beat','mandolin chop on backbeat'],production:'acoustic stage, minimal effects'}),
  ],
  disco: [
    P({bpm:120,tempoRange:[116,124],meter:'4/4',feel:'four-on-the-floor',swing:50,pulseModel:'machine-grid',form:['intro','groove','verse','chorus','break','groove','final chorus','outro'],progressions:[['Am7','Dm7','G7','Cmaj7'],['Fm7','Bb7','Ebmaj7','C7']],signatureCell:'four-on-floor + octave bass + string stabs',instruments:['drums','slap-bass','strings','clavinet','synth'],contours:['string hook','rhythmic guitar answer'],arrangement:['kick constant','bass octave motion','strings enter on chorus'],production:'bright dance room, controlled pumping'}),
    P({bpm:130,tempoRange:[124,136],meter:'4/4',feel:'Hi-NRG straight drive',swing:50,pulseModel:'machine-grid',form:['intro','build','groove','break','drop','groove','outro'],progressions:[['Dm7','G7','Cmaj7','A7'],['Em7','A7','Dmaj7','B7']],signatureCell:'relentless four-on-floor + octave bass',instruments:['synth','drums','strings','bass','voice'],contours:['anthem hook','rising synth line'],arrangement:['layers add every 8 bars','bass never stops','break strips kick'],production:'bright compressed club mix'}),
    P({bpm:112,tempoRange:[106,118],meter:'4/4',feel:'disco-funk syncopation',swing:50,pulseModel:'metric-hierarchical',form:['intro','groove','verse','chorus','instrumental','chorus','outro'],progressions:[['Dm7','G7','Cmaj7','A7'],['Am7','D7','Gmaj7','C7']],signatureCell:'chicken-scratch guitar + clavinet + disco kick',instruments:['clavinet','electric-guitar','slap-bass','strings','drums'],contours:['guitar riff','clavinet answer'],arrangement:['guitar interlocks with bass','strings punctuate phrases','drums stay danceable'],production:'tight funk/disco room'}),
  ],
  house: [
    P({bpm:122,tempoRange:[118,126],meter:'4/4',feel:'four-on-floor deep house',swing:50,pulseModel:'machine-grid',form:['intro','groove','vocal','break','drop','groove','outro'],progressions:[['Dm7','G7','Cmaj7','Am7'],['Am7','Fmaj7','Cmaj7','G6']],signatureCell:'deep four-on-floor + warm chord stab + sub',instruments:['drums','sub-bass','rhodes','synth','voice'],contours:['two-note vocal hook','filtered chord motif'],arrangement:['DJ intro strips harmony','break removes kick','drop restores full groove'],production:'warm low end, sidechain-style pump'}),
    P({bpm:126,tempoRange:[122,130],meter:'4/4',feel:'classic piano house',swing:50,pulseModel:'machine-grid',form:['intro','piano riff','groove','break','piano chorus','groove','outro'],progressions:[['C','Am','F','G'],['F','G','Em','Am']],signatureCell:'piano octave/stab hook over four-on-floor',instruments:['piano','organ','bass','drums','voice'],contours:['piano riff','anthem vocal'],arrangement:['piano is hook','organ fills chorus','kick remains constant'],production:'bright club piano, pumping bass'}),
    P({bpm:124,tempoRange:[120,128],meter:'4/4',feel:'acid 303 sequence',swing:50,pulseModel:'machine-grid',form:['intro','acid sequence','build','drop','acid variation','break','outro'],progressions:[['Am7','G','F','G'],['Em7','D','C','D']],signatureCell:'repeating resonant acid sequence',instruments:['acid-303','drums','sub-bass','synth','noise-sweep'],contours:['sequenced filter motif','one-note hook'],arrangement:['filter opens over time','bass locks to kick','drop returns full sequence'],production:'resonant mono synth, hard transient kick'}),
  ],
  jazz: [
    P({bpm:170,tempoRange:[150,220],meter:'4/4',feel:'bebop eighth-note swing',swing:58,pulseModel:'metric-hierarchical',form:['head','solo','solo','trading','head','tag'],progressions:[['Dm7','G7','Cmaj7','A7'],['Am7','D7','Gmaj7','C7']],signatureCell:'fast head + walking bass + ride',instruments:['tenor-sax','upright-bass','piano','ride','drums'],contours:['chromatic bebop line','horn enclosure'],arrangement:['head tightly voiced','walking bass continuous','solos trade 4s/8s'],production:'dry small jazz room'}),
    P({bpm:128,tempoRange:[112,138],meter:'4/4',feel:'cool straight-eighth restraint',swing:50,pulseModel:'metric-hierarchical',form:['head','solo','interlude','solo','head','coda'],progressions:[['Dm9','G13','Cmaj9','A7b9'],['Em7','A7','Dmaj9','G13']],signatureCell:'open voicings + sparse drums + melodic bass',instruments:['alto-sax','upright-bass','piano','brush-kit','voice'],contours:['long melodic phrases','quartal color'],arrangement:['space between phrases','bass avoids constant quarter notes','brushes color form'],production:'cool wide room, soft transients'}),
    P({bpm:150,tempoRange:[130,170],meter:'4/4',feel:'hard-bop ride and comping',swing:60,pulseModel:'metric-hierarchical',form:['head','solo','solo','trading','head','coda'],progressions:[['Dm7','G7b9','Cmaj7','A7b9'],['Fm7','Bb7','Ebmaj7','A7alt']],signatureCell:'ride cymbal + interactive comping + blues inflection',instruments:['trumpet','tenor-sax','upright-bass','piano','ride'],contours:['bluesy horn motif','call-and-response comping'],arrangement:['piano comps irregularly','horns trade','bass walks through changes'],production:'present ride, compact acoustic room'}),
  ],
  tango: [
    P({bpm:116,tempoRange:[104,126],meter:'4/4',feel:'marcato en 4',swing:50,pulseModel:'metric-hierarchical',form:['intro','A','B','A','variación','cierre'],progressions:[['Am','E7b9','Am','Dm'],['Dm','A7','Dm','E7b9']],signatureCell:'piano marcato + short pizzicato + bandoneon accents',instruments:['bandoneon','violin','piano','upright-bass','cello'],contours:['bandoneon motif','violin answer'],arrangement:['piano/bass motor','melody floats over pulse','variación increases density'],production:'dry intimate hall, acoustic attack'}),
    P({bpm:126,tempoRange:[112,138],meter:'4/4',feel:'nuevo 3+3+2',swing:50,pulseModel:'additive',form:['intro','A','B','development','3+3+2 variation','coda'],progressions:[['Dm9','G7b9','Cmaj7','A7alt'],['Am','Bb7','E7b9','Am']],signatureCell:'3+3+2 ostinato + chromatic harmony + aggressive bow',instruments:['bandoneon','violin','piano','cello','bass'],contours:['angular motif','chromatic sequence'],arrangement:['ostinato fragments','register clashes','sudden stops'],production:'dramatic close room, hard transients'}),
    P({bpm:138,tempoRange:[126,148],meter:'2/4',feel:'milonga 3+3+2',swing:50,pulseModel:'additive',form:['intro','milonga','milonga variation','instrumental','milonga','cierre'],progressions:[['Am','E7','Am','G7'],['C','G7','C','E7']],signatureCell:'fast 2/4 milonga with 3+3+2 guitar/piano cell',instruments:['guitar','piano','upright-bass','violin','voice'],contours:['short rhythmic melody','rapid instrumental fills'],arrangement:['bass/piano lock','voice over repeating cell','final acceleration'],production:'dry dance-floor ensemble'}),
  ],
  flamenco: [
    P({bpm:86,tempoRange:[70,100],meter:'12/8',feel:'soleá compás',swing:50,pulseModel:'long-cycle',form:['salida','letra','falseta','letra','remate','cierre'],progressions:[['Am','G','F','E7'],['Dm','C','Bb','A7']],signatureCell:'12-count compás + rasgueado + palmas',instruments:['guitar','palmas','cajon','voice'],contours:['cante melisma','falseta'],arrangement:['palmas mark cycle','guitar answers cante','remate compresses energy'],production:'dry room with hand attack'}),
    P({bpm:128,tempoRange:[112,144],meter:'12/8',feel:'bulerías compás',swing:50,pulseModel:'long-cycle',form:['salida','letra','falseta','letra','jaleo','remate','cierre'],progressions:[['A','G','F','E7'],['E7','Am','G','F']],signatureCell:'fast 12-count accents + palmas + jaleo',instruments:['guitar','palmas','cajon','voice','castanets'],contours:['rapid vocal ornaments','virtuosic falseta'],arrangement:['jaleo raises density','cajon answers guitar','remate snaps to cadence'],production:'bright dry hand-percussion room'}),
    P({bpm:112,tempoRange:[100,124],meter:'4/4',feel:'tangos flamencos',swing:50,pulseModel:'metric-hierarchical',form:['intro','letra','falseta','letra','remate','cierre'],progressions:[['Am','G','F','E7'],['Dm','C','Bb','A7']],signatureCell:'4/4 flamenco groove + rasgueado',instruments:['guitar','palmas','cajon','voice'],contours:['short cante phrases','guitar compás variations'],arrangement:['guitar owns rhythm','palmas reinforce accents','voice floats above'],production:'close acoustic room'}),
  ],
  reggae: [
    P({bpm:76,tempoRange:[68,84],meter:'4/4',feel:'one-drop',swing:50,pulseModel:'metric-hierarchical',form:['intro','verse','chorus','verse','instrumental','chorus','outro'],progressions:[['Am','G','F','G'],['Dm','C','Bb','C']],signatureCell:'one-drop + offbeat skank + melodic bass',instruments:['bass','organ','electric-guitar','drums','voice'],contours:['melodic bass hook','skank response'],arrangement:['bass enters early','kick/rim centers beat 3','space between vocal phrases'],production:'dark warm low end, dry skank'}),
    P({bpm:74,tempoRange:[66,82],meter:'4/4',feel:'dub space and dropouts',swing:50,pulseModel:'metric-hierarchical',form:['intro','version','drop','dub vamp','drop','version','outro'],progressions:[['Dm','C','Bb','C'],['Am','G','F','G']],signatureCell:'dropouts + echo throws + bass/dub chord',instruments:['bass','organ','electric-guitar','drums','delay'],contours:['dub echo tail','bass motif'],arrangement:['elements disappear on cue','echo replaces fills','bass remains anchor'],production:'long delay, dark reverb, extreme space'}),
    P({bpm:102,tempoRange:[94,110],meter:'4/4',feel:'dancehall riddim',swing:50,pulseModel:'machine-grid',form:['intro','riddim','verse','chorus','drop','riddim','outro'],progressions:[['Am','G','F','G'],['Dm','C','Bb','C']],signatureCell:'syncopated riddim + sub bass',instruments:['sub-bass','drums','synth','organ','voice'],contours:['short vocal hook','riddim motif'],arrangement:['drums leave space for vocal','sub anchors offbeats','drop reduces to riddim'],production:'tight modern low end'}),
  ],
  salsa: [
    P({bpm:96,tempoRange:[88,104],meter:'4/4',feel:'son clave 2-3',swing:50,pulseModel:'timeline-cycle',form:['intro','verso','montuno','mambo','montuno','cierre'],progressions:[['Dm7','G7','Cmaj7','A7'],['Am7','Dm7','G7','Cmaj7']],signatureCell:'2-3 clave + tumbao + montuno + coro/pregón',instruments:['piano','timbales','congas','trumpet','bass'],contours:['coro/pregón','horn moña'],arrangement:['clave governs every layer','tumbao anticipates','mambo adds horn hits'],production:'bright brass and forward percussion'}),
    P({bpm:90,tempoRange:[82,100],meter:'4/4',feel:'romántica laid-back salsa',swing:50,pulseModel:'timeline-cycle',form:['intro','verso','coro','montuno','puente','coro','cierre'],progressions:[['Cmaj7','Am7','Dm7','G7'],['Fmaj7','Em7','Dm7','G7']],signatureCell:'soft clave + ballad vocal + restrained montuno',instruments:['piano','congas','bass','strings','voice'],contours:['long vocal melody','soft coro answer'],arrangement:['strings widen chorus','percussion stays light','montuno arrives late'],production:'lush vocal, softer percussion'}),
    P({bpm:100,tempoRange:[92,108],meter:'4/4',feel:'mambo / on-2',swing:50,pulseModel:'timeline-cycle',form:['intro','tema','mambo','montuno','descarga','cierre'],progressions:[['Dm7','G7','Cmaj7','A7'],['Gm7','C7','Fmaj7','D7']],signatureCell:'on-2 piano montuno + horn mambo',instruments:['piano','timbales','congas','horn-section','bass'],contours:['horn riff','piano montuno'],arrangement:['horns punctuate transitions','timbales open in mambo','descarga opens solos'],production:'tight dance-band room'}),
  ],
  reggaeton: [
    P({bpm:96,tempoRange:[90,102],meter:'4/4',feel:'straight dembow',swing:50,pulseModel:'machine-grid',form:['intro','verso','coro','verso','coro','puente','coro','outro'],progressions:[['Am','F','C','G'],['Dm','Bb','F','C']],signatureCell:'dembow 3+3+2 + sub bass',instruments:['synth','sub-bass','drums','congas','voice'],contours:['short vocal hook','syncopated synth stab'],arrangement:['dembow never loses identity','chorus adds sub','bridge strips kick'],production:'hard centered kick/sub, dry percussion'}),
    P({bpm:88,tempoRange:[82,96],meter:'4/4',feel:'playero minimal dembow',swing:50,pulseModel:'machine-grid',form:['intro','verse','hook','verse','hook','break','hook'],progressions:[['Am','G','F','G'],['Dm','C','Bb','C']],signatureCell:'minimal dembow + sparse vocal space',instruments:['drums','sub-bass','synth','voice'],contours:['spoken hook','one-bar synth response'],arrangement:['large empty spaces','bass only on key accents','vocal owns center'],production:'minimal early-digital aesthetic'}),
    P({bpm:102,tempoRange:[96,108],meter:'4/4',feel:'neoperreo distorted dembow',swing:50,pulseModel:'machine-grid',form:['intro','verse','chorus','drop','chorus','break','final chorus'],progressions:[['Bm','G','D','A'],['Em','C','G','D']],signatureCell:'distorted dembow + aggressive synth hook',instruments:['synth','sub-bass','drums','noise-sweep','voice'],contours:['distorted hook','pitched vocal response'],arrangement:['noise transitions','sub glides','drop removes harmony'],production:'clipped low end, saturated synths'}),
  ],
  metal: [
    P({bpm:145,tempoRange:[128,162],meter:'4/4',feel:'tight heavy-metal riffing',swing:50,pulseModel:'machine-grid',form:['intro','riff','verse','chorus','riff','solo','final chorus','ending'],progressions:[['E5','C5','D5','B5'],['E5','D5','C5','B5']],signatureCell:'palm-muted riff + double-kick accents',instruments:['distortion-guitar','bass','drums','voice'],contours:['guitar riff','high vocal hook'],arrangement:['guitars double bass','drums accent riff','solo opens register'],production:'tight guitar wall, controlled room'}),
    P({bpm:190,tempoRange:[175,210],meter:'4/4',feel:'thrash downpick drive',swing:50,pulseModel:'machine-grid',form:['intro','riff','verse','chorus','break','solo','final riff','ending'],progressions:[['E5','F5','G5','E5'],['E5','D5','C5','B5']],signatureCell:'fast downpicked 16ths + snare attack',instruments:['distortion-guitar','bass','drums','voice'],contours:['rapid riff','short shouted phrase'],arrangement:['constant 16th guitar','double-kick punctuation','brief breakdown'],production:'dry aggressive transient-heavy mix'}),
    P({bpm:78,tempoRange:[62,92],meter:'4/4',feel:'doom half-time weight',swing:50,pulseModel:'metric-hierarchical',form:['intro','riff','verse','chorus','instrumental','coda'],progressions:[['E5','F5','E5','C5'],['A5','G5','F5','E5']],signatureCell:'slow sustained riff + huge decay',instruments:['distortion-guitar','bass','drums','organ'],contours:['descending riff','sustained lead'],arrangement:['long chord/riff durations','sparse drums','coda stretches cadence'],production:'large dark room, sustained distortion'}),
  ],
};

export function profileForStyle(genreId: string, styleName: string, index: number): StyleSongProfile | undefined {
  const list = STYLE_PROFILE_LIBRARY[genreId];
  if (!list?.length) return undefined;
  const n = styleName.toLowerCase();
  const keywordIndex: Record<string, number> = {
    'afro-pop':0,'afrobeat':1,'amapiano':2,
    tradicional:0,urbana:1,sensual:2,'moderna':1,'bolero':2,
    chicago:0,delta:2,texas:1,piedmont:2,jump:1,
    samba:0,'bossa':1,pagode:0,choro:2,'forró':2,
    honky:1,bluegrass:2,'train':1,neotraditional:0,
    'studio disco':0,euro:1,'hi-nrg':1,'disco-funk':2,'nu-disco':0,
    techno:0,ambient:2,downtempo:1,breakbeat:2,electro:0,
    'deep house':0,'classic house':1,'soulful house':0,'tech house':2,'acid house':2,
    bebop:0,'cool jazz':1,'hard bop':2,'free jazz':1,'gypsy jazz':2,
    'roots reggae':0,dub:1,dancehall:2,rocksteady:0,
    perreo:0,playero:1,neoperreo:2,
    'heavy metal':0,thrash:1,'doom metal':2,
  };
  for (const [k, i] of Object.entries(keywordIndex)) if (n.includes(k)) return list[i % list.length];
  return list[index % list.length];
}
