import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionHeader } from './SectionHeader';
import { content } from '../data/content';
import { Terminal, GraduationCap, Building2 } from 'lucide-react';

export function About() {
  const getFactIcon = (factId) => {
    switch (factId) {
      case 'focus':     return <Terminal      className="h-4 w-4 text-accent" />;
      case 'education': return <GraduationCap className="h-4 w-4 text-accent" />;
      case 'placement': return <Building2     className="h-4 w-4 text-accent" />;
      default:          return null;
    }
  };

  return (
    <SectionWrapper id="about" className="border-b border-border">
      <SectionHeader
        eyebrow={content.about.eyebrow}
        headingRegular={content.about.heading.regular}
        headingGradient={content.about.heading.gradient}
      />

      {/* Two columns on desktop / stacked on mobile. NO photo in About. */}
      <div className="flex flex-col lg:flex-row lg:gap-14 lg:items-start">
        {/* Left: narrative paragraphs */}
        <div className="flex-1 space-y-6">
          {content.about.paragraphs.map((paragraph, index) => {
            if (index === 0) {
              return (
                <p key={index} className="font-sans text-lg sm:text-xl font-medium leading-relaxed text-text">
                  {paragraph}
                </p>
              );
            }
            return (
              <p key={index} className="font-sans text-base sm:text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Right: fact cards */}
        <div className="mt-10 lg:mt-0 lg:w-64 xl:w-72 space-y-4 shrink-0">
          {content.about.factCards.map((card) => (
            <div
              key={card.id}
              className="card-lift rounded-card border border-border bg-surface p-5 flex items-start justify-between gap-3 shadow-sm"
            >
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-wider text-muted mb-1">
                  {card.label}
                </p>
                <p className="font-heading font-semibold text-sm text-text truncate">
                  {card.value}
                </p>
              </div>
              <span className="shrink-0 mt-0.5">{getFactIcon(card.id)}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
