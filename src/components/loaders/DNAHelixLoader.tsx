import React from 'react';
import { LoaderProps } from '../../types';

export const DNAHelixLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 1.8 / Math.max(speed, 0.1);
  const nodes = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading DNA Helix"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {nodes.map((i) => {
          const x = 18 + i * 10.6;
          const delay = (i / nodes.length) * duration;
          const delayNeg = -delay;

          return (
            <g key={i}>
              {/* Connecting hydrogen base rung */}
              <line
                x1={x}
                x2={x}
                stroke={color}
                strokeWidth="2"
                strokeOpacity="0.35"
              >
                <animate
                  attributeName="y1"
                  values="25;75;25"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values="75;25;75"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.5;0.15;0.5"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
              </line>

              {/* Strand 1 Node */}
              <circle
                cx={x}
                r="4.2"
                fill={color}
              >
                <animate
                  attributeName="cy"
                  values="25;75;25"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="5.2;2.8;5.2"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.4;1"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Strand 2 Node */}
              <circle
                cx={x}
                r="4.2"
                fill={color}
              >
                <animate
                  attributeName="cy"
                  values="75;25;75"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="2.8;5.2;2.8"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur={`${duration}s`}
                  begin={`${delayNeg}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
