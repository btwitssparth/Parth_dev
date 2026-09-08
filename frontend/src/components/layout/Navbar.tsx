import * as React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, Moon, Sun, Download, ExternalLink } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '@/data/constants';
import { useTheme } from '@/hooks/useTheme';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Sheet, SheetHeader, SheetBody, SheetClose } from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';
import { Tooltip } from '@/components/ui/Tooltip';
import { cn } from '@/libs/utils';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const unsub = scrollY.on('change', (v) => setIsScrolled(v > 10));
    return () => unsub();
  }, [scrollY]);

  const ids = React.useMemo(
    () => NAV_LINKS.map((l) => l.href.replace('#', '')),
    []
  );
  const activeId = useScrollSpy(ids, 120);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ height: isScrolled ? 64 : 72 }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          isScrolled
            ? 'border-b border-border bg-background/85 backdrop-blur-md shadow-sm'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto max-w-6xl h-full px-5 sm:px-6 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label={`${PERSONAL.name} — home`}
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-accent text-accent-foreground font-bold text-sm shadow-sm"
              aria-hidden="true"
            >
              PJ
            </span>
            <span className="font-semibold tracking-tight text-foreground text-[15px] group-hover:text-accent transition-colors">
              {PERSONAL.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-1 mr-4">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const active = activeId === id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={cn(
                        'relative inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                        active
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-md bg-muted"
                          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <Tooltip content={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </Button>
            </Tooltip>

            <Tooltip content="Download resume">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <a href={PERSONAL.resume} download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </Tooltip>

            <Tooltip content="Open menu">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSheetOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="h-[18px] w-[18px]" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </motion.header>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetHeader>
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-accent text-accent-foreground font-bold text-sm"
              aria-hidden="true"
            >
              PJ
            </span>
            <div>
              <p className="font-semibold tracking-tight text-foreground text-sm leading-none">
                {PERSONAL.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {PERSONAL.title}
              </p>
            </div>
          </div>
          <SheetClose onClose={() => setSheetOpen(false)} />
        </SheetHeader>
        <SheetBody>
          <nav>
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const active = activeId === id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        'flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors',
                        active
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                    >
                      {link.name}
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <a
                href={PERSONAL.resume}
                download
                className="flex items-center justify-between rounded-lg px-3 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-lg px-3 py-3 border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <span>View GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </SheetBody>
      </Sheet>
    </>
  );
}
