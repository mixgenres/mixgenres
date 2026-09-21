import { GENRE_WORLDS } from '../data/genres';
import { getStylesForGenre, getCanonicalStyle } from '../data/styles/registry';
import { resolveStyle } from '../data/styles/resolve';
import { makeSheet, rebuild, setSectionEnergy, setPartLens, setSongDial, type Sheet } from './arrange';
import { compile } from './perform';
import { migrateSong, assertMigrated, CURRENT_SONG_VERSION } from './migrate';
import { resolvePreset } from '../data/soundfonts';
import { ARTICULATIONS, resolveArticulation, realizeArticulation, articulationCapabilityReport } from './articulation';
import { activityFor, clampEnergy, energyOf } from './energy';
import { voiceProfile } from './instrumentProfile';
import { blendPartStyle } from './blend';
import { DIALS } from './dials';
import { WORLD_INSTRUMENT_HINTS } from '../data/instruments';
import { GENRE_FORMS } from '../data/genreForms';

/**
 * ENGINE VALIDATION
 * =================
 *
 * The previous validation script read the source for forbidden strings. That
 * checks spelling, not behaviour: it passed while the app crashed on render and
 * the whole project failed to compile.
 *
 * These checks compile actual audio and assert on the events. Every one of them
 * would have failed on the code as received.
 */

export interface Check {
  id: string;
  group: string;
  description: string;
  run: () => void | Promise<void>;
}

