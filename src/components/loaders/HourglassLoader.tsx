import React from 'react';
import { LoaderProps } from '../../types';

export const HourglassLoader: React.FC<LoaderProps> = ({
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
      aria-label="Loading Hourglass"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <g>
          {/* Entire hourglass flips 180 deg periodically */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 50 50; 0 50 50; 180 50 50; 180 50 50; 360 50 50"
            keyTimes="0; 0.42; 0.5; 0.92; 1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />

          {/* Hourglass outer glass geometry */}
          <path
            d="M 28 20 L 72 20 L 54 48 C 52 50, 52 50, 54 52 L 72 80 L 28 80 L 46 52 C 48 50, 48 50, 46 48 Z"
            fill="none"
            stroke={color}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top Sand draining */}
          <path
            d="M 34 26 L 66 26 L 50 48 Z"
            fill={color}
            opacity="0.85"
          >
            <animate
              attributeName="d"
              values="
                M 34 26 L 66 26 L 50 48 Z;
                M 46 42 L 54 42 L 50 48 Z;
                M 50 48 L 50 48 L 50 48 Z;
                M 34 26 L 66 26 L 50 48 Z
              "
              keyTimes="0; 0.42; 0.5; 1"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </path>

          {/* Sand Falling Stream Line */}
          <line
            x1="50"
            y1="48"
            x2="50"
            y2="76"
            stroke={color}
            strokeWidth="2.5"
            strokeDasharray="4 3"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0; -14"
              dur="0.3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1; 1; 0; 0; 1"
              keyTimes="0; 0.44; 0.48; 0.52; 0.56"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </line>

          {/* Bottom Sand filling */}
          <path
            d="M 48 76 L 52 76 L 50 74 Z"
            fill={color}
            opacity="0.85"
          >
            <animate
              attributeName="d"
              values="
                M 48 76 L 52 76 L 50 74 Z;
                M 34 76 L 66 76 L 50 56 Z;
                M 34 76 L 66 76 L 50 56 Z;
                M 48 76 L 52 76 L 50 74 Z
              "
              keyTimes="0; 0.42; 0.5; 1"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};
