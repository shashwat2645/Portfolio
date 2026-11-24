import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SectionHeader } from './SectionHeader';
import { content } from '../data/content';
import {
  Mail, Linkedin, Github, Twitter, ArrowUpRight, Send, CheckCircle2
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Mail':     return <Mail     className="h-5 w-5 text-accent" />;
      case 'Linkedin': return <Linkedin className="h-5 w-5 text-accent" />;
      case 'Github':   return <Github   className="h-5 w-5 text-accent" />;
      case 'Twitter':  return <Twitter  className="h-5 w-5 text-accent" />;
      default:         return <ArrowUpRight className="h-5 w-5 text-accent" />;
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim())    errors.name    = 'Please provide your name';
    if (!formData.email.trim())   errors.email   = 'Please provide your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email';
    if (!formData.subject.trim()) errors.subject = 'Please add a subject';
    if (!formData.message.trim()) errors.message = 'Please include a message';
    else if (formData.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
    return errors;
  };

  const encode = (data) =>
    Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) { setFieldErrors(errors); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: open mailto (happens on localhost / non-Netlify)
        const to  = 'shashwats2604@gmail.com';
        const sub = encodeURIComponent(`[Portfolio] ${formData.subject}`);
        const bod = encodeURIComponent(`Hi Shashwat,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`);
        window.location.href = `mailto:${to}?subject=${sub}&body=${bod}`;
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      // Network error — silent mailto fallback
      const to  = 'shashwats2604@gmail.com';
      const sub = encodeURIComponent(`[Portfolio] ${formData.subject}`);
      const bod = encodeURIComponent(`Hi Shashwat,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`);
      window.location.href = `mailto:${to}?subject=${sub}&body=${bod}`;
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="border-b border-border">
      <SectionHeader
        eyebrow={content.contact.eyebrow}
        headingRegular={content.contact.heading.regular}
        headingGradient={content.contact.heading.gradient}
        description={content.contact.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Left: social link rows */}
        <div className="lg:col-span-5 space-y-4">
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-2">Direct Reach &amp; Profiles</p>
          {content.socials.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.id === 'email' ? '_self' : '_blank'}
              rel={channel.id === 'email' ? undefined : 'noopener noreferrer'}
              className="card-lift group rounded-card border border-border bg-surface p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface2 border border-border group-hover:border-accent/50 transition-colors duration-150">
                  {getSocialIcon(channel.icon)}
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted mb-0.5">{channel.label}</p>
                  <p className="font-sans text-sm font-medium text-text truncate">{channel.value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-accent transition-colors duration-150 shrink-0" />
            </a>
          ))}
        </div>

        {/* Right: contact form */}
        <div className="lg:col-span-7">
          <div className="rounded-card border border-border bg-surface p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 border border-accent/30">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </span>
                <p className="font-serif font-semibold text-xl text-text">Message sent!</p>
                <p className="font-sans text-sm text-muted max-w-xs">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-wider text-accent hover:underline mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                noValidate
                className="space-y-5"
              >
                {/* Hidden fields required by Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><input name="bot-field" /></p>

                <p className="font-mono text-xs uppercase tracking-wider text-muted mb-1">Send a message</p>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="c-name" className="font-mono text-xs uppercase tracking-wider text-muted block">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="c-name" type="text" name="name" required
                      placeholder="Your name"
                      value={formData.name} onChange={handleChange}
                      className={`w-full rounded-button border bg-surface2 px-4 py-3 font-sans text-sm text-text placeholder-muted/60 transition focus:outline-none focus:ring-2 focus:ring-accent ${fieldErrors.name ? 'border-red-500/60' : 'border-border focus:border-accent'}`}
                    />
                    {fieldErrors.name && <p className="font-mono text-xs text-red-400 pt-0.5">{fieldErrors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="c-email" className="font-mono text-xs uppercase tracking-wider text-muted block">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="c-email" type="email" name="email" required
                      placeholder="you@email.com"
                      value={formData.email} onChange={handleChange}
                      className={`w-full rounded-button border bg-surface2 px-4 py-3 font-sans text-sm text-text placeholder-muted/60 transition focus:outline-none focus:ring-2 focus:ring-accent ${fieldErrors.email ? 'border-red-500/60' : 'border-border focus:border-accent'}`}
                    />
                    {fieldErrors.email && <p className="font-mono text-xs text-red-400 pt-0.5">{fieldErrors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="c-subject" className="font-mono text-xs uppercase tracking-wider text-muted block">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    id="c-subject" type="text" name="subject" required
                    placeholder="Backend Engineering / Project discussion"
                    value={formData.subject} onChange={handleChange}
                    className={`w-full rounded-button border bg-surface2 px-4 py-3 font-sans text-sm text-text placeholder-muted/60 transition focus:outline-none focus:ring-2 focus:ring-accent ${fieldErrors.subject ? 'border-red-500/60' : 'border-border focus:border-accent'}`}
                  />
                  {fieldErrors.subject && <p className="font-mono text-xs text-red-400 pt-0.5">{fieldErrors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="c-message" className="font-mono text-xs uppercase tracking-wider text-muted block">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="c-message" name="message" rows="5" required
                    placeholder="Tell me about your project, backend requirements, or role..."
                    value={formData.message} onChange={handleChange}
                    className={`w-full rounded-button border bg-surface2 px-4 py-3 font-sans text-sm text-text placeholder-muted/60 transition focus:outline-none focus:ring-2 focus:ring-accent resize-y ${fieldErrors.message ? 'border-red-500/60' : 'border-border focus:border-accent'}`}
                  />
                  {fieldErrors.message && <p className="font-mono text-xs text-red-400 pt-0.5">{fieldErrors.message}</p>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button bg-accent px-7 py-3 text-sm font-semibold text-on-accent transition-all duration-150 hover:opacity-95 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? 'Sending…' : 'Send message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
