import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Badge = ({
  children,
  variant = 'default',
  className,
  dot = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-md font-medium transition-colors';

  const variants = {
    default: 'bg-surface-container text-on-surface border border-outline-variant/30',
    primary: 'bg-primary-container/20 text-primary border border-primary/20',
    success: 'bg-primary-fixed-dim/20 text-on-primary-fixed-variant border border-primary-fixed-dim/30',
    warning: 'bg-[#ff9939]/20 text-on-tertiary-container border border-[#ff9939]/30',
    danger: 'bg-error-container text-on-error-container border border-error/20',
    info: 'bg-secondary-container/20 text-secondary border border-secondary/20'
  };

  const dotColors = {
    default: 'bg-on-surface-variant',
    primary: 'bg-primary',
    success: 'bg-primary-fixed-dim',
    warning: 'bg-[#ff9939]',
    danger: 'bg-error',
    info: 'bg-secondary'
  };

  return (
    <span
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      {children}
    </span>
  );
};

export default Badge;
