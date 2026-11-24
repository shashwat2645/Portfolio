import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionHeader } from './SectionHeader';
import { content } from '../data/content';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-surface2/30 border-b border-border">
      {/* Section Header: Mono eyebrow 04 / EDUCATION and one gradient word */}
      <SectionHeader
        eyebrow={content.education.eyebrow}
        headingRegular={content.education.heading.regular}
        headingGradient={content.education.heading.gradient}
      />

      {/* 
        Vertical Timeline:
        Rail + dots, current entry filled.
        Each row = level label (UNDERGRADUATE / SENIOR SECONDARY / SECONDARY),
        institution, large score on the right.
        Mobile: label above the card.
      */}
      <div className="relative mx-auto max-w-4xl pl-6 sm:pl-8">
        {/* Timeline Vertical Rail */}
        <div
          className="pointer-events-none absolute left-[11px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-border"
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-10">
          {content.education.items.map((item) => {
            const isCurrent = item.current;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline Dot (Current filled, previous outlined) */}
                <div
                  className={`absolute -left-[24px] sm:-left-[32px] top-6 h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isCurrent
                      ? 'bg-accent ring-4 ring-accent/20 text-on-accent shadow-sm'
                      : 'border-2 border-border bg-surface text-muted group-hover:border-accent'
                  }`}
                  aria-hidden="true"
                >
                  {isCurrent ? (
                    <span className="h-2 w-2 rounded-full bg-on-accent" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-accent transition-colors" />
                  )}
                </div>

                {/* Mobile: Level Label Above Card */}
                <div className="sm:hidden mb-2 pl-1">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent inline-flex items-center gap-1.5">
                    {item.level}
                    {isCurrent && (
                      <span className="text-[10px] px-2 py-0.2 rounded-full bg-accent/15 text-accent border border-accent/20">
                        Current
                      </span>
                    )}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="card-lift rounded-card border border-border bg-surface p-6 sm:p-7 shadow-sm transition-all duration-150 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="space-y-1 sm:space-y-2">
                    {/* Desktop: Level Label */}
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                        {item.level}
                      </span>
                      {isCurrent && (
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Degree / Examination */}
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-text tracking-tight">
                      {item.degree}
                    </h3>

                    {/* Institution & Period */}
                    <p className="font-sans text-sm sm:text-base text-muted">
                      {item.institution}
                      {item.period && !item.period.includes('TODO') && (
                        <span> · {item.period}</span>
                      )}
                    </p>
                  </div>

                  {/* Large Score on the Right */}
                  <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-border/60 pt-3 sm:pt-0">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted sm:mb-1">
                      Score
                    </span>
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-accent tracking-tight">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
