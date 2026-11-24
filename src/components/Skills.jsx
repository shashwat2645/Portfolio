import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionHeader } from './SectionHeader';
import { content } from '../data/content';
import { Code2, Database, Cpu, Server, Wrench, BrainCircuit } from 'lucide-react';

export function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case '01':
        return <Code2 className="h-5 w-5 text-accent" />;
      case '02':
        return <Database className="h-5 w-5 text-accent" />;
      case '03':
        return <Cpu className="h-5 w-5 text-accent" />;
      case '04':
        return <Server className="h-5 w-5 text-accent" />;
      case '05':
        return <Wrench className="h-5 w-5 text-accent" />;
      case '06':
        return <BrainCircuit className="h-5 w-5 text-accent" />;
      default:
        return null;
    }
  };

  return (
    <SectionWrapper id="skills" className="bg-surface2/30 border-b border-border">
      {/* Section Header: Mono eyebrow 02 / SKILLS and one gradient word */}
      <SectionHeader
        eyebrow={content.skills.eyebrow}
        headingRegular={content.skills.heading.regular}
        headingGradient={content.skills.heading.gradient}
      />

      {/* 
        Skills Grid: 6 cards, 3 columns desktop, 1 column mobile
        Numbered 01-06 in mono. No percentage bars or ratings.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.skills.groups.map((group) => {
          const isCore = group.coreFocus;

          return (
            <div
              key={group.id}
              className={`card-lift relative flex flex-col justify-between rounded-card p-6 sm:p-7 bg-surface transition-all duration-150 ${
                isCore
                  ? 'border-2 border-accent shadow-sm'
                  : 'border border-border'
              }`}
            >
              <div>
                {/* Top Row: Mono ID + Badge / Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-bold text-accent">
                      {group.id}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    {getCategoryIcon(group.id)}
                  </div>

                  {group.badge && (
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent text-on-accent shadow-sm">
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* Category Heading (Space Grotesk 700) */}
                <h3 className="font-heading font-bold text-xl text-text mb-4 tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Skills Chips (8px radius, mono font) - No percentage bars */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-medium px-3 py-1.5 rounded-chip bg-surface2 border border-border text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
