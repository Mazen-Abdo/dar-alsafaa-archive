import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon: Icon,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-label-md rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';

  const variants = {
    primary:   'bg-primary text-on-primary hover:opacity-90 shadow-sm',
    secondary: 'bg-secondary text-on-secondary hover:opacity-90 shadow-sm',
    outline:   'bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container-high',
    ghost:     'bg-transparent text-on-surface hover:bg-surface-container-high',
    danger:    'bg-error text-on-error hover:opacity-90 shadow-sm',
    success:   'bg-primary-fixed-dim text-on-primary-fixed hover:bg-primary-fixed shadow-sm'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5'
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export default Button;

