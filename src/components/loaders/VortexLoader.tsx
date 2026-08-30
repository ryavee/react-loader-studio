import React from 'react';
import { LoaderProps } from '../../types';

export const VortexLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 1.8 / Math.max(speed, 0.1);
  const arms = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Vortex"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
          {arms.map((i) => {
            const rot = i * 45;
            const opacity = 0.25 + (i / arms.length) * 0.75;
            return (
              <g key={i} transform={`rotate(${rot} 50 50)`}>
                <path
                  d="M 50 50 C 60 40, 75 42, 86 50 C 75 58, 60 54, 50 50 Z"
                  fill={color}
                  opacity={opacity}
                >
                  <animate
                    attributeName="d"
                    values="
                      M 50 50 C 60 40, 75 42, 86 50 C 75 58, 60 54, 50 50 Z;
                      M 50 50 C 56 32, 80 34, 92 50 C 80 66, 56 62, 50 50 Z;
                      M 50 50 C 60 40, 75 42, 86 50 C 75 58, 60 54, 50 50 Z
                    "
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            );
          })}
        </g>
        <circle cx="50" cy="50" r="5" fill={color} />
      </svg>
    </div>
  );
};
