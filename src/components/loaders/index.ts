import { OrbitLoader } from './OrbitLoader';
import { PulseLoader } from './PulseLoader';
import { ECGLoader } from './ECGLoader';
import { HeartbeatLoader } from './HeartbeatLoader';
import { RingLoader } from './RingLoader';
import { DotsLoader } from './DotsLoader';
import { RippleLoader } from './RippleLoader';
import { MatrixGridLoader } from './MatrixGridLoader';
import { DNAHelixLoader } from './DNAHelixLoader';
import { QuantumSpinLoader } from './QuantumSpinLoader';
import { NeuroSynapseLoader } from './NeuroSynapseLoader';
import { VortexLoader } from './VortexLoader';
import { GlitchCubeLoader } from './GlitchCubeLoader';
import { SoundwaveLoader } from './SoundwaveLoader';
import { HourglassLoader } from './HourglassLoader';
import { PrismBeamLoader } from './PrismBeamLoader';
import { LiquidBlobLoader } from './LiquidBlobLoader';
import { InfinityLoopLoader } from './InfinityLoopLoader';
import { RadarScanLoader } from './RadarScanLoader';
import { GearTrainLoader } from './GearTrainLoader';
import { ConstellationLoader } from './ConstellationLoader';
import { LoaderItem } from '../../types';

export {
  OrbitLoader,
  PulseLoader,
  ECGLoader,
  HeartbeatLoader,
  RingLoader,
  DotsLoader,
  RippleLoader,
  MatrixGridLoader,
  DNAHelixLoader,
  QuantumSpinLoader,
  NeuroSynapseLoader,
  VortexLoader,
  GlitchCubeLoader,
  SoundwaveLoader,
  HourglassLoader,
  PrismBeamLoader,
  LiquidBlobLoader,
  InfinityLoopLoader,
  RadarScanLoader,
  GearTrainLoader,
  ConstellationLoader,
};

