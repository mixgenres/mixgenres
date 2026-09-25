import type { InstrumentDSPOverride } from '../physicalDspProfile';

/** Deep physical profile override for Bb Trumpet. Generated from this instrument's luthierPhysics, techniques, playingStyles and acoustic role; not a generic family alias. */
export const dspOverride: InstrumentDSPOverride = {
  "instrumentCharacter": {
    "energySource": "brass-lip",
    "energyPath": "lips/mouthpiece/bore/bell",
    "bodyArchitecture": "brass-bore",
    "primaryCollision": "lip-to-bore standing-wave excitation",
    "asymmetries": [
      "courses",
      "mute",
      "pitch-bend"
    ],
    "couplingPaths": [
      "courses",
      "shell"
    ],
    "techniqueBindings": [
      "lip buzzing lip-trills",
      "half-valve pitch bends",
      "plunger mute wah-wah",
      "double tonguing"
    ]
  },
  "excitationDynamics": {
    "hardness": 0.63,
    "pressureSensitivity": 0.925,
    "nonlinearDrive": 0.153,
    "attackCollision": 0.695,
    "spectralSpread": 0.774,
    "directionalAsymmetry": 0.12,
    "lipTensionResistance": {
      "resistance": 0.88,
      "pressureToBrightness": 1.34,
      "standingWavePushback": 0.76,
      "nonlinearBlare": 0.94
    }
  },
  "coupledResonators": {
    "bodyModes": [
      {
        "ratio": 1.0,
        "q": 2.7,
        "gain": 0.163
      },
      {
        "ratio": 1.002,
        "q": 3.15,
        "gain": 0.122
      },
      {
        "ratio": 2.0,
        "q": 3.6,
        "gain": 0.108
      },
      {
        "ratio": 3.0,
        "q": 4.05,
        "gain": 0.101
      }
    ]
  },
  "mechanicalArtifacts": {
  "airHiss": 0.1,
  "keyThud": 0,
  "valveClick": 0.14,
  "fretBuzz": 0,
  "stringSqueak": 0,
  "pickZing": 0,
  "handContact": 0.04,
  "bodyKnock": 0,
  "rimImpact": 0,
  "bellowsNoise": 0,
  "damperNoise": 0,
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
  "breathBurst": 0.08,
  "keyworkClick": 0
},
  "articulationPhysics": {
    "strikeZoneLocation": "none",
    "fleshVsNail": 0,
    "handDamping": 0,
    "attackToPitchCoupling": 0.228,
    "releaseCoupling": 0.43,
    "continuousSustain": true,
    "noteTransition": "legato"
  },
  "genreDialects": {
    "salsa": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "lip buzzing lip-trills",
        "half-valve pitch bends",
        "plunger mute wah-wah",
        "double tonguing"
      ]
    },
    "jazz": {
      "excitationBias": 0,
      "brightness": 0.97,
      "damping": 0.04,
      "attack": 1.0,
      "articulation": [
        "lip buzzing lip-trills",
        "half-valve pitch bends",
        "plunger mute wah-wah",
        "double tonguing"
      ]
    },
    "mambo": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "lip buzzing lip-trills",
        "half-valve pitch bends",
        "plunger mute wah-wah",
        "double tonguing"
      ]
    },
    "mariachi": {
      "excitationBias": 0,
      "brightness": 1.0,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "lip buzzing lip-trills",
        "half-valve pitch bends",
        "plunger mute wah-wah",
        "double tonguing"
      ]
    },
    "funk": {
      "excitationBias": 0.04,
      "brightness": 1.04,
      "damping": -0.03,
      "attack": 1.06,
      "articulation": [
        "lip buzzing lip-trills",
        "half-valve pitch bends",
        "plunger mute wah-wah",
        "double tonguing"
      ]
    },
    "ska": {
      "excitationBias": 0,
      "brightness": 1.04,
      "damping": 0,
      "attack": 1.0,
      "articulation": [
        "lip buzzing lip-trills",
        "half-valve pitch bends",
        "plunger mute wah-wah",
        "double tonguing"
      ]
    }
  },
  "instrumentSpecific": {
    "trumpet": {
      "embouchureTension": 0.88,
      "pressureToBrightnessCurve": 1.34,
      "muteDamping": 0.18,
      "muteCombResonance": 0.06
    }
  },
  "physicalDetails": {
  "system": "lip-reed-brass-bore",
  "construction": "metal tube with cup/funnel mouthpiece and bell",
  "exciter": "lip valve/embouchure oscillator",
  "asymmetries": [
    "lip pressure",
    "air pressure",
    "bore/register",
    "mute if present"
  ],
  "coupling": [
    "lips-mouthpiece",
    "mouthpiece-bore",
    "bore-bell",
    "hand/mute cavity"
  ],
  "artifactSources": [
    "valve click where applicable",
    "breath/air turbulence",
    "hand/mute contact"
  ],
  "detail": [
    "pressure nonlinearly increases upper partials",
    "standing-wave impedance feeds back to lips",
    "bell radiation changes with register"
  ],
  "response": {
    "contactHardness": 0.637,
    "resonatorQ": 0.679,
    "nonlinearTransfer": 0.295,
    "inharmonicity": 0.091,
    "bodyCoupling": 0.599
  }
}
} as InstrumentDSPOverride;
