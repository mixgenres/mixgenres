import type { GuestLens, MusicalPattern } from '../../types';
import type { ResolvedStyle } from '../../data/styles/schema';
import type { WorldContract, BassDialect, PercussionDialect, ApproachSpec } from '../../data/styles/contracts';
import { resolveStyle } from '../../data/styles/resolve';
import { getCanonicalStyle } from '../../data/styles/registry';

/**
 * GENRE BLENDING
 * ==============
 *
 * The genre is the universe. The song style is the grammar spoken inside it.
 * A *part* can speak a different grammar without leaving the universe — this is
 * what a musician does when they play a reggae skank over a cumbia, or comp a
 * tango bandoneón part with jazz voicings. The song still sounds like cumbia;
 * the guitar just sounds like it learned to play somewhere else.
 *
 * This module implements that as a **guest lens**: one part, one foreign style,
 * one weight. It produces a blended `ResolvedStyle` used only for that part's
 * performance, never for the section as a whole.
 *
 * Two ways a lens comes into existence:
 *
 *   1. Explicit. The user sets a part's playing style to another world.
 *   2. Inferred. The user picks a pattern authored by another world. Choosing
 *      the cell *is* choosing the accent, the articulation and the timing that
 *      go with it — so the engine infers a lens rather than playing a foreign
 *      rhythm with host phrasing, which is what made cross-world patterns sound
 *      like transcription errors.
 *
 * ## Host invariants are never negotiable
 *
 * Blending is asymmetric. Some things belong to the universe and cannot be
 * overridden by a guest grammar at any weight:
 *
 *   - the timeline (clave, compás, dembow cell) when `timelineRequired`
 *   - the meter and the cycle length
 *   - the host's `forbidden` list
 *   - the tuning system
 *
 * Everything else — role lean, swing, articulation vocabulary, bass job,
 * voicing preference, ornament vocabulary, percussion dialect — is negotiable
 * and interpolates with the lens weight.
 *
 * A blend that would break an invariant is not silently clamped: it is reported
 * in `BlendReport.violations` so the UI can say *why* the guitar is not allowed
 * to swing against a 3-2 clave.
 */

export interface BlendReport {
  hostStyleId: string;
  guestStyleId: string;
  weight: number;
  /** Aspects the guest actually changed. */
  applied: string[];
  /** Aspects the guest asked for and the host refused, with a reason. */
  violations: { aspect: string; reason: string }[];
  /** One-line, user-facing summary. */
  summary: string;
}

export interface BlendedPartStyle {
  style: ResolvedStyle;
  report: BlendReport;
}

const blendCache = new Map<string, BlendedPartStyle>();

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function lerpInt(a: number, b: number, t: number): number {
  return Math.round(lerp(a, b, t));
}

function lensKey(hostStyleId: string, lens: GuestLens, role: string): string {
  return `${hostStyleId}|${lens.genreId}|${lens.styleId ?? ''}|${lens.weight.toFixed(2)}|${role}`;
}

export function resolveGuestStyle(lens: GuestLens): ResolvedStyle | undefined {
  try {
    const styleId = lens.styleId ?? getCanonicalStyle(lens.genreId).id;
    return resolveStyle({ genreId: lens.genreId, styleId });
  } catch {
    return undefined;
  }
}

/**
 * Blend one part's playing style. `role` matters: a guest lens on the bass
 * imports the guest's bass dialect, a guest lens on a drum part imports the
 * guest's percussion dialect, and neither touches the other.
 */
