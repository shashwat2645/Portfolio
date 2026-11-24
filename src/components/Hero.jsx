import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { content } from '../data/content';

export function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches || window.innerWidth < 1024) return;
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX - innerWidth / 2) / (innerWidth / 2)) * 8;
      const y = ((e.clientY - innerHeight / 2) / (innerHeight / 2)) * 6;
      setMouseOffset({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':   return <Github   className="h-4 w-4" />;
      case 'Linkedin': return <Linkedin className="h-4 w-4" />;
      case 'Twitter':  return <Twitter  className="h-4 w-4" />;
      case 'Mail':     return <Mail     className="h-4 w-4" />;
      default:         return null;
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-bg">
      <section
        id="home"
        className="relative min-h-[100svh] min-h-[720px] w-full overflow-hidden flex flex-col justify-between bg-bg"
      >
        {/* Faint grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern z-0" aria-hidden="true" />

        {/* Soft glow behind head */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/25 blur-[130px] z-[1]"
        />

        {/* ═══════════════════════════════════════════════════════════
            LAYER 1 (z-10) — SOLID SHASHWAT, behind the photo
            Outer letters show as bright solid white against dark bg.
            Middle letters [3,4] are hidden by the photo above them.
            ═══════════════════════════════════════════════════════════ */}
        <h1
          aria-label="Shashwat"
          className="absolute left-0 right-0 z-10 w-full px-[2vw] flex justify-between select-none pointer-events-none font-serif font-black uppercase leading-none"
          style={{
            top: '52%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(56px, 15vw, 280px)',
            color: 'var(--text)',
          }}
        >
          {content.hero.letters.map((letter, idx) => (
            <span
              key={idx}
              className="inline-block animate-hero-letter"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* ═══════════════════════════════════════════════════════════
            LAYER 2 (z-20) — Photo, centered, anchored to bottom
            Drawn OVER the solid back name so the person's body
            conceals the middle letters.
            ═══════════════════════════════════════════════════════════ */}
        <div
          className="absolute bottom-0 left-1/2 z-20 pointer-events-none flex justify-center items-end"
          style={{
            transform: `translate(calc(-50% + ${mouseOffset.x}px), ${mouseOffset.y}px)`,
            transition: 'transform 160ms cubic-bezier(0.2,0,0.2,1)',
          }}
        >
          {!photoError ? (
            <img
              src={content.personal.profilePhotoPath}
              alt="Shashwat, backend developer"
              width="1024"
              height="576"
              fetchpriority="high"
              loading="eager"
              onError={() => setPhotoError(true)}
              className={`select-none animate-hero-photo object-contain object-bottom ${
                content.hero.photoGrayscale ? 'grayscale contrast-105' : ''
              }`}
              style={{
                height: 'clamp(500px, 95vh, 980px)',
                width: 'auto',
                maxWidth: '72vw',
              }}
            />
          ) : (
            <div
              className="animate-hero-photo"
              style={{ height: 'clamp(500px,95vh,980px)', width: 'clamp(240px,40vw,560px)' }}
            />
          )}
        </div>

        {/* ═══════════════════════════════════════════════════════════
            LAYER 3 (z-30) — Outline-only for letters [3,4]
            Drawn OVER the photo. Only the letters whose index is in
            heroOutlineLetters are visible (outline style). Others
            are invisible — the solid z-10 layer shows through where
            the photo doesn't cover.
            ═══════════════════════════════════════════════════════════ */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 z-30 w-full px-[2vw] flex justify-between select-none pointer-events-none font-serif font-black uppercase leading-none"
          style={{
            top: '52%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(56px, 15vw, 280px)',
          }}
        >
          {content.hero.letters.map((letter, idx) => {
            const isOutline = content.hero.outlineLetters.includes(idx);
            return (
              <span
                key={idx}
                className={`inline-block animate-hero-letter ${isOutline ? 'text-stroke-outline' : 'invisible'}`}
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {letter}
              </span>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════════════
            LAYER 4 (z-40) — Text blocks
            ═══════════════════════════════════════════════════════════ */}

        {/* Top-left chip */}
        <div className="relative z-40 mx-auto w-full max-w-[1200px] px-5 sm:px-10 pt-6 sm:pt-8 flex justify-between items-start pointer-events-none">
          <div className="animate-hero-block pointer-events-auto">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted bg-surface/80 backdrop-blur-md border border-border px-3.5 py-1.5 rounded-chip shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              {content.hero.locationChip}
            </span>
          </div>
        </div>

        {/* Bottom: tagline (left) + bio / buttons / socials (right) */}
        <div className="relative z-40 mx-auto w-full max-w-[1200px] px-5 sm:px-10 pb-10 sm:pb-14 pointer-events-none">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pt-48 lg:pt-0">

            {/* Bottom-left tagline */}
            <div className="animate-hero-block pointer-events-auto max-w-xs">
              <h2
                className="font-serif font-medium text-text leading-[1.15] tracking-tight"
                style={{
                  fontSize: 'clamp(28px, 3.6vw, 56px)',
                  textShadow: '0 2px 20px rgba(0,0,0,0.6)',
                }}
              >
                {content.hero.tagline[0]}
                <br />
                {content.hero.tagline[1]}
              </h2>
            </div>

            {/* Bottom-right bio + pills + socials */}
            <div className="animate-hero-block pointer-events-auto flex flex-col items-start lg:items-end space-y-4 max-w-sm">
              <p
                className="font-sans text-base leading-[1.6] text-text lg:text-right"
                style={{ textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}
              >
                {content.hero.bio}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={content.hero.buttons.resumeUrl}
                  download="Shashwat_Resume.pdf"
                  className="group inline-flex min-h-[44px] items-center justify-center sm:justify-start gap-3 rounded-pill bg-text text-bg px-4 sm:px-5 py-2.5 font-sans font-medium text-sm transition-all duration-150 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bg text-text transition-transform duration-150 group-hover:translate-y-0.5">
                    <ArrowDown className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                  <span>{content.hero.buttons.resume}</span>
                </a>
                <a
                  href={content.hero.buttons.projectsAnchor}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-pill border border-border bg-surface/50 backdrop-blur-sm px-5 py-2.5 font-sans font-medium text-sm text-text hover:border-accent hover:text-accent transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>{content.hero.buttons.projects}</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                {content.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 backdrop-blur-sm text-muted hover:border-accent hover:text-accent transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Band */}
      <div className="w-full bg-band py-10 sm:py-14 md:py-20 border-y border-border overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10 text-center">
          <h2
            className="font-serif font-extrabold uppercase tracking-tight text-[#ECEEF8] leading-[1.1] whitespace-nowrap"
            style={{ fontSize: 'clamp(28px, 6vw, 120px)' }}
          >
            <span>{content.hero.statementBand.text}</span>{' '}
            <span className="text-band-accent">{content.hero.statementBand.accentWord}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
