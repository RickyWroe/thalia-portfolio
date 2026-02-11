import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';

const Stats = lazy(() => import('./components/Stats'));
const Work = lazy(() => import('./components/Work'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'stats', label: 'Results' },
      { id: 'work', label: 'Work' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-18% 0px -18% 0px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <main className="bg-background min-h-screen text-secondary font-sans selection:bg-highlight selection:text-secondary pb-28">
        <div id="hero" className={`journey-section ${activeSection === 'hero' ? 'is-active' : ''}`}>
          <Hero />
        </div>

        <div id="stats" className={`journey-section ${activeSection === 'stats' ? 'is-active' : ''}`}>
          <Suspense fallback={<section className="h-20" />}>
            <Stats />
          </Suspense>
        </div>

        <div id="work" className={`journey-section ${activeSection === 'work' ? 'is-active' : ''}`}>
          <Suspense fallback={<section className="h-20" />}>
            <Work />
          </Suspense>
        </div>

        <div id="about" className={`journey-section ${activeSection === 'about' ? 'is-active' : ''}`}>
          <Suspense fallback={<section className="h-20" />}>
            <About />
          </Suspense>
        </div>

        <div id="contact" className={`journey-section ${activeSection === 'contact' ? 'is-active' : ''}`}>
          <Suspense fallback={<section className="h-20" />}>
            <Contact />
          </Suspense>
        </div>
      </main>

      <nav className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 rounded-xl bg-white/85 border border-primary/25 shadow-lg backdrop-blur px-2 py-3">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className={`h-2.5 rounded-full transition-all ${activeSection === section.id ? 'w-8 bg-primary' : 'w-2.5 bg-primary/35 hover:bg-primary/55'
              }`}
            aria-label={`Go to ${section.label}`}
            title={section.label}
          />
        ))}
      </nav>

      <a
        href="mailto:thalia.venous@gmail.com?subject=UGC-Proposal"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 inline-flex items-center justify-center rounded-full bg-primary text-white px-7 py-3 font-semibold shadow-[0_12px_24px_rgba(225,166,180,0.45)] hover:opacity-90 transition-opacity"
      >
        Hire me
      </a>
    </>
  );
}

export default App;
