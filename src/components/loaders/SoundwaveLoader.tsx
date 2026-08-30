import React from 'react';
import { LoaderProps } from '../../types';

export const SoundwaveLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 1.2 / Math.max(speed, 0.1);

  // 7 vertical equalizer frequency bars
  const bars = [
    { x: 14, minH: 12, maxH: 48, dur: duration * 0.9, delay: 0 },
    { x: 26, minH: 18, maxH: 68, dur: duration * 1.1, delay: 0.15 },
    { x: 38, minH: 24, maxH: 80, dur: duration * 0.85, delay: 0.3 },
    { x: 50, minH: 30, maxH: 88, dur: duration * 1.0, delay: 0.45 },
    { x: 62, minH: 24, maxH: 80, dur: duration * 0.85, delay: 0.2 },
    { x: 74, minH: 18, maxH: 68, dur: duration * 1.15, delay: 0.35 },
    { x: 86, minH: 12, maxH: 48, dur: duration * 0.95, delay: 0.1 },
  ];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Soundwave"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {bars.map((bar, i) => {
          const width = 6;
          const yCenter = 50;
          return (
            <rect
              key={i}
              x={bar.x - width / 2}
              width={width}
              rx={width / 2}
              fill={color}
              opacity={0.85 + (i % 2) * 0.15}
            >
              <animate
                attributeName="height"
                values={`${bar.minH};${bar.maxH};${bar.minH}`}
                dur={`${bar.dur}s`}
                begin={`${-bar.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${yCenter - bar.minH / 2};${yCenter - bar.maxH / 2};${yCenter - bar.minH / 2}`}
                dur={`${bar.dur}s`}
                begin={`${-bar.delay}s`}
                repeatCount="indefinite"
              />
            </rect>
          );
        })}
      </svg>
    </div>
  );
};
