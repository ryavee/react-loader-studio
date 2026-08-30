import React from 'react';
import { LoaderProps } from '../../types';

export const ECGLoader: React.FC<LoaderProps> = ({
  size = 54,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 54;
  const duration = 1.8 / Math.max(speed, 0.1);

  // SVG ECG Path: baseline -> dip -> QRS spike -> dip -> T wave -> baseline
  const pathD = "M 5 35 L 25 35 L 30 35 L 34 27 L 40 45 L 47 5 L 53 58 L 58 35 L 65 35 L 72 25 L 80 35 L 95 35";

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize * 0.7 }}
      role="status"
      aria-label="Loading ECG"
    >
      <svg
        viewBox="0 0 100 70"
        className="w-full h-full"
        fill="none"
      >
        {/* Background faint guide track */}
        <path
          d={pathD}
          stroke={color}
          strokeWidth="2.5"
          strokeOpacity="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated tracing pulse */}
        <path
          d={pathD}
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="140"
          strokeDashoffset="140"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="140; 0; -140"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* Tracing glowing dot head */}
        <circle r="3.5" fill={color}>
          <animateMotion
            path={pathD}
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};
