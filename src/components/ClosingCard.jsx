import React from 'react';
import { content } from '../data/content';
import { Mail, Sparkles } from 'lucide-react';

export function ClosingCard() {
  return (
    <div className="relative mx-auto max-w-[1200px] px-5 sm:px-10 pb-16 sm:pb-24">
      {/* 
        Large Glass Card:
        Faint 56px grid and soft glow appear in hero and closing card only.
        "Let's build something meaningful." with one gradient word,
        a short line, a "Say hello" mailto button.
      */}
      <div className="relative overflow-hidden rounded-card border border-border/80 bg-surface/80 backdrop-blur-xl p-8 sm:p-14 lg:p-16 text-center shadow-lg">
        {/* Faint 56px grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-15" aria-hidden="true" />

        {/* Soft centered accent glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-accent/25 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          {/* Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent bg-surface2/80 px-3.5 py-1.5 rounded-full border border-border">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Collaboration & Inquiries</span>
          </div>

          {/* Heading with one gradient word */}
          <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-text tracking-tight leading-tight">
            {content.closingCard.heading.regular}{' '}
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              {content.closingCard.heading.gradient}
            </span>
          </h2>

          {/* Short Line */}
          <p className="font-sans text-base sm:text-lg text-muted leading-relaxed max-w-lg mx-auto">
            {content.closingCard.shortLine}
          </p>

          {/* "Say hello" mailto pill button */}
          <div className="pt-2">
            <a
              href={content.closingCard.button.href}
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-pill bg-accent px-8 py-3.5 font-sans font-semibold text-base text-on-accent transition hover:opacity-90 shadow-glow-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Mail className="h-5 w-5" />
              <span>{content.closingCard.button.label}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
