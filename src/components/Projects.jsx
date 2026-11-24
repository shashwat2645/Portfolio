import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionHeader } from './SectionHeader';
import { content } from '../data/content';
import { Code, Sparkles, Clock, ExternalLink } from 'lucide-react';

export function Projects() {
  const [majorProject, bankingProject, lexFile] = content.projects.items;
  const isReal = (val) => val && !val.startsWith('TODO') && val !== '';

  return (
    <SectionWrapper id="projects" className="border-b border-border">
      <SectionHeader
        eyebrow={content.projects.eyebrow}
        headingRegular={content.projects.heading.regular}
        headingGradient={content.projects.heading.gradient}
      />

      <div className="space-y-8">

        {/* ── FEATURED: Decentralized AI Marketplace ── */}
        <div className="card-lift relative rounded-card border-2 border-accent/80 bg-surface p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-150 overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

          <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-8 lg:gap-10">
            {/* Left */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-accent text-on-accent shadow-sm inline-flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" /><span>{majorProject.badge}</span>
                  </span>
                  <span className="font-mono text-xs text-muted">{majorProject.status}</span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-text tracking-tight mb-4">
                  {majorProject.title}
                </h3>

                <p className="font-sans text-base sm:text-lg leading-relaxed text-muted max-w-2xl mb-6">
                  {majorProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {majorProject.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs font-medium px-3 py-1.5 rounded-chip bg-surface2 border border-border text-text">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {isReal(majorProject.githubUrl) ? (
                  <a href={majorProject.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button bg-accent px-6 py-2.5 text-sm font-semibold text-on-accent transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent w-full sm:w-auto shadow-sm">
                    <Code className="h-4 w-4" /><span>View code</span>
                  </a>
                ) : (
                  <button type="button" disabled className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button bg-accent/60 text-on-accent/70 px-6 py-2.5 text-sm font-semibold cursor-not-allowed w-full sm:w-auto">
                    <Code className="h-4 w-4" /><span>Code (TODO)</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: meta */}
            <div className="lg:w-56 xl:w-64 shrink-0">
              <div className="rounded-card border border-border/60 bg-surface2/60 p-5 space-y-4 h-full">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Project details</p>
                {majorProject.meta.map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-xs text-muted mb-0.5">{item.label}</p>
                    <p className="font-heading font-semibold text-sm text-text">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Two smaller cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Banking Transaction System — In Progress */}
          {bankingProject && (
            <div className="card-lift flex flex-col justify-between rounded-card border border-border bg-surface p-6 sm:p-8 shadow-sm transition-all duration-150">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-accent text-accent inline-flex items-center gap-2 bg-accent/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span>{bankingProject.badge}</span>
                  </span>
                  <span className="font-mono text-xs text-muted">Java / Spring Boot</span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-text tracking-tight mb-3">{bankingProject.title}</h3>
                <p className="font-sans text-base leading-relaxed text-muted mb-6">{bankingProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {bankingProject.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs font-medium px-2.5 py-1 rounded-chip bg-surface2 border border-border text-text">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {isReal(bankingProject.githubUrl) ? (
                  <a href={bankingProject.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button bg-surface2 border border-border px-5 py-2 text-sm font-medium text-text hover:border-accent hover:text-accent transition w-full sm:w-auto">
                    <Code className="h-4 w-4" /><span>View code</span>
                  </a>
                ) : (
                  <span className="font-mono text-xs text-muted flex items-center gap-2 py-2">
                    <Clock className="h-3.5 w-3.5 text-accent" /><span>Under active development</span>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* LexFile — Planned / dashed */}
          {lexFile && (
            <div className="card-lift flex flex-col justify-between rounded-card border-2 border-dashed border-border/90 bg-surface/40 backdrop-blur-sm p-6 sm:p-8 transition-all duration-150">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-surface2 border border-border text-muted">
                    {lexFile.badge}
                  </span>
                  <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Coming soon</span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-text tracking-tight mb-3">{lexFile.title}</h3>
                <p className="font-sans text-base leading-relaxed text-muted mb-6">{lexFile.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {lexFile.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs font-medium px-2.5 py-1 rounded-chip bg-surface2/60 border border-border/80 text-muted">{tag}</span>
                  ))}
                </div>
              </div>

              <span className="font-mono text-xs text-muted flex items-center gap-2 py-2">
                <Clock className="h-3.5 w-3.5" /><span>Specification & schema design phase</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
