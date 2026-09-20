import { GENRE_NAMES } from '../data/genres';
import {
  Sheet,
  makeSheet,
  switchSectionWorld,
  randomizePatternsForSection,
  randomizeChordsForSection,
  addVoice,
  removeVoice,
  silenceVoiceInSection,
  unsilenceVoiceInSection,
  getResolvedSectionStyle,
} from './arrange';
import { validateSectionStyleIdentity } from './genreValidation';

export interface MixedGenreRegressionFailure {
  genreId: string;
  operation: string;
  error: string;
}

/**
 * Permanent deterministic smoke matrix for mixed-genre sections. It deliberately
 * exercises the same mutation paths that previously reconstructed genre/style
 * identity independently. Call this from a test/dev harness rather than startup.
 */
export function runMixedGenreRegression(base?: Sheet): MixedGenreRegressionFailure[] {
  const failures: MixedGenreRegressionFailure[] = [];
  let seed = base ?? makeSheet('rock');
  const regionId = seed.regions[0]?.id;
  if (!regionId) return [{ genreId: seed.worldId, operation: 'setup', error: 'No section available' }];

  for (const genreId of Object.keys(GENRE_NAMES)) {
    const run = (operation: string, fn: (sheet: Sheet) => Sheet) => {
      try {
        seed = fn(seed);
        const region = seed.regions.find(r => r.id === regionId);
        if (!region) throw new Error('Target section disappeared');
        getResolvedSectionStyle(seed, region);
        const identityIssues = validateSectionStyleIdentity(seed);
        if (identityIssues.length) throw new Error(identityIssues.join('; '));
      } catch (error) {
        failures.push({ genreId, operation, error: error instanceof Error ? error.message : String(error) });
      }
    };

    run('switch-genre', s => switchSectionWorld(s, regionId, genreId));
    run('randomize-patterns', s => randomizePatternsForSection(s, regionId));
    run('randomize-chords', s => randomizeChordsForSection(s, regionId));

    const beforeVoiceIds = new Set(seed.tracks.map(t => t.id));
    run('add-voice', s => addVoice(s, s.tracks[0]?.instrumentId ?? 'piano', regionId, 'section'));
    const added = seed.tracks.find(t => !beforeVoiceIds.has(t.id));
    if (added) {
      run('silence-voice', s => silenceVoiceInSection(s, added.id, regionId));
      run('unsilence-voice', s => unsilenceVoiceInSection(s, added.id, regionId));
      run('remove-voice', s => removeVoice(s, added.id));
    }
  }

  return failures;
}
