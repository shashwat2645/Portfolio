import React, { useState, useEffect } from 'react';
import { content } from '../data/content';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Floating back-to-top button after 600px of scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getFooterIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <Github className="h-4 w-4" />;
      case 'Linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'Twitter':
        return <Twitter className="h-4 w-4" />;
      case 'Mail':
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* 
        Footer: ONE slim row.
        Left: "(c) {current year} Shashwat. All rights reserved."
        Right: "Got a reason to talk?" + GitHub, LinkedIn, X, Mail icon links.
        Mobile: stacked and centred. Nothing else.
      */}
      <footer className="w-full border-t border-border bg-bg py-8 transition-colors">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Left: Copyright */}
          <p className="font-mono text-xs text-muted">
            {content.footer.copyright}
          </p>

          {/* Right: "Got a reason to talk?" + Icon links */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-mono text-xs text-muted">
              {content.footer.reasonToTalk}
            </span>

            <div className="flex items-center gap-2">
              {content.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.id === 'email' ? undefined : '_blank'}
                  rel={social.id === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-button border border-border bg-surface text-muted hover:border-accent hover:text-accent transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {getFooterIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* 
        Floating Back-to-Top Button
        Appears after 600px of scroll
      */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/90 backdrop-blur-md text-text shadow-lg hover:border-accent hover:text-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent animate-in fade-in zoom-in-95 duration-200"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
