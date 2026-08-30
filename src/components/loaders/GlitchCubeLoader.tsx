import React from 'react';
import { LoaderProps } from '../../types';

export const GlitchCubeLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 2.4 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Isometric Cube"
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
            dur={`${duration * 2}s`}
            repeatCount="indefinite"
          />

          {/* Top Face */}
          <polygon
            points="50,22 76,37 50,52 24,37"
            fill={color}
            fillOpacity="0.45"
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <animate
              attributeName="fill-opacity"
              values="0.45;0.8;0.2;0.45"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </polygon>

          {/* Right Face */}
          <polygon
            points="50,52 76,37 76,67 50,82"
            fill={color}
            fillOpacity="0.75"
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <animate
              attributeName="fill-opacity"
              values="0.75;0.3;0.85;0.75"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </polygon>

          {/* Left Face */}
          <polygon
            points="50,52 24,37 24,67 50,82"
            fill={color}
            fillOpacity="0.9"
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <animate
              attributeName="fill-opacity"
              values="0.9;0.5;0.95;0.9"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </polygon>

          {/* Inner pulsating core */}
          <circle cx="50" cy="52" r="6" fill="#ffffff" opacity="0.9">
            <animate
              attributeName="r"
              values="4;7;4"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};
