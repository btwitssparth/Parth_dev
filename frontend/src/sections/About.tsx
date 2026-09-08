import { MapPin, Briefcase, Code2, GraduationCap, Sparkles } from 'lucide-react';
import { PERSONAL } from '@/data/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { Card, CardContent } from '@/components/ui/Card';

const icons = {
  Location: MapPin,
  Availability: Briefcase,
  Focus: Code2,
  Education: GraduationCap,
};

export default function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <SectionHeader
        eyebrow="About"
        title="Engineer, builder, continuous learner."
        description="I focus on writing clean, maintainable code and shipping products that solve real problems. Here's a quick snapshot."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal direction="right" className="lg:col-span-5">
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
            I build software <span className="text-accent">end-to-end.</span>
          </h3>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From database schemas and API contracts in the backend to polished,
            accessible interfaces in the frontend — I enjoy moving across the
            stack and understanding systems as a whole.
          </p>
        </Reveal>

        <div className="lg:col-span-7 space-y-8">
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PERSONAL.quickFacts.map((fact) => {
              const Icon = icons[fact.label as keyof typeof icons] ?? Code2;
              return (
                <RevealItem key={fact.label}>
                  <Card className="hover:border-accent/30 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {fact.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">
                          {fact.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealStagger>

          <Reveal delay={0.1}>
            <Card className="border-accent/20 bg-accent/[0.04]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                      Currently
                    </p>
                    <p className="mt-2 text-foreground leading-relaxed">
                      {PERSONAL.currentFocus}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Development interests
              </h4>
              <ul className="mt-4 space-y-2.5">
                {PERSONAL.interests.map((interest, i) => (
                  <li
                    key={interest}
                    className="flex items-start gap-3 text-foreground leading-relaxed"
                  >
                    <span
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="text-base">{interest}</span>
                    <span className="ml-auto mt-1 text-xs tabular-nums text-muted-foreground/60 shrink-0">
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-xl border border-dashed border-border p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Career goal
              </p>
              <p className="mt-3 text-foreground leading-relaxed">
                {PERSONAL.careerGoal}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
