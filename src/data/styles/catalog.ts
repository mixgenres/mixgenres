import { SongStyle } from './schema';
import { MusicalPattern } from '../../types';
import { GENRE_NAMES, GENRE_SOURCE_MAP } from '../genres';

/** Exactly the supported public genre leaves. */
export const CURATED_STYLE_NAMES: Record<string, string[]> = {
  afrobeats: ['Afro-Pop','Afrobeat','Amapiano','Highlife','Alté','Afro-House'],
  bachata: ['Tradicional','Urbana','Sensual','Bachata Moderna','Bolero Bachata','Bachatango'],
  blues: ['Chicago Blues','Delta Blues','Texas Blues','Piedmont Blues','Jump Blues','Soul Blues'],
  brazilian: ['Samba','Bossa Nova','Pagode','Choro','Samba-Rock','Forró'],
  country: ['Neotraditional','Outlaw','Bluegrass','Honky-Tonk','Bakersfield','Americana','Nashville Sound','Western Swing'],
  cumbia: ['Cumbia Colombiana','Villera','Chicha','Sonora','Rebajada','Porro'],
  disco: ['Studio Disco','Eurodisco','Hi-NRG','Disco-Funk','Italo Disco','Nu-Disco'],
  electronic: ['Techno','Ambient','Downtempo','IDM','Synthwave','Breakbeat','Electro'],
  folk: ['Indie Folk','Old-Time','Protest Folk','Psychedelic Folk','Neo-Traditional','Chamber Folk'],
  funk: ['Deep Funk','P-Funk','Boogie','Go-Go','Synth Funk','Funk Carioca'],
  gospel: ['Traditional Gospel','Contemporary Gospel','Southern Gospel','Choir Gospel','Gospel Soul','Gospel Funk'],
  'hip-hop': ['Boom Bap','Trap','Drill','Lo-Fi','G-Funk','Cloud Rap','Jazz Rap','Conscious Rap'],
  house: ['Deep House','Classic House','Soulful House','Tech House','Garage House','Acid House','French House'],
  jazz: ['Bebop','Cool Jazz','Hard Bop','Free Jazz','Gypsy Jazz','Fusion','Spiritual Jazz','Ragtime'],
  kizomba: ['Tradicional','Semba Playful','Urbankiz','Tarraxinha','Passada','Ghetto Zouk'],
  'latin-pop': ['Latin Pop','Pop Ballad','Tropical Pop','Urban Latin Pop','Rock Latino','Dance Latin Pop'],
  tango: ['Tango Tradicional','Tango Nuevo','Milonga','Tango Vals','Tango Electrónico','Yumba'],
  flamenco: ['Soleá','Bulerías','Alegrías','Tangos','Seguiriya','Rumba'],
  metal: ['Heavy Metal','Thrash','Death Metal','Black Metal','Power Metal','Doom Metal','Sludge','Progressive Metal'],
  'r-and-b': ['Contemporary R&B','Neo-Soul','Quiet Storm','New Jack Swing','Alternative R&B','Funk R&B'],
  reggae: ['Roots Reggae','Dub','Dancehall','Lovers Rock','Rocksteady','Ragga'],
  reggaeton: ['Perreo','Melodic Reggaeton','Neoperreo','Pop Reggaeton','Playero','Trap Reggaeton'],
  rock: ['Hard Rock','Grunge','Progressive Rock','Garage Rock','Psychedelic Rock','Post-Rock','Shoegaze','Alternative Rock'],
  salsa: ['Salsa Dura','Salsa Romántica','Mambo / On-2','Salsa Caleña','Charanga','Son Montuno','Salsa Choke','Latin Jazz Salsa'],
  ska: ['Traditional','Two-Tone','Rocksteady','Ska-Punk','Ska-Core','Latin Ska','Ska-Jazz'],
  soul: ['Classic Soul','Motown Soul','Deep Soul','Southern Soul','Neo-Soul','Psychedelic Soul'],
  swing: ['Big Band Lindy','Balboa Speed','Gypsy Swing','Charleston','West Coast Swing','Boogie-Woogie','Neo-Swing','Electro Swing'],
  timba: ['Timba Funk','Timba Despelote','Son Timbeado','Timba Rumbeada','Son Cubano','Descarga'],
  zouk: ['Zouk Béton','Brazilian Zouk','Lyrical Zouk','Zouk Bass','Kompa Zouk','Acoustic Zouk'],
  'drum-and-bass': ['Jungle','Liquid DnB','Jump-Up','Neurofunk','Dancefloor DnB','Minimal DnB'],
  industrial: ['EBM','Industrial Rock','Industrial Metal','Industrial Techno','Noise Industrial','Dark Industrial'],
  'punk-hardcore': ['Punk Rock','Hardcore Punk','Post-Hardcore','Skate Punk','Crust Punk','Melodic Hardcore','Pop Punk'],
  'uk-bass': ['UK Garage','2-Step','Grime','Dubstep','Future Garage','Bassline','Breaks'],
};

