import * as React from 'react';
import { cn } from '@/libs/utils';

interface PreviewProps {
  className?: string;
  accent?: string;
}

function WindowShell({
  title,
  children,
  className,
  tag = 'App',
}: {
  title: string;
  tag?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card shadow-lg overflow-hidden h-full flex flex-col',
        className
      )}
    >
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" aria-hidden />
          <span className="ml-3 text-[11px] font-medium text-muted-foreground truncate">
            {title}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70">
          {tag}
        </span>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}

export function ProjectPreviewMarketplace({ className }: PreviewProps) {
  return (
    <WindowShell className={className} title="lend-sphere.app · browse" tag="React">
      <div className="h-full flex flex-col bg-background text-[12px]">
        <div className="flex items-center gap-4 px-4 py-3 border-b border-border">
          <div className="font-bold text-foreground text-sm tracking-tight">
            Lend<span className="text-accent">Sphere</span>
          </div>
          <div className="flex-1 max-w-xs hidden sm:block">
            <div className="h-7 rounded-md bg-muted flex items-center px-3 gap-2 text-muted-foreground">
              <div className="h-3 w-3 rounded-full border border-current" />
              <span className="text-[11px]">Search cameras, laptops...</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="h-7 px-3 rounded-md bg-muted text-[11px] font-medium flex items-center text-muted-foreground">
              List item
            </div>
            <div className="h-7 w-7 rounded-full bg-accent/20 text-accent font-bold text-[11px] flex items-center justify-center">
              PJ
            </div>
          </div>
        </div>

        <div className="p-4 grid grid-cols-2 gap-3 flex-1 overflow-hidden">
          {['Camera Kit', 'MacBook Pro', 'Drone', 'Projector'].map((name, i) => (
            <div
              key={name}
              className="rounded-lg border border-border bg-card overflow-hidden flex flex-col hover:border-accent/40 transition-colors"
            >
              <div
                className={cn(
                  'h-16 sm:h-20 flex items-end p-2',
                  i % 2 === 0 ? 'bg-muted' : 'bg-muted/70'
                )}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, transparent, transparent 6px, rgb(0 0 0 / 0.02) 6px, rgb(0 0 0 / 0.02) 12px)',
                }}
              >
                <span className="text-[9px] font-mono text-muted-foreground/70 bg-background/80 backdrop-blur px-1.5 py-0.5 rounded border border-border">
                  IMG_{100 + i}
                </span>
              </div>
              <div className="p-2.5 space-y-1">
                <div className="font-semibold text-[12px] text-foreground truncate">
                  {name}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold text-[12px]">
                    ₹{499 + i * 200}/d
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    ⭐ {4 + (i % 2) * 0.5}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-border flex items-center gap-2 bg-muted/30">
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Chat: 3 new messages
          </div>
          <div className="ml-auto text-[10px] font-mono text-muted-foreground/70">
            Socket.IO · connected
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

export function ProjectPreviewTasks({ className }: PreviewProps) {
  const columns = [
    { title: 'Backlog', count: 3, accent: 'bg-muted-foreground/20' },
    { title: 'In Progress', count: 2, accent: 'bg-amber-500/20' },
    { title: 'Done', count: 4, accent: 'bg-success/20' },
  ];
  return (
    <WindowShell className={className} title="taskflow.app · dashboard" tag="MERN">
      <div className="h-full flex flex-col bg-background text-[12px]">
        <div className="flex items-center gap-4 px-4 py-3 border-b border-border">
          <div className="font-bold text-sm tracking-tight text-foreground">
            Task<span className="text-accent">Flow</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground">Workspace /</span>
            <span className="text-[11px] font-medium">Portfolio Redesign</span>
          </div>
        </div>
        <div className="p-3 flex-1 grid grid-cols-3 gap-2 sm:gap-3 overflow-hidden">
          {columns.map((col, ci) => (
            <div key={col.title} className="flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-1.5">
                  <span className={cn('h-2 w-2 rounded-full', col.accent)} />
                  <span className="text-[11px] font-semibold text-foreground">
                    {col.title}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  {col.count}
                </span>
              </div>
              <div className="space-y-1.5 overflow-y-auto pr-0.5">
                {Array.from({ length: col.count }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-md border border-border bg-card p-2 hover:border-accent/40 transition-colors"
                  >
                    <div className="h-1.5 w-full rounded-full bg-muted mb-2 overflow-hidden">
                      <div
                        className={cn(
                          'h-full',
                          ci === 0 && 'w-1/5 bg-muted-foreground/40',
                          ci === 1 && 'w-1/2 bg-amber-500/70',
                          ci === 2 && 'w-full bg-success/70'
                        )}
                      />
                    </div>
                    <div className="font-medium text-[11px] text-foreground leading-tight">
                      Task item {i + 1} — implement...
                    </div>
                    <div className="mt-1.5 flex items-center justify-between">
                      <div className="flex -space-x-1">
                        {Array.from({ length: 1 + ((ci + i) % 2) }).map((_, av) => (
                          <div
                            key={av}
                            className="h-4 w-4 rounded-full bg-muted border-2 border-card"
                            style={{ backgroundColor: ci % 2 ? 'var(--accent)' : undefined }}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono text-muted-foreground">#{i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2.5 border-t border-border flex items-center text-[10px] font-mono text-muted-foreground/80">
          <span className="h-1.5 w-1.5 rounded-full bg-success mr-2 animate-pulse-dot" />
          JWT verified · session active
        </div>
      </div>
    </WindowShell>
  );
}

export function ProjectPreviewData({ className }: PreviewProps) {
  return (
    <WindowShell className={className} title="matching-engine.py" tag="Python">
      <div className="p-3 sm:p-4 h-full font-mono text-[11px] sm:text-[12px] leading-6 overflow-hidden flex flex-col">
        <div className="space-y-0.5 flex-1 overflow-hidden">
          {[
            { t: 'muted', c: '# data pipeline — matching engine' },
            { t: '', c: <><span className="text-accent">from</span> bs4 <span className="text-accent">import</span> BeautifulSoup</> },
            { t: '', c: <><span className="text-accent">import</span> pandas <span className="text-accent">as</span> pd</> },
            { t: 'muted', c: '' },
            { t: '', c: <><span className="text-accent">def</span> <span className="text-foreground">extract_specs</span>(url: <span className="text-accent">str</span>):</> },
            { t: 'ind', c: <>response = requests.get(url, headers=UA)</> },
            { t: 'ind', c: <>soup = BeautifulSoup(response.text, <span className="text-success">'html.parser'</span>)</> },
            // THE FIX: Properly stringifying the Python braces so React doesn't read them as a Javascript object
            { t: 'ind', c: <>raw = {'{}'}</> },
            { t: 'ind', c: <><span className="text-accent">for</span> row <span className="text-accent">in</span> soup.select(<span className="text-success">'table.specs tr'</span>):</> },
            { t: 'ind2', c: <>key, val = clean(row)</> },
            { t: 'ind2', c: <>raw[key] = normalize(val)</> },
            { t: 'muted', c: '' },
            { t: 'hl', c: <><span className="text-accent">return</span> SpecRecord(**raw)  <span className="text-muted-foreground"># 2,481 records / hr</span></> },
          ].map((line, i) => {
            const pad = line.t === 'ind' ? 24 : line.t === 'ind2' ? 48 : 0;
            return (
              <div
                key={i}
                className={cn(
                  'flex px-2 -mx-2 rounded transition-colors',
                  line.t === 'muted' && 'text-muted-foreground/50 italic',
                  line.t === 'hl' && 'bg-accent/10 text-foreground'
                )}
                style={{ paddingLeft: pad + 8 }}
              >
                <span className="w-6 shrink-0 text-right pr-2 tabular-nums text-muted-foreground/40 text-[10px] select-none">
                  {i + 1}
                </span>
                <span className="whitespace-pre">{line.c}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-3 pt-3 border-t border-border flex items-center text-[10px] font-mono">
          <span className="text-success">✓</span>
          <span className="ml-2 text-muted-foreground">4 sources · 18,402 records · cleaned</span>
          <span className="ml-auto text-muted-foreground/70">Python 3.11</span>
        </div>
      </div>
    </WindowShell>
  );
}

export function ProjectPreviewAPI({ className }: PreviewProps) {
  return (
    <WindowShell className={className} title="api.yt-sim.dev /videos" tag="REST">
      <div className="h-full bg-background flex flex-col text-[12px]">
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border font-mono text-[12px] overflow-x-auto">
          <span className="shrink-0 rounded bg-success/15 text-success px-2 py-0.5 font-bold text-[11px]">
            GET
          </span>
          <span className="text-foreground whitespace-nowrap">
            /api/v1/videos/<span className="text-accent">:id</span>/comments
          </span>
          <span className="ml-auto text-[10px] text-muted-foreground shrink-0">
            200 OK · 84ms
          </span>
        </div>
        <div className="p-3 sm:p-4 font-mono text-[11px] sm:text-[12px] flex-1 overflow-hidden">
          <div className="rounded-lg border border-border bg-muted/40 p-3 sm:p-4 h-full overflow-auto">
            <pre className="leading-6 whitespace-pre-wrap">
              <span className="text-muted-foreground">{'{'}</span>
              {'\n  '}<span className="text-success">"videoId"</span>: <span className="text-accent">"v_0192xk"</span>,
              {'\n  '}<span className="text-success">"comments"</span>: [
              {'\n    '}{'{'}
              {'\n      '}<span className="text-success">"id"</span>: <span className="text-accent">"c_881"</span>,
              {'\n      '}<span className="text-success">"author"</span>: <span className="text-accent">"@dev_jain"</span>,
              {'\n      '}<span className="text-success">"likes"</span>: <span className="text-foreground">24</span>,
              {'\n      '}<span className="text-success">"replies"</span>: [ <span className="text-muted-foreground">/* nested */</span> ]
              {'\n    '}{'}'},
              {'\n    '}{'{'}<span className="text-muted-foreground"> ... 12 more</span>{'}'}
              {'\n  '}],
              {'\n  '}<span className="text-success">"pagination"</span>: {'{'} <span className="text-success">"next"</span>: <span className="text-accent">"/?cursor=oJx9"</span> {'}'}
              {'\n'}<span className="text-muted-foreground">{'}'}</span>
            </pre>
          </div>
        </div>
        <div className="px-3 py-2 border-t border-border flex items-center gap-3 text-[10px] font-mono text-muted-foreground">
          <span>Express</span>
          <span>·</span>
          <span>Mongo</span>
          <span>·</span>
          <span className="text-success">✓ indexed</span>
        </div>
      </div>
    </WindowShell>
  );
}

export const PreviewRegistry: Record<string, React.ComponentType<PreviewProps>> = {
  'code-marketplace': ProjectPreviewMarketplace,
  'code-tasks': ProjectPreviewTasks,
  'code-data': ProjectPreviewData,
  'code-api': ProjectPreviewAPI,
};