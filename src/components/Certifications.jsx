import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionHeader } from './SectionHeader';
import { content } from '../data/content';
import { ExternalLink, CheckCircle2, Award } from 'lucide-react';

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="border-b border-border">
      <SectionHeader
        eyebrow={content.certifications.eyebrow}
        headingRegular={content.certifications.heading.regular}
        headingGradient={content.certifications.heading.gradient}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.certifications.items.map((cert) => {
          const hasVerifyLink = cert.verifyUrl && !cert.verifyUrl.startsWith('TODO');

          return (
            <div
              key={cert.id}
              className="card-lift flex flex-col justify-between rounded-card border border-border bg-surface p-6 sm:p-7 shadow-sm transition-all duration-150"
            >
              <div>
                {/* Issuer + year */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-medium px-2.5 py-0.5 rounded-full bg-surface2 border border-border text-muted">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-text tracking-tight mb-4">
                  {cert.title}
                </h3>
              </div>

              {/* Footer: verify link, certId, or placeholder */}
              <div className="pt-4 border-t border-border/50 mt-auto">
                {hasVerifyLink ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    <span>Verify credential</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : cert.certId ? (
                  <span className="font-mono text-xs text-muted flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-ok" />
                    <span>Cert ID: {cert.certId}</span>
                  </span>
                ) : (
                  <span className="font-mono text-xs text-muted flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-ok" />
                    <span>Credential verified</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
