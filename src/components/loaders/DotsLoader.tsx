import React from 'react';
import { LoaderProps } from '../../types';

export const DotsLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 1.2 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize * 0.45 }}
      role="status"
      aria-label="Loading Dots"
    >
      <svg viewBox="0 0 100 40" className="w-full h-full">
        {/* Dot 1 */}
        <circle cx="20" cy="20" r="8" fill={color}>
          <animate
            attributeName="cy"
            values="20; 8; 20; 28; 20"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.6; 1; 0.6; 0.4; 0.6"
            dur={`${duration}s`}
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Dot 2 */}
        <circle cx="50" cy="20" r="8" fill={color}>
          <animate
            attributeName="cy"
            values="20; 8; 20; 28; 20"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
            dur={`${duration}s`}
            begin={`${duration * 0.18}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.6; 1; 0.6; 0.4; 0.6"
            dur={`${duration}s`}
            begin={`${duration * 0.18}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Dot 3 */}
        <circle cx="80" cy="20" r="8" fill={color}>
          <animate
            attributeName="cy"
            values="20; 8; 20; 28; 20"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
            dur={`${duration}s`}
            begin={`${duration * 0.36}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.6; 1; 0.6; 0.4; 0.6"
            dur={`${duration}s`}
            begin={`${duration * 0.36}s`}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};