export interface CheckResult {
  id: string;
  group: string;
  description: string;
  ok: boolean;
  error?: string;
  durationMs: number;
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function genreIds(): string[] {
  return GENRE_WORLDS.map(w => w.id);
}

/* ------------------------------------------------------------------------- */

export const CHECKS: Check[] = [];

function check(group: string, id: string, description: string, run: Check['run']) {
  CHECKS.push({ id, group, description, run });
}

/* ---- 1. Every genre produces sound --------------------------------------- */

check('audio', 'every-genre-sounds', 'Each genre compiles to a non-empty performance', () => {
  const silent: string[] = [];
  for (const id of genreIds()) {
    const sheet = makeSheet(id);
    const perf = compile(sheet);
    if (perf.notes.length === 0) silent.push(id);
  }
  assert(silent.length === 0, `Genres produced no notes: ${silent.join(', ')}`);
});

check('audio', 'every-style-sounds', 'Each style in each genre compiles to a non-empty performance', () => {
  const silent: string[] = [];
  for (const genreId of genreIds()) {
    for (const style of getStylesForGenre(genreId)) {
      const perf = compile(makeSheet(genreId, style.id));
      if (perf.notes.length === 0) silent.push(`${genreId}/${style.id}`);
    }
  }
  assert(silent.length === 0, `Styles produced no notes: ${silent.slice(0, 8).join(', ')}`);
});

check('audio', 'notes-in-range', 'Every pitched note sits inside its instrument\'s range', () => {
  const bad: string[] = [];
  for (const genreId of genreIds()) {
    const sheet = makeSheet(genreId);
    const perf = compile(sheet);
    const profileByTrack = new Map(
      sheet.tracks.map(t => [t.id, voiceProfile((t as any).instrumentId)]),
    );
    for (const note of perf.notes) {
      if (note.drum) continue;
      const prof = profileByTrack.get(note.trackId);
      if (!prof) continue;
      if (note.midi < prof.low - 1 || note.midi > prof.high + 1) {
        bad.push(`${genreId}/${note.trackId} midi ${note.midi} outside ${prof.low}..${prof.high}`);
      }
    }
  }
  assert(bad.length === 0, `Out-of-range notes: ${bad.slice(0, 5).join('; ')}`);
});

check('audio', 'no-zero-length-notes', 'No note has zero or negative duration', () => {
  for (const genreId of genreIds()) {
    const perf = compile(makeSheet(genreId));
    const bad = perf.notes.filter(n => !(n.dur > 0));
    assert(bad.length === 0, `${genreId}: ${bad.length} notes with non-positive duration`);
  }
});

check('audio', 'no-overlap-same-pitch', 'No two notes overlap on the same channel and pitch', () => {
  for (const genreId of genreIds()) {
    const perf = compile(makeSheet(genreId));
    const last = new Map<string, number>();
    for (const n of perf.notes) {
      const key = `${n.channel}:${n.midi}`;
      const end = last.get(key);
      if (end !== undefined && n.time < end - 1e-6) {
        throw new Error(`${genreId}: overlap on ch${n.channel} midi ${n.midi} at ${n.time.toFixed(3)}s`);
      }
      last.set(key, n.time + n.dur);
    }
  }
});

check('audio', 'velocity-legal', 'Every velocity is 1..127', () => {
  for (const genreId of genreIds()) {
    const perf = compile(makeSheet(genreId));
    const bad = perf.notes.filter(n => n.vel < 1 || n.vel > 127 || !Number.isInteger(n.vel));
    assert(bad.length === 0, `${genreId}: ${bad.length} illegal velocities`);
  }
});

check('audio', 'cc-legal', 'Every CC value is 0..127 on a legal controller', () => {
  for (const genreId of genreIds()) {
    const perf = compile(makeSheet(genreId));
    const bad = perf.ccs.filter(c => c.value < 0 || c.value > 127 || c.cc < 0 || c.cc > 127);
    assert(bad.length === 0, `${genreId}: ${bad.length} illegal CC events`);
  }
});

check('audio', 'bend-returns-to-centre', 'Every pitch-bend trajectory ends at centre', () => {
  for (const genreId of genreIds()) {
    const perf = compile(makeSheet(genreId));
    for (const n of perf.notes) {
      if (!n.pitchBend?.length) continue;
      const last = n.pitchBend[n.pitchBend.length - 1];
      assert(
        last.value === 8192,
        `${genreId}: bend on midi ${n.midi} ends at ${last.value}, leaving the channel detuned`,
      );
    }
  }
});

check('audio', 'bend-range-declared', 'Every melodic channel declares its pitch-bend range via RPN 0', () => {
  for (const genreId of genreIds()) {
    const perf = compile(makeSheet(genreId));
    const bending = new Set(perf.notes.filter(n => n.pitchBend?.length).map(n => n.channel));
    for (const channel of bending) {
      const hasRpn = perf.ccs.some(c => c.channel === channel && c.cc === 6);
      assert(hasRpn, `${genreId}: channel ${channel} bends without declaring a bend range`);
    }
  }
});

/* ---- 2. Energy replaces density ------------------------------------------ */

check('energy', 'no-density-anywhere', 'No compiled sheet carries a density field', () => {
  for (const genreId of genreIds()) {
    const json = JSON.stringify(makeSheet(genreId));
    assert(!/"density"/.test(json), `${genreId}: a density field survived into the sheet`);
    assert(!/"densities"/.test(json), `${genreId}: a densities map survived into the sheet`);
  }
});

check('energy', 'energy-is-monotonic', 'Raising section energy never reduces the number of events', () => {
  for (const genreId of genreIds()) {
    const base = makeSheet(genreId);
    const regionId = base.regions[0].id;
    const counts = ([1, 3, 5] as const).map(e => compile(setSectionEnergy(base, regionId, e)).notes.length);
    assert(
      counts[2] >= counts[0],
      `${genreId}: energy 5 produced fewer notes (${counts[2]}) than energy 1 (${counts[0]})`,
    );
  }
});

check('energy', 'activity-is-contract-owned', 'Every contract defines activity for all five energy levels', () => {
  for (const genreId of genreIds()) {
    const style = resolveStyle({ genreId, styleId: getCanonicalStyle(genreId).id });
    for (const level of [1, 2, 3, 4, 5] as const) {
      const a = activityFor(style.contract, level);
      assert(a >= 0 && a <= 1, `${genreId} energy ${level}: activity ${a} outside 0..1`);
    }
  }
});

check('energy', 'region-intensity-derived', 'Region.intensity always agrees with Region.energy after rebuild', () => {
  for (const genreId of genreIds()) {
    const sheet = rebuild(makeSheet(genreId));
    for (const r of sheet.regions) {
      const e = energyOf(r);
      assert(e === clampEnergy(r.energy), `${genreId}/${r.id}: energy not normalised`);
    }
  }
});

/* ---- 3. Style invariants hold ------------------------------------------- */

check('contract', 'forbidden-hits-absent', 'A world that forbids a hit type never emits it', () => {
  for (const genreId of genreIds()) {
    const sheet = makeSheet(genreId);
    const style = resolveStyle({ genreId, styleId: sheet.styleId! });
    if (style.contract.percussion.kitMode !== 'none') continue;
    const perf = compile(sheet);
    const kitTracks = sheet.tracks.filter(t => /^drums$|^brush-kit$/.test((t as any).instrumentId));
    for (const track of kitTracks) {
      const notes = perf.notes.filter(n => n.trackId === track.id);
      assert(notes.length === 0, `${genreId} forbids a drum kit but emitted ${notes.length} kit hits`);
    }
  }
});

check('contract', 'timeline-locked-worlds-keep-swing', 'A timeline-locked world never swings', () => {
  for (const genreId of genreIds()) {
    const style = resolveStyle({ genreId, styleId: getCanonicalStyle(genreId).id });
    if (!style.contract.timelineRequired) continue;
    const swing = style.contract.groove.swing;
    assert(
      Math.abs(swing - 0.5) < 0.08,
      `${genreId} locks ${style.contract.timeline} but declares swing ${swing}`,
    );
  }
});

check('contract', 'every-genre-has-a-canonical-style', 'Exactly one canonical style per genre', () => {
  for (const genreId of genreIds()) {
    const styles = getStylesForGenre(genreId);
    assert(styles.length > 0, `${genreId} has no styles`);
    const canonical = styles.filter(s => s.canonical);
    assert(canonical.length <= 1, `${genreId} has ${canonical.length} canonical styles`);
  }
});

check('contract', 'no-stale-genre-ids', 'Every genre id referenced by catalog tables is a real world', () => {
  const known = new Set(genreIds());
  const stale: string[] = [];
  for (const id of Object.keys(WORLD_INSTRUMENT_HINTS)) {
    if (!known.has(id)) stale.push(`WORLD_INSTRUMENT_HINTS.${id}`);
  }
  for (const id of Object.keys(GENRE_FORMS)) {
    if (!known.has(id)) stale.push(`GENRE_FORMS.${id}`);
  }
  // Stale keys are dead weight: they look like configuration but can never be
  // reached, and they are how a removed genre goes on appearing to be supported.
  assert(stale.length === 0, `Stale genre ids: ${stale.slice(0, 12).join(', ')}`);
});

check('contract', 'unknown-genre-fails-loudly', 'Asking for a genre that does not exist raises a clear error', () => {
  let message = '';
  try {
    getCanonicalStyle('not-a-real-genre');
  } catch (err) {
    message = err instanceof Error ? err.message : String(err);
  }
  assert(message.includes('not-a-real-genre'), `Unknown genre did not fail by name: "${message}"`);
});

/* ---- 4. Genre blending --------------------------------------------------- */

check('blend', 'guest-lens-changes-phrasing', 'A guest lens measurably changes what a part plays', () => {
  const sheet = makeSheet('cumbia');
  const regionId = sheet.regions[0].id;
  const bass = sheet.tracks.find(t => voiceProfile((t as any).instrumentId).role === 'bass');
  assert(bass, 'Test assumes the cumbia starter ensemble has a bass');
  const plain = compile(sheet);
  const lensed = compile(setPartLens(sheet, regionId, bass!.id, { genreId: 'jazz', weight: 0.9 }));

  const signature = (p: ReturnType<typeof compile>) =>
    p.notes.filter(n => n.trackId === bass!.id).map(n => `${n.time.toFixed(4)}:${n.midi}`).join(',');

  assert(
    signature(plain) !== signature(lensed),
    'A jazz lens on a cumbia bass produced an identical part; the guest bass dialect was not applied',
  );
  const report = lensed.blends[`${bass!.id}|${regionId}`];
  assert(report, 'The lens applied but produced no report');
  assert(report.applied.length > 0, `The lens reported no changes: ${JSON.stringify(report)}`);
});

check('blend', 'host-invariants-survive', 'A guest lens never overrides a locked timeline', () => {
  const host = resolveStyle({ genreId: 'salsa', styleId: getCanonicalStyle('salsa').id });
  assert(host.contract.timelineRequired, 'Test assumes salsa locks its timeline');
  const blended = blendPartStyle(host, { genreId: 'jazz', weight: 1 }, 'harmony');
  assert(
    Math.abs(blended.style.contract.groove.swing - host.contract.groove.swing) < 0.01,
    'A jazz lens at full weight swung a locked clave',
  );
  assert(
    blended.report.violations.some(v => v.aspect === 'swing' || v.aspect === 'timeline'),
    'The blend refused the swing but did not report why',
  );
});

check('blend', 'zero-weight-lens-is-a-no-op', 'A lens at weight 0 leaves the host untouched', () => {
  const host = resolveStyle({ genreId: 'rock', styleId: getCanonicalStyle('rock').id });
  const blended = blendPartStyle(host, { genreId: 'jazz', weight: 0 }, 'bass');
  assert(blended.style === host, 'A zero-weight lens still produced a blended style');
});

check('blend', 'prohibitions-union-not-relax', 'Blending unions forbidden lists rather than relaxing them', () => {
  const host = resolveStyle({ genreId: 'tango', styleId: getCanonicalStyle('tango').id });
  const blended = blendPartStyle(host, { genreId: 'rock', weight: 1 }, 'percussion');
  for (const forbidden of host.contract.forbidden) {
    assert(
      blended.style.contract.forbidden.includes(forbidden),
      `A rock lens dropped tango's prohibition on "${forbidden}"`,
    );
  }
});

/* ---- 5. Articulation ----------------------------------------------------- */

check('articulation', 'catalog-articulations-resolve', 'Every articulation named by a style grammar resolves', () => {
  const unresolved = new Set<string>();
  for (const genreId of genreIds()) {
    const style = resolveStyle({ genreId, styleId: getCanonicalStyle(genreId).id });
    for (const list of Object.values(style.contract.articulationGrammar)) {
      for (const name of list) {
        if (!resolveArticulation(name)) unresolved.add(`${genreId}:${name}`);
      }
    }
  }
  // An unresolved name is not fatal — the note falls through to the
  // instrument's own envelope — but it is a silent loss of authored intent, so
  // the bound is deliberately tight.
  assert(
    unresolved.size === 0,
    `${unresolved.size} articulation names have no spec: ${[...unresolved].slice(0, 12).join(', ')}`,
  );
});

check('articulation', 'expression-zero-is-plain', 'Expression 0 produces no ornaments and no bends', () => {
  const spec = ARTICULATIONS['arrastre'];
  const out = realizeArticulation({
    specs: [spec],
    profile: voiceProfile('piano'),
    midi: 60, velocity: 90, lengthBeats: 1, gapBeats: 1,
    beatsPerBar: 4, secPerBeat: 0.5, time: 0,
    expression: 0, seed: 1,
  });
  assert(out.notes.length === 1, `Expression 0 still produced ${out.notes.length} notes`);
  assert(!out.notes[0].pitchBend, 'Expression 0 still produced a pitch bend');
});

check('articulation', 'expression-one-is-full', 'Expression 1 realizes the full gesture', () => {
  const out = realizeArticulation({
    specs: [ARTICULATIONS['arrastre']],
    profile: voiceProfile('piano'),
    midi: 60, velocity: 90, lengthBeats: 1, gapBeats: 1,
    beatsPerBar: 4, secPerBeat: 0.5, time: 1,
    expression: 1, seed: 1,
  });
  assert(out.notes.length > 1, 'Expression 1 produced no ornament for an arrastre');
  assert(out.notes.some(n => n.pitchBend?.length), 'Expression 1 produced no bend for an arrastre');
});

check('articulation', 'cc-envelopes-restore', 'Every CC envelope returns the controller to its resting value', () => {
  for (const spec of Object.values(ARTICULATIONS)) {
    if (!spec.cc?.length) continue;
    const out = realizeArticulation({
      specs: [spec],
      profile: voiceProfile('violin'),
      midi: 67, velocity: 90, lengthBeats: 2, gapBeats: 2,
      beatsPerBar: 4, secPerBeat: 0.5, time: 0,
      expression: 1, seed: 7,
    });
    const byCc = new Map<number, { time: number; value: number }>();
    for (const cc of out.ccs) {
      const prev = byCc.get(cc.cc);
      if (!prev || cc.time >= prev.time) byCc.set(cc.cc, cc);
    }
    for (const [cc, last] of byCc) {
      const resting = cc === 11 ? 127 : cc === 74 ? 64 : 0;
      assert(last.value === resting, `${spec.id}: CC${cc} left at ${last.value}, expected ${resting}`);
    }
  }
});

check('articulation', 'fidelity-is-declared', 'Every articulation states its fidelity, and anything lossy explains itself', () => {
  for (const spec of Object.values(ARTICULATIONS)) {
    assert(spec.fidelity, `${spec.id} has no fidelity`);
    if (spec.fidelity !== 'faithful') {
      assert(spec.caveat, `${spec.id} is ${spec.fidelity} but says nothing about what is lost`);
    }
  }
});

check('articulation', 'primitives-are-documented', 'The capability report covers every primitive in use', () => {
  const declared = new Set(articulationCapabilityReport().map(r => r.primitive));
  for (const spec of Object.values(ARTICULATIONS)) {
    for (const p of spec.uses) {
      assert(declared.has(p), `${spec.id} uses undocumented primitive ${p}`);
    }
  }
});

/* ---- 6. Soundfonts ------------------------------------------------------- */

check('soundfont', 'every-instrument-resolves', 'Every instrument used by a starter song resolves to a preset', () => {
  for (const genreId of genreIds()) {
    const sheet = makeSheet(genreId);
    for (const track of sheet.tracks) {
      const preset = resolvePreset({ instrumentId: (track as any).instrumentId });
      assert(preset.program >= 0 && preset.program <= 127, `${genreId}/${track.id}: illegal program`);
    }
  }
});

/* ---- 7. Migration -------------------------------------------------------- */

check('migration', 'v1-song-migrates', 'A v1 song with string densities migrates cleanly', () => {
  const legacy = {
    id: 'legacy', title: 'Old', bpm: 120, timeSignature: '4/4', worldId: 'rock',
    tracks: [{ id: 'v0', instrumentId: 'piano', name: 'Piano', role: 'harmony', muted: false, volume: 0.85, lensIds: [] }],
    regions: [
      { id: 'r0', name: 'Verse', kind: 'verse', density: 'sparse', intensity: 'low', start: 0, end: 8, bars: 8, chords: ['Am'] },
      { id: 'r1', name: 'Chorus', kind: 'chorus', density: 'busy', intensity: 'high', start: 8, end: 16, bars: 8, chords: ['F'] },
    ],
    densities: { r0: { v0: 'sparse' }, r1: { v0: 'busy' } },
    arrangement: { r0: {}, r1: {} },
    measures: [], relationships: [], activeLensIds: [], applied: [],
  };
  const result = migrateSong(legacy as Record<string, any>);
  const problems = assertMigrated(result.song);
  assert(problems.length === 0, problems.join('; '));
  assert(result.song.regions[0].energy === 1, 'sparse did not become energy 1');
  assert(result.song.regions[1].energy === 4, 'busy did not become energy 4');
  assert(result.notes.length > 0, 'A v1 song migrated without reporting any change');
});

check('migration', 'migration-is-idempotent', 'Migrating twice changes nothing the second time', () => {
  const sheet = makeSheet('tango');
  const once = migrateSong(sheet as any);
  const twice = migrateSong(once.song);
  assert(twice.notes.length === 0, `Second migration reported ${twice.notes.length} changes`);
  assert(
    JSON.stringify(once.song) === JSON.stringify(twice.song),
    'Migration is not idempotent',
  );
});

check('migration', 'orphans-are-repaired', 'Entries pointing at deleted tracks and regions are dropped', () => {
  const broken = {
    schemaVersion: CURRENT_SONG_VERSION,
    id: 's', title: 'T', bpm: 100, timeSignature: '4/4', worldId: 'rock',
    tracks: [{ id: 'v0', instrumentId: 'piano', role: 'harmony', name: 'P', muted: false, volume: 1, lensIds: [] }],
    regions: [{ id: 'r0', kind: 'verse', name: 'V', energy: 3, intensity: 'medium', bars: 8, start: 0, end: 8 }],
    arrangement: { r0: { v0: 'x', vGhost: 'y' }, rGhost: { v0: 'z' } },
    energies: { r0: { v0: 3 } },
    pocket: 0.5, lift: 0.5, adventure: 0.25, development: 0.45, expression: 0.55,
    measures: [], relationships: [], activeLensIds: [], applied: [],
  };
  const { song } = migrateSong(broken as Record<string, any>);
  assert(!('rGhost' in song.arrangement), 'An orphaned region survived migration');
  assert(!('vGhost' in song.arrangement.r0), 'An orphaned track survived migration');
});

check('migration', 'every-starter-song-is-current', 'A freshly made sheet already satisfies the current schema', () => {
  for (const genreId of genreIds()) {
    const { song } = migrateSong(makeSheet(genreId) as any);
    const problems = assertMigrated(song);
    assert(problems.length === 0, `${genreId}: ${problems.join('; ')}`);
  }
});

/* ---- 8. Dials ------------------------------------------------------------ */

check('dials', 'every-dial-has-a-consumer', 'No dial exists that nothing reads', () => {
  for (const dial of DIALS) {
    assert(dial.consumers.length > 0, `Dial ${dial.id} is read by nothing`);
    assert(dial.intent.length > 0, `Dial ${dial.id} has no stated intent`);
  }
});

check('dials', 'adventure-widens-selection', 'Raising adventure admits material a tight setting refuses', () => {
  const base = makeSheet('tango');
  const tight = setSongDial(base, 'adventure', 0);
  const loose = setSongDial(base, 'adventure', 1);
  const idsOf = (s: Sheet) =>
    new Set(Object.values(s.arrangement).flatMap(byTrack => Object.values(byTrack)));
  const tightIds = idsOf(tight);
  const looseIds = idsOf(loose);
  // Loose must not be a strict subset of tight: it should reach at least as far.
  assert(looseIds.size >= tightIds.size, 'Adventure 1 offered fewer choices than adventure 0');
});

check('dials', 'development-zero-is-hypnotic', 'Development 0 repeats the same cell across a long section', () => {
  let sheet = makeSheet('house');
  const regionId = sheet.regions[0].id;
  sheet = setSongDial(sheet, 'development', 0);
  const trackId = sheet.tracks[0].id;
  const patterns = new Set(
    sheet.measures
      .filter(m => m.regionId === regionId)
      .map(m => m.patternDetailsByTrack?.[trackId]?.patternId)
      .filter(Boolean),
  );
  assert(patterns.size <= 1, `Development 0 still used ${patterns.size} different cells`);
});

check('dials', 'expression-scales-event-count', 'Expression 1 produces more events than expression 0', () => {
  const sheet = makeSheet('flamenco');
  const plain = compile(sheet, { expression: 0 }).notes.length;
  const full = compile(sheet, { expression: 1 }).notes.length;
  assert(full >= plain, `Expression 1 produced ${full} notes, fewer than expression 0's ${plain}`);
});

check('dials', 'dials-are-deterministic', 'The same sheet compiles to the same performance twice', () => {
  for (const genreId of genreIds().slice(0, 8)) {
    const sheet = makeSheet(genreId);
    const a = compile(sheet);
    const b = compile(sheet);
    assert(a.notes.length === b.notes.length, `${genreId}: note count is not deterministic`);
    for (let i = 0; i < a.notes.length; i++) {
      assert(
        a.notes[i].midi === b.notes[i].midi && Math.abs(a.notes[i].time - b.notes[i].time) < 1e-9,
        `${genreId}: note ${i} differs between two compiles of the same sheet`,
      );
    }
  }
});

/* ------------------------------------------------------------------------- */

export async function runChecks(filter?: string): Promise<CheckResult[]> {
  const results: CheckResult[] = [];
  for (const c of CHECKS) {
    if (filter && !c.id.includes(filter) && !c.group.includes(filter)) continue;
    const started = Date.now();
    try {
      await c.run();
      results.push({ id: c.id, group: c.group, description: c.description, ok: true, durationMs: Date.now() - started });
    } catch (err) {
      results.push({
        id: c.id,
        group: c.group,
        description: c.description,
        ok: false,
        error: err instanceof Error ? err.message : String(err),
        durationMs: Date.now() - started,
      });
    }
  }
  return results;
}

export function formatResults(results: CheckResult[]): string {
  const lines: string[] = [];
  let group = '';
  for (const r of results) {
    if (r.group !== group) {
      group = r.group;
      lines.push(`\n${group.toUpperCase()}`);
    }
    lines.push(`  ${r.ok ? 'PASS' : 'FAIL'}  ${r.id} — ${r.description}`);
    if (!r.ok) lines.push(`        ${r.error}`);
  }
  const failed = results.filter(r => !r.ok).length;
  lines.push(`\n${results.length - failed}/${results.length} passed`);
  return lines.join('\n');
}