export const LOADERS_REGISTRY: LoaderItem[] = [
  {
    id: 'orbit',
    name: 'OrbitLoader',
    description: 'Concentric elliptical orbitals with synchronized planetary particles and a glowing nucleus.',
    category: 'Geometric',
    component: OrbitLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['astronomy', 'orbital', 'smooth', 'modern'],
  },
  {
    id: 'pulse',
    name: 'PulseLoader',
    description: 'Dynamic multi-wave radio radial expansion with a pulsating focal node.',
    category: 'Wave',
    component: PulseLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['radar', 'radial', 'expanding', 'minimal'],
  },
  {
    id: 'dna-helix',
    name: 'DNAHelixLoader',
    description: 'Intertwined undulating base pairs oscillating in 3D perspective double-helix synthesis.',
    category: 'Organic',
    component: DNAHelixLoader,
    defaultProps: {
      size: 54,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['biotech', 'helix', 'molecular', 'genomics'],
  },
  {
    id: 'quantum-spin',
    name: 'QuantumSpinLoader',
    description: 'Tri-axial gyroscopic atomic orbitals spinning across orthogonal spatial axes.',
    category: 'Geometric',
    component: QuantumSpinLoader,
    defaultProps: {
      size: 52,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['quantum', 'atomic', 'gyroscope', '3d'],
  },
  {
    id: 'ecg',
    name: 'ECGLoader',
    description: 'Precision telemetry electrocardiogram vector scan with real-time waveform tracing.',
    category: 'Wave',
    component: ECGLoader,
    defaultProps: {
      size: 54,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['telemetry', 'biomedical', 'analytics', 'vector'],
  },
  {
    id: 'neuro-synapse',
    name: 'NeuroSynapseLoader',
    description: 'Interconnected hexagonal neural cluster firing electric synaptic impulses.',
    category: 'Organic',
    component: NeuroSynapseLoader,
    defaultProps: {
      size: 52,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['neural', 'ai', 'synapse', 'network'],
  },
  {
    id: 'vortex',
    name: 'VortexLoader',
    description: 'Hypnotic centrifugal multi-arm vortex spiral with expanding fluid blade curvature.',
    category: 'Geometric',
    component: VortexLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['vortex', 'spiral', 'cyclone', 'hypnotic'],
  },
  {
    id: 'glitch-cube',
    name: 'GlitchCubeLoader',
    description: 'Isometric 3D rotating cybernetic wireframe cube with dynamic facet illumination.',
    category: 'Geometric',
    component: GlitchCubeLoader,
    defaultProps: {
      size: 50,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['isometric', 'tesseract', 'cyber', 'cube'],
  },
  {
    id: 'soundwave',
    name: 'SoundwaveLoader',
    description: 'Studio equalizer audio frequency analyzer with 7 dynamically oscillating spectrum bars.',
    category: 'Wave',
    component: SoundwaveLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['audio', 'equalizer', 'spectrum', 'music'],
  },
  {
    id: 'hourglass',
    name: 'HourglassLoader',
    description: 'Modern geometric hourglass with streaming granular particles and 180° flip loop.',
    category: 'Minimal',
    component: HourglassLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['hourglass', 'time', 'minimal', 'flip'],
  },
  {
    id: 'prism-beam',
    name: 'PrismBeamLoader',
    description: 'Optical glass prism refracting incident laser rays into separated chromatic beam angles.',
    category: 'Minimal',
    component: PrismBeamLoader,
    defaultProps: {
      size: 50,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['optics', 'prism', 'refraction', 'laser'],
  },
  {
    id: 'liquid-blob',
    name: 'LiquidBlobLoader',
    description: 'Elastic fluid metaball with surface tension deformation and orbiting micro-droplet.',
    category: 'Organic',
    component: LiquidBlobLoader,
    defaultProps: {
      size: 50,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['liquid', 'metaball', 'fluid', 'elastic'],
  },
  {
    id: 'infinity-loop',
    name: 'InfinityLoopLoader',
    description: 'Continuous Lemniscate figure-8 infinity ribbon with dual glide particle trails.',
    category: 'Geometric',
    component: InfinityLoopLoader,
    defaultProps: {
      size: 52,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['infinity', 'loop', 'ribbon', 'perpetual'],
  },
  {
    id: 'radar-scan',
    name: 'RadarScanLoader',
    description: 'Avionics radar sweep with graduated gradient beam and pinging target blips.',
    category: 'Wave',
    component: RadarScanLoader,
    defaultProps: {
      size: 50,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['radar', 'avionics', 'sonar', 'scan'],
  },
  {
    id: 'gear-train',
    name: 'GearTrainLoader',
    description: 'Precision intermeshed mechanical dual gears with synchronous counter-rotation.',
    category: 'Geometric',
    component: GearTrainLoader,
    defaultProps: {
      size: 50,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['gears', 'mechanical', 'precision', 'engine'],
  },
  {
    id: 'constellation',
    name: 'ConstellationLoader',
    description: 'Stellar star cluster with twinkling nodes and weaving celestial vector lines.',
    category: 'Organic',
    component: ConstellationLoader,
    defaultProps: {
      size: 52,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['stars', 'celestial', 'space', 'constellation'],
  },
  {
    id: 'heartbeat',
    name: 'HeartbeatLoader',
    description: 'Organic cardiac contraction loop with dual-beat rhythm and responsive radiant aura.',
    category: 'Organic',
    component: HeartbeatLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['cardiac', 'vital', 'health', 'fluid'],
  },
  {
    id: 'ring',
    name: 'RingLoader',
    description: 'Segmented conic precision rotational spinner with track opacity contrast.',
    category: 'Minimal',
    component: RingLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
      strokeWidth: 4,
    },
    tags: ['classic', 'spinner', 'circular', 'saas'],
  },
  {
    id: 'dots',
    name: 'DotsLoader',
    description: 'Harmonic wave phase-offset bouncing dots with smooth easing transitions.',
    category: 'Wave',
    component: DotsLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['bouncing', 'chat', 'horizontal', 'typing'],
  },
  {
    id: 'ripple',
    name: 'RippleLoader',
    description: 'Concentric sonar liquid ripple oscillations with dissolving outer perimeter.',
    category: 'Wave',
    component: RippleLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['sonar', 'liquid', 'ripple', 'minimal'],
  },
  {
    id: 'matrix',
    name: 'MatrixGridLoader',
    description: 'Digital 3x3 staggered wave matrix of pulsating modules with dynamic scaling.',
    category: 'Geometric',
    component: MatrixGridLoader,
    defaultProps: {
      size: 48,
      color: '#0F766E',
      speed: 1,
    },
    tags: ['grid', 'matrix', 'modular', 'digital'],
  },
];

