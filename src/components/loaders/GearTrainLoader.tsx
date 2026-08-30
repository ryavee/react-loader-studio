import React from 'react';
import { LoaderProps } from '../../types';

export const GearTrainLoader: React.FC<LoaderProps> = ({
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
      aria-label="Loading Gears"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Large Main Gear (Top-Left, 8 teeth) */}
        <g transform="translate(38, 40)">
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
            {/* Gear Body */}
            <circle cx="0" cy="0" r="22" fill="none" stroke={color} strokeWidth="5" />
            <circle cx="0" cy="0" r="6" fill={color} />
            {/* Teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <rect
                key={angle}
                x="-3.5"
                y="-27"
                width="7"
                height="7"
                rx="1.5"
                fill={color}
                transform={`rotate(${angle} 0 0)`}
              />
            ))}
          </g>
        </g>

        {/* Small Intermeshing Gear (Bottom-Right, 6 teeth, counter-rotating) */}
        <g transform="translate(70, 70)">
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="-360 0 0"
              dur={`${duration * 0.75}s`}
              repeatCount="indefinite"
            />
            {/* Gear Body */}
            <circle cx="0" cy="0" r="14" fill="none" stroke={color} strokeWidth="4" />
            <circle cx="0" cy="0" r="4.5" fill={color} />
            {/* Teeth */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <rect
                key={angle}
                x="-2.5"
                y="-18"
                width="5"
                height="5"
                rx="1"
                fill={color}
                transform={`rotate(${angle} 0 0)`}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};
