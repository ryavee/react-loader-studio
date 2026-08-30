import React from 'react';
import { LoaderProps } from '../../types';

export const RippleLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 1.6 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Ripple"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Ring 1 */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
        >
          <animate
            attributeName="r"
            values="6; 44"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; 0"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="4; 1"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Ring 2 */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
        >
          <animate
            attributeName="r"
            values="6; 44"
            dur={`${duration}s`}
            begin={`${duration * 0.5}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; 0"
            dur={`${duration}s`}
            begin={`${duration * 0.5}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="4; 1"
            dur={`${duration}s`}
            begin={`${duration * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Center dot */}
        <circle cx="50" cy="50" r="5" fill={color} />
      </svg>
    </div>
  );
};
