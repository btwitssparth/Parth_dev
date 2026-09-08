import { GraduationCap, Code2, Rocket, BookOpen } from 'lucide-react';
import { JOURNEY } from '@/data/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/libs/utils';

const typeMeta: Record<string, { icon: typeof Code2; label: string; color: string }> = {
  education: { icon: GraduationCap, label: 'Education', color: 'text-accent bg-accent/10' },
  project: { icon: Rocket, label: 'Project', color: 'text-success bg-success/10' },
  learning: { icon: BookOpen, label: 'Learning', color: 'text-foreground bg-muted' },
};

export default function Journey() {
  return (
    <Section id="journey">
      <SectionHeader
        eyebrow="Journey"
        title="Education, projects, learning milestones."
        description="A timeline of my path as a developer — formal education, shipped projects, and deliberate skill-building."
      />

      <div className="relative">
        <div
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-px sm:-translate-x-1/2 bg-border"
          aria-hidden
        />

        <RevealStagger className="space-y-10">
          {JOURNEY.map((item, i) => {
            const meta = typeMeta[item.type] ?? typeMeta.learning;
            const Icon = meta.icon;
            const leftSide = i % 2 === 0;
            return (
              <RevealItem key={item.id} direction="none">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                  <div
                    className={cn(
                      'sm:pr-8 pl-12 sm:pl-0 sm:relative',
                      leftSide ? 'sm:text-right sm:order-1 sm:pr-10' : 'sm:col-start-2 sm:order-2 sm:pl-10 sm:pr-0'
                    )}
                  >
                    <Card className="hover:shadow-md hover:border-accent/30 transition-all duration-300">
                      <CardContent className="p-5 sm:p-6 text-left">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="sm:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                            <Icon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant="muted" className="font-mono text-[10px] py-0.5">
                                {item.year}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="text-[10px] uppercase tracking-widest py-0.5"
                              >
                                {meta.label}
                              </Badge>
                            </div>
                            <h3 className="font-semibold tracking-tight text-foreground text-[15px]">
                              {item.title}
                            </h3>
                            <p className="mt-0.5 text-xs font-medium text-accent">
                              {item.subtitle}
                            </p>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div
                    className={cn(
                      'hidden sm:flex items-center',
                      leftSide ? 'sm:order-2 sm:justify-start sm:pl-10' : 'sm:col-start-1 sm:row-start-1 sm:order-1 sm:justify-end sm:pr-10'
                    )}
                    aria-hidden
                  >
                    <div
                      className={cn(
                        'inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card shadow-sm',
                        meta.color
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    'absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent shadow-sm'
                  )}
                  aria-hidden
                />
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </Section>
  );
}
