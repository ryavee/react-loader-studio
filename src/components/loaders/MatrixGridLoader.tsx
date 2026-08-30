import React from 'react';
import { LoaderProps } from '../../types';

export const MatrixGridLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 1.3 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Matrix Grid"
    >
      <svg viewBox="0 0 90 90" className="w-full h-full">
        {/* 3x3 Grid of rounded squares */}
        {[
          { x: 10, y: 10, delay: 0.2 },
          { x: 37, y: 10, delay: 0.35 },
          { x: 64, y: 10, delay: 0.5 },
          { x: 10, y: 37, delay: 0.1 },
          { x: 37, y: 37, delay: 0.25 },
          { x: 64, y: 37, delay: 0.4 },
          { x: 10, y: 64, delay: 0.0 },
          { x: 37, y: 64, delay: 0.15 },
          { x: 64, y: 64, delay: 0.3 },
        ].map((block, i) => (
          <g key={i} transform={`translate(${block.x + 9}, ${block.y + 9})`}>
            <rect
              x="-9"
              y="-9"
              width="18"
              height="18"
              rx="4"
              fill={color}
            >
              <animate
                attributeName="opacity"
                values="0.25; 1; 0.25"
                dur={`${duration}s`}
                begin={`${duration * block.delay}s`}
                repeatCount="indefinite"
              />
            </rect>
            <animateTransform
              attributeName="transform"
              type="scale"
              values="0.85; 1.08; 0.85"
              dur={`${duration}s`}
              begin={`${duration * block.delay}s`}
              repeatCount="indefinite"
              additive="sum"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