export function blendPartStyle(
  host: ResolvedStyle,
  lens: GuestLens | undefined,
  role: string,
): BlendedPartStyle {
  if (!lens || lens.weight <= 0.02 || lens.genreId === host.primaryGenre) {
    return {
      style: host,
      report: {
        hostStyleId: host.id,
        guestStyleId: host.id,
        weight: 0,
        applied: [],
        violations: [],
        summary: `${host.name} throughout`,
      },
    };
  }

  const key = lensKey(host.id, lens, role);
  const cached = blendCache.get(key);
  if (cached) return cached;

  const guest = resolveGuestStyle(lens);
  if (!guest) {
    const passthrough: BlendedPartStyle = {
      style: host,
      report: {
        hostStyleId: host.id,
        guestStyleId: lens.styleId ?? lens.genreId,
        weight: 0,
        applied: [],
        violations: [{ aspect: 'style', reason: `Unknown guest style ${lens.styleId ?? lens.genreId}` }],
        summary: `${host.name} (guest style unavailable)`,
      },
    };
    blendCache.set(key, passthrough);
    return passthrough;
  }

  const w = Math.max(0, Math.min(1, lens.weight));
  const hc = host.contract;
  const gc = guest.contract;
  const applied: string[] = [];
  const violations: BlendReport['violations'] = [];

  /* ---- timeline / meter: host property, never negotiable ---------------- */
  if (hc.timelineRequired && gc.timeline !== hc.timeline && gc.timeline !== 'none') {
    violations.push({
      aspect: 'timeline',
      reason: `${host.name} locks ${hc.timeline}; ${guest.name}'s ${gc.timeline} cannot displace it`,
    });
  }
  if (gc.meter !== hc.meter) {
    violations.push({
      aspect: 'meter',
      reason: `${guest.name} is felt in ${gc.meter}; the part is re-read in the host's ${hc.meter}`,
    });
  }

  /* ---- groove: interpolates, but timeline-locked worlds keep their swing - */
  const swingLocked = hc.timelineRequired;
  const groove: WorldContract['groove'] = {
    ...hc.groove,
    name: w > 0.5 ? `${gc.groove.name} in ${hc.groove.name}` : hc.groove.name,
    swing: swingLocked ? hc.groove.swing : lerp(hc.groove.swing, gc.groove.swing, w),
    swingUnit: w > 0.6 ? gc.groove.swingUnit : hc.groove.swingUnit,
    lean: lerp(hc.groove.lean, gc.groove.lean, w),
    roleLean: blendRoleLean(hc.groove.roleLean, gc.groove.roleLean, w, role),
    humanizeMs: lerp(hc.groove.humanizeMs, gc.groove.humanizeMs, w),
    humanizeVel: lerp(hc.groove.humanizeVel, gc.groove.humanizeVel, w),
    accentDepth: lerp(hc.groove.accentDepth, gc.groove.accentDepth, w),
    // The pocket template is the host's signature limp. A guest may shade it,
    // never replace it: a dembow lurch under a jazz comp is still a dembow.
    pocket: hc.groove.pocket.map((v, i) => lerp(v, (gc.groove.pocket[i] ?? 0) * 0.5 + v * 0.5, w)),
    anticipationMs: lerp(hc.groove.anticipationMs, gc.groove.anticipationMs, w),
    dynamicRange: lerp(hc.groove.dynamicRange, gc.groove.dynamicRange, w),
  };
  if (swingLocked && Math.abs(gc.groove.swing - hc.groove.swing) > 0.02) {
    violations.push({
      aspect: 'swing',
      reason: `${host.name}'s timeline fixes the subdivision; ${guest.name}'s swing is not applied`,
    });
  } else if (Math.abs(groove.swing - hc.groove.swing) > 0.01) {
    applied.push('swing');
  }
  if (Math.abs(groove.lean - hc.groove.lean) > 0.5) applied.push('timing lean');

  /* ---- role-scoped dialects --------------------------------------------- */
  const roleKind = classifyRole(role);

  let bass: BassDialect = hc.bass;
  if (roleKind === 'bass' && w >= 0.35) {
    bass = { ...gc.bass, articulation: unionArticulations(hc.bass.articulation, gc.bass.articulation, w) };
    applied.push(`bass job → ${gc.bass.style}`);
  }

  let percussion: PercussionDialect = hc.percussion;
  if (roleKind === 'percussion' && w >= 0.35) {
    // The host's prohibitions survive the blend. A guest can add hit types,
    // never re-permit something the host explicitly forbids.
    percussion = {
      kitMode: hc.percussion.kitMode === 'none' && w < 0.8 ? 'none' : gc.percussion.kitMode,
      allowedHitTypes: hc.percussion.allowedHitTypes.length
        ? Array.from(new Set([...hc.percussion.allowedHitTypes, ...gc.percussion.allowedHitTypes]))
        : gc.percussion.allowedHitTypes,
      forbidWesternBackbeat: hc.percussion.forbidWesternBackbeat,
      forbidSectionCrash: hc.percussion.forbidSectionCrash,
      allowTomFills: hc.percussion.allowTomFills && gc.percussion.allowTomFills,
      ride: gc.percussion.ride && !hc.percussion.forbidWesternBackbeat,
    };
    applied.push('percussion dialect');
    if (gc.percussion.forbidWesternBackbeat !== hc.percussion.forbidWesternBackbeat && !hc.percussion.forbidWesternBackbeat) {
      // guest is stricter; adopting the stricter rule is always safe
      percussion.forbidWesternBackbeat = true;
    }
    if (hc.percussion.forbidWesternBackbeat && !gc.percussion.forbidWesternBackbeat) {
      violations.push({ aspect: 'backbeat', reason: `${host.name} forbids a 2-and-4 backbeat` });
    }
  }

  /* ---- articulation and ornament vocabulary: additive ------------------- */
  const articulationGrammar = mergeStringListMaps(hc.articulationGrammar, gc.articulationGrammar, w);
  if (w >= 0.3) applied.push('articulation vocabulary');

  /* ---- approaches: the guest's behavioural id for this role ------------- */
  const approaches: Record<string, ApproachSpec> = { ...hc.approaches };
  const guestApproach = gc.approaches?.[role] ?? gc.approaches?.[roleKind];
  if (guestApproach && w >= 0.4) {
    approaches[role] = {
      ...guestApproach,
      tags: Array.from(new Set([...(hc.approaches?.[role]?.tags ?? []), ...guestApproach.tags])),
    };
    applied.push(`approach → ${guestApproach.id}`);
  }

  const blendedContract: WorldContract = {
    ...hc,
    groove,
    bass,
    percussion,
    articulationGrammar,
    approaches,
    // Harmony stays with the host unless the guest is dominant and the host is
    // not modal/timeline-bound: harmony is the most audible identity marker.
    harmonyModel: w >= 0.75 && !hc.timelineRequired ? gc.harmonyModel : hc.harmonyModel,
    harmonyVocabulary: Array.from(new Set([...hc.harmonyVocabulary, ...(w >= 0.5 ? gc.harmonyVocabulary : [])])),
    // Prohibitions are unioned, never relaxed.
    forbidden: Array.from(new Set([...hc.forbidden, ...gc.forbidden])),
    microtiming: {
      ...hc.microtiming,
      jitterMs: lerpInt(hc.microtiming.jitterMs, gc.microtiming.jitterMs, w),
      byRole: { ...hc.microtiming.byRole, ...(w >= 0.5 ? gc.microtiming.byRole : {}) },
    },
    performanceIdioms: { ...hc.performanceIdioms, ...(w >= 0.5 ? gc.performanceIdioms : {}) },
    improvisationGrammar: w >= 0.6 ? gc.improvisationGrammar : hc.improvisationGrammar,
  };

  const blendedStyle: ResolvedStyle = Object.freeze({
    ...host,
    id: `${host.id}+${guest.id}@${w.toFixed(2)}`,
    name: `${host.name} · ${guest.name} ${roleKind}`,
    contract: blendedContract,
    melody: w >= 0.5
      ? {
          ...host.melody,
          ornamentVocabulary: Array.from(
            new Set([...(host.melody?.ornamentVocabulary ?? []), ...(guest.melody?.ornamentVocabulary ?? [])]),
          ),
          contourArchetypes: guest.melody?.contourArchetypes ?? host.melody?.contourArchetypes,
        }
      : host.melody,
  }) as ResolvedStyle;

  const out: BlendedPartStyle = {
    style: blendedStyle,
    report: {
      hostStyleId: host.id,
      guestStyleId: guest.id,
      weight: w,
      applied,
      violations,
      summary: summarise(host.name, guest.name, roleKind, w, violations),
    },
  };
  blendCache.set(key, out);
  return out;
}

