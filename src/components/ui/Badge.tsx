import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'outline' | 'slate' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  const variantClasses = {
    teal: 'bg-teal-50 text-teal-900 border border-teal-300 font-bold',
    outline: 'bg-white text-slate-800 border border-slate-300 shadow-2xs font-bold',
    slate: 'bg-slate-100 text-slate-800 border border-slate-300 font-bold',
    subtle: 'bg-teal-500/10 text-teal-800 font-bold',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full tracking-tight transition-colors duration-200 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </span>
  );
};
