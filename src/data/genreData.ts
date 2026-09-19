import { LensDef } from '../types';
import { GENRE_WORLDS, GENRE_WORLDS_BY_ID, ALL_PATTERNS, PATTERNS_BY_ID } from './genres';

/** Public catalog exports. Song generation lives in the runtime engine. */
export const LENSES: LensDef[] = GENRE_WORLDS;
export const LENS_BY_ID: Record<string, LensDef> = GENRE_WORLDS_BY_ID;
export { ALL_PATTERNS, PATTERNS_BY_ID };
