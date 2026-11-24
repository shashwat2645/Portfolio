import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { content } from '../data/content';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // IntersectionObserver to highlight active anchor link
  useEffect(() => {
    const sectionIds = content.navLinks.map((item) => item.href.replace('#', ''));
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href.replace('#', ''));
  };

  return (
    <header className="sticky top-0 z-50 h-[72px] w-full border-b border-border bg-bg/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 sm:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
          aria-label="Shashwat - Home"
        >
          <span className="font-heading text-xl font-bold tracking-tight text-text group-hover:text-accent transition-colors">
            {content.personal.firstName}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
          {content.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md ${
                  isActive ? 'text-accent font-semibold' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
                {isActive && <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-accent transition-all duration-200" />}
              </a>
            );
          })}
        </nav>

        {/* Right: Resume + hamburger (no theme toggle) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href={content.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-11 items-center gap-2 rounded-button bg-surface2 border border-border px-4 text-sm font-medium text-text hover:border-accent hover:text-accent transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
          >
            <FileText className="h-4 w-4 text-accent" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation drawer"
            className="flex lg:hidden h-11 w-11 items-center justify-center rounded-button border border-border bg-surface text-text hover:border-accent transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-text" /> : <Menu className="h-5 w-5 text-text" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-bg/95 backdrop-blur-xl border-b border-border flex flex-col justify-between overflow-y-auto p-6 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="flex flex-col space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-muted px-3 py-1">Navigation</span>
            {content.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`flex min-h-[44px] items-center justify-between rounded-button px-4 py-2 text-base font-medium transition-all ${
                    isActive ? 'bg-surface2 text-accent font-semibold border border-border' : 'text-text hover:bg-surface hover:text-accent'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-accent" />}
                </a>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3">
            <a
              href={content.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-button bg-accent px-4 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FileText className="h-4 w-4" />
              <span>View Resume (PDF)</span>
            </a>
            <p className="font-mono text-xs text-muted text-center pt-2">{content.personal.locationChip}</p>
          </div>
        </div>
      )}
    </header>
  );
}
