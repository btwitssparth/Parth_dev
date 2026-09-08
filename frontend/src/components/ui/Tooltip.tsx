import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/libs/utils';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  delayDuration?: number;
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = 'top',
  delayDuration = 300,
  className,
}: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const show = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(true), delayDuration);
  };

  const hide = () => {
    clearTimeout(timerRef.current);
    setOpen(false);
  };

  const positions = {
    top: { y: -6, x: '-50%', bottom: '100%', left: '50%' },
    bottom: { y: 6, x: '-50%', top: '100%', left: '50%' },
    left: { x: -6, y: '-50%', right: '100%', top: '50%' },
    right: { x: 6, y: '-50%', left: '100%', top: '50%' },
  };

  const pos = positions[side];

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, ...(side === 'left' || side === 'right' ? { x: side === 'left' ? -2 : 2 } : { y: side === 'top' ? -2 : 2 }) }}
            animate={{ opacity: 1, x: pos.x, y: pos.y }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              ...(side === 'top' ? { bottom: '100%', left: '50%' } : {}),
              ...(side === 'bottom' ? { top: '100%', left: '50%' } : {}),
              ...(side === 'left' ? { right: '100%', top: '50%' } : {}),
              ...(side === 'right' ? { left: '100%', top: '50%' } : {}),
              transform: side === 'left' || side === 'right' ? 'translateY(-50%)' : 'translateX(-50%)',
              zIndex: 50,
            }}
            className={cn('pointer-events-none', className)}
          >
            <div className="whitespace-nowrap rounded-md bg-foreground text-background px-2.5 py-1.5 text-xs font-medium shadow-md">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
