import { useState, useCallback, useEffect } from 'react';

export type Toast = {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error';
  duration?: number;
};

let listeners: ((toasts: Toast[]) => void)[] = [];
let globalToasts: Toast[] = [];

function notify() {
  for (const listener of listeners) {
    listener([...globalToasts]);
  }
}

function addToast(toast: Omit<Toast, 'id'>): Toast {
  const id = Math.random().toString(36).slice(2, 10);
  const full: Toast = { id, duration: 3000, variant: 'default', ...toast };
  globalToasts = [...globalToasts, full];
  notify();

  if (full.duration && full.duration > 0) {
    setTimeout(() => {
      globalToasts = globalToasts.filter((t) => t.id !== id);
      notify();
    }, full.duration);
  }

  return full;
}

function removeToast(id: string) {
  globalToasts = globalToasts.filter((t) => t.id !== id);
  notify();
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>(globalToasts);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      listeners = listeners.filter((l) => l !== setToasts);
    };
  }, []);

  const toast = useCallback((opts: Omit<Toast, 'id'>) => addToast(opts), []);
  const dismiss = useCallback((id: string) => removeToast(id), []);

  return { toasts, toast, dismiss };
}
