import React from 'react';
import { LoaderProps } from '../../types';

export const PulseLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 1.4 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Pulse"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Wave 3 (outermost) */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke={color}
          strokeWidth="3"
        >
          <animate
            attributeName="r"
            values="12;46"
            dur={`${duration}s`}
            begin={`${duration * 0.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;0"
            dur={`${duration}s`}
            begin={`${duration * 0.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="3.5;0.5"
            dur={`${duration}s`}
            begin={`${duration * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Wave 2 (middle) */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
        >
          <animate
            attributeName="r"
            values="10;38"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="4;1"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Center core bulb */}
        <circle cx="50" cy="50" r="13" fill={color}>
          <animate
            attributeName="r"
            values="11; 14.5; 11"
            dur={`${duration * 0.7}s`}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};
