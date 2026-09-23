import type { SectionEnergy, FormIntensity } from '../types';



export type { FormIntensity };
export interface FormStep { key:string; kind:string; bars:number; label:string; intensity:FormIntensity; }
export interface GenreForm { steps:FormStep[]; allowed:string[]; energyMappings?:Record<string,Partial<Record<string,SectionEnergy>>>; }
export const formSummary = (form: GenreForm): string => form.steps.map(s => s.label).join(' · ');
export const F = (key:string, kind:string, bars:number, label:string, intensity:FormIntensity):FormStep => ({key,kind,bars,label,intensity});

const POP = (): GenreForm => ({
  steps:[F('intro','intro',4,'Intro','low'),F('verse-1','verse',16,'Verse','medium'),F('chorus-1','chorus',16,'Chorus','high'),F('verse-2','verse',16,'Verse 2','medium'),F('chorus-2','chorus',16,'Chorus 2','high'),F('bridge','bridge',8,'Bridge','high'),F('chorus-3','chorus',16,'Final Chorus','peak'),F('outro','ending',4,'Outro','low')],
  allowed:['intro','verse-1','chorus-1','verse-2','chorus-2','bridge','chorus-3','outro'],
});
const DANCE = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('groove-1','verse',16,'Groove','medium'),F('groove-2','chorus',24,'Main Groove','high'),F('break','breakdown',8,'Break','low'),F('groove-3','chorus',24,'Main Groove 2','peak'),F('outro','ending',8,'Outro','low')],
  allowed:['intro','groove-1','groove-2','break','groove-3','outro'],
});
const JAZZ = (): GenreForm => ({
  steps:[F('head-in','verse',32,'Head In','medium'),F('solo-1','solo',32,'Solo','high'),F('solo-2','solo',32,'Second Solo','peak'),F('head-out','verse',16,'Head Out','high'),F('coda','coda',8,'Coda','low')],
  allowed:['head-in','solo-1','solo-2','head-out','coda'],
});
const BLUES = (): GenreForm => ({
  steps:[F('intro','intro',4,'Intro','low'),F('aab-1','verse',12,'AAB','medium'),F('aab-2','verse',12,'AAB','medium'),F('solo','solo',12,'Solo','peak'),F('aab-3','chorus',12,'AAB Return','high'),F('outro','ending',8,'Outro','low')],
  allowed:['intro','aab-1','aab-2','solo','aab-3','outro'],
});
const LATIN = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('tema','verse',16,'Tema','medium'),F('groove-1','chorus',24,'Montuno','high'),F('mambo','bridge',8,'Mambo','peak'),F('groove-2','chorus',24,'Montuno 2','peak'),F('coda','ending',8,'Coda','low')],
  allowed:['intro','tema','groove-1','mambo','groove-2','coda'],
});
const BALLAD = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('verse-1','verse',16,'Verse','medium'),F('verse-2','verse',16,'Verse 2','medium'),F('bridge','bridge',8,'Bridge','high'),F('verse-3','chorus',16,'Return','high'),F('coda','ending',8,'Coda','low')],
  allowed:['intro','verse-1','verse-2','bridge','verse-3','coda'],
});
const METAL = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','medium'),F('riff-1','verse',16,'Riff','high'),F('chorus','chorus',16,'Chorus','peak'),F('riff-2','verse',16,'Riff 2','high'),F('break','breakdown',8,'Breakdown','low'),F('solo','solo',16,'Solo','peak'),F('final','chorus',16,'Final Chorus','peak'),F('ending','ending',4,'Ending','low')],
  allowed:['intro','riff-1','chorus','riff-2','break','solo','final','ending'],
});
const TANGO = (): GenreForm => ({
  steps:[F('intro','intro',8,'Intro','low'),F('a1','verse',16,'A1','medium'),F('a2','verse',16,'A2','medium'),F('b','bridge',16,'B','high'),F('c','solo',16,'C','peak'),F('coda','coda',8,'Coda','low')],
  allowed:['intro','a1','a2','b','c','coda'],
});
const FLAMENCO = (): GenreForm => ({
  steps:[F('salida','intro',8,'Salida','low'),F('letra-1','verse',12,'Letra','medium'),F('falseta','solo',12,'Falseta','high'),F('letra-2','verse',12,'Letra 2','medium'),F('remate','chorus',8,'Remate','peak'),F('cierre','ending',4,'Cierre','low')],
  allowed:['salida','letra-1','falseta','letra-2','remate','cierre'],
});

