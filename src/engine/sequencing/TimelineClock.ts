/**
 * CIRCULAR TIMELINE CLOCK & GRAVITATIONAL NODES
 * ============================================
 * Replaces linear 4/4 BPM grids with a circular phase accumulator (0.0 to 2π).
 * Manages cultural anchors (Clave, Compás, Guacharaca) and gravitational timing pulls.
 */

export interface GravitationalNode {
  /** Target phase angle in cycle (0.0 to 1.0) */
  targetPhase: number;
  /** Attraction strength / pull magnitude (-0.2 ahead / +0.2 delay) */
  pullStrength: number;
  /** Width of the gravitational attraction zone */
  range: number;
}

export interface CulturalAnchor {
  id: string;
  name: string;
  /** Total beats in one complete cultural cycle */
  cycleBeats: number;
  /** Gravitational nodes for instrument syncopation and feel warping */
  gravitationalNodes: GravitationalNode[];
}

export const CULTURAL_ANCHORS: Record<string, CulturalAnchor> = {
  'salsa_clave_2_3': {
    id: 'salsa_clave_2_3',
    name: 'Son Clave 2-3',
    cycleBeats: 8,
    gravitationalNodes: [
      { targetPhase: 0.1875, pullStrength: 0.02, range: 0.1 },  // Beat 2
      { targetPhase: 0.375, pullStrength: -0.03, range: 0.1 },  // Beat 3 (ponche)
      { targetPhase: 0.625, pullStrength: 0.015, range: 0.1 },  // Beat 2 of 3-side
      { targetPhase: 0.75, pullStrength: 0.04, range: 0.1 },   // "And" of 2
      { targetPhase: 0.875, pullStrength: -0.02, range: 0.1 },  // Beat 4
    ],
  },
  'flamenco_compas_12': {
    id: 'flamenco_compas_12',
    name: 'Soleá 12-Beat Compás',
    cycleBeats: 12,
    gravitationalNodes: [
      { targetPhase: 0.25, pullStrength: -0.04, range: 0.08 },  // Accented 3
      { targetPhase: 0.50, pullStrength: 0.03, range: 0.08 },   // Accented 6
      { targetPhase: 0.66, pullStrength: -0.05, range: 0.08 },  // Accented 8
      { targetPhase: 0.83, pullStrength: 0.02, range: 0.08 },   // Accented 10
      { targetPhase: 1.00, pullStrength: -0.02, range: 0.08 },  // Accented 12
    ],
  },
  'cumbia_guacharaca': {
    id: 'cumbia_guacharaca',
    name: 'Guacharaca Cumbia Motor',
    cycleBeats: 4,
    gravitationalNodes: [
      { targetPhase: 0.25, pullStrength: 0.03, range: 0.12 },
      { targetPhase: 0.75, pullStrength: -0.03, range: 0.12 },
    ],
  },
  'samba_surdo': {
    id: 'samba_surdo',
    name: 'Samba Batucada Phase',
    cycleBeats: 4,
    gravitationalNodes: [
      { targetPhase: 0.5, pullStrength: 0.05, range: 0.15 }, // Heavy Surdo 2 pull
      { targetPhase: 0.25, pullStrength: -0.03, range: 0.1 }, // Tamborim push ahead
    ],
  },
};

export class TimelineClock {
  private currentPhase: number = 0.0; // 0.0 to 1.0
  private cycleDurationSeconds: number = 4.0;
  private anchor: CulturalAnchor = CULTURAL_ANCHORS['salsa_clave_2_3'];

  constructor(cycleBeats: number = 8, bpm: number = 120) {
    this.setTempo(bpm, cycleBeats);
  }

  setAnchor(anchorId: string) {
    if (CULTURAL_ANCHORS[anchorId]) {
      this.anchor = CULTURAL_ANCHORS[anchorId];
    }
  }

  setTempo(bpm: number, cycleBeats: number = 8) {
    const safeBpm = Math.max(30, Math.min(300, bpm));
    const secondsPerBeat = 60 / safeBpm;
    this.cycleDurationSeconds = secondsPerBeat * cycleBeats;
  }

  getCurrentPhase(): number {
    return this.currentPhase;
  }

  /**
   * Advances clock phase by deltaSeconds and applies gravitational distortion.
   */
  advance(deltaSeconds: number): number {
    const rawDeltaPhase = deltaSeconds / this.cycleDurationSeconds;
    this.currentPhase = (this.currentPhase + rawDeltaPhase) % 1.0;
    return this.getWarpedPhase(this.currentPhase);
  }

  /**
   * Applies gravitational nodes to distort a nominal phase angle.
   */
  getWarpedPhase(nominalPhase: number): number {
    let warped = nominalPhase;
    for (const node of this.anchor.gravitationalNodes) {
      const dist = Math.abs(nominalPhase - node.targetPhase);
      if (dist < node.range) {
        const factor = 1.0 - (dist / node.range);
        warped += node.pullStrength * factor * 0.1;
      }
    }
    return (warped + 1.0) % 1.0;
  }

  reset() {
    this.currentPhase = 0.0;
  }
}
