import * as React from 'react';
import { SKILLS } from '@/data/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Reveal } from '@/components/ui/Reveal';
import { Card, CardContent } from '@/components/ui/Card';
import { SkillIconMap } from '@/components/icons/SkillIcons';
import { cn } from '@/libs/utils';

export default function Skills() {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="A modern, full-stack toolkit."
        description="Technologies I use to design, build, and ship production-quality applications."
      />

      <Reveal>
        <Tabs defaultValue={SKILLS[0].id} className="w-full">
          <div className="w-full overflow-x-auto pb-2 -mx-1 px-1">
            <TabsList className="min-w-max">
              {SKILLS.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {SKILLS.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, idx) => {
                  const Icon = SkillIconMap[skill.icon];
                  const isHover = hovered === skill.name;
                  return (
                    <Card
                      key={skill.name}
                      onMouseEnter={() => setHovered(skill.name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ transitionDelay: `${idx * 20}ms` }}
                      className={cn(
                        'relative overflow-hidden transition-all duration-300',
                        isHover
                          ? 'border-accent/40 shadow-md -translate-y-0.5'
                          : 'hover:shadow-sm'
                      )}
                    >
                      {isHover && (
                        <span
                          className="absolute top-0 left-0 h-0.5 w-full bg-accent"
                          aria-hidden
                        />
                      )}
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div
                            className={cn(
                              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300',
                              isHover
                                ? 'border-accent/30 bg-accent/10 text-accent'
                                : 'border-border bg-muted text-foreground'
                            )}
                          >
                            {Icon ? (
                              <Icon className="h-5 w-5" />
                            ) : (
                              <span className="font-bold text-sm">
                                {skill.name[0]}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground text-[15px]">
                              {skill.name}
                            </h4>
                            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </Section>
  );
}
