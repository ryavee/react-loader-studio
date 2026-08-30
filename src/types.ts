import type { ComponentType } from 'react';

export interface LoaderProps {
  size?: number | string;
  color?: string;
  speed?: number;
  strokeWidth?: number;
  className?: string;
}

export interface LoaderItem {
  id: string;
  name: string;
  description: string;
  category: 'Geometric' | 'Wave' | 'Minimal' | 'Organic';
  component: ComponentType<LoaderProps>;
  defaultProps: {
    size: number;
    color: string;
    speed: number;
    strokeWidth?: number;
  };
  tags: string[];
}

