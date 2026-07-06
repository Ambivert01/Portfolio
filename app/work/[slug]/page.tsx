import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { StatBlock } from "@/components/ui/StatBlock";
import { Github, ExternalLink, ArrowLeft, ChevronRight, CheckCircle2, AlertTriangle, Users, TrendingUp, Rocket, Target, Lightbulb, GitCompare, Image, Telescope, Ban, BookOpen, Workflow, Briefcase } from "lucide-react";
import { PrintButton } from "@/components/ui/PrintButton";
import { Lightbox } from "@/components/ui/Lightbox";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.name} — Project` : "Project" };
}

const statusTone = { active: "active", shipped: "amber", archived: "neutral" } as const;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const { docs } = project;

  return (
    <article className="mx-auto max-w-content px-6 py-20">

      {/* back */}
      <Link href="/work" className="focus-ring inline-flex items-center gap-1.5 text-sm text-fg-subtle transition-colors hover:text-fg">
        <ArrowLeft size={14} /> All projects
      </Link>

      {/* hero */}
      <div className="mt-8 border-b border-border pb-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <Badge tone={statusTone[project.status]}>{project.status}</Badge>
            <h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">{project.name}</h1>
            <p className="mt-3 max-w-2xl text-lg text-fg-muted">{project.oneLiner}</p>

            {/* links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent/40 hover:text-accent">
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent/40 hover:text-accent">
                  <ExternalLink size={14} /> Live preview
                </a>
              )}
              <PrintButton pdfPath={project.pdfUrl} />
            </div>
          </div>

          {/* stack */}
          <div className="shrink-0">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-fg-subtle">Stack</p>
            <div className="flex max-w-xs flex-wrap gap-2">
              {project.stack.map((s) => <Badge key={s} tone="neutral">{s}</Badge>)}
            </div>
          </div>
        </div>
      </div>

      {/* metrics */}
      {project.metrics.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {project.metrics.map((m) => <StatBlock key={m.label} label={m.label} value={m.value} />)}
        </div>
      )}

      {docs && (
        <div className="mt-14 flex flex-col gap-14">

          {/* 1. Problem Statement */}
          {(docs.problemStatement || docs.overview) && (
            <section>
              <SectionLabel icon={<AlertTriangle size={13} />}>Problem Statement</SectionLabel>
              <p className="mt-5 leading-relaxed text-fg-muted">{docs.problemStatement ?? docs.overview}</p>
            </section>
          )}

          {/* 2. Existing Problems */}
          {((docs.existingProblems ?? docs.coreProblem) ?? []).length > 0 && (
            <section>
              <SectionLabel icon={<Ban size={13} />}>Existing Problems</SectionLabel>
              <ul className="mt-5 flex flex-col gap-3">
                {(docs.existingProblems ?? docs.coreProblem)!.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-fg-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-red/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 3. Why This Project */}
          {docs.whyThisProject && (
            <section>
              <SectionLabel icon={<Lightbulb size={13} />}>Why This Project</SectionLabel>
              <p className="mt-5 leading-relaxed text-fg-muted">{docs.whyThisProject}</p>
            </section>
          )}

          {/* 4. Objectives */}
          {docs.objectives && docs.objectives.length > 0 && (
            <section>
              <SectionLabel icon={<Target size={13} />}>Objectives</SectionLabel>
              <ul className="mt-5 flex flex-col gap-2">
                {docs.objectives.map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
                    <span className="mt-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}.</span>
                    {o}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 5. Solution */}
          {docs.solution && (
            <section>
              <SectionLabel icon={<Rocket size={13} />}>Solution</SectionLabel>
              <p className="mt-5 leading-relaxed text-fg-muted">{docs.solution}</p>
            </section>
          )}

          {/* 6. Complete Features */}
          {docs.features && docs.features.length > 0 && (
            <section>
              <SectionLabel icon={<CheckCircle2 size={13} />}>Complete Features</SectionLabel>
              <ul className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-2">
                {docs.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 7. User Roles */}
          {docs.userRoles && docs.userRoles.length > 0 && (
            <section>
              <SectionLabel icon={<Users size={13} />}>User Roles</SectionLabel>
              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                {docs.userRoles.map((r) => (
                  <div key={r.role} className="rounded-lg border border-border bg-bg-elevated/60 p-4">
                    <p className="font-medium text-sm text-fg">{r.role}</p>
                    <p className="mt-1 text-xs leading-relaxed text-fg-muted">{r.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 8. Use Cases */}
          {docs.useCases && docs.useCases.length > 0 && (
            <section>
              <SectionLabel icon={<Briefcase size={13} />}>Use Cases</SectionLabel>
              <div className="mt-5 flex flex-col gap-3">
                {docs.useCases.map((uc) => (
                  <div key={uc.id} className="rounded-lg border border-border bg-bg-elevated/40 p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-fg-subtle">{uc.id}</span>
                      <span className="font-medium text-sm text-fg">{uc.title}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-fg-muted">
                      <span><span className="text-fg-subtle">Who:</span> {uc.who}</span>
                      <span><span className="text-fg-subtle">Trigger:</span> {uc.trigger}</span>
                    </div>
                    {uc.steps && uc.steps.length > 0 && (
                      <ol className="mt-3 flex flex-col gap-1">
                        {uc.steps.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-fg-muted">
                            <span className="font-mono text-accent">{i + 1}.</span> {s}
                          </li>
                        ))}
                      </ol>
                    )}
                    {(uc.before || uc.after) && (
                      <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
                        {uc.before && (
                          <div className="rounded border border-signal-red/20 bg-signal-red/5 px-3 py-2 text-xs text-fg-muted">
                            <span className="font-mono text-signal-red/70">BEFORE</span> — {uc.before}
                          </div>
                        )}
                        {uc.after && (
                          <div className="rounded border border-signal-green/20 bg-signal-green/5 px-3 py-2 text-xs text-fg-muted">
                            <span className="font-mono text-signal-green/70">AFTER</span> — {uc.after}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. Workflow */}
          {docs.workflow && docs.workflow.length > 0 && (
            <section>
              <SectionLabel icon={<Workflow size={13} />}>Workflow</SectionLabel>
              <div className="mt-5 flex flex-col gap-3">
                {docs.workflow.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-xs font-bold text-white">{i + 1}</div>
                      {i < docs.workflow!.length - 1 && <div className="mt-1 w-px flex-1 bg-border" />}
                    </div>
                    <p className="pb-4 text-sm leading-relaxed text-fg-muted">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 10. Business Flow */}
          {docs.businessFlow && docs.businessFlow.length > 0 && (
            <section>
              <SectionLabel icon={<TrendingUp size={13} />}>Business Flow</SectionLabel>
              <div className="mt-5 flex flex-col gap-2">
                {docs.businessFlow.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-fg-muted">
                    <span className="font-mono text-xs text-accent2">{String(i + 1).padStart(2, "0")}</span>
                    <ChevronRight size={12} className="text-border" />
                    {step}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 11. Before vs After */}
          {docs.beforeVsAfter && docs.beforeVsAfter.length > 0 && (
            <section>
              <SectionLabel icon={<GitCompare size={13} />}>Before vs After</SectionLabel>
              <div className="mt-5 overflow-hidden rounded-lg border border-border">
                <div className="grid grid-cols-3 border-b border-border bg-bg-elevated/60 px-4 py-2 text-xs font-mono uppercase tracking-wider text-fg-subtle">
                  <span>Aspect</span>
                  <span className="text-signal-red/70">Before</span>
                  <span className="text-signal-green/70">After</span>
                </div>
                {docs.beforeVsAfter.map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 gap-4 px-4 py-3 text-sm ${i !== docs.beforeVsAfter!.length - 1 ? "border-b border-border" : ""}`}>
                    <span className="font-medium text-fg">{row.aspect}</span>
                    <span className="text-fg-muted">{row.before}</span>
                    <span className="text-fg-muted">{row.after}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 12. Screenshots */}
          {docs.screenshots && docs.screenshots.length > 0 && (
            <section>
              <SectionLabel icon={<Image size={13} />}>Screenshots</SectionLabel>
              <Lightbox shots={docs.screenshots} />
            </section>
          )}

          {/* 13. Future Scope */}
          {docs.futureScope && docs.futureScope.length > 0 && (
            <section>
              <SectionLabel icon={<Telescope size={13} />}>Future Scope</SectionLabel>
              <ul className="mt-5 flex flex-col gap-2">
                {docs.futureScope.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-fg-muted">
                    <ChevronRight size={14} className="text-accent2" />{f}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 14. Limitations */}
          {docs.limitations && docs.limitations.length > 0 && (
            <section>
              <SectionLabel icon={<AlertTriangle size={13} />}>Limitations</SectionLabel>
              <ul className="mt-5 flex flex-col gap-3">
                {docs.limitations.map((l, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-fg-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-amber/70" />
                    {l}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 15. Conclusion */}
          {docs.conclusion && (
            <section>
              <SectionLabel icon={<BookOpen size={13} />}>Conclusion</SectionLabel>
              <p className="mt-5 leading-relaxed text-fg-muted">{docs.conclusion}</p>
            </section>
          )}


          {/* video */}
          {project.videoUrl && (
            <section>
              <SectionLabel>Demo</SectionLabel>
              <div className="mt-5 aspect-video overflow-hidden rounded-xl border border-border">
                <iframe src={project.videoUrl} className="h-full w-full" title={`${project.name} demo`} />
              </div>
            </section>
          )}

        </div>
      )}

      {/* back footer */}
      <div className="mt-16 border-t border-border pt-8">
        <Link href="/work" className="focus-ring inline-flex items-center gap-1.5 text-sm text-fg-subtle transition-colors hover:text-fg">
          <ArrowLeft size={14} /> Back to all projects
        </Link>
      </div>

    </article>
  );
}

function SectionLabel({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <h2 className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-fg-subtle">
        {icon}{children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
