import * as React from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, X } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import type { Project } from '@/data/constants';
import { Dialog, DialogHeader, DialogBody, DialogFooter, DialogClose } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PreviewRegistry } from './ProjectPreviews';
import { Reveal } from '@/components/ui/Reveal';
import { Separator } from '@/components/ui/Separator';
import { cn } from '@/libs/utils';

interface Props {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

type Tab = 'overview' | 'problem' | 'solution' | 'features' | 'challenges';

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'features', label: 'Features' },
  { id: 'challenges', label: 'Challenges' },
];

export function ProjectDetailsDialog({ project, onOpenChange }: Props) {
  const [tab, setTab] = React.useState<Tab>('overview');

  React.useEffect(() => {
    if (project) setTab('overview');
  }, [project]);

  const open = project !== null;
  const Preview = project ? PreviewRegistry[project.imagePlaceholder] : null;

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>
        <div className="pr-2 min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="accent" className="text-[10px] uppercase tracking-widest py-0.5">
              {project.featured ? 'Featured Project' : 'Project'}
            </Badge>
            <Badge variant="muted">
              {project.category === 'fullstack'
                ? 'Full Stack'
                : project.category[0].toUpperCase() + project.category.slice(1)}
            </Badge>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
        </div>
        <DialogClose onClose={() => onOpenChange(false)} />
      </DialogHeader>

      <DialogBody>
        <div className="space-y-8">
          <Reveal direction="none">
            <div className="aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-border bg-muted/30">
              {Preview && <Preview className="w-full h-full" />}
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-2">
            {project.tagsFull.map((t) => (
              <div key={t.name} className="flex items-center gap-0">
                <Badge variant="secondary" className="rounded-r-none border-r-0">
                  {t.category}
                </Badge>
                <Badge variant="outline" className="rounded-l-none">
                  {t.name}
                </Badge>
              </div>
            ))}
          </div>

          <div className="w-full overflow-x-auto -mx-1 px-1">
            <div className="inline-flex items-center p-1 rounded-lg bg-muted min-w-max">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={cn(
                    'relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors',
                    tab === t.id
                      ? 'text-foreground bg-background shadow-sm border border-border'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[160px]">
            {tab === 'overview' && (
              <div className="space-y-4 animate-fade-up">
                <p className="text-foreground leading-relaxed">
                  {project.longDescription}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {tab === 'problem' && (
              <div className="animate-fade-up space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                  <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">The problem</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {tab === 'solution' && (
              <div className="animate-fade-up space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-success/30 bg-success/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">The solution</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {tab === 'features' && (
              <ul className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        0{i + 1}
                      </span>
                      <p className="mt-0.5 text-sm text-foreground leading-relaxed">
                        {f}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {tab === 'challenges' && (
              <ul className="animate-fade-up space-y-3">
                {project.challenges.map((c, i) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                      <AlertTriangle className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        CHALLENGE_0{i + 1}
                      </span>
                      <p className="mt-0.5 text-sm text-foreground leading-relaxed">
                        {c}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </DialogBody>

      <Separator />

      <DialogFooter>
        <Button
          variant="outline"
          onClick={() => onOpenChange(false)}
          className="sm:order-1"
        >
          <X className="h-4 w-4" />
          Close
        </Button>
        <Button asChild variant="secondary">
          <a href={project.github} target="_blank" rel="noreferrer noopener">
            <FiGithub className="h-4 w-4" />
            View Code
          </a>
        </Button>
        {project.link && (
          <Button asChild>
            <a href={project.link} target="_blank" rel="noreferrer noopener">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
}
