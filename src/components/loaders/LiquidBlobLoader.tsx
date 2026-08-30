import React from 'react';
import { LoaderProps } from '../../types';

export const LiquidBlobLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 2.2 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Liquid Blob"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Main Morphing Fluid Droplet */}
        <path
          fill={color}
          opacity="0.9"
        >
          <animate
            attributeName="d"
            values="
              M 50 18 C 68 18, 82 32, 82 50 C 82 68, 68 82, 50 82 C 32 82, 18 68, 18 50 C 18 32, 32 18, 50 18 Z;
              M 50 14 C 76 18, 86 38, 80 58 C 74 78, 60 86, 44 82 C 28 78, 14 62, 18 44 C 22 26, 32 14, 50 14 Z;
              M 50 22 C 64 14, 84 26, 84 48 C 84 70, 72 84, 50 86 C 28 88, 16 70, 16 48 C 16 26, 36 30, 50 22 Z;
              M 50 18 C 68 18, 82 32, 82 50 C 82 68, 68 82, 50 82 C 32 82, 18 68, 18 50 C 18 32, 32 18, 50 18 Z
            "
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* Orbiting Mini Fluid Bubble */}
        <circle r="6" fill={color}>
          <animateMotion
            path="M 50,15 a 35,35 0 1,0 0.1,0 Z"
            dur={`${duration * 0.85}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="4;7;4"
            dur={`${duration * 0.85}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Liquid Highlight Glint */}
        <ellipse
          cx="42"
          cy="36"
          rx="7"
          ry="4"
          fill="#ffffff"
          opacity="0.5"
          transform="rotate(-30 42 36)"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.65;0.3"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      </svg>
    </div>
  );
};
