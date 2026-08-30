import React from 'react';
import { LoaderProps } from '../../types';

export const InfinityLoopLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 2.0 / Math.max(speed, 0.1);
  const pathD = "M 50 50 C 65 30, 85 30, 85 50 C 85 70, 65 70, 50 50 C 35 30, 15 30, 15 50 C 15 70, 35 70, 50 50 Z";

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Infinity Loop"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Background Base Track */}
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />

        {/* Animated Drawing Track Dash */}
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeDasharray="45 120"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-165"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* Particle 1 */}
        <circle r="4.5" fill={color}>
          <animateMotion
            path={pathD}
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Particle 2 (Offset Phase) */}
        <circle r="3.5" fill={color} opacity="0.75">
          <animateMotion
            path={pathD}
            dur={`${duration}s`}
            begin={`-${duration * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};
