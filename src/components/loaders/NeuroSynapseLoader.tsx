import React from 'react';
import { LoaderProps } from '../../types';

export const NeuroSynapseLoader: React.FC<LoaderProps> = ({
  size = 48,
  color = '#0F766E',
  speed = 1,
  className = '',
}) => {
  const numSize = typeof size === 'number' ? size : parseInt(String(size), 10) || 48;
  const duration = 2.0 / Math.max(speed, 0.1);

  // Hexagonal node coordinates
  const nodes = [
    { id: 0, cx: 50, cy: 50, r: 6 },  // Central Hub
    { id: 1, cx: 50, cy: 18, r: 4.5 }, // Top
    { id: 2, cx: 78, cy: 34, r: 4.5 }, // Top Right
    { id: 3, cx: 78, cy: 66, r: 4.5 }, // Bottom Right
    { id: 4, cx: 50, cy: 82, r: 4.5 }, // Bottom
    { id: 5, cx: 22, cy: 66, r: 4.5 }, // Bottom Left
    { id: 6, cx: 22, cy: 34, r: 4.5 }, // Top Left
  ];

  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
  ];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: numSize, height: numSize }}
      role="status"
      aria-label="Loading Neuro Synapse"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        {/* Synaptic Axon Connections */}
        {edges.map(([fromIdx, toIdx], idx) => {
          const from = nodes[fromIdx];
          const to = nodes[toIdx];
          const delay = ((idx * 0.15) % 1) * duration;
          return (
            <line
              key={idx}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke={color}
              strokeWidth="1.5"
              strokeOpacity="0.25"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.15;0.6;0.15"
                dur={`${duration}s`}
                begin={`${-delay}s`}
                repeatCount="indefinite"
              />
            </line>
          );
        })}

        {/* Traveling Synapse Signals */}
        {[1, 2, 3, 4, 5, 6].map((targetIdx, i) => {
          const target = nodes[targetIdx];
          const delay = (i * 0.3) % duration;
          return (
            <circle key={`pulse-${i}`} r="3" fill={color}>
              <animate
                attributeName="cx"
                values={`50;${target.cx};50`}
                dur={`${duration}s`}
                begin={`${-delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`50;${target.cy};50`}
                dur={`${duration}s`}
                begin={`${-delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.9;0.1;0.9;1"
                dur={`${duration}s`}
                begin={`${-delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* Neuronal Cell Bodies */}
        {nodes.map((node, i) => {
          const delay = (i * 0.25) % duration;
          return (
            <circle
              key={`node-${node.id}`}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={color}
            >
              <animate
                attributeName="r"
                values={`${node.r * 0.8};${node.r * 1.25};${node.r * 0.8}`}
                dur={`${duration * 0.8}s`}
                begin={`${-delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${duration * 0.8}s`}
                begin={`${-delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>
    </div>
  );
};
