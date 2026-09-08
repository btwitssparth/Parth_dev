import { Star, GitFork, ArrowRight, Code2, Activity, BookMarked } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { PERSONAL, PROJECTS } from '@/data/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const stats = [
  { label: 'Public repos', value: PROJECTS.length + 4, Icon: BookMarked },
  { label: 'Focused on', value: 'MERN + Python', Icon: Code2 },
  { label: 'Learning cadence', value: 'Consistent', Icon: Activity },
];

export default function GitHubSection() {
  return (
    <Section id="github" className="bg-muted/30">
      <SectionHeader
        eyebrow="GitHub"
        title="Open-source profile & clean code."
        description="My public work on GitHub — repositories, consistent commits, and experiments that didn't make the projects page."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <Reveal className="lg:col-span-7">
          <Card className="h-full">
            <CardContent className="p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-start gap-5">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-sm text-foreground">
                  <FiGithub className="h-7 w-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    @btwitssparth
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Building, breaking, and rebuilding projects to understand how things actually work under the hood.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="muted" className="gap-1.5">
                      <Star className="h-3 w-3" /> Clean code
                    </Badge>
                    <Badge variant="muted" className="gap-1.5">
                      <GitFork className="h-3 w-3" /> MERN stack
                    </Badge>
                    <Badge variant="muted">Backend systems</Badge>
                    <Badge variant="muted">Data pipelines</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-muted/40 p-4"
                  >
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-md text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="mt-2 font-bold text-foreground tabular-nums text-lg">
                      {value}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a
                    href={PERSONAL.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Explore my GitHub
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Star repositories you find useful. PRs & issues welcome.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="lg:col-span-5 space-y-5">
          <RevealStagger className="space-y-4">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <RevealItem key={p.id}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block"
                >
                  <Card className="h-full hover:border-accent/40 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:text-accent transition-colors">
                        <Code2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground text-[15px] tracking-tight truncate">
                            {p.title}
                          </p>
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                          {i === 0 && p.tags.length > 3 && (
                            <span className="text-[10px] font-mono text-muted-foreground/60">
                              · +{p.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </Section>
  );
}
