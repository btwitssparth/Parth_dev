import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/libs/utils';
import { Check, AlertCircle, X } from 'lucide-react';
import { useToast, type Toast } from '@/hooks/useToast';

const variantIcon = {
  default: null,
  success: Check,
  error: AlertCircle,
};

const variantBorder: Record<NonNullable<Toast['variant']>, string> = {
  default: 'border-border',
  success: 'border-success/50',
  error: 'border-destructive/50',
};

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none sm:bottom-6 sm:right-6">
      <AnimatePresence initial={false}>
        {toasts.map((toast) => {
          const Icon = variantIcon[toast.variant ?? 'default'];
          return (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className={cn(
                'pointer-events-auto w-full rounded-lg border shadow-lg bg-card p-4 pr-10',
                variantBorder[toast.variant ?? 'default']
              )}
              role="status"
            >
              <div className="flex items-start gap-3">
                {Icon && (
                  <div
                    className={cn(
                      'mt-0.5 shrink-0 rounded-full p-1',
                      toast.variant === 'success' && 'text-success bg-success/10',
                      toast.variant === 'error' && 'text-destructive bg-destructive/10'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  {toast.title && (
                    <p className="text-sm font-semibold text-foreground">{toast.title}</p>
                  )}
                  {toast.description && (
                    <p className="mt-0.5 text-sm text-muted-foreground">{toast.description}</p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => dismiss(toast.id)}
                className="absolute top-3 right-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Dismiss toast"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
