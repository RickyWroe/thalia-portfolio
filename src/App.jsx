import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';

const Stats = lazy(() => import('./components/Stats'));
const Work = lazy(() => import('./components/Work'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <main className="bg-background min-h-screen text-secondary font-sans selection:bg-highlight selection:text-secondary">
      <Hero />
      <Suspense fallback={<section className="h-20" />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<section className="h-20" />}>
        <Work />
      </Suspense>
      <Suspense fallback={<section className="h-20" />}>
        <About />
      </Suspense>
      <Suspense fallback={<section className="h-20" />}>
        <Contact />
      </Suspense>
    </main>
  );
}

export default App;
