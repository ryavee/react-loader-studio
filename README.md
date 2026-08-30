# React Loader Studio

Animated SVG loading indicators for React. The package includes 21 typed, dependency-light loaders and works with or without Tailwind CSS.

## Install

```bash
npm install react-loader-studio
```

## Use

```tsx
import { OrbitLoader, RingLoader } from 'react-loader-studio';
import 'react-loader-studio/style.css';

export function SaveButton({ saving }: { saving: boolean }) {
  return saving ? <OrbitLoader size={40} color="#0f766e" speed={1.2} /> : <span>Saved</span>;
}

// RingLoader also accepts strokeWidth.
<RingLoader size="2rem" color="rebeccapurple" strokeWidth={3} />;
```

All loaders accept `size`, `color`, `speed`, and `className`. `size` accepts a number (pixels) or a CSS size string. `speed` defaults to `1`; values below `0.1` are safely clamped. Import the package stylesheet once to supply the base layout styles when your app does not use Tailwind CSS.

## Develop and publish

```bash
npm install
npm run dev        # demo website
npm run build      # website + library bundles and types
npm run pack:check # inspect the npm tarball contents
npm publish        # publish after choosing an available package name
```

Before publishing, set the `name`, `author`, `repository`, `homepage`, and `bugs` fields in `package.json` to your own npm/GitHub details. This project is distributed under the MIT license; review `LICENSE` before publishing.
