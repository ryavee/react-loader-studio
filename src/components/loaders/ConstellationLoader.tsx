import React from 'react';
import { LoaderProps } from '../../types';

export const ConstellationLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 2.4 / Math.max(speed, 0.1);

  const stars = [
    { id: 1, x: 22, y: 30, r: 4.5, dur: duration * 0.9, delay: 0 },
    { id: 2, x: 50, y: 16, r: 5.5, dur: duration * 1.1, delay: 0.4 },
    { id: 3, x: 78, y: 32, r: 4, dur: duration * 0.8, delay: 0.8 },
    { id: 4, x: 70, y: 72, r: 5, dur: duration * 1.0, delay: 1.2 },
    { id: 5, x: 34, y: 80, r: 4.5, dur: duration * 1.2, delay: 1.6 },
    { id: 6, x: 48, y: 50, r: 6, dur: duration * 0.75, delay: 0.2 },
  ];

  const lines = [
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 1],
    [6, 1], [6, 2], [6, 3], [6, 4], [6, 5],
  ];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Constellation"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Constellation Vector Lines */}
        {lines.map(([s1Id, s2Id], idx) => {
          const s1 = stars.find((s) => s.id === s1Id)!;
          const s2 = stars.find((s) => s.id === s2Id)!;
          const delay = (idx * 0.2) % duration;
          return (
            <line
              key={idx}
              x1={s1.x}
              y1={s1.y}
              x2={s2.x}
              y2={s2.y}
              stroke={color}
              strokeWidth="1.5"
              strokeDasharray="4 2"
              strokeOpacity="0.3"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.15;0.65;0.15"
                dur={`${duration}s`}
                begin={`${-delay}s`}
                repeatCount="indefinite"
              />
            </line>
          );
        })}

        {/* Orbiting Celestial Trail Ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="10 30"
          strokeOpacity="0.25"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur={`${duration * 2}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Twinkling Stars */}
        {stars.map((star) => (
          <g key={star.id}>
            {/* Soft Glow Halo */}
            <circle
              cx={star.x}
              cy={star.y}
              r={star.r * 1.8}
              fill={color}
              opacity="0.15"
            >
              <animate
                attributeName="r"
                values={`${star.r * 1.2};${star.r * 2.2};${star.r * 1.2}`}
                dur={`${star.dur}s`}
                begin={`${-star.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.1;0.35;0.1"
                dur={`${star.dur}s`}
                begin={`${-star.delay}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Star Core */}
            <circle
              cx={star.x}
              cy={star.y}
              r={star.r}
              fill={color}
            >
              <animate
                attributeName="r"
                values={`${star.r * 0.8};${star.r * 1.25};${star.r * 0.8}`}
                dur={`${star.dur}s`}
                begin={`${-star.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur={`${star.dur}s`}
                begin={`${-star.delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
};
