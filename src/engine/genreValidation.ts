import { GENRE_NAMES } from '../data/genres';
import { getStylesForGenre } from '../data/styles/registry';
import { resolveStyle } from '../data/styles/resolve';
import { getCanonicalStyle } from '../data/styles/registry';
import { assertValidChordSymbol, parseChord } from './theory';
import { GENRE_FORMS, PROGRESSIONS } from '../data/genreForms';

export interface GenreValidationIssue {
  genreId: string;
  styleId?: string;
  issue: string;
}

const REQUIRED_CONTRACT_FIELDS = [
  'pulseModel', 'meter', 'cycleLength', 'subdivision', 'timeline', 'timelineGrid',
  'microtiming', 'accentGrammar', 'accentMap', 'articulationGrammar',
  'harmonyModel', 'harmonyVocabulary', 'harmonicRhythm', 'pitchModel',
  'tuningSystem', 'pitchIntervals', 'bass', 'form', 'ensemble',
  'timbreSpace', 'forbidden', 'groove', 'percussion',
] as const;

function audibleSignature(contract: ReturnType<typeof resolveStyle>['contract']): string {
  return JSON.stringify({
    pulseModel: contract.pulseModel,
    meter: contract.meter,
    subdivision: contract.subdivision,
    timeline: contract.timeline,
    swing: contract.groove.swing,
    lean: contract.groove.lean,
    roleLean: contract.groove.roleLean,
    bass: contract.bass.style,
    form: contract.form,
    harmony: contract.harmonyModel,
    pitch: contract.pitchModel,
    room: contract.timbreSpace.room,
    production: contract.timbreSpace.production,
    percussion: contract.percussion,
  });
}

/**
 * Deterministic catalog validation. This deliberately throws on missing
 * contracts rather than silently substituting a Western/default world.
 */
export function validateGenreCatalog(): GenreValidationIssue[] {
  const issues: GenreValidationIssue[] = [];

  for (const genreId of Object.keys(GENRE_NAMES)) {
    const styles = getStylesForGenre(genreId);
    if (!styles.length) {
      issues.push({ genreId, issue: 'NO_STYLES' });
      continue;
    }

    const signatures = new Set<string>();
    for (const style of styles) {
      try {
        const resolved = resolveStyle({ genreId, styleId: style.id });
        const contract = resolved.contract;

        for (const field of REQUIRED_CONTRACT_FIELDS) {
          const value = contract[field];
          if (value === undefined || value === null) {
            issues.push({ genreId, styleId: style.id, issue: `MISSING_CONTRACT_FIELD:${field}` });
          }
        }

        if (!contract.groove.pocket.length) {
          issues.push({ genreId, styleId: style.id, issue: 'EMPTY_GROOVE_POCKET' });
        }
        if (!contract.accentMap.length) {
          issues.push({ genreId, styleId: style.id, issue: 'EMPTY_ACCENT_MAP' });
        }
        if (!resolved.form.templates?.length) {
          issues.push({ genreId, styleId: style.id, issue: 'MISSING_FORM_TEMPLATE' });
        }
        if (!resolved.sound.masterProfile?.roomId) {
          issues.push({ genreId, styleId: style.id, issue: 'MISSING_ROOM' });
        }

        signatures.add(audibleSignature(contract));
      } catch (error) {
        issues.push({
          genreId,
          styleId: style.id,
          issue: `RESOLUTION_ERROR:${error instanceof Error ? error.message : String(error)}`,
        });
      }
    }

    // A shipped sibling set with four or more styles must have at least
    // three materially different audible contracts.
    if (styles.length >= 4 && signatures.size < 3) {
      issues.push({
        genreId,
        issue: `SIBLING_DIFFERENTIATION_TOO_LOW:${signatures.size}/${styles.length}`,
      });
    }
  }

  return issues;
}

export function assertGenreCatalog(): void {
  const issues = validateGenreCatalog();
  if (issues.length) {
    throw new Error(
      `Genre catalog validation failed with ${issues.length} issue(s):\n` +
      issues.map(i => `${i.genreId}${i.styleId ? `/${i.styleId}` : ''}: ${i.issue}`).join('\n'),
    );
  }
}


