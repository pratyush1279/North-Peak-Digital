import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl bg-[#111111] border border-neutral-700 text-white max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {type === 'success' ? (
        <CheckCircle2 className="w-6 h-6 text-[#F97316] shrink-0" aria-hidden="true" />
      ) : (
        <AlertCircle className="w-6 h-6 text-red-500 shrink-0" aria-hidden="true" />
      )}
      <p className="text-sm font-medium text-neutral-100 pr-2">{message}</p>
      <button
        onClick={onClose}
        type="button"
        className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
