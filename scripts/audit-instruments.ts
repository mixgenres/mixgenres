import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { INSTRUMENT_CATALOG, INSTRUMENTS_BY_ID, WORLD_INSTRUMENT_HINTS } from '../src/data/instruments/index.ts';
import { ARTICULATIONS, resolveArticulation } from '../src/engine/theory/articulation.ts';
import { LUTHIER_INSTRUMENT_MAP } from '../src/engine/audio/LuthierAPI.ts';
import { ALL_PATTERNS } from '../src/data/genres/index.ts';

const root = resolve('src/data/instruments/definitions');
const files = readdirSync(root).filter(f => f.endsWith('.ts')).sort();
const errors: string[] = [];
const warnings: string[] = [];

if (files.length !== INSTRUMENT_CATALOG.length) errors.push(`definition file count ${files.length} != catalog count ${INSTRUMENT_CATALOG.length}`);
const ids = INSTRUMENT_CATALOG.map(i => i.id);
for (const id of ids) {
  const filename = `${id.replace(/[^A-Za-z0-9_]/g, '_')}.ts`;
  if (!existsSync(resolve(root, filename))) errors.push(`missing definition file for ${id}`);
  if (!INSTRUMENTS_BY_ID[id]) errors.push(`missing registry entry for ${id}`);
  const def = INSTRUMENTS_BY_ID[id];
  if (!def.techniques?.articulations.length) errors.push(`${id}: no supported articulations`);
  if (!def.techniques?.techniqueMethods.length) errors.push(`${id}: no physical technique methods`);
  if (!def.techniques?.playingStyles.length) warnings.push(`${id}: no playing-style metadata`);
  for (const art of def.techniques.articulations) {
    if (!ARTICULATIONS[art] && !resolveArticulation(art)) errors.push(`${id}: unsupported articulation '${art}'`);
  }
  for (const [style, arts] of Object.entries(def.techniques.genreTechniques ?? {})) {
    for (const art of arts) {
      if (!def.techniques.articulations.includes(art)) errors.push(`${id}: ${style} technique '${art}' is not in its supported articulation set`);
    }
  }
  if (!LUTHIER_INSTRUMENT_MAP[id]) errors.push(`${id}: no dedicated Luthier physical model`);
  if (def.voicing === 'unpitched' && !def.drum && !def.kit) warnings.push(`${id}: unpitched instrument has no drum/kit voice definition`);
  if (def.family === 'plucked' && !def.bodyConstruction && !def.kit && def.voicing !== 'bass') warnings.push(`${id}: plucked instrument lacks body construction metadata`);
}
for (const [world, hints] of Object.entries(WORLD_INSTRUMENT_HINTS)) {
  for (const id of hints) if (!INSTRUMENTS_BY_ID[id]) errors.push(`world ${world}: unknown instrument ${id}`);
}

const STRUCTURAL_PATTERN_TAGS = new Set([
  'rubato-aware','fill','kick','call-response','stop-time','re-entry','tag','offbeat','bossa','dembow','hand-drum','tumbao','offbeat guitar','cumbia','chicha','organ','hook','maracas','texture','cadence','walking','horn answer','drive','rocksteady','two-tone','piano bubble','final hit','hat','sequence','four-on-floor','offbeat hat','Detroit','acid','clap','backbeat','build','automation','breakdown','tension','chromatic-lead','low-drum','hand-percussion','surdo','samba','pandeiro','interlock','cavaquinho','partido-alto','guitar rhythm','anticipation','piano','voicing','batucada','break','extended harmony','release','syncopated','delay','organ bubble','dub','echo','version','steppers','horn reply','percussive-finger','kick-snare','sub','timeline','offbeat texture','negative space','syncopation','density control','vocal pocket','hook lift','phrase end','transition'
]);

const unknownPatternArts = new Map<string, number>();
function visit(v: unknown): void {
  if (!v || typeof v !== 'object') return;
  if (Array.isArray(v)) { for (const x of v) visit(x); return; }
  const o = v as Record<string, unknown>;
  if (typeof o.articulation === 'string' && o.articulation.trim() && !resolveArticulation(o.articulation)) {
    unknownPatternArts.set(o.articulation, (unknownPatternArts.get(o.articulation) ?? 0) + 1);
  }
  if (Array.isArray(o.articulations)) for (const x of o.articulations) if (typeof x === 'string' && !resolveArticulation(x)) unknownPatternArts.set(x, (unknownPatternArts.get(x) ?? 0) + 1);
  for (const x of Object.values(o)) visit(x);
}
visit(ALL_PATTERNS);
for (const [art, count] of unknownPatternArts) {
  if (!STRUCTURAL_PATTERN_TAGS.has(art.trim())) errors.push(`pattern articulation '${art}' is not resolved and is not classified as a structural/style tag`);
  else warnings.push(`pattern structural tag '${art}' appears in articulation fields (${count} uses)`);
}

if (errors.length) {
  console.error(`Instrument audit failed: ${errors.length} error(s)`);
  for (const e of errors) console.error(`ERROR ${e}`);
  for (const w of warnings) console.warn(`WARN ${w}`);
  process.exit(1);
}
console.log(`Instrument audit passed: ${INSTRUMENT_CATALOG.length} definitions, ${Object.keys(LUTHIER_INSTRUMENT_MAP).length} physical profiles, ${Object.keys(ARTICULATIONS).length} articulation specs.`);
for (const w of warnings) console.warn(`WARN ${w}`);