/** Validate that section-level genre/style pairs are internally resolvable. */
export function validateSectionStyleIdentity(sheet: { worldId: string; styleId?: string; regions: Array<{ id: string; genre?: string; styleId?: string }> }): string[] {
  const issues: string[] = [];
  for (const region of sheet.regions) {
    const genreId = region.genre ?? sheet.worldId;
    const styleId = region.styleId ?? (genreId === sheet.worldId ? sheet.styleId : undefined);
    try {
      resolveStyle({ genreId, styleId: styleId ?? getCanonicalStyle(genreId).id });
    } catch (error) {
      issues.push(`${region.id}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  return issues;
}


export interface ChordValidationIssue {
  source: string;
  chord: string;
  issue: string;
}

/**
 * Independent harmony audit for shipped material. This is intentionally
 * separate from genre-contract validation: a musically invalid chord should
 * fail even when the surrounding genre/style contract is complete.
 */
export function validateChordCatalog(): ChordValidationIssue[] {
  const issues: ChordValidationIssue[] = [];
  const seenByPitchIdentity = new Map<string, { source: string; chord: string }>();
  const inspect = (source: string, chord: string) => {
    try {
      assertValidChordSymbol(chord);
      const parsed = parseChord(chord);
      const pitchIdentity = JSON.stringify([parsed.harmony.root, parsed.quality, parsed.harmony.extensions, parsed.harmony.alterations, parsed.harmony.bass]);
      const previous = seenByPitchIdentity.get(pitchIdentity);
      if (previous && previous.chord !== chord) {
        issues.push({ source, chord, issue: `ENHARMONIC_DUPLICATE_OF:${previous.chord}@${previous.source}` });
      } else {
        seenByPitchIdentity.set(pitchIdentity, { source, chord });
      }
    } catch (error) {
      issues.push({ source, chord, issue: error instanceof Error ? error.message : String(error) });
    }
  };

  for (const [genreId, progression] of Object.entries(PROGRESSIONS)) {
    if (Array.isArray(progression)) progression.forEach(chord => inspect(`PROGRESSIONS.${genreId}`, chord));
  }
  for (const [genreId, form] of Object.entries(GENRE_FORMS)) {
    for (const [i, step] of form.steps.entries()) {
      const candidate = (step as any).chords;
      if (Array.isArray(candidate)) candidate.forEach((chord: string) => inspect(`GENRE_FORMS.${genreId}.steps[${i}]`, chord));
    }
  }
  for (const genreId of Object.keys(GENRE_NAMES)) {
    for (const style of getStylesForGenre(genreId)) {
      try {
        const resolved = resolveStyle({ genreId, styleId: style.id });
        for (const [i, template] of (resolved.harmony?.progressionTemplates ?? []).entries()) {
          const chords = template.value as string[];
          if (Array.isArray(chords)) chords.forEach(chord => inspect(`STYLE.${style.id}.progressionTemplates[${i}]`, chord));
        }
        for (const [key, chords] of Object.entries(resolved.harmony?.sectionProgressions ?? {})) {
          if (Array.isArray(chords)) chords.forEach(chord => inspect(`STYLE.${style.id}.sectionProgressions.${key}`, chord));
        }
        // chordVocabulary also contains conceptual labels such as 'ii-V-I',
        // 'turnaround', and 'shared chord library'. Only root-led entries are
        // actual symbols; progressionTemplates/sectionProgressions are strict.
        for (const chord of resolved.harmony?.chordVocabulary ?? []) {
          if (/^[A-G](?:#|b)?/.test(chord)) inspect(`STYLE.${style.id}.chordVocabulary`, chord);
        }
      } catch (error) {
        issues.push({ source: `STYLE.${style.id}`, chord: '', issue: `RESOLUTION_ERROR:${error instanceof Error ? error.message : String(error)}` });
      }
    }
  }
  return issues;
}

export function assertChordCatalog(): void {
  const issues = validateChordCatalog().filter(i => !i.issue.startsWith('ENHARMONIC_DUPLICATE_OF:'));
  if (issues.length) throw new Error(`Chord catalog validation failed with ${issues.length} issue(s):\n${issues.map(i => `${i.source}: ${i.chord}: ${i.issue}`).join('\n')}`);
}
