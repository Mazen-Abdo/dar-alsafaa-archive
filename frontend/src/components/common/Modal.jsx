import React from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-on-background/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-lg bg-surface dark:bg-slate-900 border border-outline-variant/30 dark:border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20 dark:border-slate-800 bg-surface-container-lowest dark:bg-slate-900/80">
          <h3 className="font-title-lg text-title-lg text-on-surface">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-body-md text-on-surface">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-outline-variant/20 dark:border-slate-800 bg-surface-container-low dark:bg-slate-800/50">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
