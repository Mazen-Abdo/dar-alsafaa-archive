import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

const ToastContext = createContext();

let idCounter = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success', duration = 3500) => {
    const id = ++idCounter;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        {toasts.map(toast => (
          <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const toastConfig = {
  success: {
    icon: CheckCircle,
    bg: 'bg-[#0f2720] dark:bg-[#0a1e15]',
    text: 'text-primary-fixed-dim',
    border: 'border-primary/40',
    iconColor: 'text-primary-fixed-dim'
  },
  error: {
    icon: XCircle,
    bg: 'bg-[#450a0a] dark:bg-[#3b0505]',
    text: 'text-red-200',
    border: 'border-red-700',
    iconColor: 'text-red-300'
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-[#431407] dark:bg-[#3a1104]',
    text: 'text-orange-200',
    border: 'border-orange-700',
    iconColor: 'text-orange-300'
  },
  info: {
    icon: Info,
    bg: 'bg-[#172554] dark:bg-[#0f1a40]',
    text: 'text-blue-200',
    border: 'border-blue-700',
    iconColor: 'text-blue-300'
  }
};

const Toast = ({ toast, onDismiss }) => {
  const config = toastConfig[toast.type] || toastConfig.success;
  const Icon = config.icon;

  return (
    <div
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg min-w-[280px] max-w-sm animate-in slide-in-from-bottom-2 duration-300 ${config.bg} ${config.text} ${config.border}`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${config.iconColor}`} />
      <span className="text-sm font-medium flex-1">{toast.message}</span>
      <button
        onClick={() => onDismiss(toast.id)}
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
