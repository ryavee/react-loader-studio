# React Loader Studio

A collection of beautiful, animated, customizable SVG loading indicators for React.

[![npm version](https://img.shields.io/npm/v/react-loader-studio.svg?logo=npm)](https://www.npmjs.com/package/react-loader-studio)
[![npm downloads](https://img.shields.io/npm/dm/react-loader-studio.svg?logo=npm)](https://www.npmjs.com/package/react-loader-studio)
[![license](https://img.shields.io/npm/l/react-loader-studio.svg)](LICENSE)

[Live Demo](https://react-loader-studio.vercel.app/) · [GitHub Repository](https://github.com/ryavee/react-loader-studio) · [npm Package](https://www.npmjs.com/package/react-loader-studio)

## Features

- 21 animated SVG loader components
- React support for React 18 and newer
- TypeScript declarations included
- Customizable `size`, `color`, and animation `speed`
- `className` support for integrating with your own styles
- Accessible loading states with `role="status"` and descriptive `aria-label` values
- Lightweight SVG-based animations
- Works in projects with or without Tailwind CSS

## Installation

```bash
npm install react-loader-studio
```

```bash
yarn add react-loader-studio
```

```bash
pnpm add react-loader-studio
```

## Quick Start

Import a loader and render it while your content is loading:

```tsx
import { OrbitLoader } from 'react-loader-studio';
import 'react-loader-studio/style.css';

export function Profile() {
  const isLoading = true;

  if (isLoading) {
    return <OrbitLoader size={48} color="#0f766e" speed={1} />;
  }

  return <p>Profile loaded.</p>;
}
```

### Stylesheet import

Import `react-loader-studio/style.css` once in your app when you need the package's base layout styles:

```ts
import 'react-loader-studio/style.css';
```

Projects that already provide their own layout styles—including Tailwind CSS projects—may not need this import. Include it if you want the package's standalone base styling.

## Customization

All loaders support the following common options:

| Prop | Type | Description |
| --- | --- | --- |
| `size` | `number \| string` | Loader size. Numbers are interpreted as pixels; strings accept CSS sizes such as `"2rem"`. |
| `color` | `string` | Any valid CSS color value. |
| `speed` | `number` | Animation speed multiplier. `1` is the default; lower values slow the animation. |
| `className` | `string` | Classes applied to the loader wrapper. |

```tsx
import { PulseLoader } from 'react-loader-studio';

<PulseLoader
  size="3rem"
  color="rebeccapurple"
  speed={1.5}
  className="my-loader"
/>;
```

`RingLoader` also supports `strokeWidth` for changing the ring thickness.

## Available loaders

| Loader | Description |
| --- | --- |
| `ConstellationLoader` | Twinkling constellation nodes and connecting lines. |
| `DNAHelixLoader` | Animated double-helix motion. |
| `DotsLoader` | Bouncing dot sequence. |
| `ECGLoader` | Animated electrocardiogram trace. |
| `GearTrainLoader` | Intermeshing rotating gears. |
| `GlitchCubeLoader` | Rotating isometric cube. |
| `HeartbeatLoader` | Pulsing heart with wave effects. |
| `HourglassLoader` | Flipping hourglass animation. |
| `InfinityLoopLoader` | Continuous infinity-loop ribbon. |
| `LiquidBlobLoader` | Fluid blob and orbiting droplet. |
| `MatrixGridLoader` | Staggered 3×3 grid animation. |
| `NeuroSynapseLoader` | Animated neural-cluster pattern. |
| `OrbitLoader` | Concentric orbital paths and particles. |
| `PrismBeamLoader` | Refracting prism beams. |
| `PulseLoader` | Expanding radial waves. |
| `QuantumSpinLoader` | Multi-axis orbital spinner. |
| `RadarScanLoader` | Rotating radar sweep. |
| `RingLoader` | Segmented circular spinner. |
| `RippleLoader` | Expanding ripple rings. |
| `SoundwaveLoader` | Animated equalizer bars. |
| `VortexLoader` | Rotating spiral vortex. |

## Usage examples

### OrbitLoader

```tsx
import { OrbitLoader } from 'react-loader-studio';

<OrbitLoader size={56} color="#0f766e" speed={1.2} />;
```

### RingLoader

```tsx
import { RingLoader } from 'react-loader-studio';

<RingLoader size={40} color="#2563eb" speed={0.9} strokeWidth={3} />;
```

### PulseLoader

```tsx
import { PulseLoader } from 'react-loader-studio';

<PulseLoader size="64px" color="#9333ea" speed={1.5} />;
```

### ECGLoader

```tsx
import { ECGLoader } from 'react-loader-studio';

<ECGLoader size={72} color="#e11d48" speed={0.8} />;
```

## TypeScript

Type declarations are bundled with the package, so editors can provide prop autocomplete and type checking without any additional setup.

The common loader props are:

```ts
interface LoaderProps {
  size?: number | string;
  color?: string;
  speed?: number;
  className?: string;
}
```

`RingLoader` has a loader-specific `strokeWidth?: number` prop. Refer to the exported `LoaderProps` type for the complete package type definition.

## Accessibility

Each loader renders a `role="status"` loading region and provides an appropriate `aria-label`, such as “Loading Orbit” or “Loading Ring”. This gives assistive technologies useful loading-state context without extra configuration.

## Development

```bash
git clone https://github.com/ryavee/react-loader-studio.git
cd react-loader-studio
npm install
npm run dev
```

Useful commands:

```bash
npm run build       # Build the website and npm library output
npm run lint        # Type-check the project
npm run pack:check  # Inspect the npm package contents
```

## Publishing

Use npm's normal versioning workflow after validating the package:

```bash
npm version patch
npm publish
```

For feature releases or breaking changes, use `npm version minor` or `npm version major` before publishing. The project can also use GitHub Actions with npm Trusted Publishing to automate publishing; configure that workflow in your own repository and npm account.

## Contributing

Contributions are welcome.

1. Fork the [repository](https://github.com/ryavee/react-loader-studio).
2. Create a focused branch for your change.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request describing the change and its purpose.

## License

This project is [MIT licensed](LICENSE).

## Support

If React Loader Studio is useful to you, please [star the GitHub repository](https://github.com/ryavee/react-loader-studio) to support the project.
