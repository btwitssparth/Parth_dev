import * as React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ArrowRight, Filter } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { PROJECTS, type Project } from '@/data/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Tooltip } from '@/components/ui/Tooltip';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { ProjectDetailsDialog } from '@/components/projects/ProjectDetailsDialog';
import { PreviewRegistry } from '@/components/projects/ProjectPreviews';
import { cn } from '@/libs/utils';

type Filter = 'all' | 'fullstack' | 'frontend' | 'backend' | 'other';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'other', label: 'Other' },
];

function FeaturedProject({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const Preview = PreviewRegistry[project.imagePlaceholder];
  const reverse = index % 2 === 1;

  return (
    <Reveal className="mb-16 last:mb-0">
      <div
        className={cn(
          'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center'
        )}
      >
        <div
          className={cn(
            'lg:col-span-7',
            reverse ? 'lg:order-2' : 'lg:order-1'
          )}
        >
          <motion.button
            onClick={() => onOpen(project)}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="group block w-full text-left"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md bg-card aspect-[16/10]">
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                {Preview && <Preview className="w-full h-full" />}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge variant="accent" className="text-[10px] uppercase tracking-widest py-0.5 shadow-sm backdrop-blur">
                  Featured 0{index + 1}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <span className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-foreground text-background text-xs font-medium shadow-lg">
                  View details
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </motion.button>
        </div>

        <div
          className={cn(
            'lg:col-span-5 space-y-5',
            reverse ? 'lg:order-1' : 'lg:order-2'
          )}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {project.category === 'fullstack' ? 'Full-Stack Application' : 'Project'}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Badge key={t} variant="muted">
                {t}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Button variant="default" size="sm" onClick={() => onOpen(project)}>
              Case Study
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>

            <Tooltip content="View source code">
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} — GitHub repository`}
                >
                  <FiGithub className="h-4 w-4" />
                  Code
                </a>
              </Button>
            </Tooltip>

            {project.link && (
              <Tooltip content="Open live demo">
                <Button asChild variant="ghost" size="sm">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} — live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </Button>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const Preview = PreviewRegistry[project.imagePlaceholder];
  return (
    <RevealItem direction="up" distance={16}>
      <Card
        onClick={() => onOpen(project)}
        className="group h-full flex flex-col cursor-pointer overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-accent/40 transition-all duration-300"
      >
        <button
          className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-t-xl"
          onClick={() => onOpen(project)}
          aria-label={`Open ${project.title} case study`}
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
            <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              {Preview && <Preview className="w-full h-full" />}
            </div>
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <Badge variant="secondary" className="text-[10px] uppercase tracking-widest py-0.5">
                P{index + 1}
              </Badge>
            </div>
            <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur shadow border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300">
              <ArrowUpRight className="h-4 w-4 text-foreground" />
            </div>
          </div>
        </button>

        <div className="p-5 flex flex-col flex-1 gap-4">
          <div>
            <h4 className="font-semibold text-foreground tracking-tight text-[15px] group-hover:text-accent transition-colors">
              {project.title}
            </h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((t) => (
              <Badge key={t} variant="muted">
                {t}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline">+{project.tags.length - 4}</Badge>
            )}
          </div>

          <div className="flex items-center gap-1 pt-1 border-t border-border -mx-5 px-5 mt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <FiGithub className="h-3.5 w-3.5" />
              Code
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            )}
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="ml-auto inline-flex items-center gap-1.5 h-9 px-3 rounded-md text-xs font-medium text-foreground hover:bg-muted transition-colors"
            >
              Details
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </Card>
    </RevealItem>
  );
}

export default function Projects() {
  const [filter, setFilter] = React.useState<Filter>('all');
  const [openProject, setOpenProject] = React.useState<Project | null>(null);

  const featured = PROJECTS.filter((p) => p.featured);
  const additional = PROJECTS.filter((p) => !p.featured);
  const filtered = filter === 'all' ? additional : additional.filter((p) => p.category === filter);

  return (
    <Section id="projects" className="bg-muted/30">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work, engineered end-to-end."
        description="Featured projects show case studies with real engineering decisions. Click any project to dive deeper."
      />

      <div className="space-y-0">
        {featured.map((p, i) => (
          <FeaturedProject
            key={p.id}
            project={p}
            index={i}
            onOpen={setOpenProject}
          />
        ))}
      </div>

      <div className="mt-24">
        <Reveal className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Additional projects
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              More engineering-focused projects across backend tooling and data pipelines.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto -mx-1 px-1 pb-1 sm:pb-0">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0 hidden sm:block" />
            <div className="inline-flex p-1 rounded-lg bg-muted min-w-max">
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFilter(f.id)}
                    className={cn(
                      'relative whitespace-nowrap inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors',
                      active
                        ? 'text-foreground bg-background shadow-sm border border-border'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onOpen={setOpenProject}
              />
            ))}
          </RevealStagger>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-10 text-center">
            <p className="text-muted-foreground">
              No projects match this filter yet.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3"
              onClick={() => setFilter('all')}
            >
              Show all
            </Button>
          </div>
        )}
      </div>

      <ProjectDetailsDialog
        project={openProject}
        onOpenChange={(o) => !o && setOpenProject(null)}
      />
    </Section>
  );
}
