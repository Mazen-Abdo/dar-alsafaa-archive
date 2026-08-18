import React from 'react';
import { X } from 'lucide-react';

export const Drawer = ({ isOpen, onClose, title, children, subtitle, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-on-background/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="absolute left-0 top-0 h-full w-full max-w-[450px] bg-surface dark:bg-slate-900 border-r border-outline-variant/30 dark:border-slate-800 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="px-6 py-5 border-b border-outline-variant/30 dark:border-slate-800 flex justify-between items-center bg-surface-container-lowest dark:bg-slate-900 sticky top-0 z-10">
          <div>
            <h3 className="font-title-lg text-title-lg text-on-surface">{title}</h3>
            {subtitle && <p className="text-label-md text-on-surface-variant mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-outline-variant/30 dark:border-slate-800 bg-surface-container-low dark:bg-slate-900/80 flex gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
