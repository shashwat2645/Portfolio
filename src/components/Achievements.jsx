import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionHeader } from './SectionHeader';
import { content } from '../data/content';
import { Building2, Trophy, Rocket, Terminal } from 'lucide-react';

export function Achievements() {
  const { placementsGroup, hackathonsGroup } = content.achievements;

  return (
    <SectionWrapper id="achievements" className="bg-surface2/30 border-b border-border">
      <SectionHeader
        eyebrow={content.achievements.eyebrow}
        headingRegular={content.achievements.heading.regular}
        headingGradient={content.achievements.heading.gradient}
      />

      <div className="space-y-12 sm:space-y-16">

        {/* ── Placements ── */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>{placementsGroup.label}</span>
            </span>
            <span className="h-px flex-1 bg-border/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {placementsGroup.items.map((place) => (
              <div
                key={place.id}
                className="card-lift relative rounded-card border-2 border-accent bg-surface p-7 sm:p-9 shadow-sm transition-all duration-150 overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-accent/15 blur-2xl" aria-hidden="true" />

                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-accent text-on-accent shadow-sm inline-flex items-center gap-1.5">
                      <Terminal className="h-3 w-3" />
                      <span>{place.badge}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-3xl sm:text-4xl text-text tracking-tight mb-3">
                    {place.company}
                  </h3>

                  <div className="pt-2 flex flex-col gap-1">
                    <span className="font-mono text-sm sm:text-base font-semibold text-text">
                      {place.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hackathons ── */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold flex items-center gap-2">
              <Trophy className="h-4 w-4 text-accent" />
              <span>{hackathonsGroup.label}</span>
            </span>
            <span className="h-px flex-1 bg-border/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hackathonsGroup.items.map((hack) => (
              <div
                key={hack.id}
                className="card-lift rounded-card border border-border bg-surface p-6 sm:p-7 shadow-sm transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-surface2 border border-border text-muted inline-flex items-center gap-1.5">
                      <Rocket className="h-3 w-3 text-accent" />
                      <span>{hack.badge}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-text tracking-tight mb-2">
                    {hack.name}
                  </h3>

                  {hack.sponsor && (
                    <p className="font-sans text-sm text-muted">{hack.sponsor}</p>
                  )}
                </div>

                <div className="pt-4 border-t border-border/40 mt-6">
                  <span className="font-mono text-xs text-muted flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                    <span>Participant Contributor</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
