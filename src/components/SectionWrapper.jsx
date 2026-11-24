import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function SectionWrapper({
  id,
  children,
  className = '',
  innerClassName = '',
  hasGrid = false,
}) {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full overflow-hidden transition-all duration-700 ${
        isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {/* Optional faint 56px grid */}
      {hasGrid && (
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern" aria-hidden="true" />
      )}

      {/* Main Content Container (Max 1120px + 40px side padding = 1200px) */}
      <div className={`relative mx-auto max-w-[1200px] px-5 sm:px-10 py-16 sm:py-24 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
