import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-primary min-h-screen text-secondary font-sans selection:bg-highlight selection:text-primary">
      <Hero />
      <Stats />
      <Work />
      <About />
      <Contact />
    </main>
  );
}

export default App;
