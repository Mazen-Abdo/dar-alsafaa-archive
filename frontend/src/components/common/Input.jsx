import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Input = ({
  label,
  error,
  icon: Icon,
  className,
  containerClassName,
  ...props
}) => {
  return (
    <div className={twMerge('flex flex-col gap-1.5 w-full', containerClassName)}>
      {label && (
        <label className="text-label-md font-medium text-on-surface-variant">
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        {Icon && (
          <div className="absolute right-3 text-on-surface-variant/70 pointer-events-none">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          className={twMerge(
            clsx(
              'w-full bg-surface border border-outline-variant/50 text-on-surface text-body-md rounded-lg py-2.5 px-4 outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50',
              Icon && 'pr-10',
              error && 'border-error focus:border-error focus:ring-error',
              className
            )
          )}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
};

export default Input;
