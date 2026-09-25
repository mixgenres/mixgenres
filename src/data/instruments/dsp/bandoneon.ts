import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Bandoneón. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "free-reed-bellows",
    "energyPath": "bellows/reed/chamber",
    "bodyArchitecture": "wood-chamber",
    "primaryCollision": "button + bellows pressure collision",
    "asymmetries": [
      "bellows"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "knee drop marcato impact",
      "bellows opening sigh swell",
      "fast button articulation with air release",
      "arrastre drag into accented downbeat",
      "percussive bellows slap",
      "golpe de caja wooden thud"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.695,
    "nonlinearDrive": 0.203,
    "attackCollision": 0.795,
    "spectralSpread": 0.702,
    "directionalAsymmetry": 0.34,
    "bisonoricAsymmetry": {
      "opening": {
        "attack": 0.92,
        "formantShift": -0.06,
        "pitchDriftCents": -2.8,
        "pressure": 0.88
      },
      "closing": {
        "attack": 1.28,
        "formantShift": 0.08,
        "pitchDriftCents": 2.3,
        "pressure": 1.14
      }
    },
    "kneeDropImpact": {
      "threshold": 0.72,
      "gain": 0.9,
      "saturation": 0.88,
      "decayMs": 18
    }
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.67,
        "q": 2.0,
        "gain": 0.175
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.128
      },
      {
        "ratio": 1.73,
        "q": 2.9,
        "gain": 0.112
      },
      {
        "ratio": 2.91,
        "q": 3.35,
        "gain": 0.104
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.1,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0.18,
  "damperNoise": 0,
  "palletClick": 0.16,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0.2,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0.12
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.316,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "bellows-flow"
  },
  "genreDialects": {
    "tango": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "knee drop marcato impact",
        "bellows opening sigh swell",
        "fast button articulation with air release",
        "arrastre drag into accented downbeat"
      ]
    },
    "nuevo-tango": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "knee drop marcato impact",
        "bellows opening sigh swell",
        "fast button articulation with air release",
        "arrastre drag into accented downbeat"
      ]
    },
    "milonga": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "knee drop marcato impact",
        "bellows opening sigh swell",
        "fast button articulation with air release",
        "arrastre drag into accented downbeat"
      ]
    },
    "chamame": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "knee drop marcato impact",
        "bellows opening sigh swell",
        "fast button articulation with air release",
        "arrastre drag into accented downbeat"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "knee drop marcato impact",
        "bellows opening sigh swell",
        "fast button articulation with air release",
        "arrastre drag into accented downbeat"
      ]
    }
  },
  "instrumentSpecific": {
    "bisonoric": {
      "opening": "Abrir: lower pressure, softer onset, slight chamber darkening",
      "closing": "Cerrar: higher pressure, harder onset, brighter chamber",
      "kneeDropImpact": true,
      "dryReedBanks": "8-foot + 4-foot; no musette beating"
    }
  },
  "physicalDetails": {
  "system": "bisonoric-free-reed",
  "construction": "rectangular reed-block cabinets with bellows and button manuals",
  "exciter": "paired/paired-octave free reeds under bellows pressure",
  "asymmetries": [
    "Abrir/Cerrar bisonoric mapping",
    "bellows reversal",
    "knee/legato pressure accents"
  ],
  "coupling": [
    "reed-to-reed register coupling",
    "reed-block-to-cabinet",
    "bellows-to-reed pressure",
    "wooden case impact"
  ],
  "artifactSources": [
    "button/pallet click",
    "bellows leather/fold noise",
    "case thud",
    "knee-drop transient"
  ],
  "detail": [
    "bisonoric button system",
    "dry 8-foot + 4-foot target register behavior for this model",
    "no generic musette beating",
    "pressure-driven amplitude and timbre"
  ],
  "response": {
    "contactHardness": 0.66,
    "resonatorQ": 0.82,
    "nonlinearTransfer": 0.24,
    "inharmonicity": 0.12,
    "bodyCoupling": 0.74
  }
}
} as InstrumentDSPOverride;
