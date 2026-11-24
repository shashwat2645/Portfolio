import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { ClosingCard } from './components/ClosingCard';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-on-accent font-sans">
      {/* Skip-to-content link for keyboard/screen reader users */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent focus:font-semibold focus:text-sm focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Blurred Navbar */}
      <Navbar />

      <main id="content" role="main" aria-label="Portfolio content">
        {/* STAGE 2: Hero + Statement Band (#home) */}
        <Hero />

        {/* STAGE 2: About (#about) */}
        <About />

        {/* STAGE 3: Skills (#skills) */}
        <Skills />

        {/* STAGE 3: Projects (#projects) */}
        <Projects />

        {/* STAGE 4: Education (#education) */}
        <Education />

        {/* STAGE 4: Certifications (#certifications) */}
        <Certifications />

        {/* STAGE 4: Achievements (#achievements) */}
        <Achievements />

        {/* STAGE 5: Contact (#contact) */}
        <Contact />

        {/* STAGE 5: Closing Glass Card */}
        <ClosingCard />
      </main>

      {/* STAGE 5: Slim Footer + Floating Back-to-Top */}
      <Footer />
    </div>
  );
}
