import {
  Mail,
  MapPin,
  Check,
  Copy,
  ArrowRight,
} from 'lucide-react';
import { PERSONAL } from '@/data/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Tooltip } from '@/components/ui/Tooltip';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useToast } from '@/hooks/useToast';

export default function Contact() {
  const { copied, copy } = useCopyToClipboard();
  const { toast } = useToast();

  const handleCopy = async () => {
    const ok = await copy(PERSONAL.email);
    if (ok) {
      toast({
        title: 'Email copied',
        description: PERSONAL.email,
        variant: 'success',
      });
    }
  };

  const socials = [
    { label: 'GitHub', href: PERSONAL.github },
    { label: 'LinkedIn', href: PERSONAL.linkedin },
    { label: 'Email', href: `mailto:${PERSONAL.email}` },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something."
        description="Got a role, project, or conversation in mind? Reach out — I read every message and reply within a couple of days."
        align="center"
      />

      <Reveal className="mx-auto w-full max-w-3xl">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
                <Mail className="h-5 w-5" />
                <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-success" />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight text-foreground">
                  Reach me directly
                </h3>
                <p className="text-xs text-muted-foreground">
                  Average reply — 48 hours
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="group flex w-full items-center justify-between rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-accent/40 hover:bg-muted">
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="min-w-0 flex-1 text-left"
                  aria-label={`Send an email to ${PERSONAL.email}`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1 break-all font-mono text-sm text-foreground">
                    {PERSONAL.email}
                  </p>
                </a>
                <Tooltip content={copied ? 'Copied!' : 'Copy email'}>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy email address"
                    className="ml-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </Tooltip>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-muted/40 p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Based in
                  </p>
                  <p className="mt-1 font-medium text-foreground">
                    {PERSONAL.location}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Open to remote / hybrid roles worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Or find me on
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <Button
                    key={social.label}
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer noopener"
                    >
                      {social.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2.5">
                <Badge variant="accent" className="py-0.5 text-[10px] uppercase tracking-widest">
                  Status
                </Badge>
                <span className="text-sm text-foreground">
                  Open to SWE, full-stack, frontend, and backend roles.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </Section>
  );
}
