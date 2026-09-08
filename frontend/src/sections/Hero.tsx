import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL } from '@/data/constants';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Tooltip } from '@/components/ui/Tooltip';
import { HeroCodeVisual } from '@/components/hero/HeroCodeVisual';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useToast } from '@/hooks/useToast';
import { cn } from '@/libs/utils';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 28,
      mass: 0.8,
    },
  },
};

function MagneticButton({ children, className, ...props }: React.ComponentProps<typeof Button>) {
  const ref = React.useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const strength = 6;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setPos({ x: relX * strength * 2, y: relY * strength * 2 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <Button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={cn('transition-transform duration-200 ease-out', className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export default function Hero() {
  const { copied, copy } = useCopyToClipboard();
  const { toast } = useToast();
  const [ctaHover, setCtaHover] = React.useState(false);

  const handleCopyEmail = async () => {
    const ok = await copy(PERSONAL.email);
    if (ok) {
      toast({
        title: 'Email copied',
        description: PERSONAL.email,
        variant: 'success',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-36 pb-24 sm:pt-40 sm:pb-28 px-5 sm:px-6 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          maskImage:
            'radial-gradient(ellipse at center top, black 0%, transparent 65%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center top, black 0%, transparent 65%)',
          color: 'var(--fg)',
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.div variants={item} className="mb-7">
              <Badge variant="outline" className="gap-2 pl-1.5 pr-3 py-1 select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="text-[11px] font-semibold tracking-wide">
                  {PERSONAL.status}
                </span>
              </Badge>
            </motion.div>

            <motion.div variants={item} className="mb-5">
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Hi, I'm
              </p>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"
            >
              <span className="block">{PERSONAL.name}</span>
              <span className="block mt-2 text-muted-foreground">
                {PERSONAL.title}.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              {PERSONAL.tagline}
            </motion.p>

            <motion.p variants={item} className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              {PERSONAL.bio}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                asChild
                size="lg"
                className="group"
              >
                <a
                  href="#projects"
                  onMouseEnter={() => setCtaHover(true)}
                  onMouseLeave={() => setCtaHover(false)}
                >
                  View My Work
                  <ArrowRight
                    className={cn(
                      'h-4 w-4 transition-transform duration-300 ease-out',
                      ctaHover && 'translate-x-1'
                    )}
                  />
                </a>
              </MagneticButton>

              <Button asChild variant="outline" size="lg">
                <a href={PERSONAL.resume} download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>

              <Tooltip content={copied ? 'Copied!' : 'Copy email address'}>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handleCopyEmail}
                  className="gap-2"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </Button>
              </Tooltip>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-2">
              {[
                { label: 'GitHub', href: PERSONAL.github },
                { label: 'LinkedIn', href: PERSONAL.linkedin },
                { label: 'Email', href: `mailto:${PERSONAL.email}` },
              ].map((s) => (
                <Tooltip key={s.label} content={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground border border-transparent transition-all duration-200 hover:text-foreground hover:border-border hover:bg-muted"
                  >
                    {s.label === 'GitHub' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                      </svg>
                    )}
                    {s.label === 'LinkedIn' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                    {s.label === 'Email' && <Mail className="h-5 w-5" />}
                  </a>
                </Tooltip>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <HeroCodeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