function summarise(
  hostName: string,
  guestName: string,
  roleKind: string,
  w: number,
  violations: BlendReport['violations'],
): string {
  const strength = w >= 0.75 ? 'plays as' : w >= 0.45 ? 'leans' : 'is shaded';
  const base = `${roleKind} ${strength} ${guestName} inside ${hostName}`;
  if (!violations.length) return base;
  return `${base} — ${violations[0].reason}`;
}

export type RoleKind = 'bass' | 'percussion' | 'harmony' | 'lead' | 'texture';

export function classifyRole(role: string): RoleKind {
  const r = String(role ?? '').toLowerCase();
  if (/bass|sub|tuba|contrabass/.test(r)) return 'bass';
  if (/perc|drum|kit|shaker|bell|hand/.test(r)) return 'percussion';
  if (/lead|melod|voice|solo|counterline|horn/.test(r)) return 'lead';
  if (/pad|texture|drone|atmos/.test(r)) return 'texture';
  return 'harmony';
}

function blendRoleLean(
  hostLean: Record<string, number>,
  guestLean: Record<string, number>,
  w: number,
  role: string,
): Record<string, number> {
  const out = { ...hostLean };
  // Only the lensed part's own lean moves. The rest of the band keeps the
  // host's pocket, which is what makes the fusion sit rather than drift.
  const kind = classifyRole(role);
  const keys = kind === 'bass' ? ['bass'] : kind === 'percussion' ? ['perc', 'kick', 'snare', 'hat', 'ride'] : kind === 'lead' ? ['lead'] : ['comp', 'stab', 'pad'];
  for (const k of keys) {
    const h = hostLean[k] ?? 0;
    const g = guestLean[k] ?? h;
    out[k] = lerp(h, g, w);
  }
  return out;
}

