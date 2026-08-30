import React, { useId } from 'react';
import { LoaderProps } from '../../types';

export const RadarScanLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const sweepId = `radar-sweep-${useId().replace(/:/g, '')}`;
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 2.0 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Radar Scan"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={sweepId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="60%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Concentric Distance Rings */}
        <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.2" />
        <circle cx="50" cy="50" r="28" fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.2" />
        <circle cx="50" cy="50" r="14" fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.2" />

        {/* Reticle Crosshairs */}
        <line x1="8" y1="50" x2="92" y2="50" stroke={color} strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
        <line x1="50" y1="8" x2="50" y2="92" stroke={color} strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />

        {/* Sweeping Radar Beam */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
          {/* Pie Sector Sweep */}
          <path
            d="M 50 50 L 50 8 A 42 42 0 0 1 92 50 Z"
            fill={`url(#${sweepId})`}
          />
          {/* Leading Sweep Line */}
          <line
            x1="50"
            y1="50"
            x2="92"
            y2="50"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Target Blip 1 */}
        <circle cx="68" cy="36" r="3" fill={color}>
          <animate
            attributeName="opacity"
            values="0;0.1;1;0.8;0.2;0"
            keyTimes="0;0.15;0.25;0.4;0.7;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2;4;3;2;2;2"
            keyTimes="0;0.15;0.25;0.4;0.7;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Target Blip 2 */}
        <circle cx="34" cy="68" r="2.5" fill={color}>
          <animate
            attributeName="opacity"
            values="0;0;0.2;1;0.6;0"
            keyTimes="0;0.5;0.65;0.75;0.9;1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Center Station Hub */}
        <circle cx="50" cy="50" r="3.5" fill={color} />
      </svg>
    </div>
  );
};