/** Source-world aliases keep musical definitions reusable. */
export const PROTECTED_GENRES = new Set<string>();

const SOURCE_STYLE_OVERRIDES: Record<string, Record<string, string>> = {
  brazilian: { 'Samba': 'Samba de Enredo', 'Bossa Nova': 'Bossa Nova', 'Pagode': 'Pagode', 'Choro': 'Choro', 'Samba-Rock': 'Samba Reggae', 'Forró': 'Samba de Roda' },
  disco: { 'Studio Disco': 'Disco', 'Eurodisco': 'Disco', 'Hi-NRG': 'Disco', 'Disco-Funk': 'Boogie', 'Italo Disco': 'Synth Funk', 'Nu-Disco': 'Boogie' },
  gospel: { 'Traditional Gospel': 'Old-Time', 'Contemporary Gospel': 'Indie Folk', 'Southern Gospel': 'Neo-Traditional', 'Choir Gospel': 'Chamber Folk', 'Gospel Soul': 'Indie Folk', 'Gospel Funk': 'Boogie' },
  house: { 'Deep House': 'Downtempo', 'Classic House': 'Techno', 'Soulful House': 'Soulful House', 'Tech House': 'Techno', 'Garage House': 'Garage', 'Acid House': 'Acid Techno', 'French House': 'Disco' },
  'drum-and-bass': { 'Liquid DnB': 'Downtempo', 'Jungle': 'Breakbeat', 'Jump-Up': 'Dubstep', 'Neurofunk': 'IDM', 'Dancefloor DnB': 'Electro', 'Minimal DnB': 'Techno' },
  industrial: { 'Industrial Metal': 'Industrial Metal', 'EBM': 'EBM', 'Industrial Rock': 'Industrial Rock', 'Industrial Techno': 'Industrial Techno', 'Noise Industrial': 'Noise Industrial', 'Dark Industrial': 'Industrial Rock' },
  'punk-hardcore': { 'Punk Rock': 'Hard Rock', 'Hardcore Punk': 'Punk Rock', 'Post-Hardcore': 'Alternative Rock', 'Skate Punk': 'Garage Rock', 'Crust Punk': 'Grunge', 'Melodic Hardcore': 'Alternative Rock', 'Pop Punk': 'Hard Rock' },
  'uk-bass': { 'UK Garage': 'Garage', '2-Step': 'Garage', 'Grime': 'Dubstep', 'Dubstep': 'Dubstep', 'Future Garage': 'Downtempo', 'Bassline': 'Breakbeat', 'Breaks': 'Breakbeat' },
};

function slug(value: string): string {
  return value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function shortText(value: string): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');
}

function cloneStyle(base: SongStyle, genreId: string, name: string, id: string): SongStyle {
  const style: SongStyle = JSON.parse(JSON.stringify(base));
  style.id = id;
  style.name = name;
  style.genres = [genreId];
  style.primaryGenre = genreId;
  style.canonical = false;
  style.extends = undefined;
  style.influences = undefined;
  style.aliases = [];
  style.summary = shortText(`${name} ${GENRE_NAMES[genreId]}`);
  style.signatureTraits = [name, GENRE_NAMES[genreId]];
  style.authoringNotes = 'Shared reusable genre grammar.';
  return style;
}

function patternCategory(p: MusicalPattern): string {
  const raw = `${p.category} ${p.family} ${p.name} ${p.tags.join(' ')}`.toLowerCase();
  if (p.category === 'bass' || /bass|tumbao|walking/.test(raw)) return 'bass';
  if (p.category === 'fill' || /fill|turnaround|pickup|answer|reply/.test(raw)) return 'fill';
  if (p.category === 'break' || /break|drop|stop|gear/.test(raw)) return 'break';
  if (p.category === 'lead' || p.category === 'motif' || /lead|melod|riff|hook|solo/.test(raw)) return 'lead';
  if (p.category === 'comping' || p.category === 'accompaniment' || /comp|chord|skank|strum|stab/.test(raw)) return 'comping';
  if (p.category === 'texture' || p.category === 'drone' || /pad|texture|drone|wash/.test(raw)) return 'texture';
  return 'groove';
}

function onsetSimilarity(a: MusicalPattern, b: MusicalPattern): number {
  if (a.meter !== b.meter || a.cycleLength !== b.cycleLength || a.subdivisions !== b.subdivisions) return 0;
  const aa = new Set(a.onsetGrid ?? []); const bb = new Set(b.onsetGrid ?? []);
  const union = new Set([...aa, ...bb]).size;
  return union ? [...aa].filter(x => bb.has(x)).length / union : 1;
}

