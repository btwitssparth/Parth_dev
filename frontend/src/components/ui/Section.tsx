import * as React from 'react';
import { cn } from '@/libs/utils';
import { Reveal } from './Reveal';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: Pick<SectionProps, 'eyebrow' | 'title' | 'description' | 'align'>) {
  return (
    <div
      className={cn(
        'mb-12 space-y-4',
        align === 'center' && 'mx-auto max-w-2xl text-center'
      )}
    >
      {eyebrow && (
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2">
            <span className="inline-block h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
          </div>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'text-base sm:text-lg text-muted-foreground leading-relaxed',
              align === 'center' && 'mx-auto'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 sm:py-24 px-5 sm:px-6 scroll-mt-20',
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
