import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import { Achievements, Certifications } from './components/SimpleListSection';
import { Education, Experience } from './components/Timeline';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
