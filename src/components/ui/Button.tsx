import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-bold rounded-lg gap-1.5 tracking-tight',
    md: 'px-5 py-2.5 text-sm font-bold rounded-xl gap-2 tracking-tight',
    lg: 'px-6 py-3 text-base font-bold rounded-xl gap-2.5 tracking-tight',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#0F766E] text-white hover:bg-[#115E59] active:bg-[#042F2E] shadow-sm hover:shadow-md border border-teal-700/60 hover:border-teal-800 transition-all duration-150',
    secondary:
      'bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-2xs transition-all duration-150',
    outline:
      'bg-transparent text-[#0F766E] hover:bg-teal-50/80 border border-teal-300/90 active:bg-teal-100/60 transition-all duration-150',
    ghost:
      'bg-transparent text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all duration-150',
  }[variant];

  return (
    <button
      className={`inline-flex items-center justify-center cursor-pointer select-none transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${sizeClasses} ${variantClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </button>
  );
};
