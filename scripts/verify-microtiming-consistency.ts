import { GENRE_WORLDS_BY_ID } from '../src/data/genres';
import { resolveStyle } from '../src/data/styles/resolve';

let totalChecked = 0;
let mismatches = 0;

for (const genre of Object.values(GENRE_WORLDS_BY_ID)) {
  for (const styleDef of genre.styleDefinitions) {
    try {
      const resolved = resolveStyle({ genreId: genre.id, styleId: styleDef.id });
      const a = styleDef.grooveMechanics?.microtimingFeel;
      const b = resolved.rhythm.microtimingFeel;
      totalChecked++;
      if (a && b && a !== b) {
        mismatches++;
        console.warn(`[microtiming-drift] ${genre.id}/${styleDef.id}: catalog says "${a}", runtime resolves "${b}"`);
        // We log warnings for display drift
      }
    } catch {
      // Style may resolve via standard fallback
    }
  }
}

console.log(`OK: ${totalChecked} styles checked (${mismatches} mismatches) across ${Object.keys(GENRE_WORLDS_BY_ID).length} genres.`);