const FORM_BUILDERS: Record<string,()=>GenreForm> = {
  afrobeats:DANCE,bachata:POP,blues:BLUES,brazilian:DANCE,country:POP,cumbia:DANCE,disco:DANCE,electronic:DANCE,
  folk:POP,funk:DANCE,gospel:POP,'hip-hop':POP,house:DANCE,jazz:JAZZ,kizomba:BALLAD,tango:TANGO,
  flamenco:FLAMENCO,metal:METAL,'r-and-b':POP,reggae:DANCE,reggaeton:DANCE,rock:POP,salsa:LATIN,ska:DANCE,soul:POP,
  swing:JAZZ,timba:LATIN,zouk:BALLAD,'drum-and-bass':DANCE,industrial:DANCE,'punk-hardcore':METAL,'uk-bass':DANCE,
};
export const GENRE_FORMS: Record<string,GenreForm> = Object.fromEntries(Object.entries(FORM_BUILDERS).map(([id,build]) => [id,build()]));

export const PROGRESSIONS: Record<string,string[]> = {
  afrobeats:['Am7','Fmaj7','Cmaj7','G6'],bachata:['Am','F','C','G'],blues:['C7','F7','G7','C7'],brazilian:['Dm7','G7','Cmaj7','A7'],country:['G','C','D','G'],
  cumbia:['Am','G','F','E7'],disco:['Am7','D9','Am7','D9'],electronic:['Em','D','C','Em'],folk:['G','C','D','G'],funk:['Dm7','C','Bb','C'],gospel:['C','F','G','Am'],
  'hip-hop':['Dm7','Bb','F','C'],house:['Fmaj7','Em7','Dm7','Cmaj7'],jazz:['Dm7','G7','Cmaj7','Am7'],kizomba:['Fmaj7','Em7','Am7','Dm7'],
  tango:['Am','E7','Am','Dm'],flamenco:['Am','G','F','E7'],metal:['E5','C5','D5','B5'],
  'r-and-b':['Dm7','G7','Cmaj7','Am7'],reggae:['Am','G','F','G'],reggaeton:['Am','F','C','G'],rock:['Em','C','D','B7'],salsa:['Cmaj7','Fmaj7','G7','Cmaj7'],
  ska:['C','Dm','F','G'],soul:['Cmaj7','Am7','Dm7','G7'],swing:['C6','A7','Dm7','G7'],timba:['Am7','Dm7','E7','Am7'],zouk:['Fmaj7','Bbmaj7','Am7','Dm7'],
  'drum-and-bass':['Em7','Cmaj7','G','D'],'industrial':['E5','F5','E5','F5'],'punk-hardcore':['E5','G5','A5','B5'],'uk-bass':['Am7','G','F','G'],
};
export const TEMPOS: Record<string,number> = {
  afrobeats:108,bachata:128,blues:92,brazilian:112,country:110,cumbia:102,disco:120,electronic:124,folk:96,funk:104,gospel:104,'hip-hop':90,
  house:124,jazz:140,kizomba:92,tango:120,flamenco:96,metal:150,'r-and-b':82,reggae:78,reggaeton:96,rock:128,salsa:96,
  ska:168,soul:94,swing:160,timba:100,zouk:100,'drum-and-bass':174,industrial:128,'punk-hardcore':180,'uk-bass':132,
};
export const TITLES: Record<string,string> = Object.fromEntries(Object.keys(GENRE_FORMS).map(id => [id, `${id} sketch`]));

/** Optional preference hints; empty keeps selection catalog-driven. */
export const DEFAULT_PATTERN_PREFERENCES: Record<string, Record<string, string>> = {};
