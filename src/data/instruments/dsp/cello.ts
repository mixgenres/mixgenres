import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Cello. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "bow",
    "energyPath": "bow/string/bridge/body",
    "bodyArchitecture": "wood-box",
    "primaryCollision": "stick-slip friction",
    "asymmetries": [],
    "couplingPaths": [],
    "techniqueBindings": [
      "smooth bow legato phrasing",
      "finger pizzicato pluck",
      "tango arrastre bow drag",
      "sul tasto flautando",
      "sul ponticello metallic rasp"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.45,
    "pressureSensitivity": 0.795,
    "nonlinearDrive": 0.121,
    "attackCollision": 0.555,
    "spectralSpread": 0.586,
    "directionalAsymmetry": 0.54
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 0.55,
        "q": 2.0,
        "gain": 0.147
      },
      {
        "ratio": 1.0,
        "q": 2.45,
        "gain": 0.113
      },
      {
        "ratio": 1.72,
        "q": 2.9,
        "gain": 0.102
      },
      {
        "ratio": 2.63,
        "q": 3.35,
        "gain": 0.097
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0,
  "keyThud": 0,
  "valveClick": 0,
  "fretBuzz": 0,
  "stringSqueak": 0.09,
  "pickZing": 0,
  "handContact": 0.06,
  "bodyKnock": 0.04,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0.05,
  "palletClick": 0,
  "slideNoise": 0,
  "reedChatter": 0,
  "bellowsFold": 0,
  "bowRosin": 0.16,
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
    "strikeZoneLocation": "fingerboard",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.396,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "classical": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "smooth bow legato phrasing",
        "finger pizzicato pluck",
        "tango arrastre bow drag",
        "sul tasto flautando"
      ]
    },
    "tango": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "smooth bow legato phrasing",
        "finger pizzicato pluck",
        "tango arrastre bow drag",
        "sul tasto flautando"
      ]
    },
    "folk": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "smooth bow legato phrasing",
        "finger pizzicato pluck",
        "tango arrastre bow drag",
        "sul tasto flautando"
      ]
    },
    "cinematic": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "smooth bow legato phrasing",
        "finger pizzicato pluck",
        "tango arrastre bow drag",
        "sul tasto flautando"
      ]
    },
    "pop": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "smooth bow legato phrasing",
        "finger pizzicato pluck",
        "tango arrastre bow drag",
        "sul tasto flautando"
      ]
    }
  },
  "physicalDetails": {
  "system": "bowed-string",
  "construction": "arched wooden body with bridge",
  "exciter": "bow hair stick-slip",
  "asymmetries": [
    "bow direction",
    "bow speed/pressure",
    "stopping position"
  ],
  "coupling": [
    "string-bridge",
    "bridge-body",
    "body-air",
    "open-string sympathetics"
  ],
  "artifactSources": [
    "bow hair noise",
    "finger contact",
    "bridge scrape"
  ],
  "detail": [
    "bow friction is nonlinear",
    "bridge transmits both fundamental and high-frequency bow noise",
    "stopping changes damping and pitch stability"
  ],
  "response": {
    "contactHardness": 0.582,
    "resonatorQ": 0.974,
    "nonlinearTransfer": 0.224,
    "inharmonicity": 0.071,
    "bodyCoupling": 0.872
  }
}
} as InstrumentDSPOverride;