function nearDuplicate(a: MusicalPattern, b: MusicalPattern): boolean {
  return patternCategory(a) === patternCategory(b) && onsetSimilarity(a, b) >= 0.92 && a.family === b.family;
}

function selectSharedPatterns(style: SongStyle, candidates: MusicalPattern[], target = 6): MusicalPattern[] {
  const terms = `${style.name} ${style.summary} ${style.signatureTraits.join(' ')}`.toLowerCase();
  const ranked = candidates
    .filter(p => p.enabled !== false)
    .map(p => ({ p, score: (p.styleIds?.includes(style.id) ? 100 : 0) + (p.name + ' ' + p.tags.join(' ')).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).reduce((n, t) => n + (t.length > 3 && terms.includes(t) ? 2 : 0), 0) + (p.weight ?? 0) }))
    .sort((a,b) => b.score - a.score || a.p.id.localeCompare(b.p.id));
  const selected: MusicalPattern[] = [];
  const categories = new Set<string>();
  for (const { p } of ranked) {
    const cat = patternCategory(p);
    if (categories.has(cat) || selected.some(x => nearDuplicate(x, p))) continue;
    selected.push(p); categories.add(cat);
    if (selected.length >= target) return selected;
  }
  for (const { p } of ranked) {
    if (selected.includes(p) || selected.some(x => nearDuplicate(x, p))) continue;
    selected.push(p);
    if (selected.length >= target) break;
  }
  return selected.slice(0, target);
}

export function buildCuratedStyles(baseStyles: SongStyle[], _patterns: MusicalPattern[]): SongStyle[] {
  const byGenre = new Map<string, SongStyle[]>();
  for (const style of baseStyles) {
    const list = byGenre.get(style.primaryGenre) ?? [];
    list.push(style); byGenre.set(style.primaryGenre, list);
  }

  const result: SongStyle[] = [];
  for (const [genreId, names] of Object.entries(CURATED_STYLE_NAMES)) {
    const candidates = byGenre.get(genreId) ?? [];
    if (!candidates.length) continue;
    names.forEach((name, index) => {
      const requestedSourceName = SOURCE_STYLE_OVERRIDES[genreId]?.[name];
      const base = candidates.find(s => s.name.toLowerCase() === String(requestedSourceName ?? name).toLowerCase())
        ?? candidates[index % candidates.length];
      const style = cloneStyle(base, genreId, name, `${genreId}-${slug(name)}`);
      style.canonical = index === 0;
      style.summary = shortText(`${name} ${GENRE_NAMES[genreId]}`);
      result.push(style);
    });
  }
  return result;
}

export function assembleStylePatterns(styles: SongStyle[], patterns: MusicalPattern[]): MusicalPattern[] {
  const bySource = new Map<string, MusicalPattern[]>();
  for (const p of patterns) {
    const list = bySource.get(p.worldId) ?? [];
    list.push(p); bySource.set(p.worldId, list);
  }
  for (const p of patterns) p.styleIds = [];

  // One compact pattern set per source family. All styles sharing that source
  // reuse the same definitions rather than generating style-owned clones.
  const chosenBySource = new Map<string, MusicalPattern[]>();
  for (const genreId of Object.keys(CURATED_STYLE_NAMES)) {
    const sourceId = GENRE_SOURCE_MAP[genreId];
    if (chosenBySource.has(sourceId)) continue;
    const seedStyle = styles.find(s => s.primaryGenre === genreId);
    const chosen = selectSharedPatterns(seedStyle ?? ({ id:genreId, name:GENRE_NAMES[genreId], summary:GENRE_NAMES[genreId], signatureTraits:[], primaryGenre:genreId, genres:[genreId], kind:'canonical' } as SongStyle), bySource.get(sourceId) ?? [], 6);
    chosenBySource.set(sourceId, chosen);
  }

  for (const style of styles) {
    const chosen = chosenBySource.get(GENRE_SOURCE_MAP[style.primaryGenre]) ?? [];
    for (const p of chosen) p.styleIds = Array.from(new Set([...(p.styleIds ?? []), style.id]));
    style.patterns = {
      require: chosen.slice(0,3).map(p => p.id),
      preferred: chosen.slice(3).map(p => p.id),
      allowed: chosen.map(p => p.id),
      avoid: [],
    };
  }

  for (const p of patterns) {
    p.description = shortText(p.description);
    p.variants = (p.variants ?? []).map(v => ({ ...v, description: v.description ? shortText(v.description) : v.description }));
  }
  return patterns.filter(p => (p.styleIds?.length ?? 0) > 0);
}
