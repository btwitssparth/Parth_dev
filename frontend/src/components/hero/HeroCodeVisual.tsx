import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/libs/utils';

type Line = {
  content: React.ReactNode;
  indent?: number;
  highlight?: boolean;
  muted?: boolean;
};

export function HeroCodeVisual({ className }: { className?: string }) {
  const [cursorLine, setCursorLine] = React.useState(0);
  const [hoverIdx, setHoverIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCursorLine((prev) => (prev + 1) % 7);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const lines: Line[] = [
    {
      content: (
        <>
          <span className="text-muted-foreground">// profile.ts</span>
        </>
      ),
      muted: true,
    },
    {
      content: (
        <>
          <span className="text-accent">const</span>{' '}
          <span className="text-foreground">developer</span>{' '}
          <span className="text-muted-foreground">=</span>{' '}
          <span className="text-muted-foreground">{'{'}</span>
        </>
      ),
    },
    {
      content: (
        <>
          <span className="text-foreground">name</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-success">'Parth Jain'</span>
          <span className="text-muted-foreground">,</span>
        </>
      ),
      indent: 1,
    },
    {
      content: (
        <>
          <span className="text-foreground">role</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-success">'Full-Stack Developer'</span>
          <span className="text-muted-foreground">,</span>
        </>
      ),
      indent: 1,
    },
    {
      content: (
        <>
          <span className="text-foreground">stack</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-muted-foreground">[</span>
          <span className="text-success">'React'</span>
          <span className="text-muted-foreground">,</span>{' '}
          <span className="text-success">'Node'</span>
          <span className="text-muted-foreground">,</span>{' '}
          <span className="text-success">'Mongo'</span>
          <span className="text-muted-foreground">],</span>
        </>
      ),
      indent: 1,
    },
    {
      content: (
        <>
          <span className="text-foreground">available</span>
          <span className="text-muted-foreground">:</span>{' '}
          <span className="text-accent">true</span>
          <span className="text-muted-foreground">,</span>
        </>
      ),
      indent: 1,
      highlight: true,
    },
    {
      content: <span className="text-muted-foreground">{'}'}</span>,
    },
  ];

  return (
    <div className={cn('w-full', className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-xl border border-border bg-card shadow-lg overflow-hidden font-mono text-[13px] leading-7 max-w-full"
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-destructive/80" aria-hidden />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" aria-hidden />
            <span className="h-3 w-3 rounded-full bg-success/80" aria-hidden />
            <span className="ml-3 text-xs text-muted-foreground font-medium">
              developer.ts
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            TypeScript
          </span>
        </div>

        <div className="px-2 sm:px-4 py-4 sm:py-6 overflow-x-auto">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.4 + i * 0.05 }}
              className={cn(
                'flex items-start px-2 -mx-2 rounded-md transition-colors duration-200',
                hoverIdx === i && 'bg-muted/60',
                line.highlight && 'bg-accent/10 -mx-2 px-2'
              )}
              style={{ paddingLeft: (line.indent ?? 0) * 24 + 8 }}
            >
              <span
                className={cn(
                  'shrink-0 w-8 text-right pr-3 select-none text-[11px] tabular-nums',
                  line.muted ? 'text-muted-foreground/40' : 'text-muted-foreground/50'
                )}
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="whitespace-pre flex-1">
                {line.content}
                {cursorLine === i && (
                  <motion.span
                    aria-hidden
                    className="inline-block h-[15px] w-[2px] bg-accent align-middle ml-0.5 animate-blink"
                  />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2 text-[10px] text-muted-foreground font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
              Ready
            </span>
            <span>Ln {cursorLine + 1}, Col 1</span>
          </div>
          <span>UTF-8 · LF</span>
        </div>
      </motion.div>
    </div>
  );
}
