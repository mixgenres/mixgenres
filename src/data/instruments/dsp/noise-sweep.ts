import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Noise sweep. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "electronic",
    "energyPath": "oscillator/filter/body",
    "bodyArchitecture": "instrument-specific chamber",
    "primaryCollision": "circuit/switch/filter edge",
    "asymmetries": [
      "slide"
    ],
    "couplingPaths": [],
    "techniqueBindings": [
      "velocity programming",
      "filter motion",
      "pitch slide"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.19,
    "pressureSensitivity": 0.525,
    "nonlinearDrive": 0.074,
    "attackCollision": 0.495,
    "spectralSpread": 0.558,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.0,
        "gain": 0.139
      },
      {
        "ratio": 2.0,
        "q": 2.45,
        "gain": 0.11
      },
      {
        "ratio": 3.0,
        "q": 2.9,
        "gain": 0.1
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.02,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0,
  "hammerClick": 0,
  "pedalNoise": 0,
  "membraneFingerNoise": 0,
  "seedRattle": 0,
  "fippleNoise": 0,
  "muteContact": 0,
  "breathBurst": 0,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.18,
    "continuousSustain": false,
    "noteTransition": "slide"
  },
  "genreDialects": {
    "electronic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "velocity programming",
        "filter motion",
        "pitch slide"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "velocity programming",
        "filter motion",
        "pitch slide"
      ]
    },
    "dance": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "velocity programming",
        "filter motion",
        "pitch slide"
      ]
    }
  },
  "physicalDetails": {
  "system": "electronic-signal-chain",
  "construction": "electronic oscillator/filter/effect path",
  "exciter": "electronic source",
  "asymmetries": [
    "filter trajectory",
    "envelope/gate",
    "drive state",
    "effect feedback"
  ],
  "coupling": [
    "oscillator-filter",
    "filter-feedback",
    "effect loop"
  ],
  "artifactSources": [
    "switch/drive transients",
    "quantization/aliasing where intentional"
  ],
  "detail": [
    "electronic identity should not be forced into acoustic physics",
    "timbral motion comes from signal-path state",
    "effects are part of the instrument definition"
  ],
  "response": {
    "contactHardness": 0.38,
    "resonatorQ": 0.908,
    "nonlinearTransfer": 0.338,
    "inharmonicity": 0.055,
    "bodyCoupling": 0.752
  }
}
} as InstrumentDSPOverride;
