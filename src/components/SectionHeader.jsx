import React from 'react';

/**
 * Reusable Section Header
 * - Eyebrow in JetBrains Mono (e.g. "02 / SKILLS")
 * - Space Grotesk 700 with tight tracking for heading
 * - One gradient word (accent to accent2) per heading
 */
export function SectionHeader({
  eyebrow,
  headingRegular,
  headingGradient,
  description,
  centered = false,
  className = 'mb-12 sm:mb-16',
}) {
  return (
    <div className={`${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
          {eyebrow}
        </p>
      )}
      
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text leading-tight">
        {headingRegular}{' '}
        {headingGradient && (
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
            {headingGradient}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