function unionArticulations(host: string[], guest: string[], w: number): string[] {
  return w >= 0.6 ? Array.from(new Set([...guest, ...host])) : Array.from(new Set([...host, ...guest]));
}

function mergeStringListMaps(
  host: Record<string, string[]>,
  guest: Record<string, string[]>,
  w: number,
): Record<string, string[]> {
  if (w < 0.3) return host;
  const out: Record<string, string[]> = { ...host };
  for (const [k, v] of Object.entries(guest)) {
    out[k] = w >= 0.6 ? Array.from(new Set([...v, ...(host[k] ?? [])])) : Array.from(new Set([...(host[k] ?? []), ...v]));
  }
  return out;
}

/**
 * Infer a lens from a pattern choice. Returns undefined when the pattern is
 * native to the section's genre, which is the overwhelmingly common case.
 *
 * `adventure` (the user's experiment dial, 0..1) sets how strongly an inferred
 * lens is applied. At 0 a foreign cell is merely transcribed into host phrasing;
 * at 1 it arrives with its home accent intact.
 */
export function inferLensFromPattern(
  pattern: MusicalPattern | undefined,
  sectionGenreId: string,
  adventure: number,
): GuestLens | undefined {
  if (!pattern) return undefined;
  if (!pattern.worldId || pattern.worldId === sectionGenreId) return undefined;
  const weight = Math.max(0.3, Math.min(1, 0.35 + adventure * 0.6));
  return {
    genreId: pattern.worldId,
    styleId: pattern.styleIds?.[0],
    weight,
    inferred: true,
    viaPatternId: pattern.id,
  };
}

/** Explicit lens wins over an inferred one; an explicit weight of 0 means "off". */
export function effectiveLens(explicit: GuestLens | undefined, inferred: GuestLens | undefined): GuestLens | undefined {
  if (explicit && explicit.weight > 0) return explicit;
  if (explicit && explicit.weight <= 0) return undefined;
  return inferred;
}

export function clearBlendCache(): void {
  blendCache.clear();
}
