import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Check,
  Copy,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { PERSONAL } from '@/data/constants';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Label, Input, Textarea } from '@/components/ui/Input';
import { Tooltip } from '@/components/ui/Tooltip';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useToast } from '@/hooks/useToast';
import { cn } from '@/libs/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
};

export default function Contact() {
  const { copied, copy } = useCopyToClipboard();
  const { toast } = useToast();
  const [status, setStatus] = React.useState<Status>('idle');
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleCopy = async () => {
    const ok = await copy(PERSONAL.email);
    if (ok) toast({ title: 'Email copied', description: PERSONAL.email, variant: 'success' });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email';
    if (!form.message.trim()) next.message = 'Please enter a message';
    else if (form.message.trim().length < 10) next.message = 'Message is too short (min 10 characters)';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    // Simulate network request + success feedback (no backend)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    toast({
      title: 'Message queued',
      description: `Thanks ${form.name.split(' ')[0]!} — I'll reply via email shortly.`,
      variant: 'success',
    });
    // Fallback: open mail client with the drafted message
    try {
      const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
      window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    } catch {
      // ignore
    }
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3500);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <Reveal direction="right" className="lg:col-span-5">
          <Card className="h-full">
            <CardContent className="p-6 sm:p-8 h-full flex flex-col">
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

              <div className="mt-8 space-y-4">
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="button"
                  className="group w-full flex items-center justify-between rounded-xl border border-border bg-muted/40 hover:bg-muted hover:border-accent/40 p-4 text-left transition-colors"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Email
                    </p>
                    <p className="mt-1 font-mono text-sm text-foreground break-all">
                      {PERSONAL.email}
                    </p>
                  </div>
                  <Tooltip content={copied ? 'Copied!' : 'Click to copy'}>
                    <span className="shrink-0 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition-colors">
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </span>
                  </Tooltip>
                </motion.button>

                <div className="rounded-xl border border-border bg-muted/40 p-4 flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-card text-muted-foreground border border-border">
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

              <div className="mt-auto pt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Or find me on
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {socials.map((s) => (
                    <Button
                      key={s.label}
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <a
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer noopener"
                      >
                        {s.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-lg bg-accent/10 border border-accent/20 px-3 py-2.5">
                  <Badge variant="accent" className="text-[10px] uppercase tracking-widest py-0.5">
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-7"
        >
          <Card className="h-full">
            <CardContent className="p-6 sm:p-8 h-full">
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      value={form.name}
                      onChange={onChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={cn(errors.name && 'border-destructive focus-visible:ring-destructive')}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={cn(errors.email && 'border-destructive focus-visible:ring-destructive')}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={item} className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about the role, project, or what you'd like to build..."
                    value={form.message}
                    onChange={onChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={cn(errors.message && 'border-destructive focus-visible:ring-destructive')}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={item}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === 'submitting' || status === 'success'}
                      className="sm:w-auto w-full"
                    >
                      {status === 'submitting' && (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      )}
                      {status === 'success' && <Check className="h-4 w-4" />}
                      {status === 'submitting'
                        ? 'Sending...'
                        : status === 'success'
                        ? 'Message sent'
                        : 'Send Message'}
                      {status === 'idle' && <Send className="h-4 w-4" />}
                    </Button>

                    <p className="text-xs text-muted-foreground sm:max-w-xs">
                      On submit, your email client opens with a pre-filled draft — no data is sent anywhere without you.
                    </p>
                  </div>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
