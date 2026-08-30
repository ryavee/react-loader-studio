import React from 'react';
import { LoaderProps } from '../../types';

export const QuantumSpinLoader: React.FC<LoaderProps> = ({
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
      aria-label="Loading Quantum Spin"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Glowing Quantum Core */}
        <circle cx="50" cy="50" r="6" fill={color}>
          <animate
            attributeName="r"
            values="5;7.5;5"
            dur={`${duration * 0.5}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur={`${duration * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Ring 1 - Vertical Axial */}
        <g>
          <ellipse
            cx="50"
            cy="50"
            rx="12"
            ry="38"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeDasharray="40 20"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        {/* Ring 2 - Diagonal 60 deg */}
        <g transform="rotate(60 50 50)">
          <ellipse
            cx="50"
            cy="50"
            rx="12"
            ry="38"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeDasharray="40 20"
            strokeLinecap="round"
            strokeOpacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur={`${duration * 1.2}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        </g>

        {/* Ring 3 - Diagonal 120 deg */}
        <g transform="rotate(120 50 50)">
          <ellipse
            cx="50"
            cy="50"
            rx="12"
            ry="38"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeDasharray="40 20"
            strokeLinecap="round"
            strokeOpacity="0.8"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur={`${duration * 0.85}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </svg>
    </div>
  );
};
