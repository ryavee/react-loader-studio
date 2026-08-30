import React, { useId } from 'react';
import { LoaderProps } from '../../types';

export const HeartbeatLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const glowId = `heart-glow-${useId().replace(/:/g, '')}`;
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  // Human cardiac cycle: ~75 BPM -> 0.8s duration at 1x speed
  const duration = 0.9 / Math.max(speed, 0.1);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Heartbeat"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Primary Systolic Shockwave Ring 1 (Triggered on 'Lub' at t=0.08) */}
        <circle
          cx="50"
          cy="48"
          r="16"
          fill="none"
          stroke={color}
          strokeWidth="2"
        >
          <animate
            attributeName="r"
            values="16; 44; 44; 16"
            keyTimes="0; 0.45; 0.9; 1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8; 0; 0; 0"
            keyTimes="0; 0.4; 0.85; 1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="2.5; 0.5; 0.5; 2.5"
            keyTimes="0; 0.4; 0.85; 1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* Secondary Systolic Shockwave Ring 2 (Triggered on 'Dub' at t=0.24) */}
        <circle
          cx="50"
          cy="48"
          r="14"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        >
          <animate
            attributeName="r"
            values="14; 14; 38; 38; 14"
            keyTimes="0; 0.22; 0.58; 0.95; 1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0; 0; 0.6; 0; 0"
            keyTimes="0; 0.22; 0.32; 0.58; 1"
            dur={`${duration}s`}
            repeatCount="indefinite"
          />
        </circle>

        {/* True Anatomical Lub-Dub Ventricular Cardiac Core */}
        <g transform="translate(50, 48)">
          <g>
            {/* Cardiac cycle keyframes:
                0.00: Resting diastole
                0.09: Sharp 'Lub' systolic expansion (S1)
                0.18: Isovolumetric recoil
                0.28: Sharp 'Dub' aortic ejection pulse (S2)
                0.40: Post-systolic ventricular contraction relaxation
                0.50 -> 1.00: Diastolic quiescent resting pause before next cycle
            */}
            <animateTransform
              attributeName="transform"
              type="scale"
              values="
                1.00, 1.00;
                1.26, 1.20;
                1.04, 1.02;
                1.18, 1.15;
                0.94, 0.95;
                1.00, 1.00;
                1.00, 1.00
              "
              keyTimes="0; 0.09; 0.18; 0.28; 0.40; 0.52; 1"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />

            {/* Heart Muscle Body */}
            <path
              d="M 0 -14
                 C -3 -26, -18 -32, -28 -22
                 C -40 -10, -36 12, -18 26
                 L 0 38
                 L 18 26
                 C 36 12, 40 -10, 28 -22
                 C 18 -32, 3 -26, 0 -14 Z"
              fill={color}
          filter={`url(#${glowId})`}
            >
              {/* Dynamic arterial blood flush opacity */}
              <animate
                attributeName="opacity"
                values="0.85; 1.0; 0.88; 1.0; 0.82; 0.85; 0.85"
                keyTimes="0; 0.09; 0.18; 0.28; 0.40; 0.52; 1"
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
            </path>

            {/* Inner Aortic Vascular Pulsing Accent */}
            <path
              d="M -12 -12 C -18 -8, -18 2, -10 12 L 0 20"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.2; 0.7; 0.3; 0.6; 0.1; 0.2; 0.2"
                keyTimes="0; 0.09; 0.18; 0.28; 0.40; 0.52; 1"
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
};
