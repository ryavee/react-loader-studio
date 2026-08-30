import React from 'react';
import { LoaderProps } from '../../types';

export const PrismBeamLoader: React.FC<LoaderProps> = ({
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
      aria-label="Loading Prism Beam"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Incident White Ray */}
        <line
          x1="6"
          y1="56"
          x2="45"
          y2="50"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="60;0;0;60"
            keyTimes="0;0.35;0.8;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </line>

        {/* Central Optical Prism Triangle */}
        <polygon
          points="50,24 74,74 26,74"
          fill={color}
          fillOpacity="0.12"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Internal Refraction Dot */}
        <circle cx="48" cy="52" r="3" fill={color}>
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Refracted Spectrum Beam 1 (Upper) */}
        <line
          x1="56"
          y1="49"
          x2="94"
          y2="30"
          stroke={color}
          strokeWidth="2.5"
          strokeOpacity="0.9"
          strokeLinecap="round"
          strokeDasharray="50"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="50;50;0;50"
            keyTimes="0;0.25;0.7;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </line>

        {/* Refracted Spectrum Beam 2 (Middle) */}
        <line
          x1="58"
          y1="53"
          x2="96"
          y2="48"
          stroke={color}
          strokeWidth="2.5"
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeDasharray="50"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="50;50;0;50"
            keyTimes="0;0.3;0.75;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </line>

        {/* Refracted Spectrum Beam 3 (Lower) */}
        <line
          x1="60"
          y1="57"
          x2="94"
          y2="66"
          stroke={color}
          strokeWidth="2.5"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeDasharray="50"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="50;50;0;50"
            keyTimes="0;0.35;0.8;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
};
