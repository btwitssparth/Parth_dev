import * as React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { PERSONAL, NAV_LINKS } from '@/data/constants';
import { Separator } from '@/components/ui/Separator';
import { Button } from '@/components/ui/Button';
import { cn } from '@/libs/utils';

export default function Footer() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { label: 'GitHub', href: PERSONAL.github, Icon: FiGithub },
    { label: 'LinkedIn', href: PERSONAL.linkedin, Icon: FiLinkedin },
    { label: 'Email', href: `mailto:${PERSONAL.email}`, Icon: Mail },
  ];

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-flex items-center gap-2.5 group shrink-0">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground font-bold shadow-sm">
                PJ
              </span>
              <div className="text-left">
                <p className="font-semibold tracking-tight text-foreground text-[15px]">
                  {PERSONAL.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {PERSONAL.title}
                </p>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {PERSONAL.tagline}
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-border hover:bg-muted"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.9} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 sm:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 max-w-xs">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors w-fit"
                >
                  {l.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3 sm:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Resources
            </p>
            <div className="mt-4 space-y-2.5">
              <a
                href={PERSONAL.resume}
                download
                className="text-sm text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                Download Resume
                <ArrowUp className="h-3.5 w-3.5 -rotate-45" />
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-foreground/80 hover:text-foreground transition-colors block"
              >
                GitHub Profile
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-foreground/80 hover:text-foreground transition-colors block"
              >
                LinkedIn Profile
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors block break-all"
              >
                {PERSONAL.email}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            Designed & built by {PERSONAL.name}.
            <span className="inline-block h-1 w-1 rounded-full bg-accent" />
            React · TypeScript · Tailwind
          </p>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40',
          !visible && 'pointer-events-none'
        )}
      >
        <Button
          size="icon"
          variant="secondary"
          className="h-11 w-11 rounded-full shadow-lg border border-border hover:scale-105 transition-transform"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </motion.button>
    </footer>
  );
}
