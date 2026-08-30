import React from 'react';
import { LoaderProps } from '../../types';

export const OrbitLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 2.0 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Orbit"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Core Glowing Sun / Nucleus */}
        <circle
          cx="50"
          cy="50"
          r="9"
          fill={color}
        >
          <animate
            attributeName="r"
            values="7.5;10;7.5"
            dur={`${duration * 0.75}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.75;1;0.75"
            dur={`${duration * 0.75}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="14"
          fill={color}
          opacity="0.2"
        >
          <animate
            attributeName="r"
            values="12;16;12"
            dur={`${duration * 0.75}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.25;0.05;0.25"
            dur={`${duration * 0.75}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbit Track 1 */}
        <g transform="rotate(-30 50 50)">
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="15"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="6 4"
            strokeOpacity="0.4"
          />
          {/* Planet 1 moving on track */}
          <circle r="4.5" fill={color}>
            <animateMotion
              path="M 12,50 a 38,15 0 1,0 76,0 a 38,15 0 1,0 -76,0"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.4;1;0.9;1"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Orbit Track 2 */}
        <g transform="rotate(40 50 50)">
          <ellipse
            cx="50"
            cy="50"
            rx="38"
            ry="15"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="6 4"
            strokeOpacity="0.4"
          />
          {/* Planet 2 moving on track in opposite phase */}
          <circle r="4.5" fill={color}>
            <animateMotion
              path="M 88,50 a 38,15 0 1,0 -76,0 a 38,15 0 1,0 76,0"
              dur={`${duration * 1.3}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;1;0.4;0.9;0.4"
              dur={`${duration * 1.3}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};
